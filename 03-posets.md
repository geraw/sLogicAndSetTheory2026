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

<div style="position: absolute; top: 70px; left: 10px; width: 300px;">
  <img src="/images/order_relation_comic.png" class="rounded-xl shadow-lg border-2 border-gray-200" />
</div> 

- הגדרה: לכל קבוצה $A$, יחס $\le_R$ על $A$ נקרא יחס סדר אם הוא מקיים את שלוש התכונות הבאות:

  1. **רפלקסיביות**: $\forall a\in A\; (a \le_R a)$.

  2. **אנטי-סימטריות**: $\forall a,b\in A\; \bigl((a \le_R b \land b \le_R a) \to a=b\bigr)$.

  3. **טרנזיטיביות**: $\forall a,b,c\in A\; \bigl((a \le_R b \land b \le_R c) \to a \le_R c\bigr)$.

<br />

- לזוג $(A,\leq_R)$ אנו קוראים "**קבוצה סדורה חלקית**" (קס"ח).

- אם, בנוסף, לכל $a,b\in A$ מתקיים $a\le_R b$ או $b\le_R a$, אז הסדר נקרא "שלם" או "סדר מלא".

- דוגמאות:
  - $(\mathbb{N},\le), (\mathbb{Z},\le), (\mathbb{Q},\le), (\mathbb{R},\le)$ יחסי הסדר המוכרים על קבוצות של מספרים.

  - $(\mathcal{P}(X),\subseteq)$: יחס ההכלה על קבוצת החלקים של $X$ הוא יחס סדר חלקי.


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

<br>




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

# עוקב מיידי, איברים ניתנים להשוואה, סדר קווי, שרשראות ואנטי-שרשראות


- איבר $b$ הוא **עוקב מיידי** של $a$ אם $a \le_R b$ ואין $c$ שונה משניהם כך ש-$a \le_R c \le_R b$.
  
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

# אם יש מקסימום אז הוא יחיד והוא מקסימלי, <br>  ואם יש מינימום אז הוא יחיד והוא מינימלי


- נניח שיש בקס"ח $P = (V, \leq_P)$
  איבר מקסימום  $m$. נוכיח כי הוא יחיד.
  - נניח בשלילה שקיים $m' \in V$
    נוסף כך ש-$m' \neq m$
    ו-$m'$ מקסימום.
  - לפי ההגדרה של מקסימום, לכל $v \in V$ מתקיים $v \leq_P m$ וגם $v \leq_P m'$.
  - לכן, לפי אנטי-סימטריות, נקבל ש-$m = m'$.
  -  קיבלנו סתירה. לפיכך, אם יש מקסימום, הוא יחיד.
 
- כעת נוכיח כי $m$ הוא גם איבר מקסימלי.
  - נניח בשלילה כי קיים $v \in V$ כך ש-$m \neq v$ ו-$m \leq_P v$.
  -  לפי ההגדרה של מקסימום, לכל $u \in V$ מתקיים $u \leq_P m$, ולכן גם $v \leq_P m$.
  -   לפי אנטי-סימטריות מקבלים $m=v$.
  - קיבלנו סתירה. לפיכך, אין איבר $v$
     שונה מ-$m$ המקיים
     $m \leq_P v$, 
     כלומר $m$ הוא איבר מקסימלי.

- **תרגיל**: הוכיחו את הטענה לגבי מינימום באותו אופן.

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

#  ביחס סדר קווי, מזערי הוא מינימום ומירבי הוא מקסימום

- **תזכורת**: ביחס סדר קווי (סדר מלא), כל זוג איברים ניתנים להשוואה.
  
- **הוכחה שמזערי הוא מינימום**:
  - אם יש איבר מזערי $m$, אז לכל $x \in A$, $x \leq m$ או $m \leq x$.  
  - מכיוון ש-$m$ מזערי, אין $x$ כך ש-$x \leq m$ ו-$x \neq m$.
  - לכן, לכל $x \neq m$, $m \leq x$.
  - כלומר, $m$ הוא מינימום.

- **תרגיל**:  הוכיחו, באותו האופן כי אם יש איבר מירבי אז הוא מקסימלי.

- **מסקנה**: ביחס סדר קווי יכול להיות לכל היותר מינמלי אחד ומקסימלי אחד.    
  - ייתכן שלא יהיה מינימום או מקסימום כלל.
    - דוגמא: ב-$(\mathbb{R}, \leq)$ אין מינימום ואין מקסימום.
    - ב-$(\mathbb{N}, \leq)$ יש מינימום (המספר 0) ואין מקסימום.

---

# עוקב מיידי לפי סדר קווי הוא יחיד כשהוא קיים

- ביחס סדר קווי, לכל איבר (מלבד המקסימלי) יש עוקב מיידי יחיד.

- **תזכורת**: איבר $b$ הוא **עוקב מיידי** של $a$ אם $a \le_R b$ ואין $c$ שונה משניהם כך ש-$a \le_R c \le_R b$.

- הוכחה:
  - נניח שיש איבר $x$ שהוא עוקב מיידי של $y$
  - נניח בשלילה שקיים $x' \neq x$ שגם הוא עוקב מיידי של $y$.
  - מכיוון שמדובר בסדר קווי כל שני איברים ניתנים להשוואה
  - לכן, או ש-$x \leq x'$ או ש-$x' \leq x$.
    - אם $x \leq x'$ אז $y \leq x \leq x'$,
      סתירה לכך ש-$x'$ הוא עוקב מיידי של $y$.

    - אם $x' \leq x$ אז $y \leq x' \leq x$,
      סתירה לכך ש-$x$ הוא עוקב מיידי של $y$.

    - קיבלנו סתירה בשני המקרים.
  - לפיכך, אם יש עוקב מיידי, הוא יחיד

<div style="position: absolute; bottom: 100px; left: 50px;">
<img src="/images/עוקב מידי יחיד.png" alt="Exercise Icon" style="width:200pt; height:200pt;" />
</div>




---

# יחס סדר חלקי מקסימלי (תחת הכלה) הוא סדר קווי 

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

<b>מסקנה:</b> בכל המקרים, אם $\langle x,y\rangle \in R'$ וגם $\langle y,x\rangle \in R'`, אז $x = y$, ולכן $R'$ אנטי-סימטרי.
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

<b>מסקנה משולבת של שני השקפים האחרונים:</b> יחס סדר הוא קווי אם ורק אם הוא הוא מקסימלי לפי יחס ההכלה.
</div>


---
section: תרגילים
---

# סדר לקסיקוגרפי

**הגדרה:** על הקבוצה $\mathbb{N} \times \mathbb{N}$ נגדיר יחס $\le_{lex}$ כך:
$(a,b) \le_{lex} (c,d)$ אם ($a < c$) או ($a = c$ וגם $b \le d$).

**שאלה:**
1. הוכיחו כי $\le_{lex}$ הוא יחס סדר חלקי.
2. האם הוא סדר קווי (מלא)?

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

---

# תת-קבוצה של קס"ח היא קס"ח

**שאלה:**
הוכיחו או הפריכו: אם $(A,R)$ קס"ח, אז גם $(A', R \cap (A' \times A'))$ קס"ח עבור כל תת קבוצה $A' \subseteq A$.

<v-click>

**פתרון:**
הטענה **נכונה**.
נסמן $R' = R \cap (A' \times A')$. נבדוק את תכונות יחס הסדר:
1. **רפלקסיביות:** יהי $a \in A'$. מכיוון ש-$A' \subseteq A$, אז $a \in A$. כיוון ש-$R$ רפלקסיבי על $A$, $\langle a,a \rangle \in R$. כמו כן $\langle a,a \rangle \in A' \times A'$. לכן $\langle a,a \rangle \in R'$.
2. **אנטי-סימטריות:** נניח $\langle a,b \rangle \in R'$ ו-$\langle b,a \rangle \in R'$. מהגדרת החיתוך, נובע ש-$\langle a,b \rangle \in R$ ו-$\langle b,a \rangle \in R$. כיוון ש-$R$ אנטי-סימטרי, $a=b$.
3. **טרנזיטיביות:** נניח $\langle a,b \rangle \in R'$ ו-$\langle b,c \rangle \in R'$. אז $\langle a,b \rangle, \langle b,c \rangle \in R$. כיוון ש-$R$ טרנזיטיבי, $\langle a,c \rangle \in R$. כמו כן $a,c \in A'$, ולכן $\langle a,c \rangle \in A' \times A'$. לכן $\langle a,c \rangle \in R'$.

**מסקנה:** $(A', R')$ הוא קס"ח.

</v-click>
