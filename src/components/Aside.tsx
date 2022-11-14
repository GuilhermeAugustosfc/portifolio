import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export function Aside() {
  return (
    <div className="content">
      <div className="content-title">Guilherme</div>
      <div className="content-subtitle">Enginner + Front-end Developer</div>
      <div className="content-midia-social">
        <a
          target={"_blank"}
          href="https://www.linkedin.com/in/guilherme-augusto-4a1749165/"
        >
          <AiFillLinkedin size={42} />
        </a>

        <a target={"_blank"} href="https://github.com/GuilhermeAugustosfc">
          <AiFillGithub size={42} />
        </a>
      </div>
    </div>
  );
}
