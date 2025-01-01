import Body from "./Components/Body";
import "./App.css";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={appStore}>
      <Body></Body>
    </Provider>
  );
}

export default App;
