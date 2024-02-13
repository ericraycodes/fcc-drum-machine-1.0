
import { useEffect } from "react";
import { useRef } from "react";


export default function Drumpad() {

    // Reference for the button element.
    const buttonRef = useRef(null);
    // Reference for the audio element.
    const audioRef = useRef(null);


    // Adding event listeners
    useEffect(() => {
        window.console.log('\tbuttonRef:', buttonRef.current);
        buttonRef.current.addEventListener('mousedown', ondrumPadClick);
        window.console.log('\taddEventListeners <Drumpad />');

        return () => {
            buttonRef.current.removeEventListener('mousedown', ondrumPadClick);
            window.console.log('\tcleanup <Drumpad />');
        };
    }, []);


    // Callback for playing embedded sound on button click.
    const ondrumPadClick = () => {
        // The 'currentTime' property to 0 seconds make the audio reactively sound every click event.
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        window.console.log('audioRef:', audioRef.current);
    };

    return (
        <>
        <button
            id={'heater-1'}
            className='drum-pad'
            ref={buttonRef}
        >
            <label for={'heater-1'} aria-label={'Heater 1.'}>{'Q'}</label>
            <audio
                id={'Q'}
                className='clip'
                ref={audioRef}
                src={'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'}
                preload='auto'
            ></audio>
        </button>
        {window.console.log('<Drumpad />')}
        </>
    );
}