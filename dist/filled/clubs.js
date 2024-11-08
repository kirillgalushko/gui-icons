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
    n("path", { d: "M12 2a5 5 0 0 0 -4.488 2.797l-.103 .225a4.998 4.998 0 0 0 -.334 2.837l.027 .14a5 5 0 0 0 -3.091 9.009l.198 .14a4.998 4.998 0 0 0 4.42 .58l.174 -.066l-.773 3.095a1 1 0 0 0 .97 1.243h6l.113 -.006a1 1 0 0 0 .857 -1.237l-.774 -3.095l.174 .065a5 5 0 1 0 1.527 -9.727l.028 -.14a4.997 4.997 0 0 0 -4.925 -5.86z" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
