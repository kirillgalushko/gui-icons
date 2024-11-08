import { openBlock as e, createElementBlock as o, createStaticVNode as h } from "vue";
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
function r(i, t) {
  return e(), o("svg", n, t[0] || (t[0] = [
    h('<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path><path d="M13.5 6.5l4 4"></path><path d="M16 21l5 -5"></path><path d="M21 21v.01"></path><path d="M16 16v.01"></path>', 5)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
