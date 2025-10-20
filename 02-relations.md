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


- **יחס השוויון על קבוצה \(A\):**
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


