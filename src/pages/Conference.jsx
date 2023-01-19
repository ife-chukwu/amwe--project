import React, {useState} from 'react'

const Conference = () => {
  const [hoverLinks, setHoverLinks] = useState({
    hoverHome: false,
    hoverContact: false,
    hoverAbout: false,
    hoverMore: false
  }) 
  const toggleHomeTrue = () => {
    setHoverLinks({
      ...hoverLinks,
      hoverHome: true
    })
  }

  const toggleHomeFalse = () => {
    setHoverLinks({
      ...hoverLinks,
      hoverHome: false,
    });
  }

  return (
    <div className='mt-60 relative'>
      <nav className="grid place-items-center w-[70%] top-20 absolute mt-40">
        <ul className="flex justify-around w-full m-auto relative">
          <li className='absolute'
            onMouseEnter={toggleHomeTrue}
            onMouseLeave={toggleHomeFalse}
          >
            Home
            {hoverLinks.hoverHome && (
              <ul>
                <li>Customer</li>
                <li>Buyer</li>
                <li>Seller</li>
              </ul>
            )}
          </li>
          <li>
            About
            {hoverLinks.hoverAbout && (
              <ul>
                <li>Customer</li>
                <li>Buyer</li>
                <li>Seller</li>
              </ul>
            )}
          </li>
          <li>
            Contact
            {hoverLinks.hoverContact && <ul>
              <li>Customer</li>
              <li>Buyer</li>
              <li>Seller</li>
            </ul>}
          </li>
          <li>
            More
            {hoverLinks.hoverMore && (
              <ul>
                <li>Customer</li>
                <li>Buyer</li>
                <li>Seller</li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Conference