import { openBlock as l, createElementBlock as n, createElementVNode as t } from "vue";
const o = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function r(h, e) {
  return l(), n("svg", o, e[0] || (e[0] = [
    t("path", { d: "M14 8c1.91 0 3.79 .752 5.625 2.219a1 1 0 1 1 -1.25 1.562c-1.019 -.815 -2.016 -1.345 -2.997 -1.6l1.584 5.544a1 1 0 0 1 -.962 1.275h-1v4a1 1 0 0 1 -2 0v-4h-2v4a1 1 0 0 1 -2 0v-4h-1a1 1 0 0 1 -.962 -1.275l1.584 -5.545c-.98 .256 -1.978 .786 -2.997 1.601a1 1 0 1 1 -1.25 -1.562c1.733 -1.386 3.506 -2.133 5.307 -2.212l.335 -.007z" }, null, -1),
    t("path", { d: "M12 1a3 3 0 1 1 -3 3l.005 -.176a3 3 0 0 1 2.995 -2.824" }, null, -1)
  ]));
}
const i = { render: r };
export {
  i as default,
  r as render
};
