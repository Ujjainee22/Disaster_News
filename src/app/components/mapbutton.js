import React from "react";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import Styles from "@/app/styles/mapbutton.module.css"
const MapButton = () => {
  return (
    <div>
      <Link href="/Map">
        <button class={Styles.mapbutton }>
          Click to view Map <IoLocationSharp />
        </button>
      </Link>
    </div>
  );
};

export default MapButton;
