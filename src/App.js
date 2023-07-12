import { useState } from "react";
import { upload } from "@testing-library/user-event/dist/upload";

function App() {
  const [file, setFile] = useState(null);
  console.log('file...........', file);
  return (
    <div className="App">
      <div className="box-uploader">
        {file && (<img />)}
        <input type="file" onChange={e => setFile(e.target.value)} />
      </div>
    </div>
  );
}

export default App;
