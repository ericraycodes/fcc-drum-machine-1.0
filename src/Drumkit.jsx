
import { useEffect } from "react";
import { useRef } from "react";
import Drumpad from "./Drumpad";

export default function Drumkit({ kit }) {

    // Check the value of the prop
    window.console.log('\tkit:', typeof kit, kit);


    // Reference for <section>.
    const sectionRef = useRef(null);


    // effect: add event listener to <section> for mouse click.
    useEffect(() => {
        sectionRef.current.addEventListener('mousedown', onDrumClick);
        window.console.log('\taddEventListner: drum-kit');
        // cleanup function
        return () => {
            sectionRef.current.removeEventListener('mousedown', onDrumClick);
            window.console.log('\tremoveEventListener : drum-kit');
        };
    }, []);


    // Callback: on 'mousedown' user-click event.
    const onDrumClick = (event) => {
        window.console.log('\tmousedown:', event.target, event.target.lastElementChild);
        const drumPad = event.target.lastElementChild;
        // drumPad.currentTime = 0;
        drumPad.load();
        drumPad.play();
    };



    // Iterative rendering
    const drumPads = kit.map(obj => <Drumpad pad={obj}/>);


    return (
        <>
        <section ref={sectionRef}>{ drumPads }</section>
        {window.console.log('<Drumkit />')}
        </>
    );
}