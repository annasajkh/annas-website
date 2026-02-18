import { ReactNode } from "react";
import "./MainArea.css"

type Props = {
    children: ReactNode;
}

export default function MainArea({ children }: Props) {
    return (
        <div className="main-area">
            <div className="navbar-offset" />
            {children}
        </div>
    )
}