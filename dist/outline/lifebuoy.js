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
function r(n, t) {
  return e(), o("svg", a, t[0] || (t[0] = [
    h('<path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M15 15l3.35 3.35"></path><path d="M9 15l-3.35 3.35"></path><path d="M5.65 5.65l3.35 3.35"></path><path d="M18.35 5.65l-3.35 3.35"></path>', 6)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
