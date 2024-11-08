import { openBlock as r, createElementBlock as o, createElementVNode as e } from "vue";
const l = {
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
function n(i, t) {
  return r(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M12 6l0 -3" }, null, -1),
    e("path", { d: "M6 12l-3 0" }, null, -1),
    e("path", { d: "M7.75 7.75l-2.15 -2.15" }, null, -1)
  ]));
}
const h = { render: n };
export {
  h as default,
  n as render
};