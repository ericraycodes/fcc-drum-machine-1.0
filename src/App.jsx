
// Import statements
import { useEffect, useState, useRef } from "react";
import Drumkit from "./Drumkit";




export default function App() {

  // This will store the drum kit.
  const [drumKit, setDrumKit] = useState([{}]);
  // Reference the #drum-machine.
  const htmlRef = useRef(document.querySelector('html'));


  // Effect: fetches drum kit data.
  useEffect(() => {
    window.console.log('\tuseEffect: <App/>');
    fetchDrumKit().then(data => setDrumKit(data));
  }, []);
  // Effect: adding keyboard event listener.
  useEffect(() => {
    htmlRef.current.addEventListener('keydown', onDrumKeyPress);
    window.console.log('\taddEventListener: <main #drum-machine> node');
    htmlRef.current.focus();
    // cleanup function
    return () => {
      htmlRef.current.removeEventListener('keydown', onDrumKeyPress);
      window.console.log('\tcleanup <App/>: removeEventListener')
    };
  }, []);


  // Callback: handling 'keydown' keyboard user-event.
  const onDrumKeyPress = (event) => {
    window.console.log('\tonDrumKeyPress:', typeof event.key, event.key);
    const eventKey = document.getElementById(event.key.toUpperCase());
    window.console.log('\tkeyboard event audio:', eventKey);
    eventKey.currentTime = 0;
    eventKey.play();
  };


  return (
    <>
    <main
      id='drum-machine'
      tabIndex='1'
    >
      <Drumkit
        kit={drumKit}
      />
    </main>

    {window.console.log('<App />')}
    </>
  );
}




// Callback for fetching './drum-pads.json'.
const fetchDrumKit = async () => {
  window.console.log('\tfetching drum kit...');
  return await fetch('./drum-pads.json').catch(err => window.console.log('fetch error:', err))
    .then(res => res.json()).catch(err => window.console.log('json error:', err))
    .then(data => {
      window.console.log('\tdata:', typeof data, data);
      return data;
    }).catch(err => window.console.log('data error:', err));
};