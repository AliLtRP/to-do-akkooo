
const Docs = (props: any) => (
    <div
        className={`w-12 h-12 flex justify-center items-center transition-transform duration-300 rounded-full ${props.flag ? 'bg-[#ffffff0d] scale-110' : ''}`}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={22}
            height={22}
            color="#fff"
            fill="none"
            {...props}
        >
            <path
                fill="currentColor"
                d="M7.96 2.797a.917.917 0 0 1 .58 0l5.21 1.737 4.004-1.335a1.833 1.833 0 0 1 2.413 1.74v10.9c0 .79-.505 1.49-1.254 1.74l-4.873 1.624a.917.917 0 0 1-.58 0l-5.21-1.737-4.004 1.335a1.833 1.833 0 0 1-2.413-1.74v-10.9c0-.79.505-1.49 1.254-1.74L7.96 2.797Zm1.207 13.042 3.666 1.222v-10.9L9.167 4.938V15.84ZM7.333 4.94 3.667 6.16v10.9l3.666-1.222V4.94Zm7.334 1.222v10.9l3.666-1.222V4.94L14.667 6.16Z"
            />
        </svg>
    </div>
)
export default Docs
