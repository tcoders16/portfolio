
import { Timeline } from "../timeline";

export function TimelineDemo() {
  const data = [
        {
      title: "Mid 2025",
      content: (
<div>
  <h3 className="text-base md:text-2xl poppins-bold text-neutral-900 dark:text-neutral-100 mb-2">
    Lost & Found Management System – Built for 
    <span className="text-blue-400 ml-[1%]">Ontario Transit</span>
  </h3>

  <p className="mb-8 text-xs poppins-thin text-neutral-800 md:text-sm dark:text-neutral-200">
    Designed and currently being offered to transit networks like 
    <strong className="text-blue-400"> Metrolinx</strong>, this AI-powered Lost & Found software enables seamless item recovery across buses, trains, and stations throughout 
    <span className="text-blue-400 font-medium"> Ontario transit</span>. The platform is built for scale — supporting real-time image-based item intake, smart natural language search, and intelligent matching with reported lost items across the entire network.
  </p>

  <p className="mb-8 text-xs poppins-thin text-neutral-800 md:text-sm dark:text-neutral-200">
    Our system is trained on a custom, domain-specific dataset tailored for public transit environments. It can understand lost item descriptions submitted by users and intelligently associate them with found item records using a fully self-hosted machine learning model. This architecture guarantees performance while maintaining full control over organizational data — without relying on any third-party AI providers.
  </p>

  <p className="mb-8 text-xs poppins-thin text-neutral-800 md:text-sm dark:text-neutral-200">
    For example, a passenger might submit, “I lost a black JLab earbud case with a small scratch near Union Station.” The system parses this input, matches it against known found items with image + text embeddings, and alerts the nearest authority if a high-confidence match is found.
  </p>

  <p className="mb-8 text-xs poppins-thin text-neutral-800 md:text-sm dark:text-neutral-200">
    The software includes label/scratch detection, color tagging, date-location correlation, and contextual search. With live admin dashboards, audit trails, real-time alerting, and offline mobile entry support, the solution is optimized for scale across regional transit authorities.
  </p>

  <div className="grid grid-cols-2 gap-4">
<img
  src="/images/projects/scan.png"
  alt="lost and found dashboard"
  width={200}
  height={500}
  className="w-full h-auto max-h-[250px] rounded-xl object-contain  bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
/>
<img
  src="/images/projects/product_info.png"
  alt="lost and found dashboard"
  width={200}
  height={500}
  className="w-full h-auto max-h-[250px] rounded-xl object-contain  bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
/>
<img
  src="/images/projects/claim.png"
  alt="lost and found dashboard"
  width={200}
  height={500}
  className="w-full h-auto max-h-[250px] rounded-xl object-contain  bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
/>
<img
  src="/images/projects/OwnerView.png"
  alt="lost and found dashboard"
  width={200}
  height={500}
  className="w-full h-auto max-h-[250px] rounded-xl object-contain  bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
/>
  </div>
</div>
      ),
    },
    {
      title: "Early 2025",
      content: (
        <div>
          <h3 className="text-base md:text-2xl  poppins-bold text-neutral-900 dark:text-neutral-100 mb-2">
            Vadtal Donor Management Platform
          </h3>
          <p className="mb-8 text-xs poppins-thin text-neutral-800 md:text-sm dark:text-neutral-200">
            Designed and delivered a robust cross-platform donor management system for <strong>Vadtal.org</strong>, streamlining how donations are tracked, organized, and accessed by administrators across both web and mobile. The platform offers a seamless user experience with real-time donor lookup, smart entry suggestions, and complete donation history visibility. Focused on scalability, security, and long-term maintainability, the solution has empowered the organization to manage large volumes of donor data with ease. Successfully launched and deployed the system end-to-end, with ongoing support to ensure reliability and performance across all devices and user roles.
          </p>


          <div className="grid grid-cols-2 gap-4">
<img
  src="/images/projects/VadtalDo.png"
  alt="lost and found dashboard"
  width={200}
  height={500}
  className="w-full h-auto max-h-[250px] rounded-xl object-contain  bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
/>
<img
  src="/images/projects/scan.png"
  alt="lost and found dashboard"
  width={200}
  height={500}
  className="w-full h-auto max-h-[250px] rounded-xl object-contain  bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
/>
<img
  src="/images/projects/scan.png"
  alt="lost and found dashboard"
  width={200}
  height={500}
  className="w-full h-auto max-h-[250px] rounded-xl object-contain  bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
/>
<img
  src="/images/projects/scan.png" 
  alt="lost and found dashboard"
  width={200}
  height={500}
  className="w-full h-auto max-h-[250px] rounded-xl object-contain  bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
/>
          </div>
        </div>
      ),
    },
    {
      title: "Late 2024",
      content: (
        <div>
          <h2 className="mb-4 text-lg font-semibold text-neutral-900 md:text-xl dark:text-neutral-100">
            Karma Firm
          </h2>

          <p className="mb-8 text-xs poppins-thin text-neutral-800 md:text-sm dark:text-neutral-200">
            At Karma Firm, I built an AI-powered invoice fetcher that lets finance admins query receipts using plain English — no filters, no dropdowns.
          </p>

          <p className="mb-8 text-xs poppins-thin text-neutral-800 md:text-sm dark:text-neutral-200">
            You could type, “Summarize all payments made to dealer XYZ from 20/12/2023 to 03/09/2024,” and it would automatically fetch, filter, and break down invoices by credit, debit, and total amount. It's powered by a local LLM model fine-tuned for invoice understanding, which parses user intent, generates structured MongoDB queries, and returns precise summaries — making invoice retrieval as intuitive as asking a question.
          </p>

          <p className="mb-8 text-xs poppins-thin text-neutral-800 md:text-sm dark:text-neutral-200">
            To ensure full data confidentiality, we trained and deployed the language model entirely on-premise — eliminating the need to send sensitive financial data to external APIs. This approach aligned with the firm's compliance and data residency requirements.
          </p>

          <p className="mb-8 text-xs poppins-thin text-neutral-800 md:text-sm dark:text-neutral-200">
            The system handles flexible date formats, dealer-specific lookups, and payment method aggregation. Designed to help non-technical users interact with financial data conversationally, it improved reporting speed by over 70%.
          </p>
          <div className="grid h-auto grid-cols-2 gap-4">
<img
  src="/images/projects/Invoice1.png"
  alt="lost and found dashboard"
  width={200}
  height={500}
  className="w-full h-auto max-h-[250px] rounded-xl object-contain  bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
/>
<img
  src="/images/projects/Invoice2.png"
  alt="lost and found dashboard"
  width={200}
  height={500}
  className="w-full h-auto max-h-[250px] rounded-xl object-contain  bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
/>
       </div>
        </div>
      ),
    },
        {
      title: "Mid 2024",
      content: (
<div>
  <h2 className="mb-4 text-lg poppins-bold text-neutral-900 md:text-xl dark:text-neutral-100">
    Vadtal Dham Toronto
  </h2>
      <a
        href="https://www.vadtaldhamtoronto.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm text-blue-400 hover:underline"
      >
        Visit Live Website →
      </a>

  <p className="mb-8 text-xs poppins-thin text-neutral-800 md:text-sm dark:text-neutral-200">
    I currently manage and maintain the official website and internal software systems for Vadtal Dham Toronto. This includes web development, backend services, and custom tooling used by the administration.
  </p>

  <p className="mb-8 text-xs poppins-thin text-neutral-800 md:text-sm dark:text-neutral-200">
    My work ensures the platform remains fast, secure, and reliable across both public-facing and admin-only features. From donation record systems to content updates, I actively support the digital infrastructure of the organization.
  </p>

  <div className="grid grid-cols-2 gap-4">
<img
  src="/images/projects/Vadtal.png"
  alt="lost and found dashboard"
  width={200}
  height={500}
  className="w-full h-auto max-h-[250px] rounded-xl object-contain  bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
/>
<img
  src="/images/projects/Vadtal2.png"
  alt="lost and found dashboard"
  width={200}
  height={500}
  className="w-full h-auto max-h-[250px] rounded-xl object-contain  bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
/>

  </div>
</div>
      ),
    },
    {
      title: "Currently",
      content: (
<div>
  <h2 className="mb-4 text-lg poppins-bold text-neutral-900 md:text-xl dark:text-neutral-100">
    Law Firm Project
  </h2>
  <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
    Currently building an AI-powered legal retrieval system projected to save firms between 
    <span className="font-semibold text-blue-400 m-[1%]">$80,000–$100,000 USD</span> annually.
  </p>

  <div className="mb-8 space-y-2">
    <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
      • Instantly retrieves laws, clauses, and by-laws from contract PDFs
    </div>
    <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
      • Designed to eliminate the need for junior legal assistants in review workflows
    </div>
    <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
      • Uses retrieval-augmented generation and vector search over thousands of legal pages
    </div>
    <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
      • Trained to understand legalese, obligations, exceptions, and compliance flags
    </div>
    <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
      • Allows senior lawyers to query: “Does clause 12 violate employment law?” — and get answers in seconds
    </div>
  </div>

  <div className="grid grid-cols-2 gap-4">
<img
  src="/images/projects/Law.png"
  alt="lost and found dashboard"
  width={200}
  height={500}
  className="w-full h-auto max-h-[250px] rounded-xl object-contain  bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
/>
<img
  src="/images/projects/EquiLaw.png"
  alt="lost and found dashboard"
  width={200}
  height={500}
  className="w-full h-auto max-h-[250px] rounded-xl object-contain  bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
/>
<img
  src="/images/projects/EquiLaw2.png"
  alt="lost and found dashboard"
  width={200}
  height={500}
  className="w-full h-auto max-h-[250px] rounded-xl object-contain  bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
/>

  </div>
</div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
