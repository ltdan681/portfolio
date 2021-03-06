import React, { useState, useEffect } from 'react'
import "../style/about.css"
import SectionTitle from '../comps/SectionTitle'
import profPic from "../images/prof-pic.jpg"

import { Icon } from '@iconify/react';
import githubIcon from '@iconify/icons-cib/github';
import downloadStudy from '@iconify/icons-carbon/download-study'
import logos from "../data/tech-logos.js"
import ouSeal from '../images/ou-seal.png'
import fccLogo from '../images/fcc-logo.png'

export default function About() {

  const [margin, setMargin] = useState("0px")
  const [position, setPosition] = useState("-150%")

  useEffect(() => {
      window.addEventListener("scroll", handleAbout)
  })

  function handleAbout() {
    const threshold = document.getElementById("about").offsetTop - 500
    const aboutSection = document.querySelectorAll(".about-section")
    const invisible = document.querySelectorAll(".invisible")
    if (window.pageYOffset >= threshold) {
      setPosition("0%")
      setTimeout(() => {
        setMargin("10px")
        aboutSection.forEach(sec => {
          sec.classList.add("border-radius")
        })
        invisible.forEach((el, i) => {
          setTimeout(() => {
            el.classList.add("visible")
          }, 100 * i)
        })
      }, 700)
    }
  }

  const techLogos = logos.map(logo => {
    return (
      <div className="invisible icon-container">
        <p className="icon-title">{logo.id}</p>
        <Icon
          icon={logo.logo}
          className="icons"
        />
      </div>
    )
  })

  return(
    <div class="container" id="about">
      <div
        className="grid-container"
        id="about-container"
        style={{gridGap: margin}}
        >

        <div
          id="pic-container"
          className="about-section"
          style={{left: position}}
          >
          <img src={profPic} alt="Dan Morgan, creator of this page, wearing a striped button up infront of a brick wall" id="prof-pic" className="about-section invisible"></img>
        </div>

        <div
          id="bio"
          className="about-section"
          style={{top: position}}
          >
            <div className="invisible"
              id="about-me"
              >
              <SectionTitle
                text="About Me"
                id="about-section-title"
              />
            </div>
          <div className="invisible about-content">
            <p>I'm a self taught JavaScript Developer living in Cincinnati, Ohio. I have a passion for clean, responsive design and an appetite for efficiency. I'm always open to collaborate so lets <a id="connect" href="#contact">connect!</a> </p>
          </div>
          <div className="button-section invisible">
              <a
                href="https://www.github.com/ltdan681"
                // target="_blank"
                className="icon-anchor"
                id="github-anchor"
              >
                <h4>View my Github</h4>
                <Icon
                  icon={githubIcon}
                  id="github-icon"
                  class="invisible icon-link"
                />
              </a>
              <a
                href=""
                target="_blank"
                className="icon-anchor"
                id="resume-anchor"
                download>
                <h4>Download my Resume</h4>
                <Icon
                  icon={downloadStudy}
                  class="invisible icon-link"
                />
              </a>
          </div>
        </div>

        <div
          className="about-section"
          id="tech"
          style={{bottom: position}}
        >
          {techLogos}
        </div>

        <div
          className="about-section"
          id="education"
          style={{right: position}}
          >
            <h3 className="head-title invisible">Education</h3>
            <div className="ed-content-container">
              <img id="ouSeal"
                className="invisible ed-logo"
                alt="Ohio University Seal" src={ouSeal}
              />

                <div className="ed-content invisible">
                  <p className="ed-title"> Ohio University</p>
                  <p>Bachelor of Arts in Physics</p>
                </div>
            </div>
            <div className="ed-content-container">
                <img id="fcc-logo"
                  className="invisible ed-logo"
                  alt="Freecodecamp.org logo"
                  src={fccLogo}
                />
                <div className="ed-content invisible">
                  <p className="ed-title">Free Code Camp</p>
                  <ul>
                    <li>Responsive Web Design</li>
                    <li>JavaScript Algorithms & Data Structures</li>
                    <li>Front End Libraries </li>
                  </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
