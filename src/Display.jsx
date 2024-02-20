


export default function Display({ drumKit, hitKey }) {

    // Search for the corresponding name of the corresponding key.
    const keyElement = drumKit.filter(obj => obj['key'] === hitKey);
    const keyName = keyElement.map(obj => obj['name']);

    return (
        <>
        <section id='display'>
            <p>{ keyName[0] }</p>
        </section>
        </>
    );
}