let items = [
    { 
        name: "Distant Counter I", 
        description: "While holding this weapon, when you are hit by a ranged attack you may use your reaction to attack the source of the ranged attack if it is within 15 feet of you. Damage dealt in this way is force damage.", 
        cost: 3, 
        prerequisite: "Melee weapons",
        limited: true,
        tier: 1
    },
    ,
    {
        name: "Duelist I",
        description: "When you are hit by a melee attack you can see, you can use your reaction to add 1 to your AC.",
        cost: 2,
        prerequisite: "Melee weapons",
        limited: true,
        tier: 1
    },
    {
        name: "Enhanced Weapon I",
        description: "You have a +1 bonus to attack and damage rolls made with this weapon.",
        cost: 3,
        prerequisite: "",
        limited: true,
        tier: 1
    },
    {
        name: "Infusion I",
        description: "When you select this upgrade, choose a damage type from: acid, cold, fire, force, lightning, necrotic, poison, psychic, radiant, and thunder. Your weapon attacks from this weapon deal an additional 1d6 damage of that type.",
        cost: 5,
        prerequisite: "",
        limited: true,
        tier: 1
    },
    {
        name: "Magical Core I",
        description: "When you select this upgrade, choose any cantrip. You can use an action to cast this cantrip from the item. You can use this ability twice per long rest. The spell attack bonus of this spell is +4, and the spell save DC is 12.",
        cost: 2,
        prerequisite: "",
        limited: true,
        tier: 1
    },
    {
        name: "Magus I",
        description: "Whilst holding this weapon you have a +1 bonus to spell attack rolls and a +1 bonus to AC.",
        cost: 5,
        prerequisite: "",
        limited: true,
        tier: 1
    },
    {
        name: "Slayer I",
        description: "When you select this upgrade, choose an enemy type from, beasts, fey, humanoids, monstrosities, or undead. Your weapon attacks from this weapon deal 2d6 additional damage to all creatures of this type.",
        cost: 5,
        prerequisite: "",
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
        name: "Spell Storing I",
        description: "When you select this upgrade, choose any level 1 spell. You can use an action to cast this spell from the item. You must complete a long rest before you can use this ability again. The spell attack bonus of this spell is +4, and the spell save difficulty is 12.",
        cost: 2,
        prerequisite: "",
        limited: true, 
        tier: 1
    },
    {
        name: "Spell Storing II",
        description: "When you select this upgrade, choose any level 2 spell. You can use an action to cast this spell from the item. You must complete a long rest before you can use this ability again. The spell attack bonus of this spell is +5, and the spell save difficulty is 13.",
        cost: 4,
        prerequisite: "",
        limited: true,
        tier: 1
    },
    {
        name: "Beacon I",
        description: "You can use an action to fire a flare of light from this weapon into the air that can be seen for 2 miles around. The flare is a color of your choosing and remains in the sky for 1 minute. While active, any ally that can see the flare can use their bonus action to dash. After using this property it cannot be used again until the following dawn.",
        cost: 3,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    ,
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
        name: "Giant-Bane",
        description: "Your weapon attacks deal an additional 1d6 damage to creatures of large size or larger.",
        cost: 4,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Gripped",
        description: "You cannot be made to drop this weapon against your will.",
        cost: 1,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Guiding",
        description: "The item sheds bright light in a 15-foot radius, and dim light for an additional 15-foot. When you select this upgrade, you choose the color of the light.",
        cost: 1,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Hidden",
        description: "You can use an action to speak this weapon’s command word, the weapon appears as a different item of a similar size until you speak the command word again to end this effect. The weapon retains all abilities during this time, and if a creature uses its action to examine the item, the creature can determine that it is an illusion with a successful DC 12 Intelligence (Investigation) check. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.",
        cost: 2,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Hinge-Bane",
        description: "You deal maximum damage against inanimate objects with attacks made from this weapon.",
        cost: 1,
        prerequisite: "Melee weapons",
        limited: false,
        tier: 1
    },
    {
        name: "Indomitable I",
        description: "When you are reduced to 0 hit points, you can immediately make an attack with this weapon before you fall unconscious.",
        cost: 1,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Jarring I",
        description: "Any enemy that suffers damage from a weapon attack made by this weapon cannot make attacks of opportunity against you until the beginning of your next turn.",
        cost: 2,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Marksman",
        description: "This weapon does not require physical ammo, upon readying this weapon a spectral arrow or bolt is notched that acts as magical ammo of its normal type.",
        cost: 3,
        prerequisite: "Ranged weapons",
        limited: false,
        tier: 1
    },
    {
        name: "Moonlit Strike",
        description: "You have advantage on attacks against surprised enemies.",
        cost: 2,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Overpower (Brawler)",
        description: "If the d20 roll for an attack made with this weapon is a 19 or 20, you can force a creature that suffers damage from this weapon to make a DC 14 Strength saving throw, in addition to any damage caused. On a failed save, it is knocked prone.",
        cost: 2,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Overpower (Brutish)",
        description: "If the d20 roll for an attack made with this weapon is a 19 or 20, you can force a creature that suffers damage from this weapon to make a DC 14 Strength saving throw, in addition to any damage caused. On a failed save, it is shoved 10 feet in a direction of your choice.",
        cost: 1,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Overpower (Dread)",
        description: "If the d20 roll for an attack made with this weapon is a 19 or 20, you can force a creature that suffers damage from this weapon to make a DC 14 Wisdom saving throw, in addition to any damage caused. On a failed save, it is frightened of you for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on it on a success.",
        cost: 2,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Overpower (Disarming)",
        description: "If the d20 roll for an attack made with this weapon is a 19 or 20, you can force a creature that suffers damage from this weapon to make a DC 14 Strength saving throw, in addition to any damage caused. On a failed save, you can target one item the creature is holding, it drops that item. If it is holding the item in two or more hands, it has advantage on this check.",
        cost: 2,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Overpower (Hamstring)",
        description: "If the d20 roll for an attack made with this weapon is a 19 or 20, you can force a creature that suffers damage from this weapon to make a DC 14 Dexterity saving throw, in addition to any damage caused. On a failed save, its movement speed is halved until your next turn.",
        cost: 1,
        prerequisite: "",
        limited: false,
        tier: 1
    },
    {
        name: "Overpower (Poisonous)",
        description: "If the d20 roll for an attack made with this weapon is a 19 or 20, you can force a creature that suffers damage from this weapon to make a DC14 Constitution saving throw, in addition to any damage caused. On a failed save, it gains the poisoned condition. A creature can repeat the saving throw at the end of each of its turns, ending the effect on it on a success.",
        cost: 2,
        prerequisite: "",
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
        name: "Proficient I",
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
        name: "Unflinching",
        description: "Being within 5 feet of a hostile creature doesn’t impose disadvantage on your ranged attack rolls.",
        cost: 1,
        prerequisite: "Ranged weapons",
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
        name: "Amplify I",
        description: "You gain +1 to an ability score of your choice, to a maximum of 20.",
        cost: 5,
        prerequisite: "",
        limited: true,
        tier: 2
    },
    {
        name: "Bloody Slash I",
        description: "As an action, you deal 1d6 necrotic damage to yourself, coating this weapon with your blood and releasing it in a 15-foot cone. Each creature in the cone must make a Dexterity saving throw, taking 3d6 necrotic damage on a failed save, or half as much on a successful one. You must finish a long rest before using this ability again.",
        cost: 4,
        prerequisite: "Slashing weapons",
        limited: true,
        tier: 2
    },
    {
        name: "Booming I",
        description: "Attacks made with this weapon deal an additional 1d6 thunder damage, which echo with an audible boom. When you make an attack with this weapon you can choose to fully release its power. If you hit with an attack from this weapon,  you can choose to deal an additional 3d6 thunder damage. Once you release this power, this upgrade has no effect until the following dawn.",
        cost: 4,
        prerequisite: "",
        limited: true,
        tier: 2
    },
    {
        name: "Distant Counter II",
        description: "While holding this weapon, when you are hit by a ranged attack you may use your reaction to attack the source of the ranged attack if it is within 30 feet of you. Damage dealt in this way is force damage.",
        cost: 5,
        prerequisite: "Melee weapons",
        limited: true,
        tier: 2
    },
    {
        name: "Duelist II",
        description: "When you are hit by a melee attack you can see, you can use your reaction to add 2 to your AC",
        cost: 4,
        prerequisite: "Melee weapons",
        limited: true,
        tier: 2
    },
    {
        name: "Enhanced Weapon II",
        description: "You have a +2 bonus to attack and damage rolls made with this weapon.",
        cost: 6,
        prerequisite: "",
        limited: false,
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
        name: "Keen I",
        description: "The weapon causes a critical hit when the d20 roll for an attack made with this weapon is a 19 or 20.",
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
        name: "Spirit of the Kraken",
        description: "Each time a creature suffers damage from this weapon, you can force them to make a DC 13 Strength saving throw. On a failed save, shadowy tentacles writhe from the weapon or ammunition, wrapping around the target. The creature’s movement speed is halved and your attacks against them inflict an additional 1d6 bludgeoning damage as the tentacles constrict.\nThe target can attempt to struggle free from the tentacles by using their action to attempt a DC 13 Strength (Athletics) check. The tentacles disappear after one minute or if you target a second creature with this ability.",
        cost: 5,
        prerequisite: "",
        limited: true,
        tier: 2
    },
    {
        name: "Stern",
        description: "At the beginning of your turn, you can declare you are using this ability. Until the beginning of your next turn, you gain a +2 bonus to your AC, and your movement speed is reduced to 0. You cannot take any reactions whilst this ability is in effect.",
        cost: 4,
        prerequisite: "Heavy weapons",
        limited: true,
        tier: 2
    },
    {
        name: "Swashbuckler",
        description: "Once per long rest, you imbue this weapon with the power of the seas. Roll 2d4 and gain a number of Flourish Points for 1 minute equal to that value. When you hit a target with this weapon you can choose to expend a number of flourish points to gain one of the advantages shown below:\nDisarm: 3 Flourish - Your target must pass a DC 12 Strength saving throw or be disarmed.\nKnock Prone: 3 Flourish - Your target must pass a DC 12 Dexterity saving throw or be knocked prone.\nDart: 2 Flourish - Your movement speed is increased by 10 feet until the end of this turn.\nMock: 2 Flourish - The first attack the target makes against you before your next turn is at disadvantage.\nJab: 1+ Flourish - You deal an amount of weapon damage equal to twice the number of flourish points expended.",
        cost: 5,
        prerequisite: "Melee weapons",
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
        name: "Barbaric",
        description: "When you reduce a creature to 0 hit points with this weapon, you gain advantage on your next attack.",
        cost: 2,
        prerequisite: "",
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
        name: "Battlemage",
        description: "When you cast a spell, you can use your bonus action to make an attack with this weapon.",
        cost: 4,
        prerequisite: "Spellcasters",
        limited: false,
        tier: 2
    },
    {
        name: "Blindside I",
        description: "You increase the damage of your sneak attacks made by this weapon by 1d6.",
        cost: 4,
        prerequisite: "Rogues",
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
        name: "Challenge",
        description: "When you use the reckless attack feature, nominate one creature you can see. That creature does not gain advantage against you from that feature until the start of your next turn.",
        cost: 4,
        prerequisite: "Barbarians",
        limited: false,
        tier: 2
    },
    {
        name: "Charged Smite I",
        description: "When you deal damage with the Divine Smite feature, you deal an additional 1d8 radiant damage",
        cost: 2,
        prerequisite: "Paladins",
        limited: false,
        tier: 2
    },
    {
        name: "Distracting I",
        description: "You can use an action to make an attack with this weapon, after you do so you can move up to half your speed. This movement doesn’t provoke opportunity attacks.",
        cost: 2,
        prerequisite: "Ranged weapons",
        limited: false,
        tier: 2
    },
    {
        name: "Divine Grace",
        description: "You can spend 10 minutes concentrating on this weapon to commune with your deity. Over the next 24 hours you can reroll any one dice of your choosing, though you must take the second result. After you have used this reroll, you must complete a short or long rest before you can commune with your deity again to gain this benefit.",
        cost: 2,
        prerequisite: "Clerics",
        limited: false,
        tier: 2
    },
    {
        name: "Divine Touch",
        description: "The first time each turn you deal melee damage with this weapon, an ally of your choice within 5 ft regains d4 hit points.",
        cost: 4,
        prerequisite: "Clerics, Druids, or Paladins",
        limited: false,
        tier: 2
    },
    {
        name: "Doomerang",
        description: "The weapon gains the thrown trait. When used this way it flies back to your hand at the end of your turn via the most direct route. Any creature in its path must make DC 10 Dexterity saving throw, suffering 1d6 damage of the weapon’s type on a failed save.",
        cost: 3,
        prerequisite: "Melee weapons",
        limited: false,
        tier: 2
    },
    {
        name: "En Guard",
        description: "When you or an ally within 5ft is the target of an attack you can see, you can use your reaction for one of the following benefits:\n+5 bonus AC to the target for the duration of the attack.\nAfter the attack you may move up to your speed. This movement doesn’t provoke opportunity attacks.\nMake a melee weapon attack against the attacking creature.\nGain advantage against the attacking creature until the end of your next turn.\nYou must complete a short or long rest before you can use this ability again.",
        cost: 3,
        prerequisite: "Fighters",
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
        name: "Guard",
        description: "You can use your reaction to impose disadvantage on a weapon attack you can see that is targeting an ally within 5ft.",
        cost: 4,
        prerequisite: "Melee weapons",
        limited: false,
        tier: 2
    },
    {
        name: "Hunter's Watch",
        description: "You may use your reaction to make an attack of opportunity against a creature moving within 30 feet of you. A creature hit by this attack must make a DC 14 Dexterity saving throw, in addition to any damage caused. On a failed save, its movement is reduced to 0. You must complete a short or long rest before you can use this ability again.",
        cost: 3,
        prerequisite: "Rangers",
        limited: false,
        tier: 2
    },
    {
        name: "Jarring II",
        description: "Any enemy that you make a weapon attack against with this weapon cannot make attacks of opportunity against you until the beginning of your next turn.",
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
        name: "Moonlit Strike II",
        description: "You have advantage on attacks against surprised enemies and these attacks deal an additional 2d6 weapon damage.",
        cost: 4,
        prerequisite: "",
        limited: false,
        tier: 2
    },
    {
        name: "Precise I",
        description: "You can reroll damage results of 1 from this weapon, and you must accept the second result.",
        cost: 2,
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
        name: "Piercing I",
        description: "You have +2 on attack rolls against enemies with shields.",
        cost: 3,
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
        name: "Quickshot",
        description: "The first time you hit with an attack on your turn, gain advantage on your next attack with this weapon until the end of your turn.",
        cost: 4,
        prerequisite: "Ranged weapons",
        limited: false,
        tier: 2
    },
    {
        name: "Rampaging",
        description: "You have advantage on attacks with this weapon if you began your turn over 20 foot away from the target.",
        cost: 3,
        prerequisite: "Melee weapons",
        limited: false,
        tier: 2
    },
    {
        name: "Reckless",
        description: "When you have advantage on attacks made with this weapon, you can reroll your damage dice. You must accept the second result.",
        cost: 4,
        prerequisite: "",
        limited: false,
        tier: 2
    },
    {
        name: "Reverberation",
        description: "When you make an attack with this weapon, you can expend a bardic inspiration to instill a tale into your attack. If a creature takes damage from this attack it must make a Wisdom saving throw against your spell DC. On a failed roll, the creature is frightened of, or charmed by you, (your choice) for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on it on a success.",
        cost: 5,
        prerequisite: "Bards",
        limited: false,
        tier: 2
    },
    {
        name: "Scout",
        description: "You have advantage on attacks made with this weapon in the first round of combat.",
        cost: 2,
        prerequisite: "",
        limited: false,
        tier: 2
    },
    {
        name: "Sniping",
        description: "When making attacks with this weapon, your target’s cover counts as being one degree lower than it is. For example 3⁄4 cover counts as 1⁄2 cover. This has no effect against creatures not in cover.",
        cost: 3,
        prerequisite: "Ranged weapons",
        limited: false,
        tier: 2
    },
    {
        name: "Spellhunter",
        description: "Attacks with this weapon deal an additional 2d6 psychic damage against spellcasters.",
        cost: 5,
        prerequisite: "",
        limited: false,
        tier: 2
    },
    {
        name: "Sprightly",
        description: "You can use your bonus action to gain advantage on your next attack roll. If the attack hits you must complete a short or long rest before you can use this ability again.",
        cost: 2,
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
        name: "Transposed",
        description: "You can use your bonus action to summon or dismiss this weapon to/from a pocket dimension.",
        cost: 2,
        prerequisite: "",
        limited: false,
        tier: 2
    },
    {
        name: "Trapped Spell",
        description: "When you complete a long rest you can store one spell you know in this item. You can as a bonus action release this spell from the item. You do not need to expend a spell slot, and you ignore any verbal or somatic components.",
        cost: 4,
        prerequisite: "Warlocks",
        limited: false,
        tier: 2
    },
    {
        name: "Underhanded",
        description: "You can use your reaction to cause a melee attack targeting you, or an ally within 5 feet of you, to be made at disadvantage. If this attack misses, you must complete a short or long rest before you can use this ability again.",
        cost: 2,
        prerequisite: "Melee weapons",
        limited: false,
        tier: 2
    },
    {
        name: "Vicious I",
        description: "If the d20 roll for an attack made with this weapon is a 20, your critical hit deals an extra 2d6 damage of the weapon's type.",
        cost: 2,
        prerequisite: "",
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
    },
    {
        name: "Will of the Ancestors",
        description: "You can use an action to release the wills of your ancestors from the blade. “Each enemy within 15 feet must make a DC 14 Wisdom saving throw. An enemy takes 2d8 psychic damage on a failed save, or half as much damage on a successful one. You must complete a short or long rest before you can use this ability again.",
        cost: 4,
        prerequisite: "",
        limited: false,
        tier: 2
    },
    {
        name: "Breath of Life I",
        description: "When you hit a creature with an attack, you can use a bonus action to heal a creature within 10 feet of you. The target creature gains 1d6 hit points.",
        cost: 5,
        prerequisite: "",
        limited: true,
        tier: 3
    },
    {
        name: "Duelist III",
        description: "When you are hit by a melee attack you can see, you can use your reaction to add 3 to your AC.",
        cost: 6,
        prerequisite: "Melee weapons",
        limited: true,
        tier: 3
    },
    {
        name: "Elemental Manipulation",
        description: "When you cast a spell with a spell slot that deals acid, cold, fire, force, lightning, necrotic, radiant, or thunder damage, you can substitute that damage type with one other type from that list (you can change only one damage type per casting of a spell).",
        cost: 5,
        prerequisite: "",
        limited: true,
        tier: 3
    },
    {
        name: "Enhanced Weapon III",
        description: "You have a +3 bonus to attack and damage rolls made with this weapon.",
        cost: 10,
        prerequisite: "",
        limited: true,
        tier: 3
    },
    {
        name: "Gravity Well",
        description: "As an action, thrust the weapon into the ground to create a gravity well. Each creature within 10 feet of you must make a Dexterity saving throw. On a failed save, a creature takes 3d6 force damage and is pulled 5 feet closer to you. On a successful, a creature takes half damage only. You must finish a long rest before using this ability again.",
        cost: 5,
        prerequisite: "Melee weapons",
        limited: true,
        tier: 3
    },
    {
        name: "Infusion II",
        description: "When you select this upgrade, choose an damage type from acid, cold, fire, force, lightning, necrotic, poison, psychic, radiant, and thunder. Your weapon attacks from this weapon deal an additional 2d6 damage of that type.",
        cost: 10,
        prerequisite: "",
        limited: true,
        tier: 3
    },
    {
        name: "Insightful Weapon",
        description: "Attacks made with this weapon can use your Wisdom instead of Strength or Dexterity.",
        cost: 3,
        prerequisite: "Melee weapons",
        limited: true,
        tier: 3
    },
    {
        name: "Inspiring Weapon",
        description: "Attacks made with this weapon can use your Charisma instead of Strength or Dexterity.",
        cost: 3,
        prerequisite: "Melee weapons",
        limited: true,
        tier: 3
    },
    {
        name: "Intellect Weapon",
        description: "Attacks made with this weapon can use your Intelligence instead of Strength or Dexterity.",
        cost: 3,
        prerequisite: "Melee weapons",
        limited: true,
        tier: 3
    },
    {
        name: "Magical Core III",
        description: "When you select this upgrade, choose any level 1 spell. You can use an action to cast this spell from the item. You can use this ability twice per long rest. The spell attack bonus of this spell is +8, and the spell save DC is 16.",
        cost: 6,
        prerequisite: "",
        limited: true,
        tier: 3
    },
    {
        name: "Magus II",
        description: "Whilst holding or wearing this item, you have a +2 bonus to spell attack rolls and a +2 bonus to AC.",
        cost: 8,
        prerequisite: "",
        limited: true,
        tier: 3
    },
    {
        name: "Nebula",
        description: "As an action, you create a misty cloud of magic around you. Each creature within 5 feet of you must make a Dexterity saving throw. On a failed save, a creature takes 3d8 force damage on a failed save, or half as much damage on a successful one. You must finish a long rest before using this ability again. The DC of this ability is 8 + your proficiency bonus + your Intelligence, Wisdom or Charisma modifier (decided when you select this upgrade).",
        cost: 5,
        prerequisite: "Melee weapons",
        limited: true,
        tier: 3
    },
    {
        name: "Night Eye",
        description: "While holding this weapon, you can see in magical darkness.",
        cost: 5,
        prerequisite: "Characters with darkvision",
        limited: true,
        tier: 3
    },
    {
        name: "Rain of Arrows",
        description: "As an action, fire a burst of magical arrows into the air. A flurry of arrows drop in a 30 foot line from you. Each creature in range must succeed on a Dexterity saving throw or take 3d10 piercing damage. On a success, a creature takes half the damage. The DC for this ability equals 8 + your proficiency bonus + your Dexterity modifier. You must finish a long rest before using this ability again.",
        cost: 5,
        prerequisite: "Ranged weapons",
        limited: true,
        tier: 3
    },
    {
        name: "Spell Storing IV",
        description: "When you select this upgrade, choose any level 4 spell. You can use an action to cast this spell from the weapon. You must complete a short or long rest before you can use this ability again. The spell attack bonus of this spell is +8, and the spell save difficulty is 16.",
        cost: 8,
        prerequisite: "",
        limited: true,
        tier: 3
    },
    {
        name: "Spell Link III",
        description: "You gain an additional level 3 spell slot. This spell slot is refreshed on a long rest.",
        cost: 6,
        prerequisite: "Spellcasters",
        limited: true,
        tier: 3
    },
    {
        name: "Spinning Blade",
        description: "When you make an attack with this weapon, you can replace one of your attacks with this ability. Fling the weapon forward in a corkscrew attack, up to a range of 15 feet. The weapon deals damage while violently spinning, dealing additional damage equal to three times the weapon’s base damage die. You may use this ability equal to half your proficiency bonus.",
        cost: 5,
        prerequisite: "Melee weapons",
        limited: true,
        tier: 3
    },
    {
        name: "Wings of Mercy II",
        description: "When you cast a spell of 1st level or higher, you can teleport up to 20 feet to a space you can see that is adjacent to a friendly creature. You must finish a long rest before using this ability again.",
        cost: 4,
        prerequisite: "Spellcasters",
        limited: true,
        tier: 3
    },
    {
        name: "Blindside II",
        description: "You increase the damage of your sneak attacks made by this weapon by 2d6.",
        cost: 8,
        prerequisite: "Rogues",
        limited: false,
        tier: 3
    },
    {
        name: "Blood-Drinker I",
        description: "If the d20 roll for an attack made with this weapon is a 19 or 20, you gain temporary hit points equal to half the damage dealt by this weapon, rounded down.",
        cost: 5,
        prerequisite: "",
        limited: false,
        tier: 3
    },
    {
        name: "Brawn",
        description: "You cannot be knocked prone, and have advantage on grapple checks.",
        cost: 3,
        prerequisite: "",
        limited: false,
        tier: 3
    },
    {
        name: "Charged Smite II",
        description: "When you deal damage with the divine smite feature, you deal an additional 2d8 radiant damage.",
        cost: 4,
        prerequisite: "Paladins",
        limited: false,
        tier: 3
    },
    {
        name: "Distracting II",
        description: "When you can use an action to make an attack with this weapon, before you do so you can move up to half your speed. This movement doesn’t provoke opportunity attacks.",
        cost: 4,
        prerequisite: "Ranged weapons",
        limited: false,
        tier: 3
    },
    {
        name: "Focused",
        description: "When you select this upgrade, pick an ability score. A creature that suffers damage from this weapon suffers disadvantage on saving throws relating to this ability score until your next turn.",
        cost: 4,
        prerequisite: "",
        limited: false,
        tier: 3
    },
    {
        name: "Indomitable II",
        description: "When you are reduced to 0 hit points, you can immediately take the Attack action using this weapon before you fall unconscious.",
        cost: 3,
        prerequisite: "",
        limited: false,
        tier: 3
    },
    {
        name: "Lashing",
        description: "When you make an opportunity attack, you may make an additional attack with this weapon. You do not add your ability modifier to the damage of this attack.",
        cost: 4,
        prerequisite: "",
        limited: false,
        tier: 3
    },
    {
        name: "Nemesis",
        description: "You can nominate a Nemesis for this weapon by spending 10 minutes in concentration, thinking of a target creature you are familiar with. Attacks from this weapon deal an additional 2d8 psychic damage against the target. You cannot change the Nemesis, or select a new one if the target is dead, until 1 week has passed.",
        cost: 4,
        prerequisite: "",
        limited: false,
        tier: 3
    },
    {
        name: "Phantom Step",
        description: "Become temporarily invisible while dodging at high speed. When you are the target of an attack, you can use a reaction to impose disadvantage on the attack and move to any unoccupied space you can see within 10 feet of you.",
        cost: 3,
        prerequisite: "Melee weapons",
        limited: false,
        tier: 3
    },
    {
        name: "Proficient III",
        description: "You gain proficiency in 3 skills of your choice.",
        cost: 6,
        prerequisite: "",
        limited: false,
        tier: 3
    },
    {
        name: "Rapid Strike",
        description: "When you take the Attack action with this weapon, you can use a bonus action to make one additional attack with the same weapon.",
        cost: 5,
        prerequisite: "",
        limited: false,
        tier: 3
    },
    {
        name: "Spelleater",
        description: "After a creature casts a spell while within 5 feet of you, you can spend your reaction to make an attack of opportunity against that creature.",
        cost: 3,
        prerequisite: "",
        limited: false,
        tier: 3
    },
    {
        name: "Spellhunter",
        description: "Concentration checks caused by this weapon are made at disadvantage.",
        cost: 5,
        prerequisite: "",
        limited: false,
        tier: 3
    },
    {
        name: "Sustaining",
        description: "You do not need to eat, drink, or sleep whilst this weapon is in your possession.",
        cost: 3,
        prerequisite: "",
        limited: false,
        tier: 3
    },
    {
        name: "Tracking",
        description: "You can use an action to learn the exact direction of a creature who has taken damage from this weapon. This will only work against creatures who were damaged in the last week, whilst they are within 10 miles.",
        cost: 2,
        prerequisite: "",
        limited: false,
        tier: 3
    },
    {
        name: "Will I",
        description: "You can re-roll a failed concentration check. You must complete a long rest before you can use this ability again.",
        cost: 3,
        prerequisite: "",
        limited: false,
        tier: 3
    },
    {
        name: "Amplify II",
        description: "You gain +2 to an ability score of your choice, to a maximum of 20.",
        cost: 10,
        prerequisite: "",
        limited: true,
        tier: 4
    },
    {
        name: "Blessing of the Dawn",
        description: "As an action, you and a number of creatures of your choice (equal to your proficiency bonus) within 10 feet of you gain this blessing. A creature under the effect of this blessing heals hit points equal to 1d12 + your Wisdom modifier at the start of each of their turns. This effect lasts for 1 minute. If a creature under the effect of this blessing takes necrotic damage, they do not heal at the start of their next turn. This ability cannot be used again until the next dawn. You may only have one Blessing upgrade applied to an item at a time.",
        cost: 6,
        prerequisite: "",
        limited: true,
        tier: 4
    },
    {
        name: "Blessing of the Forge",
        description: "As an action, you and a number of creatures of your choice (equal to your proficiency bonus) within 10 feet of you gain this blessing. This blessing lasts for 1 minute. Melee or range attacks made by a creature under the effect of this blessing deal an additional 2d6 fire damage. This ability cannot be used again until the next dawn. You may only have one Blessing upgrade applied to an item at a time.",
        cost: 6,
        prerequisite: "",
        limited: true,
        tier: 4
    },
    {
        name: "Blessing of Wisdom",
        description: "As an action, you and a number of creatures of your choice (equal to your proficiency bonus) within 10 feet of you gain this blessing. This blessing lasts for 1 minute. Once before this blessing ends, a creature under its effect may have advantage on a saving throw against a spell or other magical effect. On a successful save, if a creature would take half damage, they take 0 damage instead. The blessing fades after a successful save. This ability cannot be used again until the next dawn. You may only have one Blessing upgrade applied to an item at a time.",
        cost: 6,
        prerequisite: "",
        limited: true,
        tier: 4
    },
    {
        name: "Blessing of Battle",
        description: "As an action, you and a number of creatures of your choice (equal to your proficiency bonus) within 10 feet of you gain this blessing. This blessing lasts for 1 minute. All attacks made by a creature under the effect of this blessing deal an additional damage die. This ability cannot be used again until the next dawn. You may only have one Blessing upgrade applied to an item at a time.",
        cost: 6,
        prerequisite: "",
        limited: true,
        tier: 4
    },
    {
        name: "Blessing of Music",
        description: "As an action, you and a number of creatures of your choice (equal to your proficiency bonus) within 10 feet of you gain this blessing. This blessing lasts for 1 minute. A creature under the effect of this blessing gains a 10 feet bonus to movement speed, advantage on Stealth (Dexterity) checks, and may add 1d6 to Dexterity saving throws. This ability cannot be used again until the next dawn. You may only have one Blessing upgrade applied to an item at a time.",
        cost: 6,
        prerequisite: "",
        limited: true,
        tier: 4
    },
    {
        name: "Breath of Life II",
        description: "When you hit a creature with an attack, you can use a bonus action to heal a creature within 10 feet of you. The target creature gains 1d10 hit points.",
        cost: 8,
        prerequisite: "",
        limited: true,
        tier: 4
    },
    {
        name: "Distant Counter III",
        description: "While holding this weapon, when you are hit by a ranged attack, you may use your reaction to attack the source of the ranged attack, regardless of distance. Damage dealt in this way is force damage.",
        cost: 8,
        prerequisite: "Melee weapons",
        limited: true,
        tier: 4
    },
    {
        name: "Guardian II",
        description: "You gain proficiency on a saving throw of your choice. If you can see the source of the effect, you also gain advantage on these saving throws.",
        cost: 7,
        prerequisite: "",
        limited: true,
        tier: 4
    },
    {
        name: "Keen II",
        description: "The weapon causes a critical hit when the d20 roll for an attack made with this weapon is a 18, 19 or 20.",
        cost: 10,
        prerequisite: "",
        limited: true,
        tier: 4
    },
    {
        name: "Magical Core IV",
        description: "When you select this upgrade, choose any level 1 spell. You can use an action to cast this spell from the item. You can use this ability at will. The spell attack bonus of this spell is +8, and the spell save DC is 16.",
        cost: 8,
        prerequisite: "",
        limited: true,
        tier: 4
    },
    {
        name: "Magus III",
        description: "Whilst holding or wearing this item, you have a +3 bonus to spell attack rolls and a +3 bonus to AC.",
        cost: 10,
        prerequisite: "",
        limited: true,
        tier: 4
    },
    {
        name: "Slayer II",
        description: "When you select this upgrade, choose an enemy type from, beasts, fey, humanoids, monstrosities, or undead. Your weapon attacks from this weapon deal 4d6 additional damage to all creatures of this type.",
        cost: 10,
        prerequisite: "",
        limited: true,
        tier: 4
    },
    {
        name: "Spell Storing V",
        description: "When you select this upgrade, choose any level 5 spell. You can use an action to cast this spell from the weapon. You must complete a long rest before you can use this ability again. The spell attack bonus of this spell is +8, and the spell save difficulty is 16.",
        cost: 10,
        prerequisite: "",
        limited: true,
        tier: 4
    },
    {
        name: "Spell Link IV",
        description: "You gain an additional level 4 spell slot. This spell slot is refreshed on a long rest.",
        cost: 8,
        prerequisite: "Spellcasters",
        limited: true,
        tier: 4
    },
    {
        name: "Truesight",
        description: "You have truesight when holding this shield.",
        cost: 10,
        prerequisite: "Shields",
        limited: true,
        tier: 4
    },
    {
        name: "Wings of Mercy III",
        description: "When you cast a spell of 1st level or higher, you can teleport up to 30 feet to a space you can see that is adjacent to a friendly creature. You may use this ability a number of times equal to half your proficiency bonus. You regain expended uses after a long rest.",
        cost: 6,
        prerequisite: "Spellcasters",
        limited: true,
        tier: 4
    },
    {
        name: "Beacon II",
        description: "You can use an action to plant this weapon in the ground. For the next 1 minute, whilst your weapon remains planted, the weapon glows with a divine light, shining bright light in a 30-foot radius, and dim light for an additional 30-foot. All allies within 15 feet gain a +1 bonus to their AC, and their attacks deal d6 additional force damage. Any ally that can draw line of sight to the weapon can take a bonus action to move up to half their movement towards the weapon. This movement doesn’t provoke opportunity attacks. You must complete a short or long rest before you can use this ability again.",
        cost: 5,
        prerequisite: "Melee weapons",
        limited: false,
        tier: 4
    },
    {
        name: "Blood-Drinker II",
        description: "If the d20 roll for an attack made with this weapon is a 19 or 20, you temporary hit points equal to the damage dealt.",
        cost: 7,
        prerequisite: "",
        limited: false,
        tier: 4
    },
    {
        name: "Dancing",
        description: "You use an action to speak the command word allowing this weapon to attack independently for 1 minute. For this duration, the weapon floats in the air and fights independently of you. You may use a bonus action to move the weapon up to 20 feet and make a melee attack as though you were holding it, and you may use your reaction to allow the weapon to make an opportunity attack from the weapon’s location, following the normal attack of opportunity rules. You must complete a short or long rest before you can use this ability again.",
        cost: 5,
        prerequisite: "",
        limited: false,
        tier: 4
    },
    {
        name: "Homing",
        description: "You may attack creatures within range even if you cannot draw line of sight. These attacks are made at disadvantage. Any creature targeted this way counts as being in 3⁄4 cover.",
        cost: 5,
        prerequisite: "Ranged weapons",
        limited: false,
        tier: 4
    },
    {
        name: "Mentor",
        description: "You can cast any spell you know, even one that is not prepared, by expending a spell slot of the highest level available to you. You must complete a long rest before you can use this ability again.",
        cost: 3,
        prerequisite: "Spellcasters",
        limited: false,
        tier: 4
    },
    {
        name: "Mobile II",
        description: "Your base movement speed is increased by 10 feet.",
        cost: 7,
        prerequisite: "",
        limited: false,
        tier: 4
    },
    {
        name: "Piercing II",
        description: "You have +4 on attack rolls against enemies with shields.",
        cost: 5,
        prerequisite: "Melee weapons",
        limited: false,
        tier: 4
    },
    {
        name: "Power Surge",
        description: "Once per day you can use a spell slot to cast a spell you know of up to 2 levels higher than that of the spell slot.",
        cost: 5,
        prerequisite: "",
        limited: false,
        tier: 4
    },
    {
        name: "Precise 2",
        description: "You can reroll damage results from this weapon, you must accept the second result.",
        cost: 6,
        prerequisite: "",
        limited: false,
        tier: 4
    },
    {
        name: "Proficient IV",
        description: "You gain proficiency in 4 skills of your choice.",
        cost: 8,
        prerequisite: "",
        limited: false,
        tier: 4
    },
    {
        name: "Rally",
        description: "You can use an action to raise this weapon in the air and let out a war cry bolstering your allies. For the next minute, your weapon lets off a shining radiance, all allies within 30 feet gain advantage on Wisdom saving throws and are immune to the frightened condition. Any ally moving directly towards you during this time can increase their movement speed by 10 feet. You must complete a short or long rest before you can use this ability again.",
        cost: 4,
        prerequisite: "",
        limited: false,
        tier: 4
    },
    {
        name: "Spectral Reach",
        description: "Increase the range of this weapon by 5 feet for 1 minute. For the duration, the weapon inflicts an additional 2d6 damage. You must complete a short or long rest before you can use this ability again.",
        cost: 5,
        prerequisite: "Melee weapons",
        limited: false,
        tier: 4
    },
    {
        name: "Venomous",
        description: "Each creature damaged by this weapon must succeed on a DC 15 Constitution saving throw or suffer 2d6 poison damage at the start of their round for 1 minute. If the creature's saving throw is successful, they are immune to this effect for the next 24 hours.",
        cost: 7,
        prerequisite: "",
        limited: false,
        tier: 4
    },
    {
        name: "Vicious II",
        description: "If the d20 roll for an attack made with this weapon is a 20, your critical hit deals an extra 4d6 damage of the weapon’s type.",
        cost: 4,
        prerequisite: "",
        limited: false,
        tier: 4
    },
    {
        name: "Will II",
        description: "When you fail a concentration check, you can choose to pass instead. You must complete a long rest before you can use this ability again.",
        cost: 5,
        prerequisite: "Spellcasters",
        limited: false,
        tier: 4
    },
    {
        name: "Whirlwind",
        description: "You can use your action to perform a melee attack against each creature within 5 feet.",
        cost: 5,
        prerequisite: "",
        limited: false,
        tier: 4
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
        tier: 4
    }
*/