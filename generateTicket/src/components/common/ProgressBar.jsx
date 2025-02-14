const ProgressBar = (prop) => {
  return (
    <div className="border border-[#24A0B5] my-4">
    <div className="grid grid-cols-2">
      <div className="bg-[#24A0B5] h-[4px] w-full"></div>
      <div className={`h-[4px] ${prop.step === prop.totalSteps ? "bg-[#24A0B5]" : ""}`}></div>
    </div>
  </div>
  )
}

export default ProgressBar