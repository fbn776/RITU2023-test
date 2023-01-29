import React from 'react';
import comingSoonBG from '../public/coming_soon_bg.png'
import rituLogo from '../public/logo_white_sym.png';
import '../styles/coming-soon.css'
import SvgHamburger from '../components/Utils/SvgHamburger.jsx'


function Background() {
	return (
		<div className="bg">
  		<img src={comingSoonBG}/>
	  </div>);
}

function Header() {
	let [burgerState, setBugerState] = React.useState(true);
	return (<div className="header">
    <div className="logo">
      <img src={rituLogo} />
      RITU
    </div>
    <div className="nav">
    	<SvgHamburger action={setBugerState}/>
      <div className="nav-items">
        <label>Home</label>
        <label>Events</label>
        <label>Workshops</label>
        <label>Contact</label>
      </div>
      <SideMenu state={burgerState}/>
    </div>
  </div>);
}

function SideMenu({ state }) {
	let cls = state ? "side-nav closed" : "side-nav opened";
	return (
		<div className={cls}>
      <label>Home</label>
    	<label>Events</label>
      <label>Workshops</label>
      <label>Contact</label>
		</div>
	)
}

const comingsoon = () => {
	return (
		<div>
			<Background/>
			<Header/>
			<div className="body">
			   <div>COMING SOON</div>
			</div>
    </div>
	)
}

export default comingsoon;