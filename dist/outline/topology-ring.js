import { openBlock as e, createElementBlock as a, createStaticVNode as h } from "vue";
const o = {
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
function p(n, t) {
  return e(), a("svg", o, t[0] || (t[0] = [
    h('<path d="M14 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M14 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M13.5 5.5l5 5"></path><path d="M5.5 13.5l5 5"></path><path d="M13.5 18.5l5 -5"></path><path d="M10.5 5.5l-5 5"></path>', 8)
  ]));
}
const d = { render: p };
export {
  d as default,
  p as render
};
