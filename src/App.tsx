import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";
import "./App.css";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [postsListVisible, setPostsListVisible] = useState(true);

  function showModalHandler() {
    console.log("Modal opened");
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    console.log("Modal closed");
    setModalIsVisible(false);
  }

  function setPostsListVisibleHandler() {
    console.log("Posts list visibility toggled");
    setPostsListVisible((prev) => !prev);
  }

  return (
    <main>
      <MainHeader
        onCreatePost={showModalHandler}
      />

      <button
        className="btn"
        onClick={setPostsListVisibleHandler}
      >
        Show/ Hide Posts
      </button>

      {postsListVisible && (
        <PostList
          isModalVisible={modalIsVisible}
          onStopPosting={hideModalHandler}
        />
      )}
    </main>
  );
}

export default App;
