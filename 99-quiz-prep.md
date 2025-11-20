---
theme: frankfurt
infoLine: true
author: "גרא וייס"
title: "חזרה לקראת הבוחן הראשון"
htmlAttrs:
  dir: rtl
  lang: heb
mdc: true
download: true
---

# הכנה לבוחן
## מצגת בקורס "מבוא ללוגיקה ותורת הקבוצות"

שאלות חזרה: לוגיקה, קבוצות, מכפלה קרטזית ויחסים
(ללא תכונות של יחסים)

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---

# עובדות מותרות לשימוש בשאלות ההוכחה

בשאלות ההוכחה, ניתן להשתמש בטענות הבאות כעובדות ידועות:

1. **רפלקסיביות ההכלה:** לכל קבוצה $A$, מתקיים $A \subseteq A$.

2. **הקבוצה הריקה:** לכל קבוצה $A$, מתקיים $\emptyset \subseteq A$.

3. **תכונות האיחוד והחיתוך:** לכל שתי קבוצות $A, B$:
   - $A \subseteq A \cup B$
   - $A \cap B \subseteq A$


---
layout: two-cols-header
---

# מה נזכור בע"פ?

::left::

-  **איחוד**:  
  $$A\cup B=\{x : x\in A \text{ או } x\in B\}$$

-  **חיתוך**:  
  $$A\cap B=\{x : x\in A \text{ וגם } x\in B\}$$

- **הפרש קבוצות**:  
  $$A\setminus B=\{x : x\in A \text{ ו } x\notin B\}$$

- **הפרש סימטרי**:  
  $$A\Delta B = (A \cup B) \setminus (A \cap B)$$

- **מכפלה קרטזית**:  
  $$A\times B=\{(x,y) : x\in A \text{ ו } y\in B\}$$

::right::

- **קבוצת חזקה**:  
  $$\mathcal{P}(A)=\{X : X\subseteq A\}$$

- **כללי דה־מורגן**:  
  $$A\setminus\bigcup F=\bigcap_{X\in F}(A\setminus X)$$  
  $$A\setminus\bigcap F=\bigcup_{X\in F}(A\setminus X)$$

- **איחוד/חיתוך אונרי**:  
  $$\bigcup_{X\in F} X = \bigcup F$$
  $$\bigcap_{X\in F} X = \bigcap F$$



---

# לוגיקה: שקילות לוגית

**הוכיחו או הפריכו**: הטענה הבאה היא טאוטולוגיה:
$$ ((p \to q) \land (q \to r)) \to (p \to r) $$

<v-click>


**נכון (זוהי טאוטולוגיה).**
זוהי תכונת הטרנזיטיביות של הגרירה.
ניתן להוכיח בדרך השלילה:
1. נניח שהטענה שקרית. אז הרישא אמת והסיפא שקר.

2. סיפא שקר ($\neg$) $\Longleftarrow \neg(p \to r)$ $\Longleftarrow p=T, r=F$.
3. רישא אמת $\Longleftarrow p \to q$ אמת וגם $q \to r$ אמת.
4. מ-$p=T$ ו-$p \to q$ אמת $\Longleftarrow q=T$.
5. מ-$q=T$ ו-$q \to r$ אמת $\Longleftarrow r=T$.
6. קיבלנו $r=T$ וגם $r=F$ (סתירה).

</v-click>

---

# כמתים: שלילה

**שאלה:**
כתבו את השלילה של הטענה הבאה ללא שימוש במילה "לא" לפני כמתים:
$$ \forall x \exists y (P(x) \to Q(x,y)) $$

<v-click>

**תשובה:**
נבצע שלילה שלב אחר שלב:
1. $\neg \forall x \exists y (P(x) \to Q(x,y))$

2. $\exists x \neg \exists y (P(x) \to Q(x,y))$ (שלילת כמת כולל)
3. $\exists x \forall y \neg (P(x) \to Q(x,y))$ (שלילת כמת קיומי)
4. $\exists x \forall y (P(x) \land \neg Q(x,y))$ (שלילת גרירה)

**התשובה הסופית:** $\exists x \forall y (P(x) \land \neg Q(x,y))$

</v-click>


---

# קבוצות: הפרש סימטרי

**שאלה:**
הוכיחו או הפריכו: לכל שתי קבוצות $A, B$:
$$ A \Delta B = (A \cup B) \setminus (A \cap B) $$


<v-click>
הוכחה:

$$
\begin{aligned}
(A \cup B) \setminus (A \cap B) &= \{x : x \in (A \cup B) \land x \notin (A \cap B)\} \\[.3cm]
&= \{x : (x \in A \lor x \in B) \land \neg(x \in A \land x \in B)\} \\[.3cm]
&= \{x : (x \in A \lor x \in B) \land (x \notin A \lor x \notin B)\} \\[.3cm]
&= \{x : (x \in A \land x \notin B) \lor (x \in B \land x \notin A)\} \\[.3cm]
&= \{x : x \in (A \setminus B) \lor x \in (B \setminus A)\} \\[.3cm]
&= (A \setminus B) \cup (B \setminus A)
\end{aligned}
$$

</v-click>

---

# קבוצת החזקה

**שאלה:**
תהי $A = \{1, 2\}$.
1. רשמו את $\mathcal{P}(A)$ (קבוצת החזקה של $A$).

2. האם $\{1\} \in \mathcal{P}(A)$?

3. האם $\{1\} \subseteq \mathcal{P}(A)$?

<v-click>

**תשובה:**

1. $\mathcal{P}(A) = \{ \emptyset, \{1\}, \{2\}, \{1, 2\} \}$.

2. **כן.** $\{1\}$ היא תת-קבוצה של $A$, ולכן היא איבר ב-$\mathcal{P}(A)$.

3. **לא.** כדי ש-$\{1\} \subseteq \mathcal{P}(A)$, האיבר $1$ צריך להיות ב-$\mathcal{P}(A)$, אבל $1$ הוא מספר ולא קבוצה (בהקשר זה), והאיברים של $\mathcal{P}(A)$ הם קבוצות.

</v-click>

---

# מכפלה קרטזית

**שאלה:**
הוכיחו או הפריכו:
$$ A \times (B \setminus C) = (A \times B) \setminus (A \times C) $$

<v-click>

**תשובה:**
**נכון.** (הוכח במצגת 02, אבל הנה תזכורת לרעיון):
יהי $\langle x,y \rangle$.
$$
\begin{aligned}
\langle x,y \rangle \in A \times (B \setminus C) &\iff x \in A \land y \in (B \setminus C) \\
&\iff x \in A \land (y \in B \land y \notin C) \\
&\iff (x \in A \land y \in B) \land (x \in A \land y \notin C) \\
&\iff \langle x,y \rangle \in A \times B \land \neg(x \in A \land y \in C) \\
&\iff \langle x,y \rangle \in A \times B \land \langle x,y \rangle \notin A \times C \\
&\iff \langle x,y \rangle \in (A \times B) \setminus (A \times C)
\end{aligned}
$$
(המעבר הרביעי דורש זהירות: אם $x \in A$, אז $\langle x,y \rangle \in A \times C \iff y \in C$. אם $x \notin A$, שני הצדדים שקריים).

</v-click>

---

# יחסים: תחום ויחס הפוך

**שאלה 6:**
יהי $R = \{ \langle 1, 2 \rangle, \langle 2, 3 \rangle, \langle 3, 1 \rangle \}$ יחס על $A = \{1, 2, 3\}$.
1. מהו $dom(R)$?
2. מהו $R^{-1}$?
3. חשבו את $R \circ R$ (הרכבה).

<v-click>

**תשובה:**

1. **תחום:** $dom(R) = \{1, 2, 3\}$ (כל האיברים שמופיעים ברכיב הראשון).
2. **יחס הפוך:** הופכים את הזוגות.
   $$ R^{-1} = \{ \langle 2, 1 \rangle, \langle 3, 2 \rangle, \langle 1, 3 \rangle \} $$
3. **הרכבה ($R \circ R$):** מחפשים $\langle x,y \rangle \in R$ ו-$\langle y,z \rangle \in R$ כדי ליצור $\langle x,z \rangle$.
   - $\langle 1,2 \rangle \in R, \langle 2,3 \rangle \in R \implies \langle 1,3 \rangle \in R \circ R$
   - $\langle 2,3 \rangle \in R, \langle 3,1 \rangle \in R \implies \langle 2,1 \rangle \in R \circ R$
   - $\langle 3,1 \rangle \in R, \langle 1,2 \rangle \in R \implies \langle 3,2 \rangle \in R \circ R$
   $$ R \circ R = \{ \langle 1, 3 \rangle, \langle 2, 1 \rangle, \langle 3, 2 \rangle \} $$

</v-click>

---

# פעולות אונריות  
תהי משפחת קבוצות  
$$
F=\{X\subseteq \mathbb{N} : 0\in X\}.
$$

חשבו:

1. $\displaystyle \bigcup F$
   
2. $\displaystyle \bigcap F$

---
layout: two-cols-header
---

# חוקי הפילוג והפרש

::left::

**תרגיל:** הוכיחו שלכל קבוצות $A,B,C$ מתקיים:

1. $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$  
2. $A \cup (B \setminus C) = (A \cup B) \setminus (A \cap C)$  
3. $A \setminus (B \cup C) = (A \setminus B) \cap (A \setminus C)$  

<br/>
<br/>
<v-click>

1. פילוג איחוד מעל חיתוך  

$$
\begin{aligned}
x \in A \cup (B \cap C) &\iff x \in A \ \lor\ (x \in B \land x \in C) \\
&\iff (x \in A \lor x \in B) \land (x \in A \lor x \in C) \\
&\iff x \in (A \cup B) \cap (A \cup C)
\end{aligned}
$$

</v-click>

::right::
<v-click>

2. איחוד עם פרש
$$
\begin{aligned}
x \in A \cup (B \setminus C) &\iff x \in A \ \lor\ (x \in B \land x \notin C) \\
&\iff (x \in A \lor x \in B) \land (x \in A \lor x \notin C) \\
&\iff x \in (A \cup B) \land x \notin (A \cap C) \\
&\iff x \in (A \cup B) \setminus (A \cap C)
\end{aligned}
$$

</v-click>


<v-click>

3. הפרש עם איחוד
$$
\begin{aligned}
x \in A \setminus (B \cup C) &\iff x \in A \land x \notin (B \cup C) \\
&\iff x \in A \land (x \notin B \land x \notin C) \\
&\iff (x \in A \land x \notin B) \land (x \in A \land x \notin C) \\
&\iff x \in (A \setminus B) \cap (A \setminus C)
\end{aligned}
$$

</v-click>

---

# הפרש: תרגול נוסף

נניח שכל הקבוצות מוכלות בקבוצה אוניברסלית $U$.

1. הוכיחו: לכל קבוצה $A \subseteq U$ מתקיים
   $$ U \setminus (U \setminus A) = A. $$

2. הוכיחו: לכל שתי קבוצות $A,B \subseteq U$ מתקיים
   $$ A \subseteq B \iff (U \setminus B) \subseteq (U \setminus A). $$

3. הוכיחו את כללי דה־מורגן ביחס ל-$U$:
   $$ U \setminus (A \cup B) = (U \setminus A) \cap (U \setminus B), $$
   $$ U \setminus (A \cap B) = (U \setminus A) \cup (U \setminus B). $$

---

# הפרש: אם לכל B מתקיים תנאי - אז A ריקה

להלן תרגילים. בכל אחד, הוכיחו שאם הטענה על $A \setminus B$ נכונה לכל קבוצה $B$, אז $A = \emptyset$.

1. לכל A, אם לכל $B$ מתקיים $A \setminus B = \emptyset$, אז $A = \emptyset$.
   
2. לכל A, אם לכל $B$ מתקיים $A \setminus B \subseteq B$, אז $A = \emptyset$.
   
3. לכל A, אם לכל $B$ מתקיים $A \setminus B = A$, אז $A = \emptyset$.
   
4. לכל A, אם לכל $B$ מתקיים $A \setminus B \subseteq A \cap B$, אז $A = \emptyset$.
   
5. לכל A, אם לכל $B$ מתקיים $A \subseteq A \setminus B$, אז $A = \emptyset$.

---

# הפרש: אם לכל C מתקיים תנאי - אז A = B

להלן תרגילים. בכל אחד, הוכיחו שאם הטענה על $A \setminus C$ ו-$B \setminus C$ נכונה לכל קבוצה $C$, אז $A = B$.

1. לכל A,B, אם לכל $C$ מתקיים $A \setminus C = B \setminus C$, אז $A = B$.

2. לכל A,B, אם לכל $C$ מתקיים $A \setminus C \subseteq B \setminus C$ וגם $B \setminus C \subseteq A \setminus C$, אז $A = B$.

3. לכל A,B, אם לכל $C$ מתקיים $A \setminus C \subseteq B$ וגם $B \setminus C \subseteq A$, אז $A = B$.

4. לכל A,B, אם לכל $C$ מתקיים $A \setminus (B \cup C) = B \setminus (A \cup C)$, אז $A = B$.

5. לכל A,B, אם לכל $C$ מתקיים $(A \setminus C) \setminus B = (B \setminus C) \setminus A$, אז $A = B$.

---

# הפרש סימטרי: אם לכל B מתקיים תנאי - אז A ריקה

להלן תרגילים. בכל אחד, הוכיחו שאם הטענה על $A \Delta B$ נכונה לכל קבוצה $B$, אז $A = \emptyset$.

1. לכל A, אם לכל $B$ מתקיים $A \Delta B = B$, אז $A = \emptyset$.

2. לכל A, אם לכל $B$ מתקיים $A \Delta B \subseteq B$, אז $A = \emptyset$.
3. לכל A, אם לכל $B$ מתקיים $A \subseteq A \Delta B$, אז $A = \emptyset$.
4. לכל A, אם לכל $B$ מתקיים $A \Delta B = A \cup B$, אז $A = \emptyset$.
5. לכל A, אם לכל $B$ מתקיים $(A \Delta B) \cap A = \emptyset$, אז $A = \emptyset$.

---

# הפרש סימטרי: אם לכל C מתקיים תנאי - אז A = B

להלן תרגילים. בכל אחד, הוכיחו שאם הטענה על $A \Delta C$ ו-$B \Delta C$ נכונה לכל קבוצה $C$, אז $A = B$.

1. לכל A,B, אם לכל $C$ מתקיים $A \Delta C = B \Delta C$, אז $A = B$.

2. לכל A,B, אם לכל $C$ מתקיימות ההכללות $A \Delta C \subseteq B \Delta C$ וגם $B \Delta C \subseteq A \Delta C$, אז $A = B$.
3. לכל A,B, אם לכל $C$ מתקיים $(A \Delta C) \Delta (B \Delta C) = \emptyset$, אז $A = B$.
4. לכל A,B, אם לכל $C$ מתקיים $(A \Delta C) \Delta (B \Delta C) \subseteq C$, אז $A = B$.
5. לכל A,B, אם לכל $C$ מתקיים $(A \Delta C) \cap C = (B \Delta C) \cap C$, אז $A = B$.

---

# תרגילים נוספים
1. לכל A,B,C, הוכיחו: 
   $$ C \cap (A \Delta B) = (C \cap A) \Delta (C \cap B). $$

2. לכל A,B,C, הוכיחו (חוק ביטול): 
   $$ (A \Delta B) \Delta (A \Delta C) = B \Delta C. $$

3. לכל A,B, הוכיחו:
   $$ A \subseteq B \iff A \Delta B \subseteq B \setminus A. $$

4. לכל A,B,C, הוכיחו:
   $$ (A \times C) \Delta (B \times C) = (A \Delta B) \times C. $$

5. לכל A,B,C,D, הוכיחו או הפריכו:
   $$ (A \times C) \Delta (B \times D) \stackrel{?}{=} (A \Delta B) \times (C \Delta D). $$

---

# שאלות על פעולות אונאריות

1. הוכיחו או הפריכו:
   $$ A \setminus \bigcap F = \bigcup \{A \setminus X : X \in F\}, \qquad
      A \setminus \bigcup F = \bigcap \{A \setminus X : X \in F\}. $$

3. הוכיחו או הפריכו:
   $$ A \subseteq \bigcup F \iff \forall x \in A\ \exists X \in F\ (x \in X), \qquad
      A \subseteq \bigcap F \iff \forall X \in F\ (A \subseteq X). $$

4. הוכיחו או הפריכו:
   $$ A \subseteq B \iff \forall x\ (x \in A \Rightarrow x \in B), $$
   $$ A \setminus (B \cup C) = (A \setminus B) \cap (A \setminus C), $$
   $$ (A \Delta B) \setminus C = (A \setminus C) \Delta (B \setminus C). $$

5. הוכיחו או הפריכו:
   $$ \bigl[\forall X \in F\ \exists Y \in G\ (X \subseteq Y)\bigr] \Rightarrow
      \bigl(\bigcup F \subseteq \bigcup G \ \land\ \bigcap G \subseteq \bigcap F\bigr). $$

---

# שאלות על פעולות אונריות


6. הוכיחו או הפריכו:
   $$ \bigcup \{X \setminus A : X \in F\} = \left(\bigcup F\right) \setminus A, \qquad
      A \setminus \bigcup F = \bigcap \{A \setminus X : X \in F\}. $$

7. הוכיחו או הפריכו: קיימת  קבוצה יחידה $S$ כך שלכל $x$,
   $$ x \in S \iff \bigl( \forall X \in F\ (x \in X)\bigr)$$


8. הוכיחו או הפריכו:
   $$ \bigcup \{A_i \setminus B_i : i \in I\} \subseteq
      \left(\bigcup \{A_i : i \in I\}\right) \setminus \left(\bigcap \{B_i : i \in I\}\right), $$
   והאם שוויון מתקיים תמיד?


