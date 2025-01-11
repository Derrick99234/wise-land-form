import { useState } from "react"
import FormInput from "./components/Inputs/FormInput"
import busLogo from './assets/bus.jpg'

function App() {

  interface FormType {
    fullNames: string;
    phone: string;
    pickupPoint: string;
    comments: string
  }

  const [ form, setForm ] = useState<FormType>({
    fullNames: '',
    phone: '',
    pickupPoint: '',
    comments: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <main className="">
        <div className="flex justify-center items-center min-h-screen gap-10 flex-wrap">
          <img
            src={busLogo}
            className="max-w-md w-full"
          />
          <form className="max-w-md w-full bg-black/5 p-5 px-8 mx-4">
            <h2 className="text-2xl font-bold uppercase text-slate-900 mb-3">Ride to Work for Free - Your Morning, Made Easy!</h2>
            <FormInput 
              label="Full Names" 
              onChange={(e) => handleChange(e)} 
              placeholder="Enter your full name" 
              type="text" 
              value={form.fullNames}
              name="fullNames"
            />
            <FormInput 
              label="Phone" 
              onChange={(e) => handleChange(e)} 
              placeholder="Enter your phone number" 
              type="number" 
              value={form.phone}
              name="phone"
            />
            <FormInput 
              label="Closest pickup point" 
              onChange={(e) => handleChange(e)} 
              placeholder="Enter your closest pickup point" 
              type="select" 
              value={form.pickupPoint}
              name="pickupPoint"
            />
            <FormInput 
              label="Comments" 
              onChange={(e) => handleChange(e)} 
              placeholder="Enter your comments" 
              type="textarea" 
              value={form.comments}
              name="comments"
            />
            <button className="w-full py-2 bg-slate-900 text-white">Submit</button>
          </form>
        </div>
      </main>
      <footer>
        <p className="text-center text-slate-900 py-5">
          © {new Date().getFullYear()}, All rights reserved | Sponsored by Prophet Isaiah{" "}
          <a href="https://macwealthfreestore.com/list/71b6e174e5" className="text-slate-800 underline font-semibold">Marc Wealth</a>
        </p>
      </footer>
    </>
  )
}

export default App
