import { Link } from "react-router-dom";
import {useMagicGatheringState} from "../../context/MagicGatheringContext";
import { CLEAR_STATE } from "../../context/types"
const Navbar = () => {
  const {state, dispatch} = useMagicGatheringState()

  const clearState = () => {
    dispatch({ type: CLEAR_STATE });
  };

  return (
    <nav className='navbar bg-dark'>
      <Link onClick={clearState} to='/'>
        Pokemon
      </Link>

      <ul>
        <li>
          <Link onClick={clearState} to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link onClick={clearState} to='/items'>
            Items
          </Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;