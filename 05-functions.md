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



* יחס $F \subseteq A \times B$ הוא **פונקציה** אם לכל $a \in A$ קיים בדיוק $b \in B$ אחד כך ש-$\langle a,b \rangle \in F$.  
    
    * תנאי **מלאות**: 
        <div class="formula-box">

        $\forall x \in X \bigl(\;\exists y \in Y (\;\langle x,y \rangle \in F) \; \bigr)$
        </div>

    * תנאי **חד-ערכיות**: 
        <div class="formula-box">

        $\forall x \in X,  y_1,y_2 \in Y  (\langle x,y_1 \rangle \in F \land \langle x,y_2 \rangle \in F \Rightarrow y_1 = y_2)$
        </div>

* נסמן: $F \colon A \to B$.
  * נקרא ל-$A$ **תחום** של $F$ ול-$B$ **טווח חוקי** של $F$.
  *  פונקציה היא בעצם שלשה: התחום, הטווח החוקי והיחס. כשכותבים $F$ מתיחסים רק ליחס.
  * הטווח חייב להכיל את התמונה של היחס : $\operatorname{img}(F) \subseteq B$.


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


# תתי־קבוצות, חיתוך ואיחוד של פונקציות


## תת-קבוצה של פונקציה

**טענה:** אם $G \subseteq F$ ופונקציה $F$, אז לא בהכרח ש-$G$ פונקציה.

**נימוק:** ייתכן ש-$G$ "מאבד" חלק מהזוגות כך שיש $a$ ללא תמונה.

---

# חיתוך שתי פונקציות

**טענה:** אם $F, G \colon A \to B$ פונקציות, אז $F \cap G$ פונקציה.

**הוכחה:** לכל $a$ יש ב-$F$ וב-$G$ בדיוק ערך אחד, ולכן בחיתוך או שהם מסכימים — ואז יש זוג יחיד — או שהחיתוך ריק עבור $a$, אך זה אפשרי רק אם $F,G$ אינן מוגדרות על אותו תחום. אם מניחים ששתיהן פונקציות **על אותו תחום**, הן חייבות להסכים.

---

# איחוד שתי פונקציות

**אפיונים:**

* $F \cup G$ היא פונקציה אמ"ם לכל $a \in A$: או שלא מופיע כלל באחת מהן, או ש-$F(a)=G(a)$.
* כלומר: אין סתירה בין התמונות.









---


# חח״ע ועל

---

## פונקציה חח"ע

* $F \colon A \to B$ חח"ע אם $F(a_1)=F(a_2) \Rightarrow a_1=a_2$.

## פונקציה חח"ע והפונקציה ההפוכה

* הגדרה: $F^{-1} = \{\langle b,a \rangle : \langle a,b \rangle \in F\}$.

**טענה:** $F$ חח"ע אמ"ם $F^{-1}$ פונקציה.

**מסקנה:** במקרה זה $F^{-1}$ גם חח"ע.

---

layout: section

# הצגת פונקציה כשלשה

---

## ייצוג תלת־רכיבי

פונקציה מוצגת כ-$(A,B,F)$:

* תחום: $A$
* טווח חוקי: $B$
* הגרף: $F \subseteq A \times B$

**חשוב:** $B$ חייב להכיל את **התמונה** של $F$.

---

layout: section

# פונקציה על

---

## הגדרה

* $F \colon A \to B$ **על** אם לכל $b \in B$ יש $a \in A$ עם $F(a)=b$.

---

layout: section

# צמצום פונקציות

---

## צמצום לתת-קבוצה של $A$

* אם $A' \subseteq A$ נגדיר $F|_{A'} = \{\langle a,b \rangle \in F : a \in A'\}$.

**משפט (בעזרת אקסיומת הבחירה):** לכל $F \colon A \to B$ קיימת $A'\subseteq A$ כך ש:

* $F|_{A'}$ חח"ע
* $\operatorname{Im}(F|_{A'}) = \operatorname{Im}(F)$

---

layout: section

# תמונה וקדם־תמונה

---

## הגדרות

* תמונה: $F[X] = \{F(a) : a\in X\}$.
* קדם־תמונה: $F^{-1}[Y] = \{a\in A : F(a)\in Y\}$.

## טענות לבדיקה

* $F[X\cup Y] = F[X] \cup F[Y]$ — תמיד נכון.
* $F[X\cap Y] = F[X] \cap F[Y]$ — **לא נכון בכלליות**.
* $F^{-1}[Y\cup Z] = F^{-1}[Y] \cup F^{-1}[Z]$ — נכון.
* $F^{-1}[Y\cap Z] = F^{-1}[Y] \cap F^{-1}[Z]$ — נכון.
* $F[F^{-1}[Y]] = Y$? — לא תמיד. תנאי מספיק: $Y \subseteq \operatorname{Im}(F)$.
* $F^{-1}[F[X]] = X$? — לא תמיד. נכון אם $F$ חח"ע.

---

layout: section

# הרכבת פונקציות

---

## הרכבה

אם $F\colon A\to B$ ו-$G\colon B\to C$:

* נגדיר $G\circ F = \{\langle a,c \rangle : \exists b,\ \langle a,b \rangle \in F \wedge \langle b,c \rangle \in G\}$.
* התחום של ההרכבה: $A$.
* ההרכבה מוגדרת היטב רק אם **תמונת $F$ מוכלת בתחום של $G$**.

## תכונות של הרכבה

* אם $F,G$ חח"ע $\Rightarrow$ $G\circ F$ חח"ע.
* אם $F,G$ על $\Rightarrow$ $G\circ F$ על.

## שאלות נכון/לא נכון

1. אם $G\circ F$ חח"ע $\Rightarrow$ $F$ חח"ע — נכון.
2. אם $G\circ F$ חח"ע $\Rightarrow$ $G$ חח"ע — לא נכון.
3. אם $G\circ F$ על $\Rightarrow$ $G$ על — נכון.
4. אם $G\circ F$ על $\Rightarrow$ $F$ על — לא נכון.

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

* יחס מוגדר היטב על מחלקות שקילות: התוצאה אינה תלויה בנציג.
* פונקציה חד־מקומית/דו־מקומית מוגדרת היטב אם הערך שלה אינו תלוי בבחירת הנציגים.

