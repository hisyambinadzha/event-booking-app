import { useEffect, useState } from "react";
import API_BASE_URL from "../config";
import "../styles/report-page.css";
import { getReports } from "../services/booking-service";

function ReportPage() {
    const [reports, setReports] = useState({
        totalBookings: [],
        popularEvents: [],
        revenue: [],
        monthlyTotals: [],
        seatsByCategory: []
    });

    useEffect(() => {
        async function fetchReports() {
            const data = await getReports();

            console.log(data.response.body);

            setReports(data.response?.body || {}); // because you wrap with ApiResponseBuilder
        }
        fetchReports();
    }, []);


    // ✅ Compute total revenue from per-event revenue
    const totalRevenue = reports.revenue?.reduce(
        (sum, r) => sum + (r.revenue || 0),
        0
    ) || 0;

    return (
        <div className="report-page">
            <h1>Dashboard</h1>

            {/* Total Bookings */}
            <section className="report-section">
                <h2>Total Bookings per Event</h2>
                <div className="report-grid">
                    {reports.totalBookings?.map(r => (
                        <div className="report-card" key={r._id}>
                            <h3>{r._id}</h3>
                            <div className="value category-popular">{r.totalBookings}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Revenue per Event */}
            <section className="report-section">
                <h2>Revenue per Event</h2>
                <div className="report-grid">
                    {reports.revenue?.map(r => (
                        <div className="report-card" key={r._id}>
                            <h3>{r._id}</h3>
                            <div className="value category-revenue">RM {r.revenue}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ✅ Total Revenue */}
            <section className="report-section">
                <h2>Total Revenue</h2>
                <div className="report-card">
                    <div className="value category-revenue">RM {totalRevenue}</div>
                </div>
            </section>

            {/* Seats Sold by Category */}
            <section className="report-section">
                <h2>Seats Sold by Category</h2>
                <ul className="report-list">
                    {reports.seatsByCategory?.map(r => (
                        <li key={r._id}>
                            <span className="category-sales">{r._id}</span>: {r.seatsSold} seats
                        </li>
                    ))}
                </ul>
            </section>

            {/* Monthly Totals */}
            <section className="report-section">
                <h2>Monthly Bookings</h2>
                <ul className="report-list">
                    {reports.monthlyTotals?.map(r => (
                        <li key={`${r._id.year}-${r._id.month}`}>
                            {r._id.month}/{r._id.year}: {r.totalBookings} bookings
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default ReportPage;
