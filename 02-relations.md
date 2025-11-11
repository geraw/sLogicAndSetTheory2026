---
theme: frankfurt
infoLine: true
author: "גרא וייס"
title: "זוגות סדורים, יחסים, תכונות"
htmlAttrs:
  dir: rtl
  lang: heb
mdc: true
download: true
exportFilename: 02-relations.pdf
---
# זוגות סדורים, יחסים, תכונות
## הרצאה בקורס: מבוא ללוגיקה ותורת הקבוצות

 מרצה: פרופ. גרא וייס
---
section: זוגות סדורים 
---
# זוגות סדורים ומכפלות קרטזיות

הקבוצה $\{a, b\}$ שווה לקבוצה $\{b, a\}$, שכן לשתי קבוצות אלו אותם איברים: $a$ ו-$b$. עם זאת, לפעמים הסדר חשוב לנו, ולכן נגדיר אובייקט מתמטי חדש בשם "זוג סדור", שבו הסדר בין האיברים מובחן.

- **הגדרה:** בהנתן $a$ ו-$b$ כלשהם ניתן לייצר את הזוג הסדור $\langle a, b \rangle$ בו $a$ הוא האיבר הראשון (איבר שמאלי) ו-$b$ האיבר השני (הימני).

  - שני זוגות סדורים שווים אם ורק אם לשניהם אותו איבר ראשון ואותו איבר שני, כלומר: $a = c \land b = d \iff \langle a, b \rangle = \langle c, d \rangle$.

  - למשל: $\langle 1, 3 \rangle \neq \langle 3, 1 \rangle$.

- **סימון:** אם $p = \langle a, b \rangle$ הוא זוג סדור, נסמן $\pi_0(p) = a$ להיות איברו הראשון ו-$\pi_1(p) = b$ להיות איברו השני. 
  - כלומר, לכל זוג סדור $p$, $p = \langle \pi_0(p), \pi_1(p) \rangle$.

- **הגדרה:** המכפלה קרטזית של קבוצות $A$ ו-$B$ היא הקבוצה: $A \times B = \{\langle a, b \rangle \mid a \in A \land b \in B\}$.
  - כלומר קבוצת כל הזוגות שאיברם הראשון לקוח מ-$A$ והשני מ-$B$.

  - **דוגמה:** $\{1, 2\} \times \{\{2\}, 3\} = \{\langle 1, \{2\} \rangle, \langle 1, 3 \rangle, \langle 2, \{2\} \rangle, \langle 2, 3 \rangle\}$.


---

# מאפיינים עיקריים

<div class="grid grid-cols-2 gap-8" dir="rtl">

<div>

### 1. לסדר יש חשיבות

הזוגות הם **סדורים**. המשמעות היא שהזוג $\langle \text{חולצה כחולה}, \text{ג'ינס} \rangle$ שונה מהזוג $\langle \text{ג'ינס}, \text{חולצה כחולה} \rangle$.

לכן, ברוב המקרים:
<p dir="ltr" class="text-center font-mono">

$A \times B \neq B \times A$
</p>

</div>

<div>

### 2. מספר האיברים

מספר האיברים במכפלה הקרטזית הוא מכפלת מספר האיברים בכל אחת מהקבוצות המקוריות.

אם קבוצה $A$ מכילה **m** איברים וקבוצה $B$ מכילה **n** איברים, אז:

<p dir="ltr" class="text-center font-mono">

$|A \times B| = m \times n$
</p>

**הדוגמה שלנו:**
<p dir="ltr" class="text-left font-mono">

חולצות: $|A|=3$
<br>
מכנסיים: $|B|=2$
<br>
תלבושות: $|A \times B|=3 \times 2=6$
</p>

</div>
</div>


<img src="/images/מכפלה קרטזית.png" class="absolute top-2.2/3 left-1/9  h-30" />

---

# דוגמאות מהעולם האמיתי


המכפלה הקרטזית נמצאת סביבנו!

*  **חפיסת קלפים:** חפיסה של 52 קלפים היא המכפלה הקרטזית של:

    *   **קבוצת הדרגות:** $\{A, K, Q, J, 10, \ldots, 2\}$

    *   **קבוצת הסדרות:** $\{\spadesuit, \heartsuit, \diamondsuit, \clubsuit\}$

*   **תפריטי מסעדות:** קבוצת כל הצירופים האפשריים של $\langle \text{מנה ראשונה}, \text{מנה עיקרית} \rangle$.

*   **פיקסלים במסך:** קבוצת כל הפיקסלים על צג היא מכפלה של $\langle X\text{-קואורדינטות}, Y\text{-קואורדינטות} \rangle$.

*   **קואורדינטות GPS:** מיקום הוא זוג סדור $\langle \text{קו רוחב}, \text{קו אורך} \rangle$.

*  **זמן:** זמן ניתן לייצוג כזוג סדור $\langle \text{שעות}, \text{דקות} \rangle$.

* **כתובות דוא"ל:** כתובת דוא"ל היא זוג סדור $\langle \text{שם משתמש}, \text{שם תחום} \rangle$.

---

# דוגמה: מצב משחק שחמט

<div class="grid grid-cols-2 gap-8 text-3.5" dir="rtl">

<div>

**הקבוצות המרכיבות:**

1. **שורות:** $\text{Rows} = \{1, 2, 3, 4, 5, 6, 7, 8\}$

2. **עמודות:** $\text{Cols} = \{a, b, c, d, e, f, g, h\}$

3. **כלים:** 
    - $\text{Pieces} = \{\text{מלך לבן}, \text{מלכה לבנה}, \ldots, \text{צריח שחור א, צריח שחור ב, \ldots}\}$
   - סה"כ 32 כלים (16 לכל צד)

**מצב של המשחק הוא תת-קבוצה של המכפלה הקרטזית:**

$$\text{Board} \subseteq (\text{Rows} \times \text{Cols}) \times \text{Pieces}$$

</div>

<div>

**מגבלות על המצב:**

1. **כל כלי מופיע לכל היותר פעם אחת:**
   - אם $\langle \langle r_1, c_1 \rangle, p \rangle \in \text{Board}$ ו-$\langle \langle r_2, c_2 \rangle, p \rangle \in \text{Board}$
   
   - אז $r_1 = r_2$ וגם $c_1 = c_2$

2. **כל משבצת מכילה לכל היותר כלי אחד:**
   - אם $\langle \langle r, c \rangle, p_1 \rangle \in \text{Board}$ ו-$\langle \langle r, c \rangle, p_2 \rangle \in \text{Board}$
   
   - אז $p_1 = p_2$

**דוגמה למצב חוקי:**

$$\text{Board} = \{\langle \langle 1, e \rangle, \text{מלך לבן} \rangle, \langle \langle 8, d \rangle, \text{מלכה שחורה} \rangle, \langle \langle 2, a \rangle, \text{חייל לבן א} \rangle\}$$

</div>

</div>

<div class="text-sm mt-4" dir="rtl">
<b>הערה:</b> מצב אמיתי של שחמט הוא תת-קבוצה של המכפלה הקרטזית (יחס ) עם מגבלות נוספות, לא המכפלה הקרטזית עצמה.
</div>

---


# טענה: לכל קבוצה $A$, $\emptyset \times A = A \times \emptyset = \emptyset$
 
- **הוכחה:**
  - נראה כי $\emptyset \times A = \emptyset$.
  
  - לפי הגדרה, $\emptyset \times A = \{\langle a, b \rangle \mid a \in \emptyset \land b \in A\}$.
  - מאחר ואין איבר $a \in \emptyset$, הקבוצה ריקה.
  - באופן דומה, $A \times \emptyset = \{\langle a, b \rangle \mid a \in A \land b \in \emptyset\} = \emptyset$.


<img src="/images/מכפלה קרטזית ריקה.png" class="absolute top-1/3 left-1/9 w-90 h-90" />


---
layout: two-cols-header
---

# $A \times (B \cup C) = (A \times B) \cup (A \times C)$

::left::

- **כיוון ראשון ($\subseteq$):**

  - תהי $\langle a, b \rangle \in A \times (B \cup C)$.
  
  - אז $a \in A$ ו-$b \in B \cup C$.
  - כלומר $b \in B$ או $b \in C$.
  - אם $b \in B$, אז $\langle a, b \rangle \in A \times B$.
  - אם $b \in C$, אז $\langle a, b \rangle \in A \times C$.
  - לכן, בכל מקרה, $\langle a, b \rangle \in (A \times B) \cup (A \times C)$.

::right::

- **כיוון שני ($\supseteq$):**

  - תהי $\langle a, b \rangle \in (A \times B) \cup (A \times C)$.
  
  - אז $\langle a, b \rangle \in A \times B$ או $\langle a, b \rangle \in A \times C$.
  - כלומר $a \in A$ ו-($b \in B$ או $b \in C$).
  - ולכן $b \in B \cup C$.
  - אז $\langle a, b \rangle \in A \times (B \cup C)$.

---
layout: two-cols-header
---

# $A \times (B \cap C) = (A \times B) \cap (A \times C)$

::left::

- **כיוון ראשון ($\subseteq$):**

  - תהי $\langle a, b \rangle \in A \times (B \cap C)$.

  - אז $a \in A$ ו-$b \in B \cap C$.
  - כלומר $b \in B$ ו-$b \in C$.
  - לכן $\langle a, b \rangle \in A \times B$ ו-$\langle a, b \rangle \in A \times C$.
  - אז $\langle a, b \rangle \in (A \times B) \cap (A \times C)$.

::right::

- **כיוון שני ($\supseteq$):**

  - תהי $\langle a, b \rangle \in (A \times B) \cap (A \times C)$.

  - אז $\langle a, b \rangle \in A \times B$ ו-$\langle a, b \rangle \in A \times C$.
  - כלומר $a \in A$, $b \in B$ ו-$b \in C$.
  - ולכן $b \in B \cap C$.
  - אז $\langle a, b \rangle \in A \times (B \cap C)$.

---
layout: two-cols-header
---



# $A \times (B \setminus C) = (A \times B) \setminus (A \times C)$

::left::

- **כיוון ראשון ($\subseteq$):**

  - תהי $\langle a, b \rangle \in A \times (B \setminus C)$.

  - אז $a \in A$ ו-$b \in B \setminus C$.
  - כלומר $b \in B$ ו-$b \notin C$.
  - לכן $\langle a, b \rangle \in A \times B$.
  - ו-$\langle a, b \rangle \notin A \times C$ (כי אם היה, אז $b \in C$).
  - אז $\langle a, b \rangle \in (A \times B) \setminus (A \times C)$.

::right::

- **כיוון שני ($\supseteq$):**

  - תהי $\langle a, b \rangle \in (A \times B) \setminus (A \times C)$.

  - אז $\langle a, b \rangle \in A \times B$ ו-$\langle a, b \rangle \notin A \times C$.
  - כלומר $a \in A$, $b \in B$ ו-$b \notin C$.
  - ולכן $b \in B \setminus C$.
  - אז $\langle a, b \rangle \in A \times (B \setminus C)$.

---
section: יחסים 
---

# יחסים

- **הגדרה:** יחס מ-$A$ ל-$B$ הוא תת-קבוצה של $A \times B$.

- **תחום היחס (Domain):** לתת-קבוצה $R \subseteq A \times B$, התחום של $R$ הוא הקבוצה 



<div class="formula-box">

  $$\operatorname{dom}(R) = \left\{ x \in A \mid \exists y \in B \, \bigl(\langle x, y \rangle \in R \bigr) \right\}$$

</div>

<br>

- **תמונה היחס (Image):** התמונה של $R$ היא הקבוצה 


<div class="formula-box">

  $$\operatorname{img}(R) = \left\{ y \in B \mid \exists x \in A \, \bigl(\langle x, y \rangle \in R \bigr) \right\}$$

</div>


- **תכונה:** $R \subseteq \operatorname{dom}(R) \times \operatorname{img}(R)$.

  -  אם $\langle x,y\rangle\in R$ אז $x\in\operatorname{dom}(R)$ ו-$y\in\operatorname{img}(R)$, ולכן $\langle x,y\rangle\in\operatorname{dom}(R)\times\operatorname{img}(R)$.


- **דוגמה:** אם $R=\{\langle1,a\rangle,\langle2,b\rangle\}$ אז $\operatorname{dom}(R)=\{1,2\}$ ו-$\operatorname{img}(R)=\{a,b\}$.
    - $dom(R) \times img(R) = \{ \langle 1, a \rangle, \langle 1, b \rangle, \langle 2, a \rangle, \langle 2, b \rangle \}$ 


<div class="absolute top-1.95/3 left-1/4 transform -translate-x-1/2 w-80 h-80" style="scale:.5;">
<BipartiteGraph
  :left="['1','2']"
  :right="['A','B']"
  :edges="[
    ['L1','RA',''],
    ['L2','RB','']
  ]"
/>
</div>



---
layout: two-cols-header
---

# $\operatorname{dom}(R \cup S) = \operatorname{dom}(R) \cup \operatorname{dom}(S)$


::left::

  - **כיוון ראשון ($\subseteq$):**

    - תהי $x \in \operatorname{dom}(R \cup S)$.

    - אז קיים $y$ כך ש $\langle x, y \rangle \in R \cup S$.
    - כלומר $\langle x, y \rangle \in R$ או $\langle x, y \rangle \in S$.
    - אם $\langle x, y \rangle \in R$, אז $x \in \operatorname{dom}(R) \subseteq \operatorname{dom}(R) \cup \operatorname{dom}(S)$.
    - אם $\langle x, y \rangle \in S$, אז $x \in \operatorname{dom}(S) \subseteq \operatorname{dom}(R) \cup \operatorname{dom}(S)$.
  
::right::  
  - **כיוון שני ($\supseteq$):**

    - תהי $x \in \operatorname{dom}(R) \cup \operatorname{dom}(S)$.

    - אם $x \in \operatorname{dom}(R)$, קיים $y$ עם $\langle x, y \rangle \in R \subseteq R \cup S$, 
      - אז $x \in \operatorname{dom}(R \cup S)$.
    - אם $x \in \operatorname{dom}(S)$, קיים $y$ עם $\langle x, y \rangle \in S \subseteq R \cup S$, 
      - אז $x \in \operatorname{dom}(R \cup S)$.

---

# $\operatorname{dom}(R \cap S) \neq \operatorname{dom}(R) \cap \operatorname{dom}(S)$


- **דוגמה נגדית:**

  - ניקח $A = \{1, 2\}$, $B = \{a, b\}$.

  - $R = \{\langle 1, a \rangle, \langle 2, a \rangle\}$.

  - $S = \{\langle 1, b \rangle, \langle 2, b \rangle\}$.

  - אז $\operatorname{dom}(R) = \{1, 2\}$.

  - $\operatorname{dom}(S) = \{1, 2\}$.

  - $R \cap S = \emptyset$, לכן $\operatorname{dom}(R \cap S) = \emptyset$.

  - אך $\operatorname{dom}(R) \cap \operatorname{dom}(S) = \{1, 2\}$.

  - לכן $\operatorname{dom}(R \cap S) \neq \operatorname{dom}(R) \cap \operatorname{dom}(S)$
  

<div class="absolute top-1.2/4 left-1/4 transform">

$$R$$

<div style="scale:.5; margin-top: -6rem;">
<BipartiteGraph 
  :left="['1','2']"
  :right="['a','b']"
  :edges="[
    ['L1','Ra',''],
    ['L2','Ra','']
  ]"
/>
</div>
</div>


<div class="absolute top-1.2/4 left-1/300">

$$S$$
<BipartiteGraph style="scale:.5; margin-top: -6rem;"
  :left="['1','2']"
  :right="['a','b']"
  :edges="[
    ['L1','Rb',''],
    ['L2','Rb','']
  ]"
/>

</div>


---

# דוגמאות ליחסים מוכרים

- **יחס הסדר על הטבעיים:** ניתן להציג את יחס "קטן או שווה" כקבוצת זוגות סדורים
  $$\le_{\mathbb{N}}=\{\langle n,m\rangle\mid n,m\in\mathbb{N},\ n\le m\},$$
  ובשימוש רגיל נכתוב $n\le m$ במקום $\langle n,m\rangle\in \le_{\mathbb{N}}$.


- **יחס השוויון על קבוצה $A$:**
  $$Eq_A=\{\langle a,a\rangle\mid a\in A\},$$
  ולרוב נרשום $x=y$ במקום $\langle x,y\rangle\in Eq_A$. 


- יחס הסדר על הממשיים אינו זהה ליחס על הטבעיים; מתקיימת הכלה
  $\le_{\mathbb{N}}\subseteq\le_{\mathbb{R}},$
  כלומר $\forall m,n\in\mathbb{N}\,(m\le_{\mathbb{N}} n\to m\le_{\mathbb{R}} n)$.

- **הגדרה:** אם $R \subseteq A \times A$, אנו אומרים ש-$R$ יחס על $A$ (ואז $R$ יחס על כל $A' \subseteq A$ כי $R \subseteq A' \times A'$).

- לעיתים, בהינתן יחס $R$, במקום לרשום $\langle a,b\rangle\in R$ אנו רושמים $a\,R\,b$.





<style>
/* יותר ריווח בין פריטי רשימות במצגות */
:where(.slidev-layout) ul li,
:where(.slidev-layout) ol li {
  margin-bottom: 2rem;
}
  
/* אם רוצים מרווח גדול יותר לשקפים עם טקסט כותרתי אשפר כאן */
:where(.slidev-layout) .slidev-markdown ul li,
:where(.slidev-layout) .slidev-markdown ol li {
  margin-bottom: 0.8rem;
}
</style>

---

# היחס ההופכי

- הגדרה: עבור יחס $R\subseteq A\times B$ נגדיר

<div class="formula-box">

  $$
  R^{-1}=\{\langle y,x\rangle \mid \langle x,y\rangle\in R\}\subseteq B\times A .
  $$

</div>


- תכונות:
  - $\operatorname{dom}(R^{-1})=\operatorname{img}(R)$.
    - אם $\langle y,x\rangle\in R^{-1}$ אז קיים $x,y$ כך ש $\langle x,y\rangle\in R$, ולכן $y\in \operatorname{img}(R)$.


  - $\operatorname{img}(R^{-1})=\operatorname{dom}(R)$.
    - אם $\langle y,x\rangle\in R^{-1}$ אז קיים $x,y$ כך ש $\langle x,y\rangle\in R$, ולכן $x\in \operatorname{dom}(R)$.
  
  - $(R^{-1})^{-1}=R$.
  -  $\langle x,y\rangle\in R$  אם ורק אם $\langle y,x\rangle\in R^{-1}$ ולכן $\langle x,y\rangle\in (R^{-1})^{-1}$.

- דוגמה: אם $R=\{\langle1,a\rangle,\langle2,b\rangle\}$ אז $R^{-1}=\{\langle a,1\rangle,\langle b,2\rangle\}$.


<div class="absolute top-1.2/4 right-7/10">

$$R$$
<BipartiteGraph style="scale:.5; margin-top: -6rem;"
  :left="['1','2', '3']"
  :right="['a','b', 'c']"
  :edges="[
    ['L1','Rb',''],
    ['L2','Rc',''],
    ['L3','Ra','']
  ]"
/>
</div>

<div class="absolute top-2.7/4 right-7/10">

$$R^{-1}$$
<BipartiteGraph style="scale:.5; margin-top: -6rem;"
  :left="['a','b', 'c']"
  :right="['1','2', '3']"
  :edges="[
    ['La','R3',''],
    ['Lb','R1',''],
    ['Lc','R2','']
  ]"
/>
</div>


---
section: תכונות של יחסים 
---

# רפלקסיביות על $A$

- **הגדרה:** יחס $R$ על קבוצה $A$ נקרא רפלקסיבי על $A$ אם לכל $a \in A$, $a \, R \, a$.

- נשים לב לכך שאיננו מגדירים מתי יחס הוא רפלקסיבי אלא מתי הוא רפלקסיבי **על $A$**

- אם נצייר את היחס $R$ על $A$ בעזרת חיצים בין אברי $A$,
  <br>
  אז בציור של יחס רפלקסיבי כל איבר של $A$ מחובר בלולאה אל עצמו (חיצים נוספים אפשריים)

<div class="absolute top-1.3/3 left-1/9" style="scale:.7;">
<GraphCytoscape 
  :nodes=" [
    { id: '1', x: 100, y: 100, label: '1' },
    { id: '2', x: 300, y: 100, label: '2' },
    { id: '3', x: 200, y: 0, label: '3' },
  ]"
  :edges=" [
    { source: '1', target: '1', loopDirection: '-90deg' },
    { source: '2', target: '2', loopDirection: '90deg' },
    { source: '3', target: '3', loopDirection: '0deg' },
    { source: '1', target: '2' },
    { source: '3', target: '1' },
    { source: '2', target: '3' },
  ]"/>

<div style="text-align: center; margin-top: -1rem; scale: 1.4;">

$$R = \{\langle 1,1 \rangle, \langle 2,2 \rangle, \langle 3,3 \rangle, \langle 1,2 \rangle, \langle 3,1 \rangle, \langle 2,3 \rangle\}$$

רפלקסיבי על הקבוצה $\{1,2,3\}$.
</div>
</div>



<div class="absolute top-1.3/3 left-5/9" style="scale:.7;">
<GraphCytoscape 
  :nodes=" [
    { id: '1', x: 100, y: 100, label: '1' },
    { id: '2', x: 300, y: 100, label: '2' },
    { id: '3', x: 200, y: 0, label: '3' },
  ]"
  :edges=" [
    { source: '1', target: '1', loopDirection: '-90deg' },
    { source: '2', target: '2', loopDirection: '90deg' },
    { source: '3', target: '1' },
    { source: '3', target: '2' },
  ]"/>

<div style="text-align: center; margin-top: -1rem; scale: 1.4;">

$$R = \{\langle 1,1 \rangle, \langle 2,2 \rangle, \langle 3,1 \rangle, \langle 3,2 \rangle\}$$
 לא רפלקסיבי על הקבוצה $\{1,2,3\}$.
</div>
</div>



---

# סימטריות 

- **הגדרה:** יחס $R$ על קבוצה $A$ נקרא סימטרי אם לכל $x,y \in A$, אם $x \, R \, y$ אז $y \, R \, x$.

-  הציור של יחס סימטרי ניכר בכך שאין כיוונים חד-סטריים בין אברי $A$.

<div class="absolute top-1/3 left-1/9 w-90 h-90" style="scale: .7;">
<GraphCytoscape 
  :nodes=" [
    { id: '1', x: 100, y: 100, label: '1' },
    { id: '2', x: 300, y: 100, label: '2' },
    { id: '3', x: 200, y: 0, label: '3' },  
  ]"
  :edges=" [ 
    { source: '1', target: '2' },
    { source: '2', target: '1' },
    { source: '2', target: '3' },
    { source: '3', target: '2' },
  ]"/>

<div style="text-align: center; margin-top: -1rem; scale: 1.4;">

$$R = \{\langle 1,2 \rangle, \langle 2,1 \rangle, \langle 2,3 \rangle, \langle 3,2 \rangle\}$$
סימטרי
</div>
</div>  



<div class="absolute top-1/3 left-5/9 w-90 h-90" style="scale:.7;">
  <GraphCytoscape 
    :nodes=" [
      { id: '1', x: 100, y: 100, label: '1' },
      { id: '2', x: 300, y: 100, label: '2' },
      { id: '3', x: 200, y: 0, label: '3' },
    ]"
    :edges=" [
      { source: '1', target: '2' },
      { source: '2', target: '1' },
      { source: '3', target: '1' },
    ]"
  />
  <div style="text-align: center; margin-top: -1rem; scale: 1.4;">
    
  $$R = \{\langle 1,2 \rangle, \langle 2,1 \rangle, \langle 3,1 \rangle\}$$
  לא סימטרי
  </div>
</div>


--- 

# אנטי-סימטריות

- **הגדרה:** יחס $R$ על קבוצה $A$ נקרא אנטי-סימטרי אם לכל $x,y\in A$,
  אם $x\,R\,y$ ו־$y\,R\,x$ אז $x=y$.

- ניסוח שקול: לכל $x,y\in A$, אם $x\,R\,y$ ו־$x\neq y$ אז $\neg\,(y\,R\,x)$.

- דוגמאות קצרות:
  
  - יחס $\le$ על $\mathbb{N}$ אנטי-סימטרי.
   
  - יחס השוויון $=$ אנטי-סימטרי וגם רפלקסיבי.
  
  - יחס "שונה" (i.e. $x\neq y$) <span style="color:red">אינו</span> אנטי-סימטרי, כי אם $x\neq y$ אז גם $y\neq x$ ולכן יש מקרים של $x\neq y$ עם קשר דו-כיווני.



<div class="absolute top-1.5/3 left-1/9" style="scale: .5;">
<GraphCytoscape
  :nodes=" [
    { id: '1', x: 100, y: 100, label: '1' },
    { id: '2', x: 300, y: 100, label: '2' },
    { id: '3', x: 200, y: 0, label: '3' }
  ]"
  :edges=" [
    { source: '1', target: '1', loopDirection: '-90deg' },
    { source: '2', target: '2', loopDirection: '90deg' },
    { source: '1', target: '2' },
    { source: '2', target: '3' }
  ]"/>
<div style="text-align: center; margin-top: 1rem; scale: 2;">
  
  $$R = \{\langle1,1\rangle,\langle2,2\rangle,\langle1,2\rangle,\langle2,3\rangle\}$$
  
  יחס אנטי-סימטרי
</div>
</div>

<div class="absolute top-1.5/3 left-5/9" style="scale:.5;">
<GraphCytoscape
  :nodes=" [
    { id: '1', x: 100, y: 100, label: '1' },
    { id: '2', x: 300, y: 100, label: '2' },
    { id: '3', x: 200, y: 0, label: '3' }
  ]"
  :edges=" [
    { source: '1', target: '3' },
    { source: '1', target: '2' },
    { source: '2', target: '1' },
    { source: '2', target: '3' },
    { source: '2', target: '2', loopDirection: '90deg' },
    { source: '3', target: '2' }
  ]"/>
<div style="text-align: center; margin-top: 1rem; scale: 2;">

  $$S = \{\langle1,2\rangle,\langle2,1\rangle,\langle1,3\rangle,\langle2,3\rangle,\langle2,2\rangle,\langle3,2\rangle\}$$
  <span style="color:red">אינו</span> אנטי-סימטרי (קיימים זוגות דו-כיווניים)
</div>
</div>

---

# טרנזיטיביות

- **הגדרה:** יחס $R$ על קבוצה $A$ נקרא טרנזיטיבי אם לכל $x,y,z\in A$, אם $x\,R\,y$ ו־$y\,R\,z$ אז $x\,R\,z$.

- דוגמאות קצרות:

  - יחס $\le$ על $\mathbb{N}$ הוא טרנזיטיבי.

  - יחס השוויון $=$ הוא טרנזיטיבי.

  - יחס "הורה של" אינו טרנזיטיבי (אם $a$ הורה של $b$ ו-$b$ הורה של $c$ זה לא אומר ש-$a$ הורה של $c$).


<div class="absolute top-1.4/3 left-1/9" style="scale:.5;">
<GraphCytoscape
  :nodes="[
    { id: '1', x: 100, y: 100, label: '1' },
    { id: '2', x: 300, y: 100, label: '2' },
    { id: '3', x: 200, y: 0, label: '3' }
  ]"
  :edges="[
    { source: '1', target: '2' },
    { source: '2', target: '3' },
    { source: '1', target: '3' }
  ]"/>
<div style="text-align: center; margin-top: 2rem; scale: 1.8;">

  $$R = \{\langle 1,2 \rangle,\langle 2,3 \rangle,\langle 1,3 \rangle\}$$
  יחס טרנזיטיבי
</div>
</div>

<div class="absolute top-1.4/3 left-5/9" style="scale:.5;">
<GraphCytoscape
  :nodes="[
    { id: '1', x: 100, y: 100, label: '1' },
    { id: '2', x: 300, y: 100, label: '2' },
    { id: '3', x: 200, y: 0, label: '3' }
  ]"
  :edges="[
    { source: '1', target: '2' },
    { source: '2', target: '3' }
  ]"/>
<div style="text-align: center; margin-top: 3rem; scale: 1.8;">
  
  $$S = \{\langle 1,2 \rangle,\langle 2,3 \rangle\}$$
  <span style="color:red">אינו</span> טרנזיטיבי (חסר הזוג $\langle 1,3\rangle$)
</div>
</div>


---

# שלמות

- **הגדרה:** יחס $R$ על קבוצה $A$ נקרא שלם אם לכל $a,b\in A$, $a\,R\,b$ או $b\,R\,a$ 
  - אנחנו לא משתמשים באו-מוציא, כך שאפשר שגם $a\,R\,b$ וגם $b\,R\,a$.

<div class="absolute top-1.1/3 left-1/9" style="scale:.7;">
<GraphCytoscape
  :nodes=" [
    { id: '1', x: 100, y: 100, label: '1' },
    { id: '2', x: 300, y: 100, label: '2' },
    { id: '3', x: 200, y: 0, label: '3' }
  ]"
  :edges=" [
    { source: '1', target: '2' },
    { source: '2', target: '1' },
    { source: '3', target: '1' },
    { source: '3', target: '2' }
  ]"/>
<div style="text-align: center; margin-top: -1rem; scale: 1.1;">
  
  $$R = \{\langle1,2\rangle,\langle2,1\rangle,\langle3,1\rangle,\langle3,2\rangle\}$$
  יחס שלם
</div>
</div>

<div class="absolute top-1.1/3 left-5/9" style="scale:.7;">
<GraphCytoscape
  :nodes=" [
    { id: '1', x: 100, y: 100, label: '1' },
    { id: '2', x: 300, y: 100, label: '2' },
    { id: '3', x: 200, y: 0, label: '3' }
  ]"
  :edges=" [
    { source: '1', target: '2' },
    { source: '2', target: '3' }
  ]"/>
<div style="text-align: center; margin-top: -1rem; scale: 1.1;">
  
  $$S = \{\langle1,2\rangle,\langle2,3\rangle\}$$  
  אינו שלם (אין חיבור בין 1 ל-3)
</div>
</div>

---

# שלילת תכונות (מתי יחס אינו מקיים תכונה על $A$)

- $R$ <span style="color:red">אינו</span> רפלקסיבי על $A$ אם קיים $x\in A$ כך ש-$\neg\,(x\,R\,x)$.

- $R$ <span style="color:red">אינו</span> סימטרי על $A$ אם קיימים $x,y\in A$ כך ש-$x\,R\,y$ אך $\neg\,(y\,R\,x)$.

- $R$ <span style="color:red">אינו</span> אנטי-סימטרי על $A$ אם קיימים $x,y\in A$ שונים כך ש-$x\,R\,y$ וגם $y\,R\,x$.

- $R$ <span style="color:red">אינו</span> טרנזיטיבי על $A$ אם קיימים $x,y,z\in A$ כך ש-$x\,R\,y$ ו-$y\,R\,z$ אך $\neg\,(x\,R\,z)$.

- $R$ <span style="color:red">אינו</span> שלם על $A$ אם קיימים $x,y\in A$ כך ש-$\neg\,(x\,R\,y)$ וגם $\neg\,(y\,R\,x)$.

- שימו לב: השלילה של הסימטריות (כלומר "לא סימטרי") אינה זהה לאנטי-סימטריות. יתכנו יחסים שהם גם סימטריים וגם אנטי-סימטריים, וכן יחסים שאינם סימטריים ואינם אנטי-סימטריים.

---
section: דוגמאות 
---

# יחס השוויון על קבוצה לא ריקה

- יחס השוויון $Eq_A = \{\langle a, a \rangle \mid a \in A\}$ על קבוצה לא ריקה $A$ הוא 
 
  - רפלקסיבי <v-click> <span style="color:green">✓</span> </v-click>
 
  - סימטרי <v-click> <span style="color:green">✓</span> </v-click>
 
  - אנטי-סימטרי <v-click> <span style="color:green">✓</span> </v-click>
 
  - טרנזיטיבי <v-click> <span style="color:green">✓</span> </v-click>
 
  - שלם. <v-click> <span style="color:red">✗  -  אם יש לפחות שני איברים ב-$A$</span> </v-click>

---

# היחס $A \times A$ על קבוצה לא ריקה

- רפלקסיבי <v-click> <span style="color:green">✓</span> </v-click>

- סימטרי <v-click> <span style="color:green">✓</span> </v-click>

- אנטי-סימטרי <v-click> <span style="color:red">✗  -  אם יש לפחות שני איברים ב-$A$</span> </v-click>

- טרנזיטיבי <v-click> <span style="color:green">✓</span> </v-click>

- שלם <v-click> <span style="color:green">✓</span> </v-click>



---

# בדיקת תכונות היחס $R = \{\langle x, y \rangle \in \mathbb{N} \times \mathbb{N} \mid x \leq y + 3\}$ על $\mathbb{N}$

- רפלקסיבי <v-click> <span style="color:green">✓</span> - היחס רפלקסיבי. יהי $x \in \mathbb{N}$. מתקיים $x \leq x + 3$ ולכן $\langle x, x \rangle \in R$. </v-click>

- סימטרי <v-click> <span style="color:red">✗</span> - היחס אינו סימטרי. הזוג $\langle 1,5 \rangle \in R$ ו-$\langle 5,1 \rangle \notin R$ מראה זאת. </v-click>

- אנטי-סימטרי <v-click> <span style="color:red">✗</span> - היחס אינו אנטי-סימטרי. דוגמה נגדית: הזוג $\langle 1,2 \rangle \in R$ שכן $1 \leq 2 + 3$, וגם הזוג $\langle 2,1 \rangle \in R$ מאחר ו-$2 \leq 1 + 3$. </v-click>

- טרנזיטיבי <v-click> <span style="color:red">✗</span> - היחס אינו טרנזיטיבי. דוגמה נגדית: $\langle 5,3 \rangle, \langle 3,1 \rangle \in R$ אבל $\langle 5,1 \rangle \notin R$. (בידקו) </v-click>

- שלם <v-click> <span style="color:green">✓</span> </v-click>
  <v-click>
    
    - נניח בשלילה שקיימים $x, y \in \mathbb{N}$ כך ש-$\langle x, y \rangle, \langle y, x \rangle \notin R$.
    - כדי שיתקיים $\langle x, y \rangle \notin R$ התנאי המגדיר את $R$ צריך שלא להתקיים, כלומר שלילתו אמיתית.
    - כלומר מתקיים $\neg (x \leq y + 3) \equiv x > y + 3$.
    - באותו אופן מכך ש-$\langle y, x \rangle \notin R$ נובע שמתקיים $y > x + 3$.
    - משני אי-שיוויונות אלו נקבל: $y > x + 3 > (y + 3) + 3 = y + 6$.
    - ומכאן (לאחר צמצום $y$ משני האגפים) נקבל $0 > 6$ וזו סתירה.
  </v-click>

---
section:  חיתוך ואיחוד יחסים
---

# חיתוך של יחסים

- כל תת-קבוצה של יחס גם היא יחס.
  
- בפרט, אם $\mathcal{S}$ היא קבוצה לא ריקה של יחסים, אז החיתוך האונרי $\bigcap \mathcal{S}$ הוא גם יחס.
  
- מהגדרת החיתוך האונרי נקבל: לכל $a, b$, $\langle a, b \rangle \in \bigcap \mathcal{S}$ אם ורק אם $\forall R \in \mathcal{S} (\langle a, b \rangle \in R)$.
  
- לכן $\bigcap \mathcal{S} \subseteq R$ לכל $R \in \mathcal{S}$.

<div class="absolute top-2/4 left-1/9" style="scale:.8;">
<GraphCytoscape 
  :nodes=" [
    { id: '1', x: 100, y: 100, label: 'A' },
    { id: '2', x: 300, y: 100, label: 'B' },
    { id: '3', x: 200, y: 250, label: 'C' }
  ]"
  :edges=" [
    { source: '1', target: '2', color: 'red' },
    { source: '2', target: '3', color: 'red' },
    { source: '1', target: '3', color: 'red' }
  ]"/>
<div style="text-align: center; margin-top: -1rem;">

  <span style="color:red"> $R$</span>
</div>
</div>

<div class="absolute top-2/4 left-3/9" style="scale:.8;">
<GraphCytoscape 
  :nodes=" [
    { id: '1', x: 100, y: 100, label: 'A' },
    { id: '2', x: 300, y: 100, label: 'B' },
    { id: '3', x: 200, y: 250, label: 'C' }
  ]"
  :edges=" [
    { source: '1', target: '2', color: 'blue' },
    { source: '2', target: '1', color: 'blue' },
    { source: '3', target: '2', color: 'blue' },
    { source: '1', target: '3', color: 'blue' }
  ]"/>
<div style="text-align: center; margin-top: -1rem;">

  <span style="color:blue"> $B$</span>
</div>
</div>

<div class="absolute top-2/4 left-5/9" style="scale:.8;">
<GraphCytoscape 
  :nodes=" [
    { id: '1', x: 100, y: 100, label: 'A' },
    { id: '2', x: 300, y: 100, label: 'B' },
    { id: '3', x: 200, y: 250, label: 'C' } 
  ]"
  :edges=" [
    { source: '1', target: '2', color: 'purple' },
    { source: '1', target: '3', color: 'purple' }
  ]"/>
<div style="text-align: center; margin-top: -1rem;">

  <span style="color:purple"> $R \cap B$</span>
</div>
</div>

---
layout: two-cols-header
---

# תכונות חיתוך יחסים על קבוצה $A$

-  אם $\mathcal{S}$ קבוצה לא ריקה של יחסים על קבוצה $A$. (כלומר לכל $S \in \mathcal{S}$, $S \subseteq A \times A$ יחס על הקבוצה $A$.)

  - החיתוך האונרי של $\mathcal{S}$ הוא יחס על $A$, כלומר $\bigcap \mathcal{S} \subseteq A \times A$.

::left::

  - **רפלקסיביות**:
    - אם כל $S \in \mathcal{S}$  רפלקסיבי על $A$, גם $\bigcap \mathcal{S}$ רפלקסיבי על $A$.
    - אם $T = \bigcap \mathcal{S}$  רפלקסיבי על $A$, גם כל $S \in \mathcal{S}$  רפלקסיבי על $A$.

  - **שלמות**:
    - אם $T$ יחס שלם על $A$, אז גם כל $S \in \mathcal{S}$ יחס שלם על $A$. 
    - אם יש ב-$\mathcal{S}$ שני יחסים אנטי-סימטרים שונים, אז $\bigcap \mathcal{S}$ אינו שלם.


- **טרנזיטיביות**:
    - אם כל $S \in \mathcal{S}$ יחס טרנזיטיבי, אז גם $\bigcap \mathcal{S}$ טרנזיטיבי.

::right::

- **אנטי-סימטריות**:
  - אם יש $S \in \mathcal{S}$ שהוא אנטי-סימטרי, אז גם $\bigcap \mathcal{S}$ אנטי-סימטרי. 
  - אם יש ב־$\mathcal{S}$ שני יחסים אנטי-סימטריים שונים, אז $\bigcap \mathcal{S}$ אינו שלם.

- **סימטריות**:
  - אם כל $S \in \mathcal{S}$ יחס סימטרי, אז גם $\bigcap \mathcal{S}$ סימטרי.





<style>
.two-cols-header {
  column-gap: 40px; /* Adjust the gap size as needed */
  /* Optional: add some padding for better readability */
  padding: 30px 40px 30px 20px;
}
.two-cols-header li strong {
  color: #2563eb;
}
.two-cols-header h2 {
  margin-top: 3rem;
}
.two-cols-header h2:first-of-type {
  margin-top: 0;
}
</style>

---

# הוכחה לדוגמה: טרנזיטיביות של החיתוך

טענה. תהי $\mathcal{S}\neq\varnothing$ קבוצה של יחסים על $A$ כך שכל $R\in\mathcal{S}$ טרנזיטיבי. נסמן $T=\bigcap\mathcal{S}$. אז $T$ טרנזיטיבי.

הוכחה.
- נניח $a,b,c\in A$ ו־$\langle a,b\rangle,\langle b,c\rangle\in T$.

- לפי הגדרת החיתוך: לכל $R\in\mathcal{S}$ מתקיים $\langle a,b\rangle,\langle b,c\rangle\in R$.
- מאחר שכל $R\in\mathcal{S}$ טרנזיטיבי, נובע שלכל $R\in\mathcal{S}$ גם $\langle a,c\rangle\in R$.
- לכן לפי הגדרת החיתוך $\langle a,c\rangle\in\bigcap\mathcal{S}=T$.
- מסקנה: $T$ טרנזיטיבי. ∎



<div class="absolute top-2.7/5 left-0/11" style="scale:.8;">
<GraphCytoscape 
  :nodes=" [
    { id: 'A', x: 100, y: 100, label: 'a' },
    { id: 'B', x: 300, y: 100, label: 'b' },
    { id: 'C', x: 200, y: 250, label: 'c' }
  ]"
  :edges=" [
    { source: 'A', target: 'B', color: 'red' },
    { source: 'B', target: 'C', color: 'red' },
    { source: 'A', target: 'C', color: 'red' },
    { source: 'C', target: 'C', color: 'red' }
  ]"/>
<div style="text-align: center; margin-top: -2rem;">
  <span style="color:red">

  $$R_1$$
  </span>
</div>
</div>

<div class="absolute top-2.7/5 left-2/11" style="scale:.8;">
<GraphCytoscape 
  :nodes=" [
    { id: 'A', x: 100, y: 100, label: 'a' },
    { id: 'B', x: 300, y: 100, label: 'b' },
    { id: 'C', x: 200, y: 250, label: 'c' }
  ]"
  :edges=" [
    { source: 'A', target: 'B', color: 'blue' },
    { source: 'B', target: 'C', color: 'blue' },
    { source: 'C', target: 'B', color: 'blue' },
    { source: 'A', target: 'C', color: 'blue' },
    { source: 'B', target: 'B', color: 'blue', loopDirection: '90deg' }    
  ]"/>
<div style="text-align: center; margin-top: -2rem;">
  <span style="color:blue">
  
$$R_2$$  
  </span>
</div>
</div>

<div class="absolute top-2.7/5 left-4/11" style="scale:.8;">
<GraphCytoscape 
  :nodes=" [
    { id: 'A', x: 100, y: 100, label: 'a' },
    { id: 'B', x: 300, y: 100, label: 'b' },
    { id: 'C', x: 200, y: 250, label: 'c' }
  ]"
  :edges=" [
    { source: 'A', target: 'B', color: 'purple' },
    { source: 'A', target: 'C', color: 'purple' },
    { source: 'B', target: 'C', color: 'purple' }
  ]"/>
<div style="text-align: center; margin-top: -2rem;">
  <span style="color:purple">
  
$$R_1 \cap R_2$$
  </span>
</div>
</div>



---

# חוסר שלמות של החיתוך כשיש שני אנטי-סימטריים שונים
- הנחה: יש ב־$\mathcal{S}$ שני יחסים אנטי-סימטריים שונים, נסמנם $R$ ו-$S$.

- נניח בדרך השלילה ש־$T=\bigcap\mathcal{S}$ שלם על $A$.
- אז לכל $x\in A$ יש $\langle x,x\rangle\in T$ (ולכן גם ב־$R\cap S$).
- מאחר ש־$R\neq S$ קיים זוג $\langle x,y\rangle$ שבו הם נבדלים; נניח $\langle x,y\rangle\in R$ ו־$\langle x,y\rangle\notin S$.
- אם $x=y$ אז היינו מקבלים $\langle x,x\rangle\notin S$, בסתירה לעיל, לכן $x\neq y$.
- מאנטי-סימטריות של $R$ נובע ש־$\langle y,x\rangle\notin R$ (אחרת נקבל $x=y$).
- לכן ב־$R\cap S$ חסרים גם $\langle x,y\rangle$ וגם $\langle y,x\rangle$.
- מסקנה: $R\cap S$ אינו שלם, ולפיכך $T\subseteq R\cap S$ אינו שלם — סתירה.
- לכן החיתוך אינו שלם.


<div class="absolute top-1/5 left-0/11" style="scale:.5;">
<GraphCytoscape 
  :nodes=" [
    { id: 'u', x: 100, y: 120, label: 'u' },
    { id: 'v', x: 300, y: 120, label: 'v' }
  ]"
  :edges=" [
    { source: 'u', target: 'v', color: 'red', label: '' }
  ]"/>

<div style="text-align: center; margin-top: -4rem; scale: 2;">
<span style="color:red">

$$R$$
</span>
</div>


</div>

<div class="absolute top-2/5 left-0/11" style="scale:.5;">
<GraphCytoscape 
  :nodes=" [
    { id: 'u', x: 100, y: 120, label: 'u' },
    { id: 'v', x: 300, y: 120, label: 'v' }
  ]"
  :edges=" [
    { source: 'v', target: 'u', color: 'blue', label: '' }
  ]"/>


<div style="text-align: center; margin-top: -4rem; scale: 2;">
<span style="color:blue">

$$S$$
</span>
</div>

</div>

<div class="absolute top-3/5 left-0/11" style="scale:.5;">
<GraphCytoscape 
  :nodes=" [
    { id: 'u', x: 100, y: 120, label: 'u' },
    { id: 'v', x: 300, y: 120, label: 'v' }
  ]"
  :edges=" []"/>
<div style="text-align: center; margin-top: -4rem; scale: 2;">
<span style="color:purple">

$$R \cap S$$
</span>
</div>
</div>

---
layout: two-cols-header
---

# סגירות של תכונות תחת איחוד של יחסים


- אם $\mathcal{S}$ היא קבוצה של יחסים על קבוצה $A$, אז האיחוד האונרי $\bigcup\mathcal{S}$ הוא גם יחס על $A$.

::left::

- **איחוד שומר רפלקסיביות**:
  - אם לכל $R\in\mathcal{S}$ וּלכל $x\in A$ מתקיים $\langle x,x\rangle\in R$, 

  - אז לכל $x\in A$  מתקיים גם $\langle x,x\rangle\in\bigcup\mathcal{S}$.
  

- **איחוד שומר סימטריות**:

  - נניח שכל $R\in\mathcal{S}$ סימטרי

  - אם $\langle a,b\rangle\in\bigcup\mathcal{S}$
  - אז קיים $R$ עם $\langle a,b\rangle\in R$; 
  - בזכות הסימטריות של $R$ גם $\langle b,a\rangle\in R$
  - לכן $\langle b,a\rangle\in\bigcup\mathcal{S}$.

::right::

**אנטי-סימטריות לא תמיד נשמרת**:
  - קחו $R=\{\langle u,v\rangle\}$ ו-$S=\{\langle v,u\rangle\}$ באשר $u\neq v$.
  - כל אחד אנטי-סימטרי, אך $R\cup S$ מכיל גם $\langle u,v\rangle$ וגם $\langle v,u\rangle$ עם $u\neq v$, ולכן אינו אנטי-סימטרי.

- **טרנזיטיביות לא תמיד נשמרת**:
  
  - קחו $R=\{\langle a,b\rangle\}$ ו-$S=\{\langle b,c\rangle\}$. 
  
  - כל אחד טרנזיטיבי כי אין זוגות שניתן להרכיב
  - אך $R\cup S$ מכיל $\langle a,b\rangle$ ו־$\langle b,c\rangle$ בלי $\langle a,c\rangle$, לכן אינו טרנזיטיבי.


<div class="absolute top-2/3 right-2.3/10" style="display:flex; flex-direction:row; direction: ltr; gap:1rem; align-items:center; transform: scale(.4);">

  <div>
    <GraphCytoscape 
      :nodes=" [
        { id: 'a', x: 100, y: 100, label: 'a' },
        { id: 'b', x: 300, y: 100, label: 'b' },
        { id: 'c', x: 200, y: 250, label: 'c' }
      ]"
      :edges=" [
        { source: 'a', target: 'b', color: 'red' }
      ]"/>
    <div style="text-align: center; margin-top: -0.5rem; scale: 2;"><span style="color:red">R</span></div>
  </div>

  <div>
    <GraphCytoscape 
      :nodes=" [
        { id: 'a', x: 100, y: 100, label: 'a' },
        { id: 'b', x: 300, y: 100, label: 'b' },
        { id: 'c', x: 200, y: 250, label: 'c' }
      ]"
      :edges=" [
        { source: 'b', target: 'c', color: 'blue' }
      ]"/>
    <div style="text-align: center; margin-top: -0.5rem; scale: 2;"><span style="color:blue">S</span></div>
  </div>

  <div>
    <GraphCytoscape 
      :nodes=" [
        { id: 'a', x: 100, y: 100, label: 'a' },
        { id: 'b', x: 300, y: 100, label: 'b' },
        { id: 'c', x: 200, y: 250, label: 'c' }
      ]"
      :edges=" [
        { source: 'a', target: 'b', color: 'purple' },
        { source: 'b', target: 'c', color: 'purple' }
      ]"/>
    <div style="text-align: center; margin-top: -0.5rem; scale: 2;"><span style="color:purple">R ∪ S</span></div>
  </div>
</div>

---
layout: two-cols-header
---

# סגירות תחת היפוך היחס

- אם $R$ יחס על קבוצה $A$, אז ההופכי שלו $R^{-1} = \{\langle b,a\rangle \mid \langle a,b\rangle \in R\}$ הוא גם יחס על $A$.

<br>

::left::

- **רפלקסיביות**:
    -  אם $R$ רפלקסיבי על $A$ אז $R^{-1}$ רפלקסיבי על $A$.

    - הוכחה: עבור כל $a\in A$, $\langle a,a\rangle\in R \Rightarrow \langle a,a\rangle\in R^{-1}$.

<br>

- **סימטריות**:
  - אם $R$ סימטרי אז $R^{-1}=R$ (ולכן סימטרי).
  
  - הוכחה: אם $\langle a,b\rangle\in R$ אז גם $\langle b,a\rangle\in R$, לכן בהופכי מתקבלת אותה קבוצת זוגות.
  
::right::

- **אנטי-סימטריות**:
  -  אם $R$ אנטי-סימטרי אז גם $R^{-1}$ אנטי-סימטרי.

  - הוכחה: אם $\langle x,y\rangle,\langle y,x\rangle\in R^{-1}$ אז בהיפוך הם ב־$R$, מאנטי-סימטריות של $R$ נובע $x=y$.

<br>

- **טרנזיטיביות**:
  -  אם $R$ טרנזיטיבי אז $R^{-1}$ טרנזיטיבי.

  - הוכחה: אם $\langle a,b\rangle,\langle b,c\rangle\in R^{-1}$ אז בהיפוך $\langle b,a\rangle,\langle c,b\rangle\in R$, מהטרנזיטיביות של $R$ נקבל $\langle c,a\rangle\in R$ ולכן $\langle a,c\rangle\in R^{-1}$.

<style>
.two-cols-header {
  column-gap: 40px; /* Adjust the gap size as needed */
  /* Optional: add some padding for better readability */
  padding: 30px 40px 30px 20px;
}
.two-cols-header li strong {
  color: #2563eb;
}
.two-cols-header h2 {
  margin-top: 3rem;
}
.two-cols-header h2:first-of-type {
  margin-top: 100px;
}
</style>





