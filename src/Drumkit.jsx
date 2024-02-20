
import { useEffect, useRef } from "react";
import Drumpad from "./Drumpad";

export default function Drumkit({ kit, identifyDrumPad }) {

    // Reference the document.
    const htmlRef = useRef(document.querySelector('html'));


    // Effect: adding keyboard event listener.
    useEffect(() => {
        htmlRef.current.addEventListener('keydown', onDrumKeyPress);
        htmlRef.current.focus();
        // cleanup function
        return () => {
            htmlRef.current.removeEventListener('keydown', onDrumKeyPress);
        };
    }, []);


    // Callback: handling 'keydown' keyboard user-event.
    const onDrumKeyPress = (event) => {
        const eventKey = event.key.toUpperCase();
        const audioElement = document.getElementById(eventKey);
        audioElement.currentTime = 0;
        audioElement.play();
        identifyDrumPad(eventKey);
        window.console.log('>> USER:', event);
    };


    // Iterative rendering
    const drumPads = kit.map(obj => <Drumpad pad={obj} identifyDrumPad={identifyDrumPad}/>);


    return (
        <>
            <section>{ drumPads }</section>
        </>
    );
}