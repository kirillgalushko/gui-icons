import { openBlock as l, createElementBlock as n, createElementVNode as e } from "vue";
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
function r(i, t) {
  return l(), n("svg", o, t[0] || (t[0] = [
    e("path", {
      d: "M12 4l-8 4l8 4l8 -4l-8 -4",
      fill: "currentColor"
    }, null, -1),
    e("path", { d: "M8 14l-4 2l8 4l8 -4l-4 -2" }, null, -1),
    e("path", { d: "M8 10l-4 2l8 4l8 -4l-4 -2" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
