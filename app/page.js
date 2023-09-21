"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { DataContext } from "./context";
import Css from "@/app/page.module.css";

const page = () => {
  const router = useRouter();
  const [Data, setData] = useContext(DataContext);

  const getImages = async () => {
    const { data } = await axios.get(
      "https://api.unsplash.com/photos?client_id=ND1SDRrGt2QIx4X8TBA_A8nLte0m5M7cUWXM7PvUN6c&page=1&per_page=30"
    );
    setData(data);
    // console.log(data);
    router.push("/List");
  };

  return (
    <div className={Css.mainPage}>
      {/* <Link href="/list">Random image</Link> <br /> */}
      <button className={`${Css.btn} ${Css.linkbtn}`} onClick={getImages}>
        Trending Images
      </button>
      <br />
      <Link className={Css.btn} href="/Search">
        Search image
      </Link>{" "}
    </div>
  );
};

export default page;
