import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight, ArrowRight, Github, Linkedin, Menu, X,
  Sparkles, BriefcaseBusiness, GraduationCap,
  Terminal, Layers3, Globe2, ChevronLeft, ChevronRight
} from "lucide-react";
import { profile, projects, experience, skills, education, interests } from "./data";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
};

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div className="section-heading" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </motion.div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const projectTrack = useRef(null);
  const nav = ["About", "Projects", "Experience", "Skills", "Education"];
  const moveProjects = (direction) => {
    const next = Math.max(0, Math.min(projects.length - 1, activeProject + direction));
    setActiveProject(next);
    const track = projectTrack.current;
    if (track) {
      const card = track.querySelectorAll(".project-card")[next];
      card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
  };
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Om Khot home"><span>O</span><i>K</i></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {nav.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
        </nav>
        {/* <a className="nav-resume" href={profile.resume} target="_blank" rel="noreferrer">Resume <ArrowUpRight size={16}/></a> */}
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div className="availability" variants={reveal}><span className="pulse-dot"/> HELLO, I'M OM</motion.div>
            <motion.h1 variants={reveal}>Om <span>Khot</span></motion.h1>
            <motion.h3 variants={reveal}>Software Engineer <b>&</b> <em>Full-Stack Developer</em></motion.h3>
            <motion.div className="tiny-gradient" variants={reveal}/>
            <motion.p className="hero-description" variants={reveal}>{profile.tagline}</motion.p>
            <motion.div className="hero-actions" variants={reveal}>
              <a className="button button-primary" href="#projects">Explore Projects <ArrowRight size={18}/></a>
              <a className="button button-ghost" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> Connect on LinkedIn</a>
            </motion.div>
            <motion.div className="socials" variants={reveal}>
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={19}/> GitHub</a>
              <span/>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={19}/> LinkedIn</a>
            </motion.div>
          </motion.div>

          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .25 }}>
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
            <div className="portrait-frame">
              <img src={profile.photo} alt="Temporary portrait placeholder for Om Khot" />
              {/* <div className="portrait-caption">YOUR PHOTO HERE</div> */}
            </div>
            <div className="floating-chip chip-react"><span className="chip-symbol">⚛</span> React.js</div>
            <div className="floating-chip chip-js"><span className="js-mark">JS</span> JavaScript</div>
            <div className="floating-chip chip-ui"><span className="code-mark">&lt;/&gt;</span> UI Engineering</div>
          </motion.div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about"><span/> <ArrowUpRight size={16}/></a>
        </section>

        <section className="section-wrap about-section" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Curious by nature. <span>Builder by choice.</span></>} />
          <div className="about-grid">
            <motion.div className="about-text glass-card" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p>{profile.about}</p>
              <p>I am particularly interested in backend engineering, distributed systems and full-stack product development, while continuing to build strong foundations in computer science.</p>
              <div className="about-meta"><span><GraduationCap size={17}/> IIT Hyderabad</span><span><Globe2 size={17}/> India</span></div>
            </motion.div>
            <div className="interest-panel">
              <div className="interest-title"><Sparkles size={18}/> Beyond the code</div>
              {interests.map((interest, i) => <motion.div className="interest-item" key={interest} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * .08 }}><span>0{i + 1}</span>{interest}<ArrowUpRight size={16}/></motion.div>)}
            </div>
          </div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <SectionHeading eyebrow="SELECTED WORK" title={<>Things I've <span>built.</span></>} subtitle="A selection of projects exploring software engineering, systems and frontend development." />
          <div className="projects-showcase">
            <div className="project-controls">
              <span className="project-count"><strong>{String(activeProject + 1).padStart(2, "0")}</strong> / {String(projects.length).padStart(2, "0")}</span>
              <div className="project-arrows">
                <button type="button" onClick={() => moveProjects(-1)} disabled={activeProject === 0} aria-label="Previous project"><ChevronLeft size={19}/></button>
                <button type="button" onClick={() => moveProjects(1)} disabled={activeProject === projects.length - 1} aria-label="Next project"><ChevronRight size={19}/></button>
              </div>
            </div>
            <div className="project-track" ref={projectTrack} onScroll={(event) => {
              const track = event.currentTarget;
              const card = track.querySelector(".project-card");
              if (card) setActiveProject(Math.round(track.scrollLeft / (card.getBoundingClientRect().width + 22)));
            }}>
              {projects.map((project, i) => (
                <motion.article className={`project-card ${project.accent} ${project.featured ? "featured-project" : ""}`} key={project.name} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }} transition={{ delay: i * .05 }}>
                  <div className="project-copy">
                    <div className="project-top"><span className="project-number">PROJECT {project.number}</span><span className="project-icon"><Layers3 size={20}/></span></div>
                    <div className="project-category">{project.category}</div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                    <a className="project-link" href={project.github} target="_blank" rel="noreferrer">Explore on GitHub <ArrowUpRight size={17}/></a>
                  </div>
                  <div className={`project-art art-${project.visual}`} aria-hidden="true">
                    {project.visual === "connectme" ? <>
                      <div className="social-window"><div className="social-window-head"><i/><i/><i/><span>connectme</span></div><div className="social-story-row"><b/><b/><b/><b/></div><div className="social-post"><div className="social-post-image"><span>✦</span></div><div className="social-post-lines"><i/><i/><i/></div></div></div>
                      <div className="art-orbit orbit-a"/><div className="art-orbit orbit-b"/>
                    </> : <>
                      <div className="art-window"><div className="art-window-top"><i/><i/><i/></div><div className="art-window-body"><span/><span/><span/><span/></div></div>
                      <div className="art-orbit orbit-a"/><div className="art-orbit orbit-b"/>
                    </>}
                    <span className="art-label">{project.name}</span>
                  </div>
                </motion.article>
              ))}
            </div>
            <div className="project-pagination" aria-label="Choose project">
              {projects.map((project, i) => <button key={project.name} type="button" className={i === activeProject ? "active" : ""} onClick={() => moveProjects(i - activeProject)} aria-label={`Go to ${project.name}`}/>) }
              <span>Swipe or use arrows to explore</span>
            </div>
          </div>
        </section>

        <section className="section-wrap experience-section" id="experience">
          <SectionHeading eyebrow="WHERE I'VE WORKED" title={<>Experience & <span>impact.</span></>} />
          {experience.map(job => (
            <motion.div className="experience-card glass-card" key={job.company} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="experience-mark"><BriefcaseBusiness size={24}/></div>
              <div className="experience-main">
                <div className="experience-head"><div><h3>{job.role}</h3><h4>{job.company}</h4></div><span className="date-pill">{job.period}</span></div>
                <ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul>
                <div className="tag-list">{job.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
            </motion.div>
          ))}
        </section>

        <section className="section-wrap skills-section" id="skills">
          <SectionHeading eyebrow="MY TOOLKIT" title={<>Technologies I <span>work with.</span></>} subtitle="A growing toolkit across frontend, programming and backend engineering." />
          <div className="skills-grid">
            {skills.map((group, i) => <motion.div className={`skill-card ${i === 0 ? "featured-skill" : ""}`} key={group.group} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="skill-card-heading"><Terminal size={18}/><h3>{group.group}</h3></div>
              <div className="skill-pills">{group.items.map(skill => <span key={skill}>{skill}</span>)}</div>
            </motion.div>)}
          </div>
        </section>

        <section className="section-wrap education-section" id="education">
          <SectionHeading eyebrow="ACADEMIC BACKGROUND" title={<>Learning is a <span>continuous process.</span></>} />
          <div className="education-list">
            {education.map((item, i) => <motion.div className="education-item" key={item.degree} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="education-index">0{i + 1}</div><div className="education-content"><h3>{item.degree}</h3><p>{item.institution}</p><span>{item.period}</span></div><strong>{item.detail}</strong>
            </motion.div>)}
          </div>
        </section>


      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span>O</span><i>K</i></a>
        <p>Designed & built by Om Khot · {new Date().getFullYear()}</p>
        <div className="footer-socials"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a></div>
      </footer>
    </div>
  );
}

export default App;
