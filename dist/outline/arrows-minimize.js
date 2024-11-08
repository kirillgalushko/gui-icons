import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
const l = {
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
function r(a, t) {
  return e(), h("svg", l, t[0] || (t[0] = [
    o('<path d="M5 9l4 0l0 -4"></path><path d="M3 3l6 6"></path><path d="M5 15l4 0l0 4"></path><path d="M3 21l6 -6"></path><path d="M19 9l-4 0l0 -4"></path><path d="M15 9l6 -6"></path><path d="M19 15l-4 0l0 4"></path><path d="M15 15l6 6"></path>', 8)
  ]));
}
const n = { render: r };
export {
  n as default,
  r as render
};
