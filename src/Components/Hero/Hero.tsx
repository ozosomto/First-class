import React from 'react';
// import HeroImage from '../../assets/Images/HeroImage';

const Hero : React.FC = () => {
    return (
        <section
          className="relative h-screen bg-cover bg-no-repeat bg-center text-black "
          style={{ backgroundImage: `url(/new_img/FirstClass-Transfers.png)`, 
                 backgroundRepeat: 'no-repeat',
                 backgroundSize: 'cover'
                  }}
               
        >
          {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
    
          <div className="relative z-10 h-full flex flex-col justify-center px-8 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight pb-10 ">
              Rent Luxury,<br />Drive Excellence
            </h1>
            <button className="bg-amber-600 text-black px-6 mb-25 py-3 rounded-full text-sm font-semibold w-max hover:bg-lime-500 transition">
              <a href="#">
              Browse Fleet →
              </a>
            </button>
            {/* <p className="mt-4 text-sm text-amber-600">Unleash Your Luxury Experience</p> */}
          </div>
        </section>
      );
};

export default Hero;

