import Buttonbro from './Buttonbro';

function Hero(){
    return(
        <section className="landing-page">
            <div className="texts">
                <h1 className="title">Find The Best Fashion Style For you</h1>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <Buttonbro buttonName="Buy Now"/>
                {/* <button className="buy-now">Buy Now</button> */}
            </div>
            <div className="image-placeholder">
                <img className="hero-image" src="" alt="" />
            </div>
        </section>
    );
}

export default Hero