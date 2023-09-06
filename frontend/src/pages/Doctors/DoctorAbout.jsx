import React from "react";
import { formateDate } from "../../utils/formateDate";

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
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                <div>
                    <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                    {formateDate("07-08-2010")} - {formateDate("09-13-2016")}
                      </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                  PDH en Cirujia</p>
                </div>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                  New Apollo Hospital, New York.</p>
            </li>
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                <div>
                    <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                      {formateDate("12-04-2010")} - {formateDate("09-12-2014")}
                      </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                  PDH en Cirujia</p>
                </div>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                  New Apollo Hospital, New York.</p>
            </li>
        </ul>
      </div>

      <div className="mt-12">

      </div>
    </div>
  );
};

export default DoctorAbout;
