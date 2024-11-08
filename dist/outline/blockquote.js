import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
const a = {
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
function r(n, t) {
  return e(), h("svg", a, t[0] || (t[0] = [
    o('<path d="M6 15h15"></path><path d="M21 19h-15"></path><path d="M15 11h6"></path><path d="M21 7h-6"></path><path d="M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"></path><path d="M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"></path>', 6)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
