import { visibleTabsProps } from "../../App";

interface WorksProps {
  visibleTabs: visibleTabsProps;
}
export function Works({ visibleTabs }: WorksProps) {
  return (
    <div className="tab-works">
      <div className={`${visibleTabs.zoom1 && "zoom"}`}>
        <a
          target={"_blank"}
          href="https://github.com/GuilhermeAugustosfc/ignite-template-otimizando-a-aplicacao"
        >
          Projeto para fixar otimizacao no React JS
        </a>
      </div>
      <div className={`${visibleTabs.zoom2 && "zoom"}`}>
        <a
          target={"_blank"}
          href="https://github.com/GuilhermeAugustosfc/ignite-template-reactjs-upload-de-imagens"
        >
          Projeto de upload de imagem
        </a>
      </div>
      <div className={`${visibleTabs.zoom3 && "zoom"}`}>
        <a
          target={"_blank"}
          href="https://github.com/GuilhermeAugustosfc/dashgo"
        >
          Projeto de um dashboard utilizando Chakra Ui e Unform
        </a>
      </div>
      <div className={`${visibleTabs.zoom4 && "zoom"}`}>
        <a
          target={"_blank"}
          href="https://github.com/GuilhermeAugustosfc/ignite-template-reactjs-criando-um-projeto-do-zero"
        >
          Projeto de um blog de post em Next.js utilizando o banco Prismic
        </a>
      </div>
      <div className={`${visibleTabs.zoom5 && "zoom"}`}>
        <a
          target={"_blank"}
          href="https://github.com/GuilhermeAugustosfc/ignews"
        >
          Uma aplicação de pagamentos para o consumo de posts buscados pelo
          Prismic
        </a>
      </div>
      <div className={`${visibleTabs.zoom6 && "zoom"}`}>
        <a
          target={"_blank"}
          href="https://github.com/GuilhermeAugustosfc/Wordtrip"
        >
          Interface responsiva com Chakra Ui
        </a>
      </div>
    </div>
  );
}
