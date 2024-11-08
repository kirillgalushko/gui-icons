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
function a(n, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M7 8.5l3 3"></path><path d="M7 11.5l3 -3"></path><path d="M14 8.5l3 3"></path><path d="M14 11.5l3 -3"></path><path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>', 6)
  ]));
}
const p = { render: a };
export {
  p as default,
  a as render
};