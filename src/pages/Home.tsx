import "./Home.css"

import Profile from "../components/Profile";
import Project from "../components/Project";
import ImageButton from "../components/ImageButton";
import Skill from "../components/Skill";

import twitterXImgPath from "../assets/social_media/twitter_x.jpg";
import youtubeImgPath from "../assets/social_media/youtube.png";
import discordImgPath from "../assets/social_media/discord.jpg";
import linktreeImgPath from "../assets/social_media/linktree.png";

import csharpImgPath from "../assets/skills/csharp.png"
import godotImgPath from "../assets/skills/godot.png"
import javaImgPath from "../assets/skills/java.png"
import pythonImgPath from "../assets/skills/python.png"
import reactImgPath from "../assets/skills/react.png"
import typescriptImgPath from "../assets/skills/typescript.png"
import libgdxImgPath from "../assets/skills/libgdx.png"

import githubIconPath from "../assets/projects/github.png"
import itchIOIconPath from "../assets/projects/itch_io.png"
import replitIconPath from "../assets/projects/replit.jpg"


export default function Home() {
    return (
        <div className="home">
            <Profile />

            <h1 className="header-text center-text">Skills</h1>

            <div className="skills-container">
                <div className="skills">
                    <Skill filePath={csharpImgPath} skillName="C#" onClick={() => window.open("https://github.com/annasajkh?tab=repositories&q=&type=&language=c%23&sort=")} />
                    <Skill filePath={godotImgPath} skillName="Godot" onClick={() => window.open("https://github.com/annasajkh?tab=repositories&q=topic%3Agodot&type=&language=&sort=")} />
                    <Skill filePath={javaImgPath} skillName="Java" onClick={() => window.open("https://github.com/annasajkh?tab=repositories&q=&type=&language=java&sort=")} />
                    <Skill filePath={pythonImgPath} skillName="Python" onClick={() => window.open("https://github.com/annasajkh?tab=repositories&q=&type=&language=python&sort=")} />
                    <Skill filePath={reactImgPath} skillName="React" onClick={() => window.open("https://github.com/annasajkh?tab=repositories&q=topic%3Areact&type=&language=&sort=")} />
                    <Skill filePath={typescriptImgPath} skillName="Typescript" onClick={() => window.open("https://github.com/annasajkh?tab=repositories&q=&type=&language=typescript&sort=")} />
                    <Skill filePath={libgdxImgPath} skillName="LibGDX" onClick={() => window.open("https://github.com/annasajkh?tab=repositories&q=topic%3Alibgdx&type=&language=&sort=")} />
                </div>
            </div>

            <div className="spacing-home" />

            
            <div className="projects">
                <h1 className="project-text">You can find all of my projects on</h1>

                <div className="project-platform-container">
                    <ImageButton imageStyle="project-platform" filePath={githubIconPath} width={96} height={96} onClick={() => window.open("https://github.com/annasajkh")} />
                    <ImageButton imageStyle="project-platform" filePath={itchIOIconPath} width={96} height={96} onClick={() => window.open("https://annasjk.itch.io")} />
                    <ImageButton imageStyle="project-platform" filePath={replitIconPath} width={96} height={96} onClick={() => window.open("https://replit.com/@AnnasVirtual")} />
                </div>
            </div>
            
            <div className="spacing-home" />

            <h1 className="header-text beginning-text">Highlights</h1>

            <div className="highlights-container">
                <Project className="highlight-1" name="Annas Engine" description="Game engine i made for learning OpenTK (C# binding of OpenGL)" onClick={() => window.open("https://github.com/annasajkh/AnnasEngine")} />
                <Project className="highlight-2" name="World Tweaker" description="Oneshot mod manager that i made in like 2 weeks for testing electron" onClick={() => window.open("https://github.com/annasajkh/world-tweeker")} />

                <Project className="highlight-3" name="Minecraft 2D" description="A Terraria + Minecraft like game written in libgdx" onClick={() => window.open("https://github.com/annasajkh/Minecraft2D")} />
                <Project className="highlight-4" name="Annas Bot" description="A bot for my discord server written in python" onClick={() => window.open("https://github.com/annasajkh/AnnasBot")} />

                <Project className="highlight-5" name="Si Merah" description="My first finished game in godot" onClick={() => window.open("https://github.com/annasajkh/Si-Merah")} />
                <Project className="highlight-6" name="Zombie Shoot" description="Me trying to use c to make game with oop it's so much pain" onClick={() => window.open("https://github.com/annasajkh/ZombieShoot")} />

                <Project className="highlight-7" name="Frosty" description="A game to test the Foster framework" onClick={() => window.open("https://github.com/annasajkh/Frosty")} />
                <Project className="highlight-8" name="OneInfection " description="An idea comes into my head when godot 4 have sub window support and when godot 4 seems stable enough to use" onClick={() => window.open("https://github.com/annasajkh/OneInfection")} />

                <Project className="highlight-9" name="Very Simple Neural Network Library" description="A simple Neural Network Library written in java" onClick={() => window.open("https://github.com/annasajkh/Very-Simple-Neural-Network-Library")} />
                <Project className="highlight-10" name="Simple GPT" description="A simple gpt implementation" onClick={() => window.open("https://github.com/annasajkh/SimpleGPT")} />

                <Project className="highlight-11" name="Particle Sandbox" description="Powder toy and noita like sand simulation written in c++ and sfml" onClick={() => window.open("https://github.com/annasajkh/ParticleSandbox")} />
                <Project className="highlight-12" name="Particle Life" description="Coolest 2d life simulation ever existed" onClick={() => window.open("https://github.com/annasajkh/Particle-Life")} />

                <Project className="highlight-13" name="Mouse And Beat" description="Cool project is like just shape and beat" onClick={() => window.open("https://github.com/annasajkh/Mouse-And-Beat")} />
                <Project className="highlight-14" name="Game" description="Most ambitious early project in javascript" onClick={() => window.open("https://github.com/annasajkh/Game")} />

                <Project className="highlight-15" name="Chaos Company" description="Lethal company mod i made that is about chaos" onClick={() => window.open("https://github.com/annasajkh/ChaosCompany")} />
                <Project className="highlight-16" name="Neutron" description="C# framework to make application with webview it's like tauri but with c# backend" onClick={() => window.open("https://github.com/NeutronFramework")} />
            </div>

            <div className="spacing-home-half" />

            <div className="social-media-container">
                <ImageButton filePath={twitterXImgPath} onClick={() => window.open("https://x.com/AnnasVirtual")} />
                <ImageButton filePath={youtubeImgPath} onClick={() => window.open("https://www.youtube.com/@AnnasVirtual")} />
                <ImageButton filePath={discordImgPath} onClick={() => window.open("https://discord.gg/JfBvhYmCkC")} />
                <ImageButton filePath={linktreeImgPath} onClick={() => window.open("https://linktr.ee/AnnasVirtual")} />
            </div>

        </div>
    );
}
