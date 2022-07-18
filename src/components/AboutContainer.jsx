import React from 'react'
import BG from "./image/BG w' Slogan.png";
import Footer from './Footer';


const AboutContainer = () => {
  return (
    <section className = "lg:gap-2 lg:w-full sm:grid sm:grid-cols-1 sm:gap-2 sm:w-full" id="home">
    <div className='py-2 flex-1 flex flex-col items-start md:items-center justify-center'>
    <br></br>
       <div className='w-200 h-200'>
        <img src={BG} className= "w-full h-full object-contain"
         alt="slide"/>
  
     </div>
    
     <br></br>

     <div>
      <p className=" text-[2.5rem] text-amber-900 font-bold text-center">Our Journey</p>
<p className=" text-[1.5rem] text-textColorblack font-bold justify-start">
Corium PH as a Local Brand
</p>
<p className=" text-[1rem] text-justify text-textColorblack font-bold justify-start">
A leather shoe store that offers footwear for both Men and Women, Corium PH is a growing local brand in the Philippines. Every pair is carefully designed to achieve its faultless form while dispensing the highest quality possible for its cheap price. Corium is another term for the dermis which means the middle layer of the skin.
<br></br>
<br></br>
</p>

<p className=" text-[1.5rem] text-textColorblack font-bold justify-start">
Our Goal
</p>
<p className=" text-[1rem] text-justify text-textColorblack font-bold justify-start">
Corium PH is aspiring to be a well-known brand that offers affordable yet high-quality leather shoes online. Our main goal is to reach customers nationwide to promote the patronage of local brands in our country. Our store is also determined to provide the best and easiest experience for online shoppers all over the country while using our website.
<br></br>
<br></br>
</p>

<p className=" text-[1.5rem] text-textColorblack font-bold justify-start">
Our Leather Shoes
</p>
<p className=" text-[1rem] text-justify text-textColorblack font-bold justify-start">
Known to be more pricey than other types of footwear, we made sure that our leather shoes will be affordable enough to the customers. We guarantee to provide great quality, comfort, durability, and stylish design that is worthy of every penny. Materials that are used for our shoes are only from pre-defined local suppliers to ensure the splendid feature of our shoes.
<br></br>
<br></br>
</p>

<p className=" text-[1.5rem] text-textColorblack font-bold justify-start">
A Little Treat for our Loyal Costumers!
</p>
<p className=" text-[1rem] text-justify text-textColorblack font-bold justify-start">
Adding spice to our shop, we offer special services that are made especially just for the customers who bought from us! We are offering free cleaning, repairs, and even restoration to those customers who have confirmed, at least two, purchases for the past couple of years. This offer can be claimed in our physical store only, you just need to present your receipt!
<br></br>
<br></br>
</p>

<p className=" text-[1.5rem] text-textColorblack font-bold justify-start">
A Simple Guide on How to Place an Order Using our Website:</p>
<p className=" text-[1rem] text-justify text-textColorblack font-bold justify-start">
Ordering leather shoes online can't get easier using our website! You can instantly see the newest designs as well as the trending products on our landing page.
<br></br>
Here's a simple guide to help you shop:
<br></br>
<br></br>
Step 1. Create your profile and log in to our website.
<br></br>
Step 2. Make sure to create filters so you can scan for more appropriate products that are based on your liking.
<br></br>
Step 3. Add the products to your cart or you can immediately check out the item.
<br></br>
Step 4. Add your contact details, address, and payment method.
<br></br>
Step 5. Confirm your information details and hit check out.
<br></br>
Step 6. Seatback, relax, and wait for your item!
<br></br>
<br></br>
</p>


<br></br>
</div>
</div>
    
<Footer/>
  </section>

  
  )
}

export default AboutContainer