import ZoomOnScroll from './components/ZoomOnScroll';
import RevealSection from './components/RevealSection';




import { AppleCardsCarouselDemo } from './components/ui/AppleCardsCarouselDemo';
import {TimelineDemo} from './components/ui/TimelineDemo';
import { SignupFormDemo } from './components/ui/SignupFormDemo';
import { AnimatedTestimonialsDemo } from './components/ui/AnimatedTestimonialsDemo';
import ApplePinDemo from './components/ui/AnimatedPinDemo'

import { FloatingNav } from './components/FloatingNav';

const App = () => {
  return (
    <div>
      {/* Scroll-based animation section */}
      <ZoomOnScroll />
      {/* Section reveal on scroll */}
      <RevealSection />

  {/* Navigation  */}
    <div className="fixed left-0 right-0 top-[42rem] z-[999] flex justify-center">
      <FloatingNav />
    </div>



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