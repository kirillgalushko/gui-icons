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
function l(s, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M3 12c0 -4.243 0 -6.364 1.318 -7.682s3.44 -1.318 7.682 -1.318s6.364 0 7.682 1.318s1.318 3.44 1.318 7.682s0 6.364 -1.318 7.682s-3.44 1.318 -7.682 1.318s-6.364 0 -7.682 -1.318s-1.318 -3.44 -1.318 -7.682" }, null, -1),
    e("path", { d: "M6.316 8.21l5.684 7.58m-5.684 0l5.684 -7.58" }, null, -1),
    e("path", { d: "M17.684 11.053v3.79c0 1.044 -.49 .946 -1.42 .946a2.368 2.368 0 0 1 0 -4.736zm0 0v-2.843" }, null, -1)
  ]));
}
const i = { render: l };
export {
  i as default,
  l as render
};
