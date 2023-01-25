import "./App.css";
import Account from "./components/Account";
import useAtm from "./hooks/useAtm";

function App() {
  const atm = useAtm();
  return (
    <div className="App">
      <Account {...atm} />
    </div>
  );
}

export default App;
