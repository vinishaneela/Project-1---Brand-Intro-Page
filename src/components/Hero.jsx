const Hero=()=>{
    return(
    <main className="hero container">
       <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BESTS</h1>
          <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
       <div className="buttn-hero">
       <button>Shop now</button>
       <button className="secondary-btn"> Category</button>
       </div>
       <div className="shopping">
        <p> Also Available on</p>
        <div className="brand-icons">
        <img src="/flipkart.png" alt="flipkart"/>
        <img src="/amazon.png" alt="amazon"/>
        </div>
       </div>
       </div>
       <div className="hero-image">
       <img src="/shoe_image.png" alt="shoe"/>
       </div>
    </main>
    );
};

export default Hero;