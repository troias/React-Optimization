import React from 'react'
import MyPara from './MyPara'

const DemoOutput = (props) => {
    console.log("DemoOutput,  running")

    return (
        <div>
            <MyPara>{props.show ? "new" : "" }</MyPara>
       
        </div>
    )
}

export default React.memo(DemoOutput)
