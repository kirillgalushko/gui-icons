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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function r(n, t) {
  return e(), h("svg", a, t[0] || (t[0] = [
    o('<path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"></path><path d="M7 16.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0"></path><path d="M10 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75"></path><path d="M16 15l2 6l2 -6"></path>', 5)
  ]));
}
const l = { render: r };
export {
  l as default,
  r as render
};