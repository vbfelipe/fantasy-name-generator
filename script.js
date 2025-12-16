// MECHANICS

const syllables = {
  start: [
    "Ae","Aea","Ael","Aela","Aer","Aeri","Aeth","Aeva","Aez","Ain","Aira","Aith",
    "Eli","Ela","Elar","Elen","Ery","Etha","Ezir","Eron","Esha",
    "Ili","Iria","Ithil","Ira","Isha","Ixer","Izan",
    "Lia","Lysa","Lyra","Lyr","Lun","Leth",
    "Myra","Myr","Mora","Mira",
    "Nae","Naer","Nira","Nyth","Nox","Nyra",
    "Sael","Saela","Syl","Syra","Sira","Seth",
    "Thael","Thaela","Thir","Thorn","Thyra",
    "Vael","Vaela","Var","Vyr","Vash",
    "Ysa","Ylith","Yra","Yven","Ymir",
    "Al","Ald","Ar","Arn","Ash","Aver","Amon",
    "Bel","Ber","Bryn","Bal","Baal",
    "Cal","Ced","Cor","Cyr","Cald",
    "Dar","Dain","Dor","Drek","Drav","Dusk",
    "Ed","Eld","Ern","Ebon",
    "Fen","Fa","Fyr","Fell",
    "Gal","Gald","Grim","Gor","Grak","Gral",
    "Hal","Hed","Hir","Hath",
    "Is","Ish","Kel","Kern","Kael","Kha","Khaz",
    "Lar","Leor","Lor","Lorn",
    "Mal","Mar","Mor","Mord","Myrk",
    "Na","Nor","Ner","Nox",
    "Or","Orth","Oth","Orel",
    "Per","Ral","Rald","Rav","Rhaz",
    "Sar","Ser","Skal","Skarn","Sorn",
    "Tal","Tor","Thal","Tzar",
    "Ul","Ur","Ura","Urix",
    "Val","Var","Vor","Vorn",
    "Wil","Wern","Wyr",
    "Xan","Xor","Xyr",
    "Zae","Zael","Zar","Zarn","Zor","Zyra",
    "Avar","Avra","Axel","Brynth","Cael","Cyran","Dely","Dorn","Erynd","Fyn",
    "Glyr","Hav","Ithar","Jor","Kaelth","Klyr","Lur","Myn","Niv","Oryn",
    "Phael","Quen","Ryn","Selyn","Thy","Ulric","Vey","Wyn","Xyran","Yvel",
    "Zy","Zer","Alar","Belth","Caly","Draen","Elyr","Fynar","Gryth","Hyl",
    "Ivor","Jhael","Kry","Lareth","Myth","Nerth","Olyn","Pyr","Quar","Rhael",
    "Soryn","Thar","Ulv","Veyr","Wyra","Xal","Yth","Zyric",
    "Aelthor","Branth","Calith","Doryn","Elythar","Fyral","Glythar","Hyrn","Ithyl","Joryn",
    "Kryal","Lythor","Moryn","Nythar","Olyth","Pyral","Qoryn","Rynth","Saryth","Tyral",
    "Ulyth","Voryn","Wyral","Xoryn","Ylithar","Zoryn","Althar","Brynor","Calyn","Daryth",
    "Elvar","Foryn","Glyar","Horyn","Ivar","Jyn","Koryth","Lyral","Moryth","Noryn",
    "Oryth","Pyrn","Qyra","Rynal","Soryth","Tyn","Uryl","Varyth","Wyrnith","Xyral",
    "Yryth","Zaryth","Alyr","Baryth","Coryn","Daryth","Elyra","Fyrn","Goryth","Hyral",
    "Iryn","Joryth","Kyral","Loryn","Myraen","Noryth","Olyra","Pryth","Qoryth","Rynar",
    "Syral","Toryn","Ulyra","Vyrn","Woryth","Xyra","Yloryn","Zyraen"
  ],

  middle: [
    "a","ae","ai","e","ea","ei","i","ia","io","o","oa","oe","ou","u","ui","ya","yi",
    "l","r","n","m","s","t","k","v","z","x",
    "al","am","an","ar","ath","el","em","en","er","eth",
    "il","im","in","ir","ith",
    "ol","om","on","or","oth",
    "ul","um","un","ur","uth",
    "dra","dri","drath","gra","gri","grim","kra","kri","krath",
    "sha","shi","shar","tha","thi","thar","zra","zri",
    "ven","val","var","vyr",
    "mor","myn","myr",
    "rax","reth","zor","zeth",
    "aei","eia","ioe","uae",
    "yra","ythe","ryn","ly","thil","mir","varn","dor","rynth","ethil",
    "aelth","ion","iel","oril","iryn","uly","othil","irath","ylen","elith",
    "oryn","irith","uthal","yraen","alith","othar","elyn","iath","olyn","yser",
    "ithar","uril","orin","ythal","enor","uvar","aeth","evar","ioth","aeryn",
    "ylor","emir","ynor","ovar","alor","ivor","ythen","elir","orin","aril",
    "ynith","thar","evarn","orith","ylith","uvarn","arion","ionth","alyth","omir",
    "urath","ilorn","alyn","yther","emoth","oryth","ivarn","urith","ylorn","aral",
    "ioneth","othil","uriel","ylar","enith","ovaril","ithral","alythar","orya","emyr",
    "urathil","ilyth","orynth","alyra","evaril","ithal","oryra","ulith","orythar","elion"
  ],

  end: [
    "a","ae","ael","aeth","ain","al","an","ar","ath","eth",
    "iel","ien","ion","ir","is","ith",
    "lyn","lith","lor","lorn",
    "mir","mor","morn",
    "wyn","wyr","ys",
    "dor","drin","dun","gorn","grim","gash",
    "helm","kar","krath",
    "lor","mon","nar","or","oth",
    "rion","ron","reth",
    "tor","thar","thos",
    "var","vash","vorn",
    "xar","xeth","xion",
    "zair","zor","zoth","zryn",
    "doom","shade","void","bane",
    "aeris","alyth","arion","avyr","bryn","cyn","draen","elith","fyrn","goryn",
    "hym","ithor","jorn","kael","lyth","myrn","nyr","oryn","pyth","qyr",
    "ryth","syth","thir","uryn","vyrn","wyrn","xalith","yvar","zaryn","zyth",
    "alorn","bryth","cyra","daryn","elys","fyrion","gyth","hyr","ioryn","jaryn",
    "koryn","lyra","myth","nyth","orya","pyra","qyth","rya","syra","tyn",
    "uriel","voryn","wyrith","xyr","yraen","zoryn","azeth","brith","caryth","dyrn",
    "elyth","faryn","goryth","hyrn","ilyth","joryn","kyr","lythar","myrion","nyl",
    "oryth","pythar","qyrn","rythar","sythil","tyr","urith","vory","wyrnith","xyral",
    "azor","bryal","cyth","doryth","elyra","fyrnal","gyl","hyral","ioryth","jyn",
    "kyth","lyral","myrth","nyral","orythar","pyral","qyrth","rynal","sythar","tyl",
    "uryn","voryth","wyrnal","xyrith","yral","zoryth","alyra","brynar","coryth","daryra",
    "elythar","fyrnith","gorynth","hyralith","ilyra","jorythar","korynth","lyralith","myrion","nyralith"
  ]
};

// REALM STATE
let currentRealm = "human";

// REALM FILTERS 
const realmFilters = {
   human: s =>
    !/(ae|ea|io|ia|th|eth|ion|x|y|z|q|kr|gr|dr|mor|nox)/i.test(s) &&
    /(n|r|l|s|d|t)$/i.test(s) &&
    s.length <= 4,
    elf: s => /ae|el|li|th|y|ia|io|ea/i.test(s),
    dark: s => /x|z|q|kr|gr|dr|th|mor|nox/i.test(s),
    random: () => true
};

// REALM GENERATION RULES
const realmRules = {
    human: {
        min: 4,
        max: 6,
        middleChance: 0.3,
        secondMiddleChance: 0
    },
    elf: {
        min: 5,
        max: 8,
        middleChance: 0.8,
        secondMiddleChance: 0.25
    },
    dark: {
        min: 5,
        max: 8,
        middleChance: 0.65,
        secondMiddleChance: 0.4
    },
    random: {
        min: 5,
        max: 8,
        middleChance: 0.6,
        secondMiddleChance: 0.2
    }
};

// ENDING BIAS 
const endBias = {
    human: s => /n|r|l|s$/i.test(s),
    elf: s => /a|iel|ion|ith|yn$/i.test(s),
    dark: s => /th|x|z|r|n|g|k$/i.test(s),
    random: () => true
};

// HELPERS
function rand(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRealmSyllables(type) {
    const filter = realmFilters[type] || realmFilters.random;
    const endFilter = endBias[type] || endBias.random;

    return {
        start: syllables.start.filter(filter),
        middle: syllables.middle.filter(filter),
        end: syllables.end.filter(s => filter(s) && endFilter(s))
    };
}

// GENERATOR
function generateName() {
    const pool = getRealmSyllables(currentRealm);
    const rules = realmRules[currentRealm];

    if (!pool.start.length || !pool.end.length) {
        return "Error";
    }

    let name = rand(pool.start);

    if (Math.random() < rules.middleChance && pool.middle.length) {
        name += rand(pool.middle);
    }

    if (Math.random() < rules.secondMiddleChance && pool.middle.length) {
        name += rand(pool.middle);
    }

    name += rand(pool.end);

    name = name[0].toUpperCase() + name.slice(1);

    if (/[aeiou]{3,}/i.test(name)) return generateName();
    if (name.length < rules.min || name.length > rules.max) return generateName();

    return name;
}

document.addEventListener("DOMContentLoaded", () => {
    const realmButtons = document.querySelectorAll(".realm-btn");
    const generateBtn = document.getElementById("generateBtn");
    const output = document.getElementById("name");

    // --- REALM SELECTION ---
    realmButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            realmButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            currentRealm = btn.dataset.realm;
        });
    });

    // --- APPLY DEFAULT REALM COLOR ON LOAD (HUMAN) ---
    const defaultBtn = document.querySelector(".realm-btn.active");
    if (defaultBtn) {
        const glow = getComputedStyle(defaultBtn).getPropertyValue("--glow");
        output.style.setProperty("--glow", glow);
    }

    // --- GENERATE NAME (THIS is when color updates) ---
    generateBtn.addEventListener("click", () => {
        const name = generateName();
        output.textContent = name;

        const activeBtn = document.querySelector(".realm-btn.active");
        if (activeBtn) {
            const glow = getComputedStyle(activeBtn).getPropertyValue("--glow");
            output.style.setProperty("--glow", glow);
        }
    });
});
