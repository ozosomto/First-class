import "./style.css";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import TodayIcon from '@mui/icons-material/Today';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EditNoteIcon from '@mui/icons-material/EditNote';


const Services : React.FC = () => {

      const [date, setDate] = useState('');
      const [time, setTime] = useState('');
    
    return (

        <div className="flex justify-between gap-10 pl-15 pt-40 pb-15"> 
       <div className="relative  w-3/5 h-96 p-3 rounded-lg  align-bottom inline-block box-border  bg-right bg-no-repeat  text-white "
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

        
    )
}

export default Services