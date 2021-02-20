import logo from "../assets/img/logo.png";
import iconSearch from "../assets/img/icon-search.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header_content">
          <div className="nav">
            <img className="header_logo" src={logo} alt="logo" />
            <p>Gif Expert</p>
          </div>
          <div className="hero">
            <div className="hero_content">
              <h1 className="principal_title">
                All the GIFS in the world in one place.
              </h1>
              <p className="header_text">Search, watch and have fun</p>
              <a className="button" href="#search">
                Search Gifs
                <img
                  className="icon_search"
                  src={iconSearch}
                  alt="icon-search"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
