import "./App.scss";
import Signin from './components/signin/Signin'
import { useUser } from "./hooks/useUser";


function App() {
  const { username } = useUser();
  if (!username) {
    return <Signin />;
  }
  return (
    <div className="app">
     test
    </div>
  )
}

export default App
