import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SidebarProvider } from "./context/sidebar.context";
import { ObserverProvider } from "./context/observer.context";
import { CursorProvider } from "./context/cursor.context";
import { BurgerMenuProvider } from "./context/burgerMenu.context";
import { ProjectProvider } from "./context/projects.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ObserverProvider>
    <SidebarProvider>
      <CursorProvider>
        <BurgerMenuProvider>
          <ProjectProvider>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </ProjectProvider>
        </BurgerMenuProvider>
      </CursorProvider>
    </SidebarProvider>
  </ObserverProvider>
);
