import React from "react";
import './home.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';
import { HiMiniMicrophone , HiOutlinePlus } from "react-icons/hi2";
import { IoIosNotificationsOutline , IoIosNotifications } from "react-icons/io";

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
              <HiOutlinePlus className="create_icon" size={25} />
              สร้าง
            </div>
            <div className="notification">
              <IoIosNotifications className="notification_icon" size={27.5} />
            </div>
            <div className="profile">
              
            </div>
          </div>
        </div>
      </div>
    );
}

export default Homepage ;