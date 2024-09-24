export async function fetchWithAuth(url: string, options: RequestInit = {}) {
    const response = await fetch(url, {
      ...options,
      credentials: 'include', // This is important to include cookies in the request
      headers: {
        ...options.headers,
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'An error occurred');
    }
  
    return response.json();
  }