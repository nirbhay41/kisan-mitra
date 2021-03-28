import React from "react";
import about_pic from "../../resources/gummy-farming.svg";
import AboutCard from "../AboutCard/AboutCard";
import "./About.scss";
import nirbhay_profile_pic from "../../resources/profile_pics/nirbhay_profile_pic.jpg";
import shashank_profile_pic from "../../resources/profile_pics/shashank_profile_pic.jpeg";
import abhishek_profile_pic from "../../resources/profile_pics/abhishek_profile_pic.jpeg";

function About() {
  return (
    <div className="about">
      <div className="about-content">
          <div className="about-heading">
            <h1>Shape Of Us</h1>
            <p id="tagline">We are together, forever</p>
            <p id="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              animi dolores labore repudiandae eius atque iste eaque, ab
              dignissimos tempora id aperiam libero sequi laboriosam perferendis
              ipsum nisi voluptates illo.
            </p>
          </div>
          <div className="about-pic">
            <img src={about_pic} alt="Team Pic" />
          </div>

        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <defs>
            <linearGradient
              spreadMethod="pad"
              id="lgrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="100%" stopColor="rgb(40, 49, 59)" stopOpacity="1" />
              <stop offset="0%" stopColor="rgb(72, 84, 97)" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#lgrad)"
            fillOpacity="1"
            d="M0,96L30,122.7C60,149,120,203,180,192C240,181,300,107,360,90.7C420,75,480,117,540,117.3C600,117,660,75,720,58.7C780,43,840,53,900,96C960,139,1020,213,1080,208C1140,203,1200,117,1260,96C1320,75,1380,117,1410,138.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
        </div>

      <section className="about-card-section">
        <div className="about-container">
          <AboutCard
            name="Nirbhay Singh"
            position="CEO"
            profile_pic={nirbhay_profile_pic}
            insta_url="https://www.instagram.com/nirbhay411/"
            twitter_url="https://twitter.com/nirbhay411"
            in_url="https://www.linkedin.com/in/nirbhay411/"
          />
          <AboutCard
            name="Shashank Kumar Mishra"
            position="COO"
            profile_pic={shashank_profile_pic}
            insta_url="https://www.instagram.com/_shashank_40/"
            twitter_url="https://twitter.com/ShashankM1213"
            in_url="https://www.linkedin.com/in/shashank-kumar-mishra-35b3571b1/"
          />
          <AboutCard
            name="Shubham Kumar Tripathi"
            position="CCO"
            profile_pic={shashank_profile_pic}
          />
          <AboutCard
            name="Abhishek Kumar Singh"
            position="CSO"
            profile_pic={abhishek_profile_pic}
            insta_url="https://www.instagram.com/ab_hi_sh_e_k/"
            twitter_url="https://twitter.com/Abhishe97224013"
            in_url="https://www.linkedin.com/in/abhishek-kumar-singh-a1a895191/"
          />
        </div>
      </section>

      <div className="about-footer">
        <svg
          height="100%"
          width="100%"
          id="svg"
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <defs>
            <linearGradient id="gradient">
              <stop offset="5%" stopColor="#002bdc44"></stop>
              <stop offset="95%" stopColor="#32ded444"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,400 C 0,400 0,80 0,80 C 45.18128948690159,95.62736260540855 90.36257897380318,111.2547252108171 134,107 C 177.63742102619682,102.7452747891829 219.7309735916889,78.60846176214017 277,67 C 334.2690264083111,55.39153823785984 406.71352665944113,56.311427740622264 457,56 C 507.28647334055887,55.688572259377736 535.4149197705465,54.14582727537075 576,65 C 616.5850802294535,75.85417272462925 669.6267942583733,99.10526315789474 717,97 C 764.3732057416267,94.89473684210526 806.0779031959607,67.4331200930503 858,61 C 909.9220968040393,54.566879906949694 972.0615929577837,69.16225646990404 1014,68 C 1055.9384070422163,66.83774353009596 1077.6757249729042,49.91785402733352 1126,52 C 1174.3242750270958,54.08214597266648 1249.2355071505988,75.16632742076186 1306,83 C 1362.7644928494012,90.83367257923814 1401.3822464247005,85.41683628961907 1440,80 C 1440,80 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            className="transition-all duration-300 ease-in-out delay-150"
          ></path>
          <defs>
            <linearGradient id="gradient">
              <stop offset="5%" stopColor="#002bdc66"></stop>
              <stop offset="95%" stopColor="#32ded466"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,400 C 0,400 0,160 0,160 C 59.60395463797616,170.28872029395438 119.20790927595232,180.57744058790874 166,183 C 212.79209072404768,185.42255941209126 246.77231753416692,179.9789579423194 289,181 C 331.2276824658331,182.0210420576806 381.70282058737996,189.50672764281373 432,185 C 482.29717941262004,180.49327235718627 532.416400116313,163.99413148642577 577,162 C 621.583599883687,160.00586851357423 660.6315789473686,172.51674641148324 715,166 C 769.3684210526314,159.48325358851676 839.0572840942132,133.93888286764124 884,132 C 928.9427159057868,130.06111713235876 949.139284675778,151.72772211795183 985,160 C 1020.860715324222,168.27227788204817 1072.385577202675,163.15022866055142 1128,154 C 1183.614422797325,144.84977133944858 1243.3184065135215,131.67136323984244 1296,132 C 1348.6815934864785,132.32863676015756 1394.3407967432393,146.16431838007878 1440,160 C 1440,160 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            className="transition-all duration-300 ease-in-out delay-150"
          ></path>
          <defs>
            <linearGradient id="gradient">
              <stop offset="5%" stopColor="#002bdc88"></stop>
              <stop offset="95%" stopColor="#32ded488"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,400 C 0,400 0,240 0,240 C 48.73225567686167,254.30644479103333 97.46451135372334,268.61288958206666 147,262 C 196.53548864627666,255.38711041793334 246.87421026196836,227.85488646276667 300,232 C 353.12578973803164,236.14511353723333 409.03864759840326,271.96756456686666 456,269 C 502.96135240159674,266.03243543313334 540.9711993444183,224.27485526976656 580,219 C 619.0288006555817,213.72514473023344 659.0765550239234,244.93301435406704 708,259 C 756.9234449760766,273.06698564593296 814.7225805598879,269.9930873139654 864,265 C 913.2774194401121,260.0069126860346 954.033122736525,253.09463639007117 1006,245 C 1057.966877263475,236.90536360992883 1121.1449284940127,227.6283671257501 1169,224 C 1216.8550715059873,220.3716328742499 1249.387163287425,222.39189510692853 1292,226 C 1334.612836712575,229.60810489307147 1387.3064183562874,234.80405244653574 1440,240 C 1440,240 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            className="transition-all duration-300 ease-in-out delay-150"
          ></path>
          <defs>
            <linearGradient id="gradient">
              <stop offset="5%" stopColor="#002bdcff"></stop>
              <stop offset="95%" stopColor="#32ded4ff"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,400 C 0,400 0,320 0,320 C 45.72209151709005,312.2419572285812 91.4441830341801,304.4839144571625 136,311 C 180.5558169658199,317.5160855428375 223.94535938036955,338.3062993999313 278,333 C 332.05464061963045,327.6937006000687 396.77437944434166,296.29088794311247 448,300 C 499.22562055565834,303.70911205688753 536.957122842264,342.530148827619 582,347 C 627.042877157736,351.469851172381 679.3971291866028,321.5885167464115 735,306 C 790.6028708133972,290.4114832535885 849.4543604113246,289.1157841867351 890,290 C 930.5456395886754,290.8842158132649 952.7854291680987,293.94834650664836 997,299 C 1041.2145708319013,304.05165349335164 1107.403922916281,311.09082978667163 1164,308 C 1220.596077083719,304.90917021332837 1267.5988791667767,291.6883343466653 1312,292 C 1356.4011208332233,292.3116656533347 1398.2005604166116,306.1558328266674 1440,320 C 1440,320 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            className="transition-all duration-300 ease-in-out delay-150"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default About;
