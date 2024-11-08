import { openBlock as t, createElementBlock as o, createElementVNode as l } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function r(i, e) {
  return t(), o("svg", n, e[0] || (e[0] = [
    l("path", { d: "M13 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" }, null, -1),
    l("path", {
      d: "M20.5 10a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z",
      fill: "currentColor"
    }, null, -1),
    l("path", { d: "M2 16l5 1l.5 -2.5" }, null, -1),
    l("path", { d: "M11.5 21l2.5 -5.5l-5.5 -3.5l3.5 -4l3 4l4 2" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
