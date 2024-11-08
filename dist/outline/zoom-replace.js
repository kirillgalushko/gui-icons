import { openBlock as e, createElementBlock as o, createStaticVNode as h } from "vue";
const r = {
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
function a(n, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M21 21l-6 -6"></path><path d="M3.291 8a7 7 0 0 1 5.077 -4.806a7.021 7.021 0 0 1 8.242 4.403"></path><path d="M17 4v4h-4"></path><path d="M16.705 12a7 7 0 0 1 -5.074 4.798a7.021 7.021 0 0 1 -8.241 -4.403"></path><path d="M3 16v-4h4"></path>', 5)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};
