import { toast } from "react-toastify";

export const useFetch = async (
  url: string,
  method = "GET",
  body: any,
  headers = {}
) => {
  try {
    const response = await fetch(url, {
      method,
      body,
      headers,
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message);
    }

    return responseData;
  } catch (err) {
    if (err instanceof Error) {
      toast.error(err.message);
    }

    throw err;
  }
};
