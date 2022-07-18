import React from 'react'
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import { Header, MainContainer, CreateContainer } from "./components"
import { useStateValue } from "./context/StateProvider";
import { getAllShoeItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import { useEffect } from 'react';
import LatestContainer from './components/LatestContainer';
import AboutContainer from './components/AboutContainer';

const App = () => {

  const [{ shoeItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllShoeItems().then((data) => {
      dispatch({
        type: actionType.SET_SHOE_ITEMS,
        shoeItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (

    <AnimatePresence exitBeforeEnter>
     <div className="w-screen h-auto flex flex-col ">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
        <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/aboutUS" element={<AboutContainer />} />
            <Route path="/whatIsNew" element={<LatestContainer />} />
          </Routes>
        </main>
        </div>
    </AnimatePresence>
        
  
  );
};

export default App