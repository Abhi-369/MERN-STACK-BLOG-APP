import "./post.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";

  const { user, dispatch } = useContext(Context);

  return (
    <div className='post__container'>
      <div className="post">
        {post?.photo && <img className="postImg" src={PF + post?.photo} alt="empty" />}
        <div className="postInfo">
          <div className="postCats">
            {post.categories.map((c, i) => (
              <span key={i} className="postCat">{c.name}</span>
            ))}
          </div>
          <Link to={`/post/${post._id}`} className="link">
            <span className="postTitle">{post.title}</span>
          </Link>
          <hr />
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="postDesc">{post.desc}</p>
      </div>

      <div className='info'>
        <img src={PF + user?.profilePic || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'} className='admin__img' alt="" />
        <h1>{post.username}</h1>
      </div>

    </div>
  );
};
