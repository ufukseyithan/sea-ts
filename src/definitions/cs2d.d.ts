/** @noSelfInFile */
/**
 * Possible Player ID's
 */
declare type PlayerID =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32;

/**
 * Console Settings that can be accessed by the 'game' function
 */
declare type ConsoleCommandsSettings =
  | "ah"
  | "autoscreen"
  | "autoswitch"
  | "bot_count"
  | "bot_jointeam"
  | "bot_prefix"
  | "bot_skill"
  | "bot_weapons"
  | "bullets"
  | "connection"
  | "debug"
  | "debugai"
  | "debuglog"
  | "debuglua"
  | "dmgindicator"
  | "drawradar"
  | "fowalpha"
  | "fowdetails"
  | "gore"
  | "grenademode"
  | "hud_fastswitch"
  | "itemshadows"
  | "localport"
  | "mapshadows"
  | "mapsounds"
  | "markplayer"
  | "menu_lanscanport"
  | "mp_antispeeder"
  | "mp_autogamemode"
  | "mp_autoteambalance"
  | "mp_buytime"
  | "mp_c4timer"
  | "mp_connectionlimit"
  | "mp_curtailedexplosions"
  | "mp_damagefactor"
  | "mp_deathdrop"
  | "mp_dispenser_health"
  | "mp_dispenser_money"
  | "mp_dmspawnmoney"
  | "mp_dropgrenades"
  | "mp_flashlight"
  | "mp_floodprot"
  | "mp_floodprotignoretime"
  | "mp_freezetime"
  | "mp_grenaderebuy"
  | "mp_hostagepenalty"
  | "mp_hovertext"
  | "mp_hud"
  | "mp_hudscale"
  | "mp_idleaction"
  | "mp_idlekick"
  | "mp_idletime"
  | "mp_infammo"
  | "mp_kevlar"
  | "mp_kickpercent"
  | "mp_killbuildingmoney"
  | "mp_killbuildings"
  | "mp_killinfo"
  | "mp_killteambuildings"
  | "mp_lagcompensation"
  | "mp_lagcompensationdivisor"
  | "mp_localrconoutput"
  | "mp_luamap"
  | "mp_luaserver"
  | "mp_mapgoalscore"
  | "mp_mapvoteratio"
  | "mp_maxclientsip"
  | "mp_maxrconfails"
  | "mp_natholepunching"
  | "mp_pinglimit"
  | "mp_postspawn"
  | "mp_radar"
  | "mp_randomspawn"
  | "mp_recoil"
  | "mp_respawndelay"
  | "mp_roundlimit"
  | "mp_roundtime"
  | "mp_shotweakening"
  | "mp_smokeblock"
  | "mp_startmoney"
  | "mp_supply_items"
  | "mp_teamkillpenalty"
  | "mp_teleportreload"
  | "mp_tempbantime"
  | "mp_timelimit"
  | "mp_tkpunish"
  | "mp_trace"
  | "mp_turretdamage"
  | "mp_unbuyable"
  | "mp_vulnerablehostages"
  | "mp_weaponfadeout"
  | "mp_winlimit"
  | "mp_zombiedmg"
  | "mp_zombiekillequip"
  | "mp_zombiekillscore"
  | "mp_zombierecover"
  | "mp_zombiespeedmod"
  | "name"
  | "particles"
  | "playershadows"
  | "recoil"
  | "relativemovement"
  | "renderdecals"
  | "renderdecoration"
  | "shadows"
  | "shadowshade_obstacle"
  | "shadowshade_wall"
  | "soundmode"
  | "spraycolor"
  | "spraylogo"
  | "sv_checkusgnlogin"
  | "sv_daylighttime"
  | "sv_fow"
  | "sv_friendlyfire"
  | "sv_gamemode"
  | "sv_hostport"
  | "sv_lan"
  | "sv_map"
  | "sv_maptransfer"
  | "sv_maxplayers"
  | "sv_name"
  | "sv_offscreendamage"
  | "sv_password"
  | "sv_specmode"
  | "sv_spraytransfer"
  | "sv_usgnonly"
  | "tileanimations"
  | "transfer_speed"
  | "visibleshots"
  | "volume"
  | "wiggle";

/**
 * Numeric Keys [0-9] that can be used in the 'addbind' function
 */
declare type BindKeyNumeric =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9";
/**
 * Alphabetic Keys [A-Z] that can be used in the 'addbind' function
 */
declare type BindKeyAlphabetic =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";
/**
 * Function Keys [F1-F12] that can be used in the 'addbind' function
 */
declare type BindKeyFunction =
  | "F1"
  | "F2"
  | "F3"
  | "F4"
  | "F5"
  | "F6"
  | "F7"
  | "F8"
  | "F9"
  | "F10"
  | "F11"
  | "F12";
/**
 * Mouse Buttons
 *
 * mouse1 - Left Click
 *
 * mouse2 - Right Click
 * mouse3 - Middle Click
 *
 * mwheelup - Mouse Wheel Up
 *
 * mywheeldown - Mouse Wheel Down
 */
declare type BindKeyMouse =
  | "mouse1"
  | "mouse2"
  | "mouse3"
  | "mwheelup"
  | "mwheeldown";
/**
 * System [shift, control, alt, sys] keys that can be used in the 'addbind' function.
 */
declare type BindKeySpecial =
  | "leftshift"
  | "rightshift"
  | "leftctrl"
  | "rightctrl"
  | "leftalt"
  | "rightalt"
  | "leftsys"
  | "rightsys";
/**
 * Arrow keys [left, right, up, down] that can be used the in the 'addbind' function.
 */
declare type BindKeyArrow =
  | "leftarrow"
  | "rightarrow"
  | "uparrow"
  | "downarrow";
/**
 * Other keys like backspace, tab, clear, enter, space, keypad keys, misc keys that can be used in the 'addbind' function
 */
declare type BindKeyOther =
  | "backspace"
  | "tab"
  | "clear"
  | "enter"
  | "escape"
  | "space"
  | "pgup"
  | "pgdn"
  | "end"
  | "home"
  | "select"
  | "print"
  | "execute"
  | "screen"
  | "ins"
  | "del"
  | "kp_leftarrow"
  | "kp_home"
  | "kp_ins"
  | "kp_0"
  | "kp_1"
  | "kp_2"
  | "kp_3"
  | "kp_4"
  | "kp_5"
  | "kp_6"
  | "kp_7"
  | "kp_8"
  | "kp_9"
  | "kp_divide"
  | "kp_multiply"
  | "kp_del";
/**
 * All keys that can be used in the 'addbind' function
 */
declare type BindKeyValue =
  | BindKeyNumeric
  | BindKeyAlphabetic
  | BindKeyFunction
  | BindKeyMouse
  | BindKeySpecial
  | BindKeyArrow
  | BindKeyOther;
/**
 * Category that contains the basic hooks
 */
declare type HookValueBasic =
  | "break"
  | "endround"
  | "httpdata"
  | "log"
  | "mapchange"
  | "parse"
  | "projectile"
  | "projectile_impact"
  | "rcon"
  | "shutdown"
  | "startround"
  | "startround_prespawn"
  | "trigger"
  | "triggerentity";
/**
 * Category that contains the time hooks
 */
declare type HookValueTime = "always" | "minute" | "ms100" | "second";
/**
 * Category that contains anything involving the player
 */
declare type HookValuePlayer =
  | "assist"
  | "attack"
  | "attack2"
  | "bombdefuse"
  | "bombexplode"
  | "bombplant"
  | "build"
  | "buildattempt"
  | "buy"
  | "clientdata"
  | "clientsetting"
  | "collect"
  | "connect"
  | "die"
  | "dominate"
  | "drop"
  | "flagcapture"
  | "flagtake"
  | "flashlight"
  | "hit"
  | "hostagedamage"
  | "hostagekill"
  | "hostagerescue"
  | "hostageuse"
  | "itemfadeout"
  | "join"
  | "key"
  | "kill"
  | "leave"
  | "menu"
  | "move"
  | "movetile"
  | "name"
  | "radio"
  | "reload"
  | "say"
  | "sayteam"
  | "select"
  | "serveraction"
  | "shieldhit"
  | "spawn"
  | "specswitch"
  | "spray"
  | "suicide"
  | "team"
  | "use"
  | "usebutton"
  | "vipescape"
  | "vote"
  | "walkover";
/**
 * Category that contains anything involving objects
 */
declare type HookValueObject =
  | "hitzone"
  | "objectdamage"
  | "objectkill"
  | "objectupgrade"
  | "turretscan";
/**
 * All Possible Hook Values
 */
declare type HookValue =
  | HookValueBasic
  | HookValueTime
  | HookValuePlayer
  | HookValueObject;

/**
 * Values that can be passed onto as a parameter to the 'entity' function.
 */
declare type EntityValue =
  | "exists"
  | "typename"
  | "type"
  | "name"
  | "trigger"
  | "state"
  | "int0"
  | "int1"
  | "int2"
  | "int3"
  | "int4"
  | "int5"
  | "int6"
  | "int7"
  | "int8"
  | "int9"
  | "str0"
  | "str1"
  | "str2"
  | "str3"
  | "str4"
  | "str5"
  | "str6"
  | "str7"
  | "str8"
  | "str9"
  | "aistate";

/**
 * Values that can be passed onto as a parameter to the 'game' function.
 */
declare type GameValue =
  | "version"
  | "dedicated"
  | "phase"
  | "round"
  | "timeleft"
  | "maptimeleft"
  | "score_t"
  | "score_ct"
  | "winrow_t"
  | "winrow_ct"
  | "nextmap"
  | "ticks"
  | "port"
  | "bombplanted"
  | "sysfolder"
  | ConsoleCommandsSettings;

/**
 * Values that can be passed onto as a parameter to the 'hostage' function.
 */
declare type HostageValueBoolean = "exists" | "used";
declare type HostageValueNumbers =
  | "health"
  | "follow"
  | "look"
  | "x"
  | "y"
  | "rot"
  | "tilex"
  | "tiley";
declare type HostageValueTable = "table";
/**
 * Values that can be passed onto as a parameter to the 'imageparam' function.
 */
declare type ImageparamValueStrings = "path";
declare type ImageparamValueNumbers =
  | "x"
  | "y"
  | "rot"
  | "alpha"
  | "frame"
  | "width"
  | "height"
  | "framecount";
/**
 * Values that can be passed onto as a parameter to the 'object' function.
 */
declare type ObjectValueBoolean = "exists" | "entity";
declare type ObjectValueNumbers =
  | "type"
  | "health"
  | "mode"
  | "team"
  | "player"
  | "x"
  | "y"
  | "rot"
  | "alpha"
  | "tilex"
  | "tiley"
  | "countdown"
  | "rootrot"
  | "idle"
  | "rotvar"
  | "target"
  | "upgrade"
  | "entityx"
  | "entityy";
declare type ObjectValueTable = "table";
declare type ObjectValues =
  | ObjectValueBoolean
  | ObjectValueNumbers
  | ObjectValueTable;
/**
 * Values that can be passed onto as a parameter to the 'item' function.
 */
declare type WeaponItemValueBoolean = "exists" | "dropped";
declare type WeaponItemValueNumbers =
  | "type"
  | "player"
  | "ammo"
  | "ammoin"
  | "mode"
  | "x"
  | "y"
  | "droptimer";
declare type WeaponItemValueStrings = "name";
declare type WeaponItemValueTable = "table";
declare type WeaponItemValues =
  | WeaponItemValueBoolean
  | WeaponItemValueNumbers
  | WeaponItemValueStrings
  | WeaponItemValueTable;
/**
 * Values that can be passed onto as a parameter to the 'objecttype' function.
 */
declare type ObjectTypeValueStrings = "name" | "internalname";
declare type ObjectTypeValueNumbers =
  | "type"
  | "price"
  | "health"
  | "killmoney"
  | "limit"
  | "upgradepoints"
  | "upgradeprice"
  | "upgradeto";
/**
 * Values that can be passed onto as a parameter to the 'itemtype' function.
 */
declare type WeaponItemTypeValueStrings = "name";
declare type WeaponItemTypeValueNumbers =
  | "dmg"
  | "dmg_z1"
  | "dmg_z2"
  | "rate"
  | "reload"
  | "ammo"
  | "ammoin"
  | "price"
  | "range"
  | "dispersion"
  | "slot"
  | "recoil";
/**
 * Values that can be passed onto as a parameter to the 'map' function.
 */
declare type MapValueStrings = "name" | "tileset" | "back_img";
declare type MapValueNumbers =
  | "xsize"
  | "ysize"
  | "tilesize"
  | "tilecount"
  | "back_scrollx"
  | "back_scrolly"
  | "back_scrolltile"
  | "back_r"
  | "back_g"
  | "back_b"
  | "storm_x"
  | "storm_y"
  | "mission_vips"
  | "mission_hostages"
  | "mission_bombspots"
  | "mission_ctfflags"
  | "mission_dompoints"
  | "nobuying"
  | "noweapons"
  | "teleporters"
  | "botnodes";
/**
 * Values that can be passed onto as a parameter to the 'player' function.
 */
declare type PlayerValueBoolean =
  | "exists"
  | "bot"
  | "rcon"
  | "defusekit"
  | "gasmask"
  | "bomb"
  | "flag"
  | "reloading"
  | "nightvision";
declare type PlayerValueStrings =
  | "name"
  | "ip"
  | "usgnname"
  | "steamid"
  | "steamname"
  | "language"
  | "language_iso"
  | "sprayname";
declare type PlayerValueNumbers =
  | "port"
  | "usgn"
  | "team"
  | "favteam"
  | "look"
  | "spraycolor"
  | "mousex"
  | "mousey"
  | "mousemapx"
  | "mousemapy"
  | "mousedist"
  | "screenw"
  | "screenh"
  | "widescreen"
  | "windowed"
  | "micsupport"
  | "x"
  | "y"
  | "tilex"
  | "tiley"
  | "rot"
  | "health"
  | "maxhealth"
  | "armor"
  | "money"
  | "score"
  | "deaths"
  | "teamkills"
  | "hostagekills"
  | "teambuildingkills"
  | "mvp"
  | "assists"
  | "ping"
  | "idle"
  | "speedmod"
  | "spectating"
  | "ai_flash"
  | "weapontype"
  | "weaponmode"
  | "process"
  | "votekick"
  | "votemap";
declare type PlayerValueTable =
  | "table"
  | "tableliving"
  | "team1"
  | "team2"
  | "team1living"
  | "team2living";
/**
 * Values that can be passed onto as a parameter to the 'stats' function.
 */
declare type StatsValueBoolean =
  | "exists"
  | "rank"
  | "killsperdeath"
  | "score"
  | "frags"
  | "deaths"
  | "secs"
  | "mvp"
  | "assists";
declare type StatsValueNumbers =
  | "rank"
  | "killsperdeath"
  | "score"
  | "frags"
  | "deaths"
  | "secs"
  | "mvp"
  | "assists";
/**
 * Values that can be passed onto as a parameter to the 'projectile' function.
 */
declare type ProjectileValue =
  | "exists"
  | "type"
  | "x"
  | "y"
  | "dir"
  | "rot"
  | "flydist"
  | "time";
/**
 * Values that can be passed onto as a parameter to the 'tile' function.
 */
declare type TileValueBoolean =
  | "walkable"
  | "deadly"
  | "wall"
  | "obstacle"
  | "hascustomframe";
declare type TileValueNumbers =
  | "frame"
  | "property"
  | "entity"
  | "originalframe"
  | "rot"
  | "blend"
  | "brightness";
declare type TileValueTable = "color";
declare type TileValue = TileValueBoolean | TileValueNumbers | TileValueTable;
/**
 * Numeric types of Objects
 */
declare type ObjectType =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 20
  | 21
  | 22
  | 23
  | 30
  | 40;
/**
 * Numeric types of Tile Properties
 */
declare type TilePropertyType =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 50
  | 51
  | 52
  | 53;
/**
 * Image Covered By Player
 *
 * draw at player, covered by player (player id+100)
 *
 * Image Mode 101-132
 */
declare type ImageModeCoveredByPlayer =
  | 101
  | 102
  | 103
  | 104
  | 105
  | 106
  | 107
  | 108
  | 109
  | 110
  | 111
  | 112
  | 113
  | 114
  | 115
  | 116
  | 117
  | 118
  | 119
  | 120
  | 121
  | 122
  | 123
  | 124
  | 125
  | 126
  | 127
  | 128
  | 129
  | 130
  | 131
  | 132;
/**
 * Image Covering the Player
 *
 * draw at player, covering player (player id+200)
 *
 * Image Mode 201-232
 */
declare type ImageModeCoveringPlayer =
  | 201
  | 202
  | 203
  | 204
  | 205
  | 206
  | 207
  | 208
  | 209
  | 210
  | 211
  | 212
  | 213
  | 214
  | 215
  | 216
  | 217
  | 218
  | 219
  | 220
  | 221
  | 222
  | 223
  | 224
  | 225
  | 226
  | 227
  | 228
  | 229
  | 230
  | 231
  | 232;
/**
 * Image Covering the Players & Entities
 *
 * draw at player, covering player and entity images (player id+132)
 *
 * Image Mode 133-164
 */
declare type ImageModeCoveringPlayerAndEntity =
  | 133
  | 134
  | 135
  | 136
  | 137
  | 138
  | 139
  | 140
  | 141
  | 142
  | 143
  | 144
  | 145
  | 146
  | 147
  | 148
  | 149
  | 150
  | 151
  | 152
  | 153
  | 153
  | 154
  | 155
  | 156
  | 157
  | 158
  | 159
  | 160
  | 161
  | 162
  | 163
  | 164;
/**
 * All Image Modes
 *
 *
 * * Mode 0 - floor image (covered by players etc)
 *
 * * Mode 1 - top image (covering players)
 *
 * * Mode 2 - HUD image (covering everything, part of the interface, affected by mp_hudscale)
 *
 * * Mode 3 - super top image (covering everything on the map)
 *
 * * Mode 4 - background image (covering only the background)
 *
 * * Mode 101-132 - draw at player, covered by player (player id+100)
 *
 * * Mode 201-232 - draw at player, covering player (player id+200)
 *
 * * Mode 133-164 - draw at player, covering player and entity images (player id+132)
 *
 * Image Mode 0..4, 101..132, 133..164, 201..232
 */
declare type ImageMode =
  | 0
  | 1
  | 2
  | 3
  | 4
  | ImageModeCoveredByPlayer
  | ImageModeCoveringPlayer
  | ImageModeCoveringPlayerAndEntity;
/**
 * Image Hit Zone Modes
 */
declare type ImageHitzoneMode = 0 | 1 | 2 | 3 | 4 | 101 | 102 | 103 | 104;
/**
 * Changes the blendmode of an image:
 *
 * >0 for normal (pixels are alpha blended, default mode)
 *
 * >1 for light (pixels are added)
 *
 * >2 for shade (pixels are multiplied)
 *
 * >3 for solid (pixels are overwritten, alpha transparency is ignored)
 */
declare type BlendMode = 0 | 1 | 2 | 3;
/**
 * Weapon ID's for Pistols
 * --
 * * 1 - USP
 *
 * * 2 - Glock
 *
 * * 3 - Deagle
 *
 * * 4 - P228
 *
 * * 5 - Elite
 *
 * * 6 - Five-Seven
 */
declare type WeaponItemTypePistol = 1 | 2 | 3 | 4 | 5 | 6;
/**
 * Weapon ID's for Shotguns
 * --
 * * 10 - M3
 *
 * * 11 - XM1014
 */
declare type WeaponItemTypeShotgun = 10 | 11;
/**
 * Weapon ID's for SMG's
 * --
 * * 20 - MP5
 *
 * * 21 - TMP
 *
 * * 22 - P90
 *
 * * 23 - MAC10
 *
 * * 24 - UMP45
 */
declare type WeaponItemTypeSMG = 20 | 21 | 22 | 23 | 24;
/**
 * Weapon ID's for the Big Guns!
 * --
 * * 40 - M249
 *
 * * 45 - Laser
 *
 * * 46 - Flamethrower
 *
 * * 47 - RPG Launcher
 *
 * * 48 - Rocket Launcher
 *
 * * 49 - Grenade Launcher
 *
 * * 88 - Portal Gun
 *
 * * 90 - M134
 */
declare type WeaponItemTypeBigGuns = 40 | 45 | 46 | 47 | 48 | 49 | 88 | 90;
/**
 * Weapon ID's for Rifles
 * --
 * * 30 - AK-47
 *
 * * 31 - SG552
 *
 * * 32 - M4A1
 *
 * * 33 - AUG
 *
 * * 34 - SCOUT
 *
 * * 35 - AWP
 *
 * * 36 - G3SG1
 *
 * * 37 - SG550
 *
 * * 38 - GALIL
 *
 * * 39 - FAMAS
 *
 * * 91 - FN F2000
 */
declare type WeaponItemTypeRifle =
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 91;

/**
 * Weapon ID's for Melees
 * --
 * * 50 - Knife
 *
 * * 69 - Machete
 *
 * * 74 - Wrench
 *
 * * 78 - Claw
 *
 * * 85 - Chainsaw
 */
declare type WeaponItemTypeMelee = 50 | 69 | 74 | 78 | 85;
/**
 * Weapon ID's for Grenades
 * --
 * * 51 - HE (Hand Grenade)
 *
 * * 52 - Flashbang
 *
 * * 53 - Smoke Grenade
 *
 * * 54 - Flare
 *
 * * 72 - Gas Grenade
 *
 * * 73 - Molotov Cocktail
 *
 * * 75 - Snowball
 *
 * * 76 - Air Strike
 *
 * * 86 - Gut Bumb
 *
 * * 89 - Satchel Charge
 */
declare type WeaponItemTypeGrenades =
  | 51
  | 52
  | 53
  | 54
  | 72
  | 73
  | 75
  | 76
  | 86
  | 89;
/**
 * Weapon ID's for Mines
 * --
 * * 77 - Mine (Land mine)
 *
 * * 87 - Laser Mine
 */
declare type WeaponItemTypeMines = 77 | 87;
/**
 * Weapon ID's for Equipment
 * --
 * * 41 - Tactical Shield
 *
 * * 56 - Defuse Kit
 *
 * * 57 - Kevlar (+65 AP)
 *
 * * 58 - Kevlar + Helm (+100 AP)
 *
 * * 59 - Night Vision
 *
 * * 60 - Gas Mask
 *
 * * 61 - Primary Ammo
 *
 * * 62 - Secondary Ammo
 */
declare type WeaponItemTypeEquipment = 41 | 56 | 57 | 58 | 59 | 60 | 61 | 62;
/**
 * Weapon ID's for Misc Stuff
 * --
 * * 55 - Bomb
 *
 * * 63 - Planted Bomb
 *
 * * 64 - Medikit (Full HP)
 *
 * * 65 - Bandage (+20 HP)
 *
 * * 66 - Coins (+100)
 *
 * * 67 - Money (+500)
 *
 * * 68 - Gold (+1000)
 *
 * * 70 - Red Flag
 *
 * * 71 - Blue Flag
 */
declare type WeaponItemTypeStuff = 55 | 63 | 64 | 65 | 66 | 67 | 68 | 70 | 71;
/**
 * Weapon ID's for Armor
 * --
 * * 79 - Light Armor (-25% dmg)
 *
 * * 80 - Armor (-50% dmg)
 *
 * * 81 - Heavy Armor (-75% dmg)
 *
 * * 82 - Medic Armor (-50% dmg & +10 HP/s)
 *
 * * 83 - Super Armor (-95% dmg)
 *
 * * 84 - Stealth Suit (No Change)
 */
declare type WeaponItemTypeArmor = 79 | 80 | 81 | 82 | 83 | 84;
/**
 * Weapon ID's for Pistols
 * --
 *
 * * 1 - USP
 *
 * * 2 - Glock
 *
 * * 3 - Deagle
 *
 * * 4 - P228
 *
 * * 5 - Elite
 *
 * * 6 - Five-Seven
 *
 * ---
 * Weapon ID's for Shotguns
 * --
 * * 10 - M3
 *
 * * 11 - XM1014
 *
 * ---
 * Weapon ID's for SMG's
 * --
 * * 20 - MP5
 *
 * * 21 - TMP
 *
 * * 22 - P90
 *
 * * 23 - MAC10
 *
 * * 24 - UMP45
 *
 * ---
 * Weapon ID's for Rifles
 * --
 * * 30 - AK-47
 *
 * * 31 - SG552
 *
 * * 32 - M4A1
 *
 * * 33 - AUG
 *
 * * 34 - SCOUT
 *
 * * 35 - AWP
 *
 * * 36 - G3SG1
 *
 * * 37 - SG550
 *
 * * 38 - GALIL
 *
 * * 39 - FAMAS
 *
 * * 91 - FN F2000
 *
 * ---
 * Weapon ID's for the Big Guns!
 * ---
 * * 40 - M249
 *
 * * 45 - Laser
 *
 * * 46 - Flamethrower
 *
 * * 47 - RPG Launcher
 *
 * * 48 - Rocket Launcher
 *
 * * 49 - Grenade Launcher
 *
 * * 88 - Portal Gun
 *
 * * 90 - M134
 *
 * ---
 * Weapon ID's for Melees
 * --
 * * 50 - Knife
 *
 * * 69 - Machete
 *
 * * 74 - Wrench
 *
 * * 78 - Claw
 *
 * * 85 - Chainsaw
 *
 * ---
 * Weapon ID's for Grenades
 * --
 * * 51 - HE (Hand Grenade)
 *
 * * 52 - Flashbang
 *
 * * 53 - Smoke Grenade
 *
 * * 54 - Flare
 *
 * * 72 - Gas Grenade
 *
 * * 73 - Molotov Cocktail
 *
 * * 75 - Snowball
 *
 * * 76 - Air Strike
 *
 * * 86 - Gut Bumb
 *
 * * 89 - Satchel Charge
 *
 * ---
 * Weapon ID's for Mines
 * --
 * * 77 - Mine (Land mine)
 *
 * * 87 - Laser Mine
 *
 * ---
 * Weapon ID's for Equipment
 * --
 * * 41 - Tactical Shield
 *
 * * 56 - Defuse Kit
 *
 * * 57 - Kevlar (+65 AP)
 *
 * * 58 - Kevlar + Helm (+100 AP)
 *
 * * 59 - Night Vision
 *
 * * 60 - Gas Mask
 *
 * * 61 - Primary Ammo
 *
 * * 62 - Secondary Ammo
 *
 * ---
 * Weapon ID's for Misc Stuff
 * --
 * * 55 - Bomb
 *
 * * 63 - Planted Bomb
 *
 * * 64 - Medikit (Full HP)
 *
 * * 65 - Bandage (+20 HP)
 *
 * * 66 - Coins (+100)
 *
 * * 67 - Money (+500)
 *
 * * 68 - Gold (+1000)
 *
 * * 70 - Red Flag
 *
 * * 71 - Blue Flag
 *
 * ---
 * Weapon ID's for Armor
 * --
 * * 79 - Light Armor (-25% dmg)
 *
 * * 80 - Armor (-50% dmg)
 *
 * * 81 - Heavy Armor (-75% dmg)
 *
 * * 82 - Medic Armor (-50% dmg & +10 HP/s)
 *
 * * 83 - Super Armor (-95% dmg)
 *
 * * 84 - Stealth Suit (No Change)
 *
 */
declare type WeaponItemType =
  | WeaponItemTypePistol
  | WeaponItemTypeShotgun
  | WeaponItemTypeSMG
  | WeaponItemTypeRifle
  | WeaponItemTypeBigGuns
  | WeaponItemTypeMelee
  | WeaponItemTypeGrenades
  | WeaponItemTypeMines
  | WeaponItemTypeEquipment
  | WeaponItemTypeStuff
  | WeaponItemTypeArmor;

/**
 * Adds a Lua key bind for the specified key. This bind will be active for all players and will trigger the key-hook when a player presses or releases the related key.
 *
 * Returns 1 if adding the key bind worked, 0 otherwise (invalid key name / already bound).
 */
declare function addbind(key: BindKeyValue): 0 | 1;
/**
 * Attaches the Lua function "func" to the hook "hook". CS2D will always call that Lua function when the event related to that hook occurs.
 *
 * You can add an unlimited amount of different functions to each hook - but bear in mind that this might affect the performance in a negative way. Especially for hooks which are called frequently.
 */
declare function addhook(
  hook: HookValue,
  func: string,
  priority?: number,
): void;
/**
 * Bot with given ID aims at the given position (x|y) on the map (in pixels).
 */
declare function ai_aim(id: PlayerID, x: number, y: number): void;
/**
 * Bot with given ID performs an attack. Set secondary to 1 to use the secondary weapon function (=attack2) instead of the primary function.
 */
declare function ai_attack(id: PlayerID, secondary?: number): void;
/**
 * Bot with given ID tries to purchase a certain item
 */
declare function ai_buy(id: PlayerID, itemtype: WeaponItemType): void;
/**
 * Set debug-text for bot (only displayed if "debugai" is enabled).
 */
declare function ai_debug(id: PlayerID, text: string): void;
/**
 * Bot with given ID drops the current weapon.
 */
declare function ai_drop(id: PlayerID): void;
/**
 * Returns the ID of the closest enemy to the player with the specified ID or 0 when no enemy was found.
 *
 * Only players which are close enough (inside the virtual screen of the player) will be returned.
 *
 * When fog of war is enabled players behind walls won't be returned.
 */
declare function ai_findtarget(id: PlayerID): number;
/**
 * Checks if there is a free line between the bot with the given ID and the given position (x|y) (in pixels).
 */
declare function ai_freeline(id: PlayerID, x: number, y: number): boolean;
/**
 * Bot with the given ID goes to tile (x|y). Set walk to 1 to let it walk (silent).
 *
 * @Returns {0, 1 or 2}
 *
 * >0 - when failed to find path,
 *
 * >1 - when target is reached or
 *
 * >2 - when bot is still on its way.
 */
declare function ai_goto(
  id: PlayerID,
  x: number,
  y: number,
  walk?: number,
): 0 | 1 | 2;
/**
 * Bot with given ID performs an intelligent attack.
 *
 * This includes some additional logic:
 *
 * >If the current weapon has limited ammo, is empty and has spare ammo, a reload will be triggered and attacking will continue after reloading
 *
 * >If the current weapon is entirely empty (no spare ammo), switch to the next best weapon which can be used for attacking (in most cases pistol or melee)
 */
declare function ai_iattack(id: PlayerID): void;
/**
 * Bot with given ID moves into a certain direction (defined with the given angle from 0° to 360°).
 *
 * Set walk to 1 to let it walk.
 *
 * Returns 1 when successful or 0 when way is blocked.
 */
declare function ai_move(id: PlayerID, angle: number, walk?: 0 | 1): 0 | 1;
/**
 * Bot with given ID sends a radio message.
 */
declare function ai_radio(id: PlayerID, radioid: number): void;
/**
 * Bot with given ID reloads the current weapon.
 */
declare function ai_reload(id: PlayerID): void;
/**
 * Bot with given ID respawns (only if dead and only if game mode allows it).
 */
declare function ai_respawn(id: PlayerID): void;
/**
 * Bot with given ID instantly turns to certain direction/angle (from 0° to 360°).
 */
declare function ai_rotate(id: PlayerID, angle: number): void;
/**
 * Bot with given ID says the given text using the chat system.
 */
declare function ai_say(id: PlayerID, text: string): void;
/**
 * Bot with given ID says the given text to the own team only (using team chat).
 */
declare function ai_sayteam(id: PlayerID, text: string): void;
/**
 * Bot with given ID selects the weapon specified with itemtype.
 */
declare function ai_selectweapon(id: PlayerID, itemtype: WeaponItemType): void;
/**
 * Bot with given ID sprays a spraylogo at its current position.
 */
declare function ai_spray(id: PlayerID): void;
/**
 * Bot with given ID uses the environement (like pressing use-key).
 */
declare function ai_use(id: PlayerID): void;
/**
 * Returns the SHA256 checksum of the file at this path.
 */
declare function checksumfile(path: string): void;
/**
 * Returns the SHA256 checksum of the given string.
 */
declare function checksumstring(string: string): void;
/**
 * Returns the tile x and y position (2 values!) of the closest living and unused hostage to a given player. Returns -100,-100 if no hostage has been found.
 *
 * Note: The returned position is in tiles, NOT in pixels!
 * @tupleReturn
 */
declare function closehostage(playerid: PlayerID): [number, number];
/**
 * Returns a Lua table with all IDs of items which are close to the player specified with the id parameter.
 *
 * Only dropped items which are within the range will be returned.
 *
 * The unit for the range is tiles (range 1 equals 32 pixels for example).
 */
declare function closeitems(id: number, range: number): number[];
/**
 * Returns a list of objects which are within the specified radius (in pixels) around the specified position (X|Y) in pixels.
 *
 * Use type to limit the search to objects with a certain type only.
 */
declare function closeobjects(
  x: number,
  y: number,
  radius: number,
  type?: ObjectType,
): number[];
/**
 * Returns a list of all alive players (IDs) which are within the specified radius (in pixels) around the specified position (x|y) in pixels
 */
declare function closeplayers(
  x: number,
  y: number,
  radius: number,
  team?: 0 | 1 | 2,
): PlayerID[];
/**
 * Returns a value of an entity at the tile position (X|Y).
 *
 * Note: There is no entity(0,"table") as it is common for comparable commands! Use the command "entitylist" instead!
 */
declare function entity(
  x: number,
  y: number,
  value: EntityValue,
): string | boolean | number;
/**
 * Returns a list (Lua table) containing the positions (as X and Y tile coordinates) of all entities (except for Env_Decal).
 *
 * You can also limit the output to a certain entity type by using the optional type parameter.
 *
 * Note: The resulting "list" is actually a Lua table with one sub Lua table per entity in it. The sub tables have the fields/indices "x" and "y" which contain the X and Y tile coordinates of an entity.
 *
 * Attention: Env_Decal entities are NOT included in this list!
 */
declare function entitylist(type?: number): { x: number; y: number };
/**
 * Removes a function from a hook.
 *
 * Nothing will happen if the function has not been attached to the hook with addhook before.
 */
declare function freehook(hook: HookValue, func: string): void;
/**
 * Removes an image completely.
 *
 * Attention: The variable(s) you used to save the image ID will NOT be changed by CS2D! Please set them to nil manually!
 *
 * Attention: CS2D recycles image IDs! As soon as an image with ID X gets removed, a new image which is created afterwards might receive that very same ID again!
 * That's why it is very important to set the variable with the ID to nil to make sure that your script never tries to access this image again.
 * Otherwise your script might modify a completely different image!
 */
declare function freeimage(id: number): void;
/**
 * Removes timers which call the specified "func" with the specified "param".
 *
 * If "param" is not set (or ""), all timers with the matching "func" will be removed.
 *
 * If neither "func" nor "param" is set (or if both are ""), this will remove ALL existing timers.
 *
 * Once a timer has been removed it won't be executed anymore.
 *
 * Of course you can create the same time again if you want to.
 *
 * Note: You do not have to remove timers with a limited call count manually. They will remove themselves when they expire.
 *
 * Attention: Be very careful with the parameters. If both are empty / empty strings (""), you will remove ALL timers!
 */
declare function freetimer(func?: string, param?: string): void;
/**
 * Shows Lua functions in the Lua main table in the console of CS2D. For debugging purposes only.
 */
declare function funcs(): void;
/**
 * Returns a game state/setting.
 */
declare function game(value: GameValue): string | number | boolean;
/**
 * Checks if any alive player is within the specified radius (in pixels) around the specified position (x|y) in pixels.
 *
 * Returns a boolean true, if at least one player matching the criteria was found. Otherwise false.
 */
declare function hascloseplayers(
  x: number,
  y: number,
  radius: number,
  team?: 0 | 1 | 2,
): boolean;
/**
 * Returns a value of a hostage:
 *
 * hostage(0, "table"): a Lua table with all hostage IDs
 */
declare function hostage(id: number, value: HostageValueBoolean): boolean;
declare function hostage(id: number, value: HostageValueNumbers): number;
declare function hostage(id: number, value: HostageValueTable): number[];
/**
 * Creates an image (dynamic object) on the map and returns the ID for that image.
 *
 * The path is relative to the CS2D folder. The position is defined via x and y in pixels. mode defines how the image is displayed (see list below).
 *
 * Use the optional player parameter if you want the image to be visible to a certain player only (it's visible to all players by default).
 */
declare function image(
  path: string,
  x: number,
  y: number,
  mode: ImageMode,
  player?: number,
): number;
/**
 * Changes the opacity (also known as alpha, 0.0 transparent - 1.0 opaque) of an image.
 *
 * This can either be used to make an image (semi-)transparent / fully opaque or to temporarily hide an image completely (alpha 0).
 */
declare function imagealpha(id: number, alpha: number): void;
/**
 * Changes the blendmode of an image:
 *
 * >0 for normal (pixels are alpha blended, default mode)
 *
 * >1 for light (pixels are added)
 *
 * >2 for shade (pixels are multiplied)
 *
 * >3 for solid (pixels are overwritten, alpha transparency is ignored)
 */
declare function imageblend(id: number, mode: BlendMode): void;

declare function imageshadow(id: number, shadow: number): void;
/**
 * Changes the color of an image (use a colorpicker to get the values).
 *
 * The color is specified as red, green and blue values. Each ranging from 0 (black) to 255 (full color brightness)
 */
declare function imagecolor(
  id: number,
  red: number,
  green: number,
  blue: number,
): void;
/**
 * Changes the frame of the spritesheet image with the specified id. Has no effect if the image is not a spritesheet.
 *
 * The frame starts with 1 for the first frame. If you attempt to set the frame lower than 1 or larger than the maximum number of frames, the frame will be set to the first or last frame respectively.
 *
 * The frames are numbered from left to right and from top to bottom. So the top left frame is frame number 1 and the bottom right frame is the last frame.
 */
declare function imageframe(id: number, frame: number): void;
/**
 * Adds, removes or modifies a hit zone for an image which reacts to shots/attacks
 *
 * Each hit zone will trigger the hitzone-hook when it is hit by a shot/attack.
 *
 * Non-Blocking Modes (<=100, shots will pass through)
 *
 * 0 - no hit zone (this removes existing hit zones, other parameters don't matter)
 *
 * 1 - hit zone without effects (just register)
 *
 * 2 - wall effect
 *
 * 3 - blood effect
 *
 * 4 - green blood effect
 *
 * Blocking Modes (>100, shots will get stopped)
 *
 * 101 - hit zone without effects + stop shot
 *
 * 102 - wall effect + stop shot
 *
 * 103 - blood effect + stop shot
 *
 * 104 - green blood effect + stop shot
 *
 * All hit zones with modes which are higher than 100 will block the shots (objects behind them will not be damaged).
 *
 * They basically behave like walls but they have no influence on player movement or vision.
 */
declare function imagehitzone(id: number, mode: ImageHitzoneMode): void;
/**
 * Returns a value of an image.
 */
declare function imageparam(id: number, value: ImageparamValueStrings): string;
declare function imageparam(id: number, value: ImageparamValueNumbers): number;
/**
 * Changes the position (x & y, pixels) and rotation (rot, 0°-360°) of an image.
 */
declare function imagepos(id: number, x: number, y: number, rot: number): void;
/**
 * Changes the image scale factors (in other words: the image size).
 */
declare function imagescale(id: number, x: number, y: number): void;
/**
 * Checks if the tile position (x|y) is inside the area of a certain entity type and returns true if this is the case and false otherwise.
 *
 * The "area" of an entity depends on the entity type and and in some cases on its properties.
 */
declare function inentityzone(x: number, y: number, type: number): boolean;
/**
 * Returns a value of an item instance on the map.
 *
 * item(0,"table"): returns a Lua table with all IDs of items which are on the map (the unique instance IDs, NOT the type IDs!)
 */
declare function item(id: number, value: "type"): WeaponItemType;
declare function item(id: number, value: WeaponItemValueBoolean): boolean;
declare function item(id: number, value: WeaponItemValueNumbers): number;
declare function item(id: number, value: WeaponItemValueStrings): string;
declare function item(id: number, value: WeaponItemValueTable): number[];
/**
 * Returns a value of an item type.
 *
 * The values are the same for all objects of that type.
 */
declare function itemtype(
  type: WeaponItemType,
  value: WeaponItemTypeValueStrings,
): string;
declare function itemtype(
  type: WeaponItemType,
  value: WeaponItemTypeValueNumbers,
): number;
/**
 * Returns info about the current map.
 */
declare function map(value: MapValueStrings): string;
declare function map(value: MapValueNumbers): number;
/**
 * Opens a menu on the screen of a certain player (id=player id) or at the screen of every player (id=0)!
 *
 * The 'content' string defines the look and content of the menu.
 *
 * Scheme: "title,b1,b2,...,b9"
 *
 * title = title of the menu (Attach @b at the end of title for a bigger menu or @i for an invisible menu)
 *
 * b1-b9 = up to 9 button captions. Use empty strings for buttons you don't need.
 *
 * Captions can also be split into 2 parts by using "|" (scheme: "left caption|right caption").
 *
 * Moreover you can put () around a caption to make a disabled button.
 *
 * The menu-hook is executed when a player hits a menu button with the mouse or presses the corresponding numeric key.
 */
declare function menu(id: number, content: string): void;
/**
 * Sends "text" as server message to all players. It will be displayed in the chat area of the screen (bottom left).
 *
 * You can start "text" with an RGB color code "©RRRGGGBBB" to change its color. (use a colorpicker to get the values)
 *
 * It's also possible to display the text at the center of the screen. Just end "text" with "@C" (read: at center) to do so!
 */
declare function msg(text: string | number): void;
/**
 * Sends "text" to a certain player (id) only. It will be displayed in the chat area of the screen of that player (bottom left).
 *
 * You can start "text" with an RGB color code "©RRRGGGBBB...." to change its color. (use a colorpicker to get the values)
 *
 * It's also possible to display the text at the center of the screen. Just end "text" with "@C" (read: at center) to do so!
 */
declare function msg2(player: PlayerID, text: string | number): void;
/**
 * Returns a value of a dynamic object
 *
 * object(0,"table"): a Lua table with all dynamic object IDs
 */
declare function object(id: number, value: ObjectValueBoolean): boolean;
declare function object(id: number, value: ObjectValueNumbers): number;
declare function object(id: number, value: ObjectValueTable): number[];
/**
 * Returns the ID of the first object which is found at the tile position (X|Y) and which has the specified type.
 *
 * The function will return the first object of any type at this position if no type is specified.
 *
 * The function returns 0 if nothing is found at the specified position / with the specified type.
 */
declare function objectat(x: number, y: number, type: ObjectType): number;
/**
 * Returns a value of an object type (NOT an object instance on the map).
 *
 * The values are the same for all objects of that type.
 */
declare function objecttype(
  type: ObjectType,
  value: ObjectTypeValueStrings,
): string;
declare function objecttype(
  type: ObjectType,
  value: ObjectTypeValueNumbers,
): number;
/**
 * Executes ordinary non-Lua CS2D commands.
 *
 * Everything behind the first semicolon (;) will be ignored.
 *
 * This is a security measurement in case you're using user input (like chat messages) with this command.
 *
 * You can change this behavior by setting Stop-At-Semicolon to 0.
 */
declare function parse(commands: string, stopAtSemicolon?: number): void;
/**
 * Returns a value of a player or a table of players. Returns false if the specified player, value or table does not exist.
 */
declare function player(player: PlayerID, value: PlayerValueBoolean): boolean;
declare function player(player: PlayerID, value: PlayerValueStrings): string;
declare function player(player: PlayerID, value: PlayerValueNumbers): number;
declare function player(player: PlayerID, value: PlayerValueTable): PlayerID[];
/**
 * Returns how much ammo the specified player has left in the specified weapon.
 *
 * Returns two values:
 *
 * >The ammo currently loaded into the weapon and
 *
 * >the spare ammo for reloading
 *
 * @tupleReturn
 */
declare function playerammo(
  id: PlayerID,
  itemtype: WeaponItemType,
): [number, number];
/**
 * Returns a Lua table with all equippable weapon/item TYPES a player carries.
 */
declare function playerweapons(id: PlayerID): WeaponItemType[];
/**
 * Shows text in console.
 *
 * You can start "text" with an RGB color code "©RRRGGGBBB" to change its color. (use a colorpicker to get the values)
 */
declare function print(...args: never[]): void;
/**
 * Returns a value of a projectile (projectiles are grenades and most stuff launched by weapons which is visible for multiple frames.
 * Regular bullets are NO projectiles though)
 */
declare function projectile(
  id: number,
  player: PlayerID,
  value: ProjectileValue,
): string | number | boolean;
/**
 * Returns a list (Lua table) containing projectile key data (IDs and parent player) of all flying or ground projectiles.
 *
 * You can also limit the output to the projectiles of a certain player (player=0 is default and will list projectiles of all players).
 *
 * The list parameter can either be 0 (default) for all flying projectiles or 1 for all ground projectiles.
 */
declare function projectilelist(
  list?: number,
  player?: PlayerID,
): { id: number; player: number }[];
/**
 * Returns the tile x and y position (2 values!) of a random entity of a certain type or -100,-100 if no entity has been found.
 *
 * Use AI-State to only find entities with this AI state (-1 or omit to ignore the AI-state).
 *
 * Use int0 to only find entities with this int0 value (-1 or omit to ignore the int0 value).
 *
 * @tupleReturn
 */
declare function randomentity(
  type: number,
  aiState?: number,
  int0?: number,
): [number, number];
/**
 * Returns the tile x and y position (2 values!) of a random living and unused (not following anyone) hostage. Returns -100,-100 if no hostage has been found.
 *
 * Set unused to 0 if you want to get used hostages as well!
 *
 * @tupleReturn
 */
declare function randomhostage(unused?: number): void;
/**
 * Removes all Lua key binds. This will entirely disable all additional network traffic caused by key binds and the key-hook won't be called anymore.
 */
declare function removeallbinds(): void;
/**
 * Removes a specific Lua key bind. They key must have been added beforehand with addbind.
 *
 * Returns 1 if the bind was removed, 0 if the bind did not exist.
 */
declare function removebind(key: BindKeyValue): 0 | 1;
/**
 * reqcld is short for "request client data". This command requests data from a single player client (id=player id) or from all clients (id=0).
 *
 * Mode specifies which data the server will receive:
 *
 * >Mode 0: Cursor position (cursor position on screen in pixels, scaled based on mp_hudscale)
 *
 * Deprecated: It is recommended to use player with parameters "mousex"/"mousey" instead!
 *
 * >Mode 1: Map scrolling (scrolling offset in pixels)
 *
 * >Mode 2: Absolute cursor position (cursor position on map in pixels, NOT influenced by mp_hudscale)
 *
 * Deprecated: It is recommended to use player with parameters "mousemapx"/"mousemapy" instead!
 *
 * >Mode 3: 1 if the client has the advanced light engine enabled, 0 otherwise (second value always 0)
 *
 * >Mode 4: 1 if the file specified with parameter (file path relative to the CS2D folder) has been loaded, 0 otherwise; checksum of the file (only if the file is under gfx/ or sfx/) as provided by checksumfile
 *
 * >Mode 5: Mod info
 *
 * >Mode 6: 1 if the client has 3D rendering (render3d) enabled, 0 otherwise (second value always 0)
 *
 * The last parameter is not required for all modes. For some modes (mode 4) it is crucial though.
 *
 * Please read the descriptions of the modes to learn when and how it is used.
 *
 * The requested data will be received with a delay. This is because it is sent over the network. You have to use the clientdata-hook to handle the incoming data!
 */
declare function reqcld(
  id: number,
  mode: 0 | 1 | 2 | 3 | 4 | 5 | 6,
  parameter?: string,
): void;
/**
 * reqhttp is short for "request HTTP". HTTP is used to request data from web pages / web services.
 *
 * "url" = The domain name or IP e.g. "cs2d.com"
 *
 * "path" = The relative path of the thing you want to request, normally starting with a backslash. E.g. "/index.php"
 *
 * mode = Controls how you want to receive the result. 0 for a plain string, 1 for a byte array (Lua table with numbers).
 *
 * The requested data will be received with a delay. This is because it is sent over the network. You have to use the httpdata-hook to handle the incoming data!
 *
 * The command will return a unique ID for the request. The same ID will be passed to the httpdata-hook so you can match request and response.
 */
declare function reqhttp(url: string, path: string, mode: 0 | 1): number;
/**
 * Sets the AI state value of the entity at tile position (x|y). The AI state of each entity is automatically set to 0 on each round start.
 *
 * CS2D does not actively use the AI state and you can set it to any integer value you want.
 *
 * It's commonly used in AI scripts (bots) only.
 *
 * e.g.: when a bomb has been planted, bots can mark a bomb spot as checked ("bomb is not here") using the AI state. This can be used to prevent that the same spot is checked again.
 */
declare function setentityaistate(x: number, y: number, ai: number): void;
/**
 *
 */
declare function sethookstate(hook: HookValue, enable: 0 | 1): void;
/**
 * Returns stats for a U.S.G.N. account ID.
 */
declare function stats(usgnid: number, value: StatsValueBoolean): boolean;
declare function stats(usgnid: number, value: StatsValueNumbers): number;
/**
 * Returns stats for a Steam account ID (provided as string)
 */
declare function steamstats(steamid: string, value: StatsValueBoolean): boolean;
declare function steamstats(steamid: string, value: StatsValueNumbers): number;

/**
 * Returns a value of the tile at the tile position (X|Y)
 *
 * Property Types:
 * ---
 *
 * * 0-tile w/o sound
 *
 * * 1-wall
 *
 * * 2 - obstacle
 *
 * * 3 - wall w/o shadow
 *
 * * 4 - obstacle w/o shadow
 *
 * * 5 - floor wall
 *
 * * 10 - dirt floor
 *
 * * 11 - snow floor
 *
 * * 12 - step floor
 *
 * * 13 - tile floor
 *
 * * 14 - wade floor
 *
 * * 15 - metal floor
 *
 * * 16 - wood floor
 *
 * * 50 - deadly
 *
 * * 51 - toxic deadly
 *
 * * 52 - explosion deadly
 *
 * * 53 - abyss deadly
 *
 */
declare function tile(x: number, y: number, value: TileValueBoolean): boolean;
declare function tile(x: number, y: number, value: TileValueNumbers): number;
declare function tile(
  x: number,
  y: number,
  value: TileValueTable,
): { r: number; g: number; b: number } | boolean;
declare function tile<T>(x: number, y: number, value: TileValue): T;
/**
 * Gets the property value for the specified tileFrame in the tileset of the current map.
 *
 * The returned property value describes the behaviour of the tile.
 *
 * Note: Will return 0 if you specify a tileFrame which is not part of the tileset!
 */
declare function tileproperty(tileframe: number): TilePropertyType;
/**
 * Creates a timer which will call the Lua function "function" after a certain time in milliseconds (time).
 *
 * Moreover it can pass an optional string parameter ("param") to this function.
 *
 * The timer calls the function once by default. However you can call it several times by entering the optional count parameter (count).
 *
 * Using 0 or negative count values will make the timer call the function infinite times or until it is removed via freetimer.
 *
 * Note: Time is specified in ms (milliseconds, 1000 ms = 1 sec)
 */
declare function timer(
  time: number,
  func: string,
  param?: string,
  count?: number,
): void;
/**
 * Creates an alpha fade tween which changes the transparency of an image (with the specified ID).
 *
 * The image will have the given alpha transparency value after the given time!
 *
 * Alpha ranges from 0.0 (totally invisible) to 1.0 (completely opaque)
 *
 * Note: Time is specified in ms (milliseconds, 1000 ms = 1 sec)
 */
declare function tween_alpha(id: number, time: number, alpha: number): void;
/**
 * Creates an animation tween which changes the frame of the spritesheet image with the specified id constantly.
 *
 * The speed defines how many milliseconds each frame should be displayed.
 *
 * You can also specify an animation mode:
 *
 * >0 - Loop Forward (play from current frame to last frame and then continue at first frame)
 *
 * >1 - Loop Backward (play from current frame to first frame and then continue at last frame)
 *
 * >2 - Ping Pong Forward (play forward to last frame and then backward to first frame etc.)
 *
 * >3 - Ping Pong Backward (play backward to first frame and then forward to last frame etc.)
 *
 * >4 - Random (an entirely random frame is displayed every speed milliseconds)
 *
 * The tween stays active until another tween_animate or tween_frame is applied to the same image.
 *
 * Note: Speed is specified in ms (milliseconds, 1000 ms = 1 sec)
 */
declare function tween_animate(
  id: number,
  speed: number,
  mode: 0 | 1 | 2 | 3 | 4,
): void;
/**
 * Creates a color fade tween which changes the color of an image (with the specified ID).
 *
 * The image will have the given color after the given time (use a colorpicker to get the values)!
 *
 * Note: Time is specified in ms (milliseconds, 1000 ms = 1 sec)
 */
declare function tween_color(
  id: number,
  time: number,
  r: number,
  g: number,
  b: number,
): void;
/**
 * Creates a frame animation tween which changes the frame of a spritesheet image (with the specified ID).
 *
 * The image will have the given frame after the given time.
 *
 * Note: Time is specified in ms (milliseconds, 1000 ms = 1 sec)
 */
declare function tween_frame(id: number, time: number, frame: number): void;
/**
 * Creates a movement tween which moves the image (with the specified ID) to x,y in the given time (+rotates it if rot is specified).
 *
 * Note: Time is specified in ms (milliseconds, 1000 ms = 1 sec)
 */
declare function tween_move(
  id: number,
  time: number,
  x: number,
  y: number,
  rot?: number,
): void;
/**
 * Creates a rotation tween which rotates the image (with the specified ID) to the angle rot in the given time.
 *
 * Note: Time is specified in ms (milliseconds, 1000 ms = 1 sec)
 */
declare function tween_rotate(id: number, time: number, rot: number): void;
/**
 * Creates a constant rotation animation which rotates an image (with the specified ID) permanently (negative speed for counter clockwise rotation)
 *
 * Note: The rotation doesn't end until another tween with rotation is applied!
 */
declare function tween_rotateconstantly(id: number, speed: number): void;
/**
 * Creates a scale tween which changes the size of an image (with the specified ID). x will be the new width factor and y the new height factor after the given time.
 *
 * Note: Time is specified in ms (milliseconds, 1000 ms = 1 sec)
 */
declare function tween_scale(
  id: number,
  time: number,
  x: number,
  y: number,
): void;
/**
 * Shows Lua variables in the Lua main table in the console of CS2D. For debugging purposes only.
 */
declare function vars(): void;
