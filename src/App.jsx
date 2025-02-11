import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <div className="w-full"> {/* Removed fixed positioning */}
        <Navbar routes={routes} />
      </div>

      <div> {/* No need for padding-top since the navbar is not fixed */}
        <Routes>
          {routes.map(
            ({ path, element }, key) =>
              element && <Route key={key} exact path={path} element={element} />
          )}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;