import "./style.css";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import TodayIcon from '@mui/icons-material/Today';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EditNoteIcon from '@mui/icons-material/EditNote';


const Services : React.FC = () => {

      const [date, setDate] = useState('');
      const [time, setTime] = useState('');

    //   interface TransportCardProps {
    //        route: string;
    //        imageUrl: string;
    //        price: number;
    // }
    
    return (

        <div>
                 <div className="flex justify-between gap-6 mt-10 mx-8">
                  <div className="flex items-center bg-white rounded-xl shadow-md overflow-hidden w-[300px]">
                   <div className="flex flex-col items-center justify-center bg-gray-100 p-4 w-[400px]">
                     <h3 className="text-lg font-semibold text-center">Nicosia- <br /> Larnaca</h3>
                     <img src="/Mercedes-Benz-S.jpg" alt="" className="my-2 w-28 h-20 object-cover rounded-md" />
                     <button className="bg-amber-600 text-white px-4 py-1 mt-2 rounded shadow hover:bg-yellow-800">
                       Reserve
                     </button>
                   </div>
                   <div className="bg-[#1a2b50] text-white p-4 text-center w-[300px] h-full flex flex-col items-center justify-center">
                     <span className="text-sm">Price</span>
                     <span className="text-2xl font-bold">55</span>
                     <span className="text-sm">EURO</span>
                   </div>
                 </div>

                 <div className="flex items-center bg-white rounded-xl shadow-md overflow-hidden w-[300px]">
                   <div className="flex flex-col items-center justify-center bg-gray-100 p-4 w-[400px]">
                     <h3 className="text-lg font-semibold text-center">Nicosia- <br /> Limassol</h3>
                     <img src="/Mercedes_C300.webp" alt="" className="my-2 w-28 h-20 object-cover rounded-md" />
                     <button className="bg-amber-600 text-white px-4 py-1 mt-2 rounded shadow hover:bg-yellow-800">
                       Reserve
                     </button>
                   </div>
                   <div className="bg-[#1a2b50] text-white p-4 text-center w-[300px] h-full flex flex-col items-center justify-center">
                     <span className="text-sm">Price</span>
                     <span className="text-2xl font-bold">55</span>
                     <span className="text-sm">EURO</span>
                   </div>
                 </div>

                 <div className="flex items-center bg-white rounded-xl shadow-md overflow-hidden w-[300px]">
                   <div className="flex flex-col items-center justify-center bg-gray-100 p-4 w-[400px]">
                     <h3 className="text-lg font-semibold text-center">Nicosia- <br /> Larnaca Airport</h3>
                     <img src="/Mercedes_C300D.webp" alt="" className="my-2 w-28 h-20 object-cover rounded-md" />
                     <button className="bg-amber-600 text-white px-4 py-1 mt-2 rounded shadow hover:bg-yellow-800">
                       Reserve
                     </button>
                   </div>
                   <div className="bg-[#1a2b50] text-white p-4 text-center w-[300px] h-full flex flex-col items-center justify-center">
                     <span className="text-sm">Price</span>
                     <span className="text-2xl font-bold">55</span>
                     <span className="text-sm">EURO</span>
                   </div>
                 </div>

                 </div>

            {/* <div className="flex px-10 py-10 justify-between">
                <div className="flex gap-3">
                    <div className="flex gap-1 bg-[#159d47] w-2/3 h-24 rounded-md ">
                      <div className="flex-col">
                        <p className="text-base text-blue-950">
                            Nicosia- <br /> Larnaca
                        </p>

                        <button className="rounded-full p-3 bg-red-500 text-white  ">
                             Reserve
                        </button>
                      </div>
                    </div>

                </div>

            </div> */}

        <div className="flex justify-between gap-10 pl-15 pt-40 pb-15"> 
       <div className="relative  w-3/5 h-96 p-3 rounded-lg  align-bottom inline-block box-border  bg-auto bg-no-repeat  text-white "
          style={{ backgroundImage: `url(/Image-clock.jpg)`,
                   backgroundColor: 'rgb(150, 211, 221)',
                    border: '12px',
                    backgroundPosition: 'center'
          }} >

            
        <div className="mt-20">
        <h1 className="font-sans font-bold text-gray-100 text-4xl pl-4">
            Get your ride right <br /> with Our Reserve 
            </h1>
        </div>

        <form action=""
               className='  mt-6 block'
               >
          <div className='block'>
          
          <div>
            <div className='text-white pt-5 pb-5 pl-4 font-serif font-light text-base'>
                <p>
                    Choose Date and Time. 
                </p>
            </div>
          </div>
          
          <div className='flex gap-4 justify-start mb-5'>
             <div className='relative w-auto'>
              <div className='w-auto'>
                <div className='main'>
                 <div className="sub-main">
                    {/* <DateRangeIcon className="ml-4" /> */}
                   <input type="date"
                           placeholder="Date"
                           value={date}
                           onChange={(e) => setDate(e.target.value)}
                            className=" rounded-md p-2 w-40 text-black"
                           />
                           
                 </div>
                </div>
              </div>
             </div>

             <div className='relative w-auto'>
              <div className='w-auto'>
                <div className='main'>
                 <div className="sub-main">
                    {/* <AccessTimeIcon className="ml-4" />  */}
                   <input type="time"
                           placeholder="Time"
                           value={time}
                           onChange={(e) => setTime(e.target.value)}
                            className=" rounded-md p-2 w-40 text-black"
                           />
                           {/* <KeyboardArrowDownIcon className="mr-4"/> */}
                 </div>
                </div>
              </div>
             </div>
          </div>
          </div>

          <button className="bg-amber-50 px-10 w-80 py-3 mb-5 text-black font-serif text-base rounded-lg ">
            <a href="https://firstclasstransfers.eu/index.php/pricing/">
             Next
             </a>
          </button>

        </form>

        
        
       </div>
        
        <div className=" w-96 rounded-sm border-black border-solid flex-col pr-15 mr-15"
        style={{
                   background: 'rgba(255, 254, 254, 0.04)',
                   borderBlock: 'rgba(0, 3, 0, 0.04)',
                   border:'1px'
                   
                    
          }} >
            <div className="text-sm/6">
              <h1 className="font-bold font-sans pl-4 py-10 text-2xl">Benefits</h1>

              <p className="text-lg pb-3 font-extralight justify-between pl-3 font-serif">
                
                <TodayIcon />   Experience Comfort
              </p>

              <p className="text-lg pb-3 font-extralight pl-3 font-serif">
                 
                 <AccessTimeIcon />   Beyond a ride, it's an experience.
              </p>

              <p className="text-lg pb-3 font-extralight pl-3 font-serif">
                
                 <EditNoteIcon/>  Travel in comfort and style with our premium .
              </p>

              <button className="text-lg pb-2 font-extralight pl-3 font-serif">
                <a href="">
                    See terms 
                    ---
                </a>
              </button>
            </div>

        </div>

            
        </div>

        </div>

        
    )
}

export default Services;