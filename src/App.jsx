import { PersonInformation } from "./components/PersonalInfo";
import { WorkExperience } from "./components/experience";
import { EducationInformation } from "./components/educationInfo";
// import { Navigation } from "./components/navigation";
import { useState } from "react";
import { Button } from "./components/button";
import { CvSummary } from "./components/summary";

function App() {
  const [index, setIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: "Kham",
      lastName: "Japher",
      profession: "Software Engineer",
      postalCode: "00100",
      province: "Nairobi",
      country: "Kenya",
      phoneNumber: "+254712345678",
      email: "kham.japher@example.com",
    },
    workExperience: {
      jobTitle: "Full-Stack Developer",
      employer: "Tech Innovations Ltd",
      location: "Nairobi",
      remote: true,
      startMonth: "January",
      startYear: "2021",
      endMonth: "June",
      endYear: "2023",
      currentWorkHere: false,
    },
    educationInfo: {
      institutionName: "University of Nairobi",
      schoolLocation: "Nairobi",
      degree: "Bachelor's",
      fieldOfStudy: "Computer Science",
      graduationMonth: "December",
      graduationYear: "2020",
    },
  });

  const components = [
    <PersonInformation
      key="personalInfo"
      formData={formData}
      setFormData={setFormData}
    />,
    <WorkExperience
      key="workExperience"
      formData={formData}
      setFormData={setFormData}
    />,
    <EducationInformation
      key="educationInfo"
      formData={formData}
      setFormData={setFormData}
    />,
  ];

  const page = ["Work History", "Edu History", "Personal Info"];

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % components.length);
  };

  const handlePrevious = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? components.length - 1 : prevIndex - 1
    );
  };
  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleEdit = () => {
    setIsSubmitted(false);
  };
  const CurrentComponent = components[index];
  const CurrentPage = page[index];

  return (
    <div>
      {isSubmitted ? (
        <CvSummary formData={formData} handleEdit={handleEdit} />
      ) : (
        <>
          {CurrentComponent}
          <div className="navigation">
            <Button
              text="Previous"
              width={125}
              backgroundColor="#ffffff"
              border={"3px solid blue"}
              handleClick={handlePrevious}
            />
            {index === components.length - 1 ? (
              <Button width={200} text="Submit" handleClick={handleSubmit} />
            ) : (
              <Button width={200} next={CurrentPage} handleClick={handleNext} />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export { App };
