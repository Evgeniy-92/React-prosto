import React from "react";

type OnOffPropsType = {
    toggle: boolean
    onclick: (on: boolean) => void
}


function OnOff(props: OnOffPropsType) {


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
        backgroundColor: props.toggle ? "green" : "white"

    }

    const offStyle = {
        width: "60px",
        height: "40px",
        border: "1px solid black",
        padding: "5px",
        backgroundColor: props.toggle ? "white" : "red"
    }

    const indicatorStyle= {
        width: "20px",
        height: "20px",
        borderRadius: "10px",
        border: "1px solid black",
        backgroundColor: props.toggle ? "green" : "red"
    }

    return (
        <div style={containerStyle}>
            <div style={onStyle} onClick={() => {props.onclick(true)}}>On</div>
            <div style={offStyle} onClick={() => {props.onclick(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff