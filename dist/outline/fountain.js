import { openBlock as e, createElementBlock as o, createStaticVNode as h } from "vue";
const a = {
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
  return e(), o("svg", a, t[0] || (t[0] = [
    h('<path d="M9 16v-5a2 2 0 1 0 -4 0"></path><path d="M15 16v-5a2 2 0 1 1 4 0"></path><path d="M12 16v-10a3 3 0 0 1 6 0"></path><path d="M6 6a3 3 0 0 1 6 0"></path><path d="M3 16h18v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2z"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
