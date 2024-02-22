
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";


function Drumpad({ pad, onKeyEvent }) {

    // Reference for the button element.
    const buttonRef = useRef(null);
    // Reference for the audio element.
    const audioRef = useRef(null);


    // Adding mouse event listener to <button />.
    useEffect(() => {
        buttonRef.current.addEventListener('mousedown', onDrumButtonClick);
        return () => {
            buttonRef.current.removeEventListener('mousedown',onDrumButtonClick);
        };
    }, []);


    // Callback for playing embedded sound on button click.
    const onDrumButtonClick = (event) => {
        onKeyEvent(audioRef.current, pad['key'], event);
    };


    return (
        <>
            <button
                id={pad['id']}
                className='drum-pad'
                ref={buttonRef}
            >
                {pad['key']}
                <audio
                    id={pad['key']}
                    className='clip'
                    ref={audioRef}
                    src={pad['sample']}
                    preload='auto'
                ></audio>
            </button>
            { window.console.count('<Drumpad/>') }
        </>
    );
}


export default React.memo(Drumpad);