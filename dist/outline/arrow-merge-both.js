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
    e("path", { d: "M16 8l-4 -4l-4 4" }, null, -1),
    e("path", { d: "M12 20v-16" }, null, -1),
    e("path", { d: "M18 18c-4 -1.333 -6 -4.667 -6 -10" }, null, -1),
    e("path", { d: "M6 18c4 -1.333 6 -4.667 6 -10" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};