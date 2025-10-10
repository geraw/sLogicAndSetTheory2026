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
# מבוא ללוגיקה ותורת הקבוצות
## מבוא לקבוצות ולפעולות בוליאניות

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


<!-- ############################################################################s -->

---
section: תרגילים פתורים
---


# הוכיחו: $\emptyset \neq \{\emptyset\}$
<br>

- כדי להוכיח אי-שוויון, עלינו למצוא איבר השייך לאחת הקבוצות אך לא לשנייה.

- האיבר $\emptyset$ מקיים: $\emptyset \in \{\emptyset\}$ (הוא האיבר היחיד בקבוצה הימנית).
- לעומת זאת, $\emptyset \notin \emptyset$ (כי הקבוצה הריקה אינה מכילה איברים).
- מצאנו איבר כזה, ולכן הקבוצות שונות.

---

# הוכיחו: $\{\emptyset\} \neq \{\!\{\emptyset\}\!\}$

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

# הוכיחו: $\{\emptyset\} \subsetneq \{\emptyset, \{\emptyset\}\}$

<br>

- **הוכחה:** עלינו להוכיח הכלה ואי-שוויון.

- **הכלה:** יהי $x \in \{\emptyset\}$. מכאן $x=\emptyset$. האיבר $\emptyset$ נמצא גם בקבוצה הימנית, ולכן $\{\emptyset\} \subseteq \{\emptyset, \{\emptyset\}\,\}$.

- **אי-שוויון:** האיבר $\{\emptyset\}$ נמצא בקבוצה הימנית, אך אינו נמצא בקבוצה השמאלית (שאיברה היחיד הוא $\emptyset$). לכן הקבוצות אינן שוות.

- מכיוון שההכלה מתקיימת אך השוויון לא, ההכלה היא ממש.

<!-- ############################################################################s -->

---
section: פעולות בוליאניות על קבוצות
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

נוכיח את אסוציאטיביות החיתוך: $A \cap (B \cap C) = (A \cap B) \cap C$.

ההוכחה מתבססת על בדיקת כל 8 המצבים האפשריים עבור שייכות של איבר $x$ לקבוצות $A, B, C$:

| $x \in A$ | $x \in B$ | $x \in C$ | $x \in B \cap C$ | $x \in A \cap (B \cap C)$ | $x \in A \cap B$ | $x \in (A \cap B) \cap C$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| T | T | T | T | T | T | T |
| T | T | F | F | F | T | F |
| T | F | T | F | F | F | F |
| T | F | F | F | F | F | F |
| F | T | T | T | F | F | F |
| F | T | F | F | F | F | F |
| F | F | T | F | F | F | F |
| F | F | F | F | F | F | F |

<br>

מאחר והעמודות עבור $A \cap (B \cap C)$ ו-$(A \cap B) \cap C$ זהות בכל השורות, הרי שלפי הגדרת שוויון קבוצות, הקבוצות שוות.

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
.slidev-layout th:nth-child(7),
.slidev-layout td:nth-child(7) {
  background-color: #eef;
  border-color: #99d;
}
</style>

---

# הוכחה באמצעות שקילויות לוגיות

נוכיח שוב את אסוציאטיביות החיתוך: $A \cap (B \cap C) = (A \cap B) \cap C$.

- נראה כי $x \in A \cap (B \cap C)$ אם ורק אם $x \in (A \cap B) \cap C$.


  - יהי $x$ איבר כלשהו. אזי:
    - $x \in A \cap (B \cap C)$  **אם ורק אם** $x \in A \land x \in (B \cap C)$ (לפי הגדרת החיתוך)

    - ... **אם ורק אם** $x \in A \land (x \in B \land x \in C)$ (לפי הגדרת החיתוך)
    - ... **אם ורק אם** $(x \in A \land x \in B) \land x \in C$ (לפי אסוציאטיביות של "וגם")
    - ... **אם ורק אם** $x \in (A \cap B) \land x \in C$ (לפי הגדרת החיתוך)
    - ... **אם ורק אם** $x \in (A \cap B) \cap C$ (לפי הגדרת החיתוך)

- הראינו ש-$x$ שייך לאגף שמאל אם ורק אם הוא שייך לאגף ימין, ולכן הקבוצות שוות.

<svg class="absolute top-0 left-0 w-full h-full pointer-events-none">
  <defs>
    <marker id="arrowhead1" viewBox="0 0 10 10" refX="3" refY="5"
        markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"></path>
    </marker>
  </defs>

  <path d="M 400 445 C 200 450, -100 350, 470 145" stroke="#2563eb" stroke-width="2" fill="none" marker-end="url(#arrowhead1)" />
</svg>


---

# הוכחת השוויון $(A \setminus B) \cup (A \cap C) = A \setminus (B \setminus C)$


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
      <g clip-path="url(#cA)">
        <g clip-path="url(#cC)">
          <rect x="0" y="0" width="420" height="260"  fill="orange"stroke="#333" stroke-width="2"/>
        </g>
      </g>
      <use href="#base-sets"/>
  </svg>

  <div class="katex label" style="position:relative;right:70px;font-size:2rem;color:#111">

  $A \cap C$
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
    <use href="#A" fill="orange" stroke="#333" stroke-width="2"/>
    <use href="#B" fill="white" stroke="none"/>
    <g clip-path="url(#cA)">
      <g clip-path="url(#cC)">
        <rect x="0" y="0" width="420" height="260"  fill="orange"stroke="#333" stroke-width="2"/>
      </g>
    </g>
    <use href="#base-sets"/> 
 </svg>

<div class="katex label" style="position:relative;right:0px;font-size:2rem;color:#111">

  $(A \setminus B) \cup (A \cap C)$
  </div>

</div>

</div>

<div class="w-10px h-96 bg-gray-300 self-center"></div>

  <div class="grid grid-cols-3 grid-rows-2 gap-0" style="scale:.6;width:400px;margin:0 0 0 0">

  <div style="width:420px;margin:auto">
    <svg viewBox="-10 -10 170 170" width="50%" height="100%" aria-label="Venn A \ B">
      <use href="#B" fill="orange" stroke="#333" stroke-width="2"/>
      <use href="#C" fill="white" stroke="none"/>
      <use href="#base-sets"/> 
  </svg>

<div class="katex label" style="position:relative;right:70px;font-size:2rem;color:#111">

$B \setminus  C$
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
    <use href="#A" fill="orange" stroke="#333" stroke-width="2"/>
    <use href="#B" fill="white" stroke="none"/>
    <g clip-path="url(#cA)">
      <g clip-path="url(#cC)">
        <rect x="0" y="0" width="420" height="260"  fill="orange"stroke="#333" stroke-width="2"/>
      </g>
    </g>
    <use href="#base-sets"/> 
 </svg>


<div class="katex label" style="position:relative;right:30px;font-size:2rem;color:#111">

$A \setminus  (B \setminus C)$
</div>


</div>


</div>
</div>

