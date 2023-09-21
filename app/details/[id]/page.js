"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import detCss from "./details.module.css";
import Link from "next/link";
import ListCss from "@/app/List/List.module.css";

async function getDets(id) {
  try {
    const { data } = await axios.get(
      `https://api.unsplash.com/photos/${id}?client_id=ND1SDRrGt2QIx4X8TBA_A8nLte0m5M7cUWXM7PvUN6c`
    );
    // console.log(data);
    return data;
  } catch (error) {
    return error;
  }
}

const details = () => {
  const { id } = useParams();
  const [det, setdet] = useState(use(getDets(id)));
  console.log(det);

  let DownloadImage = `&force=true`; //for download image

  return (
    <>
      <div className={detCss.Cntr}>
        <div className={detCss.ImageCntr}>
          <div className={detCss.topdets}>
            <div className={detCss.LeftCntr}>
              <Link href="" className={detCss.dp}>
                <img src={`${det && det.user.profile_image.large}`} alt="" />
              </Link>
              <div className={detCss.Name_Sponser}>
                <Link className={detCss.Link} href="">
                  {" "}
                  <span>{`${det && det.user.first_name} ${
                    det && det.user.last_name
                  }`}</span>
                </Link>
                <h5>{`${
                  det && det.user.for_hire ? "Avilable for hire" : " "
                }`}</h5>
              </div>
            </div>
            <div className={detCss.RightCntr}>
              <button className={ListCss.Btn}>
                <svg
                  className={ListCss.BtnSvg}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  version="1.1"
                  aria-hidden="false"
                >
                  <desc lang="en-US">A heart</desc>
                  <path d="M21.424 4.594c-2.101-2.125-5.603-2.125-7.804 0l-1.601 1.619-1.601-1.62c-2.101-2.124-5.603-2.124-7.804 0-2.202 2.126-2.102 5.668 0 7.894L12.019 22l9.405-9.513a5.73 5.73 0 0 0 0-7.893Z"></path>
                </svg>
              </button>
              <button className={ListCss.Btn}>
                <svg
                  className={ListCss.BtnSvg}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  version="1.1"
                  aria-hidden="false"
                >
                  <desc lang="en-US">A plus sign</desc>
                  <path d="M21.8 10.5h-8.3V2.2h-3v8.3H2.2v3h8.3v8.3h3v-8.3h8.3z"></path>
                </svg>
              </button>
              <div className={detCss.dwnld}>
                <Link
                  href={`${det && det.links.download} ${DownloadImage}`}
                  className={detCss.Downbtn}
                >
                  Download
                </Link>
                <button className={detCss.arrowdwn}>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    version="1.1"
                    aria-hidden="false"
                  >
                    <desc lang="en-US">Chevron down</desc>
                    <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <Link href="" className={detCss.Image}>
            <img src={det && det.links.download} alt="" />
          </Link>
          <div className={detCss.topdets}>
            <div className={detCss.LeftCntr}></div>
            <div className={detCss.RightCntr}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default details;
