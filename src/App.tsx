import "./App.css";
import { useRef, useState } from "react";
import { Home } from "./components/tab/Home";
import { About } from "./components/tab/About";
import { AudioComponent } from "./components/Audio";
import { Header } from "./components/Header";
import { Aside } from "./components/Aside";
import { Works } from "./components/tab/Works";
import { Skill } from "./components/tab/Skill";

export interface visibleTabsProps {
  home: boolean;
  about: boolean;
  skils: boolean;
  works: boolean;
  aside: boolean;
  content: boolean;
  header: boolean;
  audio: boolean;
}

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [visibleTabs, setVisibleTabs] = useState<visibleTabsProps>({
    home: true,
    about: false,
    skils: false,
    works: false,
    aside: false,
    content: false,
    header: false,
    audio: true,
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
        console.log("primeiro");
        setVisibleTabs({ ...visibleTabs, audio: false });
      },
    },
    {
      time: 3.157464,
      fn: () => {
        console.log("segundo");
        setVisibleTabs({ ...visibleTabs, header: true });
      },
    },
    {
      time: 5.258912,
      fn: () => {
        console.log("foi");
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
        console.log("foi");
        setVisibleTabs({ ...visibleTabs, ...defaultTabs, about: true });
      },
    },
    {
      time: 13.676352,
      fn: () => {
        console.log("foi");
        setVisibleTabs({ ...visibleTabs, ...defaultTabs, skils: true });
      },
    },
    {
      time: 15.66888,
      fn: () => {
        console.log("foi");
        setVisibleTabs({ ...visibleTabs, ...defaultTabs, works: true });
      },
    },
    {
      time: 18.131612,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 18.771904,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 19.381646,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 20.042687,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 20.627697,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 21.351466,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 21.891453,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 22.425497,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 22.997032,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 23.552515,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 24.059934,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 24.539213,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 25.142114,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 25.567502,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 25.962043,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 26.358103,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 26.797408,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 27.18948,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 27.603337,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 28.00858,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 28.456168,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 28.877551,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 29.340254,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 29.762419,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 30.240684,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 30.621169,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 31.039641,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 31.47399,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 31.858078,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 32.277104,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 32.654712,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 33.039187,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 33.436762,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 33.795477,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 34.183866,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 34.535764,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 34.932214,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 35.284797,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 35.686834,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 36.018396,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 36.368833,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 36.736029,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 37.126422,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 37.490502,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 37.886827,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 38.22858,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 38.61064,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 38.98839,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 39.392825,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 39.778568,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 40.172881,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 40.540157,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 40.906949,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 41.271042,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 41.655067,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 41.986848,
      fn: () => {
        console.log("foi");
      },
    },
    {
      time: 42.365009,
      fn: () => {
        console.log("foi");
      },
    },
  ];

  function onClickBoom() {
    if (audioRef.current) {
      console.log(audioRef.current.currentTime);
      timeSync.push(audioRef.current.currentTime);
    }
  }

  function onTimeUpdate() {
    if (!audioRef.current) return;
    const currentTime = audioRef.current.currentTime;

    if (currentTime >= timeViolin[indexTime.current].time) {
      timeViolin[indexTime.current].fn();
      indexTime.current++;
    }
  }

  function logTimeSync() {
    console.log(timeSync);
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
      <div className="container-content">
        {visibleTabs.aside && <Aside />}
        {visibleTabs.content && (
          <div className="tab-content">
            {visibleTabs.home && <Home />}
            {visibleTabs.about && <About />}
            {visibleTabs.skils && <Skill />}
            {visibleTabs.works && <Works />}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
