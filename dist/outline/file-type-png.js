import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
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
function r(a, t) {
  return e(), h("svg", n, t[0] || (t[0] = [
    o('<path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"></path><path d="M20 15h-1a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h1v-3"></path><path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"></path><path d="M11 21v-6l3 6v-6"></path>', 5)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
