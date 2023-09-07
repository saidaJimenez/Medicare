import signupImg from "../assets/images/signup.gif";

const Signup = () => {
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

            <form>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Nombre y Apellidos"
                  name="name"
                  value=""
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
                  value=""
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
                  value=""
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
      focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
      placeholder:text-textColor  cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                <label htmlFor="" className="text-headingColor font-bold text-[16px] leading-7">
                  Eres:
                  <select name="role" className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3
                  focus:outline-none">
                    <option value="paciente">Paciente</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>
                <label  className="text-headingColor font-bold text-[16px] leading-7">
                  Genero
                  <select name="genero" className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3
                  focus:outline-none">
                    <option value="">Seleciona</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otros">Otros</option>
                  </select>
                </label>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
