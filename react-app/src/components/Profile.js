import React from "react";
import { useSelector } from 'react-redux';
import User from "./User";

const Profile = () => {
    const user = useSelector(state => state.session.user);

    // Handle if user is null or not an array
    if (!user) {
        return (
            <div>
                <h1>Profile</h1>
                <h2>No user data available.</h2>
            </div>
        );
    }

    // If user is a single object, not an array
    if (!Array.isArray(user)) {
        return (
            <div>
                <h1>Profile</h1>
                <h2>Welcome to your profile page!</h2>
                <section>
                    <div key={user.id}>
                        <h3>{user.username}</h3>
                        <p>Email: {user.email}</p>

                    </div>
                </section>
            </div>
        );
    }

    // If user is an array (unlikely, but for compatibility)
    return (
        <div>
            <h1>Profile</h1>
            <h2>Welcome to your profile page!</h2>
            <section>
                {user.map((u) => (
                    <div key={u.id}>
                        <h3>{u.username}</h3>
                        <p>Email: {u.email}</p>

                    </div>
                ))}
            </section>
        </div>
    );
};
export default Profile;