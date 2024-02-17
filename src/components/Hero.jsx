const HeroSection =() =>{
 return <main className="hero container">
    <div className="hero-content">

        <h1>Your Skin Also Deserve Care</h1>
        <p>Skin care or skincare is a range of practices that support skin integrity, enhance its appearance, and relieve skin conditions. They can include nutrition, avoidance of excessive 
            sun exposure, and appropriate use of emollients.</p>
        <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>

        </div>
        <div className="shopping">
            <p>Available On</p>
            <div className="brand-icons">
                <img src="/images/amazon.jpg" alt="amazon-logo" />
                <img src="/images/flipcart.jpg" alt="flipcart-logo" />

            </div>
        </div>


    </div>
    <div className="hero-image">
    <img src="/images/care.jpg" alt="care-logo" />

    </div>


 </main>
}

export default HeroSection;