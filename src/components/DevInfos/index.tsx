import "./styles.scss";
import profileImg from "../../assets/profile.svg";

export default function DevInfos() {
  return (
    <>
      <div className="profile-image">
        <img src={profileImg} alt="Profile Image" />
      </div>
      <div className="dev-info">
        <h2>Rafael Sulimann</h2>
        <h3>Full Stack - Spring - React</h3>
      </div>
    </>
  );
}
