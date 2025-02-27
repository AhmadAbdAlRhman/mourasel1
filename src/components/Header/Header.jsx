import "./Header.css";
import logo from "../../assets/index/1729805275MOvQIrbC3G0oVC9E2FYl.png";
const Header = () => {
    return (
        <header>
            <div id="header-sticky" className="tp-header__area tp-header__space-2 tp-header__transparent tp-header__menu-space">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-2 col-md-6 col-6">
                            <div className="tp-header__logo">
                                <a href="/">
                                    <img src={logo} alt="logo"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 d-none d-lg-block">
                            <div className="tp-header__main-menu tp-header__black-menu">
                                <div className="mean-push"></div>
                                <nav id="mobile-menu" >
                                    <ul>
                                        <li>
                                            <a href="/" target="_self">الرئيسية</a>
                                        </li>
                                        <li>
                                            <a href="/pricing" target="_self">التسعير</a>
                                        </li>
                                        <li>
                                            <a href="/about" target="_self">حول</a>
                                        </li>
                                        <li>
                                            <a href="/feaures" target="_self">المميزات</a>
                                        </li>
                                        <li>
                                            <a href="/blogs" target="_self">المكونات</a>
                                        </li>
                                        <li>
                                            <a href="/contact" target="_self">اتصل بنا</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                            <div className="tp-header__right-two d-flex align-items-center justify-content-end">
                                <a className="tp-btn-blue d-none d-lg-block" href="#"><span>dfvnjdfknverkgnkjdfnva</span></a>
                                <a className="tp-btn-blue d-none d-md-block" href="#"><span>pricing</span></a>
                                <a className="tp-header__bars tp-menu-bar d-lg-none" href="#"><i className="far fa-bars"></i>   </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        </header>
    );
};

export default Header;
