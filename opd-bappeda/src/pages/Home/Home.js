import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { domainAPI, instansiID, formatDate } from '../../utils/Common';
import Header from "../../components/Header/Header";
import TrendingNews from '../../components/TrendingNews/TrendingNews';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export default function Home() {
    const [news, setNews] = useState([]);
    const [articles, setArticles] = useState([]);

    /**
     * Get Berita sebanyak 2 berita dan artikel untuk halaman Home dengan urutan DESC
     * https://dmitripavlutin.com/javascript-fetch-async-await/
     */
     useEffect(() => {
        const fetchData = async () => {
            const resultNews = await axios(`${domainAPI}/news?instansi_id=${instansiID}&per_page=2&sort_type=desc`)
            setNews(resultNews.data.data.data);

            const resultArticles = await axios(`${domainAPI}/article?instansi_id=${instansiID}&per_page=2&sort_type=desc`)
            setArticles(resultArticles.data.data.data);
        };
       fetchData();
    }, []);

    return (
        <React.Fragment>
            <TrendingNews />
            <Header />
            <Navbar />

            <div className="py-30" />

            <section className="featured-posts">
                <div className="container">
                    <div className="row no-gutters">

                    {/* Display News in Home */}
                    {news && news.map((item, i) =>
                        <div key={i} className="col-md-6 col-xs-12 col-lg-4">
                            <div className="featured-slider mr-md-3 mr-lg-3">
                                <div className="item" style={{ backgroundImage: `url(${item.image_file_data})` }}>
                                    <div className="post-content">
                                        <a href="/" className="post-cat bg-primary">{item.news_category_id}</a>
                                            <h2 className="slider-post-title">
                                        <a href="/">{item.title.slice(0, 50)}....</a>
                                        </h2>
                                        <div className="post-meta mt-2">
                                            <span className="posted-time">
                                                <i className="fa fa-clock-o mr-2 text-danger" />{formatDate(item.created_at)}
                                            </span>
                                            <span className="post-author">
                                                by <a href="/">{item.created_by}</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* End Display News in Home */}
                    
                    {/* Display Article in Home */}
                    <div className="col-md-12 col-xs-12 col-sm-12 col-lg-4">
                        <div className="row mt-3 mt-lg-0">
                        {articles && articles.map((item, i) =>
                            <div key={i} className="col-lg-12 col-xs-12 col-sm-6 col-md-6">
                                <div className="post-featured-style" style={{backgroundImage: `url(${item.image_file_data})` }}>
                                    <div className="post-content">
                                        <a href="/" className="post-cat bg-success">{item.news_category_id}</a>
                                        <h2 className="post-title">
                                            <a href="single-post.html">{item.title.slice(0, 40)}....</a>
                                        </h2>
                                        <div className="post-meta mt-2">
                                            <span className="posted-time"><i className="fa fa-clock-o mr-2 text-danger" />{formatDate(item.created_at)}</span>
                                            <span className="post-author">
                                            <span> by </span>
                                                <a href="author.html">{item.created_by}</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        </div>
                    </div>
                    {/* End Display Article in Home */}

                    </div>
                </div>
            </section>

            <section className="news-style-four bg-light section-padding">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="block">
                        <h3 className="news-title">
                            <span>Galeri Gambar</span>
                        </h3>
                        <div className="post-overlay-wrapper clearfix">
                            <div className="post-thumbnail">
                            <img className="img-fluid" src="images/news/news-13.jpg" alt="post-thumbnail" />
                            </div>
                            <div className="post-content">
                            <h2 className="post-title ">
                                <a href="single-post.html">An Asteroid Is Passing Earth Today: Here's How to</a>
                            </h2>
                            <div className="post-meta white">
                                <span className="posted-time">2 hours ago</span>
                                <span className="post-author">by
                                <a href="author.html">Rock Madveen</a>
                                </span>
                                <span className="pull-right">
                                <i className="fa fa-comments" />
                                <a href="single-post.html#comments">05</a>
                                </span>
                            </div>
                            </div>
                        </div>
                        <div className="post-list-block">
                            <div className="post-block-wrapper post-float clearfix">
                            <div className="post-thumbnail">
                                <img className="img-fluid" src="images/news/news-11.jpg" alt="post-thumbnail" />
                            </div>
                            <div className="post-content">
                                <h2 className="post-title title-sm">
                                <a href="single-post.html">Snow and Freezing Rain in Paris Forces the</a>
                                </h2>
                                <div className="post-meta">
                                <span className="posted-time">3 hours ago</span>
                                </div>
                            </div>
                            </div>
                            <div className="post-block-wrapper post-float clearfix">
                            <div className="post-thumbnail">
                                <img className="img-fluid" src="images/news/news-04.jpg" alt="post-thumbnail" />
                            </div>
                            <div className="post-content">
                                <h2 className="post-title title-sm">
                                <a href="single-post.html">Your social media apps want to help.</a>
                                </h2>
                                <div className="post-meta">
                                <span className="posted-time">8 hours ago</span>
                                </div>
                            </div>
                            </div>
                            <div className="post-block-wrapper post-float clearfix">
                            <div className="post-thumbnail">
                                <img className="img-fluid" src="images/news/news-12.jpg" alt="post-thumbnail" />
                            </div>
                            <div className="post-content">
                                <h2 className="post-title title-sm">
                                <a href="single-post.html">Today Is the Day Most People Quit Their New Year's</a>
                                </h2>
                                <div className="post-meta">
                                <span className="posted-time">9 hours ago</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="block">
                        <h3 className="news-title">
                            <span>Galeri Video</span>
                        </h3>
                        <div className="post-overlay-wrapper clearfix">
                            <div className="post-thumbnail">
                            <img className="img-fluid" src="images/news/news-08.jpg" alt="post-thumbnail" />
                            </div>
                            <div className="post-content">
                            <h2 className="post-title">
                                <a href="single-post.html">Call Of Duty: Black Ops 4 Releasing</a>
                            </h2>
                            <div className="post-meta white">
                                <span className="posted-time">3 hours ago</span>
                                <span className="post-author">by
                                <a href="author.html">Arya Stark</a>
                                </span>
                                <span className="pull-right">
                                <i className="fa fa-comments" />
                                <a href="single-post.html#comments">10</a>
                                </span>
                            </div>
                            </div>
                        </div>
                        <div className="post-list-block">
                            <div className="post-block-wrapper post-float clearfix">
                            <div className="post-thumbnail">
                                <img className="img-fluid" src="images/news/news-03.jpg" alt="post-thumbnail" />
                            </div>
                            <div className="post-content">
                                <h2 className="post-title title-sm">
                                <a href="single-post.html">Apple HomePod review: locked in</a>
                                </h2>
                                <div className="post-meta">
                                <span className="posted-time">4 hours ago</span>
                                </div>
                            </div>
                            </div>
                            <div className="post-block-wrapper post-float clearfix">
                            <div className="post-thumbnail">
                                <img className="img-fluid" src="images/news/news-01.jpg" alt="post-thumbnail" />
                            </div>
                            <div className="post-content">
                                <h2 className="post-title title-sm">
                                <a href="single-post.html">Ex-Googler warns coding bootcamps are lacking</a>
                                </h2>
                                <div className="post-meta">
                                <span className="posted-time">5 hours ago</span>
                                </div>
                            </div>
                            </div>
                            <div className="post-block-wrapper post-float clearfix">
                            <div className="post-thumbnail">
                                <img className="img-fluid" src="images/news/news-06.jpg" alt="post-thumbnail" />
                            </div>
                            <div className="post-content">
                                <h2 className="post-title title-sm">
                                <a href="single-post.html">PS4 Games Sale: All The PSN Deals</a>
                                </h2>
                                <div className="post-meta">
                                <span className="posted-time">12 hours ago</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="block">
                        <h3 className="news-title">
                            <span>Instansi Terkait</span>
                        </h3>
                        <div className="post-overlay-wrapper clearfix">
                            <div className="post-thumbnail">
                            <img className="img-fluid" src="images/news/news-05.jpg" alt="post-thumbnail" />
                            </div>
                            <div className="post-content">
                            <h2 className="post-title">
                                <a href="single-post.html">Here's How To Get Free Pizza On</a>
                            </h2>
                            <div className="post-meta white">
                                <span className="posted-time">an hour ago</span>
                                <span className="post-author">by
                                <a href="author.html">Mad King</a>
                                </span>
                                <span className="pull-right">
                                <i className="fa fa-comments" />
                                <a href="single-post.html#comments">30</a>
                                </span>
                            </div>
                            </div>
                        </div>
                        <div className="post-list-block">
                            <div className="post-block-wrapper post-float clearfix">
                            <div className="post-thumbnail">
                                <img className="img-fluid" src="images/news/news-10.jpg" alt="post-thumbnail" />
                            </div>
                            <div className="post-content">
                                <h2 className="post-title title-sm">
                                <a href="single-post.html">Free Two-Hour Delivery From Whole Foods</a>
                                </h2>
                                <div className="post-meta">
                                <span className="posted-time">2 hours ago</span>
                                </div>
                            </div>
                            </div>
                            <div className="post-block-wrapper post-float clearfix">
                            <div className="post-thumbnail">
                                <img className="img-fluid" src="images/news/news-07.jpg" alt="post-thumbnail" />
                            </div>
                            <div className="post-content">
                                <h2 className="post-title title-sm">
                                <a href="single-post.html">Your social media apps want to help</a>
                                </h2>
                                <div className="post-meta">
                                <span className="posted-time">4 hours ago</span>
                                </div>
                            </div>
                            </div>
                            <div className="post-block-wrapper post-float clearfix">
                            <div className="post-thumbnail">
                                <img className="img-fluid" src="images/news/news-14.jpg" alt="post-thumbnail" />
                            </div>
                            <div className="post-content">
                                <h2 className="post-title title-sm">
                                <a href="single-post.html">Snow and Freezing Rain in Paris Forces the</a>
                                </h2>
                                <div className="post-meta">
                                <span className="posted-time">9 hours ago</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>


            <Footer />
        </React.Fragment>
    );
}