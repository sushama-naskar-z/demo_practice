import React from 'react'

export default function Post(props) {
//    console.log(props.currentItems);
  return (
    <>
    <div>Posts:</div>
    {
        props.currentItems && props.currentItems.map((item)=>{
           return <div>
                
                {item.title}
            </div>
        })
    }
    </>
  )
}
