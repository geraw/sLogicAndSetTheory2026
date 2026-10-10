---
theme: frankfurt
infoLine: true
author: "גרא וייס"
title: "יחסי סדר חלקי"
htmlAttrs:
  dir: rtl
  lang: heb
mdc: true
download: true
exportFilename: 03-posets.pdf
---
# יחסי סדר 
## הרצאה בקורס: מבוא ללוגיקה ותורת הקבוצות

מרצה: פרופ. גרא וייס

---
section: מוטיבציה
---


# תכונות של יחס שמתאים לקרוא לו "סדר"

<div style="position: absolute; top: 120px; left: 45px; width: 900px; height: 400px; overflow: hidden; border: 0px dashed red;">
  <img src="/images/יחס סדר.png" style="width: 900px; margin-top: -90px; margin-left: -100px;" />
</div>





---
section: יחסי סדר
---

# יחס סדר 

<div style="position: absolute; top: 170px; left: 10px; width: 300px;">
  <img src="/images/order_relation_comic.png" class="rounded-xl shadow-lg border-2 border-gray-200" />
</div> 

- הגדרה: לכל קבוצה $A$, יחס $\le_R$ על $A$ נקרא יחס סדר אם הוא מקיים את שלוש התכונות הבאות:

  1. **רפלקסיביות**: $\forall a\in A\; (a \le_R a)$.

  <br />

  2. **אנטי-סימטריות**: $\forall a,b\in A\; \bigl((a \le_R b \land b \le_R a) \to a=b\bigr)$.

  <br />

  3. **טרנזיטיביות**: $\forall a,b,c\in A\; \bigl((a \le_R b \land b \le_R c) \to a \le_R c\bigr)$.

<br />

- לזוג $(A,\leq_R)$ אנו קוראים "**קבוצה סדורה חלקית**" (קס"ח).

- אם, בנוסף, לכל $a,b\in A$ מתקיים $a\le_R b$ או $b\le_R a$, אז הסדר נקרא "מלא" או "סדר קווי".

- דוגמאות:
  - $(\mathbb{N},\le_{\mathbb{N}}), (\mathbb{Z},\le_{\mathbb{Z}}), (\mathbb{Q},\le_{\mathbb{Q}}), (\mathbb{R},\le_{\mathbb{R}})$ - יחסי הסדר המוכרים על קבוצות של מספרים הם יחסי סדר קווי.

  - $(\mathcal{P}(X),\subseteq)$: יחס ההכלה על קבוצת החזקה של $X$ הוא יחס סדר חלקי.


---
layout: TwoColsHeaderCustom
---

# תרגיל לדוגמה: תת-קבוצה של קס"ח היא קס"ח

**הוכיחו או הפריכו**: אם $(A,R)$ קס"ח, אז גם $(A', R \cap (A' \times A'))$ קס"ח עבור כל תת קבוצה $A' \subseteq A$.

<v-click>

נסמן $R' = R \cap (A' \times A')$. נבדוק את תכונות יחס הסדר:
</v-click>

::left::
<v-click>

1. **רפלקסיביות:** 
   - יהי $a \in A'$. 
   - מכיוון ש-$A' \subseteq A$, אז $a \in A$. 
   - כיוון ש-$R$ רפלקסיבי על $A$, $\langle a,a \rangle \in R$. 
   - כמו כן $\langle a,a \rangle \in A' \times A'$. 
   - לכן $\langle a,a \rangle \in R'$.

2. **אנטי-סימטריות:** 
   - נניח $\langle a,b \rangle \in R'$ ו-$\langle b,a \rangle \in R'$. 
   - מהגדרת החיתוך, נובע ש-$\langle a,b \rangle \in R$ ו-$\langle b,a \rangle \in R$. 
   - כיוון ש-$R$ אנטי-סימטרי, $a=b$.
</v-click>

::right::
<v-click>

3. **טרנזיטיביות:** 
   - נניח $\langle a,b \rangle \in R'$ ו-$\langle b,c \rangle \in R'$. 
   - אז $\langle a,b \rangle, \langle b,c \rangle \in R$. 
   - כיוון ש-$R$ טרנזיטיבי, $\langle a,c \rangle \in R$. 
   - כמו כן $a,c \in A'$, ולכן $\langle a,c \rangle \in A' \times A'$. 
   - לכן $\langle a,c \rangle \in R'$.
</v-click>

::after::

**מסקנה:** $(A', R')$ הוא קס"ח.




---

# כמה יחסי סדר חלקי יש על הקבוצה $\{1,2,3\}$?

<v-clicks>

- על קבוצה של 3 איברים, מספר היחסים האפשריים הוא $2^{9} = 512$.

- **סינון רפלקסיבי**: מצמצם מ-512 ל-64. 
  - הסיבה: היחס חייב לכלול את 3 הזוגות העצמיים $\langle a,a \rangle$ לכל $a$, כך שנשארים 6 זוגות אחרים, כל אחד עם 2 אפשרויות ($2^6 = 64$).

- **סינון אנטי-סימטרי**: מצמצם מ-64 ל-27. 
  - מבין היחסים הרפלקיביים, אנו דורשים שאין זוג $\langle a,b \rangle$ ו-$\langle b,a \rangle$ יחד. לכל אחד מ-3 הזוגות הלא-עצמיים, יש 3 אפשרויות: אף כיוון, כיוון אחד או השני ($3^3 = 27$).
- **סינון טרנזיטיבי**: מצמצם מ-27 ל-19. 
  - מבין היחסים הרפלקסיביים והאנטי-סימטריים, אנו דורשים טרנזיטיביות (אם $\langle a,b \rangle$ ו-$\langle b,c \rangle$ אז $\langle a,c \rangle$). לא כל ה-27 יחסים עומדים בתנאי זה, ונשארים 19.
- השקף הבא מציג את כל 19 היחסים הללו באמצעות גרפים.

</v-clicks>

---

# כל יחסי הסדר החלקי על הקבוצה $\{1,2,3\}$
<script setup>

const generateAllPosets = () => {
  const elements = [1, 2, 3]
  const allRelations = []
  for (let i = 0; i < 512; i++) {
    const relation = new Set()
    for (let j = 0; j < 9; j++) {
      if (i & (1 << j)) {
        const a = Math.floor(j / 3) + 1
        const b = (j % 3) + 1
        relation.add(`${a}-${b}`)
      }
    }
    // check reflexive
    let reflexive = true
    for (let e of elements) {
      if (!relation.has(`${e}-${e}`)) reflexive = false
    }
    // antisymmetric
    let antisymmetric = true
    for (let a of elements) {
      for (let b of elements) {
        if (a !== b && relation.has(`${a}-${b}`) && relation.has(`${b}-${a}`)) antisymmetric = false
      }
    }
    // transitive
    let transitive = true
    for (let a of elements) {
      for (let b of elements) {
        for (let c of elements) {
          if (relation.has(`${a}-${b}`) && relation.has(`${b}-${c}`) && !relation.has(`${a}-${c}`)) transitive = false
        }
      }
    }
    if (reflexive && antisymmetric && transitive) {
      const edges = []
      for (let a of elements) {
        for (let b of elements) {
          if (a !== b && relation.has(`${a}-${b}`)) {
            edges.push({ source: a, target: b })
          }
        }
      }
      allRelations.push(edges)
    }
  }
  return allRelations
}
const allPosets = generateAllPosets()
</script>
<div style="display: grid; grid-template-columns: repeat(7, 140px); gap: 0px; margin-top: -40px; margin-right: -60px;">
  <div v-for="(edges, index) in allPosets" :key="index">
  <GraphCytoscape 
        :nodes=" [
          { id: '1', x: 50, y: 50, label: '1' },
          { id: '2', x: 150, y: 50, label: '2' },
          { id: '3', x: 100, y: 125, label: '3' }
        ]"
        :edges=" [
          { source: '1', target: '1' },
          { source: '2', target: '2', loopDirection: '90deg' },
          { source: '3', target: '3', loopDirection: '180deg' },
          ...edges.map(e => ({ source: String(e.source), target: String(e.target) }))
        ]"
        :width="170"
        :height="150" />
  </div>
</div>


---
layout: TwoColsHeaderCustom
cols: 80% 20% # ← change to 60% 40%, 320px 1fr, etc.
gap: 24px
---


# ציור קס"ח סופי  (דיאגרמת הָסֶה)


::left::

- כפי שראינו, ניתן לצייר את היחס $R$ על ידי משיכת חץ מכל $a∈A$ אל כל 
  $b∈A$ המקיים $aRb$.

- אלא שבזכות התכונות המיוחדות של יחס הסדר, ניתן לצייר את יחס הסדר בפחות חיצים

- בהנחה שהקס"ח סופי (כלומר הקבוצה $A$ סופית) ניתן לצייר קס"ח, בעזרת הכללים הבאים:
  - אין צורך לצייר את חיצי הרפלקסיביות, שכן אנו יודעים ש-$aRa$ חייב להתקיים ולכן אין צורך לציירו.

  - אם ציירנו חץ מ-$a$ ל-$b$ וחץ מ-$b$ ל-$a$ אז לא נצייר חץ מ-$a$ ל-$b$ כי אנו יודעים שחץ זה חייב להמצא.

  - נתחיל את הציור על ידי רישום כל האיברים המינימליים – אלו שאין שום איבר מתחתם
    - אם ציירנו את $a∈A$, אז נצייר בשורה מעליו את כל העוקבים המיידיים של $a$.

    - במקום לצייר חץ מ-$a$ אל עוקב מיידי $b$ שלו, נחבר את השניים בקו נקי.
    - העובדה ש-$b$ נמצא בשורה הנמצאת מעל $a$ היא שמעידה שהחץ הוא מ-$a$ ל-$b$ ולא להיפך.

<script setup lang="ts">

// Example: Boolean lattice 2^{ {1,2,3} } ordered by ⊂
const elems = ['∅','{1}','{2}','{3}','{1,2}','{1,3}','{2,3}','{1,2,3}']
const nodes = elems.map(id => ({ id, label: id }))

// Give the strict relation. (You may give *all* pairs; the component reduces transitively.)
const subset = (A:string,B:string) => {
  const toSet = (s:string)=> new Set(s.replace(/[{}\\s]/g,'').split(',').filter(Boolean))
  const X = toSet(A), Y = toSet(B)
  if (A==='∅') return Y.size>0
  if (B==='∅') return false
  return [...X].every(x=>Y.has(x)) && X.size < Y.size
}
const relations: [string,string][] = []
for (const a of elems) for (const b of elems) if (subset(a,b)) relations.push([a,b])
</script>

::right::

<div class="flex items-center justify-left" style="margin-top: 80px; scale:95%;">
<HasseDiagram
  :nodes="nodes"
  :relations="relations"
  :nodeRadius="25"
  :levelGap="90"
  :nodeGap="110"
  edgeColor="#08381dff"
  nodeStroke="#0c7e28ff"
  nodeFill="#bce8beff"
/>
</div>

---

# דיאגרמות הסדר החלקי לכל 19 היחסים על $\{1,2,3\}$

<script setup>
const generateAllPosets = () => {
  const elements = [1, 2, 3]
  const allRelations = []
  for (let i = 0; i < 512; i++) {
    const relation = new Set()
    for (let j = 0; j < 9; j++) {
      if (i & (1 << j)) {
        const a = Math.floor(j / 3) + 1
        const b = (j % 3) + 1
        relation.add(`${a}-${b}`)
      }
    }
    // check reflexive
    let reflexive = true
    for (let e of elements) {
      if (!relation.has(`${e}-${e}`)) reflexive = false
    }
    // antisymmetric
    let antisymmetric = true
    for (let a of elements) {
      for (let b of elements) {
        if (a !== b && relation.has(`${a}-${b}`) && relation.has(`${b}-${a}`)) antisymmetric = false
      }
    }
    // transitive
    let transitive = true
    for (let a of elements) {
      for (let b of elements) {
        for (let c of elements) {
          if (relation.has(`${a}-${b}`) && relation.has(`${b}-${c}`) && !relation.has(`${a}-${c}`)) transitive = false
        }
      }
    }
    if (reflexive && antisymmetric && transitive) {
      const edges = []
      for (let a of elements) {
        for (let b of elements) {
          if (a !== b && relation.has(`${a}-${b}`)) {
            edges.push([String(a), String(b)])
          }
        }
      }
      allRelations.push(edges)
    }
  }
  return allRelations
}
const allPosets = generateAllPosets()
console.log(allPosets)
</script>

<div style="display: grid; grid-template-columns: repeat(7, 140px); gap: 7px; margin-top: -40px; margin-right: -60px;">
  <div v-for="(relations, index) in allPosets" :key="index" style="text-align: center; scale:0.75;">
    <HasseDiagram
      :nodes="[{id:'1',label:'1'},{id:'2',label:'2'},{id:'3',label:'3'}]"
      :relations="relations"
      :nodeRadius="12"
      :levelGap="40"
      :nodeGap="50"
      :padding="35"
      :nodeFill="'#bce8beff'"
    />
    <!-- <div style="font-size: 12px; margin-top: 5px;">{{ index + 1 }}</div> -->
  </div>
</div>


--- 

# דיאגרמת הסה של יחסי הסדר החלקי על $\{1,2,3\}$ לפי סדר ההכלה

<script setup>

import { h } from 'vue';
import HasseDiagram from './components/HasseDiagram.vue'; // Adjust the path as needed

// Reuse the shared generator (renamed to generateAllPosets above).
// Some setups scope <script setup> per slide; guard and provide a local
// fallback generator so the slide still renders when the shared function
// is not visible in this block.
let allPosets = []
if (typeof generateAllPosets === 'function') {
  allPosets = generateAllPosets()
} else {
  // local fallback generator (produces edges as arrays of strings)
  const elements = [1, 2, 3]
  for (let i = 0; i < 512; i++) {
    const relation = new Set()
    for (let j = 0; j < 9; j++) {
      if (i & (1 << j)) {
        const a = Math.floor(j / 3) + 1
        const b = (j % 3) + 1
        relation.add(`${a}-${b}`)
      }
    }
    // check reflexive
    let reflexive = true
    for (let e of elements) if (!relation.has(`${e}-${e}`)) reflexive = false
    // antisymmetric
    let antisymmetric = true
    for (let a of elements) for (let b of elements) if (a !== b && relation.has(`${a}-${b}`) && relation.has(`${b}-${a}`)) antisymmetric = false
    // transitive
    let transitive = true
    for (let a of elements) for (let b of elements) for (let c of elements)
      if (relation.has(`${a}-${b}`) && relation.has(`${b}-${c}`) && !relation.has(`${a}-${c}`)) transitive = false

    if (reflexive && antisymmetric && transitive) {
      const edges = []
      for (let a of elements) for (let b of elements) if (a !== b && relation.has(`${a}-${b}`)) edges.push([String(a), String(b)])
      allPosets.push(edges)
    }
  }
}


// Build posets as objects with id and edges to feed the small Hasse renderers.
const posets = allPosets.map((edges, idx) => ({ id: idx + 1, edges }))

// Helper to test inclusion: are all pairs in a included in b?
const isIncluded = (a = [], b = []) => {
  const setB = new Set(b.map(p => p.join('|')))
  return a.every(p => setB.has(p.join('|')))
}

// Connect poset i -> j if poset i is included in poset j (i != j).
const hasseEdges = []
for (let i = 0; i < posets.length; i++) {
  for (let j = 0; j < posets.length; j++) {
    if (i === j) continue
    if (isIncluded(posets[i].edges, posets[j].edges)) {
      hasseEdges.push({ source: i + 1, target: j + 1 })
    }
  }
}


const nodes1 = posets.map(p => ({
  id: String(p.id),
  content: {
    render() {
      return h(HasseDiagram, {
        nodes: [
          { id: '1', label: '1' },
          { id: '2', label: '2' },
          { id: '3', label: '3' }
        ],
        relations: p.edges,
        nodeRadius: 6,
        levelGap: 20,
        nodeGap: 30,
        padding: 0,
        fontSize: 10,
        edgeColor:"#08381dff",
        nodeStroke:"#0c7e28ff",
        nodeFill:"#bce8beff",
         nodeStrokeWidth: "1",
        strokeWidth: "2",
      })
    }
  }
}))

const nodes2 = posets.map(p => ({
  id: String(p.id),
  label: `${p.id}`
}))

</script>

<div class="text-sm" style="position: absolute; bottom: 40px; right: 40px; width: 230px;">

האיברים המירביים בדיאגרמה (השורה העליונה) הם בדיוק 6 הסדרים הקוויים על $\{1,2,3\}$.

</div>




<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
  <HasseDiagram
    :nodes="nodes1"
    :relations="hasseEdges.map(e => ([
      String(e.source),
      String(e.target)
    ]))"
    :nodeRadius="30"
    :levelGap="100"
    :nodeGap="100"
    :padding="0"
    edgeColor="#0c207cff"
    nodeStroke="#2e40c7ff"
    nodeFill="#adbde8ff"
    :strokeWidth="2"
    :nodeStrokeWidth="1"  
  />
</div>

---

# דוגמה: היחס "מחלק" על $\mathbb{N}$

- מספר שלם $a$ הוא מחלק (או גורם) של מספר שלם $b$ אם אפשר לכתוב את $b$ כמכפלה של $a$ במספר שלם $c$, כלומר אם קיים $c \in \mathbb{Z}$ עבורו $b = a c$. במקרה כזה, השארית בחלוקה של $b$ ב-$a$ היא 0.

- נהוג לרשום $a \mid b$ או $a \nmid b$ כדי לציין כי $a$ מחלק או לא מחלק את $b$ בהתאמה (לדוגמה, $3 \mid 81$ אבל $7 \nmid 50$).

- היחס "מחלק" על המספרים הטבעיים מוגדר כ: $\{\langle a,b \rangle \in \mathbb{N} \times \mathbb{N} \mid a \mid b\}$.

- זהו יחס סדר חלקי על $\mathbb{N}$, שכן הוא רפלקטיבי, אנטי-סימטרי וטרנזיטיבי.
  
- הוא גם יחס סדר חלקי על כל תת-קבוצה של $\mathbb{N}$,
  - לדוגמה על קבוצת המחלקים של מספר טבעי נתון:


<script setup lang="ts">

/** Choose the number whose divisors you want */
const n = 30

function divisors(n: number) {
  const ds: number[] = []
  for (let d = 1; d <= n; d++) if (n % d === 0) ds.push(d)
  return ds.sort((a, b) => a - b)
}

const elems = divisors(n)            // e.g., n=30 -> [1,2,3,5,6,10,15,30]
const nodes = elems.map(v => ({ id: String(v), label: String(v) }))

// strict relation: a | b and a ≠ b
const relations: [string, string][] = []
for (const a of elems)
  for (const b of elems)
    if (a !== b && b % a === 0) relations.push([String(a), String(b)])
</script>

<div class="flex items-center justify-center" style="margin-top: -160px; scale:90%; margin-left: -500px; /* adjust as needed */">
  <HasseDiagram
    :nodes="nodes"
    :relations="relations"  
    :nodeWidth="250"
    :levelGap="90"
    :nodeGap="110"
    edgeColor="#133e99ff"
    nodeStroke="#0c2457ff"
    nodeFill="#d6dff3ff"
  />
</div>

---
section: מושגים
---




# איברי מינימום, מקסימום, מזערי ומירבי


- איבר $a \in A$ הוא **מזערי** אם אין איבר $b \in A$ שונה ממנו כך ש-$b \le_R a$.

- איבר $a \in A$ הוא **מירבי** אם אין איבר $b \in A$ שונה ממנו כך ש-$a \le_R b$.

- $a \in A$ הוא **מינימום** אם לכל $b \in A$, $a \le_R b$.

- איבר $a \in A$ הוא **מקסימום** אם לכל $b \in A$, $b \le_R a$.

<div style="display: flex; justify-content: space-around; align-items: center;">
  <div>
    <HasseDiagram
      :nodes="[{id:'a',label:'a'},{id:'b',label:'b'},{id:'c',label:'c'}, {id:'d',label:'d'}]"
      :relations="[['a','b'],['a','c'],['c','d']]"
      :nodeRadius="15"
      :levelGap="60"
      :nodeGap="80"
    />
    <div style="text-align: center;">
      a מינימום ומזערי  
      <br>
      b ו-d מירביים
    </div>
  </div>
  <div>
    <HasseDiagram
      :nodes="[{id:'a',label:'a'},{id:'b',label:'b'},{id:'c',label:'c'}, {id:'d',label:'d'}, {id:'e',label:'e'}]"
      :relations="[['a','b'],['c','d'], ['b','e'],['d','e']]"
      :nodeRadius="15"
      :levelGap="60"
      :nodeGap="80"
    />
    <div style="text-align: center;">
      e מקסימום ומירבי
      <br>
      a ו-c מזעריים
    </div>
  </div>
</div>

---

# דוגמה

- תהי $\mathcal{F} \subseteq \mathcal{P}(X)$ **סופית** ולא ריקה, המקיימת:

  - אם $A,B \in \mathcal{F}$ אז $A \cap B \in \mathcal{F}$

  - אם $A,B \in \mathcal{F}$ אז $A \cup B \in \mathcal{F}$


- **החיתוך האונארי** $\bigcap \mathcal{F}$ הוא ה**מינימום** של $(\mathcal{F}, \subseteq)$.

  - הוא שייך ל-$\mathcal{F}$ (חיתוך של מספר סופי של איברים), ומוכל בכל איבר $A \in \mathcal{F}$.

- **האיחוד האונארי** $\bigcup \mathcal{F}$ הוא ה**מקסימום** של $(\mathcal{F}, \subseteq)$.

  - הוא שייך ל-$\mathcal{F}$ (מאותה סיבה), ומכיל כל איבר $A \in \mathcal{F}$.

- הסופיות נחוצה:
  - $\mathcal{F}=\{\{n,n+1,n+2,\dots\} \mid n\in\mathbb{N}\}$ סגורה לחיתוך ולאיחוד,
  - אך $\bigcap\mathcal{F}=\emptyset\notin\mathcal{F}$.

<div style="position: absolute; top: 130px; left:120px;">
  <HasseDiagram
    :nodes="[
      {id:'empty', label:'∅'},
      {id:'1', label:'{1}'},
      {id:'2', label:'{2}'},
      {id:'12', label:'{1,2}'},
      {id:'13', label:'{1,3}'},
      {id:'24', label:'{2,4}'},
      {id:'123', label:'{1,2,3}'},
      {id:'124', label:'{1,2,4}'},
      {id:'1234', label:'{1,2,3,4}'}
    ]"
    :relations="[
      ['empty','1'], ['empty','2'],
      ['1','12'], ['1','13'],
      ['2','12'], ['2','24'],
      ['12','123'], ['12','124'],
      ['13','123'],
      ['24','124'],
      ['123','1234'], ['124','1234']
    ]"
    :nodeRadius="30"
    :levelGap="80"
    :nodeGap="120"
  />
</div>



---

# שאלה: איברים מינימליים ביחס החלוקה

נתבונן ביחס "מחלק את" ($a \mid b$):

$$R = \{\langle a,b \rangle \in (\mathbb{N} \setminus\{0\}) \times (\mathbb{N} \setminus\{0\}) \mid (a \mid b)\}$$


<br>

- **שאלה 1:**
מהם האיברים המינימליים בקס"ח $(\mathbb{N} \setminus\{0\}, R)$ ?

  <v-click>

    - **תשובה:** המספר $1$ הוא האיבר המינימלי היחיד.
      
      - הוא גם **מינימום** (כי הוא מחלק כל מספר טבעי).

  </v-click>

<br>

- **שאלה 2:**
מהם האיברים המינימליים בקס"ח $(\mathbb{N} \setminus\{0,1\}, R)$ ?

  <v-click>

    - **תשובה:** המספרים הראשוניים ($2, 3, 5, 7, \dots$).
      - אם $p$ ראשוני, אין ב-$A$ אף מספר שמחלק אותו (כי המחלקים היחידים שלו הם 1 ו-$p$, ו-$1 \notin A$). לכן $p$ מינימלי.
      - אם $n$ פריק, קיים לו מחלק ב-$A$ שקטן ממנו, ולכן הוא לא מינימלי.

  </v-click>

---

# עוקב מיידי, איברים ניתנים להשוואה, סדר קווי, שרשראות ואנטי-שרשראות


- איבר $b$ הוא **עוקב מיידי** של $a$ אם $a \le_R b$, $a \neq b$, ואין $c$ שונה משניהם כך ש-$a \le_R c \le_R b$.
  
- שני איברים $a, b \in A$ **ניתנים להשוואה** אם $a \le_R b$ או $b \le_R a$.

- יחס סדר שבו כל זוג איברים ניתנים להשוואה הוא **יחס סדר קווי** (או סדר מלא).

- **שרשרת** היא תת-קבוצה של קס"ח שבה כל שני איברים ניתנים להשוואה.

- **אנטי-שרשרת** היא תת-קבוצה של קס"ח שבה אין שני איברים שונים הניתנים להשוואה.

<div style="display: flex; justify-content: space-around; align-items: center;">
  <div>
    <HasseDiagram
      :nodes="[{id:'a',label:'a'},{id:'b',label:'b'},{id:'c',label:'c'}, {id:'d',label:'d'}]"
      :relations="[['a','b'],['a','c'],['c','d']]"
      :nodeRadius="15"
      :levelGap="60"
      :nodeGap="80"
    />
    <div style="text-align: center;">
      {a,c,d} שרשרת, 
      <br>
      {b,d} אנטי-שרשרת
    </div>
  </div>
  <div>
    <HasseDiagram
      :nodes="[{id:'a',label:'a'},{id:'b',label:'b'},{id:'c',label:'c'}, {id:'d',label:'d'}, {id:'e',label:'e'}]"
      :relations="[['a','b'],['c','d'], ['b','e'],['d','e']]"
      :nodeRadius="15"
      :levelGap="60"
      :nodeGap="80"
    />
    <div style="text-align: center;">
            {a,b,e}  ו {c,d,e} שרשראות
      <br>
      {a,c} ו-{b,d} אנטי-שרשראות
    </div>
  </div>
</div>

---

# דוגמאות לעוקב מיידי (או היעדרו)

<v-clicks depth="2">

**1. במספרים הטבעיים $(\mathbb{N}, \le)$:**
  - לכל מספר $n$, העוקב המיידי הוא $n+1$.
  - אין מספר טבעי בין $n$ ל-$n+1$.

<br>

**2. בהכלת קבוצות $(\mathcal{P}(A), \subseteq)$:**
  - קבוצה $B$ היא עוקב מיידי של $A$ אם $A \subset B$ ו-$|B| = |A| + 1$.
  - דוגמה: $\{1, 2\}$ הוא עוקב מיידי של $\{1\}$.

<br>

**3. במספרים הרציונליים $(\mathbb{Q}, \le)$ והממשיים $(\mathbb{R}, \le)$:**
- **אין** עוקב מיידי לאף איבר.
- **הסיבה:** צפיפות. לכל שני מספרים שונים $x < y$, קיים $z$ כך ש-$x < z < y$ (למשל $z = \frac{x+y}{2}$).
- לכן, לא ניתן "לקפוץ" למספר הבא; תמיד יש מספר נוסף באמצע.


</v-clicks>

---

# אם יש מינימום אז הוא המזערי היחיד, <br>  ואם יש מקסימום אז הוא המירבי היחיד

<v-clicks depth="2">

- נניח שיש בקס"ח $P = (V, \leq_P)$
  איבר מינימום  $m$. 

- **$m$ הוא איבר מזערי:**
  - נניח בשלילה כי קיים $v \in V$ כך ש-$v \neq m$ ו-$v \leq_P m$.
  - לפי ההגדרה של מינימום, $m \leq_P v$.
  - לפי אנטי-סימטריות מקבלים $m=v$ – סתירה. לכן $m$ מזערי.
 
- **אין איבר מזערי אחר:**
  - יהי $m' \in V$ איבר מזערי כלשהו.
  - לפי ההגדרה של מינימום, $m \leq_P m'$.
  - מכיוון ש-$m'$ מזערי, אין איבר **שונה** ממנו שקטן ממנו. לכן $m = m'$.

- **מסקנה:** $m$ הוא המזערי היחיד. בפרט, המינימום יחיד (כל מינימום הוא מזערי, ולכן שווה ל-$m$).

- **תרגיל**: הוכיחו באותו אופן שאם יש מקסימום אז הוא המירבי היחיד.

</v-clicks>

<div style="position: absolute; bottom: 200px; left: 50px;">
<img src="/images/יחידות המקסימום.png" alt="Exercise Icon" style="width:170pt; height:170pt;" />
</div>

---

# יכולים להיות כמה איברים מינימליים וכמה איברים מקסימליים

- לפי השקף הקודם, אם יש מינימום או מקסימום, הוא יחיד.
  
- אך יכולים להיות כמה איברים מזעריים או מרביים.

- במקרה כזה, אין מינימום או מקסימום בהתאמה.

<div class="flex items-center justify-center" style="margin-top: 50px;">
  <HasseDiagram
    :nodes="[{id:'a',label:'a'},{id:'b',label:'b'},{id:'c',label:'c'}, {id:'d',label:'d'}]"
    :relations="[['a','b'],['c','d']]"
    :nodeRadius="15"
    :levelGap="60"
    :nodeGap="80"
  />
</div>

<div style="text-align: center;">
  a ו-c מזעריים (אין מינימום)  
  <br>
  b ו-d מירביים (אין מקסימום)
</div>

---

# מזערי יחיד שאינו מינימום

- ראינו שאם יש מינימום, הוא מזערי יחיד.
- ב**קבוצות סופיות**, אם יש מזערי יחיד, הוא בהכרח מינימום.
- אך ב**קבוצות אינסופיות**, ייתכן שיהיה מזערי יחיד שאינו מינימום!

- **דוגמה:**
  - נגדיר קבוצה $P = \mathbb{Z} \cup \{a\}$ (המספרים השלמים ועוד איבר נוסף $a$).
  - יחס הסדר: הסדר הרגיל על $\mathbb{Z}$, כאשר $a$ לא ניתן להשוואה עם אף איבר ב-$\mathbb{Z}$.

- **ניתוח:**
  - ב-$\mathbb{Z}$ אין איבר מינימלי (לכל מספר שלם יש קטן ממנו).
  - האיבר $a$ הוא מינימלי (כי אין איבר שקטן ממנו).
  - לכן, $a$ הוא האיבר המינימלי ה**יחיד**.
  - האם $a$ הוא מינימום? **לא**, כי הוא לא קטן מאיברי $\mathbb{Z}$ (למשל $a \not\le 5$).

<img src="/images/unique_minimal_non_minimum.png" class="h-60 rounded-xl shadow-lg border-2 border-gray-200" style="position: absolute; bottom: 100px; left: 50px;" />



---

#  ביחס סדר קווי, מזערי הוא מינימום ומירבי הוא מקסימום

- **תזכורת**: ביחס סדר קווי (סדר מלא), כל זוג איברים ניתנים להשוואה.
  
<v-clicks depth="2">

- **הוכחה שמזערי הוא מינימום**:

  - אם יש איבר מזערי $m$, אז לכל $x \in A$, $x \leq m$ או $m \leq x$.  
  - מכיוון ש-$m$ מזערי, אין $x$ כך ש-$x \leq m$ ו-$x \neq m$.
  - לכן, לכל $x \neq m$, $m \leq x$.
  - כלומר, $m$ הוא מינימום.

- **תרגיל**:  הוכיחו, באותו האופן כי אם יש איבר מירבי אז הוא מקסימום.

- **מסקנה**: ביחס סדר קווי יכול להיות לכל היותר איבר מזערי אחד ואיבר מירבי אחד.    
  - ייתכן שלא יהיה מינימום או מקסימום כלל.
    - דוגמא: ב-$(\mathbb{R}, \leq)$ אין מינימום ואין מקסימום.
    - ב-$(\mathbb{N}, \leq)$ יש מינימום (המספר 0) ואין מקסימום.

</v-clicks>

---

# עוקב מיידי לפי סדר קווי הוא יחיד כשהוא קיים

- ביחס סדר קווי, אם לאיבר יש עוקב מיידי, אז הוא יחיד (ייתכן שאין עוקב מיידי כלל, למשל ב-$(\mathbb{Q},\le)$).

- **תזכורת**: איבר $b$ הוא **עוקב מיידי** של $a$ אם $a \le_R b$, $a \neq b$, ואין $c$ שונה משניהם כך ש-$a \le_R c \le_R b$.

- הוכחה:
  <v-clicks depth="2">

  - נניח שיש איבר $x$ שהוא עוקב מיידי של $y$
  - נניח בשלילה שקיים $x' \neq x$ שגם הוא עוקב מיידי של $y$.
  - מכיוון שמדובר בסדר קווי כל שני איברים ניתנים להשוואה
  - לכן, או ש-$x \leq x'$ או ש-$x' \leq x$.
    - אם $x \leq x'$ אז $y \leq x \leq x'$ ו-$x$ שונה מ-$y$ ומ-$x'$,
      סתירה לכך ש-$x'$ הוא עוקב מיידי של $y$.
    - אם $x' \leq x$ אז $y \leq x' \leq x$ ו-$x'$ שונה מ-$y$ ומ-$x$,
      סתירה לכך ש-$x$ הוא עוקב מיידי של $y$.
    - קיבלנו סתירה בשני המקרים.
  - לפיכך, אם יש עוקב מיידי, הוא יחיד

  </v-clicks>

<div style="position: absolute; bottom: 100px; left: 50px;">
<img src="/images/עוקב מידי יחיד.png" alt="Exercise Icon" style="width:200pt; height:200pt;" />
</div>




---

# סדר חלקי שאינו קווי אינו מקסימלי (תחת הכלה)

<v-clicks depth="2">

- **דוגמה:** $R = \{\langle 1,1\rangle,\langle 2,2\rangle,\langle 3,3\rangle\}$ (יחס השוויון על $\{1,2,3\}$).
  - $1$ ו-$2$ אינם ניתנים להשוואה ב-$R$, ולכן $R$ אינו קווי.
  - $R' = R \cup \{\langle 1,2\rangle\}$ הוא יחס סדר חלקי, ו-$R \subsetneq R'$. לכן $R$ אינו מקסימלי.

</v-clicks>

<div v-click="1" style="display: flex; justify-content: space-around; align-items: center; margin: 4px 0;">
  <div>
    <HasseDiagram
      :nodes="[{id:'1',label:'1'},{id:'2',label:'2'},{id:'3',label:'3'}]"
      :relations="[]"
      :nodeRadius="15"
      :levelGap="60"
      :nodeGap="80"
    />
    <div style="text-align: center;">R</div>
  </div>
  <div v-click="3">
    <HasseDiagram
      :nodes="[{id:'1',label:'1'},{id:'2',label:'2'},{id:'3',label:'3'}]"
      :relations="[['1','2']]"
      :nodeRadius="15"
      :levelGap="60"
      :nodeGap="80"
    />
    <div style="text-align: center;">R' = R ∪ {⟨1,2⟩}</div>
  </div>
</div>

<v-clicks>

- **באופן כללי:** אם $a,b \in A$ אינם ניתנים להשוואה ב-$R$, אז
  $$R' \;=\; R \;\cup\; \{\langle x,y\rangle\in A\times A \mid x\le_R a \text{ ו- } b\le_R y\}$$
  הוא יחס סדר חלקי המכיל ממש את $R$ (כי $\langle a,b\rangle\in R'\setminus R$).
- בדוגמה ($a=1$, $b=2$) מתקבל בדיוק $R' = R \cup \{\langle 1,2\rangle\}$.
- ההוכחה ש-$R'$ הוא סדר חלקי – לקריאה עצמית (בשקף הבא).

</v-clicks>

---

# יחס סדר מקסימלי (תחת הכלה) הוא סדר קווי (לקריאה עצמית)

- נניח בשלילה ש-$R$  מקסימלי ואינו קווי: קיימים $a,b \in A$ כך שאין $a≤_R b$ וגם אין $b \leq_R a$.

- נבנה יחס $R'$ :    
     $$
     R' \;=\; R \;\cup\; \{\langle x,y\rangle\in A\times A \mid x\le_R a \text{ ו- } b\le_R y\}.
     $$

<v-switch>


<template #1>

  - נראה ש-$R'$ טרנזיטיבי : 
    - ניקח שני זוגות $\langle x,y\rangle,\langle y,z\rangle\in R'$.

<div style="display: flex; justify-content: space-between; gap: 16px; font-size: 10px; margin-top: 16px;">

<div style="flex: 1; border: 1px solid #ccc; padding: 8px; border-radius: 4px;">

<b>מקרה 1:</b> אם שניהם ב-$R$:
- לפי טרנזיטיביות של $R$, גם $\langle x,z\rangle\in R$.
- מכיוון ש-$R \subseteq R'$, נובע ש-$\langle x,z\rangle\in R'$.
</div>

<div style="flex: 1; border: 1px solid #ccc; padding: 8px; border-radius: 4px;">

<b>מקרה 2:</b> אם $\langle x,y\rangle \notin R$ ו-$\langle y,z\rangle\in R$:
- מהגדרת $R'$, מתקיים $x\le_R a$ ו-$b\le_R y$.
- מטרנזיטיביות של $R$, נובע ש-$b\le_R z$.
- לפי ההגדרה של $R'$, גם $\langle x,z\rangle\in R'$.
</div>

<div style="flex: 1; border: 1px solid #ccc; padding: 8px; border-radius: 4px;">

<b>מקרה 3:</b> אם $\langle x,y\rangle \in R$ ו-$\langle y,z\rangle\notin R$:
- מהגדרת $R'$, מתקיים $y\le_R a$ ו-$b\le_R z$.
- מטרנזיטיביות של $R$, נובע ש-$x\le_R a$.
- לפי ההגדרה של $R'$, גם $\langle x,z\rangle\in R'$.
</div>

<div style="flex: 1; border: 1px solid #ccc; padding: 8px; border-radius: 4px;">

<b>מקרה 4:</b> אם אף אחד מהם אינו ב-$R$:
- מהגדרת $R'$, מתקיים $x\le_R a$, $b\le_R y$, $y\le_R a$, ו-$b\le_R z$.
- לפי ההגדרה של $R'$, גם $\langle x,z\rangle\in R'$.
</div>

</div>


- <b>מסקנה:</b> בכל המקרים, $\langle x,z\rangle\in R'$, ולכן $R'$ טרנזיטיבי.

</template>

<template #2>

- נראה ש-$R'$ אנטי-סימטרי:
    - ניקח שני זוגות $\langle x,y\rangle,\langle y,x\rangle\in R'$ ונוכיח ש-$x = y$.

<div style="display: flex; justify-content: space-between; gap: 16px;  margin-top: 16px; font-size: 11px; flex-wrap: wrap;">

<div style="flex: 1; border: 1px solid #ccc; padding: 8px; border-radius: 4px;">

<b>מקרה 1:</b> אם $\langle x,y\rangle \in R$ וגם $\langle y,x\rangle \in R$:
- לפי אנטי-סימטריות של $R$, נובע ש-$x = y$.
</div>

<div style="flex: 1; border: 1px solid #ccc; padding: 8px; border-radius: 4px;">

<b>מקרה 2:</b> אם $\langle x,y\rangle \notin R$ אבל $\langle y,x\rangle \in R$:
- לפי ההגדרה של $R'$, נובע ש-$x \le_R a$ ו-$b \le_R y$.
-  מטרנזיטיביות של $R$, $y \le_R a$ ו-$b \le_R x$.
-  מטרנזיטיביות של $R$, נובע ש-$b \le_R y \le_R x \le_R a$ 
-  בסתירה להנחה ש-$a$ ו-$b$ אינם ניתנים להשוואה.
</div>

<div style="flex: 1; border: 1px solid #ccc; padding: 8px; border-radius: 4px;">

<b>מקרה 3:</b> אם $\langle x,y\rangle \in R$ אבל $\langle y,x\rangle \notin R$:
- לפי ההגדרה של $R'$, נובע ש-$y \le_R a$ ו-$b \le_R x$.
- מטרנזיטיביות של $R$, $x \le_R a$ ו-$b \le_R y$.
- מטרנזיטיביות של $R$, נובע ש-$b \le_R x \le_R y \le_R a$
- בסתירה להנחה ש-$a$ ו-$b$ אינם ניתנים להשוואה.
</div>

</div>

<div style="margin-top: 16px;">

<b>מסקנה:</b> בכל המקרים, אם $\langle x,y\rangle \in R'$ וגם $\langle y,x\rangle \in R'$, אז $x = y$, ולכן $R'$ אנטי-סימטרי.
</div>

</template>


<template #3>

  - הראינו ש-$R'$ טרנזיטיבי ואנטי-סימטרי.

  - ברור ש-$R'$ רפלקסיבי (כי $R$ רפלקסיבי).


  - **מסקנה**: יחס $R'$ הוא יחס סדר חלקי.
  - יחס $R'$ מכיל את $R$ (כי כל זוג ב-$R$ נמצא גם ב-$R'$).
  - היחס $R'$ גדול ממש מ-$R$ בסדר ההכלה כי $\langle a,b \rangle \in R'$ אבל $\langle a,b \rangle \notin R$ (לפי ההנחה שלנו).
  - לכן, $R$ אינו יחס סדר חלקי מקסימלי - בסתירה להנחה.

</template>

</v-switch>

---

# יחס סדר קווי הוא מקסימלי לפי יחס ההכלה

- נניח בשלילה ש-$R$ הוא יחס סדר קווי אך אינו מקסימלי לפי יחס ההכלה.
  
- כלומר, קיים יחס $R'$ כך ש-$R \subset R'$ ו-$R'$ הוא יחס סדר חלקי.

- מכיוון ש-$R'$ הוא יחס סדר חלקי, הוא מקיים רפלקסיביות, אנטי-סימטריות וטרנזיטיביות.

- נבחן זוג $\langle a,b \rangle \in R' \setminus R$:
  - אם $a \le_R b$, אז $\langle a,b \rangle \in R$, בסתירה לכך ש-$\langle a,b \rangle \notin R$.
  - אם $b \le_R a$, אז $\langle b,a \rangle \in R$, בסתירה לאנטי-סימטריות של $R'$.
  - אם $a$ ו-$b$ אינם ניתנים להשוואה ב-$R$, אז $R$ אינו יחס סדר קווי, בסתירה להנחה.

- **מסקנה**: לא ייתכן ש-$R$ אינו מקסימלי לפי יחס ההכלה.

<div style="margin-top: 16px;">

<b>מסקנה משולבת של שני השקפים האחרונים:</b> יחס סדר הוא קווי אם ורק אם הוא מקסימלי לפי יחס ההכלה.
</div>


---
layout: TwoColsHeaderCustom
cols: 55% 45%
gap: 24px
---

# שרשרת ואנטי-שרשרת מקסימליות

- שרשרת $C$ היא **מקסימלית** אם אין שרשרת $C'$ כך ש-$C \subsetneq C'$.
- באופן דומה, אנטי-שרשרת $D$ היא **מקסימלית** אם אין אנטי-שרשרת $D'$ כך ש-$D \subsetneq D'$.

<script setup lang="ts">

// Boolean lattice 2^{ {1,2,3} } ordered by ⊂ (same as in the Hasse-diagram slide)
const elems = ['∅','{1}','{2}','{3}','{1,2}','{1,3}','{2,3}','{1,2,3}']
const nodes = elems.map(id => ({ id, label: id }))
const subset = (A:string,B:string) => {
  const toSet = (s:string)=> new Set(s.replace(/[{}\\s]/g,'').split(',').filter(Boolean))
  const X = toSet(A), Y = toSet(B)
  if (A==='∅') return Y.size>0
  if (B==='∅') return false
  return [...X].every(x=>Y.has(x)) && X.size < Y.size
}
const relations: [string,string][] = []
for (const a of elems) for (const b of elems) if (subset(a,b)) relations.push([a,b])

// Which nodes to highlight after each click: `on` = the chain/antichain, `add` = an element that can be added
const highlights: Record<number, { on: string[], add?: string[] }> = {
  1: { on: ['∅','{1}','{1,2}','{1,2,3}'] },
  2: { on: ['∅','{1,2,3}'], add: ['{1}'] },
  3: { on: ['{1}','{2,3}'] },
  4: { on: ['{1}','{2}','{3}'] },
  5: { on: ['{1}','{2}'], add: ['{3}'] },
  6: { on: ['{1}','{2,3}'] },
}
const fillOf = (id: string, k: number) => {
  const h = highlights[k]
  if (h?.on.includes(id)) return '#f9d56e'
  if (h?.add?.includes(id)) return '#f4a6a6'
  return '#bce8beff'
}
</script>

::left::

**דוגמאות ב-$(\mathcal{P}(\{1,2,3\}),\subseteq)$:**

<v-clicks>

- $\{\emptyset,\{1\},\{1,2\},\{1,2,3\}\}$: שרשרת מקסימלית.
- $\{\emptyset,\{1,2,3\}\}$: שרשרת **לא** מקסימלית (אפשר להוסיף את $\{1\}$).
- $\{\{1\},\{2,3\}\}$: אנטי-שרשרת מקסימלית בגודל 2.
- $\{\{1\},\{2\},\{3\}\}$: אנטי-שרשרת מקסימלית בגודל 3.
- $\{\{1\},\{2\}\}$: אנטי-שרשרת **לא** מקסימלית (אפשר להוסיף את $\{3\}$).
- **מקסימלית $\neq$ הגדולה ביותר:** $\{\{1\},\{2,3\}\}$ מקסימלית, אך יש אנטי-שרשראות גדולות ממנה.

</v-clicks>

::right::

<div class="flex items-center justify-center" style="margin-top: -20px;">
<HasseDiagram
  :nodes="nodes"
  :relations="relations"
  :nodeRadius="22"
  :levelGap="75"
  :nodeGap="95"
  edgeColor="#08381dff"
  nodeStroke="#0c7e28ff"
  nodeFill="#bce8beff"
>
  <template #node="{ node }">
    <ellipse :rx="33" :ry="22" :fill="fillOf(node.id, $clicks)" stroke="#0c7e28ff" :stroke-width="2" />
    <text text-anchor="middle" dominant-baseline="central" style="font-size: 15px;">{{ node.label }}</text>
  </template>
</HasseDiagram>
</div>

---

# שרשרת ואנטי-שרשרת מקסימליות ב-$(\mathbb{N}\setminus\{0\}, \mid)$

<v-clicks depth="2">

- $C = \{2^n \mid n\in\mathbb{N}\} = \{1,2,4,8,\dots\}$ היא **שרשרת מקסימלית**:
  - $C$ שרשרת: אם $n \le m$ אז $2^n \mid 2^m$.
  - נניח ש-$c$ ניתן להשוואה עם כל איברי $C$. ניקח $n$ כך ש-$2^n > c$. אז $2^n \nmid c$, ולכן $c \mid 2^n$.
  - לכן $c$ הוא חזקה של $2$, כלומר $c \in C$. אי אפשר להוסיף ל-$C$ אף איבר.

<br>

- קבוצת הראשוניים $\{2,3,5,7,\dots\}$ היא **אנטי-שרשרת מקסימלית**:
  - זו אנטי-שרשרת: אם $p \mid q$ עבור ראשוניים $p,q$ אז $p = q$.
  - $1$ מחלק כל ראשוני, ולכל $n > 1$ יש מחלק ראשוני $p \mid n$.
  - לכן כל איבר שאינו ראשוני ניתן להשוואה עם ראשוני כלשהו, ואי אפשר להוסיף אותו.

</v-clicks>

---

# סדר לקסיקוגרפי – הגדרה כללית

- יהיו $(A,\le_A)$ ו-$(B,\le_B)$ קס"ח. נסמן $a <_A a'$ אם $a \le_A a'$ ו-$a \neq a'$.

- **הגדרה:** הסדר הלקסיקוגרפי על $A \times B$:
  $$\langle a_1,b_1\rangle \le_{lex} \langle a_2,b_2\rangle \iff a_1 <_A a_2 \;\lor\; \bigl(a_1 = a_2 \land b_1 \le_B b_2\bigr)$$

- כמו במילון: משווים לפי הרכיב הראשון, ורק אם הוא שווה – לפי הרכיב השני.

- נסמן $p <_{lex} q$ אם $p \le_{lex} q$ ו-$p \neq q$.

<v-clicks depth="2">

- **טענה:** $\le_{lex}$ הוא יחס סדר חלקי על $A \times B$.
  - ההוכחה שזהו סדר חלקי – עבודה עצמית (בשקף הבא נראה אותה עבור $\mathbb{N}\times\mathbb{N}$).

- **טענה:** אם $\le_A$ ו-$\le_B$ הם סדרים קוויים, אז $\le_{lex}$ הוא סדר קווי על $A \times B$.

</v-clicks>

---

# סדר לקסיקוגרפי על $\mathbb{N} \times \mathbb{N}$

**הגדרה:** על הקבוצה $\mathbb{N} \times \mathbb{N}$ נגדיר יחס $\le_{lex}$ כך:
$(a,b) \le_{lex} (c,d)$ אם ($a < c$) או ($a = c$ וגם $b \le d$).

**שאלה:**
1. הוכיחו כי $\le_{lex}$ הוא יחס סדר חלקי.
2. האם הוא סדר קווי (מלא)?


<div style="position: absolute; top: 50px; left: 30px; width: 200px;">
  <img src="/images/lexicographical_order_hebrew_dictionary.png" class="rounded-xl shadow-lg border-2 border-gray-200" />
</div>


<v-click>

**פתרון:**
1. **רפלקסיביות:** לכל $\langle a,b \rangle$, מתקיים $a=a$ ו-$b \le b$, לכן $\langle a,b \rangle \le_{lex} \langle a,b \rangle$.
   **אנטי-סימטריות:** נניח $\langle a,b \rangle \le_{lex} \langle c,d \rangle$ ו-$\langle c,d \rangle \le_{lex} \langle a,b \rangle$.
   אם $a < c$ אז לא ייתכן $\langle c,d \rangle \le_{lex} \langle a,b \rangle$ (כי נדרש $c \le a$). לכן $a=c$.
   כעת, מההגדרה נשאר $b \le d$ ו-$d \le b$, ולכן $b=d$. סה"כ $\langle a,b \rangle=\langle c,d \rangle$.
   **טרנזיטיביות:** נניח $\langle a,b \rangle \le \langle c,d \rangle$ ו-$\langle c,d \rangle \le \langle e,f \rangle$.
   - אם $a < c$ או $c < e$, אז $a < e$ ולכן $\langle a,b \rangle \le \langle e,f \rangle$.
   - אחרת $a=c=e$, ואז $b \le d$ ו-$d \le f \implies b \le f$, ולכן $\langle a,b \rangle \le \langle e,f \rangle$.

2. **כן, זהו סדר קווי.** לכל שני זוגות שונים, או שהרכיבים הראשונים שונים (ואז הקטן קובע), או שהם שווים (ואז הרכיבים השניים ניתנים להשוואה ב-$\mathbb{N}$).


</v-click>

---
layout: TwoColsHeaderCustom
cols: 52% 48%
gap: 24px
---

# $(\mathbb{N} \times \mathbb{N}, \le_{lex})$

::left::

<v-clicks depth="2">

- זהו **סדר קווי** (סדר לקסיקוגרפי של שני סדרים קוויים).
- העוקב המיידי של $\langle a,b\rangle$ הוא $\langle a,b+1\rangle$:
  - אם $\langle a,b\rangle <_{lex} \langle c,d\rangle \le_{lex} \langle a,b+1\rangle$, אז $c=a$ ו-$b < d \le b+1$, כלומר $d=b+1$.
  - בפרט, **לכל** איבר יש עוקב מיידי.
- $\langle 1,0\rangle$ **אינו מזערי**: $\langle 0,0\rangle <_{lex} \langle 1,0\rangle$.
- אבל $\langle 1,0\rangle$ **אינו עוקב מיידי של אף איבר**:
  - האיברים הקטנים ממנו הם בדיוק $\langle 0,n\rangle$, $n\in\mathbb{N}$.
  - לכל $n$: $\langle 0,n\rangle <_{lex} \langle 0,n+1\rangle <_{lex} \langle 1,0\rangle$.

</v-clicks>

::right::

<div class="flex items-center justify-center" style="margin-top: 10px;">
<svg viewBox="0 0 420 290" width="420" height="290" xmlns="http://www.w3.org/2000/svg" style="direction: ltr;">
  <defs><marker id="lexarrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#08381d"/></marker></defs>
  <line x1="79.0" y1="35" x2="95.0" y2="35" stroke="#08381d" stroke-width="2" marker-end="url(#lexarrow)"/>
  <line x1="164.0" y1="35" x2="180.0" y2="35" stroke="#08381d" stroke-width="2" marker-end="url(#lexarrow)"/>
  <line x1="249.0" y1="35" x2="265.0" y2="35" stroke="#08381d" stroke-width="2" marker-end="url(#lexarrow)"/>
  <line x1="334.0" y1="35" x2="354.0" y2="35" stroke="#08381d" stroke-width="2" marker-end="url(#lexarrow)"/>
  <text x="372.0" y="35" text-anchor="middle" dominant-baseline="central" style="font-size: 18px;">⋯</text>
  <path d="M 372.0 47 C 372.0 87, 45 62.0, 45 102.0" fill="none" stroke="#08381d" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#lexarrow)"/>
  <line x1="79.0" y1="120" x2="95.0" y2="120" stroke="#08381d" stroke-width="2" marker-end="url(#lexarrow)"/>
  <line x1="164.0" y1="120" x2="180.0" y2="120" stroke="#08381d" stroke-width="2" marker-end="url(#lexarrow)"/>
  <line x1="249.0" y1="120" x2="265.0" y2="120" stroke="#08381d" stroke-width="2" marker-end="url(#lexarrow)"/>
  <line x1="334.0" y1="120" x2="354.0" y2="120" stroke="#08381d" stroke-width="2" marker-end="url(#lexarrow)"/>
  <text x="372.0" y="120" text-anchor="middle" dominant-baseline="central" style="font-size: 18px;">⋯</text>
  <path d="M 372.0 132 C 372.0 172, 45 147.0, 45 187.0" fill="none" stroke="#08381d" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#lexarrow)"/>
  <line x1="79.0" y1="205" x2="95.0" y2="205" stroke="#08381d" stroke-width="2" marker-end="url(#lexarrow)"/>
  <line x1="164.0" y1="205" x2="180.0" y2="205" stroke="#08381d" stroke-width="2" marker-end="url(#lexarrow)"/>
  <line x1="249.0" y1="205" x2="265.0" y2="205" stroke="#08381d" stroke-width="2" marker-end="url(#lexarrow)"/>
  <line x1="334.0" y1="205" x2="354.0" y2="205" stroke="#08381d" stroke-width="2" marker-end="url(#lexarrow)"/>
  <text x="372.0" y="205" text-anchor="middle" dominant-baseline="central" style="font-size: 18px;">⋯</text>
  <rect x="13.0" y="20.0" width="64" height="30" rx="14" fill="#bce8be" stroke="#0c7e28" stroke-width="2"/>
  <text x="45" y="35" text-anchor="middle" dominant-baseline="central" style="font-size: 15px;">⟨0,0⟩</text>
  <rect x="98.0" y="20.0" width="64" height="30" rx="14" fill="#bce8be" stroke="#0c7e28" stroke-width="2"/>
  <text x="130" y="35" text-anchor="middle" dominant-baseline="central" style="font-size: 15px;">⟨0,1⟩</text>
  <rect x="183.0" y="20.0" width="64" height="30" rx="14" fill="#bce8be" stroke="#0c7e28" stroke-width="2"/>
  <text x="215" y="35" text-anchor="middle" dominant-baseline="central" style="font-size: 15px;">⟨0,2⟩</text>
  <rect x="268.0" y="20.0" width="64" height="30" rx="14" fill="#bce8be" stroke="#0c7e28" stroke-width="2"/>
  <text x="300" y="35" text-anchor="middle" dominant-baseline="central" style="font-size: 15px;">⟨0,3⟩</text>
  <rect x="13.0" y="105.0" width="64" height="30" rx="14" fill="#bce8be" stroke="#c0392b" stroke-width="3"/>
  <text x="45" y="120" text-anchor="middle" dominant-baseline="central" style="font-size: 15px;">⟨1,0⟩</text>
  <rect x="98.0" y="105.0" width="64" height="30" rx="14" fill="#bce8be" stroke="#0c7e28" stroke-width="2"/>
  <text x="130" y="120" text-anchor="middle" dominant-baseline="central" style="font-size: 15px;">⟨1,1⟩</text>
  <rect x="183.0" y="105.0" width="64" height="30" rx="14" fill="#bce8be" stroke="#0c7e28" stroke-width="2"/>
  <text x="215" y="120" text-anchor="middle" dominant-baseline="central" style="font-size: 15px;">⟨1,2⟩</text>
  <rect x="268.0" y="105.0" width="64" height="30" rx="14" fill="#bce8be" stroke="#0c7e28" stroke-width="2"/>
  <text x="300" y="120" text-anchor="middle" dominant-baseline="central" style="font-size: 15px;">⟨1,3⟩</text>
  <rect x="13.0" y="190.0" width="64" height="30" rx="14" fill="#bce8be" stroke="#0c7e28" stroke-width="2"/>
  <text x="45" y="205" text-anchor="middle" dominant-baseline="central" style="font-size: 15px;">⟨2,0⟩</text>
  <rect x="98.0" y="190.0" width="64" height="30" rx="14" fill="#bce8be" stroke="#0c7e28" stroke-width="2"/>
  <text x="130" y="205" text-anchor="middle" dominant-baseline="central" style="font-size: 15px;">⟨2,1⟩</text>
  <rect x="183.0" y="190.0" width="64" height="30" rx="14" fill="#bce8be" stroke="#0c7e28" stroke-width="2"/>
  <text x="215" y="205" text-anchor="middle" dominant-baseline="central" style="font-size: 15px;">⟨2,2⟩</text>
  <rect x="268.0" y="190.0" width="64" height="30" rx="14" fill="#bce8be" stroke="#0c7e28" stroke-width="2"/>
  <text x="300" y="205" text-anchor="middle" dominant-baseline="central" style="font-size: 15px;">⟨2,3⟩</text>
  <text x="45" y="250" text-anchor="middle" dominant-baseline="central" style="font-size: 18px;">⋮</text>
</svg>
</div>

---
layout: TwoColsHeaderCustom
---

# היחס הלקסיקוגרפי של שני יחסי סדר קווי הוא יחס סדר קווי

**משפט:** אם $(A, \le_A)$ ו-$(B, \le_B)$ הם יחסי סדר קוויים, אז $(A \times B, \le_{lex})$ הוא יחס סדר קווי.



**הוכחה:**
- לפי הטענה מהגדרת הסדר הלקסיקוגרפי, $\le_{lex}$ הוא יחס סדר חלקי. נותר להוכיח שכל שני איברים ניתנים להשוואה.
- יהיו $(a_1, b_1), (a_2, b_2) \in A \times B$ שני איברים שונים.


::left::

- **מקרה 1:** $a_1 \ne a_2$.
  - מכיוון ש-$A$ סדר קווי, מתקיים $a_1 <_A a_2$ או $a_2 <_A a_1$.
  - אם $a_1 <_A a_2$, אז לפי ההגדרה $(a_1, b_1) <_{lex} (a_2, b_2)$.
  - אם $a_2 <_A a_1$, אז לפי ההגדרה $(a_2, b_2) <_{lex} (a_1, b_1)$.

::right::

- **מקרה 2:** $a_1 = a_2$.
  - מכיוון שהזוגות שונים, בהכרח $b_1 \ne b_2$.
  - מכיוון ש-$B$ סדר קווי, מתקיים $b_1 <_B b_2$ או $b_2 <_B b_1$.
  - אם $b_1 <_B b_2$, אז $(a_1, b_1) <_{lex} (a_2, b_2)$.
  - אם $b_2 <_B b_1$, אז $(a_2, b_2) <_{lex} (a_1, b_1)$.

::after::

- **מסקנה:** בכל מקרה האיברים ניתנים להשוואה, ולכן זהו סדר קווי.



---
section: תרגילים
---

# סדר המכפלה

**הגדרה:** על הקבוצה $A = \{1, 2\} \times \{1, 2\}$ נגדיר יחס $\le_{prod}$:
$\langle a,b \rangle \le_{prod} \langle c,d \rangle$ אם $a \le c$ וגם $b \le d$.

**שאלה:**
מצאו את איברי המינימום, המקסימום, המזעריים והמירביים ב-$A$.

<v-click>

**פתרון:**
האיברים ב-$A$ הם: $\langle 1,1 \rangle, \langle 1,2 \rangle, \langle 2,1 \rangle, \langle 2,2 \rangle$.

- **מינימום:** $\langle 1,1 \rangle$. לכל $\langle x,y \rangle \in A$, מתקיים $1 \le x$ ו-$1 \le y$, לכן $\langle 1,1 \rangle \le_{prod} \langle x,y \rangle$.
  לכן הוא גם **מזערי יחיד**.

- **מקסימום:** $\langle 2,2 \rangle$. לכל $\langle x,y \rangle \in A$, מתקיים $x \le 2$ ו-$y \le 2$, לכן $\langle x,y \rangle \le_{prod} \langle 2,2 \rangle$.
  לכן הוא גם **מירבי יחיד**.

שימו לב: בניגוד לסדר הלקסיקוגרפי, כאן $\langle 1,2 \rangle$ ו-$\langle 2,1 \rangle$ **אינם ניתנים להשוואה** (כי $1 \le 2$ אבל $2 \not\le 1$). לכן זהו **אינו** סדר קווי.

<div style="position: absolute; bottom: 10px; left: 400px; width: 200px;">
  <img src="/images/product_order_incomparable.png" />
</div>

</v-click>

---

# אנטי-שרשראות בקבוצת החזקה

**שאלה:**
תהי $A = \{1, 2, 3\}$. נתבונן בקס"ח $(\mathcal{P}(A), \subseteq)$.
מצאו אנטי-שרשרת בגודל מקסימלי (כלומר, תת-קבוצה של $\mathcal{P}(A)$ שבה אף שני איברים אינם מוכלים זה בזה, עם מספר האיברים הגדול ביותר האפשרי).

<v-click>

**פתרון:**
נחפש קבוצות שאינן מוכלות זו בזו.
רעיון: ניקח את כל הקבוצות באותו גודל $k$.
- גודל 0: $\{\emptyset\}$ (גודל 1)
- גודל 1: $\{\{1\}, \{2\}, \{3\}\}$ (גודל 3)
- גודל 2: $\{\{1,2\}, \{1,3\}, \{2,3\}\}$ (גודל 3)
- גודל 3: $\{\{1,2,3\}\}$ (גודל 1)

האנטי-שרשראות הגדולות ביותר הן בגודל 3. למשל:
$$ \mathcal{F} = \{ \{1, 2\}, \{1, 3\}, \{2, 3\} \} $$
אף קבוצה כאן לא מוכלת באחרת.
(משפט שפרנר קובע באופן כללי שהאנטי-שרשרת הגדולה ביותר היא אוסף התת-קבוצות בגודל $\lfloor n/2 \rfloor$).

**שימו לב:** "גודל מירבי" שונה מ"מקסימלית ביחס להכלה": $\{\{1\},\{2,3\}\}$ מקסימלית ביחס להכלה, אך גודלה רק 2.

</v-click>

---

# יחס החלוקה ב-$\mathbb{Z}$

**שאלה:**
האם היחס $a \mid b$ ("$a$ מחלק את $b$") הוא יחס סדר חלקי על קבוצת המספרים השלמים $\mathbb{Z}$?
אם לא, איזו תכונה נכשלת?

<v-click>

**פתרון:**
נבדוק את התכונות:
1. **רפלקסיביות:** לכל $a$, $a \mid a$ (כי $a = a \cdot 1$). מתקיים.
2. **טרנזיטיביות:** אם $a \mid b$ ו-$b \mid c$, אז $a \mid c$. מתקיים.
3. **אנטי-סימטריות:** האם $a \mid b$ ו-$b \mid a$ גורר $a=b$?
   ניקח $a = 2$ ו-$b = -2$.
   $2 \mid -2$ (כי $-2 = 2 \cdot (-1)$).
   $-2 \mid 2$ (כי $2 = -2 \cdot (-1)$).
   אבל $2 \neq -2$.

**תשובה:** לא, היחס אינו אנטי-סימטרי על $\mathbb{Z}$ (הוא כן יחס סדר על $\mathbb{N}$).

</v-click>

---

# השוואת גדלים של קבוצות

**שאלה:**
תהי $\mathcal{F}$ משפחת כל הקבוצות הסופיות של מספרים טבעיים.
נגדיר יחס $R$ על $\mathcal{F}$ כך:
$$ A \mathrel{R} B \iff |A| \le |B| $$
(מספר האיברים ב-$A$ קטן או שווה למספר האיברים ב-$B$).
האם $R$ הוא יחס סדר חלקי?

<v-click>

**פתרון:**
נבדוק את התכונות:
1. **רפלקסיביות:** $|A| \le |A|$. מתקיים.
2. **טרנזיטיביות:** אם $|A| \le |B|$ ו-$|B| \le |C|$, אז $|A| \le |C|$ (תכונה של מספרים). מתקיים.
3. **אנטי-סימטריות:** נניח $A \mathrel{R} B$ ו-$B \mathrel{R} A$.
   זה אומר $|A| \le |B|$ ו-$|B| \le |A|$, כלומר $|A| = |B|$.
   האם זה גורר $A = B$?
   **לא!**
   למשל: $A = \{1\}$, $B = \{2\}$.
   $|A| = 1 = |B|$, אבל $A \neq B$.

**תשובה:** לא, היחס אינו אנטי-סימטרי ולכן אינו יחס סדר חלקי. (זהו "קדם-סדר").

</v-click>

---

# יחס הפוך

**שאלה:**
יהי $R$ יחס סדר חלקי על קבוצה $A$.
נגדיר את היחס ההפוך $R^{-1}$ כך:
$$ \langle a, b \rangle \in R^{-1} \iff \langle b, a \rangle \in R $$
הוכיחו שגם $R^{-1}$ הוא יחס סדר חלקי.

<v-click>

**פתרון:**
1. **רפלקסיביות:** לכל $a$, $\langle a, a \rangle \in R$ (כי $R$ רפלקסיבי). לכן $\langle a, a \rangle \in R^{-1}$.
2. **אנטי-סימטריות:** נניח $\langle a, b \rangle \in R^{-1}$ ו-$\langle b, a \rangle \in R^{-1}$.
   מההגדרה, זה אומר $\langle b, a \rangle \in R$ ו-$\langle a, b \rangle \in R$.
   מכיוון ש-$R$ אנטי-סימטרי, נובע $a = b$.
3. **טרנזיטיביות:** נניח $\langle a, b \rangle \in R^{-1}$ ו-$\langle b, c \rangle \in R^{-1}$.
   מההגדרה, $\langle b, a \rangle \in R$ ו-$\langle c, b \rangle \in R$.
   נסדר מחדש: $\langle c, b \rangle \in R$ ו-$\langle b, a \rangle \in R$.
   מטרנזיטיביות $R$, נובע $\langle c, a \rangle \in R$.
   לכן $\langle a, c \rangle \in R^{-1}$.

**מסקנה:** $R^{-1}$ הוא יחס סדר חלקי (הנקרא "הסדר הדואלי").

</v-click>

