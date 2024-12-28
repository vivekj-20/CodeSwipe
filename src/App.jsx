import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Profile from "./components/profile";
import Feed from "./components/feed";
import Body from "./components/body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (  
    <>
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/feed" element={<Feed />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>  
    </>
  );
}
export default App
