"use client";
import axios from "axios";
import React, { useState } from "react";
import Css2 from "./Search.module.css";
import Srch from "@/Components/Navbar/Navbar.module.css";
import ListCss from "../List/List.module.css";
import Link from "next/link";
const page = () => {
  const [slug, setSlug] = useState("");
  const [Images, setImages] = useState([]);

  const searchHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=ND1SDRrGt2QIx4X8TBA_A8nLte0m5M7cUWXM7PvUN6c&page=1&per_page=30&query=${slug}`
      );
      // console.log(data);

      setImages(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  let DownloadImage = `&force=true`; //for download image
  let searchrender = <p>Loading...</p>;
  if (Images.length > 0) {
    searchrender = Images.map((d, i) => {
      return (
        // <li key={d.id}>
        //   <img
        //     style={{
        //       marginBottom: "1rem",
        //       aspectRatio: `${d.width}/${d.height}`,
        //     }}
        //     src={d.urls.small}
        //     alt=""
        //   />
        //   <Link href={`/details/${d.id}`}>
        //     <h3>{d.user.first_name}</h3>
        //   </Link>
        // </li>
        <div key={d.id} className={ListCss.img_dets_cntr}>
          <Link className={ListCss.image_anchor} href={`/details/${d.id}`}>
            <div className={ListCss.ImgParent}>
              <img
                style={{
                  aspectRatio: `${d.width}/${d.height}`,
                }}
                src={d.urls.small}
                alt=""
              />
            </div>
          </Link>
          <div className={ListCss.Details_Cntr}>
            <div className={ListCss.Details_Top}>
              <div></div>
              <div className={ListCss.LikeAdd}>
                <button className={ListCss.Btn}>
                  <svg
                    className={ListCss.BtnSvg}
                    width="16"
                    height="16"
                    class="TrVF8"
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
                    class="utUL6"
                    viewBox="0 0 24 24"
                    version="1.1"
                    aria-hidden="false"
                  >
                    <desc lang="en-US">A plus sign</desc>
                    <path d="M21.8 10.5h-8.3V2.2h-3v8.3H2.2v3h8.3v8.3h3v-8.3h8.3z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className={ListCss.Details_Top}>
              <div className={ListCss.Left_Dp_Dets_Cntr}>
                <div class={ListCss.Dp}>
                  <Link href="">
                    {" "}
                    <img src={`${d.user.profile_image.small}`} alt="" />
                  </Link>
                </div>
                <div className={ListCss.Name_avilable_div}>
                  <Link href="">
                    <h5>{`${d.user.first_name}  ${d.user.last_name} `}</h5>
                  </Link>
                  <span className={ListCss.hire}>
                    <h6 href="">
                      {d.user.for_hire ? "Avilable for hire" : " "}
                    </h6>
                  </span>
                </div>
              </div>
              <div className={ListCss.Btn}>
                <Link
                  className={ListCss.BtnSvg}
                  href={`${d.links.download} ${DownloadImage}`}
                >
                  <svg
                    width="16"
                    height="16"
                    class="m9vYO"
                    viewBox="0 0 24 24"
                    version="1.1"
                    aria-hidden="false"
                  >
                    <desc lang="en-US">Arrow pointing down</desc>
                    <path d="m19.35 11.625-5.85 5.4V1.5h-3v15.525l-5.85-5.4-2.025 2.25L12 22.425l9.375-8.55-2.025-2.25Z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div>{ListCss.bgCrolor}</div>
        </div>
      );
    });
  }

  return (
    <>
      <div className={Css2.Search}>
        <div
          className={Css2.background}
          style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
        >
          <div className={Css2.overlay}>
            <div className={Css2.searchtext}>
              <h1 className={Css2.SearchHeading}>Unsplash</h1>
              <p className={Css2.SearchPara}>
                The internet’s source for visuals. <br /> Powered by creators
                everywhere.
              </p>
              <form className={Css2.focus} onSubmit={searchHandler}>
                <div className={`${Srch.searchbar} ${Css2.SearchBorder}`}>
                  <button className={Srch.btn}>
                    <svg
                      style={{ fill: "#0000006b", margin: "0 15px" }}
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      version="1.1"
                      aria-hidden="false"
                    >
                      <desc lang="en-US">A magnifying glass</desc>
                      <path d="M16.5 15c.9-1.2 1.5-2.8 1.5-4.5C18 6.4 14.6 3 10.5 3S3 6.4 3 10.5 6.4 18 10.5 18c1.7 0 3.2-.5 4.5-1.5l4.6 4.5 1.4-1.5-4.5-4.5zm-6 1c-3 0-5.5-2.5-5.5-5.5S7.5 5 10.5 5 16 7.5 16 10.5 13.5 16 10.5 16z"></path>
                    </svg>
                  </button>
                  <input
                    className={Srch.focus}
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    type="text"
                    placeholder="Shearch-high resolution images"
                  />
                </div>
                <button className={Css2.Search_btn}>SearchImages</button>
              </form>
            </div>
          </div>
        </div>
        <div className={ListCss.image_wrapper}>
          <ul className={ListCss.card}>{searchrender}</ul>
        </div>
      </div>
    </>
  );
};

export default page;
