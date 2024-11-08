import { openBlock as t, createElementBlock as l, createElementVNode as e } from "vue";
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
function n(i, r) {
  return t(), l("svg", o, r[0] || (r[0] = [
    e("circle", {
      cx: "12",
      cy: "6",
      r: "1",
      fill: "currentColor"
    }, null, -1),
    e("circle", {
      cx: "12",
      cy: "18",
      r: "1",
      fill: "currentColor"
    }, null, -1),
    e("path", { d: "M5 12l14 0" }, null, -1)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
