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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(i, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M12 21v-4"></path><path d="M12 13v-4"></path><path d="M12 5v-2"></path><path d="M10 21h4"></path><path d="M8 5v4h11l2 -2l-2 -2z"></path><path d="M14 13v4h-8l-2 -2l2 -2z"></path>', 6)
  ]));
}
const l = { render: n };
export {
  l as default,
  n as render
};