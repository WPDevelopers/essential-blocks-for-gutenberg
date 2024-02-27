import { useState, useEffect, useRef } from "@wordpress/element";

export default () => {

    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {
        const svgParentElement = document.getElementById('eb-icon')?.parentNode;
        setTimeout(() => {
            if (
                svgParentElement &&
                svgParentElement.classList.contains("is-pressed")
            ) {
                setIsSelected(true);
            } else {
                setIsSelected(false);
            }
        }, 100)
    })

    return (
        <svg
            id="eb-icon"
            width="179"
            height="200"
            viewBox="0 0 179 200"
            fill={isSelected ? "#f5f5f5" : "#ffffff"}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_2_27)">
                <path
                    d="M121.457 0H0V126.763H49.9019V124.353H93.8814V75.404H49.9019V44.596H124.708V125.567C155.292 119.888 178.365 93.1714 178.365 61.0369V56.9267C178.365 25.5021 152.863 0 121.439 0L121.457 0Z"
                    fill={isSelected ? "#ffffff" : "#3A3A47"}
                />
                <path
                    d="M124.708 76.0205V155.18H49.9019V124.372H93.8814V75.4227H0V200.019H121.943C153.125 200.019 178.384 174.759 178.384 143.578V137.786C178.384 106.249 155.068 80.2616 124.727 76.0392L124.708 76.0205Z"
                    fill={isSelected ? "#ffffff" : "#3A3A47"}
                />
                <path
                    d="M124.708 0H49.9019V45.0817H124.708V0Z"
                    fill={isSelected ? "#E2E2E2" : "#525263"}
                />
                <path
                    d="M124.708 154.974H49.9019V199.888H124.708V154.974Z"
                    fill={isSelected ? "#E2E2E2" : "#525263"}
                />
            </g>
            <defs>
                <clipPath id="clip0_2_27">
                    <rect
                        width="178.365"
                        height="200"
                        fill={isSelected ? "#f5f5f5" : "#ffffff"}
                    />
                </clipPath>
            </defs>
        </svg>
    );
};
