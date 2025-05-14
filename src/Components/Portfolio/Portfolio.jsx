import { Component } from "react"
import { GiHamburgerMenu } from "react-icons/gi"

import gitHubLogo from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import bootstrap from "../../assets/bootstrap.svg"
import css from "../../assets/css.svg"
import express from "../../assets/express.svg"
import figma from "../../assets/figma.svg"
import html from "../../assets/html.svg"
import javascript from "../../assets/javascript.svg"
import mongodb from "../../assets/mongodb.svg"
import nodejs from "../../assets/nodejs.svg"
import python from "../../assets/python.svg"
import react from "../../assets/react.svg"
import sqlite from "../../assets/sqlite.svg"
import tailwindcss from "../../assets/tailwindcss.svg"
import vs from "../../assets/vs.svg"
import github2 from "../../assets/github2.svg"

const skills = [
  { id: 1, image: github2, name: "Github" },
  { id: 3, image: bootstrap, name: "bootstrap" },
  { id: 4, image: css, name: "css" },
  { id: 5, image: express, name: "express" },
  { id: 6, image: figma, name: "figam" },
  { id: 7, image: html, name: "html" },
  { id: 8, image: javascript, name: "javascript" },
  { id: 9, image: mongodb, name: "mongodb" },
  { id: 10, image: nodejs, name: "nodejs" },
  { id: 11, image: python, name: "python" },
  { id: 12, image: react, name: "react" },
  { id: 13, image: sqlite, name: "sqlite" },
  { id: 14, image: tailwindcss, name: "tailwindcss" },
  { id: 15, image: vs, name: "vs" },
]

const frontend = [
  { id: 1, name: "Html" },
  { id: 2, name: "CSS" },
  { id: 3, name: "BootStrap" },
  { id: 4, name: "Tailwind Css" },
  { id: 5, name: "JavaScript" },
  { id: 6, name: "React" },
  { id: 7, name: "Git" },
]
const backend = [
  { id: 1, name: "NodeJs" },
  { id: 2, name: "Express" },
  { id: 3, name: "Python" },
  { id: 4, name: "MongoDB" },
  { id: 5, name: "SQL" },
]

import casmart from "../../assets/casamart.png"
import plant_health_detection from "../../assets/plant_health_detection.png"
import nxt_watch from "../../assets/nxt_watch.png"
import jobby from "../../assets/jobby.png"
import nxt_trendz from "../../assets/nxt_trendz.png"
import netflix from "../../assets/netflix.png"
import resume_filter from "../../assets/resume_filter.png"
import gemini from "../../assets/gemini.png"
import text_to_image from "../../assets/text_to_image.png"
import todo from "../../assets/todo.png"
import object_detection from "../../assets/object_detection.png"
import weather_app from "../../assets/weather_app.png"
import professional_photo from "../../assets/professional_photo.png"

const projects = [
  {
    id: 1,
    name: "Casa Mart",
    image: casmart,
    link: "https://casa-mart-frontend.onrender.com",
  },
  {
    id: 2,
    name: "Plant Health Detection",
    image: plant_health_detection,
    link: "https://plant-helath-detection.vercel.app/",
  },
  {
    id: 3,
    name: "Nxt Watch",
    image: nxt_watch,
    link: "https://vj1999nxtwatch.ccbp.tech/login",
  },
  {
    id: 4,
    name: "Jobby App",
    image: jobby,
    link: "https://vj1999jobbyapp.ccbp.tech/login",
  },
  {
    id: 5,
    name: "NxtTrendz",
    image: nxt_trendz,
    link: "https://vj1999nxttrendz.ccbp.tech/login",
  },
  {
    id: 6,
    name: "NetFlix Clone",
    image: netflix,
    link: "https://comfy-basbousa-6fd022.netlify.app/",
  },
  {
    id: 7,
    name: "AI Resume Filter",
    image: resume_filter,
    link: "https://www.youtube.com/watch?v=9vyDi03Jw0E",
  },
  {
    id: 8,
    name: "Gemini 2.o (Chatbot)",
    image: gemini,
    link: "https://www.youtube.com/watch?v=epORKLuaOPc",
  },
  {
    id: 9,
    name: "Text to Image",
    image: text_to_image,
    link: "https://www.youtube.com/watch?v=CPBizm2lmb8&t=16s",
  },
  {
    id: 10,
    name: "TODO(Using Python Full Stack)",
    image: todo,
    link: "https://www.youtube.com/watch?v=afeLO8nVB_U",
  },
  {
    id: 11,
    name: "Object Detection",
    image: object_detection,
    link: "https://www.youtube.com/watch?v=bdTlk99IFGc",
  },
  {
    id: 12,
    name: "Weather App",
    image: weather_app,
    link: "https://www.youtube.com/watch?v=wwCTdToOauA",
  },
]

class Portfolio extends Component {
  state = { humbergur: false }

  hamburgerMenuClicked = () => {
    this.setState((pre) => ({ humbergur: !pre.humbergur }))
  }

  render() {
    return (
      <div className="w-full h-full">
        {/* Navbar */}
        <div
          id="Home"
          className="w-full h-1/4 p-3 md:h-32 flex flex-col justify-center items-center border-gray-200 border-solid border"
        >
          <div className="w-4/5 h-full flex justify-between items-center">
            <div className="flex w-1/3 gap-2 items-center">
              <div className="bg-black text-white rounded-3xl text-center p-4">
                P
              </div>
              <h4 className="text-base text-gray-700">Portfolio</h4>
            </div>
            <div className=" gap-4 items-center hidden md:flex">
              <a href="#Home" className="text-gray-500 hover:underline">
                Home
              </a>
              <a href="#Skills" className="text-gray-500 hover:underline ">
                Skills
              </a>
              <a href="#Projects" className="text-gray-500 hover:underline">
                Projects
              </a>
              <button
                type="button"
                className="bg-blue-500 rounded cursor-pointer border-none outline-none text-white p-2"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me
              </button>
            </div>
            <div className="md:hidden">
              <GiHamburgerMenu onClick={this.hamburgerMenuClicked} />
            </div>
          </div>
          {this.state.humbergur && (
            <div className="md:hidden flex flex-col gap-3 bg-blue-50 w-full justify-center items-center p-2">
              <a href="#Home" className="text-gray-500 hover:underline">
                Home
              </a>
              <a href="#Skills" className="text-gray-500 hover:underline">
                Skills
              </a>
              <a href="#Projects" className="text-gray-500 hover:underline">
                Projects
              </a>
              <button
                type="button"
                className="bg-blue-500 rounded cursor-pointer border-none outline-none text-white p-2"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me
              </button>
            </div>
          )}
        </div>
        {/* Main 100% Section */}
        <div className="w-full h-full flex flex-col justify-center items-center">
          {/* Hero Section */}
          <div className="w-4/5 md:w-4/5 flex flex-col md:flex md:flex-row gap-2">
            {/* Left Part Section */}
            <div className="bg-blue-200 w-full md:w-2/4 p-5 rounded-lg mt-3 space-y-4">
              <h1 className="flex flex-col">
                <i className="text-3xl">Hi I'm</i>{" "}
                <strong className="text-3xl ">Vijay Kanaparthi</strong>{" "}
              </h1>
              <p className="text-gray-500">
                A Full-Stack Developer passionate about building scalable and
                user-friendly web applications. With expertise in MERN stack,
                AI, UI/UX, and Data Structures & Algorithms, I transform ideas
                into digital experiences.
              </p>
              <button
                type="button"
                className="bg-black text-white p-3 rounded outline-none border-none mr-2"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1CUUGkIDMtc_je35mIgbwudMOOLltfUvB/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                View Resume
              </button>

              <button
                type="button"
                className="bg-white text-black p-3 rounded outline-none border-none"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me
              </button>
              <div className="flex gap-2">
                <a href="https://github.com/VijayKanaparthi/" target="_blank">
                  <img src={gitHubLogo} alt="Github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vijay-kanaparthi/"
                  target="_blank"
                >
                  <img src={linkedin} alt="Linkedin" />
                </a>
              </div>
            </div>
            {/* Right Part Section */}
            <div className="w-full md:w-2/4 rounded-lg mt-3 space-y-4">
              <img src={professional_photo} alt="" />
            </div>
          </div>
          {/* Skills Flow Section */}
          <div
            id="Skills"
            className="w-4/5 overflow-hidden border border-solid border-gray-200 mt-3 p-1 md:p-10 rounded-lg"
          >
            <div className="flex w-[200%] animate-scroll">
              {/* First set of skills */}
              {skills.map((each) => (
                <div key={each.id} className="w-20 h-20 flex-shrink-0 mx-4">
                  <img
                    src={each.image}
                    alt={each.name}
                    className="w-full h-full"
                  />
                </div>
              ))}
              {/* Duplicate for seamless scrolling */}
              {skills.map((each) => (
                <div
                  key={`dup-${each.id}`}
                  className="w-20 h-20 flex-shrink-0 mx-4"
                >
                  <img
                    src={each.image}
                    alt={each.name}
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* A Bit About Me Section */}
          <p className="text-center text-gray-400">About me</p>
          <h1 className="text-center font-semibold text-3xl md:text-5xl">
            Skills
          </h1>
          <div className="w-4/5 flex flex-col md:flex-row ">
            <div className="w-full md:w-2/4 bg-blue-200 flex flex-col flex-wrap p-5  rounded-2xl">
              <div className="">
                <h1 className="font-semibold mb-4 text-xl md:text-2xl">
                  Frontend
                </h1>
                <div className="flex gap-5 flex-wrap text-sm md:text-xl">
                  {frontend.map((each) => (
                    <div
                      key={each.id}
                      className="bg-blue-400 p-4 rounded-lg inline-block"
                    >
                      <h5>{each.name}</h5>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h1 className="font-semibold mt-4 mb-4 text-xl md:text-2xl">
                  Backend
                </h1>
                <div className="flex gap-6 flex-wrap text-sm md:text-xl">
                  {backend.map((each) => (
                    <div
                      key={each.id}
                      className="bg-blue-400 p-4 rounded-lg inline-block"
                    >
                      <h5>{each.name}</h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/4 bg-blue-200 p-5  rounded-2xl">
              <h1 className="font-bold mb-4 ">A Bit About Me</h1>
              <p>
                Hey there! 👋 I'm Vijay Kanaparthi, a Full-Stack Developer with
                a passion for building scalable, user-friendly web applications.
                My expertise spans across the MERN stack, AI, UI/UX, and Data
                Structures & Algorithms. I love transforming ideas into digital
                experiences that make an impact.
                <ul>
                  <li>
                    🔹 Tech Stack: React, Node.js, Express, MongoDB, Python,
                    Tailwind CSS, SQL
                  </li>
                  <li>
                    🔹 What I Do: Full-Stack Development, AI Integrations, UI/UX
                    Design
                  </li>
                  <li>
                    🔹 Projects: E-commerce platforms, AI-based applications,
                    Admin dashboards
                  </li>
                  <li>
                    🔹 Learning & Growth: Constantly exploring new technologies
                    to push boundaries
                  </li>
                </ul>
                I believe in problem-solving, innovation, and lifelong learning.
                Let’s build something amazing together! 🚀✨
              </p>
            </div>
          </div>
          {/* Project ShowCase Section */}
          <h1
            id="Projects"
            className="text-center font-semibold text-3xl md:text-5xl mt-3 mb-3"
          >
            Projects
          </h1>
          <div
            className="w-4/5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg mt-
"
          >
            <div className="flex w-full  p-5 flex-wrap gap-4  ">
              <h1 className="w-full font-semibold text-white">
                Completed Projects
              </h1>
              {projects.map((each) => (
                <a
                  key={each.id}
                  href={each.link} // Add the project link
                  target="_blank" // Opens in a new tab
                  rel="noopener noreferrer" // Security best practice
                  className="bg-white/10 backdrop-blur-md border border-white/20
 w-28 border-gray-500 bg-gray-100 p-3 rounded-lg cursor-pointer hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
                >
                  <img
                    src={each.image}
                    alt={each.name}
                    className="w-full h-auto rounded-md"
                  />
                  <h1 className="text-center mt-2 text-sm font-medium">
                    {each.name}
                  </h1>
                </a>
              ))}
            </div>
          </div>
          {/* Contact Us Section */}
          <h1 className="text-center font-semibold text-3xl md:text-5xl mt-3">
            Contact Me
          </h1>
          <section
            id="contact"
            class="p-6 bg-gray-100 text-center w-4/5 rounded-lg mt-4"
          >
            <h2 class="text-2xl font-bold mb-4">Contact Me</h2>

            <p class="mb-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:vijaymca2025@gmail.com" class="text-blue-500">
                vijaymca2025@gmail.com
              </a>
            </p>
            <p class="mb-2">
              <strong>Phone:</strong> 9884781858
            </p>
            <p class="mb-2">
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/vijay-kanaparthi/"
                target="_blank"
                class="text-blue-500"
              >
                Vijay Kanaparthi
              </a>
            </p>
            <p class="mb-2">
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/VijayKanaparthi"
                target="_blank"
                class="text-blue-500"
              >
                VijayKanaparthi
              </a>
            </p>

            <a
              href="https://drive.google.com/file/d/1CUUGkIDMtc_je35mIgbwudMOOLltfUvB/view?usp=sharing"
              target="_blank"
              download
              class="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Download My Resume
            </a>
          </section>

          {/* Footer Section */}
          <footer className="w-full bg-slate-8  bg-slate-800 text-white py-6 mt-10">
            <div className="w-4/5 mx-auto flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left">
                <h1 className="text-lg font-semibold">Vijay Kanaparthi</h1>
                <p className="text-sm text-gray-400">
                  Full-Stack Developer | MERN | AI | UI/UX | DSA
                </p>
              </div>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
                <a href="#" className="hover:text-gray-400">
                  Skills
                </a>
                <a href="#" className="hover:text-gray-400">
                  Projects
                </a>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </div>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href="https://github.com" target="_blank">
                  <img src={gitHubLogo} alt="GitHub" className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank">
                  <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="text-center text-gray-500 text-sm mt-4">
              © {new Date().getFullYear()} Vijay Kanaparthi. All Rights
              Reserved.
            </div>
          </footer>
        </div>
      </div>
    )
  }
}
export default Portfolio
