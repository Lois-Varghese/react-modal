import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../common/Button/Button";
import { AppContext } from "../../util/AppContext";
import "../../styles/main.scss";

const Home = () => {
  const navigate = useNavigate();
  const { handleButtonClick } = useContext(AppContext);

  return (
    <div>
      <span className="title">Home Screen</span>
      <div className="mainWrapper">
        <div className="buttonWrapper">
          <Button onClick={() => handleButtonClick(1)}>Open Modal</Button>
        </div>
        <div className="buttonWrapper">
          <Button onClick={() => navigate("/child1")}>Child 1</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
