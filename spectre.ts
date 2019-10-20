import { tss, tssFrames, tssFont, join, query } from "ts-mini/tss";
const tssMedia__1 = `(max-width: 1280px)`;
const tssMedia__2 = `(max-width: 960px)`;
const tssMedia__3 = `(max-width: 840px)`;
const tssMedia__4 = `(max-width: 600px)`;
const tssMedia__5 = `(max-width: 480px)`;

tssFrames(`loading`, {
  SELECTOR:  `0%`,
  transform: `rotate(0deg)`,
}, {
  SELECTOR:  `100%`,
  transform: `rotate(360deg)`,
});
tssFrames(`slide-down`, {
  SELECTOR:  `0%`,
  opacity:   `0`,
  transform: `translateY(-1.6rem)`,
}, {
  SELECTOR:  `100%`,
  opacity:   `1`,
  transform: `translateY(0)`,
});

const tssCommon__0 = {
  color:           `#302ecd`,
  text_decoration: `underline`,
}
const tssCommon__1 = {
  font_weight: `500`,
}
const tssCommon__2 = {
  font_size: `2rem`,
}
const tssCommon__3 = {
  font_size: `1.6rem`,
}
const tssCommon__4 = {
  font_size: `1.4rem`,
}
const tssCommon__5 = {
  font_size: `1.2rem`,
}
const tssCommon__6 = {
  font_size: `1rem`,
}
const tssCommon__7 = {
  font_size: `.8rem`,
}
const tssCommon__8 = {
  font_family: `-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", sans-serif`,
}
const tssCommon__9 = {
  font_family: `-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang TC", "Hiragino Sans CNS", "Microsoft JhengHei", "Helvetica Neue", sans-serif`,
}
const tssCommon__10 = {
  font_family: `-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Hiragino Sans", "Hiragino Kaku Gothic Pro", "Yu Gothic", YuGothic, Meiryo, "Helvetica Neue", sans-serif`,
}
const tssCommon__11 = {
  font_family: `-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Malgun Gothic", "Helvetica Neue", sans-serif`,
}
const tssCommon__12 = {
  border_bottom:   `.05rem solid`,
  text_decoration: `none`,
}
const tssCommon__13 = {
  margin_left: `.125em`,
}
const tssCommon__14 = {
  color: `#32b643`,
}
const tssCommon__15 = {
  color: `#e85600`,
}
const tssCommon__16 = {
  position: `relative`,
}
const tssCommon__17 = {
  height:    `.8rem`,
  margin:    `0 .25rem`,
  position:  `absolute`,
  top:       `50%`,
  transform: `translateY(-50%)`,
  width:     `.8rem`,
  z_index:   `2`,
}
const tssCommon__18 = {
  display:     `block`,
  line_height: `1.2rem`,
  margin:      `.2rem 0`,
  min_height:  `1.4rem`,
  padding:     `.1rem .4rem .1rem 1.2rem`,
  position:    `relative`,
}
const tssCommon__19 = {
  clip:     `rect(0, 0, 0, 0)`,
  height:   `1px`,
  margin:   `-1px`,
  overflow: `hidden`,
  position: `absolute`,
  width:    `1px`,
}
const tssCommon__20 = {
  border_color: `#5755d9`,
  box_shadow:   `0 0 0 .1rem rgba(87, 85, 217, .2)`,
}
const tssCommon__21 = {
  background:   `#5755d9`,
  border_color: `#5755d9`,
}
const tssCommon__22 = {
  border:     `.05rem solid #bcc3ce`,
  cursor:     `pointer`,
  display:    `inline-block`,
  position:   `absolute`,
  transition: `background .2s, border .2s, box-shadow .2s, color .2s`,
}
const tssCommon__23 = {
  font_size: `.7rem`,
  margin:    `0`,
}
const tssCommon__24 = {
  font_size: `.9rem`,
  margin:    `.3rem 0`,
}
const tssCommon__25 = {
  background: `#fff`,
  height:     `.8rem`,
  left:       `0`,
  top:        `.3rem`,
  width:      `.8rem`,
}
const tssCommon__26 = {
  background: `#eef0f3`,
}
const tssCommon__27 = {
  background:   `#f9fdfa`,
  border_color: `#32b643`,
}
const tssCommon__28 = {
  box_shadow: `0 0 0 .1rem rgba(50, 182, 67, .2)`,
}
const tssCommon__29 = {
  background:   `#fffaf7`,
  border_color: `#e85600`,
}
const tssCommon__30 = {
  box_shadow: `0 0 0 .1rem rgba(232, 86, 0, .2)`,
}
const tssCommon__31 = {
  border_color: `#e85600`,
}
const tssCommon__32 = {
  background:   `#e85600`,
  border_color: `#e85600`,
}
const tssCommon__33 = {
  border_color: `#e85600`,
  box_shadow:   `0 0 0 .1rem rgba(232, 86, 0, .2)`,
}
const tssCommon__34 = {
  background:   `#e85600`,
  border_color: `#e85600`,
}
const tssCommon__35 = {
  background_color: `#eef0f3`,
  cursor:           `not-allowed`,
  opacity:          `.5`,
}
const tssCommon__36 = {
  background: `#eef0f3`,
  cursor:     `not-allowed`,
  opacity:    `.5`,
}
const tssCommon__37 = {
  display: `none !important`,
}
const tssCommon__38 = {
  _ms_flex: `none`,
  flex:     `none`,
}
const tssCommon__39 = {
  _ms_flex: `none`,
  flex:     `none`,
}
const tssCommon__40 = {
  _ms_flex: `none`,
  flex:     `none`,
}
const tssCommon__41 = {
  _ms_flex: `none`,
  flex:     `none`,
}
const tssCommon__42 = {
  _ms_flex: `none`,
  flex:     `none`,
}
const tssCommon__43 = {
  display: `none !important`,
}
const tssCommon__44 = {
  display:  `block`,
  position: `relative`,
}
const tssCommon__45 = {
  background: `#fff`,
  color:      `#bcc3ce`,
  content:    `attr(data-content)`,
  display:    `inline-block`,
  font_size:  `.7rem`,
  padding:    `0 .4rem`,
  transform:  `translateY(-.65rem)`,
}

tss({
  SELECTOR:                 `=html`,
  font_family:              `sans-serif`,
  _webkit_text_size_adjust: `100%`,
  _ms_text_size_adjust:     `100%`,
}, {
  SELECTOR: `=body`,
  margin:   `0`,
}, {
  SELECTOR: `=article,aside,footer,header,nav,section`,
  display:  `block`,
}, {
  SELECTOR:  `=h1`,
  font_size: `2em`,
  margin:    `.67em 0`,
}, {
  SELECTOR: `=figcaption,figure,main`,
  display:  `block`,
}, {
  SELECTOR:   `=hr`,
  box_sizing: `content-box`,
  height:     `0`,
  overflow:   `visible`,
}, {
  SELECTOR:                 `=a`,
  background_color:         `transparent`,
  _webkit_text_decoration_skip: `objects`,
}, {
  SELECTOR:      `=a:active,a:hover`,
  outline_width: `0`,
}, {
  SELECTOR:   `=address`,
  font_style: `normal`,
}, {
  SELECTOR:    `=b,strong`,
  font_weight: `inherit`,
}, {
  SELECTOR:    `=b,strong`,
  font_weight: `bolder`,
}, {
  SELECTOR:    `=code,kbd,pre,samp`,
  font_family: `"SF Mono", "Segoe UI Mono", "Roboto Mono", Menlo, Courier, monospace`,
  font_size:   `1em`,
}, {
  SELECTOR:   `=dfn`,
  font_style: `italic`,
}, {
  SELECTOR:    `=small`,
  font_size:   `80%`,
  font_weight: `400`,
}, {
  SELECTOR:       `=sub,sup`,
  font_size:      `75%`,
  line_height:    `0`,
  position:       `relative`,
  vertical_align: `baseline`,
}, {
  SELECTOR: `=sub`,
  bottom:   `-.25em`,
}, {
  SELECTOR: `=sup`,
  top:      `-.5em`,
}, {
  SELECTOR: `=audio,video`,
  display:  `inline-block`,
}, {
  SELECTOR: `=audio:not([controls])`,
  display:  `none`,
  height:   `0`,
}, {
  SELECTOR:     `=img`,
  border_style: `none`,
}, {
  SELECTOR: `=svg:not(:root)`,
  overflow: `hidden`,
}, {
  SELECTOR:    `=button,input,optgroup,select,textarea`,
  font_family: `inherit`,
  font_size:   `inherit`,
  line_height: `inherit`,
  margin:      `0`,
}, {
  SELECTOR: `=button,input`,
  overflow: `visible`,
}, {
  SELECTOR:       `=button,select`,
  text_transform: `none`,
}, {
  SELECTOR:           `=button,html [type="button"],[type="reset"],[type="submit"]`,
  _webkit_appearance: `button`,
}, {
  SELECTOR:     `=button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner`,
  border_style: `none`,
  padding:      `0`,
}, {
  SELECTOR: `=fieldset`,
  border:   `0`,
  margin:   `0`,
  padding:  `0`,
}, {
  SELECTOR:    `=legend`,
  box_sizing:  `border-box`,
  color:       `inherit`,
  display:     `table`,
  max_width:   `100%`,
  padding:     `0`,
  white_space: `normal`,
}, {
  SELECTOR:       `=progress`,
  display:        `inline-block`,
  vertical_align: `baseline`,
}, {
  SELECTOR: `=textarea`,
  overflow: `auto`,
}, {
  SELECTOR:   `=[type="checkbox"],[type="radio"]`,
  box_sizing: `border-box`,
  padding:    `0`,
}, {
  SELECTOR: `=[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button`,
  height:   `auto`,
}, {
  SELECTOR:           `=[type="search"]`,
  _webkit_appearance: `textfield`,
  outline_offset:     `-2px`,
}, {
  SELECTOR:           `=[type="search"]::-webkit-search-cancel-button,[type="search"]::-webkit-search-decoration`,
  _webkit_appearance: `none`,
}, {
  SELECTOR:           `=::-webkit-file-upload-button`,
  _webkit_appearance: `button`,
  font:               `inherit`,
}, {
  SELECTOR: `=details,menu`,
  display:  `block`,
}, {
  SELECTOR: `=summary`,
  display:  `list-item`,
  outline:  `none`,
}, {
  SELECTOR: `=canvas`,
  display:  `inline-block`,
}, {
  SELECTOR: `=template`,
  display:  `none`,
}, {
  SELECTOR: `=[hidden]`,
  display:  `none`,
}, {
  SELECTOR:   `=*,*::before,*::after`,
  box_sizing: `inherit`,
}, {
  SELECTOR:                 `=html`,
  box_sizing:               `border-box`,
  font_size:                `20px`,
  line_height:              `1.5`,
  _webkit_tap_highlight_color: `transparent`,
}, {
  SELECTOR:       `=body`,
  background:     `#fff`,
  color:          `#3b4351`,
  font_family:    `-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif`,
  font_size:      `.8rem`,
  overflow_x:     `hidden`,
  text_rendering: `optimizeLegibility`,
}, {
  SELECTOR:        `=a`,
  color:           `#5755d9`,
  outline:         `none`,
  text_decoration: `none`,
}, {
  SELECTOR:   `=a:focus`,
  box_shadow: `0 0 0 .1rem rgba(87, 85, 217, .2)`,
}, join({  SELECTOR: `=a:focus,a:hover,a:active`,}, tssCommon__0), {
  SELECTOR: `=a:visited`,
  color:    `#807fe2`,
}, {
  SELECTOR:      `=h1,h2,h3,h4,h5,h6`,
  color:         `inherit`,
  font_weight:   `500`,
  line_height:   `1.2`,
  margin_bottom: `.5em`,
  margin_top:    `0`,
}, join({  SELECTOR: `=h1`,}, tssCommon__2), join({  SELECTOR: `=h2`,}, tssCommon__3), join({  SELECTOR: `=h3`,}, tssCommon__4), join({  SELECTOR: `=h4`,}, tssCommon__5), join({  SELECTOR: `=h5`,}, tssCommon__6), join({  SELECTOR: `=h6`,}, tssCommon__7), {
  SELECTOR: `=p`,
  margin:   `0 0 1.2rem`,
}, {
  SELECTOR:                 `=a,ins,u`,
  _webkit_text_decoration_skip: `ink edges`,
  text_decoration_skip:     `ink edges`,
}, {
  SELECTOR:        `=abbr[title]`,
  border_bottom:   `.05rem dotted`,
  cursor:          `help`,
  text_decoration: `none`,
}, {
  SELECTOR:      `=kbd`,
  background:    `#303742`,
  border_radius: `.1rem`,
  color:         `#fff`,
  font_size:     `.7rem`,
  line_height:   `1.25`,
  padding:       `.1rem .2rem`,
}, {
  SELECTOR:      `=mark`,
  background:    `#ffe9b3`,
  border_bottom: `.05rem solid #ffd367`,
  border_radius: `.1rem`,
  color:         `#3b4351`,
  padding:       `.05rem .1rem 0`,
}, {
  SELECTOR:    `=blockquote`,
  border_left: `.1rem solid #dadee4`,
  margin_left: `0`,
  padding:     `.4rem .8rem`,
}, {
  SELECTOR:      `=blockquote p:last-child`,
  margin_bottom: `0`,
}, {
  SELECTOR: `=ul,ol`,
  margin:   `.8rem 0 .8rem .8rem`,
  padding:  `0`,
}, {
  SELECTOR: `=ul ul,ul ol,ol ul,ol ol`,
  margin:   `.8rem 0 .8rem .8rem`,
}, {
  SELECTOR:   `=ul li,ol li`,
  margin_top: `.4rem`,
}, {
  SELECTOR:   `=ul`,
  list_style: `disc inside`,
}, {
  SELECTOR:        `=ul ul`,
  list_style_type: `circle`,
}, {
  SELECTOR:   `=ol`,
  list_style: `decimal inside`,
}, {
  SELECTOR:        `=ol ol`,
  list_style_type: `lower-alpha`,
}, {
  SELECTOR:    `=dl dt`,
  font_weight: `bold`,
}, {
  SELECTOR: `=dl dd`,
  margin:   `.4rem 0 .8rem 0`,
}, join({  SELECTOR: `=html:lang(zh),html:lang(zh-Hans)`,}, tssCommon__8), join({  SELECTOR: `=html:lang(zh-Hant)`,}, tssCommon__9), join({  SELECTOR: `=html:lang(ja)`,}, tssCommon__10), join({  SELECTOR: `=html:lang(ko)`,}, tssCommon__11), join({  SELECTOR: `=:lang(zh) ins,:lang(zh) u,:lang(ja) ins,:lang(ja) u`,}, tssCommon__12), join({  SELECTOR: `=:lang(zh) del + del,:lang(zh) del + s,:lang(zh) ins + ins,:lang(zh) ins + u,:lang(zh) s + del,:lang(zh) s + s,:lang(zh) u + ins,:lang(zh) u + u,:lang(ja) del + del,:lang(ja) del + s,:lang(ja) ins + ins,:lang(ja) ins + u,:lang(ja) s + del,:lang(ja) s + s,:lang(ja) u + ins,:lang(ja) u + u`,}, tssCommon__13), {
  SELECTOR:      `=fieldset`,
  margin_bottom: `.8rem`,
}, {
  SELECTOR:      `=legend`,
  font_size:     `.9rem`,
  font_weight:   `500`,
  margin_bottom: `.8rem`,
}, {
  SELECTOR:      `=code`,
  background:    `#fcf2f2`,
  border_radius: `.1rem`,
  color:         `#d73e48`,
  font_size:     `85%`,
  line_height:   `1.25`,
  padding:       `.1rem .2rem`,
});

export const h1 = tss(tssCommon__1, tssCommon__2);

export const h2 = tss(tssCommon__1, tssCommon__3);

export const h3 = tss(tssCommon__1, tssCommon__4);

export const h4 = tss(tssCommon__1, tssCommon__5);

export const h5 = tss(tssCommon__1, tssCommon__6);

export const h6 = tss(tssCommon__1, tssCommon__7);

export const lang_zh = tss(tssCommon__8);

export const lang_zh_hans = tss(tssCommon__8);

export const lang_zh_hant = tss(tssCommon__9);

export const lang_ja = tss(tssCommon__10);

export const lang_ko = tss(tssCommon__11);

export const lang_cjk = tss(join({  SELECTOR: [`ins`, `u`],}, tssCommon__12), join({  SELECTOR: [`del + del`, `del + s`, `ins + ins`, `ins + u`, `s + del`, `s + s`, `u + ins`, `u + u`],}, tssCommon__13));

export const table_striped = tss();

export const active = tss(join({  SELECTOR: `=a@`,}, tssCommon__0));

export const table_hover = tss();

export const table_scroll = tss();

export const table = tss({
  border_collapse: `collapse`,
  border_spacing:  `0`,
  text_align:      `left`,
  width:           `100%`,
}, {
  SELECTOR:   query(`@% tbody tr:nth-of-type(odd)`, table_striped),
  background: `#f7f8f9`,
}, {
  SELECTOR:   [query(`@ tbody tr%`, active), query(`@% tbody tr%`, table_striped, active)],
  background: `#eef0f3`,
}, {
  SELECTOR:   query(`@% tbody tr:hover`, table_hover),
  background: `#eef0f3`,
}, {
  SELECTOR:       query(`@%`, table_scroll),
  display:        `block`,
  overflow_x:     `auto`,
  padding_bottom: `.75rem`,
  white_space:    `nowrap`,
}, {
  SELECTOR:      [`td`, `th`],
  border_bottom: `.05rem solid #dadee4`,
  padding:       `.6rem .4rem`,
}, {
  SELECTOR:            `th`,
  border_bottom_width: `.1rem`,
});

export const label_sm = tss();

export const label_lg = tss();

export const form_label = tss({
  display:     `block`,
  line_height: `1.2rem`,
  padding:     `.3rem 0`,
}, {
  SELECTOR:  query(`@%`, label_sm),
  font_size: `.7rem`,
  padding:   `.1rem 0`,
}, {
  SELECTOR:  query(`@%`, label_lg),
  font_size: `.9rem`,
  padding:   `.4rem 0`,
});

export const form_input_hint = tss({
  color:      `#bcc3ce`,
  font_size:  `.7rem`,
  margin_top: `.2rem`,
});

export const input_sm = tss();

export const input_lg = tss();

export const input_inline = tss();

export const is_success = tss(join({  SELECTOR: query(`@ + %`, form_input_hint),}, tssCommon__14));

export const is_error = tss(join({  SELECTOR: query(`@ + %`, form_input_hint),}, tssCommon__15));

export const form_icon = tss(join({  SELECTOR: `<input:disabled +`,}, tssCommon__36));

export const disabled = tss(join({  SELECTOR: query(`input@ + %`, form_icon),}, tssCommon__36));

export const form_input = tss({
  _webkit_appearance: `none`,
  _moz_appearance:    `none`,
  appearance:         `none`,
  background:         `#fff`,
  background_image:   `none`,
  border:             `.05rem solid #bcc3ce`,
  border_radius:      `.1rem`,
  color:              `#3b4351`,
  display:            `block`,
  font_size:          `.8rem`,
  height:             `1.8rem`,
  line_height:        `1.2rem`,
  max_width:          `100%`,
  outline:            `none`,
  padding:            `.25rem .4rem`,
  position:           `relative`,
  transition:         `background .2s, border .2s, box-shadow .2s, color .2s`,
  width:              `100%`,
}, {
  SELECTOR:     `=@:focus`,
  border_color: `#5755d9`,
  box_shadow:   `0 0 0 .1rem rgba(87, 85, 217, .2)`,
}, {
  SELECTOR: `=@:-ms-input-placeholder`,
  color:    `#bcc3ce`,
}, {
  SELECTOR: `=@::-ms-input-placeholder`,
  color:    `#bcc3ce`,
}, {
  SELECTOR: `=@::placeholder`,
  color:    `#bcc3ce`,
}, {
  SELECTOR:  query(`@%`, input_sm),
  font_size: `.7rem`,
  height:    `1.4rem`,
  padding:   `.05rem .3rem`,
}, {
  SELECTOR:  query(`@%`, input_lg),
  font_size: `.9rem`,
  height:    `2rem`,
  padding:   `.35rem .6rem`,
}, {
  SELECTOR:       query(`@%`, input_inline),
  display:        `inline-block`,
  vertical_align: `middle`,
  width:          `auto`,
}, {
  SELECTOR: `=@[type="file"]`,
  height:   `auto`,
}, {
  SELECTOR: [`=textarea@`, query(`textarea@%`, input_lg), query(`textarea@%`, input_sm)],
  height:   `auto`,
}, join({  SELECTOR: query(`@%`, is_success),}, tssCommon__27), join({  SELECTOR: query(`@%:focus`, is_success),}, tssCommon__28), join({  SELECTOR: query(`@%`, is_error),}, tssCommon__29), join({  SELECTOR: query(`@%:focus`, is_error),}, tssCommon__30), {
  SELECTOR:     `=@:not(:placeholder-shown):invalid`,
  border_color: `#e85600`,
}, {
  SELECTOR:   `=@:not(:placeholder-shown):invalid:focus`,
  background: `#fffaf7`,
  box_shadow: `0 0 0 .1rem rgba(232, 86, 0, .2)`,
}, {
  SELECTOR: query(`@:not(:placeholder-shown):invalid + %`, form_input_hint),
  color:    `#e85600`,
}, join({  SELECTOR: [`=@:disabled`, query(`@%`, disabled)],}, tssCommon__35), {
  SELECTOR:         `=@[readonly]`,
  background_color: `#f7f8f9`,
});

export const select_sm = tss();

export const select_lg = tss();

export const form_select = tss({
  _webkit_appearance: `none`,
  _moz_appearance:    `none`,
  appearance:         `none`,
  background:         `#fff`,
  border:             `.05rem solid #bcc3ce`,
  border_radius:      `.1rem`,
  color:              `inherit`,
  font_size:          `.8rem`,
  height:             `1.8rem`,
  line_height:        `1.2rem`,
  outline:            `none`,
  padding:            `.25rem .4rem`,
  vertical_align:     `middle`,
  width:              `100%`,
}, {
  SELECTOR:     `=@:focus`,
  border_color: `#5755d9`,
  box_shadow:   `0 0 0 .1rem rgba(87, 85, 217, .2)`,
}, {
  SELECTOR: `=@::-ms-expand`,
  display:  `none`,
}, {
  SELECTOR:  query(`@%`, select_sm),
  font_size: `.7rem`,
  height:    `1.4rem`,
  padding:   `.05rem 1.1rem .05rem .3rem`,
}, {
  SELECTOR:  query(`@%`, select_lg),
  font_size: `.9rem`,
  height:    `2rem`,
  padding:   `.35rem 1.4rem .35rem .6rem`,
}, {
  SELECTOR: [`=@[size]`, `=@[multiple]`],
  height:   `auto`,
  padding:  `.25rem .4rem`,
}, {
  SELECTOR: [`=@[size] option`, `=@[multiple] option`],
  padding:  `.1rem .2rem`,
}, {
  SELECTOR:      `=@:not([multiple]):not([size])`,
  background:    `#fff url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%204%205'%3E%3Cpath%20fill='%23667189'%20d='M2%200L0%202h4zm0%205L0%203h4z'/%3E%3C/svg%3E") no-repeat right .35rem center/.4rem .5rem`,
  padding_right: `1.2rem`,
}, join({  SELECTOR: query(`@%`, is_success),}, tssCommon__27), join({  SELECTOR: query(`@%:focus`, is_success),}, tssCommon__28), join({  SELECTOR: query(`@%`, is_error),}, tssCommon__29), join({  SELECTOR: query(`@%:focus`, is_error),}, tssCommon__30), join({  SELECTOR: [`=@:disabled`, query(`@%`, disabled)],}, tssCommon__35));

export const has_success = tss(join({  SELECTOR: query(`@ %`, form_input_hint),}, tssCommon__14), join({  SELECTOR: [query(`@ %`, form_input), query(`@ %`, form_select)],}, tssCommon__27), join({  SELECTOR: [query(`@ %:focus`, form_input), query(`@ %:focus`, form_select)],}, tssCommon__28));

export const form_checkbox = tss(tssCommon__18, join({  SELECTOR: `input`,}, tssCommon__19), join({  SELECTOR: query(`@ input:focus + %`, form_icon),}, tssCommon__20), join({  SELECTOR: query(`@ input:checked + %`, form_icon),}, tssCommon__21), join({  SELECTOR: query(`@ %`, form_icon),}, tssCommon__22), join({  SELECTOR: query(`@%`, input_sm),}, tssCommon__23), join({  SELECTOR: query(`@%`, input_lg),}, tssCommon__24), join({  SELECTOR: query(`@ %`, form_icon),}, tssCommon__25), join({  SELECTOR: query(`@ input:active + %`, form_icon),}, tssCommon__26), {
  SELECTOR:      query(`@ %`, form_icon),
  border_radius: `.1rem`,
}, {
  SELECTOR:          query(`@ input:checked + %::before`, form_icon),
  background_clip:   `padding-box`,
  border:            `.1rem solid #fff`,
  border_left_width: `0`,
  border_top_width:  `0`,
  content:           `""`,
  height:            `9px`,
  left:              `50%`,
  margin_left:       `-3px`,
  margin_top:        `-6px`,
  position:          `absolute`,
  top:               `50%`,
  transform:         `rotate(45deg)`,
  width:             `6px`,
}, {
  SELECTOR:     query(`@ input:indeterminate + %`, form_icon),
  background:   `#5755d9`,
  border_color: `#5755d9`,
}, {
  SELECTOR:    query(`@ input:indeterminate + %::before`, form_icon),
  background:  `#fff`,
  content:     `""`,
  height:      `2px`,
  left:        `50%`,
  margin_left: `-5px`,
  margin_top:  `-1px`,
  position:    `absolute`,
  top:         `50%`,
  width:       `10px`,
}, join({  SELECTOR: query(`@% %`, is_error, form_icon),}, tssCommon__31), join({  SELECTOR: query(`@% input:checked + %`, is_error, form_icon),}, tssCommon__32), join({  SELECTOR: query(`@% input:focus + %`, is_error, form_icon),}, tssCommon__33), join({  SELECTOR: query(`@% input:indeterminate + %`, is_error, form_icon),}, tssCommon__34));

export const form_radio = tss(tssCommon__18, join({  SELECTOR: `input`,}, tssCommon__19), join({  SELECTOR: query(`@ input:focus + %`, form_icon),}, tssCommon__20), join({  SELECTOR: query(`@ input:checked + %`, form_icon),}, tssCommon__21), join({  SELECTOR: query(`@ %`, form_icon),}, tssCommon__22), join({  SELECTOR: query(`@%`, input_sm),}, tssCommon__23), join({  SELECTOR: query(`@%`, input_lg),}, tssCommon__24), join({  SELECTOR: query(`@ %`, form_icon),}, tssCommon__25), join({  SELECTOR: query(`@ input:active + %`, form_icon),}, tssCommon__26), {
  SELECTOR:      query(`@ %`, form_icon),
  border_radius: `50%`,
}, {
  SELECTOR:      query(`@ input:checked + %::before`, form_icon),
  background:    `#fff`,
  border_radius: `50%`,
  content:       `""`,
  height:        `6px`,
  left:          `50%`,
  position:      `absolute`,
  top:           `50%`,
  transform:     `translate(-50%, -50%)`,
  width:         `6px`,
}, join({  SELECTOR: query(`@% %`, is_error, form_icon),}, tssCommon__31), join({  SELECTOR: query(`@% input:checked + %`, is_error, form_icon),}, tssCommon__32), join({  SELECTOR: query(`@% input:focus + %`, is_error, form_icon),}, tssCommon__33));

export const form_switch = tss(tssCommon__18, join({  SELECTOR: `input`,}, tssCommon__19), join({  SELECTOR: query(`@ input:focus + %`, form_icon),}, tssCommon__20), join({  SELECTOR: query(`@ input:checked + %`, form_icon),}, tssCommon__21), join({  SELECTOR: query(`@ %`, form_icon),}, tssCommon__22), join({  SELECTOR: query(`@%`, input_sm),}, tssCommon__23), join({  SELECTOR: query(`@%`, input_lg),}, tssCommon__24), {
  padding_left: `2rem`,
}, {
  SELECTOR:        query(`@ %`, form_icon),
  background:      `#bcc3ce`,
  background_clip: `padding-box`,
  border_radius:   `.45rem`,
  height:          `.9rem`,
  left:            `0`,
  top:             `.25rem`,
  width:           `1.6rem`,
}, {
  SELECTOR:      query(`@ %::before`, form_icon),
  background:    `#fff`,
  border_radius: `50%`,
  content:       `""`,
  display:       `block`,
  height:        `.8rem`,
  left:          `0`,
  position:      `absolute`,
  top:           `0`,
  transition:    `background .2s, border .2s, box-shadow .2s, color .2s, left .2s`,
  width:         `.8rem`,
}, {
  SELECTOR: query(`@ input:checked + %::before`, form_icon),
  left:     `14px`,
}, {
  SELECTOR:   query(`@ input:active + %::before`, form_icon),
  background: `#f7f8f9`,
}, join({  SELECTOR: query(`@% %`, is_error, form_icon),}, tssCommon__31), join({  SELECTOR: query(`@% input:checked + %`, is_error, form_icon),}, tssCommon__32), join({  SELECTOR: query(`@% input:focus + %`, is_error, form_icon),}, tssCommon__33), {
  SELECTOR:   [query(`@ input:disabled + %::before`, form_icon), query(`@ input% + %::before`, disabled, form_icon)],
  background: `#fff`,
});

export const has_error = tss(join({  SELECTOR: query(`@ %`, form_input_hint),}, tssCommon__15), join({  SELECTOR: [query(`@ %`, form_input), query(`@ %`, form_select)],}, tssCommon__29), join({  SELECTOR: [query(`@ %:focus`, form_input), query(`@ %:focus`, form_select)],}, tssCommon__30), join({  SELECTOR: [query(`@ % %`, form_checkbox, form_icon), query(`@ % %`, form_radio, form_icon), query(`@ % %`, form_switch, form_icon)],}, tssCommon__31), join({  SELECTOR: [query(`@ % input:checked + %`, form_checkbox, form_icon), query(`@ % input:checked + %`, form_radio, form_icon), query(`@ % input:checked + %`, form_switch, form_icon)],}, tssCommon__32), join({  SELECTOR: [query(`@ % input:focus + %`, form_checkbox, form_icon), query(`@ % input:focus + %`, form_radio, form_icon), query(`@ % input:focus + %`, form_switch, form_icon)],}, tssCommon__33), join({  SELECTOR: query(`@ % input:indeterminate + %`, form_checkbox, form_icon),}, tssCommon__34));

export const has_icon_left = tss(tssCommon__16, join({  SELECTOR: query(`@ %`, form_icon),}, tssCommon__17), {
  SELECTOR: query(`@ %`, form_icon),
  left:     `.05rem`,
}, {
  SELECTOR:     query(`@ %`, form_input),
  padding_left: `1.3rem`,
});

export const has_icon_right = tss(tssCommon__16, join({  SELECTOR: query(`@ %`, form_icon),}, tssCommon__17), {
  SELECTOR: query(`@ %`, form_icon),
  right:    `.05rem`,
}, {
  SELECTOR:      query(`@ %`, form_input),
  padding_right: `1.3rem`,
});

export const input_group_addon = tss();

export const addon_sm = tss();

export const addon_lg = tss();

export const input_group_btn = tss();

export const input_group = tss({
  display: [`flex`,`-ms-flexbox`],
}, {
  SELECTOR:      query(`@ %`, input_group_addon),
  background:    `#f7f8f9`,
  border:        `.05rem solid #bcc3ce`,
  border_radius: `.1rem`,
  line_height:   `1.2rem`,
  padding:       `.25rem .4rem`,
  white_space:   `nowrap`,
}, {
  SELECTOR:  query(`@ %%`, input_group_addon, addon_sm),
  font_size: `.7rem`,
  padding:   `.05rem .3rem`,
}, {
  SELECTOR:  query(`@ %%`, input_group_addon, addon_lg),
  font_size: `.9rem`,
  padding:   `.35rem .6rem`,
}, {
  SELECTOR: [query(`@ %`, form_input), query(`@ %`, form_select)],
  _ms_flex: `1 1 auto`,
  flex:     `1 1 auto`,
  width:    `1%`,
}, {
  SELECTOR: query(`@ %`, input_group_btn),
  z_index:  `1`,
}, {
  SELECTOR:                 [query(`@ %:first-child:not(:last-child)`, form_input), query(`@ %:first-child:not(:last-child)`, form_select), query(`@ %:first-child:not(:last-child)`, input_group_addon), query(`@ %:first-child:not(:last-child)`, input_group_btn)],
  border_bottom_right_radius: `0`,
  border_top_right_radius:  `0`,
}, {
  SELECTOR:      [query(`@ %:not(:first-child):not(:last-child)`, form_input), query(`@ %:not(:first-child):not(:last-child)`, form_select), query(`@ %:not(:first-child):not(:last-child)`, input_group_addon), query(`@ %:not(:first-child):not(:last-child)`, input_group_btn)],
  border_radius: `0`,
  margin_left:   `-.05rem`,
}, {
  SELECTOR:                 [query(`@ %:last-child:not(:first-child)`, form_input), query(`@ %:last-child:not(:first-child)`, form_select), query(`@ %:last-child:not(:first-child)`, input_group_addon), query(`@ %:last-child:not(:first-child)`, input_group_btn)],
  border_bottom_left_radius: `0`,
  border_top_left_radius:   `0`,
  margin_left:              `-.05rem`,
}, {
  SELECTOR: [query(`@ %:focus`, form_input), query(`@ %:focus`, form_select), query(`@ %:focus`, input_group_addon), query(`@ %:focus`, input_group_btn)],
  z_index:  `2`,
}, {
  SELECTOR: query(`@ %`, form_select),
  width:    `auto`,
}, {
  SELECTOR: query(`@%`, input_inline),
  display:  [`inline-flex`,`-ms-inline-flexbox`],
});

export const form_group = tss({
  SELECTOR:      `=@:not(:last-child)`,
  margin_bottom: `.4rem`,
});

export const form_horizontal = tss({
  padding: `.4rem 0`,
}, {
  SELECTOR:      query(`@ %`, form_group),
  display:       [`flex`,`-ms-flexbox`],
  _ms_flex_wrap: `wrap`,
  flex_wrap:     `wrap`,
});

export const form_inline = tss({
  display: `inline-block`,
});

export const code = tss({
  border_radius: `.1rem`,
  color:         `#3b4351`,
  position:      `relative`,
}, {
  SELECTOR:  `=@::before`,
  color:     `#bcc3ce`,
  content:   `attr(data-lang)`,
  font_size: `.7rem`,
  position:  `absolute`,
  right:     `.4rem`,
  top:       `.1rem`,
}, {
  SELECTOR:    `code`,
  background:  `#f7f8f9`,
  color:       `inherit`,
  display:     `block`,
  line_height: `1.5`,
  overflow_x:  `auto`,
  padding:     `1rem`,
  width:       `100%`,
});

export const img_responsive = tss({
  display:   `block`,
  height:    `auto`,
  max_width: `100%`,
});

export const img_fit_cover = tss({
  object_fit: `cover`,
});

export const img_fit_contain = tss({
  object_fit: `contain`,
});

export const video_responsive = tss({
  display:  `block`,
  overflow: `hidden`,
  padding:  `0`,
  position: `relative`,
  width:    `100%`,
}, {
  SELECTOR:       `=@::before`,
  content:        `""`,
  display:        `block`,
  padding_bottom: `56.25%`,
}, {
  SELECTOR: [`iframe`, `object`, `embed`],
  border:   `0`,
  bottom:   `0`,
  height:   `100%`,
  left:     `0`,
  position: `absolute`,
  right:    `0`,
  top:      `0`,
  width:    `100%`,
}, {
  SELECTOR:  `=video@`,
  height:    `auto`,
  max_width: `100%`,
}, {
  SELECTOR: `=video@::before`,
  content:  `none`,
});

export const video_responsive_4_3 = tss({
  SELECTOR:       `=@::before`,
  padding_bottom: `75%`,
});

export const video_responsive_1_1 = tss({
  SELECTOR:       `=@::before`,
  padding_bottom: `100%`,
});

export const figure_caption = tss();

export const figure = tss({
  margin: `0 0 .4rem 0`,
}, {
  SELECTOR:   query(`@ %`, figure_caption),
  color:      `#66758c`,
  margin_top: `.4rem`,
});

export const grid_xl = tss();

export const grid_lg = tss();

export const grid_md = tss();

export const grid_sm = tss();

export const grid_xs = tss();

export const container = tss({
  margin_left:   `auto`,
  margin_right:  `auto`,
  padding_left:  `.4rem`,
  padding_right: `.4rem`,
  width:         `100%`,
}, {
  SELECTOR:  query(`@%`, grid_xl),
  max_width: `1296px`,
}, {
  SELECTOR:  query(`@%`, grid_lg),
  max_width: `976px`,
}, {
  SELECTOR:  query(`@%`, grid_md),
  max_width: `856px`,
}, {
  SELECTOR:  query(`@%`, grid_sm),
  max_width: `616px`,
}, {
  SELECTOR:  query(`@%`, grid_xs),
  max_width: `496px`,
});

export const show_xs = tss(tssCommon__37, {
  MEDIA:   tssMedia__5,
  display: `block !important`,
});

export const show_sm = tss(tssCommon__37, {
  MEDIA:   tssMedia__4,
  display: `block !important`,
});

export const show_md = tss(tssCommon__37, {
  MEDIA:   tssMedia__3,
  display: `block !important`,
});

export const show_lg = tss(tssCommon__37, {
  MEDIA:   tssMedia__2,
  display: `block !important`,
});

export const show_xl = tss(tssCommon__37, {
  MEDIA:   tssMedia__1,
  display: `block !important`,
});

export const col_gapless = tss();

export const col_12 = tss({
  width: `100%`,
});

export const col_11 = tss({
  width: `91.66666667%`,
});

export const col_10 = tss({
  width: `83.33333333%`,
});

export const col_9 = tss({
  width: `75%`,
});

export const col_8 = tss({
  width: `66.66666667%`,
});

export const col_7 = tss({
  width: `58.33333333%`,
});

export const col_6 = tss({
  width: `50%`,
});

export const col_5 = tss({
  width: `41.66666667%`,
});

export const col_4 = tss({
  width: `33.33333333%`,
});

export const col_3 = tss({
  width: `25%`,
});

export const col_2 = tss({
  width: `16.66666667%`,
});

export const col_1 = tss({
  width: `8.33333333%`,
});

export const col_auto = tss({
  _ms_flex:  `0 0 auto`,
  flex:      `0 0 auto`,
  max_width: `none`,
  width:     `auto`,
});

export const column = tss({
  _ms_flex:      `1`,
  flex:          `1`,
  max_width:     `100%`,
  padding_left:  `.4rem`,
  padding_right: `.4rem`,
}, {
  SELECTOR: [query(`@%`, col_12), query(`@%`, col_11), query(`@%`, col_10), query(`@%`, col_9), query(`@%`, col_8), query(`@%`, col_7), query(`@%`, col_6), query(`@%`, col_5), query(`@%`, col_4), query(`@%`, col_3), query(`@%`, col_2), query(`@%`, col_1), query(`@%`, col_auto)],
  _ms_flex: `none`,
  flex:     `none`,
});

export const col_oneline = tss();

export const columns = tss({
  display:       [`flex`,`-ms-flexbox`],
  _ms_flex_wrap: `wrap`,
  flex_wrap:     `wrap`,
  margin_left:   `-.4rem`,
  margin_right:  `-.4rem`,
}, {
  SELECTOR:     query(`@%`, col_gapless),
  margin_left:  `0`,
  margin_right: `0`,
}, {
  SELECTOR:      query(`@% > %`, col_gapless, column),
  padding_left:  `0`,
  padding_right: `0`,
}, {
  SELECTOR:      query(`@%`, col_oneline),
  _ms_flex_wrap: `nowrap`,
  flex_wrap:     `nowrap`,
  overflow_x:    `auto`,
});

export const col_mx_auto = tss({
  margin_left:  `auto`,
  margin_right: `auto`,
});

export const col_ml_auto = tss({
  margin_left: `auto`,
});

export const col_mr_auto = tss({
  margin_right: `auto`,
});

export const col_xl_12 = tss(join({  MEDIA: tssMedia__1,}, tssCommon__38), {
  MEDIA: tssMedia__1,
  width: `100%`,
});

export const col_xl_11 = tss(join({  MEDIA: tssMedia__1,}, tssCommon__38), {
  MEDIA: tssMedia__1,
  width: `91.66666667%`,
});

export const col_xl_10 = tss(join({  MEDIA: tssMedia__1,}, tssCommon__38), {
  MEDIA: tssMedia__1,
  width: `83.33333333%`,
});

export const col_xl_9 = tss(join({  MEDIA: tssMedia__1,}, tssCommon__38), {
  MEDIA: tssMedia__1,
  width: `75%`,
});

export const col_xl_8 = tss(join({  MEDIA: tssMedia__1,}, tssCommon__38), {
  MEDIA: tssMedia__1,
  width: `66.66666667%`,
});

export const col_xl_7 = tss(join({  MEDIA: tssMedia__1,}, tssCommon__38), {
  MEDIA: tssMedia__1,
  width: `58.33333333%`,
});

export const col_xl_6 = tss(join({  MEDIA: tssMedia__1,}, tssCommon__38), {
  MEDIA: tssMedia__1,
  width: `50%`,
});

export const col_xl_5 = tss(join({  MEDIA: tssMedia__1,}, tssCommon__38), {
  MEDIA: tssMedia__1,
  width: `41.66666667%`,
});

export const col_xl_4 = tss(join({  MEDIA: tssMedia__1,}, tssCommon__38), {
  MEDIA: tssMedia__1,
  width: `33.33333333%`,
});

export const col_xl_3 = tss(join({  MEDIA: tssMedia__1,}, tssCommon__38), {
  MEDIA: tssMedia__1,
  width: `25%`,
});

export const col_xl_2 = tss(join({  MEDIA: tssMedia__1,}, tssCommon__38), {
  MEDIA: tssMedia__1,
  width: `16.66666667%`,
});

export const col_xl_1 = tss(join({  MEDIA: tssMedia__1,}, tssCommon__38), {
  MEDIA: tssMedia__1,
  width: `8.33333333%`,
});

export const col_xl_auto = tss(join({  MEDIA: tssMedia__1,}, tssCommon__38), {
  MEDIA: tssMedia__1,
  width: `auto`,
});

export const hide_xl = tss({
  MEDIA:   tssMedia__1,
  display: `none !important`,
});

export const col_lg_12 = tss(join({  MEDIA: tssMedia__2,}, tssCommon__39), {
  MEDIA: tssMedia__2,
  width: `100%`,
});

export const col_lg_11 = tss(join({  MEDIA: tssMedia__2,}, tssCommon__39), {
  MEDIA: tssMedia__2,
  width: `91.66666667%`,
});

export const col_lg_10 = tss(join({  MEDIA: tssMedia__2,}, tssCommon__39), {
  MEDIA: tssMedia__2,
  width: `83.33333333%`,
});

export const col_lg_9 = tss(join({  MEDIA: tssMedia__2,}, tssCommon__39), {
  MEDIA: tssMedia__2,
  width: `75%`,
});

export const col_lg_8 = tss(join({  MEDIA: tssMedia__2,}, tssCommon__39), {
  MEDIA: tssMedia__2,
  width: `66.66666667%`,
});

export const col_lg_7 = tss(join({  MEDIA: tssMedia__2,}, tssCommon__39), {
  MEDIA: tssMedia__2,
  width: `58.33333333%`,
});

export const col_lg_6 = tss(join({  MEDIA: tssMedia__2,}, tssCommon__39), {
  MEDIA: tssMedia__2,
  width: `50%`,
});

export const col_lg_5 = tss(join({  MEDIA: tssMedia__2,}, tssCommon__39), {
  MEDIA: tssMedia__2,
  width: `41.66666667%`,
});

export const col_lg_4 = tss(join({  MEDIA: tssMedia__2,}, tssCommon__39), {
  MEDIA: tssMedia__2,
  width: `33.33333333%`,
});

export const col_lg_3 = tss(join({  MEDIA: tssMedia__2,}, tssCommon__39), {
  MEDIA: tssMedia__2,
  width: `25%`,
});

export const col_lg_2 = tss(join({  MEDIA: tssMedia__2,}, tssCommon__39), {
  MEDIA: tssMedia__2,
  width: `16.66666667%`,
});

export const col_lg_1 = tss(join({  MEDIA: tssMedia__2,}, tssCommon__39), {
  MEDIA: tssMedia__2,
  width: `8.33333333%`,
});

export const col_lg_auto = tss(join({  MEDIA: tssMedia__2,}, tssCommon__39), {
  MEDIA: tssMedia__2,
  width: `auto`,
});

export const hide_lg = tss({
  MEDIA:   tssMedia__2,
  display: `none !important`,
});

export const col_md_12 = tss(join({  MEDIA: tssMedia__3,}, tssCommon__40), {
  MEDIA: tssMedia__3,
  width: `100%`,
});

export const col_md_11 = tss(join({  MEDIA: tssMedia__3,}, tssCommon__40), {
  MEDIA: tssMedia__3,
  width: `91.66666667%`,
});

export const col_md_10 = tss(join({  MEDIA: tssMedia__3,}, tssCommon__40), {
  MEDIA: tssMedia__3,
  width: `83.33333333%`,
});

export const col_md_9 = tss(join({  MEDIA: tssMedia__3,}, tssCommon__40), {
  MEDIA: tssMedia__3,
  width: `75%`,
});

export const col_md_8 = tss(join({  MEDIA: tssMedia__3,}, tssCommon__40), {
  MEDIA: tssMedia__3,
  width: `66.66666667%`,
});

export const col_md_7 = tss(join({  MEDIA: tssMedia__3,}, tssCommon__40), {
  MEDIA: tssMedia__3,
  width: `58.33333333%`,
});

export const col_md_6 = tss(join({  MEDIA: tssMedia__3,}, tssCommon__40), {
  MEDIA: tssMedia__3,
  width: `50%`,
});

export const col_md_5 = tss(join({  MEDIA: tssMedia__3,}, tssCommon__40), {
  MEDIA: tssMedia__3,
  width: `41.66666667%`,
});

export const col_md_4 = tss(join({  MEDIA: tssMedia__3,}, tssCommon__40), {
  MEDIA: tssMedia__3,
  width: `33.33333333%`,
});

export const col_md_3 = tss(join({  MEDIA: tssMedia__3,}, tssCommon__40), {
  MEDIA: tssMedia__3,
  width: `25%`,
});

export const col_md_2 = tss(join({  MEDIA: tssMedia__3,}, tssCommon__40), {
  MEDIA: tssMedia__3,
  width: `16.66666667%`,
});

export const col_md_1 = tss(join({  MEDIA: tssMedia__3,}, tssCommon__40), {
  MEDIA: tssMedia__3,
  width: `8.33333333%`,
});

export const col_md_auto = tss(join({  MEDIA: tssMedia__3,}, tssCommon__40), {
  MEDIA: tssMedia__3,
  width: `auto`,
});

export const hide_md = tss({
  MEDIA:   tssMedia__3,
  display: `none !important`,
});

export const col_sm_12 = tss(join({  MEDIA: tssMedia__4,}, tssCommon__41), {
  MEDIA: tssMedia__4,
  width: `100%`,
});

export const col_sm_11 = tss(join({  MEDIA: tssMedia__4,}, tssCommon__41), {
  MEDIA: tssMedia__4,
  width: `91.66666667%`,
});

export const col_sm_10 = tss(join({  MEDIA: tssMedia__4,}, tssCommon__41), {
  MEDIA: tssMedia__4,
  width: `83.33333333%`,
});

export const col_sm_9 = tss(join({  MEDIA: tssMedia__4,}, tssCommon__41), {
  MEDIA: tssMedia__4,
  width: `75%`,
});

export const col_sm_8 = tss(join({  MEDIA: tssMedia__4,}, tssCommon__41), {
  MEDIA: tssMedia__4,
  width: `66.66666667%`,
});

export const col_sm_7 = tss(join({  MEDIA: tssMedia__4,}, tssCommon__41), {
  MEDIA: tssMedia__4,
  width: `58.33333333%`,
});

export const col_sm_6 = tss(join({  MEDIA: tssMedia__4,}, tssCommon__41), {
  MEDIA: tssMedia__4,
  width: `50%`,
});

export const col_sm_5 = tss(join({  MEDIA: tssMedia__4,}, tssCommon__41), {
  MEDIA: tssMedia__4,
  width: `41.66666667%`,
});

export const col_sm_4 = tss(join({  MEDIA: tssMedia__4,}, tssCommon__41), {
  MEDIA: tssMedia__4,
  width: `33.33333333%`,
});

export const col_sm_3 = tss(join({  MEDIA: tssMedia__4,}, tssCommon__41), {
  MEDIA: tssMedia__4,
  width: `25%`,
});

export const col_sm_2 = tss(join({  MEDIA: tssMedia__4,}, tssCommon__41), {
  MEDIA: tssMedia__4,
  width: `16.66666667%`,
});

export const col_sm_1 = tss(join({  MEDIA: tssMedia__4,}, tssCommon__41), {
  MEDIA: tssMedia__4,
  width: `8.33333333%`,
});

export const col_sm_auto = tss(join({  MEDIA: tssMedia__4,}, tssCommon__41), {
  MEDIA: tssMedia__4,
  width: `auto`,
});

export const hide_sm = tss({
  MEDIA:   tssMedia__4,
  display: `none !important`,
});

export const col_xs_12 = tss(join({  MEDIA: tssMedia__5,}, tssCommon__42), {
  MEDIA: tssMedia__5,
  width: `100%`,
});

export const col_xs_11 = tss(join({  MEDIA: tssMedia__5,}, tssCommon__42), {
  MEDIA: tssMedia__5,
  width: `91.66666667%`,
});

export const col_xs_10 = tss(join({  MEDIA: tssMedia__5,}, tssCommon__42), {
  MEDIA: tssMedia__5,
  width: `83.33333333%`,
});

export const col_xs_9 = tss(join({  MEDIA: tssMedia__5,}, tssCommon__42), {
  MEDIA: tssMedia__5,
  width: `75%`,
});

export const col_xs_8 = tss(join({  MEDIA: tssMedia__5,}, tssCommon__42), {
  MEDIA: tssMedia__5,
  width: `66.66666667%`,
});

export const col_xs_7 = tss(join({  MEDIA: tssMedia__5,}, tssCommon__42), {
  MEDIA: tssMedia__5,
  width: `58.33333333%`,
});

export const col_xs_6 = tss(join({  MEDIA: tssMedia__5,}, tssCommon__42), {
  MEDIA: tssMedia__5,
  width: `50%`,
});

export const col_xs_5 = tss(join({  MEDIA: tssMedia__5,}, tssCommon__42), {
  MEDIA: tssMedia__5,
  width: `41.66666667%`,
});

export const col_xs_4 = tss(join({  MEDIA: tssMedia__5,}, tssCommon__42), {
  MEDIA: tssMedia__5,
  width: `33.33333333%`,
});

export const col_xs_3 = tss(join({  MEDIA: tssMedia__5,}, tssCommon__42), {
  MEDIA: tssMedia__5,
  width: `25%`,
});

export const col_xs_2 = tss(join({  MEDIA: tssMedia__5,}, tssCommon__42), {
  MEDIA: tssMedia__5,
  width: `16.66666667%`,
});

export const col_xs_1 = tss(join({  MEDIA: tssMedia__5,}, tssCommon__42), {
  MEDIA: tssMedia__5,
  width: `8.33333333%`,
});

export const col_xs_auto = tss(join({  MEDIA: tssMedia__5,}, tssCommon__42), {
  MEDIA: tssMedia__5,
  width: `auto`,
});

export const hide_xs = tss({
  MEDIA:   tssMedia__5,
  display: `none !important`,
});

export const hero_sm = tss();

export const hero_lg = tss();

export const hero_body = tss();

export const hero = tss({
  display:            [`flex`,`-ms-flexbox`],
  _ms_flex_direction: `column`,
  flex_direction:     `column`,
  _ms_flex_pack:      `justify`,
  justify_content:    `space-between`,
  padding_bottom:     `4rem`,
  padding_top:        `4rem`,
}, {
  SELECTOR:       query(`@%`, hero_sm),
  padding_bottom: `2rem`,
  padding_top:    `2rem`,
}, {
  SELECTOR:       query(`@%`, hero_lg),
  padding_bottom: `8rem`,
  padding_top:    `8rem`,
}, {
  SELECTOR: query(`@ %`, hero_body),
  padding:  `.4rem`,
});

export const navbar_section = tss();

export const navbar_center = tss();

export const navbar_brand = tss();

export const navbar = tss({
  align_items:     `stretch`,
  display:         [`flex`,`-ms-flexbox`],
  _ms_flex_align:  `stretch`,
  _ms_flex_pack:   `justify`,
  _ms_flex_wrap:   `wrap`,
  flex_wrap:       `wrap`,
  justify_content: `space-between`,
}, {
  SELECTOR:       query(`@ %`, navbar_section),
  align_items:    `center`,
  display:        [`flex`,`-ms-flexbox`],
  _ms_flex:       `1 0 0`,
  flex:           `1 0 0`,
  _ms_flex_align: `center`,
}, {
  SELECTOR:        query(`@ %:not(:first-child):last-child`, navbar_section),
  _ms_flex_pack:   `end`,
  justify_content: `flex-end`,
}, {
  SELECTOR:       query(`@ %`, navbar_center),
  align_items:    `center`,
  display:        [`flex`,`-ms-flexbox`],
  _ms_flex:       `0 0 auto`,
  flex:           `0 0 auto`,
  _ms_flex_align: `center`,
}, {
  SELECTOR:        query(`@ %`, navbar_brand),
  font_size:       `.9rem`,
  text_decoration: `none`,
});

export const accordion_header = tss({
  SELECTOR: `=summary@::-webkit-details-marker`,
  display:  `none`,
});

export const icon = tss();

export const accordion_body = tss();

export const accordion = tss({
  SELECTOR:  [query(`@ input:checked ~ % %`, accordion_header, icon), query(`@[open] % %`, accordion_header, icon)],
  transform: `rotate(90deg)`,
}, {
  SELECTOR:   [query(`@ input:checked ~ %`, accordion_body), query(`@[open] %`, accordion_body)],
  max_height: `50rem`,
}, {
  SELECTOR: query(`@ %`, accordion_header),
  display:  `block`,
  padding:  `.2rem .4rem`,
}, {
  SELECTOR:   query(`@ % %`, accordion_header, icon),
  transition: `transform .25s`,
}, {
  SELECTOR:      query(`@ %`, accordion_body),
  margin_bottom: `.4rem`,
  max_height:    `0`,
  overflow:      `hidden`,
  transition:    `max-height .25s`,
});

export const breadcrumb_item = tss();

export const breadcrumb = tss({
  list_style: `none`,
  margin:     `.2rem 0`,
  padding:    `.2rem 0`,
}, {
  SELECTOR: query(`@ %`, breadcrumb_item),
  color:    `#66758c`,
  display:  `inline-block`,
  margin:   `0`,
  padding:  `.2rem 0`,
}, {
  SELECTOR:     query(`@ %:not(:last-child)`, breadcrumb_item),
  margin_right: `.2rem`,
}, {
  SELECTOR: query(`@ %:not(:last-child) a`, breadcrumb_item),
  color:    `#66758c`,
}, {
  SELECTOR:      query(`@ %:not(:first-child)::before`, breadcrumb_item),
  color:         `#66758c`,
  content:       `"/"`,
  padding_right: `.4rem`,
});

export const bar_sm = tss();

export const bar_item = tss();

export const bar = tss({
  background:    `#eef0f3`,
  border_radius: `.1rem`,
  display:       [`flex`,`-ms-flexbox`],
  _ms_flex_wrap: `nowrap`,
  flex_wrap:     `nowrap`,
  height:        `.8rem`,
  width:         `100%`,
}, {
  SELECTOR: query(`@%`, bar_sm),
  height:   `.2rem`,
}, {
  SELECTOR:          query(`@ %`, bar_item),
  background:        `#5755d9`,
  color:             `#fff`,
  display:           `block`,
  _ms_flex_negative: `0`,
  flex_shrink:       `0`,
  font_size:         `.7rem`,
  height:            `100%`,
  line_height:       `.8rem`,
  position:          `relative`,
  text_align:        `center`,
  width:             `0`,
}, {
  SELECTOR:                 query(`@ %:first-child`, bar_item),
  border_bottom_left_radius: `.1rem`,
  border_top_left_radius:   `.1rem`,
}, {
  SELECTOR:                 query(`@ %:last-child`, bar_item),
  border_bottom_right_radius: `.1rem`,
  border_top_right_radius:  `.1rem`,
  _ms_flex_negative:        `1`,
  flex_shrink:              `1`,
});

export const bar_slider_btn = tss();

export const bar_slider = tss({
  height:   `.1rem`,
  margin:   `.4rem 0`,
  position: `relative`,
}, {
  SELECTOR: query(`@ %`, bar_item),
  left:     `0`,
  padding:  `0`,
  position: `absolute`,
}, {
  SELECTOR:   query(`@ %:not(:last-child):first-child`, bar_item),
  background: `#eef0f3`,
  z_index:    `1`,
}, {
  SELECTOR:      query(`@ %`, bar_slider_btn),
  background:    `#5755d9`,
  border:        `0`,
  border_radius: `50%`,
  height:        `.6rem`,
  padding:       `0`,
  position:      `absolute`,
  right:         `0`,
  top:           `50%`,
  transform:     `translate(50%, -50%)`,
  width:         `.6rem`,
}, {
  SELECTOR:   query(`@ %:active`, bar_slider_btn),
  box_shadow: `0 0 0 .1rem #5755d9`,
});

export const avatar_xs = tss();

export const avatar_sm = tss();

export const avatar_lg = tss();

export const avatar_xl = tss();

export const avatar_icon = tss();

export const avatar_presence = tss();

export const online = tss();

export const busy = tss();

export const away = tss();

export const avatar = tss({
  background:     `#5755d9`,
  border_radius:  `50%`,
  color:          `rgba(255, 255, 255, .85)`,
  display:        `inline-block`,
  font_size:      `.8rem`,
  font_weight:    `300`,
  height:         `1.6rem`,
  line_height:    `1.25`,
  margin:         `0`,
  position:       `relative`,
  vertical_align: `middle`,
  width:          `1.6rem`,
}, {
  SELECTOR:  query(`@%`, avatar_xs),
  font_size: `.4rem`,
  height:    `.8rem`,
  width:     `.8rem`,
}, {
  SELECTOR:  query(`@%`, avatar_sm),
  font_size: `.6rem`,
  height:    `1.2rem`,
  width:     `1.2rem`,
}, {
  SELECTOR:  query(`@%`, avatar_lg),
  font_size: `1.2rem`,
  height:    `2.4rem`,
  width:     `2.4rem`,
}, {
  SELECTOR:  query(`@%`, avatar_xl),
  font_size: `1.6rem`,
  height:    `3.2rem`,
  width:     `3.2rem`,
}, {
  SELECTOR:      `img`,
  border_radius: `50%`,
  height:        `100%`,
  position:      `relative`,
  width:         `100%`,
  z_index:       `1`,
}, {
  SELECTOR:   [query(`@ %`, avatar_icon), query(`@ %`, avatar_presence)],
  background: `#fff`,
  bottom:     `14.64%`,
  height:     `50%`,
  padding:    `.1rem`,
  position:   `absolute`,
  right:      `14.64%`,
  transform:  `translate(50%, 50%)`,
  width:      `50%`,
  z_index:    `2`,
}, {
  SELECTOR:      query(`@ %`, avatar_presence),
  background:    `#bcc3ce`,
  border_radius: `50%`,
  box_shadow:    `0 0 0 .1rem #fff`,
  height:        `.5em`,
  width:         `.5em`,
}, {
  SELECTOR:   query(`@ %%`, avatar_presence, online),
  background: `#32b643`,
}, {
  SELECTOR:   query(`@ %%`, avatar_presence, busy),
  background: `#e85600`,
}, {
  SELECTOR:   query(`@ %%`, avatar_presence, away),
  background: `#ffb700`,
}, {
  SELECTOR:  `=@[data-initial]::before`,
  color:     `currentColor`,
  content:   `attr(data-initial)`,
  left:      `50%`,
  position:  `absolute`,
  top:       `50%`,
  transform: `translate(-50%, -50%)`,
  z_index:   `1`,
});

export const btn_clear = tss();

export const chip = tss({
  align_items:     `center`,
  background:      `#eef0f3`,
  border_radius:   `5rem`,
  display:         [`inline-flex`,`-ms-inline-flexbox`],
  _ms_flex_align:  `center`,
  font_size:       `90%`,
  height:          `1.2rem`,
  line_height:     `.8rem`,
  margin:          `.1rem`,
  max_width:       `320px`,
  overflow:        `hidden`,
  padding:         `.2rem .4rem`,
  text_decoration: `none`,
  text_overflow:   `ellipsis`,
  vertical_align:  `middle`,
  white_space:     `nowrap`,
}, {
  SELECTOR:   query(`@%`, active),
  background: `#5755d9`,
  color:      `#fff`,
}, {
  SELECTOR:     query(`@ %`, avatar),
  margin_left:  `-.4rem`,
  margin_right: `.2rem`,
}, {
  SELECTOR:      query(`@ %`, btn_clear),
  border_radius: `50%`,
  transform:     `scale(.75)`,
});

export const menu_nav = tss();

export const menu_item = tss();

export const menu_badge = tss();

export const label_rounded = tss();

export const label_primary = tss();

export const label_secondary = tss();

export const label_success = tss();

export const label_warning = tss();

export const label_error = tss();

export const label = tss({
  background:    `#eef0f3`,
  border_radius: `.1rem`,
  color:         `#455060`,
  display:       `inline-block`,
  line_height:   `1.25`,
  padding:       `.1rem .2rem`,
}, {
  SELECTOR:      query(`@%`, label_rounded),
  border_radius: `5rem`,
  padding_left:  `.4rem`,
  padding_right: `.4rem`,
}, {
  SELECTOR:   query(`@%`, label_primary),
  background: `#5755d9`,
  color:      `#fff`,
}, {
  SELECTOR:   query(`@%`, label_secondary),
  background: `#f1f1fc`,
  color:      `#5755d9`,
}, {
  SELECTOR:   query(`@%`, label_success),
  background: `#32b643`,
  color:      `#fff`,
}, {
  SELECTOR:   query(`@%`, label_warning),
  background: `#ffb700`,
  color:      `#fff`,
}, {
  SELECTOR:   query(`@%`, label_error),
  background: `#e85600`,
  color:      `#fff`,
});

export const menu = tss({
  background:    `#fff`,
  border_radius: `.1rem`,
  box_shadow:    `0 .05rem .2rem rgba(48, 55, 66, .3)`,
  list_style:    `none`,
  margin:        `0`,
  min_width:     `180px`,
  padding:       `.4rem`,
  transform:     `translateY(.2rem)`,
  z_index:       `300`,
}, {
  SELECTOR:   query(`@%`, menu_nav),
  background: `transparent`,
  box_shadow: `none`,
}, {
  SELECTOR:        query(`@ %`, menu_item),
  margin_top:      `0`,
  padding:         `0 .4rem`,
  position:        `relative`,
  text_decoration: `none`,
}, {
  SELECTOR:        query(`@ % > a`, menu_item),
  border_radius:   `.1rem`,
  color:           `inherit`,
  display:         `block`,
  margin:          `0 -.4rem`,
  padding:         `.2rem .4rem`,
  text_decoration: `none`,
}, {
  SELECTOR:   [query(`@ % > a:focus`, menu_item), query(`@ % > a:hover`, menu_item)],
  background: `#f1f1fc`,
  color:      `#5755d9`,
}, {
  SELECTOR:   [query(`@ % > a:active`, menu_item), query(`@ % > a%`, menu_item, active)],
  background: `#f1f1fc`,
  color:      `#5755d9`,
}, {
  SELECTOR: [query(`@ % %`, menu_item, form_checkbox), query(`@ % %`, menu_item, form_radio), query(`@ % %`, menu_item, form_switch)],
  margin:   `.1rem 0`,
}, {
  SELECTOR:   query(`@ % + %`, menu_item, menu_item),
  margin_top: `.2rem`,
}, {
  SELECTOR:       query(`@ %`, menu_badge),
  align_items:    `center`,
  display:        [`flex`,`-ms-flexbox`],
  _ms_flex_align: `center`,
  height:         `100%`,
  position:       `absolute`,
  right:          `0`,
  top:            `0`,
}, {
  SELECTOR:     query(`@ % %`, menu_badge, label),
  margin_right: `.4rem`,
});

export const dropdown_right = tss();

export const dropdown_toggle = tss();

export const loading_lg = tss();

export const loading = tss({
  color:          `transparent !important`,
  min_height:     `.8rem`,
  pointer_events: `none`,
  position:       `relative`,
}, {
  SELECTOR:           `=@::after`,
  animation:          `loading 500ms infinite linear`,
  border:             `.1rem solid #5755d9`,
  border_radius:      `50%`,
  border_right_color: `transparent`,
  border_top_color:   `transparent`,
  content:            `""`,
  display:            `block`,
  height:             `.8rem`,
  left:               `50%`,
  margin_left:        `-.4rem`,
  margin_top:         `-.4rem`,
  position:           `absolute`,
  top:                `50%`,
  width:              `.8rem`,
  z_index:            `1`,
}, {
  SELECTOR:   query(`@%`, loading_lg),
  min_height: `2rem`,
}, {
  SELECTOR:    query(`@%::after`, loading_lg),
  height:      `1.6rem`,
  margin_left: `-.8rem`,
  margin_top:  `-.8rem`,
  width:       `1.6rem`,
});

export const btn_primary = tss();

export const btn_success = tss();

export const btn_error = tss();

export const btn_link = tss();

export const btn_sm = tss();

export const btn_lg = tss();

export const btn_block = tss();

export const btn_action = tss();

export const btn = tss({
  _webkit_appearance:  `none`,
  _moz_appearance:     `none`,
  appearance:          `none`,
  background:          `#fff`,
  border:              `.05rem solid #5755d9`,
  border_radius:       `.1rem`,
  color:               `#5755d9`,
  cursor:              `pointer`,
  display:             `inline-block`,
  font_size:           `.8rem`,
  height:              `1.8rem`,
  line_height:         `1.2rem`,
  outline:             `none`,
  padding:             `.25rem .4rem`,
  text_align:          `center`,
  text_decoration:     `none`,
  transition:          `background .2s, border .2s, box-shadow .2s, color .2s`,
  _webkit_user_select: `none`,
  _moz_user_select:    `none`,
  _ms_user_select:     `none`,
  user_select:         `none`,
  vertical_align:      `middle`,
  white_space:         `nowrap`,
}, {
  SELECTOR:   `=@:focus`,
  box_shadow: `0 0 0 .1rem rgba(87, 85, 217, .2)`,
}, {
  SELECTOR:        [`=@:focus`, `=@:hover`],
  background:      `#f1f1fc`,
  border_color:    `#4b48d6`,
  text_decoration: `none`,
}, {
  SELECTOR:        [`=@:active`, query(`@%`, active)],
  background:      `#4b48d6`,
  border_color:    `#3634d2`,
  color:           `#fff`,
  text_decoration: `none`,
}, {
  SELECTOR:            [query(`@:active%::after`, loading), query(`@%%::after`, active, loading)],
  border_bottom_color: `#fff`,
  border_left_color:   `#fff`,
}, {
  SELECTOR:       [`=@[disabled]`, `=@:disabled`, query(`@%`, disabled)],
  cursor:         `default`,
  opacity:        `.5`,
  pointer_events: `none`,
}, {
  SELECTOR:     query(`@%`, btn_primary),
  background:   `#5755d9`,
  border_color: `#4b48d6`,
  color:        `#fff`,
}, {
  SELECTOR:     [query(`@%:focus`, btn_primary), query(`@%:hover`, btn_primary)],
  background:   `#4240d4`,
  border_color: `#3634d2`,
  color:        `#fff`,
}, {
  SELECTOR:     [query(`@%:active`, btn_primary), query(`@%%`, btn_primary, active)],
  background:   `#3a38d2`,
  border_color: `#302ecd`,
  color:        `#fff`,
}, {
  SELECTOR:            query(`@%%::after`, btn_primary, loading),
  border_bottom_color: `#fff`,
  border_left_color:   `#fff`,
}, {
  SELECTOR:     query(`@%`, btn_success),
  background:   `#32b643`,
  border_color: `#2faa3f`,
  color:        `#fff`,
}, {
  SELECTOR:   query(`@%:focus`, btn_success),
  box_shadow: `0 0 0 .1rem rgba(50, 182, 67, .2)`,
}, {
  SELECTOR:     [query(`@%:focus`, btn_success), query(`@%:hover`, btn_success)],
  background:   `#30ae40`,
  border_color: `#2da23c`,
  color:        `#fff`,
}, {
  SELECTOR:     [query(`@%:active`, btn_success), query(`@%%`, btn_success, active)],
  background:   `#2a9a39`,
  border_color: `#278e34`,
  color:        `#fff`,
}, {
  SELECTOR:            query(`@%%::after`, btn_success, loading),
  border_bottom_color: `#fff`,
  border_left_color:   `#fff`,
}, {
  SELECTOR:     query(`@%`, btn_error),
  background:   `#e85600`,
  border_color: `#d95000`,
  color:        `#fff`,
}, {
  SELECTOR:   query(`@%:focus`, btn_error),
  box_shadow: `0 0 0 .1rem rgba(232, 86, 0, .2)`,
}, {
  SELECTOR:     [query(`@%:focus`, btn_error), query(`@%:hover`, btn_error)],
  background:   `#de5200`,
  border_color: `#cf4d00`,
  color:        `#fff`,
}, {
  SELECTOR:     [query(`@%:active`, btn_error), query(`@%%`, btn_error, active)],
  background:   `#c44900`,
  border_color: `#b54300`,
  color:        `#fff`,
}, {
  SELECTOR:            query(`@%%::after`, btn_error, loading),
  border_bottom_color: `#fff`,
  border_left_color:   `#fff`,
}, {
  SELECTOR:     query(`@%`, btn_link),
  background:   `transparent`,
  border_color: `transparent`,
  color:        `#5755d9`,
}, {
  SELECTOR: [query(`@%:focus`, btn_link), query(`@%:hover`, btn_link), query(`@%:active`, btn_link), query(`@%%`, btn_link, active)],
  color:    `#302ecd`,
}, {
  SELECTOR:  query(`@%`, btn_sm),
  font_size: `.7rem`,
  height:    `1.4rem`,
  padding:   `.05rem .3rem`,
}, {
  SELECTOR:  query(`@%`, btn_lg),
  font_size: `.9rem`,
  height:    `2rem`,
  padding:   `.35rem .6rem`,
}, {
  SELECTOR: query(`@%`, btn_block),
  display:  `block`,
  width:    `100%`,
}, {
  SELECTOR:      query(`@%`, btn_action),
  padding_left:  `0`,
  padding_right: `0`,
  width:         `1.8rem`,
}, {
  SELECTOR: query(`@%%`, btn_action, btn_sm),
  width:    `1.4rem`,
}, {
  SELECTOR: query(`@%%`, btn_action, btn_lg),
  width:    `2rem`,
}, {
  SELECTOR:        query(`@%`, btn_clear),
  background:      `transparent`,
  border:          `0`,
  color:           `currentColor`,
  height:          `1rem`,
  line_height:     `.8rem`,
  margin_left:     `.2rem`,
  margin_right:    `-2px`,
  opacity:         `1`,
  padding:         `.1rem`,
  text_decoration: `none`,
  width:           `1rem`,
}, {
  SELECTOR:   [query(`@%:focus`, btn_clear), query(`@%:hover`, btn_clear)],
  background: `rgba(247, 248, 249, .5)`,
  opacity:    `.95`,
}, {
  SELECTOR: query(`@%::before`, btn_clear),
  content:  `"\\2715"`,
});

export const btn_group_block = tss();

export const btn_group = tss({
  display:       [`inline-flex`,`-ms-inline-flexbox`],
  _ms_flex_wrap: `wrap`,
  flex_wrap:     `wrap`,
}, {
  SELECTOR: query(`@ %`, btn),
  _ms_flex: `1 0 auto`,
  flex:     `1 0 auto`,
}, {
  SELECTOR:                 query(`@ %:first-child:not(:last-child)`, btn),
  border_bottom_right_radius: `0`,
  border_top_right_radius:  `0`,
}, {
  SELECTOR:      query(`@ %:not(:first-child):not(:last-child)`, btn),
  border_radius: `0`,
  margin_left:   `-.05rem`,
}, {
  SELECTOR:                 query(`@ %:last-child:not(:first-child)`, btn),
  border_bottom_left_radius: `0`,
  border_top_left_radius:   `0`,
  margin_left:              `-.05rem`,
}, {
  SELECTOR: [query(`@ %:focus`, btn), query(`@ %:hover`, btn), query(`@ %:active`, btn), query(`@ %%`, btn, active)],
  z_index:  `1`,
}, {
  SELECTOR: query(`@%`, btn_group_block),
  display:  [`flex`,`-ms-flexbox`],
}, {
  SELECTOR: query(`@% %`, btn_group_block, btn),
  _ms_flex: `1 0 0`,
  flex:     `1 0 0`,
});

export const dropdown = tss({
  display:  `inline-block`,
  position: `relative`,
}, {
  SELECTOR:   query(`@ %`, menu),
  animation:  `slide-down .15s ease 1`,
  display:    `none`,
  left:       `0`,
  max_height: `50vh`,
  overflow_y: `auto`,
  position:   `absolute`,
  top:        `100%`,
}, {
  SELECTOR: query(`@% %`, dropdown_right, menu),
  left:     `auto`,
  right:    `0`,
}, {
  SELECTOR: [query(`@% %`, active, menu), query(`@ %:focus + %`, dropdown_toggle, menu), query(`@ %:hover`, menu)],
  display:  `block`,
}, {
  SELECTOR:                 query(`@ % %:nth-last-child(2)`, btn_group, dropdown_toggle),
  border_bottom_right_radius: `.1rem`,
  border_top_right_radius:  `.1rem`,
});

export const empty_icon = tss();

export const empty_title = tss();

export const empty_subtitle = tss();

export const empty_action = tss();

export const empty = tss({
  background:    `#f7f8f9`,
  border_radius: `.1rem`,
  color:         `#66758c`,
  padding:       `3.2rem 1.6rem`,
  text_align:    `center`,
}, {
  SELECTOR:      query(`@ %`, empty_icon),
  margin_bottom: `.8rem`,
}, {
  SELECTOR: [query(`@ %`, empty_title), query(`@ %`, empty_subtitle)],
  margin:   `.4rem auto`,
}, {
  SELECTOR:   query(`@ %`, empty_action),
  margin_top: `.8rem`,
});

export const modal_overlay = tss();

export const modal_fullheight = tss();

export const modal_header = tss();

export const modal_body = tss();

export const modal_footer = tss();

export const modal_container = tss({
  background:         `#fff`,
  border_radius:      `.1rem`,
  box_shadow:         `0 .2rem .5rem rgba(48, 55, 66, .3)`,
  display:            [`flex`,`-ms-flexbox`],
  _ms_flex_direction: `column`,
  flex_direction:     `column`,
  max_height:         `75vh`,
  max_width:          `640px`,
  padding:            `0 .8rem`,
  width:              `100%`,
}, {
  SELECTOR:   query(`@%`, modal_fullheight),
  max_height: `100vh`,
}, {
  SELECTOR: query(`@ %`, modal_header),
  color:    `#303742`,
  padding:  `.8rem`,
}, {
  SELECTOR:   query(`@ %`, modal_body),
  overflow_y: `auto`,
  padding:    `.8rem`,
  position:   `relative`,
}, {
  SELECTOR:   query(`@ %`, modal_footer),
  padding:    `.8rem`,
  text_align: `right`,
});

export const modal_sm = tss();

export const modal_lg = tss();

export const modal = tss({
  align_items:     `center`,
  bottom:          `0`,
  display:         `none`,
  _ms_flex_align:  `center`,
  _ms_flex_pack:   `center`,
  justify_content: `center`,
  left:            `0`,
  opacity:         `0`,
  overflow:        `hidden`,
  padding:         `.4rem`,
  position:        `fixed`,
  right:           `0`,
  top:             `0`,
}, {
  SELECTOR: [`=@:target`, query(`@%`, active)],
  display:  [`flex`,`-ms-flexbox`],
  opacity:  `1`,
  z_index:  `400`,
}, {
  SELECTOR:   [query(`@:target %`, modal_overlay), query(`@% %`, active, modal_overlay)],
  background: `rgba(247, 248, 249, .75)`,
  bottom:     `0`,
  cursor:     `default`,
  display:    `block`,
  left:       `0`,
  position:   `absolute`,
  right:      `0`,
  top:        `0`,
}, {
  SELECTOR:  [query(`@:target %`, modal_container), query(`@% %`, active, modal_container)],
  animation: `slide-down .2s ease 1`,
  z_index:   `1`,
}, {
  SELECTOR:  query(`@% %`, modal_sm, modal_container),
  max_width: `320px`,
  padding:   `0 .4rem`,
}, {
  SELECTOR:   query(`@% %`, modal_lg, modal_overlay),
  background: `#fff`,
}, {
  SELECTOR:   query(`@% %`, modal_lg, modal_container),
  box_shadow: `none`,
  max_width:  `960px`,
});

export const nav_item = tss();

export const nav = tss({
  display:            [`flex`,`-ms-flexbox`],
  _ms_flex_direction: `column`,
  flex_direction:     `column`,
  list_style:         `none`,
  margin:             `.2rem 0`,
}, {
  SELECTOR:        query(`@ % a`, nav_item),
  color:           `#66758c`,
  padding:         `.2rem .4rem`,
  text_decoration: `none`,
}, {
  SELECTOR: [query(`@ % a:focus`, nav_item), query(`@ % a:hover`, nav_item)],
  color:    `#5755d9`,
}, {
  SELECTOR:    query(`@ %% > a`, nav_item, active),
  color:       `#505c6e`,
  font_weight: `bold`,
}, {
  SELECTOR: [query(`@ %% > a:focus`, nav_item, active), query(`@ %% > a:hover`, nav_item, active)],
  color:    `#5755d9`,
}, {
  SELECTOR:      `=@ @`,
  margin_bottom: `.4rem`,
  margin_left:   `.8rem`,
});

export const page_item = tss();

export const page_prev = tss();

export const page_next = tss();

export const page_item_title = tss();

export const page_item_subtitle = tss();

export const pagination = tss({
  display:    [`flex`,`-ms-flexbox`],
  list_style: `none`,
  margin:     `.2rem 0`,
  padding:    `.2rem 0`,
}, {
  SELECTOR: query(`@ %`, page_item),
  margin:   `.2rem .05rem`,
}, {
  SELECTOR: query(`@ % span`, page_item),
  display:  `inline-block`,
  padding:  `.2rem .2rem`,
}, {
  SELECTOR:        query(`@ % a`, page_item),
  border_radius:   `.1rem`,
  display:         `inline-block`,
  padding:         `.2rem .4rem`,
  text_decoration: `none`,
}, {
  SELECTOR: [query(`@ % a:focus`, page_item), query(`@ % a:hover`, page_item)],
  color:    `#5755d9`,
}, {
  SELECTOR:       query(`@ %% a`, page_item, disabled),
  cursor:         `default`,
  opacity:        `.5`,
  pointer_events: `none`,
}, {
  SELECTOR:   query(`@ %% a`, page_item, active),
  background: `#5755d9`,
  color:      `#fff`,
}, {
  SELECTOR: [query(`@ %%`, page_item, page_prev), query(`@ %%`, page_item, page_next)],
  _ms_flex: `1 0 50%`,
  flex:     `1 0 50%`,
}, {
  SELECTOR:   query(`@ %%`, page_item, page_next),
  text_align: `right`,
}, {
  SELECTOR: query(`@ % %`, page_item, page_item_title),
  margin:   `0`,
}, {
  SELECTOR: query(`@ % %`, page_item, page_item_subtitle),
  margin:   `0`,
  opacity:  `.5`,
});

export const panel_header = tss();

export const panel_footer = tss();

export const panel_nav = tss();

export const panel_body = tss();

export const panel = tss({
  border:             `.05rem solid #dadee4`,
  border_radius:      `.1rem`,
  display:            [`flex`,`-ms-flexbox`],
  _ms_flex_direction: `column`,
  flex_direction:     `column`,
}, {
  SELECTOR: [query(`@ %`, panel_header), query(`@ %`, panel_footer)],
  _ms_flex: `0 0 auto`,
  flex:     `0 0 auto`,
  padding:  `.8rem`,
}, {
  SELECTOR: query(`@ %`, panel_nav),
  _ms_flex: `0 0 auto`,
  flex:     `0 0 auto`,
}, {
  SELECTOR:   query(`@ %`, panel_body),
  _ms_flex:   `1 1 auto`,
  flex:       `1 1 auto`,
  overflow_y: `auto`,
  padding:    `0 .8rem`,
});

export const popover_container = tss();

export const popover_right = tss();

export const popover_bottom = tss();

export const popover_left = tss();

export const card_header = tss();

export const card_body = tss();

export const card_footer = tss();

export const card_image = tss();

export const card = tss({
  background:         `#fff`,
  border:             `.05rem solid #dadee4`,
  border_radius:      `.1rem`,
  display:            [`flex`,`-ms-flexbox`],
  _ms_flex_direction: `column`,
  flex_direction:     `column`,
}, {
  SELECTOR:       [query(`@ %`, card_header), query(`@ %`, card_body), query(`@ %`, card_footer)],
  padding:        `.8rem`,
  padding_bottom: `0`,
}, {
  SELECTOR:       [query(`@ %:last-child`, card_header), query(`@ %:last-child`, card_body), query(`@ %:last-child`, card_footer)],
  padding_bottom: `.8rem`,
}, {
  SELECTOR: query(`@ %`, card_body),
  _ms_flex: `1 1 auto`,
  flex:     `1 1 auto`,
}, {
  SELECTOR:    query(`@ %`, card_image),
  padding_top: `.8rem`,
}, {
  SELECTOR:    query(`@ %:first-child`, card_image),
  padding_top: `0`,
}, {
  SELECTOR:                query(`@ %:first-child img`, card_image),
  border_top_left_radius:  `.1rem`,
  border_top_right_radius: `.1rem`,
}, {
  SELECTOR:                 query(`@ %:last-child img`, card_image),
  border_bottom_left_radius: `.1rem`,
  border_bottom_right_radius: `.1rem`,
});

export const popover = tss({
  display:  `inline-block`,
  position: `relative`,
}, {
  SELECTOR:   query(`@ %`, popover_container),
  left:       `50%`,
  opacity:    `0`,
  padding:    `.4rem`,
  position:   `absolute`,
  top:        `0`,
  transform:  `translate(-50%, -50%) scale(0)`,
  transition: `transform .2s`,
  width:      `320px`,
  z_index:    `300`,
}, {
  SELECTOR:  [query(`@ *:focus + %`, popover_container), query(`@:hover %`, popover_container)],
  display:   `block`,
  opacity:   `1`,
  transform: `translate(-50%, -100%) scale(1)`,
}, {
  SELECTOR: query(`@% %`, popover_right, popover_container),
  left:     `100%`,
  top:      `50%`,
}, {
  SELECTOR:  [query(`@% *:focus + %`, popover_right, popover_container), query(`@%:hover %`, popover_right, popover_container)],
  transform: `translate(0, -50%) scale(1)`,
}, {
  SELECTOR: query(`@% %`, popover_bottom, popover_container),
  left:     `50%`,
  top:      `100%`,
}, {
  SELECTOR:  [query(`@% *:focus + %`, popover_bottom, popover_container), query(`@%:hover %`, popover_bottom, popover_container)],
  transform: `translate(-50%, 0) scale(1)`,
}, {
  SELECTOR: query(`@% %`, popover_left, popover_container),
  left:     `0`,
  top:      `50%`,
}, {
  SELECTOR:  [query(`@% *:focus + %`, popover_left, popover_container), query(`@%:hover %`, popover_left, popover_container)],
  transform: `translate(-100%, -50%) scale(1)`,
}, {
  SELECTOR:   query(`@ %`, card),
  border:     `0`,
  box_shadow: `0 .2rem .5rem rgba(48, 55, 66, .3)`,
});

export const step_item = tss();

export const step = tss({
  display:       [`flex`,`-ms-flexbox`],
  _ms_flex_wrap: `nowrap`,
  flex_wrap:     `nowrap`,
  list_style:    `none`,
  margin:        `.2rem 0`,
  width:         `100%`,
}, {
  SELECTOR:   query(`@ %`, step_item),
  _ms_flex:   `1 1 0`,
  flex:       `1 1 0`,
  margin_top: `0`,
  min_height: `1rem`,
  position:   `relative`,
  text_align: `center`,
}, {
  SELECTOR:   query(`@ %:not(:first-child)::before`, step_item),
  background: `#5755d9`,
  content:    `""`,
  height:     `2px`,
  left:       `-50%`,
  position:   `absolute`,
  top:        `9px`,
  width:      `100%`,
}, {
  SELECTOR:        query(`@ % a`, step_item),
  color:           `#5755d9`,
  display:         `inline-block`,
  padding:         `20px 10px 0`,
  text_decoration: `none`,
}, {
  SELECTOR:      query(`@ % a::before`, step_item),
  background:    `#5755d9`,
  border:        `.1rem solid #fff`,
  border_radius: `50%`,
  content:       `""`,
  display:       `block`,
  height:        `.6rem`,
  left:          `50%`,
  position:      `absolute`,
  top:           `.2rem`,
  transform:     `translateX(-50%)`,
  width:         `.6rem`,
  z_index:       `1`,
}, {
  SELECTOR:   query(`@ %% a::before`, step_item, active),
  background: `#fff`,
  border:     `.1rem solid #5755d9`,
}, {
  SELECTOR:   query(`@ %% ~ %::before`, step_item, active, step_item),
  background: `#dadee4`,
}, {
  SELECTOR: query(`@ %% ~ % a`, step_item, active, step_item),
  color:    `#bcc3ce`,
}, {
  SELECTOR:   query(`@ %% ~ % a::before`, step_item, active, step_item),
  background: `#dadee4`,
});

export const tab_item = tss();

export const tab_action = tss();

export const tab_block = tss();

export const badge = tss({
  position:    `relative`,
  white_space: `nowrap`,
}, {
  SELECTOR:        [`=@[data-badge]::after`, `=@:not([data-badge])::after`],
  background:      `#5755d9`,
  background_clip: `padding-box`,
  border_radius:   `.5rem`,
  box_shadow:      `0 0 0 .1rem #fff`,
  color:           `#fff`,
  content:         `attr(data-badge)`,
  display:         `inline-block`,
  transform:       `translate(-.05rem, -.5rem)`,
}, {
  SELECTOR:    `=@[data-badge]::after`,
  font_size:   `.7rem`,
  height:      `.9rem`,
  line_height: `1`,
  min_width:   `.9rem`,
  padding:     `.1rem .2rem`,
  text_align:  `center`,
  white_space: `nowrap`,
}, {
  SELECTOR:  [`=@:not([data-badge])::after`, `=@[data-badge=""]::after`],
  height:    `6px`,
  min_width: `6px`,
  padding:   `0`,
  width:     `6px`,
}, {
  SELECTOR:  query(`@%::after`, btn),
  position:  `absolute`,
  right:     `0`,
  top:       `0`,
  transform: `translate(50%, -50%)`,
}, {
  SELECTOR:  query(`@%::after`, avatar),
  position:  `absolute`,
  right:     `14.64%`,
  top:       `14.64%`,
  transform: `translate(50%, -50%)`,
  z_index:   `100`,
});

export const tab = tss({
  align_items:    `center`,
  border_bottom:  `.05rem solid #dadee4`,
  display:        [`flex`,`-ms-flexbox`],
  _ms_flex_align: `center`,
  _ms_flex_wrap:  `wrap`,
  flex_wrap:      `wrap`,
  list_style:     `none`,
  margin:         `.2rem 0 .15rem 0`,
}, {
  SELECTOR:   query(`@ %`, tab_item),
  margin_top: `0`,
}, {
  SELECTOR:        query(`@ % a`, tab_item),
  border_bottom:   `.1rem solid transparent`,
  color:           `inherit`,
  display:         `block`,
  margin:          `0 .4rem 0 0`,
  padding:         `.4rem .2rem .3rem .2rem`,
  text_decoration: `none`,
}, {
  SELECTOR: [query(`@ % a:focus`, tab_item), query(`@ % a:hover`, tab_item)],
  color:    `#5755d9`,
}, {
  SELECTOR:            [query(`@ %% a`, tab_item, active), query(`@ % a%`, tab_item, active)],
  border_bottom_color: `#5755d9`,
  color:               `#5755d9`,
}, {
  SELECTOR:   query(`@ %%`, tab_item, tab_action),
  _ms_flex:   `1 0 auto`,
  flex:       `1 0 auto`,
  text_align: `right`,
}, {
  SELECTOR:   query(`@ % %`, tab_item, btn_clear),
  margin_top: `-.2rem`,
}, {
  SELECTOR:   query(`@% %`, tab_block, tab_item),
  _ms_flex:   `1 0 0`,
  flex:       `1 0 0`,
  text_align: `center`,
}, {
  SELECTOR: query(`@% % a`, tab_block, tab_item),
  margin:   `0`,
}, {
  SELECTOR:  query(`@% % %[data-badge]::after`, tab_block, tab_item, badge),
  position:  `absolute`,
  right:     `.1rem`,
  top:       `.1rem`,
  transform: `translate(0, 0)`,
}, {
  SELECTOR:      query(`@:not(%) %`, tab_block, badge),
  padding_right: `0`,
});

export const tile_icon = tss();

export const tile_action = tss();

export const tile_content = tss();

export const tile_title = tss();

export const tile_subtitle = tss();

export const tile_centered = tss();

export const tile = tss({
  align_content:      `space-between`,
  align_items:        `flex-start`,
  display:            [`flex`,`-ms-flexbox`],
  _ms_flex_align:     `start`,
  _ms_flex_line_pack: `justify`,
}, {
  SELECTOR: [query(`@ %`, tile_icon), query(`@ %`, tile_action)],
  _ms_flex: `0 0 auto`,
  flex:     `0 0 auto`,
}, {
  SELECTOR: query(`@ %`, tile_content),
  _ms_flex: `1 1 auto`,
  flex:     `1 1 auto`,
}, {
  SELECTOR:     query(`@ %:not(:first-child)`, tile_content),
  padding_left: `.4rem`,
}, {
  SELECTOR:      query(`@ %:not(:last-child)`, tile_content),
  padding_right: `.4rem`,
}, {
  SELECTOR:    [query(`@ %`, tile_title), query(`@ %`, tile_subtitle)],
  line_height: `1.2rem`,
}, {
  SELECTOR:       query(`@%`, tile_centered),
  align_items:    `center`,
  _ms_flex_align: `center`,
}, {
  SELECTOR: query(`@% %`, tile_centered, tile_content),
  overflow: `hidden`,
}, {
  SELECTOR:      [query(`@% %`, tile_centered, tile_title), query(`@% %`, tile_centered, tile_subtitle)],
  margin_bottom: `0`,
  overflow:      `hidden`,
  text_overflow: `ellipsis`,
  white_space:   `nowrap`,
});

export const toast_primary = tss();

export const toast_success = tss();

export const toast_warning = tss();

export const toast_error = tss();

export const toast = tss({
  background:    `rgba(48, 55, 66, .95)`,
  border:        `.05rem solid #303742`,
  border_color:  `#303742`,
  border_radius: `.1rem`,
  color:         `#fff`,
  display:       `block`,
  padding:       `.4rem`,
  width:         `100%`,
}, {
  SELECTOR:     query(`@%`, toast_primary),
  background:   `rgba(87, 85, 217, .95)`,
  border_color: `#5755d9`,
}, {
  SELECTOR:     query(`@%`, toast_success),
  background:   `rgba(50, 182, 67, .95)`,
  border_color: `#32b643`,
}, {
  SELECTOR:     query(`@%`, toast_warning),
  background:   `rgba(255, 183, 0, .95)`,
  border_color: `#ffb700`,
}, {
  SELECTOR:     query(`@%`, toast_error),
  background:   `rgba(232, 86, 0, .95)`,
  border_color: `#e85600`,
}, {
  SELECTOR:        `a`,
  color:           `#fff`,
  text_decoration: `underline`,
}, {
  SELECTOR: [`a:focus`, `a:hover`, `a:active`, query(`@ a%`, active)],
  opacity:  `.75`,
}, {
  SELECTOR: query(`@ %`, btn_clear),
  margin:   `.1rem`,
}, {
  SELECTOR:      `p:last-child`,
  margin_bottom: `0`,
});

export const tooltip_right = tss();

export const tooltip_bottom = tss();

export const tooltip_left = tss();

export const tooltip = tss({
  position: `relative`,
}, {
  SELECTOR:       `=@::after`,
  background:     `rgba(48, 55, 66, .95)`,
  border_radius:  `.1rem`,
  bottom:         `100%`,
  color:          `#fff`,
  content:        `attr(data-tooltip)`,
  display:        `block`,
  font_size:      `.7rem`,
  left:           `50%`,
  max_width:      `320px`,
  opacity:        `0`,
  overflow:       `hidden`,
  padding:        `.2rem .4rem`,
  pointer_events: `none`,
  position:       `absolute`,
  text_overflow:  `ellipsis`,
  transform:      `translate(-50%, .4rem)`,
  transition:     `opacity .2s, transform .2s`,
  white_space:    `pre`,
  z_index:        `300`,
}, {
  SELECTOR:  [`=@:focus::after`, `=@:hover::after`],
  opacity:   `1`,
  transform: `translate(-50%, -.2rem)`,
}, {
  SELECTOR:       [`=@[disabled]`, query(`@%`, disabled)],
  pointer_events: `auto`,
}, {
  SELECTOR:  query(`@%::after`, tooltip_right),
  bottom:    `50%`,
  left:      `100%`,
  transform: `translate(-.2rem, 50%)`,
}, {
  SELECTOR:  [query(`@%:focus::after`, tooltip_right), query(`@%:hover::after`, tooltip_right)],
  transform: `translate(.2rem, 50%)`,
}, {
  SELECTOR:  query(`@%::after`, tooltip_bottom),
  bottom:    `auto`,
  top:       `100%`,
  transform: `translate(-50%, -.4rem)`,
}, {
  SELECTOR:  [query(`@%:focus::after`, tooltip_bottom), query(`@%:hover::after`, tooltip_bottom)],
  transform: `translate(-50%, .2rem)`,
}, {
  SELECTOR:  query(`@%::after`, tooltip_left),
  bottom:    `50%`,
  left:      `auto`,
  right:     `100%`,
  transform: `translate(.4rem, 50%)`,
}, {
  SELECTOR:  [query(`@%:focus::after`, tooltip_left), query(`@%:hover::after`, tooltip_left)],
  transform: `translate(-.2rem, 50%)`,
});

export const text_primary = tss({
  color: `#5755d9 !important`,
}, {
  SELECTOR: [`=a@:focus`, `=a@:hover`],
  color:    `#4240d4`,
}, {
  SELECTOR: `=a@:visited`,
  color:    `#6c6ade`,
});

export const text_secondary = tss({
  color: `#e5e5f9 !important`,
}, {
  SELECTOR: [`=a@:focus`, `=a@:hover`],
  color:    `#d1d0f4`,
}, {
  SELECTOR: `=a@:visited`,
  color:    `#fafafe`,
});

export const text_gray = tss({
  color: `#bcc3ce !important`,
}, {
  SELECTOR: [`=a@:focus`, `=a@:hover`],
  color:    `#adb6c4`,
}, {
  SELECTOR: `=a@:visited`,
  color:    `#cbd0d9`,
});

export const text_light = tss({
  color: `#fff !important`,
}, {
  SELECTOR: [`=a@:focus`, `=a@:hover`],
  color:    `#f2f2f2`,
}, {
  SELECTOR: `=a@:visited`,
  color:    `white`,
});

export const text_dark = tss({
  color: `#3b4351 !important`,
}, {
  SELECTOR: [`=a@:focus`, `=a@:hover`],
  color:    `#303742`,
}, {
  SELECTOR: `=a@:visited`,
  color:    `#455060`,
});

export const text_success = tss({
  color: `#32b643 !important`,
}, {
  SELECTOR: [`=a@:focus`, `=a@:hover`],
  color:    `#2da23c`,
}, {
  SELECTOR: `=a@:visited`,
  color:    `#39c94b`,
});

export const text_warning = tss({
  color: `#ffb700 !important`,
}, {
  SELECTOR: [`=a@:focus`, `=a@:hover`],
  color:    `#e6a500`,
}, {
  SELECTOR: `=a@:visited`,
  color:    `#ffbe1a`,
});

export const text_error = tss({
  color: `#e85600 !important`,
}, {
  SELECTOR: [`=a@:focus`, `=a@:hover`],
  color:    `#cf4d00`,
}, {
  SELECTOR: `=a@:visited`,
  color:    `#ff6003`,
});

export const bg_primary = tss({
  background: `#5755d9 !important`,
  color:      `#fff`,
});

export const bg_secondary = tss({
  background: `#f1f1fc !important`,
});

export const bg_dark = tss({
  background: `#303742 !important`,
  color:      `#fff`,
});

export const bg_gray = tss({
  background: `#f7f8f9 !important`,
});

export const bg_success = tss({
  background: `#32b643 !important`,
  color:      `#fff`,
});

export const bg_warning = tss({
  background: `#ffb700 !important`,
  color:      `#fff`,
});

export const bg_error = tss({
  background: `#e85600 !important`,
  color:      `#fff`,
});

export const c_hand = tss({
  cursor: `pointer`,
});

export const c_move = tss({
  cursor: `move`,
});

export const c_zoom_in = tss({
  cursor: `zoom-in`,
});

export const c_zoom_out = tss({
  cursor: `zoom-out`,
});

export const c_not_allowed = tss({
  cursor: `not-allowed`,
});

export const c_auto = tss({
  cursor: `auto`,
});

export const d_block = tss({
  display: `block`,
});

export const d_inline = tss({
  display: `inline`,
});

export const d_inline_block = tss({
  display: `inline-block`,
});

export const d_flex = tss({
  display: [`flex`,`-ms-flexbox`],
});

export const d_inline_flex = tss({
  display: [`inline-flex`,`-ms-inline-flexbox`],
});

export const d_none = tss(tssCommon__43);

export const d_hide = tss(tssCommon__43);

export const d_visible = tss({
  visibility: `visible`,
});

export const d_invisible = tss({
  visibility: `hidden`,
});

export const text_hide = tss({
  background:  `transparent`,
  border:      `0`,
  color:       `transparent`,
  font_size:   `0`,
  line_height: `0`,
  text_shadow: `none`,
});

export const text_assistive = tss({
  border:   `0`,
  clip:     `rect(0, 0, 0, 0)`,
  height:   `1px`,
  margin:   `-1px`,
  overflow: `hidden`,
  padding:  `0`,
  position: `absolute`,
  width:    `1px`,
});

export const divider = tss(tssCommon__44, join({  SELECTOR: `=@[data-content]::after`,}, tssCommon__45), {
  border_top: `.05rem solid #f1f3f5`,
  height:     `.05rem`,
  margin:     `.4rem 0`,
}, {
  SELECTOR: `=@[data-content]`,
  margin:   `.8rem 0`,
});

export const divider_vert = tss(tssCommon__44, join({  SELECTOR: `=@[data-content]::after`,}, tssCommon__45), {
  display: `block`,
  padding: `.8rem`,
}, {
  SELECTOR:    `=@::before`,
  border_left: `.05rem solid #dadee4`,
  bottom:      `.4rem`,
  content:     `""`,
  display:     `block`,
  left:        `50%`,
  position:    `absolute`,
  top:         `.4rem`,
  transform:   `translateX(-50%)`,
}, {
  SELECTOR:  `=@[data-content]::after`,
  left:      `50%`,
  padding:   `.2rem 0`,
  position:  `absolute`,
  top:       `50%`,
  transform: `translate(-50%, -50%)`,
});

export const clearfix = tss({
  SELECTOR: `=@::after`,
  clear:    `both`,
  content:  `""`,
  display:  `table`,
});

export const float_left = tss({
  float: `left !important`,
});

export const float_right = tss({
  float: `right !important`,
});

export const p_relative = tss({
  position: `relative !important`,
});

export const p_absolute = tss({
  position: `absolute !important`,
});

export const p_fixed = tss({
  position: `fixed !important`,
});

export const p_sticky = tss({
  position: [`sticky !important`,`-webkit-sticky !important`],
});

export const p_centered = tss({
  display:      `block`,
  float:        `none`,
  margin_left:  `auto`,
  margin_right: `auto`,
});

export const flex_centered = tss({
  align_items:     `center`,
  display:         [`flex`,`-ms-flexbox`],
  _ms_flex_align:  `center`,
  _ms_flex_pack:   `center`,
  justify_content: `center`,
});

export const m_0 = tss({
  margin: `0 !important`,
});

export const mb_0 = tss({
  margin_bottom: `0 !important`,
});

export const ml_0 = tss({
  margin_left: `0 !important`,
});

export const mr_0 = tss({
  margin_right: `0 !important`,
});

export const mt_0 = tss({
  margin_top: `0 !important`,
});

export const mx_0 = tss({
  margin_left:  `0 !important`,
  margin_right: `0 !important`,
});

export const my_0 = tss({
  margin_bottom: `0 !important`,
  margin_top:    `0 !important`,
});

export const m_1 = tss({
  margin: `.2rem !important`,
});

export const mb_1 = tss({
  margin_bottom: `.2rem !important`,
});

export const ml_1 = tss({
  margin_left: `.2rem !important`,
});

export const mr_1 = tss({
  margin_right: `.2rem !important`,
});

export const mt_1 = tss({
  margin_top: `.2rem !important`,
});

export const mx_1 = tss({
  margin_left:  `.2rem !important`,
  margin_right: `.2rem !important`,
});

export const my_1 = tss({
  margin_bottom: `.2rem !important`,
  margin_top:    `.2rem !important`,
});

export const m_2 = tss({
  margin: `.4rem !important`,
});

export const mb_2 = tss({
  margin_bottom: `.4rem !important`,
});

export const ml_2 = tss({
  margin_left: `.4rem !important`,
});

export const mr_2 = tss({
  margin_right: `.4rem !important`,
});

export const mt_2 = tss({
  margin_top: `.4rem !important`,
});

export const mx_2 = tss({
  margin_left:  `.4rem !important`,
  margin_right: `.4rem !important`,
});

export const my_2 = tss({
  margin_bottom: `.4rem !important`,
  margin_top:    `.4rem !important`,
});

export const p_0 = tss({
  padding: `0 !important`,
});

export const pb_0 = tss({
  padding_bottom: `0 !important`,
});

export const pl_0 = tss({
  padding_left: `0 !important`,
});

export const pr_0 = tss({
  padding_right: `0 !important`,
});

export const pt_0 = tss({
  padding_top: `0 !important`,
});

export const px_0 = tss({
  padding_left:  `0 !important`,
  padding_right: `0 !important`,
});

export const py_0 = tss({
  padding_bottom: `0 !important`,
  padding_top:    `0 !important`,
});

export const p_1 = tss({
  padding: `.2rem !important`,
});

export const pb_1 = tss({
  padding_bottom: `.2rem !important`,
});

export const pl_1 = tss({
  padding_left: `.2rem !important`,
});

export const pr_1 = tss({
  padding_right: `.2rem !important`,
});

export const pt_1 = tss({
  padding_top: `.2rem !important`,
});

export const px_1 = tss({
  padding_left:  `.2rem !important`,
  padding_right: `.2rem !important`,
});

export const py_1 = tss({
  padding_bottom: `.2rem !important`,
  padding_top:    `.2rem !important`,
});

export const p_2 = tss({
  padding: `.4rem !important`,
});

export const pb_2 = tss({
  padding_bottom: `.4rem !important`,
});

export const pl_2 = tss({
  padding_left: `.4rem !important`,
});

export const pr_2 = tss({
  padding_right: `.4rem !important`,
});

export const pt_2 = tss({
  padding_top: `.4rem !important`,
});

export const px_2 = tss({
  padding_left:  `.4rem !important`,
  padding_right: `.4rem !important`,
});

export const py_2 = tss({
  padding_bottom: `.4rem !important`,
  padding_top:    `.4rem !important`,
});

export const s_rounded = tss({
  border_radius: `.1rem`,
});

export const s_circle = tss({
  border_radius: `50%`,
});

export const text_left = tss({
  text_align: `left`,
});

export const text_right = tss({
  text_align: `right`,
});

export const text_center = tss({
  text_align: `center`,
});

export const text_justify = tss({
  text_align: `justify`,
});

export const text_lowercase = tss({
  text_transform: `lowercase`,
});

export const text_uppercase = tss({
  text_transform: `uppercase`,
});

export const text_capitalize = tss({
  text_transform: `capitalize`,
});

export const text_normal = tss({
  font_weight: `normal`,
});

export const text_bold = tss({
  font_weight: `bold`,
});

export const text_italic = tss({
  font_style: `italic`,
});

export const text_large = tss({
  font_size: `1.2em`,
});

export const text_ellipsis = tss({
  overflow:      `hidden`,
  text_overflow: `ellipsis`,
  white_space:   `nowrap`,
});

export const text_clip = tss({
  overflow:      `hidden`,
  text_overflow: `clip`,
  white_space:   `nowrap`,
});

export const text_break = tss({
  _webkit_hyphens: `auto`,
  _ms_hyphens:     `auto`,
  hyphens:         `auto`,
  word_break:      `break-word`,
  word_wrap:       `break-word`,
});

