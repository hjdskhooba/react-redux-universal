import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <div className="header__inner">
                <nav className="header__nav">
                    <Link to="/">Main</Link>
                    {" "}__{" "}
                    <Link to="/todo">Todo</Link>
                    {" "}__{" "}
                    <Link to="/news">News</Link>
                    {" "}__{" "}
                    <Link to="/weather">Weather</Link>
                    {" "}__{" "}
                    <Link to="/money">Currency transfer</Link>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header