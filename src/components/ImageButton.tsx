import "./ImageButton.css"

type Props = {
    imageStyle?: string;
    filePath: string;
    width?: number;
    height?: number;
    onClick: () => void;
}

export default function ImageButton({imageStyle = "", filePath, onClick, width = 48, height = 48}: Props) {
  return (
    <div className="image-button" onClick={onClick}>
        <div>
            <img width={width} height={height} className={`image-button-image ${imageStyle}`} src={filePath} />
        </div>
    </div>
  )
}