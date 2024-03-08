import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import FindFriends from "./FindFriends";
import Posts from "./Posts";
import NotFound from "./NotFound";
import Layout from "./Layout";
import ProtectedRoutes from "./ProtectedRoutes";
import Profile from "./Profile";
import FriendProfile from "./FriendProfile";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route element={<Layout />}>
            <Route path="/posts" element={<Posts />} />
            <Route path="/find-friends" element={<FindFriends />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/friend-profile/:id" element={<FriendProfile />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
     
  );
};

export default Router;
