import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function i(c, e) {
  return t(), o("svg", r, e[0] || (e[0] = [
    n("path", { d: "M9 20h-5a1 1 0 0 1 -1 -1c0 -2 3.378 -4.907 4 -6c-1 0 -4 -.5 -4 -2c0 -2 4 -3.5 6 -4c0 -1.5 .5 -4 3 -4s3 2.5 3 4c2 .5 6 2 6 4c0 1.5 -3 2 -4 2c.622 1.093 4 4 4 6a1 1 0 0 1 -1 1h-5c-1 0 -2 -4 -3 -4s-2 4 -3 4z" }, null, -1)
  ]));
}
const h = { render: i };
export {
  h as default,
  i as render
};
