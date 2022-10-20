// @ts-ignore
import HttpsRedirect from "react-https-redirect";
import { Routes, Route, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ChangeLog from "./pages/ChangeLog";
import Community from "./pages/Community";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Marketplace } from "./pages/Marketplace";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Register from "./pages/Register";
import Support from "./pages/Support";
import TermsOfService from "./pages/TermsOfService";

function App() {
  return (
    <>
      <HttpsRedirect>

        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="community" element={<Community />} />
            <Route path="changelog" element={<ChangeLog />} />
            <Route path="support" element={<Support />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-of-service" element={<TermsOfService />} />
          </Route>
        </Routes>

      </HttpsRedirect>
    </>
  );
}


function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
export default App;
