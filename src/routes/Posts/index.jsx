import "./styles.scss";
// import "./_postslayout.scss";
// import "./_postsbase.scss";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AxiosUser from "../../axios/UserAxios";
import PostCard from "../../components/Post";
import Spinner from "../../components/Spinner";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const token = useSelector((state) => state.user.token);
  const [isLoading, setIsLoading] = useState(false);

  console.log("my posts", posts);
  useEffect(() => {
    setIsLoading(true);
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
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (!isLoading) {
    return (
      <>
        <div className="posts-container">
          {/* <div className="search">Search component</div> */}
          <div className="post_col_1">
            <div>
              <input type="text" placeholder="Make a post" />
              <button>Post</button>
            </div>
            {posts.map(
              (post, index) =>
                index % 2 === 0 && <PostCard post={post} key={post} />
            )}
          </div>
          <div className="post_col_2">
            {posts.map(
              (post, index) =>
                index % 2 !== 0 && <PostCard post={post} key={post} />
            )}
          </div>
          {/* {posts.map((post) => (
              <PostCard post={post} key={post} />
            ))} */}
        </div>
      </>
    );
  } else {
    return (
      <>
        <Spinner />
      </>
    );
  }
};
export default Posts;
