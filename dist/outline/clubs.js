import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
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
function l(i, e) {
  return t(), o("svg", r, e[0] || (e[0] = [
    n("path", { d: "M12 3a4 4 0 0 1 3.164 6.447a4 4 0 1 1 -1.164 6.198v1.355l1 4h-6l1 -4l0 -1.355a4 4 0 1 1 -1.164 -6.199a4 4 0 0 1 3.163 -6.446z" }, null, -1)
  ]));
}
const s = { render: l };
export {
  s as default,
  l as render
};
