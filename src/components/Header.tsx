import { visibleTabsProps } from "../App";

interface HeaderProps {
  setVisibleTabs: React.Dispatch<React.SetStateAction<visibleTabsProps>>;
  visibleTabs: visibleTabsProps;
}

export function Header({ setVisibleTabs, visibleTabs }: HeaderProps) {
  const defaultTabs = {
    home: false,
    about: false,
    skils: false,
    works: false,
  };
  return (
    <div className="header">
      <a
        className={`${visibleTabs.home ? "tab-active" : ""}`}
        onClick={() =>
          setVisibleTabs({ ...visibleTabs, ...defaultTabs, home: true })
        }
        href="#"
      >
        Home
      </a>
      <a
        className={`${visibleTabs.about ? "tab-active" : ""}`}
        onClick={() =>
          setVisibleTabs({ ...visibleTabs, ...defaultTabs, about: true })
        }
        href="#"
      >
        About
      </a>
      <a
        className={`${visibleTabs.skils ? "tab-active" : ""}`}
        onClick={() =>
          setVisibleTabs({ ...visibleTabs, ...defaultTabs, skils: true })
        }
        href="#"
      >
        Skill
      </a>
      <a
        className={`${visibleTabs.works ? "tab-active" : ""}`}
        onClick={() =>
          setVisibleTabs({ ...visibleTabs, ...defaultTabs, works: true })
        }
        href="#"
      >
        Projects
      </a>
    </div>
  );
}
