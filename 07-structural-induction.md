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
    - נניח ש-$A$ סופית, כלומר קיימת $f \colon A \to \mathbb{N}^{<k}$ חח"ע ועל.
    - **מקרה א ($n \in A$):** $A \cup \{n\} = A$, ולכן היא סופית (עם אותה $f$ ו-$k$).
    - **מקרה ב ($n \notin A$):** נגדיר $g \colon A \cup \{n\} \to \mathbb{N}^{<k+1}$:
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
  <img src="/bubble_sort_induction.svg" class="h-70" />
</div>


---
section: תחשיב פסוקים
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

# משמעות של ביטוי (סמנטיקה)

**הגדרה:** המשמעות של ביטוי בתחשיב הפסוקים היא ערך אמת (True/False).

1.  **השמה (Valuation):** פונקציה $v \colon Atoms \to \{T, F\}$ המתאימה ערך אמת לכל אטום.

2.  **הרחבה לפסוקים מורכבים ($\hat{v}$):**
    נגדיר פונקציה $\hat{v} \colon \mathrm{PROP}(Atoms) \to \{T, F\}$ באופן אינדוקטיבי:
    *   **אטום:** לכל $p \in Atoms$, $\hat{v}(p) = v(p)$.
    
    *   **שלילה:** $\hat{v}(\neg \phi) = T$ אמ"מ $\hat{v}(\phi) = F$.
    *   **קשרים בינאריים:**
        *   $\hat{v}(\phi \land \psi) = T$ אמ"מ $\hat{v}(\phi)=T$ וגם $\hat{v}(\psi)=T$.
     
        *   $\hat{v}(\phi \lor \psi) = T$ אמ"מ $\hat{v}(\phi)=T$ או $\hat{v}(\psi)=T$.
        *   $\hat{v}(\phi \to \psi) = T$ אמ"מ לא ($\hat{v}(\phi)=T$ וגם $\hat{v}(\psi)=F$).

---
section: לוגיקה מסדר ראשון
---

# הגדרת שפה מסדר ראשון ($L$)

שפה $L$ מוגדרת על ידי המרכיבים הבאים:

1.  קבוצה של **סימני פונקציה** $F$, ולכל $f \in F$ מספר שלם חיובי $n_f$ (הערכיות (Arity) של $f$).

2.  קבוצה של **סימני יחס** $R$, ולכל $r \in R$ מספר שלם חיובי $n_r$ (הערכיות (Arity) של $r$).
3.  קבוצה של **סימני קבועים** $C$.

<br>

**הערות חשובות:**

*   נניח כי כל שפה מכילה את סימן השוויון ($=$) וכן את הקשרים והכמתים הלוגיים.

*   **פונקציה $n$-מקומית:** הרחבה של מושג הפונקציה ל-$f \colon A^n \to A$.
*   **יחס $n$-מקומי:** הרחבה של מושג היחס לקבוצה של $n$-יות סדורות (תת-קבוצה של $A^n$).
*   יחס רגיל כפי שהגדרנו אותו נקרא לרוב **יחס בינארי** ($n=2$).

---

# מבנה $M$ עבור שפה $L$ (L-Structure)

מבנה $M$ עבור שפה $L$ מוגדר על ידי הנתונים הבאים:

1.  קבוצה לא ריקה $M$ הנקראת **העולם**, **התחום**, או **הקבוצה הבסיסית** של $M$.
2.  פונקציה $f^M \colon M^{n_f} \to M$ לכל $f \in F$.
3.  יחס $r^M \subseteq M^{n_r}$ לכל $r \in R$.
4.  איבר $c^M \in M$ לכל $c \in C$.

עבור שפה סופית, לרוב נסמן את המבנה בסוגריים משולשים $\langle M, \dots \rangle$, כאשר נציין את הפירושים של סימני הפונקציות, היחסים והקבועים לפי הסדר בו הם מופיעים בשפה.

**דוגמאות:**
*   $L = \{R\}$ כאשר $n_R = 2$. אזי $\langle \mathbb{Z}, \equiv \pmod n \rangle$ הוא מבנה-$L$.
*   $L = \{+, \cdot, 0, 1\}$ כאשר $+,\cdot$ בינאריים ($n_+ = n_\cdot = 2$), ו-$0,1$ קבועים.
    *   $\langle \mathbb{R}, +, \cdot, 0, 1 \rangle$ הוא מבנה-$L$.
    *   גם $\langle \mathbb{R}, +, +, 0, 1 \rangle$ הוא מבנה-$L$.
    *   וגם $\langle \mathbb{R}, +, \cdot, 2, 2 \rangle$ הוא מבנה-$L$.

---

# הגדרת שמות (Terms) של שפה $L$

קבוצת ה-$L$-שמות (L-Terms) $T$ היא הקבוצה הקטנה ביותר המקיימת את התנאים הבאים:

1.  $c \in T$ לכל קבוע $c \in C$.

2.  $v_i \in T$ לכל משתנה $v_i \in V$.

3.  אם $t_1, \dots, t_{n_f} \in T$ הם שמות, והפונקציה $f \in F$ היא בעלת ערכיות $n_f$, אזי $f(t_1, \dots, t_{n_f}) \in T$.

**דוגמאות:**

*   נניח $L=\{+, 0\}$, כאשר $+$ פונקציה בינארית ו-$0$ קבוע.
*   הביטויים הבאים הם שמות:
    *   $v_1, v_2, 0$
    *   $+(v_1, v_2)$ (בקיצור: $v_1 + v_2$)
    *   $((v_1 + v_2) + v_2) + 0$
*   ניתן ליצור שמות מורכבים מאוד.
*   **אינטואיציה:** שמות אינם טוענים טענה. הם מציינים איברים במבנה, אך לא אומרים עליהם דבר.

---

# הגדרת נוסחאות (Formulas) של שפה $L$

**הגדרה:** נוסחה אטומית $\phi$ היא אחד משני אלה:
1.  $t_1 = t_2$, כאשר $t_1, t_2$ הם שמות ($L$-terms).
2.  $r(t_1, \dots, t_{n_r})$, כאשר $r \in R$ הוא סימן יחס וה-$t_i$ הם שמות.

**הגדרה:** קבוצת ה-$L$-נוסחאות היא הקבוצה הקטנה ביותר $W$ המכילה את כל הנוסחאות האטומיות כך ש:
*   אם $\phi \in W$, אזי $(\neg \phi) \in W$.
*   אם $\phi, \psi \in W$, אזי $(\phi \land \psi) \in W$ וגם $(\phi \lor \psi) \in W$.
*   אם $\phi \in W$, אזי $(\exists v_i \phi) \in W$ וגם $(\forall v_i \phi) \in W$.

**דוגמאות:** עבור $L=\{+, 0\}$:
*   נוסחה יכולה לטעון שוויון בין שמות: $v_1 + v_2 = 0$.
*   נוסחה יכולה לטעון לקיום איבר המקיים תכונה: $\exists v_1 (v_1 + 0 = 0)$.

---

# משתנים חופשיים וקשורים

אנו אומרים שמופע של משתנה $v$ בנוסחה $\phi$ הוא **חופשי** (free) אם הוא אינו נמצא בתוך כמת $\exists v$ או $\forall v$. אחרת אנו אומרים שהוא **קשור** (bound).

**דוגמאות:**
*   בנוסחה $v_1 + v_2 = 0$, המשתנים $v_1$ ו-$v_2$ הם חופשיים.

*   בנוסחה $\exists v_1 (v_1 + v_2 = 0)$, המשתנה $v_1$ הוא קשור (על ידי הכמת $\exists v_1$), ואילו $v_2$ הוא חופשי.

**הגדרה:** נוסחה $\phi$ היא **חסרת כמתים** (quantifier-free) 
אם לא מופיעים בה כמתים. 

לחלופין, $\phi$ היא חסרת כמתים אם כל המשתנים המופיעים ב-$\phi$ הם חופשיים.

---

# ערך של שם תחת השמה (Term Valuation)

יהיו $L$ שפה ו-$M$ מבנה-$L$.
תהי $\sigma \colon V \to M$ **השמה** (Assignment) למשתנים.

נגדיר באינדוקציה את הערך $t^M[\sigma] \in M$ לכל שם $t \in T$:

1.  אם $t$ הוא סימן קבוע $c \in C$, אזי $t^M[\sigma] = c^M$.

2.  אם $t$ הוא משתנה $v_i \in V$, אזי $t^M[\sigma] = \sigma(v_i)$.
3.  אם $t_1, \dots, t_{n_f}$ הם שמות, ו-$t = f(t_1, \dots, t_{n_f})$, אזי:
    $$t^M[\sigma] = f^M(t_1^M[\sigma], \dots, t_{n_f}^M[\sigma])$$

<br>

**הערה:** הערך של שם תלוי אך ורק בהשמה למשתנים המופיעים בו.



 