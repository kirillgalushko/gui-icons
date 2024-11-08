import { openBlock as e, createElementBlock as o, createStaticVNode as h } from "vue";
const i = {
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
function n(r, t) {
  return e(), o("svg", i, t[0] || (t[0] = [
    h('<path d="M3 21l18 0"></path><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path><path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"></path><path d="M10 9l4 0"></path><path d="M12 7l0 4"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
