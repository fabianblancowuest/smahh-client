import React, { useState } from "react";
import styles from "./ChangePassword.module.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { FaLock, FaExclamationCircle } from "react-icons/fa"; 

const ChangePassword = () => {

    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({})
    const [updateSuccess, setUpdateSuccess] = useState(null);
    const [updateError, setUpdateError] = useState(null);

    const userId = useSelector(state => state.userId)

    const message = (
        <>
            Password updated successfully ✔️
            <br />
            A message will be sent to you
        </>
    );

    const isButtonDisabled =
        Object.values(passwordData).some((value) => !value) ||
        Object.values(errors).some((error) => error);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (updateError || updateSuccess) {
            setUpdateError(null);
            setUpdateSuccess(null);
        }

        setPasswordData({
            ...passwordData,
            [name]: value,
        });

        const fieldErrors = validatePasswordMatch({
            ...passwordData,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: fieldErrors[name],
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.put(`http://localhost:3001/user/change-password/${userId}`, passwordData)
            setPasswordData({
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
            })
            setUpdateSuccess(message);
            setUpdateError(null);
        } catch (error) {
            setUpdateError(error.response.data.error)
            setUpdateSuccess(null);
        }

    };

    const handleFormClick = () => {
        if (updateSuccess) {
            setUpdateSuccess(null);
            setUpdateError(null)
        }
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Change Password</h2>

            <form className={styles.form} onSubmit={handleSubmit} onClick={handleFormClick}>
                {/* Current Password */}
                <label className={styles.label}>
                    <FaLock /> Current Password</label>
                <input
                    type="password"
                    name="currentPassword"
                    placeholder="Enter your current password"
                    value={passwordData.currentPassword}
                    onChange={handleChange}
                    className={styles.input}
                />

                {/* New Password */}
                <label className={styles.label}>
                    <FaLock /> New Password
                </label>
                <input
                    type="password"
                    name="newPassword"
                    placeholder="Enter new password"
                    value={passwordData.newPassword}
                    onChange={handleChange}
                    className={styles.input}
                />
                {errors.newPassword && <p className={styles.errors}><FaExclamationCircle /> {errors.newPassword}</p>}

                {/* Confirm New Password */}
                <label className={styles.label}>
                    <FaLock /> Confirm New Password
                </label>
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm new password"
                    value={passwordData.confirmPassword}
                    onChange={handleChange}
                    className={styles.input}
                />
                {errors.confirmPassword && <p className={styles.errors}><FaExclamationCircle /> {errors.confirmPassword}</p>}

                {/* Submit Button */}
                <button type="submit"
                    className={`${styles.button} ${isButtonDisabled ? styles.disabledButton : ""}`}
                    disabled={isButtonDisabled}
                >
                    <FaLock /> Change Password
                </button>

                {/* Error & Success Messages */}
                {updateError && <p className={styles.errors}><FaExclamationCircle /> {updateError}</p>}
                {updateSuccess && <p className={styles.success}> {updateSuccess}</p>}
            </form>
        </div>
    );
};
export default ChangePassword;

const validatePasswordMatch = (input) => {
    let errors = {}

    if (!/^(?=.*\d).{6,}$/.test(input.newPassword)) {
        errors.newPassword = "Password must contain at least one digit and be 6 characters or longer";
    }

    if (input.newPassword !== input.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
    }

    return errors
}