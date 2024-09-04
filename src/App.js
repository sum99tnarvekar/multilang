import './App.css';
import Blog from "./Blog";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
  return (
      <Provider store={store}>
        <Blog/>
      </Provider>
  );
}

export default App;
