import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "./login";
import Profile from "./profile";
import Feed from "./feed";
import Body from "./body";

function App() {
  return (  
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/feed" element={<Feed />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App
