import React,{ useState, useEffect } from "react";

const useOnlineOfflineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    const onlineHandler = () => {
      setIsOnline(true);
    };
    const offlineHandler = () => {
      setIsOnline(false);
    };
    //Listen to online status
    window.addEventListener("online", onlineHandler);
    //Listen to offline status
    window.addEventListener("offline", offlineHandler);
    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, []);
  return { isOnline };
};

export default useOnlineOfflineStatus;
