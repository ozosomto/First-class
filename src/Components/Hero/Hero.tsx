// src/components/Hero.tsx
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';


const Hero: React.FC = () => {
  const options = {
    type: 'loop',
     gap: "1rem",
    autoplay: true,
    interval: 5000,
    pauseOnHover: false,
    arrows: false,
    pagination: true,
    height: '100vh',
  };

  return (
    <Splide options={options}>

      {/* Slide 1 */}
      <SplideSlide>
        <section
          className="h-screen bg-cover relative shadow-lg animate-pulse bg-center flex items-center pl-8"
          style={{ backgroundImage: `url(/carbenz-1.png)` }}
        >
          
          <div className="flex justify-between gap-50">
            <h1 className=" text-white space-y-6 max-w-xl text-4xl md:text-6xl font-bold leading-tight">
              LUXURY DRIVE FROM,<br />NICOSIA TO LARNACA
            </h1>
            <div className="space-x-4 ml-15 mt-60">
              <a
                href="#"
                className="bg-amber-600 hover:bg-lime-500 text-white px-5 py-3 rounded-full font-semibold text-sm transition"
              >
                Online Reservation
              </a>
              <a
                href="#"
                className="bg-amber-600 hover:bg-lime-500 text-white px-5 py-3 rounded-full font-semibold text-sm transition"
              >
                WhatsApp Reservation
              </a>
            </div>
          </div>
          
        </section>
      </SplideSlide>

      {/* Slide 2 */}
      <SplideSlide>
        <section
          className="h-screen relative shadow-lg animate-pulse bg-cover bg-center flex items-center px-8"
          style={{ backgroundImage: `url(/carbenz-2.png)` }}
        >
          <div className="flex justify-between gap-50">
            <div>
            <h1 className="text-white space-y-6 max-w-xl text-4xl md:text-6xl font-bold leading-tight">
              DISCOVER COMFORT,<br />STYLE & PERFORMANCE
            </h1>
             <p className='font-light text-2xl text-white'>
              Same luxury, low price
            </p>
            </div>
            <div className="space-x-4 ml-25 mt-60">
              <a
                href="#"
                className="bg-amber-600 hover:bg-lime-500 text-white px-5 py-3 rounded-full font-semibold text-sm transition"
              >
                 Online Reservation
              </a>
              <a
                href="#"
                className="bg-amber-600 hover:bg-lime-500 text-white px-5 py-3 rounded-full font-semibold text-sm transition"
              >
                WhatsApp Reservation
              </a>
            </div>
          </div>
        </section>
      </SplideSlide>
    </Splide>
  );
};

export default Hero;

 

  // return (
  //   <div>
  //     <Splide
  //       options={options}
  //       aria-labelledby="autoplay-example-heading"
  //       hasTrack={false}
  //     >
  //       <div style={{ position: "relative" }}>
  //         <SplideTrack>
  //           <SplideSlide>
  //             <div
  //               className=" relative bg-cover  w-full h-full flex flex-col justify-center items-center xl:px-32 px-10"
  //               style={{
  //                 backgroundImage: "url('/carbenz-1.png')",
  //               }}
  //             >
  //               {/* <div class="absolute inset-0 bg-[#16243a]/70 "></div> */}
  //               <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,27,43,0.8)] via-transparent to-[rgba(11,27,43,0.8)] from-[30%] via-[50%] to-[80%]"></div>

  //               <div className="z-10 text-white  flex  gap-2 xl:gap-5 flex-col ">
  //                 <p className=" font-bold text-nowrap text-3xl xl:text-5xl text-[#159d47]  uppercase ">
  //                   Global Leader
  //                 </p>
  //                 <p className="  xl:w-2/5   text-lg">
  //                   As a Quality Assured organization, we are ISO 9001:2015
  //                   certified, delivering world-class training solutions
  //                   tailored to the oil & gas, marine, and construction
  //                   industries. Our commitment to excellence ensures the highest
  //                   standards of professional development and operational
  //                   integrity.
  //                 </p>

  //                 <div className="">
  //                   <a
  //                     href={"https://wa.me/+2348161637797"}
  //                     className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#101e2c] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
  //                   >
  //                     <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#101e2c] group-hover:h-full"></span>
  //                     <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
  //                       <svg
  //                         className="w-5 h-5 text-green-400"
  //                         fill="none"
  //                         stroke="currentColor"
  //                         viewBox="0 0 24 24"
  //                         xmlns="http://www.w3.org/2000/svg"
  //                       >
  //                         <path
  //                           stroke-linecap="round"
  //                           stroke-linejoin="round"
  //                           stroke-width="2"
  //                           d="M14 5l7 7m0 0l-7 7m7-7H3"
  //                         ></path>
  //                       </svg>
  //                     </span>
  //                     <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
  //                       <img src="/new_img/svg/whatsapp.svg" className="w-5" />
  //                     </span>
  //                     <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
  //                       Get In Touch
  //                     </span>
  //                   </a>
  //                 </div>
  //               </div>
  //             </div>
  //           </SplideSlide>
  //           <SplideSlide>
  //             <div
  //               className=" relative bg-cover  w-full h-full flex flex-col justify-center items-center xl:px-32 px-10"
  //               style={{
  //                 backgroundImage: "url('/new_img/crane.jpg')",
  //               }}
  //             >
  //               {/* <div class="absolute inset-0 bg-[#16243a]/70 "></div> */}
  //               <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,27,43,0.8)] via-transparent to-[rgba(11,27,43,0.8)] from-[30%] via-[50%] to-[80%]"></div>

  //               <div className="z-10 text-white  flex  gap-2 xl:gap-5 flex-col  ">
  //                 <p className=" font-bold text-nowrap text-3xl xl:text-5xl text-[#159d47]  uppercase  ">
  //                   Veteran Asset <br />
  //                   Perfection Assurance
  //                 </p>
  //                 <p className="  xl:w-2/5   text-lg ">
  //                   As a Quality Assured organization, we are ISO 9001:2015
  //                   certified, delivering world-class training solutions
  //                   tailored to the oil & gas, marine, and construction
  //                   industries. Our commitment to excellence ensures the highest
  //                   standards of professional development and operational
  //                   integrity.
  //                 </p>
  //                 <div className="">
  //                   <a
  //                     href={"https://wa.me/+2348161637797"}
  //                     className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#101e2c] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
  //                   >
  //                     <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#101e2c] group-hover:h-full"></span>
  //                     <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
  //                       <svg
  //                         className="w-5 h-5 text-green-400"
  //                         fill="none"
  //                         stroke="currentColor"
  //                         viewBox="0 0 24 24"
  //                         xmlns="http://www.w3.org/2000/svg"
  //                       >
  //                         <path
  //                           stroke-linecap="round"
  //                           stroke-linejoin="round"
  //                           stroke-width="2"
  //                           d="M14 5l7 7m0 0l-7 7m7-7H3"
  //                         ></path>
  //                       </svg>
  //                     </span>
  //                     <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
  //                       <img src="/new_img/svg/whatsapp.svg" className="w-5" />
  //                     </span>
  //                     <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
  //                       Get In Touch
  //                     </span>
  //                   </a>
  //                 </div>
  //               </div>
  //             </div>
  //           </SplideSlide>
            
  //         </SplideTrack>
  //       </div>

  //       <div className="splide__progress">
  //         <div className="splide__progress__bar" />
  //       </div>

  //       {/* <button className="splide__toggle">
  //         <span className="splide__toggle__play">Play</span>
  //         <span className="splide__toggle__pause">Pause</span>
  //       </button> */}
  //     </Splide>
  //   </div>
  // );




