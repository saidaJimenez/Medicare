import React from "react";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3
          className="text-[20px] leading-[30px] 
        text-headingColor font-semibold flex items-center gap-2"
        >
          Acerca de
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Luis Perez{" "}
          </span>
        </h3>
        <p className="text__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          debitis maiores enim libero voluptatum in recusandae error deleniti
          commodi a ipsum ipsa at, cum unde ut perspiciatis, fugit explicabo
          mollitia minima porro nihil eligendi iste odit cumque? Consequatur
          quas ad ratione mollitia ut iusto, iste in veritatis rerum id quod!
        </p>
      </div>

      <div className="mt-12">
        <h3  className="text-[20px] leading-[30px] 
        text-headingColor font-semibold ">
            Educación
        </h3>
        <ul className="pt-4 md:p-5">
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items">
                <div>
                    <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">23 June, 2008</span>
                <p>PDH en Cirujia</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
