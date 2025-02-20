import React from 'react'
import Layout from './Layout'

export default function StrokeWidth() {
    let strokeIcons=[
        "https://cdn-icons-png.flaticon.com/128/649/649683.png",
        "https://cdn-icons-png.flaticon.com/128/649/649683.png",
        "https://cdn-icons-png.flaticon.com/128/649/649683.png"
    ]
  return (
    <Layout data={strokeIcons} isShow={false} isIcon={true} text="stroke width"/>
  )
}
