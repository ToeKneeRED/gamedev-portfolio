import ProjectData from '@/data/ProjectData'

export default [
    new ProjectData("aether-mod-tools", "Project Aether: Mod Tools", "/img/projects/project-aether.svg", `
    <div class="project-meta"><span>Unreal Engine 5 (source build)</span><span>C++</span><span>Slate</span><span>Editor tooling</span><span>Team project</span></div>

    <div class="paragraph">
        <strong>Project Aether</strong> is a team-made zombies game in Unreal Engine 5 (source-built engine).
        I built its <strong>mod tools</strong>: an editor plugin and a runtime loader that let anyone with the
        project files make custom maps, with or without custom content, that the shipped game picks up and loads.
        Made with C++ and Slate.
    </div>

    <div class="paragraph">
        What I built :
        <ul>
        <li><strong>Map Tools editor window (Slate):</strong> create a new map, which scaffolds its own content-only map plugin, or pick an existing one,
            then set its name, description, thumbnail, round and match sounds, and whether it shows on the map select screen</li>
        <li><strong>One-click export:</strong> runs the cook and UnrealPak in the background, streams the cook log into an editor progress notification,
            can be cancelled, and outputs a .pak + .json manifest pair. Cooks are scoped to the map so an export never cooks the whole project</li>
        <li><strong>Map asset manifest:</strong> a data asset saved next to the level and cooked into the pak. It hard-references the map's thumbnail and sounds
            so they load with it, and Blueprints can look it up for the current map</li>
        <li><strong>Base release versioning:</strong> maps are built against an official base release that ships with the project files, with a
            "Generate Base Release" fallback in the tool. The game skips paks built for a different version</li>
        <li><strong>Runtime loader:</strong> a C++ map select widget base that scans the mods folder, mounts paks at runtime, registers each map plugin
            and its asset registry so its content resolves, finds the level, and can unmount again. Maps are exposed to Blueprints as a list of entries</li>
        <li><strong>Module layout:</strong> shared types live in a small runtime module that both the game and the editor plugin depend on, avoiding a circular dependency</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Project Aether is a team project. The mod tools plugin and the game's custom map loading code are my work.
        </div>
    </div>
    `, "#2b5d86"),
    new ProjectData("item-rarity", "Item Rarity", "/img/projects/ItemRarity.mp4", `
    <div class="project-meta"><span>Unreal Engine 4.27</span></div>

    <div class="paragraph">
      Items determine their rarity once they are spawned in.
    </div>

    <div class="paragraph center">
      <video class="pc-video" src="/img/projects/ItemRarity.mp4" autoplay muted loop playsinline></video>
    </div>
    
    <div class="paragraph">
      Made in Unreal Engine 4.27
    </div>

    `, "#c10606", false, true),
    new ProjectData("item-durability", "Item Durability", "/img/projects/ItemDurability.mp4", `
    <div class="project-meta"><span>Unreal Engine 4.27</span></div>

    <div class="paragraph">
      Items have a base durability that increases by a set amount based on its rarity.
    </div>

    <div class="paragraph center">
      <video class="pc-video" src="/img/projects/ItemDurability.mp4" autoplay muted loop playsinline></video>
    </div>

    <div class="paragraph">
      Made in Unreal Engine 4.27
    </div>
    `, "#1ca1e2"),
    new ProjectData("procedural-door-generation", "Procedural Door Generation", "/img/projects/ProceduralDoorGeneration.mp4", `
    <div class="project-meta"><span>Unreal Engine 4.27</span></div>

    <div class="paragraph">
      A simple procedural door generator that spawns a door blueprint then dynamically builds walls around it
      until reaching a specified dimension.
    </div>

    <div class="paragraph center">
      <video class="pc-video" src="/img/projects/ProceduralDoorGeneration.mp4" autoplay muted loop playsinline></video>
    </div>

    <div class="paragraph">
      Made in Unreal Engine 4.27
    </div>
    `),
    new ProjectData("xp-system", "XP System", "/img/projects/xp-system.svg", `
    <div class="project-meta"><span>Unreal Engine 5.5</span><span>DataTables</span></div>

    <div class="paragraph">
      Progression system featuring persistent XP accumulation, level advancement, prestige progression 
      beyond the maximum level, DataTable-based level icon assignment, and configurable XP scaling 
      algorithms for per-level progression requirements.
    </div>

    <div class="paragraph">
      Made in Unreal Engine 5.5
    </div>
    `),
];