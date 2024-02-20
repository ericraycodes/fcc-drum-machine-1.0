



export default function Drums({ kit, identifyDrumPad }) {

    return (
        <>
        <label
            htmlFor={pad['id']}
            aria-label={pad['name']}
        >
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

        {window.console.log('<Drums/> render')}
        </>
    );
}