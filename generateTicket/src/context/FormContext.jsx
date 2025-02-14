import { createContext, useState, useEffect } from "react";

const TicketContext = createContext();

const FormContext = (prop) => {
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem("conferenceForm");
    return storedData ? JSON.parse(storedData) : { name: "", email: "", avatar: "", request: "" ,  ticketType: "", numTickets: 1  };
  });

  useEffect(() => {
    localStorage.setItem("conferenceForm", JSON.stringify(formData));
  }, [formData]);

  return (
    <TicketContext.Provider value={{ formData, setFormData }}>
      {prop.children}
    </TicketContext.Provider>
  );
};

export { FormContext, TicketContext };