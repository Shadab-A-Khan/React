import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { getPosts } from "../api";
import { Home, Login, Signup, Settings, UserProfile } from "../pages";
import { Loader, Navbar, FriendsList, CreatePost,Post } from "./";
import { useAuth } from "../hooks";


const PrivateRoute = ({ children }) => {
  const auth = useAuth(); // isauth() returns true or false based on localStorage

  return auth.user ? children : <Navigate to="/login" />;
};

const Page404 = () => {
  return <h1>404</h1>;
};

function App() {
  const auth = useAuth();

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await getPosts();

  //     if (response.success) {
  //       setPosts(response.data.posts);
  //     }

  //     setLoading(false);
  //   };

  //   fetchPosts();
  // }, []);

  if (auth.loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Signup />} />
          <Route path="*" element={<Page404 />} />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/:userId"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
