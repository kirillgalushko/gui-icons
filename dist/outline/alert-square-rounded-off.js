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
function l(d, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M19.201 19.199c-1.35 1.35 -3.6 1.801 -7.201 1.801c-7.2 0 -9 -1.8 -9 -9c0 -3.598 .45 -5.847 1.797 -7.197m2.626 -1.376c1.204 -.307 2.709 -.427 4.577 -.427c7.2 0 9 1.8 9 9c0 1.865 -.12 3.367 -.425 4.57" }, null, -1),
    e("path", { d: "M12 7v1" }, null, -1),
    e("path", { d: "M12 16h.01" }, null, -1),
    e("path", { d: "M3 3l18 18" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};