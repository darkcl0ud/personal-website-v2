import { useState, useEffect } from "react";
import { locateAction } from "../http/locate";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/index.ts";
import { locateActions } from "../store/locate.ts";

export default function IPBox() {
    const [loading, setLoading] = useState(true);
    const userLocate = useSelector((state: RootState) => state.locate);
    const dispatch = useDispatch();

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const data = await locateAction();
        dispatch(locateActions.setLocate({ ip: data.ip, country: data.country }));
      } catch (err) {
        console.error(err);
        dispatch(locateActions.setLocate({ ip: "ERROR", country: "ERROR" }));
      }
    };
    if (!userLocate.ip) {
      fetchIP();
    }
    setLoading(false);
  }, []);
    return (
        <div className="w-fit h-20 md:absolute md:bottom-0 md:right-0 font-label font-light">
            <p className="text-xs md:text-sm text-white/40 tracking-widest">IP_ADDR: <span>{loading ? "Loading..." : userLocate.ip}</span></p>
            <p className="text-xs md:text-sm text-white/40 tracking-widest">LOC: <span>{loading ? "Loading..." : userLocate.country}</span></p>
            <p className="text-xs md:text-sm text-white/40 tracking-widest">VER: v1.0.0</p>
        </div>
    )
}