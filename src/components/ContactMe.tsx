import { useState } from "react";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("Hello, Omkumar");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSend = async () => {
    if (!name || !lastname || !phone || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/app/contact/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, lastname, phone, email, message }),
      });

      if (res.ok) {
        setSent(true);
        setTimeout(() => {
          setName("");
          setEmail("");
          setLastname("");
          setPhone("");
          setMessage("Hello, Omkumar");
          setSent(false);
        }, 4000);
      } else {
        alert(" Failed to send email. Please try again.");
      }
    } catch (err) {
      alert(" Server error. Try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact"   className="min-h-[150vh] w-screen bg-black/90 text-white flex flex-col items-center justify-start relative overflow-y-auto overflow-x-hidden poppins-medium py-20"
 >
      <div className="absolute inset-0 z-0">
        <img
          src="/images/ContactMe.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 px-6 md:px-24 py-28 flex flex-col items-center justify-center w-full max-w-3xl">
        <div className="w-full text-left mb-4">
          <h2 className="text-sm md:text-base uppercase tracking-widest text-gray-400">
            Contact Me
          </h2>
        </div>

        <div className="w-full relative">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your First Name"
            className="w-full mb-3 p-4 bg-black/10 text-white placeholder-gray-500 border border-white/20 rounded-xl backdrop-blur-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Your Last Name"
            className="w-full mb-3 p-4 bg-black/10 text-white placeholder-gray-500 border border-white/20 rounded-xl backdrop-blur-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            inputMode="email"
            className="w-full mb-3 p-4 bg-black/10 text-white placeholder-gray-500 border border-white/20 rounded-xl backdrop-blur-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white/30"
          />

          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
            placeholder="Your phone"
            className="w-full mb-3 p-4 bg-black/10 text-white placeholder-gray-500 border border-white/20 rounded-xl backdrop-blur-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <textarea
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Start typing here..."
            className="w-full p-6 bg-black/10 text-white placeholder-gray-500 border border-white/20 rounded-2xl backdrop-blur-md shadow-md resize-none focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
          />

          <button
            onClick={handleSend}
            disabled={loading}
            className={`mt-4 px-6 py-3 ${loading ? "bg-gray-500" : "bg-white"} text-black font-medium rounded-xl hover:bg-gray-200 transition-transform active:scale-95`}
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {sent && (
            <div className="absolute inset-0 overflow-visible z-50 pointer-events-none">
              {[...Array(40)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white opacity-80 animate-floatUp"
                  style={{
                    width: `${4 + Math.random() * 4}px`,
                    height: `${4 + Math.random() * 4}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 0.5}s`,
                  }}
                />
              ))}
            </div>
          )}

          <div
            className={`absolute bottom-[-250px] left-0 w-full bg-white/10 text-white border border-white/10 rounded-2xl p-6 backdrop-blur-lg shadow-lg min-h-[150px] transform-gpu transition-transform duration-1000 ease-in-out ${sent ? "animate-mailLaunch" : ""}`}
          >
            <p className="font-semibold text-lg mb-2">To: Omkumar Solanki</p>
            <p className="text-sm text-gray-300 mb-1">From: {email || "your@email.com"}</p>
            <p className="text-sm text-gray-300 mb-4 italic">Subject: Message from {name || "Anonymous"}</p>
            <div className="whitespace-pre-wrap text-gray-200 text-sm">
              <p>{message || "Your message preview will appear here..."}</p>
              {name && (
                <p className="mt-6 text-gray-400 italic">Regards,<br /><span className="text-white">{name}</span></p>
              )}
            </div>
          </div>
        </div>
      </div>




    </section>
    
  );
};

export default ContactMe;