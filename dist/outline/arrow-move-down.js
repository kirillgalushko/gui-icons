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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function l(i, t) {
  return o(), n("svg", r, t[0] || (t[0] = [
    e("path", { d: "M12 11v10" }, null, -1),
    e("path", { d: "M9 18l3 3l3 -3" }, null, -1),
    e("path", { d: "M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};
