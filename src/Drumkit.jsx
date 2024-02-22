
import React from "react";
import { useRef, useEffect, useCallback } from "react";
import Drumpad from "./Drumpad";

export default React.memo( function Drumkit({ kit, identifyDrumPad }) {

    // Reference the document.
    const htmlRef = useRef(document.querySelector('html'));
    // Reference the audio element triggered with event.
    const audioRef = useRef(null);


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
        audioRef.current = document.getElementById(eventKey);
        onKeyEvent(audioRef.current, eventKey, event);
    };
    // Function: For every key event (keyboard & mouse). Param: key, audio, EVENT
    const onKeyEvent = (audio, key, event) => {
        audio.currentTime = 0;
        audio.play();
        identifyDrumPad(key);
        window.console.log('>> USER', event);
    };
    const ucOnKeyEvent = useCallback(onKeyEvent, []);


    // Iterative rendering
    const drumPads = kit.map(obj => <li key={obj['id']}><Drumpad pad={obj} onKeyEvent={ucOnKeyEvent}/></li>);


    return (
        <>
            <ul>{ drumPads }</ul>
            { window.console.count('<Drumkit/>') }
        </>
    );
})