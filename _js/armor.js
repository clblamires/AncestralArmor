let items = [
    { 
        name: "Elemental Defense I", 
        description: "When you select this upgrade, choose a damage type from: acid, cold, fire, force, lightning, necrotic, poison, psychic, radiant, and thunder. You gain resistance against the chosen type while equipped with this item.", 
        cost: 5, 
        prerequisite: "",
        limited: true,
        tier: 1
    },
    { 
        name: "Enhanced Defense I", 
        description: "You have a +1 bonus to AC while wearing this armor or holding this shield.", 
        cost: 3, 
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
        description: "Whilst holding this weapon or item you have a +1 bonus to spell attack rolls and a +1 bonus to AC.",
        cost: 5,
        prerequisite: "Spellcasters",
        limited: true,
        tier: 1
    },
    {
        name: "Spell Link I",
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
        name: "Amplify I",
        description: "You gain +1 to an ability score of your choice, to a maximum of 20.",
        cost: 5,
        prerequisite: "",
        limited: true,
        tier: 2
    },
    {
        name: "Enhanced Defense II",
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
        description: "You can use your reaction to cause a melee attack targeting you, or an ally within 5 feet of you, to be made at disadvantage. If this attack misses, you must complete a short or long rest before you can use this ability again.",
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
    },
    {
        name: "Barricade Shield",
        description: "As a reaction, you may reduce the damage of an attack made against you by xd6, where x is your proficiency bonus. You must finish a long rest before using this ability again.",
        cost: 5,
        prerequisite: "Shields",
        limited: true,
        tier: 3
    },
    {
        name: "Elemental Manipulation",
        description: "When you cast a spell with a spell slot that deals acid, cold, fire, force, lightning, necrotic, radiant, or thunder damage, you can substitute that damage type with one other type from that list (you can change only one damage type per casting of a spell).",
        cost: 5,
        prerequisite: "Spellcasters",
        limited: true,
        tier: 3
    },
    {
        name: "Elemental Resistance",
        description: "When you select this upgrade, choose a damage type from: fire, cold, lightning, radiant, thunder, necrotic, force, psychic, or poison. You gain resistance to damage of this type.",
        cost:45,
        prerequisite: "",
        limited: true,
        tier: 3
    },
    {
        name: "Enhanced Defense III",
        description: "You have a +3 bonus to AC while wearing this armor.",
        cost: 10,
        prerequisite: "",
        limited: true,
        tier: 3
    },
    {
        name: "Flying",
        description: "Gain a flying speed equal to your movement speed",
        cost: 6,
        prerequisite: "Armor",
        limited: true,
        tier: 3
    },
    {
        name: "Hit and Run",
        description: "When you make an attack against a creature and hit, you can use a bonus action to disengage.",
        cost: 5,
        prerequisite: "",
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
        name: "Renewal",
        description: "At the start of your turn, you gain 1d6 hit points. You don’t gain these hit points if you are unconscious.",
        cost: 8,
        prerequisite: "",
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
        name: "Wings of Mercy II",
        description: "When you cast a spell of 1st level or higher, you can teleport up to 20 feet to a space you can see that is adjacent to a friendly creature. You must finish a long rest before using this ability again.",
        cost: 4,
        prerequisite: "Spellcasters",
        limited: true,
        tier: 3
    },
    {
        name: "Brawn",
        description: "You cannot be knocked prone, and have advantage on grapple checks.",
        cost: 3,
        prerequisite: "Armor",
        limited: false,
        tier: 3
    },
    {
        name: "Hardy",
        description: "You can use an action to spend up to half your hit dice, recovering that much health. You must complete a long rest before you can use this ability again.",
        cost: 3,
        prerequisite: "",
        limited: false,
        tier: 3
    },
    {
        name: "Live to Serve",
        description: "When you cast a spell to heal a single creature, you may heal yourself a number of hit points equal to half the hit points healed by your ally.",
        cost: 4,
        prerequisite: "Spellcasters",
        limited: false,
        tier: 3
    },
    {
        name: "Miracle",
        description: "If you take damage that would reduce you to 0 hit points, you are reduced to 1 hit point instead.",
        cost: 6,
        prerequisite: "",
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
        name: "Retaliation II",
        description: "When you are hit by a melee attack the attacking creature takes 2d6 force damage.",
        cost: 4,
        prerequisite: "",
        limited: false,
        tier: 3
    },
    {
        name: "Shimmering",
        description: "Ranged weapon attacks against you have disadvantage whilst you are within 5 feet of another creature.",
        cost: 4,
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
        name: "Arcane Retaliation",
        description: "As a reaction, you may attempt to counter a spell attack that targets you only. Make an ability check using your Intelligence, Wisdom, or Charisma modifier (decided when you take this upgrade). The DC equals 10 + the spell’s level. On a success, the spell fails and the spellcaster takes xd6 force damage, where x is the level of the interrupted spell. You must finish a long rest before using this ability again.",
        cost: 7,
        prerequisite: "Spellcasters",
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
        name: "Guardian II",
        description: "You gain proficiency on a saving throw of your choice. If you can see the source of the effect, you also gain advantage on these saving throws.",
        cost: 7,
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
        name: "Power Surge",
        description: "Once per day you can use a spell slot to cast a spell you know of up to 2 levels higher than that of the spell slot.",
        cost: 5,
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
        name: "Proficient IV",
        description: "You gain proficiency in 4 skills of your choice.",
        cost: 8,
        prerequisite: "",
        limited: false,
        tier: 4
    },
    {
        name: "Protective",
        description: "You can make a saving throw at advantage, you must complete a short or long rest before you can use this ability again.",
        cost: 8,
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