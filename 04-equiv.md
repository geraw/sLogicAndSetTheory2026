---
theme: frankfurt
infoLine: true
author: "גרא וייס"
title: "יחסי שקילות ומרחבי מנה"
htmlAttrs:
  dir: rtl
  lang: heb
mdc: true
download: true
exportFilename: 04-equiv.pdf
---
# יחסי שקילות ומרחבי מנה
## הרצאה בקורס: מבוא ללוגיקה ותורת הקבוצות

 מרצה: פרופ. גרא וייס

---
section: אינטואיציה
---

# אינטואיציה: מה אנחנו מצפים מ"שקילות"?


אנחנו רוצים להכליל מושגים מוכרים של "דמיון" או "שוויון" בין אובייקטים:
- **חפיפת משולשים:** שני משולשים הם "אותו דבר" מבחינת צורה וגודל.

- **דמיון משולשים:** שני משולשים הם "אותו דבר" מבחינת צורה.
- **שקילות מודולו 7:** ימים ביומן הם "אותו דבר" אם הם נופלים באותו יום בשבוע.




<img 
  src="/images/similar-joke.png" 
  class="absolute top-45 left-10 w-80 h-50 object-cover" 
/>

<br>

<br>


**הדרישות הטבעיות מיחס כזה:**

1. **רפלקסיביות:** כל איבר שקול לעצמו (משולש חופף לעצמו).
2. **סימטריות:** אם א' שקול ל-ב', אז ב' שקול ל-א' (אם היום יום ראשון, ובעוד 7 ימים יום ראשון, אז לפני 7 ימים היה יום ראשון).
3. **טרנזיטיביות:** אם א' שקול ל-ב' ו-ב' שקול ל-ג', אז א' שקול ל-ג'.

---
section: הגדרה ואפיונים
---

# יחס שקילות - הגדרה

 יחס $R\subseteq A\times A$ נקרא יחס שקילות מעל $A$ אם מתקיימות בו כל התכונות:

- רפלקסיביות:

  <div class="formula-box">

  $\forall a\in A \;(aRa)$
  </div>
  
- סימטריות:

  <div class="formula-box">

  $\forall a,b\in A \;(aRb\Rightarrow bRa)$.
  </div>

- טרנזיטיביות: 

  <div class="formula-box">

  $\forall a,b,c\in A \;( (aRb\wedge bRc)\Rightarrow aRc)$.
  </div>  

---

# אפיונים שקולים של התכונות

- רפלקסיבי:

<div class="formula-box">
 
 $Eq_A\subseteq R$
</div>
 
  באשר **$Eq_A=\{\langle a,a\rangle\mid a\in A\}$**.

- סימטרי:
  
<div class="formula-box">  

  $R=R^{-1}$
</div>

באשר **$R^{-1}=\{\langle b,a\rangle\mid \langle a,b\rangle\in R\}$**.

- טרנזיטיבי:
<div class="formula-box">    

   $R\circ R\subseteq R$
</div>   

באשר **$R\circ R=\{\langle a,c\rangle\mid \exists b\in A(\langle a,b\rangle\in R\wedge \langle b,c\rangle\in R)\}$**

---

# דוגמה: זוגיות

יהי $\equiv_2$ היחס הבא על $\mathbb{N}$:
$$\equiv_2 \;=\; \{\langle a, b\rangle \in \mathbb{N} \times \mathbb{N} \mid  (\text{זוגיים } a,b)\lor  (\text{אי-זוגיים } a,b)\}$$

**טענה:** זהו יחס שקילות.

**הוכחה:**

- **רפלקסיביות:** לכל $a \in \mathbb{N}$, מתקיים $a\equiv_2a$ מכיוון שאם $a$ זוגי אז הוא זוגי, ואם הוא אי-זוגי אז הוא אי-זוגי. <br> (זה נשמע טריוויאלי, אך בשלב זה אנו נמנעים משימוש בביטויים כמו "ברור ש...").

- **סימטריות:** לכל $a, b \in \mathbb{N}$, אם $a$ ו-$b$ שניהם זוגיים, אז גם $b$ ו-$a$ שניהם זוגיים. כנ"ל לגבי אי-זוגיים. לכן $a\equiv_2b \iff b\equiv_2a$.

- **טרנזיטיביות:** יהיו $a, b, c \in \mathbb{N}$ כך ש-$a\equiv_2b$ וגם $b\equiv_2c$. המספר $b$ הוא או זוגי או אי-זוגי.
  - **מקרה 1 - $b$ זוגי:** אזי $a$ זוגי (כי $a\equiv_2b$) וגם $c$ זוגי (כי $b\equiv_2c$). לכן $a$ ו-$c$ שניהם זוגיים, ולכן $a\equiv_2c$.
  - **מקרה 2 - $b$ אי-זוגי:** אזי $a$ אי-זוגי וגם $c$ אי-זוגי. לכן $a\equiv_2c$.

לכן זהו יחס שקילות.

---
section: דוגמאות
---

# דוגמאות נוספות ליחסי שקילות

1. **יחס השוויון** על $A$:
   $$Eq_A = \{\langle x,x\rangle \mid x\in A\}$$
   
2. **היחס המלא** על $A$:
   $$A\times A = \{\langle a,b\rangle \mid a,b\in A\}$$

3. **שקילות מודולו $n$** על $\mathbb{Z}$:
   $$ \equiv_ n \;=\; \{\langle a,b\rangle \in \mathbb{Z}\times \mathbb{Z} \mid \exists k\in\mathbb{Z} \;(a-b=nk) \} $$

4. **שקילות בגודל** על אוסף קבוצות סופיות $\mathcal{F}$:
   $$ \sim_{card} \;=\; \{\langle A,B\rangle \in \mathcal{F}\times \mathcal{F}\mid |A|=|B| \} $$

5. **חפיפה ודמיון משולשים** (על אוסף המשולשים $\mathcal{T}$):
   $$ \cong \;=\; \{\langle T_1, T_2\rangle \in \mathcal{T}\times \mathcal{T}\mid T_1 \cong T_2 \} $$


<img src="/images/שקילות מודולו 3.png" class="absolute top-45 left-10 w-70 h-60" />


---

# כל יחסי השקילות על $\{1,2,3\}$

<v-click>


ישנם חמישה יחסי שקילות אפשריים על הקבוצה $\{1,2,3\}$, המתאימים לחלוקות השונות של הקבוצה הזו:

<div style="display: grid; grid-template-columns: repeat(5, 180px); gap: 10px; margin-top: 12px; margin-right: -10px;">
  <!-- {{1},{2},{3}} -->
  <div>
    <GraphCytoscape 
      :nodes=" [
        { id: '1', x: 50, y: 50, label: '1' },
        { id: '2', x: 150, y: 50, label: '2' },
        { id: '3', x: 100, y: 125, label: '3' }
      ]"
      :edges=" [
        { source: '1', target: '1', loopDirection: '-90deg' },
        { source: '2', target: '2', loopDirection: '90deg' },
        { source: '3', target: '3', loopDirection: '180deg' }
      ]"
      :width="170"
      :height="150" />
  </div>

  <!-- {{1,2},{3}} -->
  <div>
    <GraphCytoscape 
      :nodes=" [
        { id: '1', x: 50, y: 50, label: '1' },
        { id: '2', x: 150, y: 50, label: '2' },
        { id: '3', x: 100, y: 125, label: '3' }
      ]"
      :edges=" [
        { source: '1', target: '1', loopDirection: '-90deg' },
        { source: '2', target: '2', loopDirection: '90deg' },
        { source: '3', target: '3', loopDirection: '180deg' },
        { source: '1', target: '2' },
        { source: '2', target: '1' }
      ]"
      :width="170"
      :height="150" />
  </div>

  <!-- {{1,3},{2}} -->
  <div>
    <GraphCytoscape 
      :nodes=" [
        { id: '1', x: 50, y: 50, label: '1' },
        { id: '2', x: 150, y: 50, label: '2' },
        { id: '3', x: 100, y: 125, label: '3' }
      ]"
      :edges=" [
        { source: '1', target: '1', loopDirection: '-90deg' },
        { source: '2', target: '2', loopDirection: '90deg' },
        { source: '3', target: '3', loopDirection: '180deg' },
        { source: '1', target: '3' },
        { source: '3', target: '1' }
      ]"
      :width="170"
      :height="150" />
  </div>

  <!-- {{2,3},{1}} -->
  <div>
    <GraphCytoscape 
      :nodes=" [
        { id: '1', x: 50, y: 50, label: '1' },
        { id: '2', x: 150, y: 50, label: '2' },
        { id: '3', x: 100, y: 125, label: '3' }
      ]"
      :edges=" [
        { source: '1', target: '1', loopDirection: '-90deg' },
        { source: '2', target: '2', loopDirection: '90deg' },
        { source: '3', target: '3', loopDirection: '180deg' },
        { source: '2', target: '3' },
        { source: '3', target: '2' }
      ]"
      :width="170"
      :height="150" />
  </div>

  <!-- {{1,2,3}} -->
  <div>
    <GraphCytoscape 
      :nodes=" [
        { id: '1', x: 50, y: 50, label: '1' },
        { id: '2', x: 150, y: 50, label: '2' },
        { id: '3', x: 100, y: 125, label: '3' }
      ]"
      :edges=" [
        { source: '1', target: '1', loopDirection: '-90deg' },
        { source: '2', target: '2', loopDirection: '90deg' },
        { source: '3', target: '3', loopDirection: '180deg' },
        { source: '1', target: '2' },
        { source: '2', target: '1' },
        { source: '1', target: '3' },
        { source: '3', target: '1' },
        { source: '2', target: '3' },
        { source: '3', target: '2' }
      ]"
      :width="170"
      :height="150" />
  </div>
</div>

בכל אחד מהיחסים קבענו אילו איברים יהיו שקולים זה לזה ואז מילאנו את כל הקשתות בתוך כל "מחלקת שקילות".

</v-click>

---
section: מחלקות וקבוצת מנה
---

<img src="/images/מחלקות שקילות.png" class="absolute top-70 left-20 h-150" style="z-index:-1" />

# מחלקת שקילות וקבוצת מנה

- עבור יחס שקילות $R$ על $A$ ולכל $a\in A$ נגדיר:
  
<div class="formula-box">

  $$[a]_R=\{x\in A \mid aRx\}$$
</div>


- קבוצת/מרחב המנה:
<div class="formula-box">

  $$A/R=\{[a]_R \mid a\in A\}.$$
</div>

- מאפיינים שקל להוכיח:

  - $\forall a\in A\; \bigl(a\in [a]_R\bigr)$.

  - $\forall a,b\in A\; \bigl([a]_R=[b]_R\vee [a]_R\cap[b]_R=\emptyset\bigr)$.

  - $\forall a,b\in A\; \bigl(aRb\iff [a]_R=[b]_R\bigr)$.

---

# דוגמה: על $\mathcal{P}(\{1,2,3\})$ עם $1\notin A\,\Delta\,B$

- נגדיר על $\mathcal{P}(\{1,2,3\})$:
  $$A\sim B \iff 1\notin A\,\Delta\,B \iff (1\in A \Leftrightarrow 1\in B).$$

- יש כאן שתי מחלקות שקילות:
  - כל תת־הקבוצות שמכילות את $1$;

  - כל תת־הקבוצות שאינן מכילות את $1$.

- זוהי חלוקה של $\mathcal{P}(\{1,2,3\})$ לשתי מחלקות.

- באופן כללי יותר: לכל קבוצה $X$ ו-$A \subseteq X$ ניתן להגדיר יחס שקילות על $\mathcal{P}(X)$ לפי הכלל:
  $$B\sim C \iff (A\cap B = A\cap C).$$

    - למשל: שתי קבוצות של אנשים הן שקולות אם יש בהן את אותם הישראלים



---
layout: two-cols-header
---

# מחלקות השקילות עבור $\{1,2,3\}$

לכל אחד מחמשת יחסי השקילות על $\{1,2,3\}$, נבדוק את מחלקות השקילות ומרחב המנה:

::left::

1. **$R_1 = \{\langle 1,1\rangle, \langle 2,2\rangle, \langle 3,3\rangle\}$**
   - $[1]_{R_1} = \{1\}$, $[2]_{R_1} = \{2\}$, $[3]_{R_1} = \{3\}$
   - $\{1,2,3\}/R_1 = \{\{1\}, \{2\}, \{3\}\}$

2. **$R_2$: כולל גם $\langle 1,2\rangle, \langle 2,1\rangle$**
   - $[1]_{R_2} = [2]_{R_2} = \{1,2\}$, $[3]_{R_2} = \{3\}$
   - $\{1,2,3\}/R_2 = \{\{1,2\}, \{3\}\}$

3. **$R_3$: כולל גם $\langle 1,3\rangle, \langle 3,1\rangle$**
   - $[1]_{R_3} = [3]_{R_3} = \{1,3\}$, $[2]_{R_3} = \{2\}$
   - $\{1,2,3\}/R_3 = \{\{1,3\}, \{2\}\}$

::right::

4. **$R_4$: כולל גם $\langle 2,3\rangle, \langle 3,2\rangle$**
   - $[1]_{R_4} = \{1\}$, $[2]_{R_4} = [3]_{R_4} = \{2,3\}$
   - $\{1,2,3\}/R_4 = \{\{1\}, \{2,3\}\}$

5. **$R_5 = \{1,2,3\} \times \{1,2,3\}$**
   - $[1]_{R_5} = [2]_{R_5} = [3]_{R_5} = \{1,2,3\}$
   - $\{1,2,3\}/R_5 = \{\{1,2,3\}\}$



---

# חלוקה של קבוצה

**חלוקה** $P$ של קבוצה $X$ היא אוסף של תת-קבוצות לא ריקות של $X$, שהן **זרות בזוגות** ו**מכסות** את $X$ (כלומר $X$ שווה לאיחוד שלהן):

<div class="formula-box" style="text-align: left; padding-left: 2rem;">

1. $\forall S \in P\; \bigl(S \neq \emptyset\bigr)$

2. $\forall S_1, S_2 \in P\; \bigl(S_1 \neq S_2 \Rightarrow S_1 \cap S_2 = \emptyset\bigr)$

3. $\bigcup P = X$
</div>

**דוגמאות:**
- קבוצת המספרים הזוגיים וקבוצת המספרים האי-זוגיים היא חלוקה של $\mathbb{N}$.

$$P=\{\{0,2,4,6,\dots\}, \{1,3,5,7,\dots\}\}$$


- **חלוקות טריוויאליות:** לכל קבוצה לא-ריקה $X$ קיימות:

  - $\{X\}$ – חלוקה לקבוצה אחת (המקסימלית)

  - $\bigl\{\{x\} \mid x \in X\bigr\}$ – פירוק לאיברים בודדים (המינימלית)

---

# יחס העידון בין חלוקות

על אוסף החלוקות של קבוצה $X$ מוגדר **יחס סדר חלקי** הנקרא "**יחס העידון**":

<div class="formula-box" style="text-align: right; padding-left: 2rem;">

חלוקה $P_1$ **מעודנת יותר** מחלוקה $P_2$ (סימון: $P_1 \preceq P_2$) אם<br>
$$\forall A \in P_1 \; (\exists B \in P_2 \;(A \subseteq B))$$
</div>

כלומר, כל קבוצה בחלוקה המעודנת מוכלת בקבוצה כלשהי בחלוקה הפחות מעודנת.

**דוגמה על** $\{1,2,3\}$:
- $\{\{1\}, \{2\}, \{3\}\}$ מעודנת יותר מ־$\{\{1,2\}, \{3\}\}$
- $\{\{1,2\}, \{3\}\}$ מעודנת יותר מ־$\{\{1,2,3\}\}$

**תכונות:**
- זהו יחס סדר חלקי כי הוא טרנזיטיבי, רפלקסיבי ואנטיסימטרי.
- המינימום והמקסימום שלו הן החלוקות הטריוויאליות

---

# חלוקות שאינן ניתנות להשוואה

יחס העידון הוא **סדר חלקי**, כלומר לא כל שתי חלוקות ניתנות להשוואה.

**דוגמה:** נתבונן ב-$A=\{1,2,3\}$ ובחלוקות הבאות:

$$P_1 = \{\{1,2\}, \{3\}\}$$
$$P_2 = \{\{1,3\}, \{2\}\}$$

- **האם $P_1 \preceq P_2$?**
  - לא, כי $\{1,2\} \in P_1$ אינה מוכלת באף קבוצה ב-$P_2$ (הקבוצות ב-$P_2$ הן $\{1,3\}$ ו-$\{2\}$).

- **האם $P_2 \preceq P_1$?**
  - לא, כי $\{1,3\} \in P_2$ אינה מוכלת באף קבוצה ב-$P_1$.

<br>

**מסקנה:** $P_1$ ו-$P_2$ אינן ניתנות להשוואה (Incomparable).


---

<script setup>
import { computed } from 'vue'

// Generate partitions of a set
function getPartitions(setElements) {
  if (setElements.length === 0) return [[]]
  
  const first = setElements[0]
  const rest = setElements.slice(1)
  const partitions = []
  
  // Helper to generate combinations
  function getCombinations(arr, k) {
    if (k === 0) return [[]]
    if (arr.length === k) return [arr]
    if (arr.length < k) return []
    
    const withFirst = getCombinations(arr.slice(1), k - 1).map(c => [arr[0], ...c])
    const withoutFirst = getCombinations(arr.slice(1), k)
    return [...withFirst, ...withoutFirst]
  }

  for (let i = 1; i <= setElements.length; i++) {
    const subsets = getCombinations(rest, i - 1).map(c => [first, ...c])
    for (const subset of subsets) {
      const remaining = setElements.filter(x => !subset.includes(x))
      const subPartitions = getPartitions(remaining)
      for (const p of subPartitions) {
        partitions.push([subset, ...p])
      }
    }
  }
  return partitions
}

// Check if p1 is a refinement of p2 (p1 <= p2)
function isRefinement(p1, p2) {
  return p1.every(b1 => p2.some(b2 => b1.every(x => b2.includes(x))))
}

// Format partition as string
function partitionToStr(p) {
  return p.map(block => block.sort().join('')).sort().join('|')
}

const elements = [1, 2, 3, 4]
const allPartitions = getPartitions(elements)

// Create nodes
const nodes = allPartitions.map((p, i) => ({
  id: String(i),
  label: partitionToStr(p),
  partition: p
}))

// Create edges (covering relation)
const relations = []
for (let i = 0; i < nodes.length; i++) {
  for (let j = 0; j < nodes.length; j++) {
    if (i === j) continue
    const p1 = nodes[i].partition
    const p2 = nodes[j].partition
    // Check if p2 covers p1: p1 <= p2 and |p1| = |p2| + 1
    if (p1.length === p2.length + 1 && isRefinement(p1, p2)) {
      relations.push([nodes[i].id, nodes[j].id])
    }
  }
}
</script>

# דיאגרמת הסה של החלוקות של $\{1,2,3,4\}$ ע"פ סדר העידון

<div class="flex justify-center items-center">
  <HasseDiagram 
    :nodes="nodes" 
    :relations="relations" 
    :nodeRadius="20"
    :levelGap="110"
    :nodeGap="100"
    :fontSize="12"
  />
</div>

---

<script setup>
import { computed } from 'vue'

// Reuse the same partition generation logic or copy it if scope is isolated
// Since slidev scripts are scoped per slide by default or global if not scoped, 
// but here we are in a markdown file. 
// Safest is to redefine or use a shared setup if possible. 
// Given the previous slide has a <script setup>, it might be local to that slide or global.
// Slidev <script setup> is usually per slide if inside the slide block, but let's check.
// Actually, <script setup> in Slidev markdown is usually for the whole page or component.
// However, to avoid conflicts, I will use unique variable names or rely on the fact that 
// I'm defining a new component logic. 
// Wait, Slidev treats <script setup> as global for the markdown file usually.
// But I can just use the variables from the previous script if they are available, 
// or redefine them if they are not.
// Let's try to redefine with different names to be safe, or check if we can reuse `nodes`.
// Actually, `nodes` from previous slide might be available. 
// But to be safe and clean, I will define `nodesInclusion` and `relationsInclusion`.

// Re-implementing generation to be self-contained for this slide logic
function getPartitions2(setElements) {
  if (setElements.length === 0) return [[]]
  const first = setElements[0]
  const rest = setElements.slice(1)
  const partitions = []
  function getCombinations(arr, k) {
    if (k === 0) return [[]]
    if (arr.length === k) return [arr]
    if (arr.length < k) return []
    const withFirst = getCombinations(arr.slice(1), k - 1).map(c => [arr[0], ...c])
    const withoutFirst = getCombinations(arr.slice(1), k)
    return [...withFirst, ...withoutFirst]
  }
  for (let i = 1; i <= setElements.length; i++) {
    const subsets = getCombinations(rest, i - 1).map(c => [first, ...c])
    for (const subset of subsets) {
      const remaining = setElements.filter(x => !subset.includes(x))
      const subPartitions = getPartitions2(remaining)
      for (const p of subPartitions) {
        partitions.push([subset, ...p])
      }
    }
  }
  return partitions
}

function partitionToStr2(p) {
  return p.map(block => block.sort().join('')).sort().join('|')
}

const elements2 = [1, 2, 3, 4]
const allPartitions2 = getPartitions2(elements2)

const nodesInclusion = allPartitions2.map((p, i) => ({
  id: String(i),
  label: partitionToStr2(p),
  partition: p
}))

// Inclusion relation: P1 <= P2 iff P1 is a subset of P2
// For partitions of the same set, P1 subset P2 implies P1 = P2.
// So there should be NO edges in the Hasse diagram (reflexive edges are implied but not drawn).
const relationsInclusion = []
for (let i = 0; i < nodesInclusion.length; i++) {
  for (let j = 0; j < nodesInclusion.length; j++) {
    if (i === j) continue
    const p1 = nodesInclusion[i].partition
    const p2 = nodesInclusion[j].partition
    
    // Check if every block in p1 is also a block in p2
    // We need to compare blocks (arrays) by content
    const isSubset = p1.every(b1 => 
      p2.some(b2 => 
        b1.length === b2.length && b1.every(x => b2.includes(x))
      )
    )
    
    if (isSubset) {
      relationsInclusion.push([nodesInclusion[i].id, nodesInclusion[j].id])
    }
  }
}
</script>

# דיאגרמת הסה של החלוקות של $\{1,2,3,4\}$ ע"פ סדר ההכלה

<div class="flex justify-center items-center">
  <HasseDiagram 
    :nodes="nodesInclusion" 
    :relations="relationsInclusion" 
    :nodeRadius="20"
    :levelGap="110"
    :nodeGap="65"
    :fontSize="12"
  />
</div>

<div class="absolute bottom-10 right-10 text-sm ">

  עבור חלוקות של אותה קבוצה, $P_1 \subseteq P_2 \iff P_1 = P_2$. <br>
  לכן יחס ההכלה הוא טריוויאלי (רק רפלקסיבי), ואין קשתות בדיאגרמה.
</div>


---
layout: two-cols-header
---

# אם $R$ יחס שקילות על $A$ אז $A/R$ היא חלוקה של $A$

עלינו להוכיח שלוש תכונות:

::left::

<v-clicks  depth="2">

- **כל מחלקה לא ריקה:**
  - לכל $a\in A$, מרפלקסיביות $aRa$, ולכן $a\in [a]_R$.
  - מסקנה: $[a]_R\neq\emptyset$ לכל $a\in A$.

- **מחלקות זרות בזוגות:**
  - נניח $[a]_R\cap [b]_R\neq\emptyset$. אז קיים $x\in [a]_R\cap [b]_R$.
  - מכאן $aRx$ וגם $bRx$. מסימטריות: $xRb$.
  - מטרנזיטיביות: $aRb$.
  - לכן $[a]_R=[b]_R$ 
  - מסקנה: אם $[a]_R\neq [b]_R$ אז $[a]_R\cap [b]_R=\emptyset$.

</v-clicks>

::right::

<v-clicks  depth="2">

- **האיחוד מכסה את $A$**  :
  - מהנקודה הראשונה, לכל $a\in A$ מתקיים $a\in [a]_R$.

  - לכן $A\subseteq \bigcup A/R$.
  - מצד שני, כל מחלקה היא תת-קבוצה של $A$, ולכן $\bigcup A/R\subseteq A$.
  - מסקנה: $\bigcup A/R = A$.

</v-clicks>

---

# כל חלוקה משרה יחס שקילות

**טענה:** אם $P$ חלוקה של $A$, אז היחס  $\sim_P \;  \subseteq A \times A$ המוגדר על ידי
$\langle a,b\rangle \in \sim_P \iff \exists S\in P\;(a\in S \wedge b\in S)$ הוא יחס שקילות.

**הוכחה:** עלינו להוכיח שלוש תכונות:

<v-clicks  depth="2">

**1. רפלקסיביות:**
- לכל $a\in A$, מכיוון ש-$P$ חלוקה, קיים $S\in P$ כך ש-$a\in S$.
- לכן $a\sim_P a$.

**2. סימטריות:**
- נניח $a\sim_P b$. אז קיים $S\in P$ כך ש-$a,b\in S$.
- אותו $S$ מקיים גם $b,a\in S$, ולכן $b\sim_P a$.

**3. טרנזיטיביות:**
- נניח $a\sim_P b$ ו-$b\sim_P c$. אז קיימים $S_1,S_2\in P$ כך ש-$a,b\in S_1$ וגם $b,c\in S_2$.
- מכיוון ש-$b\in S_1\cap S_2$ והחלוקה זרה בזוגות, מתקיים $S_1=S_2$.
- לכן $a,c\in S_1$, ומכאן $a\sim_P c$.

</v-clicks>

<img src="/images/מחלוקה ליחס שקילות.png" class="absolute top-60 left-20 h-70" style="z-index:-1" />

---
layout: two-cols-header
class: gap-20
---

# מרחב המנה הוא החלוקה המקורית

**נזכיר:** בהינתן חלוקה $P$, הגדרנו $a \sim_P b \iff \exists S \in P\;(a,b \in S)$.

**טענה:** $A/\sim_P \;=\; P$.

**הוכחה:**

::left::

<v-clicks depth="2">


- **כיוון 1 ($A/\sim_P \;\subseteq P$)**
  - תהי $[a] \in A/\sim_P$.
  
  - מכיוון ש-$P$ חלוקה, קיים $S \in P$ כך ש-$a \in S$.
  - נראה ש-$[a] = S$:
    - יהי $x\in S$. אז $x\sim_P a$ כי $a\in S$. לכן $x\in [a]$
    - יהי $x\in [a]$. אז $x\sim_P a$ כי $a\in S$. לכן $x\in S$
  
  - לכן $[a] \in P$

</v-clicks>

::right::

<v-clicks depth="2">

- **כיוון 2 ($P \subseteq A/\sim_P$):**
  - תהי $S \in P$.
  - $S$ לא ריקה, אז ניקח $a \in S$.
  - נראה ש-$[a] = S$:
    - יהי $x\in S$. אז $x\sim_P a$ כי $a\in S$. לכן $x\in [a]$
    - יהי $x\in [a]$. אז $x\sim_P a$ כי $a\in S$. לכן $x\in S$
    
  - לכן $S \in A/\sim_P$
</v-clicks>




---



# היחס המושרה על ידי מרחב המנה הוא היחס המקורי

**טענה:** $\sim_{(A/\sim)} \;=\; \sim$.

**הוכחה:**

<v-clicks>



| | |
| :--- | :--- |
| $a \sim_{(A/\sim)} b$ | |
| $\iff \exists S \in A/\sim \; (a,b \in S)$ | (לפי הגדרת היחס המושרה ע"י חלוקה) |
| $\iff \exists x \in A \; (a,b \in [x]_\sim)$ | (לפי הגדרת מרחב המנה) |
| $\iff [a]_\sim = [b]_\sim$ | (תכונות מחלקות שקילות) |
| $\iff a \sim b$ | (תכונות מחלקות שקילות) |

</v-clicks>



---

# הגדרת המספרים הרציונליים

<!-- - ההגדרה של מערכת נציגים ומרחבי מנה משמשת, בין השאר, לבניית מערכות מספרים: -->

<!-- - לדוגמה נהוג להגדיר את קבוצת המספרים הרציונליים $\mathbb{Q}$ באופן הבא: -->

- נתחיל מהקבוצה $\mathbb{Z}\times(\mathbb{Z}\setminus\{0\})$.

- נגדיר עליה יחס שקילות $\sim$ לפי: 
<div class="formula-box">

$\;\sim\;=\;\{\,\langle\,\langle a,b\rangle,\langle x,y\rangle\,\rangle\mid ay=xb\,\}$
</div>

- נגדיר את קבוצת המספרים הרציונליים בתור קבוצת המנה:
  <div class="formula-box">

  $$\mathbb{Q} := (\mathbb{Z}\times(\mathbb{Z}\setminus\{0\}))/\sim$$
  </div>

- נהוג, כמובן, לסמן את מחלקת השקילות של $\langle a,b\rangle$ בתור השבר $\frac{a}{b}$:

  <div class="formula-box">

  $$\frac{a}{b} = [\langle a,b\rangle]$$
  </div>


---
section: מוגדר היטב
---

# "מוגדר היטב"

- פונקציות על מרחבי מנה מגדירים לעיתים באמצעות נציגים
- כדי שזה יהיה באמת פונקציה יש לוודא שהערך אינו תלוי בנציג - כלומר שההגדרה "מוגדרת היטב".

  - דוגמה: חיבור ב-$\mathbb{Q}$ (באמצעות נציגים):

    <div class="formula-box">

    $\;[\langle a,b\rangle]+[\langle x,y\rangle]\;:=\;[\langle ay+xb,\;by\rangle]$
    </div>

    - צריך להראות:

    <div class="formula-box" style="direction: rtl;">
    
    אם $\langle a,b\rangle\sim\langle a',b'\rangle$ ו-$\langle x,y\rangle\sim\langle x',y'\rangle$ אז $[\langle ay+xb,by\rangle]\sim[\langle a'y'+x'b',b'y'\rangle]$
    </div>

  - בדיקת עקביות על דוגמאות:

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
  <div class="formula-box">
  
  $\tfrac{1}{3}+\tfrac{2}{3}$:
  
  $[\langle 1,3\rangle]+[\langle 2,3\rangle]=[\langle 9,9\rangle]=[\langle 1,1\rangle]$
  </div>
  
  <div class="formula-box">
  
  $\tfrac{2}{6}+\tfrac{8}{12}$:
  
  $[\langle 2,6\rangle]+[\langle 8,12\rangle]=[\langle 72,72\rangle]=[\langle 1,1\rangle]$
  </div>
</div>


---

# דוגמה: "מוגדר היטב"

נתבונן שוב ביחס השקילות שלנו $\equiv_2$ (זוגיות) על $\mathbb{N}$.
נגדיר יחס $T$ על מרחב המנה $\mathbb{N}/\equiv_2$ באופן הבא:
$$T = \{\langle [a],[b]\rangle \mid  \text{הוא זוגי } a - b \}$$
(נשים לב ש-$a-b$ יכול להיות שלילי).

אנו טוענים שיחס זה **מוגדר היטב**.
כדי להוכיח זאת, עלינו להראות שאם $a-b$ זוגי, אז לכל נציג אחר $c \in [a]$ ולכל נציג אחר $d \in [b]$, גם $c-d$ יהיה זוגי.



**טענת עזר:** לכל $a,b \in \mathbb{N}$, ההפרש $a-b$ הוא זוגי אם ורק אם $a,b$ שניהם זוגיים או שניהם אי-זוגיים.

**הוכחת טענת העזר:**
($\Leftarrow$) נניח ששניהם זוגיים. אזי $a=2r, b=2s$ ולכן $a-b=2(r-s)$, זוגי. נניח ששניהם אי-זוגיים. אזי $a=2r+1, b=2s+1$ ולכן $a-b=2r-2s=2(r-s)$, זוגי.
($\Rightarrow$) נראה את הקונטרה-פוזיטיב: אם אחד זוגי והשני אי-זוגי, ההפרש אי-זוגי. נניח $a=2r+1, b=2s$. אזי $a-b=2(r-s)+1$, אי-זוגי.

**חזרה לטענה המקורית:**
נניח $\langle [a],[b]\rangle \in T$, כלומר $a-b$ זוגי. יהיו $c \in [a]$ ו-$d \in [b]$.
לפי טענת העזר, ל-$a$ ו-$b$ אותה זוגיות, ולכן $[a]=[b]$.
מכיוון ש-$c \in [a]$, מתקיים $[c]=[a]$. מכיוון ש-$d \in [b]$, מתקיים $[d]=[b]$.
לכן $[c]=[d]$.
שוב לפי טענת העזר (בכיוון השני), מכיוון ש-$[c]=[d]$, ל-$c$ ו-$d$ אותה זוגיות, ולכן $c-d$ זוגי.

---

# דוגמה: יחס שאינו "מוגדר היטב"

נאמר ששני מספרים טבעיים שונים מאפס הם **זרים** אם המחלק המשותף המקסימלי שלהם הוא 1.

נתבונן שוב ביחס השקילות שלנו $\equiv_2$ על $\mathbb{N}$, ונגדיר יחס $S$ על $\mathbb{N}/\equiv_2$ באופן הבא:
$$S = \{\langle [a],[b]\rangle \mid \text{זרים } b \text{-ו } a \}$$

יחס זה **אינו מוגדר היטב**.

כדי לראות זאת, נשים לב שלפי ההגדרה:
- $\langle [3],[10]\rangle \in S$ מכיוון ש-3 ו-10 זרים.

- לעומת זאת, $\langle [5],[10]\rangle \notin S$ מכיוון ש-5 ו-10 אינם זרים (המחלק המשותף הוא 5).

- אבל, $[3] = [5]$ (שניהם אי-זוגיים).
קיבלנו תוצאה שונה עבור נציגים שונים של אותה מחלקה, ולכן ההגדרה תלויה בנציג.

---
section: מערכות נציגים
---


# מערכת נציגים

- יהי $R$ יחס שקילות על $A$ ותהי $A_0 \subseteq A$. 

- נאמר ש-$A_0$ היא **מערכת נציגים** של $R$ על $A$ אם ורק אם מתקיימים שני התנאים  הבאים:

  - הפרדה (נציג אחד לכל מחלקה):

  <div class="flex items-center justify-center">
    <div class="formula-box">

    $$\forall a,a'\in A_0\;(a\neq a' \Rightarrow \neg(aRa'))$$
    </div>
    <div class="shrink-0">
      או הניסוח השקול
    </div>
    <div class="formula-box">

    $$\forall a\neq a'\in A_0\;([a]_R\cap[a']_R=\emptyset)$$
    </div>
  </div>
  <br> 
  
  - כיסוי (לכל מחלקה יש נציג):

  <div class="flex items-center justify-center">
    <div class="formula-box">
    
    $$A/R=\{[a']_R\mid a'\in A_0\}$$
    </div>
    <div class="shrink-0">
      או הניסוח השקול
    </div>
    <div class="formula-box">

    $$\forall a\in A\;(\exists a'\in A_0\;(aRa'))$$
    </div>
  </div>
  <br>
  
  - ביחד: $A_0$ בוחרת בדיוק נציג אחד מכל מחלקת שקילות של $R$.

- רשמנו שני ניסוחים שקולים לכל אחד מהתנאים כי לפעמים נוח להתייחס ליחס השקילות באופן ישיר ולפעמים למחלקות השקילות שלו.



---

# מערכת נציגים של חלוקה

- תהי $P$ חלוקה של קבוצה $A$.

- קבוצה $S \subseteq A$ תקרא **מערכת נציגים** של החלוקה $P$ אם ורק אם החיתוך של $S$ עם כל איבר בחלוקה מכיל בדיוק איבר אחד.

  <div class="formula-box">

  $$\forall X \in P \; (|S \cap X| = 1)$$
  </div>

- כלומר, $S$ בוחרת נציג אחד בדיוק מכל קבוצה בחלוקה.

- תרגיל: הוכיחו שההגדרה בשקף הזה תואמת את  ההגדרה בשקף הקודם.

  - אם $P$ היא מרחב המנה של $A$ ביחס $R$, אז מערכת נציגים של $P$ היא מערכת נציגים של $R$ ולהיפך.


<img src="/images/partition_selector_he.png" class="absolute bottom-20 left-5 h-70" style="clip-path: inset(0px 0 20px 0);" />

---


# דוגמה: מציאת מערכות נציגים


<v-clicks depth="2">

- $\mathcal{F}=\mathcal{P}(\mathbb{N})\setminus\{\emptyset\}$ (כל תת-קבוצות הטבעיים הלא-ריקות):

  - <span style="color: green;">✓</span> **מערכת נציגים**: בכל $A$ נבחר את $\min A$; אז $S=\{\min A \mid A\in\mathcal{F}\}$


- $\mathcal{F}=\mathcal{P}(\mathbb{Z})\setminus\{\emptyset\}$ (כל תת-קבוצות השלמים הלא-ריקות):

  - <span style="color: green;">✓</span> **מערכת נציגים**: לכל $A$ נבחר איבר במינימום של $|a|$; בשוויון בין $a$ ו-$-a$ נבחר את החיובי


- $\mathcal{F}=\mathcal{P}(\mathbb{Q})\setminus\{\emptyset\}$ (כל תת-קבוצות הרציונליים הלא-ריקות):

  - <span style="color: green;">✓</span> **מערכת נציגים**: לכל $A$ נבחר נציג קנוני בצמצום עם מכנה חיובי; מבין $A$ נעדיף מכנה מינימלי ואז $|מונה|$ מינימלי


- $\mathcal{F}=\mathcal{P}(\mathbb{R})\setminus\{\emptyset\}$ (כל תת-קבוצות הממשיים הלא-ריקות):

  - <span style="color: red;">✗</span> **מערכת נציגים**: אין דרך לבחור נציגים באופן מפורש (למשל, לבחור את המינימום או המקסימום) כי לא כל תת-קבוצה של $\mathbb{R}$ מכילה כזה.

</v-clicks>

---
layout: two-cols-header
---

# אקסיומת הבחירה

- עבור משפחות אינסופיות וכלליות של מחלקות, לא תמיד ניתן לתאר מערכת נציגים באופן מפורש.
  
- קיימת אקסיומה בתורת הקבוצות שמאפשרת לנו להניח שקיימת מערכת נציגים כזו:

<div class="formula-box" style="direction: rtl; text-align: right; padding-left: rem;">

  
  לכל יחס שקילות 
  $R$ על $A$ קיימת מערכת נציגים $A_0 \subseteq A$
</div>

<br>

::left::

<div style="padding-left: 1rem;">

<span style="color: red;">✗</span> **למה לא לקבל את האקסיומה?**
  
  - היא לא מספקת דרך מפורשת לבחירת האיברים

  - ניתן להוכיח באמצעותה דברים מוזרים:
    - אפשר לסדר את $\mathbb{R}$ כך שלכל תת-קבוצה יהיה מינימום
    - אפשר לפרק כדור ליחידות קטנות ולסדר אותן מחדש לכדור בגודל שונה (פרדוקס בנך).

</div>

::right::

<div style="padding-right: 2rem;">

<span style="color: green;">✓</span> **למה כן לקבל את האקסיומה?**

- ללא אקסיומת הבחירה מספר תוצאות בסיסיות באלגברה לא מתקיימות. למשל, יש מרחב וקטורי ללא בסיס.

- היא שימושית מאוד בתורת הקבוצות ובמתמטיקה בכלל.

</div>


---
section: תרגול
---

# אימון קצר

- עבור היחסים הבאים על $\{1,2,3\}$, קבעו האם הם יחסי שקילות (רפלקסיבי, סימטרי, טרנזיטיבי):

  1. $R_1 = \{\langle 1,1\rangle, \langle 2,2\rangle, \langle 3,3\rangle\}$
  2. $R_2 = \{\langle 1,1\rangle, \langle 2,2\rangle, \langle 3,3\rangle, \langle 1,3\rangle, \langle 3,1\rangle\}$
  3. $R_3 = \{\langle 1,1\rangle, \langle 1,2\rangle, \langle 2,1\rangle, \langle 1,3\rangle, \langle 3,1\rangle\}$
  4. $R_4 = \{\langle 1,1\rangle, \langle 2,2\rangle, \langle 3,3\rangle, \langle 1,2\rangle\}$
  5. $R_5 = \{\langle 1,1\rangle, \langle 2,2\rangle, \langle 3,3\rangle, \langle 1,2\rangle, \langle 2,1\rangle, \langle 2,3\rangle, \langle 3,2\rangle\}$
  6. $R_6 = \{\langle 1,2\rangle, \langle 2,1\rangle\}$

> עבור יחסי השקילות, תארו את מחלקות השקילות. עבור האחרים, ציינו איזו תכונה חסרה.


---

# תרגיל פתור: בניית השלמים

נגדיר יחס $\sim$ על $\mathbb{N} \times \mathbb{N}$ באופן הבא:
$$ \langle a,b\rangle \sim \langle c,d\rangle \iff a+d = b+c $$
(הרעיון: הזוג $\langle a,b\rangle$ מייצג את המספר השלם $a-b$).

**הוכחה שזהו יחס שקילות:**

1.  **רפלקסיביות:** לכל $\langle a,b\rangle$, מתקיים $a+b = b+a$, ולכן $\langle a,b\rangle \sim \langle a,b\rangle$.

2.  **סימטריות:** נניח $\langle a,b\rangle \sim \langle c,d\rangle$. אזי $a+d = b+c$. לכן $c+b = d+a$, כלומר $\langle c,d\rangle \sim \langle a,b\rangle$.

3.  **טרנזיטיביות:** נניח $\langle a,b\rangle \sim \langle c,d\rangle$ וגם $\langle c,d\rangle \sim \langle e,f\rangle$.
    אזי $a+d = b+c$ וגם $c+f = d+e$.
    נחבר את המשוואות: $(a+d) + (c+f) = (b+c) + (d+e)$.
    נצמצם את $c$ ו-$d$ משני האגפים ונקבל: $a+f = b+e$.
    לכן $\langle a,b\rangle \sim \langle e,f\rangle$.

**מסקנה:** היחס הוא יחס שקילות. מחלקות השקילות הן המספרים השלמים ($\mathbb{Z}$).
