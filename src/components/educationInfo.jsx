import { useState } from "react";
import { LableInput } from "../components/input";
import { Button } from "./button";
import "../styles/main.css";
import { Months, Years } from "./calender";

function EducationInformation({ formData, setFormData }) {
  const handleChange = (e) => {
    console.log(formData);
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      educationInfo: {
        ...prevData.educationInfo,
        [name]: value,
      },
    }));
  };
  const handleSelection = (e) => {
    console.log(formData);
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      educationInfo: {
        ...prevData.educationInfo,
        [name]: value,
      },
    }));
  };
  return (
    <div className="main">
      <h1>Tell us about your education</h1>
      <h2>
        Enter your education experience so far, even if you are a current
        student or did not graduate.
      </h2>
      <p>* indicate a required field</p>
      <form action="get">
        <div className="Institution">
          <LableInput
            text={
              <p>
                INSTITUTION NAME <span className="required">*</span>
              </p>
            }
            inputTag={
              <input
                type="text"
                placeholder="e.g. University of Nairobi"
                key="institutionName"
                name="institutionName"
                value={formData.educationInfo.institutionName}
                onChange={handleChange}
              />
            }
          />
          <LableInput
            text={
              <p>
                SCHOOL LOCATION <span className="required">*</span>
              </p>
            }
            inputTag={
              <input
                type="text"
                placeholder="e.g. Nairobi, Kenya"
                name="schoolLocation"
                key="schoolLocation"
                value={formData.educationInfo.schoolLocation}
                onChange={handleChange}
              />
            }
          />
        </div>
        <div className="education-degree">
          <LableInput
            text={
              <p>
                DEGREE <span className="required">*</span>
              </p>
            }
            inputTag={
              <input
                type="text"
                placeholder="Select"
                name="degree"
                key="degree"
                value={formData.educationInfo.degree}
                onChange={handleChange}
              />
            }
          />
        </div>
        <div className="additional">
          <LableInput
            text={
              <p>
                FIELD OF STUDY <span className="required">*</span>
              </p>
            }
            inputTag={
              <input
                type="text"
                placeholder="e.g. Socialogy and Anthropology"
                key="fieldOfStudy"
                name="fieldOfStudy"
                value={formData.educationInfo.fieldOfStudy}
                onChange={handleChange}
              />
            }
          />
          <div className="graduation">
            <LableInput
              text={<p>GRADUATION DATE (OR EXPECTED GRADUATION DATE)</p>}
              inputTag={
                <div className="graduationDate">
                  <Months
                    name={"graduationMonth"}
                    key={"graduationMonth"}
                    value={formData.educationInfo.graduationMonth}
                    handleSelection={handleSelection}
                  />
                  <Years
                    name={"graduationYear"}
                    key={"graduationYear"}
                    value={formData.educationInfo.graduationYear}
                    handleSelection={handleSelection}
                  />
                </div>
              }
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export { EducationInformation };
