import React from 'react'
import Header from '../components/Header'

function BlogPost() {
    return (
        <div>
            <Header />
            <div className="main-wrapper">

                <article className="blog-post px-3 py-5 p-md-5">
                    <div className="container">
                        <header className="blog-post-header">
                            <h2 className="title mb-2">Why Every Developer Should Have A Blog</h2>
                            <div className="meta mb-3"><span className="date">Published 3 months ago</span><span className="time">5 min read</span><span className="comment"><a href="#">4 comments</a></span></div>
                        </header>

                        <div className="blog-post-body">
                            <figure className="blog-banner">
                                <a href="https://made4dev.com"><img className="img-fluid" src="assets/images/blog/blog-post-banner.jpg" alt="image"></img></a>
                                <figcaption className="mt-2 text-center image-caption">Image Credit: <a href="https://made4dev.com?ref=devblog" target="_blank">made4dev.com (Premium Programming T-shirts)</a></figcaption>
                            </figure>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. </p>

                            <h3 className="mt-5 mb-3">Code Block Example</h3>
                            <p>You can get more info at <a href="https://highlightjs.org/" target="_blank">https://highlightjs.org/</a>. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. </p>
                            <pre>

                            </pre>
                            <h3 className="mt-5 mb-3">Typography</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            <h5 className="my-3">Bullet Points:</h5>
                            <ul className="mb-5">
                                <li className="mb-2">Lorem ipsum dolor sit amet consectetuer.</li>
                                <li className="mb-2">Aenean commodo ligula eget dolor.</li>
                                <li className="mb-2">Aenean massa cum sociis natoque penatibus.</li>
                            </ul>
                            <ol className="mb-5">
                                <li className="mb-2">Lorem ipsum dolor sit amet consectetuer.</li>
                                <li className="mb-2">Aenean commodo ligula eget dolor.</li>
                                <li className="mb-2">Aenean massa cum sociis natoque penatibus.</li>
                            </ol>
                            <h5 className="my-3">Quote Example:</h5>
                            <blockquote className="blockquote m-lg-5 py-3 pl-4 px-lg-5">
                                <p className="mb-2">You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity.</p>
                                <footer className="blockquote-footer">John Romero</footer>
                            </blockquote>

                            <h5 className="my-3">Table Example:</h5>
                            <table className="table table-striped my-5">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5 className="mb-3">Embed A Tweet:</h5>

                            <blockquote className="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">1969:<br />-what&#39;re you doing with that 2KB of RAM?<br />-sending people to the moon<br /><br />2017:<br />-what are you doing with that 1.5GB of RAM?<br />-running Slack</p>&mdash; I Am Devloper (@iamdevloper) <a href="https://twitter.com/iamdevloper/status/926458505355235328?ref_src=twsrc%5Etfw">November 3, 2017</a></blockquote>
                            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>



                            <h3 className="mt-5 mb-3">Video Example</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>

                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/hnCmSXCZEpU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>

                        </div>

                        <nav className="blog-nav nav nav-justified my-5">
                            <a className="nav-link-prev nav-item nav-link rounded-left" href="index.html">Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i></a>
                            <a className="nav-link-next nav-item nav-link rounded-right" href="blog-list.html">Next<i className="arrow-next fas fa-long-arrow-alt-right"></i></a>
                        </nav>

                        <div className="blog-comments-section">
                            <div id="disqus_thread"></div>

                            <noscript>
                                Please enable JavaScript to view the
                                <a href="https://disqus.com/?ref_noscript" rel="nofollow">
                                    comments powered by Disqus.
                                </a>
                            </noscript>
                        </div>

                    </div>
                </article>

                <section className="promo-section theme-bg-light py-5 text-center">
                    <div className="container">
                        <h2 className="title">Promo Section Heading</h2>
                        <p>You can use this section to promote your side projects etc. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
                        <figure className="promo-figure">
                            <a href="https://made4dev.com" target="_blank"><img className="img-fluid" src="assets/images/promo-banner.jpg" alt="image"></img></a>
                        </figure>
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

            <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/highlight.min.js"></script>

            <script src="assets/js/blog.js"></script>

            <script src="assets/js/demo/style-switcher.js"></script>
        </div >
    )
}

export default BlogPost;