function Button(props)
{
    return (    
              <button className="flex items-center justify-center cursor-pointer">
                {
                    props.src?<img src={props.src} alt={props.description} width="20px" />:<div style={
                        {backgroundColor:props.bgColour,
                         width:"20px",
                         height:"20px"
                        }}
                        >
                            {
                                props.text && <p className="font-semibold text-2xl">{props.text}</p>
                            }
                    </div>
                }
              </button>
    )
}

export default Button