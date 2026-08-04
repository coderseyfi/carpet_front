import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "./home/heroSlice";
import placesReducer from "./places/placesSlice";
import placeDetailReducer from "./places/placeDetailSlice";
import citiesReducer from "./cities/citiesSlice";
import typesReducer from "./types/venueTypesSlice";
import availabilityReducer from "./availability/availabilitySlice";
import sessionReducer from "./session/sessionSlice";

const store = configureStore({
  reducer: {
    hero: heroReducer,
    place: placesReducer,
    placeDetail: placeDetailReducer,
    cities: citiesReducer,
    venueTypes: typesReducer,
    availability: availabilityReducer,
    session: sessionReducer,
  },
});

export default store;
