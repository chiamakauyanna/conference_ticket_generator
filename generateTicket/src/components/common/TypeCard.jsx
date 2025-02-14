const TypeCard = (prop) => {
  return (
    <div className="flex items-center justify-center gap-6 py-4 border border-[#0E464F] rounded-lg lg:flex-row md:flex-row flex-col"  aria-describedby="TicketPriceError">
      {/* Free Ticket Card */}
      <div
        className={`rounded-lg border-2  border-[#197686] ${prop.selectedTicketType === "Free" ? "bg-[#12464E]" : "bg-transparent"} lg:w-40 md:w-40 w-58 p-2.5  text-left cursor-pointer hover:bg-[#2C545B]`}
        onClick={() => prop.onTicketSelect("Free")}
      >
        <h2 className="font-semibold text-2xl mb-2">Free</h2>
        <p className="font-light">REGULAR ACCESS</p>
        <p className="text-sm font-light">20/52</p>
      </div>

      {/* VIP Ticket Card */}
      <div
        className={`rounded-lg border-2 border-[#197686] ${prop.selectedTicketType === "VIP" ? "bg-[#12464E]" : "bg-transparent"} lg:w-40 md:w-40 w-58 p-2.5 text-left cursor-pointer hover:bg-[#2C545B]`}
        onClick={() => prop.onTicketSelect("VIP")}
      >
        <h2 className="font-semibold text-2xl mb-2">$150</h2>
        <p className="font-light">VIP ACCESS</p>
        <p className="text-sm font-light">20/52</p>
      </div>

      {/* VVIP Ticket Card */}
      <div
        className={`rounded-lg border-2 border-[#197686] ${prop.selectedTicketType === "VVIP" ? "bg-[#12464E]" : "bg-transparent"} lg:w-40 md:w-40 w-58 p-2.5 text-left cursor-pointer hover:bg-[#2C545B]`}
        onClick={() => prop.onTicketSelect("VVIP")}
      >
        <h2 className="font-semibold text-2xl mb-2">$150</h2>
        <p className="font-light">VVIP ACCESS</p>
        <p className="text-sm font-light">20/52</p>
      </div>
    </div>
  );
};

export default TypeCard;
