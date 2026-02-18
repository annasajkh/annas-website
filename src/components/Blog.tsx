import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import SvgButton from "../components/SvgButton"
// @ts-expect-error it just work so we can ignore the error
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism/";
import "./Blog.css";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

type Props = {
    title: string;
    date: string;
    markdownContentPath: string;
};

export default function Blog(props: Props) {
    const [markdownContent, setMarkdownContent] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetch(props.markdownContentPath)
            .then((result) => result.text())
            .then((text) => setMarkdownContent(text));
    }, [props.markdownContentPath]);

    return (
        <>
            <div className="blog">
                <div className="blog-header">
                    <SvgButton onClick={() => navigate("/blogs")}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="50" height="50">
                            {/* Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc */}
                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                        </svg>
                    </SvgButton>

                    <p className="blog-title">{props.title}</p>

                    <p className="blog-date">{props.date}</p>
                </div>
                
                <Markdown
                    className="markdown-content"
                    components={{
                        img: ({ ...props }) => (
                            <img 
                                {...props} 
                                style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }} 
                            />
                        ),

                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        code({ node, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || "");
                            return match ? (
                                <SyntaxHighlighter
                                    style={oneDark}
                                    language={match[1]}
                                    PreTag="div"
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    {...props as any}
                                >
                                    {String(children).replace(/\n$/, "")}
                                </SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                >
                    {markdownContent}
                </Markdown>
            </div>
            <div className="spacing-blog" />
        </>
    );
}