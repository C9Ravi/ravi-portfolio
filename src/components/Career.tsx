import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> Internships
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Tayyari</h4>
                <h5>E-Learning / EdTech</h5>
              </div>

              <h3>05 Jun 2025 - 05 Aug 2025</h3>
            </div>

            <div className="career-role-block">
              <div className="career-role-heading">
                <h4>01 — Frontend Engineer</h4>
                <span>05 Jun — 05 Jul 2025</span>
              </div>

<p>
  Built responsive, user-focused interfaces for learning platforms, while
  improving usability, performance, and overall user experience.
</p>
            </div>

            <div className="career-role-block">
              <div className="career-role-heading">
                <h4>02 — Full Stack Developer</h4>
                <span>05 Jul — 05 Aug 2025</span>
              </div>

<p>
  Transitioned into a Full Stack Developer role, building and maintaining
  MERN applications, integrating REST APIs, and contributing to testing,
  debugging, and performance optimization.
</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;