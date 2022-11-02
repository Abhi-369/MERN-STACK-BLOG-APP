import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import AlertBox from "../alertBox/AlertBox";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const [show, setShow] = useState(false)
  const [logout, setLogout] = useState(false)

  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    setShow(true)
  };

  useEffect(() => {
    if (logout) {
      dispatch({ type: "LOGOUT" });
      setShow(false)
    }
  }, [logout])

  return (
    <>
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-twitter-square"></i>
          <i className="topIcon fab fa-pinterest-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/">
                ABOUT
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/">
                CONTACT
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
            <li className="topListItem" onClick={handleLogout}>
              {user && "LOGOUT"}
            </li>
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <Link to="/settings">
              <img className="topImg" src={PF + user.profilePic || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'} alt="" />
            </Link>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}
          <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>

      {show && <AlertBox setShow={setShow} setLogout={setLogout} />}

    </>
  );
}
