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
    },
    {
        name: "Fortification (Daring)",
        description: "Once per day, if you are at half your hit point maximum or lower and a ranged attack is made against you, you can use a reaction to move up to half your movement speed toward the attacking creature.",
        cost: 2,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Fortification (Slick)",
        description: "Once per day, if you are at half your hit point maximum or lower and a melee attack is made against you, you can use a reaction to impose disadvantage on the attack.",
        cost: 2,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Fortification (Special)",
        description: "Once per day, if you are at half your hit point maximum or lower and must make a saving throw against a spell effect, you can use a reaction to gain advantage on the save.",
        cost: 2,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Fortification (Vengeful)",
        description: "Once per day, if you are at half your hit point maximum or lower and are hit by a melee attack, you can use a reaction to curse the attacking creature. Before the end of your next turn, you may add your proficiency bonus to the damage of your next attack against the cursed target. ",
        cost: 2,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Fortification (Wary)",
        description: "Once per day, if you are at half your hit point maximum or lower and are hit by a melee attack, you can use a reaction to reduce the damage taken by half.",
        cost: 3,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Mariner",
        description: "You gain a swim speed equal to your movement speed.",
        cost: 3,
        prerequisite: "Armor",
        limited: false,
        tier: 1
    },
    {
        name: "Poisonward",
        description: "You have advantage on saving throws against the poisoned condition.",
        cost: 1,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Proficient 1",
        description: "You gain proficiency in a skill of your choice.",
        cost: 2,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Quick",
        description: "You have advantage on initiative rolls.",
        cost: 1,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Ritualist",
        description: "The time to ritual cast spells is halved whilst this item is in your possession.",
        cost: 1,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Shadowed",
        description: "When in cover, you count the cover as being one degree higher than it is, for example 1⁄2 cover counts as 3⁄4 cover.",
        cost: 1,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Speak with the Fishes",
        description: "While holding or wearing this item, you can, through a series of gestures, sounds, and actions, communicate simple ideas with amphibian or aquatic beasts.",
        cost: 2,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Willing",
        description: "You can add 1d4 to a skill check, you may use this ability after rolling the check, but before you know if it was successful. You must declare you are using this feature before you make the roll, and you must complete a long rest before you can use this ability again.",
        cost: 1,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Amplify 1",
        description: "You gain +1 to an ability score of your choice, to a maximum of 20.",
        cost: 5,
        prerequisite: "",
        limited: true,
        tier: 2
    },
    {
        name: "Enhanced Defense 2",
        description: "You have a +2 bonus to AC while wearing this armor.",
        cost: 6,
        prerequisite: "",
        limited: true,
        tier: 2
    },
    {
        name: "Guardian I",
        description: "You gain proficiency in a saving throw of your choice.",
        cost: 4,
        prerequisite: "",
        limited: true,
        tier: 2
    },
    {
        name: "Magical Core II",
        description: "When you select this upgrade, choose any cantrip. You can use an action to cast this cantrip from the item. You can use this ability at will. The spell attack bonus of this spell is +6, and the spell save DC is 14.",
        cost: 4,
        prerequisite: "",
        limited: true,
        tier: 2
    },
    {
        name: "Spell Link II",
        description: "You gain an additional level 2 spell slot. This spell slot is refreshed on a long rest.",
        cost: 4,
        prerequisite: "Spellcasters",
        limited: true,
        tier: 2
    },
    {
        name: "Spell Storing III",
        description: "When you select this upgrade, choose any level 3 spell. You can use an action to cast this spell from the item. You must complete a long rest before you can use this ability again. The spell attack bonus of this spell is +6, and the spell save difficulty is 14.",
        cost: 6,
        prerequisite: "",
        limited: true,
        tier: 2
    },
    {
        name: "Wings of Mercy I",
        description: "When you cast a spell of 1st level or higher, you can teleport up to 10 feet to a space you can see that is adjacent to a friendly creature. You must finish a long rest before using this ability again.",
        cost: 2,
        prerequisite: "Spellcasters",
        limited: true,
        tier: 2
    },
    {
        name: "Barrier Shield",
        description: "Focus your energy into your shield to deflect an incoming blow. When a creature makes an attack against you, you can use your reaction to impose disadvantage on the attack.",
        cost: 3,
        prerequisite: "Shields",
        limited: false,
        tier: 2
    },
    {
        name: "Battle Meditation",
        description: "You can use an action to restore ki points equal to half your monk level, rounded down. You must complete a long rest before you can use this ability again.",
        cost: 5,
        prerequisite: "Monks",
        limited: false,
        tier: 2
    },
    {
        name: "Bolstering",
        description: "When you are the target of a spell that causes you to regain hit points, you regain additional hit points equal to your Constitution modifier.",
        cost: 2,
        prerequisite: "",
        limited: false,
        tier: 2
    },
    {
        name: "Divine Grace",
        description: "You can spend 10 minutes concentrating on this item to commune with your deity. Over the next 24 hours you can reroll any one dice of your choosing, though you must take the second result. After you have used this reroll, you must complete a short or long rest before you can commune with your deity again to gain this benefit.",
        cost: 2,
        prerequisite: "Clerics",
        limited: false,
        tier: 2
    },
    {
        name: "Gale",
        description: "As an action, you expend a gale of wind in all directions. Any creature within 10 feet must make a DC 12 Strength saving throw. On a failed save the creature is forced 15 feet directly away from you. In addition, any movement made within 10 feet of you counts as difficult terrain until the start of your next turn. Once used, this property cannot be used again until the following dawn.",
        cost: 4,
        prerequisite: "",
        limited: false,
        tier: 2
    },
    {
        name: "Mobile I",
        description: "our base movement speed is increased by 5 feet.",
        cost: 3,
        prerequisite: "",
        limited: false,
        tier: 2
    },
    {
        name: "Proficient II",
        description: "You gain proficiency in 2 skills of your choice.",
        cost: 4,
        prerequisite: "",
        limited: false,
        tier: 2
    },
    {
        name: "Power of the Ancestors",
        description: "Once per day when you expend sorcery points, you instead do not expend any.",
        cost: 4,
        prerequisite: "Sorcerers",
        limited: false,
        tier: 2
    },
    {
        name: "Pursuit",
        description: "When a hostile creature that you can see moves out of your reach, you may use your reaction to move up to half your movement speed to follow them. You must end your movement as close to the creature as you are able.",
        cost: 3,
        prerequisite: "",
        limited: false,
        tier: 2
    },
    {
        name: "Retaliation I",
        description: "When you are hit by a melee attack the attacking creature takes 1d6 force damage. This feature does not trigger if you are unconscious.",
        cost: 2,
        prerequisite: "",
        limited: false,
        tier: 2
    },
    {
        name: "Speak with the Fishes II",
        description: "Whilst holding this weapon, you gain the ability to comprehend and verbally communicate with amphibian and aquatic beasts. You can attempt to learn simple information regarding the area and might be able to persuade a beast to perform a small favor for you.",
        cost: 4,
        prerequisite: "",
        limited: false,
        tier: 2
    },
    {  
        name: "Telepathic Link",
        description: "The item gifts you the ability to communicate telepathically with any creature you are familiar with within 60 feet, that you can see.",
        cost: 3,
        prerequisite: "",
        limited: false,
        tier: 2
    },
    {
        name: "Transforming",
        description: "You can use an action to turn this item into a mundane version of itself, during this period it cannot be seen by the detect magic spell or similar, and loses all abilities. You can use an action to speak the item’s command word, restoring it to its magical form.",
        cost: 2,
        prerequisite: "",
        limited: false,
        tier: 2
    },
    {
        name: "Trapped Spell",
        description: "hen you complete a long rest you can store one spell you know in this item. You can as a bonus action release this spell from the item. You do not need to expend a spell slot, and you ignore any verbal or somatic components.",
        cost: 4,
        prerequisite: "Warlocks",
        limited: false,
        tier: 2
    },
    {
        name: "Underhanded",
        description: "ou can use your reaction to cause a melee attack targeting you, or an ally within 5 feet of you, to be made at disadvantage. If this attack misses, you must complete a short or long rest before you can use this ability again.",
        cost: 2,
        prerequisite: "Shields",
        limited: false,
        tier: 2
    },
    {
        name: "Wild Spell",
        description: "When you use your Wild Shape feature you can expend a spell slot of the relevant level to ready a spell. Once during your transformation, you can use an action to cast that spell.",
        cost: 3,
        prerequisite: "Druids",
        limited: false,
        tier: 2
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