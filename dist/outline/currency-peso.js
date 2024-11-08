import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
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
function h(l, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M8 19v-14h3.5a4.5 4.5 0 1 1 0 9h-3.5" }, null, -1),
    e("path", { d: "M18 8h-12" }, null, -1),
    e("path", { d: "M18 11h-12" }, null, -1)
  ]));
}
const d = { render: h };
export {
  d as default,
  h as render
};
