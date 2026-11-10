import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown.jsx";
import { getStates, getCities } from "../utils/api.js";

export default function SearchBar({ initialState = "", initialCity = "" }) {
  const navigate = useNavigate();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [state, setState] = useState(initialState);
  const [city, setCity] = useState(initialCity);
  const [loadingStates, setLoadingStates] = useState(true);
  const [loadingCities, setLoadingCities] = useState(false);

  useEffect(() => {
    getStates().then(setStates).catch(() => setStates([])).finally(() => setLoadingStates(false));
  }, []);

  useEffect(() => {
    if (!state) return;
    setLoadingCities(true);
    getCities(state).then(setCities).catch(() => setCities([])).finally(() => setLoadingCities(false));
  }, [state]);

  const submit = (e) => {
    e.preventDefault();
    if (!state || !city) return;
    navigate(`/search?state=${encodeURIComponent(state)}&city=${encodeURIComponent(city)}`);
  };

  return (
    <form className="searchbar" onSubmit={submit}>
      <Dropdown id="state" placeholder="State" options={states} value={state} loading={loadingStates}
        onChange={(s) => { setState(s); setCity(""); setCities([]); }} />
      <Dropdown id="city" placeholder="City" options={cities} value={city} loading={loadingCities}
        disabled={!state} onChange={setCity} />
      <button type="submit" id="searchBtn" className="btn">🔍 Search</button>
    </form>
  );
}
