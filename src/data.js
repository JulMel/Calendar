import leden from "./images/leden.png";
import unor from "./images/unor.png";
import brezen from "./images/brezen.png";
import duben from "./images/duben.png";
import kveten from "./images/kveten.png";
import cerven from "./images/cerven.png";
import cervenec from "./images/cervenec.png";
import srpen from "./images/srpen.png";
import zari from "./images/zari.png";
import rijen from "./images/rijen.png";
import listopad from "./images/listopad.png";
import prosinec from "./images/prosinec.png";

const AllMonths = [
  {
    id: 0,
    image: prosinec,
    title: "Prosinec",
    holiday: "Mikuláš * Vánoce",
    pranostics: "Prosinec se sněhem na pěšině, žito je v každé vysočině.",
    description:
      "Svět se halí do bílé a světýlek. Čas se zpomaluje a voní po skořici a domově.",
    category: "zima",
  },
  {
    id: 1,
    image: leden,
    title: "Leden",
    holiday: "Nový rok * Tři královvé",
    pranostics: "V lednu mráz - těší nás; v lednu voda - věčná škoda.",
    description:
      "Zasněžená krajina utichá pod těžkou peřinou zimy. Všechno odpočívá a čeká na nový začátek.",
    category: "zima",
  },
  {
    id: 2,
    image: unor,
    title: "Únor",
    holiday: "Valentýn",
    pranostics: "Únor bílý, pole sílí",
    description:
      "Mrzne až praští, ale v tichu zimy se objevují první známky naděje. Na větvi se objevuje poupátko.",
    category: "zima",
  },
  {
    id: 3,
    image: brezen,
    title: "Březen",
    holiday: "Nový rok * Mezinárodní den žen",
    pranostics: "Březen - za kamna vlezem.",
    description:
      "Země se probouzí a sněženky prorážejí zbytky sněhu. Jaro šeptá, že přichází.",
    category: "jaro",
  },
  {
    id: 4,
    image: duben,
    title: "Duben",
    holiday: "Apríl * Velikonoce",
    pranostics: "Duben, ještě tam budem",
    description:
      "Déšť omývá první květy a příroda se znovu nadechuje. Všechno kvete, i když nebe ještě mhouří oči.",
    category: "jaro",
  },
  {
    id: 5,
    image: kveten,
    title: "Květen",
    holiday: "1. Máj * Den matek",
    pranostics: "Květen chladný, k sýpkám přístup radný.",
    description:
      "Louky hrají všemi barvami a vzduch voní jako čerstvě otevřený život. Je čas být venku.",
    category: "jaro",
  },
  {
    id: 6,
    image: cerven,
    title: "Červen",
    holiday: "Den dětí",
    pranostics: "V červnu deštivo a chladno způsobí rok neúrodný snadno.",
    description:
      "Slunce se vyhřívá na obloze a dny jsou dlouhé a plné radosti. Zahrady a pole dozrávají do krásy.",
    category: "léto",
  },
  {
    id: 7,
    image: cervenec,
    title: "Červenec",
    holiday: "Cyril a Metoděj * Jan Hus",
    pranostics: "Na mokrý červenec následuje bouře a krupobití.",
    description:
      "Léto je v plné síle, zní smíchem, vodou a tichem horkých večerů. Všechno je zlaté a klidné.",
    category: "léto",
  },
  {
    id: 8,
    image: srpen,
    title: "Srpen",
    holiday: "Prázdniny",
    pranostics: "Když srpen z počátku hřeje, ledový vítr v zimě dlouho věje.",
    description:
      "Slunečnice se hrdě otáčí za sluncem a krajina pomalu žloutne. Léto se pomalu sklání ke konci.",
    category: "léto",
  },
  {
    id: 9,
    image: zari,
    title: "Září",
    holiday: "Svatý Václav",
    pranostics: "Co srpen nedopeče, září nedovaří.",
    description:
      "Víno dozrává, vzduch je svěží a rána už mají nádech podzimu. Začíná nový rytmus.",
    category: "podzim",
  },
  {
    id: 10,
    image: rijen,
    title: "Říjen",
    holiday: "Vznik Československa * Halloween",
    pranostics: "Říjen hodně zelený, leden velmi studený.",
    description:
      "Listy se barví do ohnivých tónů a příroda září naposled. Všechno voní po dýních a vlhkém listí.",
    category: "podzim",
  },
  {
    id: 11,
    image: listopad,
    title: "Listopad",
    holiday: "Sametová revoluce",
    pranostics: "Když krtek v listopadu ryje, budou na vánoce létat komáři.",
    description:
      "Stromy shazují poslední listy a vzduch je chladný a tichý. Přichází čas klidu a ztišení.",
    category: "podzim",
  },
];

export default AllMonths;
