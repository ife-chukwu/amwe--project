import React, { useState } from "react";

const myContextApi = React.createContext();

const ContextApi = ({ children }) => {
  const [showNavlinks, setShowNavlinks] = useState(false);
  const [hoverLinks, setHoverLinks] = useState({
    hoverAbout: false,
    hoverExhibit: false,
    hoverReg: false,
    hoverAct: false,
  });

  const toggleNavlinks = () => {
    setShowNavlinks((prev) => !prev);
  };

  const toggleAboutTrue = () => {
    setHoverLinks({
      ...hoverLinks,
      hoverAbout: true,
      hoverExhibit: false,
      hoverReg: false,
      hoverAct: false,
    });
  };

  const toggleExhibitTrue = () => {
    setHoverLinks({
      ...hoverLinks,
      hoverExhibit: true,
      hoverAbout: false,
      hoverReg: false,
      hoverAct: false,
    });
  };
  const toggleRegTrue = () => {
    setHoverLinks({
      ...hoverLinks,
      hoverReg: true,
      hoverExhibit: false,
      hoverAbout: false,
      hoverAct: false,
    });
  };

  const toggleActTrue = () => {
    setHoverLinks({
      ...hoverLinks,
      hoverAct: true,
      hoverExhibit: false,
      hoverReg: false,
      hoverAbout: false,
    });
  };

  const toggleLinksFalse = () => {
    setHoverLinks({
      ...hoverLinks,
      hoverAbout: false,
      hoverExhibit: false,
      hoverReg: false,
      hoverAct: false,
    });
  };
  const {hoverAbout, hoverExhibit, hoverReg, hoverAct} = hoverLinks

  return (
    <myContextApi.Provider
      value={{
        showNavlinks,
        toggleNavlinks,
        hoverLinks,
        hoverAbout,
        hoverExhibit,
        hoverReg,
        hoverAct,
        toggleAboutTrue,
        toggleExhibitTrue,
        toggleRegTrue,
        toggleActTrue,
        toggleLinksFalse,
      }}
    >
      {children}
    </myContextApi.Provider>
  );
};

export { myContextApi, ContextApi };
