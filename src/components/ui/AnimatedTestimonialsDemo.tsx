import { AnimatedTestimonials } from "../animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
  {
    quote:
      "Leveraged for its virtual DOM diffing algorithm and unidirectional data flow, React enables me to build highly interactive SPAs with optimized component lifecycles and efficient re-rendering strategies.",
    name: "React.js",
    designation: "Declarative UI Library",
    src: "/images/logos/reactjs.jpg"
  },
  {
    quote:
      "Utilized for asynchronous, event-driven architecture, Node.js allows me to handle concurrent I/O operations and scale real-time APIs efficiently — ideal for AI pipelines, WebSockets, and microservices.",
    name: "Node.js",
    designation: "Non‑blocking Backend Runtime",
    src: "/images/logos/nodejs.jpeg"
  },
  {
    quote:
      "Express offers fine‑grained control over routing, middleware chaining, and request lifecycle handling. I use it to architect RESTful APIs with modular structure, rate‑limiting, and token‑based access layers.",
    name: "Express.js",
    designation: "Lightweight Web Framework",
    src: "/images/logos/expressjs.png"
  },
  {
    quote:
      "Optimized document modeling, compound indexing, and aggregation pipelines in MongoDB allow me to build scalable NoSQL schemas that power geospatial search, text scoring, and real‑time analytics.",
    name: "MongoDB",
    designation: "Distributed Document Database",
    src: "/images/logos/mongodb.png"
  },
  {
    quote:
      "Firebase serves as a fully managed backend with real‑time data sync, granular security rules, and zero‑config serverless functions — perfect for rapidly deploying cross‑platform reactive applications.",
    name: "Firebase",
    designation: "Serverless Backend‑as‑a‑Service",
    src: "/images/logos/firebase.jpg"
  },
  {
    quote:
      "Tailwind CSS enhances my ability to ship consistent, responsive, and component‑driven UIs using utility‑first classes, while minimizing custom CSS and increasing design scalability.",
    name: "Tailwind CSS",
    designation: "Utility‑First CSS Framework",
    src: "/images/logos/tailwindcss.jpg"
  },
  {
    quote:
      "LangChain enables the construction of robust RAG pipelines by chaining document loaders, retrievers, and LLMs with prompt templates and tool‑calling orchestration.",
    name: "LangChain",
    designation: "AI Orchestration Framework",
    src: "/images/logos/langchain.png"
  },
  {
    quote:
      "Pinecone handles high‑dimensional vector storage with optimized ANN search using HNSW index structures, perfect for semantic search over large document corpora.",
    name: "Pinecone",
    designation: "Vector Database",
    src: "/images/logos/pinecone.jpeg"
  },
  {
    quote:
      "face‑api.js allows real‑time facial expression and landmark detection in browser‑based environments using pre‑trained MobileNet/TensorFlow.js models, ideal for interactive UIs.",
    name: "face‑api.js",
    designation: "Client‑side Face Detection Library",
    src: "/images/logos/faceapijs.jpg"
  },
  {
    quote:
      "ChromaDB enables fast vector retrieval with built‑in filtering, persistence, and embedding store — suitable for lightweight RAG prototypes and local LLM indexing.",
    name: "ChromaDB",
    designation: "Embedded Vector Store",
    src: "/images/logos/chromadb.jpg"
  },
  {
    quote:
      "OpenAI Vision enables image‑based JSON extraction, object detection, and natural language description processing — foundational for AI‑powered lost & found systems.",
    name: "OpenAI Vision",
    designation: "Multimodal Inference API",
    src: "/images/logos/openai.png"
  },
  {
    quote:
      "SwiftUI’s declarative syntax and composable view system allow me to build modern, accessible, and reactive iOS applications with minimal boilerplate and full Firebase integration.",
    name: "SwiftUI",
    designation: "iOS Declarative UI Framework",
    src: "https://developer.apple.com/assets/elements/icons/swiftui/swiftui-96x96_2x.png"
  },
  {
    quote:
      "Vite's native ESM dev server and fast HMR enable rapid JS development with zero‑config, optimized bundles, and frictionless local workflow.",
    name: "Vite",
    designation: "Frontend Build Tool",
    src: "/images/logos/vite.png"
  },
  {
    quote:
      "Docker provides consistent environments across dev and production. I containerize full‑stack applications to encapsulate runtime, network, and volume configurations.",
    name: "Docker",
    designation: "Containerization Platform",
    src: "/images/logos/docker.png"
  }
];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
