// mapdata/page.js

import React, { Suspense } from "react";
import MapDataComponent from "./MapDataComponent"; // new component file (see below)

export default function Page() {
  return (
    <Suspense fallback={<div>Loading disaster data...</div>}>
      <MapDataComponent />
    </Suspense>
  );
}
