import { openBlock as o, createElementBlock as r, createElementVNode as e } from "vue";
const n = {
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
  return o(), r("svg", n, t[0] || (t[0] = [
    e("path", { d: "M12 7v14" }, null, -1),
    e("path", { d: "M9 18l3 3l3 -3" }, null, -1),
    e("path", { d: "M12 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};
