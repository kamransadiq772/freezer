import React from "react";
import "./landing.css";
import src from "../assets/img1.png";
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";
import four from "../assets/four.png";
import systemFirst from "../assets/systemFirst.png";
import systemSecond from "../assets/systemSecond.png";
import systemThird from "../assets/systemThird.png";
import systemFour from "../assets/systemFour.png";
import systemFive from "../assets/systemFive.png";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import ShopTwoIcon from "@mui/icons-material/ShopTwo";
import GridViewIcon from "@mui/icons-material/GridView";
import calFrontImage from "../assets/calFrontImage.png";
import clientApparel from "../assets/clientApparel.png";
import clientNishat from "../assets/clientNishat.png";
import clientCrescent from "../assets/clientCresent.png";
import clientGulAhmad from "../assets/clientGulAhmad.png";
import clientInterLoop from "../assets/clientInterloop.png";
import calbackfirst from "../assets/calbackfirst.png"
import calbacksecond from "../assets/calbacksecond.png"
import bgImg from "../assets/bgImg.jpg"
import dots from '../assets/dots.png'
import fr1 from '../assets/fr1.jpg'
import fr2 from '../assets/fr2.jpg'
import fr3 from '../assets/fr3.png'
import wm1 from '../assets/wm1.jpg'
import wm2 from '../assets/wm2.jpg'

const LandingPage = () => {
  return (
    <div className="landingContainer">
      <div className="innerContainer">


        {/* Intro Part */}
        <div className="introContainer">
          {/* <img src={dots} style={{ position: 'absolute', right: 0, top: 200 }} alt="" />
          <img src={dots} style={{ position: 'absolute', left: 0, top: 670 }} alt="" />
          <img src={dots} style={{ position: 'absolute', right: 0, top: 830 }} alt="" />
          <img src={dots} style={{ position: 'absolute', left: 0, top: 1450 }} alt="" />
          <img src={dots} style={{ position: 'absolute', left: 0, top: 1900 }} alt="" />
          <img src={dots} style={{ position: 'absolute', right: 0, top: 3000 }} alt="" /> */}
          <div className="intro">
            <div className="introTitle">Freezers-آصف للتبريد(Mecca)</div>
            <div className="introHeading">Freezers And Machines Providers</div>
            <div className="introPara">
              We provide <span>Freezers</span> and <span>Wasing Machines</span> of 
              all qualities in <span>Mecca</span>. You can contact on the give number for any type of freezers
              and Machines.
            </div>
            <div className="introButton">Hopefully Stisfies Customers.</div>
          </div>
          <div className="introimage">
            <img height={300} src={bgImg} alt="image" />
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.23316254402351!2d39.89094081080094!3d21.36111891839478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c20513f65923d1%3A0x9a762919423ad249!2z2KLYtdmBINmE2YTYqtio2LHZitiv!5e0!3m2!1sen!2s!4v1667126908139!5m2!1sen!2s" width="300" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
          </div>
        </div>

        {/* Video Part */}
        {/* <div className="vidContainer">
          <div className="video">
            <video className="vid" src={vid}></video>
            <PlayCircleFilledWhiteIcon
              className="vidIcon"
              sx={{
                color: "#399B43",
                width: "55px",
                height: "55px",
                marginLeft: "-29px",
                borderRadius: "50%",
                backgroundColor: "white",
              }}
            />
          </div>
          <div className="vidSideContainer">
            <div className="vidSideTitle">
              Easy to Use Server Based Factory Management Systems
            </div>
            <div className="vidSideBtn">Learn More..</div>
          </div>
        </div> */}

        {/* Features Part */}
        <div className="featuresContainer">
          <div className="featureHeader">Our Products</div>
          <div className="featureCardsContainer">
            <div className="featureItemContainer">
              <div className="featureItemImg">
                <img src={fr1} alt="" />
              </div>
              <div className="featureItemCard">
                <div className="featureItemCardHeader">Freezers Drawer</div>
                <div className="featureItemCardPara">
                  Drawer Freezers also available in stocks.
                </div>
                {/* <div className="featureItemCardLink">Read More</div> */}
              </div>
            </div>

            <div className="featureItemContainer">
              <div className="featureItemImg">
                <img src={fr2} alt="" />
              </div>
              <div className="featureItemCard">
                <div className="featureItemCardHeader">Freezers Portable</div>
                <div className="featureItemCardPara">
                  We porvide all types of portable Freezers.
                </div>
                {/* <div className="featureItemCardLink">Read More</div> */}
              </div>
            </div>

            <div className="featureItemContainer">
              <div className="featureItemImg">
                <img src={wm2} alt="" />
              </div>
              <div className="featureItemCard">
                <div className="featureItemCardHeader">Wasing for Professionals</div>
                <div className="featureItemCardPara">
                  Standable washing machinesa with new tech touches technonlogies are available.
                </div>
                {/* <div className="featureItemCardLink">Read More</div> */}
              </div>
            </div>

            <div className="featureItemContainer">
              <div className="featureItemImg">
                <img src={wm1} alt="" />
              </div>
              <div className="featureItemCard">
                <div className="featureItemCardHeader">Washing Machines</div>
                <div className="featureItemCardPara">
                  Our stock container modern types of washing machines.
                </div>
                {/* <div className="featureItemCardLink">Read More</div> */}
              </div>
            </div>
          </div>
        </div>

        {/* system Part */}
        {/* <div className="systemsContainer">
          <div className="systemHeader">Our Factory Management Systems</div>
          <div className="systemCardsContainer">
            <div className="systemItems">
              <div className="numberContainer">01</div>
              <div className="systemItemImgContainer">
                <img src={systemFirst} alt="" />
              </div>
              <div className="systemBottmHeading">RRT</div>
              <div className="systemBottomPara">
                Real time, WIP Management of Rolls
              </div>
            </div>

            <div className="systemItems">
              <div className="numberContainer">02</div>
              <div className="systemItemImgContainer">
                <img src={systemSecond} alt="" />
              </div>
              <div className="systemBottmHeading">SPTS</div>
              <div className="systemBottomPara">
                Smart Production Tracking System
              </div>
            </div>

            <div className="systemItems">
              <div className="numberContainer">03</div>
              <div className="systemItemImgContainer">
                <img src={systemThird} alt="" />
              </div>
              <div className="systemBottmHeading">SQMS</div>
              <div className="systemBottomPara">
                Smart Quality Management System
              </div>
            </div>

            <div className="systemItems">
              <div className="numberContainer">04</div>
              <div className="systemItemImgContainer">
                <img src={systemFour} alt="" />
              </div>
              <div className="systemBottmHeading">MEASURE PRO</div>
              <div className="systemBottomPara">Garment Measuring System</div>
            </div>

            <div className="systemItems">
              <div className="numberContainer">05</div>
              <div className="systemItemImgContainer">
                <img src={systemFive} alt="" />
              </div>
              <div className="systemBottmHeading">MEMS</div>
              <div className="systemBottomPara">Machine Efficiency System</div>
            </div>
          </div>
        </div> */}


        {/* Caluculation Part */}
        {/* <div className="calContainer">
          <div className="calContainerInner">
            <div className="calLeftContainer">
              <div className="calLeftHeader">
                Calculate maximum productivity & efficiency with some clicks
              </div>
              <div className="calLeftPara">
                It is important to stay focused while achieving the targets. We
                help you monitor your production efficiency so you can easily
                spot and cut any unnecessary expenses.
              </div>
              <div className="calLeftLine">
                Simply join today to get started!
              </div>
              <div className="calLeftIconContainer">
                <ShopTwoIcon sx={{ marginRight: "20px" }} />
                <GridViewIcon />
              </div>
            </div>

            <div className="calRightContainer">
              <div className="frontcalimg"><img src={calFrontImage} alt="" /></div>
              <div className="firstcalimg"><img src={calbackfirst} alt="" /></div>
              <div className="secondcalimg"><img src={calbacksecond} alt="" /></div>
            </div>
          </div>
        </div> */}


        {/* client Part */}

        {/* <div className="clientContainer">
          <div className="clientHeader">OUR CLIENTS</div>
          <div className="clientItemsContainer">
            <div className="clientItem">
              <img src={clientNishat} alt="" />
            </div>
            <div className="clientItem">
              <img src={clientApparel} alt="" />
            </div>
            <div className="clientItem">
              <img src={clientCrescent} alt="" />
            </div>
            <div className="clientItem">
              <img src={clientGulAhmad} alt="" />
            </div>
            <div className="clientItem">
              <img src={clientInterLoop} alt="" />
            </div>
          </div>
        </div> */}


        {/* Contact Part */}
        {/* <div className="contactContainer">
          <div className="contactContainerInner">
            <div className="contactLeft">
              <div className="contactLeftHeader">
                Let’s discuss business on a coffee table.{" "}
              </div>
              <div className="contactLeftPara">
                Questions or concerns? Just fill out the form below and our
                support team will get back to you within 24 hours
              </div>
            </div>
            <div className="contactRight">
              <form className="contactForm" action="">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Phone Number" />
                <input type="text" placeholder="Email Address" />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Your Message"
                ></textarea>
                <button type="submit">SUBMIT NOW</button>
              </form>
            </div>
          </div>
        </div> */}

        {/* MAP */}
        <div className="cmap" style={{ width: '100vw', height: '80vh', marginTop: 20 }} >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.23316254402351!2d39.89094081080094!3d21.36111891839478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c20513f65923d1%3A0x9a762919423ad249!2z2KLYtdmBINmE2YTYqtio2LHZitiv!5e0!3m2!1sen!2s!4v1667126908139!5m2!1sen!2s" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          {/* <iframe src="https://www.google.com/maps/place/%D8%A2%D8%B5%D9%81+%D9%84%D9%84%D8%AA%D8%A8%D8%B1%D9%8A%D8%AF%E2%80%AD/@21.3610977,39.8909455,21z/data=!4m13!1m7!3m6!1s0x0:0xba5b44851a64c6d1!2zMjHCsDIxJzQwLjAiTiAzOcKwNTMnMjcuOSJF!3b1!8m2!3d21.3610977!4d39.8910823!3m4!1s0x15c20513f65923d1:0x9a762919423ad249!8m2!3d21.3610824!4d39.8911425?hl=en" frameBorder="0" width="100%" height="500px" ></iframe> */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
