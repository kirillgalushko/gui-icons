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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function h(n, t) {
  return e(), o("svg", a, t[0] || (t[0] = [
    r('<path d="M6 15a6 6 0 1 0 12 0"></path><path d="M18 15a6 6 0 0 0 -6 6"></path><path d="M12 21a6 6 0 0 0 -6 -6"></path><path d="M12 21v-10"></path><path d="M12 11a5 5 0 0 1 -5 -5v-3l3 2l2 -2l2 2l3 -2v3a5 5 0 0 1 -5 5z"></path>', 5)
  ]));
}
const d = { render: h };
export {
  d as default,
  h as render
};
