import Image from "next/image";
import './about.css'

const AboutPage = () => {
  return (
    <div className="about">
      <div className="abt-textcontainer">
        <h2 className="abt-subtitle">About Agency</h2>
        <h1 className="abt-title">
           We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className="abt-desc">
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className='abt-boxes'>
          <div className="abt-box">
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="abt-box">
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="abt-box">
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className="abt-imagecontainer">
        <Image  src="/about.png" fill className="abt-img"/>
      </div>
    </div>
  );
}

export default AboutPage