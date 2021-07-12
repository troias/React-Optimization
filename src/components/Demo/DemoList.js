import React, {useMemo} from 'react'

const DemoList = (props) => {

    const {items} = props
    
    const newList = useMemo(() => {
        return [...new Set(items)]
    }, [items]) 

    return (
        <div >
            <h2>{props.title}</h2>
            <ul>
                {newList.map(item => <li style={{
            listStyle: "none"
        }}>{item}</li>)}
            </ul>
        </div>
    )
}

export default React.memo(DemoList)
