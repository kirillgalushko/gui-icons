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
function l(i, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M12.58 19.963a9.906 9.906 0 0 1 -4.88 -.963l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c2.13 1.817 3.055 4.368 2.692 6.82" }, null, -1),
    e("path", { d: "M16 22l5 -5" }, null, -1),
    e("path", { d: "M21 21.5v-4.5h-4.5" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
