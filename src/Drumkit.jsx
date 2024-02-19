
import { useEffect } from "react";
import { useRef } from "react";
import Drumpad from "./Drumpad";

export default function Drumkit({ kit }) {

    // Check the value of the prop
    window.console.log('\tkit:', typeof kit, kit);


    // Reference for <section>.
    const sectionRef = useRef(null);


    // Iterative rendering
    const drumPads = kit.map(obj => <Drumpad pad={obj}/>);


    return (
        <>
        <section ref={sectionRef}>{ drumPads }</section>
        {window.console.log('<Drumkit />')}
        </>
    );
}