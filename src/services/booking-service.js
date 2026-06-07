import API_BASE_URL from "../config";


const BOOKING_API_URL = `${API_BASE_URL}/api/bookings`;

function getHeaders() {
    const token = localStorage.getItem('token');
    return token ? {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json",
    } : {};
}

export async function createBooking(booking) {
    console.log("Request URL:", BOOKING_API_URL);
    console.log("Request Headers:", getHeaders());
    console.log("Request Body:", JSON.stringify(booking, null, 2));

    try {
        const response = await fetch(BOOKING_API_URL, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify(booking),
        });

        console.log("Response status:", response.status);
        console.log("Response ok:", response.ok);

        // Try to parse the response body
        const responseText = await response.text();
        console.log("Response body:", responseText);

        if (!response.ok) {
            throw new Error(`Error creating event: ${response.status} - ${responseText}`);
        }

        return JSON.parse(responseText);
    } catch (err) {
        console.error("Request failed:", err);
        throw err;
    }
}

export async function getReports() {
    const response = await fetch(`${BOOKING_API_URL}/reports`, {
        method: "GET",
        headers: getHeaders(),
    });
    if (!response.ok) throw new Error("Failed to fetch events");
    return response.json();
}