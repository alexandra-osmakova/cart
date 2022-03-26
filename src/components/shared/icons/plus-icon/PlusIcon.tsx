import React from "react";

interface IProps {
    color: string;
    width: number;
    height: number;
}

const PlusIcon: React.FC<IProps> = (props) => {
    const { color, width, height } = props;

    return (
        <svg width={`${width}rem`} height={`${height}rem`} viewBox="0 0 16 16">
            <path
                fill={color}
                d="M15.5 6h-5.5v-5.5c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v5.5h-5.5c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h5.5v5.5c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-5.5h5.5c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5z"></path>
        </svg>
    );
};

export default PlusIcon;
