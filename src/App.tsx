import React from "react";
import "./index.css";
import { MainComponent } from "./components/MainComponent";
import { DocumentTypeContext } from "./contexts/DocumentTypeContext";
import { FilterContext } from "./contexts/FilterContext";
import { SelectedFilterContext } from "./contexts/SelectedFilterContext";
import { NavbarComponent } from "./components/NavbarComponent";
import { BottomMenu } from "./components/BottomMenu";
import { LeftMenu } from "./components/LeftMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginComponent } from "./components/LoginComponent";
import { TopComponent } from "./components/TopComponent";
import { SignupComponent } from "./components/SignupComponent";
import PrivateRoute from "./routes/PrivateRoute";
import { AuthContext, GetLoggedinUser } from "./contexts/AuthContext";
import { MyRouter } from "./routes/MyRouter";

const App: React.FC = () => {
   
  return (
    <>
      <BrowserRouter>
        <DocumentTypeContext>
          <FilterContext>
            <SelectedFilterContext>
              <AuthContext>
                <NavbarComponent />

                    <MyRouter />
        
            
                
              </AuthContext>
            </SelectedFilterContext>
          </FilterContext>
        </DocumentTypeContext>
      </BrowserRouter>
    </>
  );
};

export default App;
