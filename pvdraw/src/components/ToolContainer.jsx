import ToolIcon from "./Tool";
export default function ToolContainer() {
    const toolIconsAssets = [
        "https://cdn-icons-png.flaticon.com/128/9369/9369800.png",
        "https://cdn-icons-png.flaticon.com/128/136/136889.png",
        "https://cdn-icons-png.flaticon.com/128/18927/18927778.png",
        "https://cdn-icons-png.flaticon.com/128/5197/5197917.png",
        "https://cdn-icons-png.flaticon.com/128/3550/3550091.png",
        "https://cdn-icons-png.flaticon.com/128/3856/3856192.png",
        "https://cdn-icons-png.flaticon.com/128/18166/18166726.png",
        "https://cdn-icons-png.flaticon.com/128/9515/9515002.png",
        "https://cdn-icons-png.flaticon.com/128/833/833281.png",
        "https://cdn-icons-png.flaticon.com/128/5879/5879769.png"
      ];

      let ToolIcons=toolIconsAssets.map(
        (src,index) => <ToolIcon src={src} description="icon-image" key={index}/> 
      )
      
  return (
    <div className="flex justify-center p-2">
        <div className="flex items-center rounded-2xl justify-center p-2 gap-2 bg-gray-100">
        {ToolIcons}
        </div>
    </div>
  )
}
