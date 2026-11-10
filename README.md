# Restaurant Table Reservation (React + Vite)

    npm install
    npm run dev      # http://localhost:3000
    npm run build

Routes: `/` Home, `/search?state=Texas&city=Austin` results + booking, `/my-bookings`.
Bookings are stored in `localStorage` under the key `bookings`.
The backend (onrender) can take 50–60 s to wake up on the first request.
Images use remote placeholders (Unsplash/Pravatar); swap them for the Figma assets in the components.
