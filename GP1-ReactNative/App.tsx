import React from "react";
import { Routes } from "./src/Routes";
import { AuthProvider } from "./src/Context/ContextSignIn";

export default function App() {
  return <AuthProvider>
  <Routes/>
  </AuthProvider>
}
