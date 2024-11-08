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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function n(i, t) {
  return r(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" }, null, -1),
    e("circle", {
      cx: "9",
      cy: "12",
      r: ".5",
      fill: "currentColor"
    }, null, -1),
    e("circle", {
      cx: "15",
      cy: "12",
      r: ".5",
      fill: "currentColor"
    }, null, -1)
  ]));
}
const h = { render: n };
export {
  h as default,
  n as render
};
