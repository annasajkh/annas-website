import "./Project.css"

type Props = {
    className: string
    name: string
    description: string
    onClick: () => void
}

export default function Project(props: Props) {
  return (
    <div className={`${props.className} project`} onClick={props.onClick}>
        <h1 className="project-name">{props.name}</h1>
        <p className="project-description">{props.description}</p>
    </div>
  )
}