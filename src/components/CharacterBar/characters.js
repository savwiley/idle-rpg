import React from "react";
import JobClasses from "../Data/JobClasses.json";
import Weapons from "../Data/Weapons.json";
import Armor from "../Data/Armor.json";
//import Abilities from "../Data/Abilities.json";
//import Magic from "../Data/Magic.json";

const Characters = () => {

}


/**
 * characters.js - has one component that will create any character if given the proper keyword (e.g. "Knight" or "Warlock"). Information on this character will be taken from JobClasses.json and other json files in /Data, combining them together. 
 * Example: Knight has 50 Strength. A sword may apply +10 Strength. The Knight equipped with this sword must be returned with a Strength of 60.
 * Stats will be ("Knight.Strength" + "Sword.Strength"), depending on Job & Equipment.
 */