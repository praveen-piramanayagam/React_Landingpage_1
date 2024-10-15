import React from 'react';
import './LandingPage.css';
import './LandingPageresp.css';

const LandingPage = () => {
    return (
        <div>
            <div className="container">
                <div className="white_bg">
                    <div className="white_bg_width">
                        {/* <!-- Navbar --> */}
                        <nav className="navbar">
                            <div>
                                <img src="assets/Header_logo.png" alt="Trabook_logo" />
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Destination</a></li>
                                <li><a href="#">Tour</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                            <div className="auth-buttons">
                                <a href="#" className="login">Login</a>
                                <a href="#" className="signup">Sign up</a>
                            </div>
                        </nav>

                        {/* <!-- Hero Section --> */}
                        <section className="hero">
                            <div className="text-content">
                                <h2>Get started your exciting <span>journey</span> with us.</h2>
                                <p>A team of experienced tourism professionals will provide you with the best advice and tips
                                    for your
                                    desired place.</p>
                                <a href="#" className="discover-button">Discover Now</a>
                            </div>
                            <div className="image-content">
                                <img src="assets/Hero_image.png" alt="Traveler with suitcase" />
                            </div>
                        </section>

                        {/* <!-- Search Bar --> */}
                        <div className="search-bar">
                            <div className="arrow_y_axis">
                                <div className="arrow_flex">
                                    <label for="location">Location</label>
                                    <img src="assets/Down_arrow.png" alt="Down_arrow" width="10" height="5.5" className="arrow_img" />
                                </div>
                                <p className="Hero_search">Where are you going</p>
                            </div>
                            <div className="arrow_y_axis">
                                <div className="arrow_flex">
                                    <label for="date">Date</label>
                                    <img src="assets/Down_arrow.png" alt="Down_arrow" width="10" height="5.5" className="arrow_img" />
                                </div>
                                <div>
                                    <p className="Hero_search">When you will go</p>
                                </div>
                            </div>
                            <div className="arrow_y_axis">
                                <div className="arrow_flex">
                                    <label for="guests">Guest</label>
                                    <img src="assets/Down_arrow.png" alt="Down_arrow" width="10" height="5.5" className="arrow_img" />
                                </div>
                                <div>
                                    <p className="Hero_search">Number of guest</p>
                                </div>
                            </div>
                            <div className="explore_btn">
                                <a href="#">Explore Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Things you need to do part --> */}
                <div className="ash_bg">
                    <div className="things_div">
                        <div className="things_text">
                            <p className="things_1">Things you need <span className="orange_text">to do</span></p>
                            <p className="things_2">We ensure that you’ll embark on a perfectly planned,<br /> safe vacation at a price
                                you can afford.</p>
                        </div>
                        <div className="aero_div">
                            <img src="assets/double_aeroplane.png" alt="double_aeroplane_image" />
                        </div>
                    </div>
                    <div className="below_hero_div">
                        <div className="below_hero">
                            <div className="box_img">
                                <img src="assets/signup_image.png" alt="signup_image" />
                            </div>
                            <div className="box_text">
                                <p className="box_text1">Sign Up</p>
                                <p className="box_text2">Completes all the work associated with planning and processing</p>
                            </div>
                        </div>
                        <div className="below_hero">
                            <div className="box_img">
                                <img src="assets/purse_image.png" alt="purse_image" />
                            </div>
                            <div className="box_text">
                                <p className="box_text1">Worth of Money</p>
                                <p className="box_text2">After successful access then book from exclusive deals & pricing</p>
                            </div>
                        </div>
                        <div className="below_hero">
                            <div className="box_img">
                                <img src="assets/map_image.png" alt="map_image" />
                            </div>
                            <div className="box_text">
                                <p className="box_text1">Exciting Travel</p>
                                <p className="box_text2">Start and explore a wide range of exciting travel experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Exclusive deals & discounts part --> */}
                <div className="white_bg deals_bg">
                    <div className="things_div">
                        <div className="things_text">
                            <p className="things_1">Exclusive <span className="orange_text">deals & discounts</span></p>
                            <p className="things_2 discover_width">Discover our fantastic early booking discounts & start planning your journey.</p>
                        </div>
                    </div>
                    <div className="card_flex">
                        {/* <!-- Card 1 --> */}
                        <div className="card">
                            <img src="/assets/Madrid_image.png" alt="Madrid" className="card_main_image" />
                                <div className="card-content">
                                    <div className="card_div2">
                                        <p className="box_text1">Madrid</p>
                                        <p>
                                            <div className="card_div3">
                                                <img src="assets/star.png" alt="star_image" width="17px" height="17px" />
                                                    <span className="box_text2">4.8</span>
                                            </div>
                                        </p>
                                    </div>
                                    <div className="book-now">Book Now</div>

                                    <div className="div_btm_text">
                                        <div className="box_text2">
                                            <p>
                                                <div className="card_div3_1">
                                                    <img src="assets/Location_icon.png" alt="location_image" width="12px" height="12px" className="card_icons" />
                                                        <span className="box_text2">Spain</span>
                                                </div>
                                            </p>
                                        </div>
                                        <div className="price_flex">
                                            <p className="price_text1">$950</p>
                                            <p className="price_text2">$850</p>
                                        </div>
                                    </div>
                                </div>
                        </div>

                        {/* <!-- Card 2 --> */}
                        <div className="card">
                            <img src="/assets/Firenze_image.png" alt="Firenze_image" className="card_main_image" />
                                <div className="card-content">
                                    <div className="card_div2">
                                        <p className="box_text1">Firenze</p>
                                        <p>
                                            <div className="card_div3">
                                                <img src="assets/star.png" alt="star_image" width="17px" height="17px" />
                                                    <span className="box_text2">4.5</span>
                                            </div>
                                        </p>
                                    </div>
                                    <div className="book-now">Book Now</div>

                                    <div className="div_btm_text">
                                        <div className="box_text2">
                                            <p>
                                                <div className="card_div3_1">
                                                    <img src="assets/Location_icon.png" alt="location_image" width="12px" height="12px" className="card_icons" />
                                                        <span className="box_text2">Italy</span>
                                                </div>
                                            </p>
                                        </div>
                                        <div className="price_flex">
                                            <p className="price_text1">$850</p>
                                            <p className="price_text2">$750</p>
                                        </div>
                                    </div>
                                </div>
                        </div>

                        {/* <!-- Card 3 --> */}
                        <div className="card">
                            <img src="/assets/Paris_image.png" alt="Paris_image" className="card_main_image" />
                                <div className="card-content">
                                    <div className="card_div2">
                                        <p className="box_text1">Paris</p>
                                        <p>
                                            <div className="card_div3">
                                                <img src="assets/star.png" alt="star_image" width="17px" height="17px" />
                                                    <span className="box_text2">4.4</span>
                                            </div>
                                        </p>
                                    </div>
                                    <div className="book-now">Book Now</div>

                                    <div className="div_btm_text">
                                        <div className="box_text2">
                                            <p>
                                                <div className="card_div3_1">
                                                    <img src="assets/Location_icon.png" alt="location_image" width="12px" height="12px" className="card_icons" />
                                                        <span className="box_text2">France</span>
                                                </div>
                                            </p>
                                        </div>
                                        <div className="price_flex">
                                            <p className="price_text1">$699</p>
                                            <p className="price_text2">$599</p>
                                        </div>
                                    </div>
                                </div>
                        </div>

                        {/* <!-- Card 4 --> */}
                        <div className="card">
                            <img src="/assets/London_image.png" alt="London_image" className="card_main_image" />
                                <div className="card-content">
                                    <div className="card_div2">
                                        <p className="box_text1">London</p>
                                        <p>
                                            <div className="card_div3">
                                                <img src="assets/star.png" alt="star_image" width="17px" height="17px" />
                                                    <span className="box_text2">4.8</span>
                                            </div>
                                        </p>
                                    </div>
                                    <div className="book-now">Book Now</div>

                                    <div className="div_btm_text">
                                        <div className="box_text2">
                                            <p>
                                                <div className="card_div3_1">
                                                    <img src="assets/Location_icon.png" alt="location_image" width="12px" height="12px" className="card_icons" />
                                                        <span className="box_text2">UK</span>
                                                </div>
                                            </p>
                                        </div>
                                        <div className="price_flex">
                                            <p className="price_text1">$850</p>
                                            <p className="price_text2">$850</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    {/* <!-- Arrow part --> */}
                    <div className="arrow_div">
                        <img src="/assets/Left_arrow_img.png" alt="Left_arrow_img" width="35px" height="35px" />
                            <img src="assets/Right_arrow.png" alt="Right_arrow_image" width="35px" height="35px" />
                            </div>
                    </div>
                    {/* <!-- Vacation plan part --> */}
                    <div className="white_bg_1">
                        <div className="things_div_2">
                            <div className="things_text">
                                <p className="things_1">Best <span className="orange_text">vacation plan</span></p>
                                <p className="things_2">Plan your perfect vacation with our travel agency. Choose<br /> among hundreds of all-inclusive offers!</p>
                            </div>
                            <div className="aero_div">
                                <img src="assets/Tree_inage.png" alt="Tree_inage" />
                            </div>
                        </div>
                        <div className="arrow_div_1">
                            <img src="/assets/Left_arrow_img.png" alt="Left_arrow_img" width="35px" height="35px" />
                                <img src="assets/Right_arrow.png" alt="Right_arrow_image" width="35px" height="35px" />
                                </div>
                        </div>
                        <div className="white_bg_2">
                            {/* <!-- Card 2 --> */}
                            <div className="card_flex2">
                                {/* <!-- card 1 --> */}
                                <div className="card_2">
                                    <img src="/assets/Img_1.png" alt="Img_1" className="card_main_image2" />
                                        <div className="card-content2">
                                            <div className="card_div2">
                                                <p className="box_text1">Rome, Italty</p>
                                                <p>
                                                    <div className="card_div3">
                                                        <span className="box_text2_1">$5,42k</span>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="div_btm_text">
                                                <div className="box_text_2">
                                                    <p>
                                                        <div className="card_div3_1">
                                                            <img src="assets/Map_arrow_image.png" alt="Map_arrow_image" width="12px" height="12px" className="card_icons" />
                                                                <span className="box_text2">10 Days Trip</span>
                                                        </div>
                                                    </p>
                                                    <p>
                                                        <div className="card_div3">
                                                            <img src="assets/star.png" alt="star_image" width="17px" height="17px" />
                                                                <span className="box_text2">4.8</span>
                                                        </div>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                {/* <!-- card 2 --> */}
                                <div className="card_2">
                                    <img src="/assets/Img_2.png" alt="Img_2" className="card_main_image2" />
                                        <div className="card-content2">
                                            <div className="card_div2">
                                                <p className="box_text1">London,UK</p>
                                                <p>
                                                    <div className="card_div3">
                                                        <span className="box_text2_1">$2,42k</span>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="div_btm_text">
                                                <div className="box_text_2">
                                                    <p>
                                                        <div className="card_div3_1">
                                                            <img src="assets/Map_arrow_image.png" alt="Map_arrow_image" width="12px" height="12px" className="card_icons" />
                                                                <span className="box_text2">07 Days Trip</span>
                                                        </div>
                                                    </p>
                                                    <p>
                                                        <div className="card_div3">
                                                            <img src="assets/star.png" alt="star_image" width="17px" height="17px" />
                                                                <span className="box_text2">4.7</span>
                                                        </div>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                {/* <!-- card 3 --> */}
                                <div className="card_2">
                                    <img src="/assets/Img_3.png" alt="Img_3" className="card_main_image2" />
                                        <div className="card-content2">
                                            <div className="card_div2">
                                                <p className="box_text1">Osaka,Japan</p>
                                                <p>
                                                    <div className="card_div3">
                                                        <span className="box_text2_1">$5,42k</span>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="div_btm_text">
                                                <div className="box_text_2">
                                                    <p>
                                                        <div className="card_div3_1">
                                                            <img src="assets/Map_arrow_image.png" alt="Map_arrow_image" width="12px" height="12px" className="card_icons" />
                                                                <span className="box_text2">10 Days Trip</span>
                                                        </div>
                                                    </p>
                                                    <p>
                                                        <div className="card_div3">
                                                            <img src="assets/star.png" alt="star_image" width="17px" height="17px" />
                                                                <span className="box_text2">4.8</span>
                                                        </div>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Below vacation part --> */}
                        <div className="ash_bg2">
                            <section className="testimonial-section">
                                <div className="testimonial-container">
                                    <div className="testimonial-content">
                                        <p className="things_1_1">What people say <span className="orange_text">about Us.</span></p>
                                        <p className="testimonial-subheading">Our Clients send us bunch of smilies with our services <br />and we love them.</p>
                                        <div className="arrow_div_2">
                                            <img src="/assets/Left_arrow_img.png" alt="Left_arrow_img" width="35px" height="35px" />
                                                <img src="assets/Right_arrow.png" alt="Right_arrow_image" width="35px" height="35px" />
                                                </div>
                                        </div>
                                        <div className="avatar_div">
                                            <img src="assets/head_image.png" alt="Client avatar" className="avatar" />
                                        </div>
                                        <div className="testimonial-cards">
                                            <div className="avatar_div">
                                            </div>
                                            <div className="testimonial-card-wrapper">
                                                <article className="testimonial-card">
                                                    <div className="testimonial-card-content">
                                                        <p className="testimonial-text">"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."</p>
                                                        <p className="testimonial-text2"><b>Mike taylor</b></p>
                                                        <div className="testimonial-text2">Lahore, Pakistan</div>
                                                    </div>
                                                </article>
                                                <article className="testimonial-card2">
                                                    <div className="author-info">
                                                        <p className="testimonial-author">"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."</p>
                                                        <p className="author-name">Chris Thomas</p>
                                                        <p className="author-title">CEO of Red Button</p>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                            </section>

                        </div>
                        {/* <!-- Blog part --> */}
                        <div className="white_bg">
                            <div className="blog-container">
                                <h2 className="blog-title">Get update with <span className="blog-title-highlight">latest blog</span></h2>
                                <div className="blog-grid">
                                    <article className="blog-card">
                                        <img loading="lazy" src="assets/place_1.png" className="blog-image" alt="Blog post image about the amazing difference a year of travelling makes" />
                                        <h3 className="blog-card-title">The Amazing Difference a Year of Travelling.</h3>
                                        <time className="blog-date" datetime="2021-07-27">July 27, 2021</time>
                                    </article>
                                    <article className="blog-card">
                                        <img loading="lazy" src="assets/place2_img.png" className="blog-image" alt="Blog post image about traveling far enough to meet yourself" />
                                        <h3 className="blog-card-title">Travel far enough, you meet yourself.</h3>
                                        <time className="blog-date" datetime="2021-07-27">July 27, 2021</time>
                                    </article>
                                    <article className="blog-card">
                                        <img loading="lazy" src="assets/place3_img.png" className="blog-image" alt="Blog post image about saving money while visiting Africa" />
                                        <h3 className="blog-card-title">How to Save Money While Visiting Africa.</h3>
                                        <time className="blog-date" datetime="2021-07-27">July 27, 2021</time>
                                    </article>
                                    <article className="blog-card">
                                        <img loading="lazy" src="assets/place4_img.png" className="blog-image" alt="Blog post image about reflections on 5 months of travel" />
                                        <h3 className="blog-card-title">Reflections on 5 Months of Travel: Time to Hang</h3>
                                        <time className="blog-date" datetime="2021-07-27">July 27, 2021</time>
                                    </article>
                                </div>
                                <nav>
                                    <img loading="lazy" src="assets/dot.png" className="blog-nav" alt="" />
                                    <span className="visually-hidden">Blog navigation</span>
                                </nav>
                            </div>
                        </div>
                        <footer className="footer white_bg">
                            <section className="newsletter-bg">
                                <div className="newsletter-content">
                                    <img loading="lazy" src="assets/semi_circle_img.png" className="newsletter-bg-image" alt="" />
                                    <img loading="lazy" src="assets/coconut_img.png" className="newsletter-bg-image2" alt="" />
                                    <div className="newsletter-text-container">
                                        <h2 className="newsletter-title">Subscribe and get exclusive deals & offer</h2>
                                        <form className="newsletter-form">
                                            <div className="input-wrapper">
                                                <img loading="lazy" src="assets/social_media.png" className="email-icon" alt="" />
                                                <label for="email-input" className="visually-hidden">Enter your email</label>
                                                <input type="email" id="email-input" placeholder="Enter your mail" aria-label="Enter your email" />
                                            </div>
                                            <button type="submit" className="subscribe-btn">Subscribe</button>
                                        </form>
                                    </div>
                                </div>
                            </section>

                            <div className="footer-bg">
                                <div className="footer-content">
                                    <div className="footer-columns">
                                        <div className="footer-row">
                                            <div className="footer-column">
                                                <div className="footer-logo-section">
                                                    <div className="logo-wrapper">
                                                        <span className="logo-text">Trabook</span>
                                                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/902ca2bc5764b1f9bce2dfa075a02331e461c2108d12098b9ac104de9926ca96?placeholderIfAbsent=true&apiKey=8993e8da4805407cbe662b125dbfb820" className="logo-icon" alt="" />
                                                    </div>
                                                    <p className="footer-description">
                                                        Book your trip in minute, get full<br />
                                                        Control for much longer.
                                                    </p>
                                                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b695106f0a4e61086a7e40085f7267ba7e1d4df34391745e606c6f0789725c4?placeholderIfAbsent=true&apiKey=8993e8da4805407cbe662b125dbfb820" className="social-icons" alt="Social media icons" />
                                                </div>
                                            </div>
                                            <nav className="footer-nav-column">
                                                <ul className="footer-nav">
                                                    <li className="footer-nav-title">Company</li>
                                                    <li className="footer-nav-item"><a href="#">About</a></li>
                                                    <li className="footer-nav-item"><a href="#">Careers</a></li>
                                                    <li className="footer-nav-item"><a href="#">Logistic</a></li>
                                                </ul>
                                            </nav>
                                            <nav className="footer-nav-column">
                                                <ul className="footer-nav">
                                                    <li className="footer-nav-title">Contact</li>
                                                    <li className="footer-nav-item"><a href="#">Help/FAQ</a></li>
                                                    <li className="footer-nav-item"><a href="#">Press</a></li>
                                                    <li className="footer-nav-item"><a href="#">Affilates</a></li>
                                                </ul>
                                            </nav>
                                            <nav className="footer-nav-column">
                                                <ul className="footer-nav">
                                                    <li className="footer-nav-title">More</li>
                                                    <li className="footer-nav-item"><a href="#">Press Centre</a></li>
                                                    <li className="footer-nav-item"><a href="#">Our Blog</a></li>
                                                    <li className="footer-nav-item"><a href="#">Low fare tips</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <a href="#" className="privacy-policy">Privacy & Policy</a>
                                    <hr className="footer-divider" />
                                    <div className="footer-bottom">
                                        <p className="copyright">Copyright, Trabook 2022. All rights reserved.</p>
                                        <a href="#" className="terms-conditions">Terms & Conditions</a>
                                    </div>
                                </div>
                            </div>
                        </footer>


            </div>
        </div>
            );
};

export default LandingPage;