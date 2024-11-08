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
function a(n, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M8 7l4 -4l4 4"></path><path d="M18 21v.01"></path><path d="M18 18.01v.01"></path><path d="M17 15.02v.01"></path><path d="M14 13.03v.01"></path><path d="M12 3v5.394a6.737 6.737 0 0 1 -3 5.606a6.737 6.737 0 0 0 -3 5.606v1.394"></path>', 6)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};
