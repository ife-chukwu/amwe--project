import React, { useState } from "react";

import emailjs from "@emailjs/browser";

import {
  AiOutlineMail,
  AiOutlinePhone,
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

const ContactUs = () => {
  const [formdata, setFormData] = useState({
    purpose: "",
    full_name: "",
    company_name: "",
    products_or_services: "",
    country: "Select Country",
    phone_number: "",
    email: "",
    website: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const {
    purpose,
    full_name,
    company_name,
    products_or_services,
    country,
    phone_number,
    email,
    website,
    message,
  } = formdata;

  const handleChange = (e) => {
    setFormData((formdata) => ({
      ...formdata,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    setIsFormSubmitted(true);
    emailjs
      .send(
        "service_n4morw6",
        "template_a6m0cwa",
        formdata,
        "yKmBkpRKjxZCt_4Qw"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <div className="md:mt-10 mt-32 md:w-2/3 relative m-auto md:border rounded-xl md:shadow-lg">
      <section className="flex md:flex-row flex-col p-2 md:p-0 items-center">
        <aside className="md:w-2/3 p-2 md:m-3 rounded-xl md:px-4 md:py-10 bg-red-500 text-gray-200 flex flex-col gap-5 h-full">
          <div>
            <h1 className="text-xl font-semibold">Get in touch</h1>
            <p>
              We would love to hear from you. Our friendly team is alwas here to
              chat!
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <AiOutlineMail size={25} className="w-1/6 " />
            <div className="w-5/6 flex flex-col gap-1 ">
              <h1 className="font-bold text-lg underline">
                <a href="mailto:info@amwe.com.ng">Send us a mail</a>
              </h1>
              <p className="text-sm">Our friendly team is here to help</p>
              <i className="font-bold text-sm">
                <a href="mailto:info@amwe.com.ng">info@amwe.com.ng</a>
              </i>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <CiLocationOn size={25} className="w-1/6 " />
            <div className="w-5/6 flex flex-col gap-1">
              <h1 className="font-bold text-lg underline">
                <a href="https://www.google.com/maps/dir/9.1026712,7.448954/efab+mall+garki+area+11+google+map/@8.9206714,7.6241384,8.19z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x104e0b660a57fc4b:0xf7d6e88e02143540!2m2!1d7.5037303!2d9.0436293">
                  Office Address
                </a>
              </h1>
              <p className="text-sm">Come say 'hello' at our office</p>
              <i className="font-bold text-sm">
                <a href="https://www.google.com/maps/dir/9.1026712,7.448954/efab+mall+garki+area+11+google+map/@8.9206714,7.6241384,8.19z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x104e0b660a57fc4b:0xf7d6e88e02143540!2m2!1d7.5037303!2d9.0436293">
                  Exit E, 42 second floor, Efab Mall, block E extension, by the
                  Coca-Cola deport, Area 11 Garki, Abuja, Nigeria.
                </a>
              </i>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <AiOutlinePhone size={25} className="w-1/6 rotate-180" />
            <div className="w-5/6 flex flex-col gap-1">
              <h1 className="font-bold text-lg underline">
                <a href="tel:+2348063418882">Phone</a>
              </h1>
              <p className="text-sm">Monday - Friday from 8am to 5pm</p>
              <i className="font-bold text-sm">
                <a href="tel:+2348063418882">+234 806 341 8882</a>
              </i>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <AiOutlineWhatsApp size={25} className="w-1/6" />
            <div className="w-5/6 flex flex-col gap-1">
              <h1 className="font-bold text-lg underline">Whatsapp</h1>
              <p className="text-sm">
                Send us a message on Whatsapp on one these numbers
              </p>
              <i className="font-bold text-sm">
                <a href="https://wa.me/2348063418882">+234 806 341 8882</a>
              </i>
              <i className="font-bold text-sm">
                <a href="https://wa.me/2349039513393">+234 903 951 3393</a>
              </i>
            </div>
          </div>
          <div className="flex items-center gap-10 justify-center mb-5 mt-10 w-full text-gray-200 md:mt-32">
            <div>
              <a href="https://web.facebook.com/amweevent">
                <AiFillFacebook
                  size={25}
                  className="hover:translate-y-1 transition-all duration-500"
                />
              </a>
            </div>
            <div>
              <a href="https://youtu.be/RxXA6HZgI_g">
                <AiFillYoutube
                  size={25}
                  className="hover:translate-y-1 transition-all duration-500"
                />
              </a>
            </div>
            <div>
              <a href="#">
                <AiFillInstagram
                  size={25}
                  className="hover:translate-y-1 transition-all duration-500"
                />
              </a>
            </div>
            <div>
              <a href="#">
                <AiFillLinkedin
                  size={25}
                  className="hover:translate-y-1 transition-all duration-500"
                />
              </a>
            </div>
          </div>
        </aside>
        {!isFormSubmitted ? (
          <aside className="md:w-3/4 p-2 md:pl-5 font-light mt-10 md:mt-0">
            <div className="">
              <h1 className="text-2xl font-bold text-[#0F2F63]">
                Level Up Your Brand
              </h1>
              <p className="text-sm">
                Fill in the form below with your message, we will get in contact
                as soon as possible.
              </p>
            </div>
            <form className="mt-5 flex flex-col gap-2" onSubmit={handleSubmit}>
              <fieldset>
                <label htmlFor="purpose" className="text-sm">
                  Purpose of Contact
                </label>
                <select
                  name="purpose"
                  required
                  className="w-full border p-1 rounded-lg"
                  value={purpose}
                  onChange={handleChange}
                >
                  {" "}
                  <option value="Exhibiting">Exhibiting</option>
                  <option value="Visiting">Visiting.</option>
                  <option value="Sponsorship">Sponsorship</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Advertising">Advertising</option>
                  <option value="Publishing">Publishing</option>
                  <option value="Support">Support</option>
                  <option value="Others">Others</option>
                </select>
              </fieldset>
              <fieldset>
                <label htmlFor="full_name" className="text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  name="full_name"
                  className="w-full border p-1 rounded-lg"
                  placeholder="Usman Okafor"
                  value={full_name}
                  onChange={handleChange}
                  required
                />
              </fieldset>
              <fieldset>
                <label htmlFor="company_name" className="text-sm">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company_name"
                  className="w-full border p-1 rounded-lg"
                  placeholder="Good Health LTD"
                  value={company_name}
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="products_or_services" className="text-sm">
                  Products or Services
                </label>
                <input
                  type="text"
                  name="products_or_services"
                  className="w-full border p-1 rounded-lg"
                  placeholder="Health Insurance"
                  value={products_or_services}
                  onChange={handleChange}
                  required
                />
              </fieldset>
              <fieldset>
                <label htmlFor="country" className="text-sm">
                  Select Country
                </label>
                <select
                  name="country"
                  required
                  className="w-full border p-1 rounded-lg"
                  value={country}
                  onChange={handleChange}
                >
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
              </fieldset>
              <fieldset>
                <label htmlFor="phone_number" className="text-sm">
                  Phone Number With Country Code
                </label>
                <input
                  type="number"
                  name="phone_number"
                  className="w-full border p-1 rounded-lg"
                  placeholder="+234 803 654 2345"
                  value={phone_number}
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full border p-1 rounded-lg"
                  placeholder="healthinsurance@gmail.com"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </fieldset>
              <fieldset>
                <label htmlFor="website" className="text-sm">
                  Your Website
                </label>
                <input
                  type="text"
                  name="website"
                  className="w-full border p-1 rounded-lg"
                  placeholder="amwe.com.ng"
                  value={website}
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="message" className="text-sm">
                  Write Your Message
                </label>
                <textarea
                  name="message"
                  className="w-full h-32 border p-1 resize-none rounded-lg"
                  placeholder="Your message here..."
                  value={message}
                  onChange={handleChange}
                  required
                />
              </fieldset>
              <button
                type="submit"
                className="w-full bg-[#0F2F63] text-gray-200 p-1 rounded-lg shadow-lg hover:bg-[#0b1f3f]"
              >
                Submit
              </button>
            </form>
          </aside>
        ) : (
          <div className="flex md:flex-row flex-col-reverse items-center justify-between md:p-4">
            <figure className="md:w-1/3 w-full">
              <img src="cartoon.png" alt="" className="hidden md:block" />
              <img
                src="openHand.png"
                alt=""
                className="block md:hidden h-28 w-full"
              />
            </figure>
            <div className="flex flex-col gap-4 tracking-wider md:w-2/3 p-10 md:p-0">
              <h1 className="text-3xl text-[#0F2F63] font-bold">Thank You!</h1>
              <p className="font-bold">
                Many thanks for reaching out to AMWE 2023.
              </p>
              <p>We will be in contact shortly.</p>
              <p>
                Kind Regards, <br />
                <span className="font-bold">AMWE Team</span>
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ContactUs;
