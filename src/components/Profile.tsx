import "./Profile.css";

import cat from "../assets/cat/cat.jpg";

export default function Profile() {
    return (
        <div className="profile">
            <div className="profile-img-container">
                <img className="profile-img" src={cat} />
            </div>

            <p className="profile-description">Hi, my name is Annas i like to know how the universe work, code, and draw</p>
        </div>
    );
}
