import Section from "../components/Section";
import {useState} from "react";

export default function Home() {

  const [patchConfig,setPatchConfig] = useState([{name: "volume",value: 10}])

  return (
    <div>
      <Section direction="column">
        <h1>synthesize_js</h1>
        <input type="range" min="0" max="127" value={patchConfig[0].value} onChange={(event)=>handleChange(event)}/>
        <div>
          {patchConfig[0].value}
        </div>
      </Section>
    </div>
  )
}
