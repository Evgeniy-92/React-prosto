import React, {useState} from "react";

type AccordionPropsType = {
    title: string
}

function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => {setCollapsed(!collapsed)}}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

// function Accordion2(props: AccordionPropsType) {
//     console.log("Accordion rendering")
//     if (props.collapsed === false) {
//         return (
//             <div>
//                 <AccordionTitle title={props.title}/>
//                 <AccordionBody />
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 <AccordionTitle title={props.title}/>
//                 -- --
//             </div>
//         )
//     }
// }

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onClick}>{ props.title }</h3>
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    )
}

export default UncontrolledAccordion;