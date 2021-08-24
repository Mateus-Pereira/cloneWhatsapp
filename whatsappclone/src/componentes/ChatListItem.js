import React from 'react';
import './ChatListItem.css';
// eslint-disable-next-line import/no-anonymous-default-export
export  default() => {
  return (
    <div className="chatListItem">
      <img className="chatListeItem--avatar" src="https://wallpapercave.com/wp/wp4601749.png" alt="" />
      <div className="chatListItem--lines">
        <div className="chatListItem--line">
          <div className="chatListItem--name">Mateus Luiz</div>
          <div className="chatListItem--date">15:20</div>
        </div>
        <div className="chatListItem--line">
          <div className="chatListItem--ultimaMsg">
            <p>Ola! como vc está? </p>
            <p>Estou so trabalhando</p>
          </div>
        </div>
      </div>
    </div>
  );
}