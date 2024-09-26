import React from "react";
import './home.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';
import { HiMiniMicrophone } from "react-icons/hi2";

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
                <HiMiniMicrophone className="microphone_icon" size={22.5}/>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Homepage ;