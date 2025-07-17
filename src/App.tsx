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
      {/* Scroll-based animation section */}
          <ZoomOnScroll />
      {/* Section reveal on scroll */}
          <RevealSection />

  {/* Navigation  */}
    <div className="fixed -bottom-[190px] left-0 right-0 z-[999] flex justify-center">
      <FloatingNav />
    </div>

      <div>
        <Community/>
      </div>
      {/* Tech Stack  */}
      <div>
        <TechStack />
      </div>

        <div>
            <MoreAbtMe />
        </div>
      {/* Timeline section */}
      <div className="bg-white dark:bg-neutral-950">
        <Projects />
      </div>
      {/* Signup form section */}
    <div className="h-screen flex items-center justify-center">
      <ContactForm />
    </div>
    </div>
  );
};

export default App;