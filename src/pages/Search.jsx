import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar.jsx";
import RestaurantCard from "../components/RestaurantCard.jsx";
import { getRestaurants } from "../utils/api.js";

export default function Search() {
  const [params] = useSearchParams();
  const state = params.get("state") || "";
  const city = params.get("city") || "";
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!state || !city) return;
    setLoading(true); setError("");
    getRestaurants(state, city)
      .then(setList)
      .catch(() => setError("Could not load restaurants. The server may be waking up — please try again."))
      .finally(() => setLoading(false));
  }, [state, city]);

  return (
    <main className="page search-page">
      <div className="search-card flat"><SearchBar initialState={state} initialCity={city} /></div>
      {loading && <p className="center-text muted">Loading restaurants… this can take up to a minute.</p>}
      {error && <p className="center-text error">{error}</p>}
      {!loading && !error && state && city && (
        <>
          <h1>{list.length} restaurants available in {city}</h1>
          <p className="muted sub">Book appointments with minimum wait-time &amp; verified doctor details</p>
          <div className="r-list">
            {list.map((r) => <RestaurantCard key={r.id} r={r} />)}
          </div>
        </>
      )}
      {!state && <p className="center-text muted">Select a state and city to find restaurants.</p>}
    </main>
  );
}
