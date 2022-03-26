import React from "react";

interface IProps {
    color: string;
    width: number;
    height: number;
}

const BinIcon: React.FC<IProps> = (props) => {
    const { color, width, height } = props;

    return (
        <svg width={`${width}rem`}
            height={`${height}rem`} viewBox="0 0 16 16">
            <path fill={color} d="M2 5v10c0 0.55 0.45 1 1 1h9c0.55 0 1-0.45 1-1v-10h-11zM5 14h-1v-7h1v7zM7 14h-1v-7h1v7zM9 14h-1v-7h1v7zM11 14h-1v-7h1v7z"></path>
            <path fill={color} d="M13.25 2h-3.25v-1.25c0-0.412-0.338-0.75-0.75-0.75h-3.5c-0.412 0-0.75 0.338-0.75 0.75v1.25h-3.25c-0.413 0-0.75 0.337-0.75 0.75v1.25h13v-1.25c0-0.413-0.338-0.75-0.75-0.75zM9 2h-3v-0.987h3v0.987z"></path>
        </svg>
    );
};

export default BinIcon;