
import React from 'react';
import { ArrowRight, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [result, setResult] = React.useState("");
  const [showToast, setShowToast] = React.useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");
    setShowToast(true);
    const formData = new FormData(event.currentTarget);

    // Add access key specifically if not present in form
    if (!formData.get("access_key")) {
      formData.append("access_key", "39f24c5d-6237-4853-b1b6-b12ebfe76057");
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission Error", error);
      setResult("An error occurred. Please try again.");
    }

    // Hide toast after 5 seconds
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-40 bg-black relative">
      {/* Toast Notification */}
      <div
        className={`fixed bottom-10 right-10 z-50 transform transition-all duration-500 ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      >
        <div className="bg-zinc-900 border border-zinc-800 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-4">
          <div className={`w-2 h-2 rounded-full ${result === "Sending..." ? "bg-yellow-500 animate-pulse" : "bg-green-500"}`} />
          <p className="font-mono text-sm">{result}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">

        <div className="scroll-reveal opacity-0 translate-y-10 transition-all duration-1000">
          <h3 className="text-zinc-500 uppercase tracking-[0.4em] text-xs mb-6">Collaboration</h3>
          <h2 className="font-display text-6xl md:text-8xl leading-tight mb-8">
            LET'S CREATE <br />
            <span className="text-zinc-500 italic font-serif lowercase tracking-normal">something powerful.</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-md">
            Currently accepting new cinematic projects for 2026. Reach out and let's discuss your vision.
          </p>

          <div className="flex gap-6">
            <a href="https://www.instagram.com/charliecodelabs/?utm_source=ig_web_button_share_sheet" className="p-4 border border-zinc-800 rounded-full hover:bg-white hover:text-black transition-all">
              <Instagram size={20} />
            </a>
            <a href="https://youtube.com/@charliescodelabs?si=vxH-fXPx3db-RQz6" className="p-4 border border-zinc-800 rounded-full hover:bg-white hover:text-black transition-all">
              <Youtube size={20} />
            </a>
            <a href="https://wa.me/+918309664356" className="p-4 border border-zinc-800 rounded-full hover:bg-white hover:text-black transition-all">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div className="scroll-reveal opacity-0 translate-y-10 transition-all duration-1000 delay-300">
          <form
            onSubmit={onSubmit}
            className="space-y-6 bg-zinc-950/50 p-10 rounded-3xl border border-white/5 backdrop-blur-md"
          >
            {/* Web3Forms Configuration */}
            <input type="hidden" name="access_key" value="39f24c5d-6237-4853-b1b6-b12ebfe76057" />
            <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />
            <input type="hidden" name="from_name" value="Charlie's Code Lab Portfolio" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full bg-transparent border-b border-zinc-800 py-3 focus:border-white outline-none transition-colors text-zinc-300 placeholder:text-zinc-800"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full bg-transparent border-b border-zinc-800 py-3 focus:border-white outline-none transition-colors text-zinc-300 placeholder:text-zinc-800"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full bg-transparent border-b border-zinc-800 py-3 focus:border-white outline-none transition-colors text-zinc-300 placeholder:text-zinc-800 resize-none"
              />
            </div>

            <button type="submit" className="group w-full py-5 bg-white text-black rounded-full uppercase tracking-[0.3em] font-bold text-xs flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform duration-500">
              Send Message
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
