function Navbar() {
  return (
    <nav
      style={{
        background: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2
  style={{
    color: "#1e3a8a",
    fontSize: "18px"
  }}
>
  Shavran Enterprises
</h2>

  <div
  style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  }}
>

  <a
    href="#home"
    style={{ margin: "5px", fontSize: "14px" }}
  >
    Home
  </a>

  <a
    href="#products"
    style={{ margin: "5px", fontSize: "14px" }}
  >
    Products
  </a>

  <a
    href="#services"
    style={{ margin: "5px", fontSize: "14px" }}
  >
    Services
  </a>

  <a
    href="#contact"
    style={{ margin: "5px", fontSize: "14px" }}
  >
    Contact
  </a>

  <a
    href="#gallery"
    style={{ margin: "5px", fontSize: "14px" }}
  >
    Gallery
  </a>
</div>
      
    </nav>
  );
}

export default Navbar;