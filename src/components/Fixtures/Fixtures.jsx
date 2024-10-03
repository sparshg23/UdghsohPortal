import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Fixtures.css'
// import Navbar2 from '../navbar/Navbar2';
import Input from '../Input/Input';

const Fixtures = () => {
  
    const navigate = useNavigate();  // Initialize useNavigate
    
    // Function to navigate to football page when the card is clicked
    const naviFootball = () => {
      navigate('/football');  // Navigates to the football route
    };

    const naviCricket = () => {
      navigate('/cricket');  // Navigates to the football route
    };

    const naviBadminton = () => {
      navigate('/badminton');  // Navigates to the football route
    };

    const naviBasketball = () => {
      navigate('/basketball');  // Navigates to the football route
    };

    const naviChess = () => {
      navigate('/chess');  // Navigates to the football route
    };

    const naviKabaddi = () => {
      navigate('/kabaddi');  // Navigates to the football route
    };

    const naviKhoKho = () => {
      navigate('/kho-kho');  // Navigates to the football route
    };

    const naviLawnTennis= () => {
      navigate('/lawn-tennis');  // Navigates to the football route
    };

    const naviUltimateFrishbee = () => {
      navigate('/ultimate-frishbee');  // Navigates to the football route
    };

    const naviHockey = () => {
      navigate('/hockey');  // Navigates to the football route
    };

    const naviSquash = () => {
      navigate('/squash');  // Navigates to the football route
    };

    const naviTableTennis = () => {
      navigate('/table-tennis');  // Navigates to the football route
    };

    const naviVolleyball = () => {
      navigate('/volleyball');  // Navigates to the football route
    };




  return (
    <>
    {/* <Navbar2/> */}
    <div className="backgroundImage">
          <img className="w-[100%] h-[100%] " src="./commonbg.webp" alt="" />
      </div>

    <Input/>
    

    <div className='mt-24'>
        <h2 id='fixture'>Fixtures</h2>
    </div>
    <div className='containerr flex flex-row w-[100%] flex-wrap justify-center content-center gap-7'>
    
      <div className="sports Football  " onClick={naviFootball} >
        <img src="https://live.staticflickr.com/65535/52346081405_d8c1db4e64_w.jpg"   className="card-img-top" alt="Fixture 1" id='image'/>
        <div className="card-body text-center">
          <h5 className="card-title self-center">Football</h5>
        </div>
      </div>

      
      <div className="sports Cricket"onClick={naviCricket} >
        <img src="https://live.staticflickr.com/65535/52345655506_afcbbc0b43_w.jpg" className="card-img-top" alt="Fixture 1" id='image'/>
        <div className="card-body text-center">
          <h5 className="card-title">Cricket</h5>
        </div>
      </div>

      
      <div className="sports Badminton " onClick={naviBadminton} >
        <img src="https://live.staticflickr.com/65535/52345655636_fa9218d45e_n.jpg" className="card-img-top" alt="Fixture 1" id='image'/>
        <div className="card-body text-center">
          <h5 className="card-title">Badminton </h5>
        </div>
      </div>

      
      <div className="sports Volleyball " onClick={naviVolleyball}>
        <img src="https://live.staticflickr.com/65535/52312513168_c3bdfb59b3_w.jpg" className="card-img-top" alt="Fixture 1" id='image'/>
        <div className="card-body text-center">
          <h5 className="card-title">Volleyball</h5>
        </div>
      </div>


      <div className="sports Basketball  " onClick={naviBasketball}>
        <img src="https://live.staticflickr.com/65535/52312513238_7aeba39a52_w.jpg"  className="card-img-top" alt="Fixture 1" id='image' />
        <div className="card-body text-center">
          <h5 className="card-title">Basketball</h5>
        </div>
      </div>


      <div className="sports Hockey  " onClick={naviHockey}>
        <img src="https://live.staticflickr.com/65535/52312512833_16e26e1003_w.jpg"  className="card-img-top" alt="Fixture 1" id='image'/>
        <div className="card-body text-center">
          <h5 className="card-title">Hockey</h5>
        </div>
      </div>

      <div className="sports Chess " onClick={naviChess}>
        <img src="https://live.staticflickr.com/65535/52345960989_e9bca2e00d_z.jpg"  className="card-img-top" alt="Fixture 1" id='image'/>
        <div className="card-body text-center">
          <h5 className="card-title">Chess</h5>
        </div>
      </div>

      <div className="sports Kabaddi " onClick={naviKabaddi}>
        <img src="https://live.staticflickr.com/65535/52345900268_8ed432f261.jpg" className="card-img-top" alt="Fixture 1" id='image'/>
        <div className="card-body text-center">
          <h5 className="card-title">Kabaddi </h5>
        </div>
      </div>

      <div className="sports Kho-Kho " onClick={naviKhoKho}>
        <img src="https://live.staticflickr.com/65535/52345900263_641f93d9a0_n.jpg" className="card-img-top" alt="Fixture 1" id='image'/>
        <div className="card-body text-center">
          <h5 className="card-title">Kho-Kho </h5>
        </div>
      </div>


      <div className="sports Lawn-Tennis " onClick={naviLawnTennis} >
        <img src="https://live.staticflickr.com/65535/52312642335_f10eef07d9_w.jpg" className="card-img-top" alt="Fixture 1" id='image'/>
        <div className="card-body text-center">
          <h5 className="card-title">Lawn-Tennis </h5>
        </div>
      </div>


      <div className="sports Ultimate-Frisbee " onClick={naviUltimateFrishbee}>
        <img src="https://live.staticflickr.com/65535/52345900328_7242180fe3.jpg" className="card-img-top" alt="Fixture 1" id='image'/>
        <div className="card-body text-center">
          <h5 className="card-title">Ultimate-Frisbee </h5>
        </div>
      </div>

      {/* <div className="sports Hockey " onClick={naviHockey}>
        <img src="https://live.staticflickr.com/65535/52312512833_16e26e1003_w.jpg" className="card-img-top" alt="Fixture 1" id='image'/>
        <div className="card-body text-center">
          <h5 className="card-title">Hockey </h5>
        </div>
      </div> */}

      <div className="sports Squash " onClick={naviSquash}>
        <img src="https://live.staticflickr.com/65535/52345655546_ff396412bc.jpg" className="card-img-top" alt="Fixture 1" id='image'/>
        <div className="card-body text-center">
          <h5 className="card-title">Squash </h5>
        </div>
      </div>


      <div className="sports Table-Tennis " onClick={naviTableTennis}>
        <img src="https://live.staticflickr.com/65535/52312627659_5cac4cccb0.jpg" className="card-img-top" alt="Fixture 1" id='image'/>
        <div className="card-body text-center">
          <h5 className="card-title">Table-Tennis </h5>
        </div>
      </div>


      </div>
      
    </>
  );
};

export default Fixtures;
