import { openBlock as a, createElementBlock as e, createStaticVNode as h } from "vue";
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
function p(r, t) {
  return a(), e("svg", o, t[0] || (t[0] = [
    h('<path d="M6 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M16 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M16 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M11 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M21 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M5.058 18.306l2.88 -4.606"></path><path d="M10.061 10.303l2.877 -4.604"></path><path d="M10.065 13.705l2.876 4.6"></path><path d="M15.063 5.7l2.881 4.61"></path>', 9)
  ]));
}
const d = { render: p };
export {
  d as default,
  p as render
};
