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

- **דוגמה:** 
  - אם $A = \{1, 2\}$,  $B = \{a, b\}$,
  - ו-$R = \{\langle 1, a \rangle, \langle 2, b \rangle\}$, 
  - אז $\operatorname{dom}(R) = \{1, 2\}$, 
  - ו-$\operatorname{img}(R) = \{a, b\}$.

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
  - לכן $\operatorname{dom}(R \cap S) \neq \operatorname{dom}(R) \cap \operatorname{dom}(S)$.
  