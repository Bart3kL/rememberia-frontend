import { useState, useCallback, useRef, useEffect } from "react";
import { toast } from "react-toastify";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);

  const activeHttpRequests: any = useRef([]);

  const sendRequest = useCallback(
    async (url: any, method = "GET", body: any, headers = {}) => {
      setIsLoading(true);
      const httpAbortCtrl: any = new AbortController();
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
          (reqCtrl: any) => reqCtrl !== httpAbortCtrl
        );

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setIsLoading(false);
        window.location.href = "/";
        return responseData;
      } catch (err: any) {
        setIsLoading(false);
        toast.error(err.message);
        throw err;
      }
    },
    []
  );

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      activeHttpRequests.current.forEach((abortCtrl: any) => abortCtrl.abort());
    };
  }, []);

  return { isLoading, sendRequest };
};
