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
function n(l, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M12 3a7 7 0 0 1 7 7v4l-3 -3"></path><path d="M22 11l-3 3"></path><path d="M8 15.5l-5 -3l5 -3l5 3v5.5l-5 3z"></path><path d="M3 12.5v5.5l5 3"></path><path d="M8 15.545l5 -3.03"></path>', 5)
  ]));
}
const a = { render: n };
export {
  a as default,
  n as render
};
