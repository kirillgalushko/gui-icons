import { openBlock as r, createElementBlock as l, createElementVNode as e } from "vue";
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
function n(i, t) {
  return r(), l("svg", o, t[0] || (t[0] = [
    e("path", { d: "M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" }, null, -1),
    e("path", { d: "M3 17l4 -3h10l4 3" }, null, -1),
    e("circle", {
      cx: "7.5",
      cy: "9.5",
      r: ".5",
      fill: "currentColor"
    }, null, -1),
    e("circle", {
      cx: "16.5",
      cy: "9.5",
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
