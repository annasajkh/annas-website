import "./Blogs.css"
import BlogThumbnail from "../components/BlogThumbnail"
import { useNavigate } from 'react-router-dom';

export default function Blogs() {
    const navigate = useNavigate();

  return (
    <div className="blogs">
        <BlogThumbnail title="Why I Think C# Is The Most Beautiful Programming Language" date="September 30, 2024" onClick={() => {
            navigate("why_i_think_cs_is_the_most_beautiful_programming_language")
        }} />
    </div>
  )
}