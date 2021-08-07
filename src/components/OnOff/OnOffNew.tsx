import React from "react";
import s from "./OnOffNew.module.css"

type OnOffPropsType = {
    toggle: boolean
    onclick: (on: boolean) => void
}


function OnOffNew(props: OnOffPropsType) {
    const on = props.toggle ? `${s.button} ${s.on}` : s.button;
    const off = props.toggle ? s.button : `${s.button} ${s.off}`;
    const indicator = props.toggle ? s.indicatorOn : `${s.indicatorOn} ${s.indicatorOff}`

    return (
        <div className={s.container} >
            <div className={on} onClick={() => {props.onclick(true)}}>On</div>
            <div className={off} onClick={() => {props.onclick(false)}}>Off</div>
            <div className={indicator} ></div>
        </div>
    )
}

export default OnOffNew