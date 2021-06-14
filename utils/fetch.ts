export async function get(url, token) {
  const body = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : null,
    },
  };

  try {
    const response = await fetch(url, body);
    check(response);

    return await response.json();
  } catch (e) {
  }
}

function check(response) {
  if (response.status >= 400 && response.status < 600) {
    throw new Error('Bad response from server');
  }
}