import React,  { useState, useEffect} from 'react';
import './App.css';

import ChatListItem from "./componentes/ChatListItem";
import ChatIntro from "./componentes/ChatIntro";


import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  const [chatList, setChatList] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{}]);

  return (
    <div className="app-window">
      <div className="sidebar">
        
        <header>
          <img className="header--avatar" src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="Mateus" />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{color: '#919191'}}/>
            </div>
            <div className="header--btn">
              <ChatIcon style={{color: '#919191'}}/>
            </div>
            <div className="header--btn">
              <MoreVertIcon style={{color: '#919191'}}/>
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="small" style={{color: '#919191'}}/>
            <input type="search" placeholder="Procurar ou Começar uma nova conversa"/>
          </div>
        </div>

        <div className="chatlist">
           {chatList.map((item, key)=>(
             <ChatListItem
                key={key}
             />
           ))}
        </div>

      </div>
      <div className="contentarea">
            <ChatIntro />
      </div>
    </div>
  
  );
};