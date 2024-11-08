import { openBlock as h, createElementBlock as e, createStaticVNode as a } from "vue";
const o = {
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
function p(d, t) {
  return h(), e("svg", o, t[0] || (t[0] = [
    a('<path d="M4 8h4v4h-4z"></path><path d="M6 4l0 4"></path><path d="M6 12l0 8"></path><path d="M10 14h4v4h-4z"></path><path d="M12 4l0 10"></path><path d="M12 18l0 2"></path><path d="M16 5h4v4h-4z"></path><path d="M18 4l0 1"></path><path d="M18 9l0 11"></path>', 9)
  ]));
}
const r = { render: p };
export {
  r as default,
  p as render
};
