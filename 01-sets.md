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

