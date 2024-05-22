import {setCookie} from "@/app/action/cookie";
import React from "react";

export const Button = () => {
    return <button onClick={e => setCookie()}>set cookie</button>
}


interface ButtonProps {
    onClick: () => void;
}

export const Button2: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <button onClick={onClick}>
            Click me
        </button>
    );
};