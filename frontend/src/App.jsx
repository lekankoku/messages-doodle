import "./App.scss";
import Signin from './components/signin/Signin'
import Chat from './components/chat/Chat'
import { useUser } from "./hooks/useUser";


function App() {
  const { username } = useUser();
  if (!username) {
    return <Signin />;
  }
  return (
    <div className="app">
      <Chat />
    </div>
  )
}

export default App
