import { useState } from "react";
import { LableInput } from "../components/input";
import { Button } from "./button";
import "../styles/main.css";

function PersonInformation({ formData, setFormData }) {
  const handleChange = (e) => {
    console.log(formData);
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        [name]: value,
      },
    }));
  };

  return (
    <div className="personal-information">
      <h1>Fill in the Person Information for employers to contact you</h1>
      <h3>We suggest including and email and a phone number</h3>
      <form action="get">
        <div className="name">
          <LableInput
            text={<p>FIRST NAME</p>}
            inputTag={
              <input
                type="text"
                name="firstName"
                key="firstName"
                value={formData.personalInfo.firstName || ""}
                onChange={handleChange}
              />
            }
          />
          <LableInput
            text={<p>LAST NAME</p>}
            inputTag={
              <input
                type="text"
                name="lastName"
                key="LastName"
                value={formData.personalInfo.lastName}
                onChange={handleChange}
              />
            }
          />
        </div>
        <div className="profession">
          <LableInput
            text={<p>PROFESSION</p>}
            inputTag={
              <input
                type="text"
                name="profession"
                value={formData.personalInfo.profession}
                onChange={handleChange}
                className="stretch"
              />
            }
          />
        </div>
        <div className="location">
          <LableInput
            text={<p>POSTAL CODE</p>}
            inputTag={
              <input
                type="number"
                name="postalCode"
                value={formData.personalInfo.postalCode}
                onChange={handleChange}
              />
            }
          />
          <div className="place">
            <LableInput
              text={<p>PROVINCE</p>}
              inputTag={
                <input
                  type="text"
                  name="province"
                  value={formData.personalInfo.province}
                  onChange={handleChange}
                />
              }
            />
            <LableInput
              text={<p>COUNTRY</p>}
              inputTag={
                <input
                  type="text"
                  name="country"
                  value={formData.personalInfo.country}
                  onChange={handleChange}
                />
              }
            />
          </div>
        </div>
        <div className="contacts">
          <LableInput
            text={<p>PHONE NUMBER</p>}
            inputTag={
              <input
                type="number"
                name="phoneNumber"
                value={formData.personalInfo.phoneNumber}
                onChange={handleChange}
              />
            }
          />
          <LableInput
            text={
              <p>
                EMAIL <span className="required">*</span>
              </p>
            }
            inputTag={
              <input
                type="email"
                name="email"
                value={formData.personalInfo.email}
                onChange={handleChange}
              />
            }
          />
        </div>
      </form>
    </div>
  );
}

export { PersonInformation };
