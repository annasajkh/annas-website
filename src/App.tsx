import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import MainArea from "./components/MainArea";
import Blogs from "./pages/Blogs";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";

export default function App() {
    return (
        <div className="app">
            <HashRouter>
                <Navbar />

                <MainArea>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/contact" element={<Contact />} />
                    
                        <Route path="/blog1" element={<Blog title="Why I Think C# Is The Most Beautiful Programming Language" date="September 30, 2024" markdownContentPath="/blogs/blog1.md"  />} />
                    </Routes>
                </MainArea>
            </HashRouter>
        </div>
    );
}