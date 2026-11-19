import { useState } from "react";

const assetPathPrefix = "/assets/mobile";
const imgRectangle1 = `${assetPathPrefix}/ad5f3.png`;
const img0258DbeaB6D44F02B62B99B7E0Aa6D781 = `${assetPathPrefix}/6f371.png`;
const imgImage4 = `${assetPathPrefix}/7d2ac.png`;
const imgImage1 = `${assetPathPrefix}/b3043.png`;
const imgImage2 = `${assetPathPrefix}/3bcd8.png`;
const imgImage3 = `${assetPathPrefix}/7d9cd.png`;
const imgLine1 = `${assetPathPrefix}/13350.svg`;
const imgLine2 = `${assetPathPrefix}/1a2fd.svg`;
const imgLine3 = `${assetPathPrefix}/eb801.svg`;
const imgLine7 = `${assetPathPrefix}/ad2af.svg`;

export default function MobileApp() {
  const [activeService, setActiveService] = useState<"uiux" | "fullstack" | "landing" | "brand" | "support">("uiux");

  const serviceDescriptions: Record<"uiux" | "fullstack" | "landing" | "brand" | "support", string> = {
    uiux: "We craft intuitive, visually striking UI/UX experiences that bring ideas to life. From seamless user journeys to thoughtfully designed interfaces, we blend creativity with functionality to build digital experiences that are engaging, effortless, and memorable.",
    fullstack: "We develop powerful, scalable, and responsive web applications, combining intuitive frontends with robust backend systems to bring your ideas to life.",
    landing: "We design high-impact landing pages that capture attention, communicate your message, and turn visitors into customers through compelling visuals and seamless user experiences.",
    brand: "We build distinctive brand identities through thoughtful visuals, creative direction, and realistic mockups that give your brand a consistent and memorable presence.",
    support: "We keep your digital presence running smoothly with reliable support, regular updates, performance optimization, and ongoing maintenance to ensure everything works flawlessly.",
  };

  return (
    <div
      className="mobile-page bg-[#151515] relative w-full h-[793.8461538vw] overflow-hidden"
      data-node-id="21:184"
      data-name="Mobile"
    >
      <div
        className="absolute h-[14.871795vw] left-0 top-[4.871795vw] w-[34.358974vw]"
        data-node-id="21:185"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgRectangle1}
        />
      </div>
      <div className="absolute contents left-[86.666667vw] top-[8.461538vw]" data-node-id="21:191">
        <div
          className="absolute flex h-[5.801538vw] items-center justify-center left-[86.666667vw] top-[9.305128vw] w-[7.692308vw]"
          data-node-id="21:192"
        >
          <div className="flex-none rotate-[-37.02deg] scale-y-96 skew-x-[15.95deg]">
            <div className="bg-[#d4aa7d] h-[0.741026vw] relative rounded-[25.641026vw] w-[8.893846vw]" />
          </div>
        </div>
        <div
          className="absolute flex h-[3.123846vw] items-center justify-center left-[87.748718vw] top-[12.897436vw] w-[4.142051vw]"
          data-node-id="21:193"
        >
          <div className="flex-none rotate-[-37.02deg] scale-y-96 skew-x-[15.95deg]">
            <div className="bg-[#d4aa7d] h-[0.741026vw] relative rounded-[25.641026vw] w-[4.446923vw]" />
          </div>
        </div>
        <div
          className="absolute flex h-[3.123846vw] items-center justify-center left-[88.920513vw] top-[8.607692vw] w-[4.142051vw]"
          data-node-id="21:194"
        >
          <div className="flex-none rotate-[-37.02deg] scale-y-96 skew-x-[15.95deg]">
            <div className="bg-[#d4aa7d] h-[0.741026vw] relative rounded-[25.641026vw] w-[4.446923vw]" />
          </div>
        </div>
        <div
          className="absolute flex h-[1.876154vw] items-center justify-center left-[88.84359vw] top-[8.461538vw] w-[2.487436vw]"
          data-node-id="21:195"
        >
          <div className="flex-none rotate-[-37.02deg] scale-y-96 skew-x-[15.95deg]">
            <div className="bg-[#d4aa7d] h-[0.741026vw] relative rounded-[25.641026vw] w-[2.374615vw]" />
          </div>
        </div>
        <div
          className="absolute flex h-[1.876154vw] items-center justify-center left-[89.512821vw] top-[14.276923vw] w-[2.487436vw]"
          data-node-id="21:196"
        >
          <div className="flex-none rotate-[-37.02deg] scale-y-96 skew-x-[15.95deg]">
            <div className="bg-[#d4aa7d] h-[0.741026vw] relative rounded-[25.641026vw] w-[2.374615vw]" />
          </div>
        </div>
      </div>
      <div
        className="absolute aspect-[1536/1024] flex items-center justify-center left-[-77.435897vw] right-[-78.717949vw] top-[61.025641vw]"
        data-node-id="21:197"
        style={{ containerType: "size" }}
      >
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw] mobile-planet">
          <div className="relative size-full" data-name="0258dbea-b6d4-4f02-b62b-99b7e0aa6d78 1">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={img0258DbeaB6D44F02B62B99B7E0Aa6D781}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute contents right-[-97.179487vw] top-[61.025641vw]"
        data-node-id="21:198"
      >
        <div
          className="absolute flex h-[218.239487vw] items-center justify-center right-[-88.510256vw] top-[69.402564vw] w-[254.151538vw]"
          data-node-id="21:199"
        >
          <div className="-rotate-40 flex-none">
            <div className="bg-[#d4aa7d] h-[21.973333vw] relative w-[313.333333vw]" />
          </div>
        </div>
        <div
          className="absolute flex h-[93.862051vw] items-center justify-center right-[102.825641vw] top-[139.487179vw] translate-x-full w-[105.903077vw]"
          data-node-id="21:200"
        >
          <div className="-rotate-40 flex-none mobile-hunger-track">
            <p className="[word-break:break-word] font-compressed leading-[normal] not-italic relative text-[#151515] text-[17.948718vw] whitespace-nowrap">HUNGER TO GROW !&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          </div>
        </div>
      </div>
      <div
        className="[word-break:break-word] absolute contents font-['Inter:Bold'] font-bold leading-[normal] left-[8.974359vw] not-italic text-[10.25641vw] text-white top-[54.871795vw] whitespace-nowrap"
        data-node-id="21:202"
      >
        <p className="absolute left-[8.974359vw] top-[54.871795vw]" data-node-id="21:203">
          DESIGN.
        </p>
        <p className="absolute left-[8.974359vw] top-[81.282051vw]" data-node-id="21:204">
          DEVELOP.
        </p>
        <p className="absolute left-[8.974359vw] top-[107.692308vw]" data-node-id="21:205">
          DELIVER.
        </p>
      </div>
      <div
        className="absolute bg-[#151515] h-[69.487179vw] left-[-1.025641vw] top-[191.538462vw] w-[101.025641vw]"
        data-node-id="21:207"
      />
      <div
        className="[word-break:break-word] absolute contents font-compressed leading-[normal] left-[-23.076923vw] not-italic right-[-204.102564vw] top-[207.948718vw] whitespace-nowrap"
        data-node-id="21:209"
      >
        <p
          className="absolute left-[18.717949vw] text-[#ffa100] text-[10.25641vw] top-[207.948718vw] tracking-[0.717949vw]"
          data-node-id="21:210"
        >
          What are we ?
        </p>
        <p
          className="absolute opacity-50 right-[14.615385vw] text-[#d4aa7d] text-[6.410256vw] top-[211.538462vw] tracking-[0.448718vw] translate-x-full"
          data-node-id="21:211"
        >
          What are we ?
        </p>
        <p
          className="absolute left-[calc(50%+190vw)] opacity-50 text-[#d4aa7d] text-[10.25641vw] top-[243.076923vw] tracking-[0.717949vw]"
          data-node-id="21:212"
        >
          What are we ?
        </p>
        <p
          className="absolute left-[calc(50%+190.25641vw)] opacity-25 text-[#d4aa7d] text-[10.25641vw] top-[243.076923vw] tracking-[0.717949vw]"
          data-node-id="21:213"
        >
          What are we ?
        </p>
        <p
          className="absolute left-[-23.076923vw] opacity-50 text-[#d4aa7d] text-[6.410256vw] top-[211.538462vw] tracking-[0.448718vw]"
          data-node-id="21:215"
        >
          What are we ?
        </p>
      </div>
      <div
        className="absolute contents left-[6.666667vw] right-[5.384615vw] top-[231.794872vw]"
        data-node-id="21:216"
      >
        <div
          className="absolute bg-[#d4aa7d] h-[7.692308vw] right-[6.153846vw] top-[289.230769vw] w-[27.948718vw]"
          data-node-id="21:217"
        />
        <div
          className="absolute bg-[#d4aa7d] h-[7.179487vw] left-[21.282051vw] top-[231.794872vw] w-[39.74359vw]"
          data-node-id="21:218"
        />
        <div
          className="absolute bg-[#d4aa7d] h-[8.205128vw] left-[32.820513vw] top-[296.410256vw] w-[36.666667vw]"
          data-node-id="21:219"
        />
        <div
          className="absolute bg-[#d4aa7d] h-[6.923077vw] left-[42.564103vw] top-[261.025641vw] w-[42.564103vw]"
          data-node-id="21:220"
        />
        <div
          className="absolute bg-[#d4aa7d] h-[6.923077vw] left-[18.974359vw] top-[267.948718vw] w-[34.615385vw]"
          data-node-id="21:221"
        />
        <p
          className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal h-[59.230769vw] leading-[0] left-[6.666667vw] not-italic right-[5.384615vw] text-[0vw] text-center text-white top-[231.794872vw] tracking-[0.011692vw]"
          data-node-id="21:222"
        >
          <span className="leading-[normal] text-[5.846154vw]">{` We `}</span>
          <span className="font-['Inter:Bold'] font-bold leading-[normal] text-[5.846154vw]">
            Zenith Studio
          </span>
          <span className="leading-[normal] text-[5.846154vw]">{` is a design and development studio that transforms ideas into powerful digital experiences. By blending `}</span>
          <span className="font-['Inter:Bold'] font-bold leading-[normal] text-[5.846154vw]">
            creativity with technology,
          </span>
          <span className="leading-[normal] text-[5.846154vw]">{` we create products that are not only visually compelling but also functional, scalable, `}</span>
          <span className="font-['Inter:Bold'] font-bold leading-[normal] text-[5.846154vw]">
            and built to stand out
          </span>
        </p>
      </div>
      <div
        className="[word-break:break-word] absolute aspect-[755/49] contents font-compressed leading-[normal] left-[-14.871795vw] not-italic right-[-78.717949vw] top-[322.051282vw] whitespace-nowrap"
        data-node-id="21:223"
      >
        <p
          className="absolute left-[calc(50%-27.948718vw)] text-[#ffa100] text-[10.25641vw] top-[322.051282vw] tracking-[0.717949vw]"
          data-node-id="21:224"
        >
          What we do?
        </p>
        <p
          className="absolute left-[-14.871795vw] opacity-50 text-[#d4aa7d] text-[6.410256vw] top-[325.641026vw] tracking-[0.448718vw]"
          data-node-id="21:225"
        >
          What we do?
        </p>
        <p
          className="absolute left-[calc(50%+69.74359vw)] opacity-50 text-[#d4aa7d] text-[10.25641vw] top-[322.051282vw] tracking-[0.717949vw]"
          data-node-id="21:226"
        >
          What we do ?
        </p>
        <p
          className="absolute opacity-25 right-[20.25641vw] text-[#d4aa7d] text-[7.358974vw] top-[324.871795vw] tracking-[0.515128vw] translate-x-full"
          data-node-id="21:227"
        >
          What we do ?
        </p>
      </div>
      <div
        className="absolute contents left-[4.358974vw] right-[2.820513vw] top-[348.974359vw]"
        data-node-id="21:229"
      >
        <div
          className="absolute flex h-[0.078974vw] items-center justify-center right-[3.589744vw] top-[410.512821vw] w-[51.282051vw]"
          data-node-id="21:230"
        >
          <div className="flex-none rotate-[-0.09deg]">
            <div className="h-0 relative w-[51.282051vw]">
              <div className="absolute inset-[-0.384615vw_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine1} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute h-0 right-[3.589744vw] top-[398.974359vw] w-[51.282051vw]"
          data-node-id="21:231"
        >
          <div className="absolute inset-[-0.384615vw_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine2} />
          </div>
        </div>
        <div
          className="absolute flex h-[0.078974vw] items-center justify-center right-[3.589744vw] top-[386.725641vw] w-[51.282051vw]"
          data-node-id="21:232"
        >
          <div className="flex-none rotate-[-0.09deg]">
            <div className="h-0 relative w-[51.282051vw]">
              <div className="absolute inset-[-0.192308vw_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine3} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute h-0 right-[3.589744vw] top-[375.384615vw] w-[51.282051vw]"
          data-node-id="21:233"
        >
          <div className="absolute inset-[-0.384615vw_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine2} />
          </div>
        </div>
        <div
          className="absolute flex h-[0.078974vw] items-center justify-center right-[3.589744vw] top-[364.102564vw] w-[51.282051vw]"
          data-node-id="21:234"
        >
          <div className="flex-none rotate-[-0.09deg]">
            <div className="h-0 relative w-[51.282051vw]">
              <div className="absolute inset-[-0.384615vw_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine1} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute h-0 right-[3.589744vw] top-[352.564103vw] w-[51.282051vw]"
          data-node-id="21:235"
        >
          <div className="absolute inset-[-0.384615vw_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine2} />
          </div>
        </div>
        <p
          className={`mobile-service-title [word-break:break-word] absolute font-['Poppins:SemiBold'] leading-[normal] not-italic right-[53.076923vw] text-[4.358974vw] whitespace-nowrap top-[401.538462vw] translate-x-full ${activeService === "support" ? "active" : ""}`}
          onClick={() => setActiveService("support")}
          data-node-id="21:236"
        >Support &amp; Maintenance</p>
        <p
          className={`mobile-service-title [word-break:break-word] absolute font-['Poppins:SemiBold'] leading-[normal] not-italic right-[53.076923vw] text-[4.358974vw] whitespace-nowrap top-[377.948718vw] translate-x-full ${activeService === "landing" ? "active" : ""}`}
          onClick={() => setActiveService("landing")}
          data-node-id="21:237"
        >Landing Pages</p>
        <p
          className={`mobile-service-title [word-break:break-word] absolute font-['Poppins:SemiBold'] leading-[normal] not-italic right-[53.076923vw] text-[4.358974vw] whitespace-nowrap top-[390vw] translate-x-full ${activeService === "brand" ? "active" : ""}`}
          onClick={() => setActiveService("brand")}
          data-node-id="21:238"
        >Brand Design &amp; Mockup</p>
        <p
          className={`mobile-service-title [word-break:break-word] absolute font-['Poppins:SemiBold'] leading-[normal] not-italic left-[46.923077vw] text-[4.358974vw] whitespace-nowrap top-[356.153846vw] ${activeService === "uiux" ? "active" : ""}`}
          onClick={() => setActiveService("uiux")}
          data-node-id="21:239"
        >UI/UX Design</p>
        <p
          className={`mobile-service-title [word-break:break-word] absolute font-['Poppins:SemiBold'] leading-[normal] not-italic right-[53.589744vw] text-[4.102564vw] whitespace-nowrap top-[367.435897vw] translate-x-full ${activeService === "fullstack" ? "active" : ""}`}
          onClick={() => setActiveService("fullstack")}
          data-node-id="21:240"
        >Full Stack Development</p>
      </div>
      <div
        className="absolute bg-[#323232] h-[65.128205vw] left-[4.358974vw] rounded-[6.410256vw] top-[348.974359vw] w-[39.74359vw]"
        data-node-id="21:241"
      >
        <p key={activeService} className="mobile-service-description">
          {serviceDescriptions[activeService]}
        </p>
      </div>
      <div
        className="[word-break:break-word] absolute aspect-[624/49] contents font-compressed leading-[normal] left-[6.410256vw] not-italic right-[-66.410256vw] top-[428.461538vw] whitespace-nowrap"
        data-node-id="21:242"
      >
        <p
          className="absolute left-[calc(50%-16.410256vw)] text-[#ffa100] text-[10.25641vw] top-[428.461538vw] tracking-[0.717949vw]"
          data-node-id="21:243"
        >
          Process
        </p>
        <p
          className="absolute left-[6.410256vw] opacity-50 text-[#d4aa7d] text-[6.410256vw] top-[431.794872vw] tracking-[0.448718vw]"
          data-node-id="21:244"
        >
          process
        </p>
        <p
          className="absolute left-[calc(50%+81.282051vw)] opacity-50 text-[#d4aa7d] text-[10.25641vw] top-[428.461538vw] tracking-[0.717949vw]"
          data-node-id="21:245"
        >
          process
        </p>
        <p
          className="absolute opacity-25 right-[25.897436vw] text-[#d4aa7d] text-[7.358974vw] top-[431.025641vw] tracking-[0.515128vw] translate-x-full"
          data-node-id="21:246"
        >
          process
        </p>
      </div>
      <div
        className="absolute contents left-[1.538462vw] right-[1.025641vw] top-[455.384615vw]"
        data-node-id="21:248"
      >
        <p
          className="[word-break:break-word] absolute font-helvetica-bold leading-[normal] left-[7.435897vw] not-italic text-[#d4aa7d] text-[6.410256vw] top-[483.589744vw] tracking-[-0.128205vw] whitespace-nowrap"
          data-node-id="21:249"
        >{`Understand `}</p>
        <p
          className="[word-break:break-word] absolute font-helvetica-bold leading-[normal] left-[64.615385vw] not-italic text-[#d4aa7d] text-[6.410256vw] top-[483.589744vw] tracking-[-0.128205vw] whitespace-nowrap"
          data-node-id="21:250"
        >
          Design
        </p>
        <p
          className="[word-break:break-word] absolute font-helvetica-bold leading-[normal] left-[15.384615vw] not-italic text-[#d4aa7d] text-[6.410256vw] top-[547.692308vw] tracking-[-0.128205vw] whitespace-nowrap"
          data-node-id="21:251"
        >
          Build
        </p>
        <p
          className="[word-break:break-word] absolute font-helvetica-bold leading-[normal] not-italic right-[36.923077vw] text-[#d4aa7d] text-[6.410256vw] top-[547.692308vw] tracking-[-0.128205vw] translate-x-full whitespace-nowrap"
          data-node-id="21:252"
        >
          Launch
        </p>
        <p
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[24.871795vw] not-italic text-[5.641026vw] text-center text-white top-[491.025641vw] tracking-[0.01241vw] w-[38.461538vw]"
          data-node-id="21:253"
        >
          Understanding your goals and vision.
        </p>
        <p
          className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] not-italic right-[26.153846vw] text-[5.641026vw] text-center text-white top-[491.025641vw] tracking-[0.011282vw] translate-x-1/2 w-[45.128205vw]"
          data-node-id="21:254"
        >
          Designing clean, purposeful interfaces.
        </p>
        <p
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular'] font-normal h-[22.820513vw] leading-[normal] left-[26.410256vw] not-italic text-[5.641026vw] text-center text-white top-[555.128205vw] tracking-[0.011282vw] w-[49.74359vw]"
          data-node-id="21:255"
        >
          Building scalable, functional products.
        </p>
        <div
          className="absolute right-[12.820513vw] size-[25.641026vw] top-[520vw]"
          data-node-id="21:256"
          data-name="image 4"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgImage4}
          />
        </div>
        <div
          className="absolute left-[11.282051vw] size-[25.641026vw] top-[455.384615vw]"
          data-node-id="21:257"
          data-name="image 1"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgImage1}
          />
        </div>
        <div
          className="absolute right-[12.051282vw] size-[25.641026vw] top-[455.384615vw]"
          data-node-id="21:258"
          data-name="image 2"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgImage2}
          />
        </div>
        <div
          className="absolute left-[11.282051vw] size-[25.641026vw] top-[520vw]"
          data-node-id="21:259"
          data-name="image 3"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgImage3}
          />
        </div>
        <p
          className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal h-[13.589744vw] leading-[normal] not-italic right-[25.897436vw] text-[5.641026vw] text-center text-white top-[555.128205vw] tracking-[0.011282vw] translate-x-1/2 w-[49.74359vw]"
          data-node-id="21:260"
        >{`Launching with performance & precision.`}</p>
      </div>
      <div
        className="absolute contents left-[-6.923077vw] top-[588.461538vw]"
        data-node-id="21:261"
      >
        <p
          className="[word-break:break-word] absolute font-compressed leading-[normal] left-[calc(50%-22.820513vw)] not-italic text-[#ffa100] text-[10.25641vw] top-[588.461538vw] tracking-[0.717949vw] whitespace-nowrap"
          data-node-id="21:262"
        >
          Our work !
        </p>
        <div
          className="absolute bg-[#323232] blur-[2.564103vw] border border-black border-solid bottom-[136.923077vw] h-[41.538462vw] right-[-6.923077vw] rounded-[10.25641vw] w-[30.769231vw]"
          data-node-id="21:263"
        />
        <div
          className="absolute bg-[#323232] blur-[2.564103vw] border border-black border-solid h-[41.282051vw] left-[-6.923077vw] rounded-[10.25641vw] top-[617.948718vw] w-[30.769231vw]"
          data-node-id="21:264"
        />
        <div
          className="absolute bg-[#323232] blur-[1.282051vw] border border-black border-solid h-[51.794872vw] right-[11.538462vw] rounded-[10.25641vw] top-[612.820513vw] w-[38.461538vw]"
          data-node-id="21:265"
        />
        <div
          className="absolute bg-[#323232] blur-[1.282051vw] border border-black border-solid h-[51.794872vw] left-[11.538462vw] rounded-[10.25641vw] top-[612.820513vw] w-[38.461538vw]"
          data-node-id="21:266"
        />
        <div
          className="absolute aspect-[428/575] bg-[#323232] border border-black border-solid left-[28.205128vw] right-[28.205128vw] rounded-[10.25641vw] top-[609.487179vw]"
          data-node-id="21:267"
        />
      </div>
      <div
        className="absolute contents left-[1.538462vw] right-[-1.025641vw] top-[689.487179vw]"
        data-node-id="21:268"
      >
        <div
          className="[word-break:break-word] absolute font-helvetica-bold leading-[0] left-[1.538462vw] not-italic right-[-1.025641vw] text-[8.974359vw] text-white top-[689.487179vw] tracking-[0.089744vw] whitespace-nowrap"
          data-node-id="21:269"
        >
          <p className="mb-0 whitespace-pre">
            <span className="leading-[12.820513vw]">{`Elevate your `}</span>
            <span className="leading-[12.820513vw] text-[#d4aa7d]">business</span>
            <span className="leading-[12.820513vw]">{` `}</span>
          </p>
          <p className="mb-0 whitespace-pre">
            <span className="leading-[12.820513vw]">{`to its `}</span>
            <span className="leading-[12.820513vw] text-[#d4aa7d]">peak</span>
          </p>
          <p className="whitespace-pre">
            <span className="leading-[12.820513vw]">{`with `}</span>
            <span className="leading-[12.820513vw] text-[#d4aa7d]">us</span>
            <span className="leading-[12.820513vw]">.</span>
          </p>
        </div>
        <a
          aria-label="Get started"
          className="absolute flex items-center justify-center bg-[#d4aa7d] bottom-[68.205128vw] h-[7.692308vw] right-[5.641026vw] rounded-[25.641026vw] w-[24.102564vw] no-underline"
          data-node-id="21:270"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfV-AyYNGR29Yfb5kv_t_ZDzbvUrvuUv3F-395QJAGsIswy4Q/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-helvetica-bold text-[3.846154vw] font-bold tracking-[0.076923vw] text-black">Get started</span>
        </a>
      </div>
      <div
        className="absolute contents left-0 right-[-52.564103vw] top-[746.410256vw]"
        data-node-id="21:272"
        id="contact"
      >
        <div
          className="absolute bottom-[7.692308vw] h-0 left-[1.282051vw] right-[3.074359vw]"
          data-node-id="21:277"
        >
          <div className="absolute inset-[-0.25641vw_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine7} />
          </div>
        </div>
        <p
          className="[word-break:break-word] absolute font-compressed leading-[normal] left-[1.025641vw] not-italic text-[#d4aa7d] text-[8.974359vw] top-[746.410256vw] tracking-[0.628205vw] whitespace-nowrap"
          data-node-id="21:278"
        >
          Contact
        </p>
        <p
          className="[word-break:break-word] absolute bottom-[38.205128vw] font-['Poppins:Regular'] h-[29.230769vw] leading-[normal] left-[1.282051vw] not-italic text-[3.846154vw] text-white translate-y-full w-[75.384615vw]"
          data-node-id="21:279"
        >
          Email : ram14112006@gmail.com
        </p>
        <div
          className="[word-break:break-word] absolute bottom-[39.74359vw] font-['Poppins:Regular'] leading-[0] left-0 not-italic right-[4.615385vw] text-[3.846154vw] text-right text-white translate-y-full"
          data-node-id="21:280"
        >
          <p className="mobile-social-link leading-[6.410256vw] mb-0"><a href="https://www.instagram.com/zenithstudios_/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
          <p className="mobile-social-link leading-[6.410256vw] mb-0">WhatsApp</p>
          <p className="mobile-social-link leading-[6.410256vw] mb-0">LinkedIn</p>
          <p className="mobile-social-link leading-[6.410256vw] mb-0">Facebook</p>
          <p className="mobile-social-link leading-[6.410256vw]">X</p>
        </div>
        <a
          href="#terms"
          onClick={() => { window.location.hash = "terms" }}
          className="absolute bottom-[6.405128vw] z-20 left-[55vw] font-['Poppins:Regular'] text-[2.564103vw] text-white translate-y-full whitespace-nowrap no-underline"
        >Terms of service</a>
        <a
          href="#privacy"
          onClick={() => { window.location.hash = "privacy" }}
          className="absolute bottom-[6.405128vw] z-20 right-[20.769231vw] font-['Poppins:Regular'] text-[2.564103vw] text-white translate-x-full translate-y-full whitespace-nowrap no-underline"
        >Privacy policy</a>
      </div>
    </div>
  );
}
