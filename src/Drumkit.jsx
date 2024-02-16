
import Drumpad from "./Drumpad";

export default function Drumkit({ kit }) {

    // Check the value of the prop
    window.console.log('\tkit:', typeof kit, kit);

    // Iterative rendering
    const drumPads = kit.map(obj => <Drumpad pad={obj}/>);

    return (
        <>
        <section>{ drumPads }</section>
        {window.console.log('<Drumkit />')}
        </>
    );
}