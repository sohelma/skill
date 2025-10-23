import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import AuthProvider from "./providers/AuthProvider";

function App() {
  return (
    <AuthProvider>  {/* ✅ AuthProvider দিয়ে wrap করা */}
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
