import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/actions/actions";
import styles from "./Login.module.css" // Importa la hoja de estilos como "styles"
import validateLogin from "./validateLogin";
import { FaLock, FaExclamationCircle, FaAt, FaSignInAlt } from "react-icons/fa";

const Login = () => {

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({})

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (errorMessage) {
      setErrorMessage("");
    }

    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));

    setErrors(validateLogin({
      ...userData,
      [name]: value,
    }));

  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    const existError = Object.keys(errors)

    if (existError.length === 0) {
      try {
        await dispatch(logIn(userData));
        setSuccessMessage("Sign up Successful ✔️")

      } catch (error) {
        setSuccessMessage("")
        setErrorMessage(error.response.data.error)
      }
    }
  };

  return (
    <div className={styles.formBackground}>

      <h3 className={styles.title}>Log In</h3>

      <form className={styles.formContainer} onSubmit={handleSubmit}>

        <label htmlFor="email" className={styles.formLabels}>
         <FaAt/> Email:
        </label>

        <input
          className={styles.formInputs}
          type="email"
          id="email"
          placeholder="Email..."
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        {errors.email && <p className={styles.errors}>{errors.email}</p>}

        <label htmlFor="password" className={styles.formLabels}>
          <FaLock/> Password:
        </label>
        <input
          className={styles.formInputs}
          type="password"
          id="password"
          placeholder="Password..."
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        {errors.password && <p className={styles.errors}>{errors.password}</p>}

        <button className={styles.formButton} type="submit">
          <FaSignInAlt/> Submit
        </button>

        {errorMessage && (
          <p className={styles.errors}><FaExclamationCircle />{errorMessage}</p>
        )}

        {successMessage && (
          <p>{successMessage}</p>
        )}

      </form>

    </div>
  );
};

export default Login;