import React from 'react'
import Heading from './Heading'
import Button from './Button'
import Layout from './Layout'
export default function BackgroundStyle() {
    let BgColours=[
        "red",
        "blue",
        "green",
        "purple",
        "orange"
    ]
  return (
   <Layout data={BgColours} isShow={true} isIcon={false} text="Background"/>
  )
}
