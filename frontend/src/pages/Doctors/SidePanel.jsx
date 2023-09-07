

const SidePanel = () => {
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
      <div className='flex items-center justify-between'>
        <p className='text__para mt-0 font-semibold'>Precios</p>
        <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8
        text-headinColor font-bold'>50 €</span>
      </div>
      <div className='mt-[30px]'>
      <p className='text__para mt-0 font-semibold text-headingColor'>
        Horario
      </p>
      <ul className='mt-3'>
        <li className='flex items-center justify-between mb-2'>
          <p className='text-[15px] leading-6 text-textColor font-semibold'>Sábado</p>
          <p className='text-[15px] leading-6 text-textColor font-semibold'>9:00 - 16:00</p>
        </li>
        <li className='flex items-center justify-between mb-2'>
          <p className='text-[15px] leading-6 text-textColor font-semibold'>Jueves</p>
          <p className='text-[15px] leading-6 text-textColor font-semibold'>9:00 - 16:00</p>
        </li>
        <li className='flex items-center justify-between mb-2'>
          <p className='text-[15px] leading-6 text-textColor font-semibold'>Miércoles</p>
          <p className='text-[15px] leading-6 text-textColor font-semibold'>13:00 - 20:00</p>
        </li>
      </ul>
      </div>

      <button className='btn px-2 w-full rounded-md'>Reservar cita</button>

    </div>
  )
}

export default SidePanel
