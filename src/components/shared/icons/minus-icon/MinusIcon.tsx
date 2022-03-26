import React from "react";

interface IProps {
    color: string;
    width: number;
    height: number;
}

const MinusIcon: React.FC<IProps> = (props) => {
    const { color, width, height } = props;

    return (
        <svg width={`${width}rem`} height={`${height}rem`} viewBox="0 0 16 16">
            <path fill={color} d="M0 6.5v3c0 0.276 0.224 0.5 0.5 0.5h15c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5h-15c-0.276 0-0.5 0.224-0.5 0.5z"></path>
        </svg>
    );
};

export default MinusIcon;
