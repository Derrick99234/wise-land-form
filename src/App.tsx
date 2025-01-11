import { useState } from "react"
import FormInput from "./components/Inputs/FormInput"
import busLogo from './assets/join-the-bus.jpg'

function App() {

  const [ form, setForm ] = useState({
    fullNames: '',
    number: 0,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <main className="">
      <div className="flex justify-center items-center min-h-screen gap-10 flex-wrap">
        <img
          src={busLogo}
          className="max-w-md w-full"
        />
        <form className="max-w-md w-full bg-black/5 p-5 px-8 mx-4">
          <h2 className="text-3xl font-bold uppercase text-slate-900 mb-3">Join Bus to work</h2>
          <FormInput 
            label="Full Names" 
            onChange={(e) => handleChange(e)} 
            placeholder="Enter your full name" 
            type="text" 
            value={form.fullNames}
          />
          <FormInput 
            label="Number" 
            onChange={(e) => handleChange(e)} 
            placeholder="Enter your phone number" 
            type="number" 
            value={form.number}
          />
          <FormInput 
            label="Closest pickup point" 
            onChange={(e) => handleChange(e)} 
            placeholder="Enter your closest pickup point" 
            type="text" 
            value={form.fullNames}
          />
          <FormInput 
            label="Closest drop off point " 
            onChange={(e) => handleChange(e)} 
            placeholder="Enter your closest drop off point " 
            type="text" 
            value={form.fullNames}
          />
          <FormInput 
            label="Comments" 
            onChange={(e) => handleChange(e)} 
            placeholder="Enter your comments" 
            type="textarea" 
            value={form.fullNames}
          />
          <button className="w-full py-2 bg-slate-900 text-white">Submit</button>
        </form>
      </div>
    </main>
  )
}

export default App
