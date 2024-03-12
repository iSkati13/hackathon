import React from "react";

const About = () => {
  return (
    <div>
      <form action="action_page.php">
        {/* <div className="container"> */}
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        {/* <hr> */}
        <br />
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          id="email"
          required
        />
        <br />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          id="psw"
          required
        />
        <br />
        <label htmlFor="psw-repeat">
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          id="psw-repeat"
          required
        />
        {/* <hr> */}
        <br />
        <p>
          By creating an account you agree to our{" "}
          <a href="#">Terms & Privacy</a>.
        </p>
        <button type="submit" className="registerbtn">
          Register
        </button>
        {/* </div> */}

        {/* <div className="container signin"> */}
        <p>
          Already have an account? <a href="#">Sign in</a>.
        </p>
        {/* </div> */}
      </form>
    </div>
  );
};

export default About;
