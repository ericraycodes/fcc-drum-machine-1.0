
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
    const onDrumButtonClick = (event) => {
        window.console.log('onDrumButtonClick', event);
        // The 'currentTime' property to 0 seconds make the audio reactively sound again
        // at the beginning of the sample at every click.
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        // window.console.log('audioRef:', audioRef.current);
    };


    return (
        <>
        <label htmlFor={pad['id']} aria-label={pad['name']}>
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
        </label>

        {window.console.log('<Drumpad/> :', pad['key'], pad['name'])}
        </>
    );
}