import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
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
  return e(), h("svg", a, t[0] || (t[0] = [
    o('<path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path><path d="M12 21h-5a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2"></path><path d="M8 11v-4a4 4 0 1 1 8 0v4"></path><path d="M16 22l5 -5"></path><path d="M21 21.5v-4.5h-4.5"></path>', 5)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
