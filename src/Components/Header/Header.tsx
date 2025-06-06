import React from "react";
// import "./style.css";


const Header : React.FC = () => {
  return (
    

    <header className="  w-full  bg-black flex justify-between items-center px-6   top-0 right-0 text-gray-400 z-10">
      <div className="text-2xl font-bold text-white">
        <img src="/new_img/FirstClass_Transfers_logo_final[1].png" alt="" className="w-2/4 md:w-30 " />
      </div>
      <nav className="flex gap-8 text-sm font-sans font-bold">
        <a href="fleet" 
           className="hover:text-green-400">
            FLEET
               </a>
        <a href="services"
           className="hover:text-green-400">
            SERVICES
              </a>
        <a href="https://firstclasstransfers.eu/index.php/pricing/" 
           className="hover:text-green-400">
            LOCATION
            </a>
        <a href="https://firstclasstransfers.eu/index.php/contact-us/" 
           className="hover:text-green-400">
            CONTACT
            </a>
      </nav>
      <button className="bg-amber-600 text-white font-serif text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-900 transition">
        Make a Reservation
      </button>
    </header>
  );
};

export default Header;

