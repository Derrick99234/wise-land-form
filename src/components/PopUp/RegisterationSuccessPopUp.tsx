import * as React from "react"

function RegisterationSuccessPopUp({ setSuccessPopUp }: { setSuccessPopUp: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center mx-4">
        <div className="bg-white p-5 rounded-lg">
            <h2 className="text-2xl font-bold text-slate-900">Registration Successful</h2>
            <p className="text-slate-800">Thank you for registering. We will get back to you shortly.</p>
            <button onClick={() => setSuccessPopUp(false)} className="bg-slate-900 text-white py-2 px-5 mt-5">Close</button>
        </div>
    </div>
  )
}

export default RegisterationSuccessPopUp
