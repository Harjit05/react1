import {tommy} from './assets/images'
import {smallperson} from './assets/images'
import {resort} from './assets/images'
import {europe} from './assets/images'
import {banglow} from './assets/images'
import {vintage} from './assets/images'
import {thailand} from './assets/images'

function Container() {
    return (
        <>
            <div className="container_wrapper">
                    <div className="welcome-hero">
                        <div className="welcome-hero-text">
                            <h2 className="heading">BEST PLACE TO FIND AND EXPLORE
                            </h2>
                            <h2 className="heading">
                                THAT ALL YOU NEED</h2>
                            <p className="p1">Find Best Place, Restaurant, Hotel, Real State and many more think in just One click
                            </p>
                        </div>

                        <div className="welcome-hero-searchbox">

                            <div className="what">What?</div>
                            <div className="placeholder">
                                <form action="">
                                    <input type="text" className="what__input" placeholder="Ex: Palce, Resturent, Food, Automobile" />
                                    <i className="fa-solid fa-list-ul"></i>
                                    <span className="location">Location</span>
                                    <input type="text" className="what__input" placeholder=" Ex: London, Newyork, Rome"/>
                                        <button className="search__button">
                                            Search
                                        </button>

                                
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="divmovement">
                <div className="divmovement__container">


                    <div className="resturent">
                        <i className="fa fa-house"></i>
                        <h3><a href="">Resturent</a></h3>
                        <p><a href="">150 Listings</a></p>
                    </div>
                    <div className="resturent">
                    <i className="fa fa-location-dot"></i>
                        <h3><a href="">Destination</a></h3>
                        <p><a href="">214 Listings</a></p>
                    </div>
                    <div className="resturent">
                        <i className="fa fa-hotel"></i>
                        <h3><a href="">Hotels</a></h3>
                        <p><a href="">185 Listings</a></p>
                    </div>
                    <div className="resturent">
                        <i className="fa fa-hospital-user"></i>
                        <h3><a href="">Healthcaree</a></h3>
                        <p><a href="">200 Listings</a></p>
                    </div>
                    <div className="resturent">
                        <i className="fa fa-car"></i>
                        <h3><a href="">Automotion</a></h3>
                        <p><a href="">120 Listings</a></p>
                    </div>
                </div>
            </div>
            <div className="how-it-works__main">
                <div className="works__heading">
                    <div className="main__heading">
                        <h4>HOW IT WORKS</h4>
                        <p> Learn More about how our website works</p>
                    </div>
                </div>

                <div className="works__content">
                    <div className="works_content_section">

                        <div className="what-to-do">
                            <div className="bulb"> <i className="fa-regular fa-lightbulb"></i></div>
                            <div className="single-how-works">

                                <h2>Choose what to Do</h2>
                                <p>Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt
                                    ut laboremagna aliqua.</p>
                            </div>
                            <button className="welcome-hero-button">Read More</button>


                        </div>
                        <div className="what-to-do">
                            <div className="bulb"> <i className="fa-solid fa-car"></i></div>
                            <div className="single-how-works">

                                <h2>Find what you want</h2>
                                <p>Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt
                                    ut laboremagna aliqua.</p>
                            </div>
                            <button className="welcome-hero-button">Read More</button>


                        </div>
                        <div className="what-to-do">
                            <div className="bulb"> <i className="fa fa-staff-snake"></i></div>
                            <div className="single-how-works">

                                <h2>Explore amazing Place</h2>
                                <p>Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt
                                    ut laboremagna aliqua.</p>
                            </div>
                            <button className="welcome-hero-button">Read More</button>


                        </div>
                    </div>
                </div>

            </div>

            <div className="explore">
                <div className="explore__container">
                    <div className="section__header">
                        <h2>EXPLORE</h2>
                        <p>Explore New place, food, culture around the world and many more</p>
                    </div>

                    <div className="explore__content">
                        <div className="explore_content_inner">
                            <div className="single-explore-item">
                                <div className="single-explore-img">
                                    <img src={tommy} alt="" />
                                </div>
                                <div className="single-explore-txt">
                                    <h4>Tommy Helfinger Bar</h4>
                                    <p className="explore-rating-price">
                                        <button >5.0</button>

                                        <span> 10 ratings | </span>
                                        Form <span className="explore-price">5$-300$ | </span>
                                        <span>Resturent | </span>
                                    </p>
                                    <div className="explore-person">
                                        <div className="explore-person-img">
                                            <img src={smallperson} alt="" />
                                        </div>
                                        <div className="explore-person-content">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor
                                                incid ut labore et dolore magna aliqua....
                                            </p>
                                        </div>
                                        <div className="line"></div>
                                        <div className="explore__endpart">
                                            <div className="explore__closepart">
                                                <button className="close-btn">Close Now</button>
                                            </div>
                                            <div className="explore__icon">
                                                <i className="fa-solid fa-location-dot"></i>
                                                <i className="fa-solid fa-upload"></i>
                                                <i className="fa-solid fa-heart"></i>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className="single-explore-item">
                                <div className="single-explore-img">
                                    <img src={resort} alt="" />
                                </div>
                                <div className="single-explore-txt">
                                    <h4>Swim And Dine Resort</h4>
                                    <p className="explore-rating-price">
                                        <button >5.0</button>
                                        <span> 10 ratings | </span>
                                        Form <span className="explore-price">5$-300$ | </span>
                                        <span>Hotel | </span>
                                    </p>
                                    <div className="explore-person">
                                        <div className="explore-person-img">
                                            <img src={smallperson} alt="" />
                                        </div>
                                        <div className="explore-person-content">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor
                                                incid ut labore et dolore magna aliqua....
                                            </p>
                                        </div>
                                        <div className="line"></div>
                                        <div className="explore__endpart">
                                            <div className="explore__closepart">
                                                <button className="close-btn">Open Now</button>
                                            </div>
                                            <div className="explore__icon">
                                                <i className="fa-solid fa-location-dot"></i>
                                                <i className="fa-solid fa-upload"></i>
                                                <i className="fa-solid fa-heart"></i>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="single-explore-item">
                                <div className="single-explore-img">
                                    <img src={europe} alt="" />
                                </div>
                                <div className="single-explore-txt">
                                    <h4>Europe Tour</h4>
                                    <p className="explore-rating-price">
                                        <button >5.0</button>


                                        <span> 10 ratings | </span>
                                        Form <span className="explore-price">5$-300$ | </span>
                                        <span>Destination | </span>
                                    </p>
                                    <div className="explore-person">
                                        <div className="explore-person-img">
                                            <img src={smallperson} alt="" />
                                        </div>
                                        <div className="explore-person-content">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor
                                                incid ut labore et dolore magna aliqua....
                                            </p>
                                        </div>
                                        <div className="line"></div>
                                        <div className="explore__endpart">
                                            <div className="explore__closepart">
                                                <button className="close-btn">Close Now</button>
                                            </div>
                                            <div className="explore__icon">
                                                <i className="fa-solid fa-location-dot"></i>
                                                <i className="fa-solid fa-upload"></i>
                                                <i className="fa-solid fa-heart"></i>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="single-explore-item">
                                <div className="single-explore-img">
                                    <img src={banglow} alt="" />
                                </div>
                                <div className="single-explore-txt">
                                    <h4>Banglow With Swiming Pool</h4>
                                    <p className="explore-rating-price">
                                        <button >5.0</button>

                                        <span> 10 ratings | </span>
                                        Form <span className="explore-price">5$-300$ | </span>
                                        <span>Real Estate | </span>
                                    </p>
                                    <div className="explore-person">
                                        <div className="explore-person-img">
                                            <img src={smallperson} alt="" />
                                        </div>
                                        <div className="explore-person-content">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor
                                                incid ut labore et dolore magna aliqua....
                                            </p>
                                        </div>
                                        <div className="line"></div>
                                        <div className="explore__endpart">
                                            <div className="explore__closepart">
                                                <button className="close-btn">Close Now</button>
                                            </div>
                                            <div className="explore__icon">
                                                <i className="fa-solid fa-location-dot"></i>
                                                <i className="fa-solid fa-upload"></i>
                                                <i className="fa-solid fa-heart"></i>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="single-explore-item">
                                <div className="single-explore-img">
                                    <img src={vintage} alt="" />
                                </div>
                                <div className="single-explore-txt">
                                    <h4>Vintage Car Expo</h4>
                                    <p className="explore-rating-price">
                                        <button >5.0</button>

                                        <span> 10 ratings | </span>
                                        Form <span className="explore-price">5$-300$ | </span>
                                        <span>Automotion | </span>
                                    </p>
                                    <div className="explore-person">
                                        <div className="explore-person-img">
                                            <img src={smallperson} alt="" />
                                        </div>
                                        <div className="explore-person-content">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor
                                                incid ut labore et dolore magna aliqua....
                                            </p>
                                        </div>
                                        <div className="line"></div>
                                        <div className="explore__endpart">
                                            <div className="explore__closepart">
                                                <button className="close-btn">Open Now</button>
                                            </div>
                                            <div className="explore__icon">
                                                <i className="fa-solid fa-location-dot"></i>
                                                <i className="fa-solid fa-upload"></i>
                                                <i className="fa-solid fa-heart"></i>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className="single-explore-item">
                                <div className="single-explore-img">
                                    <img src={thailand} alt="" />
                                </div>
                                <div className="single-explore-txt">
                                    <h4>Thailand Tour</h4>
                                    <p className="explore-rating-price">
                                        <button >5.0</button>

                                        <span> 10 ratings | </span>
                                        Form <span className="explore-price">5$-300$ | </span>
                                        <span>Destination | </span>
                                    </p>
                                    <div className="explore-person">
                                        <div className="explore-person-img">
                                            <img src={smallperson} alt="" />
                                        </div>
                                        <div className="explore-person-content">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor
                                                incid ut labore et dolore magna aliqua....
                                            </p>
                                        </div>
                                        <div className="line"></div>
                                        <div className="explore__endpart">
                                            <div className="explore__closepart">
                                                <button className="close-btn">Close Now</button>
                                            </div>
                                            <div className="explore__icon">
                                                <i className="fa-solid fa-location-dot"></i>
                                                <i className="fa-solid fa-upload"></i>
                                                <i className="fa-solid fa-heart"></i>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>


        </>
 
    )
}


export default Container