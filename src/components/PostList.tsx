import Modal from "./Modal";
import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import { useEffect, useState } from "react";

function PostList(props: {
  isModalVisible: boolean;
  onStopPosting: () => void;
}) {

  const [posts, setPosts] = useState<{ name: string; message: string }[]>([])
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch('http://localhost:8080/posts');
      const data = await response.json();
      setPosts(data.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  function addPostHandler(postData: { name: string; message: string }) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    }
    )
    setPosts((previousPosts) => [postData, ...previousPosts])
  }

  return (
    <>
      {props.isModalVisible && (
        <Modal onClose={props.onStopPosting}>
          <NewPost onAddPost={addPostHandler}
            onCancel={props.onStopPosting}
          />
        </Modal>
      )}
      {!isFetching && posts.length > 0 && (<ul className={classes.posts}>
        {/* <Post name={name} body={message} /> */}
        {posts.map((post, index) => (
          <Post
            key={index}
            name={post.name}
            body={post.message}
          />
        ))}
      </ul>)}
      {posts.length === 0 && (
        <div>
          <h2>There are no posts yet</h2>
          {!isFetching && <p>Start by adding a new post!</p>}
          {isFetching && <p>Loading posts...</p>}
        </div>)}


    </>
  );
}

export default PostList;
