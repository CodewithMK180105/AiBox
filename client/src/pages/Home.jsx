import AiTools from "../components/AiTools"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Plan from "../components/Plan"
import Testimonial from "../components/Testimonial"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <AiTools />
      <Testimonial />
      <Plan />
    </div>
  )
}

export default Home
