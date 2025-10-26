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
---
# יחסי סדר חלקי
## הרצאה בקורס: מבוא ללוגיקה ותורת הקבוצות

מרצה: פרופ. גרא וייס
---
section: יחסי סדר
---

# יחס סדר (סדר חלקי)

- הגדרה: לכל קבוצה $A$, יחס $\le_R$ על $A$ נקרא יחס סדר (או סדר חלקי) אם הוא מקיים את שלוש התכונות הבאות:

  1. רפלקסיביות: $\forall a\in A\; (a \le_R a)$.
  2. אנטי-סימטריות: $\forall a,b\in A\; \bigl((a \le_R b \land b \le_R a) \to a=b\bigr)$.
  3. טרנזיטיביות: $\forall a,b,c\in A\; \bigl((a \le_R b \land b \le_R c) \to a \le_R c\bigr)$.

- לזוג $(A,\leq_R)$ אנו קוראים "**קבוצה סדורה חלקית**" (קס"ח).


- הערות קצרות:
  - רבים כותבים פשוט $\le$ כאשר ברור מהו היחס $R$.
  - יחס סדר שאינו בהכרח משווה בין כל זוג איברים נקרא "סדר חלקי" (partial order).
  - אם בנוסף לכל $a,b\in A$ מתקיים $a\le b$ או $b\le a$, אז הסדר נקרא "שלם" או "סדר מלא".

- דוגמאות:
  - $(\mathbb{N},\le), (\mathbb{Z},\le), (\mathbb{Q},\le), (\mathbb{R},\le)$ יחסי הסדר המוכרים על קבוצות של מספרים.

  - $(\mathcal{P}(X),\subseteq)$: יחס ההכלה על קבוצת החלקים של $X$ הוא יחס סדר חלקי.

---

# כמה יחסי סדר חלקי יש על הקבוצה $\{1,2,3\}$?


- על קבוצה של 3 איברים, מספר היחסים האפשריים הוא $2^{9} = 512$.

- **סינון רפלקסיבי**: מצמצם מ-512 ל-64. 
  - הסיבה: היחס חייב לכלול את 3 הזוגות העצמיים $\langle a,a \rangle$ לכל $a$, כך שנשארים 6 זוגות אחרים, כל אחד עם 2 אפשרויות ($2^6 = 64$).

- **סינון אנטי-סימטרי**: מצמצם מ-64 ל-27. 
  - מבין היחסים הרפלקיביים, אנו דורשים שאין זוג $\langle a,b \rangle$ ו-$\langle b,a \rangle$ יחד. לכל אחד מ-3 הזוגות הלא-עצמיים, יש 3 אפשרויות: אף כיוון, כיוון אחד או השני ($3^3 = 27$).
- **סינון טרנזיטיבי**: מצמצם מ-27 ל-19. 
  - מבין היחסים הרפלקסיביים והאנטי-סימטריים, אנו דורשים טרנזיטיביות (אם $\langle a,b \rangle$ ו-$\langle b,c \rangle$ אז $\langle a,c \rangle$). לא כל ה-27 יחסים עומדים בתנאי זה, ונשארים 19.
- השקף הבא מציג את כל 19 היחסים הללו באמצעות גרפים.

---

# כל יחסי הסדר החלקי על הקבוצה $\{1,2,3\}$
<script setup>
const generatePosets = () => {
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
const allPosets = generatePosets()
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
cols: 80% 20%   # ← change to 60% 40%, 320px 1fr, etc.
gap: 24px
---


# ציור קס"ח סופי


::left::

- כפי שראינו, ניתן לצייר את היחס $R$ על ידי משיכת חץ מכל $a∈A$ אל כל 
  $b∈A$ המקיים $aRb$.

- אלא שבגלל התכונות המיוחדות של יחס הסדר, ניתן לצייר את יחס הסדר בפחות חיצים

- בהנחה שהקס"ח סופי (כלומר הקבוצה $A$ סופית) ניתן לצייר קס"ח, בעזרת הכללים הבאים:
  - אין צורך לצייר את חיצי הרפלקסיביות , שכן אנו יודעים שהיחס $aRa$ חייב להתקיים ולכן אין צורך לציירו.

  - אם ציירנו חץ מ-$a$ ל-$b$ וחץ מ-$b$ ל-$a$ אז לא נצייר חץ מ-$a$ ל-$b$ כי אנו יודעים שחץ זה חייב להמצא
  - נתחיל את הציור על ידי רישום כל האיברים המינימליים –אלו שאין שום איבר מתחתם
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
const generatePosets = () => {
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
const allPosets = generatePosets()
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

# היחס "מחלק" על $\mathbb{N}$

- מספר שלם $a$ הוא מחלק (או גורם) של מספר שלם $b$ אם אפשר לכתוב את $b$ כמכפלה של $a$ במספר שלם $c$, כלומר אם קיים $c \in \mathbb{Z}$ עבורו $b = a c$. במקרה כזה, השארית בחלוקה של $b$ ב-$a$ היא 0.

- נהוג לרשום $a \mid b$ או $a \nmid b$ כדי לציין כי $a$ מחלק או לא מחלק את $b$ בהתאמה (לדוגמה, $3 \mid 81$ אבל $7 \nmid 50$).

- היחס "מחלק" על המספרים הטבעיים מוגדר כ: $\{\langle a,b \rangle \in \mathbb{N} \times \mathbb{N} \mid a \mid b\}$.

- זהו יחס סדר חלקי על $\mathbb{N}$, שכן הוא רפלקסיבי, אנטי-סימטרי וטרנזיטיבי.
  
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

#  ביחס סדר קווי מזערי הוא מינימום ומירבי הוא מקסימום

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