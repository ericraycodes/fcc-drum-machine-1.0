
import { useEffect } from "react";
import { useRef } from "react";


export default function Drumpad({ pad }) {

    // Reference for the button element.
    const buttonRef = useRef(null);
    // Reference for the audio element.
    const audioRef = useRef(null);


    // Adding mouse event listener to <button />.
    useEffect(() => {
        buttonRef.current.addEventListener('mousedown', onDrumButtonClick );
        window.console.log('\taddEventListeners <Drumpad/>');
        // cleanup function
        return () => {
            buttonRef.current.removeEventListener('mousedown',onDrumButtonClick);
            window.console.log('\tcleanup <Drumpad/> : removeEventListener');
        };
    }, []);


    // Callback for playing embedded sound on button click.
    const onDrumButtonClick = () => {
        // The 'currentTime' property to 0 seconds make the audio reactively sound again
        // at the beginning of the sample at every click.
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        // window.console.log('audioRef:', audioRef.current);
    };


    return (
        <>
        <button
            id={pad['id']}
            className='drum-pad'
            ref={buttonRef}
        >
            <label htmlFor={pad['id']} aria-label={pad['name']}>{pad['key']}</label>
            <audio
                id={pad['key']}
                className='clip'
                ref={audioRef}
                src={pad['sample']}
                preload='auto'
            ></audio>
        </button>

        {window.console.log('<Drumpad/> :', pad['key'], pad['name'])}
        </>
    );
}