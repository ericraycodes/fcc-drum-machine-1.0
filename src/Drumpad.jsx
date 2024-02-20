
import { useEffect } from "react";
import { useRef } from "react";


export default function Drumpad({ pad, identifyDrumPad }) {

    // Reference for the button element.
    const buttonRef = useRef(null);
    // Reference for the audio element.
    const audioRef = useRef(null);


    // Adding mouse event listener to <button />.
    useEffect(() => {
        buttonRef.current.addEventListener('mousedown', onDrumButtonClick );
        // cleanup function
        return () => {
            buttonRef.current.removeEventListener('mousedown',onDrumButtonClick);
        };
    }, []);


    // Callback for playing embedded sound on button click.
    const onDrumButtonClick = (event) => {
        // The 'currentTime' property to 0 seconds make the audio reactively sound again
        // at the beginning of the sample at every click.
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        identifyDrumPad(pad['key']);
        window.console.log('>> USER:', event, event.target);
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
        </>
    );
}