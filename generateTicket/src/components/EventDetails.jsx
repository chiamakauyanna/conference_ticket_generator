const EventDetails = () => {
  return (
    <section className="border border-[#0E464F] rounded-3xl py-6">
    <h2
      className="lg:text-[62px] md:text-[62px] text-[48px]"
      style={{ fontFamily: '"Road Rage", serif' }}
    >
      Techember Fest ”25
    </h2>
    <p className="mx-auto pb-2 text-[#FAFAFA] font-light lg:px-14">
      Join us for an unforgettable experience at TechFest! Secure your
      spot now.
    </p>
    <div className="flex lg:justify-between md:justify-between items-center lg:flex-row md:flex-row flex-col mx-auto text-[#FAFAFA] font-light lg:px-14 md:px-14 md:mx-12 lg:mx-12">
      <p>📍 Delta State</p>
      <p className="hidden lg:flex md:flex ">| |</p>
      <p>March 15, 2025 | 7:00 PM</p>
    </div>
  </section>
  )
}

export default EventDetails