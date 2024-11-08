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
function n(a, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-1"></path><path d="M8 16h8"></path><path d="M8.322 12.582l7.956 .836"></path><path d="M8.787 9.168l7.826 1.664"></path><path d="M10.096 5.764l7.608 2.472"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
