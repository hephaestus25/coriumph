import React from "react";
import {MdOutlineShoppingCart, MdAdd, MdLogout} from "react-icons/md"

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import { motion } from "framer-motion";

import Logo from "./image/Logo1.png";
import Profile from './image/profile1.png';
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { useState } from "react";
import { actionType } from "../context/reducer";
import LatestContainer from "./LatestContainer";


const Header = () => {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow, cartItems}, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {

    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    }
    else {
      setIsMenu(!isMenu);
    }

  };
  
  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

    return (
    <header className=" bg-bgHeader fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 drop-shadow-xl ">
    {/* desktop & tablet */}
    <div className="hidden md:flex w-full h-full drop-shadow-xl">
     <Link to={"/"} className="flex items center gap-2 drop-shadow-xl">
        <motion.img whileTap={{scale: 0.6}} src={Logo} className=" drop-shadow-xl w-20 object-cover cursor-pointer " alt="logo" />
        <p className="text-headingColor text-xl font-bold drop-shadow-xl"></p>
</Link>

  
<div className="flex items-center"></div>
<motion.ul 
 initial={{ opacity: 0, x: 200 }}
 animate={{ opacity: 1, x: 0 }}
 exit={{ opacity: 0, x: 200 }} 
         className="flex items-center gap-5 justify-center">

          <Link to={"home"} className="flex item-center gap-2">
            <li className="text-lg text-textColorblack hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            |  Home |
            </li> </Link>

            <Link to={"aboutUS"} className="flex item-center gap-2">
            <li className="text-lg text-textColorblack hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            | About Us |
            </li> </Link>

            <Link to={"/whatIsNew"} className="flex item-center gap-2">
            <li className="text-lg text-textColorblack hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            | Shop Now |
            </li> </Link>
     
            
  </motion.ul>

          
<div className="relative flex items-center gap-6 justify-center ml-auto">
<div className="relative flex items-center gap-6 justify-center ml-auto" onClick={showCart}>
           |<MdOutlineShoppingCart className="text-textColorblack text-2xl  cursor-pointer" /> 
           {cartItems && cartItems.length > 0 && (
              <div className=" absolute -top-2 left-1 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )}
|
</div>
<div>
             <div className="relative">
             <motion.img whileTap={{scale: 0.6}} src={user ? user.photoURL : Profile} 
              className="w-10 min-w-[40px] h-10 min-h-[40x] drop-shadow-xl cursor-pointer rounded-full" 
              alt="userprofile" onClick={login}/>
             
      { isMenu && (
                <motion.div 
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }} 
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
                {
                
                user && user.email === "coriumphil@gmail.com" && (
                  
        <Link to={'/createItem'}>
         <p className="px-4 py-2 flex items-center gap-3 cursor-pointer
                   hover:bg-slate-100 
                   transition-all 
                   duration-100 
                   ease-in-out 
                   text-textColor 
                   text-base"
                   onClick={() => setIsMenu(false)}> New Item <MdAdd />
        </p>
        </Link>
                )}

       <p className="m-2 p-2 rounded-md shadow-md flex items-center justify-center 
       bg-gray-200 gap-3 cursor-pointer 
       hover:bg-gray-300 
       transition-all 
       duration-100 
       ease-in-out 
       text-textColor 
       text-base" onClick={logout}> Logout <MdLogout /> </p>
               </motion.div>

              )}
             </div>
      </div>
</div>
</div>

{/* *************************************************************************************************************************************** */}
{/* mobile */}
<div className="flex  items-center justify-between md:hidden w-full h-full p-4">
<Link to={"/"} className="flex items center gap-2">
        <motion.img whileTap={{scale: 0.6}} src={Logo} className="w-20 object-cover cursor-pointer " alt="logo" />
        <p className="text-headingColor text-xl font-bold"></p>
</Link>

<div className="relative flex items-center gap-6 justify-center" onClick={showCart}>
            <MdOutlineShoppingCart className="text-textColorblack text-2xl  cursor-pointer" /> 
            {cartItems && cartItems.length > 0 && (
              <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )}

              </div>
<div className="relative">
             <motion.img whileTap={{scale: 0.6}} src={user ? user.photoURL : Profile} 
              className="w-10 min-w-[40px] h-10 min-h-[40x] drop-shadow-xl cursor-pointer rounded-full" 
              alt="userprofile" onClick={login}/>
             
      { isMenu && (
                <motion.div 
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }} 
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
                {
                
                user && user.email === "coriumphil@gmail.com" && (
                  
        <Link to={'/createItem'}>
         <p className="px-4 py-2 flex items-center gap-3 cursor-pointer
                   hover:bg-slate-100 
                   transition-all 
                   duration-100 
                   ease-in-out 
                   text-textColorblack
                   text-base" onClick={() => setIsMenu(false)}> New Item <MdAdd />
        </p>
        </Link>
                )}

<ul 
       className="flex flex-col px-4 py-2 gap-5 ">
            <li className="text-lg text-textColorblack hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-lg text-textColorblack hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-lg text-textColorblack hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              What is New?
            </li>
            <li className="text-lg text-textColorblack hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Shop Now
            </li>
  </ul>
     
       <p className="m-2 p-2 rounded-md shadow-md flex items-center justify-center 
       bg-gray-200 gap-3 cursor-pointer 
       hover:bg-gray-300 
       transition-all 
       duration-100 
       ease-in-out 
       text-textColorblack
       text-base"
       onClick={logout}
       > Logout <MdLogout /> </p>
               </motion.div>

              )}
             </div>
</div>
</header>
);

};

export default Header