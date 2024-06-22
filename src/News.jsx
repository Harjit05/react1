import {blog1} from './assets/images'
import {blog2} from './assets/images'
import {blog3} from './assets/images'

function News() {
  return (
    <>
    <div className="news__wrapper">
        <div className="news__article">
            <div className="news__header">
                <h2>news and articles</h2>
                <p>Always upto date with our latest News and Articles </p>

            </div>
            <div className="news__blog">
                <div className="news-blog-description">
                    <div className="blog__image">
                        <img src={blog1} alt=""/>
                    </div>

                    <div className="news-blog-content">
                        <h2>How to find your Desired Place more quickly</h2>
                        <span>Posted</span>
                        <span>By</span>
                        <span>ADMIN | </span>
                        <span>March 2018</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore
                            incididunt ut labore et dolore magna.
                        </p>
                    </div>
                </div>
                <div className="news-blog-description">
                    <div className="blog__image">
                        <img src={blog2} alt="" />
                    </div>

                    <div className="news-blog-content">
                        <h2>How to find your Desired Place more quickly</h2>
                        <span>Posted</span>
                        <span>By</span>
                        <span>ADMIN | </span>
                        <span>March 2018</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore
                            incididunt ut labore et dolore magna.
                        </p>
                    </div>
                </div>

                <div className="news-blog-description">
                    <div className="blog__image">
                        <img src={blog3} alt=""/>
                    </div>

                    <div className="news-blog-content">
                        <h2>How to find your Desired Place more quickly</h2>
                        <span>Posted</span>
                        <span>By</span>
                        <span>ADMIN | </span>
                        <span>March 2018</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore
                            incididunt ut labore et dolore magna.
                        </p>
                    </div>
                </div>


            </div>
        </div>
    </div>
    </>
  )
}

export default News