function Footer() {
  // Base style (same as Header.jsx)
  const baseStyle = {
    backgroundColor: "navy", // this will be overridden
    color: "white",
    textAlign: "center",
    padding: "10px"
  };

  // Footer style (reuse baseStyle but change background color)
  const footerStyle = {
    ...baseStyle,
    backgroundColor: "black"
  };

  return (
    <footer style={footerStyle}>
      <p>© 2023 City Lovers</p>
    </footer>
  );
}

export default Footer;