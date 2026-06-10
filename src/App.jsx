import "./App.css";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>Shavran Enterprises</h1>
        <p>Microscope Sales, Service & IVF Laboratory Solutions</p>

        <a
          href="https://wa.me/917387388242"
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp Now
        </a>
      </section>

      <section className="section">

       <h2>Brands We Deal In</h2>

<div className="grid">
  <div className="card">
  <img
    src="/images/logos/nikon.png"
    alt="Nikon"
    className="brand-logo"
  />

  <h3>Nikon</h3>
  <p>Professional microscope solutions.</p>
</div>

  <div className="card">
  <img
    src="/images/logos/olympus.png"
    alt="Olympus"
    className="brand-logo"
  />

  <h3>Olympus</h3>
  <p>Advanced laboratory microscopes.</p>
</div>

  <div className="card">
  <img
    src="/images/logos/labotech.png"
    alt="Labotech"
    className="brand-logo"
  />

  <h3>Labotech</h3>
  <p>Reliable educational and research microscopes.</p>
</div>

  <div className="card">
  <img
    src="/images/logos/magnus.png"
    alt="Magnus"
    className="brand-logo"
  />

  <h3>Magnus</h3>
  <p>High-quality microscopy systems.</p>
</div>

  <div className="card">
  <img
    src="/images/logos/radical.png"
    alt="Radical"
    className="brand-logo"
  />

  <h3>Radical</h3>
  <p>Laboratory and scientific instruments.</p>
</div>

  <div className="card">
    <h3>Other Brands</h3>
    <p>All leading branded microscopes available.</p>
  </div>
</div>


<h2 style={{ marginTop: "120px" }}>About Us</h2>
  <p
    style={{
      maxWidth: "900px",
      margin: "auto",
      lineHeight: "1.8",
      fontSize: "18px",
    }}
  >
    Shavran Enterprises is a trusted provider of microscope sales,
    servicing, maintenance, and IVF laboratory solutions. We supply high-quality
    microscopes and provide professional support for educational institutions,
    laboratories, hospitals, research centers, and industries.
    <br/>
    <br/>
    We proudly provide product delivery, installation, maintenance, and technical support services across India.

    <section className="section">
  <h2>Microscope Repair & Maintenance Services 🔬</h2>

  <p
    style={{
      maxWidth: "900px",
      margin: "20px auto",
      fontSize: "18px",
    }}
  >
    Our microscope preventative maintenance service includes:
  </p>

  <ul
    style={{
      maxWidth: "900px",
      margin: "20px auto",
      textAlign: "left",
      lineHeight: "2",
      fontSize: "18px",
    }}
  >
    <li>
      Disassemble, clean, degrease, and reset moving parts to factory
      specifications.
    </li>

    <li>
      Remove, clean fungus, check, and parfocal all optics.
    </li>

    <li>
      Clean interior prisms and inspect them for proper alignment.
    </li>

    <li>
      Remove, clean, and align the sub-stage condenser (if required).
    </li>

    <li>
      Test and set the electrical system to factory specifications.
    </li>

    <li>
      Perform performance checks on focusing mechanisms.
    </li>

    <li>
      Reassemble and individually test each microscope with a slide under
      all objectives.
    </li>
  </ul>
</section>

 
  </p>
</section>

   <section id="products" className="section"> 

  
        <h2>Our Products</h2>

        <div className="grid">
          <div className="card">
            <h3>Biological Microscopes</h3>
            <p>For schools, colleges, hospitals and laboratories.</p>
          </div>

          <div className="card">
            <h3>Stereo Microscopes</h3>
            <p>Ideal for inspection and industrial applications.</p>
          </div>

          <div className="card">
            <h3>Digital Microscopes</h3>
            <p>Advanced imaging with digital connectivity.</p>
          </div>

          <div className="card">
            <h3>Metallurgical Microscopes</h3>
            <p>Used for metal and material analysis.</p>
          </div>
        </div>
      </section>
      <section id="services" className="section">
        <h2>Our Services</h2>

        <div className="grid">
          <div className="card">
            <h3>Installation</h3>
            <p>Professional installation and setup.</p>
          </div>

          <div className="card">
            <h3>AMC Services</h3>
            <p>Annual Maintenance Contracts for reliability.</p>
          </div>

          <div className="card">
            <h3>Calibration Support</h3>
            <p>Precision calibration services.</p>
          </div>

          <div className="card">
            <h3>Breakdown Repair</h3>
            <p>Fast troubleshooting and repair support.</p>
          </div>
        </div>
      </section>

     
      

<a


  href="https://wa.me/917387388242"
  target="_blank"
  rel="noreferrer"
  className="whatsapp-float"
>
  WhatsApp
</a>
<Gallery />

 <section id="contact" className="section">
        <h2>Contact Us</h2>

        <p>📞 +91 73873 88242</p>
        <p>📍 Mumbai, Maharashtra, India</p>
        <p>📧 info@shavranenterprises.com</p>
        <p>WE DELIVER ALL OVER INDIA</p>
        <div className="footer-text">
  © 2026 Shavaran Enterprises<br />
  Microscope Sales • Service • IVF Laboratory Solutions
</div>
      </section>
    </>
  
  );
}

export default App;