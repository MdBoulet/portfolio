import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Project from "./components/Project";
import Tech from "./components/Tech";
import Particles from './Particles';
import './Particles.css';

export default function App() {
  return (
	<main className="text-gray-400 bg-gray-900 body-font">
		<div className="particles">
			<Particles />
		</div>
		<Header />
		<About />
		<Project />
		<Tech />
		<Contact />
	</main>
  )
}