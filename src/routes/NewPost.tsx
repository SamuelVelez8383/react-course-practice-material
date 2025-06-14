import { Link, useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import { useState } from "react";
import classes from "./NewPost.module.css";

interface NewPostProps {
  onAddPost: (postData: { name: string; message: string }) => void;
}

function NewPost(props: NewPostProps) {
  const [message, setMessage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const navigate = useNavigate();

  function messageChangeHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setMessage(event.target.value);
  }
  function nameChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    console.log("Form submitted");
    console.log('event', event);
    const postData = {
      name: name,
      message: message,
    };
    console.log("Post data submitted:", postData);
    // Here you would typically send the postData to your server or API
    // For example, using fetch or axios
    // fetch('your-api-endpoint', {
    //   method: 'POST',
    //   body: JSON.stringify(postData),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
    // Close the modal after submission
    props.onAddPost(postData);
    navigate(".."); // Navigate back to the previous page
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required onChange={nameChangeHandler} />
        </div>
        <div>
          <label htmlFor="message">Text</label>
          <textarea
            id="message"
            required
            onChange={messageChangeHandler}
          ></textarea>
        </div>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
