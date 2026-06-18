"use client";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "YOUR_ACTUAL_SUPABASE_URL",
  "YOUR_ACTUAL_SUPABASE_ANON_KEY"
);


// ─── DESTINATIONS ─────────────────────────────────────────────────────────────
const DESTINATIONS = [
    {
    id: 1,
    name: "Mukteshwar, India",
    region: "North India",
    tag: "Peaceful arc",
    description: "A popular hill station your gf keeps telling to visit, known for its beautiful scenery~",
    image: "https://images.unsplash.com/photo-1625830367488-d39bdc4ab1ab?w=900&q=80",
    highlights: ["Chauli ki jali", "Bhalu Gaad waterfall", "Fruit Orchards", "Mukteshwar top"],
    duration: "3 days",
    bestFor: "Scenic views~",
    avgCost: "₹6,000–11,000",
    visited: false,
    itinerary: "Day 1- Leave for mukteshwar!\nMake a pitstop at Bhimtal and look at the lake and do like boating and shi cos Mukteshwar is like jus 2-3 hours from Bhimtal. Then arrive at the hotel and see the sunset at Mukteshwar Top\nDay 2- Wake up early and see the sunrise, you can see mountain peaks like Nanda devi and stuff. Then HEAD TO THE WATERFALLS WOO. I would say the best way to go to the top is trek!!. After that head to Chali ki Jali, which is a really pretty viewpoint.\nDay 3- Quickly visit Mukteshwar temple before leaving for back to Delhi\nOverall synopsis- There's not that much to do, its more of a weekend getaway chill spot where you just go to fuck in beautiful scenries without protection. I would totally take it raw in that view.",
    howToGetThere: "1) Self-Drive. It would take about 8-10 hours and ₹4k-₹6k worth of petrol and obvi a car\n\n2) Train+Taxi. take train from delhi to Kathgodam then a shared cab. About ₹1.5k\n\n3) Bus+Taxi. You can find Delhi to Mukteshwar buses occasaionaly. Or you could take bus till Nainital then taxi till Mukteshwar. About ₹2k." 
  },
  {
    id: 2,
    name: "Chitkul, India",
    region: "North India",
    tag: "Chilling arc",
    description: "Hehe its super pretty its like on the border of india and china so a lotta soldiers too, but the connectivity is not that good.",
    image: "https://images.unsplash.com/photo-1607836046730-3317bd58a31b?w=900&q=80",
    highlights: ["Baspa River", "Chitkul Village", "Mathi Temple", "Hindustan Ka Aakhri Dhaba(Killer Rajma Chawal)"],
    duration: "3 days",
    bestFor: "Peaceful scenery~",
    avgCost: "₹7,000–13,000",
    visited: false,
    itinerary: "Day 1- Leave Delhi start the journey~. Stop at Shimla for lunch because whatever circumstance im hungry for shimla~. Continue through Sangla Valley, which is honestly one of the prettiest roads in India, then reach Chitkul by evening. Jus check out the village after arriving and jus hang near the river yk.\nDay 2- Wake up and stare at the mountains for an unhealthy amount of time, or you could stare at me in me because we all know what happens early morning. Then finally get out of bed to visit Mathi Temple and walk along the Baspa River. Then go to Hindustan Ka Aakhri Dhaba because apparently everyone has to take a photo there and also bro ong the rajma chawal there are so fire, i had it when i was 10 i still remember. Spend the evening just vibing by the river and watching the sunset hit the mountains.\nDay 3- Wake up early, take one last walk around the village because you're probably never coming back, then begin the journey back towards Delhi.\nOverall synopsis- Chitkul is basically what happens when you jus wanna chill in the most amazing view of your life. You go there to touch grass or just stay in ur bed w ur bbg in your arms and just chill~ Jus escape from the hassle yk. One of those times when you're too tired even for a trip.",
    howToGetThere: "1) Self-Drive. Around 14-16 hours total driving and ₹6k-₹9k worth of petrol.\n\n2) Bus+Taxi. Take an overnight Volvo from Delhi to Shimla, then another bus/shared cab to Sangla and finally a taxi to Chitkul. Around ₹2k-₹4k.\n\n3) Train+Bus. Take a train to Kalka, then bus/taxi via Shimla and Sangla. Cheapest option but also the most chaotic. Around ₹1.5k-₹3k."
  },
  {
    id: 3,
    name: "Harsil, India",
    region: "North India",
    tag: "Exploring arc",
    description: "A hidden spot. Or maybe not that hidden, near Gangotri, with killer apple juice that tastes like vinegar, waterfalls and rivers.",
    image: "https://images.unsplash.com/photo-1658847065376-7b183e580879?w=900&q=80",
    highlights: ["Bhagirathi River", "Gangotri", "Dayara Bugyal Trek", "Apple Orchards"],
    duration: "4 days",
    bestFor: "Escaping life~",
    avgCost: "₹7,000–12,000",
    visited: false,
    itinerary: "Day 1- Leave Delhi early and begin the journey towards Uttarkashi. The drive itself is beautiful once you enter the mountains. Stop in Uttarkashi for lunch and explore the town a little. can check out the riverside and walk around before continuing towards Harsil. Reach by evening, check into your stay and take a peaceful walk beside the Bhagirathi River. End the day with strawberry lube and a side of me.\nDay 2- Wake up early, fuck, and head towards Dharali, a tiny village right next to Harsil. Walk through the apple orchards, drink the nasty vinegar ahh apple cider that grows on you and you start enjoying it. Then go to Gangotri to bathe in the river and visit Gangotri Temple. There are random trails there, meri didi random pahad par rock climbing kar gayi thi, funsies~. On the way back stop wherever the scenery demands raw.\nDay 3- Wake up early and drive to Barsu Village, the starting point of the famous Dayara Bugyal Trek. Do the entire fricking trek. and what for? For a lake. Recently ek ladki gayab ho gayi thi vaha se tho toh akele mat jana. One of the harder treks with not such a worth it view at the top, but a worth it view during the journey.\nDay 4-Have breakfast, take one final look at the valley and begin the drive back to Delhi.\nOverall synopsis- Harsil isn't really about checking off attractions. It's about slowing down. (That's another way of saying its more of an uncharted area so agar kuch random dikhe toh voh karo)",
    howToGetThere: "1) By car. Around 11-13 hours and ₹5k-₹8k worth of petrol.\n\n2) Bus+Taxi. Take a bus to Uttarkashi and then a shared cab/taxi to Harsil. Around ₹1.5k-₹3k.\n\n3) Train+Taxi. Train to Dehradun, then bus or taxi via Uttarkashi to Harsil. Around ₹2k-₹4k."
  },
  {
    id: 4,
    name: "Auli & Chopta, India",
    region: "North India",
    tag: "Treking Arc",
    description: "The trip that gives snow, funsies and footaches. You get pretty views at treks but at the cost of your sanity~",
    image: "https://images.unsplash.com/photo-1618661057370-7cf87dfad271?w=900&q=80",
    highlights: ["Skiing", "Tungnath Temple", "Chandrashila Summit", "Joshimath Ropeway"],
    duration: "5 days",
    bestFor: "Adventure & mountain views~",
    avgCost: "₹10,000–18,000",
    visited: false,
    itinerary: "Day 1- Leave Delhi early and begin the journey towards Joshimath. On the way you'll pass through Devprayag, Rudraprayag and Karnaprayag so that's pretty. Reach Joshimath by evening and explore the town a little before calling it a day.\nDay 2- Head up to Auli. If the ropeway is operational then obviously take that because there's plenty of other treks to do and also its really fun actually. Spend the time skiing which u can easily rent in addition you can get a coach for a day and stuff and just play around in the snow. There is an artificial lake, but this one is actually really nice not like mussuourrie. End the evening watching the sunset over Nanda Devi and the surrounding peaks.\nDay 3- Wake up early and do the Gorson Bugyal Trek. One of those treks where every turn somehow looks better than the last one. Spend the afternoon relaxing in Auli before driving to Chopta. Stay overnight in Chopta.\nDay 4- Wake up way too early for your comfort and start the trek to Tungnath Temple. A long and grueling trek covered in snow sometimes dangerous in a good way. Continue onwards to Chandrashila Summit if you can or stop at the tungnath temple half covered in snow. On a clear day you can see peaks stretching across the horizon. Head back to Chopta and spend the evening recovering because your legs are about to file a complaint.\nDay 5- Have a slow morning and enjoy the mountains one last time before beginning the drive back to Delhi.\nOverall synopsis- Very happening and funsies. Also,December-March for skiing and snow. March-June and September-November for trekking and clear mountain views.",
    howToGetThere: "1) By car, Around 11-13 hours to Joshimath and ₹5k-₹8k worth of petrol.\n\n2) Bus+Taxi. Take a bus to Joshimath and use local taxis/shared cabs for Auli and Chopta. Around ₹2k-₹4k.\n\n3) Train+Taxi. Train to Haridwar or Dehradun, then continue via bus/taxi to Joshimath. Around ₹2k-₹5k.",
  },
  {
    id: 5,
    name: "Spiti Valley, India",
    region: "North India",
    tag: "Mini Switzerland arc",
    description: "Feels like it from another planet. A cold desert serving its place",
    image: "https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?w=900&q=80",
    highlights: ["Key Monastery", "Komic", "Hikkim Post Office", "Langza", "Chandratal Lake", "Pin Valley"],
    duration: "8 days",
    bestFor: "So muchh",
    avgCost: "₹18,000–35,000",
    visited: false,
    itinerary: "Day 1- Leave Delhi and head towards Shimla. Drive through Narkanda, Rampur and Kinnaur Valley towards Kalpa.\nDay 2- Continue towards Nako and Tabo. Visit Tabo Monastery, one of the oldest monasteries in the Himalayas. Stay overnight in Tabo.\nDay 3- Head towards Kaza. On the way stop at Dhankar Monastery and Dhankar Lake if you're willing to do a short trek. Reach Kaza and explore the town.\nDay 4- Village Hopping Day. I still remember how absolutely fun this was, Lol I made a vlog about this. Visit Langza (giant Buddha statue and fossils), Hikkim (home to one of the world's highest post offices where I send myself a postcard that never came~), and Komic (one of the highest villages in the world).\nDay 5- Visit Key Monastery and then Kibber Village. Continue to Chicham Bridge, one of the highest suspension bridges in Asia. Spend the evening in Kaza.\nDay 6- Explore Pin Valley National Park. Tiny villages, insane views and significantly fewer tourists. Return to Kaza.\nDay 7- Leave Kaza and head towards Chandratal Lake. Spend the evening at the lake watching the stars and extremely cold water. Stay at a camp near Chandratal lake and you'll be experiencing what true cold looks like.\nDay 8- Return to Manali and then begin the journey back to Delhi and try not to get so stuck in jam that you have to extend your trip.\nOverall synopsis- Best ever. ever. period.",
    howToGetThere: "1) By car which is the best.\n\n2) Bus+Taxi. Buses run from Shimla and Manali but flexibility becomes limited.\n\n3) Bike Trip. The solo trip option. Also the best option if u wanna look kewl"
  },
  {
    id: 6,
    name: "Ladakh, India",
    region: "North India",
    tag: "Heaven arc",
    description: "Mountains so big they make your problems look insignificant. Prettay lakes and 3 idiots nostalgia~.",
    image: "https://images.unsplash.com/photo-1635255506105-b74adbd94026?w=900&q=80",
    highlights: ["Pangong Lake", "Nubra Valley", "Khardung La", "Leh Palace"],
    duration: "8 days",
    bestFor: "The trip of a lifetime~",
    avgCost: "₹25,000–50,000",
    visited: false,
    itinerary: "Day 1- Fly to Leh and spend the entire day doing absolutely nothing because altitude sickness is not a personality trait. Explore Leh market in the evening. If you do roadtrip instead, first day is in Srinagar and you can check out a bunch of gardens and stuff but cmon you've already been to Srinagar.\nDay 2- Visit Leh Palace, Shanti Stupa and nearby monasteries. A Lot of monasteries, way too many monasteries. Enough monasteries to make you a monk and not do anyone the entire trip.\nDay 3- Drive to Nubra Valley via Khardung La. Khar Visit Diskit Monastery and chill in Hunder's sand dunes. You can do camel rides or even ATV rides. Its lowkey crazy cos you can see sand dunes one side and snow mountains on the other\nDay 4- Head towards Pangong Lake. Spend the evening by the lake questioning how water can be that blue and how a lake can be bigger than a sea. Apparently most of the Pangong lake isn't even in india yet its so huge. Stay at pangong lake only in a camp.\nDay 5- Sunrise at Pangong because everyone says it's magical and apparently they're right. Return to Leh.\nDay 6- Drive to Tso Moriri. Fewer tourists but ridiculously good scenery. A night sky so good you don't need any zoom to see blue giants.\nDay 7- Explore the lake and surrounding villages then Return to Leh and spend the day café hopping and buying souvenirs.\nDay 8- Fly back home before deciding to move to Ladakh permanently.\nOverall synopsis- Literally smth you will never ever ever forget no matter how far back you went.",
    howToGetThere: "1) Flight to Leh.\n\n2) Road trip via Manali.\n\n3) Road trip via Srinagar.",
  },

  {
    id: 7,
    name: "Shimla, India",
    region: "North India",
    tag: "Smashing arc",
    description: "The trip of a lifetime, the time I keep looking back on no matter how things are~",
    image: "https://plus.unsplash.com/premium_photo-1697730487072-c7c29e113007?w=900&q=80",
    highlights: ["Mall Road", "Ridge", "Kufri", "Christ Church"],
    duration: "3 days",
    bestFor: "Weekend getaway~",
    avgCost: "₹6,000–12,000",
    visited: true,
    itinerary: "Day 1- Arrive in Shimla and wait way too long to get a hotel room. Then freshen up, fuck, and spend the evening exploring The ridge And Christ Church.\nDay 2- Start your day early and Head to Kufri for horse rides, Go-karting, ATV ride (meh) and other things. Come back to hotel, fuck, sleep, then go to the mall road for a nice fancy dinner, Come back, drink, fuck, go to the washroom and come back to your girl already asleep.\nDay 3- Wake up fuck, sleep and let your gf rest cos she had a really bad hangover, oopsies.\nOverall synopsis- Quite a lot to do. Would take raw.",
    howToGetThere: "1) Car.\n\n2) Train to Kalka + Toy Train.\n\n3) Volvo Bus.",
  },

  {
    id: 8,
    name: "Rishikesh, India",
    region: "North India",
    tag: "Adventure arc",
    description: "A place where you can either achieve spiritual enlightenment or get thrown into a river while rafting.",
    image: "https://images.unsplash.com/photo-1650341259809-9314b0de9268?w=900&q=80",
    highlights: ["River Rafting", "Beetles ashram", "Some Waterfall", "Bungee Jumping", "Rajasthani"],
    duration: "3 days",
    bestFor: "Adventure or relaxation~",
    avgCost: "₹5,000–10,000",
    visited: true,
    itinerary: "Day 1- Arrive and spend a lotta time at Beetles ashram then play at the river side because its fun, come back sleep and go for a chill dinner before calling it a day.\nDay 2- Go on a very long downhill trek to the most disappointing waterfall and the trek makes ur nail go bleh, then do River rafting.\nDay 3- Bungee jumping then head back to Delhi (or Mussourrie your choice).\nOverall synopsis- Very teenage life decisions honestly~.",
    howToGetThere: "1) Car.\n\n2) Train to Haridwar.\n\n3) Bus.",
  },

  {
    id: 9,
    name: "Kerala (w me), India",
    region: "South India",
    tag: "South india arc",
    description: "Backwaters, tea plantations, beaches, wildlife and enough greenery to make your eyes happy.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&q=80",
    highlights: ["Munnar", "Alleppey", "Kochi", "Thekkady", "Varkala"],
    duration: "8 days",
    bestFor: "Everything~",
    avgCost: "₹20,000–40,000",
    visited: false,
    itinerary: "Day 1- Arrive in Kochi and explore Fort Kochi.\nDay 2- Travel to Munnar and spend the day among tea plantations.\nDay 3- Explore Munnar viewpoints and waterfalls.\nDay 4- Head to Thekkady and visit Periyar National Park.\nDay 5- Travel to Alleppey and stay on a houseboat.\nDay 6- Enjoy the backwaters and then travel to Varkala.\nDay 7- Beach day. Do absolutely nothing productive.\nDay 8- Return home while missing Kerala immediately.\nOverall synopsis- Kerala somehow has every type of scenery in one state. This was mostly AI cos idrk anything about kerala sowwy but ik it is one of the things on top of my bucket list with you~",
    howToGetThere: "Flight to Kochi is easiest.",
  },

  {
    id: 10,
    name: "Goa(w me), India",
    region: "South India",
    tag: "ILovemyGF Arc",
    description: "Beaches, sunsets, cafés and questionable decisions.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&q=80",
    highlights: ["Palolem", "Anjuna", "Fort Aguada", "Dudhsagar Falls", "Old Goa"],
    duration: "5 days",
    bestFor: "Relaxation and cracking~",
    avgCost: "₹10,000–20,000",
    visited: false,
    itinerary: "Day 1- Arrive and explore North Goa beaches.\nDay 2- Fort Aguada, cafés and sunset hopping.\nDay 3- Dudhsagar Falls day trip.\nDay 4- Explore South Goa and Palolem.\nDay 5- One final beach sunrise before leaving.\nOverall synopsis- The place where plans stop existing and vibes take over. This was mostly done by AI cos i figured you'd know goa way better than i would. I just wanna go on a couples trip there so bad just yk relax at the beach, fuck every other hour at new locations just a very teenage couple trip while im still a teenager which you're not unc.",
    howToGetThere: "Flight, train or road trip.",
    seasonalNote: 'November-February.'
  },
  {
    id: 11,
    name: "Japan",
    region: "Asia",
    tag: "Anime arc",
    description: "ANIME. POKEMON. AOT. TOKYO DRIFT. MANGA. HENTAI. and other super cool stuff~",
    image: "https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?w=900&q=80",
    highlights: ["Tokyo", "Pokemon Center", "Mount Fuji", "Kyoto", "Nara Deer Park", "Universal Studios Japan"],
    duration: "12 days",
    bestFor: "Cool stuff~",
    avgCost: "₹1.2L–2.5L",
    visited: false,
    itinerary: "Day 1- Arrive in Tokyo and spend the day exploring Shibuya and click pics at the famous Shibuya crossing. Visit Hachiko Statue, which is of a dog who waited for its owner for a long time. Then spend the evening in Shinjuku (red light district like dwarka~). Explore Golden Gai at night and experience Tokyo's tiny bars and restaurants.\nDay 2- Head to Tokyo Tower, I've heard it looks better from the outside, but it has like these glass floor thingy i saw once on a Shinchan episode hehe. Spend the evening exploring Akihabara and maybe try out some maid cafes hehe. Buy (me) random anime (pokemon) merch.\nDay 3- POKEMON DAY WOO. Visit Pokemon Center Mega Tokyo in Ikebukuro and spend an way too much money on pokemon stuff. Then head to the Pokemon Cafe because we're committed to the bit. Explore Sunshine City afterwards.\nDay 4- Visit Asakusa and Sensoji Temple. Walk through Nakamise Street trying every snack you can find especially that one fish shaped red bean thingy. End the day at Tokyo Skytree for a ridiculous view of the city.\nDay 5- Day trip to Hakone. Ride the pirate ship across Lake Ashi, take the ropeway and hopefully catch views of Mount Fuji (go in the correct time cos its not visible for most of the year).\nDay 6- Travel to Kyoto (where every school trip ever happens). Explore Nishiki Market and wander around Gion, Kyoto's historic district. \nDay 7- Wake up early and visit Fushimi Inari Shrine before the crowds arrive. Walk through thousands of red torii gates and theres a wishing fountain thingy. Afterwards head to Kiyomizu-dera Temple and explore the old streets around it.\nDay 8- Visit Arashiyama Bamboo Forest early in the morning. Then head to Monkey Park and spend the rest of the day exploring temples, gardens and cafés around Kyoto.\nDay 9- Day trip to Nara. Feed the deer, get chased by the deer, get robbed by the deer(the reference is that one deer game you wouldn't know cos you're old and lame like that). Visit Todai-ji Temple before returning to Kyoto.\nDay 10- Travel to Osaka. Spend the day exploring Dotonbori. Eat takoyaki, ramen and basically everything in sight because Osaka's entire personality revolves around food.\nDay 11- Universal Studios Japan. Nintendo World, Harry Potter World and enough walking to destroy your legs. Spend the evening exploring Osaka Castle and Shinsekai.\nDay 12- One final convenience store haul, one final bowl of ramen and then fly home while immediately planning a second Japan trip.\nOverall synopsis- Take one empty suitcase to carry all the kitkat and snack hauls and obvi way too much pokemon merch.",
    howToGetThere: "1) Flight from Delhi to Tokyo. Usually ₹40k-₹80k round trip depending on season.\n\n2) Get a Suica or Pasmo card as soon as you arrive because Japanese public transport is basically magic.\n\n3) Use the Shinkansen (bullet train) between Tokyo, Kyoto and Osaka. Main-character activity."
  },
  {
    id: 12,
    name: "Las Vegas, USA",
    region: "North America",
    tag: "Cheating Arc",
    description: "Sin city for a reason. I know your ass would loveee going here right with all the strip clubs and the gambling and the boobs",
    image: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=900&q=80",
    highlights: ["The Strip", "Bellagio Fountains", "Grand Canyon", "Gambling"],
    duration: "6 days",
    bestFor: "Pure chaos~",
    avgCost: "₹1L–2L",
    visited: false,
    itinerary: "Day 1- Arrive in Vegas and immediately realise you should NOT BE HERE without your gf unless you're having a bachelor trip in which case i would allow but no SIDE CHICKS OR STRIPPERS OR HMPH. Check into the hotel and spend the evening walking along The Strip (just walking along not watching anything you asshole). Watch the Bellagio Fountain show, explore the fake Eiffel Tower, the fake Venice and the fake New York because you need something to attract people to gamblin.\nDay 2- Hotel hopping day. Every hotel is basically an attraction. Explore Caesars Palace (dont pull a Hangover but you can pull a you spin my head right round right round), The Venetian, Paris Las Vegas and Luxor. Visit the Sphere at night because bro that thing literally looks like a giant planet floating in the city. End the evening watching the city light up.\nDay 3- Grand Canyon day trip. Whether by bus, helicopter or tour, this is mandatory. Spend the day staring into one of the most ridiculous geological formations on Earth.\nDay 4- Area15 day. It's basically what happens when artists and engineers decide to start doing drugs together (bro my chatgpt is sometimes hilarious). Explore Omega Mart (i've heard about this quite a lot its really on my bucket list so like TAKE ME WITH YOU YOU CHEATER), weird interactive exhibits and random futuristic nonsense. Afterwards head to Fremont Street. The entire ceiling lights up, there's live music everywhere and somehow the chaos level becomes even higher than The Strip. \nDay 5- Gamble.\nOverall synopsis- Vegas is basically sensory overload. Yeah like sin city for a reason bitch TAKE ME WITH YOU BABY.",
    howToGetThere: "1) Fly from Delhi to Las Vegas. Usually involves a layover and around 20+ hours of travel.\n\n2) Fly into Los Angeles and do a Vegas road trip if you're feeling adventurous.\n\n3) Once in Vegas, walking and Uber are honestly enough for most attractions."
  },
  {
    id: 13,
    name: "Thailand",
    region: "Asia",
    tag: "Ladyboy Arc",
    description: "Beautiful beaches, island hopping, amazing food and somehow cheaper than some domestic trips. Mostly cos you have to pay in other ways",
    image: "https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?w=900&q=80",
    highlights: ["Bangkok", "Ladyboy", "Krabi", "Phuket", "Elephant Sanctuary"],
    duration: "9 days",
    bestFor: "Food, beaches & Ladyboy~",
    avgCost: "₹50,000–1L",
    visited: false,

    itinerary: "Day 1- Arrive in Bangkok and Visit Wat Arun, Wat Pho and the Grand Palace, whatever shit that is or maybe don't visit cos I bet u jus want Ladyboy. End the evening exploring the night markets and trying random food you've never heard of.\nDay 2- Explore Bangkok properly. Visit floating markets, take a boat ride through the canals and spend the evening in one of the rooftop cafés overlooking the city. This is also the day where we'll eat way more mango sticky rice than any reasonable person should.\nDay 3- Fly to Phuket. Spend the day chilling on the beach because after surviving Bangkok traffic you've earned it. Watch the sunset and pretend life is perfect while a Ladyboy is goin at you.\nDay 4- Phi Phi Islands day trip. Visit Maya Bay, the place from literally every Thailand wallpaper ever. Go snorkeling, island hopping, and spend most of the day wondering how the water is so blue.\nDay 5- Another island-hopping day because apparently Thailand looked at one beautiful island and said, 'What if we made 500 more?'. Explore lagoons, beaches and hidden coves.\nDay 6- Travel to Krabi. Visit Railay Beach, which is only accessible by boat and looks completely unreal. Spend the evening exploring the beach and watching the sunset.\nDay 7- Visit an ethical elephant sanctuary. Feed elephants, take photos and try not to become emotionally attached. Afterwards explore local cafés and markets around Krabi.\nDay 8- Adventure day. Go kayaking, snorkeling, scuba diving or just spend the entire day lying on a beach doing absolutely nothing. Both are valid life choices.\n\nDay 9- One final Thai breakfast, one final beach walk and then head back home while already checking flight prices for the next trip.\n\nOverall synopsis- Thailand is basically the perfect first international trip. Amazing food, beautiful beaches, friendly people, island adventures and somehow your wallet survives the experience. Also Ladyboy.",

    howToGetThere: "1) Direct flight from Delhi to Bangkok. Usually ₹15k-₹35k round trip.\n\n2) Domestic flights between Bangkok, Phuket and Krabi are cheap and save a lot of time.\n\n3) Ferries are used for most island-hopping adventures and honestly they're part of the experience."
  },

  {
    id: 14,
    name: "Bali, Indonesia",
    region: "Asia",
    tag: "Beach Arc",
    description: "Volcanoes, waterfalls, beaches, rice terraces and cafés.",
    image: "https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?w=900&q=80",
    highlights: ["Ubud", "Nusa Penida", "Mount Batur", "Kelingking Beach", "Rice Terraces"],
    duration: "10 days",
    bestFor: "Adventure + relaxation~",
    avgCost: "₹60,000–1.2L",
    visited: false,

    itinerary: "Day 1- Arrive in Bali and head straight to Ubud. Check into a villa surrounded by rice fields because if we're doing Bali we're doing it properly. Spend the evening exploring the town and finding a cute café.\nDay 2- Explore Ubud. Visit the Sacred Monkey Forest, walk through the Tegalalang Rice Terraces and try the famous Bali Swing. Spend the evening wandering around local markets and cafés.\nDay 3- Waterfall day WOO. Visit Tegenungan Waterfall and then head towards Tibumana and Kanto Lampo. Half the day will be spent taking photos and the other half will be spent trying not to slip on wet rocks.\nDay 4- Wake up at an ungodly hour and do the Mount Batur sunrise trek. The hike is pretty manageable and the sunrise from the top is absolutely worth it. Afterwards recover with food because we've earned it.\nDay 5- Nusa Penida day trip. Visit Kelingking Beach, Angel's Billabong and Broken Beach. Every viewpoint here looks fake. Like genuinely AI-generated levels of scenery.\nDay 6- Another Nusa Penida exploration day because rushing this island should be illegal. Go snorkeling if possible because the water visibility is insane.\nDay 7- Travel to Uluwatu. Visit Uluwatu Temple which sits dramatically on top of ocean cliffs. Stay for the Kecak Fire Dance during sunset because apparently Bali likes showing off.\nDay 8- Beach day. Explore Padang Padang Beach, Suluban Beach and other nearby spots. Spend the evening watching surfers attempt things that would absolutely kill me.\nDay 9- Head towards Seminyak and Canggu. Spend the day café hopping, beach hopping and pretending we're influencers. Watch one final Bali sunset.\n\nDay 10- One last smoothie bowl, one last rice field view and then head to the airport while wondering why normal life doesn't come with infinity pools.\nOverall synopsis- Bali somehow manages to be relaxing and adventurous at the same time. One day you're climbing a volcano before sunrise, the next you're floating in a pool overlooking rice terraces. It's basically the destination equivalent of saying 'yeah life is good right now'.",

    howToGetThere: "1) Flight from Delhi to Denpasar (usually with a layover). Around ₹30k-₹60k round trip.\n\n2) Rent a scooter if you're brave, or hire a driver if you value your survival.\n\n3) Ferries are used for trips to Nusa Penida and nearby islands."
  },
  {
    id: 15,
    name: "Kasol + Tosh, India",
    region: "North India",
    tag: "Fufu Arc",
    description: "The place you go when you have exactly enough money for a Volvo ticket, Maggi and bad financial decisions. Mountains, rivers, cafés and some of the chillest vibes you'll find near Delhi.",
    image: "https://images.unsplash.com/photo-1581791534721-e599df4417f7?w=900&q=80",
    highlights: ["Parvati River", "Tosh Village", "Chalal", "Manikaran"],
    duration: "3 days",
    bestFor: "Budget mountain getaway~",
    avgCost: "₹4,000–8,000",
    visited: false,

    itinerary: "Day 1- Take an overnight Volvo from Delhi and wake up to mountains. Check in to the hotel/hostel and Grab breakfast at one of the riverside cafés and then spend the day exploring Kasol itself. Walk along the Parvati River, browse through random little shops and just enjoy the vibe. In the afternoon take the easy walk to Chalal Village. It's only about 30 minutes and that's like nothing. Spend the evening café hopping and watching the river again.\nDay 2- Wake up early and head to Tosh. The drive itself is gorgeous and Tosh is honestly one of the prettiest villages in the valley. Walk through the village, explore the viewpoints and find a café with a balcony view of the mountains. Spend the afternoon wandering around the trails above the village because every random path somehow leads to an amazing view. Stay until sunset and then return to Kasol.\nDay 3- Visit Manikaran Sahib in the morning. The hot springs here are pretty famous but not good im pretty sure you'll just get to see half naked uncles if you're into that. Afterwards have one final riverside breakfast before boarding the return Volvo.\nOverall synopsis- Hmm not much to do, just chill vibes, unless you're into FuFu or treks, in which case its easy to find a trekking group and they plan everything so yaya.",

    howToGetThere: "1) Overnight Volvo from Delhi to Kasol. Around ₹1k-₹2k each way and honestly the easiest option.\n\n2) Self-drive via Chandigarh and Bhuntar. Around 11-12 hours and ₹4k-₹6k worth of petrol.\n\n3) Bus to Bhuntar and then a local taxi to Kasol.",
  },
  {
    id: 16,
    name: "Lansdowne, India",
    region: "North India",
    tag: "idrc anymore arc",
    description: "A tiny cantonment town in the hills where literally nothing happens. Hence why you should totally go.",
    image: "https://images.unsplash.com/photo-1606202801044-284067800cdf?w=900&q=80",
    highlights: ["Tip N Top", "Bhulla Tal", "St. Mary's Church", "Tarkeshwar Mahadev"],
    duration: "3 days",
    bestFor: "Doing absolutely nothing~",
    avgCost: "₹4,000–8,000",
    visited: false,

    itinerary: "Day 1- Leave Delhi early in the morning and Reach Lansdowne by afternoon cos its not that far, check into your stay, Have lunch and then head to Bhulla Tal, a small lake maintained by the army. Rent a paddle boat if you're feeling energetic or just sit by the water. In the evening head to Tip N Top for sunset. The Himalayan views on a clear day are niceee. Then eat sleep.\nDay 2- Wake up early for a sunrise at tip N top. or just sleep in your choice. Have breakfast and visit St. Mary's Church, one of the oldest buildings in town. Afterwards just wander around the pine-covered roads because honestly that's all that is here. In the afternoon drive to Tarkeshwar Mahadev Temple. Spend some time there before heading back to Lansdowne. End the evening watching the sunset or simply head back and end the trip, your choice.\nDay 3- Wake up early for one final walk through the forests. Grab breakfast at a local café and spend a little time exploring the market before starting the drive back to Delhi\nOverall synopsis- Lansdowne is close by, so it makes for a super chill trip in which you don't wanna do anything. Wouldn't recommend for solo travel, Kasol would be better because of the trek.",

    howToGetThere: "1) By car. Around 6-7 hours from Delhi and ₹2k-₹4k worth of petrol.\n\n2) Train to Kotdwar and then a taxi to Lansdowne. Usually around ₹1k-₹2k total.\n\n3) Bus to Kotdwar followed by a shared cab. Cheapest option and around ₹800-₹1.5k.",
  },
  {
    id: 17,
    name: "Kausani, India",
    region: "North India",
    tag: "Sunrise Arc",
    description: "A quiet little hill station that somehow got one of the best Himalayan views in India. I've been there can confirm",
    image: "https://images.unsplash.com/photo-1667029837725-420efe40d2b9?q=80&w=900",
    highlights: ["Anasakti Ashram", "Rudradhari Falls", "Baijnath Temple", "Tea Estates", "Pinnath Trek"],
    duration: "4 days",
    bestFor: "Views that'll make you shut up for a minute~",
    avgCost: "₹5,000–10,000",
    visited: false,

    itinerary: "Day 1- Leave Delhi early and begin the drive into Kumaon. The journey is long but the roads become prettier the closer you get. Reach Kausani by evening and immediately head to a viewpoint because sunset is kind of the whole point of being here. If the weather is clear you'll see massive Himalayan peaks glowing orange in the distance. Spend the evening drinking chai and pretending you're not already checking hotel prices for a second visit.\nDay 2- Wake up before sunrise. This is non-negotiable. The sunrise over Nanda Devi, Trishul and Panchachuli is what Kausani is famous for and honestly it's worth sacrificing sleep for. After breakfast visit Anasakti Ashram, where Gandhi once stayed. Then explore the local tea estates because apparently walking through endless tea gardens automatically improves your mood. Spend the evening finding the perfect spot to watch another sunset because the mountains somehow look different every time.\nDay 3- Adventure day. Head to Rudradhari Falls via the forest trail. The walk itself is beautiful and passes through terraced fields, forests and small villages. If we're feeling ambitious, attempt part of the Pinnath Trek for even better mountain views. This isn't a destination known for hardcore trekking, but there are enough trails around to justify touching grass. Return by evening and enjoy one final mountain sunset.\nDay 4- Visit Baijnath Temple in the morning, one of the oldest temple complexes in Uttarakhand. Walk around the riverside and explore the area before beginning the drive back to Delhi. Spend the journey trying to convince yourself that city life is worth returning to.\nOverall synopsis- Kausani feels like someone accidentally put a luxury Himalayan viewpoint in the middle of a sleepy little town. There aren't a hundred attractions fighting for your attention. The mountains are the attraction. It's the kind of place where you wake up early for sunrise, spend the day exploring forests and waterfalls and end every evening staring at snow-covered peaks while questioning your life choices. Also probably one of the best value-for-money mountain destinations near Delhi.",
    howToGetThere: "1) By car. Around 9-10 hours from Delhi and ₹4k-₹6k worth of petrol.\n\n2) Train to Kathgodam followed by a taxi/shared cab to Kausani. Around ₹1.5k-₹3k.\n\n3) Bus to Almora or Kausani and then local transport. Usually ₹1k-₹2k.",
  },
  {
    id: 18,
    name: "Munsiyari, India",
    region: "North India",
    tag: "climber arc",
    description: "A remote Himalayan town sitting right in front of the Panchachuli peaks.",
    image: "https://images.unsplash.com/photo-1683700916507-93d49889bacc?q=80&w=900",
    highlights: ["Khaliya Top", "Panchachuli Peaks", "Birthi Falls", "Thamri Kund", "Maheshwari Kund"],
    duration: "5 days",
    bestFor: "Mountains & trekking~",
    avgCost: "₹8,000–15,000",
    visited: false,

    itinerary: "Day 1- Leave Delhi early and begin the long journey into Kumaon. Reach Almora or Kausani by evening and stay overnight. The goal today is basically to survive the drive and get excited about the mountains.\nDay 2- Continue towards Munsiyari. The road gets prettier with every passing hour. Stop at Birthi Falls on the way and spend some time admiring one of the tallest waterfalls in Uttarakhand. Reach Munsiyari by evening and immediately head to a viewpoint. If the weather is clear you'll be greeted by the massive Panchachuli range standing right in front of you. Spend the evening with chai and mountain views because that's basically the official activity here.\nDay 3- Khaliya Top day WOO. Wake up early and start the trek. The trail passes through forests and alpine meadows before opening up to absolutely insane views of Panchachuli, Nanda Kot and surrounding peaks. Honestly one of the best view-to-effort ratios in Uttarakhand. Spend some time at the top before returning to Munsiyari. Your legs may hate you but your camera roll will not.\nDay 4- Explore the area around Munsiyari. Visit Darkot Village, a beautiful traditional Himalayan village known for its stone houses and handicrafts. Afterwards head to Thamri Kund, a peaceful alpine lake surrounded by forests. If time permits, visit Maheshwari Kund and spend the evening watching the sunset over the Panchachuli peaks.\nDay 5- Wake up early for one final sunrise because Munsiyari does not believe in bad mountain views. Have breakfast and begin the journey back towards Delhi while wondering why all the best places are so far away.\nOverall synopsis- Munsiyari feels like the destination people discover after they've already done Nainital, Mussoorie and Shimla. It's quieter, wilder and significantly more dramatic. The Panchachuli peaks dominate the entire landscape and Khaliya Top alone makes the journey worth it. If Chitkul is the pretty village and Harsil is the peaceful valley, Munsiyari is the place you go when you want to feel genuinely surrounded by the Himalayas.",

    howToGetThere: "1) By car. Delhi → Almora/Kausani → Munsiyari. Around 14-16 hours total, usually split over two days. ₹5k-₹8k worth of petrol.\n\n2) Train to Kathgodam followed by shared taxis and buses. Around ₹2k-₹4k.\n\n3) Bus to Almora or Pithoragarh and then local transport to Munsiyari. Cheapest option but takes the longest.",
  }
];
// ─── CHECKED OFF (visited places) ────────────────────────────────────────────
// CHECKED_OFF / EXPLORE_LIST and their filter options are now derived live
// inside the App component (see below), since marking a place "visited"
// needs to move it between the two lists at runtime.

// ─── POKÉMON TYPE COLORS per region ──────────────────────────────────────────
const TYPE_COLORS = {
  Asia:          { bg: "#4fc3f7", dark: "#0277bd", light: "#e1f5fe", type: "Water" },
  Europe:        { bg: "#ce93d8", dark: "#6a1b9a", light: "#f3e5f5", type: "Psychic" },
  "South India":         { bg: "#ffb74d", dark: "#e65100", light: "#fff3e0", type: "Fire" },
  "North India":        { bg: "#a5d6a7", dark: "#1b5e20", light: "#e8f5e9", type: "Grass" },
  "South America": { bg: "#f48fb1", dark: "#880e4f", light: "#fce4ec", type: "Fairy" },
  "North America": { bg: "#fff176", dark: "#f57f17", light: "#fffde7", type: "Electric" },
  default:       { bg: "#bcaaa4", dark: "#3e2723", light: "#efebe9", type: "Normal" },
};

function getType(region) {
  return TYPE_COLORS[region] || TYPE_COLORS.default;
}

// ─── PLACEHOLDER IMAGE (used when a manually-added destination has no photo) ─
const PLACEHOLDER_IMAGE = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23bcaaa4'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='%233e2723' text-anchor='middle' dominant-baseline='middle' font-family='sans-serif'%3ENo photo yet%3C/text%3E%3C/svg%3E`;

// ─── HALFTONE DOT PATTERN (SVG data URI) ─────────────────────────────────────
const halftone = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12'%3E%3Ccircle cx='6' cy='6' r='2' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E")`;

// ─── BACKGROUND TEXTURE (user-uploaded cracked map/web texture) ────────────
const BG_IMAGE = "data:image/jpeg;base64,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";

// ─── STARTER-TYPE ICONS (electric / water / grass) ───────────────────────────
// Stand-ins for Pikachu, Squirtle & Bulbasaur — original shapes, not the
// copyrighted character art, but coded to each one's color & element.
function IconBolt({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" fill="#fff176" stroke="#1a1a1a" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function IconLeaf({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M21 3C21 3 19 3 15 5 9 8 5 12 4 19c0 0 5 1 10-3 5-4 7-9 7-13Z" fill="#a5d6a7" stroke="#1a1a1a" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M5 18C8 14 12 11 17 7" stroke="#1a1a1a" strokeWidth="1.2" />
    </svg>
  );
}
function IconPlus({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#90caf9" stroke="#1a1a1a" strokeWidth="1.5" />
      <path d="M12 7v10M7 12h10" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

// ─── EMPTY ADD-DESTINATION FORM SHAPE ────────────────────────────────────────
const EMPTY_ADD_FORM = {
  name: "", region: "", tag: "", description: "", image: "",
  highlights: "", duration: "", bestFor: "", avgCost: "",
  itinerary: "", howToGetThere: "",
};

// ─── helpers to convert between DB row shape and app shape ───────────────────
function rowToApp(row) {
  return {
    id: row.id,
    name: row.name,
    region: row.region,
    tag: row.tag,
    description: row.description,
    image: row.image,
    highlights: Array.isArray(row.highlights) ? row.highlights : [],
    duration: row.duration,
    bestFor: row.best_for,
    avgCost: row.avg_cost,
    visited: row.visited,
    itinerary: row.itinerary,
    howToGetThere: row.how_to_get_there,
  };
}

function appToRow(dest) {
  return {
    id: dest.id,
    name: dest.name,
    region: dest.region,
    tag: dest.tag,
    description: dest.description,
    image: dest.image,
    highlights: dest.highlights,
    duration: dest.duration,
    best_for: dest.bestFor,
    avg_cost: dest.avgCost,
    visited: dest.visited,
    itinerary: dest.itinerary,
    how_to_get_there: dest.howToGetThere,
  };
}

export default function App() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage]       = useState("home");
  const [selected, setSelected] = useState(null);
  const [regionFilter, setRegionFilter] = useState("All");
  const [durationFilter, setDurationFilter] = useState("All");
  const [checkedOffTab, setCheckedOffTab] = useState("entries");
  const [addForm, setAddForm] = useState(EMPTY_ADD_FORM);
  const [addError, setAddError] = useState("");

  // ── On mount: load from Supabase; seed from DESTINATIONS if table is empty ──
  useEffect(() => {
    async function load() {
      const { data, error } = await supabase
        .from("destinations")
        .select("*")
        .order("id");

      if (error) {
        console.error("Supabase load error:", error);
        setDestinations(DESTINATIONS);
        setLoading(false);
        return;
      }

      if (data && data.length > 0) {
        setDestinations(data.map(rowToApp));
      } else {
        // First ever load — seed the table with the hardcoded destinations
        const rows = DESTINATIONS.map(appToRow);
        const { error: insertError } = await supabase
          .from("destinations")
          .insert(rows);
        if (insertError) console.error("Seed error:", insertError);
        setDestinations(DESTINATIONS);
      }
      setLoading(false);
    }
    load();
  }, []);

  // Live-derived from `destinations` so marking something visited instantly
  // moves it from one list to the other.
  const exploreList = destinations.filter(d => !d.visited);
  const checkedOff = destinations.filter(d => d.visited);
  const exploreRegions = ["All", ...new Set(exploreList.map(d => d.region))];
  const exploreDurations = ["All", ...new Set(exploreList.map(d => d.duration))];

  async function markVisited(id) {
    setDestinations(prev => prev.map(d => (d.id === id ? { ...d, visited: true } : d)));
    await supabase.from("destinations").update({ visited: true }).eq("id", id);
  }

  async function markUnvisited(id) {
    setDestinations(prev => prev.map(d => (d.id === id ? { ...d, visited: false } : d)));
    await supabase.from("destinations").update({ visited: false }).eq("id", id);
  }

  function goHome() {
    setPage("home"); setSelected(null);
    setRegionFilter("All"); setDurationFilter("All"); setCheckedOffTab("entries");
    setAddForm(EMPTY_ADD_FORM); setAddError("");
  }

  function openDetail(dest) { setSelected(dest); setPage("detail"); }

  function updateAddField(field) {
    return e => setAddForm(prev => ({ ...prev, [field]: e.target.value }));
  }

  async function submitAddDestination(e) {
    e.preventDefault();
    const name = addForm.name.trim();
    const region = addForm.region.trim();
    if (!name || !region) {
      setAddError("A name and region are required — everything else is optional.");
      return;
    }
    const newDest = {
      id: Date.now(),
      name,
      region,
      tag: addForm.tag.trim() || "New find",
      description: addForm.description.trim() || "No description yet — but it's on the list!",
      image: addForm.image.trim() || PLACEHOLDER_IMAGE,
      highlights: addForm.highlights.split(",").map(h => h.trim()).filter(Boolean),
      duration: addForm.duration.trim() || "—",
      bestFor: addForm.bestFor.trim() || "—",
      avgCost: addForm.avgCost.trim() || "—",
      visited: false,
      itinerary: addForm.itinerary.trim() || "No itinerary added yet — plan it out once you're ready!",
      howToGetThere: addForm.howToGetThere.trim(),
    };
    const { error } = await supabase.from("destinations").insert([appToRow(newDest)]);
    if (error) { setAddError("Couldn't save — try again."); return; }
    setDestinations(prev => [...prev, newDest]);
    setAddForm(EMPTY_ADD_FORM);
    setAddError("");
    openDetail(newDest);
  }

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f5e6d3", fontFamily: "sans-serif" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>🕸️</div>
          <div style={{ fontWeight: 800, fontSize: "18px", color: "#c0392b" }}>Loading your PokéDex...</div>
        </div>
      </div>
    );
  }

  const bgStyle = {
    minHeight: "100vh",
    backgroundImage: `url("${BG_IMAGE}"), ${halftone}`,
    backgroundSize: "cover, auto",
    backgroundPosition: "center, center",
    backgroundBlendMode: "multiply",
    backgroundColor: "#f5e6d3",
    fontFamily: "'Segoe UI', system-ui, sans-serif",
  };

  return (
    <div style={bgStyle}>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes webswing { 0%,100%{transform:rotate(-3deg)} 50%{transform:rotate(3deg)} }
        .pokécard:hover { transform: translateY(-4px) rotate(0.5deg); box-shadow: 0 12px 32px rgba(0,0,0,0.25); }
        .pokécard { transition: transform 0.2s, box-shadow 0.2s; cursor: pointer; }
        .nav-btn:hover { background: rgba(255,255,255,0.25) !important; }
      `}</style>

      {/* ── SPIDER-MAN NAV ── */}
      <nav style={{
        background: "linear-gradient(135deg, #c0392b 0%, #e74c3c 40%, #2c3e50 100%)",
        borderBottom: "4px solid #1a1a1a",
        padding: "0 1.5rem",
        display: "flex", alignItems: "center", gap: "12px",
        boxShadow: "0 4px 0 #1a1a1a",
        position: "relative", overflow: "hidden",
      }}>
        {/* web line decoration */}
        <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0.12, pointerEvents: "none" }} viewBox="0 0 800 60">
          {[0,1,2,3,4,5,6,7].map(i => (
            <line key={i} x1={i*120} y1="0" x2={i*120+60} y2="60" stroke="white" strokeWidth="1.5"/>
          ))}
          {[0,1,2,3].map(i => (
            <line key={`h${i}`} x1="0" y1={i*20} x2="800" y2={i*20} stroke="white" strokeWidth="0.8"/>
          ))}
        </svg>

        <div onClick={goHome} style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", padding: "12px 0", zIndex: 1 }}>
          {/* Spider logo */}
          <svg width="34" height="34" viewBox="0 0 40 40" style={{ animation: "webswing 3s ease-in-out infinite" }}>
            <circle cx="20" cy="20" r="18" fill="#e74c3c" stroke="#1a1a1a" strokeWidth="2"/>
            <ellipse cx="20" cy="20" rx="7" ry="10" fill="#1a1a1a"/>
            <ellipse cx="20" cy="20" rx="3" ry="10" fill="#1a1a1a"/>
            <line x1="13" y1="14" x2="4" y2="10" stroke="#1a1a1a" strokeWidth="2"/>
            <line x1="13" y1="20" x2="3" y2="20" stroke="#1a1a1a" strokeWidth="2"/>
            <line x1="13" y1="26" x2="4" y2="30" stroke="#1a1a1a" strokeWidth="2"/>
            <line x1="27" y1="14" x2="36" y2="10" stroke="#1a1a1a" strokeWidth="2"/>
            <line x1="27" y1="20" x2="37" y2="20" stroke="#1a1a1a" strokeWidth="2"/>
            <line x1="27" y1="26" x2="36" y2="30" stroke="#1a1a1a" strokeWidth="2"/>
          </svg>
          <div>
            <div style={{ color: "white", fontWeight: 700, fontSize: "18px", letterSpacing: "1px", textShadow: "2px 2px 0 #1a1a1a", lineHeight: 1 }}>PokeDex</div>
            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "10px", letterSpacing: "2px" }}>GOTTA VISIT 'EM ALL!</div>
          </div>
        </div>

        {page !== "home" && (
          <button className="nav-btn" onClick={goHome} style={{
            marginLeft: "8px", background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.4)",
            color: "white", borderRadius: "20px", padding: "5px 14px", fontSize: "13px",
            cursor: "pointer", fontWeight: 500, zIndex: 1,
          }}>← Back</button>
        )}
      </nav>

      {/* ── HOME ── */}
      {page === "home" && (
        <div style={{ maxWidth: "480px", margin: "0 auto", padding: "3rem 1.5rem", textAlign: "center" }}>
          {/* Comic title box — now web-slinger themed */}
          <div style={{
            position: "relative", overflow: "hidden",
            background: "#c0392b", border: "4px solid #1a1a1a", borderRadius: "12px",
            padding: "1.5rem 2rem", marginBottom: "2rem",
            boxShadow: "5px 5px 0 #1a1a1a",
            backgroundImage: halftone,
          }}>
            {/* radiating spiderweb overlay */}
            <svg viewBox="0 0 400 220" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.35, pointerEvents: "none" }} preserveAspectRatio="xMidYMid slice">
              <line x1="200" y1="110" x2="420" y2="110" stroke="#1a1a1a" strokeWidth="1.5" />
              <line x1="200" y1="110" x2="356" y2="266" stroke="#1a1a1a" strokeWidth="1.5" />
              <line x1="200" y1="110" x2="200" y2="330" stroke="#1a1a1a" strokeWidth="1.5" />
              <line x1="200" y1="110" x2="44" y2="266" stroke="#1a1a1a" strokeWidth="1.5" />
              <line x1="200" y1="110" x2="-20" y2="110" stroke="#1a1a1a" strokeWidth="1.5" />
              <line x1="200" y1="110" x2="44" y2="-46" stroke="#1a1a1a" strokeWidth="1.5" />
              <line x1="200" y1="110" x2="200" y2="-110" stroke="#1a1a1a" strokeWidth="1.5" />
              <line x1="200" y1="110" x2="356" y2="-46" stroke="#1a1a1a" strokeWidth="1.5" />
              <circle cx="200" cy="110" r="40" fill="none" stroke="#1a1a1a" strokeWidth="1" />
              <circle cx="200" cy="110" r="75" fill="none" stroke="#1a1a1a" strokeWidth="1" />
              <circle cx="200" cy="110" r="110" fill="none" stroke="#1a1a1a" strokeWidth="1" />
            </svg>

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "2px", color: "#fff176", marginBottom: "8px" }}>🕸️ FRIENDLY NEIGHBORHOOD EDITION 🕸️</div>
              <h1 style={{ fontSize: "26px", fontWeight: 900, margin: "0 0 8px", color: "white", letterSpacing: "-0.3px", lineHeight: 1.25, textShadow: "2px 2px 0 rgba(0,0,0,0.35)" }}>"With great power comes great responsibility."</h1>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.9)", margin: 0, lineHeight: 1.6, fontWeight: 600 }}>Pick the next region you want to conquer</p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              { quote: "I choose you!", attribution: "Ash, prolly", sub: "Look for a destination", Icon: IconBolt, target: "explore", color: "#fdd835", shadow: "#c9a700", text: "#1a1a1a" },
              { quote: "Take charge of your destiny.", attribution: "Rayquaza", sub: "Add a destination", Icon: IconPlus, target: "add", color: "#2980b9", shadow: "#1a5276", text: "white" },
              { quote: "Pika pipi pikachu!", attribution: "Pikachu", sub: "Already visited", Icon: IconLeaf, target: "checkedoff", color: "#27ae60", shadow: "#1a7a40", text: "white" },
            ].map(btn => (
              <button key={btn.target} onClick={() => setPage(btn.target)} style={{
                background: btn.color, border: "3px solid #1a1a1a", borderRadius: "10px",
                padding: "14px 18px", color: btn.text,
                cursor: "pointer", display: "flex", alignItems: "center", gap: "14px",
                boxShadow: `4px 4px 0 ${btn.shadow}`,
                textAlign: "left",
                transition: "transform 0.1s, box-shadow 0.1s",
              }}
                onMouseDown={e => e.currentTarget.style.cssText += "transform:translate(2px,2px);box-shadow:2px 2px 0 " + btn.shadow}
                onMouseUp={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = `4px 4px 0 ${btn.shadow}`; }}
              >
                <span style={{ flexShrink: 0, display: "inline-flex", background: "rgba(255,255,255,0.9)", borderRadius: "50%", padding: "6px" }}>
                  <btn.Icon size={22} />
                </span>
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ display: "block", fontSize: "15px", fontWeight: 800, lineHeight: 1.3 }}>
                    “{btn.quote}”
                    {btn.attribution && <span style={{ fontWeight: 500, fontStyle: "italic", opacity: 0.75, fontSize: "11.5px" }}> — {btn.attribution}</span>}
                  </span>
                  <span style={{ display: "block", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", opacity: 0.7, marginTop: "3px" }}>{btn.sub}</span>
                </span>
                <span style={{ marginLeft: "auto", opacity: 0.7, flexShrink: 0 }}>→</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── EXPLORE & CHECKED OFF (shared card grid) ── */}
      {(page === "explore" || page === "checkedoff") && (
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "2rem 1.5rem" }}>
          {/* Comic panel header */}
          <div style={{
            background: "#c0392b",
            border: "3px solid #1a1a1a", borderRadius: "10px",
            padding: "10px 20px", marginBottom: "1.5rem", display: "inline-flex", alignItems: "center", gap: "8px",
            boxShadow: "4px 4px 0 #1a1a1a",
          }}>
            {page === "explore" ? <IconBolt size={18} /> : <IconLeaf size={18} />}
            <h2 style={{ margin: 0, color: "white", fontSize: "18px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "1px", textShadow: "2px 2px 0 rgba(0,0,0,0.3)" }}>
              {page === "explore" ? "Destinations" : "Checked Off"}
            </h2>
          </div>

          {/* Check entries / Add entry toggle — only on the checked-off tab */}
          {page === "checkedoff" && (
            <div style={{ display: "flex", gap: "10px", marginBottom: "1.5rem" }}>
              {[
                { key: "entries", label: "Check entries" },
                { key: "add", label: "Add entry" },
              ].map(tab => {
                const active = checkedOffTab === tab.key;
                return (
                  <button key={tab.key} onClick={() => setCheckedOffTab(tab.key)} style={{
                    border: "3px solid #1a1a1a", borderRadius: "10px", padding: "9px 18px",
                    fontWeight: 800, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.5px",
                    cursor: "pointer",
                    background: active ? "#27ae60" : "white",
                    color: active ? "white" : "#444",
                    boxShadow: active ? "3px 3px 0 #1a7a40" : "3px 3px 0 #1a1a1a",
                  }}>{tab.label}</button>
                );
              })}
            </div>
          )}

          {/* Filters — only on the explore tab */}
          {page === "explore" && (
            <div style={{ background: "white", border: "2.5px solid #1a1a1a", borderRadius: "10px", padding: "12px 14px", marginBottom: "1.5rem", boxShadow: "3px 3px 0 #1a1a1a" }}>
              <div style={{ fontSize: "10px", fontWeight: 900, letterSpacing: "1px", color: "#888", textTransform: "uppercase", marginBottom: "8px" }}>Regions</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
                {exploreRegions.map(r => {
                  const t = r === "All" ? null : getType(r);
                  const active = regionFilter === r;
                  return (
                    <button key={r} onClick={() => setRegionFilter(r)} style={{
                      border: "2px solid #1a1a1a", borderRadius: "16px", padding: "5px 12px",
                      fontSize: "12px", fontWeight: 700, cursor: "pointer",
                      background: active ? (t ? t.bg : "#1a1a1a") : "white",
                      color: active ? (t ? t.dark : "white") : "#444",
                    }}>{r}</button>
                  );
                })}
              </div>
              <div style={{ fontSize: "10px", fontWeight: 900, letterSpacing: "1px", color: "#888", textTransform: "uppercase", marginBottom: "8px" }}>Number of days</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {exploreDurations.map(d => {
                  const active = durationFilter === d;
                  return (
                    <button key={d} onClick={() => setDurationFilter(d)} style={{
                      border: "2px solid #1a1a1a", borderRadius: "16px", padding: "5px 12px",
                      fontSize: "12px", fontWeight: 700, cursor: "pointer",
                      background: active ? "#1a1a1a" : "white",
                      color: active ? "white" : "#444",
                    }}>{d}</button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Add-entry list: pick any unvisited destination to mark as visited */}
          {page === "checkedoff" && checkedOffTab === "add" && (
            exploreList.length === 0 ? (
              <div style={{ background: "white", border: "3px solid #1a1a1a", borderRadius: "12px", padding: "3rem", textAlign: "center", boxShadow: "4px 4px 0 #1a1a1a" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}><IconLeaf size={36} /></div>
                <div style={{ fontWeight: 700, fontSize: "16px" }}>You've conquered every region — nothing left to add!</div>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {exploreList.map(dest => {
                  const t = getType(dest.region);
                  return (
                    <div key={dest.id} style={{
                      background: "white", border: "2.5px solid #1a1a1a", borderRadius: "10px",
                      padding: "10px 14px", display: "flex", alignItems: "center", gap: "12px",
                      boxShadow: "3px 3px 0 #1a1a1a",
                    }}>
                      <img src={dest.image} alt={dest.name} style={{ width: "56px", height: "56px", borderRadius: "8px", objectFit: "cover", border: "2px solid #1a1a1a", flexShrink: 0 }} />
                      <div style={{ flex: 1, minWidth: 0, textAlign: "left" }}>
                        <div style={{ fontWeight: 800, fontSize: "14px", color: "#1a1a1a" }}>{dest.name}</div>
                        <div style={{ fontSize: "11px", fontWeight: 700, color: t.dark }}>{dest.region} · {dest.tag}</div>
                      </div>
                      <button onClick={() => markVisited(dest.id)} style={{
                        flexShrink: 0, background: "#27ae60", border: "2px solid #1a1a1a", borderRadius: "8px",
                        padding: "8px 12px", color: "white", fontWeight: 800, fontSize: "12px", cursor: "pointer",
                        display: "flex", alignItems: "center", gap: "6px", textTransform: "uppercase",
                        boxShadow: "2px 2px 0 #1a7a40",
                      }}>
                        <IconLeaf size={14} /> Mark visited
                      </button>
                    </div>
                  );
                })}
              </div>
            )
          )}

          {/* Card grid: explore destinations, or already-checked-off entries */}
          {!(page === "checkedoff" && checkedOffTab === "add") && (() => {
            const list = page === "explore"
              ? exploreList.filter(d =>
                  (regionFilter === "All" || d.region === regionFilter) &&
                  (durationFilter === "All" || d.duration === durationFilter))
              : checkedOff;
            return list.length === 0 ? (
              <div style={{ background: "white", border: "3px solid #1a1a1a", borderRadius: "12px", padding: "3rem", textAlign: "center", boxShadow: "4px 4px 0 #1a1a1a" }}>
                <div style={{ fontSize: "40px", marginBottom: "12px" }}>
                  {page === "checkedoff" ? "🕸️" : <span style={{ display: "inline-flex" }}><IconBolt size={36} /></span>}
                </div>
                <div style={{ fontWeight: 700, fontSize: "16px" }}>{page === "checkedoff" ? "No adventures checked off yet!" : "No destinations match those filters!"}</div>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.25rem" }}>
                {list.map(dest => (
                  <PokéCard
                    key={dest.id}
                    dest={dest}
                    onClick={() => openDetail(dest)}
                    visited={dest.visited}
                    onVisitAgain={page === "checkedoff" ? () => markUnvisited(dest.id) : null}
                  />
                ))}
              </div>
            );
          })()}
        </div>
      )}

      {/* ── DETAIL ── */}
      {page === "detail" && selected && (
        <DetailView dest={selected} />
      )}

      {/* ── ADD ── */}
      {page === "add" && (
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "2rem 1.5rem" }}>
          <form onSubmit={submitAddDestination} style={{ background: "white", border: "3px solid #1a1a1a", borderRadius: "14px", padding: "1.75rem", boxShadow: "5px 5px 0 #1a1a1a", backgroundImage: halftone }}>
            <div style={{ background: "#2980b9", border: "2px solid #1a1a1a", borderRadius: "8px", padding: "8px 16px", display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "1rem", boxShadow: "3px 3px 0 #1a1a1a" }}>
              <IconPlus size={16} />
              <span style={{ color: "white", fontWeight: 900, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", textShadow: "1px 1px 0 rgba(0,0,0,0.3)" }}>New Destination</span>
            </div>
            <p style={{ fontSize: "14px", color: "#444", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Add a place you want to visit. Name and region are required — fill in as much else as you like.</p>

            <Field label="Name *">
              <input value={addForm.name} onChange={updateAddField("name")} placeholder="e.g. Pallet Town, Cerulean City" style={fieldInputStyle} />
            </Field>

            <Field label="Region *">
              <input value={addForm.region} onChange={updateAddField("region")} placeholder="e.g. Kanto, Sinnoh" style={fieldInputStyle} />
            </Field>

            <Field label="Tagline">
              <input value={addForm.tag} onChange={updateAddField("tag")} placeholder="e.g. Horror vibes" style={fieldInputStyle} />
            </Field>

            <Field label="Description">
              <textarea value={addForm.description} onChange={updateAddField("description")} placeholder="What makes this place worth visiting?" style={fieldTextareaStyle} />
            </Field>

            <Field label="Image URL">
              <input value={addForm.image} onChange={updateAddField("image")} placeholder="https://…" style={fieldInputStyle} />
            </Field>

            <Field label="Highlights (comma-separated)">
              <input value={addForm.highlights} onChange={updateAddField("highlights")} placeholder="e.g. Battle stadium, Gym" style={fieldInputStyle} />
            </Field>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
              <Field label="Duration">
                <input value={addForm.duration} onChange={updateAddField("duration")} placeholder="e.g. 4 days" style={fieldInputStyle} />
              </Field>
              <Field label="Best for">
                <input value={addForm.bestFor} onChange={updateAddField("bestFor")} placeholder="e.g. Architecture lovers" style={fieldInputStyle} />
              </Field>
            </div>

            <Field label="Average cost">
              <input value={addForm.avgCost} onChange={updateAddField("avgCost")} placeholder="e.g. ₹40,000–60,000" style={fieldInputStyle} />
            </Field>

            <Field label="Itinerary">
              <textarea value={addForm.itinerary} onChange={updateAddField("itinerary")} placeholder={"Day 1 — …\nDay 2 — …"} style={{ ...fieldTextareaStyle, minHeight: "110px" }} />
            </Field>

            <Field label="How to get there">
              <textarea value={addForm.howToGetThere} onChange={updateAddField("howToGetThere")} placeholder="e.g. 1) Fly into… 2) Train from…" style={fieldTextareaStyle} />
            </Field>

            {addError && (
              <div style={{ marginBottom: "14px", padding: "10px 14px", background: "#fde8e8", border: "2px solid #e74c3c", borderRadius: "8px", fontSize: "13px", color: "#922b21", fontWeight: 500 }}>{addError}</div>
            )}

            <button
              type="submit"
              style={{
                width: "100%", padding: "13px", borderRadius: "8px",
                background: "#2980b9",
                border: "2.5px solid #1a1a1a", color: "white", fontSize: "15px",
                fontWeight: 700, cursor: "pointer",
                textTransform: "uppercase", letterSpacing: "1px",
                boxShadow: "3px 3px 0 #1a5276",
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
              }}
            >
              <IconPlus size={16} /> Add destination
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

// ─── ADD-FORM FIELD WRAPPER & SHARED STYLES ──────────────────────────────────
const fieldInputStyle = { width: "100%", padding: "10px 12px", borderRadius: "8px", border: "2px solid #1a1a1a", fontSize: "14px", boxSizing: "border-box", marginBottom: 0, fontWeight: 500, background: "#fffde7", color: "#1a1a1a", colorScheme: "light", fontFamily: "inherit" };
const fieldTextareaStyle = { ...fieldInputStyle, resize: "vertical", minHeight: "70px", lineHeight: 1.6 };

function Field({ label, children }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <label style={{ display: "block", fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.5px", color: "#666", marginBottom: "6px" }}>{label}</label>
      {children}
    </div>
  );
}

// ─── POKÉMON CARD COMPONENT ───────────────────────────────────────────────────
function PokéCard({ dest, onClick, visited, onVisitAgain }) {
  const t = getType(dest.region);
  return (
    <div className="pokécard" onClick={onClick} style={{
      background: `linear-gradient(160deg, ${t.light} 0%, white 60%)`,
      border: "3px solid #1a1a1a", borderRadius: "16px",
      overflow: "hidden", boxShadow: "4px 4px 0 #1a1a1a",
      position: "relative",
    }}>
      {/* Card top color band */}
      <div style={{ background: t.bg, padding: "6px 10px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid #1a1a1a" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, color: t.dark, textTransform: "uppercase", letterSpacing: "0.5px" }}>{dest.region}</span>
        <span style={{ background: t.dark, color: "white", fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "10px", textTransform: "uppercase" }}>{t.type}</span>
      </div>

      {/* Image */}
      <div style={{ position: "relative", borderBottom: "2px solid #1a1a1a" }}>
        <img src={dest.image} alt={dest.name} style={{ width: "100%", height: "160px", objectFit: "cover", display: "block" }} />
        {/* Pokémon card shine overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%)", pointerEvents: "none" }} />
        {visited && (
          <div style={{
            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%) rotate(-15deg)",
            background: "rgba(39,174,96,0.92)", border: "3px solid #1a1a1a", borderRadius: "8px",
            padding: "6px 16px", color: "white", fontWeight: 900, fontSize: "20px",
            textTransform: "uppercase", letterSpacing: "2px", textShadow: "1px 1px 0 #1a1a1a",
            boxShadow: "3px 3px 0 #1a1a1a",
          }}>VISITED!</div>
        )}
      </div>

      {/* Card body */}
      <div style={{ padding: "10px 12px 12px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
          <span style={{ fontWeight: 900, fontSize: "15px", color: "#1a1a1a", lineHeight: 1.2 }}>{dest.name}</span>
          <span style={{ fontSize: "10px", fontWeight: 700, background: t.bg, color: t.dark, padding: "2px 7px", borderRadius: "8px", border: `1px solid ${t.dark}`, whiteSpace: "nowrap", marginLeft: "6px" }}>{dest.tag}</span>
        </div>
        <p style={{ fontSize: "12px", color: "#444", lineHeight: 1.5, margin: "0 0 10px" }}>{dest.description}</p>

        {/* Stats bar like a Pokémon card */}
        <div style={{ borderTop: "1.5px solid #ddd", paddingTop: "8px", display: "flex", justifyContent: "space-between", fontSize: "11px" }}>
          <span style={{ color: "#666" }}>⏱ {dest.duration}</span>
          <span style={{ color: "#666" }}>🎯 {dest.bestFor}</span>
        </div>

        {visited && onVisitAgain && (
          <button onClick={e => { e.stopPropagation(); onVisitAgain(); }} style={{
            marginTop: "10px", width: "100%", background: "#e67e22", border: "2px solid #1a1a1a", borderRadius: "8px",
            padding: "8px 12px", color: "white", fontWeight: 800, fontSize: "12px", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", textTransform: "uppercase",
            boxShadow: "2px 2px 0 #a04000",
          }}>
            <IconBolt size={14} /> Visit again
          </button>
        )}
      </div>
    </div>
  );
}

// ─── DETAIL VIEW ──────────────────────────────────────────────────────────────
function DetailView({ dest }) {
  const t = getType(dest.region);
  return (
    <div style={{ maxWidth: "820px", margin: "0 auto", padding: "2rem 1.5rem" }}>
      {/* Big Pokémon card style detail */}
      <div style={{
        background: `linear-gradient(160deg, ${t.light} 0%, white 50%)`,
        border: "4px solid #1a1a1a", borderRadius: "20px",
        overflow: "hidden", boxShadow: "6px 6px 0 #1a1a1a",
      }}>
        {/* Top band */}
        <div style={{ background: t.bg, padding: "10px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "3px solid #1a1a1a" }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: "22px", color: t.dark, textShadow: "1px 1px 0 rgba(255,255,255,0.5)", letterSpacing: "-0.3px" }}>{dest.name}</div>
            <div style={{ fontSize: "12px", color: t.dark, opacity: 0.8, fontWeight: 600 }}>{dest.region} · {dest.tag}</div>
          </div>
          <div style={{ background: t.dark, color: "white", fontWeight: 900, fontSize: "12px", padding: "4px 12px", borderRadius: "12px", border: "2px solid #1a1a1a", textTransform: "uppercase" }}>{t.type} type</div>
        </div>

        {/* Hero image */}
        <div style={{ position: "relative", borderBottom: "3px solid #1a1a1a" }}>
          <img src={dest.image} alt={dest.name} style={{ width: "100%", height: "280px", objectFit: "cover", display: "block" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)", pointerEvents: "none" }} />
          {dest.visited && (
            <div style={{
              position: "absolute", top: "20px", right: "20px",
              background: "#27ae60", border: "3px solid #1a1a1a", borderRadius: "10px",
              padding: "6px 16px", color: "white", fontWeight: 900, fontSize: "16px",
              textTransform: "uppercase", letterSpacing: "2px", transform: "rotate(3deg)",
              boxShadow: "3px 3px 0 #1a1a1a",
            }}>✓ VISITED</div>
          )}
        </div>

        {/* Body */}
        <div style={{ padding: "1.5rem", display: "grid", gridTemplateColumns: "1fr 220px", gap: "1.5rem" }}>
          {/* Left */}
          <div>
            {/* About */}
            <div style={{ background: "white", border: "2px solid #1a1a1a", borderRadius: "10px", padding: "1rem", marginBottom: "1rem", boxShadow: "3px 3px 0 #1a1a1a" }}>
              <div style={{ fontWeight: 900, fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: t.dark, marginBottom: "8px" }}>Pokédex entry</div>
              <p style={{ fontSize: "14px", lineHeight: 1.7, margin: 0, color: "#222" }}>{dest.description}</p>
            </div>

            {/* Itinerary */}
            <div style={{ background: "white", border: "2px solid #1a1a1a", borderRadius: "10px", padding: "1rem", marginBottom: "1rem", boxShadow: "3px 3px 0 #1a1a1a" }}>
              <div style={{ fontWeight: 900, fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: t.dark, marginBottom: "12px" }}>Adventure log</div>
              <div style={{ fontSize: "14px", lineHeight: 1.85, whiteSpace: "pre-wrap", color: "#222" }}>{dest.itinerary}</div>
            </div>
          </div>

          {/* Right — stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {/* Quick stats */}
            <div style={{ background: "white", border: "2px solid #1a1a1a", borderRadius: "10px", padding: "1rem", boxShadow: "3px 3px 0 #1a1a1a" }}>
              <div style={{ fontWeight: 900, fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: t.dark, marginBottom: "10px" }}>Stats</div>
              {[
                ["Duration", dest.duration],
                ["Best for", dest.bestFor],
                ["Avg cost", dest.avgCost],
              ].map(([label, val], i, arr) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: i < arr.length - 1 ? "1px solid #eee" : "none", fontSize: "13px" }}>
                  <span style={{ color: "#666", fontWeight: 500 }}>{label}</span>
                  <span style={{ fontWeight: 700, color: "#1a1a1a", textAlign: "right", maxWidth: "110px" }}>{val}</span>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div style={{ background: "white", border: "2px solid #1a1a1a", borderRadius: "10px", padding: "1rem", boxShadow: "3px 3px 0 #1a1a1a" }}>
              <div style={{ fontWeight: 900, fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: t.dark, marginBottom: "10px" }}>Top moves</div>
              {dest.highlights.map((h, i) => (
                <div key={i} style={{ fontSize: "13px", padding: "6px 0", borderBottom: i < dest.highlights.length - 1 ? "1px solid #eee" : "none", display: "flex", alignItems: "center", gap: "8px", fontWeight: 500 }}>
                  <span style={{ background: t.bg, color: t.dark, fontSize: "10px", fontWeight: 700, padding: "1px 6px", borderRadius: "6px" }}>#{i + 1}</span>
                  {h}
                </div>
              ))}
            </div>

            {/* Journey */}
            {dest.howToGetThere && (
              <div style={{ background: "white", border: "2px solid #1a1a1a", borderRadius: "10px", padding: "1rem", boxShadow: "3px 3px 0 #1a1a1a" }}>
                <div style={{ fontWeight: 900, fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: t.dark, marginBottom: "10px" }}>Journey</div>
                <p style={{ fontSize: "13px", lineHeight: 1.6, margin: 0, color: "#222" }}>{dest.howToGetThere}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
