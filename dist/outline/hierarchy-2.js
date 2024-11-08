import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
const r = {
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
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M10 3h4v4h-4z"></path><path d="M3 17h4v4h-4z"></path><path d="M17 17h4v4h-4z"></path><path d="M7 17l5 -4l5 4"></path><path d="M12 7l0 6"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
