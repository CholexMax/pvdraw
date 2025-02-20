function ToolIcon(props)
{
    return (
        <div className={` ${props.isActive?"bg-blue-800":"bg-gray-200"} flex items-center justify-center cursor-pointer p-2 hover:bg-teal-100 hover:border-blue-200 hover:border-[1px]`} onClick={props.detect}>
            <img src={props.src} alt={props.description} width="15px" id={props.id} data-isactive={props.isActive}/>
        </div>
    )
}

export default ToolIcon