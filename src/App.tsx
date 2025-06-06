import { useState } from "react";
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import RootRoute from "./routes/RootRoute";
import Home from "./page/Services";
import Hero from "./Components/Hero/Hero";
import Services from "./page/Services";
import Fleet from "./page/Fleet";
import Footer from "./Components/Footer";

const routes = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<RootRoute />}>
        <Route path="" element={<Hero />} />

        <Route path="services" element={<Services />} />

        <Route path="fleet" element={<Fleet />} />
      </Route>
  )
);
function App() {
  return (
    <div className="App">
      <div className="min-h-screen">
      <RouterProvider router={routes} />
    </div>
    </div>
  );
}

export default App;
