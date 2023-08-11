import { Component } from "react";
import ReactGA from "react-ga";

export class AboutValery extends Component {
  constructor() {
    super();
    this.screens = {};
    this.state = {
      screen: () => { },
      active_screen: "about", // by default 'about' screen is active
      navbar: false,
    };
  }

  componentDidMount() {
    this.screens = {
      about: <About />,
      history: <History />,
      education: <Education />,
      skills: <Skills />,
      projects: <Projects />,
      resume: <Resume />,
    };

    let lastVisitedScreen = localStorage.getItem("about-section");
    if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
      lastVisitedScreen = "about";
    }

    // focus last visited screen
    this.changeScreen(document.getElementById(lastVisitedScreen));
  }

  changeScreen = (e) => {
    const screen = e.id || e.target.id;

    // store this state
    localStorage.setItem("about-section", screen);

    // google analytics
    ReactGA.pageview(`/${screen}`);

    this.setState({
      screen: this.screens[screen],
      active_screen: screen,
    });
  };

  showNavBar = () => {
    this.setState({ navbar: !this.state.navbar });
  };

  renderNavLinks = () => {
    return (
      <>
        <div
          id="about"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "about"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="Valery Olshevsky"
            src="./themes/system/status/about.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
        </div>
        <div
          id="history"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "history"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="Valery Olshevsky"
            src="./themes/system/status/work-history.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Experience</span>
        </div>
        <div
          id="education"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "education"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="Valery's education"
            src="./themes/system/status/education.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
        </div>
        <div
          id="skills"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "skills"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="Valery' skills"
            src="./themes/system/status/skills.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
        </div>
        <div
          id="projects"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "projects"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="Valery' projects"
            src="./themes/system/status/projects.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
        </div>
        <div
          id="resume"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "resume"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="valery's resume"
            src="./themes/system/status/download.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
        </div>
      </>
    );
  };

  render() {
    return (
      <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
        <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
          {this.renderNavLinks()}
        </div>
        <div
          onClick={this.showNavBar}
          className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1"
        >
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className=" w-3.5 border-t border-white"
            style={{ marginTop: "2pt", marginBottom: "2pt" }}
          ></div>
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className={
              (this.state.navbar
                ? " visible animateShow z-30 "
                : " invisible ") +
              " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"
            }
          >
            {this.renderNavLinks()}
          </div>
        </div>
        <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
          {this.state.screen}
        </div>
      </div>
    );
  }
}

export default AboutValery;

export const displayAboutValery = () => {
  return <AboutValery />;
};

function About() {
  return (
    <>
      <div className="w-20 md:w-32 mt-4 bg-white rounded-full">
        <img
          className="w-full rounded-full"
          src="./images/logos/me.png"
          alt="Valery Olshevsky Logo"
        />
      </div>
      <div className=" mt-2 text-lg md:text-2xl text-center px-1">
        <div>
          My name is <span className="font-bold">Valery Olshevsky</span> ,
        </div>
        <div className="font-normal ml-1">
          I'm a{" "}
          <span className="text-pink-600 font-bold">
            Full Stack, Blockchain Developer!
          </span>
        </div>
      </div>
      <div className=" mt-4 relative md:my-4 pt-px bg-white w-32 md:w-48">
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
      </div>
      <ul className=" my-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
        <li className=" list-pc my-2 md:text-base">
          Detail oriented professional with great experience in{" "}
          <span className="font-medium">Web</span> and{" "}
          <span className="font-medium">Smart Contract</span> development.
        </li>
        <li className=" list-pc my-2 md:text-base">
          Experience in <span className="font-medium">Leading a Team</span> of
          front-end, back-end and smart contract developers.
        </li>
        <li className=" list-pc my-2 md:text-base">
          Developed <span className="font-medium">DeFi</span>,{" "}
          <span className="font-medium">NFT marketplace</span>,{" "}
          <span className="font-medium">Tokens</span> and many{" "}
          <span className="font-medium">web3</span> projects including{" "}
          <span className="font-medium">games</span> on Ethereum, Polygon,
          Binance Smart Chain and so on.
        </li>
        <li className=" list-pc my-2 md:text-base">
          Advanced knowledge of multiple programming languages, frameworks and
          several database structures.
        </li>
        <li className=" list-pc my-2 md:text-base">
          Great team player, effective communicator with strong knowledge
        </li>
        <li className=" list-pc my-2 md:text-base">
          Love 3C - Create, Challenge, Collaborate
        </li>
      </ul>
    </>
  );
}
function History() {
  const project_list = [
    {
      name: (
        <p>
          Blockchain Developer,{" "}
          <a
            className="border-b-2"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Adoriasoft
          </a>
        </p>
      ),
      date: "Nov 2019 - Jul 2021",
      link: "",
      description: [
        <p>
          Build Celsis network, a peer to peer lending network and a one stop solution for all crypto assets enable
          lending, borrowing and earning interest on deposited coins
        </p>,
        <p>
          Took part in making Aidonic, social fundraising and digital aid distribution technology for humanitarian
          aid and development programs.
        </p>,
        <p>
          Designed and implemented web applications along with 3rd-party software integrations as a web team liaison for all interdepartmental and customer-facing projects.
        </p>,
        <p>
          Build NFT marketplace & P2E games, add token bridge functionality and contributed to Web3 projects.
        </p>,
        <p>
          Lead a team of Frontend, Backend and Smart Contract developers based on the concept of “Let’s grow
          together"
        </p>,
        <p>
          Developed software that helped customers to simulate loans which increased the loans by 10%
        </p>,
      ],
    },
    {
      name: (
        <p>
          Full Stack Developer,{" "}
          <a
            className="border-b-2"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Chimplie
          </a>
        </p>
      ),
      date: "Jun 2019 - Feb 2022",
      link: "",
      description: [
        <p>
          Leaded the small agile team of 6 members while designed, developed and tested in-store order creation
          and management app using HTML, CSS, React, Javascript that meets accessibility and web browser
          standards for website.
        </p>,
        <p>
          Applied ECMA Script 6 features to build JSX elements and functions in React components.
        </p>,
        <p>
          Used React Hooks and Context API for effective state management in 60% of React projects.
        </p>,
        <p>
          Focused on improving SEO, increased searching priority.
        </p>,
      ],
    },
    {
      name: (
        <p>
          FullStack Developer,{" "}
          <a
            className="border-b-2"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            C3 Deperiential
          </a>
        </p>
      ),
      date: "May 2022",
      link: "",
      description: [
        <p>
          Developed interactive learning game Rest APIs using Django, covering subjects like numbers relations,
          puzzles, foundational meths, CS foundamentals and science foundations.
        </p>,
        <p>
          Oversaw the database design and management while managing deployment and required workflows.
        </p>,
        <p>
          Coding, Compiling, Unit testing, Integration, packaging and deployment of developed software.
        </p>,
        <p>
          Collaborate to form firm view of quality metrics and expectations for the delivery, and work with these
          throughout the sprint.
        </p>,
        <p>
          Work on POCs and cutting-edge features before they’re integrated into the product
        </p>,
      ],
    },
  ];

  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Work Experience
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>

      {project_list.map((project, index) => (
        <div className="flex w-full flex-col px-4" key={index}>
          <div className="w-full py-4 px-4 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5">
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex justify-center items-center">
                <div className=" text-base font-semibold md:text-lg mr-2">
                  {project.name}
                </div>
              </div>
              <div className="text-gray-300 font-light text-sm">
                {project.date}
              </div>
            </div>
            <ul className=" tracking-normal leading-tight text-sm font-light ml-6 mt-2">
              {project.description.map((desc, index) => (
                <li
                  key={index}
                  className="list-disc mt-1 text-gray-100 md:text-base"
                >
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
function Education() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Education
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
        <li className="list-disc">
          <div className=" text-lg md:text-xl text-left font-bold leading-tight">
            Taras Shevchenko University of Kyiv
          </div>
          <div className=" text-sm text-gray-400 mt-0.5">2016 - 2019, Computer Science</div>
          <div className=" text-sm md:text-base">Bachelor of Computer Science</div>
          <div className=" text-sm md:text-base text:bold">GPA &nbsp;&nbsp;&nbsp; 3.7/4.0</div>
        </li>
      </ul>
    </>
  );
}
function Skills() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Technical Skills
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
        <li className=" list-finger text-sm md:text-base mt-4 leading-tight tracking-tight">
          I am working as a full stack developer.
        </li>
        <li className=" list-finger text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            {" "}
            My areas of expertise are{" "}
            <strong className="text-ubt-gedit-orange">
              React, Next, Vue, Nuxt, Angular, Web3.js and Smart Contract, django, Java, dotnet, dotnet core etc
            </strong>{" "}
            development
          </div>
        </li>
        <li className=" list-finger text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>Here are my most frequently used</div>
        </li>
      </ul>
      <div className="w-full md:w-10/12 flex mt-4">
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Languages & Tools
        </div>
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Frameworks & Libraries
        </div>
      </div>
      <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className="m-1"
              src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A"
              alt="Valery javascript"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Typescript-3178c6?style=flat&logo=typescript&logoColor=ffffff"
              alt="Valery typescript"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Solidity-ffffff?style=flat&logo=solidity&logoColor=000000&labelColor=%000000"
              alt="Valery solidity"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white"
              alt="Valery c++"
            />
            <img
              className="m-1"
              src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff"
              alt="Valery python"
            />
            <img
              className="m-1"
              src="http://img.shields.io/badge/-Java-5676AB?style=flat&logo=Spring&logoColor=white"
              alt="Valery Java"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Rust-5676AB?style=flat&logo=Rust&logoColor=green"
              alt="Valery Rust"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white"
              alt="Valery dart"
            />
            <img
              src="https://img.shields.io/badge/-Sass-%23CC6699?style=flat&logo=sass&logoColor=ffffff"
              alt="Valery SASS"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff"
              alt="Valery git"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat&logo=firebase&logoColor=ffffff"
              alt="Valery firebase"
              className="m-1"
            />
          </div>
        </div>
        <div className="px-2 flex flex-wrap items-start w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className=" m-1"
              src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff"
              alt="Valery next"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff"
              alt="Valery react"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Angular-dd0031?style=flat&logo=angular&logoColor=ffffff"
              alt="Valery angular"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Django-bb5523?style=flat&logo=django&logoColor=green"
              alt="Valery django"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Spring-dd0031?style=flat&logo=spring&logoColor=ffffff"
              alt="Valery JavaSpring"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Dotnet-555555?style=flat&logo=dotnet&logoColor=22bb22"
              alt="Valery dotnet"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Golang-777722?style=flat&logo=go&logoColor=22bb22"
              alt="Valery golang"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Svelte-ff3e00?style=flat&logo=svelte&logoColor=ffffff"
              alt="Valery svelte"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Remix-00ccbb?style=flat&logo=remix&logoColor=000000"
              alt="Valery remix"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Web3JS-f16822?style=flat&logo=Web3.js&logoColor=ffffff"
              alt="Valery web3"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Hardhat-c5d11700?style=flat&logo=ethereum&logoColor=ffffff"
              alt="Valery hardhat"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/React Native-61DAFB?style=flat&logo=react&logoColor=white"
              alt="Valery react native"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Ionic-3880ff?style=flat&logo=ionic&logoColor=white"
              alt="Valery ionic framework"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white"
              alt="Valery flutter"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white"
              alt="Valery tailwind css"
            />
            <img
              src="https://img.shields.io/badge/-NodeJS-339933?style=flat&logo=Node.js&logoColor=ffffff"
              alt="Valery node.js"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/-ExpressJS-339933?style=flat&logo=Node.js&logoColor=ffffff"
              alt="Valery express.js"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white"
              alt="Valery jquery"
              className="m-1"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white"
              alt="Valery redux"
            />
          </div>
        </div>
      </div>
      <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
        <li className=" list-finger text-sm md:text-base mt-4 leading-tight tracking-tight">
          <span> And ofcourse,</span> <img className=" inline ml-1" src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="nikhil linux" /> <span>!</span>
        </li>
      </ul>
    </>
  );
}
function Projects() {
  const project_list = [
    {
      name: "Full Stack Development",
      link: "#",
      imgUrl: "./images/projects/Screenshot_4.png",
      description: [
        <p>
          Build this comprehensive tourism platform using PHP for back-end and HTML, CSS, JS for frontend
        </p>,
        <p>
          Introduced external search engine for tourism called "Amadeus" and the data about the users,
          corporate clients and individual clients are managed by a web service connected to the ERP.
        </p>,
        <p>Worked with PM/IM to keep on track with the project plan, timeline and billing</p>,
        <p>Led bi-weekly stand-up to ensure team worked effectively, using coaching strategies to increase efficiency by 10%</p>,
        <p>Worked with Quality Assurance to get new pages/products tested, and addressed any issues within 48 hours</p>,
      ],
      domains: [
        "HTML",
        "Javascript",
        "Laravel",
        "Git",
      ],
    },
    {
      name: "Full Stack Development",
      imgUrl: "./images/projects/Screenshot_5.png",
      link: "#",
      description: [
        <p>Lentz’en Chalet is a cabin situated in Luxembourg.</p>,
        <p>
          Its owners needed a website to promote it and encourage tourism to the cabin and they asked us to build it.
        </p>,
        <p>
          We developed the presentation site to feel just like the Chalet – warm, friendly and welcoming.
        </p>,
        <p>
          Plus, an online integrated booking sysytem built from scratch.
        </p>
      ],
      domains: [
        "UI/UX design",
        "Graphic design",
        "Laravel",
        "HTML5",
        "CSS3",
        "Javascript",
        "Git",
      ],
    },
    {
      name: "Full Stack Development",
      link: "#",
      imgUrl: "./images/projects/Screenshot_6.png",
      description: [
        <p>
          Created a new site to match the gorgeous setting of Tamarind Springs and wrote SEO optimized content to match the new look of the brand.
        </p>,
        <p>
          Built a booking tool on the site, so that visitors could make their reservations as easy as possible.
        </p>,
        <p>
          Built this website using Joomla for back-end and HTML, CSS, JavaScript for the front-end.
        </p>
      ],
      domains: [
        "React.js",
        "Joomla",
        "SCSS",
        "Git",
      ],
    },
    {
      name: "Full Stack Development",
      link: "#",
      imgUrl: "./images/projects/Screenshot_7.png",
      description: [
        <p>
          Food Service website made Next.js
        </p>,
        <p>
          Built a booking system on the site for customer-friendly service.
        </p>,
        <p>
          Use modern technologies like Gatsby.js, Next.js and deployed AWS.
        </p>
      ],
      domains: [
        "Next.js",
        "Gatsby.js",
        "AWS",
        "express",
        "Git",
        "Bootstrap",
      ],
    },
    {
      name: "Blockchain Development",
      link: "https://www.cryptoblades.io/",
      imgUrl: "./images/projects/project-29.png",
      description: [
        <p>
          CryptoBlades Kingdoms will have its own 5000x5000 grid map, with different kinds 
          of tiers of lands, where some will be randomly given to players, and others you 
          can buy according to your gameplay strategy, and others you have to raid, and own 
          that way.
        </p>
      ],
      domains: [
        "TailwindCSS",
        "NextJS",
        "MUI",
        "Web3.js",
        "ether.js",
        "ERC721",
        "NFT",
      ],
    },
    {
      name: "Game Development",
      link: "https://www.solanashuffle.com/",
      imgUrl: "./images/projects/project-20.webp",
      description: [
        <p>
          Web3 Casino Game. It have Jackpot, Tower, Coin-Flip games Shuffle is a competitive 
          PvP Jackpot game, where players place bets using NFTs or SOL to increase 
          their chances of winning. 
          Play. fire Hot rooms today.
        </p>
      ],
      domains: [
        "Go",
        "React",
        "TailwindCSS",
        "Rust",
        "Solana",
      ],
    },
    {
      name: "Blockchain Development",
      link: "#",
      imgUrl: "./images/projects/Screenshot_9.png",
      description: [
        <p>
          This is a 'Fit2Earn' ecosystem that aims to revolutionize sports & fitntess through blockchain development.
        </p>,
        <p>
          Sense4FIT App, a Fit2Earn app build on the Elrond blockchain with NFT based access
        </p>,
        <p>
          Integration with hardward, fitness apps and Maiar
        </p>,
        <p>
          NFT infrastructure consulting & Tokenomics
        </p>,
        <p>
          Smart contract & staking and Vesting platform, 10K NFT collection sold out in just 7 mins, Over 40K followers across social media
        </p>
      ],
      domains: [
        "Fit2Earn",
        "Web3.js",
        "ether.js",
        "Elrond Network",
        "ERC721",
      ],
    },
    {
      name: "Blockchain Development",
      imgUrl: "./images/projects/emirate.webp",
      link: "#",
      description: [
        <p>Dex platform from Pancakeswap</p>,
        <p>
          Forked Pancakeswap and extend functionality
        </p>,
        <p>
          Strong understanding of smart contract and their role in Dex development
        </p>,
        <p>
          Implement farming, staking, swap and betting with various tokens
        </p>
      ],
      domains: [
        "Next.js", "typescript", "scss", "firebase", "web3.js", "solidity", "hardhat", "tailwindcss"
      ],
    },
    {
      name: "Fullstack Development",
      imgUrl: "./images/projects/Screenshot_10.png",
      link: "#",
      description: [
        <p>Real Estate Site & powerful google map search</p>,
        <p>
          Integrated Chart.js into React project Graphical process
        </p>,
        <p>
          Using kafka, redis, elasticsearch to improve performance
        </p>,
        <p>
          Collaborate with marketing team, engineering team for user & SEO friendly UI and fast Backend
        </p>
      ],
      domains: [
        "React.js", "typescript", "scss", "Kafka", "elasticsearch", "redis", "chart.js", "MySQL", "Express", "MongoDB"
      ],
    },
  ];

  const tag_colors = {
    "react.js": "blue-300",
    typescript: "yellow-300",
    javascript: "yellow-300",
    firebase: "red-600",
    firestore: "red-500",
    "firebase auth": "red-400",
    "chrome-extension": "yellow-400",
    flutter: "blue-400",
    dart: "blue-500",
    "react-native": "purple-500",
    firebase: "red-300",
    html5: "pink-600",
    sass: "pink-400",
    scss: "pink-300",
    tensorflow: "yellow-600",
    django: "green-600",
    unity3D: "green-400",
    hardhat: "green-300",
    python: "green-200",
    "codeforces-api": "gray-300",
    tailwindcss: "blue-300",
    "next.js": "purple-600",
    "web3.js": "purple-300",
    metaverse: "blue-400",
    "play to earn": "blue-500",
    webgl: "blue-600",
    "binance smart chain": "yellow-300",
  };

  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Projects
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>

      {project_list.map((project, index) => (
        <div className="flex w-full flex-col px-4" key={index}>
          <div className="w-full flex flex-col gap-2 py-3 px-3 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 ">
            <a
              className="w-full cursor-pointer"
              href={project.link}
              rel="noreferrer"
            >
              <img
                src={project.imgUrl}
                className="rounded"
                alt={project.name}
              />
            </a>
            <div className="w-full">
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex justify-center items-center">
                  <div className=" text-base font-semibold md:text-lg mr-2">
                    {project.name}
                  </div>
                </div>
              </div>
              <ul className=" tracking-normal leading-tight text-sm font-light ml-6 mt-2">
                {project.description.map((desc, index) => (
                  <li
                    key={index}
                    className="list-disc mt-2 text-gray-100 md:text-base"
                  >
                    {desc}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-start justify-start text-xs py-4">
                {project.domains
                  ? project.domains.map((domain, index) => (
                    <span
                      key={index}
                      className={`px-1.5 py-0.5 w-max border border-${tag_colors[domain]} text-${tag_colors[domain]} m-1 rounded-full`}
                    >
                      {domain}
                    </span>
                  ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
function Resume() {
  return (
    <iframe
      className="h-full w-full"
      src="./files/resume.pdf"
      title="Valery Olshevsky resume"
      frameBorder="0"
    ></iframe>
  );
}
