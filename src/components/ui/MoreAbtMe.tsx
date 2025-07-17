"use client";


import { Carousel, Card } from "../apple-cards-carousel";

export function MoreAbtMe() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl  text-neutral-800 dark:text-neutral-600  -mt-[4 0%] font-rounded font-bold">
        Get to know Me.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4 font-rounded"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto font-rounded">
              <span className="font-bold text-neutral-700">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "AI + Automation",
    title: "Smart Legal Clause Retriever",
    src: "https://plus.unsplash.com/premium_photo-1677269465314-d5d2247a0b0c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Public Sector",
    title: "Lost & Found Automation for Ontario Transit",
    src: "https://images.unsplash.com/photo-1739397791487-b7709a366b90?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Image Recognition",
    title: "Scratch-Aware Object Matching",
    src: "https://plus.unsplash.com/premium_photo-1667538961167-2f0ab7a5046e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Developer Tools",
    title: "GitHub CLI Assistant with LLM",
    src: "https://images.unsplash.com/photo-1510182760-5565485cf674?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Finance",
    title: "Donation Manager for Organization",
    src: "https://images.unsplash.com/photo-1678656447432-3bbe4eb4eceb?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "AI Chatbots",
    title: "Scripture-Aware Hindu AI Chatbot",
    src: "https://plus.unsplash.com/premium_photo-1682023587356-86065925727a?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Healthcare",
    title: "Real-Time Face Emotion Recognition",
    src: "https://plus.unsplash.com/premium_photo-1686546766757-4f84e798b9a9?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Security",
    title: "Smart Voting with Token Burn Mechanism",
    src: "https://plus.unsplash.com/premium_photo-1707819128905-0c86cef9a78a?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "NLP + Law",
    title: "Auto-Summarized Contract Parser",
    src: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Education",
    title: "Recipe & Nutrition AI Tutor",
    src: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Open Source",
    title: "RAG PDF Chatbot for Legal Teams",
    src: "https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Logistics",
    title: "Tracking with Visual Matching",
    src: "https://images.unsplash.com/photo-1619468129361-605ebea04b44?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "E-Governance",
    title: "Smart Record Retriever for Audit Teams",
    src: "https://plus.unsplash.com/premium_photo-1682002193011-9c0d5e58d6b1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Creative Tools",
    title: "Gesture-Based Navigation Portfolio",
    src: "https://images.unsplash.com/photo-1509307191386-b0bf1fc15f9d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Web3",
    title: "Multi-Chain Wallet Generator (ETH + Solana)",
    src: "https://plus.unsplash.com/premium_photo-1675883156911-6496b36c9f4d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "AI Ops",
    title: "Cloud Resource Optimizer using OpenAI",
    src: "https://images.unsplash.com/photo-1716637644831-e046c73be197?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Legal",
    title: "Junior Lawyer Eliminator AI",
    src: "https://plus.unsplash.com/premium_photo-1694088516778-186632fc2804?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Voice Interface",
    title: "Voice-Based AI Portfolio Narrator",
    src: "https://plus.unsplash.com/premium_photo-1679920155510-1f238318756e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Small Business",
    title: "Smart Inventory Flow System",
    src: "https://images.unsplash.com/photo-1729010874499-100fc22ca400?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "IoT",
    title: "Edge AI Model on Raspberry Pi for Transit Stations",
    src: "https://images.unsplash.com/photo-1610812388300-cd1e9cf28b54?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];
