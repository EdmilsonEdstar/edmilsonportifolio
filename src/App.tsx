import { Hero } from "./Sessions/Hero"
import { Skills } from "./Sessions/Skills"
import { About } from "./Sessions/About"
import { Project } from "./Sessions/Project"
import { Experience } from "./Sessions/Experience"
import { Contacts } from "./Sessions/Contacts"
import { Footer } from "./Layout/Footer"



function App() {
  return (
    <>
      <Hero />
      <Skills />
      <main className="lg:mx-[10rem] space-y-12">
        <About/>
        <Project/>
        <Experience/>
        <Contacts/>
      </main>
      <Footer/>
    </>
  )
}

export default App
