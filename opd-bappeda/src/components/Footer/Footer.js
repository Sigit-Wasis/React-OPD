export default function Footer() {
    return (
        <div>
            <div className="py-40" />
            <footer className="footer footer-main ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-sm-12 col-lg-6 text-center">
                            <a href="index.html"><img src="images/logos/lamtimlog.png" alt="Logo" style={{ borderRadius: 10 }} className="img-fluid" /></a>
                            <ul className="list-inline footer-social">
                                <li className="li list-inline-item"><a href="/"><i className="fa fa-facebook" /></a></li>
                                <li className="li list-inline-item"><a href="/"><i className="fa fa-twitter" /></a></li>
                                <li className="li list-inline-item"><a href="/"><i className="fa fa-linkedin" /></a></li>
                                <li className="li list-inline-item"><a href="/"><i className="fa fa-pinterest" /></a></li>
                                <li className="li list-inline-item"><a href="/"><i className="fa fa-rss" /></a></li>
                                <li className="li list-inline-item"><a href="/"><i className="fa fa-youtube" /></a></li>
                            </ul>
                            <div className="copyright-text text-center">
                                <p className="mb-0">© All Copyright Reserved</p>
                            </div>
                        </div>
                        <div className="scroll-to-top">
                            <button className="btn btn-primary" title="Back to Top">
                                <i className="fa fa-angle-up" />
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}