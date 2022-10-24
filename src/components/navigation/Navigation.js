import { ROUTES } from "../../common/constants/CONSTANTS";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map((RouteInfo, idx) => {
          return (
            <Route
              style={{ marginRight: "5px" }}
              key={idx}
              path={RouteInfo.route}
              element={<RouteInfo.component />}
            >
              {RouteInfo.pathName}
            </Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}
