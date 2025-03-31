import "./navbar.css";

const navBaras = () => {
  return (
    <div className="topnav">
      <a className="active" href="#home">
        Home
      </a>
      <div>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
};

export default navBaras;
