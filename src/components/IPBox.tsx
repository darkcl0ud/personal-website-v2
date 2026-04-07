import { useState, useEffect } from "react";
import { locateAction } from "../http/locate";

export default function IPBox() {
    const [ip, setIp] = useState<string | null>(null);
    const [country, setCountry] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const data = await locateAction();
        setIp(data.ip);
        setCountry(data.country);
      } catch (err) {
        console.error(err);
        setIp("ERROR");
        setCountry("ERROR");
      } finally {
        setLoading(false);
      }
    };

    fetchIP();
  }, []);
    return (
        <div className="w-fit h-20 md:absolute md:bottom-0 md:right-0 font-label font-light">
            <p className="text-xs md:text-sm text-white/40 tracking-widest">IP_ADDR: <span>{loading ? "Loading..." : ip}</span></p>
            <p className="text-xs md:text-sm text-white/40 tracking-widest">LOC: <span>{loading ? "Loading..." : country}</span></p>
            <p className="text-xs md:text-sm text-white/40 tracking-widest">VER: v1.0.0</p>
        </div>
    )
}