import React, { useState } from "react";
// import "./sidebar.scss";

const HomeSidebar = () => {

  let [inviteLink, setInviteLink] = useState();

  const handleInviteLink =()=>{
    setInviteLink(window.location.href)
  }
  
  const hideInviteLink =()=>{
    setInviteLink()
  }


  return (
    <>
      <div className="main--sidebar">
        <div className="main--sidebar__items main--sidebar__1">
          <div className="main--sidebar__items__text">Flip</div>
        </div>
        <div className="main--sidebar__items main--sidebar__2">
          <div className="main--sidebar__items__text">Saved</div>
        </div>
        
        <div className="main--sidebar__items main--sidebar__3">
          <button onClick={handleInviteLink} className="main--sidebar__items__text">Invite</button>
          <div onClick={hideInviteLink}>{inviteLink}</div> 
        </div>
      </div>
    </>
  );
};

export default HomeSidebar;
