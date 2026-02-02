import { Hero } from "./Sessions/Hero"
import { Skills } from "./Sessions/Skills"
import { About } from "./Sessions/About"
import { Project } from "./Sessions/Project"



function App() {
  return (
    <>
      <Hero />
      <Skills />
      <main className="lg:mx-[10rem] space-y-12">
        <About/>
        <Project/>
      </main>
    </>
  )
}

export default App
