import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import spaceFlower from "@/assets/space-flower.jpg";
import spaceGrand from "@/assets/space-grand.jpg";
import spaceVilla from "@/assets/space-villa.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jardin de Vie — Luxury Wedding & Events Venue, Mastita, Lebanon" },
      { name: "description", content: "Jardin de Vie is a luxury wedding and events venue on the hills of Mastita, overlooking the Mediterranean Sea and the ancient ruins of Byblos." },
      { property: "og:title", content: "Jardin de Vie — Where love blooms among the hills of Byblos" },
      { property: "og:description", content: "Luxury wedding and events venue in Mastita, Lebanon." },
    ],
  }),
  component: Index,
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 40" className={className} fill="none" aria-hidden="true">
      <path d="M10 20 H80" stroke="currentColor" strokeWidth="0.6" />
      <path d="M120 20 H190" stroke="currentColor" strokeWidth="0.6" />
      <g stroke="currentColor" strokeWidth="0.7" fill="none">
        <circle cx="100" cy="20" r="4" />
        <path d="M100 6 C 96 12, 96 18, 100 20 C 104 18, 104 12, 100 6 Z" />
        <path d="M100 34 C 96 28, 96 22, 100 20 C 104 22, 104 28, 100 34 Z" />
        <path d="M86 20 C 92 16, 96 18, 100 20 C 96 22, 92 24, 86 20 Z" />
        <path d="M114 20 C 108 16, 104 18, 100 20 C 104 22, 108 24, 114 20 Z" />
      </g>
    </svg>
  );
}

function Chevron() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

const NAV = [
  { href: "#about", label: "Story" },
  { href: "#spaces", label: "Spaces" },
  { href: "#events", label: "Events" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Inquiries" },
];

function Index() {
  useReveal();
  const [submitted, setSubmitted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-forest-deep text-ivory font-body">
      {/* NAV */}
      <header className="fixed top-0 z-50 w-full bg-forest-deep/70 backdrop-blur-md border-b border-gold/15">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
          <a href="#top" className="font-display text-xl text-gold sm:text-2xl">
            Jardin <span className="italic">de</span> Vie
          </a>
          <nav className="hidden gap-10 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[11px] tracking-luxury uppercase text-ivory/80 transition-colors hover:text-gold"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden text-[11px] tracking-luxury uppercase text-gold border-b border-gold/60 pb-1 hover:border-gold md:inline-block"
          >
            Enquire
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" ref={heroRef} className="relative h-screen min-h-[700px] w-full overflow-hidden">
        <div className="absolute inset-0 animate-slow-zoom">
          <img
            src={heroImg}
            alt="Jardin de Vie garden at golden hour overlooking the Mediterranean and Byblos"
            width={1920}
            height={1280}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/70 via-forest-deep/40 to-forest-deep/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.55)_100%)]" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="reveal text-[10px] tracking-luxury uppercase text-gold sm:text-xs">
            Est. 2006 · Mastita, Lebanon
          </p>
          <Ornament className="reveal mt-8 h-6 w-48 text-gold/70" />
          <h1 className="reveal mt-6 font-display text-6xl font-light leading-[1.05] text-ivory sm:text-7xl md:text-[8rem]">
            Jardin <span className="italic font-light text-gold-soft">de</span> Vie
          </h1>
          <p className="reveal mt-8 max-w-xl font-display italic text-lg text-ivory/80 sm:text-2xl">
            Where love blooms among the hills of Byblos
          </p>
          <a
            href="#spaces"
            className="reveal mt-12 inline-flex items-center gap-3 border border-gold px-10 py-4 text-[11px] tracking-luxury uppercase text-ivory transition-all duration-500 hover:bg-gold hover:text-forest-deep"
          >
            Explore the Venue
          </a>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-gold animate-chevron"
          aria-label="Scroll down"
        >
          <Chevron />
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative bg-forest-deep py-28 sm:py-40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-2 md:gap-24 md:px-10">
          <div className="reveal relative">
            <div className="absolute -inset-3 border border-gold/30" />
            <img
              src={aboutImg}
              alt="Wrought-iron garden gates of Jardin de Vie surrounded by roses"
              width={800}
              height={1100}
              loading="lazy"
              className="relative h-[560px] w-full object-cover sm:h-[680px]"
            />
          </div>
          <div className="reveal flex flex-col justify-center">
            <Ornament className="h-6 w-40 text-gold" />
            <p className="mt-6 text-[10px] tracking-luxury uppercase text-gold/80">Our Story</p>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight text-ivory sm:text-5xl md:text-6xl">
              A Garden Built for <span className="italic">Timeless Moments</span>
            </h2>
            <div className="gold-divider my-8 w-24" />
            <div className="space-y-5 text-base leading-relaxed text-ivory/75 sm:text-[17px]">
              <p>
                Tucked into the hillside of Mastita, Jardin de Vie has welcomed
                love stories since 2006. Beyond its wrought-iron gates lies a
                world of roses, olive trees, and panoramic horizons where the
                Mediterranean meets the ancient stones of Byblos.
              </p>
              <p>
                Every corner of the estate has been composed like a poem —
                terraced gardens, candlelit pathways, and open-air pavilions
                designed for the most meaningful day of your life.
              </p>
              <p>
                Here, time slows. Light softens. And a celebration becomes a
                memory worth a lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto h-px w-32 bg-gold/40" />

      {/* SPACES */}
      <section id="spaces" className="bg-forest-deep py-28 sm:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-[10px] tracking-luxury uppercase text-gold/80">The Estate</p>
            <h2 className="mt-4 font-display text-4xl font-light text-ivory sm:text-5xl md:text-6xl">
              Our <span className="italic">Spaces</span>
            </h2>
            <Ornament className="mx-auto mt-6 h-6 w-48 text-gold/70" />
            <p className="mt-6 text-ivory/70">
              Three distinct settings, one unforgettable estate.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-3">
            {[
              {
                img: spaceFlower,
                name: "The Flower Garden",
                tag: "Outdoor Ceremonies",
                desc: "Intimate & romantic, framed in roses.",
              },
              {
                img: spaceGrand,
                name: "The Grand Garden",
                tag: "Open-Air Receptions",
                desc: "Up to 900 guests beneath the stars.",
              },
              {
                img: spaceVilla,
                name: "La Villa Ballroom",
                tag: "Indoor Elegance",
                desc: "300–350 guests in chandelier-lit grandeur.",
              },
            ].map((s) => (
              <article
                key={s.name}
                className="reveal group relative bg-forest border border-gold/25 transition-all duration-700 hover:border-gold hover:shadow-[0_0_40px_-10px_rgba(201,168,76,0.45)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.name}
                    width={900}
                    height={700}
                    loading="lazy"
                    className="h-72 w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-transparent to-forest-deep/70" />
                </div>
                <div className="p-8 text-center">
                  <p className="text-[10px] tracking-luxury uppercase text-gold">{s.tag}</p>
                  <h3 className="mt-4 font-display text-3xl font-light text-ivory">{s.name}</h3>
                  <div className="gold-divider mx-auto my-5 w-12" />
                  <p className="text-sm text-ivory/70">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="relative bg-forest py-28 sm:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.08),_transparent_70%)]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center md:px-10">
          <div className="reveal">
            <p className="text-[10px] tracking-luxury uppercase text-gold/80">Occasions</p>
            <h2 className="mt-4 font-display text-4xl font-light text-ivory sm:text-5xl">
              Events We <span className="italic">Host</span>
            </h2>
            <Ornament className="mx-auto mt-6 h-6 w-44 text-gold/70" />
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-3">
            {[
              { icon: "💍", label: "Weddings" },
              { icon: "💫", label: "Engagements" },
              { icon: "🏛️", label: "Corporate Events" },
            ].map((e) => (
              <div key={e.label} className="reveal flex flex-col items-center">
                <div className="grid h-20 w-20 place-items-center rounded-full border border-gold/50 text-3xl">
                  <span>{e.icon}</span>
                </div>
                <p className="mt-6 text-[11px] tracking-luxury uppercase text-ivory">{e.label}</p>
              </div>
            ))}
          </div>

          <p className="reveal mx-auto mt-20 max-w-2xl font-display italic text-xl text-ivory/75 sm:text-2xl">
            Every occasion deserves a setting as extraordinary as the moment itself.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-forest-deep py-28 sm:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-[10px] tracking-luxury uppercase text-gold/80">Visuals</p>
            <h2 className="mt-4 font-display text-4xl font-light text-ivory sm:text-5xl md:text-6xl">
              The Jardin <span className="italic">Experience</span>
            </h2>
            <Ornament className="mx-auto mt-6 h-6 w-48 text-gold/70" />
          </div>

          <div className="reveal mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            <GalleryItem src={g1} alt="Romantic wedding table setting" className="md:row-span-2 aspect-[4/5] md:aspect-auto md:h-full" />
            <GalleryItem src={g2} alt="Aerial garden ceremony overlooking the sea" className="aspect-square" />
            <GalleryItem src={g3} alt="Close-up of blush roses" className="aspect-square" />
            <GalleryItem src={g4} alt="Chandeliers and string lights" className="md:row-span-2 aspect-[4/5] md:aspect-auto md:h-full" />
            <GalleryItem src={g5} alt="Sunset aisle ceremony" className="col-span-2 md:col-span-2 aspect-[16/9]" />
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="text-[11px] tracking-luxury uppercase text-gold border-b border-gold/50 pb-1 hover:border-gold"
            >
              View Full Gallery
            </a>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-ivory py-28 text-forest-deep sm:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-[10px] tracking-luxury uppercase" style={{ color: "var(--color-gold)" }}>
              The Difference
            </p>
            <h2 className="mt-4 font-display text-4xl font-light sm:text-5xl md:text-6xl">
              Why <span className="italic">Jardin de Vie</span>
            </h2>
            <Ornament className="mx-auto mt-6 h-6 w-48 text-[color:var(--color-gold)]" />
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "🌅", title: "Mediterranean Views", desc: "Panoramic horizons across Byblos and the sea." },
              { icon: "🌹", title: "Lush Rose Gardens", desc: "Thousands of blooms in seasonal bloom." },
              { icon: "🏰", title: "Indoor & Outdoor", desc: "Flexible spaces for every weather and vision." },
              { icon: "📸", title: "Iconic Backdrops", desc: "A photographer's dream at every turn." },
            ].map((f) => (
              <div key={f.title} className="reveal text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border" style={{ borderColor: "var(--color-gold)" }}>
                  <span className="text-2xl">{f.icon}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-medium">{f.title}</h3>
                <div className="mx-auto my-4 h-px w-10" style={{ background: "var(--color-gold)" }} />
                <p className="text-sm leading-relaxed text-forest-deep/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-forest-deep py-28 sm:py-40">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="reveal text-center">
            <p className="text-[10px] tracking-luxury uppercase text-gold/80">Inquiries</p>
            <h2 className="mt-4 font-display text-4xl font-light text-ivory sm:text-5xl md:text-6xl">
              Begin Your Story <span className="italic">With Us</span>
            </h2>
            <Ornament className="mx-auto mt-6 h-6 w-48 text-gold/70" />
            <p className="mt-6 text-ivory/70">
              For bookings, availability, and private venue tours.
            </p>
          </div>

          {submitted ? (
            <div className="reveal mt-16 border border-gold/40 p-12 text-center">
              <p className="font-display italic text-2xl text-gold">Thank you.</p>
              <p className="mt-4 text-ivory/75">
                Your enquiry has been received. Our team will be in touch within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="reveal mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field label="Full Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-luxury uppercase text-gold/80">Event Type</label>
                <select
                  required
                  defaultValue=""
                  className="border-b border-gold/40 bg-transparent py-3 text-ivory outline-none transition-colors focus:border-gold"
                >
                  <option value="" disabled className="bg-forest-deep">Select…</option>
                  <option className="bg-forest-deep">Wedding</option>
                  <option className="bg-forest-deep">Engagement</option>
                  <option className="bg-forest-deep">Corporate Event</option>
                  <option className="bg-forest-deep">Other</option>
                </select>
              </div>
              <Field label="Preferred Date" name="date" type="date" />
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label className="text-[10px] tracking-luxury uppercase text-gold/80">Message</label>
                <textarea
                  rows={4}
                  className="border-b border-gold/40 bg-transparent py-3 text-ivory outline-none transition-colors focus:border-gold"
                />
              </div>
              <div className="sm:col-span-2 mt-4 flex justify-center">
                <button
                  type="submit"
                  className="bg-gold px-12 py-4 text-[11px] tracking-luxury uppercase text-forest-deep transition-all duration-500 hover:bg-gold-soft"
                  style={{ backgroundColor: "var(--color-gold)", color: "var(--color-forest-deep)" }}
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          )}

          <div className="mt-16 flex flex-col items-center gap-3 text-sm text-ivory/70 sm:flex-row sm:justify-center sm:gap-10">
            <span>📍 Mastita, Jbeil</span>
            <span className="hidden h-px w-10 bg-gold/40 sm:block" />
            <a href="https://jardindevielb.com" className="hover:text-gold">🌐 jardindevielb.com</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gold/40 bg-forest-deep py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between md:px-10">
          <a href="#top" className="font-display text-2xl text-gold">
            Jardin <span className="italic">de</span> Vie
          </a>
          <nav className="flex flex-wrap justify-center gap-8">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-[10px] tracking-luxury uppercase text-ivory/60 hover:text-gold">
                {n.label}
              </a>
            ))}
          </nav>
          <p className="text-[10px] tracking-luxury uppercase text-ivory/50">
            © {new Date().getFullYear()} Jardin de Vie
          </p>
        </div>
      </footer>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] tracking-luxury uppercase text-gold/80" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="border-b border-gold/40 bg-transparent py-3 text-ivory outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}

function GalleryItem({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-forest-deep/0 transition-colors duration-500 group-hover:bg-forest-deep/40" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="grid h-12 w-12 place-items-center rounded-full border border-gold text-gold">
          <span className="text-lg">+</span>
        </div>
      </div>
    </div>
  );
}
