import { openBlock as t, createElementBlock as o, createElementVNode as l } from "vue";
const r = {
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
function n(i, e) {
  return t(), o("svg", r, e[0] || (e[0] = [
    l("path", { d: "M4 8l8 4l8 -4l-8 -4z" }, null, -1),
    l("path", {
      d: "M12 16l-4 -2l-4 2l8 4l8 -4l-4 -2l-4 2z",
      fill: "currentColor"
    }, null, -1),
    l("path", { d: "M8 10l-4 2l4 2m8 0l4 -2l-4 -2" }, null, -1)
  ]));
}
const h = { render: n };
export {
  h as default,
  n as render
};
