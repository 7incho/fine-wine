export interface Vino {
  id: string;
  nombre: string;
  type: "Tinto" | "Blanco" | "Rosado" | "Champagne";
  year: string;
  description: string;
  portada: string;
}

export const vinos: Vino[] = [
  {
    id: "1",
    nombre: "Château Margaux",
    type: "Tinto",
    year: "2015",
    description:
      "Un vino elegante y sofisticado, con notas de frutas negras y especias. Perfecto para ocasiones especiales.",
    portada:
      "https://i.pinimg.com/originals/1f/49/c4/1f49c4ebb1b5f91365b1be2f3fdb17d1.png",
  },
  {
    id: "2",
    nombre: "Vega Sicilia Único",
    type: "Tinto",
    year: "2010",
    description:
      "Un vino de gran cuerpo y estructura, con aromas a frutas maduras y toques de madera. Ideal para maridar con carnes rojas.",
    portada:
      "https://i.pinimg.com/originals/1f/49/c4/1f49c4ebb1b5f91365b1be2f3fdb17d1.png",
  },
  {
    id: "3",
    nombre: "Krug Grande Cuvée",
    type: "Champagne",
    year: "NV",
    description:
      "Un champagne de alta calidad, con burbujas finas y un sabor complejo a frutas y pan tostado. Perfecto para celebraciones.",
    portada:
      "https://i.pinimg.com/originals/1f/49/c4/1f49c4ebb1b5f91365b1be2f3fdb17d1.png",
  },
  {
    id: "4",
    nombre: "Sassicaia",
    type: "Tinto",
    year: "2016",
    description:
      "Un vino italiano de renombre, con aromas a frutas rojas y notas de especias. Ideal para acompañar platos de pasta y carnes a la parrilla.",
    portada:
      "https://i.pinimg.com/originals/1f/49/c4/1f49c4ebb1b5f91365b1be2f3fdb17d1.png",
  },
  {
    id: "5",
    nombre: "Penfolds Grange",
    type: "Tinto",
    year: "2014",
    description:
      "Un vino australiano icónico, con sabores intensos a frutas maduras y toques de chocolate negro. Recomendado para coleccionistas.",
    portada:
      "https://i.pinimg.com/originals/1f/49/c4/1f49c4ebb1b5f91365b1be2f3fdb17d1.png",
  },
];
