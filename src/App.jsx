import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next"; // استيراد هوك الترجمة

// استيرادات المكونات
import NavBar from "./Components/NavBar.jsx";
import HomePages from "./Pages/HomePages.jsx";
import Footer from "./Components/Footer.jsx";
import AboutPages from "./Pages/AboutPages.jsx";
import ServicesPage from "./Pages/ServicesPage.jsx";
import ContactUs from "./Pages/ContactUs.jsx";

// استيراد المكونات من ملف التجميع
import {
  LuxuryCarsDetails,
  EconomyCarsDetails,
  SuvCarsDetails,
  FamilyCarsDetails,
} from "./Pages/AllLink.jsx";

function App() {
  const { i18n } = useTranslation();

  // هذا الجزء مسؤول عن تغيير اتجاه الموقع (RTL/LTR) في كل مرة تتغير فيها اللغة
  useEffect(() => {
    const currentLang = i18n.language;
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    
    // تغيير الخط بناءً على اللغة (اختياري)
    if (currentLang === "ar") {
      document.body.style.fontFamily = "'Cairo', sans-serif";
    } else {
      document.body.style.fontFamily = "'Poppins', sans-serif";
    }
  }, [i18n.language]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePages />} />
        <Route exact path="/AboutHome" element={<AboutPages />} />
        <Route exact path="/HomeServices" element={<ServicesPage />} />
        <Route exact path="/contacted" element={<ContactUs />} />

        {/* مسارات تفاصيل السيارات */}
        <Route
          exact
          path="/luxury-cars-details"
          element={<LuxuryCarsDetails />}
        />
        <Route
          exact
          path="/economy-cars-details"
          element={<EconomyCarsDetails />}
        />
        <Route exact path="/suv-cars-details" element={<SuvCarsDetails />} />
        <Route
          exact
          path="/family-cars-details"
          element={<FamilyCarsDetails />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;