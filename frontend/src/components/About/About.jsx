import aboutImg from "../../assets/images/about.png"
import aboutCardImg from "../../assets/images/about-card.png"
import { Link } from "react-router-dom"
const About = () => {
  return <section>
    <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] cl:gap-0 flex-col lg:flex-row">
            {/*=============about img ======== */}
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                <img src={aboutImg} alt=""/>
                <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                    <img src={aboutCardImg} alt=""/>
                </div>
            </div>
            {/*============ about content ========== */}
            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                <h2 className="heading">Orgullo de ser uno de las mejores naciones</h2>
                <p className="text__para">
                Durante 30 años consecutivos, España & world Report nos ha reconocido como uno de los mejores hospitales públicos del país y número 1 de Canarias.
                </p>
                <p className="text__para mt-[30px]">
                Lo mejor de nosotros es algo por lo que nos esforzamos cada día, cuidando a nuestros pacientes, no miramos hacia atrá sino a lo que podemos hacer mañana. Proporcionando lo mejor para nuestros pacientes.
                </p>
                <Link to='/to'>
                    <button className="btn">Más Información</button>
                </Link>
            </div>
        </div>
    </div>
  </section>
}

export default About
