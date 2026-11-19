import { useState } from "react";

const assetPathPrefix = "/assets";
const img0258DbeaB6D44F02B62B99B7E0Aa6D781 = `${assetPathPrefix}/6f371.png`;
const imgRectangle1 = `${assetPathPrefix}/ad5f3.png`;
const imgImage4 = `${assetPathPrefix}/7d2ac.png`;
const imgImage1 = `${assetPathPrefix}/b3043.png`;
const imgImage2 = `${assetPathPrefix}/3bcd8.png`;
const imgImage3 = `${assetPathPrefix}/7d9cd.png`;
const imgImagePhotoroom11 = `${assetPathPrefix}/d5617.png`;
const imgLine1 = `${assetPathPrefix}/3357b.svg`;
const imgLine7 = `${assetPathPrefix}/457fd.svg`;

export default function Desktop() {
  const [activeService, setActiveService] = useState<"uiux" | "fullstack" | "landing" | "brand" | "support">("uiux");

  const serviceDescriptions: Record<"uiux" | "fullstack" | "landing" | "brand" | "support", string> = {
    uiux: "We craft intuitive, visually striking UI/UX experiences that bring ideas to life. From seamless user journeys to thoughtfully designed interfaces, we blend creativity with functionality to build digital experiences that are engaging, effortless, and memorable.",
    fullstack: "We develop powerful, scalable, and responsive web applications, combining intuitive frontends with robust backend systems to bring your ideas to life.",
    landing: "We design high-impact landing pages that capture attention, communicate your message, and turn visitors into customers through compelling visuals and seamless user experiences.",
    brand: "We build distinctive brand identities through thoughtful visuals, creative direction, and realistic mockups that give your brand a consistent and memorable presence.",
    support: "We keep your digital presence running smoothly with reliable support, regular updates, performance optimization, and ongoing maintenance to ensure everything works flawlessly.",
  };

  const handleMouseEnter = (service: "uiux" | "fullstack" | "landing" | "brand" | "support") => {
    setActiveService(service);
  };

  const handleMouseLeave = () => {
    setActiveService("uiux");
  };

  return (
    <div id="top" className="site-canvas bg-[#151515] relative" data-node-id="1:210" data-name="Desktop">
      <div className="absolute flex h-[2084.137px] items-center justify-center right-[-647.59px] top-[-594.64px] w-[1842.716px]" data-node-id="1:211">
        <div className="-scale-y-100 flex-none">
          <div className="planet-rotation">
            <div className="h-[1161.973px] relative w-[1742.96px]" data-name="0258dbea-b6d4-4f02-b62b-99b7e0aa6d78 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img0258DbeaB6D44F02B62B99B7E0Aa6D781} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[96px] left-0 top-[19px] w-[250px]" data-node-id="1:212">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
      </div>
      <a href="#top" className="[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[880px] not-italic text-[25px] text-white top-[52px] whitespace-nowrap" data-node-id="1:213">
        Home
      </a>
      <a href="#about" className="[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[987px] not-italic text-[25px] text-white top-[52px] whitespace-nowrap" data-node-id="1:214">{`About us `}</a>
      <a href="#services" className="[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[1133px] not-italic text-[25px] text-white top-[52px] whitespace-nowrap" data-node-id="1:215">
        Services
      </a>
      <a href="#contact" aria-label="Contact" className="absolute bg-[#d4aa7d] h-[49px] right-[52px] rounded-[50px] top-[42px] w-[117px]" data-node-id="1:216" />
      <a href="#contact" className="[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[1277px] not-italic text-[25px] text-black top-[52px] whitespace-nowrap" data-node-id="1:217">
        Contact
      </a>
      <div className="absolute contents left-0 top-0" data-node-id="1:218" />
      <div className="[word-break:break-word] absolute contents font-['Inter:Bold'] font-bold leading-[normal] left-[34px] not-italic text-[120px] text-white top-[198px] whitespace-nowrap" data-node-id="1:224">
        <p className="absolute left-[34px] top-[198px]" data-node-id="1:225">
          DESIGN.
        </p>
        <p className="absolute left-[34px] top-[377px]" data-node-id="1:226">
          DEVELOP.
        </p>
        <p className="absolute left-[34px] top-[556px]" data-node-id="1:227">
          DELIVER.
        </p>
      </div>
      <div className="absolute contents right-[-263.4px] top-[210px]" data-node-id="1:228">
        <div className="absolute flex h-[366.062px] items-center justify-center right-[355px] top-[500px] translate-x-full w-[413.022px] overflow-visible" data-node-id="1:229">
          <div className="-rotate-40 flex-none desktop-hunger-window">
            <div className="desktop-hunger-track">
              <div className="desktop-hunger-copy">
                <p className="[word-break:break-word] font-['Arial_Narrow',Arial,sans-serif] font-stretch-condensed leading-[normal] not-italic relative text-[#151515] text-[70px] whitespace-nowrap">HUNGER TO GROW !</p>
                <p className="[word-break:break-word] font-['Arial_Narrow',Arial,sans-serif] font-stretch-condensed leading-[normal] not-italic relative text-[#151515] text-[70px] whitespace-nowrap">HUNGER TO GROW !</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#151515] h-[438px] left-[12px] right-[-2px] top-[756px]" data-node-id="1:233" />
      <div className="[word-break:break-word] absolute contents font-['Arial_Narrow',Arial,sans-serif] font-stretch-condensed leading-[normal] left-[29px] not-italic right-[15px] top-[839px] whitespace-nowrap" data-node-id="1:234">
        <p id="about" className="absolute left-[calc(50%-220px)] text-[#ffa100] text-[70px] top-[839px] tracking-[4.9px]" data-node-id="1:235">
          What are we ?
        </p>
        <p className="absolute left-[calc(50%+300px)] opacity-50 text-[#d4aa7d] text-[40px] top-[870px] tracking-[2.8px]" data-node-id="1:236">
          What are we ?
        </p>
        <p className="absolute left-[calc(50%-531px)] opacity-50 text-[#d4aa7d] text-[40px] top-[869px] tracking-[2.8px]" data-node-id="1:237">
          What are we ?
        </p>
        <p className="absolute left-[-50px] opacity-25 text-[#d4aa7d] text-[30px] top-[882px] tracking-[2.1px]" data-node-id="1:238">
          What are we ?
        </p>
        <p className="absolute opacity-25 right-[100px] text-[#d4aa7d] text-[30px] top-[882px] tracking-[2.1px] translate-x-full" data-node-id="1:239">
          What are we?
        </p>
      </div>
      <div className="absolute contents left-[180px] top-[1008px]" data-node-id="1:241">
        <div className="absolute bg-[#d4aa7d] h-[43px] left-[209px] top-[1100px] w-[477px]" data-node-id="1:242" />
        <div className="absolute bg-[#d4aa7d] h-[43px] left-[289px] top-[1009px] w-[245px]" data-node-id="1:243" />
        <div className="absolute bg-[#d4aa7d] h-[43px] left-[609px] top-[1183px] w-[229px]" data-node-id="1:244" />
        <div className="absolute bg-[#d4aa7d] h-[43px] right-[176px] top-[1142px] w-[174px]" data-node-id="1:245" />
        <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal h-[231px] leading-[0] not-italic right-[718.5px] text-[36px] text-center text-white top-[1008px] tracking-[0.072px] translate-x-1/2 w-[1083px]" data-node-id="1:246">
          <span className="leading-[normal]">{` We `}</span>
          <span className="font-['Inter:Bold'] font-bold leading-[normal]">Zenith Studio</span>
          <span className="leading-[normal]">{` is a design and development studio that transforms ideas into powerful digital experiences. By blending `}</span>
          <span className="font-['Inter:Bold'] font-bold leading-[normal]">creativity with technology,</span>
          <span className="leading-[normal]">{` we create products that are not only visually compelling but also functional, scalable, `}</span>
          <span className="font-['Inter:Bold'] font-bold leading-[normal]">and built to stand out</span>
        </p>
      </div>
      <div className="[word-break:break-word] absolute contents font-['Arial_Narrow',Arial,sans-serif] font-stretch-condensed leading-[normal] left-[52px] not-italic right-[48px] top-[1322px] whitespace-nowrap" data-node-id="1:248">
        <p id="services" className="absolute left-[calc(50%-210px)] text-[#ffa100] text-[70px] top-[1322px] tracking-[4.9px]" data-node-id="1:249">
          What we do?
        </p>
        <p className="absolute left-[calc(50%-485px)] opacity-50 text-[#d4aa7d] text-[40px] top-[1352px] tracking-[2.8px]" data-node-id="1:250">
          What we do?
        </p>
        <p className="absolute left-[calc(50%+275px)] opacity-50 text-[#d4aa7d] text-[40px] top-[1348px] tracking-[2.8px]" data-node-id="1:251">
          What we do ?
        </p>
        <p className="absolute left-[10px] opacity-25 text-[#d4aa7d] text-[30px] top-[1356px] tracking-[2.1px]" data-node-id="1:252">
          What we do ?
        </p>
        <p className="absolute opacity-25 right-[162px] text-[#d4aa7d] text-[30px] top-[1356px] tracking-[2.1px] translate-x-full" data-node-id="1:253">
          What we do?
        </p>
      </div>
      <div className="absolute contents left-[57px] right-[54px] top-[1474px]" data-node-id="1:254">
        <div className="absolute h-0 right-[60px] top-[1487px] w-[649.001px]" data-node-id="1:255">
          <div className="absolute inset-[-1.5px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine1} />
          </div>
        </div>
        <div className="absolute h-0 right-[60px] top-[1589px] w-[649.001px]" data-node-id="1:256">
          <div className="absolute inset-[-1.5px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine1} />
          </div>
        </div>
        <div className="absolute h-0 right-[54px] top-[1691px] w-[649.001px]" data-node-id="1:257">
          <div className="absolute inset-[-1.5px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine1} />
          </div>
        </div>
        <div className="absolute h-0 right-[54px] top-[1793px] w-[649.001px]" data-node-id="1:258">
          <div className="absolute inset-[-1.5px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine1} />
          </div>
        </div>
        <div className="absolute h-0 right-[60px] top-[1895px] w-[649.001px]" data-node-id="1:259">
          <div className="absolute inset-[-1.5px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine1} />
          </div>
        </div>
        <div className="absolute h-0 right-[60px] top-[1997px] w-[649.001px]" data-node-id="1:260">
          <div className="absolute inset-[-1.5px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine1} />
          </div>
        </div>
        <p
          className={`service-title [word-break:break-word] absolute font-['Poppins:Bold'] leading-[normal] not-italic right-[698px] text-[50px] whitespace-nowrap top-[1909px] translate-x-full ${activeService === "support" ? "active" : ""}`}
          onMouseEnter={() => setActiveService("support")}
          onMouseLeave={() => setActiveService("uiux")}
          onClick={() => setActiveService("support")}
          data-node-id="1:261"
        >Support &amp; Maintenance</p>
        <p
          className={`service-title [word-break:break-word] absolute font-['Poppins:Bold'] leading-[normal] not-italic right-[698px] text-[50px] whitespace-nowrap top-[1707px] translate-x-full ${activeService === "landing" ? "active" : ""}`}
          onMouseEnter={() => setActiveService("landing")}
          onMouseLeave={() => setActiveService("uiux")}
          onClick={() => setActiveService("landing")}
          data-node-id="1:262"
        >Landing Pages</p>
        <p
          className={`service-title [word-break:break-word] absolute font-['Poppins:Bold'] leading-[normal] not-italic right-[698px] text-[50px] whitespace-nowrap top-[1808px] translate-x-full ${activeService === "brand" ? "active" : ""}`}
          onMouseEnter={() => setActiveService("brand")}
          onMouseLeave={() => setActiveService("uiux")}
          onClick={() => setActiveService("brand")}
          data-node-id="1:263"
        >Brand Design &amp; Mockup</p>
        <p
          className={`service-title [word-break:break-word] absolute font-['Poppins:Bold'] leading-[normal] not-italic left-[742px] text-[50px] whitespace-nowrap top-[1505px] ${activeService === "uiux" ? "active" : ""}`}
          onMouseEnter={() => setActiveService("uiux")}
          onMouseLeave={() => setActiveService("uiux")}
          onClick={() => setActiveService("uiux")}
          data-node-id="1:264"
        >UI/UX Design</p>
        <p
          className={`service-title [word-break:break-word] absolute font-['Poppins:Bold'] leading-[normal] not-italic left-[742px] text-[50px] whitespace-nowrap top-[1606px] ${activeService === "fullstack" ? "active" : ""}`}
          onMouseEnter={() => setActiveService("fullstack")}
          onMouseLeave={() => setActiveService("uiux")}
          onClick={() => setActiveService("fullstack")}
          data-node-id="1:265"
        >Full Stack Development</p>
        <div className="absolute bg-[#323232] h-[537px] left-[57px] rounded-[25px] top-[1474px] w-[650px]" data-node-id="1:266">
          <p
            key={activeService}
            className="service-description"
          >
            {serviceDescriptions[activeService]}
          </p>
        </div>
      </div>
      <div className="[word-break:break-word] absolute contents font-['Arial_Narrow',Arial,sans-serif] font-stretch-condensed leading-[normal] left-[111px] not-italic right-[64px] top-[2077px] whitespace-nowrap" data-node-id="1:267">
        <p className="absolute left-[calc(50%-97px)] text-[#ffa100] text-[70px] top-[2077px] tracking-[4.9px]" data-node-id="1:268">
          Process
        </p>
        <p className="absolute left-[calc(50%-370px)] opacity-50 text-[#d4aa7d] text-[40px] top-[2107px] tracking-[2.8px]" data-node-id="1:269">
          process
        </p>
        <p className="absolute left-[calc(50%+280px)] opacity-50 text-[#d4aa7d] text-[40px] top-[2107px] tracking-[2.8px]" data-node-id="1:270">
          process
        </p>
        <p className="absolute left-[111px] opacity-25 text-[#d4aa7d] text-[30px] top-[2116px] tracking-[2.1px]" data-node-id="1:271">
          process
        </p>
        <p className="absolute opacity-25 right-[167px] text-[#d4aa7d] text-[30px] top-[2116px] tracking-[2.1px] translate-x-full" data-node-id="1:272">
          process
        </p>
      </div>
      <div className="absolute contents right-[42px] top-[2247px]" data-node-id="1:273">
        <p className="[word-break:break-word] absolute font-[Arial,sans-serif] leading-[normal] left-[89px] not-italic text-[#d4aa7d] text-[60px] top-[2512px] tracking-[-1.2px] whitespace-nowrap" data-node-id="1:274">{`Understand `}</p>
        <p className="[word-break:break-word] absolute font-[Arial,sans-serif] leading-[normal] left-[496px] not-italic text-[#d4aa7d] text-[60px] top-[2515px] tracking-[-1.2px] whitespace-nowrap" data-node-id="1:275">
          Design
        </p>
        <p className="[word-break:break-word] absolute font-[Arial,sans-serif] leading-[normal] left-[841px] not-italic text-[#d4aa7d] text-[60px] top-[2514px] tracking-[-1.2px] whitespace-nowrap" data-node-id="1:276">
          Build
        </p>
        <p className="[word-break:break-word] absolute font-[Arial,sans-serif] leading-[normal] left-[1147px] not-italic text-[#d4aa7d] text-[60px] top-[2514px] tracking-[-1.2px] whitespace-nowrap" data-node-id="1:277">
          Launch
        </p>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[248px] not-italic text-[25px] text-center text-white top-[2595px] tracking-[0.055px] w-[256px]" data-node-id="1:278">
          Understanding your goals and vision.
        </p>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[586.5px] not-italic text-[25px] text-center text-white top-[2597px] tracking-[0.05px] w-[273px]" data-node-id="1:279">
          Designing clean, purposeful interfaces.
        </p>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular'] font-normal h-[89px] leading-[normal] left-[904px] not-italic text-[25px] text-center text-white top-[2603px] tracking-[0.05px] w-[238px]" data-node-id="1:280">
          Building scalable, functional products.
        </p>
        <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal h-[53px] leading-[normal] not-italic right-[199px] text-[25px] text-center text-white top-[2603px] tracking-[0.05px] translate-x-1/2 w-[314px]" data-node-id="1:281">{`Launching with performance & precision.`}</p>
        <div className="absolute right-[111px] size-[200px] top-[2267px]" data-node-id="1:282" data-name="image 4">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
        </div>
        <div className="absolute left-[127px] size-[200px] top-[2250px]" data-node-id="1:283" data-name="image 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
        </div>
        <div className="absolute left-[476px] size-[200px] top-[2267px]" data-node-id="1:284" data-name="image 2">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
        </div>
        <div className="absolute left-[784px] size-[240px] top-[2247px]" data-node-id="1:285" data-name="image 3">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
        </div>
      </div>
      <div className="absolute contents left-[38px] top-[4006px]" data-node-id="1:286">
        <a
          href="#terms"
          onClick={() => { window.location.hash = "terms" }}
          className="footer-link absolute z-[50] bottom-[50px] font-['Poppins:Regular'] h-[114px] leading-[normal] not-italic right-[199px] text-[20px] text-white translate-x-full translate-y-full w-[533px] no-underline"
          data-node-id="1:287"
        >
          Terms of service
        </a>
        <a
          href="#privacy"
          onClick={() => { window.location.hash = "privacy" }}
          className="footer-link absolute z-[50] bottom-[50px] font-['Poppins:Regular'] h-[114px] leading-[normal] not-italic right-[360px] text-[20px] text-white translate-x-full translate-y-full w-[533px] no-underline"
        >
          Privacy policy
        </a>
        <p className="[word-break:break-word] absolute bottom-[50px] font-['Poppins:Regular'] h-[114px] leading-[normal] not-italic left-[39px] text-[20px] text-white translate-y-full w-[590px]" data-node-id="1:289">
          © 2026 zenith studio / All Rights Recived
        </p>
        <p className="[word-break:break-word] absolute bottom-[50px] font-['Poppins:Regular'] h-[114px] leading-[normal] not-italic right-[466px] text-[20px] text-white translate-x-full translate-y-full w-[533px]" data-node-id="1:290">
          Cookies
        </p>
        <div className="absolute h-0 left-[38px] right-[39px] top-[4418px]" data-node-id="1:291">
          <div className="absolute inset-[-1.5px_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine7} />
          </div>
        </div>
        <p id="contact" className="[word-break:break-word] absolute font-['Arial_Narrow',Arial,sans-serif] font-stretch-condensed leading-[normal] left-[40px] not-italic text-[#d4aa7d] text-[70px] top-[4027px] tracking-[4.9px] whitespace-nowrap" data-node-id="1:292">
          Contact
        </p>
        <p className="[word-break:break-word] absolute bottom-[341px] font-['Poppins:Regular'] h-[114px] leading-[normal] left-[39px] not-italic text-[25px] text-white translate-y-full w-[590px]" data-node-id="1:293">
          Email : ram14112006@gmail.com
        </p>
        <div className="[word-break:break-word] absolute bottom-[344px] font-['Poppins:Regular'] leading-[0] not-italic right-[347px] text-[25px] text-right text-white translate-y-full w-[372px]" data-node-id="1:294">
          <p className="social-link leading-[45px] mb-0"><a href="https://www.instagram.com/zenithstudios_/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
          <p className="social-link leading-[45px] mb-0">WhatsApp</p>
          <p className="social-link leading-[45px] mb-0">LinkedIn</p>
          <p className="social-link leading-[45px] mb-0">Facebook</p>
          <p className="social-link leading-[45px]">X</p>
        </div>
        
        <div className="[word-break:break-word] absolute bottom-[344px] font-['Poppins:Regular'] leading-[0] not-italic right-[347px] text-[25px] text-right text-white translate-y-full w-[372px]" data-node-id="1:296">
          <p className="social-link leading-[45px] mb-0"><a href="https://www.instagram.com/zenithstudios_/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
          <p className="social-link leading-[45px] mb-0">WhatsApp</p>
          <p className="social-link leading-[45px] mb-0">LinkedIn</p>
          <p className="social-link leading-[45px] mb-0">Facebook</p>
          <p className="social-link leading-[45px]">X</p>
        </div>
        <div className="absolute z-0 left-[1014px] size-[532px] top-[4006px] pointer-events-none" data-node-id="1:295" data-name="image-Photoroom (1) 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePhotoroom11} />
        </div>
      </div>
      <div className="absolute contents left-[39px] top-[3627px]" data-node-id="1:297">
        <div className="[word-break:break-word] absolute font-[Arial,sans-serif] font-bold leading-[0] left-[39px] not-italic text-[70px] text-white top-[3627px] tracking-[1.4px] whitespace-nowrap" data-node-id="1:298">
          <p className="mb-0 whitespace-pre">
            <span className="leading-[100px]">{`Elevate your `}</span>
            <span className="leading-[100px] text-[#d4aa7d]">business</span>
            <span className="leading-[100px]">{` `}</span>
          </p>
          <p className="mb-0 whitespace-pre">
            <span className="leading-[100px]">{`to its `}</span>
            <span className="leading-[100px] text-[#d4aa7d] tracking-[0.32px]">peak</span>
          </p>
          <p className="whitespace-pre">
            <span className="leading-[100px]">{`with `}</span>
            <span className="leading-[100px] text-[#d4aa7d] tracking-[0.32px]">us</span>
            <span className="leading-[100px]">.</span>
          </p>
        </div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfV-AyYNGR29Yfb5kv_t_ZDzbvUrvuUv3F-395QJAGsIswy4Q/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" aria-label="Get started" className="absolute bg-[#d4aa7d] bottom-[572px] h-[76px] right-[52px] rounded-[100px] w-[237px]" data-node-id="1:299" />
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfV-AyYNGR29Yfb5kv_t_ZDzbvUrvuUv3F-395QJAGsIswy4Q/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="[word-break:break-word] absolute font-[Arial,sans-serif] font-bold leading-[100px] not-italic right-[268px] text-[35px] text-black top-[3840px] tracking-[0.7px] translate-x-full whitespace-nowrap" data-node-id="1:300">
          Get started
        </a>
      </div>
      <div className="absolute contents left-[104px] top-[2776px]" data-node-id="1:301">
        <p className="[word-break:break-word] absolute font-['Arial_Narrow',Arial,sans-serif] font-stretch-condensed leading-[normal] left-[581px] not-italic text-[#ffa100] text-[70px] top-[2776px] tracking-[4.9px] whitespace-nowrap" data-node-id="1:302">
          Our work !
        </p>
        <div className="absolute bg-[#323232] blur-[10px] border border-black border-solid h-[450px] right-[64px] rounded-[40px] top-[2991px] w-[335px]" data-node-id="1:303" />
        <div className="absolute bg-[#323232] blur-[10px] border border-black border-solid h-[450px] left-[104px] rounded-[40px] top-[2991px] w-[335px]" data-node-id="1:304" />
        <div className="absolute bg-[#323232] blur-[5px] border border-black border-solid h-[500px] left-[773px] rounded-[40px] top-[2966px] w-[372px]" data-node-id="1:305" />
        <div className="absolute bg-[#323232] blur-[5px] border border-black border-solid h-[500px] left-[279px] rounded-[40px] top-[2959px] w-[372px]" data-node-id="1:306" />
        <div className="absolute bg-[#323232] border border-black border-solid h-[575px] left-[508px] rounded-[40px] top-[2921px] w-[428px]" data-node-id="1:307" />
      </div>
    </div>
  );
}
