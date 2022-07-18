import React from 'react'
import Slide2 from "./image/slide2.PNG"
import Pic from "./image/A1.PNG"
import BG from "./image/BG 1.png";
import Custom from "./image/c.jpg";
import BgPic from "./image/heroBg.png";
import { heroData } from "../utils/data";
import { Link } from 'react-router-dom';


const HomeContainer = () => {
  return (
    <section className = "lg:gap-2 lg:w-full sm:grid sm:grid-cols-1 sm:gap-2 sm:w-full" id="home">
    <div className='py-2 flex-1 flex flex-col items-start md:items-center justify-center'>
    <br></br>
       <div className='w-200 h-200'>
        <img src={BG} className= "w-full h-full object-contain"
         alt="slide"/>
  
     </div>

    
<br></br>
     <Link to="/whatIsNew" >
     <button type='button' 
       className='bg-gradient-to-br from-amber-300 to-amber-900 
       w-full px-4 py-2 rounded-lg md:w-auto hover:shadow-lg 
       transition-all ease-in-out duration-100'>Order Now</button>
     </Link>
     <br></br>
   
    <div className='py-2 flex-1 flex items-center relative'>
        <img src={BgPic} className=" ml-auto h-420 w-full lg:w-auto lg:h-650" alt="bgpic"/>
       
       <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center py-4 gap-2 flex-wrap">
       {heroData &&
            heroData.map((n) => (
         <div 
            key={n.id} className='lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center'> 
           <img src={n.imageSrc} className="w-20 lg:w-40 -mt-20" alt="pic1"/>
           <p className='text-base lg:text-xl text-textColor font-semibold mt-4'>
            {n.name}</p>
           <p className='text-sm text-gray-500 font-semibold'>
            {n.decp}</p>
           <p className='text-sm font-semibold text-headingColor'>
            <span className='text-xs  text-red-500'>Php</span>
            {n.price}</p>
         </div>
         ))}
       </div>
       
    </div>
    
     
     <div>
      <p className=" text-[2.5rem] text-amber-900 font-bold text-center">Articles</p>
<p className=" text-[1.5rem] text-textColorblack font-bold justify-start">
Leather Shoes
</p>
<p className=" text-[1rem] text-justify text-textColorblack font-bold justify-start">
Leather shoes are a popular favourite for people who have active jobs or need shoes that will give their feet extra comfort and protection. However, some people don't like buying leather because it usually has a higher price tag compared to other synthetic materials.
<br></br>
<br></br>
It's unclear when leather was originally used to build shoes, but researchers discovered the first in an Armenian cave in 2010. The shoe is fashioned of one piece of cowhide with a grass lining and is estimated to be 5,500 years old, spanning the Neolithic and Bronze Ages.
<br></br>
<br></br>
Tzi's famed glacial mummy footwear dates back roughly 5,300 years. The structure of this sneaker was shockingly intricate. The upper (outer shoe) was made of deerskin with the hair side facing out to keep moisture out, and the sole was made of bearskin with the hair side facing inside to keep heat in. However, images of hunters discovered in Spain's Altamira Cave dating back roughly 15,000 years are thought to be the first representation of people wearing shoes. Archaeologists discovered a pair of 8,300-year-old sandals made of plants in the Arnold Research Cave in Missouri, USA.
<br></br>
</p>
<br></br>
</div>

    <div className='w-200 h-200'>
        <img src={Slide2} className= "w-full h-full object-contain"
         alt="slide"/>
  <br></br>
     </div>

     <div>
      <p className="text-center  text-[2.5rem] text-amber-900 font-bold">How to properly care for your leather shoes?</p>

<p className="text-justify text-[1rem] text-textColorblack font-bold justify-start">
Take a look at your shoes. Leather? We thought so. In fact, we’d wager that the majority of your shoe collection is made from varying types of leather. From full-grain to split-suede, these tanned hides and skins are reliable, stylish and hard-wearing. But, despite being tough natural materials, they still require a certain level of care. Be they boots, brogues, sneakers or slippers, your leather shoes demand that you look after them accordingly. Cleaning and conditioning are two simple steps, but ones that could extend the lifespan of your loafers by years. So unlace your shoes, show them some love and invest in the best in shoe care.

</p>
<br></br>
<br></br>
</div>

     <div className='w-200 h-200'>
        <img src={Pic} className= "w-full h-full object-contain"
         alt="slide"/>
  
     </div>
     <br></br>
     <br></br>
     <div>
      <p className="text-center text-[2.5rem] text-amber-900 font-bold">Why customized leather is good?</p>

<p className="text-justify  text-[1rem] text-textColorblack font-bold justify-start">
Custom-made shoes are designed for the unique specifications of your feet, meaning you’re getting the most perfect fit. As such, these pairs are guaranteed to almost last a lifetime and, more important, won’t cause any issues with discomfort.
<br></br>
<br></br>
Shoes are available in a wide range of materials, colors, and forms. The only purpose of a shoe's shape and look in the early days was to protect the foot from injury and the elements. In more recent times, however, shoe styles have been strongly affected by fashion and used to display the wearer's status. Modern footwear, including women's and men's shoes, slippers, sneakers, boots, hiking boots, sandals, and much more, is carefully created for specific functions in addition to being more comfortable and better suited to the weather.
</p>
<br></br>
<br></br>
</div>

<div className='w-200 h-200'>
        <img src={Custom} className= "w-full h-full object-contain"
         alt="slide"/>
  
     </div>

    </div>
    
   
  </section>

  
  )
}

export default HomeContainer