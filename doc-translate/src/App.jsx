import UploadBox from "./components/UploadBox";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-container">
          <a href="#home" className="logo">
            <div className="logo-icon">D</div>
            <span>DocuLingo</span>
          </a>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#about">About</a>
          </nav>

          <a href="#workspace" className="nav-action">
            Try DocuLingo
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="hero-section">
          <div className="hero">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              OCR & Translation
            </div>

            <h1>
              Turn Images Into
              <span> Translated Text</span>
            </h1>

            <p>
              Extract text from images with OCR and translate
              it into your preferred language — all in one
              simple workspace.
            </p>

            <a href="#workspace" className="hero-button">
              Start Translating
              <span>→</span>
            </a>

            <div className="hero-note">
              No account required
              <span>•</span>
              Simple and easy to use
            </div>
          </div>
        </section>

        {/* Workspace */}
        <section id="workspace" className="workspace-section">
          <div className="section-heading">
            <span className="section-label">
              WORKSPACE
            </span>

            <h2>
              Extract. Translate. Done.
            </h2>

            <p>
              Upload your image and let DocuLingo handle
              the rest.
            </p>
          </div>

          <UploadBox />
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          className="info-section"
        >
          <div className="section-heading centered">
            <span className="section-label">
              HOW IT WORKS
            </span>

            <h2>
              From image to translation
            </h2>

            <p>
              Three simple steps are all you need.
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">
                01
              </div>

              <div className="step-icon">
                ↑
              </div>

              <h3>
                Upload an image
              </h3>

              <p>
                Upload or drag and drop an image containing
                the text you want to extract.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">
                02
              </div>

              <div className="step-icon">
                Aa
              </div>

              <h3>
                Extract the text
              </h3>

              <p>
                DocuLingo uses OCR technology to detect
                and convert text from your image.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">
                03
              </div>

              <div className="step-icon">
                文
              </div>

              <h3>
                Translate
              </h3>

              <p>
                Select your target language and translate
                the extracted text instantly.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="features-section">
          <div className="section-heading centered">
            <span className="section-label">
              FEATURES
            </span>

            <h2>
              Everything you need
            </h2>

            <p>
              A focused tool for extracting and translating
              text from images.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                OCR
              </div>

              <h3>
                Image to Text
              </h3>

              <p>
                Extract readable text from uploaded images
                using browser-based OCR.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                文
              </div>

              <h3>
                Multiple Languages
              </h3>

              <p>
                Translate extracted content into languages
                such as Hindi, Marathi, Spanish, French,
                and German.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                ↕
              </div>

              <h3>
                Drag & Drop
              </h3>

              <p>
                Quickly upload images by dragging them
                directly into the workspace.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                ✓
              </div>

              <h3>
                Edit Before Translation
              </h3>

              <p>
                Review and modify extracted text before
                sending it for translation.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                ⧉
              </div>

              <h3>
                Copy Results
              </h3>

              <p>
                Easily copy both extracted and translated
                text for use anywhere.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                ◇
              </div>

              <h3>
                Responsive
              </h3>

              <p>
                Use DocuLingo comfortably across desktop,
                tablet, and mobile screens.
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="about-section"
        >
          <div className="about-card">
            <div className="about-content">
              <span className="section-label">
                ABOUT DOCULINGO
              </span>

              <h2>
                A simple way to work with text inside
                images.
              </h2>

              <p>
                DocuLingo combines optical character
                recognition and translation into a single
                workflow. Instead of manually typing text
                from an image and then translating it,
                users can perform both tasks from one
                interface.
              </p>

              <p>
                The project was built as a practical
                full-stack web application using React,
                Node.js, Express, and OCR technology.
              </p>

              <a
                href="#workspace"
                className="about-button"
              >
                Try DocuLingo →
              </a>
            </div>

            <div className="about-visual">
              <div className="visual-window">
                <div className="visual-topbar">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="visual-content">
                  <div className="visual-upload">
                    <span>↑</span>

                    <strong>
                      Upload Image
                    </strong>

                    <small>
                      PNG • JPG • JPEG
                    </small>
                  </div>

                  <div className="visual-arrow">
                    →
                  </div>

                  <div className="visual-result">
                    <span>
                      文
                    </span>

                    <strong>
                      Translated
                    </strong>

                    <small>
                      Ready to copy
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">
                D
              </div>

              <span>
                DocuLingo
              </span>
            </div>

            <p>
              Image-to-text extraction and translation,
              made simple.
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>

            <a href="#how-it-works">
              How It Works
            </a>

            <a href="#about">
              About
            </a>

            <a href="#workspace">
              Try DocuLingo
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 DocuLingo · Built by Onkar Rode
          </p>

          <p>
            OCR • Translation • Full Stack
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;