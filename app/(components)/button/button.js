
export default function Button(props) {
    return (
        <>
            <button className={`${props.style} px-6 py-2 rounded-3xl transition-all`}>{props.btnTitle}</button>
        </>
    )
}
