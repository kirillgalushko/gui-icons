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
    e("path", { d: "M12 12v5a4.984 4.984 0 0 0 3.522 -1.45m1.392 -2.623a5 5 0 0 0 -4.914 -5.927v1" }, null, -1),
    e("path", { d: "M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" }, null, -1),
    e("path", { d: "M3 3l18 18" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};