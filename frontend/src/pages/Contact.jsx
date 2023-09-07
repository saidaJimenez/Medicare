import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center"> Contacta con nosotros</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          ¿Tiene problemas técnicos ? ¿Quiere enviarnos comentarios para mejorar
          el servicio? Haganoslo saber
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="usario@gmail.com"
              className="form__input mt-1"
            />
          </div>
          <div>
            <label htmlFor="subject" className="form__label">
              Sujerencias
            </label>
            <input
              type="text"
              id="subject"
              placeholder="¿Que necesitas ?"
              className="form__input mt-1"
            />
          </div>
          <div className="sm-col-span-2">
            <label htmlFor="message" className="form__label">
              Dejanos tu Comentario
            </label>
            <textarea
              rows="6"
              type="email"
              id="massage"
              placeholder="Dejanos tu comentario"
              className="form__input mt-1"
            />
          </div>
          <button 
          type="submit"
          className="btn-rounded sm:w-fit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
