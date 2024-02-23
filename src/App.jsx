

import { useEffect, useState, useCallback } from "react";
import Drumkit from "./Drumkit";
import Display from "./Display";
import Sticker from "./Sticker";




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
  };
  const ucIdentifyDrumPad = useCallback(identifyDrumPad, []);


  return (
    <>
    <main
      id='drum-machine'
    >
      <Drumkit
        kit={drumKit}
        identifyDrumPad={ucIdentifyDrumPad}
      />
      <Display
        drumKit={drumKit}
        hitKey={hitKey}
      />
      <Sticker/>
    </main>
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