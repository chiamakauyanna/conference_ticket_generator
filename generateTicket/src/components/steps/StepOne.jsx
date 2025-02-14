import { useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import TypeCard from "../common/TypeCard";
import Button from "../common/Button";
import { TicketContext } from "../../context/FormContext";
import StepHeader from "../common/StepHeader";
import ProgressBar from "../common/ProgressBar";
import EventDetails from "../EventDetails";

const StepOne = () => {
  const { formData, setFormData } = useContext(TicketContext);
  const navigate = useNavigate();

  // Formik validation schema
  const validationSchema = Yup.object({
    ticketType: Yup.string().required("Please select a ticket type."),
    numTickets: Yup.number()
      .required("Please select the number of tickets.")
      .min(1, "At least 1 ticket is required."),
  });

  // Handle form submission
  const handleSubmit = (values) => {
    setFormData((prev) => ({
      ...prev,
      ticketType: values.ticketType,
      numTickets: values.numTickets,
    }));

    navigate("/step-two");
  };

  return (
    <div className="">
      <div className="lg:w-[700px] md:w-[700px] w-[370px] bg-[#041E23] p-4 mx-auto border border-[#0E464F] my-7 rounded-4xl">
         {/* Step Header */}
         <StepHeader title="Ticket Selection" step="Step 1/3" />

         {/* Progress Bar */}
         <ProgressBar step={1} totalSteps={2} />

        <div className="m-4 bg-[#08252B] border border-[#0E464F] text-center lg:p-8 md:p-6 p-4 rounded-3xl">

          {/* Event Details */}
        <EventDetails />

          <div className="border border-[#0E464F] my-8 mx-2 h-[4px]"></div>

          {/* Formik Form */}
          <Formik
            initialValues={{
              ticketType: formData.ticketType || "",
              numTickets: formData.numTickets || 1,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, values }) => (
              <Form>
                <section>
                  <h2 className="pb-4 text-left">Select Ticket Type:</h2>
                  <TypeCard
                    onTicketSelect={(type) => setFieldValue("ticketType", type)} // Update Formik field on selection
                    selectedTicketType={values.ticketType}
                  />
                  <ErrorMessage
                    name="ticketType"
                    component="div"
                    className="text-red-500 text-sm mt-2"
                    id="TicketPriceError"
                    aria-live="assertive"
                  />
                </section>

                {/* Number of Tickets */}
                <section className="mt-4">
                  <h2 className="text-left">Number of Tickets</h2>
                  <div className="relative w-full">
                    <Field
                      as="select"
                      name="numTickets"
                      aria-describedby="numTicketError"
                      className="p-4 mt-2 border border-[#0E464F] rounded-lg w-full appearance-none pr-8 pl-2 text-gray-100 bg-[#041E23] outline-none"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </Field>
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-100 pointer-events-none">
                      <IoIosArrowDown />
                    </span>
                    <ErrorMessage
                    id="numTicketError"
                      name="numTickets"
                      component="div"
                      className="text-red-500 text-sm mt-2"
                      aria-live="assertive"
                    />
                  </div>
                </section>

                {/* Button Section */}
                <div className="mt-8 mb-4 flex justify-center items-center gap-6 lg:flex-row md:flex-row flex-col">
                  <Button
                    text="Cancel"
                    className="border border-[#24A0B5] text-[#24A0B5] w-[266px] py-4"
                  />
                  <Button
                    text="Next"
                    type="submit"
                    className="text-gray-100 bg-[#24A0B5] w-[266px] py-4"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
