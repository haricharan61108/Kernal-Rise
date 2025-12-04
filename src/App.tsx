import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={<Navigate to="/kernal-rise/cliptoon/privacy" replace />}
        />
        <Route
          path="/kernal-rise/cliptoon/privacy"
          element={<PrivacyPolicy />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
