import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const BookStand = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [standFormInputs, setFormInputs] = useState({
    first_name: "",
    last_name: "",
    title: "Select Title",
    job_title: "",
    company_name: "",
    org_size: "Select Organization Size",
    phone: "",
    mobile: "",
    email: "",
    city: "",
    country: "Select Country of Residence",
    job_function: "Select Job Function",
    nature_of_business: "Select Nature of Business",
    disposables_consumables: false,
    healthcare_general_services: false,
    healthcare_infrastructure_assets: false,
    it_systems_solutions: false,
    imaging_diagnostics: false,
    laboratory: false,
    medical_equipment_devices: false,
    orthopedic_physiotherapy_rehabilitation: false,
    pharma_nutrition: false,
  });

  const {
    first_name,
    last_name,
    title,
    job_title,
    company_name,
    org_size,
    phone,
    mobile,
    email,
    city,
    country,
    job_function,
    nature_of_business,
    disposables_consumables,
    healthcare_general_services,
    healthcare_infrastructure_assets,
    it_systems_solutions,
    imaging_diagnostics,
    laboratory,
    medical_equipment_devices,
    orthopedic_physiotherapy_rehabilitation,
    pharma_nutrition,
  } = standFormInputs;

  const resetForm = () => {
    setFormInputs({
      first_name: "",
      last_name: "",
      title: "Select Title",
      job_title: "",
      company_name: "",
      org_size: "Select Organization Size",
      phone: "",
      mobile: "",
      email: "",
      city: "",
      country: "Select Country of Residence",
      job_function: "Select Job Function",
      nature_of_business: "Select Nature of Business",
      disposables_consumables: false,
      healthcare_general_services: false,
      healthcare_infrastructure_assets: false,
      it_systems_solutions: false,
      imaging_diagnostics: false,
      laboratory: false,
      medical_equipment_devices: false,
      orthopedic_physiotherapy_rehabilitation: false,
      pharma_nutrition: false,
    });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const formHandler = (e) => {
    const { name, value, type, checked } = e.target;

    setFormInputs((formInputs) => ({
      ...formInputs,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const formSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_nbmp34k",
        "template_ynvioaq",
        standFormInputs,
        "33iZznqtTjQY9gfeI"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
    );
       setIsFormSubmitted(true);

  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [isFormSubmitted]);

  const email_password = "Mr.UsmanAmwe2023";
  const SITE_KEY = "6Ld25IUkAAAAACFxbx0PiM3v2-YEaFHv6G4GrTbh";
  const SECRET_KEY = "6Ld25IUkAAAAAGdP7kZF8QITfZ6JN_2F15zWL1rg";

  return (
    <div className="flex flex-col items-center justify-around md:py-10 py-4 md:w-2/3 relative m-auto rounded-t-2xl mt-32 md:mt-10 shadow-2xl ">
      {!isFormSubmitted && (
        <div className="md:w-3/4 p-5 md:p-0">
          <h2 className="text-2xl font-bold tracking-widest text-center md:text-start text-[#0F2F63]">
            STAND ENQUIRY
          </h2>
          <p className="mt-2 font-extralight text-center md:text-start">
            Kindly fill and submit the below form to enquire about booking a
            stand at AMWE 2023. One of our staff will get in touch with you with
            more information.
          </p>
        </div>
      )}
      {!isFormSubmitted ? (
        <div className="w-full md:w-3/4 p-2 md:p-0">
          <form
            className="p-4 mt-4 rounded-lg text-gray-800"
            onSubmit={formSubmit}
            ref={form}
          >
            <div className="flex flex-col gap-5 justify-between px-2">
              <div className="flex flex-col md:flex-row md:items-center w-full">
                <label htmlFor="email" className="md:w-1/4">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder=""
                  value={email}
                  name="email"
                  required
                  className="rounded p-2 bg-transparent border-b text-gray-800 md:w-3/5"
                  onChange={formHandler}
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center w-full">
                <label htmlFor="title" className="md:w-1/4">
                  Title
                </label>
                <select
                  name="title"
                  value={title}
                  required
                  className="rounded p-2 bg-transparent border-b text-gray-800 md:w-3/5"
                  onChange={formHandler}
                >
                  {" "}
                  <option value="Select a title" disabled>
                    Select Title
                  </option>
                  <option value="Chief">Chief</option>
                  <option value="Brig.">Brig.</option>
                  <option value="Capt.">Capt.</option>
                  <option value="Gen.">Gen.</option>
                  <option value="H.E.">H.E.</option>
                  <option value="Mr.">Mr.</option>
                  <option value="Sheikh">Sheikh</option>
                  <option value="Adm.">Adm.</option>
                  <option value="Chef">Chef</option>
                  <option value="Dr.">Dr.</option>
                  <option value="Hon.">Hon.</option>
                  <option value="Maj.">Maj.</option>
                  <option value="Prof.">Prof.</option>
                  <option value="Gov.">Gov.</option>
                  <option value="Lt.">Lt.</option>
                  <option value="Ms.">Ms.</option>
                  <option value="Sheikha">Sheikha</option>
                  <option value="Brig Gen.">Brig Gen.</option>
                  <option value="Col.">Col.</option>
                  <option value="H.H.">H.H.</option>
                  <option value="H.R.H">H.R.H</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Sir.">Sir.</option>
                  <option value="Amb.">Amb.</option>
                  <option value="Eng.">Eng.</option>
                  <option value="other">other</option>
                </select>
              </div>
              <div className="flex flex-col md:flex-row md:items-center w-full">
                <label htmlFor="first_name" className="md:w-1/4">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder=""
                  value={first_name}
                  name="first_name"
                  required
                  className="rounded p-2 bg-transparent border-b text-gray-800 md:w-3/5"
                  onChange={formHandler}
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center w-full">
                <label htmlFor="last_name" className="md:w-1/4">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder=""
                  value={last_name}
                  name="last_name"
                  required
                  className="rounded p-2 bg-transparent border-b text-gray-800 md:w-3/5"
                  onChange={formHandler}
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center w-full">
                <label htmlFor="job_title" className="md:w-1/4">
                  Job Title
                </label>
                <input
                  type="text"
                  placeholder=""
                  value={job_title}
                  name="job_title"
                  required
                  className="rounded p-2 bg-transparent border-b text-gray-800 md:w-3/5"
                  onChange={formHandler}
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center w-full">
                <label htmlFor="company_name" className="md:w-1/4">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder=""
                  value={company_name}
                  name="company_name"
                  required
                  className="rounded p-2 bg-transparent border-b text-gray-800 md:w-3/5"
                  onChange={formHandler}
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center w-full">
                <label htmlFor="org_size" className="md:w-1/4">
                  Organization Size
                </label>
                <select
                  name="org_size"
                  required
                  className="rounded p-2 bg-transparent border-b text-gray-800 md:w-3/5"
                  onChange={formHandler}
                  value={org_size}
                >
                  {" "}
                  <option value="Select Organization Size" disabled>
                    Select Organization Size
                  </option>
                  <option value="1-50">1-50</option>
                  <option value="50-100">50-100</option>
                  <option value="100-500">100-500</option>
                  <option value="500-100">500-1000</option>
                  <option value="1000-5000">1000-5000</option>
                  <option value="5000-10000">5000-10000</option>
                </select>
              </div>
              <div className="flex flex-col md:flex-row md:items-center w-full">
                <label htmlFor="city" className="md:w-1/4">
                  City<sup>*</sup>
                </label>
                <input
                  type="text"
                  placeholder=""
                  value={city}
                  name="city"
                  required
                  className="rounded p-2 bg-transparent border-b text-gray-800 md:w-3/5"
                  onChange={formHandler}
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center w-full">
                <label htmlFor="country" className="md:w-1/4">
                  Country
                </label>
                <select
                  name="country"
                  required
                  className="rounded p-2 bg-transparent border-b text-gray-800 md:w-3/5"
                  onChange={formHandler}
                  value={country}
                >
                  <option value={country} disabled>
                    Select Country
                  </option>

                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Åland Islands">Åland Islands</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Anguilla">Anguilla</option>
                  <option value="Antarctica">Antarctica</option>
                  <option value="Antigua and Barbuda">
                    Antigua and Barbuda
                  </option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bermuda">Bermuda</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bosnia and Herzegovina">
                    Bosnia and Herzegovina
                  </option>
                  <option value="Botswana">Botswana</option>
                  <option value="Bouvet Island">Bouvet Island</option>
                  <option value="Brazil">Brazil</option>
                  <option value="British Indian Ocean Territory">
                    British Indian Ocean Territory
                  </option>
                  <option value="Brunei Darussalam">Brunei Darussalam</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Cape Verde">Cape Verde</option>
                  <option value="Cayman Islands">Cayman Islands</option>
                  <option value="Central African Republic">
                    Central African Republic
                  </option>
                  <option value="Chad">Chad</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Christmas Island">Christmas Island</option>
                  <option value="Cocos (Keeling) Islands">
                    Cocos (Keeling) Islands
                  </option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">Congo</option>
                  <option value="Congo, The Democratic Republic of The">
                    Congo, The Democratic Republic of The
                  </option>
                  <option value="Cook Islands">Cook Islands</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Cote D'ivoire">Cote D'ivoire</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Falkland Islands (Malvinas)">
                    Falkland Islands (Malvinas)
                  </option>
                  <option value="Faroe Islands">Faroe Islands</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="French Guiana">French Guiana</option>
                  <option value="French Polynesia">French Polynesia</option>
                  <option value="French Southern Territories">
                    French Southern Territories
                  </option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Gibraltar">Gibraltar</option>
                  <option value="Greece">Greece</option>
                  <option value="Greenland">Greenland</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guadeloupe">Guadeloupe</option>
                  <option value="Guam">Guam</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guernsey">Guernsey</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-bissau">Guinea-bissau</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Heard Island and Mcdonald Islands">
                    Heard Island and Mcdonald Islands
                  </option>
                  <option value="Holy See (Vatican City State)">
                    Holy See (Vatican City State)
                  </option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="India">India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran, Islamic Republic of">
                    Iran, Islamic Republic of
                  </option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Isle of Man">Isle of Man</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jersey">Jersey</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Korea, Democratic People's Republic of">
                    Korea, Democratic People's Republic of
                  </option>
                  <option value="Korea, Republic of">Korea, Republic of</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Lao People's Democratic Republic">
                    Lao People's Democratic Republic
                  </option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libyan Arab Jamahiriya">
                    Libyan Arab Jamahiriya
                  </option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Macao">Macao</option>
                  <option value="Macedonia, The Former Yugoslav Republic of">
                    Macedonia, The Former Yugoslav Republic of
                  </option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Martinique">Martinique</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mayotte">Mayotte</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Micronesia, Federated States of">
                    Micronesia, Federated States of
                  </option>
                  <option value="Moldova, Republic of">
                    Moldova, Republic of
                  </option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montenegro">Montenegro</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Netherlands Antilles">
                    Netherlands Antilles
                  </option>
                  <option value="New Caledonia">New Caledonia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Niue">Niue</option>
                  <option value="Norfolk Island">Norfolk Island</option>
                  <option value="Northern Mariana Islands">
                    Northern Mariana Islands
                  </option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau">Palau</option>
                  <option value="Palestinian Territory, Occupied">
                    Palestinian Territory, Occupied
                  </option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Pitcairn">Pitcairn</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Reunion">Reunion</option>
                  <option value="Romania">Romania</option>
                  <option value="Russian Federation">Russian Federation</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Saint Helena">Saint Helena</option>
                  <option value="Saint Kitts and Nevis">
                    Saint Kitts and Nevis
                  </option>
                  <option value="Saint Lucia">Saint Lucia</option>
                  <option value="Saint Pierre and Miquelon">
                    Saint Pierre and Miquelon
                  </option>
                  <option value="Saint Vincent and The Grenadines">
                    Saint Vincent and The Grenadines
                  </option>
                  <option value="Samoa">Samoa</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome and Principe">
                    Sao Tome and Principe
                  </option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Serbia">Serbia</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="South Georgia and The South Sandwich Islands">
                    South Georgia and The South Sandwich Islands
                  </option>
                  <option value="Spain">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Svalbard and Jan Mayen">
                    Svalbard and Jan Mayen
                  </option>
                  <option value="Swaziland">Swaziland</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syrian Arab Republic">
                    Syrian Arab Republic
                  </option>
                  <option value="Taiwan">Taiwan</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania, United Republic of">
                    Tanzania, United Republic of
                  </option>
                  <option value="Thailand">Thailand</option>
                  <option value="Timor-leste">Timor-leste</option>
                  <option value="Togo">Togo</option>
                  <option value="Tokelau">Tokelau</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad and Tobago">
                    Trinidad and Tobago
                  </option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Turks and Caicos Islands">
                    Turks and Caicos Islands
                  </option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">
                    United Arab Emirates
                  </option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="United States Minor Outlying Islands">
                    United States Minor Outlying Islands
                  </option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Viet Nam">Viet Nam</option>
                  <option value="Virgin Islands, British">
                    Virgin Islands, British
                  </option>
                  <option value="Virgin Islands, U.S.">
                    Virgin Islands, U.S.
                  </option>
                  <option value="Wallis and Futuna">Wallis and Futuna</option>
                  <option value="Western Sahara">Western Sahara</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                  <option value="Select Country" disabled>
                    Select Country
                  </option>
                </select>
              </div>
              <div className="flex flex-col md:flex-row md:items-center w-full">
                <label htmlFor="phone" className="md:w-1/4">
                  Telephone
                </label>
                <input
                  type="number"
                  placeholder=""
                  value={phone}
                  name="phone"
                  required
                  className="rounded p-2 bg-transparent border-b text-gray-800 md:w-3/5"
                  onChange={formHandler}
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center w-full">
                <label htmlFor="mobile" className="md:w-1/4">
                  Mobile
                </label>
                <input
                  type="number"
                  placeholder=""
                  value={mobile}
                  name="mobile"
                  required
                  className="rounded p-2 bg-transparent border-b text-gray-800 md:w-3/5"
                  onChange={formHandler}
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center w-full">
                <label htmlFor="job_function" className="md:w-1/4">
                  Job Function
                </label>
                <select
                  name="job_function"
                  required
                  className="rounded p-2 bg-transparent border-b text-gray-800 md:w-3/5"
                  onChange={formHandler}
                  value={job_function}
                >
                  <option value="Select Job Function" disabled>
                    Select Job Function
                  </option>
                  <option value="Administration/Office Management">
                    Administration/Office Management
                  </option>
                  <option value="Education Curriculum & Teaching">
                    Education Curriculum & Teaching
                  </option>
                  <option value="Engineering">Engineering</option>
                  <option value="Finance & Accounting">
                    Finance & Accounting
                  </option>
                  <option value="Healthcare Professional">
                    Healthcare Professional
                  </option>
                  <option value="Human Resources (HR), Training & Organizational Development">
                    Human Resources (HR), Training & Organizational Development
                  </option>
                  <option value="Information & Communications Technology">
                    Information & Communications Technology{" "}
                  </option>
                  <option value="Laboratory">Laboratory</option>
                  <option value="Legal">Legal</option>
                  <option value="Logistics, Purchasing & Procurement">
                    Logistics, Purchasing & Procurement
                  </option>
                  <option value="Manufacturing & Production">
                    Manufacturing & Production
                  </option>
                  <option value="Marketing">Marketing </option>
                  <option value="Operations Management">
                    Operations Management
                  </option>
                  <option value="Research & Developemet">
                    Research & Developemet
                  </option>
                  <option value="Sales">Sales</option>
                  <option value="Supply Management">Supply Management</option>
                  <option value="University Advisor/Faculty"></option>
                  <option value="Select Job Function" disabled>
                    Select Job Function
                  </option>
                </select>
              </div>
              <p className="bg-gray-200 text-[#0F2F63] px-3 rounded-b-lg">
                Please indicate the industry your business operates in:
              </p>
              <div className="flex flex-col md:flex-row md:items-center w-full">
                <label htmlFor="nature_of_business" className="md:w-1/4">
                  Nature of Business
                </label>
                <select
                  name="nature_of_business"
                  required
                  className="rounded p-2 bg-transparent border-b text-gray-800 md:w-3/5"
                  onChange={formHandler}
                  value={nature_of_business}
                >
                  <option value="Select Nature of Business" disabled>
                    Select Nature of Business
                  </option>
                  <option value="Community Health Service">
                    Community Health Service
                  </option>
                  <option value="Consultancy Services (Healthcare)">
                    Consultancy Services(Healthcare)
                  </option>
                  <option value="Dealers & Distributors (Healthcare)">
                    Dealers & Distributors (Healthcare)
                  </option>
                  <option value="Dealers & Distributors (Laboratory)">
                    Dealers & Distributors (Laboratory)
                  </option>
                  <option value="Educational Institute (Medical)">
                    Educational Institute (Medical)
                  </option>
                  <option value="Government (Department of Health)">
                    Government (Department of Health){" "}
                  </option>
                  <option value="Hospital (Private)">
                    Hospital (Private){" "}
                  </option>
                  <option value="Hospital (Public)">Hospital (Public)</option>
                  <option value="Import & Export (Healthcare)">
                    Import & Export (Healthcare)
                  </option>
                  <option value="Information Technology/Software (Healthcare)">
                    Information Technology/Software (Healthcare)
                  </option>
                  <option value="Investor (Healthcare)">
                    Investor (Healthcare)
                  </option>
                  <option value="Laboratories (Medical)">
                    Laboratories (Medical)
                  </option>
                  <option value="Laboratory">Laboratory</option>
                  <option value="Manufacturer (Medical)">
                    Manufacturer (Medical)
                  </option>
                  <option value="Medical Practice">Medical Practice</option>
                  <option value="Medical Travel">Medical Travel</option>
                  <option value="Other Businesses ">Other Businesses</option>
                  <option value="Technology Medical">Technology Medical</option>
                  <option value="Select Nature of Business" disabled>
                    Select Nature of Business
                  </option>
                </select>
              </div>
              <div>
                <h1>What sectors best describes your products or services</h1>
                <fieldset className="flex flex-col items-start justify-start">
                  <div className="flex items-center w-full gap-5">
                    <input
                      type="checkbox"
                      name="disposables_consumables"
                      value={disposables_consumables}
                      onChange={formHandler}
                      className=""
                    />{" "}
                    <label
                      htmlFor="disposables_consumables"
                      className="p-2 bg-transparent text-gray-800 md:w-3/5"
                    >
                      Disposables & Consumables
                    </label>
                  </div>
                  <div className="flex items-center w-full gap-5">
                    <input
                      type="checkbox"
                      name="healthcare_general_services"
                      value={healthcare_general_services}
                      onChange={formHandler}
                      className=""
                    />{" "}
                    <label
                      htmlFor="healthcare_general_services"
                      className="rounded p-2 bg-transparent text-gray-800 md:w-3/5"
                    >
                      Healthcare General Services
                    </label>
                  </div>
                  <div className="flex items-center w-full gap-5">
                    <input
                      type="checkbox"
                      name="healthcare_infrastructure_assets"
                      value={healthcare_infrastructure_assets}
                      onChange={formHandler}
                      className=""
                    />{" "}
                    <label
                      htmlFor="healthcare_infrastructure_assets"
                      className="rounded p-2 bg-transparent text-gray-800 md:w-3/5"
                    >
                      Healthcare Infrastructure Assets
                    </label>
                  </div>
                  <div className="flex items-center w-full gap-5">
                    <input
                      type="checkbox"
                      name="it_systems_solutions"
                      value={it_systems_solutions}
                      onChange={formHandler}
                      className=""
                    />{" "}
                    <label
                      htmlFor="it_systems_solutions"
                      className="rounded p-2 bg-transparent text-gray-800 md:w-3/5"
                    >
                      IT Systems / Solutions
                    </label>
                  </div>
                  <div className="flex items-center w-full gap-5">
                    <input
                      type="checkbox"
                      name="imaging_diagnostics"
                      value={imaging_diagnostics}
                      onChange={formHandler}
                      className=""
                    />{" "}
                    <label
                      htmlFor="imaging_diagnostics"
                      className="rounded p-2 bg-transparent text-gray-800 md:w-3/5"
                    >
                      Imaging Diagnostics
                    </label>
                  </div>
                  <div className="flex items-center w-full gap-5">
                    <input
                      type="checkbox"
                      name="laboratory"
                      value={laboratory}
                      onChange={formHandler}
                      className=""
                    />{" "}
                    <label
                      htmlFor="laboratory"
                      className="rounded p-2 bg-transparent text-gray-800 md:w-3/5"
                    >
                      Laboratory
                    </label>
                  </div>
                  <div className="flex items-center w-full gap-5">
                    <input
                      type="checkbox"
                      name="medical_equipment_devices"
                      value={medical_equipment_devices}
                      onChange={formHandler}
                      className=""
                    />{" "}
                    <label
                      htmlFor="medical_equipment_devices"
                      className="rounded p-2 bg-transparent text-gray-800 md:w-3/5"
                    >
                      Medical Equipment Devices
                    </label>
                  </div>
                  <div className="flex items-center w-full gap-5">
                    <input
                      type="checkbox"
                      name=" orthopedic_physiotherapy_rehabilitation"
                      value={orthopedic_physiotherapy_rehabilitation}
                      onChange={formHandler}
                      className=""
                    />{" "}
                    <label
                      htmlFor="orthopedic_physiotherapy_rehabilitation"
                      className="rounded p-2 bg-transparent text-gray-800 md:w-3/5"
                    >
                      Orthopedic Physiotherapy Rehabilitation
                    </label>
                  </div>
                  <div className="flex items-center w-full gap-5">
                    <input
                      type="checkbox"
                      name="pharma_nutrition"
                      value={pharma_nutrition}
                      onChange={formHandler}
                      className=""
                    />{" "}
                    <label
                      htmlFor="pharma_nutrition"
                      className="rounded p-2 bg-transparent text-gray-800 md:w-3/5"
                    >
                      Pharma Nutrition
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>
            <div className="flex items-center w-full gap-5">
              {" "}
              <button
                type="submit"
                className="bg-[#0F2F63] text-gray-200 p-1 mt-4 text-lg rounded-lg w-1/4"
              >
                Submit
              </button>
              <button
                type="reset"
                className="bg-[#0F2F63] text-gray-200 p-1 mt-4 text-lg rounded-lg w-1/4"
                onClick={resetForm}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div
          className="flex md:flex-row flex-col-reverse items-center justify-between md:p-4"
        >
          <figure className="md:w-1/3 w-full">
            <img src="cartoon.png" alt="" className="hidden md:block" />
            <img src="openHand.png" alt="" className="block md:hidden h-28 w-full" />
          </figure>
          <div className="flex flex-col gap-4 tracking-wider md:w-2/3 p-10 md:p-0">
            <h1 className="text-3xl text-[#0F2F63] font-bold">Thank You!</h1>
            <p className="font-bold">
              Many thanks for your interest in booking a stand at AMWE 2023.
            </p>
            <p>
              Rest assured a member of our sales team will contact you shortly.
            </p>
            <p>
              Kind Regards, <br />
              <span className="font-bold">AMWE Team</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookStand;
