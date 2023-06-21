import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import toast, { Toaster } from "react-hot-toast";
import Scrolltotop from "./components/UI/ScrollToTop";
import { RequireAuth } from "./Utils/RequireAuth";
import {
  Registration
} from "./Pages";

const App = () => {
  return (
    <div className="w-full h-full text-sm text-[16px] font">
      <div>
        <Toaster
          toastOptions={{
            duration: 5000,
            position: "top-center",
            success: {
              style: {
                background: "#222",

                color: "#fff",
              },
            },
            error: {
              duration: 5000,
              position: "top-center",
              style: {
                background: "red",
                color: "#fff",
              },
            },
          }}
        />
      </div>
      <Router>
        <Scrolltotop />
        <Routes>
          {/*    AUTH PAGE */}
          <Route exact path="/" element={<Registration />} />
          {/*    LANDING PAGE */}
          {/**Protected routes */}
    
         

        </Routes>
      </Router>
    </div>
  );
};

export default App;
