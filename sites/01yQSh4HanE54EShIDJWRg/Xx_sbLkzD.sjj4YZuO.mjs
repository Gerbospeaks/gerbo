import { __esmMin as e } from "./rolldown-runtime.wPLyQg-T.mjs";
import {
  Y as t,
  init_jsx_runtime as n,
  init_npm_react_18_2 as r,
  p as i,
} from "./react.Cd8yx0tA.mjs";
import { motion as a } from "./motion.BvMEYU-E.mjs";
import {
  ControlType as o,
  addPropertyControls as s,
  cx as c,
  init_framer_MRKGI23E as l,
  useSVGTemplate as u,
  withCSS as d,
} from "./framer.DERDik75.mjs";
var f,
  p,
  m,
  h,
  g,
  _,
  v,
  y,
  b = e(() => {
    n(),
      l(),
      r(),
      (f = t(function (e, t) {
        return i(`svg`, { ...e, ref: t, children: e.children });
      })),
      (p = a.create(f)),
      (m = t((e, t) => {
        let { animated: n, layoutId: r, children: a, ...o } = e;
        return n
          ? i(p, { ...o, layoutId: r, ref: t, children: a })
          : i(`svg`, { ...o, ref: t, children: a });
      })),
      (h = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 4.5 0 L 15 16.5 L 10.5 16.5 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="16.5px" id="wBdJ15Yu6" transform="translate(4.5 3.75)" width="15px"/><path d="M 0 0 L 4.5 0 L 15 16.5 L 10.5 16.5 Z" fill="transparent" height="16.5px" id="El8uvQLqv" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(4.5 3.75)" width="15px"/><path d="M 6.176 0 L 0 6.794" fill="transparent" height="6.7940624999999955px" id="AHSzdg78i" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(4.5 13.456)" width="6.176249999999996px"/><path d="M 6.176 0 L 0 6.794" fill="transparent" height="6.794062499999999px" id="h4GjUNYzh" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(13.324 3.75)" width="6.176249999999996px"/></svg>`),
      (g = ({
        alpha: e,
        color: t,
        height: n,
        id: r,
        width: i,
        width1: a,
        ...o
      }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (_ = t(function (e, t) {
        let {
            style: n,
            className: r,
            layoutId: a,
            variant: o,
            ezTt3ayMo: s,
            lschgej4H: l,
            qxTvv_EBh: d,
            ...f
          } = g(e),
          p = u(`1688045918`, h);
        return i(m, {
          ...f,
          className: c(`framer-SHPPl`, r),
          layoutId: a,
          ref: t,
          role: `presentation`,
          style: { "--1m6trwb": d, "--21h8s6": s, "--pgex8v": l, ...n },
          viewBox: `0 0 24 24`,
          children: i(`use`, { href: p }),
        });
      })),
      (v = [`.framer-SHPPl { aspect-ratio: 1; display: block; width: 24px; }`]),
      (y = d(_, v, `framer-SHPPl`)),
      (y.displayName = `X Logo`),
      s(y, {
        ezTt3ayMo: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !1,
          title: `Color`,
          type: o.Color,
        },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: o.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: o.Number,
        },
      });
  });
export { y as Icon, b as init_Xx_sbLkzD };
//# sourceMappingURL=Xx_sbLkzD.sjj4YZuO.mjs.map
