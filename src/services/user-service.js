const AUTH_API_URL = "http://localhost:8080/api/auth";

export const register = async (fullName, email, password) => {
  const response = await fetch(`${AUTH_API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: fullName,
      email: email,
      password: password,
    }),
  });

  if (!response.ok) {
    throw new Error("Invalid email or password");
  }

  return response.json();
};

export async function login(email, password) {
  const response = await fetch(`${AUTH_API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  if (!response.ok) {
    throw new Error("Invalid email or password");
  }

  return response.json();
}
