import React from "react";
import Root from "./root/root";
import "./App.scss";
import { EventsProvider } from "./context/EventContext";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <EventsProvider>
        <Root />
      </EventsProvider>
    </LanguageProvider>
  );
}
