// import "./styles.scss";
// import "./_postslayout.scss";
// import "./_postsbase.scss";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AxiosUser from "../../axios/UserAxios";
import PostCard from "../../components/Post";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const token = useSelector((state) => state.user.token);

  console.log("my posts", posts);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const results = await AxiosUser.get("/social/posts/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const res = results.data.results;
        setPosts(res);
        console.log("data", res);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <div className="posts-container">
        <div className="search">{/* Search component */}</div>
        <div className="main">
          <div className="status">{/* Status input component */}</div>
          <div className="posts">
            {posts.map((post) => (
              <PostCard post={post} key={post} />
            ))}
          </div>
          <div className="friends">{/* Friends section */}</div>
          <div className="shares">{/* Shares section */}</div>
        </div>
      </div>
    </>
  );
};
export default Posts;
