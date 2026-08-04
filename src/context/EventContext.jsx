import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "@/api";
import { useLanguage } from "./LanguageContext";


const EventsContext = createContext();

export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const { lang } = useLanguage();

  const getEvents = async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.get("/events");
      setEvents(data?.data || []);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   events?.length == 0 && getEvents();
  // }, [events.length]);

  useEffect(() => {
    getEvents();
  }, [lang]);

  return (
    <EventsContext.Provider
      value={{
        events,
        loading,
        getEvents,
        setEvents,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export const useEvents = () => useContext(EventsContext);
