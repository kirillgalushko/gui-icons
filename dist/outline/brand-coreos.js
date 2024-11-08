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
    e("path", { d: "M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z" }, null, -1),
    e("path", { d: "M12 3c-3.263 3.212 -3 7.654 -3 12c4.59 .244 8.814 -.282 12 -3" }, null, -1),
    e("path", { d: "M9.5 9a4.494 4.494 0 0 1 5.5 5.5" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};
