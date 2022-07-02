export default function Navbar() {
    return (
        <div className="main-navbar clearfix bg-dark ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg site-main-nav navigation">
                            <a className="navbar-brand d-lg-none" href="index.html">
                                <img src="images/logos/footer-logo.png" alt="" /> 
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="fa fa-bars" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Home
                                        </a>
                                        <div className="dropdown-menu">
                                        <a className="dropdown-item" href="index.html">Home 1</a>
                                        <a className="dropdown-item" href="index-2.html">Home 2</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Post
                                        </a>
                                        <div className="dropdown-menu">
                                        <a className="dropdown-item" href="post-left-sidebar.html">Post Left Sidebar</a>
                                        <a className="dropdown-item" href="post-full-width.html">Post Full Width</a>
                                        <a className="dropdown-item" href="single-post.html">Single Post</a>
                                        <a className="dropdown-item" href="post-category-1.html">Category 1</a>
                                        <a className="dropdown-item" href="post-category-2.html">Category 2</a>
                                        <a className="dropdown-item" href="author.html">Author</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        About
                                        </a>
                                        <div className="dropdown-menu">
                                        <a className="dropdown-item" href="about.html">About</a>
                                        <a className="dropdown-item" href="terms.html">Terms</a>
                                        <a className="dropdown-item" href="privacy.html">Privacy Policy</a>
                                        <a className="dropdown-item" href="job.html">Career</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Pages
                                        </a>
                                        <div className="dropdown-menu">
                                        <a className="dropdown-item" href="404.html">404 Page</a>
                                        <a className="dropdown-item" href="search.html">Search Page</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}