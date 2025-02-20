import React from 'react'
import Heading from './Heading'
import Button from './Button'

export default function Layout({data,text,isShow="false",isIcon="false"}) {
 return (
    <div className='grid p-2 gap-2'>
    <div>
        <Heading headingDescription={text}/>
    </div>
    <div className='flex gap-2'>
        <div className='flex gap-2'>
        {   
           isIcon?data.map(
            (src,index) => <Button src={src} key={index} description="icons-image"/>
        ):
        data.map(
            (colour,index) => <Button bgColour={colour} key={index}/>
        )
        }
        </div>
        { 
        isShow && <div className='border-[1px] border-t-0 border-b-0 border-r-0 border-pink-950 p-2'>
            {/* state colour shower kind stuff here on selction */}
            <Button bgColour="purple"/>
        </div>
        }
    </div>
</div>
 )
}
