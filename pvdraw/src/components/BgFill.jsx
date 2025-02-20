import React from 'react'
import Layout from './Layout'

export default function Fill() {
    let Fillicons=[
        "https://cdn-icons-png.flaticon.com/128/28/28680.png",
        "https://cdn-icons-png.flaticon.com/128/28/28680.png",
        "https://cdn-icons-png.flaticon.com/128/28/28680.png"
    ]
  return (
    <Layout data={Fillicons} isShow={false} isIcon={true} text="fill"/>
  )
}
