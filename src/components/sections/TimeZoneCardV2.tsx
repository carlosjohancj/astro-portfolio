import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

const Timezone = ({ timezone }: any) => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment().tz(timezone);
      setDateTime(now.format(" DD - MM - YYYY [con] h:mm:ss A"));
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div>
      <p>{dateTime}</p>
      <p className="text-sm text-gray-500">🇻🇪 Caracas DC, Venezuela 🇻🇪</p>
    </div>
  );
};

export default Timezone;
