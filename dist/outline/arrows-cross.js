import { openBlock as e, createElementBlock as o, createStaticVNode as r } from "vue";
const h = {
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
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M16 4h4v4"></path><path d="M15 9l5 -5"></path><path d="M4 20l5 -5"></path><path d="M16 20h4v-4"></path><path d="M4 4l16 16"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};