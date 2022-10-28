import {ROUTES} from "../../common/constants/CONSTANTS";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import Loader from "../loader/Loader"
import ErrorBoundary from "../error/ErrorBoundary";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <ErrorBoundary>
                <Suspense fallback={<Loader/>}>
                    <Routes>
                        {ROUTES.map((routeInfo, idx) => {
                            return (
                                <Route
                                    key={idx}
                                    style={{marginRight: "5px"}}
                                    key={idx}
                                    path={routeInfo.route}
                                    element={routeInfo.component}
                                />

                            );
                        })}
                    </Routes>
                </Suspense>
            </ErrorBoundary>
        </BrowserRouter>
    );
}
