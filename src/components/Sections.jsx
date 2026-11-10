import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export function ReservationInfo() {
  return (
    <section className="band" id="reservations">
      <div className="two-col">
        <div className="center"><img className="big-logo" src="/logo.svg" alt="Restaurant" /></div>
        <div>
          <small className="eyebrow">EXPERIENCE FINE DINING AT ITS BEST</small>
          <h2>Table <span>Reservation</span></h2>
          <p className="muted">We make dining memorable with our seamless reservation system. Book your perfect table and enjoy an exceptional culinary experience with impeccable service.</p>
          <ul className="checks">
            <li>Easy Online Booking</li>
            <li>Special Occasion Planning</li>
            <li>Instant Confirmation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const news = Array.from({ length: 3 }, (_, i) => ({
  id: i,
  img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=70",
  meta: "Dining | March 31, 2022",
  title: "Top 5 Fine Dining Experiences You Must Try",
  author: "Chef John",
}));

export function News() {
  return (
    <section className="section" id="news">
      <small className="eyebrow center-text">Blog &amp; News</small>
      <h2 className="center-text">Read Our Latest News</h2>
      <Swiper modules={[Pagination]} pagination={{ clickable: true }} spaceBetween={24} slidesPerView={1}
        breakpoints={{ 640: { slidesPerView: 2 }, 960: { slidesPerView: 3 } }} className="news">
        {news.map((n) => (
          <SwiperSlide key={n.id}>
            <article className="news-card">
              <img src={n.img} alt="" />
              <div className="body">
                <p className="muted">{n.meta}</p>
                <h5>{n.title}</h5>
                <div className="author"><span>👨‍🍳</span> {n.author}</div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export function TableBooking() {
  return (
    <section className="band" id="services">
      <div className="two-col">
        <div>
          <small className="eyebrow">RESERVE YOUR DINING EXPERIENCE</small>
          <h2 className="plain">Table Booking</h2>
          <p className="muted">Discover the perfect dining experience at our restaurant. From intimate dinners to special celebrations, we offer seamless reservations that ensure your dining experience is exactly as you envision. Our attentive staff is ready to accommodate your preferences and dietary requirements.</p>
        </div>
        <div className="center"><img className="staff" src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&q=70" alt="Our staff" /></div>
      </div>
    </section>
  );
}

const faqs = [
  ["How does the reservation system work?", "Pick a state and city, choose a restaurant, then select a date within the next week and a time slot."],
  ["What is your cancellation policy?", "You can cancel any booking from the My Bookings page at any time."],
  ["Do you accommodate special dietary requirements?", "Yes. Let the restaurant know your requirements when you arrive or contact them directly."],
  ["Can I make group reservations?", "Yes, group reservations are supported. Contact the restaurant for larger parties."],
];

export function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="section" id="faq">
      <small className="eyebrow center-text">Get Your Answer</small>
      <h2 className="center-text">Frequently Asked Questions</h2>
      <div className="two-col faq">
        <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=700&q=70" alt="Dining room" />
        <div>
          {faqs.map(([q, a], i) => (
            <div key={q} className="faq-item">
              <button type="button" onClick={() => setOpen(open === i ? null : i)}>
                <span>{q}</span><span className="plus">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className="muted">{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DownloadApp() {
  const [phone, setPhone] = useState("");
  return (
    <section className="band" id="software">
      <div className="two-col">
        <div className="center"><div className="phone"><img src="dining-app.jpg" alt="Chef" /></div></div>
        <div>
          <h2 className="download">Download the <span>Restaurant Booking</span> App</h2>
          <p><b>Get the link to download the app</b></p>
          <div className="sms">
            <div className="sms-input"><span>+91</span>
              <input value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))} placeholder="Enter phone number" maxLength={10} />
            </div>
            <button type="button" className="btn">Send SMS</button>
          </div>
          <div className="stores"><button className="store">▶ Google Play</button><button className="store"> App Store</button></div>
        </div>
      </div>
    </section>
  );
}
