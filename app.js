/* ================= Helfer ================= */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const LS={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const eur=n=>Number(n).toLocaleString('de-DE',{style:'currency',currency:'EUR'});
const fmtNum=n=>Number(n).toLocaleString('de-DE',{maximumFractionDigits:2});
const clone=o=>JSON.parse(JSON.stringify(o));
const clr=(c,d)=>c&&c.startsWith('#')?c:d;
const okUrl=u=>typeof u==='string'&&(u.startsWith('http://')||u.startsWith('https://')||u.startsWith('data:image/'));

/* ================= Icons (SVG) ================= */
const S=(p,f='none')=>`<svg class="i" viewBox="0 0 24 24" fill="${f}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const HEART='<path d="M12 20.5s-7.5-4.6-9.5-9.4A5.3 5.3 0 0 1 12 6.4a5.3 5.3 0 0 1 9.5 4.7c-2 4.8-9.5 9.4-9.5 9.4z"/>';
const IC={
 search:S('<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/>'),
 cart:S('<path d="M3 4h2l2.4 11.2a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L20 8H6.2"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/>'),
 user:S('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/>'),
 heart:S(HEART),heartf:S(HEART,'currentColor'),
 box:S('<path d="M21 8l-9-5-9 5v8l9 5 9-5V8z"/><path d="M3 8l9 5 9-5M12 13v8"/>'),
 check:S('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
 x:S('<path d="M6 6l12 12M18 6L6 18"/>'),
 truck:S('<path d="M2 6h11v10H2zM13 9h4l3 3v4h-7"/><circle cx="6.5" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/>'),
 shield:S('<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>'),
 undo:S('<path d="M4 5v5h5"/><path d="M4.5 10A8 8 0 1 1 6 16"/>'),
 support:S('<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M4 14h3v5H5.5A1.5 1.5 0 0 1 4 17.5V14zM20 14h-3v5h1.5a1.5 1.5 0 0 0 1.5-1.5V14z"/>'),
 bolt:S('<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>'),
 tag:S('<path d="M3 12V4h8l10 10-8 8L3 12z"/><circle cx="7.5" cy="8.5" r="1.2"/>'),
 swap:S('<path d="M4 8h14l-3-3M20 16H6l3 3"/>'),
 trash:S('<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>'),
 edit:S('<path d="M4 20h4L19 9l-4-4L4 16v4z"/>'),
 plus:S('<path d="M12 5v14M5 12h14"/>'),
 up:S('<path d="M6 15l6-6 6 6"/>'),down:S('<path d="M6 9l6 6 6-6"/>'),
 left:S('<path d="M15 5l-7 7 7 7"/>'),right:S('<path d="M9 5l7 7-7 7"/>'),
 copy:S('<rect x="9" y="9" width="11" height="11" rx="1.5"/><path d="M5 15V5a1 1 0 0 1 1-1h10"/>'),
 mail:S('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>'),
 logout:S('<path d="M9 4H5v16h4M16 8l4 4-4 4M20 12H9"/>'),
 download:S('<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>'),
 upload:S('<path d="M12 16V5M7 9l5-5 5 5M5 20h14"/>'),
 arrow:S('<path d="M5 12h14M13 6l6 6-6 6"/>')
};
const EMERALD='<svg class="emg" viewBox="0 0 16 16" aria-hidden="true"><polygon points="8,1 13,4 13,12 8,15 3,12 3,4" fill="#22d965" stroke="#0a7a38" stroke-width="1.1" stroke-linejoin="round"/><polygon points="8,1 13,4 8,7 3,4" fill="#8bfcb8"/><polygon points="8,7 13,4 13,12 8,15" fill="#12a84d"/></svg>';
const BOX_BIG=IC.box.replace('stroke-width="1.8"','stroke-width="1"');
$$('[data-ic]').forEach(e=>{e.innerHTML=IC[e.dataset.ic]||''});
$('#artMc').innerHTML=EMERALD;$('#artIrl').innerHTML=BOX_BIG;

/* ================= Firebase Config ================= */
const firebaseConfig = {
  apiKey: "AIzaSyDtfD97Kz9izndoNi8Es5ryt98Uk4fdB_M",
  authDomain: "mejtzon.firebaseapp.com",
  projectId: "mejtzon",
  storageBucket: "mejtzon.firebasestorage.app",
  messagingSenderId: "311504769027",
  appId: "1:311504769027:web:bbe3bfc56479cc90337e36",
  measurementId: "G-ZRRJJYE58J"
};

let CLOUD=!String(firebaseConfig.apiKey).startsWith("DEIN_");
let db,auth,fs,au;
if(CLOUD){
  try{
    const V="10.12.2",B="https://www.gstatic.com/firebasejs/"+V+"/";
    const [appM,fsM,auM]=await Promise.all([import(B+"firebase-app.js"),import(B+"firebase-firestore.js"),import(B+"firebase-auth.js")]);
    const app=appM.initializeApp(firebaseConfig);
    db=fsM.getFirestore(app);auth=auM.getAuth(app);fs=fsM;au=auM;
  }catch(e){console.error(e);CLOUD=false}
}

/* ================= Standard-Daten & Grafiken ================= */
const GL={
 sword:'<g transform="rotate(45 100 100)"><rect x="92" y="16" width="16" height="108" rx="3" fill="#fff"/><rect x="96" y="22" width="5" height="96" fill="#000" fill-opacity=".12"/><rect x="64" y="124" width="72" height="12" rx="3" fill="#9a6a33"/><rect x="94" y="136" width="12" height="36" rx="3" fill="#6b4220"/><circle cx="100" cy="176" r="8" fill="#9a6a33"/></g>',
 pick:'<g transform="rotate(35 100 100)"><rect x="95" y="44" width="10" height="130" rx="3" fill="#9a6a33"/><path d="M26 74 Q100 8 174 74 L162 88 Q100 38 38 88 Z" fill="#fff"/></g>',
 bow:'<path d="M72 20 Q158 100 72 180" stroke="#9a6a33" stroke-width="10" fill="none" stroke-linecap="round"/><path d="M72 20 L72 180" stroke="#fff" stroke-width="3"/><path d="M72 100 H168 M156 90 L170 100 156 110" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
 armor:'<path d="M48 40 L80 28 Q100 44 120 28 L152 40 L174 82 L148 98 L148 172 H52 V98 L26 82 Z" fill="#fff"/><path d="M80 28 Q100 54 120 28" stroke="#000" stroke-opacity=".22" stroke-width="6" fill="none"/><rect x="84" y="96" width="32" height="10" rx="2" fill="#000" fill-opacity=".14"/>',
 apple:'<circle cx="100" cy="116" r="56" fill="#fff"/><path d="M100 62 Q104 40 124 34" stroke="#6b4220" stroke-width="8" fill="none" stroke-linecap="round"/><ellipse cx="130" cy="42" rx="18" ry="8" transform="rotate(-25 130 42)" fill="#86efac"/><ellipse cx="80" cy="100" rx="10" ry="16" transform="rotate(25 80 100)" fill="#000" fill-opacity=".1"/>',
 cube:'<polygon points="100,22 170,62 100,102 30,62" fill="#fff"/><polygon points="30,62 100,102 100,178 30,138" fill="#fff" fill-opacity=".72"/><polygon points="170,62 100,102 100,178 170,138" fill="#fff" fill-opacity=".48"/>',
 beacon:'<rect x="90" y="8" width="20" height="70" fill="#fff" fill-opacity=".45"/><polygon points="100,70 160,100 100,130 40,100" fill="#fff"/><polygon points="40,100 100,130 100,178 40,148" fill="#fff" fill-opacity=".7"/><polygon points="160,100 100,130 100,178 160,148" fill="#fff" fill-opacity=".45"/>',
 bottle:'<rect x="84" y="22" width="32" height="30" rx="4" fill="#fff"/><path d="M84 52 H116 L152 128 Q160 174 100 178 Q40 174 48 128 Z" fill="#fff" fill-opacity=".92"/><path d="M60 128 H140 Q142 162 100 166 Q58 162 60 128Z" fill="#000" fill-opacity=".25"/>',
 wings:'<path d="M98 36 Q16 28 22 112 Q40 92 56 124 Q60 102 80 134 Q86 92 98 36Z" fill="#fff"/><path d="M102 36 Q184 28 178 112 Q160 92 144 124 Q140 102 120 134 Q114 92 102 36Z" fill="#fff" fill-opacity=".85"/>',
 totem:'<path d="M100 20 L170 50 V110 Q170 162 100 184 Q30 162 30 110 V50 Z" fill="#fff"/><circle cx="74" cy="88" r="10" fill="#000" fill-opacity=".35"/><circle cx="126" cy="88" r="10" fill="#000" fill-opacity=".35"/><path d="M72 130 Q100 150 128 130" stroke="#000" stroke-opacity=".35" stroke-width="9" fill="none" stroke-linecap="round"/>'
};
const mcImg=(k,c1,c2)=>'data:image/svg+xml;utf8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs><rect width="200" height="200" fill="url(#g)"/><g opacity=".12" stroke="#fff"><path d="M0 50h200M0 100h200M0 150h200M50 0v200M100 0v200M150 0v200"/></g>${GL[k]}</svg>`);
const mc2=(k,a,b)=>[mcImg(k,a,b),mcImg(k,b,a)];
const FALLBACK="data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="#eef0f0"/><text x="200" y="215" font-size="22" text-anchor="middle" fill="#8a9090" font-family="Arial">Kein Bild</text></svg>');
const safeUrl=u=>okUrl(u)?u:FALLBACK;

const img=s=>`https://picsum.photos/seed/${s}/600/600`;
const IRL_DEF=[
 {id:1,name:"Kabellose Bluetooth Kopfhörer mit Noise Cancelling",price:59.99,old:89.99,cat:"Elektronik",images:[img("headphone1"),img("headphone2")],desc:"Starker Klang, 30 Stunden Akkulaufzeit und aktive Geräuschunterdrückung. Perfekt für unterwegs.",rating:4.6,reviews:1284,stock:25,prime:true,t:1},
 {id:2,name:"Smartwatch Fitness-Tracker mit Herzfrequenz",price:39.9,old:69.9,cat:"Elektronik",images:[img("watch1"),img("watch2")],desc:"Schrittzähler, Schlafüberwachung, Wasserdicht IP68 und mehr.",rating:4.3,reviews:856,stock:8,prime:true,t:2},
 {id:3,name:"Edelstahl Trinkflasche 750ml isoliert",price:17.5,old:null,cat:"Haushalt",images:[img("bottle1"),img("bottle2")],desc:"Hält Getränke 24h kalt oder 12h heiß. BPA-frei und auslaufsicher.",rating:4.8,reviews:432,stock:60,prime:true,t:3},
 {id:4,name:"Gaming Maus RGB 7200 DPI",price:24.99,old:34.99,cat:"Gaming",images:[img("mouse1"),img("mouse2")],desc:"Ergonomisches Design mit 7 programmierbaren Tasten und RGB-Beleuchtung.",rating:4.4,reviews:2210,stock:40,prime:false,t:4},
 {id:5,name:"Mechanische Tastatur mit Blue Switches",price:49.0,old:64.0,cat:"Gaming",images:[img("keyboard1"),img("keyboard2")],desc:"Taktiles Tippgefühl, RGB-Hintergrundbeleuchtung, robustes Metallgehäuse.",rating:4.5,reviews:975,stock:3,prime:true,t:5},
 {id:6,name:"Rucksack wasserdicht 30L mit USB-Port",price:29.95,old:44.95,cat:"Mode",images:[img("backpack1"),img("backpack2")],desc:"Viel Platz, Laptopfach bis 15,6 Zoll und integrierter USB-Ladeanschluss.",rating:4.7,reviews:3120,stock:33,prime:true,t:6},
 {id:7,name:"LED Schreibtischlampe dimmbar",price:21.99,old:null,cat:"Haushalt",images:[img("lamp1"),img("lamp2")],desc:"Augenschonendes Licht, 5 Helligkeitsstufen und 3 Farbmodi.",rating:4.2,reviews:310,stock:19,prime:false,t:7},
 {id:8,name:"Sneaker Herren Freizeit Sportschuhe",price:44.9,old:79.9,cat:"Mode",images:[img("shoe1"),img("shoe2")],desc:"Atmungsaktiv, leicht und bequem, für jeden Tag.",rating:4.1,reviews:598,stock:14,prime:true,t:8},
 {id:9,name:"Tragbarer Bluetooth Lautsprecher",price:32.0,old:49.0,cat:"Elektronik",images:[img("speaker1"),img("speaker2")],desc:"Kraftvoller 360° Sound, wasserfest und 15 Stunden Spielzeit.",rating:4.5,reviews:1745,stock:27,prime:true,t:9},
 {id:10,name:"Yoga-Matte rutschfest extra dick",price:19.99,old:null,cat:"Sport",images:[img("yoga1"),img("yoga2")],desc:"Umweltfreundliches Material, 8mm dick, inklusive Tragegurt.",rating:4.6,reviews:812,stock:50,prime:false,t:10},
 {id:11,name:"Kaffeemaschine Filter 1,5L mit Timer",price:36.5,old:54.9,cat:"Haushalt",images:[img("coffee1"),img("coffee2")],desc:"Programmierbarer Timer, Warmhaltefunktion und Tropfstopp.",rating:4.4,reviews:421,stock:11,prime:true,t:11},
 {id:12,name:"Hantel Set verstellbar 20kg",price:69.0,old:99.0,cat:"Sport",images:[img("dumbbell1"),img("dumbbell2")],desc:"Verstellbares Hantelset für Training zu Hause. Inklusive Koffer.",rating:4.7,reviews:267,stock:6,prime:true,t:12}
].map(p=>({...p,shop:'irl'}));

const MC_DEF=[
 {id:'mc1',name:'Diamantschwert (Schärfe V)',price:24,old:32,cat:'Ausrüstung',images:mc2('sword','#0e7490','#22d3ee'),desc:'Verzaubert mit Schärfe V, Plünderung III und Haltbarkeit III. Sofort einsatzbereit.',rating:4.8,reviews:214,stock:15,prime:true,t:110},
 {id:'mc2',name:'Netherit-Rüstung (Komplettset)',price:96,old:120,cat:'Ausrüstung',images:mc2('armor','#1f1b2e','#6d28d9'),desc:'Voller Schutz IV auf allen Teilen, dazu Haltbarkeit III und Reparatur.',rating:4.9,reviews:98,stock:4,prime:true,t:109},
 {id:'mc3',name:'Elytra mit Reparatur',price:64,old:null,cat:'Spezial',images:mc2('wings','#312e81','#818cf8'),desc:'Flügel zum Gleiten, verzaubert mit Haltbarkeit III und Reparatur.',rating:4.7,reviews:176,stock:6,prime:true,t:108},
 {id:'mc4',name:'Totem der Unsterblichkeit',price:32,old:40,cat:'Spezial',images:mc2('totem','#854d0e','#facc15'),desc:'Rettet dich vor dem Tod. Ein Totem pro Stück.',rating:4.9,reviews:402,stock:12,prime:true,t:107},
 {id:'mc5',name:'Verzauberter Goldener Apfel',price:18,old:null,cat:'Essen',images:mc2('apple','#a16207','#fde047'),desc:'Starke Regeneration, Absorption und Feuerresistenz.',rating:4.8,reviews:321,stock:20,prime:true,t:106},
 {id:'mc6',name:'Diamantspitzhacke (Effizienz V)',price:28,old:35,cat:'Werkzeuge',images:mc2('pick','#0f766e','#2dd4bf'),desc:'Effizienz V, Haltbarkeit III, Glück III und Reparatur.',rating:4.7,reviews:255,stock:9,prime:true,t:105},
 {id:'mc7',name:'Leuchtfeuer (Beacon)',price:48,old:null,cat:'Blöcke',images:mc2('beacon','#0c4a6e','#38bdf8'),desc:'Fertig aufgebaut mit Pyramide, bereit zum Aufstellen.',rating:4.6,reviews:64,stock:5,prime:true,t:104},
 {id:'mc8',name:'Shulkerkiste',price:22,old:null,cat:'Blöcke',images:mc2('cube','#581c87','#c084fc'),desc:'Tragbarer Stauraum, der seinen Inhalt behält.',rating:4.8,reviews:289,stock:18,prime:false,t:103},
 {id:'mc9',name:'Trank der Schnelligkeit (8er-Set)',price:12,old:16,cat:'Tränke',images:mc2('bottle','#075985','#7dd3fc'),desc:'Acht Tränke, jeweils 8 Minuten Geschwindigkeit II.',rating:4.5,reviews:143,stock:40,prime:false,t:102},
 {id:'mc10',name:'Bogen (Stärke V, Unendlichkeit)',price:20,old:null,cat:'Ausrüstung',images:mc2('bow','#7c2d12','#fb923c'),desc:'Stärke V, Schlag II, Flamme und Unendlichkeit, dazu ein Pfeil.',rating:4.6,reviews:187,stock:11,prime:true,t:101}
].map(p=>({...p,shop:'mc'}));
const DEFAULTS=[...IRL_DEF,...MC_DEF];

const defSettings=s=>s==='mc'?{
 slides:[
  {title:'Willkommen im MEJT Minecraft Shop',text:'Ausrüstung, Spezialitems und mehr. Bezahle ganz einfach mit Emeralds.',btn:'Jetzt stöbern',cat:'all',c1:'#052e16',c2:'#15803d',bg:'',img:''},
  {title:'Netherit und Diamant',text:'Die stärkste Ausrüstung für deine nächste Expedition.',btn:'Zur Ausrüstung',cat:'Ausrüstung',c1:'#0f172a',c2:'#0e7490',bg:'',img:''},
  {title:'Täglich neue Angebote',text:'Spare Emeralds mit unseren aktuellen Deals.',btn:'Angebote ansehen',cat:'__deals',c1:'#3b1d08',c2:'#c2410c',bg:'',img:''}
 ],
 ticker:['Lieferung direkt an deine Koordinaten','Bezahlung in Emeralds bei Übergabe','Täglich neue Angebote','Seltene Items auf Lager'],
 cats:[]
}:{
 slides:[
  {title:'Willkommen im MEJT Shop',text:'Entdecke Top-Produkte zu fairen Preisen. Schnell, sicher und einfach.',btn:'Jetzt stöbern',cat:'all',c1:'#232f3e',c2:'#c77a00',bg:'',img:''},
  {title:'Elektronik-Highlights',text:'Kopfhörer, Smartwatches und mehr, bis zu 40% reduziert.',btn:'Zu den Deals',cat:'Elektronik',c1:'#0f2027',c2:'#2c5364',bg:'',img:''},
  {title:'Neu: Zuhause & Style',text:'Frische Ideen für dein Zuhause und deinen Alltag.',btn:'Entdecken',cat:'Haushalt',c1:'#42275a',c2:'#a8456b',bg:'',img:''}
 ],
 ticker:['Gratis Versand ab 29 €','Blitzangebote täglich','Neukunden: Rabatt mit Code MEJT10','Sicher bezahlen','Über 10 zufriedene Kunden'],
 cats:[]
};

const FEAT={
 irl:[['truck','Schneller Versand','In 1–3 Tagen bei dir'],['shield','Sicher bezahlen','Geschützte Zahlung'],['undo','0 Tage Rückgabe','Kostenlos & einfach'],['support','Top Support','Wir sind für dich da']],
 mc:[['truck','Schnelle Lieferung','Direkt an deine Koordinaten'],['shield','Faire Preise','Transparent in Emeralds'],['check','Zuverlässig','Sauber abgewickelt'],['support','Support','Wir sind für dich da']]
};
const SHOPS={mc:{short:'Minecraft',name:'Minecraft Shop'},irl:{short:'IRL',name:'IRL Shop'}};

/* ================= Zustand ================= */
let SHOP=null,products=[],stored={mc:null,irl:null};
let carts=LS.get('mejt_carts',{});if(!carts.mc)carts.mc={};if(!carts.irl)carts.irl={};
let cart={},wish=LS.get('mejt_wish',[]).map(String),cat='all',query='',sortBy='feat',started=false,wishView=false;
let admin=false;
let orders=[],ordFilter='open',ordShop='all',unsubOrders=null,ordFirst=true;
let user=null,pendingCheckout=false,openAdminAfter=false,authMode='in';
let aShop='all',editShop='mc',draft=null,homeDirty=false;
const hash=s=>{let h=5381;for(const c of s)h=((h<<5)+h+c.charCodeAt(0))>>>0;return h.toString(36)};
let creds=LS.get('mejt_creds',{u:'admin',h:hash('admin123')});
if(!CLOUD)admin=sessionStorage.getItem('mejt_admin')==='1';

const money=(n,s=SHOP)=>s==='mc'?`<span class="em">${fmtNum(n)} ${EMERALD}</span>`:eur(n);
const normalize=l=>l.map(p=>({...p,id:String(p.id),shop:p.shop==='mc'?'mc':'irl',images:Array.isArray(p.images)?p.images:[]}));
const sp=()=>products.filter(p=>p.shop===SHOP);
const cats=(s=SHOP)=>[...new Set(products.filter(p=>p.shop===s).map(p=>p.cat).filter(Boolean))];
const saveCart=()=>LS.set('mejt_carts',carts);
const saveWish=()=>LS.set('mejt_wish',wish);
const saveProducts=()=>LS.set('mejt_products',products);
const pdata=p=>{const {id,...d}=p;return d};
function getSet(s){const d=defSettings(s),o=stored[s]||{};return{slides:Array.isArray(o.slides)?o.slides:d.slides,ticker:Array.isArray(o.ticker)?o.ticker:d.ticker,cats:Array.isArray(o.cats)?o.cats:d.cats}}

/* ================= Daten laden ================= */
async function loadProducts(){
  if(CLOUD){
    await new Promise(res=>{
      fs.onSnapshot(fs.collection(db,'products'),snap=>{
        products=normalize(snap.docs.map(d=>({...d.data(),id:d.id}))).sort((a,b)=>(b.t||0)-(a.t||0));
        if(started){initLanding();if(SHOP){refresh();renderCart();updateBadges()}if($('#adminOv').classList.contains('show'))renderAdminRows()}
        res();
      },err=>{console.error(err);toast('Datenbank-Fehler: '+(err.code||err.message));products=normalize(DEFAULTS);res()});
    });
    return;
  }
  const saved=LS.get('mejt_products',null);
  if(saved){products=normalize(saved);if(!products.some(p=>p.shop==='mc')){products=products.concat(normalize(MC_DEF));saveProducts()}return}
  try{const r=await fetch('products.json',{cache:'no-store'});if(r.ok){const j=await r.json();if(Array.isArray(j)&&j.length){products=normalize(j);return}}}catch(e){}
  products=normalize(clone(DEFAULTS));
}
async function dbSave(p){if(CLOUD)await fs.setDoc(fs.doc(db,'products',String(p.id)),pdata(p));else saveProducts()}
async function dbDelete(id){if(CLOUD)await fs.deleteDoc(fs.doc(db,'products',String(id)));else{products=products.filter(p=>p.id!=id);saveProducts()}}
async function dbSeed(){
  const list=normalize(clone(DEFAULTS));
  if(!CLOUD){list.forEach(d=>{if(!products.some(p=>p.id===d.id))products.push(d)});saveProducts();return}
  for(let i=0;i<list.length;i+=400){const b=fs.writeBatch(db);list.slice(i,i+400).forEach(p=>b.set(fs.doc(db,'products',p.id),pdata(p)));await b.commit()}
}
async function dbReplaceAll(list){
  if(!CLOUD){products=list;saveProducts();return}
  const snap=await fs.getDocs(fs.collection(db,'products')),ops=[];
  snap.forEach(d=>{if(!list.some(p=>String(p.id)===d.id))ops.push(b=>b.delete(d.ref))});
  list.forEach(p=>ops.push(b=>b.set(fs.doc(db,'products',String(p.id)),pdata(p))));
  for(let i=0;i<ops.length;i+=400){const b=fs.writeBatch(db);ops.slice(i,i+400).forEach(o=>o(b));await b.commit()}
}
async function loadSettings(){
  if(!CLOUD){const l=LS.get('mejt_settings',{});stored.mc=l.mc||null;stored.irl=l.irl||null;return}
  await Promise.all(['mc','irl'].map(s=>new Promise(res=>{
    let first=true;
    fs.onSnapshot(fs.doc(db,'settings',s),snap=>{
      stored[s]=snap.exists()?snap.data():null;
      if(started&&SHOP===s){renderHero();renderTicker();renderCatCards()}
      if(first){first=false;res()}
    },err=>{if(first){first=false;res()}});
  })));
}
async function dbSaveSettings(s,d){
  if(CLOUD)await fs.setDoc(fs.doc(db,'settings',s),d);
  else LS.set('mejt_settings',{...{mc:stored.mc,irl:stored.irl},[s]:d});
  stored[s]=d;
}
async function createOrder(order){
  if(CLOUD){await fs.setDoc(fs.doc(fs.collection(db,'orders')),order)}
  else{orders.unshift({...order,id:String(Date.now())});LS.set('mejt_orders',orders)}
}
async function setOrderStatus(o,status){
  const delta=(o.status!=='shipped'&&status==='shipped')?-1:(o.status==='shipped'&&status!=='shipped')?1:0;
  if(!CLOUD){
    o.status=status;
    if(delta)(o.items||[]).forEach(it=>{const p=products.find(x=>x.id==it.id);if(p)p.stock=Math.max(0,p.stock+delta*it.qty)});
    LS.set('mejt_orders',orders);saveProducts();return;
  }
  const b=fs.writeBatch(db);
  b.update(fs.doc(db,'orders',o.id),{status});
  if(delta)(o.items||[]).forEach(it=>{if(products.some(p=>p.id==it.id))b.update(fs.doc(db,'products',String(it.id)),{stock:fs.increment(delta*it.qty)})});
  await b.commit();
}
async function deleteOrder(o){
  if(CLOUD)await fs.deleteDoc(fs.doc(db,'orders',o.id));
  else{orders=orders.filter(x=>x.id!==o.id);LS.set('mejt_orders',orders)}
}
function watchOrders(on){
  if(unsubOrders){unsubOrders();unsubOrders=null}
  if(!CLOUD)return;
  if(!on){orders=[];renderOrders();return}
  ordFirst=true;
  unsubOrders=fs.onSnapshot(fs.collection(db,'orders'),snap=>{
    if(!ordFirst)snap.docChanges().forEach(ch=>{if(ch.type==='added'&&!ch.doc.metadata.hasPendingWrites)toast('Neue Bestellung eingegangen')});
    ordFirst=false;
    orders=snap.docs.map(d=>({...d.data(),id:d.id}));
    if(!admin){admin=true;setAdminUI();if(openAdminAfter){openAdminAfter=false;renderAdminRows();open('adminOv');toast('Willkommen, Admin');confetti()}}
    renderOrders();
  },err=>{
    openAdminAfter=false;
    if(admin){admin=false;setAdminUI();close('adminOv')}
    orders=[];renderOrders();
    if(err&&err.code!=='permission-denied'){console.error(err);toast('Bestellungen laden fehlgeschlagen: '+(err.code||err.message))}
  });
}

/* ================= Auth ================= */
function setAuthMode(m){
  authMode=m;const reg=m==='up';
  $('#lTitle').textContent=reg?'Konto erstellen':'Anmelden';
  $('#doLogin').textContent=reg?'Registrieren':'Anmelden';
  $('#lNameBox').style.display=reg?'':'none';
  $('#lToggle').textContent=reg?'Schon ein Konto? Anmelden':'Neu hier? Konto erstellen';
  $('#lPass').autocomplete=reg?'new-password':'current-password';
}
function showLogin(mode,msg){
  if(CLOUD)setAuthMode(mode||'in');
  $('#lMsg').textContent=msg||'';$('#lMsg').style.display=msg?'':'none';
  $('#lUser').value='';$('#lPass').value='';$('#lName').value='';
  open('loginOv');setTimeout(()=>$(CLOUD&&authMode==='up'?'#lName':'#lUser').focus(),100);
}
async function cloudLogin(){
  const email=$('#lUser').value.trim(),pw=$('#lPass').value,reg=authMode==='up',name=$('#lName').value.trim();
  const bad=m=>{shake($('#loginBox'));toast(m)};
  if(!email||!pw)return bad('Bitte E-Mail und Passwort eingeben');
  if(reg&&name.length<2)return bad('Bitte deinen Namen eingeben');
  if(reg&&pw.length<6)return bad('Passwort: mindestens 6 Zeichen');
  const btn=$('#doLogin');btn.disabled=true;
  try{
    if(reg){const cr=await au.createUserWithEmailAndPassword(auth,email,pw);try{await au.updateProfile(cr.user,{displayName:name})}catch(e){}}
    else{openAdminAfter=!pendingCheckout;await au.signInWithEmailAndPassword(auth,email,pw)}
    close('loginOv');setAdminUI();
    if(pendingCheckout){pendingCheckout=false;toast('Angemeldet, weiter zur Kasse');setTimeout(showCheckout,300)}
    else toast(reg?'Konto erstellt, willkommen!':'Willkommen zurück');
  }catch(e){console.error(e);openAdminAfter=false;bad('Anmeldefehler: '+((e&&e.message)||e))}
  finally{btn.disabled=false}
}
async function forgotPw(){
  const email=$('#lUser').value.trim();
  if(!email){toast('Bitte zuerst deine E-Mail eingeben');$('#lUser').focus();return}
  try{await au.sendPasswordResetEmail(auth,email)}catch(e){}
  toast('Falls ein Konto existiert, wurde eine E-Mail zum Zurücksetzen gesendet');
}
async function login(){
  if(CLOUD)return cloudLogin();
  if($('#lUser').value===creds.u&&hash($('#lPass').value)===creds.h){admin=true;sessionStorage.setItem('mejt_admin','1');setAdminUI();close('loginOv');renderAdminRows();open('adminOv');toast('Willkommen, Admin');confetti()}
  else{shake($('#loginBox'));toast('Falsche Zugangsdaten')}
}
function setAdminUI(){
  $('#adminbar').classList.toggle('on',admin);
  const cu=CLOUD&&auth?auth.currentUser:null;
  const usernameClean = cu ? (cu.displayName || cu.email || 'Konto') : 'Anmelden';
  $('#accLabel').textContent = admin ? 'Admin' : usernameClean.split(usernameClean.includes('@') ? '@' : ' ')[0];
  $$('.adminOnly').forEach(e=>e.style.display=admin?'':'none');
}

/* ================= Shop wechseln / betreten ================= */
function curtain(mid){const c=$('#curtain');c.classList.remove('run');void c.offsetWidth;c.classList.add('run');setTimeout(mid,720);setTimeout(()=>c.classList.remove('run'),1700)}
function enterShop(s,instant){
  if(!SHOPS[s])return;
  const go=()=>{
    closeAll();
    SHOP=s;cart=carts[s];cat='all';query='';sortBy='feat';wishView=false;
    document.body.classList.remove('theme-mc','theme-irl');document.body.classList.add('theme-'+s,'in-shop');
    $('#q').value='';$('#sort').value='feat';
    $('#brandTag').innerHTML=(s==='mc'?EMERALD:'')+esc(SHOPS[s].short);
    document.title='MEJT Shop – '+SHOPS[s].name;
    refresh();renderHero();renderTicker();renderFeatures();renderCart();updateBadges();tick();
    scrollTo(0,0);
    try{history.replaceState(null,'','#'+s)}catch(e){}
  };
  instant?go():curtain(go);
}
function leaveShop(){
  curtain(()=>{
    closeAll();clearInterval(st);
    SHOP=null;document.body.classList.remove('in-shop','theme-mc','theme-irl');
    document.title='MEJT Shop';scrollTo(0,0);
    try{history.replaceState(null,'',location.pathname+location.search)}catch(e){}
  });
}
function initLanding(){
  $$('.lp').forEach(lp=>{
    const mc=lp.dataset.shop==='mc',box=lp.querySelector('.parts');box.innerHTML='';
    const cols=mc?['#2ee06b','#58e08f','#0b7a42','#a7f3c4']:['#ff9900','#ffffff','#febd69','#8fb3d9'];
    for(let i=0;i<20;i++){const s=document.createElement('span'),z=mc?8+Math.random()*16:4+Math.random()*10;s.style.cssText=`left:${Math.random()*100}%;width:${z}px;height:${z}px;background:${cols[i%cols.length]};animation-duration:${7+Math.random()*9}s;animation-delay:${-Math.random()*14}s`;box.appendChild(s)}
  });
}

/* ================= Rendering Frontend ================= */
function renderNav(){
  const list=['all',...cats()];
  $('#nav').innerHTML=list.map(c=>`<button data-cat="${esc(c)}" class="${c===cat&&!wishView?'active':''}">${c==='all'?'Alle Produkte':esc(c)}</button>`).join('')+`<button data-cat="__deals" class="${cat==='__deals'?'active':''}"><span data-ic="tag"></span> Angebote</button>`;
  $('#searchCat').innerHTML=`<option value="all">Alle</option>`+cats().map(c=>`<option ${c===cat?'selected':''} value="${esc(c)}">${esc(c)}</option>`).join('');
  $$('[data-ic]').forEach(e=>{e.innerHTML=IC[e.dataset.ic]||''});
}
function renderCatCards(){
  const st=getSet(SHOP);
  const cards=st.cats&&st.cats.length?st.cats:cats().slice(0,4).map(c=>({title:c,cat:c,images:[]}));
  $('#catCards').innerHTML=cards.map((c,i)=>{
    let imgs=(c.images||[]).filter(okUrl);
    if(!imgs.length){const ps=sp().filter(p=>c.cat==='all'?true:c.cat==='__deals'?(p.old&&p.old>p.price):p.cat===c.cat);imgs=ps.slice(0,4).map(p=>p.images[0]).filter(Boolean)}
    const four=[];for(let k=0;k<4;k++)four.push(imgs.length?imgs[k%imgs.length]:'');
    return `<div class="catcard" data-cat="${esc(c.cat)}" style="animation-delay:${i*.12+.2}s"><h3>${esc(c.title)}</h3><div class="imgs">${four.map(u=>`<div style="${u?`background-image:url('${esc(u)}')`:''}"></div>`).join('')}</div><a>Mehr anzeigen <span data-ic="arrow"></span></a></div>`;
  }).join('');
  $$('[data-ic]').forEach(e=>{e.innerHTML=IC[e.dataset.ic]||''});
}
function filtered(){
  let l=sp();
  if(wishView)l=l.filter(p=>wish.includes(p.id));
  else if(cat==='__deals')l=l.filter(p=>p.old&&p.old>p.price);
  else if(cat!=='all')l=l.filter(p=>p.cat===cat);
  if(query){const q=query.toLowerCase();l=l.filter(p=>(p.name+' '+p.cat+' '+(p.desc||'')).toLowerCase().includes(q))}
  const s={pa:(a,b)=>a.price-b.price,pd:(a,b)=>b.price-a.price,rt:(a,b)=>b.rating-a.rating,new:(a,b)=>(b.t||0)-(a.t||0)}[sortBy];
  if(s)l.sort(s);
  return l;
}
function priceHTML(p){
  const sale=p.old&&p.old>p.price;
  if(p.shop==='mc')return `<div class="price mcp"><b>${fmtNum(p.price)}</b>${EMERALD}<small>Emeralds</small>${sale?`<span class="old">${fmtNum(p.old)}</span>`:''}</div>`;
  const [eu,ct]=Number(p.price).toFixed(2).split('.');
  return `<div class="price"><sup>€</sup><b>${eu}</b><sup>${ct}</sup>${sale?`<span class="old">${eur(p.old)}</span>`:''}</div>`;
}
const shipLabel=p=>p.shop==='mc'?'Sofort-Lieferung':'Gratis Versand';
function renderGrid(){
  const l=filtered();
  $('#listTitle').textContent=(wishView?'Dein Merkzettel':cat==='all'?'Alle Produkte':cat==='__deals'?'Angebote':cat)+(query?` – „${query}"`:'')+` (${l.length})`;
  $('#dealBar').style.display=sp().some(p=>p.old&&p.old>p.price)?'flex':'none';
  if(!l.length){
    $('#grid').innerHTML=`<div class="empty"><div class="big"><span data-ic="search"></span></div><h3>Keine Produkte gefunden</h3><p class="muted">Versuche einen anderen Suchbegriff.</p></div>`;
    $$('[data-ic]').forEach(e=>{e.innerHTML=IC[e.dataset.ic]||''});
    return;
  }
  $('#grid').innerHTML=l.map((p,i)=>{
    const disc=p.old&&p.old>p.price?Math.round((1-p.price/p.old)*100):0,w=wish.includes(p.id);
    return `<div class="card" data-id="${esc(p.id)}" style="transition-delay:${(i%6)*.07}s">
      ${disc?`<div class="tag">-${disc}%</div>`:''}
      <button class="heart ${w?'on':''}" data-act="wish" data-id="${esc(p.id)}" aria-label="Merkzettel">${w?IC.heartf:IC.heart}</button>
      <div class="pic skel" data-act="open" data-id="${esc(p.id)}"><img loading="lazy" src="${esc(safeUrl(p.images[0]))}" alt="${esc(p.name)}" onload="this.parentNode.classList.remove('skel')" onerror="this.src='${FALLBACK}';this.parentNode.classList.remove('skel')"></div>
      <h3 data-act="open" data-id="${esc(p.id)}">${esc(p.name)}</h3>
      <div class="stars">${stars(p.rating)} <span>${Number(p.reviews).toLocaleString('de-DE')}</span></div>
      ${priceHTML(p)}
      ${p.prime?`<div class="ship"><span data-ic="truck"></span> ${shipLabel(p)}</div>`:''}
      <div class="stock ${p.stock<=5?'low':''}">${p.stock<=0?'Derzeit nicht verfügbar':p.stock<=5?`Nur noch ${p.stock} auf Lager`:'Auf Lager'}</div>
      <button class="add" data-act="add" data-id="${esc(p.id)}" ${p.stock<=0?'disabled':''}>In den Warenkorb</button>
    </div>`}).join('');
  observe();$$('[data-ic]').forEach(e=>{e.innerHTML=IC[e.dataset.ic]||''});
}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');e.target.querySelectorAll('.starbox i').forEach(i=>i.style.width=i.dataset.w);io.unobserve(e.target)}}),{threshold:.12});
function observe(){$$('.card').forEach(c=>io.observe(c))}
function refresh(){renderNav();renderCatCards();renderGrid()}

/* Banner & Ticker */
let si=0,st=null;
function renderHero(){
  const stg=getSet(SHOP),sl=stg.slides||[],hero=$('#hero');
  clearInterval(st);hero.style.display=sl.length?'':'none';
  $('#slides').innerHTML=sl.map(s=>{
    const c1=clr(s.c1,'#232f3e'),c2=clr(s.c2,'#37475a');
    const bg=okUrl(s.bg)?`linear-gradient(90deg,rgba(0,0,0,.62),rgba(0,0,0,.12)),url('${esc(s.bg)}') center/cover`:`linear-gradient(120deg,${c1},${c2})`;
    const art=okUrl(s.img)?`<img class="art" src="${esc(s.img)}" alt="">`:`<div class="art ico">${SHOP==='mc'?EMERALD:BOX_BIG}</div>`;
    const words=String(s.title||'').split(' ').map((w,k)=>`<span style="--d:${k*.07}s">${esc(w)}</span>`).join(' ');
    return `<div class="slide" style="background:${bg}"><h2>${words}</h2><p>${esc(s.text)}</p>${s.btn?`<button class="cta" data-go="${esc(s.cat||'all')}">${esc(s.btn)} <span data-ic="arrow"></span></button>`:''}${art}</div>`;
  }).join('');
  $('#dots').innerHTML=sl.map((_,i)=>`<i data-i="${i}"></i>`).join('');
  $('#prev').style.display=$('#next').style.display=sl.length>1?'':'none';
  $('#dots').style.display=sl.length>1?'':'none';
  $$('[data-ic]').forEach(e=>{e.innerHTML=IC[e.dataset.ic]||''});
  go(0);
}
function go(i){
  const el=$$('.slide');if(!el.length)return;
  si=(i+el.length)%el.length;
  el.forEach((s,k)=>s.classList.toggle('on',k===si));
  $$('#dots i').forEach((d,k)=>d.classList.toggle('on',k===si));
  clearInterval(st);if(el.length>1)st=setInterval(()=>go(si+1),5800);
}
function renderTicker(){
  const items=(getSet(SHOP).ticker||[]).filter(Boolean),t=$('#ticker');
  t.style.display=items.length?'':'none';
  let one=items.slice();while(one.length&&one.join('').length<190)one=one.concat(items);
  const seg=one.map(x=>`<span>${esc(x)}</span>`).join('<i></i>');
  $('#tkTrack').innerHTML=`<div class="tkg">${seg}<i></i></div><div class="tkg">${seg}<i></i></div>`;
}
function renderFeatures(){$('#features').innerHTML=FEAT[SHOP].map(([i,t,d])=>`<div><span data-ic="${i}"></span><b>${t}</b><p style="font-size:13px;color:var(--muted)">${d}</p></div>`).join('');$$('[data-ic]').forEach(e=>{e.innerHTML=IC[e.dataset.ic]||''})}

/* ================= Warenkorb & Kasse ================= */
const cartCount=()=>Object.values(cart).reduce((a,b)=>a+b,0);
function updateBadges(){
  const b=$('#cartCount');b.textContent=cartCount();b.classList.remove('bump');void b.offsetWidth;b.classList.add('bump');
  $('#wishCount').textContent=wish.filter(id=>products.some(p=>p.id===id&&p.shop===SHOP)).length;
  $('#ordCount').textContent=orders.filter(o=>o.status==='open').length;
}
function addToCart(id,n=1,src){
  const p=products.find(x=>x.id==id);if(!p)return;
  const cur=cart[id]||0;if(cur+n>p.stock){toast('Nicht mehr Bestand verfügbar');return}
  cart[id]=cur+n;saveCart();updateBadges();toast('Zum Warenkorb hinzugefügt');renderCart();
}
function cartItems(){return Object.keys(cart).map(id=>{const p=products.find(x=>x.id==id&&x.shop===SHOP);return p?{p,q:cart[id]}:null}).filter(Boolean)}
function renderCart(){
  const its=cartItems();let tot=0;
  $('#cartBody').innerHTML=its.length?its.map(({p,q})=>{tot+=p.price*q;return `<div class="ci"><img src="${esc(safeUrl(p.images[0]))}" onerror="this.src='${FALLBACK}'"><div class="info"><b>${esc(p.name)}</b><div style="color:var(--red)">${money(p.price)}</div><div class="qty"><button data-act="dec" data-id="${esc(p.id)}" aria-label="Weniger">−</button><b>${q}</b><button data-act="inc" data-id="${esc(p.id)}" aria-label="Mehr">+</button><button data-act="rm" data-id="${esc(p.id)}" aria-label="Entfernen" style="margin-left:auto;width:auto;padding:0 10px;border-radius:14px"><span data-ic="trash"></span></button></div></div></div>`}).join(''):`<div class="empty"><div class="big"><span data-ic="cart"></span></div><h3>Dein Warenkorb ist leer</h3></div>`;
  $('#cartTotal').innerHTML=SHOP?money(tot):'';$$('[data-ic]').forEach(e=>{e.innerHTML=IC[e.dataset.ic]||''});
}
function openCart(){renderCart();$('#drawer').classList.add('show');open('cartOv')}
function closeCart(){$('#drawer').classList.remove('show');close('cartOv')}

/* Produktdetail */
function showDetail(id){
  const p=products.find(x=>x.id==id);if(!p)return;let qty=1;
  const imgs=p.images.length?p.images:[FALLBACK];
  $('#detailBox').innerHTML=`<button class="x" data-close="detailOv"><span data-ic="x"></span></button><div class="detail">
    <div><div class="main-img"><img id="dMain" src="${esc(safeUrl(imgs[0]))}" onerror="this.src='${FALLBACK}'"></div><div class="thumbs">${imgs.map((u,i)=>`<img class="${i?'':'on'}" src="${esc(safeUrl(u))}" data-thumb="${esc(safeUrl(u))}" onerror="this.src='${FALLBACK}'">`).join('')}</div></div>
    <div><div style="color:var(--link);font-size:13px">${esc(p.cat)}</div><h2>${esc(p.name)}</h2>
    <div class="stars"><span>(${p.reviews} Bewertungen)</span></div><hr style="margin:10px 0;border:none;border-top:1px solid #eee">
    <div class="price">${money(p.price,p.shop)} ${p.old&&p.old>p.price?`<span class="old">${p.shop==='mc'?fmtNum(p.old):eur(p.old)}</span>`:''}</div>
    ${p.prime?`<div class="ship"><span data-ic="truck"></span> ${shipLabel(p)}</div>`:''}
    <p style="margin:12px 0;line-height:1.5">${esc(p.desc)}</p>
    <div class="stock ${p.stock<=5?'low':''}">${p.stock<=0?'Nicht verfügbar':p.stock<=5?`Nur noch ${p.stock} auf Lager`:'Auf Lager'}</div>
    <div class="qty">Menge: <button id="dm">−</button><b id="dq">1</b><button id="dp">+</button></div>
    <div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn" id="dAdd" ${p.stock<=0?'disabled':''}>In den Warenkorb</button><button class="btn o" id="dBuy" ${p.stock<=0?'disabled':''}>Jetzt kaufen</button></div></div></div>`;
  open('detailOv');$$('[data-ic]').forEach(e=>{e.innerHTML=IC[e.dataset.ic]||''});
  setTimeout(()=>$$('#detailBox .starbox i').forEach(i=>i.style.width=i.dataset.w),100);
  $$('#detailBox [data-thumb]').forEach(t=>t.onclick=()=>{$('#dMain').src=t.dataset.thumb;$$('#detailBox .thumbs img').forEach(x=>x.classList.remove('on'));t.classList.add('on')});
  $('#dm').onclick=()=>{qty=Math.max(1,qty-1);$('#dq').textContent=qty};
  $('#dp').onclick=()=>{qty=Math.min(p.stock,qty+1);$('#dq').textContent=qty};
  $('#dAdd').onclick=()=>addToCart(id,qty,$('#dMain'));
  $('#dBuy').onclick=()=>{addToCart(id,qty);close('detailOv');setTimeout(showCheckout,300)};
}

/* Kasse */
const CONSENT=`<label style="font-size:13px;display:flex;gap:8px;align-items:flex-start"><input type="checkbox" id="cOk" style="margin-top:3px"> <span>Ich stimme zu, dass meine Angaben zur Abwicklung der Bestellung gespeichert werden. *</span></label>`;
const FORM_IRL=`<h2 style="margin-bottom:4px">Lieferadresse</h2><p class="muted" style="font-size:13px;margin-bottom:12px">Wohin sollen wir deine Bestellung liefern?</p>
  <div class="f"><label>Vor- und Nachname *</label><input id="cName" autocomplete="name" maxlength="80"></div>
  <div class="f"><label>Straße und Hausnummer *</label><input id="cStreet" autocomplete="street-address" maxlength="100"></div>
  <div class="row2"><div class="f"><label>PLZ *</label><input id="cZip" inputmode="numeric" maxlength="5" autocomplete="postal-code"></div><div class="f"><label>Ort *</label><input id="cCity" autocomplete="address-level2" maxlength="60"></div></div>
  <div class="row2"><div class="f"><label>E-Mail (optional)</label><input id="cMail" type="email" maxlength="100" autocomplete="email"></div><div class="f"><label>Telefon (optional)</label><input id="cTel" type="tel" maxlength="30" autocomplete="tel"></div></div>
  <div class="f"><label>Hinweis zur Lieferung (optional)</label><textarea id="cNote" rows="2" maxlength="300"></textarea></div>${CONSENT}`;
const FORM_MC=`<h2 style="margin-bottom:4px">Lieferung im Spiel</h2><p class="muted" style="font-size:13px;margin-bottom:12px">Wohin sollen wir deine Items liefern?</p>
  <div class="f"><label>Minecraft-Name (IGN) *</label><input id="cName" maxlength="40" autocomplete="off" spellcheck="false"></div>
  <div class="row3"><div class="f"><label>X *</label><input id="cX" type="number" step="1"></div><div class="f"><label>Y (optional)</label><input id="cY" type="number" step="1"></div><div class="f"><label>Z *</label><input id="cZ" type="number" step="1"></div></div>
  <div class="row2"><div class="f"><label>Dimension *</label><select id="cDim"><option>Overworld</option><option>Nether</option><option>End</option></select></div><div class="f"><label>Ort / Basis (optional)</label><input id="cPlace" maxlength="80" placeholder="z. B. Dorf nahe Spawn"></div></div>
  <div class="row2"><div class="f"><label>Discord (optional)</label><input id="cDisc" maxlength="40"></div><div class="f"><label>E-Mail (optional)</label><input id="cMail" type="email" maxlength="100"></div></div>
  <div class="f"><label>Hinweis (optional)</label><textarea id="cNote" rows="2" maxlength="300"></textarea></div>${CONSENT}`;
const MAP_IRL=[['cName','name'],['cStreet','street'],['cZip','zip'],['cCity','city'],['cMail','email'],['cTel','phone']];
const MAP_MC=[['cName','name'],['cX','x'],['cY','y'],['cZ','z'],['cDim','dim'],['cPlace','place'],['cDisc','discord'],['cMail','email']];

function showCheckout(){
  const its=cartItems();if(!its.length){toast('Warenkorb ist leer');return}
  if(CLOUD&&!auth.currentUser){pendingCheckout=true;showLogin('in','Zum Bestellen musst du angemeldet sein. Melde dich an oder erstelle kurz ein Konto.');return}
  const cu=CLOUD?auth.currentUser:null,addrKey='mejt_addr_'+SHOP+(cu?'_'+cu.uid:''),mc=SHOP==='mc';
  const tot=its.reduce((a,{p,q})=>a+p.price*q,0),sv=LS.get(addrKey,{});
  $('#coBox').innerHTML=`<button class="x" data-close="coOv"><span data-ic="x"></span></button>
  <form id="coForm" class="chk" novalidate>
    <div>${mc?FORM_MC:FORM_IRL}</div>
    <div>
      <h2 style="margin-bottom:12px">Deine Bestellung</h2>
      <div class="sum">${its.map(({p,q})=>`<div><span>${q}× ${esc(p.name)}</span><span>${money(p.price*q)}</span></div>`).join('')}<hr style="margin:8px 0;border:none;border-top:1px solid #e2e8f0"><div style="font-size:16px"><b>Gesamt</b><b>${money(tot)}</b></div></div>
      <p class="muted" style="font-size:13px;margin:10px 0">Zahlung: ${mc?'in Emeralds bei Übergabe':'Bezahlung bei Lieferung'}</p>
      <button class="btn o" style="width:100%" type="submit" id="cSubmit">Jetzt verbindlich bestellen</button>
    </div>
  </form>`;
  $$('[data-ic]').forEach(e=>{e.innerHTML=IC[e.dataset.ic]||''});
  (mc?MAP_MC:MAP_IRL).forEach(([i,k])=>{const v=sv[k];$('#'+i).value=v==null?'':v});
  if(cu){if(!$('#cName').value)$('#cName').value=mc?'':(cu.displayName||'');if(!$('#cMail').value)$('#cMail').value=cu.email||''}
  $('#coForm').onsubmit=async e=>{
    e.preventDefault();
    const v=id=>$('#'+id).value.trim();
    const bad=(id,msg)=>{const el=$('#'+id);el.focus();shake(el);toast(msg)};
    let cust;
    if(mc){
      const int=s=>/^-?\d{1,8}$/.test(s)?parseInt(s,10):NaN;
      cust={name:v('cName'),dim:v('cDim'),x:int(v('cX')),y:v('cY')===''?null:int(v('cY')),z:int(v('cZ')),place:v('cPlace'),discord:v('cDisc'),email:v('cMail'),note:v('cNote')};
      if(cust.name.length<2)return bad('cName','Bitte deinen Minecraft-Namen eingeben');
      if(isNaN(cust.x))return bad('cX','Bitte eine gültige X-Koordinate eingeben');
      if(cust.y!==null&&isNaN(cust.y))return bad('cY','Bitte eine gültige Y-Koordinate eingeben');
      if(isNaN(cust.z))return bad('cZ','Bitte eine gültige Z-Koordinate eingeben');
    }else{
      cust={name:v('cName'),street:v('cStreet'),zip:v('cZip'),city:v('cCity'),email:v('cMail'),phone:v('cTel'),note:v('cNote')};
      if(cust.name.length<2)return bad('cName','Bitte deinen Namen eingeben');
      if(cust.street.length<3||!/\d/.test(cust.street))return bad('cStreet','Bitte Straße mit Hausnummer eingeben');
      if(!/^\d{4,5}$/.test(cust.zip))return bad('cZip','Bitte eine gültige PLZ eingeben');
      if(cust.city.length<2)return bad('cCity','Bitte den Ort eingeben');
    }
    if(cust.email&&!$('#cMail').checkValidity())return bad('cMail','Bitte eine gültige E-Mail eingeben');
    if(!$('#cOk').checked)return bad('cOk','Bitte der Speicherung deiner Angaben zustimmen');
    const cur=cartItems();
    if(!cur.length){toast('Warenkorb ist leer');close('coOv');return}
    if(CLOUD&&!auth.currentUser){close('coOv');pendingCheckout=true;showLogin('in','Deine Sitzung ist abgelaufen. Bitte erneut anmelden.');return}
    const over=cur.find(({p,q})=>q>p.stock);
    if(over){toast(`„${over.p.name}" ist nicht mehr in dieser Menge verfügbar`);return}
    const total=+cur.reduce((a,{p,q})=>a+p.price*q,0).toFixed(2);
    const order={orderNo:'MEJT-'+Date.now().toString(36).toUpperCase().slice(-5)+Math.random().toString(36).slice(2,5).toUpperCase(),
      shop:SHOP,currency:mc?'EMERALD':'EUR',
      items:cur.map(({p,q})=>({id:String(p.id),name:p.name,price:p.price,qty:q,image:okUrl(p.images[0])&&p.images[0].length<600?p.images[0]:''})),
      total,customer:cust,status:'open',createdAt:Date.now(),pay:mc?'Emeralds bei Übergabe':'Bezahlung bei Lieferung',...(CLOUD?{uid:auth.currentUser.uid}:{})};
    const btn=$('#cSubmit');btn.disabled=true;btn.textContent='Wird gesendet …';
    try{
      await createOrder(order);
      const keep={...cust};delete keep.note;LS.set(addrKey,keep);
      carts[SHOP]=cart={};saveCart();updateBadges();renderCart();showOrderDone(order);confetti();
    }catch(err){
      console.error(err);btn.disabled=false;btn.textContent='Jetzt verbindlich bestellen';
      toast('Bestellung konnte nicht gesendet werden. Bitte versuche es später erneut.');
    }
  };
  open('coOv');setTimeout(()=>$('#cName').focus(),150);
}
function showOrderDone(o){
  const c=o.customer,mc=o.shop==='mc';
  const where=mc?`${esc(c.name)}<br>${esc(c.dim)}: X ${esc(c.x)}, Y ${c.y==null||c.y===''?'–':esc(c.y)}, Z ${esc(c.z)}`:`${esc(c.name)}<br>${esc(c.street)}<br>${esc(c.zip)} ${esc(c.city)}`;
  $('#coBox').innerHTML=`<button class="x" data-close="coOv"><span data-ic="x"></span></button><div style="padding:34px 26px;text-align:center">
    <div class="okc"><span data-ic="check"></span></div><h2>Danke für deine Bestellung, ${esc(c.name.split(' ')[0])}!</h2>
    <p style="margin:8px 0" class="muted">Bestellnummer: <b style="color:var(--text)">${esc(o.orderNo)}</b></p>
    <div class="sum" style="text-align:left;max-width:420px;margin:16px auto"><div style="display:block"><b>${mc?'Lieferung an:':'Lieferadresse:'}</b><br>${where}</div><hr style="margin:8px 0;border:none;border-top:1px solid #e2e8f0"><div><span>Gesamt (${esc(o.pay)})</span><b>${money(o.total,o.shop)}</b></div></div>
    <button class="btn o" data-close="coOv">Weiter einkaufen</button></div>`;
  $$('[data-ic]').forEach(e=>{e.innerHTML=IC[e.dataset.ic]||''});
}

/* ================= Admin: Produkte ================= */
const stepLabel=s=>s==='mc'?'Preis in Emeralds *':'Preis in Euro *';
function renderAdminRows(){
  $('#aShopChips').innerHTML=[['all','Alle'],['mc','Minecraft'],['irl','IRL']].map(([k,t])=>`<button class="chip ${k===aShop?'on':''}" data-ashop="${k}">${t}<b>${k==='all'?products.length:products.filter(p=>p.shop===k).length}</b></button>`).join('');
  const l=products.filter(p=>aShop==='all'||p.shop===aShop);
  $('#aRows').innerHTML=l.map((p,i)=>`<tr style="animation-delay:${Math.min(i,12)*.03}s"><td><img src="${esc(safeUrl(p.images[0]))}" onerror="this.src='${FALLBACK}'"></td><td>${esc(p.name)}</td><td><span class="sb ${p.shop}">${p.shop==='mc'?'MC':'IRL'}</span></td><td>${esc(p.cat)}</td><td>${money(p.price,p.shop)}</td><td>${p.stock}</td><td style="white-space:nowrap"><button class="btn sm2" data-act="aedit" data-id="${esc(p.id)}" aria-label="Bearbeiten"><span data-ic="edit"></span></button> <button class="btn red sm2" data-act="adel" data-id="${esc(p.id)}" aria-label="Löschen"><span data-ic="trash"></span></button></td></tr>`).join('')||'<tr><td colspan="7">Keine Produkte</td></tr>';
  $$('[data-ic]').forEach(e=>{e.innerHTML=IC[e.dataset.ic]||''});
}
function tab(id){$$('.apane').forEach(p=>p.classList.toggle('on',p.id===id));$$('.tabs button').forEach(b=>b.classList.toggle('on',b.dataset.tab===id))}
function fillCatList(){const s=$('#pShop').value;$('#catList').innerHTML=cats(s).map(c=>`<option value="${esc(c)}">`).join('');$('#pPriceLbl').textContent=stepLabel(s)}
function clearForm(){['pId','pName','pPrice','pOld','pCat','pImgs','pDesc'].forEach(i=>$('#'+i).value='');$('#pShop').value=SHOP||'irl';$('#pStock').value=10;$('#pRating').value=4.5;$('#pReviews').value=12;$('#pPrime').checked=true;$('#pPrev').innerHTML='';$('#formTitle').textContent='Neues Produkt';$('#tabForm').textContent='Produkt hinzufügen';fillCatList()}
function editProd(id){const p=products.find(x=>x.id==id);if(!p)return;tab('aForm');$('#pId').value=p.id;$('#pShop').value=p.shop;$('#pName').value=p.name;$('#pPrice').value=p.price;$('#pOld').value=p.old||'';$('#pCat').value=p.cat;$('#pImgs').value=p.images.join('\n');$('#pDesc').value=p.desc\vert{}\vert{}'';$('#pStock').value=p.stock;$('#pRating').value=p.rating;$('#pReviews').value=p.reviews;$('#pPrime').checked=!!p.prime;$('#formTitle').textContent='Produkt bearbeiten';$('#tabForm').textContent='Bearbeiten';fillCatList();previewImgs()}
function previewImgs(){const u=$('#pImgs').value.split('\n').map(s=>s.trim()).filter(Boolean);$('#pPrev').innerHTML=u.map(x=>`<img src="${esc(safeUrl(x))}" onerror="this.src='${FALLBACK}'">`).join('')}
async function saveProd(){
  const name=$('#pName').value.trim(),price=parseFloat($('#pPrice').value),c=$('#pCat').value.trim(),imgs=$('#pImgs').value.split('\n').map(s=>s.trim()).filter(Boolean);
  if(!name||isNaN(price)||!c||!imgs.length){toast('Name, Preis, Kategorie und mind. 1 Bild-URL nötig');shake($('#aForm'));return}
  if(imgs.some(u=>!okUrl(u))){toast('Bild-URLs müssen mit http(s):// beginnen');return}
  const old=parseFloat($('#pOld').value);
  const data={shop:$('#pShop').value,name,price,old:isNaN(old)?null:old,cat:c,images:imgs,desc:$('#pDesc').value.trim(),rating:Math.min(5,Math.max(0,parseFloat($('#pRating').value)\vert{}\vert{}0)),reviews:parseInt($('#pReviews').value)||0,stock:Math.max(0,parseInt($('#pStock').value)\vert{}\vert{}0),prime:$('#pPrime').checked};
  const id=$('#pId').value,existing=id?products.find(p=>p.id==id):null;
  const prod=existing?{...existing,...data}:{id:String(Date.now()),t:Date.now(),...data};
  try{
    if(!CLOUD){if(existing)Object.assign(existing,data);else products.unshift(prod)}
    await dbSave(prod);
    toast(existing?'Produkt aktualisiert':'Produkt hinzugefügt');
    clearForm();if(SHOP)refresh();renderAdminRows();tab('aList');
  }catch(e){permErr(e)}
}

/* ================= Admin: Bestellungen ================= */
const ORD_LABEL={open:'Offen',shipped:'Versendet',cancelled:'Storniert'};
const ordTime=t=>new Date(t).toLocaleString('de-DE',{dateStyle:'medium',timeStyle:'short'});
const oShop=o=>o.shop==='mc'?'mc':'irl';
function delivHTML(o){
  const c=o.customer||{};
  if(oShop(o)==='mc')return `<b>${esc(c.name)}</b> <span class="muted">(Minecraft)</span><br>Dimension: ${esc(c.dim||'Overworld')}<br>Koordinaten: <b>X ${esc(c.x)} · Y ${c.y==null||c.y===''?'–':esc(c.y)} · Z ${esc(c.z)}</b>${c.place?`<br>Ort: ${esc(c.place)}`:''}${c.discord?`<br>Discord: ${esc(c.discord)}`:''}${c.email?`<br>E-Mail: ${esc(c.email)}`:''}`;
  return `<b>${esc(c.name)}</b><br>${esc(c.street)}<br>${esc(c.zip)} ${esc(c.city)}${c.email?`<br>E-Mail: ${esc(c.email)}`:''}${c.phone?`<br>Tel.: ${esc(c.phone)}`:''}`;
}
function renderOrders(){
  const n=orders.filter(o=>o.status==='open').length;
  $('#ordCount').textContent=n;$('#tabOrders').textContent='Bestellungen'+(n?` (${n})`:'');
  const inShop=o=>ordShop==='all'||oShop(o)===ordShop;
  $('#ordShopChips').innerHTML=[['all','Alle Shops'],['mc','Minecraft'],['irl','IRL']].map(([k,t])=>`<button class="chip ${k===ordShop?'on':''}" data-oshop="${k}">${t}</button>`).join('');
  const cnt=s=>orders.filter(o=>inShop(o)&&(s==='all'||o.status===s)).length;
  $('#ordChips').innerHTML=['open','shipped','cancelled','all'].map(s=>`<button class="chip ${s===ordFilter?'on':''}" data-ofilter="${s}">${s==='all'?'Alle':ORD_LABEL[s]}<b>${cnt(s)}</b></button>`).join('');
  const l=orders.filter(o=>inShop(o)&&(ordFilter==='all'||o.status==='cancelled'?o.status==='cancelled':o.status===ordFilter)).sort((a,b)=>(b.createdAt||0)-(a.createdAt||0));
  $('#ordList').innerHTML=l.length?l.map((o,i)=>{const s=oShop(o);return `<div class="ord" style="animation-delay:${Math.min(i,8)*.05}s">
    <div class="ordh"><span><b>${esc(o.orderNo)}</b> · ${ordTime(o.createdAt)} <span class="sb ${s}">${s==='mc'?'MINECRAFT':'IRL'}</span></span><span class="st ${esc(o.status)}">${esc(ORD_LABEL[o.status]||o.status)}</span></div>
    <div class="ordb">
      <div><h4>${s==='mc'?'Lieferung im Spiel':'Lieferadresse'}</h4><div style="font-size:14px;line-height:1.55">${delivHTML(o)}</div>${(o.customer||{}).note?`<div class="note" style="margin:8px 0 0">${esc(o.customer.note)}</div>`:''}</div>
      <div><h4>Artikel</h4>${(o.items||[]).map(it=>`<div class="oi"><img src="${esc(safeUrl(it.image))}" onerror="this.src='${FALLBACK}'"><span>${esc(it.qty)}×${esc(it.name)}<br><small class="muted">${money(it.price,s)}</small></span></div>`).join('')}<div style="margin-top:8px;font-size:16px"><b>Summe: ${money(o.total,s)}</b></div><div style="font-size:12px;color:var(--muted)">${esc(o.pay||'')}</div></div>
    </div>
    <div class="orda">
      ${o.status==='open'?`<button class="btn sm2" data-act="oship" data-id="${esc(p.id)}"><span data-ic="check"></span> Als versendet markieren</button>`:''}
      ${o.status!=='cancelled'?`<button class="btn red sm2" data-act="ocancel" data-id="${esc(o.id)}"><span data-ic="x"></span> Stornieren</button>`:`<button class="btn sm2" data-act="oreopen" data-id="${esc(o.id)}"><span data-ic="undo"></span> Wieder öffnen</button><button class="btn red sm2" data-act="odel" data-id="${esc(o.id)}"><span data-ic="trash"></span> Löschen</button>`}
      <button class="btn dark sm2" data-act="ocopy" data-id="${esc(o.id)}"><span data-ic="copy"></span> ${s==='mc'?'TP-Befehl kopieren':'Adresse kopieren'}</button>
    </div></div>`}).join(''):`<div class="empty" style="padding:30px"><div class="big"><span data-ic="box"></span></div><h3>Keine Bestellungen in dieser Ansicht</h3></div>`;
  $$('[data-ic]').forEach(e=>{e.innerHTML=IC[e.dataset.ic]||''});
}
function orderAction(act,id){
  const o=orders.find(x=>x.id===id);if(!o)return;
  const done=msg=>()=>{renderOrders();updateBadges();toast(msg)};
  if(act==='oship')setOrderStatus(o,'shipped').then(done('Als versendet markiert')).catch(permErr);
  if(act==='ocancel'&&confirm(`Bestellung ${o.orderNo} wirklich stornieren?`))setOrderStatus(o,'cancelled').then(done('Bestellung storniert')).catch(permErr);
  if(act==='oreopen')setOrderStatus(o,'open').then(done('Bestellung wieder geöffnet')).catch(permErr);
  if(act==='odel'&&confirm(`Bestellung ${o.orderNo} endgültig löschen?`))deleteOrder(o).then(done('Bestellung gelöscht')).catch(permErr);
  if(act==='ocopy'){
    const c=o.customer||{};
    const t=oShop(o)==='mc'?`/tp @s ${c.x} ${c.y==null||c.y===''?'~':c.y} ${c.z}`:`${c.name}\n${c.street}\n${c.zip} ${c.city}`;
    (navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(()=>toast('In die Zwischenablage kopiert')).catch(()=>toast('Kopieren nicht möglich'));
  }
}

/* ================= Admin: Startseite / Banner ================= */
const targetOpts=(shop,val)=>{const l=[['all','Alle Produkte'],['__deals','Angebote'],...cats(shop).map(c=>[c,'Kategorie: '+c])];if(val&&!l.some(x=>x[0]===val))l.push([val,'Kategorie: '+val]);return l.map(([v,t])=>`<option value="${esc(v)}" ${v===val?'selected':''}>${esc(t)}</option>`).join('')};
const prevStyle=s=>{const bg=okUrl(s.bg)?`linear-gradient(90deg,rgba(0,0,0,.6),rgba(0,0,0,.15)),url('${esc(s.bg)}') center/cover`:`linear-gradient(120deg,${clr(s.c1,'#232f3e')},${clr(s.c2,'#37475a')})`;return `background:${bg}`};
function slideEd(s,i,n){
  const a=(k)=>`data-g="slides" data-i="${i}" data-k="${k}"`;
  return `<div class="ed"><div class="edh"><b>Slide ${i+1}</b><span class="edact"><button class="btn sm2" data-hact="sup" data-i="${i}" ${i?'':'disabled'} aria-label="Nach oben"><span data-ic="up"></span></button><button class="btn sm2" data-hact="sdown" data-i="${i}" ${i<n-1?'':'disabled'} aria-label="Nach unten"><span data-ic="down"></span></button><button class="btn red sm2" data-hact="sdel" data-i="${i}" aria-label="Löschen"><span data-ic="trash"></span></button></span></div>
  <div class="sprev" style="${prevStyle(s)}"><b>${esc(s.title)}</b><span>${esc(s.text)}</span></div>
  <div class="row2"><div class="f"><label>Titel</label><input ${a('title')} value="${esc(s.title)}" maxlength="80"></div><div class="f"><label>Button-Text (leer = kein Button)</label><input ${a('btn')} value="${esc(s.btn)}" maxlength="30"></div></div>
  <div class="f"><label>Untertitel</label><textarea ${a('text')} rows="2" maxlength="220">${esc(s.text)}</textarea></div>
  <div class="row3"><div class="f"><label>Button führt zu</label><select ${a('cat')}>${targetOpts(editShop,s.cat)}</select></div><div class="f"><label>Farbe 1</label><input type="color" ${a('c1')} value="${clr(s.c1,'#232f3e')}"></div><div class="f"><label>Farbe 2</label><input type="color" ${a('c2')} value="${clr(s.c2,'#37475a')}"></div></div>
  <div class="row2"><div class="f"><label>Hintergrundbild-URL (optional)</label><input ${a('bg')} value="${esc(s.bg||'')}" placeholder="https://…"></div><div class="f"><label>Bild rechts, URL (optional)</label><input ${a('img')} value="${esc(s.img||'')}" placeholder="https://…"></div></div></div>`;
}
function catEd(c,i,n){
  const a=(k)=>`data-g="cats" data-i="${i}" data-k="${k}"`;
  return `<div class="ed"><div class="edh"><b>Karte ${i+1}</b><span class="edact"><button class="btn sm2" data-hact="cup" data-i="${i}" ${i?'':'disabled'} aria-label="Nach oben"><span data-ic="up"></span></button><button class="btn sm2" data-hact="cdown" data-i="${i}" ${i<n-1?'':'disabled'} aria-label="Nach unten"><span data-ic="down"></span></button><button class="btn red sm2" data-hact="cdel" data-i="${i}" aria-label="Löschen"><span data-ic="trash"></span></button></span></div>
  <div class="row2"><div class="f"><label>Titel</label><input ${a('title')} value="${esc(c.title)}" maxlength="40"></div><div class="f"><label>Führt zu</label><select ${a('cat')}>${targetOpts(editShop,c.cat)}</select></div></div>
  <div class="f"><label>Bild-URLs (optional, bis zu 4, eine pro Zeile)</label><textarea ${a('images')} rows="3" placeholder="Leer = Produktbilder">${esc((c.images||[]).join('\n'))}</textarea></div></div>`;
}
function renderHomeEd(){
  $('#homeChips').innerHTML=['mc','irl'].map(s=>`<button class="chip ${s===editShop?'on':''}" data-hshop="${s}">${SHOPS[s].name}</button>`).join('');
  const sl=draft.slides||[],cs=draft.cats||[];
  $('#slideEd').innerHTML=sl.map((s,i)=>slideEd(s,i,sl.length)).join('')||'<p class="muted" style="margin-bottom:12px">Noch keine Slides.</p>';
  $('#tickerEd').value=(draft.ticker||[]).join('\n');
  $('#catEd').innerHTML=cs.map((c,i)=>catEd(c,i,cs.length)).join('')\vert{}\vert{}'<p class="muted" style="margin-bottom:12px">Automatisch.</p>';   $$('[data-ic]').forEach(e=>{e.innerHTML=IC[e.dataset.ic]||''});
}
function loadDraft(){draft=clone(getSet(editShop));homeDirty=false;renderHomeEd()}
function sanitizeSettings(d){
  const t=(s,n)=>String(s||'').trim().slice(0,n);
  return{
    slides:(d.slides||[]).map(s=>({title:t(s.title,80),text:t(s.text,220),btn:t(s.btn,30),cat:t(s.cat,60)||'all',c1:clr(s.c1,'#232f3e'),c2:clr(s.c2,'#37475a'),bg:okUrl(s.bg)?t(s.bg,2000):'',img:okUrl(s.img)?t(s.img,2000):''})).filter(s=>s.title||s.img),
    ticker:(d.ticker||[]).map(x=>t(x,140)).filter(Boolean).slice(0,20),
    cats:(d.cats||[]).map(c=>({title:t(c.title,40),cat:t(c.cat,60)||'all',images:(c.images||[]).filter(okUrl).map(u=>t(u,2000)).slice(0,4)})).filter(c=>c.title).slice(0,6)
  };
}
async function saveHome(){
  const d=sanitizeSettings(draft);
  try{
    await dbSaveSettings(editShop,d);draft=clone(d);homeDirty=false;renderHomeEd();
    if(SHOP===editShop){renderHero();renderTicker();renderCatCards()}
    toast('Startseite gespeichert');
  }catch(e){permErr(e)}
}
function homeAction(a,i){
  const mv=(arr,k,dir)=>{const j=k+dir;if(j<0||j>=arr.length)return;[arr[k],arr[j]]=[arr[j],arr[k]]};
  draft.cats=draft.cats||[];
  if(a==='sadd')draft.slides.push({title:'Neuer Slide',text:'Beschreibung',btn:'Mehr erfahren',cat:'all',c1:'#232f3e',c2:'#37475a',bg:'',img:''});
  if(a==='sdel')draft.slides.splice(i,1);
  if(a==='sup')mv(draft.slides,i,-1);
  if(a==='sdown')mv(draft.slides,i,1);
  if(a==='cadd'){if(draft.cats.length>=6){toast('Maximal 6 Karten');return}draft.cats.push({title:'Neue Karte',cat:'all',images:[]})}
  if(a==='cdel')draft.cats.splice(i,1);
  if(a==='cup')mv(draft.cats,i,-1);
  if(a==='cdown')mv(draft.cats,i,1);
  homeDirty=true;renderHomeEd();
}

/* ================= Event Listener ================= */
document.addEventListener('click',e=>{
  const c=e.target.closest('[data-close]');if(c)close(c.dataset.close);
  if(e.target.classList.contains('ov')){if(e.target.id==='cartOv')closeCart();else e.target.classList.remove('show')}
  const n=e.target.closest('[data-cat]');if(n&&SHOP){cat=n.dataset.cat;query='';wishView=false;$('#q').value='';refresh();$('#grid').scrollIntoView({behavior:'smooth',block:'start'})}
  const g=e.target.closest('[data-go]');if(g){cat=g.dataset.go;if(cat!=='all'&&cat!=='__deals'&&!cats().includes(cat))cat='all';query='';wishView=false;refresh();$('#grid').scrollIntoView({behavior:'smooth'})}
  const t=e.target.closest('[data-tab]');if(t){if(t.dataset.tab==='aForm'&&!$('#pId').value)clearForm();tab(t.dataset.tab);if(t.dataset.tab==='aList')renderAdminRows();if(t.dataset.tab==='aOrders')renderOrders();if(t.dataset.tab==='aHome'){editShop=SHOP||editShop;loadDraft()}}
  const oc=e.target.closest('[data-ofilter]');if(oc){ordFilter=oc.dataset.ofilter;renderOrders()}
  const os=e.target.closest('[data-oshop]');if(os){ordShop=os.dataset.oshop;renderOrders()}
  const as=e.target.closest('[data-ashop]');if(as){aShop=as.dataset.ashop;renderAdminRows()}
  const hs=e.target.closest('[data-hshop]');if(hs){if(homeDirty&&!confirm('Ungespeicherte Änderungen verwerfen?'))return;editShop=hs.dataset.hshop;loadDraft()}
  const h=e.target.closest('[data-hact]');if(h&&draft)homeAction(h.dataset.hact,+h.dataset.i);
  const a=e.target.closest('[data-act]');if(!a)return;const id=a.dataset.id,act=a.dataset.act;
  if(act==='open')showDetail(id);
  if(act==='add')addToCart(id,1,a.closest('.card').querySelector('img'));
  if(act==='wish'){const k=String(id);wish=wish.includes(k)?wish.filter(x=>x!==k):[...wish,k];saveWish();updateBadges();renderGrid();toast(wish.includes(k)?'Zum Merkzettel hinzugefügt':'Vom Merkzettel entfernt')}
  if(act==='inc')addToCart(id,1);
  if(act==='dec'){cart[id]--;if(cart[id]<=0)delete cart[id];saveCart();updateBadges();renderCart()}
  if(act==='rm'){const el=a.closest('.ci');el.classList.add('out');setTimeout(()=>{delete cart[id];saveCart();updateBadges();renderCart()},330)}
  if(act==='aedit')editProd(id);
  if(act==='adel'&&confirm('Produkt wirklich löschen?')){dbDelete(id).then(()=>{delete cart[id];saveCart();if(SHOP)refresh();renderAdminRows();updateBadges();toast('Produkt gelöscht')}).catch(permErr)}
  if(['oship','ocancel','oreopen','odel','ocopy'].includes(act))orderAction(act,id);
});
$('#aHome').addEventListener('input',e=>{
  const t=e.target,g=t.dataset.g;if(!g||!draft)return;
  homeDirty=true;
  if(g==='ticker'){draft.ticker=t.value.split('\n').map(s=>s.trim()).filter(Boolean);return}
  const i=+t.dataset.i,k=t.dataset.k,o=(draft[g]||[])[i];if(!o)return;
  o[k]=k==='images'?t.value.split('\n').map(s=>s.trim()).filter(Boolean).slice(0,4):t.value;
  if(g==='slides'){const pv=t.closest('.ed').querySelector('.sprev');pv.setAttribute('style',prevStyle(o));pv.innerHTML=`<b>${esc(o.title)}</b><span>${esc(o.text)}</span>`}
});
$('#saveHome').onclick=saveHome;
$('#resetHome').onclick=()=>{if(confirm('Banner und Karten dieses Shops auf Standard zurücksetzen?')){draft=clone(defSettings(editShop));homeDirty=true;renderHomeEd()}};
$('#searchForm').onsubmit=e=>{e.preventDefault();query=$('#q').value.trim();cat=$('#searchCat').value;wishView=false;refresh();$('#grid').scrollIntoView({behavior:'smooth'})};
$('#sort').onchange=e=>{sortBy=e.target.value;renderGrid()};
$('#logo').onclick=()=>{cat='all';query='';wishView=false;$('#q').value='';refresh();scrollTo({top:0,behavior:'smooth'})};
$('#swapBtn').onclick=leaveShop;$('#footSwap').onclick=leaveShop;
$('#cartBtn').onclick=openCart;$('#closeCart').onclick=closeCart;
$('#wishBtn').onclick=()=>{if(!wish.some(id=>products.some(p=>p.id===id&&p.shop===SHOP))){toast('Dein Merkzettel ist leer');return}wishView=true;query='';renderNav();renderGrid();$('#grid').scrollIntoView({behavior:'smooth'})};
$('#checkout').onclick=()=>{if(!cartCount()){toast('Warenkorb ist leer');return}closeCart();showCheckout()};
$('#ordBtn').onclick=()=>{renderAdminRows();tab('aOrders');renderOrders();open('adminOv')};
$('#accBtn').onclick=()=>{
  if(admin){renderAdminRows();open('adminOv');return}
  if(CLOUD&&auth.currentUser){const u=auth.currentUser;$('#accInfo').innerHTML=`Angemeldet als<br><b>${esc(u.displayName||'Kunde')}</b><br>${esc(u.email)}`;open('accOv');return}
  showLogin('in');
};
$('#lToggle').onclick=e=>{e.preventDefault();setAuthMode(authMode==='in'?'up':'in');$(authMode==='up'?'#lName':'#lUser').focus()};
$('#lForgot').onclick=e=>{e.preventDefault();forgotPw()};
$('#accLogout').onclick=()=>au.signOut(auth).then(()=>{close('accOv');toast('Abgemeldet')});
$('#doLogin').onclick=login;$('#lPass').onkeydown=e=>{if(e.key==='Enter')login()};$('#lUser').onkeydown=e=>{if(e.key==='Enter')$('#lPass').focus()};
$('#logout').onclick=()=>{if(CLOUD){au.signOut(auth).then(()=>{close('adminOv');toast('Abgemeldet')});return}admin=false;sessionStorage.removeItem('mejt_admin');setAdminUI();close('adminOv');toast('Abgemeldet')};
$('#saveProd').onclick=saveProd;$('#resetForm').onclick=clearForm;$('#pImgs').oninput=previewImgs;$('#pShop').onchange=fillCatList;
$('#saveCred').onclick=()=>{const u=$('#nUser').value.trim(),p=$('#nPass').value;if(!u||p.length<4){toast('Benutzername und Passwort (mind. 4 Zeichen) eingeben');return}creds={u,h:hash(p)};LS.set('mejt_creds',creds);$('#nUser').value=$('#nPass').value='';toast('Zugangsdaten gespeichert')};
$('#exportBtn').onclick=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(products,null,2)],{type:'application/json'}));a.download='products.json';a.click();toast('products.json heruntergeladen')};
$('#importBtn').onclick=()=>$('#importFile').click();
$('#importFile').onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=async()=>{let j;try{j=JSON.parse(r.result);if(!Array.isArray(j))throw 0}catch(x){toast('Ungültige Datei');return}if(!confirm('Alle bisherigen Produkte werden durch die Datei ersetzt. Fortfahren?'))return;try{await dbReplaceAll(normalize(j));if(SHOP)refresh();renderAdminRows();toast('Import erfolgreich')}catch(x){permErr(x)}};r.readAsText(f);e.target.value=''};
$('#seedBtn').onclick=async()=>{try{await dbSeed();if(SHOP)refresh();renderAdminRows();toast('Standardprodukte hinzugefügt')}catch(e){permErr(e)}};
$('#resetPw').onclick=async()=>{try{await au.sendPasswordResetEmail(auth,auth.currentUser.email);toast('E-Mail zum Ändern des Passworts gesendet')}catch(e){permErr(e)}};
$('#backTop').onclick=()=>scrollTo({top:0,behavior:'smooth'});$('#toTop').onclick=$('#backTop').onclick;

addEventListener('scroll',()=>{
  const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;
  $('#prog').style.width=(h>0?y/h*100:0)+'%';
  $('#toTop').classList.toggle('show',y>500);
  $('#hdr').classList.toggle('sm',y>80);
  const art=$('.slide.on .art');if(art&&y<600)art.style.setProperty('--py',(y*.25)+'px');
},{passive:true});
addEventListener('keydown',e=>{if(e.key==='Escape')closeAll()});
$('#prev').onclick=()=>go(si-1);$('#next').onclick=()=>go(si+1);$('#dots').onclick=e=>{if(e.target.dataset.i!=null)go(+e.target.dataset.i)};  $$('.lp').forEach(lp=>{
  lp.addEventListener('click',()=>enterShop(lp.dataset.shop));
  lp.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();enterShop(lp.dataset.shop)}});
  lp.addEventListener('mousemove',e=>{const r=lp.getBoundingClientRect();lp.style.setProperty('--mx',(e.clientX-r.left)+'px');lp.style.setProperty('--my',(e.clientY-r.top)+'px')});
});

for(let i=0;i<14;i++){const b=document.createElement('span'),s=20+Math.random()*60;b.style.cssText=`left:${Math.random()*100}%;width:${s}px;height:${s}px;animation-duration:${6+Math.random()*8}s;animation-delay:${-Math.random()*10}s`;$('#bubbles').appendChild(b)}
function tick(){const n=new Date(),e=new Date(n);e.setHours(23,59,59,999);const d=e-n,p=x=>String(Math.floor(x)).padStart(2,'0');$('#th').textContent=p(d/36e5);$('#tm').textContent=p(d\%36e5/6e4);$('#ts').textContent=p(d%6e4/1e3)}
setInterval(tick,1000);

/* ================= Start ================= */
$('#yr').textContent=new Date().getFullYear();
(async()=>{
  initLanding();
  if(CLOUD){
    $('#loginHint').style.display='none';$('#lUserLbl').textContent='E-Mail';$('#lUser').type='email';$('#lUser').autocomplete='email';$('#lSwitch').style.display='';setAuthMode('in');
    $('#noteLocal').style.display='none';$('#noteCloud').style.display='';
    $('#credLocal').style.display='none';$('#credCloud').style.display='';
    au.onAuthStateChanged(auth,u=>{user=u;admin=false;setAdminUI();if(!u){openAdminAfter=false;close('adminOv');close('accOv')}watchOrders(!!u)});
  }else orders=LS.get('mejt_orders',[]);
  await Promise.all([loadProducts(),loadSettings()]);
  started=true;setAdminUI();renderOrders();
  const h=location.hash.slice(1);if(SHOPS[h])enterShop(h,true);
  setTimeout(()=>$('#loader').classList.add('hide'),900);
})();
