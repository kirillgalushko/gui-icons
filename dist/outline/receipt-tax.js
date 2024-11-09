import { openBlock as t, createElementBlock as r, createElementVNode as e } from "vue";
const n = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function o(i, l) {
  return t(), r("svg", n, l[0] || (l[0] = [
    e("path", { d: "M9 14l6 -6" }, null, -1),
    e("circle", {
      cx: "9.5",
      cy: "8.5",
      r: ".5",
      fill: "currentColor"
    }, null, -1),
    e("circle", {
      cx: "14.5",
      cy: "13.5",
      r: ".5",
      fill: "currentColor"
    }, null, -1),
    e("path", { d: "M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" }, null, -1)
  ]));
}
const h = { render: o };
export {
  h as default,
  o as render
};