import {
  DiJavascript1,
  DiPhp,
  DiReact,
  DiMysql,
  DiMongodb,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { SiTypescript } from "react-icons/si";

export function Skill() {
  return (
    <div className="tab-skill">
      <div className="tab-skill-title">Tecnologias</div>
      <div className="tab-skill-content">
        Ja trabalhei com o framework Coldgniter em PHP com sistemas legados
        monoliticos com banco relacional MySql e MongoDB junto com Javascript,
        HTML e CSS no front end e atualmente me especializando em ReactJs, React
        Native e Typescript
      </div>
      <div className="tab-skill-icons">
        <DiPhp color="#7175aa" />
        <DiJavascript1 color="#ead41c" />
        <SiTypescript color="#0074c3" />
        <DiReact color="#5ccfee" />

        <DiMysql color="#006f88" />
        <DiMongodb color="#1d8235" />
        <DiHtml5 color="#e56026" />
        <DiCss3 color="#2fa0d2" />
      </div>
    </div>
  );
}
