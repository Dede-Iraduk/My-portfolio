import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Works from "./components/works/Works"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import "./app.scss"



function App() {
  return (
    <div className="App">
<Topbar/>
<div className="sections">
  <Intro/>
  <Portfolio/>
  <Testimonials/>
  <Contact/>
  <Works/>
</div>
    </div>
  );
}

export default App;
