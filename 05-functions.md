---
theme: frankfurt
infoLine: true
author: "גרא וייס"
title: "פונקציות והעתקות"
htmlAttrs:
  dir: rtl
  lang: heb
mdc: true
download: true
exportFilename: 05-functions.pdf
transition: slide-left
---

# פונקציות: הגדרה ותכונות יסוד

#### הרצאה בקורס: מבוא ללוגיקה ותורת הקבוצות

---

# הגדרת המושג פונקציה

- **הגדרה:**
  יחס $f$ נקרא **פונקציה** אם הוא מקיים את תנאי ה**חד-ערכיות**:
  <div class="formula-box">

    $$\forall x, y_1, y_2 \; (\langle x,y_1 \rangle \in f \land \langle x,y_2 \rangle \in f \Rightarrow y_1 = y_2)$$
  </div>

- כשמדובר בפונקציות, נהוג לכתוב $f(x)=y$ במקום $\langle x,y\rangle \in f$.

- **הגדרה (פונקציה מ-$A$ ל-$B$):**
  שלשה $\langle f, A, B \rangle$ נקראת פונקציה מ-$A$ ל-$B$ (מסומן $f \colon A \to B$) אם:
  1. $f$ היא פונקציה (לפי ההגדרה לעיל).
  2. $\operatorname{dom}(f) = A$ (תנאי ה**מלאות**).
  3. $\operatorname{img}(f) \subseteq B$.

  - **טרמינולוגיה:**
    - $A$ נקרא ה**תחום** (Domain).
    - $B$ נקרא ה**טווח החוקי** (Codomain).
    - $f$ נקראת ה**גרף** או כלל ההתאמה.
    - נכתוב "$f\colon A\to B$ מוגדרת על ידי $f(x)=...$"  במקום לכתוב "$f=\{\langle x,...\rangle \mid x \in A\}$".


<div class="absolute top-1.5/3 left-.3/4 transform -translate-x-1/2 w-80 h-80" style="scale:.5;">
<BipartiteGraph
  :left="['1','2','3']"
  :right="['a','b','c']"
  :edges="[
    ['L1','Ra',''],
    ['L2','Ra',''],
    ['L3','Rb',''],
    ['L3','Rc','']
  ]"
/>

  <div class="text-4xl font-bold text-center">
    לא פונקציה
  </div>
</div>

<div class="absolute top-.5/3 left-.3/4 transform -translate-x-1/2 w-80 h-80" style="scale:.5;">
<BipartiteGraph
  :left="['1','2','3']"
  :right="['a','b','c']"
  :edges="[
    ['L1','Ra',''],
    ['L2','Rb',''],
    ['L3','Ra','']
  ]"
/>

  <div class="text-4xl font-bold text-center">
    פונקציה
  </div>
</div>

---

# תת-קבוצה של פונקציה היא פונקציה

**טענה:**
תהי $f$ פונקציה, ותהי $g \subseteq f$. אזי $g$ היא פונקציה.

**הוכחה:**
- עלינו להראות ש-$g$ מקיימת את תנאי החד-ערכיות.

- יהיו $\langle x, y_1 \rangle, \langle x, y_2 \rangle \in g$.
- מכיוון ש-$g \subseteq f$, נובע ש-$\langle x, y_1 \rangle \in f$ וגם $\langle x, y_2 \rangle \in f$.
- מכיוון ש-$f$ היא פונקציה, היא חד-ערכית, ולכן בהכרח $y_1 = y_2$.
- לכן גם $g$ חד-ערכית, ולכן היא פונקציה.

<br>

**הערה:**
התחום של $g$, המסומן $\operatorname{dom}(g)$, הוא תת-קבוצה של התחום של $f$.


<div class="flex justify-center mt-10">
  <img src="/images/subset_function_caricature.png" class="absolute  top-60 left-20 w-70 transform -translate-y-1/2 rounded shadow-lg border border-gray-200" />
</div>

---

# האם תת־קבוצה של פונקציה מ-$A$ ל-$B$ היא פונקציה מ-$A$ ל-$B$?

**הוכיחו או הפריכו :** אם $f\colon A \to B$ ו-$g \subseteq f$, אז בהכרח $g\colon A \to B$.

<v-click>

- דוגמה נגדית :
  - יהי $A=\{1,2\}$, $B=\{a,b\}$.
  - נגדיר $f=\{\langle 1,a\rangle,\langle 2,b\rangle\}$ - פונקציה $f\colon A\to B$.
  - נגדיר $g=\{\langle 1,a\rangle\}\subseteq f$.
  - אז $g$ אינה פונקציה $A\to B$ כי אינה מוגדרת על $2$ (חוסר מלאות).

<div class="flex gap-8 items-start -mt-15">
  <div class="w-1/2 scale-60">
    <BipartiteGraph
      :left="['1','2']"
      :right="['a','b']"
      :edges="[['L1','Ra',''], ['L2','Rb','']]"
    />
    <div class="text-2xl font-bold text-center mt-2">f: A→B - פונקציה מלאה</div>
  </div>
  <div class="w-1/2 scale-60">
    <BipartiteGraph
      :left="['1','2']"
      :right="['a','b']"
      :edges="[['L1','Ra','']]"
    />
    <div class="text-2xl font-bold text-center mt-2">g⊆f - לא פונקציה A→B (1 מוגדר, 2 לא)</div>
  </div>
</div>

<div class="-mt-4">

- הערה חשובה: אם נסמן $A'=\operatorname{dom}(g)$, אז - **$g\colon A' \to B$ היא פונקציה תקינה.** - הבעיה נובעת רק מהדרישה שהתחום יהיה בדיוק $A$.
</div>

<img src="/images/subset_cats_lowercase.png" class="absolute top-60 left-20 w-70 transform -translate-y-1/2" style="clip-path: inset(35px 0 40px 0); display:block;" />

</v-click>

---

# חיתוך פונקציות הוא פונקציה

**טענה:**
יהיו $f, g$ פונקציות. אזי $f \cap g$ היא פונקציה.


**הוכחה:**
<v-click>

- מתקיים $f \cap g \subseteq f$.

- הוכחנו כבר שכל תת-קבוצה של פונקציה היא פונקציה.
- לכן $f \cap g$ היא פונקציה.


<div class="flex justify-center mt-5">
  <img src="/images/intersection_caricature.png" class="absolute top-100 left-50 w-70 transform -translate-y-1/2" style="clip-path: inset(0px 0 0px 0); display:block;" />
</div>
</v-click>

---

# האם חיתוך פונקציות מ-$A$ ל-$B$ הוא פונקציה מ-$A$ ל-$B$?

**הוכיחו או הפריכו:** אם $f, g \colon A \to B$ פונקציות, אז $f \cap g\colon A \to B$ פונקציה.

<v-click>

- דוגמה נגדית : 
  - יהי $A=\{1,2\}$, $B=\{a,b\}$.
  - נגדיר $f=\{\langle 1,a\rangle,\langle 2,a\rangle\}$ ו-$g=\{\langle 1,a\rangle,\langle 2,b\rangle\}$ - שתיהן פונקציות $A\to B$.
  - אז $f\cap g=\{\langle 1,a\rangle\}$.
  - $f\cap g$ אינה פונקציה $A\to B$ כי אינה מלאה על $A$ (למספר $2$ אין תמונה).

- לעומת זאת:
  - אם נגדיר $A'=\operatorname{dom}(f\cap g)=\{a\in A \mid f(a)=g(a)\}$, אז $f\cap g \colon A' \to B$ היא פונקציה תקינה.


<div class="flex gap-8 items-start -mt-15">
  <div class="w-1/3 scale-60">
    <BipartiteGraph
      :left="['1','2']"
      :right="['a','b']"
      :edges="[['L1','Ra',''], ['L2','Ra','']]"
    />
    <div class="text-2xl font-bold text-center -mt-2">f: A→B</div>
  </div>
  <div class="w-1/3 scale-60">
    <BipartiteGraph
      :left="['1','2']"
      :right="['a','b']"
      :edges="[['L1','Ra',''], ['L2','Rb','']]"
    />
    <div class="text-2xl font-bold text-center -mt-2">g: A→B</div>
  </div>
  <div class="w-1/3 scale-60">
    <BipartiteGraph
      :left="['1','2']"
      :right="['a','b']"
      :edges="[['L1','Ra','']]"
    />
    <div class="text-2xl font-bold text-center -mt-2">f∩g - פונקציה A'→B, לא A→B</div>
  </div>
</div>

<img src="/images/intersection_functions_lowercase_edited.png" class="absolute top-70 left-20 w-70 transform -translate-y-1/2" />

</v-click>

---
layout: two-cols-header
dir: rtl
---

# איחוד שתי פונקציות


<v-click>

**טענה:**
היחס $f \cup g$ הוא פונקציה  אם ורק אם לכל $a \in \operatorname{dom}(f)\cap\operatorname{dom}(g)$ מתקיים $f(a)=g(a)$.

</v-click>

::left::

<v-click>

**(⟸)  אם הערכים מסכימים - האיחוד פונקציה**
  - נניח שלכל $a$ בתחום המשותף מתקיים $f(a)=g(a)$.
  - נבחן $a$ בתחום של $f \cup g$:

    - אם $a$ בתחום של $f$ בלבד - יש זוג יחיד מ־$f$.
  
    - אם $a$ בתחום של $g$ בלבד - יש זוג יחיד מ־$g$.
    - אם $a$ בתחום של שניהם - לפי ההנחה $f(a)=g(a)$.
  - לכן $f \cup g$ חד־ערכית ⇒ פונקציה.
</v-click>

::right::


<v-click>

**(⟹)  אם האיחוד פונקציה - הערכים חייבים להתאים**
- נניח ש־$f \cup g$ פונקציה.

- אם יש $a$ בתחום המשותף עם $f(a)\neq g(a)$:
  - יופיעו ב־$f \cup g$ שני זוגות שונים עם אותו רכיב ראשון $a$:
    - $\langle a,f(a)\rangle$

    - $\langle a,g(a)\rangle$
  - סתירה לחד־ערכיות.
- לכן בהכרח $f(a)=g(a)$ לכל $a$ בתחום המשותף.

</v-click>

---

# פונקציה חח"ע

**הגדרה:** $f \colon A \to B$ חח"ע אם $f(a_1)=f(a_2) \Rightarrow a_1=a_2$.

- דוגמאות לחח"ע:
  - $f=\{\langle 1,a\rangle,\langle 2,b\rangle,\langle 3,c\rangle\}\colon \{1,2,3\}\to\{a,b,c\}$ - ערכים שונים מקבלים תמונות שונות.
  - $f\colon \mathbb{Z}\to\mathbb{Z},\ f(x)=2x$ - אם $2x_1=2x_2$ אז $x_1=x_2$.

- דוגמאות שלא חח"ע:
  - $h=\{\langle 1,a\rangle,\langle 2,a\rangle,\langle 3,b\rangle\}\colon \{1,2,3\}\to\{a,b\}$ לא חח"ע כי $1\neq2$ אבל $h(1)=h(2)=a$.
  - $g\colon \mathbb{Z}\to\mathbb{Z},\ g(x)=x^2$ לא חח"ע כי, למשל, $g(1)=g(-1)=1$.

<div class="flex gap-8 items-start -mt-8">
  <div class="w-1/2 scale-60">
    <BipartiteGraph
      :left="['1','2','3']"
      :right="['a','b','c']"
      :edges="[['L1','Ra',''], ['L2','Rb',''], ['L3','Rc','']]"
    />
    <div class="text-2xl font-bold text-center mt-2">דוגמה חח"ע: תמונות שונות</div>
  </div>
  <div class="w-1/2 scale-60">
    <BipartiteGraph
      :left="['1','2','3']"
      :right="['a','b']"
      :edges="[['L1','Ra',''], ['L2','Ra',''], ['L3','Rb','']]"
    />
    <div class="text-2xl font-bold text-center mt-2">לא חח"ע: 1 ו־2 לתמונה זהה</div>
  </div>
</div>

---
layout: TwoColsHeaderCustom
---

# הפונקציה ההפוכה

**תזכורת:** $f^{-1} = \{\langle b,a \rangle \mid \langle a,b \rangle \in f\}$.

- אם $f\colon A \to B$ פונקציה, היחס $f^{-1}$ מתקבל על ידי היפוך כיוון החצים.
- אך האם היחס ההפוך הוא תמיד פונקציה?

<div class="flex justify-center mt-10">
  <img src="/images/פונקציה הפוכה.png" class="w-60 shadow-lg rounded" />
</div>

---
layout: TwoColsHeaderCustom
---

# מתי היחס ההפוך הוא פונקציה?

**טענה:** $f$ חח"ע אמ"ם $f^{-1}$ פונקציה.

::left::

- ($\Rightarrow$) נניח ש־$f$ חח"ע.
  - יהיו $\langle a,b_1\rangle, \langle a,b_2\rangle \in f^{-1}$.
  - אז $\langle b_1, a\rangle, \langle b_2, a\rangle \in f$.
  - מחד־ערכיות של $f$ נקבל $b_1=b_2$.  

::right::

- ($\Leftarrow$) נניח ש־$f^{-1}$ פונקציה.
  - יהיו $\langle b_1,a\rangle, \langle b_2,a\rangle \in f$.
  - אז $\langle a,b_1\rangle, \langle a,b_2\rangle \in f^{-1}$.
  - העובדה ש־$f^{-1}$ פונקציה מובילה ל $b_1=b_2$.

::after::

- **מסקנה:** אם $f^{-1}$ פונקציה, אז היא גם חח"ע.

  
- תזכורת: $\operatorname{dom}(f^{-1})=\operatorname{img}(f)$ ו-$\operatorname{img}(f^{-1})=\operatorname{dom}(f)$.


---


# פונקציה על


- $f \colon A \to B$ נקראת "**עַל**" אם לכל $b \in B$ יש $a \in A$ עם $f(a)=b$
זה, כמובן, שקול ללהגיד ש  $\operatorname{img}(f) = B$.

- דוגמאות לפונקציות עַל:
  - $f=\{\langle 1,a\rangle,\langle 2,b\rangle,\langle 3,c\rangle\}\colon \{1,2,3\}\to\{a,b,c\}$ - על כי כל ערך ב־$B$ הוא תמונה של ערך ב־$A$.
  - $f\colon \mathbb{Z}\to\mathbb{Z},\ f(x)=x+1$ - על כי לכל $y \in \mathbb{ז}$ קיים $x=y-1$ כך ש־$f(x)=y$.

- דוגמאות שלא עַל:
  - $h=\{\langle 1,a\rangle,\langle 2,a\rangle,\langle 3,b\rangle\}\colon \{1,2,3\}\to\{a,b,c\}$ לא על כי $c$ אינו תמונה של אף ערך ב־$A$.
  - $g\colon \mathbb{Z}\to\mathbb{Z},\ g(x)=x^2$ לא על כי אין $x$ כך ש־$g(x)=-1$.

<div class="flex gap-8 items-start -mt-10">
  <div class="w-1/2 scale-60">
    <BipartiteGraph
      :left="['1','2','3']"
      :right="['a','b','c']"
      :edges="[['L1','Ra',''], ['L2','Rb',''], ['L3','Rc','']]"
    />
    <div class="text-2xl font-bold text-center mt-2">עַל: התמונה שווה ל־B (a,b,c כולם מתקבלים)</div>
  </div>
  <div class="w-1/2 scale-60">
    <BipartiteGraph
      :left="['1','2','3']"
      :right="['a','b','c']"
      :edges="[['L1','Ra',''], ['L2','Ra',''], ['L3','Rb','']]"
    />
    <div class="text-2xl font-bold text-center mt-2">לא עַל: c אינו מתקבל בתור תמונה</div>
  </div>
</div>

<img src="/images/פונקציה על.png" class="absolute top-70 left-10 w-50 transform -translate-y-1/2" />

---

# תרגיל: בדיקת "על"

**תרגיל:**
הוכיחו או הפריכו: הפונקציה $f: \mathbb{Z} \times \mathbb{Z} \to \mathbb{Z}$ המוגדרת ע"י $f(\langle x,y \rangle) = x+y$ היא על.

**פתרון:**
<v-click>

- הטענה **נכונה**.
- עלינו להראות שלכל $z \in \mathbb{Z}$ (בטווח) קיים מקור $\langle x,y \rangle \in \mathbb{Z} \times \mathbb{Z}$ (בתחום).
- יהי $z \in \mathbb{Z}$.
- נבחר $x=z$ ו-$y=0$ (שניהם שלמים, ולכן הזוג בתחום).
- אזי: $f(\langle z,0 \rangle) = z+0 = z$.
- מצאנו מקור ל-$z$, ולכן הפונקציה היא על.

<div class="flex justify-center mt-5">
  <img src="/images/surjective_sum_illustration.png" class="absolute top-60 left-20 w-80 shadow-lg rounded" />
</div>

</v-click>

---


# צמצום פונקציות


- אם $A' \subseteq A$ נגדיר $f|_{A'} = \{\langle a,b \rangle \in f \mid a \in A'\}$.

- **הוכיחו או הפריכו:** לכל $f \colon A \to B$ קיימת $A'\subseteq A$ כך ששתי התכונות הבאות מתקיימות:

  1) $f|_{A'}$ חח"ע

  2) $\operatorname{img}(f|_{A'}) = \operatorname{img}(f)$

<v-click>

- הוכחה:
  - נגדיר יחס שקילות על $A$ כך ש-$a_1 \sim a_2$ אם ורק אם $f(a_1)=f(a_2)$.

  - לפי **אקסיומת הבחירה**, קיימת קבוצה $A' \subseteq A$ שמכילה בדיוק נציג אחד מכל מחלקת שקילות.

  - אכן, $f|_{A'}$ חח"ע כי אם $f(a_1)=f(a_2)$ עם $a_1,a_2 \in A'$ אז $a_1 \sim a_2$ ולכן $a_1=a_2$.
  - בנוסף, כל תמונה של $f$ מתקבלת גם על ידי $f|_{A'}$ כי בחרנו לפחות ערך אחד מכל קבוצה.

<img src="/images/צמצום פונקציה.png" class="absolute top-60 left-20 w-70 transform -translate-y-1/2" />

</v-click>

---
layout: two-cols-header
---

# תמונה וקדם־תמונה


- **תמונה:**  $f[X] = \{f(a) \mid a \in X\}$
  <div class="absolute top-30 left-5 w-60">
    <img src="/images/function_image_concept.png" class="rounded shadow-lg border border-gray-200" />
  </div>

- **קדם־תמונה:**  $f^{-1}[Y] = \{a \in A \mid f(a)\in Y\}.$
  <div class="absolute top-95 left-5 w-60">
    <img src="/images/function_preimage_concept.png" class="rounded shadow-lg border border-gray-200" />
  </div>


::left::

<div class="flex flex-col gap-0">

<br />

<ClaimProof class="v-click">

1. $f[X \cup Y] = f[X] \cup f[Y]$


<ProofContent>

### הוכחה: $f[X \cup Y] = f[X] \cup f[Y]$

**כיוון ראשון ($\subseteq$):**

- יהי $b \in f[X \cup Y]$.
- מהגדרה, קיים $a \in X \cup Y$ כך ש-$f(a)=b$.
- אם $a \in X$, אז $b = f(a) \in f[X]$.
- אם $a \in Y$, אז $b = f(a) \in f[Y]$.
- בשני המקרים, $b \in f[X] \cup f[Y]$.

**כיוון שני ($\supseteq$):**

- יהי $b \in f[X] \cup f[Y]$.
- אם $b \in f[X]$, קיים $a \in X$ עם $f(a)=b$. מכיוון ש-$a \in X \cup Y$, אז $b \in f[X \cup Y]$.
- אם $b \in f[Y]$, קיים $a \in Y$ עם $f(a)=b$. מכיוון ש-$a \in X \cup Y$, אז $b \in f[X \cup Y]$.
- לכן $f[X] \cup f[Y] \subseteq f[X \cup Y]$.

</ProofContent>
</ClaimProof>

<v-click>

✔️ **תמיד נכון**.
</v-click>

<ClaimProof class="v-click">

<br />

2. $f[X \cap Y] = f[X] \cap f[Y]$

<ProofContent>

### הפרכה: $f[X \cap Y] = f[X] \cap f[Y]$

**דוגמה נגדית:**

- נגדיר $f: \{1,2\} \to \{a\}$ כך ש-$f(1)=a$ ו-$f(2)=a$.
- נבחר $X=\{1\}$ ו-$Y=\{2\}$.
- אזי $X \cap Y = \emptyset$, ולכן $f[X \cap Y] = f[\emptyset] = \emptyset$.
- לעומת זאת, $f[X] = \{a\}$ ו-$f[Y] = \{a\}$.
- החיתוך הוא $f[X] \cap f[Y] = \{a\}$.
- קיבלנו $\emptyset \neq \{a\}$, כלומר השוויון לא מתקיים.

**הערה:**
תמיד מתקיים $f[X \cap Y] \subseteq f[X] \cap f[Y]$, אך ההכלה ההפוכה דורשת תנאים נוספים (למשל, ש-$f$ תהיה חח"ע).

</ProofContent>
</ClaimProof>

<v-click>

❌ **לא תמיד נכון**.

</v-click>

<ClaimProof class="v-click">

<br />

3. $f^{-1}[Y \cup Z] = f^{-1}[Y] \cup f^{-1}[Z]$

<ProofContent>

### הוכחה: $f^{-1}[Y \cup Z] = f^{-1}[Y] \cup f^{-1}[Z]$

$$
\begin{aligned}
x \in f^{-1}[Y \cup Z] &\iff f(x) \in Y \cup Z \\
&\iff f(x) \in Y \lor f(x) \in Z \\
&\iff x \in f^{-1}[Y] \lor x \in f^{-1}[Z] \\
&\iff x \in f^{-1}[Y] \cup f^{-1}[Z]
\end{aligned}
$$

</ProofContent>
</ClaimProof>


<v-click>

✔️ **תמיד נכון**.
</v-click>

</div>

::right::

<div class="flex flex-col gap-0">

<br />

<ClaimProof class="v-click">


4. $f^{-1}[Y \cap Z] = f^{-1}[Y] \cap f^{-1}[Z]$
<ProofContent>

### הוכחה: $f^{-1}[Y \cap Z] = f^{-1}[Y] \cap f^{-1}[Z]$

$$
\begin{aligned}
x \in f^{-1}[Y \cap Z] &\iff f(x) \in Y \cap Z \\
&\iff f(x) \in Y \land f(x) \in Z \\
&\iff x \in f^{-1}[Y] \land x \in f^{-1}[Z] \\
&\iff x \in f^{-1}[Y] \cap f^{-1}[Z]
\end{aligned}
$$

</ProofContent>
</ClaimProof>

<v-click>

✔️ **תמיד נכון**.
</v-click>

<br />


<ClaimProof class="v-click">

5. $f[f^{-1}[Y]] = Y$

<ProofContent>

### הפרכה: $f[f^{-1}[Y]] = Y$

**דוגמה נגדית:**

- נגדיר $f: \{1\} \to \{a,b\}$ כך ש-$f(1)=a$.
- נבחר $Y=\{a,b\}$.
- הקדם־תמונה של $Y$ היא $f^{-1}[Y] = \{1\}$ (כי רק $a$ מתקבל מ-$1$, ו-$b$ לא מתקבל).
- נפעיל את $f$ על התוצאה: $f[\{1\}] = \{a\}$.
- קיבלנו $\{a\} \neq \{a,b\}$, כלומר השוויון לא מתקיים.

**הערה:**
תמיד מתקיים $f[f^{-1}[Y]] \subseteq Y$.
שוויון מתקיים אם $Y \subseteq \operatorname{img}(f)$ (כלומר, אם לכל איבר ב-$Y$ יש מקור) או אם הפונקציה היא **על**.

</ProofContent>
</ClaimProof>

<v-click>

❌ **לא תמיד נכון**.  
</v-click>

<br />


<ClaimProof class="v-click">

6. $f^{-1}[f[X]] = X$

<ProofContent>

### הפרכה: $f^{-1}[f[X]] = X$

**דוגמה נגדית:**

- נגדיר $f: \mathbb{R} \to \mathbb{R}$ ע"י $f(x)=x^2$.
- נבחר $X=\{2\}$.
- תמונת $X$ היא $f[X] = \{4\}$.
- הקדם־תמונה של $\{4\}$ היא $f^{-1}[\{4\}] = \{-2, 2\}$.
- קיבלנו $\{-2, 2\} \neq \{2\}$, כלומר השוויון לא מתקיים.

**הערה:**
תמיד מתקיים $X \subseteq f^{-1}[f[X]]$.
שוויון מתקיים אם $f$ היא **חח"ע**.

</ProofContent>
</ClaimProof>

<v-click>

❌ **לא תמיד נכון**.  
</v-click>

</div>


---
layout: two-cols-header
---

# הרכבת פונקציות

- אם $f\colon A\to B$ ו-$g\colon B\to C$:

  - נגדיר $g\circ f = \{\langle a,c \rangle \mid \exists b(\langle a,b \rangle \in f \wedge \langle b,c \rangle \in g)\}$.
  - משתמשים בהרכבת פונקציות רק אם **תמונת $f$ מוכלת בתחום של $g$**.

<div class="absolute top-3 left-10 w-60">
  <img src="/images/function_composition_hebrew.png" class="rounded shadow-lg border border-gray-200" />
</div>

<br>
<br>

::left::


<ClaimProof class="v-click">

1. $g\circ f$ היא פונקציה מ-$A$ ל-$C$.

<ProofContent>

### הוכחה: הרכבת פונקציות היא פונקציה

**קיום (מלאות):**
- יהי $a \in A$.
- מכיוון ש-$f$ מלאה על $A$, קיים $b \in B$ כך ש-$\langle a,b \rangle \in f$.
- מכיוון ש-$g$ מלאה על $B$, קיים $c \in C$ כך ש-$\langle b,c \rangle \in g$.
- לפי הגדרת ההרכבה, קיים $b$ כך ש-$\langle a,b \rangle \in f \land \langle b,c \rangle \in g$, לכן $\langle a,c \rangle \in g \circ f$.

**יחידות (חד-ערכיות):**
- נניח $\langle a,c_1 \rangle \in g \circ f$ וגם $\langle a,c_2 \rangle \in g \circ f$.
- מהגדרה, קיימים $b_1, b_2 \in B$ כך ש:
  - $\langle a,b_1 \rangle \in f$ וגם $\langle b_1, c_1 \rangle \in g$.
  - $\langle a,b_2 \rangle \in f$ וגם $\langle b_2, c_2 \rangle \in g$.
- מחד-ערכיות $f$: כיוון ש-$\langle a,b_1 \rangle, \langle a,b_2 \rangle \in f$, נובע $b_1 = b_2$. נסמן $b$.
- מחד-ערכיות $g$: כיוון ש-$\langle b,c_1 \rangle, \langle b,c_2 \rangle \in g$, נובע $c_1 = c_2$.
- לכן $g \circ f$ חד-ערכית.

</ProofContent>
</ClaimProof>

<v-click> ✔️ נכון </v-click>

<ClaimProof class="v-click">

<br>

2. אם $f,g$ חח"ע $\Leftarrow$ $g\circ f$ חח"ע.

<ProofContent>

### הוכחה: הרכבת חח"ע היא חח"ע

- נניח $(g \circ f)(x_1) = (g \circ f)(x_2)$.
- לפי הגדרה: $g(f(x_1)) = g(f(x_2))$.
- כיוון ש-$g$ חח"ע, נובע ש-$f(x_1) = f(x_2)$.
- כיוון ש-$f$ חח"ע, נובע ש-$x_1 = x_2$.
- לכן $g \circ f$ חח"ע.

</ProofContent>
</ClaimProof>

<v-click> ✔️ נכון </v-click>

<ClaimProof class="v-click">

<br>

3. אם $f,g$ על $\Leftarrow$ $g\circ f$ על.

<ProofContent>

### הוכחה: הרכבת על היא על

- יהי $c \in C$.
- כיוון ש-$g$ על $C$, קיים $b \in B$ כך ש-$g(b)=c$.
- כיוון ש-$f$ על $B$, עבור $b$ זה קיים $a \in A$ כך ש-$f(a)=b$.
- לכן: $(g \circ f)(a) = g(f(a)) = g(b) = c$.
- מצאנו מקור ל-$c$, ולכן ההרכבה היא על.

</ProofContent>
</ClaimProof>

<v-click> ✔️ נכון </v-click>


::right::

<ClaimProof class="v-click">

4. אם $g\circ f$ חח"ע $\Leftarrow$ $g$ חח"ע

<ProofContent>

### הפרכה

**דוגמה נגדית:**
- $f: \{1\} \to \{a,b\}$ המוגדרת $f(1)=a$.
- $g: \{a,b\} \to \{x\}$ המוגדרת $g(a)=x, g(b)=x$.
- ההרכבה $g \circ f: \{1\} \to \{x\}$ היא $1 \mapsto x$.
- ההרכבה היא חח"ע (כי יש לה רק איבר אחד בתחום).
- אבל $g$ אינה חח"ע, כי $g(a)=g(b)=x$.

</ProofContent>
</ClaimProof>

<v-click> ❌ לא נכון </v-click>

<br>

<ClaimProof class="v-click">

<br>

5. אם $g\circ f$ על $\Leftarrow$ $g$ על

<ProofContent>

### הוכחה

- יהי $c \in C$.
- נתון ש-$g \circ f$ על $C$.
- לכן קיים $a \in A$ כך ש-$(g \circ f)(a) = c$.
- כלומר $g(f(a)) = c$.
- נסמן $b = f(a)$. בבירור $b \in B$.
- קיבלנו שקיים $b \in B$ כך ש-$g(b) = c$.
- לכן $g$ היא על.

</ProofContent>
</ClaimProof>

<v-click> ✔️ נכון </v-click>

<br>
<br>

<ClaimProof class="v-click">

6. אם $g\circ f$ על $\Leftarrow$ $f$ על

<ProofContent>

### הפרכה

**דוגמה נגדית:**
- $f: \{1\} \to \{a,b\}$ המוגדרת $f(1)=a$.
- $g: \{a,b\} \to \{x\}$ המוגדרת $g(a)=x, g(b)=x$.
- ההרכבה $g \circ f: \{1\} \to \{x\}$ היא על $\{x\}$.
- אבל $f$ אינה על $\{a,b\}$ (כי $b$ לא נתקבל).

</ProofContent>
</ClaimProof>

<v-click> ❌ לא נכון </v-click>

<br>
<br>

<ClaimProof class="v-click">

7. אם $g\circ f$ חח"ע $\Leftarrow$ $f$ חח"ע

<ProofContent>

### הוכחה

- נניח ש-$f(x_1) = f(x_2)$.
- נפעיל את $g$ על שני האגפים: $g(f(x_1)) = g(f(x_2))$.
- כלומר $(g \circ f)(x_1) = (g \circ f)(x_2)$.
- נתון שההרכבה $g \circ f$ היא חח"ע.
- לכן נובע ש-$x_1 = x_2$.
- הוכחנו: $f(x_1)=f(x_2) \implies x_1=x_2$.
- לכן $f$ חח"ע.

</ProofContent>
</ClaimProof>

<v-click> ✔️ נכון </v-click>


---

# דוגמה נגדית: כש-$f$ לא חח"ע

נראה דוגמה שבה $f^{-1}[f[X]] \neq X$.

- נגדיר $f: \mathbb{R} \to \mathbb{R}$ ע"י $f(x) = x^2$.
- נבחר $X = \{2\}$.

<v-click>

1. נחשב את התמונה של $X$:
   $$f[X] = \{f(2)\} = \{4\}$$

2. נחשב את הקדם־תמונה של התוצאה:
   $$f^{-1}[\{4\}] = \{x \in \mathbb{R} \mid x^2 = 4\} = \{-2, 2\}$$

3. קיבלנו:
   $$f^{-1}[f[X]] = \{-2, 2\} \neq \{2\} = X$$

</v-click>

<v-click>

**מסקנה:** אם $f$ לא חח"ע, הפעולה $f^{-1} \circ f$ עשויה "להרחיב" את הקבוצה המקורית.

</v-click>

---

# יחסים מעל מרחב מנה

תהי $A$ קבוצה ו-$E$ יחס שקילות על $A$.
נגדיר יחס $R$ על $A/E$ (קבוצת המנה) בעזרת נציגים: $[a] R [b] \iff a S b$.

**הגדרה:** היחס $R$ **מוגדר היטב** אם ערך האמת שלו אינו תלוי בנציגים שנבחרו.
כלומר:
$$a_1 E a_2 \land b_1 E b_2 \implies (a_1 S b_1 \iff a_2 S b_2)$$

**דוגמאות:**
1. ב-$\mathbb{Z}/n\mathbb{Z}$, היחס $[a] < [b]$ **אינו** מוגדר היטב.
   - ב-$\mathbb{Z}/3\mathbb{Z}$: $[1]=[4]$ ו-$[2]=[2]$.
   - $1 < 2$ (אמת) אבל $4 < 2$ (שקר).

2. ב-$\mathbb{Q}$ (זוגות סדורים), שוויון שברים $\frac{a}{b} = \frac{c}{d}$ מוגדר היטב.


---

# פונקציות מעל מרחב מנה

תהי $g: A/E \to B$ פונקציה המוגדרת ע"י נציגים: $g([a]) = f(a)$.

**הגדרה:** הפונקציה $g$ **מוגדרת היטב** אם הערך שלה אינו תלוי בנציג.
כלומר:
$$a_1 E a_2 \implies f(a_1) = f(a_2)$$

**דוגמה לפונקציה שאינה מוגדרת היטב:**
- הגדרנו את המספרים הראציונלים כזוגות סדורים.
- עם יחס השקילות: $\frac{a}{b} \sim \frac{c}{d} \iff ad = bc$.
- נגדיר את הפונקציה $g: \mathbb{Q} \to \mathbb{Z}$ ע"י $g(\frac{a}{b}) = a$.
- נבחר שני ייצוגים לאותו שבר: $\frac{1}{2} = \frac{2}{4}$.
- חישוב ראשון: $g(\frac{1}{2}) = 1$.
- חישוב שני: $g(\frac{2}{4}) = 2$.
- קיבלנו $g(\frac{1}{2}) \neq g(\frac{2}{4})$, ולכן $g$ אינה מוגדרת היטב.


---

# פונקציות בינאריות מעל מרחב המנה


- **הגדרה:** תהי $F\colon A \times A \to A$ ו-$E$ יחס שקילות על $A$. <br> נגיד ש-$F$ **מוגדרת היטב על $A/E$** אם לכל $a,a',b,b' \in A$:
    $$a E a' \land b E b' \implies F(a, b) E F(a', b')$$

- **משמעות:** החלפת נציגים לא משנה את מחלקת השקילות של התוצאה.
- **הפונקציה המושרית:** ניתן להגדיר $\tilde{F}: A/E \times A/E \to A/E$ ע"י:
    $$\tilde{F}([a], [b]) = [F(a, b)]$$

- **דוגמה:** ב-$\mathbb{Z}/n\mathbb{Z}$, פעולת החיבור $F(x,y) = x+y$ מוגדרת היטב.
  - נניח $a \equiv a' \pmod n$ ו-$b \equiv b' \pmod n$.
  - אז $(a+b) - (a'+b') = (a-a') + (b-b')$.
  - מכיוון ש-$n$ מחלק את ההפרשים, $n$ מחלק גם את הסכום, ולכן $a+b \equiv a'+b' \pmod n$.
  - לכן הגדרת חיבור מחלקות $[a]+[b] = [a+b]$ היא תקינה.

<div class="flex justify-center -mt-100 -ml-200">
  <img src="/images/well_defined_binary_ops_hebrew.png" class="h-60 rounded shadow-lg border border-gray-200" />
</div>


---

# מהם האיברים של $\mathbb{Z}_3$?

נתבונן בקבוצת המספרים השלמים $\mathbb{Z} = \{\dots, -2, -1, 0, 1, 2, \dots\}$ וביחס השקילות $\equiv \pmod 3$.
כלומר, $a \equiv b \pmod 3$ אם ורק אם $a-b$ מתחלק ב-3 (ראינו בתרגיל קודם שזהו יחס שקילות).

- $\mathbb{Z}_3$ מוגדרת כמרחב המנה $\mathbb{Z}/\equiv_3$.
- לכן $\mathbb{Z}_3$ מורכבת מ-3 מחלקות שקילות:
  $[0], [1], [2]$

<br>

- הפעולות $+$ ו-$\cdot$ מתייחסות לחיבור וכפל רגיל של שלמים.
- אנו יודעים שהן מקיימות את התכונות הרגילות (חילוף, קיבוץ, פילוג).



<v-click>

  - **קסם לחנוכה:** איך יודעים אם המספר $12,345,678$ מתחלק ב-3 בלי לבצע חילוק ארוך?
    - **פתרון בעזרת $\mathbb{Z}_3$:**
      - נשים לב ש-$10 \equiv 1 \pmod 3$, ולכן לכל חזקה: $10^k \equiv 1^k \equiv 1 \pmod 3$.
      - נכתוב את המספר לפי הפיתוח העשרוני שלו: $n = d_k \cdot 10^k + \dots + d_1 \cdot 10 + d_0$.
      - נעבור ל-$\mathbb{Z}_3$:
        $[n] = [d_k] + \dots + [d_1] + [d_0] = [d_k + \dots + d_0]$
      - **מסקנה:** שארית החלוקה ב-3 שווה לשארית סכום הספרות. המספר מתחלק ב-3 אמ"ם סכום ספרותיו מתחלק ב-3.

    <img src="/images/hanukkiah_illustration.png" class="absolute bottom-25 left-10 w-50 rounded shadow-lg border border-gray-200" />
 

</v-click>

---



# כפל מוגדר היטב ב-$\mathbb{Z}_3$

**טענה:** הפעולה $\cdot$ מוגדרת היטב על $\mathbb{Z}_3$.

**הוכחה:**
עלינו להראות: אם $a' E a$ ו-$b' E b$, אזי $(a'b') E (ab)$.

1. $a \equiv a' \pmod 3 \implies a' - a = 3r$.
2. $b \equiv b' \pmod 3 \implies b' - b = 3s$.

נחשב את ההפרש (בטריק של הוספה והחסרה):
$$
\begin{aligned}
a'b' - ab &= a'b' - ab' + ab' - ab \\
&= (a' - a)b' + a(b' - b) \\
&= (3r)b' + a(3s) \\
&= 3(rb' + as)
\end{aligned}
$$
מכיוון שההפרש מתחלק ב-3, מתקיים $ab \equiv a'b' \pmod 3$.

---

# בניית המספרים הרציונליים $\mathbb{Q}$

דוגמה חשובה נוספת למרחב מנה היא המספרים הרציונליים.

1. **הקבוצה:** נתבונן באוסף הזוגות $S = \mathbb{Z} \times (\mathbb{Z} \setminus \{0\})$.
2. **יחס השקילות:** נגדיר $(a,b) \sim (c,d)$ אם ורק אם $ad = bc$.
   - יחס זה מזהה שברים שווים, למשל $(1,2) \sim (2,4)$ כי $1 \cdot 4 = 2 \cdot 2$.

3. **הגדרת $\mathbb{Q}$:** המרחב הרציונלי הוא אוסף מחלקות השקילות: $\mathbb{Q} = S/\sim$.
   - סימון מקובל: $\frac{a}{b} = [(a,b)]$.

**הגדרת הפעולות:**
על מנת לחבר ולהכפיל שברים, אנו מגדירים פונקציות על הנציגים:
- **חיבור:** $\frac{a}{b} + \frac{c}{d} = \frac{ad+bc}{bd}$

- **כפל:** $\frac{a}{b} \cdot \frac{c}{d} = \frac{ac}{bd}$


> שימו לב!
> הבחירה בהגדרות אלו אינה שרירותית; עלינו לוודא שאלו פעולות **מוגדרות היטב** (שהתוצאה אינה תלויה בנציג).

---

# תרגול: מוגדר היטב?

- **נכון / לא נכון:**

  1. $f: \mathbb{Q} \to \mathbb{Z}$ המוגדרת ע"י $f(\frac{a}{b}) = a+b$ מוגדרת היטב.
    <v-click> 
    
    ❌ **לא נכון** ($\frac{1}{2} = \frac{2}{4}$ אבל $1+2 \neq 2+4$)
    </v-click>

  <br />

  2. $f: \mathbb{Z}/5\mathbb{Z} \to \mathbb{Z}/5\mathbb{Z}$ המוגדרת ע"י $f([x]) = [x^2]$ מוגדרת היטב.
    <v-click>
    
    ✔️ **נכון** (אם $x \equiv y \pmod 5$ אז $x^2 \equiv y^2 \pmod 5$) 
    </v-click>

  <br />

  3. היחס על $\mathbb{Z}/4\mathbb{Z}$ המוגדר ע"י: $[a] R [b] \iff a+b$ זוגי.
    <v-click>
    
    ✔️ **נכון** (זוגיות הסכום נשמרת במודולו 4) 
    </v-click>
