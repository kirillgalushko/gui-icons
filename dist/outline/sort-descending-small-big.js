import { openBlock as n, createElementBlock as l, createElementVNode as e } from "vue";
const o = {
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
  return n(), l("svg", o, t[0] || (t[0] = [
    e("path", { d: "M10 15l-3 3l-3 -3" }, null, -1),
    e("path", { d: "M7 6v12" }, null, -1),
    e("path", { d: "M14 18.333c0 .369 .298 .667 .667 .667h2.666a.667 .667 0 0 0 .667 -.667v-2.666a.667 .667 0 0 0 -.667 -.667h-2.666a.667 .667 0 0 0 -.667 .667v2.666z" }, null, -1),
    e("path", { d: "M14 10.833c0 .645 .522 1.167 1.167 1.167h4.666c.645 0 1.167 -.522 1.167 -1.167v-4.666c0 -.645 -.522 -1.167 -1.167 -1.167h-4.666c-.645 0 -1.167 .522 -1.167 1.167v4.666z" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
