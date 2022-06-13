import './App.css';
import FirstBlock from './blocks/FirstBlock.jsx';
import TwoBlock from './blocks/TwoBlock.jsx'
import ThreeBlock from './blocks/ThreeBlock.jsx'
import CustomSlider from './blocks/CustomSlider';

function App() {
  return (
    <div className="App">
      <CustomSlider />
      <TwoBlock >
                Mountains, rocky cliffs, undulating and smooth like waves in the <br />
                Atlantic Ocean mountaineering enthusiasts, and just people who want <br />
                a break from vanity should visit Iceland. 

      </TwoBlock>
      <ThreeBlock />
    </div>
  );
}

export default App;
