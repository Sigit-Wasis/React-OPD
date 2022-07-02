function Header() {
    return (
        <header className="header-navigation d-none d-lg-block">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xs-12 col-sm-3 col-md-3">
                        {/* Logo */}
                        <div className="logo">
                            <a href="index.html">
                                <img src="images/logos/lamtimlog.png" alt="Logo" /> {/* Replace Logo Here */}
                            </a>
                        </div>
                        {/* End Logo */}
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-9">
                        <div className="top-ad-banner float-right">
                            <a href="/">
                                <img src="images/news/ad-pors.png" className="img-fluid" width={450} alt="banner-ads" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;