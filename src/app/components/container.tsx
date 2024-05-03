import React from "react";

interface ContainerProps {
    children: React.ReactNode;
}

export default function Container(props: ContainerProps) {
    return (
        <div className="max-w-[1920px] mx-auto xl:px-20 md:px-2 px-4">
            {props.children}
        </div>
    );
}