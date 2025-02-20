import React from 'react'
import StrokeColour from './StrokeColour'
import BackgroundStyle from './BackgroundStyle'
import StrokeWidth from './Strokewidth'
import StrokeStyle from './StrokeStyle'
import Fill from './BgFill'
import Layers from './Layer'
import Action from './Action'
import Slop from './Slop'
import Edges from './Edges'
import OpacitySlider from './OpacitySlider'

export default function DrawingStyle() {
  return (
    <div>
        <StrokeColour/>
        <BackgroundStyle/>
        <Fill/>
        <StrokeWidth/>
        <StrokeStyle/>
        <Layers/>
        <Action/>
        <Slop/>
        <Edges/>
        <OpacitySlider/>
    </div>
  )
}
