import React, { useState } from 'react';

const PitchForm = ({updatePage}) => {
  // contact info
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [organization, setOrganization] = useState('');
  // technologies
  const [RaspberryPi, setRaspberryPi] = useState(false);
  const [Arduino, setArduino] = useState(false);
  const [CreativeCloud, setCreativeCloud] = useState(false);
  const [MagicLeap, setMagicLeap] = useState(false);
  const [PrinterKit, setPrinterKit] = useState(false);
  const [OculusRift, setOculusRift] = useState(false);
  // problems
  const [ProblemOne, setProblemOne] = useState(false);
  const [ProblemTwo, setProblemTwo] = useState(false);
  const [ProblemThree, setProblemThree] = useState(false);
  const [ProblemFour, setProblemFour] = useState(false);
  const [ProblemFive, setProblemFive] = useState(false);
  // company & pitch
  const [company, setCompany] = useState('');
  const [pitch, setPitch] = useState('')

  return (
    <div className="biggerContainer">
      <h3><span>Make Your Pitch</span></h3>
      <div className="flexContainer">
        <div className='two-lists'>
          <span className="listContainer">
            <h3> Technologies for your solution: </h3>
            <ul className="technology-list">
              <li>
                RaspberryPi Kit:
                {' '}
                <input type="checkbox" checked={RaspberryPi} onChange={(e) => setRaspberryPi(e.target.checked)} />
              </li>
              <li>
                Arduino:
                {' '}
                <input type="checkbox" checked={Arduino} onChange={(e) => setArduino(e.target.checked)} />
              </li>
              <li>
                Creative Cloud:
                {' '}
                <input type="checkbox" checked={CreativeCloud} onChange={(e) => setCreativeCloud(e.target.checked)} />
              </li>
              <li>
                Magic Leap:
                {' '}
                <input type="checkbox" checked={MagicLeap} onChange={(e) => setMagicLeap(e.target.checked)} />
              </li>
              <li>
                3D Printer Kit:
                {' '}
                <input type="checkbox" checked={PrinterKit} onChange={(e) => setPrinterKit(e.target.checked)} />
              </li>
              <li>
                OculusRift:
                {' '}
                <input type="checkbox" checked={OculusRift} onChange={(e) => setOculusRift(e.target.checked)} />
              </li>
            </ul>
          </span>
          <span className="listContainer">
            <h3><span> Focus of the problem you want to solve:</span></h3>
            <ul className="problem-list">
              <li>
                Education:
                {' '}
                <input type="checkbox" checked={ProblemOne} onChange={(e) => setProblemOne(e.target.checked)} />
              </li>
              <li>
                Environment:
                {' '}
                <input type="checkbox" checked={ProblemTwo} onChange={(e) => setProblemTwo(e.target.checked)} />
              </li>
              <li>
                Social-Economic Equality:
                {' '}
                <input type="checkbox" checked={ProblemThree} onChange={(e) => setProblemThree(e.target.checked)} />
              </li>
              <li>
                Mental Health:
                {' '}
                <input type="checkbox" checked={ProblemFour} onChange={(e) => setProblemFour(e.target.checked)} />
              </li>
              <li>
                Other:
                {' '}
                <input type="checkbox" checked={ProblemFive} onChange={(e) => setProblemFive(e.target.checked)} />
              </li>
            </ul>
          </span>
        </div>

        <div className="contactForm">
          <p>Name: </p>
          <input type="text" onChange={(e) => setName(e.target.value)} />
          <p>Address: </p>
          <input type="text" onChange={(e) => setAddress(e.target.value)} />
          <p>School / Organization: </p>
          <input type="text" onChange={(e) => setOrganization(e.target.value)} />
          <p>Funding company: </p>
          <input type="text" onChange={(e) => setCompany(e.target.value)} />
          <p>Pitch goes here: </p>
          <input type="text" onChange={(e) => setPitch(e.target.value)} className="pitchField"/>
        </div>
      </div>

    <a onClick={() => updatePage('Home')} className="btn">
      Submit your pitch!
    </a>
    </div>
  );
};

export default PitchForm;