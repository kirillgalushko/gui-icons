import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
const n = {
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
function r(a, t) {
  return e(), h("svg", n, t[0] || (t[0] = [
    o('<path d="M10 16v5"></path><path d="M14 16v5"></path><path d="M9 9h6l-1 7h-4z"></path><path d="M5 11c1.333 -1.333 2.667 -2 4 -2"></path><path d="M19 11c-1.333 -1.333 -2.667 -2 -4 -2"></path><path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>', 6)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
