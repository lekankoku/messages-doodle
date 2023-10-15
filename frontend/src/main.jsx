import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { UserProvider } from "./contexts/UserContext";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App />
  </UserProvider>
);
