import Sidebar from './features/sidebar'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Switch>
        <Route path="/" exact></Route>
      </Switch>
    </div>
  )
}

export default App
