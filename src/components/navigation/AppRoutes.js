import { ROUTES } from "../../common/constants/CONSTANTS";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map((routeInfo, idx) => {
          return (
            <Route
              style={{ marginRight: "5px" }}
              key={idx}
              path={routeInfo.route}
              element={routeInfo.component}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}
