function ToolIcon(props)
{
    return (
        <div className="flex items-center justify-center cursor-pointer p-2 hover:bg-teal-100 hover:border-blue-200 hover:border-[1px]">
            <img src={props.src} alt={props.description} width="15px" />
        </div>
    )
}

export default ToolIcon