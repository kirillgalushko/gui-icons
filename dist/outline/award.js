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
    e("path", { d: "M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" }, null, -1),
    e("path", { d: "M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889" }, null, -1),
    e("path", { d: "M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
