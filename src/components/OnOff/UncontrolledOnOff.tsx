import React, {useState} from "react";

type UncontrolledOnOffPropsType = {
    onChange: (on: boolean) => void
}

function UncontrolledOnOff(props: UncontrolledOnOffPropsType) {
    const [toggle, setToggle] = useState<boolean>(true)

    const containerStyle = {
        display: "flex",
        alignItems: "center",
        padding: "5px",
    }

    const onStyle = {
        width: "60px",
        height: "40px",
        border: "1px solid black",
        padding: "5px",
        backgroundColor: toggle ? "green" : "white"

    }

    const offStyle = {
        width: "60px",
        height: "40px",
        border: "1px solid black",
        padding: "5px",
        backgroundColor: toggle ? "white" : "red"
    }

    const indicatorStyle= {
        width: "20px",
        height: "20px",
        borderRadius: "10px",
        border: "1px solid black",
        backgroundColor: toggle ? "green" : "red"
    }

    const onClicked = () => {
        setToggle(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setToggle(false)
        props.onChange(false)
    }

    return (
        <div style={containerStyle}>
            <div style={onStyle} onClick={onClicked} >On</div>
            <div style={offStyle} onClick={offClicked} >Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default UncontrolledOnOff