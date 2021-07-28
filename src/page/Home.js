import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <div className="main-wrapper">
                <section className="cta-section theme-bg-light py-5">
                    <div className="container text-center">
                        <h2 className="heading">DevBlog - A Blog Template Made For Developers</h2>
                        <div className="intro">Welcome to my blog. Subscribe and get my latest blog post in your inbox.</div>
                        <form className="signup-form form-inline justify-content-center pt-3">
                            <div className="form-group">
                                <label className="sr-only" for="semail">Your email</label>
                                <input type="email" id="semail" name="semail1" className="form-control mr-md-1 semail" placeholder="Enter email"></input>
                            </div>
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                    </div>
                </section>
                <section className="blog-list px-3 py-5 p-md-5">
                    <div className="container">
                        <div className="item mb-5">
                            <div className="media">
                                <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="assets/images/blog/blog-post-thumb-1.jpg" alt="image"></img>
                                <div className="media-body">
                                    <h3 className="title mb-1"><Link to='/BlogPost'>Why Every Developer Should Have A Blog</Link></h3>
                                    <div className="meta mb-1"><span className="date">Published 2 days ago</span><span className="time">5 min read</span><span className="comment"><a href="#">8 comments</a></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                    <a className="more-link" href="blog-post.html">Read more &rarr;</a>
                                </div>
                            </div>
                        </div>
                        <div className="item mb-5">
                            <div className="media">
                                <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="assets/images/blog/blog-post-thumb-2.jpg" alt="image"></img>
                                <div className="media-body">
                                    <h3 className="title mb-1"><Link to='/BlogPost'>A Guide to Becoming a Full-Stack Developer</Link></h3>
                                    <div className="meta mb-1"><span className="date">Published 3 months ago</span><span className="time">3 min read</span><span className="comment"><a href="#">26 comments</a></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                    <a className="more-link" href="blog-post.html">Read more &rarr;</a>
                                </div>

                            </div>
                        </div>
                        <div className="item mb-5">
                            <div className="media">
                                <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="assets/images/blog/blog-post-thumb-3.jpg" alt="image"></img>
                                <div className="media-body">
                                    <h3 className="title mb-1"><Link to='/BlogPost'>High Performance JavaScript</Link></h3>
                                    <div className="meta mb-1"><span className="date">Published 1 month ago</span><span className="time">8 min read</span><span className="comment"><a href="#">12 comments</a></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                    <a className="more-link" href="blog-post.html">Read more &rarr;</a>
                                </div>
                            </div>
                        </div>
                        <div className="item mb-5">
                            <div className="media">
                                <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="assets/images/blog/blog-post-thumb-4.jpg" alt="image"></img>
                                <div className="media-body">
                                    <h3 className="title mb-1"><Link to='/BlogPost'>Top 5 JavaScript Frameworks</Link></h3>
                                    <div className="meta mb-1"><span className="date">Published 2 months ago</span><span className="time">15 min read</span><span className="comment"><a href="#">3 comments</a></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                    <a className="more-link" href="blog-post.html">Read more &rarr;</a>
                                </div>
                            </div>
                        </div>

                        <div className="item mb-5">
                            <div className="media">
                                <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="assets/images/blog/blog-post-thumb-5.jpg" alt="image"></img>
                                <div className="media-body">
                                    <h3 className="title mb-1"><Link to='/BlogPost'>Learn React in 24 Hours</Link></h3>
                                    <div className="meta mb-1"><span className="date">Published 2 months ago</span><span className="time">10 min read</span><span className="comment"><a href="#">23 comments</a></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                    <a className="more-link" href="blog-post.html">Read more &rarr;</a>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="media">
                                <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="assets/images/blog/blog-post-thumb-6.jpg" alt="image"></img>
                                <div className="media-body">
                                    <h3 className="title mb-1"><Link to='/BlogPost'>About Remote Working</Link></h3>
                                    <div className="meta mb-1"><span className="date">Published 3 months ago</span><span className="time">2 min read</span><span className="comment"><a href="#">1 comment</a></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                    <a className="more-link" href="blog-post.html">Read more &rarr;</a>
                                </div>
                            </div>
                        </div>
                        <nav className="blog-nav nav nav-justified my-5">
                            <a className="nav-link-prev nav-item nav-link d-none rounded-left" href="#">Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i></a>
                            <a className="nav-link-next nav-item nav-link rounded" href="blog-list.html">Next<i className="arrow-next fas fa-long-arrow-alt-right"></i></a>
                        </nav>
                    </div>
                </section>
                <footer className="footer text-center py-2 theme-bg-dark">
                    <small className="copyright">Designed with <i className="fas fa-heart" style={{ color: '#fb866a' }}></i> by <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
                </footer>
            </div>
            <div id="config-panel" className="config-panel d-none d-lg-block">
                <div className="panel-inner">
                    <Link id="config-trigger" className="config-trigger config-panel-hide text-center" to="#"><i className="fas fa-cog fa-spin mx-auto" data-fa-transform="down-6" ></i></Link>
                    <h5 className="panel-title">Choose Colour</h5>
                    <ul id="color-options" className="list-inline mb-0">
                        <li className="theme-1 active list-inline-item"><Link data-style="/assets/css/theme-1.css" to="#"></Link></li>
                        <li className="theme-2  list-inline-item"><Link data-style="/assets/css/theme-2.css" to="#"></Link></li>
                        <li className="theme-3  list-inline-item"><Link data-style="/assets/css/theme-3.css" to="#"></Link></li>
                        <li className="theme-4  list-inline-item"><Link data-style="/assets/css/theme-4.css" to="#"></Link></li>
                        <li className="theme-5  list-inline-item"><Link data-style="/assets/css/theme-5.css" to="#"></Link></li>
                        <li className="theme-6  list-inline-item"><Link data-style="/assets/css/theme-6.css" to="#"></Link></li>
                        <li className="theme-7  list-inline-item"><Link data-style="/assets/css/theme-7.css" to="#"></Link></li>
                        <li className="theme-8  list-inline-item"><Link data-style="/assets/css/theme-8.css" to="#"></Link></li>
                        
                    </ul>
                    <a id="config-close" className="close" href="#"><i className="fa fa-times-circle"></i></a>
                </div>
            </div>
            <script src="assets/plugins/jquery-3.3.1.min.js"></script>
            <script src="assets/plugins/popper.min.js"></script>
            <script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>

            <script src="assets/js/demo/style-switcher.js"></script>
        </div >
    )
}
