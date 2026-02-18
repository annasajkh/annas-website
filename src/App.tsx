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

                        <Route path="blogs/does_my_subconscious_plan_stuff_or_not" element={<Blog title="Does My Subconscious Plan Stuff Or Not" date="January 19, 2026" markdownContentPath="/blogs/does_my_subconscious_plan_stuff_or_not.md"  />} />
                        <Route path="blogs/my_personal_belief" element={<Blog title="My Personal Belief" date="January 24, 2026" markdownContentPath="/blogs/my_personal_belief.md"  />} />
                        <Route path="blogs/has_my_subconscious_been_orchestrating_this_all_along" element={<Blog title="Has my subconscious been orchestrating this all along?" date="January 16, 2026" markdownContentPath="/blogs/has_my_subconscious_been_orchestrating_this_all_along.md"  />} />
                        <Route path="blogs/why_i_think_cs_is_the_most_beautiful_programming_language" element={<Blog title="Why I Think C# Is The Most Beautiful Programming Language" date="September 30, 2024" markdownContentPath="/blogs/why_i_think_cs_is_the_most_beautiful_programming_language.md"  />} />
                    </Routes>
                </MainArea>
            </HashRouter>
        </div>
    );
}