import { ChangeEvent } from 'react'

interface FormInputProps {
    type: string;
    placeholder: string;
    value: string | number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    label: string
}

function FormInput({ type, placeholder, value, onChange, label }: FormInputProps) {
  return (
    <>
      <label htmlFor={label} className='block font-semibold'>{label}</label>
      {
        type === 'textarea' ? <textarea 
          placeholder={placeholder}
          value={value} 
          className='w-full border px-5 pt-2 h-40 rounded-md mt-2 mb-4 outline-none'
        /> 
        :
      <input 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange}
        className='w-full border outline-none px-4 text-sm py-2 rounded-md mt-2 mb-4'
      />
      }
    </>
  )
}

// 1. Name 
// 2. Number
// 3. Closest pickup point 
// 4. Closest drop off point 
// 5. Comments

export default FormInput
