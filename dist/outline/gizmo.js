import { openBlock as e, createElementBlock as o, createStaticVNode as r } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function h(n, t) {
  return e(), o("svg", a, t[0] || (t[0] = [
    r('<path d="M20 19l-8 -5.5l-8 5.5"></path><path d="M12 4v9.5"></path><path d="M12 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M4 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M20 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>', 5)
  ]));
}
const d = { render: h };
export {
  d as default,
  h as render
};
