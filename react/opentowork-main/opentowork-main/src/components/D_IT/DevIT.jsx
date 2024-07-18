import './style.css'
import solodev from './per-loov-4wOkqiXNP7M-unsplash.jpg'
import python from './python.png'
import java from './java.png'
import cpp from './cpp.png'
import mysql from './mysql.png'
import nodejs from './nodejs.png'
import react from './react.png'
import ruby from './ruby.png'
import web from './web.png'

export default function DevIT() {
  return (
	<div className='gradient_dev'>
		<div className="row1  flex justify-center  py-10 ">
			<div className="row1imagearea w-[95vw] h-[70vh] bg-[#4a426a] rounded-xl flex justify-between">
				<div className="textarea w-[45%] flex items-center justify-center flex-col ">
					<h1 className=' text-5xl mx-5 my-4 text-white max-w-[80%]'>Developers and IT experts to scale your org.</h1>
					<h2 className=' text-xl mx-5 my-4 text-gray-400 max-w-[80%]'>Hire the particular experts and get your work done within your timeline.</h2>
				</div>
				<div className="imagearea w-[55%] flex items-center">
					<img className=' rounded-xl object-cover h-[95%] ml-3' src={solodev} alt="developer" />
				</div>
			</div>
		</div>
		<div className="row2  flex flex-col items-center justify-center py-10">
			<h1 className=' text-4xl text-white pb-10' >
				Find the best Developers and IT experts
			</h1>
			<div className="types flex ">
				<div className="type1 flex justify-center items-center w-[20vw] h-[20vh] bg-[#4a426a] rounded-xl mx-5 my-5">
					<img className='h-[80%] w-[80%] object-contain hover:scale-105' style={{transition:'0.3s'}} src={web} alt="da" />
				</div>
				<div className="type1 flex justify-center items-center w-[20vw] h-[20vh] bg-[#4a426a] rounded-xl mx-5 my-5">
					<img className='h-[80%] w-[80%] object-contain hover:scale-105' style={{transition:'0.3s'}} src={react} alt="dd" />
				</div>
				<div className="type1 flex justify-center items-center w-[20vw] h-[20vh] bg-[#4a426a] rounded-xl mx-5 my-5">
					<img className='h-[80%] w-[80%] object-contain hover:scale-105' style={{transition:'0.3s'}} src={ruby} alt="dd" />
				</div>
				<div className="type1 flex justify-center items-center w-[20vw] h-[20vh] bg-[#4a426a] rounded-xl mx-5 my-5">
					<img className='h-[80%] w-[80%] object-contain hover:scale-105' style={{transition:'0.3s'}} src={nodejs} alt="ds" />
				</div>
			</div>
			<div className="types flex justify-between">	
				<div className="type1 flex justify-center items-center w-[20vw] h-[20vh] bg-[#4a426a] rounded-xl mx-5 my-5">
					<img className='h-[80%] w-[80%] object-contain hover:scale-105' style={{transition:'0.3s'}} src={mysql} alt="sd" />
				</div>
				<div className="type1 flex justify-center items-center w-[20vw] h-[20vh] bg-[#4a426a] rounded-xl mx-5 my-5">
					<img className='h-[80%] w-[80%] object-contain hover:scale-105' style={{transition:'0.3s'}} src={python} alt="dsd" />
				</div>
				<div className="type1 flex justify-center items-center w-[20vw] h-[20vh] bg-[#4a426a] rounded-xl mx-5 my-5">
					<img className='h-[80%] w-[80%] object-contain hover:scale-105' style={{transition:'0.3s'}} src={cpp} alt="sd" />
				</div>
				<div className="type1 flex justify-center items-center w-[20vw] h-[20vh] bg-[#4a426a] rounded-xl mx-5 my-5">
					<img className='h-[80%] w-[80%] object-contain hover:scale-105' style={{transition:'0.3s'}} src={java} alt="dsd" />
				</div>
			</div>
		</div>
	</div>
  )
}