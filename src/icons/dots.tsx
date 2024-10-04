const Dots = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={26}
        height={26}
        fill="none"
        {...props}
    >
        <rect
            width={24}
            height={24}
            x={1}
            y={1}
            stroke="#fff"
            strokeOpacity={0.1}
            strokeWidth={2}
            rx={12}
        />
        <circle cx={17} cy={13} r={1} fill="#fff" />
        <circle cx={13} cy={13} r={1} fill="#fff" />
        <circle cx={9} cy={13} r={1} fill="#fff" />
    </svg>
)
export default Dots
