import ToolIcon from "./Tool";
export default function ToolContainer() {
  const toolIconsAssets = [
    {
      name: "Rectangle",
      icon: "https://cdn-icons-png.flaticon.com/128/9369/9369800.png",
      isActive:true
    },
    {
      name: "Circle",
      icon: "https://cdn-icons-png.flaticon.com/128/136/136889.png",
      isActive:false
    },
    {
      name: "Line",
      icon: "https://cdn-icons-png.flaticon.com/128/18927/18927778.png",
      isActive:false
    },
    {
      name: "Brush",
      icon: "https://cdn-icons-png.flaticon.com/128/5197/5197917.png",
      isActive:false
    },
    {
      name: "Eraser",
      icon: "https://cdn-icons-png.flaticon.com/128/3550/3550091.png",
      isActive:false
    },
    {
      name: "Text",
      icon: "https://cdn-icons-png.flaticon.com/128/3856/3856192.png",
      isActive:false
    },
    {
      name: "Polygon",
      icon: "https://cdn-icons-png.flaticon.com/128/18166/18166726.png",
      isActive:false
    },
    {
      name: "Selection",
      icon: "https://cdn-icons-png.flaticon.com/128/9515/9515002.png",
      isActive:false
    },
    {
      name: "Pen",
      icon: "https://cdn-icons-png.flaticon.com/128/833/833281.png",
      isActive:false
    },
    {
      name: "Fill",
      icon: "https://cdn-icons-png.flaticon.com/128/5879/5879769.png",
      isActive:false
    },
  ];
  
  let detect=(e) => {
    console.log(e.target.id);
    return e.target.id
  }
  
      let ToolIcons=toolIconsAssets.map(
        (toolinfo,index) => <ToolIcon src={toolinfo.icon} description="icon-image" key={index} detect={detect} id={toolinfo.name} isActive={toolinfo.isActive}/> 
      )
      
  return (
    <div className="flex justify-center p-2">
        <div className="flex items-center rounded-2xl justify-center p-2 gap-2 bg-gray-100">
        {ToolIcons}
        </div>
    </div>
  )
}
