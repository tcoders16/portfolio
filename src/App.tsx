import ZoomOnScroll from './components/ZoomOnScroll';
import RevealSection from './components/RevealSection';




import { AppleCardsCarouselDemo } from './components/ui/AppleCardsCarouselDemo';
import {TimelineDemo} from './components/ui/TimelineDemo';
import { SignupFormDemo } from './components/ui/SignupFormDemo';
import { AnimatedTestimonialsDemo } from './components/ui/AnimatedTestimonialsDemo';
import ApplePinDemo from './components/ui/AnimatedPinDemo'
const App = () => {
  return (
    <div>
      {/* Scroll-based animation section */}
      <ZoomOnScroll />
      {/* Section reveal on scroll */}
      <RevealSection />
      <div>
        <ApplePinDemo/>
      </div>

      {/* Tech Stack  */}
      <div>
        <AnimatedTestimonialsDemo />
      </div>

        <div>
            <AppleCardsCarouselDemo />
        </div>
      {/* Timeline section */}
      <div className="bg-white dark:bg-neutral-950">
        <TimelineDemo />
      </div>
      {/* Signup form section */}
      <div>
        <SignupFormDemo />
      </div>
    </div>
  );
};

export default App;