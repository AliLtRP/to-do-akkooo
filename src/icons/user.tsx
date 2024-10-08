const UserIcon = (props: any) => (
    <div
        className={`w-12 h-12 flex justify-center items-center transition-transform duration-300 rounded-full ${props.flag ? 'bg-[#ffffff0d] scale-110' : ''}`}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={22}
            height={22}
            fill="none"
            color="#fff"
            {...props}
        >
            <path
                fill="currentColor"
                d="M11 3.667A3.667 3.667 0 1 0 11 11a3.667 3.667 0 0 0 0-7.333ZM5.5 7.333a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0ZM7.333 16.5a2.75 2.75 0 0 0-2.75 2.75.917.917 0 1 1-1.833 0 4.583 4.583 0 0 1 4.583-4.583h7.334a4.583 4.583 0 0 1 4.583 4.583.917.917 0 1 1-1.833 0 2.75 2.75 0 0 0-2.75-2.75H7.333Z"
            />
        </svg>
    </div>
)
export default UserIcon
