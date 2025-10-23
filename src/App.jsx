// App.jsx
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import AuthProvider from "./providers/AuthProvider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" /> 
    </AuthProvider>
  );
}

export default App;
