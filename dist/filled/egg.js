import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
const r = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function i(l, e) {
  return t(), n("svg", r, e[0] || (e[0] = [
    o("path", { d: "M12.002 2c-4.173 -.008 -8.002 6.058 -8.002 12.083c0 4.708 3.25 7.917 8 7.917c4.727 -.206 8 -3.328 8 -7.917c0 -6.02 -3.825 -12.075 -7.998 -12.083z" }, null, -1)
  ]));
}
const h = { render: i };
export {
  h as default,
  i as render
};
