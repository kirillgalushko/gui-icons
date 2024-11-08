import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
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
function i(l, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M12.5 21h-6.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v11" }, null, -1),
    e("path", { d: "M12.872 16.51a1 1 0 1 0 -.872 1.49" }, null, -1),
    e("path", { d: "M16 19h6" }, null, -1)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};
