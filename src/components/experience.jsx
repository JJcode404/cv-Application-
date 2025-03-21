import { startTransition, useState } from "react";
import { LableInput } from "../components/input";
import { Button } from "./button";
import "../styles/main.css";
import { Months, Years } from "./calender";

function WorkExperience({ formData, setFormData }) {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (e) => {
    console.log(formData);
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      workExperience: {
        ...prevData.workExperience,
        [name]: value,
      },
    }));
  };
  const handleCheckBox = (e) => {
    console.log(formData);
    const { name } = e.target;
    const isChecked = e.target.checked;
    setFormData((prevData) => ({
      ...prevData,
      workExperience: {
        ...prevData.workExperience,
        [name]: isChecked,
      },
    }));
  };
  const handleSelection = (e) => {
    console.log(formData);
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      workExperience: {
        ...prevData.workExperience,
        [name]: value,
      },
    }));
  };

  return (
    <div className="main">
      <h1>Tell us about your most recent job</h1>
      <h2>We'll start there and work backward.</h2>
      <p>* indicate a required field</p>
      <form action="get">
        <div className="name">
          <LableInput
            text={
              <p>
                JOB TITLE <span className="required">*</span>
              </p>
            }
            inputTag={
              <input
                type="text"
                placeholder="e.g. Software Developer"
                name="jobTitle"
                key="jobTitle"
                value={formData.workExperience.jobTitle || ""}
                onChange={handleChange}
              />
            }
          />
          <LableInput
            text={
              <p>
                EMPLOYER <span className="required">*</span>
              </p>
            }
            inputTag={
              <input
                type="text"
                placeholder="e.g. Coco Networks"
                name="employer"
                key="employer"
                value={formData.workExperience.employer}
                onChange={handleChange}
              />
            }
          />
        </div>
        <div className="location">
          <LableInput
            text={
              <p>
                LOCATION <span className="required">*</span>
              </p>
            }
            inputTag={
              <input
                type="text"
                placeholder="e.g. Nairobi, Kenya"
                name="location"
                key="location"
                value={formData.workExperience.location}
                onChange={handleChange}
              />
            }
          />
          <div className="checkbox">
            <input
              type="checkbox"
              name="remote"
              id="remote"
              width={"10px"}
              checked={!!formData.workExperience.remote}
              onChange={handleCheckBox}
            />
            <div>Remote</div>
          </div>
        </div>
        <div className="date">
          <LableInput
            text={
              <p>
                START DATE <span className="required">*</span>
              </p>
            }
            inputTag={
              <div className="startdate">
                <Months
                  name={"startMonth"}
                  key={"startMonth"}
                  value={formData.workExperience.startMonth}
                  handleSelection={handleSelection}
                />
                <Years
                  name={"startYear"}
                  id={"startYear"}
                  value={formData.workExperience.startYear}
                  handleSelection={handleSelection}
                />
              </div>
            }
          />
          <div className="enddate">
            <LableInput
              text={
                <p>
                  END DATE <span className="required">*</span>
                </p>
              }
              inputTag={
                <div className="startdate">
                  <Months
                    name={"endMonth"}
                    key={"endMonth"}
                    value={formData.workExperience.endMonth}
                    handleSelection={handleSelection}
                  />
                  <Years
                    name={"endYear"}
                    key={"endYear"}
                    value={formData.workExperience.endYear}
                    handleSelection={handleSelection}
                  />
                </div>
              }
            />
            <div className="checkbox">
              <input
                type="checkbox"
                name="currentWorkHere"
                id="currentWorkHere"
                width={"10px"}
                checked={!!formData.workExperience.currentWorkHere}
                onChange={handleCheckBox}
              />
              <div>I currently work there</div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export { WorkExperience };
