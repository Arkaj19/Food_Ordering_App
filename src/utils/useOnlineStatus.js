import { useEffect, useState } from "react";

const useOnlineStatus = () => {
   
    //Check the status
    const [ onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        //check if offline
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })

         //check if online
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })
    },[])

    // return the online status
    return onlineStatus;
}

export default useOnlineStatus;