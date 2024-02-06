import {logo} from "../assets/index"
const NavBar = () => {
  return (
    <section>
      <nav className="w-full flex flex-row justify-around mt-5 font-satoshi font-bold ml-10">
      <div className="flex-1">
      <a href="/"><img src={logo} alt="Logo"/></a>
      </div>
      <div className="flex-1">
      <a href="">Home</a>
      </div>
        
      <div className="ml-auto mr-20">
      <div className="flex-1">
      <button className="px-3 py-1 bg-black text-white rounded-full">GitHub</button>
      </div>
      
      </div>
      </nav>
    </section>
  )
}

export default NavBar
