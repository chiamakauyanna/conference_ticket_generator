const StepHeader = (prop) => (
  <div className="flex lg:justify-between lg:items-center md:justify-between md:items-center lg:flex-row md:flex-row flex-col">
  <h1
    className="lg:text-[32px] md:text-[32px] text-[24px]"
    style={{ fontFamily: '"Nanum Myeongjo", serif' }}
  >
    {prop.title}
  </h1>
  <p>{prop.step}</p>
</div>
);

export default StepHeader