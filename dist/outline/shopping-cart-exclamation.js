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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(i, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M15 17h-9v-14h-2"></path><path d="M6 5l14 1l-.854 5.976m-2.646 1.024h-10.5"></path><path d="M19 16v3"></path><path d="M19 22v.01"></path>', 5)
  ]));
}
const l = { render: n };
export {
  l as default,
  n as render
};
