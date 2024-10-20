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
            <img className="profile-img" src={isMouseDown ? annasHappyPath : annasNormalPath} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
            <p className="profile-description">Hi, my name is Annas i like to code and draw</p>
        </div>
    );
}
