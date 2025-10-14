---
theme: frankfurt
infoLine: true
author: "גרא וייס"
title: "מבוא לקבוצות ולפעולות בוליאניות"
htmlAttrs:
  dir: rtl
  lang: heb
mdc: true
download: true
---
# מבוא לקבוצות ולפעולות בוליאניות
## הרצאה בקורס: מבוא ללוגיקה ותורת הקבוצות

 מרצה: פרופ. גרא וייס
---
section: קבוצות
layout: two-cols-header
---
# קבוצות: מושגי יסוד

::left::

- **עצמים מתמטיים:** העולם המתמטי כולל טיפוסים שונים של עצמים:
  - מספרים: טבעיים ($\mathbb{N}$), שלמים ($\mathbb{Z}$), רציונליים ($\mathbb{Q}$), ממשיים ($\mathbb{R}$).
  - עצמים גיאומטריים: נקודות, ישרים, וכו'.

- **הגדרת קבוצה:**
  - קבוצה היא אוסף של איברים, הניתן להגדרה על ידי רשימה בסוגריים מסולסלים.
  - דוגמה: $A = \{7, 12, 3\}$.
  - קבוצה יכולה להכיל איברים מטיפוסים שונים, וגם קבוצות אחרות.

- **שייכות וסימונים:**
  - $a \in A$: האיבר $a$ שייך לקבוצה $A$.
  - $b \notin A$: האיבר $b$ אינו שייך לקבוצה $A$.


::right::

- **הנחת יסוד:** הביטוי $x \in A$ הוא בעל משמעות רק אם $A$ היא קבוצה. מכאן ואילך, כשנכתוב $a \in A$, נניח תמיד ש-$A$ היא קבוצה.

- **דוגמה:**
  -  עבור $S = \{\pi, \{-3\}\}$ 
     -  $\pi \in S$, $\{-3\} \in S$
     -  $-3 \notin S$

- **כימות על קבוצות:**
  - ניתן להשתמש בכמתים על איברי קבוצה:

  $$\forall n \in \mathbb{N}  (\exists k \in \mathbb{N} ( n = 2k \lor n+1 = 2k))$$
  - הביטוי $\forall n \in \mathbb{N} (\alpha(n))$ נקרא:
    - "לכל איבר $n$ בקבוצה $\mathbb{N}$, הטענה $\alpha(n)$ מתקיימת".


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

# הגדרת קבוצה באמצעות תנאי

- בדרך כלל, קבוצות מוגדרות באמצעות תנאי שאיבריהן מקיימים, ולא על ידי מניית כל האיברים.
- **דוגמה:** קבוצת המספרים הזוגיים:
  $$ S = \{ n \mid n \in \mathbb{N} \land \exists k \in \mathbb{N} (n=2k) \} $$
- **הגדרה כללית:**
  - אם $P(x)$ הוא תנאי על משתנה $x$, ניתן להגדיר קבוצה $A$ על ידי:
    $$ A = \{ x \mid P(x) \} $$
  - זוהי קבוצת כל האיברים $x$ שעבורם התנאי $P(x)$ מתקיים. כלומר: $x \in A \iff P(x)$.
  - שם המשתנה אינו חשוב: $\{ x \mid P(x) \} = \{ y \mid P(y) \}$.
  
- **תנאים שונים, אותה קבוצה:**
  - תנאים שונים יכולים להגדיר את אותה הקבוצה. לדוגמה, שתי ההגדרות הבאות מתארות את הקבוצה $\{2\}$:
    - $\{ n \mid n \in \mathbb{N} \land \text{n is even} \land \text{n is prime} \}$ = $\{ n \mid n \in \mathbb{N} \land 1 < n < 3 \}$


<div id="note-russell" class="floating-formula" style="--formula-top: 20rem; --formula-left: 2rem; --formula-font-size: 1rem; width: 21rem; direction: rtl;">

   בהמשך, בעקבות הפרדוקס של ראסל, נצטרך לסייג את הכלליות שבהגדרה זו.
</div>

<svg class="absolute top-0 left-0 w-full h-full pointer-events-none">
  <defs>
    <marker id="arrowhead" viewBox="0 0 10 10" refX="3" refY="5"
        markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"></path>
    </marker>
  </defs>
  <path d="M 280 290 Q 640 220 770 275" stroke="#2563eb" stroke-width="1" fill="none" marker-end="url(#arrowhead)" />
</svg>

---

# הפרדוקס של ראסל

<!-- - **הבעיה:** הגדרת קבוצה באופן כללי, $X = \{x \mid \alpha(x)\}$, כאוסף כל העצמים המקיימים תנאי מסוים, עלולה להוביל לסתירות. -->

- **הפרדוקס:** נגדיר את הקבוצה $R$ להיות קבוצת כל הקבוצות שאינן איבר של עצמן:
   $R = \{ A \mid A \notin A \}$

- **השאלה:** האם $R$ איבר של עצמה? כלומר, האם $R \in R$?

- **הסתירה:**
  1.  **אם $R \in R$:**
      - אז $R$ חייבת לקיים את התנאי להשתייכות ל-$R$, שהוא $R \notin R$.
      - קיבלנו $R \in R$ וגם $R \notin R$ - **סתירה**.
  
  2.  **אם $R \notin R$:**
      - אז $R$ מקיימת את התנאי להשתייכות ל-$R$, ולכן $R \in R$.
      - קיבלנו $R \notin R$ וגם $R \in R$ - **סתירה**.

- **מסקנה:** לא כל אוסף של איברים המוגדר על ידי תנאי הוא "קבוצה" במובן המתמטי.

- **חשיבות הפרדוקס עבורנו:** תמיד עדיף להגדיר תת-קבוצות של קבוצה נתונה, ולהיזהר מהגדרות המכמתות על "אוסף כל הקבוצות".

<img src="/images/ראסל2.png" class="absolute top-1/3 left-1/9 w-80 h-80" />



<!-- ################################################################## -->
---
section: יחסים בין קבוצות
---


# יחס השוויון בין קבוצות

- **סימן השוויון (=):** מסמן זהות בין שני עצמים מתמטיים. $A=B$ מציין ש-$A$ ו-$B$ הם אותו אובייקט.

- **שוויון קבוצות (אקסיומת ההיקפיות):**
  - שתי קבוצות $A$ ו-$B$ שוות אם ורק אם יש להן בדיוק את אותם האיברים.
  - **הגדרה פורמלית:**
    $$ A=B \iff \forall x (x \in A \leftrightarrow x \in B) $$

- **אי-שוויון קבוצות:**
  - שתי קבוצות $A$ ו-$B$ שונות אם קיים איבר שנמצא באחת מהן אך לא בשנייה.
  - **הגדרה פורמלית (שלילת אקסיומת ההיקפיות):**
    $$ A \neq B \iff \exists x ((x \in A \land x \notin B) \lor (x \notin A \land x \in B)) $$

<!-- - **הערה על ניסוח:** -->
- **הערה חשובה:** במתמטיקה, הביטוי "לכל שתי קבוצות" אינו מחייב שהקבוצות שונות זו מזו.
- למשל, באקסיומת ההיקפיות, $A$ ו-$B$ יכולות להיות אותה קבוצה.


---

# יחס ההכלה

- עבור קבוצות $S, T$, נאמר ש-$S$ **מוכלת** ב-$T$, ונסמן זאת $S \subseteq T$, אם כל איבר של $S$ הוא גם איבר של $T$.

- **הגדרה פורמלית:**
  $$ S \subseteq T \iff \forall x (x \in S \to x \in T) $$

- **ביטויים נרדפים:**
  - $S$ מוכלת ב-$T$
  - $S$ חלקית ל-$T$
  - $S$ תת-קבוצה של $T$
  - $T$ מקיפה את $S$

- **הערה על מינוח:**
  - לעיתים משתמשים בביטוי "$T$ מכילה את $S$" כדי לציין $S \subseteq T$.
  - אנו נימנע מכך, כי ניתן להבין זאת בטעות כ-$S \in T$, וזה עלול לבלבל.

<img src="/images/הכלה.png" class="absolute top-1/2 left-1/8 w-80 h-60" />

---

# שלילת יחס ההכלה

- **הגדרה:** $A$ אינה מוכלת ב-$B$, ונסמן $A \not\subseteq B$, אם קיים איבר ב-$A$ שאינו נמצא ב-$B$.
  $$ A \not\subseteq B \iff \exists x (x \in A \land x \notin B) $$

- **פיתוח מההגדרה:**
  - $A \not\subseteq B$ היא שלילה של $A \subseteq B$, כלומר $\neg(\forall x (x \in A \to x \in B))$.
  - לפי שלילת כמת כולל: $\exists x \neg(x \in A \to x \in B)$.
  - לפי שלילת גרירה: $\exists x (x \in A \land x \notin B)$.

- **דוגמה:** עבור $A = \{\!\{3,4\}, 2, 3\}$
  - $\{2,3\} \subseteq A$ (כי $2 \in A$ וגם $3 \in A$).
  - $\{3,4\} \not\subseteq A$ (כי $4 \in \{3,4\}$ אבל $4 \notin A$).
  - $\{3,4\} \in A$ (כי הקבוצה $\{3,4\}$ היא איבר ב-$A$).
  - $\{2,3\} \notin A$ (כי הקבוצה $\{2,3\}$ אינה איבר ב-$A$).

---

# טרנזיטיביות ההכלה

- **הטענה:** לכל שלוש קבוצות $A, B, C$, אם $A \subseteq B$ וגם $B \subseteq C$, אז $A \subseteq C$.
  $$ (A \subseteq B \land B \subseteq C) \to A \subseteq C $$

- **הוכחה:**
  
  1.  תהיינה $A, B, C$ קבוצות המקיימות $A \subseteq B$ וגם $B \subseteq C$.

  2.  כדי להוכיח $A \subseteq C$, עלינו להראות שכל איבר ב-$A$ הוא גם איבר ב-$C$.

  3.  יהי $x$ איבר כלשהו ב-$A$, כלומר $x \in A$.

  4.  מהנתון $A \subseteq B$, נובע כי $x \in B$.

  5.  מהנתון $B \subseteq C$, נובע כי $x \in C$.
   
  6.  הראינו שאם $x \in A$ אז $x \in C$, ולכן $A \subseteq C$ כנדרש.

---

#  שוויון והכלה הדדית

- **הטענה:** לכל שתי קבוצות $A, B$, מתקיים $A=B$ אם ורק אם $A$ מוכלת ב-$B$ וגם $B$ מוכלת ב-$A$.

- **ניסוח פורמלית:**
  $$ \forall A, B (A=B \iff (A \subseteq B \land B \subseteq A)) $$

- **הוכחה:**
  - הטענה היא שקילות לוגית, ולכן נוכיח שני כיוונים:

<div  style="position: absolute; top: 22rem; left: 37rem; width: 30rem; direction: rtl; text-align: right; padding: 1rem; font-size: 1rem;">

- **כיוון ראשון ($\Rightarrow$):**
    - נניח $A=B$.
  
    - לפי הגדרת שוויון קבוצות, $\forall x (x \in A \leftrightarrow x \in B)$.
    - מכאן נובע $\forall x (x \in A \to x \in B)$, כלומר $A \subseteq B$.
    - וגם $\forall x (x \in B \to x \in A)$, כלומר $B \subseteq A$.
    - לכן, $A \subseteq B \land B \subseteq A$.
  

</div>

<div style="position: absolute; top: 22rem; left: 5rem; width: 30rem; direction: rtl; text-align: right; padding: 1rem; font-size: 1rem;">

- **כיוון שני ($\Leftarrow$):** 
    - נניח $A \subseteq B \land B \subseteq A$.
  
    - מההנחה $A \subseteq B$, נובע $\forall x (x \in A \to x \in B)$.
    - מההנחה $B \subseteq A$, נובע $\forall x (x \in B \to x \in A)$.
    - משתי הגרירות יחד, נקבל $\forall x (x \in A \leftrightarrow x \in B)$.
    - לפי הגדרת שוויון קבוצות, זה שקול ל-$A=B$.
</div>

---

# הקבוצה הריקה ויחידונים

- **קיום קבוצה ריקה:** קיימת קבוצה, שנסמנה $\emptyset$, שאין לה איברים כלל.
  $$ \forall x (x \notin \emptyset) $$

- **טענה:** הקבוצה הריקה מוכלת בכל קבוצה.
  - **הוכחה (בדרך השלילה):**
    1. נניח שקיימת קבוצה $X_0$ כך ש-$\emptyset \not\subseteq X_0$.
    2. לפי שלילת ההכלה, זה אומר שקיים איבר $x$ כך ש-$x \in \emptyset \land x \notin X_0$.
    3. אבל קיום $x \in \emptyset$ סותר את הגדרת הקבוצה הריקה. **סתירה**.
    4. לכן, ההנחה שגויה, ו-$\emptyset$ מוכלת בכל קבוצה.

- **יחידות הקבוצה הריקה:**
  - אם $R$ ו-$S$ הן שתי קבוצות ריקות, אז $R \subseteq S$ וגם $S \subseteq R$.
  - מהכלה הדדית נובע $R=S$. לכן, יש רק קבוצה ריקה אחת.

---

# יחידון

- **הגדרה (יחידון):**
  - קבוצה המכילה איבר אחד בלבד נקראת **יחידון**.
  - לדוגמה, $\{a\}$ היא הקבוצה שאיברה היחיד הוא $a$. ניתן להגדירה גם כ- $\{x \mid x=a\}$.
  - $\{ \emptyset \}$ הוא יחידון שאיברו היחיד הוא הקבוצה הריקה.

- **דוגמאות:**
  - $\emptyset \subseteq \emptyset$ (כי הקבוצה הריקה מוכלת בכל קבוצה, כולל עצמה).
  - $\emptyset \subseteq \{1\}$, אך $\emptyset \notin \{1\}$.
  - $\emptyset \notin \emptyset$ (כי שום איבר אינו שייך לקבוצה הריקה).

- **גודל קבוצה:**
  - גודל קבוצה הוא מספר האיברים שבה.
  - לדוגמה, $|\emptyset|=0$, $|\{a\}|=1$, $|\{a,b,c\}|=3$.
  - גודל קבוצה יכול להיות סופי או אינסופי (כמו $\mathbb{N}$).


<img src="/images/5.png" class="absolute top-1.8/3 right-2/3 w-60 h-45" />

<div class="katex label absolute top-2.5/3 right-2.21/3">

$|A|=5$
</div>

<img src="/images/2.png" class="absolute top-1/3 right-1.85/3 w-40 h-45" />

<div class="katex label absolute top-1.6/3 right-1.96/3">

$|A|=2$
</div>



<img src="/images/1.png" class="absolute top-.5/3 right-2.3/3 w-50 h-45" />

<div class="katex label absolute top-1.13/3 right-2.47/3">

$|A|=1$
</div>

---
section: תרגילים פתורים
---

# תרגיל: הוכיחו שכל קבוצה מוכלת בעצמה

**טענה:** לכל קבוצה $A$ מתקיים $A \subseteq A$.

**הוכחה:**

1. תהי $A$ קבוצה כלשהי.

2. כדי להוכיח $A \subseteq A$, עלינו להראות ש: $\forall x (x \in A \to x \in A)$.

3. יהי $x$ איבר כלשהו, ונניח ש-$x \in A$.

4. מההנחה נובע ישירות ש-$x \in A$ (זהו משפט טאוטולוגי: $p \to p$).

5. הראינו שאם $x \in A$ אז $x \in A$, ולכן $A \subseteq A$. ∎

---

# תרגיל: הוכיחו שהקבוצה הריקה מוכלת בכל קבוצה

**טענה:** לכל קבוצה $A$ מתקיים $\emptyset \subseteq A$.

**הוכחה (בדרך השלילה):**

1. תהי $A$ קבוצה כלשהי.

2. נניח בשלילה ש-$\emptyset \not\subseteq A$.

3. לפי הגדרת שלילת ההכלה, קיים איבר $x$ כך ש-$x \in \emptyset$ וגם $x \notin A$.

4. אבל לפי הגדרת הקבוצה הריקה, $\forall x (x \notin \emptyset)$.

5. זו סתירה להנחה שקיים $x$ כך ש-$x \in \emptyset$.

6. לכן ההנחה שגויה, ומתקיים $\emptyset \subseteq A$. ∎


---

# הוכיחו: $\emptyset \neq \{\emptyset\}$
<br>

- כדי להוכיח אי-שוויון, עלינו למצוא איבר השייך לאחת הקבוצות אך לא לשנייה.

- האיבר $\emptyset$ מקיים: $\emptyset \in \{\emptyset\}$ (הוא האיבר היחיד בקבוצה הימנית).
- לעומת זאת, $\emptyset \notin \emptyset$ (כי הקבוצה הריקה אינה מכילה איברים).
- מצאנו איבר כזה, ולכן הקבוצות שונות.

---

# הוכיחו: $\{\emptyset\} \neq \{\!\{\emptyemptyset\}\!\}$

## הוכחה א' (בדרך השלילה):
- נניח בשלילה ש- $\{\emptyset\} = \{\!\{\emptyset\}\!\}$.

- שתי הקבוצות הן יחידונים. שוויון ביניהן גורר שוויון בין איבריהן היחידים.
- מכאן, $\emptyset = \{\emptyset\}$, וזו סתירה למה שהוכחנו בתרגיל 1.
  
<br>


## הוכחה ב' (ישירה):
      
- האיבר $\emptyset$ שייך לקבוצה השמאלית, $\emptyset \in \{\emptyset\}$.

- האיבר $\emptyset$ אינו שייך לקבוצה הימנית, כי איברה היחיד הוא $\{\emptyset\}$, ו-$\emptyset \neq \{\emptyset\}$.
- מצאנו איבר המבדיל בין הקבוצות, ולכן הן שונות.

---

# הוכיחו: $\{\emptyset\} \subseteq \{\emptyset, \{\emptyset\}\}$

<br>

- **הוכחה:** עלינו להוכיח הכלה ואי-שוויון.

- **הכלה:** יהי $x \in \{\emptyset\}$. מכאן $x=\emptyset$. האיבר $\emptyset$ נמצא גם בקבוצה הימנית, ולכן $\{\emptyset\} \subseteq \{\emptyset, \{\emptyset\}\,\}$.

- **אי-שוויון:** האיבר $\{\emptyset\}$ נמצא בקבוצה הימנית, אך אינו נמצא בקבוצה השמאלית (שאיברה היחיד הוא $\emptyset$). לכן הקבוצות אינן שוות.

- מכיוון שההכלה מתקיימת אך השוויון לא, ההכלה היא ממש.

<!-- ############################################################################s -->

---
section: פעולות על קבוצות
---
# פעולות בוליאניות על קבוצות

- **איחוד ($\cup$):** הקבוצה שמכילה את כל האיברים השייכים לפחות לאחת מהקבוצות.
  <div class="formula-box">

  $$A \cup B = \{ x \mid x \in A \lor x \in B \}$$
  </div>

- **חיתוך ($\cap$):** הקבוצה שמכילה את כל האיברים השייכים לשתי הקבוצות.
  <div class="formula-box">
  
  $$ A \cap B = \{ x \mid x \in A \land x \in B \} $$
  </div>

- **הפרש ($\setminus$):** הקבוצה שמכילה את כל האיברים השייכים לקבוצה הראשונה אך לא לשנייה.
  <div class="formula-box">
  
  $$ A \setminus B = \{ x \mid x \in A \land x \notin B \} $$
  </div>

- **הפרש סימטרי ($\Delta$):** הקבוצה שמכילה את כל האיברים השייכים בדיוק לאחת מהקבוצות.
  <div class="formula-box">
  
  $$ A \Delta B = \{ x \mid (x \in A \land x \notin B) \lor (x \notin A \land x \in B) \} $$
  </div>

<style>
.formula-box {
  border: 2px solid #dbd4f3ff;
  background-color: #e2dfeeff;
  /* padding: 0.1rem .1rem; */
  border-radius: 10px;
  margin-top: -3px;
  margin-bottom: -1px; 
  direction: ltr; 
  width: fit-content;
  padding: 0rem 1rem;
  margin-left: auto;
  margin-right: auto;
}
</style>

---

# דוגמה: $A = \{1, 2, \emptyset\}$, $B = \{1, \{2\}\}$,  $C = \{3, \emptyset\}$

- **איחוד ($\cup$):** לוקחים את איברי קבוצה אחת ומוסיפים את איברי הקבוצה השנייה.
  - $A \cup B = \{1, 2, \emptyset, \{2\}\}$
  - $A \cup C = \{1, 2, \emptyset, 3\}$

- **חיתוך ($\cap$):** לוקחים את האיברים המשותפים לשתי הקבוצות.
  - $A \cap B = \{1\}$
  - $A \cap C = \{\emptyset\}$
  - $B \cap C = \emptyset$. כאשר החיתוך הוא הקבוצה הריקה, נאמר שהקבוצות **זרות**.

- **הפרש ($\setminus$):** לוקחים את איברי הקבוצה השמאלית ומוציאים את איברי הקבוצה הימנית.
  - שימו לב: בדרך כלל $A \setminus B \neq B \setminus A$.
  - $A \setminus B = \{2, \emptyset\}$
  - $B \setminus A = \{\!\{2\}\!\}$

<img src="/images/venn.png" class="absolute top-1/3 right-1.8/3 w-90 h-80" />

---
layout: two-cols-header
---

# תכונות של פעולות על קבוצות

לכל שלוש קבוצות $A, B, C$ מתקיים:

::left::

**אידמפוטנטיות:**
- $A \cup A = A$
- $A \cap A = A$

**פעולות עם הקבוצה הריקה:**
- $A \cup \emptyset = A \setminus \emptyset =A$
- $A \cap \emptyset = A \setminus A = \emptyset$

**חוק החילוף (קומוטטיביות):**
- $A \cup B = B \cup A$
- $A \cap B = B \cap A$

::right::

**חוק הקיבוץ (אסוציאטיביות):**
- $A \cup (B \cup C) = (A \cup B) \cup C$
- $A \cap (B \cap C) = (A \cap B) \cap C$

**חוק הפילוג (דיסטריבוטיביות):**
- $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$
- $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$

**חוקי דה מורגן:**
- $A \setminus (B \cap C) = (A \setminus B) \cup (A \setminus C)$
- $A \setminus (B \cup C) = (A \setminus B) \cap (A \setminus C)$


---

# הוכחה באמצעות טבלת כל המצבים האפשריים

**נוכיח את כלל דה מורגן הראשון**: $A \setminus (B \cap C) = (A \setminus B) \cup (A \setminus C)$.

ההוכחה מתבססת על בדיקת כל 8 המצבים האפשריים עבור שייכות של איבר $x$ לקבוצות $A, B, C$:

| $x \in A$ | $x \in B$ | $x \in C$ | $x \in B \cap C$ | $x \in A \setminus (B \cap C)$ | $x \in A \setminus B$ | $x \in A \setminus C$ | $x \in (A \setminus B) \cup (A \setminus C)$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| T | T | T | T | F | F | F | F |
| T | T | F | F | T | F | T | T |
| T | F | T | F | T | T | F | T |
| T | F | F | F | T | T | T | T |
| F | T | T | T | F | F | F | F |
| F | T | F | F | F | F | F | F |
| F | F | T | F | F | F | F | F |
| F | F | F | F | F | F | F | F |

<br>

מאחר והעמודות עבור 
$x \in A \setminus (B \cap C)$ ו-$x \in (A \setminus B) \cup (A \setminus C)$ זהות, 
 לפי הגדרת שוויון קבוצות, הקבוצות שוות.

<style>
.slidev-layout table {
  font-size: 0.8em;
  border-collapse: collapse;
  margin: 0 auto;
  width: fit-content;
}

.slidev-layout th,
.slidev-layout td {
  padding: 3px 10px;
  border: 1px solid #ccc;
}

.slidev-layout th {
  border-bottom: 2px solid #888;
}

/* Add a thicker vertical line after the input columns */
.slidev-layout th:nth-child(3),
.slidev-layout td:nth-child(3) {
  border-right: 2px solid #888;
}

/* Highlight the columns to be compared */
.slidev-layout th:nth-child(5),
.slidev-layout td:nth-child(5),
.slidev-layout th:nth-child(8),
.slidev-layout td:nth-child(8) {
  background-color: #eef;
  border-color: #99d;
}
</style>

---

# הוכחה באמצעות שקילויות לוגיות

 כלל דה-מורגן הראשון: $A \setminus (B \cap C) = (A \setminus B) \cup (A \setminus C)$.

- נראה כי $x \in A \setminus (B \cap C)$ אם ורק אם $x \in (A \setminus B) \cup (A \setminus C)$.

  - יהי $x$ איבר כלשהו. אזי:

    - $x \in A \setminus (B \cap C)$  **אם ורק אם** $x \in A \land x \notin (B \cap C)$ (לפי הגדרת ההפרש)
    
    - ... **אם ורק אם** $x \in A \land (x \notin B \lor x \notin C)$ (לפי חוקי דה-מורגן)
    - ... **אם ורק אם** $(x \in A \land x \notin B) \lor (x \in A \land x \notin C)$ (לפי אסוציאטיביות של "או")
    - ... **אם ורק אם** $x \in (A \setminus B) \lor x \in (A \setminus C)$ (לפי הגדרת ההפרש)
    - ... **אם ורק אם** $x \in (A \setminus B) \cup (A \setminus C)$ (לפי הגדרת האיחוד)
  
  - הראינו ש-$x$ שייך לאגף שמאל אם ורק אם הוא שייך לאגף ימין, ולכן הקבוצות שוות.  

<svg class="absolute top-0 left-0 w-full h-full pointer-events-none">
  <defs>
    <marker id="arrowhead1" viewBox="0 0 10 10" refX="3" refY="5"
        markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#cad0dcff"></path>
    </marker>
  </defs>

  <path d="M 380 430 C 200 380, 0 200, 470 145" stroke="#bec4cfff" stroke-width="2" fill="none" marker-end="url(#arrowhead1)" />
</svg>





---

# הוכחת כלל דה-מורגן: $A \setminus (B \cap C) = (A \setminus B) \cup (A \setminus C)$


  <!-- Define reusable SVG elements -->
<svg width="0" height="0" >
  <defs>
    <circle id="A" cx="50" cy="50" r="50"/>
    <circle id="B" cx="100" cy="50" r="50"/>
    <circle id="C" cx="75" cy="100" r="50"/>
    <g id="base-sets">
      <use href="#A" fill="none" stroke="#3d3113ff" stroke-width="2"/>
      <use href="#B" fill="none" stroke="#333" stroke-width="2"/>
      <use href="#C" fill="none" stroke="#333" stroke-width="2"/>
    </g>
    <clipPath id="cA">
      <use href="#A"/>
    </clipPath>
    <clipPath id="cB">
      <use href="#B"/>
    </clipPath>
    <clipPath id="cC">
      <use href="#C"/>
    </clipPath>
    <mask id="notA" maskUnits="userSpaceOnUse">
      <rect x="0" y="0" width="420" height="260" fill="white"/>
      <use href="#A" fill="black"/>
    </mask>
    <mask id="notB" maskUnits="userSpaceOnUse">
       <rect x="0" y="0" width="420" height="260" fill="white"/>
       <use href="#B" fill="black"/>
     </mask>
    <mask id="notC" maskUnits="userSpaceOnUse">
      <rect x="0" y="0" width="420" height="260" fill="white"/>
      <use href="#C" fill="black"/>
    </mask>
  </defs>
</svg>






<div class="grid grid-cols-[10fr_auto_1fr] gap-10" style="width: 100%; margin-top: -90px;">

<div class="grid grid-cols-3 grid-rows-2 gap-0" style="scale:.6;width:400px;margin:auto">


  <div style="width:420px;margin:auto">
    <svg viewBox="-10 -10 170 170" width="50%" height="100%" aria-label="Venn A \ B">    
      <use href="#A" fill="orange" stroke="#333" stroke-width="2"/>
      <use href="#C" fill="white" stroke="none"/>
      <use href="#base-sets"/>
  </svg>

  <div class="katex label" style="position:relative;right:70px;font-size:2rem;color:#111">

  $A \setminus C$
  </div>

  </div>

  <div style="width:420px;margin:auto">
  </div>

  <div style="width:420px;margin:auto">
    <svg viewBox="-10 -10 170 170" width="50%" height="100%" aria-label="Venn A \ B">
      <use href="#A" fill="orange" stroke="#333" stroke-width="2"/>
      <use href="#B" fill="white" stroke="none"/>
      <use href="#base-sets"/> 
    </svg>

  <div class="katex label" style="position:relative;right:70px;font-size:2rem;color:#111">

  $A \setminus B$
  </div>
  
  </div>



  <div style="width:420px;margin:auto">
  </div>


<div style="width:420px;margin:auto">
  <svg viewBox="-10 -10 170 170" width="50%" height="100%" aria-label="Venn A \ B">
    <!-- fill A, then erase the intersection B∩C by clipping a white rectangle -->
    <use href="#A" fill="orange" stroke="#333" stroke-width="2"/>
    <!-- erase area B ∩ C -->
    <g clip-path="url(#cB)">
      <g clip-path="url(#cC)">
        <rect x="-10" y="-10" width="420" height="260" fill="white"/>
      </g>
    </g>
    <use href="#base-sets"/> 
 </svg>

<div class="katex label" style="position:relative;right:0px;font-size:2rem;color:#111">

  $(A \setminus B) \cup (A \setminus C)$
  </div>

</div>

</div>

<div class="w-10px h-96 bg-gray-300 self-center"></div>

  <div class="grid grid-cols-3 grid-rows-2 gap-0" style="scale:.6;width:400px;margin:0 0 0 0">

  <div style="width:420px;margin:auto">
    <svg viewBox="-10 -10 170 170" width="50%" height="100%" aria-label="Venn A \ B">
    <g clip-path="url(#cC)">
      <g clip-path="url(#cB)">
        <rect x="0" y="0" width="420" height="260"  fill="orange"stroke="#333" stroke-width="2"/>
      </g>
    </g>
    <use href="#base-sets"/>
  </svg>

<div class="katex label" style="position:relative;right:70px;font-size:2rem;color:#111">

$B \cap  C$
</div>


  </div>

  <div style="width:420px;margin:auto">
  </div>

  <div style="width:420px;margin:auto">
    <svg viewBox="-10 -10 170 170" width="50%" height="100%" aria-label="Venn A \ B">    
      <use href="#A" fill="orange" stroke="#333" stroke-width="2"/>
      <use href="#base-sets"/>
  </svg>


<div class="katex label" style="position:relative;right:100px;font-size:2rem;color:#111">

$A$
</div>

  </div>



  <div style="width:420px;margin:auto">
  </div>


<div style="width:420px;margin:auto">
  <svg viewBox="-10 -10 170 170" width="50%" height="100%" aria-label="Venn A \ B">
    <!-- fill A, then erase the intersection B∩C by clipping a white rectangle -->
    <use href="#A" fill="orange" stroke="#333" stroke-width="2"/>
    <!-- erase area B ∩ C -->
    <g clip-path="url(#cB)">
      <g clip-path="url(#cC)">
        <rect x="-10" y="-10" width="420" height="260" fill="white"/>
      </g>
    </g>
    <!-- outlines on top -->
    <use href="#base-sets"/>
 </svg>


<div class="katex label" style="position:relative;right:30px;font-size:2rem;color:#111">

$A \setminus  (B \cap C)$
</div>


</div>


</div>
</div>



<!-- ########################################################################################### -->

---
section: הפרש סימטרי
---

# טענה: $A \Delta B = (A\cup B)\setminus(A\cap B)$

<div class="katex label" style="position:relative;right:0px;font-size:1rem;color:#111">

  
$$
\begin{aligned}
x \in A \Delta B 
&\iff (x \in A \land x \notin B) \lor (x \notin A \land x \in B) &&\text{(הגדרת הפרש סימטרי)}\\[1em]
&\iff \big((x\in A\land x\notin B)\lor x\notin A\big)\land\big((x\in A\land x\notin B)\lor x\in B\big) &&\text{(דיסטריבוטיביות)}\\[1em]
&\iff \big((x\in A)\lor(x\notin A)\big)\land\big((x\notin B)\lor(x\notin A)\big)\land\big((x\in A)\lor(x\in B)\big)\land\big((x\notin B)\lor(x\in B)\big) &&\text{(פיצול)}\\[1em]
&\iff \big((x\notin B)\lor(x\notin A)\big)\land\big((x\in A)\lor(x\in B)\big) &&\text{(הסרת טאוטולוגיות)}\\[1em]
&\iff \big((x\notin A)\lor(x\notin B)\big)\land\big((x\in A)\lor(x\in B)\big) &&\text{(קומוטטיביות)}\\[1em]
&\iff \neg\big((x\in A)\land(x\in B)\big)\land\big((x\in A)\lor(x\in B)\big) &&\text{(דה־מורגן)}\\[1em]
&\iff \big((x\in A)\lor(x\in B)\big)\land\neg\big((x\in A)\land(x\in B)\big) &&\text{(החלפת סדר)}\\[1em]
&\iff x\in(A\cup B)\land x\notin(A\cap B) &&\text{(הגדרות איחוד וחיתוך)}\\[1em]
&\iff x\in(A\cup B)\setminus(A\cap B) &&\text{(הגדרת הפרש)}
\end{aligned}
$$

</div>

<!-- ---

# הוכחה אלגברית: $A \Delta B = (A\cup B)\setminus(A\cap B)$

**הוכחה באמצעות תכונות פעולות על קבוצות:**

נתחיל מההגדרה $A \Delta B = (A\setminus B)\cup(B\setminus A)$ ונוכיח שהיא שווה ל-$(A\cup B)\setminus(A\cap B)$.

$$
\begin{aligned}
A \Delta B 
&= (A\setminus B)\cup(B\setminus A) &&\text{(הגדרה)}\\[0.5em]
&= (A\cap B^c)\cup(B\cap A^c) &&\text{(הפרש כחיתוך עם משלים)}\\[0.5em]
&= \big((A\cap B^c)\cup B\big)\cap\big((A\cap B^c)\cup A^c\big) &&\text{(דיסטריבוטיביות)}\\[0.5em]
&= \big((A\cup B)\cap(B^c\cup B)\big)\cap\big((A\cup A^c)\cap(B^c\cup A^c)\big) &&\text{(דיסטריבוטיביות)}\\[0.5em]
&= (A\cup B)\cap(B^c\cup A^c) &&\text{(הסרת טאוטולוגיות: }X\cup X^c=U\text{)}\\[0.5em]
&= (A\cup B)\cap(A\cap B)^c &&\text{(דה־מורגן: }A^c\cup B^c=(A\cap B)^c\text{)}\\[0.5em]
&= (A\cup B)\setminus(A\cap B) &&\text{(הגדרת הפרש)}
\end{aligned}
$$

**מסקנה:** שתי ההגדרות שקולות, וניתן להשתמש בכל אחת מהן לפי הנוחות. -->

---

# טענה: $A \Delta B = (A\setminus B)\cup(B\setminus A)$

<div class="katex label" style="position:relative;right:0px;font-size:1rem;color:#111">

$$
\begin{aligned}
x \in A \Delta B 
&\iff (x \in A \land x \notin B) \lor (x \notin A \land x \in B) &&\text{(הגדרת הפרש סימטרי)}\\[1em]
&\iff \big(x\in A\land x\notin B\big) \lor \big(x\notin A\land x\in B\big) &&\text{(פישוט)}\\[1em]
&\iff \big(x\in A\setminus B\big) \lor \big(x\in B\setminus A\big) &&\text{(הגדרת הפרש)}\\[1em]
&\iff x\in (A\setminus B)\cup(B\setminus A) &&\text{(הגדרת איחוד)}
\end{aligned}
$$

</div>


- **קיבלנו הגדרות שקולות של הפרש סימטרי:**
  - $A \Delta B = \{ x \mid (x \in A \land x \notin B) \lor (x \notin A \land x \in B) \}$
  - $A \Delta B = (A \setminus B) \cup (B \setminus A)$
  - $A \Delta B = (A \cup B) \setminus (A \cap B)$

- ניתן להשתמש בכל אחת מההגדרות לפי הנוחות.


<img src="/images/הפרש סימטרי.png" class="absolute top-1.6/3 right-1.8/3 w-70 h-60" />

---
section: קבוצת החזקה
---

# קבוצת החזקה

- **הגדרה:** בהנתן קבוצה $A$, **קבוצת החזקה** של $A$, המסומנת $P(A)$ או $\mathcal{P}(A)$, היא קבוצה שאיבריה הם **כל תת-הקבוצות** של $A$.

- **הגדרה פורמלית:**
  <div class="formula-box">
  
  $$ P(A) = \{ X \mid X \subseteq A \} $$
  </div>

- **תכונה מרכזית:** לכל קבוצה $X$, מתקיים:
  $$ X \in P(A) \iff X \subseteq A $$

- **הערה:** קבוצת החזקה היא **פעולה אונרית** (פעולה על קבוצה אחת), בניגוד לאיחוד, חיתוך והפרש שהן **פעולות בינאריות** (פעולות על שתי קבוצות).

---

# דוגמאות לקבוצת חזקה

**שאלה:** מהן הקבוצות $P(\emptyset)$ ו-$P(\{\emptyset\})$?

**תשובה:**

1. **$P(\emptyset)$:**
   - הקבוצה היחידה המוכלת ב-$\emptyset$ היא $\emptyset$ עצמה (כי $\emptyset \subseteq \emptyset$).
   - לכן: $P(\emptyset) = \{\emptyset\}$

2. **$P(\{\emptyset\})$:**
   - הקבוצה $\{\emptyset\}$ היא יחידון.
   - תת-הקבוצות של $\{\emptyset\}$ הן:
     - הקבוצה הריקה: $\emptyset \subseteq \{\emptyset\}$
     - הקבוצה עצמה: $\{\emptyset\} \subseteq \{\emptyset\}$
   - לכן: $P(\{\emptyset\}) = \{\emptyset, \{\emptyset\}\}$

<div class="absolute top-3/4 left-1/20 w-160" style="transform: translateY(-60%);">
  <svg viewBox="-50 0 250 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Outer ellipse representing {\emptyset} -->
    <ellipse cx="75" cy="50" rx="80" ry="45" fill="none" stroke="#0000ff" stroke-width="2"/>
    <!-- Inner ellipse representing \emptyset -->
    <ellipse cx="77" cy="50" rx="58" ry="37" fill="none" stroke="#a4a4a4" stroke-width="2"/>
    <!-- Point -->
    <circle cx="42" cy="53" r="2.5" fill="#0050ef"/>
    <!-- Small ellipse -->
    <ellipse cx="99" cy="53" rx="20" ry="13" fill="none" stroke="#a4a4a4" stroke-width="2"/>
    <!-- Math text as SVG text element -->
    <text x="83" y="40" font-size="2" text-anchor="middle" fill="#a4a4a4" font-family="serif">∅</text>
    <text x="42" y="43" font-size="2" text-anchor="middle" fill="#0000ff" font-family="serif">{∅}</text>
    <text x="17" y="30" font-size="2" text-anchor="middle" fill="#a4a4a4" font-family="serif">&#123;&#123;∅&#125;&#125;</text>
    <text x="10" y="13" font-size="2" text-anchor="middle" fill="#0000ff" font-family="serif">&#123;&#123;∅&#125;&#125;</text>
  </svg>
</div>

---

# דוגמאות נוספות לקבוצת חזקה

**דוגמה 1:** $A = \{1, 2\}$

תת-הקבוצות של $A$ הן $\emptyset$, $\{1\}$, $\{2\}$, ו-$\{1, 2\}$.

לכן: $P(\{1, 2\}) = \{\emptyset, \{1\}, \{2\}, \{1, 2\}\}$

<br>

**דוגמה 2:** $B = \{a, b, c\}$

$P(B) = \{\emptyset, \{a\}, \{b\}, \{c\}, \{a,b\}, \{a,c\}, \{b,c\}, \{a,b,c\}\}$

<br>

**באופן כללי:** אם $|A| = n$ (כלומר, $A$ מכילה $n$ איברים), אז $|P(A)| = 2^n$.


<div class="absolute top-1.7/4 left-1/20 w-160" style="transform: translateY(-60%);">
  <svg viewBox="-50 0 250 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Outer ellipse representing {1,2} -->
    <ellipse cx="62" cy="53" rx="50" ry="30" fill="none" stroke="#0000ff" stroke-width="2"/>
    <!-- Inner ellipse representing {1,2} -->
    <ellipse cx="62" cy="53" rx="40" ry="20" fill="none" stroke="#a4a4a4" stroke-width="2"/>
    <!-- Inner ellipse representing {1} -->
    <circle cx="62" cy="53" r="8" fill="none" stroke="#a4a4a4" stroke-width="2"/>
    <circle cx="42" cy="53" r="8" fill="none" stroke="#a4a4a4" stroke-width="2"/>
    <!-- Points -->
    <circle cx="62" cy="53" r="2.5" fill="#0050ef"/>
    <circle cx="42" cy="53" r="2.5" fill="#0050ef"/>
    <!-- Small ellipse -->
    <ellipse cx="82" cy="53" rx="8" ry="8" fill="none" stroke="#a4a4a4" stroke-width="2"/>
    <!-- Math text as SVG text element -->
    <!-- <text x="83" y="40" font-size="2" text-anchor="middle" fill="#a4a4a4" font-family="serif">∅</text>
    <text x="42" y="43" font-size="2" text-anchor="middle" fill="#0000ff" font-family="serif">{∅}</text>
    <text x="17" y="30" font-size="2" text-anchor="middle" fill="#a4a4a4" font-family="serif">&#123;&#123;∅&#125;&#125;</text>
    <text x="10" y="13" font-size="2" text-anchor="middle" fill="#0000ff" font-family="serif">&#123;&#123;∅&#125;&#125;</text> -->
  </svg>
</div>



<div class="absolute top-3.2/4 left-.8/4 w-60" style="transform: translateY(-60%);">
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Outer ellipse representing {1,2} -->
    <!-- <ellipse cx="62" cy="53" rx="50" ry="30" fill="none" stroke="#0000ff" stroke-width="2"/> -->
    <!-- Inner ellipse representing {1,2} -->
    <ellipse cx="32" cy="38" rx="11" ry="30" fill="none" stroke="#a4a4a4" stroke-width="1" transform="rotate(30 32 38)"/>        
    <ellipse cx="52" cy="38" rx="11" ry="30" fill="none" stroke="#a4a4a4" stroke-width="1" transform="rotate(-30 52 38)"/>        
    <ellipse cx="42" cy="53" rx="11" ry="30" fill="none" stroke="#a4a4a4" stroke-width="1" transform="rotate(90 42 53)"/>        
    <!-- Inner ellipse representing {1} -->
    <circle cx="62" cy="53" r="5" fill="none" stroke="#a4a4a4" stroke-width="1"/>
    <circle cx="42" cy="23" r="5" fill="none" stroke="#a4a4a4" stroke-width="1"/>
    <circle cx="22" cy="53" r="5" fill="none" stroke="#a4a4a4" stroke-width="1"/>
    <!-- Points -->
    <circle cx="62" cy="53" r="2.5" fill="#0050ef"/>
    <circle cx="42" cy="23" r="2.5" fill="#0050ef"/>
    <circle cx="22" cy="53" r="2.5" fill="#0050ef"/>
    <!-- {a,b,c} ellipse -->
    <circle cx="42" cy="44" r="35" fill="none" stroke="#a4a4a4" stroke-width="1"/>
    <circle cx="42" cy="44" r="40" fill="none" stroke="#0050ef" stroke-width="2"/>
    <!-- Math text as SVG text element -->
    <!-- <text x="83" y="40" font-size="2" text-anchor="middle" fill="#a4a4a4" font-family="serif">∅</text>
    <text x="42" y="43" font-size="2" text-anchor="middle" fill="#0000ff" font-family="serif">{∅}</text>
    <text x="17" y="30" font-size="2" text-anchor="middle" fill="#a4a4a4" font-family="serif">&#123;&#123;∅&#125;&#125;</text>
    <text x="10" y="13" font-size="2" text-anchor="middle" fill="#0000ff" font-family="serif">&#123;&#123;∅&#125;&#125;</text> -->
  </svg>
</div>



---

#   $A \subseteq B$ אם ורק אם $P(A) \subseteq P(B)$

**פתרון:** נשים לב שאנו מתבקשים להוכיח טענה שהמבנה הלוגי שלה הוא $\alpha \leftrightarrow \beta$.

נזכיר שטענה כזו שקולה לקוניונקציה: $(\alpha \to \beta) \land (\beta \to \alpha)$. כלומר עלינו להוכיח שתי טענות גרירה: כיוון אחד $\alpha \to \beta$ וכיוון שני $\beta \to \alpha$.

<br>

**כיוון ראשון:** יש להוכיח שלכל שתי קבוצות $A, B$ אם $A \subseteq B$ אז $P(A) \subseteq P(B)$.

**הוכחה:** יהיו $A, B$ שתי קבוצות ונניח כי $A \subseteq B$. עלינו להראות $P(A) \subseteq P(B)$. תהי $X$ קבוצה כך ש $X \in P(A)$. מהגדרת קבוצת החזקה נסיק כי $X \subseteq A$. מאחר והנחנו כי $A \subseteq B$, אזי מטרנזיטיביות יחס ההכלה נסיק כי $X \subseteq B$ ומהגדרת קבוצת החזקה נקבל ש- $X \in P(B)$.

<br>

**כיוון שני:** יש להוכיח שלכל שתי קבוצות $A, B$ אם $P(A) \subseteq P(B)$ אז $A \subseteq B$.

**הוכחה:** יהיו $A, B$ שתי קבוצות ונניח כי $P(A) \subseteq P(B)$. עלינו להראות $A \subseteq B$. יהי $x$ איבר ונניח כי $x \in A$. לכן היחידון $\{x\} \subseteq A$ ומהגדרת קבוצת החזקה $\{x\} \in P(A)$. מאחר והנחנו $P(A) \subseteq P(B)$, נסיק כי $\{x\} \in P(B)$. מהגדרת קבוצת החזקה נקבל כי $\{x\} \subseteq B$ ולכן $x \in B$.


---

# האם ניתן להחליף בשקף הקודם את סימן ההכלה בסימן השיוויון?

- האם נכונה הטענה שלכל שתי קבוצות $A, B$ מתקיים: $A = B$ אם ורק אם $P(A) = P(B)$?

<span v-click="1">

-  **תשובה:** 

     - נזכיר ששוויון קבוצות מוגדר כך: 
      
     $$A = B \iff A \subseteq B \land B \subseteq A$$

     - לכן, לפי הטענה שהוכחה בשקף הקודם, מתקיים:
       $$\begin{aligned}
       A = B &\iff A \subseteq B \land B \subseteq A\\[1em]
       &\iff P(A) \subseteq P(B) \land P(B) \subseteq P(A)\\[1em]
       &\iff P(A) = P(B)
       \end{aligned}$$

</span>

---
layout: two-cols-header
---
# $P(A \cap B) = P(A) \cap P(B)$


נוכיח הכלה בשני הכיוונים:

<br>



::left::


- **כיוון ראשון ($\subseteq$):**
  - תהי $X \in P(A \cap B)$.
 
  - לפי הגדרת קבוצת החזקה, $X \subseteq A \cap B$.
  - לפי הגדרת חיתוך, $X \subseteq A$ ו-$X \subseteq B$.
  - לכן, $X \in P(A)$ ו-$X \in P(B)$.
  - לפי הגדרת חיתוך, $X \in P(A) \cap P(B)$.

::right::

- **כיוון שני ($\supseteq$):**
  - תהי $X \in P(A) \cap P(B)$.
  
  - לפי הגדרת חיתוך, $X \in P(A)$ ו-$X \in P(B)$.
  - לפי הגדרת קבוצת החזקה, $X \subseteq A$ ו-$X \subseteq B$.
  - לפי הגדרת חיתוך, $X \subseteq A \cap B$.
  - לכן, $X \in P(A \cap B)$.

---

# האם מתקיים גם $P(A \cup B) = P(A) \cup P(B)$?

<span v-click="1">

- **הפרכה:** ניקח $A = \{1\}$, $B = \{2\}$. אז $A \cup B = \{1,2\}$.
   - $P(A \cup B) = \{\emptyset, \{1\}, \{2\}, \{1,2\}\}$.
   - $P(A) \cup P(B) = \{\emptyset, \{1\}\} \cup \{\emptyset, \{2\}\} = \{\emptyset, \{1\}, \{2\}\}$.
   - ברור ש-$\{1,2\} \in P(A \cup B)$ אך $\{1,2\} \notin P(A) \cup P(B)$.

- הטענה על איחוד נכונה כאשר $A \subseteq B$ או $B \subseteq A$.
  - **הוכחה:** נניח $A \subseteq B$. יש להראות $P(A \cup B) = P(A) \cup P(B)$.

    - **כיוון ראשון ($\subseteq$):** תהי $X \in P(A \cup B)$. אז $X \subseteq A \cup B$. אם $X \subseteq A$, אז $X \in P(A) \subseteq P(A) \cup P(B)$. אם $X \not\subseteq A$, אז יש $x \in X$ עם $x \notin A$, אך $x \in A \cup B$, ולכן $x \in B$. מאחר ו-$X \subseteq A \cup B$ ו-$A \subseteq B$, אז $X \subseteq B$, ולכן $X \in P(B) \subseteq P(A) \cup P(B)$.

    - **כיוון שני ($\supseteq$):** תהי $X \in P(A) \cup P(B)$. אם $X \in P(A)$, אז $X \subseteq A \subseteq A \cup B$, ולכן $X \in P(A \cup B)$. אם $X \in P(B)$, אז $X \subseteq B \subseteq A \cup B$, ולכן $X \in P(A \cup B)$.

    - המקרה כאשר $B \subseteq A$ דומה.

</span>

---
section: פעולות אונריות 
---


# הרחבת איחוד וחיתוך לאוספים כלליים של קבוצות

- תהי $X$ קבוצה שאבריה קבוצות, אז נגדיר את האיחוד האונרי של $X$ להיות הקבוצה:
    
     $$\bigcup X = \{ a \mid \exists A \in X (a \in A) \}$$
  - כלומר $a \in \bigcup X$ אם ורק אם יש ב-$X$ איבר $A$ כך ש-$a \in A$. במילים פשוטות, $\bigcup X$ הוא אוסף האיברים הנמצאים באיזושהי קבוצה של $X$.
  - התנאי $\exists A \in X (a \in A)$ המופיע בהגדרת $\bigcup X$ הוא צורת כתיבה מקוצרת עבור $\exists A (A \in X \land a \in A)$.

<br>  


- תהי $X$ קבוצה לא ריקה שאבריה קבוצות, אז נגדיר את החיתוך האונרי של $X$ להיות הקבוצה:
  $$\bigcap X = \{ a \mid \forall A \in X (a \in A) \}$$
  - ההגדרה של חיתוך אונרי התקבלה מהגדרת איחוד אונרי על ידי החלפת הכמת הישי בכמת הכולל.
  - $\bigcap X$ הוא אוסף האיברים המשותפים לכל הקבוצות של $X$.
  - התנאי $\forall A \in X (a \in A)$ אשר מופיע בהגדרת $\bigcap X$ הוא צורת כתיבה מקוצרת עבור $\forall A (A \in X \to a \in A)$.

- **דגש חשוב:** אם $X = \emptyset$, אז $\bigcup \emptyset = \emptyset$, אך $\bigcap \emptyset$ אינו מוגדר (כי אין תנאי שכל איבר מקיים).

---

# דוגמאות לאיחוד וחיתוך אונריים


- $\bigcup \emptyset = \emptyset$ (אך, כאמור, $\bigcap \emptyset$ אינו מוגדר).

- לכל קבוצה $A$ מתקיים $\bigcup \{A\} = A$ ו-$\bigcap \{A\} = A$, ובפרט: $\bigcup \{\emptyset\} = \emptyset$ ו-$\bigcap \{\emptyset\} = \emptyset$.

- לכל שתי קבוצות $A, B$ מתקיים: $\bigcup \{A, B\} = A \cup B$ ו-$\bigcap \{A, B\} = A \cap B$.


- עבור $X = \{\,\{1,3\}, \{2,3,7\}, \{1,2,6,7\}, \{3\}\}$ נקבל: $\bigcap X = \emptyset$, $\bigcup X = \{1,2,3,6,7\}$.

- עבור $Y = \{\,\{1,3,7\}, \{2,3,7\}, \{1,2,6,7\}, \{3,7\}\}$ נקבל: $\bigcap Y = \{7\}$, $\bigcup Y = \{1,2,3,6,7\}$.

- $\bigcap(A) \subseteq \bigcup(A)$ לכל $A$.

---

# תרגיל לדוגמה

- הוכיחו או הפריכו:
  
  - לכל שתי קבוצות (של קבוצות) $X, Y$ אם $X \subseteq Y$ אז $\bigcup X \subseteq \bigcup Y$.

<v-switch>
<template #0> 
  <img src="/images/הוכיחו_הפריכו.png" class="absolute top-1.2/3 right-1/10 w-70 h-70" />
  <img src="/images/הוכיחו_הפריכו_סטודנטית.png" class="absolute top-1.2/3 right-5/10 w-70 h-70" />
</template>

<template #1> 

- **הוכחה:**
  - נניח כי $X \subseteq Y$ ויהי $a$ כלשהוא כך ש $a \in \bigcup X$.
  
  - מהגדרת איחוד אונרי קיים $A \in X$ כך ש $a \in A$.

  - מאחר ו-$X \subseteq Y$ הרי ש $A \in Y$.

  - קיבלנו שקיימת קבוצה $A \in Y$ כך ש $a \in A$ ומהגדרת איחוד אונרי $a \in \bigcup Y$.

</template>
</v-switch>


---

# תרגיל לדוגמה

- הוכיחו או הפריכו:

  - לכל שתי קבוצות (של קבוצות) $X, Y$ אם $X \subsetneqq  Y$ אז $\bigcup X \subsetneqq  \bigcup Y$.

<v-switch>
<template #0> 
  <img src="/images/הוכיחו_הפריכו.png" class="absolute top-1.2/3 right-1/10 w-70 h-70" />
  <img src="/images/הוכיחו_הפריכו_סטודנטית.png" class="absolute top-1.2/3 right-5/10 w-70 h-70" />
</template>

<template #1> 

- **הפרכה:**
  - כדי להפריך את הטענה יש להראות ששלילתה מתקיימת.
  - שלילת טענה כוללת, היא כזכור טענת קיום, לכן עלינו למצוא עדים לקיומה.
  - עדות לקיומה של השלילה, נקראת דוגמה נגדית.
  - שלילת הטענה המופיעה בתרגיל היא: קיימות קבוצות $X, Y$ כך ש-$X \subsetneqq  Y$ וגם $\neg(\bigcup X \subsetneqq  \bigcup Y)$.
  - (שימו לב: $\neg(\bigcup X \subsetneqq  \bigcup Y) \equiv \neg(\bigcup X \subseteq \bigcup Y \land \bigcup X \neq \bigcup Y) \equiv \bigcup X \not\subseteq \bigcup Y \lor \bigcup X = \bigcup Y$)

  - דוגמה נגדית: $X = \{\{1\}\}, Y = \{\{1\}, \emptyset\}$.  
  - כאן $X \subsetneqq  Y$ אבל $\bigcup X = \bigcup Y = \{1\}$. 

 </template>
</v-switch>

---

# חוקי דה-מורגן לאיחוד וחיתוך אונריים

- תהי $Y$ קבוצה קבועה ונניח $X$ קבוצה לא ריקה כך שלכל $A \in X$, $A \subseteq Y$.
- אז כמובן $\bigcup X \subseteq Y$.
- לכל קבוצה $A \subseteq Y$ נסמן $\bar{A} = Y \setminus A$ המשלים של $A$ ב-$Y$.
 
- חוק דה מורגן הראשון לאיחוד וחיתוך אונריים הוא:
   

<div class="formula-box">

$$\overline{\bigcup X} = \bigcap \{\bar{A} \mid A \in X\}$$
</div>

- למשל, אם $X = \{A_1, A_2\}$ אז $\bigcup X = A_1 \cup A_2$ 
  - ואז אנו מקבלים את כלל דה-מורגן המוכר:  $\overline{A_1 \cup A_2} = \bigcap \{\bar{A_1}, \bar{A_2}\} = \bar{A_1} \cap \bar{A_2}$.

- ואם $X = \{A_1, A_2, \dots, A_n\}$ קבוצה סופית אז $\bigcup X = A_1 \cup A_2 \cup \dots \cup A_n = \bar{A_1} \cap \bar{A_2} \cap \dots \cap \bar{A_n}$.

- אין אפשרות להוכיח את הכלל בעזרת טבלה אם $X$ קבוצה אינסופית. נזדקק להוכחה בכלים לוגיים.

---
layout: two-cols-header
---

# הוכחת הכלל הראשון של דה-מורגן


אם $X$ קבוצה לא ריקה כך שלכל $A \in X$, $A \subseteq Y$ אז
$\overline{\bigcup X} = \bigcap \{\bar{A} \mid A \in X\}$


::left::

- **כיוון ראשון:**
  
  - יהי $x$ איבר כלשהוא ונניח $x \in \overline{\bigcup X}$.
  
  - אז $x \in Y$ ו-$x \notin \bigcup X$.

  - לכן, לפי הגדרת האיחוד האונארי, $x \notin A$ לכל $A \in X$.
  - לכן $x \in \bar{A}$ לכל $A \in X$.
  - לפי הגדרת החיתוך האונארי $x \in \bigcap \{\bar{A} \mid A \in X\}$.

::right::

- **כיוון שני:**

  - יהי $x$ איבר כלשהוא ונניח $x \in \bigcap \{\bar{A} \mid A \in X\}$.

  - מאחר ו-$X$ אינה ריקה יש איזשהו $A_0 \in X$ ובפרט $x \in \bar{A_0}$.
  - על כן $x \in Y$ (כי $x \in Y \setminus A_0$).
  - לפי הגדרת החיתוך האונארי, $x \in \bar{A}$ לכל $A \in X$.
  - לכן לכל $A \in X$, $x \notin A$.
  - לכן, לפי הגדרת האיחוד האונארי, $x \notin \bigcup X$.
  - ולכן $x \in \overline{\bigcup X}$.


---
layout: two-cols-header
---

# הוכחת הכלל השני של דה-מורגן

אם $X$ קבוצה לא ריקה כך שלכל $A \in X$, $A \subseteq Y$ אז $\overline{\bigcap X} = \bigcup \{\bar{A} \mid A \in X\}$

::left::

- **כיוון ראשון:**
  
  - יהי $x$ איבר כלשהוא ונניח $x \in \overline{\bigcap X}$.

  - אז $x \in Y$ ו-$x \notin \bigcap X$.
  - לכן קיים $A \in X$ כך ש $x \notin A$.
  - לכן $x \in \bar{A}$.
  - על פי הגדרת האיחוד האונארי, $x \in \bigcup \{\bar{A} \mid A \in X\}$.

::right::

- **כיוון שני:**

  - יהי $x$ איבר כלשהוא ונניח $x \in \bigcup \{\bar{A} \mid A \in X\}$.


  - אז קיים $A \in X$ כך ש $x \in \bar{A}$.
  - לכן $x \in Y$ ו-$x \notin A$.
  - לפי הגדרת החיתוך האונארי, $x \notin \bigcap X$.
 
  - לכן $x \in \overline{\bigcap X}$.