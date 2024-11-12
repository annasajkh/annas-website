import { useState } from "react";
import "./Profile.css";

import annasNormalPath from "../assets/annas/annas_normal.png";
import annasHappyPath from "../assets/annas/annas_happy.png";

export default function Profile() {
    const [isMouseDown, setIsMouseDown] = useState(false);

    function onMouseEnter() {
        setIsMouseDown(true);
    }

    function onMouseLeave() {
        setIsMouseDown(false);
    }

    return (
        <div className="profile">
            <div className="profile-img-container">
                <img className="profile-img" src={isMouseDown ? annasHappyPath : annasNormalPath} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
            </div>

            <p className="profile-description">Hi, my name is Annas i like to code and draw</p>
        </div>
    );
}
