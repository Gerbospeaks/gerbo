import { __esmMin as e } from "./rolldown-runtime.wPLyQg-T.mjs";
import {
  Y as t,
  ae as n,
  init_jsx_runtime as r,
  init_npm_react_18_2 as i,
  p as a,
  pe as o,
  re as s,
  se as c,
  u as l,
  x as u,
} from "./react.Cd8yx0tA.mjs";
import {
  LayoutGroup as ee,
  MotionConfigContext as d,
  init_framer_motion_5EXT2AMG as f,
  motion as p,
} from "./motion.BvMEYU-E.mjs";
import {
  ComponentViewportProvider as m,
  ControlType as h,
  RichText as g,
  SmartComponentScopedContainer as _,
  addFonts as v,
  addPropertyControls as y,
  cx as b,
  fontStore as x,
  getFonts as S,
  getFontsFromSharedStyle as C,
  init_framer_MRKGI23E as w,
  useActiveVariantCallback as T,
  useComponentViewport as E,
  useLocaleInfo as te,
  useVariantState as ne,
  withCSS as D,
  withFX as O,
} from "./framer.DERDik75.mjs";
import {
  FramerdxyZfrxNk as k,
  className as A,
  css as j,
  fonts as M,
  init_C0wa976Zp as N,
  init_dxyZfrxNk as re,
} from "./dxyZfrxNk.sig2bmLO.mjs";
import { Icon$1 as P, init_Phosphor as F } from "./shared-lib.BgYLzAGg.mjs";
import {
  className as I,
  className$1 as L,
  css as R,
  css$1 as ie,
  fonts as ae,
  fonts$1 as z,
  init_UMunwn2ac as B,
  init_cH8AiB6P_ as oe,
} from "./UMunwn2ac.C0Obwu4t.mjs";
var V,
  H,
  U,
  se = e(() => {
    w(),
      x.loadFonts([`Inter`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-Italic`]),
      (V = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `/assets/vFzuJY0c65av44uhEKB6vyjFMg.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (H = [
        `.framer-PKahC .framer-styles-preset-1khckfh:not(.rich-text-wrapper), .framer-PKahC .framer-styles-preset-1khckfh.rich-text-wrapper p { --framer-font-family: "Inter", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 150%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, #16101e); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-PKahC .framer-styles-preset-1khckfh:not(.rich-text-wrapper), .framer-PKahC .framer-styles-preset-1khckfh.rich-text-wrapper p { --framer-font-family: "Inter", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 150%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, #16101e); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-PKahC .framer-styles-preset-1khckfh:not(.rich-text-wrapper), .framer-PKahC .framer-styles-preset-1khckfh.rich-text-wrapper p { --framer-font-family: "Inter", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 150%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, #16101e); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (U = `framer-PKahC`);
  });
function ce(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var le,
  ue,
  de,
  fe,
  pe,
  me,
  he,
  ge,
  _e,
  ve,
  ye,
  be,
  W,
  xe = e(() => {
    r(),
      w(),
      f(),
      i(),
      F(),
      N(),
      se(),
      (le = S(P)),
      (ue = [`JO0R9J_PN`, `YZWS_Bcwa`, `R4W2_bOQ7`, `gGbSvFg94`]),
      (de = `framer-kFUTx`),
      (fe = {
        gGbSvFg94: `framer-v-1vyi67p`,
        JO0R9J_PN: `framer-v-10tvayq`,
        R4W2_bOQ7: `framer-v-1i47czn`,
        YZWS_Bcwa: `framer-v-qnnier`,
      }),
      (pe = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (me = ({ value: e, children: t }) => {
        let n = s(d),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return a(d.Provider, { value: i, children: t });
      }),
      (he = p.create(u)),
      (ge = {
        "mobile closed": `R4W2_bOQ7`,
        "mobile open": `gGbSvFg94`,
        Closed: `JO0R9J_PN`,
        Open: `YZWS_Bcwa`,
      }),
      (_e = ({ content: e, height: t, id: n, title: r, width: i, ...a }) => ({
        ...a,
        aU1_lXl6h:
          e ??
          a.aU1_lXl6h ??
          `A waitlist template is a pre-designed webpage where users can sign up to join a waitlist for your product or service.`,
        pNqA5B2sU: r ?? a.pNqA5B2sU ?? `What is a waitlist template?`,
        variant: ge[a.variant] ?? a.variant ?? `JO0R9J_PN`,
      })),
      (ve = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (ye = t(function (e, t) {
        let { activeLocale: r, setLocale: i } = te(),
          {
            style: s,
            className: c,
            layoutId: d,
            variant: f,
            pNqA5B2sU: h,
            aU1_lXl6h: _,
            ...v
          } = _e(e),
          {
            baseVariant: y,
            classNames: x,
            clearLoadingGesture: S,
            gestureHandlers: C,
            gestureVariant: w,
            isLoading: D,
            setGestureState: O,
            setVariant: k,
            variants: j,
          } = ne({
            cycleOrder: ue,
            defaultVariant: `JO0R9J_PN`,
            variant: f,
            variantClassNames: fe,
          }),
          M = ve(e, j),
          { activeVariantCallback: N, delay: re } = T(y),
          F = N(async (...e) => {
            O({ isPressed: !1 }), k(`YZWS_Bcwa`);
          }),
          I = N(async (...e) => {
            O({ isPressed: !1 }), k(`JO0R9J_PN`);
          }),
          L = N(async (...e) => {
            O({ isPressed: !1 }), k(`gGbSvFg94`);
          }),
          R = N(async (...e) => {
            O({ isPressed: !1 }), k(`R4W2_bOQ7`);
          }),
          ie = o(null),
          ae = () => y !== `R4W2_bOQ7`,
          z = n(),
          B = [U, A];
        return (
          E(),
          a(ee, {
            id: d ?? z,
            children: a(he, {
              animate: j,
              initial: !1,
              children: a(me, {
                value: pe,
                children: l(p.div, {
                  ...v,
                  ...C,
                  className: b(de, ...B, `framer-10tvayq`, c, x),
                  "data-framer-name": `Closed`,
                  "data-highlight": !0,
                  layoutDependency: M,
                  layoutId: `JO0R9J_PN`,
                  onTap: F,
                  ref: t ?? ie,
                  style: {
                    backgroundColor: `var(--token-37699ec8-6f41-4363-9a8a-9e76d6ead784, rgb(246, 251, 255))`,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    boxShadow: `0px 0.7065919983928324px 0.7065919983928324px -0.29166666666666663px rgba(16, 49, 77, 0.05356), 0px 1.8065619053231785px 1.8065619053231785px -0.5833333333333333px rgba(16, 49, 77, 0.05521), 0px 3.6217592146567767px 3.6217592146567767px -0.875px rgba(16, 49, 77, 0.05793), 0px 6.8655999097303715px 6.8655999097303715px -1.1666666666666665px rgba(16, 49, 77, 0.0628), 0px 13.646761411524492px 13.646761411524492px -1.4583333333333335px rgba(16, 49, 77, 0.07297), 0px 30px 30px -1.75px rgba(16, 49, 77, 0.0975)`,
                    ...s,
                  },
                  ...ce(
                    {
                      gGbSvFg94: {
                        "data-framer-name": `mobile open`,
                        onTap: R,
                      },
                      R4W2_bOQ7: {
                        "data-framer-name": `mobile closed`,
                        onTap: L,
                      },
                      YZWS_Bcwa: { "data-framer-name": `Open`, onTap: I },
                    },
                    y,
                    w,
                  ),
                  children: [
                    l(p.div, {
                      className: `framer-m6mqzu`,
                      "data-framer-name": `question`,
                      layoutDependency: M,
                      layoutId: `yLnHJBaJX`,
                      children: [
                        a(g, {
                          __fromCanvasComponent: !0,
                          children: a(u, {
                            children: a(p.p, {
                              className: `framer-styles-preset-1khckfh`,
                              "data-styles-preset": `cH8AiB6P_`,
                              style: { "--framer-text-alignment": `left` },
                              children: `What is a waitlist template?`,
                            }),
                          }),
                          className: `framer-y2xalo`,
                          "data-framer-name": `Title`,
                          fonts: [`Inter`],
                          layoutDependency: M,
                          layoutId: `Q2loIM6vC`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: h,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        a(p.div, {
                          className: `framer-12hi9uv`,
                          "data-framer-name": `Close`,
                          layoutDependency: M,
                          layoutId: `euCgcnyob`,
                          children: a(p.div, {
                            className: `framer-1d9yr4n`,
                            "data-framer-name": `container`,
                            layoutDependency: M,
                            layoutId: `b43DuNqYo`,
                            style: { rotate: 0 },
                            variants: {
                              gGbSvFg94: { rotate: -180 },
                              YZWS_Bcwa: { rotate: -180 },
                            },
                            children: a(m, {
                              children: a(p.div, {
                                className: `framer-iz82ix-container`,
                                layoutDependency: M,
                                layoutId: `ZE7iFWgeK-container`,
                                children: a(P, {
                                  color: `var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(14, 28, 41))`,
                                  height: `100%`,
                                  iconSearch: `House`,
                                  iconSelection: `CaretDown`,
                                  id: `ZE7iFWgeK`,
                                  layoutId: `ZE7iFWgeK`,
                                  mirrored: !1,
                                  selectByList: !0,
                                  style: { height: `100%`, width: `100%` },
                                  weight: `regular`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    ae() &&
                      a(g, {
                        __fromCanvasComponent: !0,
                        children: a(u, {
                          children: a(p.p, {
                            className: `framer-styles-preset-1y7m99z`,
                            "data-styles-preset": `C0wa976Zp`,
                            children: `A waitlist template is a pre-designed webpage where users can sign up to join a waitlist for your product or service.`,
                          }),
                        }),
                        className: `framer-1dmolji`,
                        "data-framer-name": `Content`,
                        fonts: [`Inter`],
                        layoutDependency: M,
                        layoutId: `iNTfFehYc`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                          filter: `blur(5px)`,
                          opacity: 0,
                          WebkitFilter: `blur(5px)`,
                        },
                        text: _,
                        variants: {
                          gGbSvFg94: {
                            filter: `blur(0px)`,
                            opacity: 1,
                            WebkitFilter: `blur(0px)`,
                          },
                          YZWS_Bcwa: {
                            filter: `blur(0px)`,
                            opacity: 0.8,
                            WebkitFilter: `blur(0px)`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                  ],
                }),
              }),
            }),
          })
        );
      })),
      (be = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-kFUTx.framer-futj5n, .framer-kFUTx .framer-futj5n { display: block; }`,
        `.framer-kFUTx.framer-10tvayq { cursor: pointer; height: 48px; overflow: hidden; position: relative; width: 467px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-kFUTx .framer-m6mqzu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 16px; overflow: hidden; padding: 0px; position: absolute; right: 16px; top: 12px; }`,
        `.framer-kFUTx .framer-y2xalo { -webkit-user-select: none; flex: 1 0 0px; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-kFUTx .framer-12hi9uv { flex: none; height: 20px; overflow: hidden; position: relative; width: 20px; }`,
        `.framer-kFUTx .framer-1d9yr4n { flex: none; height: 20px; left: 0px; overflow: visible; position: absolute; top: 0px; width: 20px; }`,
        `.framer-kFUTx .framer-iz82ix-container { flex: none; height: 20px; left: calc(50.00000000000002% - 20px / 2); position: absolute; top: calc(50.00000000000002% - 20px / 2); width: 20px; }`,
        `.framer-kFUTx .framer-1dmolji { -webkit-user-select: none; flex: none; height: auto; left: 16px; position: absolute; right: 16px; top: 44px; user-select: none; white-space: pre-wrap; word-break: break-word; word-wrap: break-word; }`,
        `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-kFUTx .framer-m6mqzu { gap: 0px; } .framer-kFUTx .framer-m6mqzu > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-kFUTx .framer-m6mqzu > :first-child { margin-left: 0px; } .framer-kFUTx .framer-m6mqzu > :last-child { margin-right: 0px; } }`,
        `.framer-kFUTx.framer-v-qnnier.framer-10tvayq { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; padding: 12px 16px 12px 16px; }`,
        `.framer-kFUTx.framer-v-qnnier .framer-m6mqzu, .framer-kFUTx.framer-v-qnnier .framer-1dmolji, .framer-kFUTx.framer-v-1i47czn .framer-m6mqzu, .framer-kFUTx.framer-v-1vyi67p .framer-m6mqzu, .framer-kFUTx.framer-v-1vyi67p .framer-1dmolji { left: unset; position: relative; right: unset; top: unset; width: 100%; }`,
        `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-kFUTx.framer-v-qnnier.framer-10tvayq { gap: 0px; } .framer-kFUTx.framer-v-qnnier.framer-10tvayq > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-kFUTx.framer-v-qnnier.framer-10tvayq > :first-child { margin-top: 0px; } .framer-kFUTx.framer-v-qnnier.framer-10tvayq > :last-child { margin-bottom: 0px; } }`,
        `.framer-kFUTx.framer-v-1i47czn.framer-10tvayq, .framer-kFUTx.framer-v-1vyi67p.framer-10tvayq { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; padding: 12px; }`,
        `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-kFUTx.framer-v-1i47czn.framer-10tvayq { gap: 0px; } .framer-kFUTx.framer-v-1i47czn.framer-10tvayq > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-kFUTx.framer-v-1i47czn.framer-10tvayq > :first-child { margin-top: 0px; } .framer-kFUTx.framer-v-1i47czn.framer-10tvayq > :last-child { margin-bottom: 0px; } }`,
        `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-kFUTx.framer-v-1vyi67p.framer-10tvayq { gap: 0px; } .framer-kFUTx.framer-v-1vyi67p.framer-10tvayq > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-kFUTx.framer-v-1vyi67p.framer-10tvayq > :first-child { margin-top: 0px; } .framer-kFUTx.framer-v-1vyi67p.framer-10tvayq > :last-child { margin-bottom: 0px; } }`,
        ...H,
        ...j,
      ]),
      (W = D(ye, be, `framer-kFUTx`)),
      (W.displayName = `Elements/FAQ Item`),
      (W.defaultProps = { height: 48, width: 467 }),
      y(W, {
        variant: {
          options: [`JO0R9J_PN`, `YZWS_Bcwa`, `R4W2_bOQ7`, `gGbSvFg94`],
          optionTitles: [`Closed`, `Open`, `mobile closed`, `mobile open`],
          title: `Variant`,
          type: h.Enum,
        },
        pNqA5B2sU: {
          defaultValue: `What is a waitlist template?`,
          displayTextArea: !1,
          title: `Title`,
          type: h.String,
        },
        aU1_lXl6h: {
          defaultValue: `A waitlist template is a pre-designed webpage where users can sign up to join a waitlist for your product or service.`,
          displayTextArea: !0,
          title: `Content`,
          type: h.String,
        },
      }),
      v(
        W,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...le,
          ...C(V),
          ...C(M),
        ],
        { supportsExplicitInterCodegen: !0 },
      );
  });
function G(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var Se,
  K,
  Ce,
  we,
  Te,
  Ee,
  q,
  De,
  Oe,
  J,
  ke,
  Y,
  X,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Z,
  Le = e(() => {
    r(),
      w(),
      f(),
      i(),
      xe(),
      (Se = S(W)),
      (K = O(_)),
      (Ce = [`zxaWRW_vh`, `e24ebK_UT`, `gDXH34rqs`, `z2swdyEK1`]),
      (we = `framer-ugHzL`),
      (Te = {
        e24ebK_UT: `framer-v-1agsos7`,
        gDXH34rqs: `framer-v-uzksst`,
        z2swdyEK1: `framer-v-1kjyf0q`,
        zxaWRW_vh: `framer-v-16do2ma`,
      }),
      (Ee = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (q = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 60,
      }),
      (De = { bounce: 0.2, delay: 0, duration: 0.6, type: `spring` }),
      (Oe = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: De,
        x: 0,
        y: 60,
      }),
      (J = { bounce: 0.2, delay: 0.1, duration: 0.6, type: `spring` }),
      (ke = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: J,
        x: 0,
        y: 60,
      }),
      (Y = { bounce: 0.2, delay: 0.2, duration: 0.6, type: `spring` }),
      (X = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Y,
        x: 0,
        y: 60,
      }),
      (Ae = ({ value: e, children: t }) => {
        let n = s(d),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return a(d.Provider, { value: i, children: t });
      }),
      (je = p.create(u)),
      (Me = {
        "service mobile": `z2swdyEK1`,
        "services faqs": `gDXH34rqs`,
        Default: `zxaWRW_vh`,
        mobile: `e24ebK_UT`,
      }),
      (Ne = ({
        aNS2: e,
        aNS3: t,
        answer: n,
        height: r,
        id: i,
        q2: a,
        q3: o,
        question: s,
        width: c,
        ...l
      }) => ({
        ...l,
        bwiV0XLxn: o ?? l.bwiV0XLxn ?? `Will clients know it’s AI?`,
        DTAMZgfir:
          n ??
          l.DTAMZgfir ??
          `Gerbo is a 24/7 AI receptionist that answers your calls, captures caller info, and sends you a summary by email or SMS (coming soon).`,
        fhsirZjle: a ?? l.fhsirZjle ?? `Can I keep my current phone number?`,
        q9B7Z8moq:
          t ??
          l.q9B7Z8moq ??
          `Not unless you tell them — Gerbo uses a polite, human-sounding African voice. If you'd like you can add an AI disclaimer during the greeting message.`,
        variant: Me[l.variant] ?? l.variant ?? `zxaWRW_vh`,
        zfLfLRYav: s ?? l.zfLfLRYav ?? `What is Gerbo?`,
        ZuZPN5u2B:
          e ??
          l.ZuZPN5u2B ??
          `Yes — Gerbo forwards calls and works with your existing line.`,
      })),
      (Pe = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Fe = t(function (e, t) {
        let r = o(null),
          i = t ?? r,
          s = n(),
          { activeLocale: c, setLocale: u } = te(),
          d = E(),
          {
            style: f,
            className: h,
            layoutId: g,
            variant: _,
            zfLfLRYav: v,
            DTAMZgfir: y,
            fhsirZjle: x,
            ZuZPN5u2B: S,
            bwiV0XLxn: C,
            q9B7Z8moq: w,
            ...T
          } = Ne(e),
          {
            baseVariant: D,
            classNames: O,
            clearLoadingGesture: k,
            gestureHandlers: A,
            gestureVariant: j,
            isLoading: M,
            setGestureState: N,
            setVariant: re,
            variants: P,
          } = ne({
            cycleOrder: Ce,
            defaultVariant: `zxaWRW_vh`,
            ref: i,
            variant: _,
            variantClassNames: Te,
          }),
          F = Pe(e, P),
          I = [],
          L = b(we, ...I),
          R = () => ![`gDXH34rqs`, `z2swdyEK1`].includes(D);
        return a(ee, {
          id: g ?? s,
          children: a(je, {
            animate: P,
            initial: !1,
            children: a(Ae, {
              value: Ee,
              children: l(p.div, {
                ...T,
                ...A,
                className: b(L, `framer-16do2ma`, h, O),
                "data-framer-name": `Default`,
                layoutDependency: F,
                layoutId: `zxaWRW_vh`,
                ref: i,
                style: { ...f },
                ...G(
                  {
                    e24ebK_UT: { "data-framer-name": `mobile` },
                    gDXH34rqs: { "data-framer-name": `services faqs` },
                    z2swdyEK1: { "data-framer-name": `service mobile` },
                  },
                  D,
                  j,
                ),
                children: [
                  a(m, {
                    height: 48,
                    width: d?.width || `100vw`,
                    y:
                      (d?.y || 0) +
                      0 +
                      (((d?.height || 560) - 0 - 560) / 2 + 0 + 0),
                    ...G(
                      {
                        gDXH34rqs: {
                          y:
                            (d?.y || 0) +
                            0 +
                            (((d?.height || 176) - 0 - 176) / 2 + 0 + 0),
                        },
                        z2swdyEK1: {
                          y:
                            (d?.y || 0) +
                            0 +
                            (((d?.height || 176) - 0 - 176) / 2 + 0 + 0),
                        },
                      },
                      D,
                      j,
                    ),
                    children: a(K, {
                      __framer__animate: { transition: De },
                      __framer__animateOnce: !0,
                      __framer__enter: q,
                      __framer__exit: Oe,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.5,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      className: `framer-95fk4g-container`,
                      layoutDependency: F,
                      layoutId: `CS8LrO0eP-container`,
                      nodeId: `CS8LrO0eP`,
                      rendersWithMotion: !0,
                      scopeId: `bOG2a_avp`,
                      ...G(
                        {
                          e24ebK_UT: {
                            __framer__styleAppearEffectEnabled: void 0,
                          },
                        },
                        D,
                        j,
                      ),
                      children: a(W, {
                        aU1_lXl6h: `Gerbo is a 24/7 AI receptionist that answers your calls, captures caller info, and sends you a summary by email or SMS (coming soon).`,
                        height: `100%`,
                        id: `CS8LrO0eP`,
                        layoutId: `CS8LrO0eP`,
                        pNqA5B2sU: `What is Gerbo?`,
                        style: { width: `100%` },
                        variant: `JO0R9J_PN`,
                        width: `100%`,
                        ...G(
                          {
                            e24ebK_UT: { variant: `R4W2_bOQ7` },
                            gDXH34rqs: { aU1_lXl6h: y, pNqA5B2sU: v },
                            z2swdyEK1: { aU1_lXl6h: y, pNqA5B2sU: v },
                          },
                          D,
                          j,
                        ),
                      }),
                    }),
                  }),
                  a(m, {
                    height: 48,
                    width: d?.width || `100vw`,
                    y:
                      (d?.y || 0) +
                      0 +
                      (((d?.height || 560) - 0 - 560) / 2 + 48 + 16),
                    ...G(
                      {
                        gDXH34rqs: {
                          y:
                            (d?.y || 0) +
                            0 +
                            (((d?.height || 176) - 0 - 176) / 2 + 48 + 16),
                        },
                        z2swdyEK1: {
                          y:
                            (d?.y || 0) +
                            0 +
                            (((d?.height || 176) - 0 - 176) / 2 + 48 + 16),
                        },
                      },
                      D,
                      j,
                    ),
                    children: a(K, {
                      __framer__animate: { transition: J },
                      __framer__animateOnce: !0,
                      __framer__enter: q,
                      __framer__exit: ke,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.5,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      className: `framer-jdw5hd-container`,
                      layoutDependency: F,
                      layoutId: `aCDaV4m1O-container`,
                      nodeId: `aCDaV4m1O`,
                      rendersWithMotion: !0,
                      scopeId: `bOG2a_avp`,
                      ...G(
                        {
                          e24ebK_UT: {
                            __framer__styleAppearEffectEnabled: void 0,
                          },
                        },
                        D,
                        j,
                      ),
                      children: a(W, {
                        aU1_lXl6h: `Yes — Gerbo forwards calls and works with your existing line.`,
                        height: `100%`,
                        id: `aCDaV4m1O`,
                        layoutId: `aCDaV4m1O`,
                        pNqA5B2sU: `Can I keep my current phone number?`,
                        style: { width: `100%` },
                        variant: `JO0R9J_PN`,
                        width: `100%`,
                        ...G(
                          {
                            e24ebK_UT: { variant: `R4W2_bOQ7` },
                            gDXH34rqs: { aU1_lXl6h: S, pNqA5B2sU: x },
                            z2swdyEK1: { aU1_lXl6h: S, pNqA5B2sU: x },
                          },
                          D,
                          j,
                        ),
                      }),
                    }),
                  }),
                  a(m, {
                    height: 48,
                    width: d?.width || `100vw`,
                    y:
                      (d?.y || 0) +
                      0 +
                      (((d?.height || 560) - 0 - 560) / 2 + 96 + 32),
                    ...G(
                      {
                        gDXH34rqs: {
                          y:
                            (d?.y || 0) +
                            0 +
                            (((d?.height || 176) - 0 - 176) / 2 + 96 + 32),
                        },
                        z2swdyEK1: {
                          y:
                            (d?.y || 0) +
                            0 +
                            (((d?.height || 176) - 0 - 176) / 2 + 96 + 32),
                        },
                      },
                      D,
                      j,
                    ),
                    children: a(K, {
                      __framer__animate: { transition: J },
                      __framer__animateOnce: !0,
                      __framer__enter: q,
                      __framer__exit: ke,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.5,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      className: `framer-18inico-container`,
                      layoutDependency: F,
                      layoutId: `pWSh9hSaz-container`,
                      nodeId: `pWSh9hSaz`,
                      rendersWithMotion: !0,
                      scopeId: `bOG2a_avp`,
                      ...G(
                        {
                          e24ebK_UT: {
                            __framer__styleAppearEffectEnabled: void 0,
                          },
                        },
                        D,
                        j,
                      ),
                      children: a(W, {
                        aU1_lXl6h: `Not unless you tell them — Gerbo uses a polite, human-sounding African voice. If you'd like you can add an AI disclaimer during the greeting message.`,
                        height: `100%`,
                        id: `pWSh9hSaz`,
                        layoutId: `pWSh9hSaz`,
                        pNqA5B2sU: `Will clients know it’s AI?`,
                        style: { width: `100%` },
                        variant: `JO0R9J_PN`,
                        width: `100%`,
                        ...G(
                          {
                            e24ebK_UT: { variant: `R4W2_bOQ7` },
                            gDXH34rqs: { aU1_lXl6h: w, pNqA5B2sU: C },
                            z2swdyEK1: { aU1_lXl6h: w, pNqA5B2sU: C },
                          },
                          D,
                          j,
                        ),
                      }),
                    }),
                  }),
                  R() &&
                    a(m, {
                      height: 48,
                      width: d?.width || `100vw`,
                      y:
                        (d?.y || 0) +
                        0 +
                        (((d?.height || 560) - 0 - 560) / 2 + 144 + 48),
                      children: a(K, {
                        __framer__animate: { transition: Y },
                        __framer__animateOnce: !0,
                        __framer__enter: q,
                        __framer__exit: X,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0.5,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-ypz0dj-container`,
                        layoutDependency: F,
                        layoutId: `HrOTdIoHC-container`,
                        nodeId: `HrOTdIoHC`,
                        rendersWithMotion: !0,
                        scopeId: `bOG2a_avp`,
                        ...G(
                          {
                            e24ebK_UT: {
                              __framer__styleAppearEffectEnabled: void 0,
                            },
                          },
                          D,
                          j,
                        ),
                        children: a(W, {
                          aU1_lXl6h: `Check out our demo, get in contact, and we'll get Gerbo to work.`,
                          height: `100%`,
                          id: `HrOTdIoHC`,
                          layoutId: `HrOTdIoHC`,
                          pNqA5B2sU: `How do I get started?`,
                          style: { width: `100%` },
                          variant: `JO0R9J_PN`,
                          width: `100%`,
                          ...G({ e24ebK_UT: { variant: `R4W2_bOQ7` } }, D, j),
                        }),
                      }),
                    }),
                  R() &&
                    a(m, {
                      height: 48,
                      width: d?.width || `100vw`,
                      y:
                        (d?.y || 0) +
                        0 +
                        (((d?.height || 560) - 0 - 560) / 2 + 192 + 64),
                      children: a(K, {
                        __framer__animate: { transition: Y },
                        __framer__animateOnce: !0,
                        __framer__enter: q,
                        __framer__exit: X,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0.5,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-1ckw9sz-container`,
                        layoutDependency: F,
                        layoutId: `EyVfeOBr5-container`,
                        nodeId: `EyVfeOBr5`,
                        rendersWithMotion: !0,
                        scopeId: `bOG2a_avp`,
                        ...G(
                          {
                            e24ebK_UT: {
                              __framer__styleAppearEffectEnabled: void 0,
                            },
                          },
                          D,
                          j,
                        ),
                        children: a(W, {
                          aU1_lXl6h: `Yes — all data captured by Gerbo is encrypted and stored according to GDPR standards.`,
                          height: `100%`,
                          id: `EyVfeOBr5`,
                          layoutId: `EyVfeOBr5`,
                          pNqA5B2sU: `Is Gerbo GDPR-compliant and secure?`,
                          style: { width: `100%` },
                          variant: `JO0R9J_PN`,
                          width: `100%`,
                          ...G({ e24ebK_UT: { variant: `R4W2_bOQ7` } }, D, j),
                        }),
                      }),
                    }),
                  R() &&
                    a(m, {
                      height: 48,
                      width: d?.width || `100vw`,
                      y:
                        (d?.y || 0) +
                        0 +
                        (((d?.height || 560) - 0 - 560) / 2 + 240 + 80),
                      children: a(K, {
                        __framer__animate: { transition: Y },
                        __framer__animateOnce: !0,
                        __framer__enter: q,
                        __framer__exit: X,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0.5,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-afp1hy-container`,
                        layoutDependency: F,
                        layoutId: `OqCizVvNC-container`,
                        nodeId: `OqCizVvNC`,
                        rendersWithMotion: !0,
                        scopeId: `bOG2a_avp`,
                        ...G(
                          {
                            e24ebK_UT: {
                              __framer__styleAppearEffectEnabled: void 0,
                            },
                          },
                          D,
                          j,
                        ),
                        children: a(W, {
                          aU1_lXl6h: `Gerbo answers simple business related questions and captures caller details so you can follow up in your own time. Booking system integration coming soon.`,
                          height: `100%`,
                          id: `OqCizVvNC`,
                          layoutId: `OqCizVvNC`,
                          pNqA5B2sU: `Can Gerbo take bookings or just messages?`,
                          style: { width: `100%` },
                          variant: `JO0R9J_PN`,
                          width: `100%`,
                          ...G({ e24ebK_UT: { variant: `R4W2_bOQ7` } }, D, j),
                        }),
                      }),
                    }),
                  R() &&
                    a(m, {
                      height: 48,
                      width: d?.width || `100vw`,
                      y:
                        (d?.y || 0) +
                        0 +
                        (((d?.height || 560) - 0 - 560) / 2 + 288 + 96),
                      children: a(K, {
                        __framer__animate: { transition: Y },
                        __framer__animateOnce: !0,
                        __framer__enter: q,
                        __framer__exit: X,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0.5,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-n2k7sh-container`,
                        layoutDependency: F,
                        layoutId: `ZjaKGMn9a-container`,
                        nodeId: `ZjaKGMn9a`,
                        rendersWithMotion: !0,
                        scopeId: `bOG2a_avp`,
                        ...G(
                          {
                            e24ebK_UT: {
                              __framer__styleAppearEffectEnabled: void 0,
                            },
                          },
                          D,
                          j,
                        ),
                        children: a(W, {
                          aU1_lXl6h: `Dependable at any volume — each plan includes call limits, and you can add more anytime.`,
                          height: `100%`,
                          id: `ZjaKGMn9a`,
                          layoutId: `ZjaKGMn9a`,
                          pNqA5B2sU: `How many calls can Gerbo handle?`,
                          style: { width: `100%` },
                          variant: `JO0R9J_PN`,
                          width: `100%`,
                          ...G({ e24ebK_UT: { variant: `R4W2_bOQ7` } }, D, j),
                        }),
                      }),
                    }),
                  R() &&
                    a(m, {
                      height: 48,
                      width: d?.width || `100vw`,
                      y:
                        (d?.y || 0) +
                        0 +
                        (((d?.height || 560) - 0 - 560) / 2 + 336 + 112),
                      children: a(K, {
                        __framer__animate: { transition: Y },
                        __framer__animateOnce: !0,
                        __framer__enter: q,
                        __framer__exit: X,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0.5,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-1y299l6-container`,
                        layoutDependency: F,
                        layoutId: `FdSFh8lPV-container`,
                        nodeId: `FdSFh8lPV`,
                        rendersWithMotion: !0,
                        scopeId: `bOG2a_avp`,
                        ...G(
                          {
                            e24ebK_UT: {
                              __framer__styleAppearEffectEnabled: void 0,
                            },
                          },
                          D,
                          j,
                        ),
                        children: a(W, {
                          aU1_lXl6h: `Not yet — but you can hear Gerbo in action with our interactive demo!`,
                          height: `100%`,
                          id: `FdSFh8lPV`,
                          layoutId: `FdSFh8lPV`,
                          pNqA5B2sU: `Is there a free trial available?`,
                          style: { width: `100%` },
                          variant: `JO0R9J_PN`,
                          width: `100%`,
                          ...G({ e24ebK_UT: { variant: `R4W2_bOQ7` } }, D, j),
                        }),
                      }),
                    }),
                  R() &&
                    a(m, {
                      height: 48,
                      width: d?.width || `100vw`,
                      y:
                        (d?.y || 0) +
                        0 +
                        (((d?.height || 560) - 0 - 560) / 2 + 384 + 128),
                      children: a(K, {
                        __framer__animate: { transition: Y },
                        __framer__animateOnce: !0,
                        __framer__enter: q,
                        __framer__exit: X,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0.5,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-14j75zt-container`,
                        layoutDependency: F,
                        layoutId: `bA8M_IPcX-container`,
                        nodeId: `bA8M_IPcX`,
                        rendersWithMotion: !0,
                        scopeId: `bOG2a_avp`,
                        ...G(
                          {
                            e24ebK_UT: {
                              __framer__styleAppearEffectEnabled: void 0,
                            },
                          },
                          D,
                          j,
                        ),
                        children: a(W, {
                          aU1_lXl6h: `Yes, you can personalise what Gerbo says.`,
                          height: `100%`,
                          id: `bA8M_IPcX`,
                          layoutId: `bA8M_IPcX`,
                          pNqA5B2sU: `Can I customise Gerbo’s greeting?`,
                          style: { width: `100%` },
                          variant: `JO0R9J_PN`,
                          width: `100%`,
                          ...G({ e24ebK_UT: { variant: `R4W2_bOQ7` } }, D, j),
                        }),
                      }),
                    }),
                ],
              }),
            }),
          }),
        });
      })),
      (Ie = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-ugHzL.framer-15ewtxg, .framer-ugHzL .framer-15ewtxg { display: block; }`,
        `.framer-ugHzL.framer-16do2ma { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 467px; }`,
        `.framer-ugHzL .framer-95fk4g-container, .framer-ugHzL .framer-jdw5hd-container, .framer-ugHzL .framer-18inico-container, .framer-ugHzL .framer-ypz0dj-container, .framer-ugHzL .framer-1ckw9sz-container, .framer-ugHzL .framer-afp1hy-container, .framer-ugHzL .framer-n2k7sh-container, .framer-ugHzL .framer-1y299l6-container, .framer-ugHzL .framer-14j75zt-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-ugHzL.framer-v-1kjyf0q.framer-16do2ma { width: 390px; }`,
      ]),
      (Z = D(Fe, Ie, `framer-ugHzL`)),
      (Z.displayName = `Cards/FAQ`),
      (Z.defaultProps = { height: 560, width: 467 }),
      y(Z, {
        variant: {
          options: [`zxaWRW_vh`, `e24ebK_UT`, `gDXH34rqs`, `z2swdyEK1`],
          optionTitles: [
            `Default`,
            `mobile`,
            `services faqs`,
            `service mobile`,
          ],
          title: `Variant`,
          type: h.Enum,
        },
        zfLfLRYav: {
          defaultValue: `What is Gerbo?`,
          displayTextArea: !1,
          title: `question`,
          type: h.String,
        },
        DTAMZgfir: {
          defaultValue: `Gerbo is a 24/7 AI receptionist that answers your calls, captures caller info, and sends you a summary by email or SMS (coming soon).`,
          displayTextArea: !0,
          title: `answer`,
          type: h.String,
        },
        fhsirZjle: {
          defaultValue: `Can I keep my current phone number?`,
          displayTextArea: !1,
          title: `Q2`,
          type: h.String,
        },
        ZuZPN5u2B: {
          defaultValue: `Yes — Gerbo forwards calls and works with your existing line.`,
          displayTextArea: !0,
          title: `ANS2`,
          type: h.String,
        },
        bwiV0XLxn: {
          defaultValue: `Will clients know it’s AI?`,
          displayTextArea: !1,
          title: `Q3`,
          type: h.String,
        },
        q9B7Z8moq: {
          defaultValue: `Not unless you tell them — Gerbo uses a polite, human-sounding African voice. If you'd like you can add an AI disclaimer during the greeting message.`,
          displayTextArea: !0,
          title: `ANS3`,
          type: h.String,
        },
      }),
      v(Z, [{ explicitInter: !0, fonts: [] }, ...Se], {
        supportsExplicitInterCodegen: !0,
      });
  });
function Q(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  $,
  rt = e(() => {
    r(),
      w(),
      f(),
      i(),
      F(),
      oe(),
      B(),
      Le(),
      re(),
      (Re = S(k)),
      (ze = S(Z)),
      (Be = S(P)),
      (Ve = [`y3JAG1yQc`, `beiV_1nSW`, `IgIQPSIL1`, `W1mv7RwJL`, `kjnPukyS8`]),
      (He = `framer-2YUyf`),
      (Ue = {
        beiV_1nSW: `framer-v-1aqeb8v`,
        IgIQPSIL1: `framer-v-a8txdq`,
        kjnPukyS8: `framer-v-yvkiqe`,
        W1mv7RwJL: `framer-v-2v05qc`,
        y3JAG1yQc: `framer-v-18rqbyj`,
      }),
      (We = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ge = {
        opacity: 0.001,
        rotate: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 5,
      }),
      (Ke = {
        damping: 100,
        delay: 0.05,
        mass: 1,
        stiffness: 400,
        type: `spring`,
      }),
      (qe = {
        effect: Ge,
        repeat: !1,
        startDelay: 0.2,
        threshold: 0,
        tokenization: `word`,
        transition: Ke,
        trigger: `onInView`,
        type: `appear`,
      }),
      (Je = {
        damping: 100,
        delay: 0.01,
        mass: 1,
        stiffness: 400,
        type: `spring`,
      }),
      (Ye = {
        effect: Ge,
        repeat: !1,
        startDelay: 0.3,
        threshold: 0,
        tokenization: `word`,
        transition: Je,
        trigger: `onInView`,
        type: `appear`,
      }),
      (Xe = ({ value: e, children: t }) => {
        let n = s(d),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return a(d.Provider, { value: i, children: t });
      }),
      (Ze = p.create(u)),
      (Qe = {
        "service mobile": `kjnPukyS8`,
        "Services faqs": `W1mv7RwJL`,
        Desktop: `y3JAG1yQc`,
        Phone: `IgIQPSIL1`,
        Tablet: `beiV_1nSW`,
      }),
      ($e = ({
        ans1: e,
        aNS2: t,
        aNS3: n,
        height: r,
        id: i,
        q1: a,
        q2: o,
        q3: s,
        width: c,
        ...l
      }) => ({
        ...l,
        AGPm2AHRk:
          n ??
          l.AGPm2AHRk ??
          `Not unless you tell them — Gerbo uses a polite, human-sounding African voice. If you'd like you can add an AI disclaimer during the greeting message.`,
        dZS934Fif: a ?? l.dZS934Fif ?? `What is Gerbo?`,
        IAPDUs2u4: s ?? l.IAPDUs2u4 ?? `Will clients know it’s AI?`,
        kcyoE5fk9:
          e ??
          l.kcyoE5fk9 ??
          `Gerbo is a 24/7 AI receptionist that answers your calls, captures caller info, and sends you a summary by email or SMS (coming soon).`,
        variant: Qe[l.variant] ?? l.variant ?? `y3JAG1yQc`,
        w9fWTdzn9:
          t ??
          l.w9fWTdzn9 ??
          `Yes — Gerbo forwards calls and works with your existing line.`,
        xrBcEsRba: o ?? l.xrBcEsRba ?? `Can I keep my current phone number?`,
      })),
      (et = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (tt = t(function (e, t) {
        let r = o(null),
          i = t ?? r,
          s = n(),
          { activeLocale: c, setLocale: d } = te(),
          f = E(),
          {
            style: h,
            className: v,
            layoutId: y,
            variant: x,
            dZS934Fif: S,
            kcyoE5fk9: C,
            xrBcEsRba: w,
            w9fWTdzn9: T,
            IAPDUs2u4: D,
            AGPm2AHRk: O,
            ...A
          } = $e(e),
          {
            baseVariant: j,
            classNames: M,
            clearLoadingGesture: N,
            gestureHandlers: re,
            gestureVariant: F,
            isLoading: R,
            setGestureState: ie,
            setVariant: ae,
            variants: z,
          } = ne({
            cycleOrder: Ve,
            defaultVariant: `y3JAG1yQc`,
            ref: i,
            variant: x,
            variantClassNames: Ue,
          }),
          B = et(e, z),
          oe = [I, L],
          V = b(He, ...oe);
        return a(ee, {
          id: y ?? s,
          children: a(Ze, {
            animate: z,
            initial: !1,
            children: a(Xe, {
              value: We,
              children: a(p.section, {
                ...A,
                ...re,
                className: b(V, `framer-18rqbyj`, v, M),
                "data-framer-name": `Desktop`,
                layoutDependency: B,
                layoutId: `y3JAG1yQc`,
                ref: i,
                style: {
                  backgroundColor: `var(--token-e4409358-08fe-4ba3-8dc3-7989b447f0b6, rgb(255, 215, 0))`,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  ...h,
                },
                ...Q(
                  {
                    beiV_1nSW: { "data-framer-name": `Tablet` },
                    IgIQPSIL1: { "data-framer-name": `Phone` },
                    kjnPukyS8: { "data-framer-name": `service mobile` },
                    W1mv7RwJL: { "data-framer-name": `Services faqs` },
                  },
                  j,
                  F,
                ),
                children: l(p.div, {
                  className: `framer-7d1lp5`,
                  "data-framer-name": `container`,
                  layoutDependency: B,
                  layoutId: `knzujVpZX`,
                  children: [
                    l(p.div, {
                      className: `framer-652yqv`,
                      "data-framer-name": `heading`,
                      layoutDependency: B,
                      layoutId: `sYcZMPaac`,
                      children: [
                        a(m, {
                          height: 26,
                          y:
                            (f?.y || 0) +
                            100 +
                            (((f?.height || 1022) - 200 - 918.2) / 2 + 0 + 0) +
                            0 +
                            0 +
                            0 +
                            0,
                          ...Q(
                            {
                              beiV_1nSW: {
                                y:
                                  (f?.y || 0) +
                                  100 +
                                  (((f?.height || 200) - 200 - 918.2) / 2 +
                                    0 +
                                    0) +
                                  0 +
                                  0 +
                                  0 +
                                  0,
                              },
                              IgIQPSIL1: {
                                y:
                                  (f?.y || 0) +
                                  80 +
                                  (((f?.height || 1154) - 160 - 1046.2) / 2 +
                                    0 +
                                    0) +
                                  0 +
                                  0 +
                                  0 +
                                  0,
                              },
                              kjnPukyS8: {
                                y:
                                  (f?.y || 0) +
                                  60 +
                                  (((f?.height || 673) - 120 - 1013.2) / 2 +
                                    0 +
                                    0) +
                                  0 +
                                  0 +
                                  0 +
                                  0,
                              },
                              W1mv7RwJL: {
                                y:
                                  (f?.y || 0) +
                                  100 +
                                  (((f?.height || 639) - 200 - 918.2) / 2 +
                                    0 +
                                    0) +
                                  0 +
                                  0 +
                                  0 +
                                  0,
                              },
                            },
                            j,
                            F,
                          ),
                          children: a(_, {
                            className: `framer-1uq5oc4-container`,
                            layoutDependency: B,
                            layoutId: `zO8kjtktC-container`,
                            nodeId: `zO8kjtktC`,
                            rendersWithMotion: !0,
                            scopeId: `SZ3MXol74`,
                            children: a(k, {
                              GJdJmFCj5: `Your Queries, Simplified`,
                              height: `100%`,
                              id: `zO8kjtktC`,
                              JHxom1g1e: `Question`,
                              layoutId: `zO8kjtktC`,
                              width: `100%`,
                            }),
                          }),
                        }),
                        l(p.div, {
                          className: `framer-140237l`,
                          "data-framer-name": `text`,
                          layoutDependency: B,
                          layoutId: `TJzI3APCu`,
                          children: [
                            a(g, {
                              __fromCanvasComponent: !0,
                              children: a(u, {
                                children: a(p.h2, {
                                  className: `framer-styles-preset-1bqbu21`,
                                  "data-styles-preset": `UMunwn2ac`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-1of0zx5, var(--token-37699ec8-6f41-4363-9a8a-9e76d6ead784, rgb(246, 251, 255)))`,
                                  },
                                  children: `Questions? Answers!`,
                                }),
                              }),
                              className: `framer-16sy0mo`,
                              "data-framer-name": `An Exclusive Community for lead generation experts`,
                              effect: qe,
                              fonts: [`Inter`],
                              layoutDependency: B,
                              layoutId: `Ai1tlwVyI`,
                              style: {
                                "--extracted-1of0zx5": `var(--token-37699ec8-6f41-4363-9a8a-9e76d6ead784, rgb(246, 251, 255))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            a(g, {
                              __fromCanvasComponent: !0,
                              children: a(u, {
                                children: a(p.p, {
                                  className: `framer-styles-preset-1khckfh`,
                                  "data-styles-preset": `cH8AiB6P_`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-37699ec8-6f41-4363-9a8a-9e76d6ead784, rgb(246, 251, 255)))`,
                                  },
                                  children: `Find quick answers to the most common questions about our platform`,
                                }),
                              }),
                              className: `framer-chnmpc`,
                              "data-framer-name": `Lead Academy is an academy & community dedicated for lead generation experts & students to share information & grow through collaborative efforts.`,
                              effect: Ye,
                              fonts: [`Inter`],
                              layoutDependency: B,
                              layoutId: `oWpgJS1oC`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-37699ec8-6f41-4363-9a8a-9e76d6ead784, rgb(246, 251, 255))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    l(p.div, {
                      className: `framer-at9qfv`,
                      "data-framer-name": `faq's container`,
                      layoutDependency: B,
                      layoutId: `O_cxqtIGC`,
                      children: [
                        a(m, {
                          height: 560,
                          width: `min(min(${f?.width || `100vw`} - 80px, 1200px), 600px)`,
                          y:
                            (f?.y || 0) +
                            100 +
                            (((f?.height || 1022) - 200 - 918.2) / 2 + 0 + 0) +
                            0 +
                            289.2 +
                            0 +
                            0,
                          ...Q(
                            {
                              beiV_1nSW: {
                                y:
                                  (f?.y || 0) +
                                  100 +
                                  (((f?.height || 200) - 200 - 918.2) / 2 +
                                    0 +
                                    0) +
                                  0 +
                                  289.2 +
                                  0 +
                                  0,
                              },
                              IgIQPSIL1: {
                                width: `min(min(${f?.width || `100vw`} - 36px, 1200px), 600px)`,
                                y:
                                  (f?.y || 0) +
                                  80 +
                                  (((f?.height || 1154) - 160 - 1046.2) / 2 +
                                    0 +
                                    0) +
                                  0 +
                                  289.2 +
                                  0 +
                                  0,
                              },
                              kjnPukyS8: {
                                width: `min(min(${f?.width || `100vw`} - 40px, 1200px), 600px)`,
                                y:
                                  (f?.y || 0) +
                                  60 +
                                  (((f?.height || 673) - 120 - 1013.2) / 2 +
                                    0 +
                                    0) +
                                  0 +
                                  289.2 +
                                  0 +
                                  0,
                              },
                              W1mv7RwJL: {
                                y:
                                  (f?.y || 0) +
                                  100 +
                                  (((f?.height || 639) - 200 - 918.2) / 2 +
                                    0 +
                                    0) +
                                  0 +
                                  289.2 +
                                  0 +
                                  0,
                              },
                            },
                            j,
                            F,
                          ),
                          children: a(_, {
                            className: `framer-10y28p-container`,
                            "data-framer-name": `FAQs`,
                            layoutDependency: B,
                            layoutId: `lSY7PkLzU-container`,
                            name: `FAQs`,
                            nodeId: `lSY7PkLzU`,
                            rendersWithMotion: !0,
                            scopeId: `SZ3MXol74`,
                            children: a(Z, {
                              bwiV0XLxn: `Will clients know it’s AI?`,
                              DTAMZgfir: `Gerbo is a 24/7 AI receptionist that answers your calls, captures caller info, and sends you a summary by email or SMS (coming soon).`,
                              fhsirZjle: `Can I keep my current phone number?`,
                              height: `100%`,
                              id: `lSY7PkLzU`,
                              layoutId: `lSY7PkLzU`,
                              name: `FAQs`,
                              q9B7Z8moq: `Not unless you tell them — Gerbo uses a polite, human-sounding African voice. If you'd like you can add an AI disclaimer during the greeting message.`,
                              style: { width: `100%` },
                              variant: `zxaWRW_vh`,
                              width: `100%`,
                              zfLfLRYav: `What is Gerbo?`,
                              ZuZPN5u2B: `Yes — Gerbo forwards calls and works with your existing line.`,
                              ...Q(
                                {
                                  IgIQPSIL1: { variant: `e24ebK_UT` },
                                  kjnPukyS8: {
                                    bwiV0XLxn: D,
                                    DTAMZgfir: C,
                                    fhsirZjle: w,
                                    q9B7Z8moq: O,
                                    variant: `z2swdyEK1`,
                                    zfLfLRYav: S,
                                    ZuZPN5u2B: T,
                                  },
                                  W1mv7RwJL: {
                                    bwiV0XLxn: D,
                                    DTAMZgfir: C,
                                    fhsirZjle: w,
                                    q9B7Z8moq: O,
                                    variant: `gDXH34rqs`,
                                    zfLfLRYav: S,
                                    ZuZPN5u2B: T,
                                  },
                                },
                                j,
                                F,
                              ),
                            }),
                          }),
                        }),
                        l(p.div, {
                          className: `framer-1d42d4g`,
                          "data-framer-name": `text`,
                          layoutDependency: B,
                          layoutId: `bVOdcGqze`,
                          style: {
                            borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 8,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                          },
                          children: [
                            a(m, {
                              children: a(_, {
                                className: `framer-6wwd2e-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                layoutDependency: B,
                                layoutId: `Q4xyolCt3-container`,
                                nodeId: `Q4xyolCt3`,
                                rendersWithMotion: !0,
                                scopeId: `SZ3MXol74`,
                                children: a(P, {
                                  color: `var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(14, 28, 41))`,
                                  height: `100%`,
                                  iconSearch: `House`,
                                  iconSelection: `EnvelopeOpen`,
                                  id: `Q4xyolCt3`,
                                  layoutId: `Q4xyolCt3`,
                                  mirrored: !1,
                                  selectByList: !0,
                                  style: { height: `100%`, width: `100%` },
                                  weight: `regular`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                            a(g, {
                              __fromCanvasComponent: !0,
                              children: a(u, {
                                children: a(p.p, {
                                  className: `framer-styles-preset-1khckfh`,
                                  "data-styles-preset": `cH8AiB6P_`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-37699ec8-6f41-4363-9a8a-9e76d6ead784, rgb(246, 251, 255)))`,
                                  },
                                  children: `Feel free to mail us for any enquiries :  support@gerbospeaks.com`,
                                }),
                              }),
                              className: `framer-pa2vv`,
                              fonts: [`Inter`],
                              layoutDependency: B,
                              layoutId: `MXooZXC2K`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-37699ec8-6f41-4363-9a8a-9e76d6ead784, rgb(246, 251, 255))`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (nt = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-2YUyf.framer-ng6nsj, .framer-2YUyf .framer-ng6nsj { display: block; }`,
        `.framer-2YUyf.framer-18rqbyj { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 100px 40px 100px 40px; position: relative; width: 1200px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-2YUyf .framer-7d1lp5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 44px; height: min-content; justify-content: flex-start; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-2YUyf .framer-652yqv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 640px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-2YUyf .framer-1uq5oc4-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-2YUyf .framer-140237l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-2YUyf .framer-16sy0mo { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 2; }`,
        `.framer-2YUyf .framer-chnmpc { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-2YUyf .framer-at9qfv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 600px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-2YUyf .framer-10y28p-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-2YUyf .framer-1d42d4g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 6px 12px 6px 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-2YUyf .framer-6wwd2e-container { flex: none; height: 25px; position: relative; width: 25px; }`,
        `.framer-2YUyf .framer-pa2vv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-2YUyf.framer-v-1aqeb8v.framer-18rqbyj { width: 810px; }`,
        `.framer-2YUyf.framer-v-a8txdq.framer-18rqbyj { padding: 80px 18px 80px 18px; width: 390px; }`,
        `.framer-2YUyf.framer-v-a8txdq .framer-1d42d4g { flex-direction: column; width: 100%; }`,
        `.framer-2YUyf.framer-v-a8txdq .framer-pa2vv { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-2YUyf.framer-v-yvkiqe.framer-18rqbyj { padding: 60px 20px 60px 20px; width: 390px; }`,
        `.framer-2YUyf.framer-v-yvkiqe .framer-1d42d4g { width: 100%; }`,
        `.framer-2YUyf.framer-v-yvkiqe .framer-pa2vv { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        ...R,
        ...ie,
      ]),
      ($ = D(tt, nt, `framer-2YUyf`)),
      ($.displayName = `Faq's section`),
      ($.defaultProps = { height: 1022, width: 1200 }),
      y($, {
        variant: {
          options: [
            `y3JAG1yQc`,
            `beiV_1nSW`,
            `IgIQPSIL1`,
            `W1mv7RwJL`,
            `kjnPukyS8`,
          ],
          optionTitles: [
            `Desktop`,
            `Tablet`,
            `Phone`,
            `Services faqs`,
            `service mobile`,
          ],
          title: `Variant`,
          type: h.Enum,
        },
        dZS934Fif: {
          defaultValue: `What is Gerbo?`,
          displayTextArea: !1,
          title: `Q1`,
          type: h.String,
        },
        kcyoE5fk9: {
          defaultValue: `Gerbo is a 24/7 AI receptionist that answers your calls, captures caller info, and sends you a summary by email or SMS (coming soon).`,
          displayTextArea: !0,
          title: `Ans1`,
          type: h.String,
        },
        xrBcEsRba: {
          defaultValue: `Can I keep my current phone number?`,
          displayTextArea: !1,
          title: `Q 2`,
          type: h.String,
        },
        w9fWTdzn9: {
          defaultValue: `Yes — Gerbo forwards calls and works with your existing line.`,
          displayTextArea: !0,
          title: `ANS 2`,
          type: h.String,
        },
        IAPDUs2u4: {
          defaultValue: `Will clients know it’s AI?`,
          displayTextArea: !1,
          title: `Q 3`,
          type: h.String,
        },
        AGPm2AHRk: {
          defaultValue: `Not unless you tell them — Gerbo uses a polite, human-sounding African voice. If you'd like you can add an AI disclaimer during the greeting message.`,
          displayTextArea: !0,
          title: `ANS 3`,
          type: h.String,
        },
      }),
      v(
        $,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Re,
          ...ze,
          ...Be,
          ...C(ae),
          ...C(z),
        ],
        { supportsExplicitInterCodegen: !0 },
      );
  });
export {
  $ as FramerSZ3MXol74,
  U as className,
  H as css,
  V as fonts,
  rt as init_SZ3MXol74,
  se as init_cH8AiB6P_,
};
//# sourceMappingURL=SZ3MXol74.X5b6_X4q.mjs.map
