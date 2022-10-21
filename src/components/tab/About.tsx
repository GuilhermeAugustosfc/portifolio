import { BiMoviePlay } from "react-icons/bi";
import { FaHeadSideVirus } from "react-icons/fa";
export function About() {
  return (
    <div className="tab-about">
      <img
        src="https://media-exp1.licdn.com/dms/image/C4D03AQGvjbnMl7kTjQ/profile-displayphoto-shrink_800_800/0/1662738802015?e=1671062400&v=beta&t=GM2YMMLL_CK-_JhHeNiNb0PfQyC9FOvXRpMm8hQbQgg"
        alt="Minha foto"
      />
      <div className="tab-about-subtitle">
        Eu me chamo Guilherme Augusto, tenho 23 anos, formado em analista de
        sistemas, já trabalhei como fullStack e atualmete sou Front-end, amo
        programar de noite e fazer edicoes de videos!
      </div>

      <div className="tab-about-icons">
        <BiMoviePlay size={50} />
        <FaHeadSideVirus size={50} />
      </div>
    </div>
  );
}
