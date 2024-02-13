/**
 * The drum-pad data can be stored in a json file - an array of objects:
 *    1. keys
 *    2. name
 *    3. sound
 * 
 * The drum pads are reusable components rendered with unique data.
 * 
 * @returns a react.js component that would build a drum machine app.
 */

import Drumpad from "./Drumpad";

export default function App() {

  return (
    <>
    <main id='drum-machine'>
      <section id='display'></section>
      <section>
        <Drumpad />
      </section>
    </main>
    {window.console.log('<App />')}
    </>
  );
}