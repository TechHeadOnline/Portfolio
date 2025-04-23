class Pokemon {
  constructor(species, image, level, health, move1, move2, move3, move4) {
    this.species = species;
    this.image = image;
    this.level = level;
    this.move1 = move1;
    this.move2 = move2;
    this.move3 = move3;
    this.move4 = move4;

    this.atkBoost = 0;
    this.defBoost = 0;
    this.spaBoost = 0;
    this.spdBoost = 0;
    this.speBoost = 0;

    // Find species base stats
    fetch('JSONs/pokemon.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let element = data.find(item => item.species === this.species);
        if (element) {
          console.log(element.display_name + " (" + element.type1 + " / " + element.type2 + ")");

          this.displayName = element.display_name;

          this.maxHP = floor(0.01 * (2 * Number(element.base_hp) * Number(this.level)) + Number(this.level) + 10);
          this.hp = (health / 100) * this.maxHP;

          this.atkOrig = floor((((element.base_atk * 2) * this.level) / 100) + 5);
          this.defOrig = floor((((element.base_def * 2) * this.level) / 100) + 5);
          this.spaOrig = floor((((element.base_spa * 2) * this.level) / 100) + 5);
          this.spdOrig = floor((((element.base_spd * 2) * this.level) / 100) + 5);
          this.speOrig = floor((((element.base_spe * 2) * this.level) / 100) + 5);

          this.atk = this.atkOrig;
          this.def = this.defOrig;
          this.spa = this.spaOrig;
          this.spd = this.spdOrig;
          this.spe = this.speOrig;
        } else {
          console.log("Element with species '" + this.species + "' not found.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  show(x, y) {
    imageMode(CENTER);
    image(this.image, x, y, 250, 250);
  }

  showHealth() {
    let percentage = this.hp / this.maxHP * 100;
    console.log(this.species + ": " + this.hp + " / " + this.maxHP + " (" + Math.floor(percentage) + "%)")
  }

  updateStats(boost) {
    switch (true) { // Each stat stage has a related multiplier
      case (boost == -6):
        return 0.25;
      case (boost == -5):
        return 0.28;
      case (boost == -4):
        return 0.33;
      case (boost == -3):
        return 0.4;
      case (boost == -2):
        return 0.5;
      case (boost == -1):
        return 0.66;
      case (boost == 0):
        return 1;
      case (boost == 1):
        return 1.5;
      case (boost == 2):
        return 2;
      case (boost == 3):
        return 2.5;
      case (boost == 4):
        return 3;
      case (boost == 5):
        return 3.5;
      case (boost == 6):
        return 4;
    }
  }

  doBonusEffect(effect, user, target, damageDealt) {
    let raiseChance = 0;
    switch (true) {
      case (effect == 'absorb_health'):
        // The user restores up to half the HP that it took from the target that turn.
        let healAmount = Math.floor(damageDealt / 2);
        if (user.hp += healAmount > user.maxHP) {
          user.hp = user.maxHP;
        } else {
          user.hp += healAmount;
        }
        break;
      case (effect == 'night_shade'):
        // The move deals damage equal to the user’s level.
        return user.level;
      case (effect == 'one_hit_ko'):
        // If the move hits, it will immediately faint the target.
        console.log("It's a one-hit KO!");
        target.hp = 0;
        break;
      case (effect == 'psywave'):
        // Where r is a random number 0 to 10 and L is the user’s level, this move deals (L×(10r+50))/100 HP, rounded up.
        let r = 10 * Math.random();
        let l = user.level
        return Math.ceil(l * ((10 * r) + 50) / 100);
      case (effect == 'target_loses_twenty_hp'):
        // Regardless of all factors, the target will lose exactly 20 HP.
        return 20;
      case (effect == 'target_loses_forty_hp'):
        // Regardless of all factors, the target will lose exactly 40 HP.
        return 40;
      case (effect == 'target_loses_half_hp'):
        // Regardless of all factors, the target will lose exactly half of its HP, rounded down.
        return Math.floor(target.hp / 2);
      case (effect == 'target_lower_atk'):
        // The target’s Attack stat will be lowered by 1 stage.
        if (target.atkBoost > -6) {
          target.atkBoost -= 1;
          target.updateStats(target.atkBoost)
        } else {
          console.log(target.displayName + "'s Attack stat cannot be lowered further!")
        }
        break;
      case (effect == 'target_may_lower_atk'):
        // There is a 30% chance that the target’s Attack stat will be lowered by 1 stage.
        raiseChance = random()
        if (raiseChance > 0.7) {
          this.doBonusEffect('target_lower_atk', user, target, damageDealt);
        };
        break;
      case (effect == 'target_lower_def'):
        // The target’s Defence stat will be lowered by 1 stage.
        if (target.defBoost > -6) {
          target.defBoost -= 1;
          target.updateStats(target.defBoost)
        } else {
          console.log(target.displayName + "'s Defence stat cannot be lowered further!")
        }
        break;
      case (effect == 'target_may_lower_def'):
        // There is a 30% chance that the target’s Defence stat will be lowered by 1 stage.
        raiseChance = random()
        if (raiseChance > 0.7) {
          this.doBonusEffect('target_lower_def', user, target, damageDealt);
        };
        break;
      case (effect == 'target_lower_spa'):
        // The target’s Special Attack stat will be lowered by 1 stage.
        if (target.spaBoost > -6) {
          target.spaBoost -= 1;
          target.updateStats(target.spaBoost)
        } else {
          console.log(target.displayName + "'s Special Attack stat cannot be lowered further!")
        }
        break;
      case (effect == 'target_may_lower_spa'):
        // There is a 30% chance that the target’s Special Attack stat will be lowered by 1 stage.
        raiseChance = random()
        if (raiseChance > 0.7) {
          this.doBonusEffect('target_lower_spa', user, target, damageDealt);
        };
        break;
      case (effect == 'target_lower_spd'):
        // The target’s Special Defence stat will be lowered by 1 stage.
        if (target.spdBoost > -6) {
          target.spdBoost -= 1;
          target.updateStats(target.spdBoost)
        } else {
          console.log(target.displayName + "'s Special Defence stat cannot be lowered further!")
        }
        break;
      case (effect == 'target_may_lower_spd'):
        // There is a 30% chance that the target’s Special Defence stat will be lowered by 1 stage.
        raiseChance = random()
        if (raiseChance > 0.7) {
          this.doBonusEffect('target_lower_spd', user, target, damageDealt);
        };
        break;
      case (effect == 'target_lower_spe'):
        // The target’s Speed stat will be lowered by 1 stage.
        if (target.speBoost > -6) {
          target.speBoost -= 1;
          target.updateStats(target.speBoost)
        } else {
          console.log(target.displayName + "'s Speed stat cannot be lowered further!")
        }
        break;
      case (effect == 'target_may_lower_spe'):
        // There is a 30% chance that the target’s Speed stat will be lowered by 1 stage.
        raiseChance = random()
        if (raiseChance > 0.7) {
          this.doBonusEffect('target_lower_spe', user, target, damageDealt);
        };
        break;
      case (effect == 'user_faints'):
        // The user faints after the move is used.
        user.hp = 0;
        break;
      case (effect == 'user_heal'):
        // The user restores 1/3 of its max HP.
        user.hp += Math.floor(user.maxHP / 3);
        if (user.hp > user.maxHP) {
          user.hp = user.maxHP
        }
        break;
      case (effect == 'user_lower_spa'):
        // The user’s own Special Attack is lowered by 1 stage.
        if (user.spaBoost > -6) {
          user.spaBoost -= 1;
          user.updateStats(user.spaBoost)
        } else {
          console.log(user.displayName + "'s Special Attack stat cannot be lowered further!")
        }
        break;
      case (effect == 'user_may_raise_all'):
        // There is a 10% chance that the user’s Attack, Special Attack, Defence, Special Defence and Speed stats will all be raised by 1 stage.
        raiseChance = random()
        if (raiseChance > 0.9) {
          this.doBonusEffect('user_raise_atk', user, target, damageDealt);
          this.doBonusEffect('user_raise_def', user, target, damageDealt);
          this.doBonusEffect('user_raise_spa', user, target, damageDealt);
          this.doBonusEffect('user_raise_spd', user, target, damageDealt);
          this.doBonusEffect('user_raise_spe', user, target, damageDealt);
        }
        break;
      case (effect == 'user_raise_atk'):
        // The user’s Attack stat will be raised by 1 stage.
        if (user.atkBoost < 6) {
          user.atkBoost += 1;
          user.updateStats(user.atkBoost)
        } else {
          console.log(user.displayName + "'s Attack stat cannot be raised further!")
        }
        break;
      case (effect == 'user_may_raise_atk'):
        // There is a 30% chance that the user’s Attack stat will be raised by 1 stage.
        raiseChance = random()
        if (raiseChance > 0.7) {
          this.doBonusEffect('user_raise_atk', user, target, damageDealt);
        };
        break;
      case (effect == 'user_raise_atk_def'):
        // The user’s Attack and Defence stats will be raised by 1 stage.
        this.doBonusEffect('user_raise_atk', user, target, damageDealt);
        this.doBonusEffect('user_raise_def', user, target, damageDealt);
        break;
      case (effect == 'user_raise_atk_spe'):
        // The user’s Attack and Speed stats will be raised by 1 stage.
        this.doBonusEffect('user_raise_atk', user, target, damageDealt);
        this.doBonusEffect('user_raise_spe', user, target, damageDealt);
        break;
      case (effect == 'user_raise_def'):
        // The user’s Defence stat will be raised by 1 stage.
        if (user.defBoost < 6) {
          user.defBoost += 1;
          user.updateStats(user.defBoost)
        } else {
          console.log(user.displayName + "'s Defence stat cannot be raised further!")
        }
        break;
      case (effect == 'user_raise_spa'):
        // The user’s Special Attack stat will be raised by 1 stage.
        if (user.spaBoost < 6) {
          user.spaBoost += 1;
          user.updateStats(user.spaBoost)
        } else {
          console.log(user.displayName + "'s Special Attack stat cannot be raised further!")
        }
        break;
      case (effect == 'user_may_raise_spa'):
        // There is a 30% chance that the user’s Special Attack stat will be raised by 1 stage.
        raiseChance = random()
        if (raiseChance > 0.7) {
          this.doBonusEffect('user_raise_spa', user, target, damageDealt);
        };
        break;
      case (effect == 'user_raise_spd'):
        // The user’s Special Defence stat will be raised by 1 stage.
        if (user.spdBoost < 6) {
          user.spdBoost += 1;
          user.updateStats(user.spdBoost)
        } else {
          console.log(user.displayName + "'s Special Defence stat cannot be raised further!")
        }
        break;
      case (effect == 'user_raise_spd'):
        // The user’s Special Defence stat will be raised by 1 stage.
        if (user.spdBoost < 6) {
          user.spdBoost += 1;
          user.updateStats(user.spdBoost)
          console.log(user.displayName + "'s Special Defence stat was increased!")
        } else {
          console.log(user.displayName + "'s Special Defence stat cannot be raised further!")
        }
        break;
      case (effect == 'user_raise_spa_spd'):
        // The user’s Special Attack and Special Defence stats will be raised by 1 stage.
        this.doBonusEffect('user_raise_spa', user, target, damageDealt);
        this.doBonusEffect('user_raise_spd', user, target, damageDealt);
        break;
      case (effect == 'user_raise_spe'):
        // The user’s Speed stat will be raised by 1 stage.
        if (user.speBoost < 6) {
          user.speBoost += 1;
          user.updateStats(user.speBoost)
          console.log(user.displayName + "'s Speed stat was increased!")
        } else {
          console.log(user.displayName + "'s Speed stat cannot be raised further!")
        }
        break;
      case (effect == 'user_recoil'):
        // After damaging the target, the user takes 30% of the damage dealt.
        user.hp -= Math.floor(damageDealt * 0.3);
        if (user.hp < 0) {
          user.hp = 0
        }
        break;
      case (effect == 'user_recoil_high'):
        // After damaging the target, the user takes 60% of the damage dealt.
        user.hp -= Math.floor(damageDealt * 0.6);
        if (user.hp < 0) {
          user.hp = 0
        }
        break;
    }
  }

  battleMove(wantedMove, user, target) {
    fetch('JSONs/moves.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let element = data.find(item => item.int_name === wantedMove);
        if (element) {
          if (battle == true) {
            console.log(user.displayName, "used", element.display_name, "on", target.displayName)
            console.log(element.display_name, "- Power:", element.power, "Accuracy:", element.accuracy)

            let basePower = element.power;
            let accuracy = element.accuracy;
            let damageDealt = 0;
            if (Math.random() * 100 <= accuracy) {
              if (basePower != 0) {
                let randomPower = Math.random() * (1 - 0.85) + 0.85;
                damageDealt = ((((((2 * user.level) / 5) + 2) * basePower * user.atk / target.def) / 50) + 2) * randomPower
                console.log("target.hp", target.hp, "damageDealt", damageDealt, "becomes", (target.hp - Math.floor(damageDealt)), "(" + (target.hp - damageDealt) + ")");
              }

              if (element.bonus != "") {
                console.log(element.display_name + " has bonus effect of " + element.bonus);

                // If damageDealt gets returned, then use it, otherwise just let the bonus effect do its thing
                if (this.doBonusEffect(element.bonus, user, target, damageDealt) != null) {
                  damageDealt = this.doBonusEffect(element.bonus, user, target, damageDealt);
                } else {
                  this.doBonusEffect(element.bonus, user, target, damageDealt);
                }

                console.log("New damage dealt: " + damageDealt)
              }

              // Take damageDealt away from HP after bonus effect has played its part
              target.hp -= Math.floor(damageDealt);

              if (target.hp <= 0) {
                target.hp = 0;
                battle_checkFainted()
              }

              playerPk.showHealth()
              enemyPk.showHealth()
            } else {
              console.log("But it missed!")
            }
          }
        } else {
          console.log("Move with name '" + wantedMove + "' not found.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}