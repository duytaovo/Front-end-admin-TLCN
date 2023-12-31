import { useState, useEffect } from "react";

function useDebound(textValue: any, deplay: any) {
  const [value, setValue] = useState(textValue);

  useEffect(() => {
    const hanlle = setTimeout(() => {
      setValue(textValue);
    }, deplay);
    return () => clearTimeout(hanlle);
  }, [textValue]);
  return value;
}

export default useDebound;
