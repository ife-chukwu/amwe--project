import React, {useEffect} from 'react'

const WelcomeMessage = () => {

 useEffect(() => {
   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
 }, []);

  return (
    <div className="md:p-10 py-10 px-5 relative md:mt-48  mt-32 md:w-2/3 m-auto">
      <h1 className="md:text-3xl mb-5 font-bold text-center text-2xl text-[#0F2F63]">
        WELCOME MESSAGE
      </h1>
      <div className="flex md:items-center md:flex-row flex-col gap-10">
        <figure className="md:w-1/2">
          <img
            src="profile.jpeg"
            alt="CEO's Profile"
            className="w-full h-full rounded-lg"
          />
        </figure>
        <p className="md:w-1/2">
          I am highly excited to welcome you all, first to Africa, a land of
          diverse cultural heritage and a landmass of hospitality. Secondly, I
          would like to welcome you to{" "}
          <span className="font-bold">
            ALL-AFRICA MEDICAL & WELLNESS EXPO (2023)
          </span>
          , the African biggest event. Also, I welcome you to Nigeria, the host
          of the first edition of this great event; a country highly ranked as
          one of the topmost hospitality countries, always ready to recieve
          visitors heartwarmingly.
        </p>
      </div>
      <p className="mt-10">
        Our platform is set to receive the world of healthcare together with an
        excessively large number of individuals from all works of life for the
        following reasons:
      </p>
      <div className="my-5">
        <li>
          To collaborate towards developing a healthier and more sustainable
          healthcare for every part of the world
        </li>
        <li>
          To create a breeding ground for continuous learning, training, and
          retraining of medical personnels via conferences, symposia, workshops,
          CPD, OPD CME, webinar, seminars, sharing of views and exchange of
          ideas or knowledge
        </li>
        <li>
          To create opportunity for exhibiting abilities, products and services
          under the spotlight
        </li>
        <li>
          To create opportunity for meeting and establishing common ties with
          potential customers globally
        </li>
        <li>
          To keep abreast with new innovations and the latest technologies
        </li>
        <li>
          To increase your international presence and strengthen the current
          position of your business in the international market
        </li>
      </div>
      <p>
        We are proud to be called the African biggest because our platform is
        the only platform that is designed to bring all African countries to
        work together with the world for a healthier Africa. Unlike many similar
        events, our platform has no preference for a particular section of
        Africa. It is indeed, of great benefit for all Africans and also to all
        those wishing to know the value of African Market and how it works.
      </p>
      <p className="my-5">
        We believe that the healthcare sector deserves the best from all of us
        to make the world a healthier place. Unfortunately, a crowd of
        challenges have highly plagued the industry, most especially in most of
        the developing nations. The adverse effect of this is quite enormous.
        All these put together slows down the progress in the industry. However,
        we believe that bringing the stakeholders to work together, the
        prevailing situation and trend of things will change for better.
      </p>
      <p>
        Therefor, <span className="font-bold">AMWE</span> has come to stay and{" "}
        <span className="font-bold">AMWE 2023</span> is a must attend for all
        who wish to take advantage of the basic opportunities aforementioned.
      </p>
      <p className="my-5">
        Sincerely,
        <br />
        Usman Isah
        <br />
        <p className="font-bold">
          Founder & CEO All Africa Medical & Wellness Expo LTD
        </p>
      </p>
      <section className="py-10">
        <h1 className="text-lg">Powered By:</h1>
      </section>
    </div>
  );
}

export default WelcomeMessage