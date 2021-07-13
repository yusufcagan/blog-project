import React from 'react'
import Header from '../components/Header'

export default function BlogList() {
    return (
        <div>
            <Header />
            <div className="main-wrapper">
                <section className="blog-list px-3 py-5 p-md-5">
                    <div className="container">
                        <div className="item mb-5">
                            <div className="media">
                                <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="assets/images/blog/blog-post-thumb-7.jpg" alt="image"></img>
                                <div className="media-body">
                                    <h3 className="title mb-1"><a href="blog-post.html">Heading Lorem Ipsum Dolor Sit Amet</a></h3>
                                    <div className="meta mb-1"><span className="date">Published 3 months ago</span><span className="time">5 min read</span><span className="comment"><a href="#">4 comments</a></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                    <a className="more-link" href="blog-post.html">Read more &rarr;</a>
                                </div>
                            </div>
                        </div>
                        <div className="item mb-5">
                            <div className="media">
                                <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="assets/images/blog/blog-post-thumb-8.jpg" alt="image"></img>
                                <div className="media-body">
                                    <h3 className="title mb-1"><a href="blog-post.html">Heading Lorem Ipsum Dolor Sit Amet</a></h3>
                                    <div className="meta mb-1"><span className="date">Published 4 months ago</span><span className="time">3 min read</span><span className="comment"><a href="#">2 comments</a></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                    <a className="more-link" href="blog-post.html">Read more &rarr;</a>
                                </div>
                            </div>
                        </div>

                        <div className="item mb-5">
                            <div className="media">
                                <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="assets/images/blog/blog-post-thumb-9.jpg" alt="image"></img>
                                <div className="media-body">
                                    <h3 className="title mb-1"><a href="blog-post.html">Heading Nemo Enim Ipsam Voluptatem </a></h3>
                                    <div className="meta mb-1"><span className="date">Published 4 months ago</span><span className="time">8 min read</span><span className="comment"><a href="#">7 comments</a></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                    <a className="more-link" href="blog-post.html">Read more &rarr;</a>
                                </div>
                            </div>
                        </div>
                        <div className="item mb-5">
                            <div className="media">
                                <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="assets/images/blog/blog-post-thumb-10.jpg" alt="image"></img>
                                <div className="media-body">
                                    <h3 className="title mb-1"><a href="blog-post.html">Heading Perspiciatis Unde Omnis </a></h3>
                                    <div className="meta mb-1"><span className="date">Published 5 months ago</span><span className="time">15 min read</span><span className="comment"><a href="#">3 comments</a></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                    <a className="more-link" href="blog-post.html">Read more &rarr;</a>
                                </div>
                            </div>
                        </div>

                        <div className="item mb-5">
                            <div className="media">
                                <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="assets/images/blog/blog-post-thumb-11.jpg" alt="image"></img>
                                <div className="media-body">
                                    <h3 className="title mb-1"><a href="blog-post.html">Heading Duis Arcu Tortor</a></h3>
                                    <div className="meta mb-1"><span className="date">Published 5 months ago</span><span className="time">10 min read</span><span className="comment"><a href="#">0 comment</a></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                    <a className="more-link" href="blog-post.html">Read more &rarr;</a>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="media">
                                <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="assets/images/blog/blog-post-thumb-12.jpg" alt="image"></img>
                                <div className="media-body">
                                    <h3 className="title mb-1"><a href="blog-post.html">Heading Vestibulum Ante Ipsum Primis</a></h3>
                                    <div className="meta mb-1"><span className="date">Published 6 months ago</span><span className="time">2 min read</span><span className="comment"><a href="#">8 comments</a></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                    <a className="more-link" href="blog-post.html">Read more &rarr;</a>
                                </div>
                            </div>
                        </div>

                        <nav className="blog-nav nav nav-justified my-5">
                            <a className="nav-link-prev nav-item nav-link rounded-left" href="index.html">Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i></a>
                            <a className="nav-link-next nav-item nav-link rounded-right" href="blog-list.html">Next<i className="arrow-next fas fa-long-arrow-alt-right"></i></a>
                        </nav>

                    </div>
                </section>
                <footer className="footer text-center py-2 theme-bg-dark">


                    <small className="copyright">Designed with <i className="fas fa-heart" style="color: #fb866a;"></i> by <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>

                </footer>
            </div>
            <div id="config-panel" className="config-panel d-none d-lg-block">
                <div className="panel-inner">
                    <a id="config-trigger" className="config-trigger config-panel-hide text-center" href="#"><i className="fas fa-cog fa-spin mx-auto" data-fa-transform="down-6" ></i></a>
                    <h5 className="panel-title">Choose Colour</h5>
                    <ul id="color-options" className="list-inline mb-0">
                        <li className="theme-1 active list-inline-item"><a data-style="assets/css/theme-1.css" href="#"></a></li>
                        <li className="theme-2  list-inline-item"><a data-style="assets/css/theme-2.css" href="#"></a></li>
                        <li className="theme-3  list-inline-item"><a data-style="assets/css/theme-3.css" href="#"></a></li>
                        <li className="theme-4  list-inline-item"><a data-style="assets/css/theme-4.css" href="#"></a></li>
                        <li className="theme-5  list-inline-item"><a data-style="assets/css/theme-5.css" href="#"></a></li>
                        <li className="theme-6  list-inline-item"><a data-style="assets/css/theme-6.css" href="#"></a></li>
                        <li className="theme-7  list-inline-item"><a data-style="assets/css/theme-7.css" href="#"></a></li>
                        <li className="theme-8  list-inline-item"><a data-style="assets/css/theme-8.css" href="#"></a></li>
                    </ul>
                    <a id="config-close" className="close" href="#"><i className="fa fa-times-circle"></i></a>
                </div>
            </div>

            <script src="assets/plugins/jquery-3.3.1.min.js"></script>
            <script src="assets/plugins/popper.min.js"></script>
            <script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>

            <script src="assets/js/demo/style-switcher.js"></script>
        </div>
    )
}
