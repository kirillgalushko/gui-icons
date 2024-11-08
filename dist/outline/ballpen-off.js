import { openBlock as e, createElementBlock as o, createStaticVNode as l } from "vue";
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
function n(r, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    l('<path d="M14 6l7 7l-2 2"></path><path d="M10 10l-4.172 4.172a2.828 2.828 0 1 0 4 4l4.172 -4.172"></path><path d="M16 12l4.414 -4.414a2 2 0 0 0 0 -2.829l-1.171 -1.171a2 2 0 0 0 -2.829 0l-4.414 4.414"></path><path d="M4 20l1.768 -1.768"></path><path d="M3 3l18 18"></path>', 5)
  ]));
}
const i = { render: n };
export {
  i as default,
  n as render
};
