import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(i, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M12 21.5v-4.5" }, null, -1),
    e("path", { d: "M8 17h8v-10a4 4 0 1 0 -8 0v10z" }, null, -1),
    e("path", { d: "M8 10.5l8 -3.5" }, null, -1),
    e("path", { d: "M8 14.5l8 -3.5" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
