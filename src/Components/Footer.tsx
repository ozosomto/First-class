import AccessTimeIcon from '@mui/icons-material/AccessTime';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer: React.FC = () => {
    return (
      <div className="bg-gray-950 pb-15  w-full h-full">
         <div className="flex justify-between pr-8 gap-4">

             <div className="flex-col pb-10">
                  <div className="justify-start md:justify-start">
                    <img className="h-80" src="/new_img/FirstClass_Transfers_logo_final[1].png" alt="logo" />
                  </div>
                   
                   
                  <p className="text-gray-300  pt-[-20] pb-5 pl-8 text-sm font-serif">
                    Elevate Your Journey: Premium Transport <br />
                      for Every Occasion, Every Budget
                  </p>
                  

                   <ul className="flex gap-3 pl-8 mb-10 ">
                      <li className=" bg-blue-700 wp-social-link wp-social-link-facebook  wp-block-social-link">
                        <a href="https://www.facebook.com">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                            fill={ "white"}
                          >
                            <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"></path>
                          </svg>
                        </a>
          </li>

                       <li className="bg-blue-700 wp-social-link wp-social-link-linkedin  wp-block-social-link">
                         <a href="https://www.linkedin.com">
                           <svg
                             width="24"
                             height="24"
                             viewBox="0 0 24 24"
                             version="1.1"
                             xmlns="http://www.w3.org/2000/svg"
                             aria-hidden="true"
                             focusable="false"
                             fill={ "white" }
                           >
                             <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"></path>
                           </svg>
                         </a>
                       </li>

                          <li className="bg-red-500 wp-social-link wp-social-link-twitter  wp-block-social-link">
                            <a href="https://twitter.com/" className="wp-block-social-link-anchor">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false"
                                fill={ "white" }
                              >
                                <path d="M21.8,8.001c0,0-0.195-1.378-0.795-1.985c-0.76-0.797-1.613-0.801-2.004-0.847c-2.799-0.202-6.997-0.202-6.997-0.202 h-0.009c0,0-4.198,0-6.997,0.202C4.608,5.216,3.756,5.22,2.995,6.016C2.395,6.623,2.2,8.001,2.2,8.001S2,9.62,2,11.238v1.517 c0,1.618,0.2,3.237,0.2,3.237s0.195,1.378,0.795,1.985c0.761,0.797,1.76,0.771,2.205,0.855c1.6,0.153,6.8,0.201,6.8,0.201 s4.203-0.006,7.001-0.209c0.391-0.047,1.243-0.051,2.004-0.847c0.6-0.607,0.795-1.985,0.795-1.985s0.2-1.618,0.2-3.237v-1.517 C22,9.62,21.8,8.001,21.8,8.001z M9.935,14.594l-0.001-5.62l5.404,2.82L9.935,14.594z"></path>
                              </svg>
                            </a>
                          </li>

                <li className="bg-red-700 wp-social-link wp-social-link-instagram  wp-block-social-link">
                  <a
                    href="https://www.instagram.com
"      
                    className="wp-block-social-link-anchor"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      fill={ "white" }
                    >
                      <path d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"></path>
                    </svg>
                  </a>
             </li>
                        {/* <li class="wp-social-link wp-social-link-instagram  wp-block-social-link">
                    <a
                      href="https://www.instagram.com/scaftech.ng/
"                  
                      class="wp-block-social-link-anchor"
                    >
                    </a>
                  </li> */}
                </ul>
                     </div>

                     <div className="flex-col pt-30 pb-10">
                       <h3 className="text-gray-200 font-sans font-medium text-2xl text-center">
                        Recent Places 
                       </h3>

                       <div className="flex gap-5">
                        
                            <img className="w-2/3 h-48 pt-5 rounded-md"
                             src="/jason-unsplash.jpg" alt="" />
                        
                               <div className='flex-col pt-10'>
                              <p className="text-base pb-4 text-blue-900 font-serif">
                                Experience the Vibrant  of <br /> the Waves
                              </p>

                              <p className='text-sm text-gray-400 '>
                           <AccessTimeIcon/>     Feb 24, 2025
                              </p>

                              </div>
                       </div>

                       <div className="flex gap-5">
                        
                            <img className="w-2/3 h-48 pt-10 rounded-md"
                             src="/josh-unsplash.jpg" alt="" />
                        
                               <div className='flex-col pt-10'>
                              <p className="text-base pb-4 text-blue-900 font-serif">
                                Travel Safety
                              </p>

                              <p className='text-sm text-gray-400 '>
                           <AccessTimeIcon/>     Feb 24, 2025
                              </p>

                              </div>
                       </div>
                     </div>
    

        <div className='flex-col pl-5 pt-30'>
            <h3 className="text-gray-200 pb-5 font-sans font-medium text-2xl text-center">
                        Useful Links 
            </h3>

            <div className='text-gray-400 font-sans text-base'>
                <a href="https://firstclasstransfers.eu/index.php/guideline/">
                 <KeyboardArrowRightIcon />   Service Guidelines
                </a>
                </div>

                 <div className='text-gray-400 font-sans  text-base'>
                 <a href="https://firstclasstransfers.eu/index.php/about-us/">
                 <KeyboardArrowRightIcon />   About Us
                </a>
                </div>

                  <div className='text-gray-400 font-sans  text-base'>
                 <a href="https://firstclasstransfers.eu/index.php/pricing/">
                <KeyboardArrowRightIcon />    Pricing
                </a>
                 </div>

        </div>

          <div className=' flex-col pl-5 pt-43 '>
                    <div className='text-gray-400 font-sans  text-base pb-3'>
                 <a href="https://firstclasstransfers.eu/index.php/contact-us/">
                <KeyboardArrowRightIcon />    Contact-Us
                </a>
                </div>
                   
                   <div className='text-gray-400 font-sans  text-base'>
                 <a href="https://firstclasstransfers.eu/index.php/blog-grid/">
                <KeyboardArrowRightIcon />    Blog
                </a>
            </div>
            </div>
              </div>

             <div className="flex text-white ml-30 px-3 py-1  ">
                  <a href=""
                      className='bg-amber-600 px-8 py-4 hover:text-gray-800'
                      >
                    <EmailIcon /> booking@firstclasstransfers.eu
                    <p className='text-gray-300 pl-5 text-sm'>Drop us a Line</p>
                  </a>
                  <a href="https://api.whatsapp.com/send/?phone=35799240868&text&type=phone_number&app_absent=0"
                     className='bg-[#062b6c] px-8 py-4 hover:text-gray-900'
                     >
                    <PhoneIcon />  +357 94 005 511| +357 99 240 868 
                    <p className='text-gray-500 pl-5 text-sm'>Our Surport Line | Alternative Surport</p>
                  </a>
                 <a href=""
                     className='bg-amber-600 px-8 py-4'
                     >
                     <LocationOnIcon />  Nicosia, Cyprus    
                        <p className='text-gray-300 pl-5 text-sm'>Get Direction</p>    
                        </a>
                </div>

                <p></p>
   </div>
    );
}

export default Footer;