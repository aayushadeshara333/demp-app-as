import FormContainer from "./formContainer";
import MainSideBar from "./mainSideBar";

const MainContainer = () => {
  return (
    <div className="main-container">
      <div className="main-container-left">
        <MainSideBar />
      </div>
      <div className="main-container-right">
        <FormContainer />
      </div>
    </div>
  );
}

export default MainContainer;