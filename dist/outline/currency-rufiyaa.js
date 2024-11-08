import { openBlock as n, createElementBlock as r, createElementVNode as e } from "vue";
const o = {
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
  return n(), r("svg", o, t[0] || (t[0] = [
    e("path", { d: "M20 16h.01" }, null, -1),
    e("path", { d: "M4 16c9.5 -4 11.5 -8 14 -9" }, null, -1),
    e("path", { d: "M12 8l5 3" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
