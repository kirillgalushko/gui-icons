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
    o('<path d="M3 21l18 0"></path><path d="M10 21v-4a2 2 0 0 1 4 0v4"></path><path d="M10 5l4 0"></path><path d="M12 3l0 5"></path><path d="M6 21v-7m-2 2l8 -8l8 8m-2 -2v7"></path>', 5)
  ]));
}
const l = { render: n };
export {
  l as default,
  n as render
};
