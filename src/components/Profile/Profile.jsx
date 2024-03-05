import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux/actions/actions";
import styles from "./Profile.module.css";
import { AiOutlineEdit } from 'react-icons/ai';
import { FaEnvelope, FaPhone, FaExclamationCircle, FaAt, FaSave, FaEdit } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const user = useSelector((state) => ({
        userId: state.userId,
        userType: state.userType,
        userName: state.userName,
        userLastName: state.userLastName,
        userPhone: state.userPhone,
        email: state.userEmail,
    }));

    const [formData, setFormData] = useState({
        firstName: user?.userName || "",
        lastName: user?.userLastName || "",
        email: "",
        phoneNumber: "",
    });

    // Usa useEffect para actualizar initialState cuando cambien los campos firstName y lastName
    useEffect(() => {
        setFormData({
            ...formData,
            firstName: user?.userName,
            lastName: user?.userLastName,
        });
    }, [user.userName, user.userLastName]);

    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [updateSuccess, setUpdateSuccess] = useState(null);
    const [updateError, setUpdateError] = useState(null);

    const message = (
        <>
            User info updated successfully ✔️
            <br />
            {formData.email && "Changes made:"}
            <ul>
                {formData.email &&
                    <li>
                        <strong>Email:</strong> {formData.email}
                    </li>}

                {formData.phoneNumber &&
                    <li>
                        <strong>Phone Number:</strong> {formData.phoneNumber}
                    </li>}

                {formData.password &&
                    <li>
                        <strong>New Password:</strong> {formData.password}
                    </li>}
            </ul>
        </>
    );

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (updateSuccess || updateError) {
            setUpdateSuccess(null);
            setUpdateError(null)
        }

        setFormData({
            ...formData,
            [name]: value,
        });

    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const responseData = await dispatch(updateUser(user.userId, formData));
            setFormData((prevFormData) => ({
                ...prevFormData,
                email: "",
                phoneNumber: "",
            }));
            setUpdateSuccess(message);
            setUpdateError(null);
        } catch (error) {
            console.log(error);
            let errorMessage = "Internal server Error";

            if (error.response) {
                setUpdateError(error.response.data.error);
                setUpdateSuccess(null);
            } else
                setUpdateError(errorMessage)
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

            <h2 className={styles.title}>Edit Profile</h2>

            <div className={styles.currentData}>
                <p>
                    <strong>Name:</strong> {user.userName} {user.userLastName}
                </p>
                <p>
                    <strong>Current Email:</strong> {user.email}
                </p>
                <p>
                    <strong>Current Phone Number:</strong> {user.userPhone}
                </p>
            </div>

            <form className={styles.form} onClick={handleFormClick}>

                {/*First Name */}
                <label className={styles.label}>
                    <AiOutlineEdit /> First Name
                </label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={styles.input}
                />

                {/*Last Name */}
                <label className={styles.label}>
                    <AiOutlineEdit /> Last Name
                </label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={styles.input}
                />

                {/* Email */}
                <label className={styles.label}>
                    <FaAt /> Email
                </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your new email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                />    

                {/*Phone Number */}
                <label className={styles.label}>
                    <FaPhone /> Phone Number
                </label>
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Enter your new phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={styles.input}
                />

                {/*Submit Button */}

                {(
                    formData.firstName !== user.userName ||
                    formData.lastName !== user.userLastName ||
                    formData.email !== '' ||
                    formData.phoneNumber !== ''
                ) && (
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className={styles.button}
                        >
                            <FaEdit/> Save Changes
                        </button>
                    )}

                {/* Error & Success Messages */}
                {updateError && <p className={styles.errors}><FaExclamationCircle /> {updateError}</p>}
                {updateSuccess && <p>{updateSuccess}</p>}

            </form>
        </div>
    );
}

export default Profile;
