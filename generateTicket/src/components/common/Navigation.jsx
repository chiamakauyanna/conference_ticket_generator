const Navigation = () => {
  return (
    <nav>
      <ul
        className="lg:flex md:flex lg:gap-6 md:gap-2 lg:text-lg md:text-md hidden"
        style={{ fontFamily: '"Nanum Myeongjo", serif' }}
      >
        <li>Events</li>
        <li className="text-[#B3B3B3]">My Tickets</li>
        <li className="text-[#B3B3B3]">About Project</li>
      </ul>
    </nav>
  );
};

export default Navigation;
