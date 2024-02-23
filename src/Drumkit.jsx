
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
        htmlRef.current.focus();
        htmlRef.current.addEventListener('keydown', onKeydown);
        htmlRef.current.addEventListener('keyup', onKeyup)
        // cleanup function
        return () => {
            htmlRef.current.removeEventListener('keydown', onKeydown);
            htmlRef.current.removeEventListener('keyup', onKeyup);
        };
    }, []);


    // Callback: handling 'keydown' keyboard user-event.
    const onKeydown = (event) => {
        const eventKey = event.key.toUpperCase();
        audioRef.current = document.getElementById(eventKey);
        audioRef.current.parentElement.classList.add('clicked');
        onKeyEvent(audioRef.current, eventKey, event);
    };
    // Callback: handling 'keyup' user event.
    const onKeyup = (event) => {
        window.console.log('>> USER keyup', event);
        audioRef.current.parentElement.classList.remove('clicked');
    };
    // Function: For every key event (keypress & click).
    const onKeyEvent = (audio, key, event) => {
        audio.currentTime = 0;
        audio.play();
        identifyDrumPad(key);
        window.console.log('>> USER keydown', event);
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