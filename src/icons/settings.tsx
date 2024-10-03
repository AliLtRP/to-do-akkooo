
const Settings = (props: any) => (
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
                d="M8.25 4.583a.917.917 0 1 0 0 1.834.917.917 0 0 0 0-1.834Zm-2.594 0a2.751 2.751 0 0 1 5.188 0h6.573a.917.917 0 0 1 0 1.834h-6.574a2.751 2.751 0 0 1-5.187 0H4.583a.917.917 0 0 1 0-1.834h1.073Zm8.094 5.5a.917.917 0 1 0 0 1.834.917.917 0 0 0 0-1.834Zm-2.594 0a2.751 2.751 0 0 1 5.187 0h1.074a.917.917 0 0 1 0 1.834h-1.074a2.751 2.751 0 0 1-5.187 0H4.583a.917.917 0 0 1 0-1.834h6.573Zm-2.906 5.5a.917.917 0 1 0 0 1.834.917.917 0 0 0 0-1.834Zm-2.594 0a2.751 2.751 0 0 1 5.188 0h6.573a.917.917 0 0 1 0 1.834h-6.574a2.751 2.751 0 0 1-5.187 0H4.583a.917.917 0 0 1 0-1.834h1.073Z"
            />
        </svg>
    </div>
)
export default Settings
