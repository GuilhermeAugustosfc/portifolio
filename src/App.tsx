import "./App.css";
import { useRef, useState } from "react";
import { Home } from "./components/tab/Home";
import { About } from "./components/tab/About";
import { AudioComponent } from "./components/Audio";
import { Header } from "./components/Header";
import { Aside } from "./components/Aside";
import { Works } from "./components/tab/Works";
import { Skill } from "./components/tab/Skill";
import { Certificado } from "./components/tab/certificado";
import { Icons } from "./components/Icons";
import { Obrigado } from "./components/Obrigado";

export interface visibleTabsProps {
  home: boolean;
  about: boolean;
  skils: boolean;
  works: boolean;
  certificado: boolean;
  certificadoNumber: number;
  aside: boolean;
  content: boolean;
  header: boolean;
  audio: boolean;
  zoom1: boolean;
  zoom2: boolean;
  zoom3: boolean;
  zoom4: boolean;
  zoom5: boolean;
  zoom6: boolean;
  numberIcon: number;
  obrigado: boolean;
}

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [visibleTabs, setVisibleTabs] = useState<visibleTabsProps>({
    home: true,
    about: false,
    skils: false,
    works: false,
    certificado: false,
    certificadoNumber: 0,
    aside: false,
    content: false,
    header: false,
    audio: true,
    zoom1: false,
    zoom2: false,
    zoom3: false,
    zoom4: false,
    zoom5: false,
    zoom6: false,
    numberIcon: 0,
    obrigado: false,
  });

  const defaultTabs = {
    home: false,
    about: false,
    skils: false,
    works: false,
  };

  const timeSync: number[] = [];

  const indexTime = useRef(0);

  const timeViolin = [
    {
      time: 1.00656,
      fn: () => {
        setVisibleTabs({ ...visibleTabs, audio: false });
      },
    },
    {
      time: 3.157464,
      fn: () => {
        setVisibleTabs({ ...visibleTabs, header: true });
      },
    },
    {
      time: 5.258912,
      fn: () => {
        setVisibleTabs({ ...visibleTabs, aside: true });
      },
    },
    {
      time: 9.380786,
      fn: () => {
        setVisibleTabs({
          ...visibleTabs,
          ...defaultTabs,
          content: true,
          home: true,
        });
      },
    },
    {
      time: 11.364713,
      fn: () => {
        setVisibleTabs({ ...visibleTabs, ...defaultTabs, about: true });
      },
    },
    {
      time: 13.676352,
      fn: () => {
        setVisibleTabs({ ...visibleTabs, ...defaultTabs, skils: true });
      },
    },
    {
      time: 15.66888,
      fn: () => {
        setVisibleTabs({ ...visibleTabs, ...defaultTabs, works: true });
      },
    },
    {
      time: 18.131612,
      fn: () => {
        setVisibleTabs({ ...visibleTabs, zoom1: true });
      },
    },
    {
      time: 18.771904,
      fn: () => {
        setVisibleTabs({ ...visibleTabs, zoom2: true });
      },
    },
    {
      time: 19.381646,
      fn: () => {
        setVisibleTabs({ ...visibleTabs, zoom3: true });
      },
    },
    {
      time: 20.042687,
      fn: () => {
        setVisibleTabs({ ...visibleTabs, zoom4: true });
      },
    },
    {
      time: 20.627697,
      fn: () => {
        setVisibleTabs({ ...visibleTabs, zoom5: true });
      },
    },
    {
      time: 21.351466,
      fn: () => {
        setVisibleTabs({ ...visibleTabs, zoom6: true });
      },
    },
    {
      time: 21.891453,
      fn: () => {
        setVisibleTabs({
          ...visibleTabs,
          content: false,
          works: false,
          certificado: true,
          certificadoNumber: 1,
        });
      },
    },
    {
      time: 22.425497,
      fn: () => {
        setVisibleTabs({
          ...visibleTabs,
          certificadoNumber: 2,
        });
      },
    },
    {
      time: 22.997032,
      fn: () => {
        setVisibleTabs({
          ...visibleTabs,
          certificadoNumber: 3,
        });
      },
    },
    {
      time: 23.552515,
      fn: () => {
        setVisibleTabs({
          ...visibleTabs,
          certificadoNumber: 4,
        });
      },
    },
    {
      time: 24.081854,
      fn: () => {
        setVisibleTabs({
          ...visibleTabs,
          certificadoNumber: 5,
        });
      },
    },
    {
      time: 24.623456,
      fn: () => {
        setVisibleTabs({
          ...visibleTabs,
          certificadoNumber: 6,
        });
      },
    },
    {
      time: 25.138378,
      fn: () => {
        setVisibleTabs({
          ...visibleTabs,
          certificadoNumber: 7,
        });
      },
    },
    {
      time: 25.582436,
      fn: () => {
        setVisibleTabs({
          ...visibleTabs,
          certificadoNumber: 8,
        });
      },
    },
    {
      time: 26.074152,
      fn: () => {
        setVisibleTabs({
          ...visibleTabs,
          certificadoNumber: 9,
        });
      },
    },
    {
      time: 26.546083,
      fn: () => {
        setVisibleTabs({
          ...visibleTabs,
          certificadoNumber: 10,
        });
      },
    },
    {
      time: 26.995329,
      fn: () => {
        setVisibleTabs({
          ...visibleTabs,
          certificadoNumber: 11,
        });
      },
    },
    {
      time: 27.571597,
      fn: () => {
        setVisibleTabs({
          ...visibleTabs,
          certificadoNumber: 12,
        });
      },
    },
    {
      time: 28.034838,
      fn: () => {
        setVisibleTabs({
          ...visibleTabs,
          certificadoNumber: 13,
        });
      },
    },
    {
      time: 28.511221,
      fn: () => {
        setVisibleTabs({
          ...visibleTabs,
          certificadoNumber: 14,
        });
      },
    },
    {
      time: 28.956212,
      fn: () => {
        setVisibleTabs({
          ...visibleTabs,
          certificadoNumber: 15,
        });
      },
    },
    {
      time: 29.956212,
      fn: () => {
        setVisibleTabs({
          ...visibleTabs,
          certificado: false,
          content: true,
          home: true,
        });
      },
    },
    {
      time: 33.04493,
      fn: () => {
        setVisibleTabs({ ...visibleTabs, certificado: false, content: false });
        changeBackground();
      },
    },
  ];

  // const backgrounds = [
  //   "data:image/png;base64,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",
  //   "https://w0.peakpx.com/wallpaper/944/506/HD-wallpaper-react-hacker-programming-javascript-python-coder-software-coding-computer-science-css-web-design-html-linux-html5-programmer-laptop-tech-php-developer.jpg",
  //   "https://c4.wallpaperflare.com/wallpaper/111/745/193/reactjs-javascript-programming-programming-language-hd-wallpaper-preview.jpg",
  //   "https://wallpaperaccess.com/full/3949078.jpg",
  //   "https://assets.website-files.com/61a3c085c8291d29d5228353/61a3cd23886ede43c287f49b_6182c5fecf702720abc4ee87_G6Geh8H.png",
  //   "https://c4.wallpaperflare.com/wallpaper/967/71/738/javascript-minimalism-programmers-wallpaper-preview.jpg",
  //   "https://wallpaperaccess.com/full/1555163.jpg",
  //   "https://c4.wallpaperflare.com/wallpaper/453/129/282/html5-hyper-text-markup-language-html-wallpaper-preview.jpg",
  // ];

  function changeBackground() {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 12) + 1;

      setVisibleTabs({
        ...visibleTabs,
        numberIcon: randomIndex,
        certificado: false,
        content: false,
      });

      if (audioRef.current && audioRef.current.currentTime >= 43) {
        clearInterval(interval);
        setVisibleTabs({
          ...visibleTabs,
          numberIcon: 0,
          obrigado: true,
          home: false,
          certificado: false,
        });
      }
    }, 400);
  }

  function onClickBoom() {
    if (audioRef.current) {
      timeSync.push(audioRef.current.currentTime);
    }
  }

  function onTimeUpdate() {
    if (!audioRef.current || !timeViolin[indexTime.current]) return;
    const currentTime = audioRef.current.currentTime;

    if (currentTime >= timeViolin[indexTime.current].time) {
      timeViolin[indexTime.current].fn();
      indexTime.current++;
    }
  }

  return (
    <div className="main">
      <AudioComponent
        ref={audioRef}
        visibleAudio={visibleTabs.audio}
        onTimeUpdate={onTimeUpdate}
      />

      {visibleTabs.header && (
        <Header setVisibleTabs={setVisibleTabs} visibleTabs={visibleTabs} />
      )}

      {visibleTabs.aside && <Aside />}
      {visibleTabs.content && (
        <div className="tab-content">
          {visibleTabs.home && <Home />}
          {visibleTabs.about && <About />}
          {visibleTabs.skils && <Skill />}
          {visibleTabs.works && <Works visibleTabs={visibleTabs} />}
        </div>
      )}

      {visibleTabs.certificado && <Certificado visibleTabs={visibleTabs} />}
      {visibleTabs.numberIcon ? (
        <Icons numberIcon={visibleTabs.numberIcon} />
      ) : (
        ""
      )}

      {visibleTabs.obrigado && <Obrigado />}
    </div>
  );
}

export default App;
