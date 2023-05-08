let items = [
    { 
        name: "Elemental Defense 1", 
        description: "When you select this upgrade, choose a damage type from: acid, cold, fire, force, lightning, necrotic, poison, psychic, radiant, and thunder. You gain resistance against the chosen type while equipped with this item.", 
        cost: 5, 
        prerequisite: "",
        limited: true,
        tier: 1
    },
    { 
        name: "Enhanced Defense 1", 
        description: "You have a +1 bonus to AC while wearing this armor or holding this shield.", 
        cost: 3, 
        prerequisite: "",
        limited: true,
        tier: 1
    },
    { 
        name: "Magical Core 1", 
        description: "When you select this upgrade, choose any cantrip. You can use an action to cast this cantrip from the item. You can use this ability twice per long rest. The spell attack bonus of this spell is +4, and the spell save DC is 12.", 
        cost: 2, 
        prerequisite: "",
        limited: true,
        tier: 1
    },
    {
        name: "Magus 1",
        description: "Whilst holding this weapon or item you have a +1 bonus to spell attack rolls and a +1 bonus to AC.",
        cost: 5,
        prerequisite: "Spellcasters",
        limited: true,
        tier: 1
    },
    {
        name: "Spell Link 1",
        description: "You gain an additional level 1 spell slot. This spell slot is refreshed on a long rest.",
        cost: 2,
        prerequisite: "Spellcasters",
        limited: true,
        tier: 1
    },
    {
        name: "Spell Storing 1",
        description: "When you select this upgrade, choose any level 1 spell. You can use an action to cast this spell from the item. You must complete a long rest before you can use this ability again. The spell attack bonus of this spell is +4, and the spell save difficulty is 12.",
        cost: 2,
        prerequisite: "",
        limited: true, 
        tier: 1
    },
    {
        name: "Spell Storing 2",
        description: "When you select this upgrade, choose any level 2 spell. You can use an action to cast this spell from the item. You must complete a long rest before you can use this ability again. The spell attack bonus of this spell is +5, and the spell save difficulty is 13.",
        cost: 4,
        prerequisite: "",
        limited: true,
        tier: 1
    },
    {
        name: "Arcane Shield",
        description: "When you cast an abjuration or divination spell, you gain temporary hit points equal to your spellcasting modifier for 1 minute.",
        cost: 3,
        prerequisite: "Spellcasters",
        limited: false,
        tier: 1
    },
    {
        name: "Bully",
        description: "You gain advantage on Charisma (Intimidation) checks when the target can see you and you are holding this weapon, shield, or wearing this armor.",
        cost: 1,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Charmward",
        description: "You have advantage on saving throws against the charmed condition.",
        cost: 1,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Darkvision",
        description: "You have darkvision out to a range of 60 feet. If you already have darkvision, increase the range by 60 feet.",
        cost: 3,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Deathward",
        description: "You have advantage on death saving throws.",
        cost: 1,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Fearward",
        description: "You have advantage on saving throws against the frightened condition.",
        cost: 1,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Focus",
        description: "This item counts as a spellcasting focus.",
        cost: 2,
        prerequisite: "Spellcasters",
        limited: false,
        tier: 1
    },
    {
        name: "Fortification (Bold)",
        description: "Once per day, if you are at half your hit point maximum or lower and are hit by a melee attack, you can use a reaction to target the attacking creature. You have advantage on your next attack against the targeted creature.",
        cost: 2,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Fortification (Crafty)",
        description: "Once per day, if you are at half your hit point maximum or lower and are hit by a melee attack, you can use a reaction to move up to half your movement speed without provoking an opportunity attack.",
        cost: 2,
        prerequisite: "",
        limited: false,
        tier: 1
    }
];

/*
,
    {
        name: "",
        description: "",
        cost: ,
        prerequisite: "",
        limited: false,
        tier: 1
    }
*/