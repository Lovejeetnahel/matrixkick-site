import LeadForm from "./lead-form";

const services = [
  { b: "Flagship", t: "⚡ LeadReply - Instant AI Lead Response", d: "Every form fill, email, or missed-call inquiry gets an intelligent, personalized reply within seconds - day or night. Follow-up sequences included, so no lead goes cold." },
  { b: "Automation", t: "🔄 Workflow Automation (n8n / Make / Zapier)", d: "Connect your booking system, CRM, invoicing, and email so data moves itself. Kill the copy-paste work that eats hours every week." },
  { b: "AI Agents", t: "🤖 AI Chatbots & Voice Agents", d: "Website and WhatsApp assistants that qualify leads, answer FAQs, and book appointments - trained on your business, not generic scripts." },
  { b: "Data", t: "📊 Dashboards & Integrations", d: "One live dashboard showing your leads, jobs, and revenue - pulled automatically from the tools you already use." },
  { b: "Product", t: "🚀 SaaS MVP Development", d: "Have a software idea? I build working AI-powered MVPs fast - modern stack, ready for real users." },
  { b: "Start here", t: "🔍 Automation Audit", d: "A full review of your intake, follow-up, and admin workflows with a prioritized automation plan - know exactly what to automate first." }
];

const demos = [
  { t: "This Website", d: "Built and deployed the same day: Next.js 15 + TypeScript + React 19 on Vercel, custom domain, SEO schema, working lead pipeline. Repo is public - inspect every line.", link: "https://github.com/Lovejeetnahel/matrixkick-site", cta: "View the code" },
  { t: "LeadReply - Running On This Page", d: "The form below is wired to a live n8n automation. Submit it and the system replies to your inbox in seconds - the demo runs on you, not on a video.", link: "#lead-form", cta: "Trigger it yourself" },
  { t: "AI Content Pipeline", d: "An n8n system producing 10-15 AI-generated Reels and Stories daily: AI voice, AI imagery, FFmpeg video rendering, auto-published through the Meta Graph API.", link: "#lead-form", cta: "Ask for a walkthrough" }
];

const tiers = [
  { n: "Automation Audit", a: "$249", p: "one-time", f: ["Workflow & lead-flow review", "Prioritized automation roadmap", "ROI estimate per automation", "Credited if you book a build"], cta: "Book Audit", feat: false },
  { n: "LeadReply System", a: "$999", p: "setup + $149/mo", f: ["Instant AI replies to every inquiry, 24/7", "Personalized to your services & tone", "Automatic follow-up sequences", "Monthly tuning & monitoring"], cta: "Get LeadReply", feat: true },
  { n: "Custom Automation Build", a: "from $2,500", p: "per project", f: ["CRM, booking & invoicing integration", "AI agents & dashboards", "SaaS MVPs", "Fixed quote before work starts"], cta: "Request Quote", feat: false }
];

export default function Home() {
  return (
    <main className="wrap">
      <section className="hero">
        <h1>Your Leads Answered in Seconds. 24/7. Automatically.</h1>
        <p>Matrix Kick builds AI automation systems for busy service businesses. Every inquiry gets an instant, personalized reply - while you are on a job site, asleep, or with family. Stop losing customers to slow response times.</p>
        <a href="#lead-form" className="btn">Get a Free Automation Assessment</a>
      </section>
      <h2 className="sec-title">What I Build</h2>
      <p className="sec-sub">Practical automation systems - built, tested, and running inside your business.</p>
      <div className="grid">
        {services.map((s) => (
          <div className="card" key={s.t}>
            <span className="badge">{s.b}</span>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
          </div>
        ))}
      </div>
      <h2 className="sec-title">Live Demos - Proof, Not Promises</h2>
      <p className="sec-sub">No fake portfolios. These systems are real, running, and inspectable right now.</p>
      <div className="grid">
        {demos.map((m) => (
          <div className="card" key={m.t}>
            <span className="badge">Live</span>
            <h3>{m.t}</h3>
            <p>{m.d}</p>
            <p style={{ marginTop: 14 }}><a href={m.link} className="btn" style={{ padding: "10px 22px", fontSize: 15 }}>{m.cta}</a></p>
          </div>
        ))}
      </div>
      <h2 className="sec-title">Clear Pricing</h2>
      <p className="sec-sub">Fixed prices in CAD. No surprises, no lock-in contracts.</p>
      <div className="prices">
        {tiers.map((t) => (
          <div className={t.feat ? "price featured" : "price"} key={t.n}>
            {t.feat && <span className="tag">Most popular</span>}
            <h3>{t.n}</h3>
            <div className="amt">{t.a}</div>
            <div className="per">{t.p}</div>
            <ul>{t.f.map((x) => <li key={x}>{x}</li>)}</ul>
            <a href="#lead-form" className="btn">{t.cta}</a>
          </div>
        ))}
      </div>
      <section className="formwrap">
        <h2>Tell Me What Is Slowing You Down</h2>
        <p className="sec-sub">Send this and you will get a personalized reply in your inbox within minutes - that is the system working. Experience it yourself.</p>
        <LeadForm />
      </section>
      <div className="contact">
        <strong>Matrix Kick - Lovejeet Singh</strong><br />
        Hamilton, Ontario - <a href="mailto:babalyrics@gmail.com">babalyrics@gmail.com</a> - <a href="tel:+14379843592">+1 437-984-3592</a>
      </div>
    </main>
  );
}
