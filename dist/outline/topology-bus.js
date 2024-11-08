import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
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
function r(n, t) {
  return e(), h("svg", a, t[0] || (t[0] = [
    o('<path d="M14 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M6 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M22 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M2 16h20"></path><path d="M4 12v4"></path><path d="M12 12v4"></path><path d="M20 12v4"></path>', 7)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
