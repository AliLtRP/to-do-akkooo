
const Status = (props: any) => (
    <div className={props.flag ? "w-12 h-12 bg-[#ffffff0d] flex justify-center items-center rounded-full" : "w-12 h-12 flex justify-center items-center"}>
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
                d="M2.75 4.583c0-1.012.82-1.833 1.833-1.833h12.834c1.012 0 1.833.82 1.833 1.833v12.834c0 1.012-.82 1.833-1.833 1.833H4.583a1.833 1.833 0 0 1-1.833-1.833V4.583Zm14.667 0H4.583v12.834h12.834V4.583ZM11 6.417c.506 0 .917.41.917.916v7.334a.917.917 0 0 1-1.834 0V7.333c0-.506.41-.916.917-.916Zm3.667 1.833c.506 0 .916.41.916.917v5.5a.917.917 0 0 1-1.833 0v-5.5c0-.507.41-.917.917-.917Zm-7.334 1.833c.507 0 .917.41.917.917v3.667a.917.917 0 0 1-1.833 0V11c0-.506.41-.917.916-.917Z"
            />
        </svg>
    </div>
)
export default Status
