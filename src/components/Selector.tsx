import "./Selector.css";

type Props = {
    text: string;
    isSelected: boolean;
}

export default function Selector({ text, isSelected }: Props) {
    return (
        <div className={`selector-container change-cursor-to-pointer ${isSelected ? "selector-container-selected" : "selector-container-not-selected"}`}>
            <p className="selector-text">{text}</p>
        </div>
    );
}