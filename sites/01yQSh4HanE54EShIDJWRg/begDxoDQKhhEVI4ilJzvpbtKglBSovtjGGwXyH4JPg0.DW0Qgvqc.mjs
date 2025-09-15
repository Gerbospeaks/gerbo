import { __esmMin as e } from "./rolldown-runtime.wPLyQg-T.mjs";
import {
  Y as t,
  ae as n,
  init_jsx_runtime as r,
  init_npm_react_18_2 as i,
  l as a,
  p as o,
  pe as s,
  re as c,
  se as ee,
  u as l,
  x as u,
} from "./react.Cd8yx0tA.mjs";
import {
  LayoutGroup as d,
  MotionConfigContext as f,
  init_framer_motion_5EXT2AMG as p,
  motion as m,
} from "./motion.BvMEYU-E.mjs";
import {
  ChildrenCanSuspend as h,
  ComponentViewportProvider as g,
  Container as _,
  ControlType as v,
  GeneratedComponentContext as te,
  Image2 as y,
  Link as ne,
  PathVariablesContext as b,
  PropertyOverrides2 as x,
  ResolveLinks as S,
  RichText as C,
  SmartComponentScopedContainer as re,
  addFonts as w,
  addPropertyControls as T,
  cx as E,
  getFonts as D,
  getFontsFromSharedStyle as O,
  getLoadingLazyAtYPosition as ie,
  init_framer_MRKGI23E as ae,
  useComponentViewport as oe,
  useCustomCursors as se,
  useHydratedBreakpointVariants as k,
  useIsOnFramerCanvas as ce,
  useLocaleCode as le,
  useLocaleInfo as ue,
  useMetadata as de,
  useQueryData as A,
  useRouteElementId as j,
  useRouter as fe,
  useVariantState as pe,
  withCSS as M,
  withOptimizedAppearEffect as me,
  withVariantAppearEffect as he,
} from "./framer.DERDik75.mjs";
import {
  BlurGradient as ge,
  FramerdxyZfrxNk as N,
  init_BlurGradient_Prod as _e,
  init_dxyZfrxNk as ve,
} from "./dxyZfrxNk.sig2bmLO.mjs";
import {
  FramerYwA1diXfH as P,
  FramerbVvbBzZqE as F,
  FramerlicEmhkfK as I,
  Icon$1 as L,
  className$2 as ye,
  css$2 as R,
  fonts$2 as be,
  init_C0wa976Zp as xe,
  init_Phosphor as Se,
  init_YwA1diXfH as Ce,
  init_bVvbBzZqE as we,
  init_licEmhkfK as z,
} from "./shared-lib.BgYLzAGg.mjs";
import {
  className as Te,
  className$1 as Ee,
  css as De,
  css$1 as Oe,
  fonts as ke,
  fonts$1 as Ae,
  init_UMunwn2ac as je,
  init_cH8AiB6P_ as Me,
} from "./UMunwn2ac.C0Obwu4t.mjs";
import {
  className as Ne,
  className$1 as Pe,
  css as Fe,
  css$1 as Ie,
  fonts as Le,
  fonts$1 as Re,
  init_Z4rzRSIez as ze,
  init_pdnK4tFIz as Be,
} from "./Z4rzRSIez.B9wmqB7A.mjs";
import { R as Ve, init_sS_XZEOTg as He } from "./sS_XZEOTg.CdCOkZdn.mjs";
import { init_IGP28tJuK as Ue, metadata as We } from "./IGP28tJuK.DhrXBWmw.mjs";
function B(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var Ge,
  V,
  Ke,
  qe,
  Je,
  H,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  U,
  nt = e(() => {
    r(),
      ae(),
      p(),
      i(),
      Se(),
      xe(),
      Be(),
      (Ge = D(L)),
      (V = [`LUh2Q4GhW`, `DBpCDSPOR`]),
      (Ke = `framer-Tc6X5`),
      (qe = { DBpCDSPOR: `framer-v-15xzw72`, LUh2Q4GhW: `framer-v-1ebh131` }),
      (Je = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (H = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Ye = ({ value: e, children: t }) => {
        let n = c(f),
          r = e ?? n.transition,
          i = ee(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return o(f.Provider, { value: i, children: t });
      }),
      (Xe = m.create(u)),
      (Ze = { Desktop: `LUh2Q4GhW`, mobile: `DBpCDSPOR` }),
      (Qe = ({
        date2: e,
        height: t,
        id: n,
        image2: r,
        link: i,
        text: a,
        title: o,
        width: s,
        ...c
      }) => ({
        ...c,
        c4AK864bv: i ?? c.c4AK864bv,
        FwFmAmgF5: o ?? c.FwFmAmgF5 ?? `Getting Started`,
        mdvBANxvV: r ?? c.mdvBANxvV,
        mmVlhirNw:
          a ??
          c.mmVlhirNw ??
          `An honest look at the real-world differences between these camera systems to help choose right`,
        variant: Ze[c.variant] ?? c.variant ?? `LUh2Q4GhW`,
        XnxmlS2C5: e ?? c.XnxmlS2C5 ?? `20th August 1947`,
      })),
      ($e = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (et = t(function (e, t) {
        let r = s(null),
          i = t ?? r,
          a = n(),
          { activeLocale: c, setLocale: ee } = ue(),
          f = oe(),
          {
            style: p,
            className: h,
            layoutId: _,
            variant: v,
            FwFmAmgF5: te,
            mmVlhirNw: b,
            XnxmlS2C5: x,
            mdvBANxvV: S,
            c4AK864bv: w,
            ...T
          } = Qe(e),
          {
            baseVariant: D,
            classNames: O,
            clearLoadingGesture: ae,
            gestureHandlers: se,
            gestureVariant: k,
            isLoading: ce,
            setGestureState: le,
            setVariant: de,
            variants: A,
          } = pe({
            cycleOrder: V,
            defaultVariant: `LUh2Q4GhW`,
            ref: i,
            variant: v,
            variantClassNames: qe,
          }),
          j = $e(e, A),
          fe = [Pe, ye],
          M = E(Ke, ...fe);
        return o(d, {
          id: _ ?? a,
          children: o(Xe, {
            animate: A,
            initial: !1,
            children: o(Ye, {
              value: Je,
              children: o(ne, {
                href: w,
                motionChild: !0,
                nodeId: `LUh2Q4GhW`,
                openInNewTab: !1,
                scopeId: `OyUwtnXbq`,
                children: o(m.a, {
                  ...T,
                  ...se,
                  className: `${E(M, `framer-1ebh131`, h, O)} framer-66lx13`,
                  "data-framer-name": `Desktop`,
                  layoutDependency: j,
                  layoutId: `LUh2Q4GhW`,
                  ref: i,
                  style: {
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    ...p,
                  },
                  ...B({ DBpCDSPOR: { "data-framer-name": `mobile` } }, D, k),
                  children: l(m.div, {
                    className: `framer-u6itit`,
                    "data-framer-name": `Blog card`,
                    layoutDependency: j,
                    layoutId: `ohJxtI7To`,
                    style: {
                      backgroundColor: `var(--token-b67fe1f1-1548-462b-9909-4955e80aefdd, rgb(255, 255, 255))`,
                      borderBottomLeftRadius: 16,
                      borderBottomRightRadius: 16,
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                      boxShadow: `0px 0.7065919983928324px 0.7065919983928324px -0.29166666666666663px rgba(16, 49, 77, 0.05), 0px 1.8065619053231785px 1.8065619053231785px -0.5833333333333333px rgba(16, 49, 77, 0.06), 0px 3.6217592146567767px 3.6217592146567767px -0.875px rgba(16, 49, 77, 0.06), 0px 6.8655999097303715px 6.8655999097303715px -1.1666666666666665px rgba(16, 49, 77, 0.06), 0px 13.646761411524492px 13.646761411524492px -1.4583333333333335px rgba(16, 49, 77, 0.07), 0px 30px 30px -1.75px rgba(16, 49, 77, 0.1)`,
                    },
                    children: [
                      o(y, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          pixelHeight: 853,
                          pixelWidth: 1280,
                          sizes: `calc(${f?.width || `100vw`} - 20px)`,
                          ...H(S),
                        },
                        className: `framer-9lzdps`,
                        "data-framer-name": `Cover mage`,
                        layoutDependency: j,
                        layoutId: `lNGCxKRoy`,
                        style: {
                          borderBottomLeftRadius: 16,
                          borderBottomRightRadius: 16,
                          borderTopLeftRadius: 16,
                          borderTopRightRadius: 16,
                        },
                        ...B(
                          {
                            DBpCDSPOR: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: ie((f?.y || 0) + 0 + 0 + 10 + 0),
                                pixelHeight: 853,
                                pixelWidth: 1280,
                                sizes: `calc(${f?.width || `100vw`} - 20px)`,
                                ...H(S),
                              },
                            },
                          },
                          D,
                          k,
                        ),
                      }),
                      l(m.div, {
                        className: `framer-1631jge`,
                        "data-framer-name": `Text wrapper`,
                        layoutDependency: j,
                        layoutId: `Y2YIUfbTq`,
                        children: [
                          l(m.div, {
                            className: `framer-bc6phk`,
                            "data-framer-name": `Heading wrapper`,
                            layoutDependency: j,
                            layoutId: `KvO9ZazQA`,
                            children: [
                              o(C, {
                                __fromCanvasComponent: !0,
                                children: o(u, {
                                  children: o(m.h3, {
                                    style: {
                                      "--font-selector": `RlI7SW50ZXJEaXNwbGF5LU1lZGl1bQ==`,
                                      "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                      "--framer-font-size": `38px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `-0.05em`,
                                      "--framer-line-height": `1.35em`,
                                      "--framer-text-color": `var(--extracted-a0htzi, var(--token-6d32415f-d2df-42c5-8d22-2d797a5483e9, rgb(13, 13, 13)))`,
                                    },
                                    children: `Here's how to decorate your new home from scratch`,
                                  }),
                                }),
                                className: `framer-1tln0f2`,
                                fonts: [`FR;InterDisplay-Medium`],
                                layoutDependency: j,
                                layoutId: `JSZPhVQIP`,
                                style: {
                                  "--extracted-a0htzi": `var(--token-6d32415f-d2df-42c5-8d22-2d797a5483e9, rgb(13, 13, 13))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: te,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...B(
                                  {
                                    DBpCDSPOR: {
                                      children: o(u, {
                                        children: o(m.h4, {
                                          className: `framer-styles-preset-8b8zds`,
                                          "data-styles-preset": `pdnK4tFIz`,
                                          children: `Getting Started`,
                                        }),
                                      }),
                                      fonts: [`Inter`],
                                    },
                                  },
                                  D,
                                  k,
                                ),
                              }),
                              o(C, {
                                __fromCanvasComponent: !0,
                                children: o(u, {
                                  children: o(m.p, {
                                    style: {
                                      "--font-selector": `RlM7U2F0b3NoaS1tZWRpdW0=`,
                                      "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `-0.035em`,
                                      "--framer-line-height": `1.5em`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6ee056fb-5493-438f-9484-6028bb987987, rgb(120, 120, 120)))`,
                                    },
                                    children: `An honest look at the real-world differences between these camera systems to help choose right`,
                                  }),
                                }),
                                className: `framer-tc6x5p`,
                                fonts: [`FS;Satoshi-medium`],
                                layoutDependency: j,
                                layoutId: `Z9X4YM7vj`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-6ee056fb-5493-438f-9484-6028bb987987, rgb(120, 120, 120))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: b,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          o(m.div, {
                            className: `framer-6b5f19`,
                            "data-framer-name": `Tags wrapper`,
                            layoutDependency: j,
                            layoutId: `egPd19SS3`,
                            children: l(m.div, {
                              className: `framer-14sb2vj`,
                              "data-framer-name": `Date`,
                              layoutDependency: j,
                              layoutId: `VfE0k4Y6n`,
                              children: [
                                o(g, {
                                  children: o(re, {
                                    className: `framer-xio1dn-container`,
                                    "data-framer-name": `Icon`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    layoutDependency: j,
                                    layoutId: `b8VKr_mte-container`,
                                    name: `Icon`,
                                    nodeId: `b8VKr_mte`,
                                    rendersWithMotion: !0,
                                    scopeId: `OyUwtnXbq`,
                                    children: o(L, {
                                      color: `var(--token-b117cc23-f396-4ab8-a505-eab65f462446, rgb(94, 94, 94))`,
                                      height: `100%`,
                                      iconSearch: `calendar`,
                                      iconSelection: `House`,
                                      id: `b8VKr_mte`,
                                      layoutId: `b8VKr_mte`,
                                      mirrored: !1,
                                      name: `Icon`,
                                      selectByList: !1,
                                      style: { height: `100%`, width: `100%` },
                                      weight: `regular`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                                o(C, {
                                  __fromCanvasComponent: !0,
                                  children: o(u, {
                                    children: o(m.p, {
                                      style: {
                                        "--font-selector": `RlM7U2F0b3NoaS1tZWRpdW0=`,
                                        "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                        "--framer-font-size": `14px`,
                                        "--framer-font-weight": `500`,
                                        "--framer-letter-spacing": `-0.03em`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b117cc23-f396-4ab8-a505-eab65f462446, rgb(94, 94, 94)))`,
                                      },
                                      children: `20th August 1947`,
                                    }),
                                  }),
                                  className: `framer-1mpbg3e`,
                                  fonts: [`FS;Satoshi-medium`],
                                  layoutDependency: j,
                                  layoutId: `khnDl9Yhq`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-b117cc23-f396-4ab8-a505-eab65f462446, rgb(94, 94, 94))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: x,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...B(
                                    {
                                      DBpCDSPOR: {
                                        children: o(u, {
                                          children: o(m.p, {
                                            className: `framer-styles-preset-1y7m99z`,
                                            "data-styles-preset": `C0wa976Zp`,
                                            children: `20th August 1947`,
                                          }),
                                        }),
                                        fonts: [`Inter`],
                                      },
                                    },
                                    D,
                                    k,
                                  ),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          }),
        });
      })),
      (tt = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-Tc6X5.framer-66lx13, .framer-Tc6X5 .framer-66lx13 { display: block; }`,
        `.framer-Tc6X5.framer-1ebh131 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: wrap; gap: 30px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; text-decoration: none; width: 1056px; }`,
        `.framer-Tc6X5 .framer-u6itit { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: wrap; gap: 38px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 10px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Tc6X5 .framer-9lzdps { flex: 1 0 0px; gap: 10px; height: 380px; overflow: hidden; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Tc6X5 .framer-1631jge { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 28px 0px 0px; position: relative; width: 1px; }`,
        `.framer-Tc6X5 .framer-bc6phk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Tc6X5 .framer-1tln0f2 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Tc6X5 .framer-tc6x5p { flex: none; height: auto; max-width: 400px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Tc6X5 .framer-6b5f19 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Tc6X5 .framer-14sb2vj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-Tc6X5 .framer-xio1dn-container { flex: none; height: 16px; position: relative; width: 16px; }`,
        `.framer-Tc6X5 .framer-1mpbg3e { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Tc6X5.framer-v-15xzw72.framer-1ebh131 { flex-direction: column; width: 315px; }`,
        `.framer-Tc6X5.framer-v-15xzw72 .framer-u6itit { flex: none; flex-direction: column; padding: 10px 10px 30px 10px; width: 100%; }`,
        `.framer-Tc6X5.framer-v-15xzw72 .framer-9lzdps { flex: none; height: 162px; width: 100%; }`,
        `.framer-Tc6X5.framer-v-15xzw72 .framer-1631jge { flex: none; width: 100%; }`,
        `.framer-Tc6X5.framer-v-15xzw72 .framer-bc6phk { gap: 4px; }`,
        ...Ie,
        ...R,
      ]),
      (U = M(et, tt, `framer-Tc6X5`)),
      (U.displayName = `blog items`),
      (U.defaultProps = { height: 400, width: 1056 }),
      T(U, {
        variant: {
          options: [`LUh2Q4GhW`, `DBpCDSPOR`],
          optionTitles: [`Desktop`, `mobile`],
          title: `Variant`,
          type: v.Enum,
        },
        FwFmAmgF5: {
          defaultValue: `Getting Started`,
          title: `Title`,
          type: v.String,
        },
        mmVlhirNw: {
          defaultValue: `An honest look at the real-world differences between these camera systems to help choose right`,
          displayTextArea: !1,
          title: `Text`,
          type: v.String,
        },
        XnxmlS2C5: {
          defaultValue: `20th August 1947`,
          displayTextArea: !1,
          title: `Date 2`,
          type: v.String,
        },
        mdvBANxvV: { title: `Image 2`, type: v.ResponsiveImage },
        c4AK864bv: { title: `Link`, type: v.Link },
      }),
      w(
        U,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/assets/ePuN3mCjzajIHnyCdvKBFiZkyY0.woff2`,
                weight: `500`,
              },
              {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/assets/V3j1L0o5vPFKe26Sw4HcpXCfHo.woff2`,
                weight: `500`,
              },
              {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/assets/F3kdpd2N0cToWV5huaZjjgM.woff2`,
                weight: `500`,
              },
              {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `/assets/0iDmxkizU9goZoclqIqsV5rvETU.woff2`,
                weight: `500`,
              },
              {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/assets/r0mv3NegmA0akcQsNFotG32Las.woff2`,
                weight: `500`,
              },
              {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/assets/iwWTDc49ENF2tCHbqlNARXw6Ug.woff2`,
                weight: `500`,
              },
              {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/assets/Ii21jnSJkulBKsHHXKlapi7fv9w.woff2`,
                weight: `500`,
              },
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
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
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
                family: `Satoshi`,
                source: `fontshare`,
                style: `normal`,
                url: `/third-party-assets/fontshare/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2`,
                weight: `500`,
              },
            ],
          },
          ...Ge,
          ...O(Re),
          ...O(be),
        ],
        { supportsExplicitInterCodegen: !0 },
      );
  }),
  rt,
  it,
  at,
  ot,
  st,
  W,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  G,
  gt,
  K,
  _t,
  q,
  vt,
  yt,
  J,
  Y,
  X,
  bt,
  xt,
  Z,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Q,
  $,
  Nt = e(() => {
    r(),
      ae(),
      p(),
      i(),
      _e(),
      we(),
      ve(),
      z(),
      nt(),
      Ce(),
      He(),
      Me(),
      je(),
      ze(),
      Ue(),
      (rt = D(P)),
      (it = he(P)),
      (at = D(N)),
      (ot = D(U)),
      (st = D(F)),
      (W = me(_)),
      (ct = me(m.div)),
      (lt = D(I)),
      (ut = D(ge)),
      (dt = {
        CO9mlq9gw: `(min-width: 810px) and (max-width: 1199.98px)`,
        SUtWMQRpC: `(min-width: 1200px)`,
        y6NRjWPnp: `(max-width: 809.98px)`,
      }),
      (ft = () => typeof document < `u`),
      (pt = `framer-7K9XB`),
      (mt = {
        CO9mlq9gw: `framer-v-16wg92d`,
        SUtWMQRpC: `framer-v-1n7grur`,
        y6NRjWPnp: `framer-v-cvzrj5`,
      }),
      (ht = (e, t) => `translateX(-50%) ${t}`),
      (G = {
        opacity: 0.001,
        rotate: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 5,
      }),
      (gt = {
        damping: 100,
        delay: 0.05,
        mass: 1,
        stiffness: 400,
        type: `spring`,
      }),
      (K = {
        effect: G,
        repeat: !1,
        startDelay: 0.2,
        threshold: 0,
        tokenization: `word`,
        transition: gt,
        trigger: `onInView`,
        type: `appear`,
      }),
      (_t = {
        damping: 100,
        delay: 0.01,
        mass: 1,
        stiffness: 400,
        type: `spring`,
      }),
      (q = {
        effect: G,
        repeat: !1,
        startDelay: 0.3,
        threshold: 0,
        tokenization: `word`,
        transition: _t,
        trigger: `onInView`,
        type: `appear`,
      }),
      (vt = (e, t, n) => {
        if (typeof e != `string`) return ``;
        let r = new Date(e);
        if (isNaN(r.getTime())) return ``;
        let i = `en-US`;
        try {
          return r.toLocaleString(n || i, t);
        } catch {
          return r.toLocaleString(i, t);
        }
      }),
      (yt = { dateStyle: `medium`, timeZone: `UTC` }),
      (J = (e, t) => vt(e, yt, t)),
      (Y = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (X = ({ query: e, pageSize: t, children: n }) => {
        let r = A(e);
        return n(r);
      }),
      (bt = { damping: 40, delay: 1, mass: 1, stiffness: 200, type: `spring` }),
      (xt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: bt,
        x: 0,
        y: 0,
      }),
      (Z = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: -12,
        y: 0,
      }),
      (St = {
        damping: 40,
        delay: 1.1,
        mass: 1,
        stiffness: 200,
        type: `spring`,
      }),
      (Ct = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: St,
        x: 0,
        y: 0,
      }),
      (wt = (e, t) => `translateY(-50%) ${t}`),
      (Tt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Et = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Tt,
        x: 0,
        y: 0,
      }),
      (Dt = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 150,
        y: 0,
      }),
      (Ot = ({ value: e }) => {
        let t = ce();
        return t
          ? null
          : o(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            });
      }),
      (kt = { Desktop: `SUtWMQRpC`, Phone: `y6NRjWPnp`, Tablet: `CO9mlq9gw` }),
      (At = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: kt[r.variant] ?? r.variant ?? `SUtWMQRpC`,
      })),
      (jt = t(function (e, t) {
        let r = s(null),
          i = t ?? r,
          c = n(),
          { activeLocale: f, setLocale: p } = ue(),
          v = oe(),
          {
            style: ne,
            className: re,
            layoutId: w,
            variant: T,
            zHEZZmHJxMUpnTt3r1: D,
            qD_Cz8fLfMUpnTt3r1: O,
            IZpKwAVehMUpnTt3r1: ie,
            LS8OlH3UaMUpnTt3r1: ae,
            m1Lgae9gSMUpnTt3r1: ce,
            idMUpnTt3r1: A,
            zHEZZmHJxnfUSjL5BG: pe,
            qD_Cz8fLfnfUSjL5BG: M,
            IZpKwAVehnfUSjL5BG: me,
            LS8OlH3UanfUSjL5BG: he,
            m1Lgae9gSnfUSjL5BG: _e,
            idnfUSjL5BG: ve,
            otDYG9r4p: P,
            ...L
          } = At(e),
          ye = ee(() => We(void 0, f), [void 0, f]);
        de(ye);
        let [R, be] = k(T, dt, !1),
          xe = [Ne, Ee, Te],
          Se = E(pt, ...xe),
          Ce = j(`QgW8DgCR7`),
          we = s(null),
          z = le();
        fe();
        let De = j(`BWIc5vHYJ`),
          Oe = s(null),
          ke = () => !!(!ft() || [`CO9mlq9gw`, `y6NRjWPnp`].includes(R)),
          Ae = j(`C3qShFP61`),
          je = s(null);
        return (
          se({}),
          o(te.Provider, {
            value: { primaryVariantId: `SUtWMQRpC`, variantClassNames: mt },
            children: l(d, {
              id: w ?? c,
              children: [
                o(Ot, {
                  value: `html body { background: rgb(255, 255, 255); }`,
                }),
                l(m.div, {
                  ...L,
                  className: E(Se, `framer-1n7grur`, re),
                  ref: i,
                  style: { ...ne },
                  children: [
                    o(g, {
                      height: 62,
                      y: 10,
                      children: o(_, {
                        className: `framer-dmvq4a-container`,
                        layoutScroll: !0,
                        nodeId: `GRWA2BzyY`,
                        rendersWithMotion: !0,
                        scopeId: `IGP28tJuK`,
                        transformTemplate: ht,
                        children: o(x, {
                          breakpoint: R,
                          overrides: {
                            CO9mlq9gw: { variant: `JiVdFNcDQ` },
                            y6NRjWPnp: { variant: `rqcL3VnZ6` },
                          },
                          children: o(it, {
                            __framer__animateOnce: !1,
                            __framer__threshold: 0,
                            __framer__variantAppearEffectEnabled: !0,
                            height: `100%`,
                            id: `GRWA2BzyY`,
                            layoutId: `GRWA2BzyY`,
                            variant: `eaBCOesTw`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    o(`div`, {
                      className: `framer-1arb6tr`,
                      "data-framer-name": `bg color`,
                    }),
                    l(`div`, {
                      className: `framer-19a44n3`,
                      "data-framer-name": `Content`,
                      children: [
                        l(`div`, {
                          className: `framer-klfwg0`,
                          "data-framer-name": `heading`,
                          id: Ce,
                          ref: we,
                          children: [
                            o(g, {
                              height: 26,
                              children: o(_, {
                                className: `framer-fwezk0-container`,
                                nodeId: `PF909tBk0`,
                                scopeId: `IGP28tJuK`,
                                children: o(N, {
                                  GJdJmFCj5: `Blogs`,
                                  height: `100%`,
                                  id: `PF909tBk0`,
                                  JHxom1g1e: `Phone`,
                                  layoutId: `PF909tBk0`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                            l(`div`, {
                              className: `framer-jlfv7d`,
                              "data-framer-name": `text`,
                              children: [
                                o(C, {
                                  __fromCanvasComponent: !0,
                                  children: o(u, {
                                    children: l(`h1`, {
                                      className: `framer-styles-preset-bdsobh`,
                                      "data-styles-preset": `Z4rzRSIez`,
                                      children: [
                                        `Gerbo Blog: `,
                                        o(`br`, {}),
                                        `Lead Capture, Tools & Tips`,
                                      ],
                                    }),
                                  }),
                                  className: `framer-lhvrx4`,
                                  "data-framer-name": `An Exclusive Community for lead generation experts`,
                                  effect: K,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                o(C, {
                                  __fromCanvasComponent: !0,
                                  children: o(u, {
                                    children: o(`p`, {
                                      className: `framer-styles-preset-1khckfh`,
                                      "data-styles-preset": `cH8AiB6P_`,
                                      children: `Tips, ideas, and guidance on how to stop losing leads, save time, and grow with smart call answering, powered by AI and built for SA businesses.`,
                                    }),
                                  }),
                                  className: `framer-pkbsqy`,
                                  "data-framer-name": `Lead Academy is an academy & community dedicated for lead generation experts & students to share information & grow through collaborative efforts.`,
                                  effect: q,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                        o(`div`, {
                          className: `framer-gpy7ko`,
                          children: o(h, {
                            children: o(X, {
                              query: {
                                from: {
                                  alias: `MUpnTt3r1`,
                                  data: Ve,
                                  type: `Collection`,
                                },
                                limit: { type: `LiteralValue`, value: 1 },
                                offset: { type: `LiteralValue`, value: 0 },
                                select: [
                                  {
                                    collection: `MUpnTt3r1`,
                                    name: `zHEZZmHJx`,
                                    type: `Identifier`,
                                  },
                                  {
                                    collection: `MUpnTt3r1`,
                                    name: `qD_Cz8fLf`,
                                    type: `Identifier`,
                                  },
                                  {
                                    collection: `MUpnTt3r1`,
                                    name: `IZpKwAVeh`,
                                    type: `Identifier`,
                                  },
                                  {
                                    collection: `MUpnTt3r1`,
                                    name: `LS8OlH3Ua`,
                                    type: `Identifier`,
                                  },
                                  {
                                    collection: `MUpnTt3r1`,
                                    name: `m1Lgae9gS`,
                                    type: `Identifier`,
                                  },
                                  {
                                    collection: `MUpnTt3r1`,
                                    name: `id`,
                                    type: `Identifier`,
                                  },
                                ],
                              },
                              children: (e, t, n) =>
                                o(a, {
                                  children: e?.map(
                                    (
                                      {
                                        id: e,
                                        IZpKwAVeh: t,
                                        LS8OlH3Ua: n,
                                        m1Lgae9gS: r,
                                        qD_Cz8fLf: i,
                                        zHEZZmHJx: a,
                                      },
                                      s,
                                    ) => (
                                      (a ??= ``),
                                      (i ??= ``),
                                      (r ??= ``),
                                      o(
                                        d,
                                        {
                                          id: `MUpnTt3r1-${e}`,
                                          children: o(b.Provider, {
                                            value: { m1Lgae9gS: r },
                                            children: o(S, {
                                              links: [
                                                {
                                                  href: {
                                                    pathVariables: {
                                                      m1Lgae9gS: r,
                                                    },
                                                    webPageId: `GV_hvvJfU`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    pathVariables: {
                                                      m1Lgae9gS: r,
                                                    },
                                                    webPageId: `GV_hvvJfU`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    pathVariables: {
                                                      m1Lgae9gS: r,
                                                    },
                                                    webPageId: `GV_hvvJfU`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                              ],
                                              children: (e) =>
                                                o(g, {
                                                  height: 400,
                                                  width: `min(${v?.width || `100vw`}, 1200px)`,
                                                  children: o(_, {
                                                    className: `framer-qalnj6-container`,
                                                    nodeId: `A2EGLUIiv`,
                                                    scopeId: `IGP28tJuK`,
                                                    children: o(x, {
                                                      breakpoint: R,
                                                      overrides: {
                                                        CO9mlq9gw: {
                                                          c4AK864bv: e[1],
                                                        },
                                                        y6NRjWPnp: {
                                                          c4AK864bv: e[2],
                                                          variant: `DBpCDSPOR`,
                                                        },
                                                      },
                                                      children: o(U, {
                                                        c4AK864bv: e[0],
                                                        FwFmAmgF5: a,
                                                        height: `100%`,
                                                        id: `A2EGLUIiv`,
                                                        layoutId: `A2EGLUIiv`,
                                                        mdvBANxvV: Y(n),
                                                        mmVlhirNw: i,
                                                        style: {
                                                          width: `100%`,
                                                        },
                                                        variant: `LUh2Q4GhW`,
                                                        width: `100%`,
                                                        XnxmlS2C5: J(t, z),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                            }),
                                          }),
                                        },
                                        e,
                                      )
                                    ),
                                  ),
                                }),
                            }),
                          }),
                        }),
                        o(`div`, {
                          className: `framer-1jgsgsr`,
                          children: o(h, {
                            children: o(X, {
                              query: {
                                from: {
                                  alias: `nfUSjL5BG`,
                                  data: Ve,
                                  type: `Collection`,
                                },
                                offset: { type: `LiteralValue`, value: 0 },
                                select: [
                                  {
                                    collection: `nfUSjL5BG`,
                                    name: `zHEZZmHJx`,
                                    type: `Identifier`,
                                  },
                                  {
                                    collection: `nfUSjL5BG`,
                                    name: `qD_Cz8fLf`,
                                    type: `Identifier`,
                                  },
                                  {
                                    collection: `nfUSjL5BG`,
                                    name: `IZpKwAVeh`,
                                    type: `Identifier`,
                                  },
                                  {
                                    collection: `nfUSjL5BG`,
                                    name: `LS8OlH3Ua`,
                                    type: `Identifier`,
                                  },
                                  {
                                    collection: `nfUSjL5BG`,
                                    name: `m1Lgae9gS`,
                                    type: `Identifier`,
                                  },
                                  {
                                    collection: `nfUSjL5BG`,
                                    name: `id`,
                                    type: `Identifier`,
                                  },
                                ],
                              },
                              children: (e, t, n) =>
                                o(a, {
                                  children: e?.map(
                                    (
                                      {
                                        id: e,
                                        IZpKwAVeh: t,
                                        LS8OlH3Ua: n,
                                        m1Lgae9gS: r,
                                        qD_Cz8fLf: i,
                                        zHEZZmHJx: a,
                                      },
                                      s,
                                    ) => (
                                      (a ??= ``),
                                      (i ??= ``),
                                      (r ??= ``),
                                      o(
                                        d,
                                        {
                                          id: `nfUSjL5BG-${e}`,
                                          children: o(b.Provider, {
                                            value: { m1Lgae9gS: r },
                                            children: o(S, {
                                              links: [
                                                {
                                                  href: {
                                                    pathVariables: {
                                                      m1Lgae9gS: r,
                                                    },
                                                    webPageId: `GV_hvvJfU`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    pathVariables: {
                                                      m1Lgae9gS: r,
                                                    },
                                                    webPageId: `GV_hvvJfU`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    pathVariables: {
                                                      m1Lgae9gS: r,
                                                    },
                                                    webPageId: `GV_hvvJfU`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                              ],
                                              children: (e) =>
                                                o(x, {
                                                  breakpoint: R,
                                                  overrides: {
                                                    CO9mlq9gw: {
                                                      width: `max((min(${v?.width || `100vw`}, 1200px) - 20px) / 2, 50px)`,
                                                    },
                                                    y6NRjWPnp: {
                                                      width: `min(${v?.width || `100vw`}, 1200px)`,
                                                    },
                                                  },
                                                  children: o(g, {
                                                    height: 400,
                                                    width: `max((min(${v?.width || `100vw`}, 1200px) - 40px) / 3, 50px)`,
                                                    children: o(_, {
                                                      className: `framer-wksgjf-container`,
                                                      nodeId: `XBY3MRJ4J`,
                                                      scopeId: `IGP28tJuK`,
                                                      children: o(x, {
                                                        breakpoint: R,
                                                        overrides: {
                                                          CO9mlq9gw: {
                                                            c4AK864bv: e[1],
                                                          },
                                                          y6NRjWPnp: {
                                                            c4AK864bv: e[2],
                                                          },
                                                        },
                                                        children: o(U, {
                                                          c4AK864bv: e[0],
                                                          FwFmAmgF5: a,
                                                          height: `100%`,
                                                          id: `XBY3MRJ4J`,
                                                          layoutId: `XBY3MRJ4J`,
                                                          mdvBANxvV: Y(n),
                                                          mmVlhirNw: i,
                                                          style: {
                                                            width: `100%`,
                                                          },
                                                          variant: `DBpCDSPOR`,
                                                          width: `100%`,
                                                          XnxmlS2C5: J(t, z),
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                            }),
                                          }),
                                        },
                                        e,
                                      )
                                    ),
                                  ),
                                }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    o(`section`, {
                      className: `framer-1nfabdz`,
                      "data-framer-name": `CTA`,
                      id: De,
                      ref: Oe,
                      children: l(`div`, {
                        className: `framer-10sssm4`,
                        "data-framer-name": `container`,
                        children: [
                          l(`div`, {
                            className: `framer-1azttvr`,
                            "data-framer-name": `heading`,
                            children: [
                              o(g, {
                                height: 26,
                                children: o(_, {
                                  className: `framer-5azlkc-container`,
                                  nodeId: `AWE6nd7Fb`,
                                  scopeId: `IGP28tJuK`,
                                  children: o(N, {
                                    GJdJmFCj5: `Trusted by 150 + businesses worldwide`,
                                    height: `100%`,
                                    id: `AWE6nd7Fb`,
                                    JHxom1g1e: `UsersThree`,
                                    layoutId: `AWE6nd7Fb`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              l(`div`, {
                                className: `framer-mubxxh`,
                                "data-framer-name": `text`,
                                children: [
                                  o(C, {
                                    __fromCanvasComponent: !0,
                                    children: o(u, {
                                      children: o(`h2`, {
                                        className: `framer-styles-preset-1bqbu21`,
                                        "data-styles-preset": `UMunwn2ac`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-37699ec8-6f41-4363-9a8a-9e76d6ead784, rgb(246, 251, 255))`,
                                        },
                                        children: `Speak to Gerbo Today!`,
                                      }),
                                    }),
                                    className: `framer-1ts5mdr`,
                                    "data-framer-name": `An Exclusive Community for lead generation experts`,
                                    effect: K,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(C, {
                                    __fromCanvasComponent: !0,
                                    children: o(u, {
                                      children: o(`p`, {
                                        className: `framer-styles-preset-1khckfh`,
                                        "data-styles-preset": `cH8AiB6P_`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-37699ec8-6f41-4363-9a8a-9e76d6ead784, rgb(246, 251, 255))`,
                                        },
                                        children: `Your AI receptionist is ready. Never miss a client — try our live demo line now.`,
                                      }),
                                    }),
                                    className: `framer-10tw27r`,
                                    "data-framer-name": `Lead Academy is an academy & community dedicated for lead generation experts & students to share information & grow through collaborative efforts.`,
                                    effect: q,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              l(`div`, {
                                className: `framer-11ior87`,
                                "data-framer-name": `cta`,
                                children: [
                                  o(g, {
                                    height: 46,
                                    children: o(W, {
                                      animate: xt,
                                      className: `framer-59xyfc-container`,
                                      "data-framer-appear-id": `59xyfc`,
                                      initial: Z,
                                      nodeId: `pPrTAjKIO`,
                                      optimized: !0,
                                      rendersWithMotion: !0,
                                      scopeId: `IGP28tJuK`,
                                      children: o(F, {
                                        cRoeZpcrs: `Try Demo`,
                                        GrpQ8zFBL: `tel:+61290001674`,
                                        height: `100%`,
                                        id: `pPrTAjKIO`,
                                        layoutId: `pPrTAjKIO`,
                                        RCPR2dydG: `PhoneCall`,
                                        RZWvw5mQ_: !0,
                                        variant: `jwC47zCF6`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  o(S, {
                                    links: [
                                      {
                                        href: {
                                          hash: `:BvppAfnk5`,
                                          webPageId: `J986jsEGO`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          hash: `:BvppAfnk5`,
                                          webPageId: `J986jsEGO`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          hash: `:BvppAfnk5`,
                                          webPageId: `J986jsEGO`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      o(g, {
                                        height: 46,
                                        children: o(W, {
                                          animate: Ct,
                                          className: `framer-1lk9q38-container`,
                                          "data-framer-appear-id": `1lk9q38`,
                                          initial: Z,
                                          nodeId: `DVGLTSbbK`,
                                          optimized: !0,
                                          rendersWithMotion: !0,
                                          scopeId: `IGP28tJuK`,
                                          children: o(x, {
                                            breakpoint: R,
                                            overrides: {
                                              CO9mlq9gw: { GrpQ8zFBL: e[1] },
                                              y6NRjWPnp: { GrpQ8zFBL: e[2] },
                                            },
                                            children: o(F, {
                                              cRoeZpcrs: `Get in Touch`,
                                              GrpQ8zFBL: e[0],
                                              height: `100%`,
                                              id: `DVGLTSbbK`,
                                              layoutId: `DVGLTSbbK`,
                                              RCPR2dydG: `Envelope`,
                                              RZWvw5mQ_: !1,
                                              variant: `mmH9oevh3`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          o(y, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 540,
                              intrinsicWidth: 965.5,
                              pixelHeight: 1080,
                              pixelWidth: 1931,
                              sizes: `339px`,
                              src: `/images/F1uG7hAN8luvu1dbPE2pW2coCc.png?scale-down-to=1024&width=1931&height=1080`,
                              srcSet: `/images/F1uG7hAN8luvu1dbPE2pW2coCc.png?scale-down-to=512&width=1931&height=1080 512w,/images/F1uG7hAN8luvu1dbPE2pW2coCc.png?scale-down-to=1024&width=1931&height=1080 1024w,/images/F1uG7hAN8luvu1dbPE2pW2coCc.png?width=1931&height=1080 1931w`,
                            },
                            className: `framer-11s5r2u`,
                            "data-framer-name": `Gerbo hello`,
                            transformTemplate: wt,
                          }),
                          o(`div`, {
                            className: `framer-1bd7mf2`,
                            "data-framer-name": `right side container`,
                            children:
                              ke() &&
                              o(ct, {
                                animate: Et,
                                className: `framer-cyw3p1 hidden-1n7grur`,
                                "data-framer-appear-id": `cyw3p1`,
                                "data-framer-name": `Logo`,
                                initial: Dt,
                                optimized: !0,
                                children: o(`div`, {
                                  className: `framer-r7ztpi`,
                                  "data-framer-name": `Container`,
                                  children: o(y, {
                                    background: {
                                      alt: `logo`,
                                      fit: `fit`,
                                      intrinsicHeight: 40,
                                      intrinsicWidth: 44,
                                      pixelHeight: 1024,
                                      pixelWidth: 1024,
                                      positionX: `center`,
                                      positionY: `center`,
                                      sizes: `44px`,
                                      src: `/images/8EYtClIJaotk40RaLdi5bBD444.png?scale-down-to=512&width=1024&height=1024`,
                                      srcSet: `/images/8EYtClIJaotk40RaLdi5bBD444.png?scale-down-to=512&width=1024&height=1024 512w,/images/8EYtClIJaotk40RaLdi5bBD444.png?width=1024&height=1024 1024w`,
                                    },
                                    className: `framer-130x7ge`,
                                    "data-framer-name": `Icon`,
                                  }),
                                }),
                              }),
                          }),
                        ],
                      }),
                    }),
                    o(g, {
                      height: 306,
                      width: v?.width || `100vw`,
                      children: o(_, {
                        className: `framer-1bz62gs-container`,
                        id: Ae,
                        nodeId: `C3qShFP61`,
                        ref: je,
                        scopeId: `IGP28tJuK`,
                        children: o(x, {
                          breakpoint: R,
                          overrides: {
                            CO9mlq9gw: { variant: `zGNwQKXPE` },
                            y6NRjWPnp: { variant: `pOmGhkHnU` },
                          },
                          children: o(I, {
                            height: `100%`,
                            id: `C3qShFP61`,
                            layoutId: `C3qShFP61`,
                            style: { width: `100%` },
                            variant: `EbpapWQsU`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    o(g, {
                      children: o(_, {
                        className: `framer-1yrnb1a-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutScroll: !0,
                        nodeId: `p1gwEjMTz`,
                        scopeId: `IGP28tJuK`,
                        children: o(ge, {
                          blur: 7,
                          borderRadius: `0px`,
                          direction: `to bottom`,
                          height: `100%`,
                          id: `p1gwEjMTz`,
                          layoutId: `p1gwEjMTz`,
                          style: { height: `100%`, width: `100%` },
                          transition: {
                            delay: 0,
                            duration: 0.3,
                            ease: [0.44, 0, 0.56, 1],
                            type: `tween`,
                          },
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (Mt = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-7K9XB.framer-trogth, .framer-7K9XB .framer-trogth { display: block; }`,
        `.framer-7K9XB.framer-1n7grur { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 160px 0px 0px 0px; position: relative; width: 1200px; }`,
        `.framer-7K9XB .framer-dmvq4a-container { flex: none; height: auto; left: 50%; position: fixed; top: 10px; transform: translateX(-50%); width: auto; z-index: 9; }`,
        `.framer-7K9XB .framer-1arb6tr { background-color: var(--token-aeb15aaf-db9c-447f-8383-662c7fda9c5a, rgba(240, 248, 255, 0.9)); bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
        `.framer-7K9XB .framer-19a44n3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; max-width: 1200px; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-7K9XB .framer-klfwg0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 640px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-7K9XB .framer-fwezk0-container, .framer-7K9XB .framer-5azlkc-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-7K9XB .framer-jlfv7d, .framer-7K9XB .framer-mubxxh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-7K9XB .framer-lhvrx4, .framer-7K9XB .framer-1ts5mdr { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 2; }`,
        `.framer-7K9XB .framer-pkbsqy, .framer-7K9XB .framer-10tw27r { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-7K9XB .framer-gpy7ko { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-7K9XB .framer-qalnj6-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-7K9XB .framer-1jgsgsr { display: grid; flex: none; gap: 20px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-7K9XB .framer-wksgjf-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-7K9XB .framer-1nfabdz { align-content: center; align-items: center; background-color: var(--token-e4409358-08fe-4ba3-8dc3-7989b447f0b6, #014D4E); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 60px 40px 60px 40px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-7K9XB .framer-10sssm4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 44px; height: min-content; justify-content: flex-start; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-7K9XB .framer-1azttvr { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; max-width: 640px; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 3; }`,
        `.framer-7K9XB .framer-11ior87 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-7K9XB .framer-59xyfc-container, .framer-7K9XB .framer-1lk9q38-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 3; }`,
        `.framer-7K9XB .framer-11s5r2u { aspect-ratio: 1.787962962962963 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 190px); left: 748px; overflow: visible; position: absolute; top: 53%; transform: translateY(-50%); width: 339px; z-index: 1; }`,
        `.framer-7K9XB .framer-1bd7mf2 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 600px; min-height: 96px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-7K9XB .framer-cyw3p1 { align-content: center; align-items: center; background-color: var(--token-37699ec8-6f41-4363-9a8a-9e76d6ead784, #f6fbff); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; box-shadow: inset 0px -3px 0px 2px rgba(141, 194, 235, 0.25), 0px 0.7065919983928324px 0.7065919983928324px -0.5833333333333333px rgba(16, 49, 77, 0.21), 0px 1.8065619053231785px 1.8065619053231785px -1.1666666666666665px rgba(16, 49, 77, 0.2), 0px 3.6217592146567767px 3.6217592146567767px -1.75px rgba(16, 49, 77, 0.2), 0px 6.8655999097303715px 6.8655999097303715px -2.333333333333333px rgba(16, 49, 77, 0.18), 0px 13.646761411524492px 13.646761411524492px -2.916666666666667px rgba(16, 49, 77, 0.16), 0px 30px 30px -3.5px rgba(16, 49, 77, 0.09); cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 10px; position: relative; width: min-content; will-change: var(--framer-will-change-effect-override, transform); z-index: 2; }`,
        `.framer-7K9XB .framer-r7ztpi { align-content: center; align-items: center; background-color: var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, #0e1c29); border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; box-shadow: 0px 0.7065919983928324px 0.7065919983928324px -0.6666666666666666px rgba(16, 49, 77, 0.24), 0px 1.8065619053231785px 1.8065619053231785px -1.3333333333333333px rgba(16, 49, 77, 0.23), 0px 3.6217592146567767px 3.6217592146567767px -2px rgba(16, 49, 77, 0.22), 0px 6.8655999097303715px 6.8655999097303715px -2.6666666666666665px rgba(16, 49, 77, 0.2), 0px 13.646761411524492px 13.646761411524492px -3.3333333333333335px rgba(16, 49, 77, 0.16), 0px 30px 30px -4px rgba(16, 49, 77, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 16px; position: relative; width: min-content; }`,
        `.framer-7K9XB .framer-130x7ge { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 44px); overflow: visible; position: relative; width: 44px; }`,
        `.framer-7K9XB .framer-1bz62gs-container { flex: none; height: auto; position: relative; width: 100%; z-index: 1; }`,
        `.framer-7K9XB .framer-1yrnb1a-container { bottom: 0px; flex: none; height: 100px; left: 0px; pointer-events: none; position: fixed; right: 0px; z-index: 10; }`,
        ...Fe,
        ...Oe,
        ...De,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-7K9XB.framer-1n7grur { width: 810px; } .framer-7K9XB .framer-1jgsgsr { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-7K9XB .framer-1bd7mf2 { min-height: unset; }}`,
        `@media (max-width: 809.98px) { .framer-7K9XB.framer-1n7grur { width: 390px; } .framer-7K9XB .framer-1jgsgsr { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; justify-content: flex-start; padding: 10px 0px 0px 0px; } .framer-7K9XB .framer-wksgjf-container { align-self: unset; } .framer-7K9XB .framer-10sssm4 { flex-direction: column; } .framer-7K9XB .framer-1azttvr { flex: none; width: 100%; } .framer-7K9XB .framer-1bd7mf2 { flex: none; min-height: unset; width: 100%; }}`,
      ]),
      (Q = M(jt, Mt, `framer-7K9XB`)),
      (Q.displayName = `Blog`),
      (Q.defaultProps = { height: 3274.6, width: 1200 }),
      w(
        Q,
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
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
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
          ...rt,
          ...at,
          ...ot,
          ...st,
          ...lt,
          ...ut,
          ...O(Le),
          ...O(Ae),
          ...O(ke),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      ($ = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerIGP28tJuK`,
            slots: [],
            annotations: {
              framerContractVersion: `1`,
              framerScrollSections: `{"QgW8DgCR7":{"pattern":":QgW8DgCR7","name":"heading"},"BWIc5vHYJ":{"pattern":":BWIc5vHYJ","name":"cta"},"C3qShFP61":{"pattern":":C3qShFP61","name":"footer"}}`,
              framerResponsiveScreen: ``,
              framerAcceptsLayoutTemplate: `true`,
              framerDisplayContentsDiv: `false`,
              framerComponentViewportWidth: `true`,
              framerColorSyntax: `true`,
              framerAutoSizeImages: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"CO9mlq9gw":{"layout":["fixed","auto"]},"y6NRjWPnp":{"layout":["fixed","auto"]}}}`,
              framerIntrinsicHeight: `3274.6`,
              framerImmutableVariables: `true`,
              framerIntrinsicWidth: `1200`,
            },
          },
          Props: {
            type: `tsType`,
            annotations: { framerContractVersion: `1` },
          },
          __FramerMetadata__: { type: `variable` },
        },
      });
  });
Nt();
export { $ as __FramerMetadata__, Q as default };
//# sourceMappingURL=begDxoDQKhhEVI4ilJzvpbtKglBSovtjGGwXyH4JPg0.DW0Qgvqc.mjs.map
