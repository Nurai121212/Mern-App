import { useCallback } from "react";
import { useState } from "react"

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request =useCallback(async(url, method = 'GET', body = null, headers = {}) => {
    setLoading(true);

    try{
      if(body){
        body = JSON.stringify(body)
        headers['Content-Type'] = 'application/json'
      };

      const res = await fetch(url, {method, body, headers});
      const data = await res.json();

      if(!res.ok){
        throw new Error(data.message || 'Что то пошло не так')
      }

      return data
    }catch(e){
      setError(e.message)
      throw e
    }finally{
      setLoading(false)
    }
  }, []);

  const clearError =useCallback(() => setError(null), [])

  return {loading, error, request, clearError}
}