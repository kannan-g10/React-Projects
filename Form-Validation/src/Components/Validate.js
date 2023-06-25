import { useState } from "react";

const Validate = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [confirmPassWord, setConfirmPassWord] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassWord, setErrorPassWord] = useState("");
  const [errorConfirmPassWord, setErrorConfirmPassWord] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passWordColor, setPassWordColor] = useState("");
  const [confirmPassWordColor, setConfirmPassWordColor] = useState("");

  function validate(e) {
    e.preventDefault();

    if (userName.length > 8) {
      setErrorUserName("");
      setUserColor("green");
    } else {
      setErrorUserName("Username must be 8 letters long");
      setUserColor("red");
    }

    if (email.includes("@gmail.com")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("Email should have a @gmail.com");
      setEmailColor("red");
    }

    if (passWord > 8) {
      setErrorPassWord("");
      setPassWordColor("green");
    } else {
      setErrorPassWord("Passwords should be 8 letters long");
      setPassWordColor("red");
    }

    if (passWord !== "" && passWord === confirmPassWord) {
      setErrorConfirmPassWord("");
      setConfirmPassWordColor("green");
    } else {
      setErrorConfirmPassWord("Password didn't matched");
      setConfirmPassWordColor("red");
    }
  }

  return (
    <>
      <div className="card">
        <div className="card-image"></div>
        <form>
          <input
            type="text"
            placeholder="Name"
            style={{ borderColor: userColor }}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <p className="error">{errorUserName}</p>
          <input
            type="text"
            placeholder="Email"
            style={{ borderColor: emailColor }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="error">{errorEmail}</p>
          <input
            type="password"
            placeholder="Password"
            style={{ borderColor: passWordColor }}
            value={email}
            onChange={(e) => setPassWord(e.target.value)}
          />
          <p className="error">{errorPassWord}</p>
          <input
            type="password"
            placeholder="ConfirmPassword"
            style={{ borderColor: confirmPassWordColor }}
            value={email}
            onChange={(e) => setPassWord(e.target.value)}
          />
          <p className="error">{errorConfirmPassWord}</p>
          <button className="submit-btn" onClick={validate}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Validate;
