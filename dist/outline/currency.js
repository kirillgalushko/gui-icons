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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function n(i, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M4 4l3 3"></path><path d="M20 4l-3 3"></path><path d="M4 20l3 -3"></path><path d="M20 20l-3 -3"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
