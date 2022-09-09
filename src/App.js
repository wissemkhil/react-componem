import "./App.css";
import { Fragment } from "react";
import Address from "./Component/Profil/Address";
import UserName from "./Component/Profil/UserName";
import ProfilePhoto from "./Component/Profil/ProfilePhoto";

function App() {
  return (
    <Fragment>
      <div className="card-container">
        <ProfilePhoto />
        <h3>
          {" "}
          <Address />
        </h3>
        <h2>
          <UserName />
        </h2>
      </div>
    </Fragment>
  );
}

export default App;
