import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const LoginPage = (props) => {
  const [username, setUsername] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);

  let handleUserNameChange = (event) => setUsername(event.target.value);

  let handleSubmit = () => {
    if (username) {
      setIsFormValid(true);
      props.setUser({
        username: username,
      });
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <div>
      <TextField
        label="Type your username"
        placeholder="Username"
        onChange={handleUserNameChange}
        margin="normal"
        error={!isFormValid}
        helperText={isFormValid ? "" : "username is required!"}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            handleSubmit();
          }
        }}
      />
      <br />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Login
      </Button>
    </div>
  );
};

export default LoginPage;
