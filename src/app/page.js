"use client";
import Image from "next/image";
import Navbar from "./components/navbar";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import logo from "../../public/logo.png";
import about from "../../public/about.png";
import TabButton from "./components/TabButton";
import React, { useTransition, useState } from "react";
import card from "../../public/cardone.png";
import cardtwo from "../../public/cardtwo.png";
import cardthree from "../../public/cardthree.png";
import github from "../../public/github.svg";
import linkind from "../../public/linkedin.svg";
import telegram from "../../public/telegram.webp";

export default function Home() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-">
          <li>Node.js</li>
          <li>React Js</li>
          <li>Next Js</li>
          <li>Redux</li>
          <li>Redux Toolkit</li>
          <li>JavaScript ES6</li>
          <li>Rest API</li>
          <li>Tailwind</li>
          <li>Git</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Binar Academy</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>Binar Academy</li>
        </ul>
      ),
    },
  ];

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const menu = [
    {
      id: 1,
      image: card,
      nameproject: "Admin Restaurant",
      Framework: "React",
      Library: "Redux toolkit, Axios, React Chart, PrimeReact,Slider Js",
      UI: "Tailwind,Css",
      BoilerPlate: "Vite",
      Deploy: "Vercel",
      github: "https://github.com/Nurfaizzi/Admin-Resto",
      Email: "mudo",
      password: "test123",
      Links: "https://admin-resto.vercel.app/",
    },
    {
      id: 2,
      image: cardtwo,
      nameproject: "Admin Rent Car",
      Framework: "React",
      Library: "Redux toolkit, Axios,Moment,React-pdf-viewer",
      UI: "Tailwind,Css,Chakra Ui, React Chart,React Date Picker,Sweet Alert",
      BoilerPlate: "Vite ",
      Deploy: "Vercel",
      Links:
        "https://admin-23001028-14-kelompok-4-binar-car-rental-platinum.vercel.app/",
      github: "https://github.com/Nurfaizzi/admin-cars",
      Email: "admin@bcr.io",
      password: "123456",
    },
    {
      id: 3,
      image: cardthree,
      nameproject: "Costumer Rent Car",
      Framework: "React",
      Library: "Redux toolkit, Axios,Moment,React-pdf-viewer",
      UI: "Tailwind,Css,Chakra Ui, React Chart,React Date Picker,Sweet Alert",
      BoilerPlate: "Vite ",
      Deploy: "Vercel",
      Links:
        "https://23001028-14-kelompok-4-binar-car-rental-platinum.vercel.app/",
      github:
        "https://github.com/Defriyhdr/23001028_14_Kelompok-4_Binar-Car-Rental-Platinum",
      Email: "costumer@bcr.io",
      password: "123456",
    },
  ];


  return (
    <div>
      <Navbar />
      <div className="bg-black pb-20 xl:pb-0 lg:pb-0 xl:px-0 ">
        <section className="lg:py-0 sm:py-16 md:py-0 bg-black xl:pl-0">
          <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="col-span-8 place-self-center text-center xl:pt-44 sm:pt-32 pt-20 md:text-left md:pl-8 lg:text-left md:justify-self-start  lg:justify-self-start"
            >
              <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
                <span className="text-cyan-400 bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                  Hello, I&apos;m{" "}
                </span>
                <br></br>
                <TypeAnimation
                  sequence={[
                    "Rasyid",
                    1000,
                    "Front-End",
                    1000,
                    "Web Developer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h1>
              <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                From Indonesian City Bogor
              </p>
              <div>
                <Link
                  href="/#contact"
                  className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4  from-primary-500 to-secondary-500 bg-orange-400 text-white"
                >
                  Hire Me
                </Link>
                <div className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
                  <a
                    href="https://me-qr.com/6b7AnjUk"
                    className="block bg-orange-400 rounded-full px-5 py-2"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </motion.div>
            <div

              className="col-span-4 place-self-center mt-4 lg:mt-0"
            >
              <div className=" w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] xl:pr-0 md:pr-8 sm:pr-8 relative">
                <Image
                  src={logo}
                  alt="hero image"
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 pt-14 md:pt-0 sm:top-40 xl:pt-56"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-black pb-20 xl:pb-0 lg:pb-0 xl:px-0 xl:pt-32 sm:pt-0  px-12 py-4 ">
        <section className="text-white " id="about">
          <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src={about} width={500} height={500} alt="" />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
              <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
              <p className="text-base lg:text-lg">
                I am Front End web developer with a passion for creating
                interactive and responsive web applications. I have experience
                working with JavaScript, React, Redux, Node.js, HTML, CSS, and
                Git. I am a quick learner and I am alwayslooking to expand my
                knowledge and skill set. I am a team player and I am excited to
                work with others to create amazing applications. And I am
                Graduation Form Bootcamp Binar Academy
              </p>
              <div className="flex flex-row justify-start mt-8">
                <TabButton
                  selectTab={() => handleTabChange("skills")}
                  active={tab === "skills"}
                >
                  {" "}
                  Skills{" "}
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("education")}
                  active={tab === "education"}
                >
                  {" "}
                  Education{" "}
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("certifications")}
                  active={tab === "certifications"}
                >
                  {" "}
                  Certifications{" "}
                </TabButton>
              </div>
              <div className=" ">
                {TAB_DATA.find((t) => t.id === tab).content}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <h1
          className="text-white bg-black flex mx-auto items-center justify-center xl:pt-32 text-4xl font-bold"
          id="project"
        >
          My Project
        </h1>
        <div className="bg-black  xl:pb-0 lg:pb-0 xl:px-0 pt-8 flex mx-auto items-center justify-center">
          <div>
            <div className="grid gap-8 pl-8  m-auto p-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 border-blue-500 items-center justify-center ">
              {menu.map((obj, key) => (
                <div key={key}>
                  <div className="max-w-xl bg-white border border-gray-200 rounded-2xl shadow  items-center justify-center ">
                    <a >
                      <Image
                        className=" object-fill  h-48 hover:scale-125"
                        src={obj.image}
                        alt=""
                      />
                    </a>
                    <div className="p-5">
                      <a href="#">
                        <h5 className="m-auto text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {obj.nameproject}
                        </h5>
                      </a>
                    </div>
                    <div className="flex-column  ">
                      <p className="text-sm font-semibold flex  m-auto text-center justify-center ">
                        Framework : {obj.Framework}
                      </p>
                      <p className="text-sm font-semibold flex pt-3  m-auto text-center justify-center  ">
                        {" "}
                        Library : {obj.Library}
                      </p>
                      <div className="flex-column m-auto text-center justify-center text-sm font-semibold pt-3 gap-8">
                        <div>
                          <p>BoilerPlate : {obj.BoilerPlate}</p>
                        </div>
                        <p>Deployment : {obj.Deploy}</p>
                      </div>
                      <div className="flex-column m-auto text-center justify-center text-sm font-semibold pt-3 gap-8">
                        <p>Authentication</p>
                        <a href={obj.github}>Github</a>
                      </div>

                      <div className="flex m-auto text-center justify-center gap-4 pt-3">
                        <div>
                          <a href={obj.Links}>Live Server</a>
                        </div>
                        <div>
                          <a href={obj.github}>Github</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1
          className="text-white bg-black flex mx-auto items-center justify-center pt-16 text-4xl font-bold"
          id="contact"
        >
          Contact Me
        </h1>
        <div className="bg-black pb-20 xl:pb-0 lg:pb-0 xl:px-0 xl:pt-8 xl:pl-8 xl:pr-8 sm:pt-0  px-12 py-4 ">
          <section className="text-white " id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center xl:gap-16 sm:pb-16 sm:pt-8 xl:pt-8 ">
              <div className="flex-column">
                <p>
                  {" "}
                  I&apos;m currently looking for new opportunities, my inbox is
                  always open. Whether you have a question or just want to say
                  hi, I&apos;ll try my best to get back to you!
                </p>
                <div className="flex gap-3 pt-6 ">
                  <a href="https://www.linkedin.com/in/nurfaizzi-rasyid-b518aa23b/">
                    <Image src={linkind} alt="" />
                  </a>
                  <a href="https://github.com/Nurfaizzi">
                    <Image src={github} alt="" />
                  </a>
                  <a href="https://t.me/NurfaizziRasyid">
                    <Image src={telegram} alt="" width={45} />
                  </a>
                </div>
              </div>
              <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h1>
                  If you have any questions about me or my projects, I'm
                  available to grab a coffee and chat! Drop a comment, question,
                  concern, and thanks for stopping by! Straight shot to my
                  inbox: ocitbmc@gmail.com
                </h1>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
