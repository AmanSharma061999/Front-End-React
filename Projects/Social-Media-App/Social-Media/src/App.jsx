import "./App.css";
import AppHeader from "./Components/AppHeader";
import AppFooter from "./Components/AppFooter";
import Sidebar from "./Components/Sidebar";
import CreatePost from "./Components/CreatePost";
import ListPost from "./Components/ListPost";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="app-container">
    <Sidebar />
    <div className ="content">
    <AppHeader />
    <CreatePost />
    <ListPost />
    <AppFooter />
    </div>
    </div>
  )
}

export default App;
