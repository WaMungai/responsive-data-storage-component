import React from "react";

function DataStorage() {
  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 -z-10">
        <picture className="w-full">
          <source
            media="(min-width: 768px)"
            srcset="../images/bg-desktop.png"
            className="w-full"
          />
          <img src="../images/bg-mobile.png" alt="" className="w-full" />
        </picture>
      </div>
      <div className="max-w-6xl mx-auto px-8 flex flex-col justify-center h-screen gap-8 lg:flex-row lg:items-center">
        <article className="dara-blue rounded-right p-8 rounded-lg lg:w-1/2">
          <img src="../images/logo.svg" alt="" />
          <ul className="mt-10 flex items-start justify-start gap-5">
            <li className="bg-image p-3 rounded-lg">
              <img src="./images/icon-document.svg" alt="" />
            </li>
            <li className="bg-image p-3 rounded-lg">
              <img src="./images/icon-folder.svg" alt="" />
            </li>
            <li className="bg-image p-3 rounded-lg">
              <img src="./images/icon-upload.svg" alt="" />
            </li>
          </ul>
        </article>
        <article className="dark-blue p-8 rounded-lg lg:w-full relative">
          <h1 className="text-base text-center text-white lg:text-left">
            You've used{" "}
            <span className="inline-block opacity-100 text-lg font-bold">
              815
            </span>{" "}
            of your storage
          </h1>
          <div className="bg-image h-5 w-full rounded-full my-4 relative">
            <article className="linear-gradient w-3/4 h-3 absolute top-1 left-1 rounded-full">
              <div className="bg-white rounded-full absolute right-1 ball"></div>
            </article>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-bold text-white">0 GB</p>
            <p className="font-bold text-white"> 1000 GB</p>
          </div>

          <div className="bg-white rounded-lg w-40 h-16 flex items-center justify-center bg-185">
            <h2 className="text-slate-900 font-bold text-4xl">
              185<span className="fornnormal opacity-75 text-base"> GB Left</span>
            </h2>
            <div className="triangle"></div>
          </div>
        </article>
      </div>
    </>
  );
}

export default DataStorage;
