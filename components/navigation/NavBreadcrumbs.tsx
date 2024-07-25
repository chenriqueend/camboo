"use client";

import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";

export default function NavBreadcrumbs() {
  const breadcrumbsArr = [
    "Home",
    "Carros usados",
    "Mercedes-Benz E 400 Cabriolett",
  ];

  return (
    <div>
      <Breadcrumbs
        separator=">"
        className="bg-transparent"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {breadcrumbsArr.map((breadcrumb, index) => (
          <a
            key={index}
            href="#"
            className={`${
              index + 1 !== breadcrumbsArr.length ? "opacity-60" : ""
            }`}
          >
            {breadcrumb}
          </a>
        ))}
      </Breadcrumbs>
    </div>
  );
}
