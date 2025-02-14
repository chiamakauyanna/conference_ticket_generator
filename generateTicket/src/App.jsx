import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import StepOne from "./components/steps/StepOne";
import StepTwo from "./components/steps/StepTwo";
import StepThree from "./components/steps/StepThree";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<StepOne />} /> 
        <Route path="/step-two" element={<StepTwo />} /> 
        <Route path="/step-three" element={<StepThree />} /> 
      </Routes>
    </Router>
  );
};

export default App;
