import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { MessageSection } from './components/MessageSection';
import { FinalSection } from './components/FinalSection';

function App() {
  return (
    <div className="scroll-smooth">
      <HeroSection />
      <StorySection />
      <MessageSection />
      <FinalSection />
    </div>
  );
}

export default App;
