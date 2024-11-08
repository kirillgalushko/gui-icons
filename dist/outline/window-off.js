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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function r(i, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M6.166 6.19a6.903 6.903 0 0 0 -1.166 3.81v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-1m0 -4v-5c0 -3.728 -3.134 -7 -7 -7a6.86 6.86 0 0 0 -3.804 1.158" }, null, -1),
    e("path", { d: "M5 13h8m4 0h2" }, null, -1),
    e("path", { d: "M12 3v5m0 4v9" }, null, -1),
    e("path", { d: "M3 3l18 18" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};