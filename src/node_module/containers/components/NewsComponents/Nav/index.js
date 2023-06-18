// import SearchInput from "containers/components/SearchInput/index.js";
import updateList from "../../../../images/header/refresh.png";
import search from "../../../../images/header/search.svg";
import burger from "../../../../images/header/burger.svg";
import { handleSearch } from "../../../../actions/news";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Component } from "react";

class Header extends Component {

    constructor(){
        super();
        this.state = {
            value: "",
            menu: false,
            messege: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.updateList = this.updateList.bind(this);
    };

    handleChange(e){
        this.setState({
            value: e.target.value
        });
    };

    toggleMenu(){
        this.setState({
            menu: !this.state.menu
        })
    };
    
    handleSubmit(e){
        e.preventDefault();
        this.props.handleSearch(this.state.value);
    };
    
    handleSort(e){
        this.setState({menu: false})
        this.props.handleSearch(e.target.innerText);
        window.scrollTo(0, 1000)
    };
    
    updateList(){
        this.setState({
            messege: true
        });
        setTimeout(()=>{
            this.setState({
                messege: false
            });
            this.props.handleSearch("");
        }, 2000);
    };
    
    render(){
        const lngs = {
            en: { nativeName: "English" },
            ru: { nativeName: "Русский" },
        }
        const { t, i18n } = this.props;
        return (
        <header className="news-page__header header">
            <div className={`nav-menu mobile-window popup ${this.state.menu ? "open" : "close"}`} onClick={this.toggleMenu}>
                <nav className="header__nav">
                    <Link className="header__nav--link fi" to="/">{t("Home")}</Link>
                    <Link className="header__nav--link se" to="/news">{t("News")}</Link>
                    <p className="header__nav--link th" onClick={this.handleSort}>{t("Sport")}</p>
                    <p className="header__nav--link fo" onClick={this.handleSort}>{t("Travel")}</p>
                    <p className="header__nav--link fy" onClick={this.handleSort}>{t("Future")}</p>
                    <p className="header__nav--link si" onClick={this.handleSort}>{t("Culture")}</p>
                </nav>
            </div>
            <div className="container">
                <div className="header__body">
                    <nav className="header__nav">
                        <Link className="header__nav--link fi" to="/">{t("Home")}</Link>
                        <Link className="header__nav--link se" to="/news">{t("News")}</Link>
                        <p className="header__nav--link th" onClick={this.handleSort}>{t("Sport")}</p>
                        <p className="header__nav--link fo" onClick={this.handleSort}>{t("Travel")}</p>
                        <p className="header__nav--link fy" onClick={this.handleSort}>{t("Future")}</p>
                        <p className="header__nav--link si" onClick={this.handleSort}>{t("Culture")}</p>
                    </nav>
                    <button className="header--burger" onClick={this.toggleMenu} >
                        <img src={burger} alt="" />
                    </button>
                    <div className="header__btns">
                    <form className='submit-form search-form form' onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.value} onInput={this.handleChange} className="search-input" placeholder="Type search keywords"/>
                    </form>
                        <button className="header--search search-btn" >
                            <img src={search} alt="" />
                        </button>
                        {
                            Object.keys(lngs).map((lng) => (
                                <button key={lng} className="r-btn" onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>{lng}</button>
                            ))
                        }
                        <button className="r-btn" onClick={this.updateList}><img src={updateList} alt="news-list-update-btn"/></button>
                    </div>
                </div>
            </div>
            <div className={`messege ${this.state.messege ? "show" : "hide"}`}>Page is reloaded</div>
        </header>
        );
    };
};

const mapDispatchToProps = {
    handleSearch
};

export default connect(null, mapDispatchToProps)(withTranslation()(Header));