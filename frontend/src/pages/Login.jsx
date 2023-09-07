import { useState } from "react"


const Login = () => {

  const [formData, setFormData] = useState({
    email:'',
    password:''
  })

  const handleInputChange = e =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  return  <section className="px-5 lg:px-0">
    <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
    <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10px">Hola! <span
    className="text-primaryColor" > Bienvenido</span> De Nuevo</h3>
    <form className="py-4 md:py-0">
    <div className="mb-5">
      <input type="email" placeholder="Escribe tu email" name="email" 
      value={formData.email}
      onChange={handleInputChange}/>
    </div>
    </form>
    </div>
  </section>
  
}

export default Login

