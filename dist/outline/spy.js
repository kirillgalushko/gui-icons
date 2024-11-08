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
    o('<path d="M3 11h18"></path><path d="M5 11v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4"></path><path d="M7 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M10 17h4"></path>', 5)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
