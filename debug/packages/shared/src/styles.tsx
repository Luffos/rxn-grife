/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable array-callback-return */
import { useState, useEffect } from "react";
import { TextProps } from "react-native";
import { makeStyleFrom as from } from "rxn-grife";

export const MyText = from.Text((el) => {
  el.style.set({ color: "orange", fontSize: 30, fontWeight: "600" });

  el.children.map((c) => {
    if (c.className === "test") {
      c.style.pushBefore({
        color: "blue", //will be ignored by green
        fontSize: 50
      });
    }

    c.children.map((d) => {
      if (c.type === "Text") {
        d.style.set({
          fontSize: 30,
          color: "white",
          backgroundColor: "black"
        });
      }
    });
  });
});

export const MyRainbowText: React.FC<TextProps> = (props) => {
  const [color, setColor] = useState("#000000");

  function randomColor() {
    const colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet",
      "pink",
      "brown",
      "grey",
      "purple"
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  useEffect(() => {
    const colorChanger = setInterval(() => {
      setColor(randomColor());
    }, 500);

    return () => clearInterval(colorChanger);
  }, [setColor]);

  const T = from.Text((el) => {
    el.style.pushAfter({ color: color, fontSize: 20 });
  });

  return <T {...props} />;
};
