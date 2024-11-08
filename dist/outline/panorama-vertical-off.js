import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
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
function i(l, e) {
  return n(), o("svg", r, e[0] || (e[0] = [
    t("path", { d: "M7 3h10.53c.693 0 1.18 .691 .935 1.338c-1.098 2.898 -1.573 5.795 -1.425 8.692m.828 4.847c.172 .592 .37 1.185 .595 1.778a1 1 0 0 1 -.934 1.345h-11c-.692 0 -1.208 -.692 -.962 -1.34c1.697 -4.486 1.903 -8.973 .619 -13.46" }, null, -1),
    t("path", { d: "M3 3l18 18" }, null, -1)
  ]));
}
const c = { render: i };
export {
  c as default,
  i as render
};
