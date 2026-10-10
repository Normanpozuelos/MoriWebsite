import './App.css'

const ritualSteps = [
  { number: '01', title: 'Begin where you are', detail: 'Make a little room for yourself.' },
  { number: '02', title: 'Find your rhythm', detail: 'Let small rituals gather momentum.' },
  { number: '03', title: 'Keep coming back', detail: 'Build a practice that feels like yours.' },
]

function App() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="MORÍ home">
          MORÍ<span className="wordmark-dot">.</span>
        </a>
        <p className="header-note">A considered way to begin again</p>
        <a className="header-link" href="#ritual">
          Discover the ritual <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-mark" aria-hidden="true" /> MORÍ <span aria-hidden="true">×</span> Guidance</p>
          <h1 id="hero-title">A Ritual<br />in <em>Motion.</em></h1>
          <p className="hero-tagline">Find your ritual.<br />Build your momentum.</p>
          <a className="primary-link" href="#ritual">
            <span>Enter the experience</span>
            <span className="primary-link-icon" aria-hidden="true">↓</span>
          </a>
          <p className="hero-footnote">A new kind of everyday practice</p>
        </div>

        <div className="hero-visual" aria-label="MORÍ × Guidance visual story">
          <div className="visual-frame" data-media-slot="background-video">
            <div className="visual-glow" aria-hidden="true" />
            <div className="visual-orbit visual-orbit-one" aria-hidden="true" />
            <div className="visual-orbit visual-orbit-two" aria-hidden="true" />
            <div className="visual-center" aria-hidden="true">
              <span className="visual-center-inner" />
            </div>
            <p className="visual-index">A daily practice<br />in three movements</p>
            <p className="visual-caption"><span className="caption-line" /> Moving image</p>
          </div>
          <div className="visual-meta">
            <span>Grounded in nature</span>
            <span className="meta-separator" aria-hidden="true">✳</span>
            <span>Made for real life</span>
          </div>
          <div className="media-slots" aria-hidden="true">
            <span data-media-slot="product-imagery">MORÍ / product still</span>
            <span data-media-slot="guidance-screenshots">Guidance / app view</span>
          </div>
        </div>

        <div className="hero-side-note" aria-hidden="true">A softer kind of forward</div>
      </section>

      <section className="ritual-section" id="ritual" aria-labelledby="ritual-title">
        <div className="ritual-intro">
          <p className="eyebrow">A practice, made personal</p>
          <h2 id="ritual-title">Small moments.<br /><em>Lasting movement.</em></h2>
        </div>
        <p className="ritual-description">
          MORÍ × Guidance brings intention and gentle structure to the rituals that help you feel more like yourself.
        </p>
        <div className="ritual-steps">
          {ritualSteps.map((step) => (
            <article className="ritual-step" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <span>MORÍ × Guidance</span>
        <span>A ritual in motion</span>
        <a href="#top">Back to beginning ↑</a>
      </footer>
    </main>
  )
}

export default App
