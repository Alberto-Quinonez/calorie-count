const API_URL = "http://localhost:1337";

export async function listCalorieCountEntries() {
    const response = await fetch(`${API_URL}/api/caloriesCountEntries`);
    return response.json();
}

export async function createCalorieCountEntry(entry) {
    const response = await fetch(`${API_URL}/api/caloriesCountEntries`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(entry),
    });
    return response.json();
}