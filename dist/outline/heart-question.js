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
    e("path", { d: "M14.105 17.915l-2.105 2.085l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 8.524 5.127" }, null, -1),
    e("path", { d: "M19 22v.01" }, null, -1),
    e("path", { d: "M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
