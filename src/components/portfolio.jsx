import React from "react";

//import stock
import stock from "../img/image1.jpg";
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/image4.jpg";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">              
                  Here are some project links, click to see the demo:
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          {/* <div className="row"> */}
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://proffy-mauve-omega.vercel.app/" target="_newblank">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Proffy</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          An online study platform that aims to connect students and teachers quickly and easily.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
