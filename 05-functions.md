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

- יחס $F \subseteq A \times B$ הוא **פונקציה** אם לכל $a \in A$ קיים בדיוק $b \in B$ אחד כך ש-$\langle a,b \rangle \in F$.
  - תנאי **מלאות**:
      <div class="formula-box">

    $\forall x \in X \bigl(\;\exists y \in Y (\;\langle x,y \rangle \in F) \; \bigr)$
      </div>

  - תנאי **חד-ערכיות**:
      <div class="formula-box">

    $\forall x \in X,  y_1,y_2 \in Y  (\langle x,y_1 \rangle \in F \land \langle x,y_2 \rangle \in F \Rightarrow y_1 = y_2)$
      </div>

- נסמן: $F \colon A \to B$.
  - נקרא ל-$A$ **תחום** של $F$ ול-$B$ **טווח חוקי** של $F$.
  - פונקציה היא בעצם שלשה: התחום, הטווח החוקי והיחס. כשכותבים $F$ מתיחסים רק ליחס.
  - התחום חייב להיות שווה לתחום של היחס : $\operatorname{dom}(F) = A$.
  - הטווח חייב להכיל את התמונה של היחס : $\operatorname{img}(F) \subseteq B$.

<div class="absolute top-1.5/3 left-.3/4 transform -translate-x-1/2 w-80 h-80" style="scale:.5;">
<BipartiteGraph
  :left="['1','2','3']"
  :right="['a','b','c']"
  :edges="[
    ['L1','Ra',''],
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

# תת־קבוצה של פונקציה

**הוכיחו או הפריכו :** אם $F\colon A \to B$ ו-$G \subseteq F$, אז בהכרח $G\colon A \to B$.

<v-click>

- דוגמה נגדית :
  - יהי $A=\{1,2\}$, $B=\{a,b\}$.
  - נגדיר $F=\{\langle 1,a\rangle,\langle 2,b\rangle\}$ - פונקציה $F\colon A\to B$.
  - נגדיר $G=\{\langle 1,a\rangle\}\subseteq F$.
  - אז $G$ אינה פונקציה $A\to B$ כי אינה מוגדרת על $2$ (חוסר מלאות).

<div class="flex gap-8 items-start -mt-15">
  <div class="w-1/2 scale-60">
    <BipartiteGraph
      :left="['1','2']"
      :right="['a','b']"
      :edges="[['L1','Ra',''], ['L2','Rb','']]"
    />
    <div class="text-2xl font-bold text-center mt-2">F: A→B - פונקציה מלאה</div>
  </div>
  <div class="w-1/2 scale-60">
    <BipartiteGraph
      :left="['1','2']"
      :right="['a','b']"
      :edges="[['L1','Ra','']]"
    />
    <div class="text-2xl font-bold text-center mt-2">G⊆F - לא פונקציה A→B (1 מוגדר, 2 לא)</div>
  </div>
</div>

<div class="-mt-4">

- הערה חשובה: אם נסמן $A'=\operatorname{dom}(G)$, אז - **$G\colon A' \to B$ היא פונקציה תקינה.** - הבעיה נובעת רק מהדרישה שהתחום יהיה בדיוק $A$.
</div>

<img src="/images/תת-קבוצה של פונקציה.png" class="absolute top-60 left-20 w-70 transform -translate-y-1/2" />

</v-click>

---

# חיתוך שתי פונקציות

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
    <div class="text-2xl font-bold text-center mt-2">F: A→B</div>
  </div>
  <div class="w-1/3 scale-60">
    <BipartiteGraph
      :left="['1','2']"
      :right="['a','b']"
      :edges="[['L1','Ra',''], ['L2','Rb','']]"
    />
    <div class="text-2xl font-bold text-center mt-2">G: A→B</div>
  </div>
  <div class="w-1/3 scale-60">
    <BipartiteGraph
      :left="['1','2']"
      :right="['a','b']"
      :edges="[['L1','Ra','']]"
    />
    <div class="text-2xl font-bold text-center mt-2">F∩G - פונקציה A'→B, לא A→B</div>
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

## הגדרות

<v-click>

- **תמונה:**  
  $$F[X] = \{F(a) : a \in X\}.$$

</v-click>

<v-click>

- **קדם־תמונה:**  
  $$F^{-1}[Y] = \{a \in A : F(a)\in Y\}.$$

</v-click>

::right::

## טענות לבדיקה

<v-click>

### ✔️ 1.  
$$F[X \cup Y] = F[X] \cup F[Y]$$  
תמיד נכון.

</v-click>

<v-click>

### ❌ 2.  
$$F[X \cap Y] \neq F[X] \cap F[Y]$$  
בדרך כלל לא נכון.

</v-click>

<v-click>

### ✔️ 3.  
$$F^{-1}[Y \cup Z] = F^{-1}[Y] \cup F^{-1}[Z]$$

</v-click>

<v-click>

### ✔️ 4.  
$$F^{-1}[Y \cap Z] = F^{-1}[Y] \cap F^{-1}[Z]$$

</v-click>

<v-click>

### ❓ 5.  
$$F[F^{-1}[Y]] \stackrel{?}{=} Y$$  
לא תמיד.  
**תנאי מספיק:**  
$$Y \subseteq \operatorname{Im}(F).$$

</v-click>

<v-click>

### ❓ 6.  
$$F^{-1}[F[X]] \stackrel{?}{=} X$$  
לא תמיד.  
נכון אם **\(F\) חח"ע**.

</v-click>


---

# תמונה וקדם־תמונה

- **תמונה:** $F[X] = \{F(a) : a\in X\}$.
- **קדם־תמונה:** $F^{-1}[Y] = \{a\in A : F(a)\in Y\}$.

- טענות לבדיקה

  - $F[X\cup Y] = F[X] \cup F[Y]$ - תמיד נכון.
  
  - $F[X\cap Y] = F[X] \cap F[Y]$ - **לא נכון בכלליות**.

  - $F^{-1}[Y\cup Z] = F^{-1}[Y] \cup F^{-1}[Z]$ - נכון.
  - $F^{-1}[Y\cap Z] = F^{-1}[Y] \cap F^{-1}[Z]$ - נכון.
  - $F[F^{-1}[Y]] = Y$? - לא תמיד. תנאי מספיק: $Y \subseteq \operatorname{Im}(F)$.
  - $F^{-1}[F[X]] = X$? - לא תמיד. נכון אם $F$ חח"ע.

---

layout: section

# הרכבת פונקציות

---

## הרכבה

אם $F\colon A\to B$ ו-$G\colon B\to C$:

- נגדיר $G\circ F = \{\langle a,c \rangle : \exists b,\ \langle a,b \rangle \in F \wedge \langle b,c \rangle \in G\}$.
- התחום של ההרכבה: $A$.
- ההרכבה מוגדרת היטב רק אם **תמונת $F$ מוכלת בתחום של $G$**.

## תכונות של הרכבה

- אם $F,G$ חח"ע $\Rightarrow$ $G\circ F$ חח"ע.
- אם $F,G$ על $\Rightarrow$ $G\circ F$ על.

## שאלות נכון/לא נכון

1. אם $G\circ F$ חח"ע $\Rightarrow$ $F$ חח"ע - נכון.
2. אם $G\circ F$ חח"ע $\Rightarrow$ $G$ חח"ע - לא נכון.
3. אם $G\circ F$ על $\Rightarrow$ $G$ על - נכון.
4. אם $G\circ F$ על $\Rightarrow$ $F$ על - לא נכון.

---

layout: section

# קדם־תמונה של תמונה

---

**טענה:** אם $F$ חח"ע אז:

$$F^{-1}[F[X]] = X$$

---

layout: section

# נספח: פונקציות ויחסים מעל מרחב מנה

---

- יחס מוגדר היטב על מחלקות שקילות: התוצאה אינה תלויה בנציג.
- פונקציה חד־מקומית/דו־מקומית מוגדרת היטב אם הערך שלה אינו תלוי בבחירת הנציגים.
