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
---
# יחסי שקילות ומרחבי מנה
## הרצאה בקורס: מבוא ללוגיקה ותורת הקבוצות

 מרצה: פרופ. גרא וייס

---
section: הגדרה ואפיונים
---

# יחס שקילות – הגדרה

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
 
 $Id_A\subseteq R$
</div>
 
  באשר **$Id_A=\{\langle a,a\rangle: a\in A\}$**.

- סימטרי:
  
<div class="formula-box">  

  $R=R^{-1}$
</div>

באשר **$R^{-1}=\{\langle b,a\rangle: \langle a,b\rangle\in R\}$**.

- טרנזיטיבי:
<div class="formula-box">    

   $R\circ R\subseteq R$, כאשר
</div>   

באשר
  **$R\circ R=\{\langle a,c\rangle\mid \exists b\in A: \langle a,b\rangle\in R\wedge \langle b,c\rangle\in R\}$**

---
section: דוגמאות
---

# דוגמאות ליחסי שקילות

1. **יחס השוויון** על $A$ הוא יחס שקילות:
   $$Eq_A = \{\langle x,x\rangle \mid x\in A\}$$
   - זהו היחס הרפלקסיבי המינימלי (כל איבר שקול רק לעצמו).

2. **היחס המלא** $A\times A$ הוא יחס שקילות על $A$:
   - כל שני איברים ב-$A$ שקולים זה לזה.
   - זהו היחס השקילות המקסימלי (כל האיברים שקולים זה לזה).

3. **שקילות מודולו $n$** על $\mathbb{Z}$:
  $$a\equiv b \pmod n \iff n\mid(a-b).$$


4. **שקילות בגודל** על קבוצות סופיות:
   $$A\sim B \iff |A|=|B|.$$


<img src="/images/שקילות מודולו 3.png" class="absolute top-80 left-10 w-70 h-60" />



---

# כל יחסי השקילות על $\{1,2,3\}$


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


---
section: מחלקות וקבוצת מנה
---

# מחלקת שקילות וקבוצת מנה

- עבור יחס שקילות $R$ על $A$ ולכל $a\in A$ נגדיר:
  
<div class="formula-box">

  $$[a]_R=\{x\in A \mid aRx\}$$
</div>


- קבוצת/מרחב המנה:
<div class="formula-box">

  $$A/R=\{[a]_R \mid a\in A\}.$$
</div>

- מאפיינים:

  - $a\in [a]_R$.

  - $[a]_R=[b]_R$ או $[a]_R\cap[b]_R=\emptyset$.
  - $aRb\iff [a]_R=[b]_R$.

<img src="/images/מחלקות שקילות.png" class="absolute top-80 left-0 w-150 h-80" />


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

1. $\forall S \in P\;(S \neq \emptyset)$

2. $\forall S_1, S_2 \in P\;(S_1 \neq S_2 \Rightarrow S_1 \cap S_2 = \emptyset)$

3. $\bigcup P = X$
</div>

**דוגמאות:**
- קבוצת המספרים הזוגיים וקבוצת המספרים האי-זוגיים היא חלוקה של $\mathbb{N}$.

$$P=\{\{0,2,4,6,\dots\}, \{1,3,5,7,\dots\}\}$$


- **חלוקות טריוויאליות:** לכל קבוצה לא-ריקה $X$ קיימות:

  - $\{X\}$ – חלוקה לקבוצה אחת (המקסימלית)

  - $\bigl\{\{x\} : x \in X\bigr\}$ – פירוק לאיברים בודדים (המינימלית)

---

# יחס העידון בין חלוקות

על אוסף החלוקות של קבוצה $X$ מוגדר **יחס סדר חלקי** הנקרא "**יחס העידון**":

<div class="formula-box">

חלוקה $P_1$ **מעודנת יותר** מחלוקה $P_2$ (סימון: $P_1 \preceq P_2$) אם:<br>
$$\forall A \in P_1 \;\exists B \in P_2 \;(A \subseteq B)$$
</div>

כלומר, כל קבוצה בחלוקה המעודנת מוכלת בקבוצה כלשהי בחלוקה הפחות מעודנת.

**דוגמה על** $\{1,2,3\}$:
- $\{\{1\}, \{2\}, \{3\}\}$ מעודנת יותר מ־$\{\{1,2\}, \{3\}\}$
- $\{\{1,2\}, \{3\}\}$ מעודנת יותר מ־$\{\{1,2,3\}\}$

**תכונות:**
- יחס העידון הופך את אוסף החלוקות לסריג (lattice)
- המינימום והמקסימום שלו הן החלוקות הטריוויאליות

---

# הוכחה: כל מרחב מנה הוא חלוקה

**טענה:** אם $R$ יחס שקילות על $A$ אז $A/R$ היא חלוקה של $A$.

**הוכחה:** עלינו להוכיח שלוש תכונות:

**1. כל מחלקה לא ריקה:**
- לכל $a\in A$, מרפלקסיביות $aRa$, ולכן $a\in [a]_R$.
- מסקנה: $[a]_R\neq\emptyset$ לכל $a\in A$.

**2. מחלקות זרות בזוגות:**
- נניח $[a]_R\cap [b]_R\neq\emptyset$. אז קיים $x\in [a]_R\cap [b]_R$.
- מכאן $aRx$ וגם $bRx$. מסימטריות: $xRb$.
- מטרנזיטיביות: $aRb$.
- לכן $[a]_R=[b]_R$ (כי אם $aRb$ אז כל הקשורים ל-$a$ קשורים גם ל-$b$).
- מסקנה: אם $[a]_R\neq [b]_R$ אז $[a]_R\cap [b]_R=\emptyset$.

**3. האיחוד מכסה את** $A$:
- מהנקודה הראשונה, לכל $a\in A$ מתקיים $a\in [a]_R$.
- לכן $A\subseteq \bigcup A/R$.
- מאידך, כל מחלקה היא תת-קבוצה של $A$, ולכן $\bigcup A/R\subseteq A$.
- מסקנה: $\bigcup A/R = A$.

---

# הוכחה: כל חלוקה משרה יחס שקילות

**טענה:** אם $P$ חלוקה של $A$, אז היחס $R=\{\langle a,b\rangle \mid \exists S\in P: a,b\in S\}$ הוא יחס שקילות.

**הוכחה:** עלינו להוכיח שלוש תכונות:

**1. רפלקסיביות:**
- לכל $a\in A$, מכיוון ש-$P$ חלוקה, קיים $S\in P$ כך ש-$a\in S$.
- לכן $\langle a,a\rangle\in R$.

**2. סימטריות:**
- נניח $aRb$. אז קיים $S\in P$ כך ש-$a,b\in S$.
- אותו $S$ מקיים גם $b,a\in S$, ולכן $bRa$.

**3. טרנזיטיביות:**
- נניח $aRb$ ו-$bRc$. אז קיימים $S_1,S_2\in P$ כך ש-$a,b\in S_1$ וגם $b,c\in S_2$.
- מכיוון ש-$b\in S_1\cap S_2$ והחלוקה זרה בזוגות, מתקיים $S_1=S_2$.
- לכן $a,c\in S_1$, ומכאן $aRc$.

**מסקנה:** מחלקות השקילות של $R$ הן בדיוק אברי $P$.

---

# מרחב מנה הוא חלוקה; חלוקה משרה יחס שקילות

- אם $R$ יחס שקילות על $A$ אז $A/R$ היא חלוקה של $A$:
  - כל איבר $a\in A$ שייך בדיוק למחלקה $[a]_R$;
  - המחלקות זרות בזוגות או שוות; איחודן הוא $A$.
- אם $P$ חלוקה של $A$, אז היחס
  $$a\,R\,b \iff \exists S\in P\;(a,b\in S)$$
  הוא יחס שקילות, ומחלקותיו הן בדיוק אברי $P$.

---
section: דוגמאות מנחות
---

# דוגמה: $\mathbb{Z}/3\mathbb{Z}$

- נגדיר $a\equiv b\ (\text{mod }3)$ על $\mathbb{Z}$.
- מחלקות שקילות:
  - $[0]=\{\dots,-6,-3,0,3,6,\dots\}$
  - $[1]=\{\dots,-5,-2,1,4,7,\dots\}$
  - $[2]=\{\dots,-4,-1,2,5,8,\dots\}$
- $\mathbb{Z}/3\mathbb{Z}=\{[0],[1],[2]\}$.

---

# דוגמה: על $\mathcal{P}(\{1,2,3\})$ עם $1\notin A\,\Delta\,B$

- נגדיר על $\mathcal{P}(\{1,2,3\})$:
  $$A\sim B \iff 1\notin A\,\Delta\,B \iff (1\in A \Leftrightarrow 1\in B).$$
- יש כאן שתי מחלקות שקילות:
  - כל התת־קבוצות שמכילות את $1$;
  - כל התת־קבוצות שאינן מכילות את $1$.
- זוהי חלוקה של $\mathcal{P}(\{1,2,3\})$ לשתי מחלקות.

---
section: אקסיומת הבחירה
---

# מערכת נציגים

- מערכת נציגים עבור יחס שקילות היא קבוצה $S\subseteq A$ שמכילה איבר אחד מכל מחלקת שקילות ב-$A/R$.
- בדוגמה הקודמת: מערכת נציגים אפשרית היא למשל $\{\{1\},\emptyset\}$.

---

# האם תמיד קיימת מערכת נציגים?

- עבור משפחות אינסופיות וכלליות של מחלקות, קיום מערכת נציגים אינו בהכרח קונסטרוקטיבי.
- אקסיומת הבחירה (AC) קובעת שניתן לבחור איבר אחד מכל אוסף של קבוצות לא־ריקות.
- לכן, תחת AC קיימת מערכת נציגים לכל יחס שקילות; אך לעיתים אין תיאור "יעיל" כיצד לבחור.

---
section: תרגול וסיכום
---

# אימון קצר

- תארו את כל מחלקות השקילות של היחסים הבאים על $\{1,2,3\}$:
  1) $a\sim b$ אם ורק אם $a=b$.
  2) $a\sim b$ אם ורק אם $a\equiv b\pmod 2$ (על $\{1,2,3\}$ זה יוצר שתי מחלקות?).
  3) $a\sim b$ אם ורק אם $\min(a,b)=1$.

> בדקו מי מהיחסים אכן שקילות, ומדוע.

---

# סיכום

- יחס שקילות = רפלקסיבי + סימטרי + טרנזיטיבי.
- מחלקות שקילות יוצרות חלוקה; חלוקה מגדירה יחס שקילות.
- מרחבי מנה מסייעים לזהות אובייקטים "שקולים" ולפעול עליהם כעל ישות אחת.
- אקסיומת הבחירה מבטיחה מערכות נציגים כלליות אך אינה מספקת דרך קונסטרוקטיבית לבחירה.
