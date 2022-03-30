import { useAppDispatch, useAppSelector } from "../reduxCode/hooks";
import {
  amountAdded,
  incremented,
  reset as counterReset,
} from "../reduxCode/counterSlice";
import logo from "../logo.svg";
import "../mainWindow/MainWindowApp.css";

function ChildWindowApp() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  function increment(): void {
    dispatch(incremented());
  }

  function add3(): void {
    dispatch(amountAdded(3));
  }

  function reset(): void {
    dispatch(counterReset());
  }

  function closeWindow(): void {
    window.close();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Child Window 👶</h2>
      </header>
      <p>
        <button className="App-button" onClick={increment}>
          increment count
        </button>
        <button className="App-button" onClick={add3}>
          add 3 to count
        </button>
        <button className="App-button" onClick={reset}>
          reset count
        </button>
        <button className="App-button" onClick={closeWindow}>
          close window
        </button>
      </p>
      <p className="App-important">count is: {count}</p>
    </div>
  );
}

export default ChildWindowApp;
