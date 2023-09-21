"use client";
import React, { useContext, useState } from "react";
import { DataContext } from "../context";
import ListCss from "./List.module.css";

const List = () => {
  const [Data] = useContext(DataContext);
  console.log(Data);

  let DownloadImage = `&force=true`; //for download image

  let imagerender = <p>Loding...</p>;
  if (Data.length > 0) {
    imagerender = Data.map((d, i) => {
      return (
        <div key={d.id} className={ListCss.img_dets_cntr}>
          <a className={ListCss.image_anchor} href={`/photos/${d.id}`}>
            <div className={ListCss.ImgParent}>
              <img
                style={{
                  aspectRatio: `${d.width}/${d.height}`,
                }}
                src={d.urls.small}
                alt=""
              />
            </div>
          </a>
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
                  <a href="">
                    {" "}
                    <img src={`${d.user.profile_image.small}`} alt="" />
                  </a>
                </div>
                <div className={ListCss.Name_avilable_div}>
                  <a href="">
                    <h5>{`${d.user.first_name}  ${d.user.last_name} `}</h5>
                  </a>
                  <span className={ListCss.hire}>
                    <h6 href="">
                      {d.user.for_hire ? "Avilable for hire" : " "}
                    </h6>
                  </span>
                </div>
              </div>
              <div className={ListCss.Btn}>
                <a
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
                </a>
              </div>
            </div>
          </div>
          <div>{ListCss.bgCrolor}</div>
        </div>
      );
    });
  }

  return (
    <div>
      <h1>Trending Images</h1>
      <hr />
      <div className={ListCss.image_wrapper}>
        <ul className={ListCss.card}>{imagerender}</ul>
      </div>
    </div>
  );
};

export default List;
