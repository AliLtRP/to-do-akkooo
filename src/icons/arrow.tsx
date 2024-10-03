
const Arrow = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={22}
        fill="none"
        className="transition-transform duration-500"
        {...props}
    >
        <g fill="#fff" opacity={0.5}>
            <path
                fillRule="evenodd"
                d="M10.083 18.333a.917.917 0 0 0-.916-.916H4.583V4.583h4.584a.917.917 0 0 0 0-1.833H4.583c-1.012 0-1.833.82-1.833 1.833v12.834c0 1.012.82 1.833 1.833 1.833h4.584c.506 0 .916-.41.916-.917Z"
                clipRule="evenodd"
            />
            <path d="M19.904 11.642a.913.913 0 0 0 .263-.64v-.005a.914.914 0 0 0-.269-.645l-3.666-3.667a.917.917 0 1 0-1.297 1.297l2.102 2.101H8.25a.917.917 0 0 0 0 1.834h8.787l-2.102 2.101a.917.917 0 1 0 1.296 1.297l3.666-3.666.007-.007Z" />
        </g>
    </svg>
)
export default Arrow
