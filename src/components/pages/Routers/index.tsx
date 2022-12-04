import React, { useEffect } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Header from "../../common/Header";
import { RoutesString } from "../../modules/routesString";
import pages from "./pages";

const RenderHeader = (isHeader: Boolean) => {
  if (!isHeader) {
    return <Header />;
  }
};

function RoutesWrapper() {
  const location = useLocation();

  const isHistoryCheck = () => {
    if (location.pathname.toLowerCase() !== RoutesString.PageNotFound) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      {RenderHeader(isHistoryCheck())}
      <Routes>
        {pages.map((item) => {
          return (
            <Route
              key={item.path}
              path={item.path}
              element={item.component}
            ></Route>
          );
        })}
        <Route
          path="*"
          element={<Navigate to={RoutesString.PageNotFound} replace />}
        />
      </Routes>
    </>
  );
}

export default RoutesWrapper;
