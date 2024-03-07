import { useSelector } from "react-redux";
import ProfileComponent from "../../components/Profile";
import "./styles.scss";
const Profile = () => {

  const user = useSelector((state) => state.user.user)
  const avatar = useSelector((state) => state.user.avatar)
  
  return (
    <>
      <ProfileComponent avatar={avatar} user={user}/>
    </>
  );
};

export default Profile;
