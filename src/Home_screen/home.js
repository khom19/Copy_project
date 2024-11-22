import React from "react";
import './home.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';
import { HiMiniMicrophone } from "react-icons/hi2";
import { IoIosNotificationsOutline } from "react-icons/io";
import { PiVideoCameraLight } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { TiHome } from "react-icons/ti";


function Homepage(){
    const [Input , setInput] = useState([]) ;

    return (
      <div className='Homepage'>
        <div className='menu'>
          <div className='warp_menu_icon'>
            <div className='menu_icon'>
            <RxHamburgerMenu className='icon' size={22.5}/>
            </div>
            <h1 className='youtube_name'>
              <FaYoutube className='youtube_icon' size={32.5}/>
              Premium
              <p className='language'>TH</p>
            </h1>
          </div>
          <div className='search'>
            <input type='text' className='search_input' placeholder='ค้นหา' value={Input} onChange={(e) => setInput(e.target.value)}/>
            <div className='go_search'>
              <CiSearch className='search_icon' size={25}/>
            </div>
            <div className="microphone">
              <HiMiniMicrophone className="microphone_icon" size={20}/>
            </div>
          </div>
          <div className="create_notification_profile">
            <div className="create">
              <PiVideoCameraLight className="create_icon" size={27.5} />
              <a className="plus">
                +
              </a>
            </div>
            <div className="notification">
              <IoIosNotificationsOutline className="notification_icon" size={27.5} />
            </div>
            <div className="profile">
              <CgProfile className="profile_icon" size={25} />
            </div>
          </div>
        </div>
        <div className="menu-left">
          <div className="main-shorts-subscribe-music">
            <div className="main">
              <TiHome className="main_icon" size={27.5} />
            </div>
            <div className="shorts"></div>
            <div className="subscribe"></div>
            <div className="music"></div>
          </div>
        </div>
      </div>
    );
}

export default Homepage ;