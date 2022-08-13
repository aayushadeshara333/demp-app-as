import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../containers/user/usersActions";
import "./carousel.css"

const Carousel = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [])

  const {
    getUsersResp,
    usersError,
    usersErrorMsg,
    isGettingUsers
  } = useSelector((state) => {
    return {
      getUsersResp: state.users.getUsersResp,
      usersError: state.users.usersError,
      usersErrorMsg: state.users.usersErrorMsg,
      isGettingUsers: state.users.isGettingUsers,
    }
  })

  useEffect(() => {
    if (getUsersResp !== {} && getUsersResp !== null) {
      setUsers(getUsersResp);
      setActiveUserIndex(0);
    }
  }, [isGettingUsers]);

  const handleNext = () => {
    if (activeUserIndex < users.length - 1) {
      setActiveUserIndex(activeUserIndex + 1);
    } else {
      setActiveUserIndex(0);
    }
  }

  const handlePrev = () => {
    if (activeUserIndex > 0) {
      setActiveUserIndex(activeUserIndex - 1);
    } else {
      setActiveUserIndex(users.length - 1);
    }
  }

  const [users, setUsers] = useState([]);
  const [activeUserIndex, setActiveUserIndex] = useState(null);

  return (
    <div className="carousel">
      <div className="carousel-left">
        <div className="carousel-left-content">
          <div className="carousel-left-text">
            Project<br />
            <div className="carousel-left-text-name">
              {users.length > 0 && users[activeUserIndex].login}
            </div>
          </div>
        </div>
        <div className="carousel-buttons">
          <button className="carousel-button" onClick={handlePrev}>Prev</button>
          <button className="carousel-button" onClick={handleNext}>Next</button>
        </div>
      </div>
      <div className="carousel-right">
        {users.length > 0 && <img className="carousel-right-image" src={users[activeUserIndex].avatar_url} />}
      </div>
    </div>
  );
}
 
export default Carousel;