import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export function Aside() {
  return (
    <div className="content">
      <div className="content-title">Guilherme</div>
      <div className="content-subtitle">Enginner + Front-end Developer</div>
      <div className="content-midia-social">
        <AiFillGithub size={42} />
        <AiFillLinkedin size={42} />
      </div>
    </div>
  );
}
