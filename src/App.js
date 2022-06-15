import './App.css';
import FirstBlock from './blocks/FirstBlock.jsx';
import TwoBlock from './blocks/TwoBlock.jsx'
import ThreeBlock from './blocks/ThreeBlock.jsx'
import CustomSlider from './blocks/CustomSlider';

function App() {
  return (
    <div className="App">
      <CustomSlider />
      <TwoBlock />
      <ThreeBlock />
    </div>
  );
}

export default App;
