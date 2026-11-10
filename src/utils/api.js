const BASE = "https://restaurantdata.onrender.com";

async function get(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Request failed");
  return res.json();
}

export const getStates = () => get(`${BASE}/states`);
export const getCities = (state) => get(`${BASE}/cities/${encodeURIComponent(state)}`);

// Normalise whatever field names the API uses into a consistent shape.
export async function getRestaurants(state, city) {
  const data = await get(
    `${BASE}/restaurants?state=${encodeURIComponent(state)}&city=${encodeURIComponent(city)}`
  );
  return (Array.isArray(data) ? data : []).map((r, i) => ({
    id: r._id || r.id || `${r["Restaurant Name"] || r.name}-${i}`,
    name: r["Restaurant Name"] ?? r.name ?? r.restaurantName ?? "Restaurant",
    address: r.Address ?? r.address ?? "",
    city: r.City ?? r.city ?? city,
    state: r.State ?? r.state ?? state,
    rating: r["Overall Rating"] ?? r.rating ?? r.overallRating ?? "N/A",
  }));
}
