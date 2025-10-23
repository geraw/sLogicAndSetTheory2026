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
  - מבין היחסים הרפלקסיביים, אנו דורשים שאין זוג $\langle a,b \rangle$ ו-$\langle b,a \rangle$ יחד. לכל אחד מ-3 הזוגות הלא-עצמיים, יש 3 אפשרויות: אף כיוון, כיוון אחד או השני ($3^3 = 27$).
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






