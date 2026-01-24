import "./Blogs.css"
import BlogThumbnail from "../components/BlogThumbnail"
import { useNavigate } from 'react-router-dom';

export default function Blogs() {
    const navigate = useNavigate();

  return (
    <div className="blogs">
        <BlogThumbnail title="Myself" date="January 24, 2026" onClick={() => {
            navigate("myself")
        }} />

        <BlogThumbnail title="Does My Subconscious Plan Stuff Or Not" date="January 18, 2026" onClick={() => {
            navigate("does_my_subconscious_plan_stuff_or_not")
        }} />

        <BlogThumbnail title="Has My Subconscious Been Orchestrating This All Along?" date="January 16, 2026" onClick={() => {
            navigate("has_my_subconscious_been_orchestrating_this_all_along")
        }} />

        <BlogThumbnail title="Why I Think C# Is The Most Beautiful Programming Language" date="September 30, 2024" onClick={() => {
            navigate("why_i_think_cs_is_the_most_beautiful_programming_language")
        }} />
    </div>
  )
}