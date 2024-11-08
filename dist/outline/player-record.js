import { openBlock as t, createElementBlock as o, createElementVNode as r } from "vue";
const n = {
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
function i(l, e) {
  return t(), o("svg", n, e[0] || (e[0] = [
    r("path", { d: "M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" }, null, -1)
  ]));
}
const h = { render: i };
export {
  h as default,
  i as render
};
