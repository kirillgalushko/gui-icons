import { openBlock as o, createElementBlock as n, createElementVNode as e } from "vue";
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
  return o(), n("svg", r, t[0] || (t[0] = [
    e("path", { d: "M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" }, null, -1),
    e("path", { d: "M15 9h-.01" }, null, -1),
    e("path", { d: "M20 15h-4" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
