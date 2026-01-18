import "./Profile.css";

import cat from "../assets/cat/cat.jpg";

export default function Profile() {
    return (
        <div className="profile">
            <div className="profile-img-container">
                <img className="profile-img" src={cat} />
            </div>

            <p className="profile-description">Hi, my name is Annas i like to code and draw</p>
            <p className="quote">"The entire universe is the emergent properties of rules, we tried to discover and make sense of the rules using multiple level of abstractions, we use math to map the rules to things we can calculate, many of the rules are too complex if you try to map it math, you can do that maybe if you try hard enough, but we often use our logical assumptions to makes sense of these rules, for example human behaviors, but it doesn't stop us for making sense of the rules, down from the quantum level using quantum mechanics up to human intelligence and human behaviors using psychology, social systems, and neuroscience, and galaxies using general relativity, special relativity, thermodynamics, and entropy, i said this before i was going to celebrate Isra' and Mi'raj on my religion that i was born into that is islam on my local mosque"</p>
        </div>
    );
}
