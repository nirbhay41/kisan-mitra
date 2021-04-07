import React from "react";
import "./Schemes.scss";
import ListItem from "../ListItem/ListItem";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function Schemes() {
  const schemes = [
    "In order to make agriculture more productive, sustainable, remunerative and climate resilient, the Government of India introduced National Mission for Sustainable Agriculture (NMSA) in the year 2014-15. To achieve these goals, the mission promotes location specific sustainable and best farming practices; soil conservation and moisture protection measures; soil nutrient management; efficient and sustainable water management practices with mainstreaming rainfed methods.As a major component of the mission, ‘On Farm Water Management’ (OFWM) is being implemented with the objective of increasing water use efficiency by promoting modern technologies such as micro irrigation and sustainable water management practices, efficient water consumption, better distribution channels along with secondary storage facilities.",

    "The extreme weather conditions such as droughts, floods and hailstorms cause crop failures and financial loss to the farmers every year. And therefore, to save them from these ill effects, the Government, by merging all previous crop insurance schemes, launched Pradhan Mantri Fasal Bima Yojana (PMFBY) from Kharif 2016 season with the aim to support production in agriculture by providing an affordable crop insurance system.Central government has made Aadhaar mandatoary for availing crop insurance from Kharif 2017 season. The scheme has been restructured with states given option to determine scale of finance at district level as per average yield.",

    "The Government of India has structured Pradhan Mantri Krishi Sinchayee Yojana (PMKSY) with the vision to extend the coverage of irrigation and improving water use efficiency in a focused manner. PMKSY focuses end to end solution on source creation, distribution, management, field application and extension activities. The Cabinet Committee on Economic Affairs had approved the irrigation scheme on July 1,2015.The Centre has structured the scheme with merging previous irrigation and water management programmes such as Accelerated Irrigation Benefit Programme (AIBP), Integrated Watershed Management Programme (IWMP) and On Farm Water Management (OFWM) scheme. The Centre has approved Rs. 50,000 crore for five years for the implementation of the flagship irrigation scheme across India.",

    "Parampragat Krishi Vikas Yojana (PKVY) is one of the important government schemes which encourages farmers for traditional and organic farming in India. Under the scheme, the Government of India provides a financial assistance to the farmers of Rs 50,000 per hectare every three years for organic inputs, certification, labelling, packaging, transportation and marketing of organic produce. The scheme focuses on reducing the ill effects of overuse of fertilisers and agrochemicals by promoting organic manures, bio-fertilisers and bio-pesticides. It helps improve the soil fertility by improving organic carbon in the soil which results in enhancing moisture holding capacity in the field too.",

    "National Bank for Agriculture and Rural Development (NABARD) has created a Micro Irrigation Fund with a corpus of Rs. 5,000 crore implemented from 2019-20. The objective of the fund is to facilitate the states in availing an interest subvented loan for expanding coverage of micro irrigation facilities by taking up special and innovative projects and also for incentivising micro irrigation beyond the provisions available under PMKSY to encourage farmers to install micro irrigation systems.",

    "MOVCDNER aims to develop the certified organic production in a value chain mode to link farmers with consumers and to support the development of entire value chain starting from organic inputs, seeds, certification and creation of facilities for collection, aggregation, processing, marketing and brand building initiatives. The scheme is being implemented in north eastern states Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim and Tripura",

    "In order connect the existing agricultural mandis on a common online market platform for trading agricultural commodities, Government of India, launched a pan-India portal, e-National Agriculture Market (eNAM) on April 14, 2016.So far, e-NAM has connected nearly 1,000 mandis in 18 states and three union territories. Implemented by Small Farmers Agribusiness Consortium (SFAC), eNAM aims at reducing transaction costs, bridging information asymmetries, and helping expansion of market access for farmers and other stakeholders. Since the implementation, e-NAM has registered a user base of 1.66 crore farmers, 1.31 lakh traders, 73,151 commission agents and 1,012 farmer producer organisation (FPOs).",

    "In a bid to provide adequate and timely credit to the farmers for their agricultural expenditures, the Central government had launched Kisan Credit Card (KCC) scheme in the year 1998. Under the scheme, the Government of India provides farm credit at a very subsidised rate of 4 percent per annum. Since 2019, the Centre has extended the benefits of Kisan Credit Card to animal husbandry, dairy and fisheries farmers for their working capital requirement and raising the existing limit of collateral free loan from Rs. 1 lakh to Rs.1.60 lakh.As part of the Aatmanirbhar Bharat package, the Centre has announced to cover 2.5 crore farmers under KCC scheme with a credit boost of Rs 2 lakh crore through a special drive. As a result, till October 19, 2020, according to the Government of India’s data, the package has disbursed Rs. 1.35 lakh crore to 1.5 crore farmers under the scheme.",

    "With an objective of conserving and maintaining soil nutrient and soil fertility, Soil Health Card (SHC) scheme issues soil health cards to the farmers every two years to provide a basis to address nutritional deficiencies in the fields. Under the scheme, soil testing is conducted to analyse the nutrient needs, then crop-wise fertilisers are recommended accordingly. This reduces cultivation cost by application of right fertilisers with right quantity.In the next five years, the Centre has targeted to cover 400,000 villages under individual farm holding soil sampling and testing, organise 2.5 lakh demonstrations, set up of 250 village level soil testing labs, strengthening 200 soil testing labs and promotion of micro-nutrients in two lakh hectare area.",

    "Lunched on February 24, 2019, PM Kisan Samman Nidhi Yojana makes transferring of Rs 6,000 per annum directly to the farmers’ bank accounts through Direct Benefit Transfer (DBT) in three instalments of Rs 2,000 each. The scheme supplements the financial needs of the small and marginal farmers in buying farm inputs and other agricultural expenses, The scheme aims to protect the farmers from falling in the vicious traps of local moneylenders and ensures their continuance in the farming activities.",

    "In order to reduce the consumption of diesel and electricity for agricultural irrigation, the Cabinet Committee on Economic Affairs (CCEA) approved Pradhan Mantri Kisan Urja Suraksha Evam Utthaan Mahabhiyaan (PM-Kusum) scheme in February 19, 2019. With a total Central financial support of Rs 34,422 crore, PM Kusum scheme aims to add solar and other renewable capacity of 25,750 MW by 2022.Under the scheme, Ministry of New and Renewable Energy has targeted to install 10,000 MW of decentralised grid connected renewable power plants of individual plant size up to 2 MW, installation of 20 lakh solar powered agricultural pumps of individual pump capacity up to 7.5 HP and solarisation of 15 lakh grid-connected irrigation pumps of individual capacity up to 7.5 HP.",
  ];

  const titles = [
    "National Mission For Sustainable Agriculture (NMSA)",
    "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    "Pradhan Mantri Krishi Sinchai Yojana (PMKSY)",
    "Paramparagat Krishi Vikas Yojana (PKVY)",
    "Micro Irrigation Fund scheme",
    "Mission Organic Value Chain Development for North Eastern Region (MOVCDNER)",
    "E-NAM",
    "Kisan Credit Card (KCC)",
    "Soil Health Card",
    "PM Kisan Samman Nidhi Yojana",
    "PM-Kusum",
  ];

  const href = [
    'https://nmsa.dac.gov.in',
    'https://pmfby.gov.in',
    'https://pmksy.gov.in',
    'https://pgsindia-ncof.gov.in/pkvy/Introduction.aspx',
    '',
    'https://asfac.assam.gov.in/portlets/mission-organic-value-chain-development-for-north-east-region',
    'https://www.enam.gov.in',
    '',
    'https://www.soilhealth.dac.gov.in',
    '',
    ''
  ]

  const list = titles.map((title, index) => (
    <ListItem
      no={index + 1}
      heading={title}
      data={schemes[index]}
      key={index}
      href={href[index]}
    />
  ));

  return (
    <>
      <Navbar backgroundStyle='bg-black'/>
      <div className="schemes">
        <h1 className="schemes_heading">Government Schemes</h1>
        <div className="schemes-list">{list}</div>
        <div className="schemes-footer">
          <Footer backgroundStyle='bg-black'/>
        </div>
      </div>
    </>
  );
}

export default Schemes;
