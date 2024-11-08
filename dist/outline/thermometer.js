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
    h('<path d="M19 5a2.828 2.828 0 0 1 0 4l-8 8h-4v-4l8 -8a2.828 2.828 0 0 1 4 0z"></path><path d="M16 7l-1.5 -1.5"></path><path d="M13 10l-1.5 -1.5"></path><path d="M10 13l-1.5 -1.5"></path><path d="M7 17l-3 3"></path>', 5)
  ]));
}
const l = { render: n };
export {
  l as default,
  n as render
};
