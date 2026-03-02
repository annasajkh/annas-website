import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import MainArea from "./components/MainArea";
import Blogs from "./pages/Blogs";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

export default function App() {
    return (
        <div className="app">
            <Analytics />
            <SpeedInsights />
            
            <HashRouter>
                <Navbar />

                <MainArea>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/contact" element={<Contact />} />

                        <Route path="blogs/why_i_think_cs_is_the_most_beautiful_programming_language" element={<Blog title="Why I Think C# Is The Most Beautiful Programming Language" date="September 30, 2024" markdownContentPath="/blogs/why_i_think_cs_is_the_most_beautiful_programming_language.md"  />} />
                        <Route path="blogs/a_story_about_the_universe_or_the_multiverse" element={<Blog title="A Story About The Universe Or The Multiverse" date="March 2, 2025" markdownContentPath="/blogs/a_story_about_the_universe_or_the_multiverse.md"  />} />
                        <Route path="blogs/a_story_about_the_hyperintelligence" element={<Blog title="A Story About The HyperIntelligence" date="March 3, 2025" markdownContentPath="/blogs/a_story_about_the_hyperintelligence.md"  />} />

                    </Routes>
                </MainArea>
            </HashRouter>
        </div>
    );
}