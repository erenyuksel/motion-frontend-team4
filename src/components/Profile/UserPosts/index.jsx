import "./styles.scss";

import { useEffect, useState } from "react";
import AxiosUser from "../../../axios/UserAxios";

const UserPosts = ({ user, token }) => {
  const [posts, setPosts] = useState([]);
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    const getSpecificUserData = async () => {
      try {
        const data = await AxiosUser.get(`/social/posts/user/${user.id}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPosts(data.data.results);
        console.log(data.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getSpecificUserData();
  }, []);

  return (
    <div className="main_post_container">
      {/* <div className="post_col_1">
        <div>
          <input type="text" placeholder="Make a post" />
          <button>Post</button>
        </div>
        {posts.map(
          (item, index) => index % 2 === 0 && <div className="post_con" key={index}>{item}</div>
        )}
      </div>
      <div className="post_col_2">
        {posts.map(
          (item, index) => index % 2 !== 0 && <div className="post_con" key={index}>{item}</div>
        )}
      </div> */}
    </div>
  );
};

export default UserPosts;
