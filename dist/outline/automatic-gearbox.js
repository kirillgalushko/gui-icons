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
    o('<path d="M17 17v4h1a2 2 0 1 0 0 -4h-1z"></path><path d="M17 11h1.5a1.5 1.5 0 0 0 0 -3h-1.5v5"></path><path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M5 7v3a1 1 0 0 0 1 1h3v7a1 1 0 0 0 1 1h3"></path><path d="M9 11h4"></path>', 5)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
