import Sidebar from './features/sidebar'
import { Switch, Route } from 'react-router-dom'
import Payment from './features/payment/payment'
import Button from './components/Button'
import Input from './components/Input'
import SettingItem from './components/SettingItem'
import Select from './components/Select'

function App() {
  return (
    <div className="flex overflow-hidden relative w-full flex-1 h-screen">
      <header className="sticky top-0 h-full">
        <Sidebar />
      </header>
      <main className="flex-grow h-full overflow-auto overflow-x-hidden relative">
        <Switch>
          <Route path="/" exact></Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
