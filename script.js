const GAMES=[{"name": "Counter-Strike 2", "id": 730, "genre": "Ação", "url": "https://store.steampowered.com/app/730/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg"}, {"name": "Dota 2", "id": 570, "genre": "MOBA", "url": "https://store.steampowered.com/app/570/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg"}, {"name": "PUBG: BATTLEGROUNDS", "id": 578080, "genre": "Battle Royale", "url": "https://store.steampowered.com/app/578080/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg"}, {"name": "Apex Legends", "id": 1172470, "genre": "Battle Royale", "url": "https://store.steampowered.com/app/1172470/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg"}, {"name": "Team Fortress 2", "id": 440, "genre": "Ação", "url": "https://store.steampowered.com/app/440/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/440/header.jpg"}, {"name": "Warframe", "id": 230410, "genre": "Ação", "url": "https://store.steampowered.com/app/230410/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/230410/header.jpg"}, {"name": "Grand Theft Auto V", "id": 271590, "genre": "Mundo aberto", "url": "https://store.steampowered.com/app/271590/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg"}, {"name": "Red Dead Redemption 2", "id": 1174180, "genre": "Mundo aberto", "url": "https://store.steampowered.com/app/1174180/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg"}, {"name": "Cyberpunk 2077", "id": 1091500, "genre": "RPG", "url": "https://store.steampowered.com/app/1091500/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg"}, {"name": "The Witcher 3: Wild Hunt", "id": 292030, "genre": "RPG", "url": "https://store.steampowered.com/app/292030/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg"}, {"name": "Elden Ring", "id": 1245620, "genre": "RPG", "url": "https://store.steampowered.com/app/1245620/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg"}, {"name": "Dark Souls III", "id": 374320, "genre": "RPG", "url": "https://store.steampowered.com/app/374320/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/header.jpg"}, {"name": "Sekiro: Shadows Die Twice", "id": 814380, "genre": "Ação", "url": "https://store.steampowered.com/app/814380/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/814380/header.jpg"}, {"name": "Hogwarts Legacy", "id": 990080, "genre": "Aventura", "url": "https://store.steampowered.com/app/990080/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg"}, {"name": "Baldur’s Gate 3", "id": 1086940, "genre": "RPG", "url": "https://store.steampowered.com/app/1086940/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg"}, {"name": "Stardew Valley", "id": 413150, "genre": "Simulação", "url": "https://store.steampowered.com/app/413150/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg"}, {"name": "Terraria", "id": 105600, "genre": "Sandbox", "url": "https://store.steampowered.com/app/105600/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg"}, {"name": "Minecraft", "id": 0, "genre": "Sandbox", "url": "https://www.minecraft.net/", "cover": ""}, {"name": "Roblox", "id": 0, "genre": "Sandbox", "url": "https://www.roblox.com/", "cover": ""}, {"name": "Fortnite", "id": 0, "genre": "Battle Royale", "url": "https://www.fortnite.com/", "cover": ""}, {"name": "Rocket League", "id": 252950, "genre": "Esportes", "url": "https://store.steampowered.com/app/252950/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/252950/header.jpg"}, {"name": "Fall Guys", "id": 1097150, "genre": "Party", "url": "https://store.steampowered.com/app/1097150/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1097150/header.jpg"}, {"name": "Among Us", "id": 945360, "genre": "Party", "url": "https://store.steampowered.com/app/945360/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/945360/header.jpg"}, {"name": "Phasmophobia", "id": 739630, "genre": "Terror", "url": "https://store.steampowered.com/app/739630/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/739630/header.jpg"}, {"name": "Dead by Daylight", "id": 381210, "genre": "Terror", "url": "https://store.steampowered.com/app/381210/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/381210/header.jpg"}, {"name": "Left 4 Dead 2", "id": 550, "genre": "Tiro", "url": "https://store.steampowered.com/app/550/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/550/header.jpg"}, {"name": "DOOM Eternal", "id": 782330, "genre": "Tiro", "url": "https://store.steampowered.com/app/782330/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/782330/header.jpg"}, {"name": "Halo Infinite", "id": 1240440, "genre": "Tiro", "url": "https://store.steampowered.com/app/1240440/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1240440/header.jpg"}, {"name": "Destiny 2", "id": 1085660, "genre": "Tiro", "url": "https://store.steampowered.com/app/1085660/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/header.jpg"}, {"name": "Borderlands 3", "id": 397540, "genre": "Tiro", "url": "https://store.steampowered.com/app/397540/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/397540/header.jpg"}, {"name": "Hades", "id": 1145360, "genre": "Roguelike", "url": "https://store.steampowered.com/app/1145360/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg"}, {"name": "Hollow Knight", "id": 367520, "genre": "Metroidvania", "url": "https://store.steampowered.com/app/367520/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg"}, {"name": "Celeste", "id": 504230, "genre": "Plataforma", "url": "https://store.steampowered.com/app/504230/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/504230/header.jpg"}, {"name": "Cuphead", "id": 268910, "genre": "Plataforma", "url": "https://store.steampowered.com/app/268910/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/268910/header.jpg"}, {"name": "Sonic Mania", "id": 584400, "genre": "Plataforma", "url": "https://store.steampowered.com/app/584400/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/584400/header.jpg"}, {"name": "Sonic Frontiers", "id": 1237320, "genre": "Aventura", "url": "https://store.steampowered.com/app/1237320/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1237320/header.jpg"}, {"name": "Among Trees", "id": 897730, "genre": "Sobrevivência", "url": "https://store.steampowered.com/app/897730/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/897730/header.jpg"}, {"name": "Subnautica", "id": 264710, "genre": "Sobrevivência", "url": "https://store.steampowered.com/app/264710/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/264710/header.jpg"}, {"name": "The Forest", "id": 242760, "genre": "Sobrevivência", "url": "https://store.steampowered.com/app/242760/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/242760/header.jpg"}, {"name": "Sons Of The Forest", "id": 1326470, "genre": "Sobrevivência", "url": "https://store.steampowered.com/app/1326470/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1326470/header.jpg"}, {"name": "ARK: Survival Evolved", "id": 346110, "genre": "Sobrevivência", "url": "https://store.steampowered.com/app/346110/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/346110/header.jpg"}, {"name": "Rust", "id": 252490, "genre": "Sobrevivência", "url": "https://store.steampowered.com/app/252490/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/header.jpg"}, {"name": "Valheim", "id": 892970, "genre": "Sobrevivência", "url": "https://store.steampowered.com/app/892970/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/892970/header.jpg"}, {"name": "No Man’s Sky", "id": 275850, "genre": "Exploração", "url": "https://store.steampowered.com/app/275850/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/275850/header.jpg"}, {"name": "Sea of Thieves", "id": 1172620, "genre": "Aventura", "url": "https://store.steampowered.com/app/1172620/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1172620/header.jpg"}, {"name": "Euro Truck Simulator 2", "id": 227300, "genre": "Simulação", "url": "https://store.steampowered.com/app/227300/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/227300/header.jpg"}, {"name": "The Sims 4", "id": 1222670, "genre": "Simulação", "url": "https://store.steampowered.com/app/1222670/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/header.jpg"}, {"name": "Cities: Skylines", "id": 255710, "genre": "Simulação", "url": "https://store.steampowered.com/app/255710/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/255710/header.jpg"}, {"name": "Planet Zoo", "id": 703080, "genre": "Simulação", "url": "https://store.steampowered.com/app/703080/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/703080/header.jpg"}, {"name": "Microsoft Flight Simulator", "id": 1250410, "genre": "Simulação", "url": "https://www.xbox.com/games/microsoft-flight-simulator", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1250410/header.jpg"}, {"name": "Forza Horizon 5", "id": 1551360, "genre": "Corrida", "url": "https://store.steampowered.com/app/1551360/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg"}, {"name": "Need for Speed Heat", "id": 1222680, "genre": "Corrida", "url": "https://store.steampowered.com/app/1222680/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1222680/header.jpg"}, {"name": "Trackmania", "id": 2225070, "genre": "Corrida", "url": "https://store.steampowered.com/app/2225070/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2225070/header.jpg"}, {"name": "F1 24", "id": 2488620, "genre": "Corrida", "url": "https://store.steampowered.com/app/2488620/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2488620/header.jpg"}, {"name": "EA SPORTS FC 25", "id": 2669320, "genre": "Esportes", "url": "https://store.steampowered.com/app/2669320/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2669320/header.jpg"}, {"name": "NBA 2K25", "id": 2878980, "genre": "Esportes", "url": "https://store.steampowered.com/app/2878980/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2878980/header.jpg"}, {"name": "Mortal Kombat 11", "id": 976310, "genre": "Luta", "url": "https://store.steampowered.com/app/976310/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/976310/header.jpg"}, {"name": "Street Fighter 6", "id": 1364780, "genre": "Luta", "url": "https://store.steampowered.com/app/1364780/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1364780/header.jpg"}, {"name": "Tekken 8", "id": 1778820, "genre": "Luta", "url": "https://store.steampowered.com/app/1778820/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1778820/header.jpg"}, {"name": "Guilty Gear -Strive-", "id": 1384160, "genre": "Luta", "url": "https://store.steampowered.com/app/1384160/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1384160/header.jpg"}, {"name": "Palworld", "id": 1623730, "genre": "Sobrevivência", "url": "https://store.steampowered.com/app/1623730/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1623730/header.jpg"}, {"name": "Lethal Company", "id": 1966720, "genre": "Terror", "url": "https://store.steampowered.com/app/1966720/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1966720/header.jpg"}, {"name": "Content Warning", "id": 2881650, "genre": "Terror", "url": "https://store.steampowered.com/app/2881650/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2881650/header.jpg"}, {"name": "The Outlast Trials", "id": 1304930, "genre": "Terror", "url": "https://store.steampowered.com/app/1304930/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1304930/header.jpg"}, {"name": "Resident Evil 4", "id": 2050650, "genre": "Terror", "url": "https://store.steampowered.com/app/2050650/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg"}, {"name": "Resident Evil Village", "id": 1196590, "genre": "Terror", "url": "https://store.steampowered.com/app/1196590/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1196590/header.jpg"}, {"name": "Silent Hill 2", "id": 2124490, "genre": "Terror", "url": "https://store.steampowered.com/app/2124490/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2124490/header.jpg"}, {"name": "Dead Space", "id": 1693980, "genre": "Terror", "url": "https://store.steampowered.com/app/1693980/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1693980/header.jpg"}, {"name": "The Last of Us Part I", "id": 1888930, "genre": "Aventura", "url": "https://store.steampowered.com/app/1888930/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1888930/header.jpg"}, {"name": "God of War", "id": 1593500, "genre": "Ação", "url": "https://store.steampowered.com/app/1593500/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg"}, {"name": "Marvel’s Spider-Man Remastered", "id": 1817070, "genre": "Ação", "url": "https://store.steampowered.com/app/1817070/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/header.jpg"}, {"name": "Horizon Zero Dawn", "id": 1151640, "genre": "Aventura", "url": "https://store.steampowered.com/app/1151640/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/header.jpg"}, {"name": "Days Gone", "id": 1259420, "genre": "Ação", "url": "https://store.steampowered.com/app/1259420/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1259420/header.jpg"}, {"name": "Uncharted: Legacy of Thieves", "id": 1659420, "genre": "Aventura", "url": "https://store.steampowered.com/app/1659420/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1659420/header.jpg"}, {"name": "Final Fantasy VII Remake Intergrade", "id": 1462040, "genre": "RPG", "url": "https://store.steampowered.com/app/1462040/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1462040/header.jpg"}, {"name": "Persona 5 Royal", "id": 1687950, "genre": "RPG", "url": "https://store.steampowered.com/app/1687950/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1687950/header.jpg"}, {"name": "Monster Hunter: World", "id": 582010, "genre": "RPG", "url": "https://store.steampowered.com/app/582010/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/582010/header.jpg"}, {"name": "Dragon’s Dogma 2", "id": 2054970, "genre": "RPG", "url": "https://store.steampowered.com/app/2054970/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2054970/header.jpg"}, {"name": "Diablo IV", "id": 2344520, "genre": "RPG", "url": "https://store.steampowered.com/app/2344520/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2344520/header.jpg"}, {"name": "Path of Exile", "id": 238960, "genre": "RPG", "url": "https://store.steampowered.com/app/238960/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/238960/header.jpg"}, {"name": "Last Epoch", "id": 899770, "genre": "RPG", "url": "https://store.steampowered.com/app/899770/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/899770/header.jpg"}, {"name": "Torchlight II", "id": 200710, "genre": "RPG", "url": "https://store.steampowered.com/app/200710/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/200710/header.jpg"}, {"name": "Civilization VI", "id": 289070, "genre": "Estratégia", "url": "https://store.steampowered.com/app/289070/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/289070/header.jpg"}, {"name": "Age of Empires II: Definitive Edition", "id": 813780, "genre": "Estratégia", "url": "https://store.steampowered.com/app/813780/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/813780/header.jpg"}, {"name": "Age of Empires IV", "id": 1466860, "genre": "Estratégia", "url": "https://store.steampowered.com/app/1466860/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1466860/header.jpg"}, {"name": "StarCraft II", "id": 0, "genre": "Estratégia", "url": "https://starcraft2.blizzard.com/", "cover": ""}, {"name": "Warcraft III: Reforged", "id": 0, "genre": "Estratégia", "url": "https://warcraft3.blizzard.com/", "cover": ""}, {"name": "Total War: WARHAMMER III", "id": 1142710, "genre": "Estratégia", "url": "https://store.steampowered.com/app/1142710/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1142710/header.jpg"}, {"name": "XCOM 2", "id": 268500, "genre": "Estratégia", "url": "https://store.steampowered.com/app/268500/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/268500/header.jpg"}, {"name": "Crusader Kings III", "id": 1158310, "genre": "Estratégia", "url": "https://store.steampowered.com/app/1158310/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1158310/header.jpg"}, {"name": "RimWorld", "id": 294100, "genre": "Simulação", "url": "https://store.steampowered.com/app/294100/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/294100/header.jpg"}, {"name": "Factorio", "id": 427520, "genre": "Sandbox", "url": "https://store.steampowered.com/app/427520/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/427520/header.jpg"}, {"name": "Satisfactory", "id": 526870, "genre": "Sandbox", "url": "https://store.steampowered.com/app/526870/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/526870/header.jpg"}, {"name": "Kerbal Space Program", "id": 220200, "genre": "Simulação", "url": "https://store.steampowered.com/app/220200/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/220200/header.jpg"}, {"name": "The Binding of Isaac: Rebirth", "id": 250900, "genre": "Roguelike", "url": "https://store.steampowered.com/app/250900/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/250900/header.jpg"}, {"name": "Dead Cells", "id": 588650, "genre": "Roguelike", "url": "https://store.steampowered.com/app/588650/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/588650/header.jpg"}, {"name": "Risk of Rain 2", "id": 632360, "genre": "Roguelike", "url": "https://store.steampowered.com/app/632360/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/632360/header.jpg"}, {"name": "Vampire Survivors", "id": 1794680, "genre": "Roguelike", "url": "https://store.steampowered.com/app/1794680/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1794680/header.jpg"}, {"name": "Slay the Spire", "id": 646570, "genre": "Cartas", "url": "https://store.steampowered.com/app/646570/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/646570/header.jpg"}, {"name": "Balatro", "id": 2379780, "genre": "Cartas", "url": "https://store.steampowered.com/app/2379780/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2379780/header.jpg"}, {"name": "Inscryption", "id": 1091500, "genre": "Cartas", "url": "https://store.steampowered.com/app/1091500/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg"}, {"name": "Portal 2", "id": 620, "genre": "Puzzle", "url": "https://store.steampowered.com/app/620/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/620/header.jpg"}, {"name": "The Talos Principle 2", "id": 835960, "genre": "Puzzle", "url": "https://store.steampowered.com/app/835960/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/835960/header.jpg"}, {"name": "It Takes Two", "id": 1426210, "genre": "Cooperativo", "url": "https://store.steampowered.com/app/1426210/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1426210/header.jpg"}, {"name": "A Way Out", "id": 1222700, "genre": "Cooperativo", "url": "https://store.steampowered.com/app/1222700/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1222700/header.jpg"}, {"name": "Overcooked! 2", "id": 728880, "genre": "Cooperativo", "url": "https://store.steampowered.com/app/728880/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/728880/header.jpg"}, {"name": "Human: Fall Flat", "id": 477160, "genre": "Puzzle", "url": "https://store.steampowered.com/app/477160/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/477160/header.jpg"}, {"name": "Gang Beasts", "id": 285900, "genre": "Party", "url": "https://store.steampowered.com/app/285900/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/285900/header.jpg"}, {"name": "Brawlhalla", "id": 291550, "genre": "Luta", "url": "https://store.steampowered.com/app/291550/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/291550/header.jpg"}, {"name": "The Elder Scrolls V: Skyrim", "id": 489830, "genre": "RPG", "url": "https://store.steampowered.com/app/489830/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/489830/header.jpg"}, {"name": "Fallout 4", "id": 377160, "genre": "RPG", "url": "https://store.steampowered.com/app/377160/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/377160/header.jpg"}, {"name": "Mass Effect Legendary Edition", "id": 1328670, "genre": "RPG", "url": "https://store.steampowered.com/app/1328670/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1328670/header.jpg"}, {"name": "Dragon Age: Inquisition", "id": 1222690, "genre": "RPG", "url": "https://www.ea.com/games/dragon-age/dragon-age-inquisition", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1222690/header.jpg"}, {"name": "Assassin’s Creed Valhalla", "id": 2208920, "genre": "Ação", "url": "https://store.steampowered.com/app/2208920/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/header.jpg"}, {"name": "Far Cry 6", "id": 2369390, "genre": "Ação", "url": "https://store.steampowered.com/app/2369390/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2369390/header.jpg"}, {"name": "Watch Dogs 2", "id": 447040, "genre": "Mundo aberto", "url": "https://store.steampowered.com/app/447040/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/447040/header.jpg"}, {"name": "Sleeping Dogs: Definitive Edition", "id": 307690, "genre": "Mundo aberto", "url": "https://store.steampowered.com/app/307690/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/307690/header.jpg"}, {"name": "Batman: Arkham Knight", "id": 208650, "genre": "Ação", "url": "https://store.steampowered.com/app/208650/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/208650/header.jpg"}, {"name": "Shadow of the Tomb Raider", "id": 750920, "genre": "Aventura", "url": "https://store.steampowered.com/app/750920/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/750920/header.jpg"}, {"name": "Ori and the Will of the Wisps", "id": 1057090, "genre": "Plataforma", "url": "https://store.steampowered.com/app/1057090/", "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1057090/header.jpg"}];
const SHOPS=[{"name": "Steam", "domain": "store.steampowered.com", "url": "https://store.steampowered.com"}, {"name": "Epic Games Store", "domain": "store.epicgames.com", "url": "https://store.epicgames.com"}, {"name": "GOG", "domain": "gog.com", "url": "https://gog.com"}, {"name": "itch.io", "domain": "itch.io", "url": "https://itch.io"}, {"name": "Humble Store", "domain": "humblebundle.com/store", "url": "https://humblebundle.com/store"}, {"name": "Green Man Gaming", "domain": "greenmangaming.com", "url": "https://greenmangaming.com"}, {"name": "Fanatical", "domain": "fanatical.com", "url": "https://fanatical.com"}, {"name": "Gamesplanet", "domain": "gamesplanet.com", "url": "https://gamesplanet.com"}, {"name": "GameBillet", "domain": "gamebillet.com", "url": "https://gamebillet.com"}, {"name": "WinGameStore", "domain": "wingamestore.com", "url": "https://wingamestore.com"}, {"name": "Microsoft Store", "domain": "apps.microsoft.com", "url": "https://apps.microsoft.com"}, {"name": "Xbox Store", "domain": "xbox.com/games/store", "url": "https://xbox.com/games/store"}, {"name": "PlayStation Store", "domain": "store.playstation.com", "url": "https://store.playstation.com"}, {"name": "Nintendo eShop", "domain": "nintendo.com/us/store", "url": "https://nintendo.com/us/store"}, {"name": "EA app", "domain": "ea.com/ea-app", "url": "https://ea.com/ea-app"}, {"name": "Ubisoft Store", "domain": "store.ubisoft.com", "url": "https://store.ubisoft.com"}, {"name": "Battle.net", "domain": "battle.net", "url": "https://battle.net"}, {"name": "Rockstar Store", "domain": "store.rockstargames.com", "url": "https://store.rockstargames.com"}, {"name": "Blizzard Shop", "domain": "gear.blizzard.com", "url": "https://gear.blizzard.com"}, {"name": "Riot Games", "domain": "riotgames.com", "url": "https://riotgames.com"}, {"name": "Minecraft Marketplace", "domain": "minecraft.net", "url": "https://minecraft.net"}, {"name": "Roblox Marketplace", "domain": "roblox.com/catalog", "url": "https://roblox.com/catalog"}, {"name": "Google Play Games", "domain": "play.google.com/store/games", "url": "https://play.google.com/store/games"}, {"name": "Apple App Store", "domain": "apps.apple.com", "url": "https://apps.apple.com"}, {"name": "Amazon Games", "domain": "gaming.amazon.com", "url": "https://gaming.amazon.com"}, {"name": "Prime Gaming", "domain": "gaming.amazon.com", "url": "https://gaming.amazon.com"}, {"name": "Kinguin", "domain": "kinguin.net", "url": "https://kinguin.net"}, {"name": "G2A", "domain": "g2a.com", "url": "https://g2a.com"}, {"name": "CDKeys", "domain": "cdkeys.com", "url": "https://cdkeys.com"}, {"name": "Eneba", "domain": "eneba.com", "url": "https://eneba.com"}, {"name": "Instant Gaming", "domain": "instant-gaming.com", "url": "https://instant-gaming.com"}, {"name": "GamesDeal", "domain": "gamesdeal.com", "url": "https://gamesdeal.com"}, {"name": "DLGamer", "domain": "dlgamer.com", "url": "https://dlgamer.com"}, {"name": "DreamGame", "domain": "dreamgame.com", "url": "https://dreamgame.com"}, {"name": "Voidu", "domain": "voidu.com", "url": "https://voidu.com"}, {"name": "Gamesload", "domain": "gamesload.com", "url": "https://gamesload.com"}, {"name": "Gamesrocket", "domain": "gamesrocket.com", "url": "https://gamesrocket.com"}, {"name": "2Game", "domain": "2game.com", "url": "https://2game.com"}, {"name": "Play-Asia", "domain": "play-asia.com", "url": "https://play-asia.com"}, {"name": "Fanatical Bundles", "domain": "fanatical.com/en/bundle", "url": "https://fanatical.com/en/bundle"}, {"name": "Bundle Stars", "domain": "bundlestars.com", "url": "https://bundlestars.com"}, {"name": "IndieGala", "domain": "indiegala.com", "url": "https://indiegala.com"}, {"name": "Greenlight Games", "domain": "greenlightgames.com", "url": "https://greenlightgames.com"}, {"name": "K4G", "domain": "k4g.com", "url": "https://k4g.com"}, {"name": "GamersGate", "domain": "gamersgate.com", "url": "https://gamersgate.com"}, {"name": "Direct2Drive", "domain": "direct2drive.com", "url": "https://direct2drive.com"}, {"name": "MacGameStore", "domain": "macgamestore.com", "url": "https://macgamestore.com"}, {"name": "Feral Store", "domain": "feralinteractive.com", "url": "https://feralinteractive.com"}, {"name": "Paradox Store", "domain": "paradoxinteractive.com", "url": "https://paradoxinteractive.com"}, {"name": "Frontier Store", "domain": "frontierstore.net", "url": "https://frontierstore.net"}, {"name": "Wargaming Store", "domain": "wargaming.net", "url": "https://wargaming.net"}, {"name": "Gaijin Store", "domain": "store.gaijin.net", "url": "https://store.gaijin.net"}, {"name": "War Thunder Store", "domain": "store.gaijin.net", "url": "https://store.gaijin.net"}, {"name": "Warframe Market", "domain": "warframe.market", "url": "https://warframe.market"}, {"name": "Path of Exile Store", "domain": "pathofexile.com", "url": "https://pathofexile.com"}, {"name": "Minecraft Shop", "domain": "shop.minecraft.net", "url": "https://shop.minecraft.net"}, {"name": "Pokémon Center", "domain": "pokemoncenter.com", "url": "https://pokemoncenter.com"}, {"name": "Nintendo Store", "domain": "store.nintendo.com", "url": "https://store.nintendo.com"}, {"name": "Square Enix Store", "domain": "store.na.square-enix-games.com", "url": "https://store.na.square-enix-games.com"}, {"name": "Capcom Store", "domain": "store.capcom.com", "url": "https://store.capcom.com"}, {"name": "Bandai Namco Store", "domain": "store.bandainamcoent.com", "url": "https://store.bandainamcoent.com"}, {"name": "SEGA Shop", "domain": "shop.sega.com", "url": "https://shop.sega.com"}, {"name": "Atlus Store", "domain": "atlus.com", "url": "https://atlus.com"}, {"name": "Koei Tecmo Store", "domain": "koeitecmoamerica.com", "url": "https://koeitecmoamerica.com"}, {"name": "Focus Entertainment", "domain": "store.focus-entmt.com", "url": "https://store.focus-entmt.com"}, {"name": "THQ Nordic Store", "domain": "thqnordic.com", "url": "https://thqnordic.com"}, {"name": "Devolver Digital", "domain": "devolverdigital.com", "url": "https://devolverdigital.com"}, {"name": "Annapurna Interactive", "domain": "annapurnainteractive.com", "url": "https://annapurnainteractive.com"}, {"name": "Raw Fury", "domain": "rawfury.com", "url": "https://rawfury.com"}, {"name": "Team17 Store", "domain": "team17.com", "url": "https://team17.com"}, {"name": "505 Games", "domain": "505games.com", "url": "https://505games.com"}, {"name": "Private Division", "domain": "privatedivision.com", "url": "https://privatedivision.com"}, {"name": "Kepler Interactive", "domain": "kepler-interactive.com", "url": "https://kepler-interactive.com"}, {"name": "Nacon Store", "domain": "nacongaming.com", "url": "https://nacongaming.com"}, {"name": "Microids Store", "domain": "microids.com", "url": "https://microids.com"}, {"name": "Astragon", "domain": "astragon.com", "url": "https://astragon.com"}, {"name": "Kalypso Store", "domain": "kalypsomedia.com", "url": "https://kalypsomedia.com"}, {"name": "Curve Games", "domain": "curve-games.com", "url": "https://curve-games.com"}, {"name": "TinyBuild", "domain": "tinybuild.com", "url": "https://tinybuild.com"}, {"name": "Hooded Horse", "domain": "hoodedhorse.com", "url": "https://hoodedhorse.com"}, {"name": "Playstack", "domain": "playstack.com", "url": "https://playstack.com"}, {"name": "Akupara Games", "domain": "akuparagames.com", "url": "https://akuparagames.com"}, {"name": "Fellow Traveller", "domain": "fellowtraveller.games", "url": "https://fellowtraveller.games"}, {"name": "Wired Productions", "domain": "wiredproductions.com", "url": "https://wiredproductions.com"}, {"name": "Modus Games", "domain": "modusgames.com", "url": "https://modusgames.com"}, {"name": "Merge Games", "domain": "mergegames.com", "url": "https://mergegames.com"}, {"name": "Maximum Entertainment", "domain": "maximum-entertainment.com", "url": "https://maximum-entertainment.com"}, {"name": "PQube", "domain": "pqube.co.uk", "url": "https://pqube.co.uk"}, {"name": "Idea Factory", "domain": "ideafintl.com", "url": "https://ideafintl.com"}, {"name": "NIS America", "domain": "nisamerica.com", "url": "https://nisamerica.com"}, {"name": "XSEED Games", "domain": "xseedgames.com", "url": "https://xseedgames.com"}, {"name": "Marvelous USA", "domain": "marvelous-usa.com", "url": "https://marvelous-usa.com"}, {"name": "Playism", "domain": "playism.com", "url": "https://playism.com"}, {"name": "Dangen Entertainment", "domain": "dangenentertainment.com", "url": "https://dangenentertainment.com"}, {"name": "Shiro Games", "domain": "shirogames.com", "url": "https://shirogames.com"}, {"name": "Harebrained Schemes", "domain": "harebrained-schemes.com", "url": "https://harebrained-schemes.com"}, {"name": "Larian Studios", "domain": "larian.com", "url": "https://larian.com"}, {"name": "CD Projekt Red", "domain": "cdprojektred.com", "url": "https://cdprojektred.com"}, {"name": "Krafton", "domain": "krafton.com", "url": "https://krafton.com"}, {"name": "Pearl Abyss", "domain": "pearlabyss.com", "url": "https://pearlabyss.com"}, {"name": "HoYoverse", "domain": "hoyoverse.com", "url": "https://hoyoverse.com"}, {"name": "miHoYo", "domain": "mihoyo.com", "url": "https://mihoyo.com"}, {"name": "NetEase Games", "domain": "neteasegames.com", "url": "https://neteasegames.com"}, {"name": "Tencent Games", "domain": "tencentgames.com", "url": "https://tencentgames.com"}, {"name": "Garena", "domain": "garena.com", "url": "https://garena.com"}, {"name": "Level Infinite", "domain": "levelinfinite.com", "url": "https://levelinfinite.com"}, {"name": "Playtika", "domain": "playtika.com", "url": "https://playtika.com"}, {"name": "Kabam", "domain": "kabam.com", "url": "https://kabam.com"}, {"name": "DeNA Games", "domain": "dena.com", "url": "https://dena.com"}, {"name": "Nexon", "domain": "nexon.com", "url": "https://nexon.com"}, {"name": "Kakao Games", "domain": "kakaogames.com", "url": "https://kakaogames.com"}, {"name": "Smilegate", "domain": "smilegate.com", "url": "https://smilegate.com"}, {"name": "NCSoft", "domain": "ncsoft.com", "url": "https://ncsoft.com"}, {"name": "Pearl Abyss Store", "domain": "store.pearlabyss.com", "url": "https://store.pearlabyss.com"}, {"name": "Digital Extremes", "domain": "digitalextremes.com", "url": "https://digitalextremes.com"}, {"name": "Psyonix", "domain": "psyonix.com", "url": "https://psyonix.com"}, {"name": "Facepunch Store", "domain": "facepunch.com", "url": "https://facepunch.com"}, {"name": "Coffee Stain Studios", "domain": "coffeestainstudios.com", "url": "https://coffeestainstudios.com"}, {"name": "Supergiant Games", "domain": "supergiantgames.com", "url": "https://supergiantgames.com"}, {"name": "ConcernedApe", "domain": "stardewvalley.net", "url": "https://stardewvalley.net"}];

// ================================================
// GG GAMES — CATÁLOGO, IMAGENS E FUNCIONALIDADES
// ================================================

const PAGE_SIZE = 20;
let gamePage = 1;
let shopPage = 1;
let showFavoritesOnly = false;
const $ = (id) => document.getElementById(id);

function readJSON(key, fallback) {
    try {
        const value = JSON.parse(localStorage.getItem(key) || 'null');
        return value ?? fallback;
    } catch {
        return fallback;
    }
}

const favorites = new Set(readJSON('gggames-favorites', []));

function safe(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[char]);
}

function initials(name) {
    return String(name || 'GG').trim().split(/\s+/).slice(0, 2)
        .map(part => part[0] || '').join('').toUpperCase() || 'GG';
}

// Imagem reserva criada localmente: o cartão nunca fica em branco.
function fallbackImage(title, type = 'game') {
    const label = initials(title);
    const subtitle = type === 'shop' ? 'LOJA' : 'GG GAMES';
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#65151c"/><stop offset="1" stop-color="#101014"/></linearGradient></defs><rect width="640" height="360" fill="url(#g)"/><circle cx="520" cy="60" r="170" fill="#ed2028" opacity=".16"/><circle cx="90" cy="340" r="180" fill="#ed2028" opacity=".12"/><text x="320" y="190" text-anchor="middle" font-family="Arial,sans-serif" font-size="112" font-weight="900" fill="#fff">${label}</text><text x="320" y="270" text-anchor="middle" font-family="Arial,sans-serif" font-size="24" letter-spacing="7" fill="#ff777c">${subtitle}</text></svg>`;
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

// Tenta a capa cadastrada e, se ela falhar, usa a imagem reserva.
function handleImageError(img) {
    if (img.dataset.alt && !img.dataset.triedAlt) {
        img.dataset.triedAlt = '1';
        img.src = img.dataset.alt;
        return;
    }
    img.onerror = null;
    img.src = img.dataset.fallback;
}

function toast(message) {
    const el = $('toast');
    if (!el) return;
    el.textContent = message;
    el.style.display = 'block';
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => { el.style.display = 'none'; }, 2200);
}

function gameImage(game) {
    // Usa a capa que já veio cadastrada no catálogo.
    if (game.cover) return game.cover;
    // Jogos sem capa cadastrada recebem uma arte reserva com o nome do jogo.
    return fallbackImage(game.name, 'game');
}

function gameCard(game) {
    const image = gameImage(game);
    const fallback = fallbackImage(game.name, 'game');
    const isFavorite = favorites.has(game.name);
    return `
        <article class="game-card">
            <div class="cover-wrap">
                <img class="cover" src="${safe(image)}"
                    data-fallback="${safe(fallback)}"
                    alt="Capa de ${safe(game.name)}"
                    loading="lazy" decoding="async"
                    onerror="handleImageError(this)">
            </div>
            <div class="card-body">
                <div class="card-title">${safe(game.name)}</div>
                <div class="meta">${safe(game.genre)} · ${game.id ? 'Steam' : 'Site oficial'}</div>
                <div class="card-actions">
                    <a class="play" href="${safe(game.url || '#')}" target="_blank" rel="noopener noreferrer">Acessar ↗</a>
                    <button type="button" data-fav="${safe(game.name)}" aria-label="${isFavorite ? 'Remover dos' : 'Adicionar aos'} favoritos" title="Favoritar">${isFavorite ? '♥' : '♡'}</button>
                </div>
            </div>
        </article>`;
}

function filteredGames() {
    const search = $('search')?.value.trim().toLocaleLowerCase('pt-BR') || '';
    const genre = $('genre')?.value || '';
    let result = GAMES.filter(game =>
        (!search || `${game.name} ${game.genre}`.toLocaleLowerCase('pt-BR').includes(search)) &&
        (!genre || game.genre === genre)
    );
    if (showFavoritesOnly) result = result.filter(game => favorites.has(game.name));
    const sort = $('sort')?.value || 'az';
    result.sort((a, b) => {
        if (sort === 'za') return b.name.localeCompare(a.name, 'pt-BR');
        if (sort === 'genre') return a.genre.localeCompare(b.genre, 'pt-BR') || a.name.localeCompare(b.name, 'pt-BR');
        return a.name.localeCompare(b.name, 'pt-BR');
    });
    return result;
}

function renderPages(id, total, page, setPage, renderFunction) {
    const container = $(id);
    if (!container) return;
    container.innerHTML = '';
    const pageCount = Math.ceil(total / PAGE_SIZE);
    if (pageCount <= 1) return;
    for (let number = 1; number <= pageCount; number++) {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = number;
        button.className = number === page ? 'active' : '';
        button.addEventListener('click', () => {
            setPage(number);
            renderFunction();
        });
        container.appendChild(button);
    }
}

function renderGames() {
    const all = filteredGames();
    const pageCount = Math.max(1, Math.ceil(all.length / PAGE_SIZE));
    gamePage = Math.min(gamePage, pageCount);
    const shown = all.slice((gamePage - 1) * PAGE_SIZE, gamePage * PAGE_SIZE);
    const grid = $('gamesGrid');
    if (grid) grid.innerHTML = shown.map(gameCard).join('');
    if ($('gamesEmpty')) $('gamesEmpty').style.display = all.length ? 'none' : 'block';
    if ($('gameSummary')) $('gameSummary').textContent = `${all.length} de ${GAMES.length} jogos${showFavoritesOnly ? ' · favoritos' : ''}`;
    if ($('headerCount')) $('headerCount').textContent = `${GAMES.length} jogos · ${SHOPS.length} lojas`;
    renderPages('gamesPages', all.length, gamePage, value => { gamePage = value; }, renderGames);
    renderFavorites();
}

function filteredShops() {
    const search = $('search')?.value.trim().toLocaleLowerCase('pt-BR') || '';
    return SHOPS.filter(shop => `${shop.name} ${shop.domain}`.toLocaleLowerCase('pt-BR').includes(search));
}

function shopCard(shop) {
    const domain = String(shop.domain || '').replace(/^https?:\/\//, '').split('/')[0];
    const logo = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;
    const alternate = `https://icons.duckduckgo.com/ip3/${encodeURIComponent(domain)}.ico`;
    const fallback = fallbackImage(shop.name, 'shop');
    return `
        <article class="shop-card">
            <img class="shop-logo" src="${safe(logo)}"
                data-alt="${safe(alternate)}" data-fallback="${safe(fallback)}"
                alt="Logo de ${safe(shop.name)}" loading="lazy" decoding="async"
                referrerpolicy="no-referrer" onerror="handleImageError(this)">
            <div>
                <div class="shop-name">${safe(shop.name)}</div>
                <div class="shop-domain">${safe(domain)}</div>
                <a class="shop-go" href="${safe(shop.url || '#')}" target="_blank" rel="noopener noreferrer">Visitar loja ↗</a>
            </div>
        </article>`;
}

function renderShops() {
    const all = filteredShops();
    const pageCount = Math.max(1, Math.ceil(all.length / PAGE_SIZE));
    shopPage = Math.min(shopPage, pageCount);
    const shown = all.slice((shopPage - 1) * PAGE_SIZE, shopPage * PAGE_SIZE);
    const grid = $('shopsGrid');
    if (grid) grid.innerHTML = shown.map(shopCard).join('');
    if ($('shopsEmpty')) $('shopsEmpty').style.display = all.length ? 'none' : 'block';
    if ($('shopSummary')) $('shopSummary').textContent = `${all.length} de ${SHOPS.length} lojas e plataformas`;
    renderPages('shopsPages', all.length, shopPage, value => { shopPage = value; }, renderShops);
}

function renderFavorites() {
    const grid = $('favoritesGrid');
    if (!grid) return;
    const all = GAMES.filter(game => favorites.has(game.name));
    grid.innerHTML = all.slice(0, PAGE_SIZE).map(gameCard).join('');
    if ($('favoritesEmpty')) $('favoritesEmpty').style.display = all.length ? 'none' : 'block';
}

function render() {
    renderGames();
    renderShops();
}

function toggleFavorite(name) {
    if (favorites.has(name)) {
        favorites.delete(name);
        toast('Removido dos favoritos');
    } else {
        favorites.add(name);
        toast('Adicionado aos favoritos ❤️');
    }
    localStorage.setItem('gggames-favorites', JSON.stringify([...favorites]));
    render();
}

function setupCommunity() {
    const key = 'gggames-community-posts';
    const load = () => {
        try { return JSON.parse(localStorage.getItem(key) || '[]'); }
        catch { return []; }
    };
    const renderPosts = () => {
        const container = $('communityPosts');
        if (!container) return;
        const posts = load();
        if (!posts.length) {
            container.innerHTML = '<p class="empty-community">Ainda não há mensagens. Seja o primeiro a participar!</p>';
            return;
        }
        container.innerHTML = posts.map(post => `
            <article class="community-post">
                <div class="post-top"><strong>${safe(post.name)}</strong><time>${safe(post.date)}</time></div>
                <p>${safe(post.message)}</p>
            </article>`).join('');
    };
    $('communityForm')?.addEventListener('submit', event => {
        event.preventDefault();
        const name = $('communityName')?.value.trim() || '';
        const message = $('communityMessage')?.value.trim() || '';
        if (!name || !message) return;
        const posts = load();
        posts.unshift({
            name, message,
            date: new Date().toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' })
        });
        try {
            localStorage.setItem(key, JSON.stringify(posts.slice(0, 50)));
            $('communityMessage').value = '';
            renderPosts();
            toast('Mensagem publicada no mural!');
        } catch {
            toast('Não foi possível salvar a mensagem neste navegador.');
        }
    });
    $('clearCommunity')?.addEventListener('click', () => {
        if (!load().length) return;
        if (confirm('Deseja apagar todas as mensagens deste mural neste navegador?')) {
            localStorage.removeItem(key);
            renderPosts();
            toast('Mural limpo.');
        }
    });
    renderPosts();
}

function initialize() {
    const genreSelect = $('genre');
    if (genreSelect) {
        genreSelect.querySelectorAll('option:not(:first-child)').forEach(option => option.remove());
        [...new Set(GAMES.map(game => game.genre))]
            .sort((a, b) => a.localeCompare(b, 'pt-BR'))
            .forEach(genre => {
                const option = document.createElement('option');
                option.value = genre;
                option.textContent = genre;
                genreSelect.appendChild(option);
            });
    }

    $('search')?.addEventListener('input', () => {
        gamePage = 1;
        shopPage = 1;
        render();
    });
    $('genre')?.addEventListener('change', () => {
        gamePage = 1;
        showFavoritesOnly = false;
        renderGames();
    });
    $('sort')?.addEventListener('change', () => {
        gamePage = 1;
        renderGames();
    });
    $('reset')?.addEventListener('click', () => {
        if ($('search')) $('search').value = '';
        if ($('genre')) $('genre').value = '';
        if ($('sort')) $('sort').value = 'az';
        showFavoritesOnly = false;
        gamePage = 1;
        shopPage = 1;
        render();
    });
    $('showAll')?.addEventListener('click', () => {
        showFavoritesOnly = false;
        if ($('search')) $('search').value = '';
        if ($('genre')) $('genre').value = '';
        gamePage = 1;
        renderGames();
        location.hash = 'jogos';
    });
    document.addEventListener('click', event => {
        const button = event.target.closest('[data-fav]');
        if (button) toggleFavorite(button.dataset.fav);
    });
    if ($('year')) $('year').textContent = new Date().getFullYear();
    render();
    setupCommunity();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
} else {
    initialize();
}
