import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/Rating/UncontroledRating";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";
import OnOff from "./components/OnOff/OnOff";
import OnOffNew from './components/OnOff/OnOffNew';

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [collapsedAccordion, setCollapsedAccordion] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(true)
    const [onNew, setOnNew] = useState<boolean>(true)
    const [uncontrolledOn, setUncontrolledOn] = useState<boolean>(true)

    return (
        <div>
            <UncontrolledOnOff onChange={setUncontrolledOn}/> {uncontrolledOn.toString()}
            <OnOff toggle={on} onclick={setOn}/>
            <OnOffNew toggle={onNew} onclick={setOnNew}/>
            <AppTitle title={"Hello world"}/>
            <AppTitle title={"My friends"}/>
            Article 1
            <UncontrolledRating />
            <UncontrolledAccordion title={"Menu"}/>
            <Accordion title={"Articles"} collapsed={collapsedAccordion} onChange={() => {setCollapsedAccordion(!collapsedAccordion)}}/>
            Article 2
            <Rating value={ratingValue} onclick={setRatingValue}/>
        </div>
    );
}

type AppTitlePropsType = {
    title: string
}

function AppTitle(props: AppTitlePropsType) {
    console.log("AppTitle rendering")
    return <h1>{ props.title }</h1>
}

export default App;
