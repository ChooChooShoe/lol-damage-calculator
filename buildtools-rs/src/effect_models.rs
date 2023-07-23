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
    pub fn from_leveling() -> Self {
        EffectModel::Damage {
            damagetype: Damagetype::Physical,
            children: Vec::new(),
        }
    }
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(default, rename_all = "camelCase")]
pub struct ChildRatio {
    values: RatioValue,
    #[serde(skip_serializing_if = "Option::is_none")]
    values_ranged: Option<RatioValue>,
    values_is_percent: bool,
    values_is_based_on_level: bool,
    based_on: String, //string | 'level' | 'critical strike chance',
    user: Option<Users>,
    units: String,
    units_text: String,
    pre: String,
    post: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    children: Option<Vec<ChildRatio>>,
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        let result = 2 + 2;
        assert_eq!(result, 4);
    }
}
