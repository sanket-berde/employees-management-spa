const API_BASE_URL = 'https://your-api-url.com'; // change this

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface RequestConfig {
  method: HttpMethod;
  headers: Record<string, string>;
  body?: string;
}

const request = async <TResponse>(
  url: string,
  method: HttpMethod = 'GET',
  data?: unknown
): Promise<TResponse> => {
  const config: RequestConfig = {
    method,
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${yourToken}`, // optional token header
    },
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`${API_BASE_URL}${url}`, config);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'API request failed');
    }

    const result = await response.json().catch(() => {
      throw new Error('Failed to parse JSON response');
    });

    return result as TResponse;

  } catch (error) {
    console.error(`Error during API call [${method} ${url}]:`, error);
    throw error;
  }
};

// CRUD operations with generics
export const api = {
  get: <T>(url: string) => request<T>(url, 'GET'),
  post: <T>(url: string, data: unknown) => request<T>(url, 'POST', data),
  put: <T>(url: string, data: unknown) => request<T>(url, 'PUT', data),
  patch: <T>(url: string, data: unknown) => request<T>(url, 'PATCH', data),
  delete: <T>(url: string) => request<T>(url, 'DELETE'),
};