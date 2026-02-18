import "./Skill.css"

type Props = {
    filePath: string
    skillName: string
    onClick: () => void;
}

export default function Skill(props: Props) {
  return (
    <div className="skill" onClick={props.onClick}>
        <img className="skill-img" src={props.filePath}></img>
        <p className="skill-text">{props.skillName}</p>
    </div>
  )
}
