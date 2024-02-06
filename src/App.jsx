import Demo from "./components/Demo"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <main className="overflow-hidden">
      <NavBar/>
      <Hero/>
      <Demo/>
    </main>
  )
}

export default App
