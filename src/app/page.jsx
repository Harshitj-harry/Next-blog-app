import Image from 'next/image';
import './home.css'
const Home = () => {
  return (
    <div className="home">
      <div className="home-textcontainer">
        <h1 className="home-title">Creative Thoughts Agency.</h1>
        <p className='home-desc'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className='home-buttons'>
          <button className="home-button">Learn More</button>
          <button className="home-button">Contact</button>
        </div>
        <div className="home-brands">
            <Image src="/brands.png" alt="" fill className="home-brand-img"/>
        </div>
      </div>
      <div className="home-imagecontainer">
          <Image src="/try.GIF" alt="" fill className="home-img"/>
      </div>
    </div>
  );
}

export default Home