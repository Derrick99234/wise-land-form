import { useState } from "react"
import FormInput from "./components/Inputs/FormInput"
import busLogo from './assets/bus.jpg'
import RegisterationSuccessPopUp from "./components/PopUp/RegisterationSuccessPopUp";

function App() {

  interface FormType {
    fullNames: string;
    phone: string;
    pickUpPoint: string;
    email: string;
    comment: string
  }

  const [ form, setForm ] = useState<FormType>({
    fullNames: '',
    phone: '',
    email: '',
    pickUpPoint: '',
    comment: ''
  })

  const [ successPopUp, setSuccessPopUp ] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const response = await fetch('https://wise-land-form-api.onrender.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })

    await response.json()
    setForm({
      fullNames: '',
      phone: '',
      email: '',
      pickUpPoint: '',
      comment: ''
    })
    setSuccessPopUp(true)
  }

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
          <form className="max-w-md w-full bg-black/5 p-5 px-8 mx-4" onSubmit={(e) => handleSubmit(e)}>
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
              label="Email" 
              onChange={(e) => handleChange(e)} 
              placeholder="Enter your email address" 
              type="email" 
              value={form.email}
              name="email"
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
              value={form.pickUpPoint}
              name="pickUpPoint"
            />
            <FormInput 
              label="Comment" 
              onChange={(e) => handleChange(e)} 
              placeholder="Enter your comment" 
              type="textarea" 
              value={form.comment}
              name="comment"
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
      {
        successPopUp && (
          <RegisterationSuccessPopUp setSuccessPopUp={setSuccessPopUp} />
        )
      }
    </>
  )
}

export default App
