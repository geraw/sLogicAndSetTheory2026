---
theme: frankfurt
infoLine: true
author: "גרא וייס"
title: "קשרים, כמתים, מבני הוכחה"
htmlAttrs:
  dir: rtl
  lang: heb
mdc: true
download: true
---
# קשרים לוגיים, כמתים ומבני הוכחה
## הרצאה בקורס: מבוא ללוגיקה ותורת הקבוצות

 מרצה: פרופ. גרא וייס
---
section: פתיחה
layout: two-cols-header
---

# למה אנחנו כאן?

::left::

- **להבין שפה פורמלית** — מפרטים, תנאים וטענות בקוד צריכים להיות חד־משמעיים. פסוקים וכמתים עוזרים לנסח בדיוק מה האלגוריתם אמור לעשות, ולמי ובאילו תנאים.
  
- **לרכוש מיומנויות הוכחה** — בדיקות מגלות באגים בדוגמאות שנבדקו, אך אינן מוכיחות נכונות לכל קלט. הוכחות ישירות, בקונטרפוזיציה ובשלילה עוזרות להצדיק נכונות ולזהות הנחות חסרות.
  
- **לבנות ולנתח מבנים מתמטיים** — קבוצות, יחסים, פונקציות וסדרים הם מודלים של נתונים ותהליכים במדמ״ח: גרפים ורשתות, קשרים בבסיסי נתונים, תלות בין משימות ומיפוי בין קלט לפלט.
  
- **לפתח חשיבה אלגוריתמית והוכחתית** — אינדוקציה מסבירה למה לולאות ותהליכים רקורסיביים פועלים בכל גודל; אינדוקציה מבנית מתאימה במיוחד לעצים, נוסחאות ומבני נתונים רקורסיביים.
  
- **להכין בסיס ללימודים ולעבודה מתקדמים** — אותם כלים משמשים בהבנת אלגוריתמים, אימות תוכנה, שפות תכנות, אבטחה ומערכות. הם מאפשרים לקרוא טענות טכניות, להעריך פתרונות ולתקשר הנחות בצורה מדויקת.

::right::

<img src="/images/למה אנחנו כאן.png" class="w-full opacity-90 mt-8" />

---

# דוגמה: קוד מסוכני AI - עם הוכחה

- חלק גדל והולך מהקוד נכתב היום בידי סוכני בינה מלאכותית.
  
- איך נדע שהקוד נכון? בדיקות (tests) מכסות רק חלק זעיר מהקלטים האפשריים.
  
- מגמה מתפתחת: הסוכן מגיש את הקוד **יחד עם הוכחה פורמלית** שהוא עומד במפרט.
  
- את ההוכחה בודק כלי אוטומטי (למשל Lean או Dafny), כך שאין צורך "לסמוך" על הסוכן.
  
- כדי לנסח מפרט ולקרוא הוכחה צריך בדיוק את מה שנלמד בקורס: קשרים, כמתים ומבני הוכחה.
  - למשל, המפרט של מיון: $\forall i\,(i<n-1 \to b[i]\le b[i+1])$,<br>
    וגם: $b$ הוא סידור מחדש (תמורה) של $a$.

<img src="/images/code_with_proof_handoff.png" class="absolute top-78 left-6 w-110 mix-blend-multiply" />



<!-- ####################################################################################################################### -->

---
section: מנהלות
---

# מבנה ההערכה


- **מטלות ממוחשבות – 5%**  
  - חובה ≥ 80% הצלחה כדי לקבל ניקוד  

- **מטלות כתובות – 5%**  
  - חמש מטלות קצרות  

- **בוחן אמצע 1 – 5%**  

- **בוחן אמצע 2 – 5%**  

- **בחינה מסכמת – 80%**  
  - חובה ≥ 56 כדי לעבור  
  - אם < 56 → זהו הציון הסופי


<img src="/images/שיקלול.png" class="absolute top-40 right-110 w-140 h-100 opacity-80" />

---

# לוח נושאים

1. לוגיקה פסוקית: טבלאות אמת, שקילות, גרירה  
   
2. תורת הקבוצות: פעולות, חזקה, חלוקות  
   
3. יחסים ומכפלות קרטזיות  
   
4. יחסי סדר: חלקי/קווי, שרשראות/אנטי־שרשראות  
   
5. יחסי שקילות ומרחבי מנה; “מוגדר היטב” 
   
6. פונקציות: חד־חד־ערכיות, על, הרכבה, הפיכות, קדם־תמונה/תמונה  
   
7. אינדוקציה, אינדוקציה שלמה, עקרון המינימום, שובך היונים  
   
8. עוצמות: בנות־מנייה, קנטור–ברנשטיין, קנטור, $|\mathbb{R}|=|P(\mathbb{N})|$  
   
9.  היכרות עם לוגיקה מסדר ראשון
    (אם יישאר זמן)

---

# מפת סמסטר
- הרצאות 1–2: קשרים לוגיים, כמתים, מבני הוכחה  
  
- 3–5: פעולות בקבוצות, דה־מורגן, קבוצת חזקה  
  
- 6–8: זוגות סדורים, יחסים ותכונות (רפלקסיבי/סימטרי/טרנזיטיבי)  
  
- 9–10: יחסי סדר חלקיים וקוויים, מינימום/מקסימום, עוקב מיידי  
  
- 11–12: יחסי שקילות ומרחבי מנה  
  
- 13–16: פונקציות (חד״ע/על/הפוכה, הרכבה, “מוגדר היטב”)  
  
- 17–19: קבוצות סופיות ואינדוקציה (שובך היונים וכו׳)  
  
- 20(+): **אינדוקציה מבנית** - הגדרות רקורסיביות על מבנים וסכמות הוכחה  
  
- 21–24: עוצמות וקנטור–ברנשטיין  
  
- 25–26: חזרה/העמקה

---

# משאבים

אנחנו מספקים משאבים רבים באתר הקורס ומצפים מהסטודנטים לקרוא אותם.

**המשאבים המרכזיים:**
- **ספרי הקורס** - המקור העיקרי לחומר התיאורטי
  
- **השקפים** - סיכום מובנה של החומר מההרצאות
  
- **סילבוס ומטלות** - באתר המודל של הקורס  
  
- **דפי עזר ותרגולים** - יפורסמו לאורך הסמסטר

**ציפיות נוספות:**
- אתם מצופים גם לחפש חומרי לימוד בעצמכם  
  
- להעמיק במה שלמדנו גם ממקורות חיצוניים
  
- לפתח הבנה עצמאית ויכולת חקר אישית

<img src="/images/משאבים.png" class="absolute top-70 right-140 w-100 h-80 opacity-80" />

---

# ציפיות ועקרונות עבודה
- להגיע לשעות הקבלה עם דפי העזר פתורים חלקית; לדון, לשאול, לטעות ולתקן  
  
- להגיש מטלות בזמן; לשמור על יושרה אקדמית  
  
- להשתמש בשפה מתמטית מדויקת, עם ניסוח והנמקות מלאות

- שעות הקבלה שלי: ימי רביעי בין 16:00-18:00, מיד לאחר השיעור
  - ניתן לקבוע פגישות נוספות לפי הצורך  
  - ניתן ליצור קשר במייל: **geraw@bgu.ac.il**
  - המשרד שלי בחדר 123 בבניין 37

- מומלץ מאוד לבוא לכל השיעורים והתרגולים, לשאול שאלות ולבקש הבהרות


<!-- ####################################################################################################################### -->

---
section: מבוא לשפה המתמטית ולוגיקה
---


# פתח דבר

- לוגיקה היא השפה וכללי ההוכחה של המתמטיקה; היא עוסקת בהסקת מסקנות מתמטיות.
  
- טענה מתמטית יכולה להיות אמת או שקר, אך חשובה הבהירות והחד־משמעות של הניסוח.
  
- מטרת הקורס: להכיר שיטות הוכחה ולהתנסות בהגשה מפורטת ומדוקדקת של הוכחות.
  
- לא תצטרכו להשתמש בכל הוכחה בפועל בהמשך, אך הכלים וההבנה שתרכשו יהיו שימושיים בקריירה ובלימודים מתקדמים.
  - למשל, מפתחי תוכנה צריכים "להוכיח" שהאלגוריתמים שלהם נכונים לכל קלט אפשרי. מאחר שמספר הקלטים הוא עצום (ולעיתים אינסופי), לא ניתן לבדוק את כולם, וחייבים להשתמש בטיעון לוגי משכנע.
  
- נחקור מה פירוש המילה "נכונות" ונגדיר מושגי יסוד (כגון 'מבנה') שישמשו להגדרת אמיתות.
  
- השפה המתמטית שונה משפת היומיום; הכרת הניסוח המדויק חשובה להבעה ולחשיבה מתמטית.



---

# מבוא לשפה המתמטית ולוגיקה

- טענות מתמטיות בנויות מטענות פשוטות ומילות קישור - ה"לבנים" של השפה.  

 - מילות הקישור הן הקַשָרים הלוגיים והכַמָתים:
   - קשרים: "‏אם ... אז ...", "‏וגם", "‏או", "‏לא"
   - כמתים: "לכל ...", "יש ..."

-  למשל בטענה הבאה, הכמתים והקשרים מודגשים:
  "<span style="color:#0d6efd">לכל</span> זוג מספרים $a,b$, <span style="color:red">אם</span> $a\neq b$ <span style="color:red">אז</span> <span style="color:#0d6efd">יש</span> $q\in\mathbb{Q}$ כך ש $a<q<b$ <span style="color:red">או</span> $b<q<a$."
  - נבדיל בין מבנה ומשמעות: 
    - זה משפט במבנה "<span style="color:#0d6efd">לכל</span> ... <span style="color:red">אם</span> ... <span style="color:red">אז</span> ... <span style="color:#0d6efd">יש</span> ... <span style="color:red">או</span> ...".
    - הוא אומר אמירה מתמטית נכונה - ערך האמת שלו הוא True.



- יש סמלים מקובלים לסימון הקשרים והכמתים, ואנחנו נשתמש גם בסמלים אלו, ולא רק במילות
הקישור והכימות.

---

# בניית טענות מתמטיות: הסימונים המקובלים

בשקף זה נגדיר את **הסימונים המקובלים** לקשרים ולכמתים. נשתמש בהם לאורך כל הקורס, והם מקובלים גם בספרות המתמטית ובמדעי המחשב בכלל.

- קשרים - מרכיבים טענות חדשות מטענות קיימות:
  - $\alpha\vee\beta$ <span style="color:#2563eb;"> ⟶ <em>"$\alpha$ או $\beta$". נקרא קשר הדיסיונקציה (disjunction).</em></span>
  - $\alpha\wedge\beta$ <span style="color:#2563eb;"> ⟶ <em>"$\alpha$ וגם $\beta$". נקרא קשר הקוניונקציה (conjunction).</em></span>
  - $\alpha\to\beta$ <span style="color:#2563eb;"> ⟶ <em>"אם $\alpha$ אז $\beta$" / "$\alpha$ גורר $\beta$". נקרא קשר הגרירה (implication).</em></span>
  - $\alpha\leftrightarrow\beta$ <span style="color:#2563eb;"> ⟶ <em>"$\alpha$ אם ורק אם $\beta$". נקרא קשר האם־ורק־אם (biconditional / iff).</em></span>
  - $\neg\alpha$ <span style="color:#2563eb;"> ⟶ <em>"לא $\alpha$". נקרא קשר השלילה (negation).</em></span>

- כמתים - כאשר הטענה תלויה במשתנה $x$:
  - $\forall x\,(\alpha)$ → <span style="color:#2563eb;"><em>"לכל $x$ מתקיים $\alpha$". נקרא הכמת הכולל (universal quantifier).</em></span>
  - $\exists x\,(\alpha)$ → <span style="color:#2563eb;"><em>"יש $x$ כזה ש־$\alpha$". נקרא הכמת הקיומי (existential quantifier).</em></span>

  
- השפה המתמטית גמישה: אותו רעיון ניתן לנסח בכמה אופנים.  
  אל תשננו נוסח מילולי בלבד - הבינו את המשמעות ובחרו ניסוח שנוח לכם.

<div class="absolute top-57 left-16 w-88 text-center text-sm">
  <img src="/images/forall_smart_or_no_logic.png" class="w-88 mix-blend-multiply" />

  "לכל $x$: $x$ חכם או $x$ לא לומד לוגיקה" &nbsp;😉

  <div dir="ltr">

  $\forall x\,\big(S(x) \vee \neg L(x)\big) \;\equiv\; \forall x\,\big(L(x) \to S(x)\big)$

  </div>

  $S(x)$: "$x$ חכם", &nbsp; $L(x)$: "$x$ לומד לוגיקה"
</div>

---

# טבלאות אמת

טבלאות האמת מסכמות את התנהגות הקשרים; $T$ = אמת, $F$ = שקר.


<div style="display: flex; justify-content: center;">
<div class="truth-table">

| $\alpha$ | $\beta$ | $\neg\alpha$ | $\alpha\vee\beta$ | $\alpha\wedge\beta$ | $\alpha\to\beta$ | $\alpha\leftrightarrow\beta$ |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| $T$ | $T$ | $F$ | <span v-mark.circle.red="1">$T$</span> | $T$ | $T$ | $T$ |
| $T$ | $F$ | $F$ | $T$ | $F$ | $F$ | $F$ |
| $F$ | $T$ | $T$ | $T$ | $F$ | $T$ | $F$ |
| $F$ | $F$ | $T$ | $F$ | $F$ | $T$ | $T$ |

</div>
</div>

הטבלה מגדירה איך אנחנו בונים טענות מורכבות מתוך טענות פשוטות.


נשתמש בטבלאות אמת כדי להוכיח שקילות בין טענות - אבל זו **רק אחת הדרכים** לעשות זאת.

דרכים נוספות: מעבר בשרשרת של שקילויות ידועות, או טיעון מילולי ישיר.

<div v-click="1" class="absolute top-40 left-6 w-68 p-3 text-sm leading-snug bg-red-50 border-2 border-red-600 rounded-xl">

במתמטיקה "או" הוא תמיד **"או כולל"** (inclusive or):<br>
$\alpha \vee \beta$ אמיתי גם כששתיהן אמיתיות.

לעומתו, **"או מוציא"** (XOR),<br>
"אחד מהשניים אבל לא שניהם",<br>
היה נותן בשורה הזו $F$.

</div>

<svg v-click="1" class="hand-arrow absolute top-0 left-0 pointer-events-none" width="980" height="552" viewBox="0 0 980 552">
  <g fill="none" stroke="#dc2626" stroke-linecap="round" stroke-linejoin="round">
    <path class="draw" pathLength="1" stroke-width="3" d="M249 268 C 268 286, 300 282, 320 262 C 332 252, 350 247, 372 248 C 392 250, 404 256, 434 243" />
    <path class="draw" pathLength="1" stroke-width="1.2" opacity="0.55" d="M251 270 C 271 287, 302 280, 321 260 C 334 251, 352 249, 373 250 C 393 252, 405 257, 433 244" />
    <path class="draw head" pathLength="1" stroke-width="3" transform="translate(2 -3) rotate(-25 432 246)" d="M417 236 C 423 240, 428 243, 432 246 C 427 249, 421 253, 416 257" />
  </g>
</svg>

<style>
.hand-arrow { z-index: 20; }
.hand-arrow .draw { stroke-dasharray: 1; stroke-dashoffset: 0; }
.slidev-vclick-target:not(.slidev-vclick-hidden) .draw { animation: hand-draw 0.7s ease-out both; }
.slidev-vclick-target:not(.slidev-vclick-hidden) .draw.head { animation-delay: 0.6s; animation-duration: 0.25s; }
@keyframes hand-draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
</style>

---

# שקילות לוגית

- שתי טענות, $\alpha$ ו־$\beta$, ייקראו **שקולות לוגית** אם יש להן אותו ערך אמת בכל מצב.
- במילים אחרות, בכל שורה בטבלת האמת, ערכי האמת של $\alpha$ ו־$\beta$ זהים.
- כאשר שתי טענות שקולות, נסמן זאת $\alpha \equiv \beta$.
  
- ההבדל בין $\alpha \leftrightarrow \beta$ לבין $\alpha \equiv \beta$ הוא:
  - $\alpha \leftrightarrow \beta$ הוא **פסוק** בשפה הפורמלית, שיכול להיות אמיתי או שקרי.
  - $\alpha \equiv \beta$ הוא **טענה שלנו** (במטא-שפה) על כך שהפסוק $\alpha \leftrightarrow \beta$ הוא טאוטולוגיה (אמיתי תמיד).

- נלמד שקילויות שימושיות רבות ונשתמש בהן כדי לפשט טענות מורכבות.
- נראה גם כיצד להוכיח שקילות בין טענות באמצעות טבלאות אמת וגם באמצעות **טיעונים לוגיים**.

<div v-click class="dlg">
<div class="dlg-line left">
<img src="/images/avatar_logician.png" />
<div class="dlg-bubble">

או שתביא מטריה,<br>או שתירטב (או שניהם).

</div>
</div>
<div class="dlg-line right">
<img src="/images/avatar_student_skeptic.png" />
<div class="dlg-bubble">

התכוונת שאם **לא** אביא מטריה -<br>אז אירטב?

</div>
</div>
<div class="dlg-line left">
<img src="/images/avatar_logician_rain.png" />
<div class="dlg-bubble">

זה בדיוק מה שאמרתי! 🌧️

$\neg \alpha \to \beta \;\equiv\; \alpha \vee \beta$

</div>
</div>
<div class="dlg-legend">

$\alpha$: "תביא מטריה", &nbsp; $\beta$: "תירטב"

</div>
</div>

<style>
.dlg { position: absolute; left: 1.5rem; top: 13rem; width: 22rem; display: flex; flex-direction: column; gap: 2.6rem; direction: ltr; }
.dlg-line { display: flex; align-items: center; gap: 16px; }
.dlg-line.left { flex-direction: row; }
.dlg-line.right { flex-direction: row-reverse; }
.dlg-line img {
  flex: none; width: 4.2rem; height: 4.2rem; border-radius: 50%;
  border: 3px solid #1f2937; object-fit: cover;
}
.dlg-bubble {
  position: relative; flex: 1; padding: 8px 12px; text-align: center; direction: rtl;
  background: #fff; border: 2.5px solid #1f2937; border-radius: 18px;
  font-size: 0.95rem; line-height: 1.4; box-shadow: 3px 3px 0 #1f2937;
}
.dlg-bubble p { margin: 0; }
.dlg-bubble::before {
  content: ""; position: absolute; top: 50%; width: 16px; height: 16px; margin-top: -8px;
  background: #fff; border: 2.5px solid #1f2937; transform: rotate(45deg);
}
.dlg-line.left .dlg-bubble::before { left: -10px; border-top: none; border-right: none; }
.dlg-line.right .dlg-bubble::before { right: -10px; border-bottom: none; border-left: none; }
.dlg-line.left .dlg-bubble { background: #eff6ff; }
.dlg-line.left .dlg-bubble::before { background: #eff6ff; }
.dlg-line.right .dlg-bubble, .dlg-line.right .dlg-bubble::before { background: #fef3c7; }
.dlg-legend { text-align: center; font-size: 0.8rem; margin-top: -1.2rem; direction: rtl; }
.dlg-legend p { margin: 0; }
</style>

---

#  הוכחת שקילויות באמצעות טבלאות אמת


 
<div style="display: flex; justify-content: center; margin-top: 70px;">
<div class="truth-table">

| $\alpha$ | $\beta$ | $\neg\alpha$ | $\neg\alpha\to\beta$ | $\alpha\vee\beta$ |
|:--:|:--:|:--:|:--:|:--:|
| $T$ | $T$ | $F$ | $T$ | $T$ |
| $T$ | $F$ | $F$ | $T$ | $T$ |
| $F$ | $T$ | $T$ | $T$ | $T$ |
| $F$ | $F$ | $T$ | $F$ | $F$ |

</div>
</div>

<img v-click class="absolute top-40 right-190 w-80 h-90" src="/images/טבלת אמת.png" />
<img v-click class="absolute top-60 right-20  w-80 h-90" src="/images/טבלת אמת2.png" />

---

# שלילת טענות

שלילת טענות היא כלי בסיסי וחיוני. עם תרגול, המעבר מטענה לשלילתה הופך טבעי ומהיר:


- **שלילה כפולה:** $\alpha \equiv \neg(\neg\alpha)$ <span style="color:#2563eb;">⟶ שלילת השלילה שקולה לטענה המקורית.</span>  

- **שלילת קוניונקציה:** $\neg(\alpha\wedge\beta)\equiv \neg\alpha\vee\neg\beta$ <span style="color:#2563eb;">⟶ שימושי בהוכחות בשלילה.</span>  

- **שלילת דיסיונקציה:** $\neg(\alpha\vee\beta)\equiv \neg\alpha\wedge\neg\beta$ <span style="color:#2563eb;">⟶ כלל דה־מורגן.</span>  

- **שלילת גרירה:** $\neg(\alpha\to\beta)\equiv \alpha\wedge\neg\beta$ <span style="color:#2563eb;">⟶ משמעות של “אם לא אז”.</span>  

- **כלל ההיפוך (קונטרפוזיציה):** $\alpha\to\beta \equiv \neg\beta\to\neg\alpha$ <span style="color:#2563eb;">⟶ מאפשר להחליף הנחות ומסקנות.</span>

<br>

<div class="text-center text-3xl font-bold" style="color:#7c3aed;">איך נוכיח טענות אלה?</div>

<div v-click class="text-center text-4xl font-bold mt-4" style="color:#ea580c;">נסו להוכיח בעצמכם! ✍️</div>


---

# סיכום ביניים: מה למדנו עד כאן?

- הכרנו את הקשרים הלוגיים: $\land$, $\lor$, $\neg$, $\leftrightarrow$, $\to$.

- ראינו כיצד כל קשר מוגדר באמצעות טבלת אמת.
- למדנו כיצד לבנות טענות מורכבות מקשרים אלו.
- ראינו איך ניתן להרכיב טבלת אמת לכל טענה מורכבת ולנתח את ערך האמת שלה.
- הבנו את מושג השקילות הלוגית וכיצד להוכיח שקילות בין טענות בעזרת טבלאות אמת.


<br>

- מושגים מרכזיים: 

  - **טאוטולוגיה:** טענה שערך האמת שלה הוא True בכל מצב אפשרי (למשל $\alpha \vee \neg\alpha$).

  - **סתירה:** טענה שערך האמת שלה הוא False בכל מצב אפשרי (למשל $\alpha \wedge \neg\alpha$).
  - **שקילות לוגית:** שתי טענות הן שקולות אם יש להן אותו ערך אמת בכל מצב; כלומר, טבלת האמת שלהן זהה.





---
section: כמתים
---

# כמתים

- כמו הקשרים, גם הכמתים משמשים ליצירת טענות מורכבות. למשל:
  > "לכל מספר טבעי $n$ יש מספר ראשוני $p$ כך ש־$n < p$."

- אפשר היה לנסח זאת ללא משתנים ("לכל מספר טבעי, יש מספר ראשוני שגדול ממנו"), אך שימוש במשתנים ($n, p$) מבהיר את מבנה הטענה.
  - **המלצה:** להתרגל להשתמש במשתנים גם בניסוח בעברית.

- אם $\alpha$ היא טענה התלויה במשתנה $x$, אז הטענות $\forall x\,(\alpha)$ ו־$\exists x\,(\alpha)$ נקראות **"טענות מכומתות"**:
  - $\forall x\,(\alpha)$: טוענת שהנוסחה $\alpha$ נכונה **לכל** $x$.
  
  - $\exists x\,(\alpha)$: טוענת ש**קיים** לפחות $x$ אחד שעבורו $\alpha$ מתקיימת.


---

# שלילת טענות המכילות כמתים


- **שלילת כמת כולל:** השלילה של "כל $x$ מקיים את $\alpha$" היא "קיים $x$ שעבורו $\alpha$ שקרי".


- **שלילת כמת קיומי:** השלילה של "קיים $x$ המקיים את $\alpha$" היא "לכל $x$, $\alpha$ אינה נכונה".


- **חלחול שלילה:** ניתן להפעיל כללים אלו מספר פעמים. סימן השלילה "מחלחל פנימה" והופך כל כמת בדרכו:


- **דוגמה:** ניסוח שלילת הטענה "לכל מספר, אם הוא גדול משתיים, אז הוא גדול מאחת"<br>  בלי המילה "לא"
  1. **ניסוח פורמלי:** $\forall x (x>2 \to x>1)$
  2. **הוספת שלילה:** $\neg \forall x (x>2 \to x>1)$
  3. **הכנסת שלילה פנימה (הופכת כמת):** $\exists x \neg (x>2 \to x>1)$
  4. **שלילת גרירה:** $\exists x (x>2 \wedge \neg(x>1))$
  5. **פישוט:** $\exists x (x>2 \wedge x \le 1)$
- כלומר: $\neg \forall x (x>2 \to x>1) \equiv \exists x (x>2 \wedge x \le 1)$

<div class="floating-formula" style="--formula-top: 8rem; --formula-left: 2rem; --formula-font-size: 1.2rem;">
  
  $\neg \forall x\, (\alpha) \equiv \exists x\, (\neg\alpha)$
</div>

<div class="floating-formula" style="--formula-top: 13.5rem; --formula-left: 2rem; --formula-font-size: 1.2rem;">
  
  $\neg \exists x\, (\alpha) \equiv \forall x\, (\neg\alpha)$
</div>

<div class="floating-formula" style="--formula-top: 19rem; --formula-left: 2rem; --formula-font-size: 1.2rem;">

  $\neg \forall x (\exists y (\forall z (\alpha))) \equiv \exists x (\forall y (\exists z (\neg\alpha)))$
</div>

<style>
/* Apply margin only to top-level list items */
.slidev-layout > ul > li,
.slidev-layout > ol > li {
  margin-top: 1.7rem;
}
</style>


<!-- ######################################################################################################################## -->

---
section: הוכחות
layout: two-cols-header
---

# כללי הוכחה 

::left::


## **הוכחת גרירה ($\alpha \to \beta$):**
  
  - **ישירה:** מניחים את נכונות $\alpha$ ומוכיחים את $\beta$.

  - **קונטרפוזיציה:** מוכיחים את הטענה השקולה $\neg\beta \to \neg\alpha$ (מניחים את שלילת $\beta$ ומסיקים את שלילת $\alpha$).

  - **שלילה:** מניחים $\neg(\alpha \to \beta)$, כלומר $\alpha \wedge \neg\beta$, ומגיעים לסתירה.


## **הוכחת דיסיונקציה ($\alpha \vee \beta$):**
  
  - **גרירה שקולה:** מוכיחים $\neg\alpha \to \beta$ או $\neg\beta \to \alpha$.
  
  - **שלילה:** מניחים $\neg(\alpha \vee \beta)$, כלומר $\neg\alpha \wedge \neg\beta$, ומגיעים לסתירה.

::right::


## **הוכחת קוניונקציה ($\alpha \wedge \beta$):**

<br>

  - מוכיחים כל טענה בנפרד: מוכיחים את $\alpha$ ומוכיחים את $\beta$.



## **פיצול למקרים ($( \alpha \vee \beta ) \to \gamma$):**
  
  - מוכיחים בנפרד $\alpha \to \gamma$ וגם $\beta \to \gamma$.
  
  - שקילות: $(\alpha \vee \beta) \to \gamma \equiv (\alpha \to \gamma) \wedge (\beta \to \gamma)$.
  <!-- - **דוגמה:** "אם תבואו ב-10:00 **או** ב-13:00, תמצאו את הילדים בחצר". כדי לאמת זאת, עליכם לבדוק גם ב-10:00 **וגם** ב-13:00. -->

## **הוכחה באמצעות טענת ביניים:**
  <br>

  - כדי להוכיח $\alpha \to \beta$, ניתן למצוא טענת ביניים $\gamma$ <br>
    ולהוכיח $\alpha \to \gamma$ וגם $\gamma \to \beta$.

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

# דוגמה: שלוש דרכים להוכחת גרירה


נניח שעלינו להוכיח את הגרירה:  **אם $n$ מתחלק ב-4 אז $n$ מתחלק ב-2.**

- **הוכחה ישירה:**  

  - נניח $n$ מתחלק ב-4. כלומר, קיים $k$ כך ש-$n=4k$.  
  - אז $n=2(2k)$ ולכן $n$ מתחלק ב-2.

- **הוכחת קונטרפוזיציה:**  
  - נוכיח: אם $n$ לא מתחלק ב-2 אז $n$ לא מתחלק ב-4.  
    - אם $n$ לא מתחלק ב-2, אז $n$ אי-זוגי.  
    - מספר אי-זוגי אינו מתחלק ב-4.

- **הוכחה בשלילה:**  
  - נניח $n$ מתחלק ב-4 אך לא מתחלק ב-2.  
  - אם $n=4k$ אז $n$ זוגי, סתירה לכך ש-$n$ לא מתחלק ב-2.
  

<img src="/images/הוכחת גרירה.png" class="absolute top-40 right-180 w-100 h-100 opacity-80" />  




---

# הוכחה בדרך השלילה

טכניקת הוכחה חשובה היא **הוכחה בדרך השלילה**. כדי להוכיח טענה $\alpha$, אנו מניחים את שלילתה ($\neg\alpha$) ומוכיחים שהנחה זו מובילה לסתירה.

<img class="absolute top-1.2/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-80" src="/images/הוכחה בשלילה.png" />



---

# עוד דוגמה להוכחה בשלילה

**משפט:** אין מספר רציונלי $r$ כך ש-$r^2=2$. כלומר, לכל מספר רציונלי $r$, $r^2 \neq 2$.

**הוכחה:**
- **הנחת השלילה:** נניח שיש מספר רציונלי $r$ כך ש-$r^2=2$.
- נכתוב את $r$ כשבר מצומצם: $r = \frac{p}{q}$, כאשר $p, q$ הם מספרים שלמים ללא גורם משותף גדול מ-1 (ונניח $p,q \ge 1$).
- מהנחת השלילה: $(\frac{p}{q})^2 = 2$, כלומר $\frac{p^2}{q^2} = 2$, ולכן $p^2 = 2q^2$.
- משוואה זו מראה כי $p^2$ הוא מספר זוגי.
- אם ריבוע של מספר הוא זוגי, גם המספר עצמו חייב להיות זוגי (כי ריבוע של אי-זוגי הוא אי-זוגי). לכן, $p$ הוא מספר זוגי.
- נכתוב $p=2k$ עבור מספר שלם $k$.
- נציב זאת במשוואה: $(2k)^2 = 2q^2$, כלומר $4k^2 = 2q^2$, אשר מפושט ל-$2k^2 = q^2$.
- משוואה זו מראה כי $q^2$ הוא מספר זוגי, ולכן גם $q$ הוא מספר זוגי.
- קיבלנו שגם $p$ וגם $q$ הם מספרים זוגיים, כלומר שניהם מתחלקים ב-2.
- זוהי **סתירה** להנחה שהשבר $\frac{p}{q}$ הוא מצומצם.
- לכן, הנחת השלילה שגויה, והמשפט המקורי נכון.

<img class="absolute top-1.2/2 right-3/4 w-60 h-50" src="/images/sqrt_2.png" />




---
layout: two-cols-header
class: text-lg
---

# דוגמה: שתי דרכים להוכחת דיסיונקציה

נבחן מצב פתיחה מסוים במשחק שחמט (פתיחה X), ונגדיר שתי טענות:
- $A$: יש שחקן שיכול לכפות ניצחון.
- $B$: תחת משחק מושלם התוצאה היא תיקו.

הטענה: $A \vee B$.

- **הוכחה 1 - גרירה שקולה ($\neg A \to B$):**  
  נניח שאין שחקן שיכול לכפות ניצחון ($\neg A$). תחת הנחה זו, ננתח את עץ המהלכים מהמצב הנתון ונבחן את התגובות האפשריות. אם בשום ענף אין מהלך שמוביל לניצחון כפוי של מישהו (זו בדיוק ההנחה), הרי שכל ענף שממשיך תחת שחקנים המממשים משחק מושלם אינו מוביל לניצחון חד־משמעי, ולכן התוצאה בכל ענף תהיה תיקו. כלומר, מהנחת $\neg A$ עוקב $B$, ולכן $A \vee B$ מתקיים.

- **הוכחה 2 - שלילה (הוכחה על ידי סתירה):**  
  לשם הניגוד, נניח שהטענה $A \vee B$ שגויה, כלומר $\neg A \wedge \neg B$ - אין ניצחון כפוי ואין תיקו כפוי. אך אם אין תיקו כפוי, זה אומר שיש לפחות שחקן אחד שיכול לכפות ניצחון (בניגוד ל־$\neg A$), או שיש מצב שבו אף אחד לא יכול לכפות תיקו, מה שמוביל לסתירה עם ההנחה שהמשחק מושלם. מכיוון שההנחה מובילה לסתירה, היא אבסורדית, ולכן $A \vee B$ חייבת להיות נכונה.

--- 

# הוכחת קוניונקציה

- נרצה להראות: "התנין $c$ ארוך וגם ירוק".  
נסמן:
  - $L(c)$ := "התנין $c$ ארוך".
  
  - $G(c)$ := "התנין $c$ ירוק".  
  - הטענה: $L(c)\wedge G(c)$.

- **שלב 1 - הוכחת $L(c)$:** הצגת ראיה ישירה (למשל מדידה) לכך שהתנין ארוך.  
- **שלב 2 - הוכחת $G(c)$:** הצגת ראיה עצמאית (למשל תצפית) לכך שהתנין ירוק.  
- **שלב 3 - חיבור:** לפי כלל ההקדמה לקוניונקציה, אם הראינו $L(c)$ ו־$G(c)$, ניתן להסיק $L(c)\wedge G(c)$.

**סיכום:** הוכחת קוניונקציה מתבצעת על‑ידי הוכחת כל רכיב בנפרד ולאחר מכן חיבורם.

<img src="/images/הוכחת קוניוקציה.png" class="absolute top-40 left-10  h-70" />

---

# הוכחת טענות מהצורה $\forall x(\alpha)$

להוכחת טענות מהצורה $\forall x(\alpha)$, עלינו להראות שלא משנה איזה ערך נציב במשתנה $x$, הטענה $\alpha$ תהיה אמיתית עבור ערך זה.

לשם כך מתחילים את ההוכחה עם משתנה $x$ כללי, עליו לא מניחים הנחות מוקדמות, ומוכיחים את נכונותה של $\alpha$.

**דוגמה:**  
נוכיח: לכל מספר טבעי $n$, אם הוא מתחלק ב-4, אז הוא מתחלק גם ב-2.

הוכחה:
- יהי $n$ מספר טבעי כלשהו (הצגת משתנה כללי).

- יש להראות: אם $n$ מתחלק ב-4 אז $n$ מתחלק ב-2.
- נניח כי $n$ מתחלק ב-4, כלומר קיימת $k\in\mathbb{N}$ כך ש-$n=4k$.
- מכיוון ש-$n=4k=2(2k)$, ניתן לכתוב $n$ כמכפלה של 2 במספר הטבעי $2k$.
- לכן $n$ מתחלק ב-2 כנדרש.

<img src="/images/בחירת איבר כללי.png" class="absolute top-70 left-15  h-70" />


---

# הוכחה באמצעות חלוקה למקרים

- כאשר הטענה שאנו רוצים להוכיח תלויה בתנאים שניתן למנות, אפשר לחלק את ההוכחה למקרים נפרדים.

- דוגמה

  - נגדיר קשר לוגי חדש, הנקרא NAND (Not AND): 
$p \uparrow q := \neg(p\wedge q)$.

  - משפט: כל טענה לוגית המורכבת משני משתנים בוליאניים $p$ ו-$q$ יכולה להיות מיוצגת באמצעות ביטוי המכיל רק את האופרטור NAND ($\uparrow$).


  - הוכחה בשקף הבא: נבנה את כל 16 הטבלאות האפשריות בעזרת NAND בלבד.


<img src="/images/חלוקה למקרים.png" class="absolute top-100 right-100  h-50 w-60" />


---


#  כל 16 הטענות האפשריות ממומשות באמצעות NAND בלבד


<div class="absolute top-50 right-3">
<div style="display: flex; justify-content: center; margin-top: -10px;">
<div class="truth-table" style="font-size:1.1rem;">

| $p$ | $q$ | F1  | F2  | F3  | F4  | F5  | F6  | F7  | F8  | F9  | F10 | F11 | F12 | F13 | F14 | F15 | F16 |
|:--: |:--: |:--: |:--: |:--: |:--: |:--: |:--: |:--: |:--: |:--: |:--: |:--:|:--:|:--:|:--:|:--:|:--:|
| $T$ | $T$ | $T$ | $T$ | $T$ | $T$ | $T$ | $T$ | $T$ | $T$ | $F$ | $F$ | $F$ | $F$ | $F$ | $F$ | $F$ | $F$ |
| $T$ | $F$ | $T$ | $T$ | $T$ | $T$ | $F$ | $F$ | $F$ | $F$ | $T$ | $T$ | $T$ | $T$ | $F$ | $F$ | $F$ | $F$ |
| $F$ | $T$ | $T$ | $T$ | $F$ | $F$ | $T$ | $T$ | $F$ | $F$ | $T$ | $T$ | $F$ | $F$ | $T$ | $F$ | $F$ | $F$ |
| $F$ | $F$ | $T$ | $F$ | $T$ | $F$ | $T$ | $F$ | $T$ | $F$ | $F$ | $F$ | $T$ | $F$ | $T$ | $T$ | $F$ | $F$ |

</div>
</div>
</div>


  <div style="direction:ltr; text-align:left; font-size:1rem;">

  - <span style="direction:ltr; display:inline-block; min-width:3em;">F1:</span> $p\uparrow(p\uparrow p)$
  - <span style="direction:ltr; display:inline-block; min-width:3em;">F2:</span> $(p\uparrow p)\uparrow(q\uparrow q)$
  - <span style="direction:ltr; display:inline-block; min-width:3em;">F3:</span> $q\uparrow(p\uparrow p)$
  - <span style="direction:ltr; display:inline-block; min-width:3em;">F4:</span> $(p\uparrow p)\uparrow(p\uparrow p)$
  - <span style="direction:ltr; display:inline-block; min-width:3em;">F5:</span> $p\uparrow(q\uparrow q)$
  - <span style="direction:ltr; display:inline-block; min-width:3em;">F6:</span> $(q\uparrow q)\uparrow(q\uparrow q)$
  - <span style="direction:ltr; display:inline-block; min-width:3em;">F7:</span> $(p\uparrow q)\uparrow\big((p\uparrow p)\uparrow(q\uparrow q)\big)$
  - <span style="direction:ltr; display:inline-block; min-width:3em;">F8:</span> $(p\uparrow q)\uparrow(p\uparrow q)$
  - <span style="direction:ltr; display:inline-block; min-width:3em;">F9:</span> $p\uparrow q$
  - <span style="direction:ltr; display:inline-block; min-width:3em;">F10:</span> $((p\uparrow q)\uparrow p)\uparrow((p\uparrow q)\uparrow q)$
  - <span style="direction:ltr; display:inline-block; min-width:3em;">F11:</span> $q\uparrow q$
  - <span style="direction:ltr; display:inline-block; min-width:3em;">F12:</span> $(p\uparrow(q\uparrow q))\uparrow(p\uparrow(q\uparrow q))$
  - <span style="direction:ltr; display:inline-block; min-width:3em;">F13:</span> $p\uparrow p$
  - <span style="direction:ltr; display:inline-block; min-width:3em;">F14:</span> $((p\uparrow p)\uparrow q)\uparrow((p\uparrow p)\uparrow q)$
  - <span style="direction:ltr; display:inline-block; min-width:3em;">F15:</span> $((p\uparrow p)\uparrow(q\uparrow q))\uparrow((p\uparrow p)\uparrow(q\uparrow q))$
  - <span style="direction:ltr; display:inline-block; min-width:3em;">F16:</span> $((p\uparrow p)\uparrow p)\uparrow((p\uparrow p)\uparrow p)$

  </div>


