import { openBlock as t, createElementBlock as r, createElementVNode as e } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function o(i, l) {
  return t(), r("svg", n, l[0] || (l[0] = [
    e("path", { d: "M6 12l-1.752 6.13a1 1 0 0 0 .592 1.205l6.282 2.503a2.46 2.46 0 0 0 1.756 0l6.282 -2.503a1 1 0 0 0 .592 -1.204l-1.752 -6.131l1.752 -6.13a1 1 0 0 0 -.592 -1.205l-6.282 -2.503a2.46 2.46 0 0 0 -1.756 0l-6.282 2.503a1 1 0 0 0 -.592 1.204l1.752 6.131z" }, null, -1),
    e("path", { d: "M4.5 5.5l6.622 2.33a2.35 2.35 0 0 0 1.756 0l6.622 -2.33" }, null, -1),
    e("path", { d: "M6 12l5.21 1.862a2.34 2.34 0 0 0 1.58 0l5.21 -1.862" }, null, -1),
    e("path", { d: "M12 22v-14" }, null, -1)
  ]));
}
const d = { render: o };
export {
  d as default,
  o as render
};
