import { openBlock as e, createElementBlock as o, createStaticVNode as h } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(a, t) {
  return e(), o("svg", n, t[0] || (t[0] = [
    h('<path d="M9 15l6 -6"></path><path d="M11 6l.463 -.536a5 5 0 0 1 7.072 0a4.993 4.993 0 0 1 -.001 7.072"></path><path d="M12.603 18.534a5.07 5.07 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"></path><path d="M16 19h6"></path><path d="M19 16v6"></path>', 5)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
