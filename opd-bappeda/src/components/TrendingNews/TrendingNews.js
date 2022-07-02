function TrendingNews() {
    return (
    <div className="trending-bar-dark hidden-xs">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h3 className="trending-bar-title">Trending News</h3>
                    <div className="trending-news-slider">
                        <div className="item">
                            <div className="post-content">
                            <h2 className="post-title title-sm">
                                <a href="single-post.html">Ex-Googler warns coding bootcamps are lacking</a>
                            </h2>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <div className="col-md-12 col-sm-12 col-xs-12 top-nav-social-lists text-lg-right col-lg-4 ml-lg-auto">
                    <ul className="list-unstyled mt-4 mt-lg-0">
                        <li>
                            <a href="#">
                                <span className="social-icon">
                                <i className="fa fa-facebook-f" />
                                </span>
                            </a>
                            <a href="#">
                                <span className="social-icon">
                                <i className="fa fa-twitter" />
                                </span>
                            </a>
                            <a href="#">
                                <span className="social-icon">
                                <i className="fa fa-google-plus" />
                                </span>
                            </a>
                            <a href="#">
                                <span className="social-icon">
                                <i className="fa fa-youtube" />
                                </span>
                            </a>
                            <a href="#">
                                <span className="social-icon">
                                <i className="fa fa-linkedin" />
                                </span>
                            </a>
                            <a href="#">
                                <span className="social-icon">
                                <i className="fa fa-pinterest-p" />
                                </span>
                            </a>
                            <a href="#">
                                <span className="social-icon">
                                <i className="fa fa-rss" />
                                </span>
                            </a>
                            <a href="#">
                                <span className="social-icon">
                                <i className="fa fa-github" />
                                </span>
                            </a>
                            <a href="#">
                                <span className="social-icon">
                                <i className="fa fa-reddit-alien" />
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
    );
}

export default TrendingNews;