import "./BlogThumbnail.css"

type Props = {
    title: string
    date: string
    onClick: () => void
}

export default function BlogThumbnail(props: Props) {
  return (
    <div className="blog-thumbnail" onClick={props.onClick}>
        <p className="blog-thumbnail-date">{props.date}</p>
        <p className="blog-thumbnail-title">{props.title}</p>
    </div>
  )
}