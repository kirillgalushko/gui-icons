import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
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
function i(h, e) {
  return t(), n("svg", r, e[0] || (e[0] = [
    o("path", { d: "M12.077 20h-5.077v-16h11v14h-5.077" }, null, -1)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};
