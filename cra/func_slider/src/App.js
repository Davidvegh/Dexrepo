import './App.css';
import Slider from './components/Slider';

function App() {

  const imgSet = [
    'https://www.w3schools.com/howto/img_nature_wide.jpg',
    'https://www.w3schools.com/howto/img_snow_wide.jpg',
    'https://www.w3schools.com/howto/img_lights_wide.jpg',
    'https://www.w3schools.com/howto/img_mountains_wide.jpg'
  ]

  return (
    <div className="App">
      <Slider imgSet={imgSet} />
    </div>
  );
}

export default App;
