import React, { useState } from "react";
import Modal from "../../modal/modal";

const StorySidebar = ({handleInputChange, handleSubmit,storyTitle}) => {
  let [showAddStoryCard, setShowAddStoryCard] = useState(false);

  const stroyCard = () => {
    setShowAddStoryCard(true);
  };


  return (
    <>
    <div className="main">
      <div className="main--storySidebar">
      <div>{storyTitle}</div>
        <div className="main--storySidebar__score">
          <div className="main--storySidebar__score__text">Score</div>
        </div>
        <div className="main--storySidebar__board">Story board
          <div className="main--storySidebar__items__text"></div>
          <div>{storyTitle}</div>
          {storyTitle}
        </div>
     
        <div className="main--storySidebar__tab">
          {/* <button onClick={handleInviteLink} className="main--storySidebar__items__text">Invite</button> */}
          <button onClick={stroyCard}>Add story</button>
        </div>
      </div>
      </div>
      <Modal showAddStoryCard={showAddStoryCard} onClose={() => setShowAddStoryCard(false)}/>
    </>
  );
};

export default StorySidebar;
