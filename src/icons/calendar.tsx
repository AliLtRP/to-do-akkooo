const Calender = (props: any) => (
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
                d="M8.25 1.833c.506 0 .917.41.917.917v.917h3.666V2.75a.917.917 0 0 1 1.834 0v.917h2.75c1.012 0 1.833.82 1.833 1.833v11.917c0 1.012-.82 1.833-1.833 1.833H4.583a1.833 1.833 0 0 1-1.833-1.833V5.5c0-1.013.82-1.833 1.833-1.833h2.75V2.75c0-.506.41-.917.917-.917ZM7.333 5.5h-2.75v2.75h12.834V5.5h-2.75v.917a.917.917 0 0 1-1.834 0V5.5H9.167v.917a.917.917 0 0 1-1.834 0V5.5Zm10.084 4.583H4.583v7.334h12.834v-7.334Z"
            />
        </svg>
    </div>
)
export default Calender
