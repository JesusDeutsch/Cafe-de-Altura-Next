import React from "react";

const Home = () => {
  return (
  <div>
        <div className="#descriptionPageContainer {
  padding-top: 64px;
  display: flex;
  width: 100%;
  height: 486px;
  align-items: center;
  justify-content: center;
  background: #e3ded74d;
}">
      <div id="descriptionPageContainerItems">
        <div id="textDescription">
          <h3 id="pretitleTextDescription">De la planta a tu taza</h3>
          <h1 id="h1TextDescription">
            El mejor café del mundo, ahora en tu casa.
          </h1>
          <p id="pTextDescription">
            Trabajamos con agricultores de todo el mundo para seleccionar los
            mejores granos de café y que puedas viajar desde la comodidad de tu
            hogar.
          </p>
          <div id="descriptionPageContainerButtons">
            <div id="buttonBlackDesign">
              <a href="#" id="buttonBlack">Descubrir orígenes</a>
            </div>
            <div id="buttonGreenDesign">
              <a href="#" id="buttonGreen">Comprar café</a>
            </div>
          </div>
        </div>
        <img
          src="/assets/decription-page/Hero image.png"
          alt="arbol de cafe"
          id="three-coffee-img"
        />
      </div>
    </div>

  </div>
  );
};

export default Home;
