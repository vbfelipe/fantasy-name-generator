// DATA
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
    "Zae","Zael","Zar","Zarn","Zor","Zyra"
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
    "aei","eia","ioe","uae"
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
    "doom","shade","void","bane"
  ]
};

// HELPER
function rand(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// GENERATOR
function generateName() {
    let name = rand(syllables.start);

    if (Math.random() > 0.5) {
        name += rand(syllables.middle);
    }

    // rare second middle
    if (Math.random() > 0.85) {
        name += rand(syllables.middle);
    }

    name += rand(syllables.end);

    // Capitalize
    name = name[0].toUpperCase() + name.slice(1);

    // kill vowel explosions
    if (/[aeiou]{3,}/i.test(name)) {
        return generateName();
    }

    // keep names readable
    if (name.length < 5 || name.length > 8) {
        return generateName();
    }

    return name;
}

// UI LOGIC
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("generateBtn");
    const output = document.getElementById("name");

    btn.addEventListener("click", () => {
        output.textContent = generateName();
    });
});
