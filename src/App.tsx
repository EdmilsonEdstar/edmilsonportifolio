import { Hero } from "./Sessions/Hero"
import { Skills } from "./Sessions/Skills"
import { About } from "./Sessions/About"
import { Projects } from "./Sessions/projects"


function App() {
  return (
    <>
      <Hero />
      <Skills />
      <main className="lg:mx-[10rem] space-y-12">
        <About/>
        <Projects/>
      </main>
    </>
  )
}

export default App
