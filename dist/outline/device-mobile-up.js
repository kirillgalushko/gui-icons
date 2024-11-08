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
function i(n, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M12.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v7"></path><path d="M19 22v-6"></path><path d="M22 19l-3 -3l-3 3"></path><path d="M11 4h2"></path><path d="M12 17v.01"></path>', 5)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};
