import Section from "../components/Section";
import {useState} from "react";

export default function Home() {

  const [patchConfig,setPatchConfig] = useState({})

  const patchChange = (event)=> {
      setPatchConfig({...patchConfig,[event.target.getAttribute("param")]: event.target.value})
  }

  return (
    <div>
      <Section direction="column">
        <h1>synthesize_js</h1>
        <input param="volume" type="range" min="0" max="127" value={patchConfig.volume} onChange={(event)=>patchChange(event)}/>
        <input param="volume" type="range" min="0" max="127" value={patchConfig.volume} onChange={(event)=>patchChange(event)}/>
        <div>
          {patchConfig.volume}
        </div>
      </Section>
    </div>
  )
}
