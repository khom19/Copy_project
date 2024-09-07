import './App.css';
import { RxHamburgerMenu } from "react-icons/rx";

//We will copy youtube.
function App() {
  return (
    <div className='Homepage'>
      <div className='menu'>
        <div className='menu_icon'>
          <RxHamburgerMenu className='icon' size={22.5}/>
          <div className='youtube_icon'></div>
        </div>
        <h1 className='youtube_name'>
          Premium
        </h1>
      </div>
    </div>
  );
}

export default App;
