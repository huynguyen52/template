import { Route, Routes } from "react-router-dom";
import RoutesWrapper from "./components/pages/Routers";

function App() {
  return (
    <Routes>
      <Route path="*" element={<RoutesWrapper />} />
    </Routes>
  );
}

export default App;
