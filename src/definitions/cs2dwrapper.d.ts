/** @noSelfInFile */

declare function bot_add(): void;
declare function bot_add_ct(): void;
declare function bot_add_t(): void;
declare function bot_add_count(count: number): void;
declare function bot_jointeam(team: 0 | 1 | 2): void;
declare function bot_kill(): void;
declare function bot_prefix(prefix: string): void;
declare function bot_remove(): void;
declare function bot_remove_all(): void;
declare function bot_remove_ct(): void;
declare function bot_remove_t(): void;
declare function bot_skill(skill: 0 | 1 | 2 | 3 | 4): void;
declare function bot_weapons(weapons: number): void;
declare function changelevel(map: string): void;
declare function changemap(map: string): void;
declare function customkill(
  killer: PlayerID,
  weaponname: string,
  victim: PlayerID,
): void;
declare function deathslap(player: PlayerID): void;
declare function effect(
  effect: "fire" | "smoke" | "blood" | "flare" | "colorsmoke" | "sparkles",
  x: number,
  y: number,
  p1: number,
  p2: number,
  r?: number,
  g?: number,
  b?: number,
): void;
declare function equip(player: PlayerID, weapon: WeaponItemType): void;
declare function explosion(
  x: number,
  y: number,
  size: number,
  damage: number,
  sourceplayer?: PlayerID,
): void;
declare function flashplayer(player: PlayerID, intensity: number): void;
declare function flashposition(x: number, y: number, intensity: number): void;
declare function hudtxt(
  id: number,
  text: string,
  x: number,
  y: number,
  align: number,
): void;
declare function hudtxt2(
  player: PlayerID,
  id: number,
  text: string,
  x: number,
  y: number,
  align: number,
): void;
declare function hudtxtalphafade(
  player: PlayerID,
  id: number,
  duration: number,
  alpha: number,
): void;
declare function hudtxtcolorfade(
  player: PlayerID,
  id: number,
  duration: number,
  red: number,
  green: number,
  blue: number,
): void;
declare function hudtxtmove(
  player: PlayerID,
  id: number,
  duration: number,
  x: number,
  y: number,
): void;
declare function items(): void;
declare function kick(player: PlayerID, reason: string): void;
declare function killobject(objectid: number): void;
declare function killplayer(player: PlayerID): void;
declare function listbans(): void;
declare function listplayers(): void;
declare function logaddress_add(address: string): void;
declare function logaddress_remove(address: string): void;
declare function logaddress_removeall(): void;
declare function lua(script: string): void;
declare function luareset(): void;
declare function makect(player: number): void;
declare function makespec(player: number): void;
declare function maket(player: number): void;
declare function maps(): void;
declare function mp_antispeeder(
  antispeederprotection: 0 | 1 | 2 | 3 | 4 | 5 | 6,
): void;
declare function mp_autogamemode(autogamemode: 0 | 1): void;
declare function mp_autoteambalance(balance: 0 | 1): void;
declare function mp_building_health(building: string, price: number): void;
declare function mp_building_limit(building: string, limit: number): void;
declare function mp_building_price(building: string, price: number): void;
declare function mp_buytime(_time: number): void;
declare function mp_c4timer(_time: number): void;
declare function mp_curtailedexplosions(curtailed: 0 | 1): void;
declare function mp_damagefactor(factor: number): void;
declare function mp_deathdrop(drop: 0 | 1 | 2 | 3 | 4): void;
declare function mp_dispenser_health(health: number): void;
declare function mp_dispenser_money(money: number): void;
declare function mp_dmspawnmoney(money: number): void;
declare function mp_dropgrenades(drop: 0 | 1): void;
declare function mp_floodprot(floodprotection: 0 | 1): void;
declare function mp_freezetime(_time: number): void;
declare function mp_grenaderebuy(allowed: 0 | 1): void;
declare function mp_hostagepenalty(kills: number): void;
declare function mp_idleaction(action: 0 | 1 | 2 | 3 | 4): void;
declare function mp_idlekick(idleaction: 0 | 1): void;
declare function mp_idletime(_time: number): void;
declare function mp_infammo(infiniteammo: 0 | 1): void;
declare function mp_kevlar(percent: number): void;
declare function mp_kickpercent(percent: number): void;
declare function mp_killbuildingmoney(money: number): void;
declare function mp_killbuildings(kill: number): void;
declare function mp_killinfo(info: 0 | 1): void;
declare function mp_killteambuildings(mode: 0 | 1 | 2): void;
declare function mp_lagcompensation(
  maxcompensationtime: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
): void;
declare function mp_localrconoutput(output: 0 | 1): void;
declare function mp_luamap(use: 0 | 1): void;
declare function mp_luaserver(file: string): void;
declare function mp_mapgoalscore(score: 0 | 1): void;
declare function mp_mapvoteratio(percent: number): void;
declare function mp_maxclientsip(clients: PlayerID): void;
declare function mp_maxrconfails(maxfails: number): void;
declare function mp_natholepunching(allowpunching: 0 | 1): void;
declare function mp_pinglimit(limit: number): void;
declare function mp_radar(radar: 0 | 1): void;
declare function mp_randomspawn(_random: 0 | 1): void;
declare function mp_reservations(reservations: string): void;
declare function mp_respawndelay(delay: number): void;
declare function mp_roundlimit(rounds: number): void;
declare function mp_roundtime(_time: number): void;
declare function mp_startmoney(money: number): void;
declare function mp_supply_items(itemlist: string): void;
declare function mp_teamkillpenalty(kills: number): void;
declare function mp_teleportreload(reloadtime: number): void;
declare function mp_tempbantime(_time: number): void;
declare function mp_timelimit(_time: number): void;
declare function mp_tkpunish(kill: 0 | 1): void;
declare function mp_trace(accuracy: 0 | 1 | 2 | 3 | 4 | 5): void;
declare function mp_turretdamage(damage: number): void;
declare function mp_unbuildable(buildings: string): void;
declare function mp_unbuyable(unbuyable: string): void;
declare function mp_vulnerablehostages(vulnerable: 0 | 1): void;
declare function mp_winlimit(wins: number): void;
declare function mp_wpndmg(name: string, damage: number): void;
declare function mp_wpndmg_z1(name: string, damage: number): void;
declare function mp_wpndmg_z2(name: string, damage: number): void;
declare function mp_zombiedmg(percentageofdamage: number): void;
declare function mp_zombiekillequip(weapon: WeaponItemType): void;
declare function mp_zombiekillscore(killscore: number): void;
declare function mp_zombierecover(recover: number): void;
declare function mp_zombiespeedmod(speedmod: number): void;
declare function rcon(commands: string): void;
declare function rcon_password(password: string): void;
declare function rcon_pw(password: string): void;
declare function removeitem(item: WeaponItemType): void;
declare function reroute(player: PlayerID, address: string): void;
declare function restart(delay: number): void;
declare function restartround(delay: number): void;
declare function setarmor(player: PlayerID, armor: number): void;
declare function setdeaths(player: PlayerID, deaths: number): void;
declare function sethealth(player: PlayerID, health: number): void;
declare function setmaxhealth(player: PlayerID, maxhealth: number): void;
declare function setmoney(player: PlayerID, money: number): void;
declare function setname(player: PlayerID, name: string): void;
declare function setpos(player: PlayerID, x: number, y: number): void;
declare function setscore(player: PlayerID, score: number): void;
declare function setweapon(player: PlayerID, weapon: WeaponItemType): void;
declare function shake(player: PlayerID, power: number): void;
declare function slap(player: PlayerID): void;
declare function spawnitem(item: WeaponItemType, x: number, y: number): void;
declare function spawnnpc(
  _type: number,
  x: number,
  y: number,
  rot: number,
): void;
declare function spawnobject(
  _type: number,
  x: number,
  y: number,
  rot: number,
  mode: number,
  team: 0 | 1 | 2,
  player: PlayerID,
): void;
declare function spawnplayer(player: PlayerID, x: number, y: number): void;
declare function speedmod(player: PlayerID, speedmod: number): void;
declare function strip(player: PlayerID, weapon: WeaponItemType): void;
declare function sv_fow(fow: 0 | 1 | 2 | 3): void;
declare function sv_gamemode(mode: 0 | 1 | 2 | 3 | 4): void;
declare function sv_gm(mode: 0 | 1 | 2 | 3 | 4): void;
declare function sv_hostport(port: number): void;
declare function sv_lan(lan: 0 | 1): void;
declare function sv_map(map: string): void;
declare function sv_maptransfer(transfer: 0 | 1): void;
declare function sv_maxplayers(players: PlayerID): void;
declare function sv_msg(message: string): void;
declare function sv_msg2(player: PlayerID, message: string): void;
declare function sv_name(name: string): void;
declare function sv_password(password: string): void;
declare function sv_rcon(rconpassword: string): void;
declare function sv_restart(delay: number): void;
declare function sv_restartround(delay: number): void;
declare function sv_sound(soundfile: string): void;
declare function sv_sound2(player: PlayerID, soundfile: string): void;
declare function sv_specmode(mode: 0 | 1 | 2): void;
declare function sv_spraytransfer(spraytransfer: 0 | 1): void;
declare function sv_usgnonly(usgnonly: 0 | 1): void;
declare function transfer_speed(speed: number): void;
declare function trigger(trigger: string): void;
declare function unban(banmask: string): void;
declare function unbanall(): void;
declare function usgn_addserver(): void;
declare function usgn_info(): void;
