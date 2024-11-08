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
    e("path", { d: "M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" }, null, -1),
    e("path", { d: "M4 6v6a8 3 0 0 0 16 0v-6" }, null, -1),
    e("path", { d: "M4 12v6a8 3 0 0 0 16 0v-6" }, null, -1)
  ]));
}
const a = { render: l };
export {
  a as default,
  l as render
};
