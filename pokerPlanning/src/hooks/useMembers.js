import axios from "axios";
import { useEffect, useState } from "react";

const useMembers = () => {
  let [membersData, setMembersData] = useState([]);

  let [membersCreated, setMembersCreated] = useState({});

  let [checkRole, setCheckRole] = useState({});

  let moderatorData = sessionStorage.getItem("moderator");
  let parsedModeratorData = JSON.parse(moderatorData);

  let sessionData = sessionStorage.getItem("session");
  let parsedSessionData = JSON.parse(sessionData);

  let [datas, setDatas] = useState({});

  const checkMember = async () => {
    // console.log(data);
    await axios
      .get("http://localhost:8888", {
        params: {
          session_id: parsedSessionData,
          action: "checkSession",
        },
      })
      .then(function (response) {
        setCheckRole(response.data);

        // sessionStorage.setItem("moderator", JSON.stringify(response.data.user));
      });
  };

  const getMember = async (data) => {
    // console.log(data);
    await axios
      .post("http://localhost:8888", {
        session_id: parsedSessionData,
        member_id: parsedModeratorData?.id,
        action: "membersIdentify",
      })
      .then(function (response) {
        console.log(response.data);
        setMembersCreated(response.data);
        // sessionStorage.setItem("moderator", JSON.stringify(response.data.user));
      });
  };

  return {
    membersData,
    getMember,
    membersCreated,
    parsedModeratorData,
    checkMember,
    checkRole,
  };
};
export default useMembers;
