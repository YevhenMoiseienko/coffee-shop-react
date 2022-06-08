import {NawBar} from "./components/nawBar/NawBar";
import {Divider} from "./components/divider/Divider";

import './App.scss';

function App() {
  return (
      <div className='content'>
          <div className="container">
              <NawBar />
              <h1>Everything You Love About Coffee</h1>
              <Divider />
              <h2>We makes every day full of energy and taste</h2>
              <h2>Want to try our beans?</h2>
          </div>
      </div>
  );
}

export default App;
