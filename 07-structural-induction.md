---
theme: frankfurt
infoLine: true
author: "גרא וייס"
title: "אינדוקציה מבנית ולוגיקה"
htmlAttrs:
    dir: rtl
    lang: heb
mdc: true
download: true
exportFilename: 07-structural-induction.pdf
transition: slide
---

# אינדוקציה מבנית

## הרצאה בקורס: מבוא ללוגיקה ותורת הקבוצות

 מרצה: פרופ. גרא וייס


---

# הגדרה רקורסיבית של $\mathrm{Fin}(\mathbb N)$
 

$\mathrm{Fin}(\mathbb N)$ היא הקבוצה של כל תתי־הקבוצות הסופיות של $\mathbb N$.
נגדיר אותה כבנייה אינדוקטיבית (מבנית):


## שלב בסיס

$$
\emptyset \in \mathrm{Fin}(\mathbb N)
$$


## צעד בנייה
לכל $A \in \mathrm{Fin}(\mathbb N)$ ולכל $n\in\mathbb N$:
$$
A \cup \{n\} \in \mathrm{Fin}(\mathbb N)
$$


## אינטואיציה
מתחילים מ־$\emptyset$  
ומוסיפים איברים אחד־אחד - מספר סופי של פעמים.

---

# אינדוקציה מבנית על $\mathrm{Fin}(\mathbb N)$

כדי להוכיח תכונה $P(A)$ לכל $A\in\mathrm{Fin}(\mathbb N)$ מספיק:

- להוכיח $P(\emptyset)$
- להראות:
$
P(A)\Rightarrow P(A\cup\{n\})
$
לכל $A\in\mathrm{Fin}(\mathbb N)$ ולכל $n\in\mathbb N$.

<div class="flex justify-center mt-8">
  <img src="/fin_n_induction_tree_v4.png" class="h-80" />
</div> 

---

# דוגמה: כוחה של אינדוקציה מבנית

**טענה:** לכל $A \in \mathrm{Fin}(\mathbb N)$, הקבוצה $A$ היא סופית (קיימת התאמה חח"ע ועל ל-$\mathbb{N}^{<k}$ עבור $k$ כלשהו).

1.  **בסיס ($\emptyset$):**
    - נבחר $k=0$. מתקיים $\emptyset = \mathbb{N}^{<0}$.
    - פונקציית הזהות (הריקה) היא חח"ע ועל מ-$\emptyset$ ל-$\mathbb{N}^{<0}$.

2.  **צעד ($A \cup \{n\}$):**
    - נניח ש-$A$ סופית, כלומר קיימת $f: A \to \mathbb{N}^{<k}$ חח"ע ועל.
    - **מקרה א ($n \in A$):** $A \cup \{n\} = A$, ולכן היא סופית (עם אותה $f$ ו-$k$).
    - **מקרה ב ($n \notin A$):** נגדיר $g: A \cup \{n\} \to \mathbb{N}^{<k+1}$:
      $$ g(x) = \begin{cases} f(x) & x \in A \\ k & x = n \end{cases} $$
    - קל לראות ש-$g$ חח"ע ועל, ולכן $A \cup \{n\}$ סופית (בגודל $k+1$).





---
layout: TwoColsHeaderCustom
---

# כיוון שני: כל תת-קבוצה סופית היא ב-$\mathrm{Fin}(\mathbb N)$

**טענה:** תהא $A \subseteq \mathbb{N}$. אם $A$ סופית, אז $A \in \mathrm{Fin}(\mathbb{N})$.

**הוכחה:** באינדוקציה (רגילה) על גודל הקבוצה $|A|$.

::left::

**בסיס האינדוקציה:**
- אם $|A|=0$, אז $A = \emptyset$.

- לפי הגדרת הבסיס של $\mathrm{Fin}(\mathbb{N})$, מתקיים $\emptyset \in \mathrm{Fin}(\mathbb{N})$.

::right::

**צעד האינדוקציה:**

- נניח שהטענה נכונה לכל קבוצה בגודל $k$.
- תהא $A$ קבוצה בגודל $k+1$.
- נבחר איבר כלשהו $n \in A$.
- נגדיר $A' = A \setminus \{n\}$. מתקיים $|A'| = k$.
- לפי הנחת האינדוקציה, $A' \in \mathrm{Fin}(\mathbb{N})$.
- לפי כלל הבנייה, $(A' \cup \{n\}) \in \mathrm{Fin}(\mathbb{N})$.

- אבל $A' \cup \{n\} = (A \setminus \{n\}) \cup \{n\} = A$, ולכן $A \in \mathrm{Fin}(\mathbb{N})$.

---

# עקרון האינדוקציה המבנית

**נתון:** קבוצה $S$ המוגדרת ע"י בסיס $B$ ופעולות בנייה $K$.

**כדי להוכיח $\forall x \in S, P(x)$:**

1.  **בסיס:** הוכח $P(b)$ לכל $b \in B$.

2.  **צעד:** לכל $k \in K$, הוכח שהתכונה נשמרת:
    $$
    P(x_1) \land \dots \land P(x_m) \implies P(k(x_1, \dots, x_m))
    $$

**מסקנה:** התכונה מתקיימת לכל איברי הקבוצה.

<div class="absolute bottom-20 left-5">
  <img src="/general_induction_machine_no_checkerboard.png" class="h-70" />
</div>

---

# שימוש באינדוקציה במדעי המחשב

במדעי המחשב אנו עוסקים רבות במבנים המוגדרים באופן רקורסיבי:
- **רשימות** (Lists)

- **עצים** (Trees)
- **נוסחאות** לוגיות (Formulas)
- **דקדוקים** (Grammars)

**אינדוקציה מבנית** היא הכלי המרכזי להוכחת תכונות על מבנים אלו.

<div class="absolute bottom-40 left-20">
  <img src="/cs_digital_construction_site.png" class="h-80" />
</div>


---

# תחביר תחשיב הפסוקים (Propositional Logic)

**הגדרה:** תהי $Atoms$ קבוצה של פסוקים אטומים (למשל $\{P, Q, R, \dots\}$).
נגדיר את קבוצת הפסוקים $\mathrm{PROP}(Atoms)$ באופן אינדוקטיבי:

1.  **אטומים:** לכל $p \in Atoms$, מתקיים $p \in \mathrm{PROP}(Atoms)$.
2.  **שלילה:** אם $\phi \in \mathrm{PROP}(Atoms)$, אזי $\neg \phi \in \mathrm{PROP}(Atoms)$.
3.  **קשרים בינאריים:** אם $\phi, \psi \in \mathrm{PROP}(Atoms)$, אזי:
    - $(\phi \land \psi) \in \mathrm{PROP}(Atoms)$
    - $(\phi \lor \psi) \in \mathrm{PROP}(Atoms)$
    - $(\phi \to \psi) \in \mathrm{PROP}(Atoms)$

**הערה:** אנו מקפידים על סוגריים מסביב לכל פעולה בינארית כדי למנוע דו-משמעות.

**דוגמאות:**
- $P$ - פסוק אטומי.
- $(\neg P)$ - פסוק.
- $((P \land Q) \to (\neg R))$ - פסוק תקין.
- $P \land Q$ - אינו פסוק לפי ההגדרה הפורמלית (חסרים סוגריים).

<div class="absolute bottom-20 left-15">
  <img src="/prop_formula_construction_kit.png" class="h-60" />
</div>

---
layout: two-cols-header
---

# הוכחה באינדוקציה מבנית: איזון סוגריים

**טענה:** בכל פסוק $\phi \in \mathrm{PROP}(Atoms)$, מספר הסוגריים הימניים שווה למספר הסוגריים השמאליים.

::left::

**הוכחה:**
נגדיר תכונה $T(\phi)$: $L(\phi) = R(\phi)$.

1.  **בסיס:** עבור אטום $p \in Atoms$:
    - $L(p) = 0, R(p) = 0$.
    - $0=0$ ✓

2.  **צעד (שלילה):** נניח $T(\phi)$. נבדוק עבור $\neg \phi$:
    - $L(\neg \phi) = L(\phi)$.
    - $R(\neg \phi) = R(\phi)$.
    - מההנחה $L(\phi)=R(\phi)$, ולכן השוויון נשמר. ✓

::right::

3.  **צעד (בינארי):** נניח $T(\phi)$ ו-$T(\psi)$. נבדוק עבור $(\phi \circ \psi)$ כאשר $\circ \in \{\land, \lor, \to\}$:
    - $L((\phi \circ \psi)) = 1 + L(\phi) + L(\psi)$.
    - $R((\phi \circ \psi)) = R(\phi) + R(\psi) + 1$.
    - מההנחות $L(\phi)=R(\phi)$ ו-$L(\psi)=R(\psi)$.
    - סה"כ: הצדדים שווים ✓

**מסקנה:** התכונה מתקיימת לכל פסוק ב-$\mathrm{PROP}(Atoms)$.

<div class="flex justify-center mt-4">
  <img src="/prop_parentheses_balance_scale.png" class="h-40" />
</div>

---

# תחביר תחשיב היחסים (Predicate Logic)

**שפה מסדר ראשון ($L$):** נניח שפה עם יחס דו-מקומי אחד $R$ (למשל יחס "גדול מ-", יחס החברות, קשת בגרף).

**הגדרת מושגים:**
- **משתנים:** $x_1, x_2, \ldots$ (משתנים שיכולים לקבל ערכים).
- **נוסחאות אטומיות:** $R(x, y)$, $x=y$.

**הגדרת הנוסחאות ($FORM$) באינדוקציה:**
1.  **אטומים:** כל נוסחה אטומית היא נוסחה.
2.  **קשרים:** אם $\phi, \psi$ נוסחאות, אז $(\neg \phi), (\phi \land \psi)$ הן נוסחאות.
3.  **כמתים:** אם $\phi$ נוסחה ו-$x$ משתנה, אז $\exists x \phi$ ו-$\forall x \phi$ הן נוסחאות.

---
layout: two-cols-header
---

# משתנים חופשיים וקשורים

**הגדרה אינדוקטיבית של מושג "משתנה חופשי" ($FV(\phi)$):**

::left::

1.  **אטומים:**
    - $FV(R(x,y)) = \{x, y\}$
    - $FV(x=y) = \{x, y\}$

2.  **קשרים:**
    - $FV(\neg \phi) = FV(\phi)$
    - $FV(\phi \land \psi) = FV(\phi) \cup FV(\psi)$

::right::

3.  **כמתים:**
    - $FV(\exists x \phi) = FV(\phi) \setminus \{x\}$
    - $FV(\forall x \phi) = FV(\phi) \setminus \{x\}$
    - (הכמת "קושר" את המשתנה $x$).

**הגדרה:** **פסוק** (Sentence) הוא נוסחה שאין בה משתנים חופשיים ($FV(\phi) = \emptyset$).

---

# סמנטיקה: מודלים

**מבנה (או מודל) $M$ לשפה $L$ מורכב מ:**
1.  **עולם (Domain) $D$:** קבוצה לא ריקה של איברים.
2.  **פרשנות היחס $R^M$:** תת-קבוצה של $D \times D$ (כל הזוגות המקיימים את היחס).

**יחס הסיפוק ($M \models \phi$):**
- $M \models R(a,b)$ אם הזוג $(a,b)$ נמצא ביחס $R^M$.
- $M \models \phi \land \psi$ אם $M \models \phi$ וגם $M \models \psi$.
- $M \models \forall x \phi(x)$ אם לכל איבר $d \in D$, מתקיים $M \models \phi(d)$.

**דוגמה:**
- נתבונן בפסוק: $\phi = \forall x R(x,x)$.
- משמעות: היחס $R$ הוא **רפלקסיבי** במודל $M$.

---

# מבנים כגרפים ואיזומורפיזם

ניתן לחשוב על מבנה $M$ עם יחס בינארי אחד כעל **גרף מכוון**:
- האיברים ב-$D$ הם הצמתים.
- היחס $R^M$ מגדיר את הקשתות.

**איזומורפיזם ($\cong$):**
שני מבנים $M$ ו-$N$ נקראים **איזומורפיים** אם קיימת פונקציה חח"ע ועל $f \colon D_M \to D_N$ כך ש:
$$ (a,b) \in R^M \iff (f(a), f(b)) \in R^N $$
(כלומר, ההעתקה שומרת על קיום/אי-קיום קשתות).

---
layout: two-cols-header
---

# איזומורפיזם שומר תכונות

**משפט:** אם $M \cong N$, אזי לכל פסוק $\phi$, מתקיים:
$$ M \models \phi \iff N \models \phi $$
(שני המבנים מסכימים על כל התכונות שניתן לנסח בשפה).

::left::

**דוגמה 1: רפלקסיביות**
- הפסוק: $\forall x R(x,x)$.
- אם בגרף $M$ יש לולאה עצמית לכל צומת, ובגרף $N$ איזומורפי לו, גם ב-$N$ חייבת להיות לולאה עצמית לכל צומת.

::right::

**דוגמה 2: אנטי-סימטריות**
- הפסוק: $\forall x \forall y (R(x,y) \land R(y,x) \to x=y)$.
- אם $M$ הוא יחס סדר (אנטי-סימטרי), כל גרף איזומורפי לו יהיה גם הוא אנטי-סימטרי.
- מבנה איזומורפי הוא למעשה "אותו המבנה" רק עם שמות אחרים לאיברים.

