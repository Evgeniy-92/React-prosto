import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5
type RatingPropsType = {
    value: RatingValueType
    onclick: (ratingValue: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {

    return (
        <div>
            <Star selected={props.value > 0} onclick={props.onclick} id={1}/>
            <Star selected={props.value > 1} onclick={props.onclick} id={2}/>
            <Star selected={props.value > 2} onclick={props.onclick} id={3}/>
            <Star selected={props.value > 3} onclick={props.onclick} id={4}/>
            <Star selected={props.value > 4} onclick={props.onclick} id={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    onclick: (ratingValue: RatingValueType) => void
    id: RatingValueType
}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    return <span onClick={() => {props.onclick(props.id)}}>{props.selected ? <b>star </b> : "star "}</span>
}