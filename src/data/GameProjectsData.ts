import ProjectData from '@/data/ProjectData'

export default [
    new ProjectData("dherth", "Dherth", "/img/projects/dherth.svg", `
    <div class="project-meta"><span>Unity 6</span><span>C#</span><span>URP</span><span>UI Toolkit</span><span>In development</span></div>

    <div class="paragraph">
        <strong>Dherth</strong> is a 3D first-person horde looter shooter in development.
        Survive endless waves of enemies, loot weapons with rolled stats from kills, die, and go again.
        Made in Unity 6 with C#, URP, the Input System, and UI Toolkit.
    </div>

    <div class="paragraph">
        Built so far :
        <ul>
        <li><strong>Hordes:</strong> pooled NavMesh enemies with no Rigidbodies, all updated by one manager. 100 enemies cost about 0.5 ms a frame
            with no per-frame allocations. Enemies fan out to surround you, and faster runner enemies show up from wave 5</li>
        <li><strong>Endless waves</strong> built from formulas, scaling enemy count, health, damage, and speed each wave</li>
        <li><strong>Weapons:</strong> pistol, rifle, burst rifle, and shotgun with semi-auto, burst, and full-auto fire modes, hitscan shots, spread, and pellets</li>
        <li><strong>Procedural weapon feel:</strong> the guns have no animation clips, so aim down sights, reloads (with the magazine dropping out),
            weapon switching, sprint pose, and view bob are all layered in code. Camera recoil is kept separate from trauma-based screen shake, so shake never throws off your aim</li>
        <li><strong>Loot:</strong> weighted drop tables, 5 rarity tiers, and rolled weapon stats that scale with the wave. Drops show the weapon's model
            with a rarity beam and glow, and looking at one shows its stats compared with your current gun</li>
        <li><strong>Item model:</strong> shared definition assets with stable IDs, saveable per-drop instances, and a content registry, ready for saving and loading</li>
        <li><strong>HUD and menus</strong> in UI Toolkit, driven only by gameplay events: damage numbers, enemy health bars, hit markers, wave banners,
            plus main, pause, and settings menus</li>
        <li><strong>Feedback:</strong> muzzle smoke, pooled impact and spawn particles, a damage vignette, and pooled audio</li>
        </ul>
    </div>

    <div class="paragraph">
        Up next : stat modifiers, crits and headshots, gear score, armor and augments, a save profile,
        then a hub with a reroll station, maps, and game modes.
    </div>

    <div class="paragraph">
        <div class="notice">
        Dherth is a work in progress. Screenshots and video coming soon.
        </div>
    </div>
    `, "#8b1e1e"),
    new ProjectData("robo-riot-ruckus", "Robo Riot Ruckus", "/img/projects/rrr.png", 
    `
    <div class="project-meta"><span>Unreal Engine 4</span><span>C++</span><span>Blueprints</span><span>Prototype</span></div>

    <div class="paragraph">
     <strong>Robo Riot Ruckus</strong> is a prototype of an arena-based, action, vehicle game with your own attachments and chassis. 
     Your AI enemy also has their own attachments on their chassis. Obtain materials by completing matches against AI, and earn more materials for winning.
     Use materials to craft any attachment as long as you have the required amounts.
     Made with Unreal Engine 4, C++, and Blueprints.
    </div>
    <div class="paragraph center">
        <video width="480" height="320" controls preload="none" poster="/img/projects/rrr.png">
            <source src="/img/projects/RoboRiotRuckusTrailer.mp4" type="video/mp4">
        </video>
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="/img/projects/rrss1.jpg" alt="" />
        <img class="phone-screenshot" src="/img/projects/rrss9.jpg" alt="" />
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Vehicle attachments</li>
        <li>Materials</li>
        <li>Arena-based</li>
        <li>Map traps</li>
        <li>Enemy AI</li>
        </ul>
    </div>
    
    <div class="paragraph center">
        <a href="https://drive.google.com/file/d/11WR37WYAMNscSxQwu-QD4b4rU9KCrsNb/view?usp=sharing">Download</a>
    </div>
    `, "#23bd69", true),
    new ProjectData("atlantic-guardian", "Atlantic Guardian", "/img/projects/atlantic_guardian.png", `
    <div class="project-meta"><span>C++</span><span>Custom DX11 renderer</span><span>Flecs</span><span>Gateware</span><span>Prototype</span></div>

    <div class="paragraph">
        <strong>Atlantic Guardian</strong> is a prototype based on the retro game, Defender.
        You play as a submarine that is trying to eliminate enemies such as sharks, jellyfish, 
        and pufferfish with torpedos. Made with C++, a custom DX11 renderer, 
        Flecs, and Gateware.
    </div>
        
    <div class="paragraph center">
        <img class="pc-screenshot" src="/img/projects/atlantic_guardian.png" alt="" />
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Torpedos</li>
        <li>Fish enemies</li>
        </ul>
    </div>

    <div class="paragraph center">
        <a href="https://drive.google.com/file/d/1WY7wW49gMZ_Lb5Fu8t-ojXe9dCv0s87h/view?usp=sharing">Download</a>
    </div>
    `, "#5a78af"),
    new ProjectData("guns-blazing", "Guns Blazing", "/img/projects/gunz_blazing.png", `
    <div class="project-meta"><span>Unity</span><span>C#</span><span>Team project</span><span>Playable on Newgrounds</span></div>

    <div class="paragraph">
        <strong>Guns Blazing</strong> is a game prototype where you use guns you collect to 
        defeat enemies, reach the boss, Rikayon, and end the experiments.
        Made in Unity with C#.
    </div>

    <div class="paragraph center">
        <video class="pc-video" controls preload="none" poster="/img/projects/gb1.png">
            <source src="/img/projects/SkeletonSaintsFPS_DemoVideo.mp4" type="video/mp4">
        </video>
    </div>
    
    <div class="paragraph center">
        <img class="pc-screenshot" src="/img/projects/gb1.png" alt="" />
        <img class="pc-screenshot" src="/img/projects/gb2.png" alt="" />
        <img class="pc-screenshot" src="/img/projects/gb3.png" alt="" />
        <img class="pc-screenshot" src="/img/projects/Final_Demo_Screenshot.png" alt="" />
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Grapple hook</li>
        <li>Different guns</li>
        <li>Objectives</li>
        <li>Enemy AI</li>
        </ul>
    </div>

    <div class="paragraph center">
        <a href="https://drive.google.com/file/d/1Nw-kB84FUHPJUmtC25_6_Qm0PIsn_X-7/view?usp=sharing">Download</a>
    </div>

    <div class="paragraph">
        <div class="notice">
        Playable in the browser (WebGL) on <a href="https://www.newgrounds.com/portal/view/877499?updated=1679708881" target="_blank">Newgrounds</a>.
        Source code is available on <a href="https://github.com/E-Nolan/SkeletonSaintsFPS" target="_blank">GitHub</a>.
        </div>
    </div>

    `, "#383838"),
];