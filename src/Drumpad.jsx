
import { useEffect } from "react";
import { useRef } from "react";


export default function Drumpad({ pad }) {

    // Reference for the button element.
    const buttonRef = useRef(null);
    // Reference for the audio element.
    const audioRef = useRef(null);


    // Adding event listeners
    useEffect(() => {
        // window.console.log('\tbuttonRef:', buttonRef.current);
        buttonRef.current.addEventListener('mousedown', ondrumPadClick);
        window.console.log('\taddEventListeners <Drumpad />');

        return () => {
            buttonRef.current.removeEventListener('mousedown', ondrumPadClick);
            window.console.log('\tcleanup <Drumpad />');
        };
    }, []);


    // Callback for playing embedded sound on button click.
    const ondrumPadClick = () => {
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
            <label for={pad['id']} aria-label={pad['name']}>{pad['key']}</label>
            <audio
                id={pad['key']}
                className='clip'
                ref={audioRef}
                src={pad['sample']}
                preload='auto'
            ></audio>
        </button>

        {window.console.log('<Drumpad />')}
        </>
    );
}