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
function i(l, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M9 9l-6 6v4h4l6 -6m2 -2l2.503 -2.503a2.828 2.828 0 1 0 -4 -4l-2.497 2.497"></path><path d="M12.5 5.5l4 4"></path><path d="M4.5 13.5l4 4"></path><path d="M19 15h2v2m-2 2h-6l3 -3"></path><path d="M3 3l18 18"></path>', 5)
  ]));
}
const a = { render: i };
export {
  a as default,
  i as render
};