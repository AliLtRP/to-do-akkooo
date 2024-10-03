const Home = (props: any) => (
    <div
        className={`w-12 h-12 flex justify-center items-center transition-transform duration-300 rounded-full ${props.flag ? 'bg-[#ffffff0d] scale-110' : ''}`}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={22}
            height={22}
            fill="none"
            color="#8D8E90"
            {...props}
        >
            <path
                fill="currentColor"
                d="M2.75 4.583c0-1.012.82-1.833 1.833-1.833H8.25c1.013 0 1.833.82 1.833 1.833V8.25c0 1.013-.82 1.833-1.833 1.833H4.583A1.833 1.833 0 0 1 2.75 8.25V4.583Zm5.5 0H4.583V8.25H8.25V4.583Zm3.667 0c0-1.012.82-1.833 1.833-1.833h3.667c1.012 0 1.833.82 1.833 1.833V8.25c0 1.013-.82 1.833-1.833 1.833H13.75a1.833 1.833 0 0 1-1.833-1.833V4.583Zm5.5 0H13.75V8.25h3.667V4.583ZM2.75 13.75c0-1.012.82-1.833 1.833-1.833H8.25c1.013 0 1.833.82 1.833 1.833v3.667c0 1.012-.82 1.833-1.833 1.833H4.583a1.833 1.833 0 0 1-1.833-1.833V13.75Zm5.5 0H4.583v3.667H8.25V13.75Zm3.667 0c0-1.012.82-1.833 1.833-1.833h3.667c1.012 0 1.833.82 1.833 1.833v3.667c0 1.012-.82 1.833-1.833 1.833H13.75a1.833 1.833 0 0 1-1.833-1.833V13.75Zm5.5 0H13.75v3.667h3.667V13.75Z"
            />
        </svg>
    </div>
)
export default Home
