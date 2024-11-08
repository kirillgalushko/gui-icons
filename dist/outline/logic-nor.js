import { openBlock as e, createElementBlock as o, createStaticVNode as h } from "vue";
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
function n(i, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M22 12h-4"></path><path d="M2 9h5"></path><path d="M2 15h5"></path><path d="M6 5c10.667 2.1 10.667 12.6 0 14c1.806 -4.667 1.806 -9.333 0 -14z"></path><path d="M16 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
