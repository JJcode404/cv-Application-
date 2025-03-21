import "../styles/main.css";
import educationIcon from "../assets/education.png";
import workIcon from "../assets/work.png";
import objectiveIcon from "../assets/objective.png";
import { Button } from "./button";

function CvSummary({ formData, handleEdit }) {
  return (
    <main className="container">
      <div className="introCv light">
        <div className="cvName">
          <div>{formData.personalInfo.firstName}</div>
          <div>{formData.personalInfo.lastName}</div>
          <div className="profession">{formData.personalInfo.profession}</div>
        </div>
        <div className="cvContact">
          <div className="cvAddresss">
            {formData.personalInfo.province}, {formData.personalInfo.country} ,{" "}
            {formData.personalInfo.postalCode}{" "}
          </div>
          <div className="cvPhoneNUmber">
            {formData.personalInfo.phoneNumber}{" "}
          </div>
          <div className="cvEmail">{formData.personalInfo.email}</div>
        </div>
      </div>
      <div className="details">
        <div className="objectives ">
          <h2 className="light">
            <img src={objectiveIcon} className="icons" /> OBJECTIVE
          </h2>
          <p>
            Enthusiastic web developer and UX designer with a passion for
            crafting seamless, user-centered digital experiences. Seeking
            opportunities to leverage my skills in front-end development and
            design to contribute to impactful projects
          </p>
        </div>
        <div className="education ">
          <h2 className="light">
            <img src={educationIcon} className="icons" />
            EDUCATION
          </h2>
          <p>
            {formData.educationInfo.degree} |{" "}
            {formData.educationInfo.institutionName}
          </p>
          <p>
            {formData.educationInfo.graduationMonth}{" "}
            {formData.educationInfo.graduationYear}
          </p>
        </div>
        <div className="workExperence">
          <h2 className="light">
            <img src={workIcon} className="icons" />
            EXPERIENCE
          </h2>
          <p>
            {formData.workExperience.jobTitle} |{" "}
            {formData.workExperience.employer}
          </p>
          <p>
            {formData.workExperience.startMonth}{" "}
            {formData.workExperience.startYear} -
            {formData.workExperience.endMonth} {formData.workExperience.endYear}
          </p>
        </div>
      </div>
      <div className="navigation edit">
        <Button width={200} text="Edit Cv" handleClick={handleEdit} />
      </div>
    </main>
  );
}

export { CvSummary };
