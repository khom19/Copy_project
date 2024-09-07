import './App.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

//We will copy youtube.
function App() {
  return (
    <div className='Homepage'>
      <div className='menu'>
        <div className='menu_icon'>
          <RxHamburgerMenu className='icon' size={22.5}/>
        </div>
        <h1 className='youtube_name'>
          <FaYoutube className='youtube_icon' size={32.5}/>
          Premium
          <p className='language'>TH</p>
        </h1>
      </div>
    </div>
  );
}

export default App;
