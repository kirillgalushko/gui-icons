import { openBlock as e, createElementBlock as r, createStaticVNode as o } from "vue";
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
function n(a, t) {
  return e(), r("svg", h, t[0] || (t[0] = [
    o('<path d="M16 7l-4 -4l-4 4"></path><path d="M6 21v.01"></path><path d="M6 18.01v.01"></path><path d="M7 15.02v.01"></path><path d="M10 13.03v.01"></path><path d="M12 3v5.394a6.737 6.737 0 0 0 3 5.606a6.737 6.737 0 0 1 3 5.606v1.394"></path>', 6)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
