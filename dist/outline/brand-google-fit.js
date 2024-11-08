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
    n("path", { d: "M12 8.866l-2.733 -2.734a3.866 3.866 0 0 0 -5.467 5.467l2.733 2.734l5.467 5.467l8.202 -8.201a3.866 3.866 0 0 0 -5.469 -5.466l-8.201 8.2" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};
