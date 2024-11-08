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
function l(i, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M12 20l-.975 -.966l-6.525 -6.462a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 8.37 5.428" }, null, -1),
    e("path", { d: "M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, null, -1),
    e("path", { d: "M20.2 20.2l1.8 1.8" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
