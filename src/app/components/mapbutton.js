import React from "react";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";

const MapButton = () => {
  return (
    <div>
      <Link href="/Map">
        <button>
          Click to view Map <IoLocationSharp />
        </button>
      </Link>
    </div>
  );
};

export default MapButton;
