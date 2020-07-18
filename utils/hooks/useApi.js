import {useCallback, useState} from 'react';

const useApi = serviceMethod => {
  const [data, setData] = useState({
    loading: false,
    response: null
  });

  const fetchData = useCallback(async (...args) => {
    try {
      setData((state) => ({ ...state, loading: true }));
      const response = await serviceMethod.apply(null, args);
      setData({ response, loading: false });
      return response;
    } catch (error) {
      setData((state) => ({ ...state, loading: false }));
      throw error;
    }
  }, []);

  return [
    data.loading,
    fetchData,
    data.response,
  ];
};
export default useApi;
