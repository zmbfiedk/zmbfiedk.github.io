const PROJECTS_DATA = [
	{
		id: 0,
		name: 'Tower of Babell',
		description: 'Large-scale collaborative RPG featuring weapon systems, enemy AI, procedural events, and entity management using C# and Unity',
		blog: 'Tower of Babell is a team-developed game created by Rubin, Joshua, Ricardo, Gijs, Veronika, Alicia, and Arthur. This sophisticated project demonstrates professional game architecture with player attack controllers, weapon systems, terrain management, and complex AI patterns. The codebase shows strong software engineering practices with dependency injection, event systems, and modular design patterns suitable for scalable game development.',
		github: 'https://github.com/zmbfiedk/BO1.4/tree/dev',
		link: 'https://github.com/zmbfiedk/BO1.4/tree/dev'
	},
	{
		id: 1,
		name: 'Arthurs Playground',
		description: 'A creative sandbox game for experimentation',
		blog: 'A personal project space for testing game mechanics and creative ideas...',
		github: '#',
		link: '#'
	},
	{
		id: 2,
		name: 'TowerDefense',
		description: 'Dragon Defense - Strategic tower defense with mandatory tower swaps every 10 waves. 6 tower types, 5 enemy variants, boss waves, and dynamic difficulty scaling',
		blog: 'Dragon Defense is an innovative tower defense game that breaks the meta-gaming problem inherent in traditional TD games. Every 10 waves forces mandatory tower swaps, preventing repetitive strategies and keeping players engaged. The game features 6 unique towers (Fast, Slow, Long Range, Short Range, Freeze, Flame), 5 enemy types (Normal, Fast, Heavy, Support, Invisible), plus boss encounters every 10 waves. Starting with 200 gold and 20 lives, players build and upgrade towers automatically attacking enemies within range. The wave system scales difficulty+10% HP/+5% speed per wave with boss immunity mechanics. Grid-based placement (5x5=25 spots) uses waypoint pathfinding, and comprehensive dependency architecture manages Player, Tower, UI, Enemy, Wave, and Music systems with event-driven design patterns.',
		github: 'https://github.com/zmbfiedk/Tower-Defense',
		link: 'https://github.com/zmbfiedk/Tower-Defense'
	},
	{
		id: 3,
		name: 'Godot game',
		description: 'A game development project exploring the Godot engine with GDScript (Python-like)',
		blog: 'A Godot engine exploration project...',
		github: '#',
		link: '#'
	},
	{
		id: 4,
		name: 'Small C++ games',
		description: 'A small game developed using C++',
		blog: 'A C++ game development project...',
		github: 'https://github.com/zmbfiedk/Shipgame',
		link: 'https://github.com/zmbfiedk/Shipgame'
	},
	{
		id: 5,
		name: 'Fractured',
		description: 'Top-down ragdoll slingshot game jam project where limited launches must break glass obstacles to reach the goal',
		blog: 'Fractured is a focused game jam project by Arthur and Joshua. Built around a top-down slingshot mechanic and ragdoll physics, the game emphasizes skillful launches, satisfying glass destruction, and a fast retry loop across two compact levels.',
		github: 'https://github.com/MrRaven55/CheeseHeist',
		link: 'https://github.com/MrRaven55/CheeseHeist'
	},
	{
		id: 6,
		name: 'Roguelike Action Platformer',
		description: 'Side-scroller roguelike inspired by Hollow Knight and Dead Cells with action platformer mechanics and procedural generation',
		blog: 'A study project exploring roguelike progression systems combined with precise platformer controls. This 2D sidescroller investigates core mechanics from acclaimed indie games, implementing procedural level generation, sophisticated enemy AI patterns, and fast-paced melee combat. The project serves as a learning exercise in creating responsive character controllers, dash mechanics with animation-driven movement, enemy behavior trees, and procedural dungeon generation systems. Key focus areas include deterministic movement systems, air/ground state management, knockback physics, and scalable enemy difficulty.',
		github: 'https://github.com/zmbfiedk/RogueLikeActionPlatformer',
		link: 'https://github.com/zmbfiedk/RogueLikeActionPlatformer'
	},
	{
		id: 7,
		name: 'Vertical Slice',
		description: 'Transform-based physics system with deterministic character movement, gravity, knockback, and collision detection using capsule casts',
		blog: 'BasePhysics is a lightweight, transform-driven physics helper for character movement in 2.5D and 3D environments. Avoiding Unity\'s Rigidbody, this system provides deterministic movement through explicit velocity integration, gravity with adjustable scales, ground detection via raycasting, capsule-based collision checks, and sophisticated knockback systems. The architecture prioritizes clarity and control, making it ideal for precise character controllers and action games. Features include safe movement with skinWidth buffers, overlap resolution, force/impulse application, and time-based knockback falloff with AnimationCurve customization.',
		github: 'https://github.com/zmbfiedk/Vertical-Slice2.0',
		link: 'https://github.com/zmbfiedk/Vertical-Slice2.0'
	}
];

function getProjectById(projectId) {
	return PROJECTS_DATA.find(function (project) {
		return project.id === projectId;
	}) || PROJECTS_DATA[0];
}

function getMytheInfoMarkup(project) {
	return `
		<div class="td-gdd">
			<p><strong>Sprint 0 - Game Design Document: Tower Of Babel</strong></p>
			<p><strong>Team:</strong> Rubin, Joshua, Ricardo, Gijs, Veronika, Alicia, Arthur<br><strong>Class:</strong> GD1B<br><strong>Date:</strong> 13/04/2026</p>

			<section class="td-section">
				<h4>1. Title and Elevator Pitch</h4>
				<p><strong>Title:</strong> Tower Of Babel</p>
				<p><strong>Elevator Pitch:</strong> Our game is a wave-based hack and slash where the player uses different weapons that drastically change playstyle. Every 10 waves both the enemies and the player become stronger, creating an intense scaling challenge.</p>
			</section>

			<section class="td-section">
				<h4>2. What Makes This Game Unique</h4>
				<p>Most wave fighters focus on simple combat loops. Our game emphasizes precise combat mechanics such as dodge rolls, sprinting, and a 2-step combat system, combined with weapon variety that forces players to adapt their playstyle constantly.</p>
			</section>

			<section class="td-section">
				<h4>3. Weapons (Starting Values)</h4>
				<div class="td-table-wrap">
					<table class="td-table">
						<thead>
							<tr>
								<th>Weapon</th>
								<th>Stats</th>
								<th>Philosophy</th>
							</tr>
						</thead>
						<tbody>
							<tr><td>Trident</td><td>Damage 40, Stamina cost 50, Cooldown 0.2s</td><td>High risk, high damage</td></tr>
							<tr><td>Sword</td><td>Damage 15, Stamina cost 25, Cooldown 0.2s</td><td>Balanced and fast combat</td></tr>
							<tr><td>Bow</td><td>Damage 10, Stamina cost 5, Cooldown 2s</td><td>Safe ranged option with low stamina cost</td></tr>
						</tbody>
					</table>
				</div>
			</section>

			<section class="td-section">
				<h4>4. Vijanden</h4>
				<ul>
					<li><strong>Ranged (Angels):</strong> HP 80, Damage Low, Behavior: Keeps distance and shoots projectiles</li>
					<li><strong>Fast (Archangels):</strong> HP 50, Damage Medium, Speed High - Weak but aggressive and difficult to hit</li>
					<li><strong>Strong (Mythical Beasts):</strong> HP 200, Damage High, Speed Low - Tanky enemies that pressure the player</li>
				</ul>
				<p><strong>Boss (Wave 50 - Archangel Michael):</strong></p>
				<ul>
					<li>HP: High</li>
					<li>Speed: Medium</li>
					<li>Abilities: Melee attacks, Ranged divine spear (high damage), Mixed behavior (combines all enemy types)</li>
				</ul>
			</section>

			<section class="td-section">
				<h4>5. Gameplay Loop</h4>
				<ul>
					<li>Fight waves of angels</li>
					<li>Dodge, sprint, and use combat mechanics</li>
					<li>Defeat enemies</li>
					<li>Regain health</li>
					<li>Progress to next wave</li>
					<li>Every 10 waves → difficulty increases: Player damage doubles, Enemies gain increased stats</li>
					<li>Repeat</li>
					<li>Final goal: defeat boss at wave 50</li>
				</ul>
			</section>

			<section class="td-section">
				<h4>6. Progression</h4>
				<p><strong>Every 10 Waves:</strong></p>
				<ul>
					<li>Player damage doubles</li>
					<li>Enemies gain increased stats (HP, damage, speed)</li>
				</ul>
				<p><strong>Scaling System:</strong></p>
				<ul>
					<li>Enemy HP: +15% per wave</li>
					<li>Enemy damage: +10% per wave</li>
					<li>Extra progression: Secret perks (to be determined), Possible upgrades or buffs</li>
				</ul>
			</section>

			<section class="td-section">
				<h4>7. Risks and Solutions (PIO)</h4>
				<ul>
					<li><strong>Problem 1:</strong> Combat can be too difficult or too easy. <strong>Solution:</strong> Extensive playtesting and adjusting damage/stamina values.</li>
					<li><strong>Problem 2:</strong> Weapons are not balanced. <strong>Solution:</strong> Ensure each weapon has a clear role and trade-offs.</li>
					<li><strong>Problem 3:</strong> Scaling becomes too extreme. <strong>Solution:</strong> Cap or adjust scaling curves and test late-game balance.</li>
				</ul>
			</section>

			<section class="td-section">
				<h4>8. Sprint Planning</h4>
				<p><strong>Sprint 1 — Core Systems</strong></p>
				<ul>
					<li>Player movement (walk, sprint)</li>
					<li>Basic combat system (attack input)</li>
					<li>Stamina system</li>
					<li>Enemy spawning system</li>
					<li>Basic enemy (Ranged)</li>
					<li>Wave system (basic counter)</li>
				</ul>
				<p><strong>Sprint 2 — Combat Depth</strong></p>
				<ul>
					<li>Dodge roll mechanic</li>
					<li>2-step combat system (parry/attack)</li>
					<li>Enemy damage system</li>
					<li>Player health system</li>
					<li>Death system</li>
				</ul>
				<p><strong>Sprint 3 — Enemy Variety</strong></p>
				<ul>
					<li>Fast enemy (Archangel)</li>
					<li>Strong enemy (Beast)</li>
					<li>Improved AI behavior (distance, chasing)</li>
					<li>Hit feedback (animations, particles)</li>
				</ul>
				<p><strong>Sprint 4 — Weapons</strong></p>
				<ul>
					<li>Implement Trident</li>
					<li>Implement Sword</li>
					<li>Implement Bow</li>
					<li>Weapon switching system</li>
					<li>Weapon balancing</li>
				</ul>
				<p><strong>Sprint 5 — Progression</strong></p>
				<ul>
					<li>Wave scaling system</li>
					<li>Player damage scaling</li>
					<li>Health regeneration system</li>
					<li>UI updates (wave, HP, stamina)</li>
				</ul>
				<p><strong>Sprint 6 — Boss</strong></p>
				<ul>
					<li>Boss AI (Archangel Michael)</li>
					<li>Boss attacks (melee + ranged)</li>
					<li>Boss health bar (segmented UI)</li>
				</ul>
				<p><strong>Sprint 7 — Polish</strong></p>
				<ul>
					<li>Sound effects</li>
					<li>Visual effects</li>
					<li>Juice (hit effects, screen shake)</li>
					<li>UI polish</li>
				</ul>
				<p><strong>Sprint 8 — Finalizing</strong></p>
				<ul>
					<li>Bug fixing</li>
					<li>Balancing</li>
					<li>Playtesting</li>
					<li>Final build</li>
				</ul>
			</section>

			<section class="td-section">
				<h4>9. Inspiration</h4>
				<p>Inspiration comes from hack-and-slash and wave-based games. Key elements to adopt:</p>
				<ul>
					<li>Responsive combat</li>
					<li>Clear feedback to the player</li>
					<li>Scaling difficulty</li>
				</ul>
				<p>What to avoid:</p>
				<ul>
					<li>Repetitive gameplay without variation</li>
					<li>Lack of player control</li>
				</ul>
			</section>

			<section class="td-section">
				<h4>10. Technical Design (Mini)</h4>
				<p><strong>Combat System:</strong> Player uses stamina-based attacks and dodge mechanics. Cooldowns + stamina costs + animation timing prevent spam and ensure responsive feel.</p>
				<p><strong>Enemy AI:</strong> State-based AI (idle, chase, attack). Ranged enemies maintain distance, Fast enemies are aggressive, Strong enemies follow slowly.</p>
				<p><strong>Wave System:</strong> Waves scale difficulty. Max enemies at once + spawn intervals prevent performance issues.</p>
				<p><strong>Stamina System:</strong> Actions cost stamina (attack, dodge, sprint). Player must make strategic choices in combat.</p>
				<p><strong>UI System:</strong> Minimalistic UI with clear info. Health bar, Stamina bar, Wave counter, Weapon indicator, Boss health bar (segmented).</p>
			</section>
		</div>
	`;
}

function getFracturedInfoMarkup(project) {
	return `
		<div class="td-gdd">
			<p><strong>Sprint 0 - Game Design Document: Fractured (Gamejam)</strong></p>
			<p><strong>Names:</strong> Arthur &amp; Joshua<br><strong>Class:</strong> GD1B<br><strong>Date:</strong> 13/04/2026</p>

			<section class="td-section">
				<h4>1. Title and Elevator Pitch</h4>
				<p><strong>Title:</strong> Fractured</p>
				<p><strong>Elevator pitch:</strong> Fractured is a top-down ragdoll slingshot game where you launch your character to break glass obstacles and reach the goal. With limited attempts, every shot matters.</p>
			</section>

			<section class="td-section">
				<h4>2. What Makes Your Game Unique</h4>
				<p>Fractured combines ragdoll physics with a top-down slingshot mechanic, making each launch chaotic but still skill-based. The limited number of attempts creates tension and encourages smart decision-making.</p>
			</section>

			<section class="td-section">
				<h4>3. Scope (Game Jam Focus)</h4>
				<p>Because this is a game jam project, the scope is intentionally small:</p>
				<ul>
					<li>2 levels</li>
					<li>1 core mechanic (slingshot)</li>
					<li>1 obstacle type (glass)</li>
					<li>Simple UI</li>
					<li>Fast restart loop</li>
				</ul>
				<p>Focus is on fun physics and satisfying feedback.</p>
			</section>

			<section class="td-section">
				<h4>4. Mechanics</h4>
				<p><strong>Starting Values (to be balanced later):</strong></p>
				<ul>
					<li><strong>Slingshot:</strong> Drag &amp; release, power based on distance, direction based on input</li>
					<li><strong>Ragdoll character:</strong> Physics-based, reacts to impact</li>
					<li><strong>Glass obstacles:</strong> Break with enough impact, block the path</li>
					<li><strong>Attempts system:</strong> approximately 5 slings per level, no attempts = Game Over</li>
				</ul>
			</section>

			<section class="td-section">
				<h4>5. Levels</h4>
				<p><strong>Level 1:</strong> Introduce mechanics, simple obstacles</p>
				<p><strong>Level 2:</strong> Harder layout, more precision required</p>
			</section>

			<section class="td-section">
				<h4>6. Gameplay Loop</h4>
				<ul>
					<li>Aim</li>
					<li>Launch</li>
					<li>Break glass</li>
					<li>Check result</li>
					<li>Use next attempt</li>
					<li>Win or fail</li>
					<li>Instant restart</li>
				</ul>
			</section>

			<section class="td-section">
				<h4>7. Progression</h4>
				<p>No extensive progression (game jam). Difficulty comes mainly from:</p>
				<ul>
					<li>Level design</li>
					<li>Less room for errors</li>
				</ul>
			</section>

			<section class="td-section">
				<h4>8. Risks and Solutions</h4>
				<ul>
					<li><strong>Problem 1:</strong> Physics feels random. <strong>Impact:</strong> Frustration. <strong>Solution:</strong> Tune and test forces.</li>
					<li><strong>Problem 2:</strong> Too little content. <strong>Impact:</strong> Played quickly. <strong>Solution:</strong> Focus on replayability.</li>
					<li><strong>Problem 3:</strong> Unclear feedback. <strong>Impact:</strong> Player doesn't understand actions. <strong>Solution:</strong> Strong visuals and effects.</li>
				</ul>
			</section>

			<section class="td-section">
				<h4>9. Planning (Game Jam)</h4>
				<p><strong>Day 1 - Core:</strong> Slingshot mechanic, camera top-down</p>
				<p><strong>Day 2 - Physics:</strong> Ragdoll, collision</p>
				<p><strong>Day 3 - Gameplay:</strong> Glass breaking, attempts + restart</p>
				<p><strong>Day 4 - Levels:</strong> Level 1 &amp; 2, goal system</p>
				<p><strong>Day 5 - Polish:</strong> UI, effects, bug fixing</p>
			</section>

			<section class="td-section">
				<h4>10. Inspiration</h4>
				<p>Angry Birds, physics games.</p>
				<p><strong>Focus on:</strong></p>
				<ul>
					<li>Simple but fun gameplay</li>
					<li>Fast retries</li>
					<li>Satisfying destruction</li>
				</ul>
			</section>

			<section class="td-section">
				<h4>11. Technical Design Mini</h4>
				<ul>
					<li><strong>Slingshot:</strong> Drag -> calculate force -> apply</li>
					<li><strong>Ragdoll:</strong> Joints + rigidbodies</li>
					<li><strong>Glass:</strong> Break bij impact threshold</li>
					<li><strong>Attempts:</strong> Counter -> 0 = restart</li>
				</ul>
			</section>
		</div>
	`;
}

function getSmallCppGamesInfoMarkup(project) {
	return `
		<div class="td-gdd">
			<p><strong>Sprint 0 - Game Design Document: Small C++ Games</strong></p>
			<p><strong>Name:</strong> Arthur<br><strong>Class:</strong> GD1B<br><strong>Date:</strong> 13/04/2026</p>

			<section class="td-section">
				<h4>1. Title and Elevator Pitch</h4>
				<p><strong>Title:</strong> Small C++ Games</p>
				<p><strong>Elevator pitch:</strong> Small C++ Games is a collection of simple games recreated in the terminal to improve C++ skills. Each game focuses on a different core mechanic and programming concept.</p>
			</section>

			<section class="td-section">
				<h4>2. What Makes Your Project Unique</h4>
				<p>Instead of building one large game, this project focuses on multiple small games, each designed to practice specific programming skills in C++. Everything is built in the terminal, forcing simple but efficient design and logic.</p>
			</section>

			<section class="td-section">
				<h4>3. Scope (Project Focus)</h4>
				<p>The project consists of multiple small games:</p>
				<ul>
					<li>Ship (done)</li>
					<li>Pong (in progress)</li>
					<li>Small Platformer (not started)</li>
					<li>Top-down Race Game (not started)</li>
				</ul>
				<p><strong>Focus is on:</strong></p>
				<ul>
					<li>Core mechanics</li>
					<li>Clean code</li>
					<li>Learning by building</li>
				</ul>
			</section>

			<section class="td-section">
				<h4>4. Games &amp; Mechanics</h4>
			<p>All games are created in the terminal (ASCII/text-based visuals).</p>
			<p><strong>1. Ship (Done)</strong></p>
			<ul>
				<li>Player controls a ship</li>
				<li>Movement system</li>
				<li>Basic interaction</li>
				<li>Goal: Input handling and movement</li>
			</ul>
			<p><strong>2. Pong (Working on)</strong></p>
			<ul>
				<li>Player paddle vs AI paddle</li>
				<li>Ball physics (bounce system)</li>
				<li>Score system</li>
				<li>Goal: Collision detection and game loop</li>
			</ul>
			<p><strong>3. Small Platformer (Not started)</strong></p>
			<ul>
				<li>Player movement (left/right/jump)</li>
				<li>Gravity system</li>
				<li>Platforms</li>
				<li>Goal: Physics basics and state handling</li>
			</ul>
			<p><strong>4. Top-down Race Game (Not started)</strong></p>
			<ul>
				<li>Player movement (top-down)</li>
				<li>Track boundaries</li>
				<li>Lap system</li>
				<li>Goal: Movement logic and collision with environment</li>

			<section class="td-section">
				<h4>5. Gameplay Loop</h4>
				<p>For each game:</p>
				<ul>
					<li>Start game</li>
					<li>Player input</li>
					<li>Update game state</li>
					<li>Render in terminal</li>
					<li>Repeat (game loop)</li>
					<li>End condition (win/lose/restart)</li>
				</ul>
			</section>

			<section class="td-section">
				<h4>6. Progression</h4>
				<p>Difficulty increases per game (complexity). Focus shifts from simple to complex:</p>
				<ul>
					<li>Movement (Ship)</li>
					<li>Collision &amp; physics (Pong)</li>
					<li>Gravity &amp; platforming (Platformer)</li>
					<li>Systems combined (Race game)</li>
				</ul>
			</section>

			<section class="td-section">
				<h4>7. Risks and Solutions</h4>
				<ul>
					<li><strong>Problem 1:</strong> Terminal limitations. <strong>Impact:</strong> Difficult to make visuals clear. <strong>Solution:</strong> Simple ASCII graphics and clear symbols.</li>
					<li><strong>Problem 2:</strong> Too complex mechanics. <strong>Impact:</strong> Project gets stuck. <strong>Solution:</strong> Start small and expand.</li>
					<li><strong>Problem 3:</strong> Code becomes messy. <strong>Impact:</strong> Hard to maintain. <strong>Solution:</strong> Use structure (functions/classes).</li>
				</ul>
			</section>

			<section class="td-section">
				<h4>8. Planning per Sprint</h4>
				<p><strong>Sprint 1 - Ship (DONE):</strong> Movement system, input handling</p>
				<p><strong>Sprint 2 - Pong (CURRENT):</strong> Ball movement, paddle movement, collision system, score system</p>
				<p><strong>Sprint 3 - Platformer:</strong> Gravity, jump system, platforms, collision</p>
				<p><strong>Sprint 4 - Race Game:</strong> Top-down movement, track system, lap counter</p>
			</section>

			<section class="td-section">
				<h4>9. Inspiration</h4>
				<p>Inspiration comes from classic games like Pong and retro arcade games.</p>
				<p><strong>What I take away:</strong></p>
				<ul>
					<li>Simple but clear mechanics</li>
					<li>Strong game loops</li>
				</ul>
				<p><strong>What I avoid:</strong></p>
				<ul>
					<li>Overcomplicated systems</li>
					<li>Too large scope</li>
				</ul>
			</section>

			<section class="td-section">
				<h4>10. Technical Design Mini</h4>
				<p><strong>10.1 Game loop</strong></p>
				<p>Choice: While loop that constantly updates and renders. Risk: Performance issues. Solution: Efficient updates and simple rendering. Acceptance: Game runs smoothly in terminal.</p>
				<p><strong>10.2 Input system</strong></p>
				<p>Choice: Keyboard input per frame. Risk: Input lag. Solution: Direct input reading. Acceptance: Player input feels responsive.</p>
				<p><strong>10.3 Collision (Pong &amp; Platformer)</strong></p>
				<p>Choice: Simple coordinate-based collision. Risk: Incorrect detection. Solution: Bounding checks. Acceptance: Objects react correctly to each other.</p>
				<p><strong>10.4 Rendering</strong></p>
				<p>Choice: ASCII rendering in terminal. Risk: Cluttered screen. Solution: Clear symbols and spacing. Acceptance: Game is readable and playable.</p>
			</section>
		</div>
	`;
}

function getTowerDefenseInfoMarkup(project) {
	return `
		<div class="td-gdd">
			<p><strong>Sprint 0 - Game Design Document: Tower Defense</strong></p>
			<p><strong>Name:</strong> Arthur<br><strong>Class:</strong> GD1B<br><strong>Date:</strong> 08/09/2025</p>

			<section class="td-section">
				<h4>1. Title and Elevator Pitch</h4>
				<p><strong>Title:</strong> Dragon Defense</p>
				<p>My game is a tower defense where the player can build different types of towers. Every 10 waves the towers must be swapped, forcing the player to adapt and adding variety and strategy to the gameplay.</p>
			</section>

			<section class="td-section">
				<h4>2. What Makes This TD Unique</h4>
				<p>Most tower defense games let players pick a meta and stick with it. In Dragon Defense, every 10 waves the towers must be changed, preventing repetitive strategies and keeping gameplay fresh.</p>
			</section>

			<section class="td-section">
				<h4>3. Towers (Starting Values)</h4>
				<div class="td-table-wrap">
					<table class="td-table">
						<thead>
							<tr>
								<th>Tower</th>
								<th>Stats</th>
							</tr>
						</thead>
						<tbody>
							<tr><td>Fast Tower</td><td>Damage 5, Fire rate 0.3s, Range 4, Cost 80, Upgrade +50/level</td></tr>
							<tr><td>Slow Tower</td><td>Damage 25, Fire rate 2s, Range 5, Cost 120, Upgrade +70/level</td></tr>
							<tr><td>Long Range Tower</td><td>Damage 10, Fire rate 1s, Range 8, Cost 100, Upgrade +60/level</td></tr>
							<tr><td>Short Range Tower</td><td>Damage 40, Fire rate 1.5s, Range 2.5, Cost 150, Upgrade +75/level</td></tr>
							<tr><td>Freeze Tower</td><td>Damage 0, Slow 40% for 2s, Range 5, Fire rate 1s, Cost 130, Upgrade +65/level</td></tr>
							<tr><td>Flame Tower</td><td>Initial 5 + DoT 3 DPS for 4s, Range 4, Fire rate 1s, Cost 140, Upgrade +70/level</td></tr>
						</tbody>
					</table>
				</div>
			</section>

			<section class="td-section">
				<h4>4. Vijanden</h4>
				<ul>
					<li><strong>Normal:</strong> HP 100, Speed 2, Reward 10</li>
					<li><strong>Fast:</strong> HP 50, Speed 4, Reward 8</li>
					<li><strong>Heavy:</strong> HP 300, Speed 1.2, Reward 20, Slow resistance 50%</li>
					<li><strong>Support:</strong> HP 120, Speed 2, Reward 15, Heals 10 HP every 3s</li>
					<li><strong>Invisible:</strong> HP 90, Speed 2.5, Reward 12, Requires reveal tower</li>
				</ul>
				<p><strong>Boss (every 10 waves):</strong> HP 2000, Speed 1.5, Reward 100, immune to Freeze for 5s after first slow.</p>
			</section>

			<section class="td-section">
				<h4>5. Gameplay Loop</h4>
				<ul>
					<li>Start with 200 gold and 20 lives</li>
					<li>Build towers and survive waves</li>
					<li>Towers attack enemies automatically</li>
					<li>Earn gold from kills and spend on place/upgrade</li>
					<li>Mandatory tower swap every 10 waves</li>
					<li>Survive as long as possible</li>
				</ul>
			</section>

			<section class="td-section">
				<h4>6. Progression</h4>
				<ul>
					<li>Enemy HP scales +10% per wave</li>
					<li>Enemy speed scales +5% per wave</li>
					<li>Rewards scale +10% per wave</li>
					<li>Boss appears at wave 10, 20, 30...</li>
					<li>Forced swaps refresh strategy every 10 waves</li>
				</ul>
			</section>

			<section class="td-section">
				<h4>7. Risks and Solutions (PIO)</h4>
				<ul>
					<li><strong>Balancing:</strong> game too easy/hard. <strong>Solution:</strong> frequent playtesting and stat tuning.</li>
					<li><strong>Forced swap frustration:</strong> reduced player control. <strong>Solution:</strong> offer 2-3 choices each swap.</li>
					<li><strong>Invisible enemy fairness:</strong> feels punishing. <strong>Solution:</strong> tutorials/hints before first encounter.</li>
				</ul>
			</section>

			<section class="td-section">
				<h4>8. Sprint Planning (Trello Sync)</h4>
				<p><strong>Sprint 1 - Core loop online</strong></p>
				<ul>
					<li>Pathing system (5-8 waypoints/map)</li>
					<li>WaveManager (1s spawn interval)</li>
					<li>Placeable spots (5x5 grid, around 25 spots)</li>
					<li>Basic tower, projectile, collision and basic UI</li>
				</ul>
				<p><strong>Sprint 2 - First playable</strong></p>
				<ul>
					<li>Normal enemy and targeting modes</li>
					<li>Enemy HP bars, rewards, life loss</li>
					<li>Build and sell flow (70% refund)</li>
				</ul>
				<p><strong>Sprint 3 - Variety and economy</strong></p>
				<ul>
					<li>Economy (200 start gold, +50 wave income)</li>
					<li>Light, heavy, invisible, support enemies</li>
					<li>Low-range tower and upgrades (+20%/level)</li>
				</ul>
				<p><strong>Sprint 4 - Unique feature and depth</strong></p>
				<ul>
					<li>Mandatory swap every 10 waves</li>
					<li>Freeze, Flame and Reveal mechanics</li>
					<li>Upgrade menu + resistances</li>
				</ul>
				<p><strong>Sprint 5 - Boss and polish</strong></p>
				<ul>
					<li>Boss enemy (HP 2000, reward 100)</li>
					<li>Sound effects (shoot, hits, music)</li>
				</ul>
			</section>

			<section class="td-section">
				<h4>9. Technical Design (Mini)</h4>
				<ul>
					<li><strong>Pathing:</strong> enemies follow waypoints; near-threshold switches to next waypoint.</li>
					<li><strong>Targeting and shooting:</strong> towers retarget active enemies in range and fire projectiles.</li>
					<li><strong>Wave spawning:</strong> timed spawns with increasing difficulty and max enemy controls.</li>
					<li><strong>Economy and lives:</strong> variable-driven tuning for costs/rewards and life loss on leaks.</li>
					<li><strong>UI basics:</strong> money, lives and wave always visible and scalable.</li>
				</ul>
			</section>

			<section class="td-section">
				<h4>10. Inspiration</h4>
				<p>Inspired by Bloons Tower Defense (BTD6): strong variety, clear progression, and player feedback. Dragon Defense avoids repetitive meta play through mandatory tower swaps.</p>
			</section>

			<section class="td-section">
				<h4>11. Links</h4>
				<p><strong>Trello:</strong> <a href="https://trello.com/invite/b/68be86f11b0fd1599436af44/ATTI4fae26223c69d7fe3d588c43749edded7E21C96A/towerdefense" target="_blank" rel="noopener noreferrer">Tower Defense Board</a></p>
				<p><strong>Gameplay Video:</strong> <a href="https://www.youtube.com/watch?v=xlR9lBvwiQA" target="_blank" rel="noopener noreferrer">Dragon Defense Gameplay</a></p>
			</section>

			<section class="td-section">
				<h4>12. Dependencies (System Overview)</h4>
				<p>This project uses an event-driven, modular dependency structure across Player, Tower, UI/Managers, Scene/Music, and Enemy/Wave systems.</p>
				<div class="td-dependency-grid">
					<div>
						<h5>Player</h5>
						<ul>
							<li>PlayerAttackController -> PlayerWeaponController, PlayerProjShooter, PlayerSound, DoTweenPlayerAnimation, PlayerAmmoUI</li>
							<li>PlayerWeaponController -> TowerAttackController, SpriteRenderer</li>
							<li>Move/ProjShooter -> Rigidbody2D</li>
						</ul>
					</div>
					<div>
						<h5>Towers</h5>
						<ul>
							<li>TowerAttackController -> RotatingMovement, ProjectileShooter, TowerType</li>
							<li>TowerPlacementManager -> TowerSpot, TowerFactory, CurrencyManager</li>
							<li>TowerDragHandler/TowerFactory/TowerPreview chain for placement visuals</li>
						</ul>
					</div>
					<div>
						<h5>Managers/UI</h5>
						<ul>
							<li>CurrencyManager -> Currency UI</li>
							<li>HealthManager -> PlayerHealth</li>
							<li>ReloadBarUI -> PlayerAttackController</li>
							<li>UiWave -> WaveChecker</li>
						</ul>
					</div>
					<div>
						<h5>Enemy/Wave/Scene</h5>
						<ul>
							<li>EnemyPath, EnemyHealth, EnemyScaler, EnemySpawner, WaveChecker, WaveDifficultyManager</li>
							<li>EnemyReward -> CurrencyManager</li>
							<li>Music and scene toggle systems respond to wave and scene events</li>
						</ul>
					</div>
				</div>
			</section>

			<section class="td-section">
				<h4>13. Class Diagrams</h4>
				<p>Class diagrams are documented in Mermaid format for Player, Towers, UI Managers, Scene and Music, and Enemy/Wave systems.</p>
			</section>
		</div>
	`;
}

function createProjectDetailMarkup(project) {
	let infoContent;
	if (project.id === 0) {
		infoContent = getMytheInfoMarkup(project);
	} else if (project.id === 4) {
		infoContent = getSmallCppGamesInfoMarkup(project);
	} else if (project.id === 5) {
		infoContent = getFracturedInfoMarkup(project);
	} else if (project.id === 2) {
		infoContent = getTowerDefenseInfoMarkup(project);
	} else {
		infoContent = `
			<h3>Project Information</h3>
			<p class="i18n-more-details">More details about ${project.name}...</p>
			<p><strong class="i18n-status-label">Status:</strong> <span class="i18n-status-value">Completed</span></p>
			<p><strong class="i18n-team-label">Team:</strong> <span class="i18n-team-value">Solo Developer</span></p>
			<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="i18n-live-project">View Live Project</a>
		`;
	}

	return `
		<div class="project-header">
			<h1>${project.name}</h1>
			<p class="project-desc">${project.description}</p>
		</div>

		<div class="project-tabs" role="tablist" aria-label="Project detail tabs" data-i18n-aria="projectDetailTabsLabel">
			<button class="tab-btn active" data-tab="info" type="button" role="tab" aria-selected="true">Info</button>
			<button class="tab-btn" data-tab="github" type="button" role="tab" aria-selected="false">GitHub</button>
			<button class="tab-btn" data-tab="blog" type="button" role="tab" aria-selected="false">Blog</button>
		</div>

		<div id="info" class="tab-content active" role="tabpanel" aria-hidden="false">
			${infoContent}
		</div>

		<div id="github" class="tab-content" role="tabpanel" aria-hidden="true">
			<h3>GitHub Repository</h3>
			<p class="i18n-github-intro">View the full project source code and documentation on GitHub:</p>
			<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="github-link i18n-github-link">View on GitHub → ${project.github}</a>
		</div>

		<div id="blog" class="tab-content" role="tabpanel" aria-hidden="true">
			<h3>Blog</h3>
			<p>${project.blog}</p>
		</div>
	`;
}

function setActiveProjectTab(container, tabName) {
	container.querySelectorAll('.tab-btn').forEach(function (button) {
		const isActive = button.dataset.tab === tabName;
		button.classList.toggle('active', isActive);
		button.setAttribute('aria-selected', isActive ? 'true' : 'false');
	});

	container.querySelectorAll('.tab-content').forEach(function (content) {
		const isActive = content.id === tabName;
		content.classList.toggle('active', isActive);
		content.setAttribute('aria-hidden', isActive ? 'false' : 'true');
	});
}

function bindProjectTabEvents(container) {
	container.querySelectorAll('.tab-btn').forEach(function (button) {
		button.addEventListener('click', function () {
			setActiveProjectTab(container, button.dataset.tab);
		});
	});
}

function renderProjectDetail(projectId) {
	const projectDetail = document.getElementById('projectDetail');
	if (!projectDetail) {
		window.location.href = `project-detail.html?id=${projectId}`;
		return;
	}

	const project = getProjectById(projectId);
	projectDetail.innerHTML = createProjectDetailMarkup(project);
	bindProjectTabEvents(projectDetail);
	setActiveProjectTab(projectDetail, 'info');

	if (typeof window.applySiteLanguage === 'function') {
		window.applySiteLanguage();
	}
}

function parseProjectId(value) {
	const projectId = Number.parseInt(value, 10);
	if (Number.isNaN(projectId) || projectId < 0) return 0;
	return projectId;
}

window.showProjectDetail = function (projectId) {
	renderProjectDetail(parseProjectId(projectId));
};

window.loadProjectDetailFromQuery = function () {
	const params = new URLSearchParams(window.location.search);
	renderProjectDetail(parseProjectId(params.get('id')));
};
