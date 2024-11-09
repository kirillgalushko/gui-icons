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
function r(h, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M17 17m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" }, null, -1),
    e("path", { d: "M17 13v4h4" }, null, -1),
    e("path", { d: "M12 3v4a1 1 0 0 0 1 1h4" }, null, -1),
    e("path", { d: "M11.5 21h-6.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v2m0 3v4" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};