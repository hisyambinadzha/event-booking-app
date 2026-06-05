import "../styles/dashboard.css";

function DashboardPage() {
    // Example mock data — replace with API call later
    const bookings = [
        {
            _id: "6a211547de73735afe513f80",
            userId: "69ec7d9ba595ae83adb00859",
            eventId: "6a1538a2ad1c00e8afc17a61",
            numberOfSeats: 2,
            bookingDate: "2026-06-03T22:03:51.738Z",
            totalPrice: 60,
            bookingStatus: "PENDING"
        },
        {
            _id: "6a211547de73735afe513f81",
            userId: "69ec7d9ba595ae83adb00859",
            eventId: "6a1538a2ad1c00e8afc17a62",
            numberOfSeats: 1,
            bookingDate: "2026-06-01T18:45:00.000Z",
            totalPrice: 120,
            bookingStatus: "APPROVED"
        },
        {
            _id: "6a211547de73735afe513f82",
            userId: "69ec7d9ba595ae83adb00859",
            eventId: "6a1538a2ad1c00e8afc17a63",
            numberOfSeats: 3,
            bookingDate: "2026-05-25T10:30:00.000Z",
            totalPrice: 180,
            bookingStatus: "CANCELLED"
        },
        {
            _id: "6a211547de73735afe513f83",
            userId: "69ec7d9ba595ae83adb00859",
            eventId: "6a1538a2ad1c00e8afc17a64",
            numberOfSeats: 1,
            bookingDate: "2026-05-20T14:15:00.000Z",
            totalPrice: 50,
            bookingStatus: "REJECTED"
        }
    ];

    const handleCancel = (id) => {
        // TODO: Call your backend API to cancel booking
        alert(`Booking ${id} cancelled!`);
    };

    return (
        <section className="dashboard">
            <div className="booking-history">
                <h2>Booking History</h2>
                <table className="booking-table">
                    <thead>
                        <tr>
                            <th>Seats</th>
                            <th>Date</th>
                            <th>Total Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking._id}>
                                <td>{booking.numberOfSeats}</td>
                                <td>
                                    {new Date(booking.bookingDate).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit"
                                    })}
                                </td>
                                <td>{booking.totalPrice === 0 ? "Free" : `RM${booking.totalPrice}`}</td>
                                <td className={`status ${booking.bookingStatus.toLowerCase()}`}>
                                    {booking.bookingStatus}
                                </td>
                                <td>
                                    {booking.bookingStatus === "PENDING" ? (
                                        <button
                                            className="cancel-btn"
                                            onClick={() => handleCancel(booking._id)}
                                        >
                                            Cancel
                                        </button>
                                    ) : (
                                        <span className="no-action">—</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default DashboardPage;