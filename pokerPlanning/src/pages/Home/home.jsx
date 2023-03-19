import React, { useEffect, useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../../components/nav/navbar";
import HomeSidebar from "../../components/sidebar/homeSidebar/sidebar";
import StorySidebar from "../../components/sidebar/stroySidebar/storySidebar";
import { UserContext } from "../../context/context";
import useMembers from "../../hooks/useMembers";
import useStory from "../../hooks/useStory";

const Home = () => {
  const list = [
    "2",
    "0",
    "1",
    // "2",
    // "3",
    // "5",
    // "8",
    // "13",
    // "21",
    // "34",
    // "55",
    // "89",
  ];

  let [story, setStory] = useState({
    name: "",
    description: "",
  });

  const value = useMemo(() => ({ story, setStory }), [story]);

  let { addStory, getStory, change, storyTitle } = useStory();

  console.log(storyTitle.story);

  let {
    membersData,
    getMember,
    membersCreated,
    parsedModeratorData,
    checkMember,
    checkRole,
  } = useMembers();

  const navigate = useNavigate();

  const currentUrl = `${window.location.href}`;
  const specificWord = "http://localhost:5173/session/";
  const wordsAfter = currentUrl.split(specificWord)[1];

  if (!parsedModeratorData) {
    navigate("/login");
  }
  useEffect(() => {
    getStory();
  }, [10]);

  useEffect(() => {
    sessionStorage.setItem("sessionId", wordsAfter);
    checkMember();
    getMember();
    console.log("aaa");
  }, [membersCreated.success]);

  return (
    <>
      <Navbar />
      <div className="poker--cards">
        <HomeSidebar />
        <div className="poker--cards__individual">
          {Object.values(list).map((value, index) => (
            <div
              className="poker--cards__individual__number"
              // style={{ paddingLeft: "32px" }}
              key={index}
            >
              {value}
            </div>
          ))}
        </div>
        <UserContext.Provider value={value}>
          {useMemo(
            () => (
              <>
                <StorySidebar storyTitle={storyTitle.story} />
              </>
            ),
            []
          )}
        </UserContext.Provider>
      </div>
    </>
  );
};

export default Home;
