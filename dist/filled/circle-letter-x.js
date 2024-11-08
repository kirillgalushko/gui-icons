import { openBlock as t, createElementBlock as l, createElementVNode as r } from "vue";
const n = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function o(i, e) {
  return t(), l("svg", n, e[0] || (e[0] = [
    r("path", { d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m2.447 5.106a1 1 0 0 0 -1.341 .447l-1.106 2.21l-1.106 -2.21a1 1 0 0 0 -1.234 -.494l-.107 .047a1 1 0 0 0 -.447 1.341l1.774 3.553l-1.775 3.553a1 1 0 0 0 .345 1.283l.102 .058a1 1 0 0 0 1.341 -.447l1.107 -2.211l1.106 2.211a1 1 0 0 0 1.234 .494l.107 -.047a1 1 0 0 0 .447 -1.341l-1.776 -3.553l1.776 -3.553a1 1 0 0 0 -.345 -1.283z" }, null, -1)
  ]));
}
const m = { render: o };
export {
  m as default,
  o as render
};
