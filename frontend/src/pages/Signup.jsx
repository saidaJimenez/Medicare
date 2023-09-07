import signupImg from "../assets/images/signup.gif";
import avatar from "../assets/images/doctor-img01.png"
import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {

  const [selectedFile,setSelectedFile] = useState(null)
  const [previewURL, setPreviewURL] = useState("")
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    photo:selectedFile,
    genero:'',
    role:'paciente'
  })

  const handleInputChange = e =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleFileInputChange = async (event) =>{
    const file = event.target.files[0]

    // usaremos cloudinary para poder subir fotos a la web
    console.log(file)
  }

  const submitHandler = async event =>{
    event.preventDefault()
  }

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* ========= img box ========= */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>

          {/* ========= sign up form ======= */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Crear una <span className="text-primaryColor">Cuenta</span>
            </h3>

            <form onSubmit={ submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Nombre y Apellidos"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
      focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
      placeholder:text-textColor  cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
      focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
      placeholder:text-textColor  cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
      focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
      placeholder:text-textColor  cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                <label htmlFor="" className="text-headingColor font-bold text-[16px] leading-7">
                  Eres:
                  <select name="role" 
                   value={formData.role}
                   onChange={handleInputChange}
                  className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3
                  focus:outline-none">
                    <option value="paciente">Paciente</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>
                <label  className="text-headingColor font-bold text-[16px] leading-7">
                  Genero
                  <select name="genero"
                   value={formData.genero}
                   onChange={handleInputChange}
                  className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3
                  focus:outline-none">
                    <option value="">Seleciona</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otros">Otros</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor
                flex items-center justify-center">

                  <img src={avatar} alt="" className="w-full rounded-full"/>

                </figure>

                <div className="relative w-[130px] h-[50px]">
                  <input 
                  type ="file" 
                  name = "photo"
                  id= "customFile"
                  onChange={ handleFileInputChange}
                  accept=".jpg,.png"
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />

                  <label htmlFor="customFile"
                  className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] 
                  text-[15px]
                  leading-6 overflow-hidden bg-[#0066ff46]
                   text-headingColor font-semibold rounded-lg truncate cursor-pointer">
                    Subir Foto
                  </label>
                </div>

              </div>
              <div className="mt-7">
        <button type="submit"
       className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
       > Crear cuenta
       </button>

      </div>

      <p className="mt-5 textColor text-center">
       Ya tengo cuenta <Link to='/login' className="text-primaryColor font-medium ml-1">Login</Link>
      </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
