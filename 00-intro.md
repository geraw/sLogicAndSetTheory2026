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

- **להבין שפה פורמלית** — נלמד לנסח טענות בפסוקים וכמתים, כדי שנוכל להגדיר מושגים לוגיים באופן נקי שאינו משתמע לשתי פנים.

- **לרכוש מיומנויות הוכחה** — נלמד איך מתמטיקאים (ובעקבותיהם גם מהנדסים וחוקרים בתחומים שונים) משכנעים אחד את השני בנכונות טענות. זה יהיה מרכז הקורס.

- **לבנות ולנתח מבנים מתמטיים** — נלמד לתאר נתונים ותהליכים בעזרת קבוצות, יחסים ופונקציות, כדי לחשוב עליהם בדיוק ולהוכיח נכונותם באופן לוגי.

- **לפתח חשיבה אלגוריתמית** — נלמד אינדוקציה, כדי שנוכל להוכיח טענות על אינסוף מקרים בבת אחת, ולהבין למה הן נכונות לכל גודל.

- **להכין בסיס ללימודים מתקדמים** — נלמד לקרוא, לנסח ולבדוק טענות מדויקות, כדי שנוכל להמשיך ללמוד ולעבוד בתחומים מתקדמים שנשענים על שפה זו.

::right::

<img src="/images/למה אנחנו כאן.png" class="w-100 mt-7 mr-20" />

---

# דוגמה: קוד מסוכני AI - עם הוכחה

- חלק גדל והולך מהקוד נכתב היום בידי סוכני בינה מלאכותית.
  
- איך נדע שהקוד נכון? בדיקות (tests) מכסות רק חלק זעיר מהקלטים האפשריים.
  
- מגמה מתפתחת: הסוכן מגיש את הקוד **יחד עם הוכחה פורמלית** שהוא עומד במפרט.
  
- את ההוכחה בודק כלי אוטומטי (למשל [Lean](https://lean-lang.org/) או [Dafny](https://dafny.org/)), כך שאין צורך "לסמוך" על הסוכן.
  
- כדי לנסח מפרט ולקרוא הוכחה צריך בדיוק את מה שנלמד בקורס: קשרים, כמתים ומבני הוכחה.
  - למשל, המפרט של מיון מערך $a$ למערך $b$:
    - $b$ ממוין: $\forall i\,(i<n-1 \to b[i]\le b[i+1])$
    - $b$ הוא סידור מחדש של $a$:<br>
      $\exists \pi\,\big(\forall i\,\forall j\,(\pi(i)=\pi(j)\to i=j)\,\wedge\,\forall i\,(b[i]=a[\pi(i)])\big)$
    - כל האינדקסים, וגם הערכים של $\pi$, הם בין $0$ ל־$n-1$.

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


<img src="/images/שיקלול.png" class="absolute top-40 right-110 w-140 h-100" />

---

# לוח נושאים

1. לוגיקה פסוקית: טבלאות אמת, שקילות, גרירה  
   
2. תורת הקבוצות: פעולות, חזקה, איחוד וחיתוך אונרי, חלוקות  
   
3. יחסים ומכפלות קרטזיות  
   
4. יחסי סדר: חלקי/קווי, שרשראות/אנטי־שרשראות  
   
5. יחסי שקילות ומרחבי מנה; “מוגדר היטב” 
   
6. פונקציות: חד־חד־ערכיות, על, הרכבה, הפיכות, קדם־תמונה/תמונה  
   
7. אינדוקציה, אינדוקציה שלמה, עקרון המינימום, שובך היונים  
   
8. עוצמות: בנות־מנייה, קנטור–ברנשטיין, קנטור, $|\mathbb{R}|=|P(\mathbb{N})|$  
   
9. אינדוקציה מבנית ומבוא ללוגיקה מסדר ראשון: נוסחאות, מבנים, איזומורפיזם

---

# מפת סמסטר
- הרצאות 1–2: קשרים לוגיים, כמתים, מבני הוכחה  
  
- 3–5: פעולות בקבוצות, דה־מורגן, קבוצת חזקה  
  
- 6–8: זוגות סדורים, יחסים ותכונות (רפלקסיבי/סימטרי/טרנזיטיבי)  
  
- 9–11: יחסי סדר חלקיים וקוויים, מינימום/מקסימום, עוקב מיידי  
  
- 12–13: יחסי שקילות ומרחבי מנה  
  
- 14–16: פונקציות (חד״ע/על/הפוכה, הרכבה, “מוגדר היטב”)  
  
- 17–19: קבוצות סופיות ואינדוקציה (שובך היונים וכו׳)  
  
- 20(+): **אינדוקציה מבנית** - הגדרות רקורסיביות על מבנים וסכמות הוכחה  
  
- 21–24: עוצמות וקנטור–ברנשטיין  
  
- 25–26: שמות עצם ונוסחאות, חזרה

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
section: השפה המתמטית
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

# שמות עצם וטענות

כל ביטוי מתמטי תקין הוא אחד משני סוגים:

<div class="nouns grid grid-cols-2 gap-8 mt-6 mb-8">
<div class="p-3 rounded-xl border-2 border-blue-400 bg-blue-50">

**שם עצם** - מציין אובייקט מתמטי<br>(מספר, קבוצה, פונקציה...)

- $3+4$
- $\sqrt{2}$
- $\{1,2,3\}$
- $x^2+1$ &nbsp;<span class="text-sm">(הערך תלוי ב־$x$)</span>

</div>
<div class="p-3 rounded-xl border-2 border-green-500 bg-green-50">

**טענה** - אומרת משהו שהוא אמת או שקר

- $3+4=7$ &nbsp;<span class="text-sm">(אמת)</span>
- $\sqrt{2}\in\mathbb{Q}$ &nbsp;<span class="text-sm">(שקר)</span>
- $2\in\{1,2,3\}$ &nbsp;<span class="text-sm">(אמת)</span>
- $x^2+1>0$ &nbsp;<span class="text-sm">(ערך האמת תלוי ב־$x$)</span>

</div>
</div>

- כשיש בביטוי משתנה כמו $x$, שערכו לא נקבע, הוא נקרא **משתנה חופשי**. נחזור לכך בהמשך.
- על כל ביטוי כדאי לשאול: **האם זה שם עצם או טענה?** למשל, "$3+4$ הוא אמת" הוא משפט חסר משמעות.

<style>
.nouns li { margin-top: 0.6rem; margin-bottom: 0.6rem; }
.slidev-layout > ul > li { margin-top: 1rem; }
</style>

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
    - המילה הראשית שלו (הכמת או הקשר החיצוני ביותר) היא "<span style="color:#0d6efd">לכל</span>".
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

  $\forall x\,\big(S(x) \vee \neg L(x)\big)$<br>
  אפשר גם: $\forall x\,\big(L(x) \to S(x)\big)$

  $S(x)$: "$x$ חכם", &nbsp; $L(x)$: "$x$ לומד לוגיקה"
</div>

---

# המילה הראשית

- בכל טענה מורכבת יש **מילה ראשית**: הקשר או הכמת **החיצוני ביותר**. היא קובעת מה הטענה אומרת, איך מוכיחים אותה ואיך שוללים אותה.
- מפרקים טענה כמו בצל: מזהים את המילה הראשית, ואז ממשיכים פנימה. למשל, מעל המספרים הממשיים:

<div class="mw-grid">
<div>

<div class="mw-formula" dir="ltr">

<span v-click="1" class="lv lv1"><span class="w">$\forall x$</span> <span v-click="2" class="lv lv2">$($ $x>0$ <span class="w">$\to$</span> <span v-click="3" class="lv lv3"><span class="w">$\exists y$</span> <span v-click="4" class="lv lv4">$($ $y>0$ <span class="w">$\wedge$</span> $y\cdot y=x$ $)$</span></span> $)$</span></span>

</div>

<div v-click="1" class="step s1">

<b>$\forall x$</b> &nbsp;"לכל $x$ ...": המילה הראשית של כל הטענה

</div>
<div v-click="2" class="step s2">

<b>$\to$</b> &nbsp;"אם $x>0$ אז ...": המילה הראשית בתוך ה"לכל"

</div>
<div v-click="3" class="step s3">

<b>$\exists y$</b> &nbsp;"יש $y$ ...": המילה הראשית במסקנה של הגרירה

</div>
<div v-click="4" class="step s4">

<b>$\wedge$</b> &nbsp;"$y>0$ וגם $y\cdot y=x$": המילה הראשית בתוך ה"יש"

</div>

<div v-click="5" class="mt-3">

בעברית: לכל $x$ חיובי יש $y$ חיובי כך ש־$y\cdot y=x$.

גם הסוגריים קובעים: ב־$\neg(\alpha\wedge\beta)$ המילה הראשית היא $\neg$, וב־$\neg\alpha\wedge\beta$ היא $\wedge$.

</div>

</div>
<div class="mw-tree" dir="ltr">
<svg width="360" height="290" viewBox="0 0 360 290">
  <g v-click="2" stroke="#dc2626"><line x1="180" y1="20" x2="180" y2="82" /><line x1="180" y1="82" x2="80" y2="144" /></g>
  <g v-click="3" stroke="#16a34a"><line x1="180" y1="82" x2="265" y2="144" /></g>
  <g v-click="4" stroke="#7c3aed"><line x1="265" y1="144" x2="265" y2="206" /><line x1="265" y1="206" x2="195" y2="268" /><line x1="265" y1="206" x2="320" y2="268" /></g>
</svg>
<div v-click="1" class="node c1" style="left:180px; top:20px;">

$\forall x$

</div>
<div v-click="2" class="node c2" style="left:180px; top:82px;">

$\to$

</div>
<div v-click="2" class="node leaf" style="left:80px; top:144px;">

$x>0$

</div>
<div v-click="3" class="node c3" style="left:265px; top:144px;">

$\exists y$

</div>
<div v-click="4" class="node c4" style="left:265px; top:206px;">

$\wedge$

</div>
<div v-click="4" class="node leaf" style="left:195px; top:268px;">

$y>0$

</div>
<div v-click="4" class="node leaf" style="left:320px; top:268px;">

$y\cdot y=x$

</div>
</div>
</div>

<div class="text-center text-xl font-bold mt-2" style="color:#7c3aed;">נשאל "מהי המילה הראשית?" בכל דוגמה בקורס</div>

<style>
.mw-grid { display: grid; grid-template-columns: 1fr 360px; gap: 1.5rem; margin-top: 0.6rem; }
.mw-formula { font-size: 1.25rem; text-align: center; margin: 0.4rem 0 0.8rem; }
.mw-formula p { margin: 0; }
/* Each layer stays visible; a click only colors its box and its main word */
.slidev-layout .lv.slidev-vclick-hidden { opacity: 1 !important; }
.lv { display: inline-block; padding: 2px 5px; border: 2px solid transparent; border-radius: 8px; transition: border-color .3s, background-color .3s; }
.lv.slidev-vclick-hidden { border-color: transparent !important; background: transparent !important; }
.lv.slidev-vclick-hidden > .w { color: inherit !important; font-weight: normal; }
.lv1 { border-color: #2563eb; } .lv1 > .w { color: #2563eb; font-weight: bold; }
.lv2 { border-color: #dc2626; } .lv2 > .w { color: #dc2626; font-weight: bold; }
.lv3 { border-color: #16a34a; } .lv3 > .w { color: #16a34a; font-weight: bold; }
.lv4 { border-color: #7c3aed; background: rgba(124,58,237,.06); } .lv4 > .w { color: #7c3aed; font-weight: bold; }
.step { margin: 0.15rem 0; } .step p { margin: 0; }
.s1 b { color: #2563eb; } .s2 b { color: #dc2626; } .s3 b { color: #16a34a; } .s4 b { color: #7c3aed; }
.mw-tree { position: relative; width: 360px; height: 290px; }
.mw-tree svg { position: absolute; inset: 0; }
.mw-tree line { stroke-width: 2.5; }
.node { position: absolute; transform: translate(-50%, -50%); padding: 1px 10px; border: 2.5px solid; border-radius: 999px; background: #fff; font-size: 1.1rem; white-space: nowrap; z-index: 1; }
.node p { margin: 0; }
.node.c1 { border-color: #2563eb; color: #2563eb; } .node.c2 { border-color: #dc2626; color: #dc2626; }
.node.c3 { border-color: #16a34a; color: #16a34a; } .node.c4 { border-color: #7c3aed; color: #7c3aed; }
.node.leaf { border-color: #9ca3af; border-radius: 6px; color: #374151; }
</style>

---
section: קשרים וטבלאות אמת
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

# גרירה: אינטואיציה

- את $\alpha\to\beta$ אפשר לחשוב עליה כעל **הבטחה**: "אם תקבל 100 במבחן, אקנה לך אופניים".
  - ההבטחה מופרת רק אם קיבלת 100 ולא קיבלת אופניים: השורה $T,F$ בטבלה.
  - אם לא קיבלת 100, ההבטחה לא הופרה, מה שלא יקרה. לכן כש־$\alpha$ שקרית, $\alpha\to\beta$ אמיתית.

- גרירה אינה סיבתיות: "אם $2+2=4$ אז $\sqrt2\notin\mathbb{Q}$" היא טענה אמיתית, אף שאין קשר בין החלקים.

- הסדר חשוב: "לכל $n$, אם $n$ מתחלק ב־4 אז $n$ זוגי" נכונה,<br>
  אבל **ההפוכה** "לכל $n$, אם $n$ זוגי אז $n$ מתחלק ב־4" שקרית ($n=2$).

- $\alpha\leftrightarrow\beta$ אומרת שהגרירה מתקיימת בשני הכיוונים: $\alpha\to\beta$ וגם $\beta\to\alpha$.<br>
  לכן היא אמיתית בדיוק כש־$\alpha$ ו־$\beta$ שוות בערך האמת שלהן.

---

# שקילות לוגית

- שתי טענות, $\alpha$ ו־$\beta$, הבנויות מאותן טענות יסוד, ייקראו **שקולות לוגית** אם יש להן אותו ערך אמת **בכל השמה** של ערכי אמת לטענות היסוד.
- במילים אחרות, העמודות שלהן בטבלת האמת זהות.
- שקילות היא עניין של **צורה**, ולא של ערך האמת בפועל:<br>
  "$2+2=4$" ו־"$\sqrt2\notin\mathbb{Q}$" שתיהן אמת, אבל אינן שקולות.
- כאשר שתי טענות שקולות, נסמן זאת $\alpha \equiv \beta$.
  
- ההבדל בין $\alpha \leftrightarrow \beta$ לבין $\alpha \equiv \beta$ הוא:
  - $\alpha \leftrightarrow \beta$ הוא **פסוק** בשפה הפורמלית, שיכול להיות אמיתי או שקרי.
  - $\alpha \equiv \beta$ הוא **טענה שלנו** (במטא-שפה) על כך שהפסוק $\alpha \leftrightarrow \beta$ הוא טאוטולוגיה (אמיתי תמיד).


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

# שלוש צורות של אותה גרירה

<div class="formula-box my-3" style="font-size:1.3rem;">

$\alpha\to\beta \;\equiv\; \neg\beta\to\neg\alpha \;\equiv\; \neg\alpha\vee\beta$

</div>

- **קונטרפוזיציה** $\neg\beta\to\neg\alpha$: "אם לא קיבלת אופניים, סימן שלא קיבלת 100". אותה הבטחה, מנוסחת מהצד השני.
- **$\neg\alpha\vee\beta$**: "או שלא תקבל 100, או שתקבל אופניים". שוב אותה הבטחה.
- הבדיקה בטבלת אמת: שלוש העמודות הכחולות זהות. העמודה האדומה, **ההפוכה** $\beta\to\alpha$, שונה ממנה.

<div style="display: flex; justify-content: center;">
<div class="truth-table">

| $\alpha$ | $\beta$ | <span style="color:#2563eb">$\alpha\to\beta$</span> | <span style="color:#2563eb">$\neg\beta\to\neg\alpha$</span> | <span style="color:#2563eb">$\neg\alpha\vee\beta$</span> | <span style="color:#dc2626">$\beta\to\alpha$</span> |
|:--:|:--:|:--:|:--:|:--:|:--:|
| $T$ | $T$ | $T$ | $T$ | $T$ | $T$ |
| $T$ | $F$ | $F$ | $F$ | $F$ | <span style="color:#dc2626">$T$</span> |
| $F$ | $T$ | $T$ | $T$ | $T$ | <span style="color:#dc2626">$F$</span> |
| $F$ | $F$ | $T$ | $T$ | $T$ | $T$ |

</div>
</div>

- מכאן שתי טכניקות הוכחה: אפשר להוכיח $\alpha\to\beta$ על ידי הוכחת $\neg\beta\to\neg\alpha$, ואפשר להוכיח $\alpha\vee\beta$ על ידי הוכחת $\neg\alpha\to\beta$.

---

# שלילת טענות

שלילת טענות היא כלי בסיסי וחיוני. לכל כלל יש הסבר אינטואיטיבי:

- **שלילה כפולה:** $\neg(\neg\alpha)\equiv \alpha$ <span style="color:#2563eb;">⟶ "לא נכון ש־$\alpha$ לא נכונה" פירושו ש־$\alpha$ נכונה.</span>

- **דה־מורגן (1):** $\neg(\alpha\wedge\beta)\equiv \neg\alpha\vee\neg\beta$ <span style="color:#2563eb;">⟶ כדי ש"$\alpha$ וגם $\beta$" תיכשל, מספיק שאחת מהן תיכשל.</span>

- **דה־מורגן (2):** $\neg(\alpha\vee\beta)\equiv \neg\alpha\wedge\neg\beta$ <span style="color:#2563eb;">⟶ "$\alpha$ או $\beta$" נכשלת רק כששתיהן נכשלות.</span>

- **שלילת גרירה:** $\neg(\alpha\to\beta)\equiv \alpha\wedge\neg\beta$ <span style="color:#2563eb;">⟶ ההבטחה מופרת: $\alpha$ קרתה ו־$\beta$ לא.</span>

- **שלילת אם־ורק־אם:** $\neg(\alpha\leftrightarrow\beta)\equiv (\alpha\wedge\neg\beta)\vee(\neg\alpha\wedge\beta)$ <span style="color:#2563eb;">⟶ בדיוק אחת מהן נכונה.</span>

<br>

<div class="text-center text-3xl font-bold" style="color:#7c3aed;">איך נוכיח טענות אלה?</div>

<div v-click class="text-center text-4xl font-bold mt-4" style="color:#ea580c;">נסו להוכיח בעצמכם! ✍️</div>

---

# בדיקה בטבלת אמת: דה־מורגן ושלילת גרירה

את האינטואיציה אפשר תמיד לבדוק באופן מכני בטבלת אמת:

<div style="display: flex; justify-content: center; margin-top: 30px;">
<div class="truth-table">

| $\alpha$ | $\beta$ | $\alpha\wedge\beta$ | $\neg(\alpha\wedge\beta)$ | $\neg\alpha\vee\neg\beta$ | $\alpha\to\beta$ | $\neg(\alpha\to\beta)$ | $\alpha\wedge\neg\beta$ |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| $T$ | $T$ | $T$ | $F$ | $F$ | $T$ | $F$ | $F$ |
| $T$ | $F$ | $F$ | $T$ | $T$ | $F$ | $T$ | $T$ |
| $F$ | $T$ | $F$ | $T$ | $T$ | $T$ | $F$ | $F$ |
| $F$ | $F$ | $F$ | $T$ | $T$ | $T$ | $F$ | $F$ |

</div>
</div>

<br>

- העמודות של $\neg(\alpha\wedge\beta)$ ו־$\neg\alpha\vee\neg\beta$ זהות, ולכן הן שקולות.
- העמודות של $\neg(\alpha\to\beta)$ ו־$\alpha\wedge\neg\beta$ זהות, ולכן הן שקולות.
- **תרגיל:** בדקו בטבלת אמת את דה־מורגן (2) ואת שלילת אם־ורק־אם.

---

# כמה טענות יש על $\alpha$ ו־$\beta$?

- לטבלת אמת של שתי טענות יסוד יש 4 שורות, ובכל שורה הטענה יכולה להיות $T$ או $F$.
- לכן יש בדיוק $2^4=16$ טענות על $\alpha,\beta$ **עד כדי שקילות**: יש אינסוף ניסוחים, אבל רק 16 משמעויות.

<div style="display: flex; justify-content: center;">
<div class="truth-table" style="font-size:1rem;">

| $\alpha$ | $\beta$ | F1  | F2  | F3  | F4  | F5  | F6  | F7  | F8  | F9  | F10 | F11 | F12 | F13 | F14 | F15 | F16 |
|:--: |:--: |:--: |:--: |:--: |:--: |:--: |:--: |:--: |:--: |:--: |:--: |:--:|:--:|:--:|:--:|:--:|:--:|
| $T$ | $T$ | $T$ | $T$ | $T$ | $T$ | $T$ | $T$ | $T$ | $T$ | $F$ | $F$ | $F$ | $F$ | $F$ | $F$ | $F$ | $F$ |
| $T$ | $F$ | $T$ | $T$ | $T$ | $T$ | $F$ | $F$ | $F$ | $F$ | $T$ | $T$ | $T$ | $T$ | $F$ | $F$ | $F$ | $F$ |
| $F$ | $T$ | $T$ | $T$ | $F$ | $F$ | $T$ | $T$ | $F$ | $F$ | $T$ | $T$ | $F$ | $F$ | $T$ | $T$ | $F$ | $F$ |
| $F$ | $F$ | $T$ | $F$ | $T$ | $F$ | $T$ | $F$ | $T$ | $F$ | $T$ | $F$ | $T$ | $F$ | $T$ | $F$ | $T$ | $F$ |

</div>
</div>

<div dir="ltr" class="text-sm mt-3 names-table">

| F1: tautology | F2: $\alpha\vee\beta$ | F3: $\beta\to\alpha$ | F4: $\alpha$ |
|:--|:--|:--|:--|
| F5: $\alpha\to\beta$ | F6: $\beta$ | F7: $\alpha\leftrightarrow\beta$ | F8: $\alpha\wedge\beta$ |
| F9: $\neg(\alpha\wedge\beta)$ | F10: $\neg(\alpha\leftrightarrow\beta)$ | F11: $\neg\beta$ | F12: $\alpha\wedge\neg\beta$ |
| F13: $\neg\alpha$ | F14: $\neg\alpha\wedge\beta$ | F15: $\neg\alpha\wedge\neg\beta$ | F16: contradiction |

</div>

<style>
.names-table table { width: 100%; }
.names-table th, .names-table td { padding: 2px 10px; font-weight: normal; border: none; }
</style>

---

# למה צריך קשרים, וכמה?

- הקשרים הם **אוצר המילים** שבעזרתו כותבים כל אחת מ־16 הטבלאות.

- עם $\neg,\wedge,\vee$ בלבד אפשר לכתוב כל טבלה: לכל שורה שבה יש $T$ כותבים "וגם" שמתאר את השורה, ומחברים את כולן ב"או".
  - למשל F10 (XOR), שהיא $T$ בשורות $T,F$ ו־$F,T$:
    $\;(\alpha\wedge\neg\beta)\vee(\neg\alpha\wedge\beta)$

- אפשר להסתפק בפחות: $\alpha\to\beta\equiv\neg\alpha\vee\beta$, ו־$\alpha\vee\beta\equiv\neg(\neg\alpha\wedge\neg\beta)$, כך שמספיקים $\neg$ ו־$\wedge$.
  נראה מיד שאפילו קשר **אחד** מספיק.

- אבל ככל שיש פחות קשרים, הנוסחאות ארוכות וקשות יותר לקריאה.
  לכן משתמשים באוסף עשיר, $\neg,\wedge,\vee,\to,\leftrightarrow$, שמתאים לאופן שבו אנחנו חושבים: "וגם", "או", "אם... אז".

---

# קשר אחד מספיק: NAND

- נגדיר קשר לוגי חדש, הנקרא NAND (Not AND): 
$\alpha \uparrow \beta := \neg(\alpha\wedge\beta)$.

- **משפט:** כל אחת מ־16 הטענות על שתי טענות יסוד $p,q$ שקולה לביטוי שמכיל רק את הקשר NAND ($\uparrow$).

- **הוכחה:** נחלק ל־16 מקרים, אחד לכל טבלה, ולכל אחד נציג ביטוי NAND מתאים (בשקף הבא). את כל אחד מהם אפשר לבדוק בטבלת אמת.

- זו דוגמה ראשונה ל**הוכחה בחלוקה למקרים**, שנחזור אליה בהמשך.

---

#  כל 16 הטענות האפשריות ממומשות באמצעות NAND בלבד


<div class="absolute top-50 right-3">
<div style="display: flex; justify-content: center; margin-top: -10px;">
<div class="truth-table" style="font-size:1.1rem;">

| $p$ | $q$ | F1  | F2  | F3  | F4  | F5  | F6  | F7  | F8  | F9  | F10 | F11 | F12 | F13 | F14 | F15 | F16 |
|:--: |:--: |:--: |:--: |:--: |:--: |:--: |:--: |:--: |:--: |:--: |:--: |:--:|:--:|:--:|:--:|:--:|:--:|
| $T$ | $T$ | $T$ | $T$ | $T$ | $T$ | $T$ | $T$ | $T$ | $T$ | $F$ | $F$ | $F$ | $F$ | $F$ | $F$ | $F$ | $F$ |
| $T$ | $F$ | $T$ | $T$ | $T$ | $T$ | $F$ | $F$ | $F$ | $F$ | $T$ | $T$ | $T$ | $T$ | $F$ | $F$ | $F$ | $F$ |
| $F$ | $T$ | $T$ | $T$ | $F$ | $F$ | $T$ | $T$ | $F$ | $F$ | $T$ | $T$ | $F$ | $F$ | $T$ | $T$ | $F$ | $F$ |
| $F$ | $F$ | $T$ | $F$ | $T$ | $F$ | $T$ | $F$ | $T$ | $F$ | $T$ | $F$ | $T$ | $F$ | $T$ | $F$ | $T$ | $F$ |

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


---

# סיכום ביניים: מה למדנו עד כאן?

- הכרנו את הקשרים הלוגיים $\land$, $\lor$, $\neg$, $\to$, $\leftrightarrow$, וראינו שכל קשר מוגדר בטבלת אמת.
- שתי טענות **שקולות לוגית** אם העמודות שלהן בטבלת האמת זהות.
- שלוש צורות של גרירה: $\alpha\to\beta\equiv\neg\beta\to\neg\alpha\equiv\neg\alpha\vee\beta$. ההפוכה $\beta\to\alpha$ **אינה** שקולה.
- כללי שלילה: דה־מורגן, שלילת גרירה, שלילה כפולה.
- יש 16 טענות על שתי טענות יסוד עד כדי שקילות, וקשרים מעטים מספיקים כדי לכתוב את כולן.

<br>

- מושגים מרכזיים: 

  - **טאוטולוגיה:** טענה שערך האמת שלה הוא $T$ בכל השמה (למשל $\alpha \vee \neg\alpha$).

  - **סתירה:** טענה שערך האמת שלה הוא $F$ בכל השמה (למשל $\alpha \wedge \neg\alpha$).

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

- כשיש כמתים, טבלת אמת כבר לא מספיקה כדי לבדוק שקילות: $\alpha\equiv\beta$ פירושו שיש להן אותו ערך אמת **בכל פירוש** של הסמלים (בכל תחום ובכל משמעות של הפרדיקטים).

---
layout: two-cols-header
---

# משתנים חופשיים וקשורים

::left::

- **משתנה חופשי** "מחכה להשמה": ב־$x>2$ אי אפשר לדעת אם הטענה אמת עד שנציב ערך ב־$x$.

- **משתנה קשור** נתפס על ידי כמת, ואינו מחכה לדבר: $\forall x\,(x>2)$ היא פשוט טענה שקרית.

- באותה טענה יכולים להופיע שני הסוגים: ב־$\exists y\,(y^2=x)$ המשתנה $y$ קשור ו־$x$ חופשי.
  זו טענה **על $x$**: מעל $\mathbb{R}$ היא נכונה עבור $x=4$ ושקרית עבור $x=-1$.

- שם של משתנה קשור לא משנה: $\exists y\,(y^2=x)$ ו־$\exists z\,(z^2=x)$ אומרות אותו דבר.
  החלפת משתנה חופשי משנה את הטענה: $\exists y\,(y^2=w)$ היא טענה על $w$.

- בהוכחות נראה ש"**יהי $x$**" לוקח משתנה קשור וקובע אותו. מכאן והלאה הוא מתנהג כמשתנה חופשי.

- גם בהגדרת קבוצות, $\{x \mid \ldots\}$, המשתנה $x$ קשור (הרצאה הבאה).

::right::

<img src="/free_bound_variables_caricature_hebrew.png" class="w-80 mx-auto mt-6" />

<style>
.two-cols-header { column-gap: 30px; }
</style>

---

# שלילת טענות המכילות כמתים


- **שלילת כמת כולל:** השלילה של "כל $x$ מקיים את $\alpha$" היא "קיים $x$ שעבורו $\alpha$ שקרי".


- **שלילת כמת קיומי:** השלילה של "קיים $x$ המקיים את $\alpha$" היא "לכל $x$, $\alpha$ אינה נכונה".


- **חלחול שלילה:** ניתן להפעיל כללים אלו מספר פעמים. סימן השלילה "מחלחל פנימה" והופך כל כמת בדרכו:


- **דוגמה:** ניסוח שלילת הטענה "לכל מספר, אם הוא גדול משתיים, אז הוא גדול מאחת"<br>  בלי המילה "לא"
  1. **ניסוח פורמלי:** $\forall x (x>2 \to x>1)$
  2. **הוספת שלילה:** $\neg \forall x (x>2 \to x>1)$
  3. **המילה הראשית $\forall$, השלילה הופכת אותו ל־$\exists$:** $\exists x \neg (x>2 \to x>1)$
  4. **המילה הראשית בפנים $\to$, שלילת גרירה:** $\exists x (x>2 \wedge \neg(x>1))$
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


---

# תרגיל: שלילת טענות מורכבות

נשלול כל טענה, עד שסימני השלילה יופיעו רק ליד טענות היסוד. בכל שלב: **מהי המילה הראשית?**

**1.** $\;(P\wedge Q)\to(R\vee\neg S)$

<v-clicks>

- המילה הראשית היא $\to$. שלילת גרירה: $\;(P\wedge Q)\wedge\neg(R\vee\neg S)$
- בחלק השני המילה הראשית היא $\vee$. דה־מורגן: $\;(P\wedge Q)\wedge(\neg R\wedge\neg\neg S)$
- שלילה כפולה: $\;P\wedge Q\wedge\neg R\wedge S$
- בדיקת שפיות: הגרירה המקורית שקרית רק כשההנחה נכונה והמסקנה לא, כלומר בדיוק כש־$P,Q,S$ אמת ו־$R$ שקר.

</v-clicks>

**2.** "לכל טבעי $n$ יש טבעי $m$ כך ש־$m>n$ ו־$m$ ראשוני": $\;\forall n\,\exists m\,(m>n\wedge \mathrm{Prime}(m))$

<v-clicks>

- המילה הראשית היא $\forall$, ובתוכה $\exists$. השלילה הופכת את שניהם: $\;\exists n\,\forall m\,\neg(m>n\wedge \mathrm{Prime}(m))$
- בפנים המילה הראשית היא $\wedge$. דה־מורגן: $\;\exists n\,\forall m\,(m\le n\vee\neg\mathrm{Prime}(m))$
- בעברית: "יש $n$ כך שאף מספר גדול ממנו אינו ראשוני", כלומר יש רק מספר סופי של ראשוניים.

</v-clicks>

<!-- ######################################################################################################################## -->

---
section: הוכחות
---

# מהי הוכחה?

- הוכחה היא רצף של טענות. כל טענה ברצף היא אחת מאלה:
  - **הנחה**: מתוך הטענה שמוכיחים, או הנחה זמנית כמו "נניח בשלילה".
  - **הגדרה או עובדה** שכבר הוכחה.
  - **מסקנה** שנובעת מטענות קודמות בכלל לוגי ברור.

- **מבחן ההוכחה:** קורא זהיר יכול לבדוק כל שורה בנפרד, בלי לסמוך על הכותב ובלי להשלים פערים בעצמו.

- זה שונה מ**מלל משכנע**: "ברור ש...", "קל לראות ש...", כמה דוגמאות מוצלחות, אינטואיציה.
  כל אלה עוזרים להבין, אבל הם **אינם הוכחה**.

- להוכחה יש מבנה קבוע:
  - **שורת פתיחה** שקובעת מה מניחים ומה צריך להראות.
  - **גוף** שבו כל שורה נובעת מקודמותיה.
  - **שורת סיום** שאומרת מה הוכחנו.

- המבנה נקבע לפי **המילה הראשית** של הטענה.

---

# הוכחה מול מלל משכנע

**הגדרה:** מספר שלם $n$ הוא **זוגי** אם קיים שלם $k$ כך ש־$n=2k$, ו**אי־זוגי** אם קיים שלם $k$ כך ש־$n=2k+1$.

**טענה:** סכום של שני מספרים זוגיים הוא זוגי. &nbsp; <span class="text-sm">(המילה הראשית: $\forall m\,\forall n$. בתוכה: $\to$.)</span>

<div class="grid grid-cols-2 gap-8 mt-4">
<div class="p-4 rounded-xl border-2 border-red-500 bg-red-50">

**מלל משכנע ✗**

$2+4=6$, $\;10+12=22$, $\;100+8=108$.
ניסיתי הרבה דוגמאות וזה תמיד עובד, וזה הגיוני, כי זוגי ועוד זוגי זה זוגי.

<div class="text-sm mt-3">

דוגמאות אינן מכסות את כל המקרים, והמשפט האחרון פשוט חוזר על הטענה.

</div>
</div>
<div class="p-4 rounded-xl border-2 border-green-600 bg-green-50">

**הוכחה ✓**

יהיו $m,n$ מספרים זוגיים.
מהגדרת זוגי, קיימים שלמים $k,l$ כך ש־$m=2k$ ו־$n=2l$.
לכן $m+n=2k+2l=2(k+l)$.
מאחר ש־$k+l$ שלם, $m+n$ זוגי. ∎

<div class="text-sm mt-3">

כל שורה נובעת מהגדרה או מהשורות שלפניה, ואפשר לבדוק אותה. "יהיו $m,n$" קובע את המשתנים, ומכאן הם חופשיים בהוכחה.

</div>
</div>
</div>

---

# המילה הראשית קובעת את מבנה ההוכחה

<div class="text-sm rules" dir="rtl">

| מה מוכיחים | שורת פתיחה | מה נשאר להראות | שורת סיום |
|:--|:--|:--|:--|
| $\alpha\to\beta$ (ישירה) | "נניח $\alpha$." | $\beta$ | "לכן $\alpha\to\beta$." |
| $\alpha\to\beta$ (קונטרפוזיציה) | "נניח $\neg\beta$." | $\neg\alpha$ | "הוכחנו $\neg\beta\to\neg\alpha$, ולכן $\alpha\to\beta$." |
| $\alpha$ (בשלילה) | "נניח בשלילה $\neg\alpha$." | סתירה | "קיבלנו סתירה, ולכן $\alpha$." |
| $\forall x\,\alpha(x)$ | "יהי $x$ כלשהו." | $\alpha(x)$ | "מאחר ש־$x$ כללי, $\forall x\,\alpha(x)$." |
| $\exists x\,\alpha(x)$ | "נבחר $x=\ldots$" | $\alpha(x)$ עבור הערך שבחרנו | "לכן קיים $x$ כזה." |
| $\alpha\wedge\beta$ | "נוכיח את שני החלקים." | $\alpha$, ואחר כך $\beta$ | "לכן $\alpha\wedge\beta$." |
| $\alpha\vee\beta$ | "נניח $\neg\alpha$." | $\beta$ | "לכן $\alpha\vee\beta$." |
| $(\alpha\vee\beta)\to\gamma$ | "נחלק למקרים." | $\alpha\to\gamma$ וגם $\beta\to\gamma$ | "בכל המקרים $\gamma$." |
| $\alpha\to\beta$ (טענת ביניים) | "נמצא טענת ביניים $\gamma$." | $\alpha\to\gamma$ וגם $\gamma\to\beta$ | "לכן $\alpha\to\beta$." |

</div>

- גם **הנחות** מתפרקות לפי המילה הראשית: מ־$\alpha\wedge\beta$ מקבלים את שתיהן; ב־$\forall x\,\alpha(x)$ מותר להציב כל ערך; מ־$\exists x\,\alpha(x)$ לוקחים $x$ כזה ונותנים לו שם.

<style>
.rules table { direction: rtl; }
.rules th, .rules td { padding: 2px 8px !important; text-align: right !important; }
</style>

---

# דוגמה: שלוש דרכים להוכחת גרירה

**טענה:** לכל שלם $n$, אם $3n+2$ אי־זוגי, אז $n$ אי־זוגי. &nbsp; <span class="text-sm">(המילה הראשית: $\forall$. בתוכה: $\to$.)</span>

<div class="grid grid-cols-3 gap-4 mt-3 text-sm">
<div class="p-3 rounded-xl border-2 border-blue-400">

**ישירה**

<div class="proof-open">

יהי $n$ שלם, ונניח ש־$3n+2$ אי־זוגי.

</div>

אז קיים שלם $k$ כך ש־$3n+2=2k+1$.
לכן $n=(3n+2)-2n-2$<br>$\;\;=2(k-n-1)+1$,<br>ו־$k-n-1$ שלם.

<div class="proof-close">

לכן $n$ אי־זוגי. ∎

</div>

</div>
<div class="p-3 rounded-xl border-2 border-blue-400">

**קונטרפוזיציה**

<div class="proof-open">

יהי $n$ שלם. נוכיח: אם $n$ אינו אי־זוגי, אז $3n+2$ אינו אי־זוגי. נניח ש־$n$ אינו אי־זוגי, כלומר זוגי.

</div>

אז קיים שלם $k$ כך ש־$n=2k$, ולכן $3n+2=6k+2=2(3k+1)$.

<div class="proof-close">

לכן $3n+2$ זוגי, כלומר אינו אי־זוגי. הוכחנו את הקונטרפוזיציה, ולכן הגרירה נכונה. ∎

</div>

</div>
<div class="p-3 rounded-xl border-2 border-blue-400">

**בשלילה**

<div class="proof-open">

יהי $n$ שלם. נניח בשלילה ש־$3n+2$ אי־זוגי וגם $n$ אינו אי־זוגי, כלומר זוגי.

</div>

אז קיים שלם $k$ כך ש־$n=2k$, ולכן $3n+2=2(3k+1)$ זוגי.

<div class="proof-close">

קיבלנו ש־$3n+2$ זוגי וגם אי־זוגי, בסתירה. לכן הגרירה נכונה. ∎

</div>

</div>
</div>

- השתמשנו בעובדה: כל שלם הוא זוגי או אי־זוגי, ולא שניהם.
- בכל שלוש ההוכחות "יהי $n$" קובע את $n$, ומכאן הוא משתנה חופשי. מאחר ש־$n$ כללי, המסקנה נכונה לכל $n$.
- "זוגי" ו"אי־זוגי" מוגדרים בעזרת "קיים $k$". לכן כשמניחים אותם, מקבלים $k$ כזה ונותנים לו שם.

<style>
.proof-open { border-right: 4px solid #2563eb; padding-right: 6px; margin: 6px 0; color: #1e40af; }
.proof-close { border-right: 4px solid #16a34a; padding-right: 6px; margin: 6px 0; color: #166534; }
</style>

---

# הוכחה בדרך השלילה

טכניקת הוכחה חשובה היא **הוכחה בדרך השלילה**. כדי להוכיח טענה $\alpha$, אנו מניחים את שלילתה ($\neg\alpha$) ומוכיחים שהנחה זו מובילה לסתירה.

<img class="absolute top-1.2/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-80" src="/images/הוכחה בשלילה.png" />

---

# עוד דוגמה להוכחה בשלילה

**משפט:** אין מספר רציונלי $r$ כך ש־$r^2=2$. &nbsp; <span class="text-sm">(המילה הראשית: $\neg\exists$. נוכיח בשלילה.)</span>

**הוכחה:**
- **נניח בשלילה** שיש מספר רציונלי $r$ כך ש־$r^2=2$.
- מאחר ש־$(-r)^2=r^2$, אפשר להניח $r>0$. נכתוב $r = \frac{p}{q}$ כשבר מצומצם: $p, q \ge 1$ שלמים ללא גורם משותף גדול מ־1.
- אז $\frac{p^2}{q^2} = 2$, ולכן $p^2 = 2q^2$, כלומר $p^2$ זוגי.
- לכן $p$ זוגי: ריבוע של אי־זוגי הוא אי־זוגי, כי $(2m+1)^2=2(2m^2+2m)+1$. (זו הוכחה בקונטרפוזיציה.)
- נכתוב $p=2k$. אז $4k^2 = 2q^2$, כלומר $q^2=2k^2$, ולכן מאותה סיבה גם $q$ זוגי.
- קיבלנו ש־$p$ ו־$q$ מתחלקים שניהם ב־2, **בסתירה** להנחה שהשבר מצומצם.
- **לכן** הנחת השלילה שגויה, ואין מספר רציונלי $r$ כך ש־$r^2=2$. ∎

<img class="absolute top-1.2/2 right-3/4 w-60 h-50" src="/images/sqrt_2.png" />

---

# הוכחת קוניונקציה

**הגדרה:** $a$ **מחלק** את $n$, ומסמנים $a\mid n$, אם קיים שלם $k$ כך ש־$n=ak$.

**טענה:** לכל שלם $n$, אם $6\mid n$ אז $2\mid n$ וגם $3\mid n$.

- המילים הראשיות, מבחוץ פנימה: $\forall$, אחר כך $\to$, ובמסקנה $\wedge$.

**הוכחה:**
- יהי $n$ שלם, ונניח $6\mid n$. אז קיים שלם $k$ כך ש־$n=6k$. &nbsp;<span class="text-sm" style="color:#2563eb">(קבענו את $n$: מכאן הוא משתנה חופשי)</span>
- **החלק הראשון:** $n=2\cdot(3k)$ ו־$3k$ שלם, לכן $2\mid n$.
- **החלק השני:** $n=3\cdot(2k)$ ו־$2k$ שלם, לכן $3\mid n$.
- הוכחנו את שני החלקים, ולכן $2\mid n\wedge 3\mid n$. מאחר ש־$n$ כללי, הטענה נכונה לכל $n$. ∎

<br>

- הוכחת קוניונקציה היא הוכחה של כל חלק בנפרד, ואז חיבורם.

---

# הוכחת דיסיונקציה

**טענה:** לכל שני מספרים ממשיים $a,b$, אם $ab=0$ אז $a=0$ או $b=0$.

- המילים הראשיות, מבחוץ פנימה: $\forall a\,\forall b$, אחר כך $\to$, ובמסקנה $\vee$.
- להוכחת $\alpha\vee\beta$ נוכיח את הגרירה השקולה $\neg\alpha\to\beta$.

**הוכחה:**
- יהיו $a,b$ ממשיים, ונניח $ab=0$. עלינו להראות $a=0\vee b=0$.
- נוכיח ש־$a\neq0\to b=0$. נניח $a\neq 0$.
- אז $\frac1a$ מוגדר, ו־$b=\frac1a\cdot(ab)=\frac1a\cdot0=0$.
- לכן $b=0$. הוכחנו $a\neq 0\to b=0$, ולכן $a=0\vee b=0$. ∎

<br>

- אפשר גם בשלילה: נניח $a\neq0$ וגם $b\neq0$, ונקבל $ab\neq0$, בסתירה להנחה.

---

# הוכחת טענות מהצורה $\forall x(\alpha)$

- כדי להוכיח $\forall x\,\alpha(x)$ פותחים ב"**יהי $x$** ...": בוחרים $x$ **כללי**, שעליו לא מניחים דבר מלבד מה שנתון.
- מרגע זה $x$ הוא משתנה **חופשי** בהוכחה: הוא מייצג ערך מסוים אבל שרירותי, ועליו מוכיחים את $\alpha(x)$.
- בסוף: "מאחר ש־$x$ היה כללי, הטענה נכונה לכל $x$."

**דוגמה:** לכל מספר טבעי $n$, אם $4\mid n$ אז $2\mid n$.

- **יהי $n$** מספר טבעי כלשהו. &nbsp;<span class="text-sm" style="color:#2563eb">(המילה הראשית $\forall$: קבענו את $n$)</span>
- **נניח** ש־$4\mid n$. &nbsp;<span class="text-sm" style="color:#2563eb">(המילה הראשית בפנים $\to$)</span>
- אז קיים $k\in\mathbb{N}$ כך ש־$n=4k$, ולכן $n=2(2k)$, כאשר $2k\in\mathbb{N}$.
- **לכן** $2\mid n$. מאחר ש־$n$ היה כללי, הטענה נכונה לכל $n\in\mathbb{N}$. ∎

<br>

- **שימוש** בהנחה מהצורה $\forall x\,\alpha(x)$: מותר להציב בה כל ערך שנרצה.

<img src="/images/בחירת איבר כללי.png" class="absolute top-70 left-10 h-60" />

---

# הוכחת טענות מהצורה $\exists x(\alpha)$

- כדי להוכיח $\exists x\,\alpha(x)$ מספיק **להציג דוגמה**: לבחור ערך מסוים של $x$ ולבדוק שהוא מקיים את $\alpha$.
  - "קיים ראשוני $p$ כך ש־$p+2$ ו־$p+4$ ראשוניים." <span class="text-sm" style="color:#2563eb">(המילה הראשית: $\exists$)</span> נבחר $p=3$: המספרים $3,5,7$ ראשוניים. ∎

- **$\forall$ ואחריו $\exists$:** הבחירה יכולה להיות תלויה במשתנה שכבר קבענו.
  - "לכל שלם $n$ יש שלם $m$ כך ש־$m>n$." <span class="text-sm" style="color:#2563eb">(המילה הראשית: $\forall$, ובתוכה $\exists$)</span> יהי $n$ שלם. נבחר $m=n+1$, שתלוי ב־$n$ החופשי. אז $m$ שלם ו־$m>n$. מאחר ש־$n$ כללי, הטענה נכונה לכל $n$. ∎

- **שימוש** בהנחה מהצורה $\exists x\,\alpha(x)$: לוקחים $x$ כזה ונותנים לו שם, אבל **לא בוחרים** את ערכו. כך עשינו עם "קיים $k$ כך ש־$n=2k$".

- **הפרכה של "לכל" היא הוכחה של "יש":** $\neg\forall x\,\alpha(x)\equiv\exists x\,\neg\alpha(x)$. לכן מפריכים טענת "לכל" בעזרת **דוגמה נגדית**.
  - "לכל טבעי $n$, המספר $n^2+n+41$ ראשוני." שקר: עבור $n=40$ מתקבל $40^2+40+41=41\cdot 41$.
  - הטענה נכונה לכל $n$ מ־0 עד 39! עוד סיבה לכך שדוגמאות אינן הוכחה.

---

# הוכחה באמצעות חלוקה למקרים

- כשקל יותר לטפל בכמה מצבים בנפרד, מחלקים למקרים שמכסים את **כל** האפשרויות.
- הבסיס הלוגי: $(\alpha\vee\beta)\to\gamma\equiv(\alpha\to\gamma)\wedge(\beta\to\gamma)$.

**טענה:** לכל שלם $n$, המספר $n^2+n$ זוגי. &nbsp; <span class="text-sm">(המילה הראשית: $\forall$.)</span>

**הוכחה:** יהי $n$ שלם (מכאן $n$ קבוע וחופשי). כל שלם הוא זוגי או אי־זוגי, ולכן נבדוק שני מקרים.
- **מקרה 1: $n$ זוגי.** אז $n=2k$ עבור שלם $k$, ו־$n^2+n=4k^2+2k=2(2k^2+k)$, שהוא זוגי.
- **מקרה 2: $n$ אי־זוגי.** אז $n=2k+1$ עבור שלם $k$, ו־$n^2+n=4k^2+6k+2=2(2k^2+3k+1)$, שהוא זוגי.
- המקרים מכסים את כל האפשרויות, ובשניהם $n^2+n$ זוגי. מאחר ש־$n$ כללי, הטענה נכונה לכל $n$. ∎

<br>

- גם המשפט על NAND הוכח בחלוקה למקרים: 16 מקרים, אחד לכל טבלה.

<img src="/images/חלוקה למקרים.png" class="absolute top-62 left-10 h-60" />

---

# סיכום ההרצאה

- כל ביטוי מתמטי הוא **שם עצם** או **טענה**.
- בכל טענה מזהים את **המילה הראשית**. היא קובעת את משמעות הטענה, את שלילתה ואת מבנה ההוכחה שלה.
- **משתנה חופשי** מחכה להשמה, ו**משתנה קשור** נתפס על ידי כמת. "יהי $x$" קובע משתנה, ומכאן והלאה הוא מתנהג כחופשי.
- שקילויות מרכזיות: $\alpha\to\beta\equiv\neg\beta\to\neg\alpha\equiv\neg\alpha\vee\beta$, דה־מורגן, שלילת גרירה ושלילת כמתים.
- יש 16 טענות על שתי טענות יסוד עד כדי שקילות, וקשרים מעטים מספיקים כדי לכתוב את כולן.
- להוכחה יש **פתיחה, גוף וסיום**, לפי המילה הראשית, וכל שורה בה צריכה להיות ניתנת לבדיקה.
- **בתרגול:** כללי דה־מורגן, ושלילה של טענות מורכבות על $P,Q,R,S$.
