import './style.css'
import { useState } from "react"

export default function Welcome() {
	const [text,setText] = useState({buttontag:"Apply as client"})
	function handleChange(event) {
		const { name, value,} = event.target;	
		setText((pre) => {
		  return {
			...pre,
			[name]:value,
		  };
		});
	  }
	const mystyle = {
		fontFamily: `'Lobster', cursive`
	}
  return (
	<div className="gradient_home text-white">
		<div className="navbar">
			<h1 className=" text-2xl px-5 pt-3 text-blue-600" style={{mystyle}}>OpenToWork</h1>
		</div>
		<div className="flex pt-20 flex-col text-center bg-cyan- w-[100vw] h-[100vh]">
			<h1 className=" pt-5 text-5xl font-semibold" style={{fontFamily:`'Dosis', 'sans-serif'`}}>Welcome Hustler!</h1>
			<h2 className=" pt-5 text-4xl font-semibold" style={{fontFamily:`'Dosis', 'sans-serif'`}}>Get Started!</h2>
		<div className="check_boxes flex justify-center pt-10 py-10 ">
			<div className="welcome_form border-2 h-40 w-[271px]  mx-5 rounded-xl border-gray-300 cursor-pointer hover:border-purple-600">
				<input on className=" mt-5 ml-[6rem] absolute " type="radio" name="buttontag" value="Apply as client" id="client" onChange={handleChange} checked={text.buttontag === "Apply as client"} />
				<label className="cursor-pointer" htmlFor="client"><p className=" mx-auto text-xl font-semibold pt-10 text-left h-[100%] w-[100%] relative max-w-[70%]">
					I am a client hiring for the project.
				</p></label>
				
			</div>
			<div className=" welcome_form border-2 border-gray-300 mx-5 h-40 w-[271px] rounded-xl cursor-pointer hover:border-purple-600">
				<input className=" mt-5 ml-[6rem] absolute" type="radio" name="buttontag" value="Apply as freelancer" id="clien"  onChange={handleChange} checked={text.buttontag === "Apply as freelancer"}/>
				<label className="cursor-pointer" htmlFor="clien"><p className=" mx-auto text-xl font-semibold pt-10 text-left h-[100%] w-[100%] relative max-w-[70%]">
					I am freelancer, looking for work.
				</p></label>
			</div>
		</div>
		<div>
			<button className="py-3 px-10 rounded-full cursor-pointer bg-purple-600 text-white shadow-purple-500 " type="submit" >{text.buttontag}</button>
			<p className="mt-5">Already have an account <a className=" text-purple-600" href="/">Log in</a></p>
		</div>
		</div>
	</div>
  )
}