import './App.css'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
export default function App() {
  return (
    <div class="container">
      <div className="row">
        <Info />
        <About />
        <Interests />
      </div>
    </div>
  )
}
