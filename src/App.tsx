
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivacyPolicy />} />
        <Route path="/cliptoon" element={<PrivacyPolicy />} />
        <Route path="/cliptoon/privacy" element={<PrivacyPolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
