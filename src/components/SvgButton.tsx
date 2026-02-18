import { ReactNode } from "react";
import "./SvgButton.css"

type Props = {
    children: ReactNode;
    svgStyle?: string;
    onClick: () => void;
}

export default function SvgButton({children, svgStyle = "", onClick}: Props) {
  return (
    <div className="svg-button" onClick={onClick}>
        <div className={`svg-button-svg ${svgStyle}`}>
            {children}
        </div>
    </div>
  )
}