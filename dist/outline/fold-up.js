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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function l(n, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M12 13v-8l-3 3m6 0l-3 -3"></path><path d="M9 17l1 0"></path><path d="M14 17l1 0"></path><path d="M19 17l1 0"></path><path d="M4 17l1 0"></path>', 5)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
