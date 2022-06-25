# idle-rpg

So far, just an idea. This is a place to gather notes, information, and sources.

# License

Notice on the GPL-3.0 license: 

`The Free Software Foundation recommends taking the additional step of adding a boilerplate notice to the top of each file. The boilerplate can be found at the end of the license.`

`Add GPL-3.0-or-later (or GPL-3.0-only to disallow future versions) to your project’s package description, if applicable (e.g., Node.js, Ruby, and Rust). This will ensure the license is displayed in package directories.`

# How The Increment Works

The increment itself will be experience points that the party gains the more they fight. The player will manually control the party leader (aka, the clicker), but clicking can be automated by adding weapons to the party leader and recruiting more characters to the party.

## The Party

The player can recruit as many characters as they want to their party, barring that they don't have more than one character with the same job. (The party may have to go through upgrades to add more characters, like Party > Guild or something.)

Three characters can be active at all times. One character (the party leader) must always be active. The inactive/benched characters will still provide increments but at a reduced (or special) rate. Story-wise, this will be them handling their own work at home while the active party adventures.

The player can change characters in the active party up to three times a day.

## Progression

As the game continues, enemies will become stronger, allowing more exp to be gained per enemy. However, some enemies may take several (or many) clicks to kill, making these a type of investment for the player. Boss battles, for example, may take either a lot of time or a lot of strategy.

Characters will also be able to spend exp to level up, which will boost their stats and allow them to collect more exp.

## Story

TBD but most aspects will be randomly generated so that every player can have a slightly different experience and to improve re-playability. This is will also give it a type of rogue-lite feel.

The main plot everyone experiences will based around the increment itself. For some reason, the party must intentionally gain a lot of experience points and basically perform like a factory to automate the process of earning exp. Story-wise, maybe they're trying to learn a secret summoning ritual or see the future or something.

## World Map

It is unlikely any maps will be implemented. Different areas or levels will contain different themes (tundra, beach, etc). There will not be a set number of "rooms" in these areas. Once a player reaches a certain level or exp limit, they will have the option to advance.

## Enemies & Battle

Enemies will be unique in every "area" or level. They will have their own stats and battles will be decided via AI.

Character actions will be similar to Final Fantasy XII's use of the [Gambit system](https://finalfantasy.fandom.com/wiki/Gambits).

## Shop

**Not a use of real money.** Gold will be the in-game currency. Increment of gold will depend on the current area/how quickly enemies are defeated.

The shop will contain upgrades such as:

- Equipment
- Magic

## Upgrades

**Not a use of real money.** Upgrades will be "purchased" with the main increment (aka. exp points). This will be the central focus of the game.

Upgrades will include:

- More party slots
- New abilities
- The option to transition job classes
- Advancement to new areas
- Boss battles
- Chance to acquire a Summon


## Stats

- HP
- MP
- Strength
- Defense
- Magic Strength
- Magic Defense
- Evasion
- Accuracy
- Speed
- Luck (crit chance)

## Jobs

Jobs will progress in classes as characters level up. Jobs will change at levels 25, 50, 75, and 100 (max).

### Class Progression

#### Warrior > Gladiator > Knight > Paladin

- Tank of the group
- Uses Swords and Heavy armor

#### Magician > Black Mage > Sorcerer > Warlock

- Mage
- Uses Wands and Robes
- Casts Black Magic (fire, ice, etc)

#### Healer > White Mage > Shaman > Cleric

- Mage
- Uses Rods and Robes
- Casts White Magic (heal, remedy, etc)

#### Thief > Rogue > Ninja > Assassin

- The sneaky one
- Uses Daggers and Light Armor
- Can steal items from enemies

#### Hunter > Scout > Archer > Ranger

- Ranged fighter
- Uses Bows and Light Armor
- Has high accuracy

#### Singer > Dancer > Musician > Bard

- Sort of a mage
- Uses various instruments and Light Armor
- Casts Green Magic (blind, poison, etc)

#### :star2: Beast Master > Druid

- **Special class!** Likely a paid option.
- Uses Staves and Heavy Armor
- Can tame enemies and use them as companions

#### :star2: Gambler > Mathematician

- **Special class!** Likely a paid option.
- Uses "measures" and Robes
- Relies on Luck and chance to deal damage or heal allies

#### :star2: Chemist > Alchemist

- **Special class!** Likely a paid option.
- Uses "measures" and Robes
- Can mix together items to get new reactions

### Possible Future Classes

- Samurai (sword but long range)
- Gunner/Pirate (guns, steal)
- Berserker (high strength, only attacks)
- Dragoon/Spearman (uses lances)
- Blue Mage (uses enemy attacks, like Druid)

## Summons

Summons will be based on elements and statuses. Fire, water, wind, but also poison, blind, etc.

A summoned critter (name to change, of course) will give the increment a particular buff for 6-12 hours. They can only be used once per day.

## Status Effects

### Negative

- Blind (chance to hit drops, evasion drops)
- Deaf (confusion, doesn't follow party leader's orders)
- Poison (HP drain)
- Fever (MP drain)
- Slow (lessens recharge time by half)

### Positive

- Berserk (triple strength, only uses basic attack, doesn't follow orders)
- Haste (double recharge time)
- Shield (protect, double physical defense)
- Aura (shell, double magic defense)
- Charge (bravery, double physical strength)
- Meditate (faith, double magic strength)
