import { openBlock as l, createElementBlock as n, createElementVNode as e } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function r(i, t) {
  return l(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M7.833 12.278l4.445 -4.445" }, null, -1),
    e("path", { d: "M10.055 14.5l2.223 -2.222" }, null, -1),
    e("path", { d: "M12.278 16.722l.555 -.555" }, null, -1),
    e("path", { d: "M19.828 14.828a4 4 0 0 0 0 -5.656l-5 -5a4 4 0 0 0 -5.656 0l-5 5a4 4 0 0 0 0 5.656l6.171 6.172h3.314l6.171 -6.172z" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
