const EVENT_API_URL = "http://localhost:8080/api/events";

function getHeaders() {
    const token = localStorage.getItem('token');
    return token ? {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json",
    } : {};
}

export async function getCategories() {
    const response = await fetch(`${EVENT_API_URL}/categories`, {
        method: "GET",
    });
    if (!response.ok) throw new Error("Failed to fetch events categories");
    return response.json();
}

export async function getEventsByPage(page, size, sort, category = "all") {
    const params = new URLSearchParams({
        page,
        size,
        sort,
        category, // ✅ include category
    });
    const url = `${EVENT_API_URL}/page?${params.toString()}`;

    // ✅ Log the request URL
    console.log("Fetching events from:", url);

    const response = await fetch(url, {
        method: "GET",
    });
    if (!response.ok) throw new Error("Failed to fetch events");
    return response.json();
}

export async function createEvent(event) {
    console.log("Request URL:", EVENT_API_URL);
    console.log("Request Headers:", getHeaders());
    console.log("Request Body:", JSON.stringify(event, null, 2));

    try {
        const response = await fetch(EVENT_API_URL, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify(event),
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