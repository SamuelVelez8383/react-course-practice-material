import PostList from "../components/PostList";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import "./Posts.css";

function Posts() {
  const [postsListVisible, setPostsListVisible] = useState(true);

  function setPostsListVisibleHandler() {
    console.log("Posts list visibility toggled");
    setPostsListVisible((prev) => !prev);
  }

  return (
    <>
      <Outlet />
      <main>
        <button
          className="btn"
          onClick={setPostsListVisibleHandler}
        >
          Show/ Hide Posts
        </button>

        {postsListVisible && (
          <PostList />
        )}
      </main>
    </>
  );
}

export default Posts;
