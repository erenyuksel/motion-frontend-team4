import { useEffect } from "react";
import { FriendCard } from "../../components/FriendCard";
import "./styles.scss";
import AxiosUser from "../../axios/UserAxios";
import { useDispatch, useSelector } from "react-redux";
import { setFriendList } from "../../store/UserSlice";

const FindFriends = () => {
  const access = useSelector((state) => state.user.token);
  const friends = useSelector((state) => state.user.friendList);
  const dispatch = useDispatch();
  console.log(access);
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
  }, []);

  return (
    <div className="friends-container">
      {friends.map((friend) => {
        return <FriendCard friend={friend} key={friend.id} />;
      })}
    </div>
  );
};
export default FindFriends;
