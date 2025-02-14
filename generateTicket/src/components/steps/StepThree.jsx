import Button from "../common/Button";
import ticket from "../../assets/bg.png";
import barCode from "../../assets/BarCode.png";
import { TicketContext } from "../../context/FormContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import StepHeader from "../common/StepHeader";
import ProgressBar from "../common/ProgressBar";

const StepThree = () => {
  const { formData, setFormData } = useContext(TicketContext);
  const navigate = useNavigate();

  const handleReBook = () => {
    setFormData("");
    navigate("/");
  };
  return (
    <div className="lg:w-[700px] md:w-[700px] w-[370px] bg-[#041E23] p-4 mx-auto border border-[#0E464F] my-7 rounded-4xl text-center">
      {/* Step Header */}
      <StepHeader title="Ready" step="Step 3/3" />

      {/* Progress Bar */}
      <ProgressBar step={3} totalSteps={3} />

      <h1
        className="lg:text-[32px] md:text-[32px] text-[24px] mb-4"
        style={{ fontFamily: '"Alatsi", serif' }}
      >
        Your Ticket is Booked!
      </h1>
      <p>
        Check your email for a copy or you can{" "}
        <span className="font-semibold">download</span>
      </p>

      {/* Generated ticket section */}
      <section className="flex justify-center mt-9 relative">
        <img src={ticket} alt="ticket design" className="h-[600px]" />
        <div className="w-[260px] h-[446px] border border-[#24A0B5] flex-col flex justify-center rounded-2xl absolute items-center mt-4 bg-[#031E21] z-10">
          <h2
            className="text-[34px]"
            style={{ fontFamily: '"Road Rage", serif' }}
          >
            Techember Fest ”25
          </h2>
          <p className="mx-auto text-[#FAFAFA] font-light text-[10px]">
            📍 04 PTI road, Effurun, Delta State
          </p>
          <p className="mx-auto text-[#FAFAFA] font-light text-[10px] mb-3">
            📅 March 15, 2025 | 7:00 PM
          </p>

          <div className="w-[140px] h-[140px] border-3 border-[#24A0B5] rounded-2xl mx-auto mb-8">
            <img
              src={formData.avatar}
              alt="profile picture"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="w-[232px] h-[160px] border border-[#12464E] mx-auto rounded-2xl bg-[#08343C]">
            <div className="text-[10px] flex flex-col ">
              <div className="grid grid-cols-2 h-[87px] text-left">
                <div className="border-r border-b border-[#12464E] p-2">
                  <p className="opacity-33">Enter your name</p>
                  <p className="text-gray-100">{formData.name}</p>
                </div>
                <div className="border-l border-b border-[#12464E] p-2">
                  <p className="opacity-33">Enter your email *</p>
                  <p className="text-gray-100 pr-2 break-words w-full">
                    {formData.email}
                  </p>
                </div>
                <div className="border-r border-b border-[#12464E] p-2">
                  <p className="opacity-33">Ticket Type:</p>
                  <p className="text-gray-100">{formData.ticketType}</p>
                </div>
                <div className="border-l border-b border-[#12464E] p-2">
                  <p className="opacity-33">Ticket for :</p>
                  <p>{formData.numTickets}</p>
                </div>
              </div>
              <div className="h-[65] px-2 py-4 text-left">
                <p className="opacity-33">Special request?</p>
                <p className="text-gray-100 ">{formData.request}</p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="absolute w-[112px] lg:w-[236px] md:w-[236px] h-[68px] z-50 bottom-0 mb-5">
          <img src={barCode} alt="bar code for ticket" className="h-[68px]"/>
        </div>
      </section>
      <div className="mt-8 mb-4 flex justify-center items-center gap-6 lg:flex-row md:flex-row flex-col">
        <Button
          text="Book Another Ticket"
          className="border border-[#24A0B5] text-[#24A0B5] w-[266px] py-4"
          handleClick={handleReBook}
        />
        <Button
          text="Download Ticket"
          className="text-gray-100 bg-[#24A0B5]  w-[266px] py-4"
        />
      </div>
    </div>
  );
};

export default StepThree;
