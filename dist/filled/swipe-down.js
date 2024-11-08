import { openBlock as e, createElementBlock as t, createElementVNode as n } from "vue";
const o = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(i, l) {
  return e(), t("svg", o, l[0] || (l[0] = [
    n("path", { d: "M12 3a5 5 0 0 1 1.001 9.9l-.001 4.684l1.293 -1.291a1 1 0 0 1 1.32 -.083l.094 .083a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1 -.112 .097l-.11 .071l-.114 .054l-.105 .035l-.149 .03l-.117 .006l-.075 -.003l-.126 -.017l-.111 -.03l-.111 -.044l-.098 -.052l-.096 -.067l-.09 -.08l-3 -3a1 1 0 0 1 1.414 -1.414l1.293 1.292v-4.685a5.002 5.002 0 0 1 1 -9.9" }, null, -1)
  ]));
}
const m = { render: r };
export {
  m as default,
  r as render
};
