import { useState, useCallback, useRef, useEffect } from "react";
import { toast } from "react-toastify";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);

  const activeHttpRequests = useRef<AbortController[]>([]);

  const sendRequest = useCallback(
    async (url: string, method = "GET", body: any, headers = {}) => {
      setIsLoading(true);

      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);

      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortCtrl.signal,
        });

        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        );

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setIsLoading(false);
        window.location.href = "/";

        return responseData;
      } catch (err: unknown) {
        if (err instanceof Error) {
          toast.error(err.message);
        }
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return { isLoading, sendRequest };
};
