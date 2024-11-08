import { openBlock as e, createElementBlock as o, createStaticVNode as r } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function h(a, t) {
  return e(), o("svg", n, t[0] || (t[0] = [
    r('<path d="M12 12l0 .01"></path><path d="M14.828 9.172a4 4 0 0 1 0 5.656"></path><path d="M17.657 6.343a8 8 0 0 1 0 11.314"></path><path d="M9.168 14.828a4 4 0 0 1 0 -5.656"></path><path d="M6.337 17.657a8 8 0 0 1 0 -11.314"></path>', 5)
  ]));
}
const d = { render: h };
export {
  d as default,
  h as render
};
