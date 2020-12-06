import React from "react";
import { Canvas } from "react-three-fiber";

import AtomPillar from "./components/AtomPillar";

function App() {
  return (
    <div className="App">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <AtomPillar position={[-1.2, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
