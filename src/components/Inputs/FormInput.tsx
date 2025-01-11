import { ChangeEvent } from 'react'

interface FormInputProps {
    type: string;
    placeholder: string;
    value: string | number;
    onChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => void;
    label: string
    name: string
}

function FormInput({ type, placeholder, value, onChange, label, name }: FormInputProps) {
  return (
    <>
      <label htmlFor={label} className='block font-semibold'>{label}</label>
      {
        type === 'textarea' ? <textarea 
          placeholder={placeholder}
          value={value} 
          onChange={onChange}
          name={name}
          className='w-full border px-5 pt-2 h-40 rounded-md mt-2 mb-4 outline-none'
        />
        : type === 'select' ? 
        <select className='w-full border outline-none px-4 text-sm py-2 rounded-md mt-2 mb-4 hover:border-gray-400 text-gray-700' name={name} onChange={onChange}>
          <option value="sangotedo">Sangotedo</option>
          <option value="abraham">Abraham Adesunya</option>
          <option value="ajah">Ajah</option>
          <option value="chevron">Chevron</option>
          <option value="agungi">Agungi</option>
        </select>
        :
        <input 
          type={type} 
          name={name}
          placeholder={placeholder} 
          value={value} 
          onChange={onChange}
          className='w-full border outline-none px-4 text-sm py-2 rounded-md mt-2 mb-4'
        />
      }
    </>
  )
}

export default FormInput
