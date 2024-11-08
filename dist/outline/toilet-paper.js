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
    h('<path d="M6 10m-3 0a3 7 0 1 0 6 0a3 7 0 1 0 -6 0"></path><path d="M21 10c0 -3.866 -1.343 -7 -3 -7"></path><path d="M6 3h12"></path><path d="M21 10v10l-3 -1l-3 2l-3 -3l-3 2v-10"></path><path d="M6 10h.01"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
