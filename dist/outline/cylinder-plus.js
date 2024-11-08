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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function r(i, t) {
  return n(), l("svg", o, t[0] || (t[0] = [
    e("path", { d: "M12 6m-7 0a7 3 0 1 0 14 0a7 3 0 1 0 -14 0" }, null, -1),
    e("path", { d: "M5 6v12c0 1.657 3.134 3 7 3c.173 0 .345 -.003 .515 -.008m6.485 -8.992v-6" }, null, -1),
    e("path", { d: "M16 19h6" }, null, -1),
    e("path", { d: "M19 16v6" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
