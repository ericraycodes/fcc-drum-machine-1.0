
// Import statements
import { useEffect, useState } from "react";
import Drumkit from "./Drumkit";




export default function App() {

  // This will store the drum kit.
  const blankKit = [{}];
  const [drumKit, setDrumKit] = useState(blankKit);


  // Fetches the drum kit data.
  useEffect(() => {
    window.console.log('\tuseEffect: <App/>');
    fetchDrumKit().then(data => setDrumKit(data));
  }, []);


  return (
    <>
    <main id='drum-machine'>
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