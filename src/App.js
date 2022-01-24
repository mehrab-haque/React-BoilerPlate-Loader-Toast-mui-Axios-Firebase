import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Audio } from  'react-loader-spinner'
import React, {useState} from "react";
import {Dialog, DialogContent} from "@mui/material";
import Landing from "./components/Landing";

var showToast;
var setLoading;

function App() {

  const [loading, setL] = useState(false);
  setLoading = setL;
  showToast = (message) => {
    toast.dark(message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
      <div>
        <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        <Dialog open={loading}>
          <DialogContent>
              <Audio color="#00BFFF" height={100} width={100} />
          </DialogContent>
        </Dialog>
        <Landing/>

      </div>
  )
}

export default App;
export { showToast, setLoading};