import axios from "axios";
import { useEffect, useState } from "react";

const useStory = () => {
  let [change, setChange] = useState({});

  let [storyTitle, setStoryTitle] = useState({});

  let sessionData = sessionStorage.getItem("session");
  let parsedSessionData = JSON.parse(sessionData);

  const addStory = async (data) => {
    await axios.post("http://localhost:8888", data).then(function (response) {
      setStoryTitle(response.data);
      setChange(response.data);
      //   sessionStorage.setItem("moderator", JSON.stringify(response.data.user));
    });
  };

  const getStory = async () => {
    await axios
      .get("http://localhost:8888", {
        params: {
          session_id: parsedSessionData,
          action: "getStory",
        },
      })
      .then(function (response) {
        setStoryTitle(response.data);
      });
  };

  return {
    addStory,
    getStory,
    change,
    storyTitle,
  };
};
export default useStory;
