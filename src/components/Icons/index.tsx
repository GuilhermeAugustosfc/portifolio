interface IconsProps {
  numberIcon: number;
}

import { FaReact, FaReacteurope, FaCss3 } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { AiFillHtml5, AiOutlineHtml5 } from "react-icons/ai";
import { GrHtml5 } from "react-icons/gr";
import { RiHtml5Line } from "react-icons/ri";
import { DiCss3 } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { SiCsswizardry } from "react-icons/si";

export function Icons({ numberIcon }: IconsProps) {
  const myicons = [
    [FaReact, "blue"],
    [FaReacteurope, "blue"],
    [FaCss3, "blue"],
    [RiReactjsLine, "blue"],
    [TbBrandReactNative, "lightblue"],
    [SiTypescript, "lightblue"],
    [AiFillHtml5, "orange"],
    [GrHtml5, "orange"],
    [RiHtml5Line, "orange"],
    [DiCss3, "blue"],
    [IoLogoCss3, "lightblue"],
    [SiCsswizardry, "lightblue"],
    [AiOutlineHtml5, "orange"],
  ];

  const SelectedIcon = myicons[numberIcon][0];
  const color = myicons[numberIcon][1];
  return (
    <div className="container-icons">
      <SelectedIcon size={"200px"} color={`${color}`} />
    </div>
  );
}
