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

- **הגדרה (פונקציה מ-$A$ ל-$B$):**
  שלשה $\langle f, A, B \rangle$ נקראת פונקציה מ-$A$ ל-$B$ (מסומן $f \colon A \to B$) אם:
  1. $f$ היא פונקציה (לפי ההגדרה לעיל).
  2. $\operatorname{dom}(f) = A$ (תנאי ה**מלאות**).
  3. $\operatorname{img}(f) \subseteq B$.

- **טרמינולוגיה:**
  - $A$ נקרא ה**תחום** (Domain).
  - $B$ נקרא ה**טווח החוקי** (Codomain).
  - $f$ נקראת ה**גרף** או כלל ההתאמה.

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

</v-click>

<div class="flex justify-center mt-5">
  <img src="/images/intersection_caricature.png" class="absolute top-100 left-50 w-90 transform -translate-y-1/2" style="clip-path: inset(0px 0 0px 0); display:block;" />
</div>

---

# האם חיתוך פונקציות מ-$A$ ל-$B$ הוא פונקציה מ-$A$ ל-$B$?

**הוכיחו או הפריכו:** אם $F, G \colon A \to B$ פונקציות, אז $F \cap G\colon A \to B$ פונקציה.

<v-click>

- דוגמה נגדית :
  - יהי $A=\{1,2\}$, $B=\{a,b\}$.
  - נגדיר $F=\{\langle 1,a\rangle,\langle 2,a\rangle\}$ ו-$G=\{\langle 1,a\rangle,\langle 2,b\rangle\}$ - שתיהן פונקציות $A\to B$.
  - אז $F\cap G=\{\langle 1,a\rangle\}$.
  - $F\cap G$ אינה פונקציה $A\to B$ כי אינה מלאה על $A$ (למספר $2$ אין תמונה).

- לעומת זאת:
  - אם נגדיר $A'=\operatorname{dom}(F\cap G)=\{a\in A:\ F(a)=G(a)\}$, אז $F\cap G \colon A' \to B$ היא פונקציה תקינה.


<div class="flex gap-8 items-start -mt-15">
  <div class="w-1/3 scale-60">
    <BipartiteGraph
      :left="['1','2']"
      :right="['a','b']"
      :edges="[['L1','Ra',''], ['L2','Ra','']]"
    />
    <div class="text-2xl font-bold text-center -mt-2">F: A→B</div>
  </div>
  <div class="w-1/3 scale-60">
    <BipartiteGraph
      :left="['1','2']"
      :right="['a','b']"
      :edges="[['L1','Ra',''], ['L2','Rb','']]"
    />
    <div class="text-2xl font-bold text-center -mt-2">G: A→B</div>
  </div>
  <div class="w-1/3 scale-60">
    <BipartiteGraph
      :left="['1','2']"
      :right="['a','b']"
      :edges="[['L1','Ra','']]"
    />
    <div class="text-2xl font-bold text-center -mt-2">F∩G - פונקציה A'→B, לא A→B</div>
  </div>
</div>

<img src="/images/חיתוך פונקציות.png" class="absolute top-65 left-20 w-70 transform -translate-y-1/2" />

</v-click>

---
layout: two-cols-header
dir: rtl
---

# איחוד שתי פונקציות

**טענה:**
היחס $F \cup G$ הוא פונקציה  אמ"ם לכל $a \in \operatorname{dom}(F)\cap\operatorname{dom}(G)$ מתקיים $F(a)=G(a)$.

::left::

**(⟸)  אם הערכים מסכימים - האיחוד פונקציה**
  - נניח שלכל $a$ בתחום המשותף מתקיים $F(a)=G(a)$.
  - נבחן $a$ בתחום של $F \cup G$:

    - אם $a$ בתחום של $F$ בלבד - יש זוג יחיד מ־$F$.
  
    - אם $a$ בתחום של $G$ בלבד - יש זוג יחיד מ־$G$.
    - אם $a$ בתחום של שניהם - לפי ההנחה $F(a)=G(a)$.
  - לכן $F \cup G$ חד־ערכית ⇒ פונקציה.

::right::

**(⟹)  אם האיחוד פונקציה - הערכים חייבים להתאים**
- נניח ש־$F \cup G$ פונקציה.

- אם יש $a$ בתחום המשותף עם $F(a)\neq G(a)$:
  - יופיעו ב־$F \cup G$ שני זוגות שונים עם אותו רכיב ראשון $a$:
    - $\langle a,F(a)\rangle$

    - $\langle a,G(a)\rangle$
  - סתירה לחד־ערכיות.
- לכן בהכרח $F(a)=G(a)$ לכל $a$ בתחום המשותף.


---

# פונקציה חח"ע

**הגדרה:** $F \colon A \to B$ חח"ע אם $F(a_1)=F(a_2) \Rightarrow a_1=a_2$.

- דוגמאות לחח"ע:
  - $F=\{\langle 1,a\rangle,\langle 2,b\rangle,\langle 3,c\rangle\}\colon \{1,2,3\}\to\{a,b,c\}$ - ערכים שונים מקבלים תמונות שונות.
  - $f\colon \mathbb{Z}\to\mathbb{Z},\ f(x)=2x$ - אם $2x_1=2x_2$ אז $x_1=x_2$.

- דוגמאות שלא חח"ע:
  - $H=\{\langle 1,a\rangle,\langle 2,a\rangle,\langle 3,b\rangle\}\colon \{1,2,3\}\to\{a,b\}$ לא חח"ע כי $1\neq2$ אבל $H(1)=H(2)=a$.
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

**תזכורת:** $F^{-1} = \{\langle b,a \rangle \colon \langle a,b \rangle \in F\}$.

**טענה:** $F$ חח"ע אמ"ם $F^{-1}$ פונקציה.

::left::

- (⇒) נניח ש־$F$ חח"ע.
  - יהי $b \in \operatorname{Im}(F)$.
  - קיים $a$ כך ש־$\langle a,b\rangle \in F$.
  - אם $\langle a_1,b\rangle,\ \langle a_2,b\rangle \in F$ 
    - אז $F(a_1)=F(a_2)=b$ ומחח"ע $a_1=a_2$.
  - לכן יש בדיוק $a$ אחד עם $\langle b,a\rangle \in F^{-1}$, ומכאן $F^{-1}$ פונקציה 

::right::
- (⇐) נניח ש־$F^{-1}$ פונקציה.
  - יהי $a_1,a_2$ כך ש־$F(a_1)=F(a_2)=b$.
  - אז $\langle b,a_1\rangle,\ \langle b,a_2\rangle \in F^{-1}$.
  - מחד־ערכיות של $F^{-1}$ נקבל $a_1=a_2$.
  - לכן $F$ חח"ע.

::after::

- במקרה זה $F^{-1}$ גם חח"ע:
  - אם $F^{-1}(b_1)=F^{-1}(b_2)=a$ אז $\langle a,b_1\rangle,\ \langle a,b_2\rangle \in F$.
  - מחד־ערכיות של $F$ נקבל $b_1=b_2$.

- כבר ראינו ש-ו-$\operatorname{dom}(F^{-1})=\operatorname{Im}(F)$ ו-$\operatorname{img}(F^{-1})=\operatorname{dom}(F)$.


<img src="/images/פונקציה הפוכה.png" class="absolute top-40 left-10 w-50 transform -translate-y-1/2" />


---


# פונקציה על


- $F \colon A \to B$ נקראת "**עַל**" אם לכל $b \in B$ יש $a \in A$ עם $F(a)=b$
זה, כמובן, שקול ללהגיד ש  $img(F) = B$.

- דוגמאות לפונקציות עַל:
  - $F=\{\langle 1,a\rangle,\langle 2,b\rangle,\langle 3,c\rangle\}\colon \{1,2,3\}\to\{a,b,c\}$ - על כי כל ערך ב־$B$ הוא תמונה של ערך ב־$A$.
  - $f\colon \mathbb{Z}\to\mathbb{Z},\ f(x)=x+1$ - על כי לכל $y \in \mathbb{ז}$ קיים $x=y-1$ כך ש־$f(x)=y$.

- דוגמאות שלא עַל:
  - $H=\{\langle 1,a\rangle,\langle 2,a\rangle,\langle 3,b\rangle\}\colon \{1,2,3\}\to\{a,b,c\}$ לא על כי $c$ אינו תמונה של אף ערך ב־$A$.
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


# צמצום פונקציות


- אם $A' \subseteq A$ נגדיר $F|_{A'} = \{\langle a,b \rangle \in F \colon a \in A'\}$.

- **הוכיחו או הפריכו:** לכל $F \colon A \to B$ קיימת $A'\subseteq A$ כך ש:

  1) $F|_{A'}$ חח"ע

  2) $\operatorname{Im}(F|_{A'}) = \operatorname{Im}(F)$

<v-click>

- הוכחה:
  - נגדיר יחס שקילות על $A$ כך ש-$a_1 \sim a_2$ אם ורק אם $F(a_1)=F(a_2)$.

  - לפי **אקסיומת הבחירה**, קיימת קבוצה $A' \subseteq A$ שמכילה בדיוק נציג אחד מכל מחלקת שקילות.

  - אכן, $F|_{A'}$ חח"ע כי אם $F(a_1)=F(a_2)$ עם $a_1,a_2 \in A'$ אז $a_1 \sim a_2$ ולכן $a_1=a_2$.
  - בנוסף, כל תמונה של $F$ מתקבלת גם על ידי $F|_{A'}$ כי בחרנו לפחות ערך אחד מכל קבוצה.

<img src="/images/צמצום פונקציה.png" class="absolute top-60 left-20 w-70 transform -translate-y-1/2" />

</v-click>

---
layout: two-cols-header
---

# תמונה וקדם־תמונה


- **תמונה:**  $F[X] = \{F(a) : a \in X\}$

- **קדם־תמונה:**  $F^{-1}[Y] = \{a \in A : F(a)\in Y\}.$


::left::

<div class="flex flex-col gap-0">

<br />

<v-click>

1. $F[X \cup Y] = F[X] \cup F[Y]$
<v-click>

✔️ **תמיד נכון**.
</v-click>

</v-click>

<v-click>

<br />

2. $F[X \cap Y] = F[X] \cap F[Y]$
<v-click>

❌ **לא תמיד נכון**.
**תנאי מספיק:** $X \subseteq \operatorname{dom}(F)$.
</v-click>

</v-click>

<v-click>

<br />

3. $F^{-1}[Y \cup Z] = F^{-1}[Y] \cup F^{-1}[Z]$
<v-click>

✔️ **תמיד נכון**.
</v-click>

</v-click>

</div>

::right::

<div class="flex flex-col gap-0">

<br />

<v-click>

4. $F^{-1}[Y \cap Z] = F^{-1}[Y] \cap F^{-1}[Z]$
<v-click>

✔️ **תמיד נכון**.
</v-click>

</v-click>

<br />

<v-click>

5. $F[F^{-1}[Y]] = Y$
<v-click>

❌ **לא תמיד נכון**.  
**תנאי מספיק:** $Y \subseteq \operatorname{Im}(F)$.
</v-click>

</v-click>

<br />

<v-click>

6. $F^{-1}[F[X]] = X$
<v-click>

❌ **לא תמיד נכון**.  
**תנאי מספיק:** \(F\) חח"ע.
</v-click>

</v-click>

</div>


---
layout: two-cols-header
---

# הרכבת פונקציות

- אם $F\colon A\to B$ ו-$G\colon B\to C$:

  - נגדיר $G\circ F = \{\langle a,c \rangle : \exists b,\ \langle a,b \rangle \in F \wedge \langle b,c \rangle \in G\}$.
  - ההרכבה מוגדרת היטב רק אם **תמונת $F$ מוכלת בתחום של $G$**.

תכונות:

::left::

1. אם $F,G$ חח"ע $\Leftarrow$ $G\circ F$ חח"ע.
   <v-click> ✔️ נכון </v-click>

2. אם $F,G$ על $\Leftarrow$ $G\circ F$ על.
   <v-click> ✔️ נכון </v-click>

3. אם $G\circ F$ חח"ע $\Leftarrow$ $G$ חח"ע
   <v-click> ❌ לא נכון </v-click>

::right::

4. אם $G\circ F$ על $\Leftarrow$ $G$ על
   <v-click> ✔️ נכון </v-click>

5. אם $G\circ F$ על $\Leftarrow$ $F$ על
   <v-click> ❌ לא נכון </v-click>

6. אם $G\circ F$ חח"ע $\Leftarrow$ $F$ חח"ע
   <v-click> ✔️ נכון </v-click>

---
layout: two-cols-header
---

# קדם־תמונה של תמונה


**טענה:** אם $F$ חח"ע אז:

$$F^{-1}[F[X]] = X$$





::left::

<v-click>

- נראה ש-$F^{-1}[F[X]] \subseteq X$:

  - יהי $a \in F^{-1}[F[X]]$.
  
  - מהגדרה: $F(a) \in F[X]$.
  
  - לכן קיים $x \in X$ כך ש-$F(x) = F(a)$.
  
  - **נתון ש-$F$ חח"ע**, ולכן $a = x$.
  
  - קיבלנו $a \in X$.

</v-click>

::right::

<v-click>

- נראה ש-$F^{-1}[F[X]] \supseteq X$:

  - יהי $a \in X$.

  - אז $F(a) \in F[X]$.

  - לכן $a \in F^{-1}[F[X]]$.
</v-click>

---

# דוגמה נגדית: כש-$F$ לא חח"ע

נראה דוגמה שבה $F^{-1}[F[X]] \neq X$.

- נגדיר $F: \mathbb{R} \to \mathbb{R}$ ע"י $F(x) = x^2$.
- נבחר $X = \{2\}$.

<v-click>

1. נחשב את התמונה של $X$:
   $$F[X] = \{F(2)\} = \{4\}$$

2. נחשב את הקדם־תמונה של התוצאה:
   $$F^{-1}[\{4\}] = \{x \in \mathbb{R} : x^2 = 4\} = \{-2, 2\}$$

3. קיבלנו:
   $$F^{-1}[F[X]] = \{-2, 2\} \neq \{2\} = X$$

</v-click>

<v-click>

**מסקנה:** אם $F$ לא חח"ע, הפעולה $F^{-1} \circ F$ עשויה "להרחיב" את הקבוצה המקורית.

</v-click>

---

# יחסים מעל מרחב מנה

יהי $A$ קבוצה ו-$E$ יחס שקילות על $A$.
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

תהי $F: A/E \to B$ פונקציה המוגדרת ע"י נציגים: $F([a]) = f(a)$.

**הגדרה:** הפונקציה $F$ **מוגדרת היטב** אם הערך שלה אינו תלוי בנציג.
כלומר:
$$a_1 E a_2 \implies f(a_1) = f(a_2)$$

**דוגמה לפונקציה שאינה מוגדרת היטב:**
- ננסה להגדיר $F: \mathbb{Z}/3\mathbb{Z} \to \mathbb{Z}$ ע"י $F
z([x]) = x^2$.

- נבחר שני נציגים לאותה מחלקה: $1 \equiv 4 \pmod 3$.

- אבל $F([1]) = 1^2 = 1$ ואילו $F([4]) = 4^2 = 16$.

- קיבלנו $1 \neq 16$, ולכן הפונקציה אינה מוגדרת היטב.

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
