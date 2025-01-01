import "../Styles/Navbar.css"; // Optional for custom styling


const Navbar = () => {
  return (
    <nav className=" mt-2 bg-black bg-opacity-45 z-10 fixed top-0 left-0 right-0" >
      <div className=""><img src="Hackthon\src\assets\images\GHR.png" alt="" /></div>
      <ul className="nav-links font-[Danger] uppercase text-3xl">
        <li ><a href="#home">Home</a></li>
        <li><a href="#themes">Themes</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#team">Team</a></li>
      </ul>
      <button id="Btn" className="bg-white text-black font-serif rounded-md px-6 py-2.5  "><a className="" href="#">Register Today</a></button>
    </nav>
  );
};

export default Navbar;
