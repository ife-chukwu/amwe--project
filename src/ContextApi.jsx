import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

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
  const { hoverAbout, hoverExhibit, hoverReg, hoverAct } = hoverLinks;

  const subCheckBox4 = [
    {
      id: "1",
      name: "Associations, Institutions, Societies",
    },
    {
      id: "2",
      name: "Consultancy, Reports, Analysis",
    },
    {
      id: "3",
      name: "Contract Manufacturing",
    },
    {
      id: "4",
      name: "Department Management (Laboratory, Pharmacy, Finance etc)",
    },

    {
      id: "5",
      name: "Education, Training, Quality Management",
    },
    {
      id: "6",
      name: "Facilities Management",
    },
    {
      id: "7",
      name: "Finance, Investment",
    },
    {
      id: "8",
      name: "Healthcare Providers, Hospitals, Clinics, Public, Private",
    },
    {
      id: "9",
      name: "HR, Recruitment",
    },
    {
      id: "10",
      name: "Insurance, Compliance",
    },
    {
      id: "11",
      name: "Logistics, Supply Chain Management",
    },
    {
      id: "12",
      name: "Publications, Marketing, Advertising, Communications",
    },
    {
      id: "13",
      name: "Research, Development",
    },
  ];
  const disposableArray2 = [
    {
      id: "1",
      name: "Bed Linen, Mattresses, Overlays",
    },
    {
      id: "2",
      name: "Compression Garments",
    },
    {
      id: "3",
      name: "Curtains",
    },
    {
      id: "4",
      name: "Gowns, Drapes, Towels",
    },

    {
      id: "5",
      name: "Protective Wear, Masks, Headwear, Footwear, Shoe Covers",
    },
    {
      id: "6",
      name: "Scrubs",
    },
    {
      id: "7",
      name: "Stockings",
    },
  ];
  const disposableArray3 = [
    {
      id: "1",
      name: "Absorbents",
    },
    {
      id: "2",
      name: "Adhesive Bandages, Tapes, Dressings, Gauze",
    },
    {
      id: "3",
      name: "Antiseptic Wipes",
    },
    {
      id: "4",
      name: "Decubitus Prevention Products",
    },

    {
      id: "5",
      name: "Surgical Adhesives",
    },
  ];
  const disposableArray = [
    {
      id: "1",
      name: "Baby Care Products",
    },
    {
      id: "2",
      name: "Bags, Sterile and Unsterile",
    },
    {
      id: "3",
      name: "Blades",
    },
    {
      id: "4",
      name: "Casting Materials",
    },

    {
      id: "5",
      name: "Condoms, STD Prevention, Hygiene Products",
    },
    {
      id: "6",
      name: "Cosmetics, Skin Care Products, Energising Creams",
    },
    {
      id: "7",
      name: "ECG Consumables, Electrodes",
    },
    {
      id: "8",
      name: "Gels, Liquids, Fluids",
    },
    {
      id: "9",
      name: "Gloves",
    },
    {
      id: "10",
      name: "Sterilising Products",
    },
    {
      id: "11",
      name: "Oral Care",
    },
    {
      id: "12",
      name: "Test Strips",
    },
  ];

  const subCheckBox3 = [
    {
      id: "1",
      name: "Charity/Non-profit organizations/NGO",
    },
    {
      id: "2",
      name: "Investors",
    },
    {
      id: "3",
      name: "Clinics/Medical Practice",
    },
    {
      id: "4",
      name: "Laboratory Agent/Dealer/Distributor",
    },

    {
      id: "5",
      name: "Community Health Services",
    },
    {
      id: "7",
      name: "Law",
    },
    {
      id: "8",
      name: "Consultancy",
    },
    {
      id: "9",
      name: "Manufacturer",
    },
    {
      id: "10",
      name: "Education",
    },
    {
      id: "11",
      name: "Media/Marketing",
    },
    {
      id: "12",
      name: "Finance/Banking",
    },
    {
      id: "13",
      name: "Hospital Private",
    },
    {
      id: "14",
      name: "Government",
    },
    {
      id: "15",
      name: "Professional Association",
    },
    {
      id: "16",
      name: "Health Regulator",
    },
    {
      id: "17",
      name: "Project Management",
    },
    {
      id: "18",
      name: "Healthcare/Medical Travel",
    },
    {
      id: "19",
      name: "Hospital Public",
    },
    {
      id: "20",
      name: "Healthcare Agent/Dealer/Distributor",
    },
    {
      id: "21",
      name: "Recruitment",
    },
    {
      id: "22",
      name: "Healthcare Association",
    },
    {
      id: "23",
      name: "Retailer/Pharmacy",
    },
    {
      id: "24",
      name: "Hospital Laboratory",
    },
    {
      id: "25",
      name: "Technology",
    },
    {
      id: "26",
      name: "Independent Laboratory",
    },
    {
      id: "27",
      name: "Transport",
    },
    {
      id: "28",
      name: "Insurance",
    },
    {
      id: "29",
      name: "Other",
    },
  ];

  const laboratory3 = [
    {
      id: "1",
      name: "Laboratory/Disposables",
    },
    {
      id: "2",
      name: "Investors",
    },
    {
      id: "3",
      name: "Electrophoresis Systems",
    },
    {
      id: "4",
      name: "Filtration",
    },

    {
      id: "5",
      name: "Heating, Cooling Systems",
    },
    {
      id: "7",
      name: "Hot Plates",
    },
    {
      id: "8",
      name: "Lab Automation System",
    },
    {
      id: "9",
      name: "Lighting",
    },
    {
      id: "10",
      name: "Microscopes and Accessories",
    },
    {
      id: "11",
      name: "Microtomes and Paraffin Dispensers",
    },
    {
      id: "12",
      name: "Scales, Balances",
    },
    {
      id: "13",
      name: "Ventilated Enclosures",
    },
    {
      id: "14",
      name: "Water Baths",
    },
  ];
  const laboratory1 = [
    {
      id: "1",
      name: "Anaerobic Systems",
    },
    {
      id: "2",
      name: "Calorimeters",
    },
    {
      id: "3",
      name: "Cell Counters",
    },
    {
      id: "4",
      name: "Centrifuges",
    },

    {
      id: "5",
      name: "Coagulators",
    },
    {
      id: "7",
      name: "Colorimeter, Light Measuring Devices",
    },
    {
      id: "8",
      name: "Electrochemistry Devices, Electrophoresis",
    },
    {
      id: "9",
      name: "Evaporators",
    },
    {
      id: "10",
      name: "Homogenisers",
    },
    {
      id: "11",
      name: "Laboratory Incubators",
    },
    {
      id: "12",
      name: "Membrane Dispensers",
    },
    {
      id: "13",
      name: "Point of Care Testing Device",
    },
    {
      id: "14",
      name: "Pumps",
    },
    {
      id: "15",
      name: "Refractometers",
    },
    {
      id: "16",
      name: "Titrators",
    },
    {
      id: "17",
      name: "Viscometers",
    },
  ];
  const laboratory7 = [
    {
      id: "1",
      name: "Drug Abuse Tests",
    },
    {
      id: "2",
      name: "Elisa Test Kits",
    },
    {
      id: "3",
      name: "Endotoxin Tests",
    },
    {
      id: "4",
      name: "Immunoassay Tests",
    },

    {
      id: "5",
      name: "In Vitro Diagnostic Tests",
    },
    {
      id: "7",
      name: "Molecular Diagnostic Tests",
    },
    {
      id: "8",
      name: "Point of Care Home Testing",
    },
    {
      id: "9",
      name: "Point of Care Professional Diagnostics",
    },
    {
      id: "10",
      name: "Rapid Allergy Tests",
    },
  ];
  const imaging1 = [
    {
      id: "1",
      name: "3D Print Visualisation, Analysis",
    },
    {
      id: "2",
      name: "Biopsy Tracking Systems",
    },
    {
      id: "3",
      name: "Dark Room Equipment, Supplies",
    },
    {
      id: "4",
      name: "Dopplers, Fetal Monitors, Accessories",
    },

    {
      id: "5",
      name: "Functional Diagnostics (ECG, EEG, EMG, TCD, PSG, TMS etc)",
    },
    {
      id: "7",
      name: "Lithotripters",
    },
    {
      id: "8",
      name: "Quality Assurance, Safety Control",
    },
    {
      id: "9",
      name: "Radiation Therapy Machines",
    },
    {
      id: "10",
      name: "Radiation Therapy Machines",
    },
  ];
  const imaging2 = [
    {
      id: "1",
      name: "Bone Densitometers",
    },
    {
      id: "2",
      name: "Contrast Agent Injectors",
    },
    {
      id: "3",
      name: "MRI Machines",
    },
    {
      id: "4",
      name: "Nuclear Medicine",
    },

    {
      id: "5",
      name: "PET",
    },
    {
      id: "7",
      name: "Lithotripters",
    },
    {
      id: "8",
      name: "Tubes, Accessories",
    },
    {
      id: "9",
      name: "X-Ray Machines, CT",
    },
  ];
  const laboratory2 = [
    {
      id: "1",
      name: "Blood Collection Equipment",
    },
    {
      id: "2",
      name: "Blood Transfusion Equipment",
    },
    {
      id: "3",
      name: "Labels, Tapes",
    },
    {
      id: "4",
      name: "Needles, Pipettes, Tips",
    },

    {
      id: "5",
      name: "Plastic Lab Containers",
    },
    {
      id: "7",
      name: "Swabs",
    },
    {
      id: "8",
      name: "Test Strips",
    },
    {
      id: "9",
      name: "Tissue Grinder Disposables",
    },
  ];
  const laboratory4 = [
    {
      id: "1",
      name: "Bottle Top Dispensers, Brushes, Bunsen Burners",
    },
    {
      id: "2",
      name: "Dilutors",
    },
    {
      id: "3",
      name: "Glassware, Plasticware, Steelware",
    },
    {
      id: "4",
      name: "Pipettors",
    },

    {
      id: "5",
      name: "Thermometers",
    },
  ];
  const laboratory5 = [
    {
      id: "1",
      name: "Acids, Solutions, Solvents",
    },
    {
      id: "2",
      name: "Culture Media",
    },
    {
      id: "3",
      name: "In Vitro Diagnostics Test Kits, Calibrators",
    },
    {
      id: "4",
      name: "Raw Materials",
    },

    {
      id: "5",
      name: "Salts, Minerals, Sugars, Stains, Dyes",
    },
  ];
  const laboratory6 = [
    {
      id: "1",
      name: "Autoclaves",
    },
    {
      id: "2",
      name: "Autoclaves",
    },
    {
      id: "3",
      name: "Lab Washers",
    },
    {
      id: "4",
      name: "Microbial Sensitivity Systems and Accessories",
    },
  ];
  const itArray1 = [
    {
      id: "1",
      name: "eHealth, Telemedicine, Telematics, Telemetry",
    },
    {
      id: "2",
      name: "mHealth, mobile IT, Wireless Technologies (Bluetooth, Wi-Fi)",
    },
    {
      id: "3",
      name: "Wearable Technologies, Smart Textiles",
    },
  ];
  const itArray2 = [
    {
      id: "1",
      name: "Readers for Patient Cards, Chip Cards, RFID Chips, Slips, Receipts",
    },
    {
      id: "2",
      name: "Tracking systems (RFID, RTLS)",
    },
  ];
  const itArray3 = [
    {
      id: "1",
      name: "Cloud Applications, Services",
    },
  ];
  const itArray4 = [
    {
      id: "1",
      name: "Big Data",
    },
    {
      id: "2",
      name: "Predictive Analytics",
    },
    {
      id: "3",
      name: "Real time Analytics",
    },
  ];
  const itArray5 = [
    {
      id: "1",
      name: "Data Governance",
    },
    {
      id: "2",
      name: "Data Security",
    },
    {
      id: "3",
      name: "Document Management",
    },
    {
      id: "4",
      name: "Image Archiving, PACS",
    },
  ];
  const itArray6 = [
    {
      id: "1",
      name: "Handhelds, Laptops, PCs, Printers, Monitors, Screens",
    },
  ];

  const itArray7 = [
    {
      id: "1",
      name: "Electronic Medical Record, Electronic Health Record Systems",
    },
    {
      id: "2",
      name: "Enterprise Resource Planning (ERP) Systems",
    },
    {
      id: "3",
      name: "Healthcare Information Systems, Software (HIS)",
    },
    {
      id: "4",
      name: "Video, Recording Systems",
    },
  ];
  const itArray8 = [
    {
      id: "1",
      name: "Liquid Handling",
    },
    {
      id: "2",
      name: "Microplate Instrumentation",
    },
    {
      id: "3",
      name: "Robotics",
    },
    {
      id: "4",
      name: "Workflow Software",
    },
  ];
  const itArray9 = [
    {
      id: "1",
      name: "Artificial Intelligence",
    },
    {
      id: "2",
      name: "Data Storage Solutions",
    },
    {
      id: "3",
      name: "Enterprise Informatics",
    },
    {
      id: "4",
      name: "Laboratory Big Data",
    },
    {
      id: "5",
      name: "Laboratory Information Management Systems",
    },
  ];
  const itArray11 = [
    {
      id: "1",
      name: "3G, 4G, 5G, Wi-Fi",
    },
    {
      id: "2",
      name: "Cybersecurity, Virus Protection, Intrusion Protection, Anti-Spa, Firewalls",
    },
    {
      id: "3",
      name: "VoIP Solutions",
    },
    {
      id: "4",
      name: "Web, Internet Solutions",
    },
  ];
  const itArray10 = [
    {
      id: "1",
      name: "App Providers",
    },
    {
      id: "2",
      name: "Diagnostic Software",
    },
    {
      id: "3",
      name: "eDischarge",
    },
    {
      id: "4",
      name: "ePrescribing, Pharma Management",
    },
    {
      id: "5",
      name: "GP Systems",
    },
    {
      id: "6",
      name: "Integration, Interoperability",
    },
    {
      id: "7",
      name: "Opensource",
    },
    {
      id: "8",
      name: "Patient Administration Systems, Clinical and Patient Portals",
    },
    {
      id: "9",
      name: "Security, Malware Vendors",
    },
  ];
  const itArray12 = [
    {
      id: "1",
      name: "Architecture, Interior Design",
    },
    {
      id: "2",
      name: "Construction, Engineering",
    },
  ];
  const itArray15 = [
    {
      id: "1",
      name: "Catering Trolleys",
    },
    {
      id: "2",
      name: "Kitchen Equipment",
    },
    {
      id: "3",
      name: "Kitchen Instruments",
    },
  ];
  const itArray17 = [
    {
      id: "1",
      name: "Ambulances",
    },
  ];
  const itArray16 = [
    {
      id: "1",
      name: "Installation, Equipment for Supply Conduits (Gas, Compressed Air, Oxygen, Water, Electricity etc)",
    },
    {
      id: "2",
      name: "Waste Management",
    },
  ];
  const itArray13 = [
    {
      id: "1",
      name: "Air Processing, Purification, Disinfection Systems",
    },
    {
      id: "2",
      name: "Gas Sterilisers",
    },
    {
      id: "3",
      name: "Hand Hygiene Systems, Equipment",
    },
    {
      id: "4",
      name: "Other Equipment for Hygiene, Sterilisation, Disinfection",
    },
    {
      id: "5",
      name: "Small Automated Sterilisers for Medical Practices",
    },
    {
      id: "6",
      name: "Sterilisation Disinfection Services",
    },
    {
      id: "7",
      name: "Sterilisation Equipment, Disinfection Equipment, Accessories, Autoclaves",
    },
    {
      id: "8",
      name: "Ultrasound Cleansing Equipment",
    },
    {
      id: "9",
      name: "Ultraviolet Disinfection Equipment",
    },
    {
      id: "10",
      name: "Washers, Disinfectors",
    },
  ];
  const itArray14 = [
    {
      id: "1",
      name: "Bathroom Fittings",
    },
    {
      id: "2",
      name: "Bed Headwall Systems",
    },
    {
      id: "3",
      name: "Beds, Stretchers, Homecare",
    },
    {
      id: "4",
      name: "Blood Donor Chairs",
    },
    {
      id: "5",
      name: "Cart, Trolley Systems",
    },
    {
      id: "6",
      name: "Ceiling Pendants",
    },
    {
      id: "7",
      name: "Doors",
    },
    {
      id: "8",
      name: "Examination, Operating Tables",
    },
    {
      id: "9",
      name: "IV Pole Stands",
    },
    {
      id: "10",
      name: "Lighting, Luminaries",
    },
    {
      id: "11",
      name: "Patient Entertainment",
    },
    {
      id: "12",
      name: "Revolving Chairs, Stools",
    },
    {
      id: "13",
      name: "Storage",
    },
    {
      id: "14",
      name: "Units, Cabinets",
    },
    {
      id: "15",
      name: "Waiting Room Seating, Benches",
    },
  ];

  const equipmentArray1 = [
    {
      id: "1",
      name: "Dermascope, Dermatoscope",
    },
    {
      id: "2",
      name: "Lasers",
    },
    {
      id: "3",
      name: "Lipo Reduction",
    },
  ];

  const equipmentArray4 = [
    {
      id: "1",
      name: "Cochlear Implants, Vestibular Sensory Systems",
    },
    {
      id: "2",
      name: "ENT Diagnostics",
    },
    {
      id: "3",
      name: "Hearing Aids, Accessories, Batteries",
    },
  ];
  const equipmentArray2 = [
    {
      id: "1",
      name: "Dental Material, Cements, Amalgam",
    },
    {
      id: "2",
      name: "Endodontic Equipment",
    },
    {
      id: "3",
      name: "General Instruments",
    },
    {
      id: "4",
      name: "Laboratory Instruments",
    },
    {
      id: "5",
      name: "Prosthodontic Equipment",
    },
  ];
  const equipmentArray3 = [
    {
      id: "1",
      name: "Prosthodontic Equipment",
    },
    {
      id: "2",
      name: "Balloon Dilators",
    },
    {
      id: "3",
      name: "Band Legators",
    },
    {
      id: "4",
      name: "Bronchoscopes",
    },
    {
      id: "5",
      name: "Colposcopes",
    },
    {
      id: "6",
      name: "Endoscopic Cameras, Accessories",
    },
    {
      id: "7",
      name: "Gastroscope, Duodenoscope, Colonoscopes, Sigmoidoscope",
    },
    {
      id: "8",
      name: "Laparoscopes",
    },
    {
      id: "9",
      name: "Laryngoscopes, Otoscopes, Pharyngoscopes",
    },
    {
      id: "10",
      name: "Ureteroscopes, Cytoscope",
    },
  ];
  const equipmentArray6 = [
    {
      id: "1",
      name: "Anaesthesia Machines",
    },
    {
      id: "2",
      name: "Breathing Filters",
    },
    {
      id: "3",
      name: "Connectors, Tubes",
    },
    {
      id: "4",
      name: "Emergency Training Devices, Emergency Bag, First Aid",
    },
    {
      id: "5",
      name: "Flowmeter, Spirometer, Vaporisers, Nebulisers",
    },
    {
      id: "6",
      name: "Guedel Airways and Oxygen Supplies",
    },
    {
      id: "7",
      name: "Heart Circulation Equipment",
    },
    {
      id: "8",
      name: "Pacemakers",
    },
    {
      id: "9",
      name: "Resuscitators, Defibrillators",
    },
    {
      id: "10",
      name: "Ventilators",
    },
  ];
  const equipmentArray7 = [
    {
      id: "1",
      name: "3D Printers, Simulators",
    },
    {
      id: "2",
      name: "Dialysis Machine",
    },
    {
      id: "3",
      name: "Filtration, Purification Systems",
    },
    {
      id: "4",
      name: "Fridges, Freezers",
    },
    {
      id: "5",
      name: "Patient Warming, Cooling Systems",
    },
    {
      id: "6",
      name: "Piercing Systems",
    },
    {
      id: "7",
      name: "Stress Test Machine",
    },
    {
      id: "8",
      name: "Suction, Infusion Pumps",
    },
    {
      id: "9",
      name: "Surgical Navigation Systems",
    },
    {
      id: "10",
      name: "Sutures, Sealing Devices",
    },
    {
      id: "11",
      name: "Used Medical Equipment",
    },
  ];
  const equipmentArray8 = [
    {
      id: "1",
      name: "Blood Glucose Monitors",
    },
    {
      id: "2",
      name: "Blood Pressure Monitors",
    },
    {
      id: "3",
      name: "Clinical Review Monitors",
    },
    {
      id: "4",
      name: "Diagnostic Monitors",
    },
    {
      id: "5",
      name: "Haemoglobin Meters",
    },
    {
      id: "6",
      name: "Multi Modality Monitors",
    },
    {
      id: "7",
      name: "Patient Weighing Systems",
    },
    {
      id: "8",
      name: "Pulsoximeters",
    },
    {
      id: "9",
      name: "Retinoscopes, Ophthalmoscopes",
    },
    {
      id: "10",
      name: "Stethoscopes",
    },
    {
      id: "11",
      name: "Surgical Monitors",
    },
    {
      id: "12",
      name: "Thermometers",
    },
    {
      id: "13",
      name: "Transcutaneous Monitors",
    },
    {
      id: "14",
      name: "Vital Monitoring Systems",
    },
  ];
  const equipmentArray9 = [
    {
      id: "1",
      name: "Abdominal Surgery",
    },
    {
      id: "2",
      name: "Cardiac and Thoracic Surgery",
    },
    {
      id: "3",
      name: "Dermatology and Cosmetic Surgery",
    },
    {
      id: "4",
      name: "Electrosurgical Instruments (HF)",
    },
    {
      id: "5",
      name: "General Surgery",
    },
    {
      id: "6",
      name: "Microsurgical Instruments",
    },
    {
      id: "7",
      name: "Minimal-Invasive Surgery (MIS)",
    },
    {
      id: "8",
      name: "Neurosurgical Instruments, Equipment",
    },
    {
      id: "9",
      name: "Ophthalmology",
    },
    {
      id: "10",
      name: "Vascular Surgical Instruments, Accessories",
    },
  ];
  const equipmentArray5 = [
    {
      id: "1",
      name: "Incubators",
    },
    {
      id: "2",
      name: "Newborn Screening Tests",
    },
    {
      id: "3",
      name: "SIDS Monitors, Fetal Monitoring Belts",
    },
    {
      id: "4",
      name: "Stem Cell Collection",
    },
  ];

  const orthopaedicArray1 = [
    {
      id: "1",
      name: "Pneumatic Tourniquets, Bands",
    },
  ];
  const orthopaedicArray2 = [
    {
      id: "1",
      name: "Implants, Prosthetics",
    },
    {
      id: "2",
      name: "Internal, External Fixation, Support Immobilisers",
    },
    {
      id: "3",
      name: "Orthopaedic Feet Aids, Shoes, Insoles",
    },
    {
      id: "4",
      name: "Orthopaedic Shockwave Therapy Equipment",
    },
  ];

  const disable = useRef();
  const disable2 = useRef();
  const disable3 = useRef();
  const disable4 = useRef();
  const disable5 = useRef();
  const disable6 = useRef();
  const disable7 = useRef();
  const disable8 = useRef();
  const disable9 = useRef();
  const disable10 = useRef();
  const disable11 = useRef();
  const disable12 = useRef();
  const disable13 = useRef();
  const disable14 = useRef();
  const disable15 = useRef();

  const [state, setState] = useState(false);

  const hide = () => {
    setState(true);
  };
  const [state1, setState1] = useState(false);

  const off = (event) => {
    setState1(true);
    event.currentTarget.disabled = true;

    if (!inputs.industries) {
      setValid9("This input is required");
      disable9.current.style.border = "1px solid red";
    } else {
      setValid9("");
    }
  };
  const [state2, setState2] = useState(false);

  const off2 = (event) => {
    setState2(true);
    event.currentTarget.disabled = true;
  };
  const [state3, setState3] = useState(false);

  const off3 = () => {
    setState3(true);
  };
  const [state4, setState4] = useState(false);

  const off4 = (event) => {
    setState4(true);
    event.currentTarget.disabled = true;
  };
  const [state5, setState5] = useState(false);

  const off5 = () => {
    setState5(true);
  };
  const [inputs, setInputs] = useState({
    status: "",
    fname: "",
    lname: "",
    job: "",
    company: "",
    email: "",
    email2: "",
    position: "",
    industries: "",
    address: "",
    city: "",
    State: "",
    country: "",
    country2: "",
    mobile: "",
    phone: "",
    companySize: "",
    Function: "",
    seniority: "",
    reason: false,
    sector: "",
    attendee: false,
    privacy: false,
    notice: false,
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    box1: false,
    box2: false,
    box3: false,
    box4: false,
    box5: false,
    box6: false,
    box7: false,
    box8: false,
    box9: false,
    box10: false,
    subBox1: false,
    subBox2: false,
    subBox3: false,
    subBox4: false,
    subBox5: false,
    disposable1: false,
    disposable2: false,
    disposable3: false,
    disposable4: false,
    disposable5: false,
    laboratory1: false,
    laboratory2: false,
    laboratory3: false,
    laboratory4: false,
    laboratory5: false,
    image1: false,
    image2: false,
    it1: false,
    it2: false,
    it3: false,
    it4: false,
    it5: false,
    it6: false,
    it7: false,
    it8: false,
    it9: false,
    it10: false,
    it11: false,
    infrastructure1: false,
    infrastructure2: false,
    infrastructure3: false,
    infrastructure4: false,
    infrastructure5: false,
    infrastructure6: false,
    equipment1: false,
    equipment2: false,
    equipment3: false,
    equipment4: false,
    equipment5: false,
    equipment6: false,
    equipment7: false,
    equipment8: false,
    equipment9: false,
    Orthopaedic1: false,
    Orthopaedic2: false,
    companyChoice: false,
    companyChoice2: false,
    btn: false,
    btn2: false,
    image2: false,
    ImagingChild: false,
    MedicalChild: false,
    MedicalChild2: false,
    MedicalChild3: false,
    MedicalChild4: false,
    MedicalChild5: false,
    MedicalChild6: false,
    MedicalChild7: false,
    MedicalChild8: false,
    MedicalChild9: false,
    Laboratory1: false,
    Laboratory2: false,
    Laboratory3: false,
    Laboratory4: false,
    Laboratory5: false,
    Laboratory6: false,
    Laboratory7: false,
    OrthopaedicChild1: false,
    OrthopaedicChild2: false,
    HealthChild: false,
    infrastructureChild1: false,
    infrastructureChild2: false,
    infrastructureChild3: false,
    infrastructureChild4: false,
    infrastructureChild5: false,
    infrastructureChild6: false,
    itChild1: false,
    itChild2: false,
    itChild3: false,
    itChild4: false,
    itChild5: false,
    itChild6: false,
    itChild7: false,
    itChild8: false,
    itChild9: false,
    itChild10: false,
  });

  const {
    lname,
    fname,
    status,
    email,
    job,
    company,
    email2,
    position,
    industries,
    address,
    State,
    city,
    country2,
    mobile,
    phone,
    country,
    companySize,
    Function,
    seniority,
    reason,
    sector,
    attendee,
    privacy,
    notice,
    one,
    two,
    three,
    four,
    five,
    six,
  } = inputs;

  const closeMessage = () => {
    setSubmit(false);
  };

  const handleChange2 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      fname: e.target.value,
    }));

    if (!inputs.status) {
      setValid("This input is required");
      disable.current.style.border = "1px solid red";
    } else {
      setValid("");
    }
    setValid2("");
    disable2.current.style.border = "";
  };
  const handleChange3 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      lname: e.target.value,
    }));

    if (!inputs.status) {
      setValid("This input is required");
      disable.current.style.border = "1px solid red";
    } else {
      setValid("");
    }
    if (!inputs.fname) {
      setValid2("This input is required");
      disable2.current.style.border = "1px solid red";
    } else {
      setValid2("");
    }
    setValid3("");
    disable3.current.style.border = "";
  };
  const handleChange5 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      company: e.target.value,
    }));

    if (!inputs.status) {
      setValid("This input is required");
      disable.current.style.border = "1px solid red";
    } else {
      setValid("");
    }
    if (!inputs.fname) {
      setValid2("This input is required");
      disable2.current.style.border = "1px solid red";
    } else {
      setValid2("");
    }

    if (!inputs.lname) {
      setValid3("This input is required");
      disable3.current.style.border = "1px solid red";
    } else {
      setValid3("");
    }
    if (!inputs.job) {
      setValid4("This input is required");
      disable4.current.style.border = "1px solid red";
    } else {
      setValid4("");
    }
    setValid5("");
    disable5.current.style.border = "";
  };
  const handleChange6 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      email: e.target.value,
    }));

    if (!inputs.status) {
      setValid("This input is required");
      disable.current.style.border = "1px solid red";
    } else {
      setValid("");
    }
    if (!inputs.fname) {
      setValid2("This input is required");
      disable2.current.style.border = "1px solid red";
    } else {
      setValid2("");
    }

    if (!inputs.lname) {
      setValid3("This input is required");
      disable3.current.style.border = "1px solid red";
    } else {
      setValid3("");
    }
    if (!inputs.job) {
      setValid4("This input is required");
      disable4.current.style.border = "1px solid red";
    } else {
      setValid4("");
    }

    if (!inputs.company) {
      setValid5("This input is required");
      disable5.current.style.border = "1px solid red";
    } else {
      setValid5("");
    }
    setValid6("");
    disable6.current.style.border = "";
  };
  const handleChange7 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      email2: e.target.value,
    }));
    setValid9("");

    if (!inputs.status) {
      setValid("This input is required");
      disable.current.style.border = "1px solid red";
    } else {
      setValid("");
    }
    if (!inputs.fname) {
      setValid2("This input is required");
      disable2.current.style.border = "1px solid red";
    } else {
      setValid2("");
    }

    if (!inputs.lname) {
      setValid3("This input is required");
      disable3.current.style.border = "1px solid red";
    } else {
      setValid3("");
    }
    if (!inputs.job) {
      setValid4("This input is required");
      disable4.current.style.border = "1px solid red";
    } else {
      setValid4("");
    }

    if (!inputs.company) {
      setValid5("This input is required");
      disable5.current.style.border = "1px solid red";
    } else {
      setValid5("");
    }
    if (!inputs.email) {
      setValid6("This input is required");
      disable6.current.style.border = "1px solid red";
    } else {
      setValid6("");
    }
    setValid7("");
    disable7.current.style.border = "";
  };
  const handleChange8 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      position: e.target.value,
    }));

    if (!inputs.status) {
      setValid("This input is required");
      disable.current.style.border = "1px solid red";
    } else {
      setValid("");
    }
    if (!inputs.email2) {
      setValid9("This input is required");
      disable.current.style.border = "1px solid red";
    } else {
      setValid9("");
    }
    if (!inputs.fname) {
      setValid2("This input is required");
      disable2.current.style.border = "1px solid red";
    } else {
      setValid2("");
    }

    if (!inputs.lname) {
      setValid3("This input is required");
      disable3.current.style.border = "1px solid red";
    } else {
      setValid3("");
    }
    if (!inputs.job) {
      setValid4("This input is required");
      disable4.current.style.border = "1px solid red";
    } else {
      setValid4("");
    }

    if (!inputs.company) {
      setValid5("This input is required");
      disable5.current.style.border = "1px solid red";
    } else {
      setValid5("");
    }
    if (!inputs.email) {
      setValid6("This input is required");
      disable6.current.style.border = "1px solid red";
    } else {
      setValid6("");
    }

    if (inputs.email2 !== inputs.email) {
      setValid7("Both email doesn't match");
      disable7.current.style.border = "1px solid red";
    } else {
      setValid7("");
    }

    setValid8("");
    disable8.current.style.border = "";
  };
  const handleChange9 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      industries: e.target.checked ? e.target.value : e.target.checked,
    }));

    if (!inputs.status) {
      setValid("This input is required");
      disable.current.style.border = "1px solid red";
    } else {
      setValid("");
    }
    if (!inputs.fname) {
      setValid2("This input is required");
      disable2.current.style.border = "1px solid red";
    } else {
      setValid2("");
    }

    if (!inputs.lname) {
      setValid3("This input is required");
      disable3.current.style.border = "1px solid red";
    } else {
      setValid3("");
    }
    if (!inputs.job) {
      setValid4("This input is required");
      disable4.current.style.border = "1px solid red";
    } else {
      setValid4("");
    }

    if (!inputs.company) {
      setValid5("This input is required");
      disable5.current.style.border = "1px solid red";
    } else {
      setValid5("");
    }
    if (!inputs.email) {
      setValid6("This input is required");
      disable6.current.style.border = "1px solid red";
    } else {
      setValid6("");
    }

    if (!inputs.email2) {
      setValid9("This input is required");
    }

    if (inputs.email2 !== inputs.email) {
      setValid7("Both email doesn't match");
      disable7.current.style.border = "1px solid red";
    } else {
      setValid7("");
    }
  };
  const handleChange10 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      address: e.target.value,
    }));

    disable8.current.style.border = "";
    setValid8("");
  };
  const handleChange11 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      city: e.target.value,
    }));

    if (!inputs.address) {
      setValid8("This input is required");
      disable8.current.style.border = "1px solid red";
    } else {
      setValid8("");
    }
    disable9.current.style.border = "";

    setValid9("");
  };
  const handleChange12 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      State: e.target.value,
    }));
    if (!inputs.city) {
      setValid9("This input is required");
      disable9.current.style.border = "1px solid red";
    } else {
      setValid9("");
    }

    setValid10("");
  };
  const handleChange13 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      country: e.target.value,
    }));

    if (!inputs.State) {
      setValid10("This input is required");
      disable10.current.style.border = "1px solid red";
    } else {
      setValid10("");
    }

    setValid11("");
  };
  const handleChange14 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      country2: e.target.value,
    }));

    if (!inputs.country) {
      setValid11("This input is required");
      disable11.current.style.border = "1px solid red";
    } else {
      setValid11("");
    }

    setValid12("");
  };

  const handleChange15 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      mobile: e.target.value,
    }));

    if (!inputs.country2) {
      setValid12("This input is required");
      disable12.current.style.border = "1px solid red";
    } else {
      setValid12("");
    }
    setValid13("");
  };
  const handleChange16 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      phone: e.target.value,
    }));

    if (!inputs.mobile) {
      setValid13("This input is required");
      disable13.current.style.border = "1px solid red";
    } else {
      setValid13("");
    }
  };
  const handleChange17 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      companySize: e.target.value,
    }));

    // disable14.current.style.border = "";
    setValid14("");
  };
  const handleChange18 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      Function: e.target.value,
    }));
    setValid15("");
    // disable15.current.style.border = ""

    if (!inputs.companySize) {
      setValid14("This input is required");
      disable14.current.style.border = "1px solid red";
    } else {
      setValid14("");
    }
  };
  const handleChange19 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      reason: e.target.checked,
    }));

    if (!inputs.reason) {
      setValid16("Yo Bro Howfar");
    } else {
      setValid16("");
    }
  };
  const handleChange20 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      seniority: e.target.value,
    }));

    if (!inputs.Function) {
      setValid15("This input is required");
      disable15.current.style.border = "1px solid red";
    } else {
      setValid15("");
    }
  };
  const handleChange21 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      attendee: e.target.value,
    }));
  };
  const handleChange22 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      privacy: e.target.value,
    }));
  };
  const handleChange23 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      notice: e.target.value,
    }));
  };

  const handleChange4 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      job: e.target.value,
    }));

    if (!inputs.status) {
      setValid("This input is required");
      disable.current.style.border = "1px solid red";
    } else {
      setValid("");
    }
    if (!inputs.fname) {
      setValid2("This input is required");
      disable2.current.style.border = "1px solid red";
    } else {
      setValid2("");
    }

    if (!inputs.lname) {
      setValid3("This input is required");
      disable3.current.style.border = "1px solid red";
    } else {
      setValid3("");
    }
    setValid4("");
    disable4.current.style.border = "";
  };
  const handleChange1 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      status: e.target.value,
    }));
    disable.current.style.border = "";
    setValid("");
  };

  const check2 = (e) => {
    setInputs((state) => ({
      ...state,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
    if (
      !inputs.one &&
      !inputs.two &&
      !inputs.three &&
      !inputs.four &&
      !inputs.five &&
      !inputs.six
    ) {
      setValid17("This checkbox is empty");
    } else {
      setValid17("");
    }
  };
  const subCheck = (e) => {
    setInputs((state2) => ({
      ...state2,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const disposable = (e) => {
    setInputs((state3) => ({
      ...state3,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const sixHandler = (e) => {
    setInputs((state3) => ({
      ...state3,
      companyChoice: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const twoHandler = (e) => {
    setInputs((state3) => ({
      ...state3,
      companyChoice2: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const fiveHandler = (e) => {
    setInputs((state3) => ({
      ...state3,
      companyChoice3: e.target.checked ? e.target.value : e.target.checked,
    }));
  };

  const laboratory = (e) => {
    setInputs((state4) => ({
      ...state4,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const imaging = (e) => {
    setInputs((state5) => ({
      ...state5,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const it = (e) => {
    setInputs((state6) => ({
      ...state6,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const handleTermsChange = (e) => {
    setInputs((state6) => ({
      ...state6,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const infrastructure = (e) => {
    setInputs((state7) => ({
      ...state7,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const equipment = (e) => {
    setInputs((state8) => ({
      ...state8,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const radioChange = (e) => {
    setInputs((state8) => ({
      ...state8,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const radioChange2 = (e) => {
    setInputs((state8) => ({
      ...state8,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const healthChild = (e) => {
    setInputs((state8) => ({
      ...state8,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const imagingChild = (e) => {
    setInputs((state9) => ({
      ...state9,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const medicalChild = (e) => {
    setInputs((state9) => ({
      ...state9,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const itChild = (e) => {
    setInputs((state9) => ({
      ...state9,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };

  const medicalChild2 = (e) => {
    setInputs((state9) => ({
      ...state9,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const medicalChild3 = (e) => {
    setInputs((state9) => ({
      ...state9,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const medicalChild4 = (e) => {
    setInputs((state9) => ({
      ...state9,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const medicalChild5 = (e) => {
    setInputs((state9) => ({
      ...state9,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const medicalChild6 = (e) => {
    setInputs((state9) => ({
      ...state9,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const medicalChild7 = (e) => {
    setInputs((state9) => ({
      ...state9,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const medicalChild8 = (e) => {
    setInputs((state9) => ({
      ...state9,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const laboratoryChild1 = (e) => {
    setInputs((state9) => ({
      ...state9,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const orthopaedicChild1 = (e) => {
    setInputs((state9) => ({
      ...state9,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const orthopaedicChild2 = (e) => {
    setInputs((state9) => ({
      ...state9,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const laboratoryChild2 = (e) => {
    setInputs((state9) => ({
      ...state9,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const laboratoryChild3 = (e) => {
    setInputs((state9) => ({
      ...state9,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const laboratoryChild4 = (e) => {
    setInputs((state9) => ({
      ...state9,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const laboratoryChild5 = (e) => {
    setInputs((state9) => ({
      ...state9,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const laboratoryChild6 = (e) => {
    setInputs((state9) => ({
      ...state9,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const laboratoryChild7 = (e) => {
    setInputs((state9) => ({
      ...state9,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };

  const medicalChild9 = (e) => {
    setInputs((state9) => ({
      ...state9,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const Orthopaedic = (e) => {
    setInputs((state9) => ({
      ...state9,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };
  const infrastructureChild = (e) => {
    setInputs((state9) => ({
      ...state9,
      [e.target.name]: e.target.checked ? e.target.value : e.target.checked,
    }));
  };

  const [valid, setValid] = useState("");
  const [valid2, setValid2] = useState("");
  const [valid3, setValid3] = useState("");
  const [valid4, setValid4] = useState("");
  const [valid5, setValid5] = useState("");
  const [valid6, setValid6] = useState("");
  const [valid7, setValid7] = useState("");
  const [valid8, setValid8] = useState("");
  const [valid9, setValid9] = useState("");
  const [valid10, setValid10] = useState("");
  const [valid11, setValid11] = useState("");
  const [valid12, setValid12] = useState("");
  const [valid13, setValid13] = useState("");
  const [valid14, setValid14] = useState("");
  const [valid15, setValid15] = useState("");
  const [valid16, setValid16] = useState("");
  const [valid17, setValid17] = useState("");

  const form = useRef();
  const handleDefault = (e) => {
    e.preventDefault();
    console.log(inputs);

    emailjs
      .send("service_tw8ilxa", "template_l1ye3l5", inputs, "yKmBkpRKjxZCt_4Qw")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  const CheckOut1 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      one: e.target.checked ? "Attend CME accredited conferences (paid)" : "",
    }));
    setValid17("");
  };

  const CheckOut2 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      two: e.target.checked ? " Keep up-to-date with new products/trends" : "",
    }));

    setValid17("");
  };

  const CheckOut3 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      three: e.target.checked ? " Attend workshops / training sessions" : "",
    }));

    setValid17("");
  };

  const CheckOut4 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      four: e.target.checked ? "  Purchase new products and services" : "",
    }));

    setValid17("");
  };

  const CheckOut5 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      five: e.target.checked
        ? "Strengthen my relationship with my existing suppliers or partners"
        : "",
    }));

    setValid17("");
  };

  const CheckOut6 = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      six: e.target.checked ? " Find new business partners and suppliers" : "",
    }));

    setValid17("");
  };

  const [submit, setSubmit] = useState(false);

  const submitHandle = () => {
    setSubmit(true);
  };

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
        submitHandle,
        submit,
        handleDefault,
        inputs,
        valid,
        state,
        state1,
        state2,
        state3,
        state4,
        state5,
        hide,
        off,
        off2,
        off3,
        off4,
        off5,
        disable,
        valid2,
        CheckOut1,
        CheckOut2,
        CheckOut3,
        CheckOut4,
        CheckOut5,
        CheckOut6,
        valid3,
        valid4,
        valid5,
        valid6,
        valid7,
        valid8,
        valid9,
        valid10,
        valid11,
        valid12,
        valid13,
        valid14,
        valid15,
        handleTermsChange,
        handleChange1,
        handleChange2,
        handleChange19,
        handleChange3,
        handleChange4,
        handleChange5,
        handleChange6,
        handleChange7,
        handleChange8,
        handleChange9,
        handleChange10,
        handleChange11,
        handleChange12,
        handleChange13,
        handleChange14,
        handleChange15,
        handleChange16,
        handleChange17,
        handleChange18,
        handleChange19,
        handleChange20,
        handleChange21,
        handleChange22,
        handleChange23,
        disable2,
        disable3,
        disable4,
        disable5,
        disable6,
        disable7,
        disable8,
        disable9,
        valid16,
        check2,
        subCheck,
        disposable,
        laboratory,
        imaging,
        it,
        infrastructure,
        equipment,
        Orthopaedic,
        valid17,
        subCheckBox3,
        disposableArray,
        disposableArray3,
        disposableArray2,
        subCheckBox4,
        laboratory1,
        laboratory2,
        laboratory3,
        laboratory4,
        laboratory5,
        laboratory6,
        laboratory7,
        equipmentArray1,
        equipmentArray2,
        equipmentArray3,
        equipmentArray4,
        equipmentArray5,
        equipmentArray6,
        equipmentArray7,
        equipmentArray8,
        equipmentArray9,
        imaging1,
        imaging2,
        orthopaedicArray1,
        orthopaedicArray2,
        itArray1,
        itArray2,
        itArray3,
        itArray4,
        itArray5,
        itArray6,
        itArray7,
        itArray8,
        itArray9,
        itArray10,
        itArray11,
        itArray12,
        itArray13,
        itArray14,
        itArray15,
        itArray16,
        itArray17,
        sixHandler,
        twoHandler,
        fiveHandler,
        radioChange,
        radioChange2,
        imagingChild,
        itChild,
        medicalChild,
        medicalChild2,
        medicalChild3,
        medicalChild4,
        medicalChild5,
        medicalChild6,
        medicalChild7,
        medicalChild8,
        medicalChild9,
        laboratoryChild1,
        laboratoryChild2,
        laboratoryChild3,
        laboratoryChild4,
        laboratoryChild5,
        laboratoryChild6,
        laboratoryChild7,
        orthopaedicChild1,
        orthopaedicChild2,
        healthChild,
        infrastructureChild,
        closeMessage,
        form,
        lname,
        fname,
        email,
        country,
        status,
        job,
        company,
        email2,
        position,
        industries,
        address,
        State,
        city,
        country2,
        mobile,
        phone,
        country,
        companySize,
        Function,
        seniority,
        reason,
        sector,
        attendee,
        privacy,
        notice,
        one,
        two,
        three,
        four,
        five,
        six,
      }}
    >
      {children}
    </myContextApi.Provider>
  );
};

export { myContextApi, ContextApi };
