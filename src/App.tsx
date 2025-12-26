import { Route, Routes } from "react-router";
import NotFoundPage from "./Page/NotFoundPage";
import LoginFormPage from "./Page/LoginFormPage";
import AdminIndependenRoutes from "./routes/AdminIndependenRoutes";
import adminRoutes from "./routes/AdminRoutes";
import JuriRoutes from "./routes/JuriRoutes";

export default function App() {
  return (

    <Routes>
      {AdminIndependenRoutes()}
      {adminRoutes()}
      {JuriRoutes()}
      <Route path="/" element={<LoginFormPage />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  )
}