import { visibleTabsProps } from "../../App";

import GitImg from "../../assets/git.png";
import HtmlCssImg from "../../assets/htmlcss.png";
import FlexboxImg from "../../assets/flexbox.png";
import Codgniter1 from "../../assets/codgniter1.png";
import HtmlCss1Img from "../../assets/htmlcss2.png";
import JavascriptImg from "../../assets/javascript.png";
import MongoImg from "../../assets/mongo.png";
import ResponsivoImg from "../../assets/responsivo.png";
import UXImg from "../../assets/UX.png";

import bootstrap from "../../assets/bootstrap.png";
import phpmysql1 from "../../assets/phpmysql1.png";
import phpmysql2 from "../../assets/phpmysql2.png";
import dessigpatter1 from "../../assets/dessigpatter1.png";
import dessigpatter2 from "../../assets/dessigpatter2.png";
import codgniter2 from "../../assets/codgniter2.png";
// import Eu from "../../assets/linkedimimage.jpg";

interface WorksProps {
  visibleTabs: visibleTabsProps;
}
export function Certificado({ visibleTabs }: WorksProps) {
  const images = [
    FlexboxImg,
    GitImg,
    HtmlCssImg,
    MongoImg,
    UXImg,
    JavascriptImg,
    bootstrap,
    phpmysql1,
    phpmysql2,
    ResponsivoImg,
    HtmlCss1Img,
    dessigpatter1,
    dessigpatter2,
    Codgniter1,
    codgniter2,
  ];

  return (
    <div className="container-certificado">
      {[...Array(visibleTabs.certificadoNumber).keys()].map((image, i) => (
        <img
          key={i}
          className={`tab-certificado-img`}
          src={images[i]}
          alt={`certificado ${i}`}
        />
      ))}
    </div>
  );
}
