
import { FriendCard } from "../../components/FriendCard";
import "./styles.scss";

const FindFriends = () => {
  const arraycard = [1, 2, 3, 4, 5, 6];
 
  return (
    <div className="friends-container">
      {arraycard.map((element) => (
        <FriendCard key={element} />
      ))}
    </div>
  );
};
export default FindFriends;
