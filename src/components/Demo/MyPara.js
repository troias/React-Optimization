import React from 'react'

 const MyPara = (props) => {
    console.log("MyPara, app running")
    return (
    <p>{props.children}</p>
    )
}

export default React.memo(MyPara)
