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
    o('<path d="M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1"></path><path d="M8 15a6 6 0 1 0 12 0v-3"></path><path d="M11 3v2"></path><path d="M6 3v2"></path><path d="M20 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>', 5)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
