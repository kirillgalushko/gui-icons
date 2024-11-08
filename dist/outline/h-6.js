import { openBlock as h, createElementBlock as e, createStaticVNode as a } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function r(p, t) {
  return h(), e("svg", o, t[0] || (t[0] = [
    a('<path d="M19 14a2 2 0 1 0 0 4a2 2 0 0 0 0 -4z"></path><path d="M21 12a2 2 0 1 0 -4 0v4"></path><path d="M4 6v12"></path><path d="M12 6v12"></path><path d="M11 18h2"></path><path d="M3 18h2"></path><path d="M4 12h8"></path><path d="M3 6h2"></path><path d="M11 6h2"></path>', 9)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
