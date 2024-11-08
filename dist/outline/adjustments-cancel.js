import { openBlock as a, createElementBlock as e, createStaticVNode as h } from "vue";
const p = {
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
function d(o, t) {
  return a(), e("svg", p, t[0] || (t[0] = [
    h('<path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M6 4v4"></path><path d="M6 12v8"></path><path d="M13.499 14.675a2 2 0 1 0 -1.499 3.325"></path><path d="M12 4v10"></path><path d="M12 18v2"></path><path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M18 4v1"></path><path d="M18 9v3"></path><path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M17 21l4 -4"></path>', 11)
  ]));
}
const r = { render: d };
export {
  r as default,
  d as render
};
