import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AxiosUser from "../../axios/UserAxios";
import { useSelector } from "react-redux";
import ProfileComponent from "../../components/Profile";

const FriendProfile = () => {
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState("");
  const token = useSelector((state) => state.user.token);
  const { id } = useParams();

  useEffect(() => {
    console.log("trying");
    const getUser = async () => {
      console.log("fetching");
      const user = await AxiosUser.get(`/users/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("after fetching");
      setUser(user.data);
      setAvatar(user.data.avatar);
      console.log(user);
    };

    getUser();
  }, [id]);

  console.log(user, avatar);
  // return <div>{id}</div>

  return <>{user && <ProfileComponent user={user} avatar={avatar} />}</>;
};

export default FriendProfile;
