import { Link } from "react-router-dom";
import {useMagicGatheringState} from "../../context/MagicGatheringContext";


const Navbar = () => {
  const {clearState, setDark, isDark} = useMagicGatheringState()
  return (
    <nav className={`navbar ${isDark ? 'bg-dark': 'bg-light'}`}>
      <Link onClick={clearState} to='/'>
        <span className={`${isDark ? 'text-light': 'text-dark'}`}>Magic Gathering</span>
      </Link>

      <ul>
        <li>
          <Link onClick={clearState} to='/'>
            <span className={`${isDark ? 'text-light': 'text-dark'}`}>Home</span>
          </Link>
        </li>
        <li>
          <Link onClick={clearState} to='/cards'>
            <span className={`${isDark ? 'text-light': 'text-dark'}`}>Cards</span>
          </Link>
        </li>
        <li>
          <label className="switch" htmlFor="checkbox" title="Change color scheme to dark mode">
            <input type="checkbox" id="checkbox" onChange={() => setDark()}/>
            <div className="slider round"></div>
            <div className="toggle-moon">🌙</div>
            <div className="toggle-sun">☀️</div>
          </label>
        </li>
      </ul>
    </nav>
  );
};


export default Navbar;