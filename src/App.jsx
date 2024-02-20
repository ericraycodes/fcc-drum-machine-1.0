

import { useEffect, useState } from "react";
import Drumkit from "./Drumkit";
import Display from "./Display";




export default function App() {

  // This will store the drum kit.
  const [drumKit, setDrumKit] = useState([]);
  // This will store which display content.
  const [hitKey, setHitKey] = useState('');


  // Effect: fetches drum kit data.
  useEffect(() => {
    fetchDrumKit().then(data => setDrumKit(data));
  }, []);
 

  // Function handling which drum-pad plays.
  const identifyDrumPad = (key) => {
    setHitKey(key);
    window.console.log('\tupdate display:', data);
  };


  return (
    <>
    <main
      id='drum-machine'
      tabIndex='1'
    >
      <Drumkit
        kit={drumKit}
        identifyDrumPad={identifyDrumPad}
      />
      <Display
        drumKit={drumKit}
        hitKey={hitKey}
      />
    </main>
    { window.console.count('<App /> RENDER') }
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