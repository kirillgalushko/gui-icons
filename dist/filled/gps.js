import { openBlock as t, createElementBlock as l, createElementVNode as n } from "vue";
const o = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(i, e) {
  return t(), l("svg", o, e[0] || (e[0] = [
    n("path", { d: "M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-.086 5.066c.372 -.837 -.483 -1.692 -1.32 -1.32l-9 4l-.108 .055c-.75 .44 -.611 1.609 .271 1.83l3.418 .853l.855 3.419c.23 .922 1.498 1.032 1.884 .163z" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
