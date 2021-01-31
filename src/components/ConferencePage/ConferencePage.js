import React, { useEffect } from "react";
import sad from "../../Sad";

function ConferencePage() {
  useEffect(() => {
    sad();
  }, []);

  return (
    <div>
      <div>Big Sad</div>
    </div>
  );
}

export default ConferencePage;
