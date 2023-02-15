import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const Registration = () => {
  const form = useRef();
  const [cardId, setCardId] = useState("");
  const [isFileGood, setIsFileGood] = useState(true);

  const [formInputs, setFormInputs] = useState({
    first_name: "",
    last_name: "",
    job_title: "",
    media_outlet: "",
    website: "",
    phone: "",
    email: "",
    country: "Select Country",
    samples_link: "",
    consent: false,
  });

  function handleChange(e) {}

  const formHandler = (e) => {
    const { name, value, type, checked } = e.target;

    setFormInputs((formInputs) => ({
      ...formInputs,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (e.target.files[0].size > 31457280) {
      setIsFileGood(false);
    } else {
      setIsFileGood(true);

      setCardId(URL.createObjectURL(e.target.files[0]));
    }
  };
  const preventD = (e) => {
    e.preventDefault();
    if (isFileGood) {
      return true;
    } else {
      alert("file is too big");
      return false;
    }
        console.log(formInputs);

    // emailjs
    //   .send(
    //     "service_nbmp34k",
    //     "template_ejfqxh2",
    //     formInputs,
    //     "33iZznqtTjQY9gfeI"
    //   )
    //   .then(
    //     function (response) {
    //       console.log("SUCCESS!", response.status, response.text);
    //     },
    //     function (error) {
    //       console.log("FAILED...", error);
    //     }
    //   );
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const {
    first_name,
    last_name,
    job_title,
    media_outlet,
    website,
    phone,
    email,
    country,
    samples_link,
    consent,
  } = formInputs;

  return (
    <div className="flex flex-col items-center justify-around md:py-10 py-4 md:w-2/3 relative m-auto rounded-t-2xl mt-32 md:mt-10 shadow-2xl ">
      <div className="md:px-10 p-5">
        <h2 className="text-2xl font-bold tracking-widest text-center md:text-start">
          Media Registration
        </h2>
        <p className="mt-2 font-extralight text-center md:text-start">
          Registration is free for reporters, photographers, videographers,
          bloggers and influencers interested in covering AMWE 2023. Media will
          have access to all open-door plenaries, parallel sessions, press
          conferences and other media-focused events. They will also enjoy
          access to a media room from where they can file their reports live on
          location.
        </p>
      </div>
      <div className="w-full md:w-3/4 p-2">
        <p>Please indicate the required field</p>
        <form
          className="bg-[#121212] p-4 mt-4 rounded-lg"
          onSubmit={preventD}
          ref={form}
        >
          <div className="flex flex-col gap-5 justify-between px-2">
            <fieldset className="flex flex-col md:flex-row gap-5 text-gray-800 justify-around flex-wrap">
              <input
                type="text"
                placeholder="First Name"
                value={first_name}
                name="first_name"
                required
                className="rounded-lg p-2 bg-transparent border text-gray-200"
                onChange={formHandler}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={last_name}
                name="last_name"
                required
                className="rounded-lg p-2 bg-transparent border text-gray-200"
                onChange={formHandler}
              />
            </fieldset>
            <fieldset className="flex flex-col md:flex-row gap-5 text-gray-800 justify-around flex-wrap">
              <input
                type="text"
                placeholder="Job Title"
                value={job_title}
                name="job_title"
                required
                className="rounded-lg p-2 bg-transparent border text-gray-200"
                onChange={formHandler}
              />
              <input
                type="text"
                placeholder="Media Outlet"
                value={media_outlet}
                name="media_outlet"
                required
                className="rounded-lg p-2 bg-transparent border text-gray-200"
                onChange={formHandler}
              />
            </fieldset>
            <fieldset className="flex flex-col md:flex-row gap-5 text-gray-800 justify-around flex-wrap">
              <input
                type="text"
                placeholder="Website"
                value={website}
                name="website"
                required
                className="rounded-lg p-2 bg-transparent border text-gray-200"
                onChange={formHandler}
              />
              <input
                type="number"
                placeholder="Phone"
                value={phone}
                name="phone"
                required
                className="rounded-lg p-2 bg-transparent border text-gray-200"
                onChange={formHandler}
              />
            </fieldset>
            <fieldset className="flex flex-col md:flex-row gap-5 text-gray-800 justify-around flex-wrap">
              <input
                type="email"
                placeholder="Email"
                value={email}
                name="email"
                required
                className="rounded-lg p-2 bg-transparent border text-gray-200"
                onChange={formHandler}
              />
              <select
                name="country"
                required
                className="rounded-lg p-2 bg-transparent border text-gray-400 md:w-[40%]"
                onChange={formHandler}
                value={country}
              >
                {/* <option value="Select Country" disabled selected>
                  Select Country
                </option> */}
                <option value="Afghanistan">Afghanistan</option>
                <option value="Åland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
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
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
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
            </fieldset>
            <label htmlFor="samples_link" className="text-gray-200">
              For accreditation purposes, please provide a link to at least
              three examples of your work within the last year.{" "}
            </label>
            <input
              type="text"
              placeholder="Link here"
              value={samples_link}
              name="samples_link"
              required
              className="rounded-lg p-2 bg-transparent border text-gray-200"
              onChange={formHandler}
            />
            <label htmlFor="cardId" className="text-gray-200">
              For accreditation purposes, please provide a copy of valid press
              credentials issued by your media outlet or locally recognized
              media association. Photographers and videographers covering the
              conference must provide proof of affiliation to registered
              production agencies or client news organisations.{" "}
            </label>
            <i className="text-gray-200">Max. file size: 30 mb</i>
            <input
              type="file"
              name="cardId"
              accept=".jpg, .jpeg, .png"
              required
              onChange={formHandler}
              className="rounded-lg p-2 bg-transparent border text-gray-200"
            />
            {cardId && (
              <figure className="w-[50%] relative m-auto">
                <img src={cardId} className="w-full h-full rounded-xl" />
              </figure>
            )}
            <label
              htmlFor="consent"
              className="flex items-center text-gray-200 gap-4"
            >
              <input
                type="checkbox"
                name="consent"
                required
                checked={consent}
                onChange={formHandler}
                className="rounded-lg p-2 bg-transparent border text-gray-200"
                id="consent"
              />
              I consent to this website storing my personal information for
              conference accreditation and future media engagement with AMWE
            </label>
          </div>
          <button
            type="submit"
            className="bg-[#0F2F63] text-gray-200 p-2 mt-4 text-lg rounded-lg font-bold w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
