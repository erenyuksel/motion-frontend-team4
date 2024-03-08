import { useEffect, useState } from "react";
import { FriendCard } from "../../components/FriendCard";
import "./styles.scss";
import AxiosUser from "../../axios/UserAxios";
import { useDispatch, useSelector } from "react-redux";
import { setFriendList } from "../../store/UserSlice";
import searchLogo from "../../assets/svgs/search_icon.svg";
const FindFriends = () => {
  const access = useSelector((state) => state.user.token);
  const friends = useSelector((state) => state.user.friendList);
  const [check, setCheck] = useState(false);
  const [input, SetInput] = useState("");
  const dispatch = useDispatch();
  console.log(access);
  const handleToggle = (id) => {
    async function fetchData(id) {
      const data = { user_id: Number(`${id}`) };
      const res = await AxiosUser.post(
        `/social/followers/toggle-follow/${id}/`,
        data,
        {
          headers: {
            Authorization: `Bearer ${access}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data.logged_in_user_is_following);
      // if (res.data.logged_in_user_is_following)
      //   setToggled(!res.data.logged_in_user_is_following);
    }
    fetchData(id);
  };
  const handleRequest = (id) => {
    async function sendRequest(id) {
      const res1 = await AxiosUser.post(
        `/social/friends/request/${id}/`,
        { user_id: `${id}` },
        {
          headers: {
            Authorization: `Bearer ${access}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res1.data);
    }
    sendRequest(id);
  };
  useEffect(() => {
    async function fetchData() {
      const res = await AxiosUser.get("/users/?limit=6&offset=1", {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });
      console.log(res);
      dispatch(setFriendList(res.data.results));
    }
    fetchData();
  }, [check]);

  return (
    <div className="find-friends-container">
      <div className="searchBar-class">
        <img src={searchLogo}></img>
        <input
          placeholder="Find friends....."
          value={input}
          onChange={(e) => SetInput(e.target.value)}
        />
      </div>
      <div className="friends-container">
        {friends.map((friend) => {
          return (
            <FriendCard
              friend={friend}
              key={friend.id}
              handleToggle={handleToggle}
              handleRequest={handleRequest}
              setCheck={setCheck}
            />
          );
        })}
      </div>
    </div>
  );
};
export default FindFriends;
