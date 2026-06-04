import { useLocation, useNavigate } from "react-router-dom";
import "../styles/event-page.css";

export default function EventPage() {
    const location = useLocation();
    const navigate = useNavigate();

    
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    const event = location.state;

    // ✅ Handle refresh / missing data
    if (!event) {
        return <h2 className="no-event">No event data available</h2>;
    }

    const formattedDate = new Date(event.eventDate).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });

    return (
        <>
            <div className="event-page">

                {/* ✅ HERO SECTION */}
                <div className="event-hero">
                    <img src={event.image} alt={event.title} />
                    <div className="event-hero-overlay">
                        <h1 style={{ paddingLeft: 20 }}>{event.title}</h1>
                        <p style={{ paddingLeft: 20 }}>{event.venue} • {formattedDate}</p>
                    </div>
                </div>

                {/* ✅ MAIN CONTENT */}
                <div className="event-content single-column">
                    <div className="event-main full">

                        {/* ✅ HEADER WITH INLINE BUTTON */}
                        <div className="event-header">
                            <h2>About Event</h2>

                            {token && role !== "ADMIN" && (
                                <button
                                    className="inline-book-btn"
                                    onClick={() => navigate(`/booking/${event.id}`, { state: event })}
                                >
                                    Book This Event
                                </button>
                            )}
                        </div>

                        <p className="event-description">
                            {event.description}
                        </p>

                        {/* ✅ INFO GRID */}
                        <div className="event-info-grid">
                            <div className="info-box">
                                <span>💰 Price</span>
                                <strong>{event.price === 0 ? "Free" : `RM${event.price}`}</strong>
                            </div>

                            <div className="info-box">
                                <span>🎟 Seats Available</span>
                                <strong>{event.seatsAvailable}</strong>
                            </div>

                            <div className="info-box">
                                <span>📍 Venue</span>
                                <strong>{event.venue}</strong>
                            </div>

                            <div className="info-box">
                                <span>📅 Date</span>
                                <strong>{formattedDate}</strong>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ✅ BACK BUTTON */}
                <div className="event-back">
                    <button onClick={() => navigate("/")}>
                        ← Back to Events
                    </button>
                </div>

            </div>
        </>
    );
}