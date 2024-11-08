import { openBlock as l, createElementBlock as r, createElementVNode as t } from "vue";
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
function n(i, e) {
  return l(), r("svg", o, e[0] || (e[0] = [
    t("path", { d: "M12 3l4 4l-2 1l4 4l-3 1l4 4h-14l4 -4l-3 -1l4 -4l-2 -1z" }, null, -1),
    t("path", { d: "M14 17v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-3" }, null, -1)
  ]));
}
const s = { render: n };
export {
  s as default,
  n as render
};
