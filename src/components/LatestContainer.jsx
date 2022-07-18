import React, { useEffect, useRef, useState } from "react";
import HomeContainer from "./HomeContainer";
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import ShopContainer from "./ShopContainer";
import CartContainer from "./CartContainer";


const LatestContainer = () => {
    const [{ shoeItems, cartShow }, dispatch] = useStateValue();
    const [scrollValue, setScrollValue] = useState(0);
  
    useEffect(() => {}, [scrollValue, cartShow]);
   
  return (
    <div> 
    <section>
        <br></br>
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Our Newest Products!
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(-200)}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(200)}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={shoeItems?.filter((n) => n.category === "menNew" )}
        />
    </section>
    <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={shoeItems?.filter((n) => n.category === "womenNew" )}
        />

    <ShopContainer />
    {cartShow && (<CartContainer />)}

    </div>
  )
}

export default LatestContainer