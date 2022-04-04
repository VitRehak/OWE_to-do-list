import { useState } from "react";

const getLocalPriority = (initialValue) => {
  const tmp = localStorage.getItem("priority");
  return tmp !== null ? tmp : initialValue;
};

export default function usePriority(initialValue) {
  const [priority, setPriority] = useState(getLocalPriority(initialValue));

  const setLocalPriority = (item) => {
    localStorage.setItem("priority", item);
    setPriority(getLocalPriority(initialValue));
  };

  const localPriority = priority;

  return [localPriority, setLocalPriority];
}
