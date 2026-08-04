import { useState } from "react";
import { Button, Input, Rate, Slider } from "antd";
import "./FilterMenu.scss";
import { useDispatch, useSelector } from "react-redux";

import { fetchCities } from "../../store/cities/citiesSlice";
import { fetchAvailability } from "../../store/availability/availabilitySlice";
import { fetchVenueTypes } from "../../store/types/venueTypesSlice";
import { SearchOutlined, StarFilled } from "@ant-design/icons";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const filterLabels = {
  AZ: {
    Cities: "Şəhər",
    Type: "Növ",
    Availability: "Mövcuddur",
    Rating: "Reytinq",
    Capacity: "Tutum",
  },
  EN: {
    Cities: "All Cities",
    Type: "All types",
    Availability: "Availability",
    Rating: "Rating",
    Capacity: "Capacity",
  },
  RU: {
    Cities: "Город",
    Type: "Тип",
    Availability: "Доступность",
    Rating: "Рейтинг",
    Capacity: "Вместимость",
  },
};

const filters = ["Cities", "Type", "Availability", "Rating", "Capacity"];

export default function FilterMenu() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    Cities: null,
    Type: [],
    Availability: null,
    Rating: 0,
    Capacity: [0, 1000],
  });

  const lang = localStorage.getItem("i18nextLng") || "az";
  const labels = filterLabels[lang];

  const dispatch = useDispatch();

  const citiesData = useSelector((state) => state.cities.data);
  const citiesLoading = useSelector((state) => state.cities.loading);

  const availabilityData = useSelector((state) => state.availability.data);
  const availabilityLoading = useSelector(
    (state) => state.availability.loading
  );

  const venueTypeData = useSelector((state) => state.venueTypes.data);
  const venueTypeLoading = useSelector((state) => state.venueTypes.loading);

  // Rating və Capacity üçün statik data 
  const ratingData = [
    { id: 31, name: lang === "az" ? "1 ulduz" : "1 star" },
    { id: 32, name: lang === "az" ? "2 ulduz" : "2 stars" },
    { id: 33, name: lang === "az" ? "3 ulduz" : "3 stars" },
    { id: 34, name: lang === "az" ? "4 ulduz" : "4 stars" },
    { id: 35, name: lang === "az" ? "5 ulduz" : "5 stars" },
  ];
  const handleToggleDropdown = (key) => {
    setActiveDropdown((prev) => (prev === key ? null : key));
    setSearchValue("");

    if (key !== "Rating" && key !== "Capacity") {
      if (key === "Cities" && (!citiesData || citiesData.length === 0)) {
        dispatch(fetchCities());
      } else if (
        key === "Availability" &&
        (!availabilityData || availabilityData.length === 0)
      ) {
        dispatch(fetchAvailability());
      } else if (
        key === "Type" &&
        (!venueTypeData || venueTypeData.length === 0)
      ) {
        dispatch(fetchVenueTypes());
      }
    }
  };

  const handleItemClick = (filterKey, id) => {
    if (filterKey === "Rating" || filterKey === "Capacity") return;

    if (filterKey === "Cities" || filterKey === "Availability") {
      // tek select
      setSelectedFilters((prev) => ({
        ...prev,
        [filterKey]: prev[filterKey] === id ? null : id, // eyni id varsa sil
      }));
    } else {
      // Multi-select ucunn
      setSelectedFilters((prev) => {
        const selected = prev[filterKey];
        return {
          ...prev,
          [filterKey]: selected.includes(id)
            ? selected.filter((i) => i !== id)
            : [...selected, id],
        };
      });
    }
  };

  let filteredItems = [];
  if (activeDropdown === "Rating") {
    filteredItems = ratingData;
  } else if (activeDropdown === "Cities") {
    filteredItems = citiesData || [];
  } else if (activeDropdown === "Availability") {
    filteredItems = availabilityData || [];
  } else if (activeDropdown === "Type") {
    filteredItems = venueTypeData || [];
  }

  if (searchValue.trim() !== "") {
    filteredItems = filteredItems.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  const renderLabel = (filterKey) => {
    if (filterKey === "Rating") {
      if (selectedFilters.Rating === 0) return labels.Rating;
      return (
        <>
          {selectedFilters.Rating}
          <StarFilled style={{ color: "#faad14", marginLeft: "7px" }} />
        </>
      );
    }

    if (filterKey === "Capacity") {
      const [min, max] = selectedFilters.Capacity;
      if (min === 0 && max === 1000) return labels.Capacity;
      return `${min} - ${max}`;
    }

    if (filterKey === "Cities") {
      const selectedId = selectedFilters[filterKey];
      const selected = citiesData?.find((item) => item.id === selectedId);
      return selected ? selected.name : labels[filterKey];
    }

    if (filterKey === "Availability") {
      const selectedId = selectedFilters[filterKey];
      const selected = availabilityData?.find((item) => item.id === selectedId);
      return selected ? selected.text : labels[filterKey];
    }

    if (filterKey === "Type") {
      const ids = selectedFilters.Type;
      const selected =
        venueTypeData?.filter((item) => ids.includes(item.id)) || [];
      if (selected.length === 0) return labels.Type;
      if (selected.length === 1) return selected[0].name;
      return `${selected[0].name} +${selected.length - 1}`;
    }

    return labels[filterKey];
  };

  const isLoading =
    (activeDropdown === "Cities" && citiesLoading) ||
    (activeDropdown === "Availability" && availabilityLoading) ||
    (activeDropdown === "Type" && venueTypeLoading);

  return (
    <div className="filterMenu">
      {/* <h3 className="menuName">Filter Menu</h3> */}
      <div className="filters">
        <div className="categoryButton">
          {filters.map((filterKey) => (
            <button
              key={filterKey}
              className={`dropdownToggle ${
                activeDropdown === filterKey ? "active" : ""
              }`}
              onClick={() => handleToggleDropdown(filterKey)}
              type="button"
            >
              {renderLabel(filterKey)}
              <span
                className={`dropdownIconWrapper ${
                  activeDropdown === filterKey ? "open" : ""
                }`}
              >
                <DownOutlined className="dropdownIcon" />
              </span>
            </button>
          ))}
        </div>

        <div>
          <Button className="searchButton" type="primary">
            {lang === "az" ? "Axtar" : "Search"}
          </Button>
        </div>
      </div>

      {activeDropdown && (
        <div className="dropdownContentWrapper">
          <div className="dropdownContent">
            {/* Rating və Capacity'den basqa search input və taglar */}
            {activeDropdown !== "Rating" &&
              activeDropdown !== "Capacity" &&
              activeDropdown !== "Availability" && (
                <div className="otherCategory">
                  <Input
                    prefix={<SearchOutlined className="searchIcon" />}
                    placeholder={`${labels[activeDropdown].toLowerCase()} ${
                      lang === "az" ? "axtar" : "search"
                    }...`}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="dropdownSearch"
                  />

                  {isLoading ? (
                    <div className="loading">
                      {lang === "az" ? "Yüklənir..." : "Loading..."}
                    </div>
                  ) : filteredItems.length > 0 ? (
                    <div className="tagList">
                      {filteredItems.map((item) => {
                        const isSelected = Array.isArray(
                          selectedFilters[activeDropdown]
                        )
                          ? selectedFilters[activeDropdown].includes(item.id)
                          : selectedFilters[activeDropdown] === item.id;

                        return (
                          <Button
                            key={item.id}
                            className={`tagBtn ${
                              isSelected ? "selectedTag" : ""
                            }`}
                            onClick={() =>
                              handleItemClick(activeDropdown, item.id)
                            }
                          >
                            {item.name}
                          </Button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="noResults">
                      {lang === "az" ? "Nəticə tapılmadı" : "No results"}
                    </div>
                  )}
                </div>
              )}
            {/*  Aviabiality*/}
            {activeDropdown === "Availability" && (
              <div className="availabilitySection">
                {isLoading ? (
                  <div className="loading">
                    {lang === "az" ? "Yüklənir..." : "Loading..."}
                  </div>
                ) : filteredItems.length > 0 ? (
                  <div className="availabilityButtons">
                    {filteredItems.map((item) => {
                      const isSelected =
                        selectedFilters.Availability === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() =>
                            handleItemClick("Availability", item.id)
                          }
                          style={{
                            backgroundColor: item.color,
                          }}
                          className={`availabilityBtn ${
                            isSelected ? "selectedAvailability" : ""
                          }`}
                        >
                          {item.text}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="noResults">
                    {lang === "az" ? "Nəticə tapılmadı" : "No results"}
                  </div>
                )}
              </div>
            )}

            {/* Rating */}
            {activeDropdown === "Rating" && (
              <div className="rating">
                <Rate
                  count={5}
                  value={selectedFilters.Rating}
                  onChange={(value) =>
                    setSelectedFilters((prev) => ({ ...prev, Rating: value }))
                  }
                  allowClear
                  style={{ fontSize: 28 }}
                />
              </div>
            )}

            {/*Capacity */}
            {activeDropdown === "Capacity" && (
              <div className="capacity">
                <div style={{ display: "flex", gap: 12, marginBottom: 10 }}>
                  <Input
                    type="number"
                    min={0}
                    max={selectedFilters.Capacity[1]}
                    value={selectedFilters.Capacity[0]}
                    onChange={(e) => {
                      let val = Number(e.target.value);
                      if (val < 0) val = 0;
                      if (val > selectedFilters.Capacity[1])
                        val = selectedFilters.Capacity[1];
                      setSelectedFilters((prev) => ({
                        ...prev,
                        Capacity: [val, prev.Capacity[1]],
                      }));
                    }}
                    placeholder={lang === "az" ? "Minimum" : "Min"}
                  />
                  <Input
                    type="number"
                    min={selectedFilters.Capacity[0]}
                    max={1000}
                    value={selectedFilters.Capacity[1]}
                    onChange={(e) => {
                      let val = Number(e.target.value);
                      if (val > 1000) val = 1000;
                      if (val < selectedFilters.Capacity[0])
                        val = selectedFilters.Capacity[0];
                      setSelectedFilters((prev) => ({
                        ...prev,
                        Capacity: [prev.Capacity[0], val],
                      }));
                    }}
                    placeholder={lang === "az" ? "Maksimum" : "Max"}
                  />
                </div>
                <Slider
                  range
                  min={0}
                  max={1000}
                  value={selectedFilters.Capacity}
                  onChange={(val) => {
                    setSelectedFilters((prev) => ({
                      ...prev,
                      Capacity: val,
                    }));
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 6,
                    fontWeight: "bold",
                  }}
                >
                  <span>
                    {lang === "az" ? "Min" : "Min"}:{" "}
                    {selectedFilters.Capacity[0]}
                  </span>
                  <span>
                    {lang === "az" ? "Max" : "Max"}:{" "}
                    {selectedFilters.Capacity[1]}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
