import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Profile from "./components/profile";
import Feed from "./components/feed";
import Body from "./components/body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Connection from "./components/connection";
import Requests from "./components/requests";
import Chat from "./components/chat";

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
            <Route path="/connection" element={<Connection/>}/>
            <Route path="/requests" element={<Requests/>}/>
            <Route path="/chat/:targetUserId" element={<Chat />} />  
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>  
    </>
  );
}
export default App
