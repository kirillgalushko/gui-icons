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
    e("path", { d: "M12.5 17h-8.5a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3c.047 .386 .149 .758 .3 1.107" }, null, -1),
    e("path", { d: "M9 17v1a3 3 0 0 0 3.504 2.958" }, null, -1),
    e("path", { d: "M16 19h6" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
