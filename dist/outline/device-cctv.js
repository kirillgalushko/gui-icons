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
    e("path", { d: "M3 3m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" }, null, -1),
    e("path", { d: "M12 14m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" }, null, -1),
    e("path", { d: "M19 7v7a7 7 0 0 1 -14 0v-7" }, null, -1),
    e("path", { d: "M12 14l.01 0" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
