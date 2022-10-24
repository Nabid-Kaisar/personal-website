import { ROUTES } from "../../common/constants/CONSTANTS";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Contact from "../contact/Contact";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map((RouteInfo, idx) => {
          console.log(RouteInfo);
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
