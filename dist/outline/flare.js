import { openBlock as t, createElementBlock as o, createElementVNode as l } from "vue";
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
function r(i, e) {
  return t(), o("svg", n, e[0] || (e[0] = [
    l("path", { d: "M12 3l3 6l6 3l-6 3l-3 6l-3 -6l-6 -3l6 -3z" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
