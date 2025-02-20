import React from 'react'
import Heading from './Heading'
import Button from './Button'
import Layout from './Layout'
export default function StrokeColour() {
    let strokeColours=[
        "red",
        "blue",
        "green",
        "purple",
        "orange"
    ]
  return (
 <Layout data={strokeColours} isShow={true} isIcon={false} text="Stroke"/>
  )
}
