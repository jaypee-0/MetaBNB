import React from "react";
import { Outlet } from "react-router-dom";
import {FaListUl} from 'react-icons/fa'
import Root from "./routes/Root";
import Wallet from "./routes/subpages/Wallet";

function Navbar() {
  const [show, setShow] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  return <>
    <div className="bg-white my-6 mx-10 sm:mx-16 lg:mx-28">
      <div className={`flex justify-between w-full items-center relative overflow-hidden ${show && 'setRule'}`}>
        <div className="order-last flex md:order-first">
          <img className="scale-75 sm:scale-100" src="./images/meta-logo.png" alt="Metabnb" />
        </div>
        <button onClick={()=>setShow(true)} className="md:hidden py-2 text-2xl order-1 text-secondary-200">
          <FaListUl />
        </button>
        <div className={`menu ${show ? 'modalShow' : 'avg:flex avg:flex-row avg:left-0 avg:bg-transparent avg:text-black avg:static avg:w-3/4'}`}>
          <Root setShow={setShow}/>
          <div className="avg:w-1/4 avg:text-right">
            <button onClick={()=>{
              setOpen(true)
              setShow(false)
            }} className="wallet">Connect wallet</button>
          </div>
        </div>
      </div>
      {open && <Wallet setOpen={setOpen} />}
    </div>
    <div>
      <Outlet />
    </div>
  </>
}

export default Navbar;
