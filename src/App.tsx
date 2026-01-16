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
                    
                        <Route path="/blog1" element={<Blog title="Why I Think C# Is The Most Beautiful Programming Language" date="September 30, 2024" markdownContentPath="/blogs/blog1.md"  />} />
                        <Route path="/blog2" element={<Blog title="Has my subconscious been orchestrating this all along?" date="January 16, 2026" markdownContentPath="/blogs/blog2.md"  />} />
                        <Route path="/blog3" element={<Blog title="My Belief System" date="January 16, 2026" markdownContentPath="/blogs/blog3.md"  />} />

                    </Routes>
                </MainArea>
            </HashRouter>
        </div>
    );
}