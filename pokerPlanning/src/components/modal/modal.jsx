import React, { useContext } from "react";
import { UserContext } from "../../context/context";
import useStory from "../../hooks/useStory";
import Input from "../ui/Input";

const Modal = ({ showAddStoryCard, onClose }) => {
  if (!showAddStoryCard) {
    return null;
  }

  const { story, setStory } = useContext(UserContext);

  let { addStory, getStory, change,storyTitle } = useStory();

    // get session id from local storage
    let sessionData = sessionStorage.getItem("session");
    let parsedSessionData = JSON.parse(sessionData);

  const handleSubmit = (e) => {
    e.preventDefault();
    addStory({ action: "addStory", ...story, session_id: parsedSessionData });

    setStory({
      name: "",
      description: "",
    });
  };
  const handleInputChange = (e) => {
    setStory({
      ...story,
      [e.target.name]: e.target.value,
    });
    // console.log( story);
  };

  return (
    <div id="myModal" className="modal">
      <div className="modal--content">
        <div className="modal--content__header">
          <div className="modal--content__header__title h4">Add Story</div>
          <button onClick={onClose}>&times;</button>
        </div>
        <div className="modal--content__body h4">
          <form action="">
            <div className="h3">YOUR STORY</div>
            <Input
              type="text"
              id="name"
              name="name"
              value={story.name}
              onChange={handleInputChange}
              placeholder="ENTER story"
            />
            <div className="h4">YOUR DESCRIPTIO</div>
            <textarea
              type="text"
              name="description"
              id="description"
              value={story.description}
              onChange={handleInputChange}
              placeholder="ENTER description"
            />
            <button onClick={handleSubmit} className="eyebrow">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
