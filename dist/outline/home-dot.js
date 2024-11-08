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
function l(h, t) {
  return o(), n("svg", r, t[0] || (t[0] = [
    e("path", { d: "M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5" }, null, -1),
    e("path", { d: "M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, null, -1),
    e("path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2c.641 0 1.212 .302 1.578 .771" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
