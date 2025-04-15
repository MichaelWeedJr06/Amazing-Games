import { createContext, useState, useContext, useEffect } from "react";

const FilterContext = createContext();

export const useFilterContext = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
  let Filt = "";
  try {
    const storedFilter = localStorage.getItem("games_filter");
    Filt = storedFilter ? JSON.parse(storedFilter) : "";
  } catch (err) {
    Filt = "";
    console.error("Error parsing filter from localStorage:", err);
  }

  const [filter, setFilter] = useState(Filt);

  useEffect(() => {
    if (filter !== Filt) {
      localStorage.setItem("games_filter", JSON.stringify(filter));
    }
  }, [filter, Filt]);

  const changeFilter = (filterName) => {
    setFilter(filterName);
  };

  const removeFilter = () => {
    setFilter("");
  };

  const isFilter = (filterName) => {
    return filter === filterName;
  };

  const value = {
    filter,
    changeFilter,
    removeFilter,
    isFilter,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
