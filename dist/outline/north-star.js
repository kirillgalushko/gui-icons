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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function l(i, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M3 12h18" }, null, -1),
    e("path", { d: "M12 21v-18" }, null, -1),
    e("path", { d: "M7.5 7.5l9 9" }, null, -1),
    e("path", { d: "M7.5 16.5l9 -9" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
