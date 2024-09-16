<template>
  <v-text-field v-model="search" clearable hide-details persistent-clear label="Search for anything" prepend-inner-icon="mdi-magnify" variant="solo-filled">
  </v-text-field>
  <Filter @optionChanged="optionChanged($event)">
  </Filter>
  <v-data-iterator
    :items="currentOption === 'all' ? nouns : nouns.filter(noun => noun.type === currentOption || noun.subtype == currentOption)"
    :items-per-page="-1"
    :search="search"
    :custom-filter="searchAfterThreeChars"
  >
    <template v-slot:default="{ items }">
      <v-row>
        <v-col v-for="n in items" :key="n" xs="12" sm="12" md="6" xl="4">
          <NounCard :item="n">
          </NounCard>
        </v-col>
      </v-row>
    </template>
  </v-data-iterator>
</template>

<script>
  export default {
    data: () => ({
      currentOption: 'all',
      search: '',
      nouns: [
        {
          title: 'Briksburg',
          subtitle: 'Capital of The Grasslands',
          avatar: 'briksburg.jpg',
          text: 'The first capital city taken by imperial forces, Briksburg now serves as a supply station for Therenthyr. ',
          info: '- Originally home to mostly humans, gnomes, and halflings.\n- Currently has a large presence of elves, traders, and skilled laborers.\n- Situated between the basin of two rivers which provides Briksburg and the surrounding area of The Grasslands with very fertile soil and an abundance of freshwater and wildlife.',
          tags: ['The Grasslands', 'Capital', 'City', 'Colonized'],
          associations: ['Farmland'],
          icon: 'mdi-city',
          type: 'location',
          subtype: 'city',
          order: 0
        },
        {
          title: 'Lukshar Bay',
          subtitle: 'Port City, Western Grasslands',
          avatar: 'lukshar.jpg',
          thumb: '../thumbs/lukshar.jpg',
          text: 'Small port city located on the western shores of the Grasslands. A main stop for traders and Imperial soldiers on their way to Briksburg.',
          info: 'Lukshar bay was originally a small town, but has grown into a proper city as the Therenthyr Empire began to use it as a main destination when transferring recruits from Theren to the training barracks in Briksburg. Many business have been able to thrive with the increased traffic through Lukshar, and trade has never been better than right now. The increased movement of military equipment through the area means that the area remains well guarded day and night.\n\n- Elves dominate the local population. Many wood elves now call the area home, and high elves frequently pass through. Prior to imperial occupation, the area was mostly inhabited by humans.',
          tags: ['The Grasslands', 'Capital', 'City', 'Colonized'],
          associations: ['Farmland'],
          icon: 'mdi-home-city',
          type: 'location',
          subtype: 'town',
          order: 2
        },
        {
          title: 'The Grasslands',
          subtitle: 'Colonized Nation',
          avatar: 'grasslands.jpg',
          text: 'The Grasslands was a peaceful region for hundreds of years prior to Therenthyr\'s rule. Today, these lands are kept in check through force and military presence.',
          info: 'Named after its vast stretches of hilly grassland, this region is located in one of the most advantageous locations in all of Arcis. Seas to the north and west provide both protections and trade, while the mountains to the east serve as a natural barrier and supply the lands with ample fresh water throughout each season. The Great Elven Wall to the northwest was never an issue, and actually helped the nation grow unaccosted by the elves. Trusting that the gates would remain closed proved to be a grave mistake for the nation, however, as the imperial army faced no resistance when it ultimately decided to take The Grasslands.\n\nPresently, The Grasslands is mostly peaceful day to day. Farmers continue to farm, fishermen continue to fish and traders continue to trade; though each now pays their dues to Therenthyr. In some ways, many citizens of The Grasslands are grateful for the opportunity to travel freely to Theren and its cities. At the same time, it is no longer possible to establish a homestead on a grassy patch of land as you wish - the empire owns every square inch.\n\nSome Grasslandians accept the elves\' presence and follow their rules as expected, while others conspire quietly to establish resistance. Many brave souls decide to flee the nation altogether, following in the footsteps of their recent ancestors through the southern jungle toward Freemans Republic. Still, some seek the protection and consistency the empire offers, and leave harsher lands for the safety of The Grasslands.\n\n- Primarily home to Humans, Gnomes, and Halflings.\n- It is not rare to spot the occasional dwarf or tiefling near the eastern mountains.\n- Small villages and towns are found throughout the region, with few large population centers outside of the capitol city of Briksburg.',
          tags: ['Colonized'],
          associations: ['Humans', 'Gnomes', 'Halflings', 'Tieflings', 'Dwarves'],
          icon: 'mdi-earth',
          type: 'location',
          subtype: 'nation',
          order: 5
        },
        {
          title: 'Clifftonburgh',
          subtitle: 'Capital of The Freemans Republic',
          avatar: 'clifftonburgh.jpg',
          text: 'A bastion of freedom and respite, this city sits atop a long wall of cliffs that separate arid deserts from tropical jungles.',
          info: 'Clifftonburgh was created as a place for fleeing Grasslandians to rest, heal, and explore their new lives as free citizens. As the empire expanded, so did Clifftonburgh, which eventually adopted its own form of government that relies entirely on voting to make decisions. Votes are held weekly, and have become a central part of the city\'s culture. Most citizens of Clifftonburgh take great pride in their government system, and stay informed about local, regional, and global issues. News delivery here is very important, and comes in many forms.',
          tags: ['Freemans Republic', 'Capital', 'City'],
          associations: ['Cliffs', 'Jungle'],
          icon: 'mdi-city',
          type: 'location',
          subtype: 'city',
          order: 10
        },
        {
          title: 'Freemans Republic',
          subtitle: 'Nation',
          avatar: 'freemans.jpg',
          text: 'A tropical climate sounds nice, but the harsh humidity and dangerous beasts that come with it aren\'t exactly ideal. The jungles, cliffs, and shores keep the empire at bay, and only the most determined seem to ever make it to the free civilizations that lie within.',
          info: 'Freemans Republic is a nation literally shaped by its geography. A ferocious jungle river acts as a natural border to the north, and is very difficult to cross. Shores on the eastern and western borders make it difficult for any kind of large for to invade, while the cliffs to the south drop hundreds of feet to air wastelands below. Freemans Republic was the perfect place for those seeking to escape the expansion of the Therenthyr Empire - difficult to reach and full of natural resources. If a true threat to the empire were to exist, it would likely form here.\n\n- Primarily home to Tabaxi, and Genasi.\n- Humans, gnomes, and halflings are common, having fled from The Grasslands.\n- There are very few small towns or villages, as the environment is harsh and requires the efforts of many to survive.',
          tags: ['Tabaxi','Genasi'],
          associations: ['Humans', 'Gnomes', 'Halflings', 'Jungle', 'Cliffs', 'Sea'],
          icon: 'mdi-earth',
          type: 'location',
          subtype: 'nation',
          order: 11
        },
        {
          title: 'Est\'heas',
          subtitle: 'Former Avariel Elf Capital',
          avatar: 'estheas.jpg',
          text: 'Home of the flying elves. The Avariel of Est\'heas built The Great Elven Wall thousands of years ago, in an effort to keep the mortals out of their domain.',
          info: 'When Therenthyr united the elven races, the Avariel Elves agreed to hand over control of the wall to Aeis, who quickly opened its gates and allowed mortals to enter for the first time in a very long time. Today, Est\'heas serves as a staging area for imperial troops traveling by land. Unique shops and traveler settlements line the insides of the wall, and the Avariel elves keep watch to maintain the peace. ',
          tags: ['Avariel Elves', 'Capital', 'City'],
          associations: ['Colonized'],
          icon: 'mdi-city',
          type: 'location',
          subtype: 'city',
          order: 20
        },
        {
          title: 'Hyflume',
          subtitle: 'Former Wood Elf Capital',
          avatar: 'hyflume.jpg',
          text: '',
          info: '',
          tags: ['Wood Elves', 'Capital', 'City'],
          associations: ['Colonized'],
          icon: 'mdi-city',
          type: 'location',
          subtype: 'city',
          order: 21
        },
        {
          title: 'Omvedell',
          subtitle: 'Former Drow Capital',
          avatar: 'omvedell.jpg',
          text: '',
          info: '',
          tags: ['Drow', 'Capital', 'City'],
          associations: ['Colonized'],
          icon: 'mdi-city',
          type: 'location',
          subtype: 'city',
          order: 22
        },
        {
          title: 'Therenthyr',
          subtitle: 'Capital of Theren',
          avatar: 'therenthyr.jpg',
          text: 'The capital city of Theren and headquarters of the Therenthyr Empire. Former high-elf capital.',
          info: '',
          tags: ['High Elves', 'Capital', 'City'],
          associations: ['Colonized'],
          icon: 'mdi-city',
          type: 'location',
          subtype: 'city',
          order: 23
        },
        {
          title: 'Theren',
          subtitle: 'Nation',
          avatar: 'theren.jpg',
          text: 'Theren is the largest of the 10 nations, and boasts the greatest range of climates and resources. Elves of all kinds inhabit these lands, and are fiercely loyal to Aeis Therenthyr and his ambitions.',
          info: 'Theren is a heavily forested nation. Some areas of the forests spread so far and deep, that many believe the majority of the wilderness is still completely untouched. Most elves show great respect and admiration for the nature they are surrounded with, and often construct their buildings and cities to blend with the trees and rivers they are built around. Still, the elves have made significant changes to the lands, developing large cities surrounded by sprawling suburban towns and villages.\n\nElves often live for thousands of years, and many are able to pass generational wealth, built for millennia down to their families. This abundance of wealth is apparent among the many noble families that reside near the four main cities. The nobles of Theren hold great power and influence, and some take advantage of this to help guide the empire in a direction they see as favorable. For instance, allowing non-elves to reside within Theren was originally pursued by wealthy nobles who no longer wanted their families spending time laboring or serving in the imperial army. Though some non-elves do eventually lead very comfortable lives in Theren, none have been able to achieve the same status as some of the elven families who have been padding their coffers for thousands of years.\n\nOriginally, the four main elven races (High, Wood, Avariel, Drow) lived peacefully but separated. The Avariel elves built The Great Elven wall sometime around -10,000, which almost entirely kept the squabbling of the mortals beyond the wall at bay. This period between -10,000 to 0, is known as The Era of Elven Isolationism - due to both the elves separation from the rest of Arcis, and from themselves. Once Aeis united the elven races, this era came to an end, and Theren was formed.\n\n- Primarily home to High Elves, Wood Elves, Avariel Elves, and Drow.\n- All other races are relatively common, though often part of the working class.',
          tags: ['High Elves', 'Drow', 'Woof Elves', 'Avariel Elves'],
          associations: ['Colonized', 'Forest'],
          icon: 'mdi-earth',
          type: 'location',
          subtype: 'nation',
          order: 24
        },
        {
          title: 'Fjoll',
          subtitle: 'Capital of Farreach',
          avatar: 'fjoll.jpg',
          text: 'This Dragonborn-dominated city is full of life and home to a unique culture that celebrates nature and its influence on everyone in it.',
          info: 'Pavilions and A-frames are spread throughout Fjoll, which is more of a concentration of dragonborn than it is a proper city. For millennia, the dragonborn here have lived harmoniously with their tropical surroundings, often sleeping outside in the thousands together when weather permits. Unfortunately, the extreme heat and humidity of the area has brought on terrible storms for many generations. Most recently, roughly 150 years ago, Fjoll was torn to shreds and washed away by an especially strong tsunami. Though many died in the storms, the majority of the population was able to survive in the deserts to the south and more still were able to ride the giant waves in their expertly crafted ships.\nAfter the tsunami, many dragonborn accepted an invite from high elf Galendril Molnija to move to the western seas. Many dragon born took their knowledge of shipbuilding with them and started a fresh life in Molnija (Theren), where their descendants still live today.',
          tags: ['Farreach', 'Capital', 'City', 'Sailing'],
          associations: ['Dragonborn', 'Lizardfolk', 'Dragons'],
          icon: 'mdi-city',
          type: 'location',
          subtype: 'city',
          order: 30
        },
        {
          title: 'Farreach',
          subtitle: 'Nation',
          avatar: 'farreach.jpg',
          text: 'Farreach is home to a seafaring society that is almost entirely comprised of Dragonborn. The heat of the southern nation makes it difficult for warm-blooded species to thrive.',
          info: 'Dragonborn culture is one of strength and resilience. The citizens of Farreach have defended their land for thousands of years, from both foreign invaders and monstrous local fauna.\nFarreach has largely developed as a seafaring/fishing society. The dragonborn ships are especially well built, and are among the fastest ships in Arcis.\n\nFarreach is also home to lizardfolk and the occasional dragon.',
          tags: ['Dragonborn', 'Fishing', 'City', 'Jungle', 'Desert'],
          associations: [],
          icon: 'mdi-earth',
          type: 'location',
          subtype: 'nation',
          order: 31
        },
        {
          title: 'Ikephi',
          subtitle: 'Capital of the Barren Southlands',
          avatar: 'ikephi.jpg',
          text: 'Little is known (to your characters, unless you\'re from there, lmk) about Ikephi due to its remote location and extreme climate.',
          info: '',
          tags: ['Lizardfolk', 'Half-Orcs', 'Tabaxi', 'Capitol', 'City'],
          associations: ['Desert'],
          icon: 'mdi-city',
          type: 'location',
          subtype: 'city',
          order: 50
        },
        {
          title: 'The Barren Southlands',
          subtitle: 'Nation',
          avatar: 'southlands.jpg',
          text: 'A desert land full of death, sand, and the bones of long dead ancient creatures. Among the vast nothingness, the occasional settlement can be found, though most will migrate to find the nearest source of water as the seasons change from hot to more hot.',
          info: 'The Barren Southlands is home to the Lizardfolk and Tabaxi of Ikephi, as well as the Orcs of Orcland. If the Orcs aren\'t enough to keep the average traveler away, the intense heat, lack of water, and giant sandworms will usually do the trick.',
          tags: ['Lizardfolk', 'Half-Orcs', 'Tabaxi', 'Humans', 'Desert'],
          associations: ['Colonized'],
          icon: 'mdi-earth',
          type: 'location',
          subtype: 'nation',
          order: 51
        },
        {
          title: 'Kher Kolduhr',
          subtitle: 'Capital of Kolduhr',
          avatar: 'kher.jpg',
          text: 'This far northern city is encrusted in a deep arctic chill year-round. The dwarves who inhabit the land stay warm within the warm within the mines below - heated by the furnaces of their great forges buried underground, just below the frigid surface.',
          info: '',
          tags: ['Capital', 'City', 'Dwarves', 'Deep Gnomes'],
          associations: ['Mining', 'Mines'],
          icon: 'mdi-city',
          type: 'location',
          subtype: 'city',
          order: 60
        },
        {
          title: 'Shar Kolduhr',
          subtitle: 'Surface City of Kolduhr',
          avatar: 'shar.jpg',
          text: 'Though not quite as frigid as its more northern sister city, Kher Kolduhr, Shar is still considered to be an arctic climate. Dwarves and Goliaths live together in this city which was originally set up as a trading post for anyone traveling from the seas or lands to the south.',
          info: '',
          tags: ['City', 'Dwarves', 'Goliaths'],
          associations: ['Colonized'],
          icon: 'mdi-city',
          type: 'location',
          subtype: 'city',
          order: 61
        },
        {
          title: 'Kolduhr',
          subtitle: 'Nation',
          avatar: 'kolduhr.jpg',
          text: 'The frozen tundras of this nation have been nearly inaccessible for the better part of the past century. However, a recent thaw combined with favorable tidal patterns have allowed the land bridge between Kolduhr and Springland to remain passable for the past few decades.',
          info: 'The waters surrounding Kolduhr are virtually impassable due to the ship-killing ice spears that form in the salty waters. This is fine in the eyes of the dwarves and goliaths who inhabit Kolduhr, who have long preferred their isolation. Aeis Therenthyr knows that the land bridge may not be dry for long, and has taken action to establish outposts in southern Kolduhr while the opportunity exists.',
          tags: ['Partially Colonized','Dwarves', 'Goliaths'],
          associations: ['Land Bridge'],
          icon: 'mdi-earth',
          type: 'location',
          subtype: 'nation',
          order: 62
        },
        {
          title: 'Lakecrest',
          subtitle: 'Capital of Whitecap',
          avatar: 'lakecrest.jpg',
          text: 'A fishing city with a drinking problem.',
          info: 'Lakecrest may have the nicest weather, year round, of any city in Arcis. The western lake keeps the city at near-perfect temperatures day & night, and the rainforest to the northwest ensures that it never rains here for too long. Due to the weather, Lakecrest has become a very popular vacation and retirement destination for folk all around Arcis. This has led to a strong tourism economy, as well as the proliferance of a care-free culture. Species of all kinda call Lakecrest home, but the native inhabitants of Lizardfolk, Grung, and Tortle still make up the majority of year-round citizens.',
          tags: ['Whitecap', 'Capital', 'City'],
          associations: ['Lizardfolk','Grung','Tortle','Dragonborn','Humans','Halflings'],
          icon: 'mdi-city',
          type: 'location',
          subtype: 'city',
          order: 70
        },
        {
          title: 'Whitecap',
          subtitle: 'Nation',
          avatar: 'whitecap.jpg',
          text: 'To the west, lake shores provide peaceful and serene backdrops. To the east, swamps and wetlands dominate the land, providing natural homes to the many swamp creatures who live there.',
          info: 'Lizardfolk, Tortle, and Grung make up the majority of citizens here, especially in the swampy areas toward the east. It is very common to see dragonborn here as well, as Farreach is just a short boat ride southward.',
          tags: ['Lake', 'Swamp'],
          associations: ['Lizardfolk','Grung','Tortle','Dragonborn','Bullywug'],
          icon: 'mdi-earth',
          type: 'location',
          subtype: 'nation',
          order: 71
        },
        {
          title: 'Ozdar Dra',
          subtitle: 'Capital of Orcland',
          avatar: 'ozdar.jpg',
          text: 'Little is known about Ozdar Dra, aside from what can be observed from beyond the deep canyons that surround the orc-filled city.',
          info: '',
          tags: ['Orcland', 'Orcs'],
          associations: [],
          icon: 'mdi-city',
          type: 'location',
          subtype: 'city',
          order: 90
        },
        {
          title: 'Orcland',
          subtitle: 'Nation',
          avatar: 'alert-decagram-outline.svg',
          text: 'Named after all the orcs that live there.',
          info: 'Orcland is recognized as a nation purely out of caution; it is a dangerous area filled with short-tempered orcs. Most travelers give the area a wide berth when traveling to Ikephi, and few non-orcs have ever made it out alive when unaccompanied by an orcish chaperone.',
          tags: ['Orcs', 'Canyons'],
          associations: [],
          icon: 'mdi-earth',
          type: 'location',
          subtype: 'nation',
          order: 91
        },
        {
          title: 'Pinebark',
          subtitle: 'Capital of Ashtimber',
          avatar: 'pinebark.jpg',
          text: 'Tree-huggers beware, this is not the place for you.',
          info: 'Pinebark is a city comprised of log-cabins, log-houses, log-sheds, log-temples, and other log-buildings. It is said the pine forest just to the north of the city is magical in that, no matter how fast the trees are cut down, they grow back even faster. Pinebark is a paradise for Lumberjacks and woodsmen who help the city thrive through high-volume lumber trading.',
          tags: ['Ashtimber', 'Capital', 'City', 'Forest'],
          associations: ['Half-elves','Satyr','Humans','Tiefling'],
          icon: 'mdi-city',
          type: 'location',
          subtype: 'city',
          order: 100
        },
        {
          title: 'Ashtimber',
          subtitle: 'Nation',
          avatar: 'ashtimber.jpg',
          text: 'A nation with stunning and varied geography including deep forests, murky swampland, grassy ranges, and high mountain peaks.',
          info: 'Humans and half-elves live on the edges of the deep forest. Satyr build their own communities deeper in the woods. Tiefling are often spotted throughout the land, but tend to originate from higher up along the mountainsides.',
          tags: ['Partially Colonized','Forest','Swamp'],
          associations: ['Half-elves','Satyr','Humans','Tiefling','Lizardfolk','Grung','Tortle'],
          icon: 'mdi-earth',
          type: 'location',
          subtype: 'nation',
          order: 101
        },
        {
          title: 'Reston',
          subtitle: 'Capital of Hamburg',
          avatar: 'reston.jpg',
          text: 'A city named after its original purpose, a place to rest when traveling from the northern grasslands to the southern lakes and wetlands.',
          info: 'After colonization, Reston was repurposed as a staging area for the Empire\'s armies arriving from Theren. Thanks to the indigenous flora of the jungles that provide ample resources for creating healing potions and salves, reston has also formed into a bit of a medical city. People from all over make the trek here to seek treatment from some of Theren\'s best trained healers, with access to some of the worlds most potent ingredients.However, procuring these ingredients from the jungle is no easy task, and adventuring parties from all across Arcis come to reston to earn fantastic wages. The native citizens of Reston have grown frustrated over time as they\'ve learned how Therenthyr\'s soldiers and nobles are prioritized over everyone else.',
          tags: ['Hamburg', 'Capital', 'City', 'Farmland', 'Jungle'],
          associations: ['Colonized', 'Wood Elves', 'High Elves', 'Avariel Elves', 'Forest Gnomes', 'Humans', 'Tiefling'],
          icon: 'mdi-city',
          type: 'location',
          subtype: 'city',
          order: 110
        },
        {
          title: 'Hamburg',
          subtitle: 'Nation',
          avatar: 'hamburg.jpg',
          text: 'The Ohio of Arcis.',
          info: 'There isn\'t a ton of interesting stuff happening here outside of reston. The jungles are scary, but most people would prefer to brave the jungles and head south to freedom versus staying in the boring northern lands of Hamburg.',
          tags: ['Jungle','Farmland', 'Elves', 'Forest Gnomes', 'Humans', 'Tiefling'],
          associations: ['Colonized'],
          icon: 'mdi-hamburger',
          type: 'location',
          subtype: 'nation',
          order: 111
        },
        {
          title: 'Springborough',
          subtitle: 'Capital of Springland',
          avatar: 'springborough.jpg',
          text: 'A wild farming city doing wild farm shit.',
          info: 'Springborough is thoroughly in the middle of goddamned no-fucking-where. Sail a sea, climb a mountain, go down the other side, walk 20 miles, and you\'re still not at Springborough. But if you take that same sail boat and just skip the mountains, get off and walk for a long time, you\'ll finally find your sorry ass in Springborough. Once there, you can expect shit like cow racing, people hunting, corn houses, and goat throwing. Aside from a,l of the wild farm shit, Springborough is full of kind hearted people with warm and inviting homes. They\'ll give you the shirt off their back and send you on your way with a warm grape pie. Speaking of grapes, holy moly does Springborough make some solid wine. So good, in fact, that Therenthyr has agreed to leave Springborough alone so long as they keep making and selling them that sweet sweet Springland Wine.',
          tags: ['Springland', 'Capital', 'City', 'Farmland'],
          associations: ['Colonized'],
          icon: 'mdi-city',
          type: 'location',
          subtype: 'city',
          order: 130
        },
        {
          title: 'Springland',
          subtitle: 'Nation',
          avatar: 'springland.jpg',
          text: 'An isolated nation with a wall of mountains to the west, and surrounded by sea on all other sides.',
          info: 'Every few hundred years the land bridge between Springland and Kolduhr reveals itself as the seas subside, allowing the inhabitants of Springland to venture north and trade. The dwarven goods fetch a very high price throughout the rest of Arcis, which has helped bring money and goods into springland. The peninsula to the east is strangely arid and does not seem to have any significant population.',
          tags: ['Farmland'],
          associations: ['Partially Colonized', 'Mountains', 'Land bridge'],
          icon: 'mdi-earth',
          type: 'location',
          subtype: 'nation',
          order: 131
        },
        {
          title: 'Cursed Weapon',
          subtitle: '+2 to hit, -2 to your soul',
          avatar: 'cursed.jpg',
          text: 'IT IS I, SKRTTATTEN OF THE UNDEREARTH. YOU WILL WIELD ME AND ALL WILL SUFFER.',
          info: 'WISDOM SAVING THROW!\nHA YOU HAVE FAILED\nYOU CANNOT RESIST SKRTTATTEN',
          tags: ['Cursed', 'Weapon', 'Item', 'Magic', 'Yikes'],
          associations: ['Slashing Damage', 'Fire Damage'],
          icon: 'mdi-sword-cross',
          type: 'item',
          subtype: 'weapon',
          order: 180
        },
        {
          title: 'Aeis Therenthyr',
          subtitle: 'High Elf, Emperor',
          avatar: 'aeis.jpg',
          thumb: '../thumbs/aeis.jpg',
          text: 'Aeis Therenthyr is the Emperor of Therenthyr. He rose to prominence after uniting the elven tribes of Theren, using his influence to anoint himself as the King of Elves.',
          info: 'Aeis is nearly 400 years old, and appears to be in his prime. He is known as a cunning and brutal leader. It is said that he murdered his own sister for questioning his strategies after expanding into Hamburg.',
          tags: ['Therenthyr', 'Emperor', 'Theren'],
          associations: ['High Elf'],
          icon: 'mdi-crown',
          type: 'character',
          subtype: 'npc',
          order: 500
        },
        {
          title: 'Skink Tylopius',
          subtitle: 'Lizardfolk Druid',
          avatar: 'skink.jpg',
          thumb: '../thumbs/skink.jpg',
          text: 'A mouth full of sharp teeth and pores full of nutritious goop.',
          info: 'He once covered an empire soldier in tentacle sauce while spitting in another elf\'s mouth. Both later died.',
          tags: ['PC', 'Druid', 'Lizardfolk'],
          associations: ['Mike','Faction Agent'],
          icon: 'mdi-account',
          type: 'character',
          subtype: 'pc',
          order: 510
        },
        {
          title: 'Tem Squall',
          subtitle: 'High Elf, Sorcerer',
          avatar: 'tem.jpg',
          text: 'Recently captured and marked as a traitor to the empire. Believes Aeis Therenthyr is unaware of some of the bad things his soldiers have done.',
          info: '',
          tags: ['PC', 'Sorcerer', 'High-Elf'],
          associations: ['Mitch','Defector'],
          icon: 'mdi-account',
          type: 'character',
          subtype: 'pc',
          order: 520
        },
        {
          title: 'Moss',
          subtitle: 'Tortle, Cleric',
          avatar: 'moss.jpg',
          thumb: '../thumbs/moss.jpg',
          text: 'A quiet and caring tortle that has had a really rough few months.',
          info: '',
          tags: ['PC', 'Cleric', 'Nature Domain', 'Tortle'],
          associations: ['Chuck'],
          icon: 'mdi-account',
          type: 'character',
          subtype: 'pc',
          order: 530
        },
        {
          title: 'Folwynn Perbella',
          subtitle: 'Eladrin, Rogue',
          avatar: 'folwynn.jpg',
          thumb: '../thumbs/folwynn.jpg',
          text: 'Thankfully this nimble elf knows how to drive a boat.',
          info: '',
          tags: ['PC', 'Rogue', 'Eladrin'],
          associations: ['Miko','Pirate Deckhand'],
          icon: 'mdi-account',
          type: 'character',
          subtype: 'pc',
          order: 540
        },
        {
          title: 'Udo Slugnot',
          subtitle: 'Orc, Fighter',
          avatar: 'puz.jpg',
          thumb: '../thumbs/puz.jpg',
          text: 'Really just wants to get back to work.... damn pirates.',
          info: '',
          tags: ['PC', 'Orc', 'Fighter'],
          associations: ['Brian'],
          icon: 'mdi-account',
          type: 'character',
          subtype: 'pc',
          order: 550
        },
        {
          title: 'Eudora Lilypad',
          subtitle: 'Bullywug, Monk',
          avatar: 'frog.jpg',
          thumb: '../thumbs/frog.jpg',
          text: 'Looking for the warlock Voryn Shadowmire, who corrupted the marsh she grew up in. Sometimes poisonous to the touch.',
          info: '',
          tags: ['PC', 'Bullywug', 'Monk', 'Grung'],
          associations: ['Spenser'],
          icon: 'mdi-account',
          type: 'character',
          subtype: 'pc',
          order: 560
        },
        {
          title: 'Gaunt Old Man',
          subtitle: 'Human, Prisoner',
          avatar: 'gauntman.jpg',
          thumb: '../thumbs/gauntman.jpg',
          text: '"Beware of the shadows! Especially you heHEH!"',
          info: 'Moss attempted to both save the man\'s life, and perform a burial-at-sea ritual, which Tem stopped after seeing/feeling a shadow leave the man\'s body after death.',
          tags: ['Human', 'Empire\'s Thorn', 'Western Ocean'],
          icon: 'mdi-account-outline',
          type: 'character',
          subtype: 'npc',
          order: 565
        },
        {
          title: 'Buckminster "Two-Tongue" Remmington',
          subtitle: 'Dragonborn, Swashbuckler',
          avatar: 'twotongue.jpg',
          thumb: '../thumbs/twotongue.jpg',
          text: 'Pirate Captain of The Empire\'s Thorn. Chews on live rats.',
          info: 'Attacked and looted the elven ship that the PCs were being transported on while under arrest. Freed the adventurers and left them only enough to live off of for a few days. "Remember who saved your life: Two-Tongue!"',
          tags: ['Pirate', 'Empire\'s Thorn', 'Western Ocean'],
          associations: ['Freeman\'s Republic'],
          icon: 'mdi-pirate',
          type: 'character',
          subtype: 'npc',
          order: 570
        },
        {
          title: 'Pickles',
          subtitle: 'Goblin, Rogue',
          avatar: 'pickles.jpg',
          text: 'Pirate on The Empire\'s Thorn. Chews on pickles.',
          info: '"Want a pickle?"',
          tags: ['Pirate', 'Empire\'s Thorn', 'Western Ocean'],
          associations: ['Freeman\'s Republic'],
          icon: 'mdi-pirate',
          type: 'character',
          subtype: 'npc',
          order: 580
        },
      ].sort(function(a, b){return b.order - a.order})
    }),
    methods: {
      optionChanged (option) {
        this.currentOption = option
      },
      searchAfterThreeChars (value, query, item) {
        if(query.length > 2) 
          return value != null &&
            query != null &&
            value.toString().toLowerCase().indexOf(query.toLowerCase()) !== -1
      },
  }
}
</script>