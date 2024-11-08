import { openBlock as l, createElementBlock as o, createElementVNode as t } from "vue";
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
function n(i, e) {
  return l(), o("svg", r, e[0] || (e[0] = [
    t("path", {
      d: "M12 5l-8 4l8 4l8 -4l-8 -4",
      fill: "currentColor"
    }, null, -1),
    t("path", { d: "M10 12l-6 3l8 4l8 -4l-6 -3" }, null, -1)
  ]));
}
const h = { render: n };
export {
  h as default,
  n as render
};
