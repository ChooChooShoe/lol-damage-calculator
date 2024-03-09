use std::io::Write;
use std::time::Instant;
use std::{fmt::Display, fs::File, io::BufWriter, str::Chars};

use scraper::{node::Element, ElementRef, Html, Node};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq)]
#[serde(untagged)]
pub enum RatioValue {
    Number(f64),
    Numbers(Vec<f64>),
}
impl Default for RatioValue {
    fn default() -> Self {
        RatioValue::Number(0.0)
    }
}
impl From<f64> for RatioValue {
    fn from(value: f64) -> Self {
        RatioValue::Number(value)
    }
}
impl From<Vec<f64>> for RatioValue {
    fn from(value: Vec<f64>) -> Self {
        RatioValue::Numbers(value)
    }
}

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq)]
#[serde(untagged)]
pub enum ScaleValue {
    Number(f64),
    String(String),
    Numbers(Vec<f64>),
    Strings(Vec<String>),
}
impl Default for ScaleValue {
    fn default() -> Self {
        ScaleValue::Number(0.0)
    }
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(untagged, rename_all = "camelCase")]
pub enum Users {
    #[default]
    None,
    Player,
    Target,
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(untagged, rename_all = "camelCase")]
pub enum Damagetype {
    #[default]
    Physical,
    Magic,
    True,
    Adaptive,
}

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq)]
#[serde(tag = "effectType", rename_all = "camelCase")]
pub enum EffectModel {
    Damage {
        damagetype: Damagetype,
        children: Vec<ChildRatio>,
    },
    Stacks {
        min: usize,
        max: usize,
        children: Vec<ChildRatio>,
    },
    Heal {
        heal_type: String,
        children: Vec<ChildRatio>,
    },
    Shield {
        shield_type: String,
        children: Vec<ChildRatio>,
    },
    CrowdControl {
        crowd_control: String,
        duration: f64,
        children: Vec<ChildRatio>,
    },
    Unique {
        children: Vec<ChildRatio>,
    },
}
impl EffectModel {
    pub fn from_html_fragment(fragment: &str) -> Self {
        let x = fragment.replace("<small>", "").replace("</small>", "");
        let html = Html::parse_fragment(&fragment);
        // html.root_element().select(selector);

        EffectModel::Unique { children: vec![] }
    }
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(default, rename_all = "camelCase")]
pub struct ChildRatio {
    // values: RatioValue,
    // #[serde(skip_serializing_if = "Option::is_none")]
    // values_ranged: Option<RatioValue>,
    // values_is_percent: bool,
    // values_is_based_on_level: bool,
    // based_on: String, //string | 'level' | 'critical strike chance',
    // user: Option<Users>,
    // units: String,
    // units_text: String,
    pre: String,
    post: String,
    #[serde(skip_serializing_if = "Vec::is_empty")]
    children: Vec<ChildRatio>,
}
impl ChildRatio {
    pub fn new(values: RatioValue, units: String) -> Self {
        ChildRatio {
            // values,
            // values_ranged: None,
            // values_is_percent: false,
            // values_is_based_on_level: false,
            // based_on: "".to_owned(),
            // user: Some(Users::Player),
            // units,
            // units_text: "".to_owned(),
            pre: "".to_owned(),
            post: "".to_owned(),
            children: vec![],
        }
    }

    fn make_recurcive(chars: &str) -> (Self, usize) {
        let mut pre_text_buf = String::new();
        let mut post_text_buf = String::new();
        let mut active_text_buf = &mut pre_text_buf;
        let mut children = Vec::new();

        let mut end_index = 0;
        let mut it = chars.char_indices();

        while let Some((index, ch)) = it.next() {
            match ch {
                '(' => {
                    // active_text_buf = &mut post_text_buf;
                    let start_index = index + 1;
                    let ret = Self::make_recurcive(&chars[start_index..]);
                    children.push(ret.0);
                    // Skip n chars.
                    it.nth(ret.1);
                }
                ')' => {
                    active_text_buf = &mut post_text_buf;
                    end_index = index;
                    break;
                }
                _ => active_text_buf.push(ch),
            }
        }
        (
            ChildRatio {
                pre: pre_text_buf,
                post: post_text_buf,
                children,
            },
            end_index,
        )
    }
    pub fn from_leveling(name: &str, leveling: &str) -> Self {
        // let children = Vec::new();
        // let mut pre_text_buf = String::new();
        // let mut post_text_buf = String::new();
        // let mut active_text_buf = &mut pre_text_buf;

        let mut res = Self::make_recurcive(leveling);
        // res.pre = pre_text_buf;
        // res.post = post_text_buf;
        // res.children = children;
        res.0
    }
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
struct Ratios {
    values: Vec<f64>,
    values_ranged: String,
    values_is_percent: bool,
    units_text: String,
}
fn level_to_ratio(full_text: &str) -> Ratios {
    let mut values_is_percent = false;
    let mut parts = Vec::with_capacity(10);
    let mut str_buf = String::with_capacity(20);
    let mut units_text = String::with_capacity(100);

    for (_index, ch) in full_text.char_indices() {
        match ch {
            '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' => str_buf.push(ch),
            '.' => str_buf.push(ch),
            '/' => {
                parts.push(str_buf);
                str_buf = String::with_capacity(20);
            }
            '%' => values_is_percent = true,
            '+' => {
                // Skip the +
            }
            _ => units_text.push(ch),
        }
    }
    parts.push(str_buf);

    let values = parts
        .iter()
        .map(|part| part.parse::<f64>().unwrap_or_default())
        .collect();
    Ratios {
        values,
        values_ranged: "None".to_owned(),
        values_is_percent,
        units_text: units_text.trim().to_owned(),
    }
}

#[cfg(test)]
mod tests {
    use scraper::Html;

    use crate::effect_models::{level_to_ratio, ChildRatio, EffectModel, RatioValue, Ratios};

    #[test]
    fn level_to_ratio_a() {
        let level = "+ 70 / 105 / 140 / 175 / 210% AP";
        let a = level_to_ratio(level);
        let b = Ratios {
            values: vec![70.0, 105.0, 140.0, 175.0, 210.0],
            values_ranged: "None".to_owned(),
            values_is_percent: true,
            units_text: "AP".to_owned(),
        };
        assert_eq!(a, b);
    }
    #[test]
    fn level_to_ratio_b() {
        let level = "+ 70 / 105 / 140 / 175 / 210";
        let a = level_to_ratio(level);
        let b = Ratios {
            values: vec![70.0, 105.0, 140.0, 175.0, 210.0],
            values_ranged: "None".to_owned(),
            values_is_percent: false,
            units_text: "".to_owned(),
        };
        assert_eq!(a, b);
    }
    #[test]
    fn level_to_ratio_c() {
        let level = "+ 75% AP";
        let a = level_to_ratio(level);
        let b = Ratios {
            values: vec![75.0],
            values_ranged: "None".to_owned(),
            values_is_percent: true,
            units_text: "AP".to_owned(),
        };
        assert_eq!(a, b);
    }
    #[test]
    fn level_to_ratio_d() {
        let level = "";
        let a = level_to_ratio(level);
        let b = Ratios {
            values: vec![0.0],
            values_ranged: "None".to_owned(),
            values_is_percent: false,
            units_text: "".to_owned(),
        };
        assert_eq!(a, b);
    }
    #[test]
    fn level_to_ratio_hello() {
        let level = "hello";
        let a = level_to_ratio(level);
        let b = Ratios {
            values: vec![0.0],
            values_ranged: "None".to_owned(),
            values_is_percent: false,
            units_text: "hello".to_owned(),
        };
        assert_eq!(a, b);
    }
    #[test]
    fn level_to_ratio_7() {
        let level = "80 / 135 / 190 / 245 / 300 (+ 60% bonus AD) (+ 70 / 75 / 80 / 85 / 90% AP)";
        let a = level_to_ratio(level);
        let b = Ratios {
            values: vec![7.0],
            values_ranged: "None".to_owned(),
            values_is_percent: false,
            units_text: "".to_owned(),
        };
        assert_eq!(a, b);
    }
}

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq)]
#[serde(untagged)]
pub enum Token {
    Text(String),
    Ratio {
        style: String,
        children: Vec<Token>,
    },
    Keyword(String),
    Element {
        style: String,
        children: Vec<Token>,
    },
    ToolTip {
        text: String,
        tooltip: String,
    },
    Img {
        data_image_name: Option<String>,
        data_src: Option<String>,
        data_image_key: Option<String>,
        alt: Option<String>,
    },
    Glossary {
        game: String,
        tip: String,
        children: Vec<Token>,
    },
    // Empty,
}
impl Token {
    pub fn text<T: Into<String>>(t: T) -> Token {
        Token::Text(t.into())
    }
    pub fn ratio<T: Into<String>>(t: T, children: Vec<Token>) -> Token {
        Token::Ratio {
            style: t.into(),
            children,
        }
    }
    pub fn element<T: Into<String>>(t: T, children: Vec<Token>) -> Token {
        Token::Element {
            style: t.into(),
            children,
        }
    }
    pub fn keyword<T: Into<String>>(t: T) -> Token {
        Token::Keyword(t.into())
    }
    // pub fn empty() -> Token {
    //     Token::Empty
    // }

    fn parse_element(el_ref: ElementRef, child_tokens: Vec<Token>) -> Token {
        use scraper::CaseSensitivity::*;
        let el = el_ref.value();
        println!("Element: {:?} {:?} = {el:?}", el.name(), el.attr("style"));

        match el.name() {
            // For Numbers like: 2.<small>5</small>
            "small" => Token::Text(el_ref.inner_html()),
            "b" => Token::Text(el_ref.inner_html()),
            "i" => Token::Text(el_ref.inner_html()),
            "img" => {
                let data_image_name = el.attr("data-image-name").map(str::to_owned);
                let data_src = el.attr("data-src").map(str::to_owned);
                let data_image_key = el.attr("data-image-key").map(str::to_owned);
                let alt = el.attr("alt").map(str::to_owned);

                Token::Img {
                    data_image_name,
                    data_src,
                    data_image_key,
                    alt,
                }
            }
            // Or parse as an element node.
            _ => {
                let style = el.attr("style").unwrap_or_default();
                let capture = RE_RATIOS_SYTLE.captures(style);

                // If is a ratio numbers.
                if let Some(c) = capture.and_then(|x| x.get(1)) {
                    return Token::ratio(c.as_str(), child_tokens);
                } else if el.has_class("basic-tooltip", AsciiCaseInsensitive) || el.name() == "a" {
                    return Token::ToolTip {
                        text: el_ref.inner_html(),
                        tooltip: el.attr("title").unwrap_or_default().to_string(),
                    };
                } else if el.has_class("glossary", AsciiCaseInsensitive) {
                    return Token::Glossary {
                        game: el.attr("data-game").unwrap_or_default().to_string(),
                        tip: el.attr("data-tip").unwrap_or_default().to_string(),
                        children: child_tokens,
                    };
                } else {
                    return Token::element(el.name().to_string(), child_tokens);
                }
            }
        }
    }
}
impl Display for Token {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Token::Element { style, children } => {
                writeln!(
                    f,
                    "Token::Element = {{\n\tstyle: {style},\n\tchildren: {children:?}\n}}"
                )
            }
            Token::Text(t) => writeln!(f, "Token::Text = {t}"),
            Token::Ratio { style, children } => {
                writeln!(
                    f,
                    "Token::Ratio = {{\n\tstyle: {style},\n\tchildren: {children:?}\n}}"
                )
            }
            Token::Keyword(t) => writeln!(f, "Token::Keyword = {t}"),
            Token::ToolTip { text, tooltip } => {
                writeln!(f, "Token::Ratio = {{ text: {text}, tooltip: {tooltip}}}")
            }
            Token::Img {
                data_image_name,
                data_src,
                data_image_key,
                alt,
            } => {
                writeln!(
                    f,
                    "Token::Img = {data_image_name:?} {data_src:?} {data_image_key:?} {alt:?}"
                )
            }
            Token::Glossary {
                game,
                tip,
                children,
            } => {
                writeln!(f, "Token::Glossary = {{ {game}, {tip}, {children:?} }}")
            }
        }
    }
}

pub fn generate_item_effects(
    leaguewiki: &mut crate::leaguewiki::LeagueWiki,
) -> Result<(), Box<dyn std::error::Error>> {
    // let text = crate::ItemEffectModels::youmuu_s_wake_wraith_step;

    let file = File::create("../src/model/items/ItemEffectModels.gen.ts")?;
    let mut w = BufWriter::new(file);

    writeln!(w, "// This file is auto-generated on {:?}", Instant::now())?;
    writeln!(w, "import type {{ RootRatio }} from '@/api/DataTypes';")?;
    writeln!(w, "//prettier-ignore")?;
    writeln!(w, "export type ItemNumber = []")?;

    for (name, text) in crate::ItemEffectModels::ALL {
        let frag = Html::parse_fragment(text);
        let q = parse_children(frag.root_element());

        let json = serde_json::to_string_pretty(&q).unwrap();
        writeln!(w, "export const {name} = {json}")?;
    }
    Ok(())
}

fn parse_children(root: ElementRef) -> Vec<Token> {
    let mut res = Vec::with_capacity(root.children().size_hint().0);
    for child in root.children() {
        let child_token = match child.value() {
            Node::Text(text) => Token::Text(text.to_string()),
            Node::Element(el) => {
                let el_ref = ElementRef::wrap(child).unwrap();
                let child_res = parse_children(el_ref);
                Token::parse_element(el_ref, child_res)
            }
            Node::Document => continue,
            Node::Fragment => continue,
            Node::Doctype(_) => continue,
            Node::Comment(_) => continue,
            Node::ProcessingInstruction(_) => continue,
        };
        // If this child is Token::Text and the last list value was Token::Text
        if let Some(Token::Text(last)) = res.last_mut() {
            if let Token::Text(child_text) = child_token {
                // Merge the text values into one.
                last.push_str(&child_text);
                continue;
            }
        }
        // Or add this non-text Token to the res list.
        res.push(child_token);
    }
    res
}
use regex::Regex;
lazy_static::lazy_static! {
    static ref RE_RATIOS_SYTLE: Regex = Regex::new(r"^color: (#[0-9A-Fa-f]{6}); white-space:normal$").unwrap();
}
