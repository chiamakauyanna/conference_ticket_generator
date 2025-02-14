import logo from "../../assets/logo.png";
import Button from "../common/Button";
import Navigation from "../common/Navigation";
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="w-screen container max-w-none">
      <div className= "border border-[#197686] flex justify-between items-center px-4 lg:mx-32 md:mx-18 mx-2 rounded-2xl my-6 h-[76px]">
        <img src={logo} alt="logo" className="w-[91.79px] h-[36px]"/>
        <Navigation/>
        <Button text='My Tickets' className='bg-gray-100 px-3 py-2 text-[#0A0C11] flex items-center gap-2 uppercase lg:text-md md:text-sm' icon={<FaArrowRightLong />}/>
        
      </div>
    </header>
  );
};

export default Header;
