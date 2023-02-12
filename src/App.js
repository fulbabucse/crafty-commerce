import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router";
import { getUser } from "./features/auth/authSlice";
import auth from "./firebase/firebase.config";
import router from "./routes/routes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.email) {
        dispatch(getUser(user?.email));
      }
    });
  }, [dispatch]);

  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
