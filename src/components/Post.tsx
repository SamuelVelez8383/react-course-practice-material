import classes from "./Post.module.css";

function Post(props: { name?: string; body?: string }) {
  return (
    <li className={classes.post}>
      <p className={classes.name}>{props.name}</p>
      <p className={classes.body}>{props.body}</p>
    </li>
  );
}

export default Post;
