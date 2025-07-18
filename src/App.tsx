import ZoomOnScroll from './components/ZoomOnScroll';
import RevealSection from './components/RevealSection';
import { FloatingNav } from './components/FloatingNav';
import { ContactForm } from './components/ui/ContactForm';
import { Projects } from './components/ui/Projects';
import { MoreAbtMe } from './components/ui/MoreAbtMe';
import { TechStack } from './components/ui/TechStack';
import Community from './components/ui/Community';

const App = () => {
  return (
    <div>
      <div id = "home">
        {/* Scroll-based animation section */}
            <ZoomOnScroll />
        {/* Section reveal on scroll */}
            <RevealSection />
      </div>

  {/* Navigation  */}
    <div className="fixed -bottom-[190px] left-0 right-0 z-[999] flex justify-center">
      <FloatingNav />
    </div>

      <div id="community">
        <Community/>
      </div>
      {/* Tech Stack  */}
      <div id="techStack">
        <TechStack />
      </div>

        <div id="more">
            <MoreAbtMe />
        </div>
      {/* Timeline section */}
      <div id="projects" className="bg-white dark:bg-neutral-950">
        <Projects />
      </div>
      {/* Signup form section */}
    <div id="contact" className="h-screen flex items-center justify-center">
      <ContactForm />
    </div>
    </div>
  );
};

export default App;