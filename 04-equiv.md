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

3. **שקילות מודולו $n$** על 

$$ \mathbb{Z}: a\equiv b \pmod n \iff n\mid(a-b) \iff \exists k\in\mathbb{Z} \;(a-b=nk) $$

4. **שקילות בגודל** על קבוצות סופיות: $A\sim B \iff |A|=|B|$

5. **חפיפה ודמיון משולשים** (בהינתן אוסף משולשים כלשהם).


<img src="/images/שקילות מודולו 3.png" class="absolute top-45 left-10 w-70 h-60" />

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

- מאפיינים:

  - $a\in [a]_R$.

  - $[a]_R=[b]_R$ או $[a]_R\cap[b]_R=\emptyset$.
  - $aRb\iff [a]_R=[b]_R$.




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
layout: two-cols-header
---

# אם $R$ יחס שקילות על $A$ אז $A/R$ היא חלוקה של $A$

עלינו להוכיח שלוש תכונות:

::left::

- **כל מחלקה לא ריקה:**
  - לכל $a\in A$, מרפלקסיביות $aRa$, ולכן $a\in [a]_R$.
  - מסקנה: $[a]_R\neq\emptyset$ לכל $a\in A$.

- **מחלקות זרות בזוגות:**
  - נניח $[a]_R\cap [b]_R\neq\emptyset$. אז קיים $x\in [a]_R\cap [b]_R$.
  - מכאן $aRx$ וגם $bRx$. מסימטריות: $xRb$.
  - מטרנזיטיביות: $aRb$.
  - לכן $[a]_R=[b]_R$ 
  - מסקנה: אם $[a]_R\neq [b]_R$ אז $[a]_R\cap [b]_R=\emptyset$.

::right::

**האיחוד מכסה את $A$**  :
- מהנקודה הראשונה, לכל $a\in A$ מתקיים $a\in [a]_R$.
- לכן $A\subseteq \bigcup A/R$.
- מצד שני, כל מחלקה היא תת-קבוצה של $A$, ולכן $\bigcup A/R\subseteq A$.
- מסקנה: $\bigcup A/R = A$.

---

# כל חלוקה משרה יחס שקילות

**טענה:** אם $P$ חלוקה של $A$, אז היחס  $\sim_P \;  \subseteq A \times A$ המוגדר על ידי
$\langle a,b\rangle \in \sim_P \iff \exists S\in P\;(a\in S \wedge b\in S)$ הוא יחס שקילות.

**הוכחה:** עלינו להוכיח שלוש תכונות:

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



<img src="/images/מחלוקה ליחס שקילות.png" class="absolute top-60 left-20 h-70" style="z-index:-1" />



---
section: מערכות נציגים
---


# מערכת נציגים

- יהי $R$ יחס שקילות על $A$ ותהי $A_0 \subseteq A$. 

- נאמר ש-$A_0$ היא **מערכת נציגים** של $R$ על $A$ אם ורק אם מתקיימים שני התנאים  הבאים:

  - הפרדה (נציג אחד לכל מחלקה):

  <div class="formula-box" >

  $$\forall a,a'\in A_0\;(a\neq a' \Rightarrow \neg(aRa')) \quad \equiv \quad \forall a\neq a'\in A_0\;([a]_R\cap[a']_R=\emptyset)$$

  </div>
  <br> 
  
  - כיסוי (לכל מחלקה יש נציג):

  <div class="formula-box" >
  
  $$A/R=\{[a']_R\mid a'\in A_0\} \quad \equiv \quad \forall a\in A\;(\exists a'\in A_0\;(aRa'))$$
  </div>
  <br>
  
  - ביחד: $A_0$ בוחרת בדיוק נציג אחד מכל מחלקת שקילות של $R$.

- רשמנו שני ניסוחים שקולים לכל אחד מהתנאים כי לפעמים נוח להתייחס ליחס השקילות באופן ישיר ולפעמים למחלקות השקילות שלו.


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

- נהוג, כמובן לסמן את מחלקת השקילות של $\langle a,b\rangle$ בתור השבר $\frac{a}{b}$:

  <div class="formula-box">

  $$\frac{a}{b} = [\langle a,b\rangle]$$
  </div>


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

# דוגמה: מציאת מערכות נציגים


<v-clicks depth="2">

- $\mathcal{F}=\mathcal{P}(\mathbb{N})\setminus\{\emptyset\}$ (כל תת-קבוצות הטבעיים הלא-ריקות):

  - <span style="color: green;">✓</span> **מערכת נציגים**: בכל $A$ נבחר את $\min A$; אז $S=\{\min A: A\in\mathcal{F}\}$


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
