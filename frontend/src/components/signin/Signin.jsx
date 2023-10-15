import { useState } from "react";
import { useUser } from "../../hooks/useUser";
import "./styles.scss";

const Signin = () => {
  const { username, setUsername } = useUser();
  const [localUserName, setLocalUsername] = useState(username);

  const handleSignIn = () => {
    setUsername(localUserName);
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <p>Enter your username</p>
        <input
          value={localUserName}
          onChange={(event) => setLocalUsername(event.target.value)}
          placeholder="Type your username"
        ></input>
        <button onClick={handleSignIn} className="sign-in-button">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Signin;
