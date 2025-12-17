---
theme: frankfurt
infoLine: true
author: "גרא וייס"
title: "אינדוקציה וקבוצות סופיות"
htmlAttrs:
  dir: rtl
  lang: heb
mdc: true
download: true
exportFilename: 06-induction.pdf
transition: slide
---

# אינדוקציה וקבוצות סופיות

## הרצאה בקורס: מבוא ללוגיקה ותורת הקבוצות

 מרצה: פרופ. גרא וייס



---
layout: two-cols-header
---


# שקילות עוצמה בין קבוצות

<img src="/images/bijection_bears_girls.png" class="absolute top-15 left-5 w-55 rounded-lg shadow-lg" />

**הגדרה:** תהיינה $A,B$ קבוצות. נסמן $A \sim B$ אם קיימת פונקציה חח"ע ועל $f \colon A \to B$.

**טענה:** היחס $\sim$ הוא יחס שקילות.

**הוכחה:**

::left::

<v-click>

1. **רפלקסיביות:** לכל קבוצה $A$:
   - נגדיר את פונקציית הזהות $Id_A(x) = x$.
   - פונקציה זו היא חח"ע ועל.
   - לכן $A \sim A$.
</v-click>

<v-click>

<br>

2. **סימטריות:** נניח $A \sim B$.
   - קיימת $f \colon A \to B$ שהיא חח"ע ועל.
   - לכן קיימת הפונקציה ההפוכה $f^{-1} \colon B \to A$.
   - גם $f^{-1}$ היא חח"ע ועל.
   - לכן $B \sim A$.
</v-click>

::right::

<v-click>

3. **טרנזיטיביות:** נניח $A \sim B$ ו-$B \sim C$.
   - קיימות פונקציות חח"ע ועל $f \colon A \to B$ ו-$g \colon B \to C$.
   - נגדיר את ההרכבה $h = g \circ f \colon A \to C$.
   - הרכבה של פונקציות חח"ע ועל היא גם חח"ע ועל.
   - לכן $A \sim C$.

</v-click>

<br>


מחלקת שקילות של יחס זה היא<br>  קבוצת קבוצות שיש בהן אותו מספר איברים:


<img src="/images/cardinality_equivalence_classes.png" class="absolute bottom-10 left-10 w-50 rounded-lg shadow-lg" />




---

# קבוצה חסומה

- **הקבוצה $\mathbb{N}^{<n}$:**
  יהי $n$ מספר טבעי. נגדיר $\mathbb{N}^{<n} = \{0, 1, \ldots, n-1\}$.

    - נובע מכך ש-$\mathbb{N}^{<0} = \emptyset$.

<img src="/images/bounded_set_less_than_5_v2.png" class="absolute top-15 left-5 w-60 rounded-lg shadow-lg" />

- **הגדרה:** תהי $S \subseteq \mathbb{N}$. הקבוצה $S$ נקראת **חסומה** (bounded) אם קיים $n \in \mathbb{N}$ כך ש-$S \subseteq \mathbb{N}^{<n}$.

- **דוגמאות:**
    - קבוצת המחלקים של 12, $\{1, 2, 3, 4, 6, 12\}$, היא קבוצה חסומה ב-$\mathbb{N}$ (כי היא מוכלת ב-$\mathbb{N}^{<13}$).
    
    - הקבוצה הריקה $\emptyset$ היא חסומה (מוכלת ב-$\mathbb{N}^{<0}$).
    - קבוצת הספרות העשרוניות $\{0, 1, \ldots, 9\}$ היא חסומה (מוכלת ב-$\mathbb{N}^{<10}$).
    - קבוצת המספרים הזוגיים $\{0, 2, 4, 6, \ldots\}$ אינה חסומה.

---

# עקרון שובך היונים

- **ניסוח אינטואיטיבי:** אם מכניסים $n$ יונים ל-$m$ שובכים, כאשר $n > m$, אז קיים שובך המכיל לפחות שתי יונים.

- **ניסוח פורמלי:** יהיו $n > m$ מספרים טבעיים. לא קיימת פונקציה חד-חד-ערכית $f \colon \mathbb{N}^{<n} \to \mathbb{N}^{<m}$.

- **מסקנה:** אם $n \neq m$, לא קיימת פונקציה חח"ע ועל (bijection) בין $\mathbb{N}^{<n}$ ל-$\mathbb{N}^{<m}$.
  - **הוכחה:**
      - נניח $n \neq m$. בה"כ נניח $n > m$.
      - לפי עקרון שובך היונים, לא קיימת פונקציה חח"ע מ-$\mathbb{N}^{<n}$ ל-$\mathbb{N}^{<m}$.
      - פונקציה חח"ע ועל היא בפרט חח"ע.
      - לכן לא קיימת פונקציה חח"ע ועל.

- הוכחת עקרון שובך היונים באינדוקציה נמצאת בתרגול העצמי - מומלץ להשתמש במשאב זה.

<div class="absolute top-90 left-20 w-55">
  <img src="/images/pigeons_in_holes_no_text.png" class="rounded-lg shadow-lg w-full" />
  <div class="text-center text-xs -mt-53 font-bold text-gray-700">
    5 יונים ב-4 שובכים  ⇐   <br> יש שתי יונים באחד מהשובכים
  </div>
</div>


---
section: קבוצות סופיות
---

# קבוצות סופיות

**הגדרה:** תהי $A$ קבוצה כלשהי. $A$ נקראת **סופית** אם קיים $n \in \mathbb{N}$ וקיימת פונקציה חח"ע ועל (bijection) מ-$A$ ל-$\mathbb{N}^{<n}$.

- במקרה זה, נכתוב $|A| = n$ ונאמר ש-"$A$ היא בגודל $n$" או "$A$ בעלת $n$ איברים".
  
- קבוצה שאינה סופית נקראת **אינסופית**.

**דוגמאות:**

- הקבוצה $\{a,b,c\}$ היא סופית בת 3 איברים.

- הקבוצה $\mathbb{N}$ היא אינסופית.
- הקבוצה הריקה $\emptyset$ היא סופית בת 0 איברים.

<div class="absolute top-80 left-40 w-60">
  <img src="/images/bijection_counting_from_zero_no_text.png" class="rounded-lg shadow-lg w-full" />
  <div class="absolute top-7 left-31 w-25 text-center text-xs text-gray-800 leading-tight transform -rotate-2">
    נספור מאפס<br>
    3, 2, 1, 0
  </div>
</div>



---

# שקילות עוצמה בין קבוצות סופיות

**טענה:** אם $A$ ו-$B$ הן קבוצות סופיות ו-$A \sim B$, אזי $|A| = |B|$.

**הוכחה:**
- נניח ש-$|A| = n$. נוכיח ש-$|B| = n$.

- כיוון ש-$|A| = n$, קיימת פונקציה חח"ע ועל $f \colon A \to \mathbb{N}^{<n}$.
- כיוון ש-$A \sim B$, קיימת פונקציה חח"ע ועל $g \colon A \to B$.
- נתבונן בהרכבה $f \circ g^{-1} \colon B \to \mathbb{N}^{<n}$.
- כיוון ש-$g$ חח"ע ועל, גם $g^{-1}$ חח"ע ועל.
- הוכחתם בתרגילים שהרכבה של פונקציות חח"ע ועל היא חח"ע ועל.
- לכן $f \circ g^{-1}$ היא פונקציה חח"ע ועל.
    - מכאן נובע ש-$B \sim \mathbb{N}^{<n}$, ולכן $|B| = n$.

<img src="/images/bijection_composition_comic.png" class="absolute top-50 left-20 w-100" />

---

# יחידות הגודל 

- נניח שקיימות שתי פונקציות חח"ע ועל:
  - $f \colon A \to \mathbb{N}^{<n}$
  - $g \colon A \to \mathbb{N}^{<m}$

- אזי ההרכבה $g \circ f^{-1}$ היא פונקציה חח"ע ועל מ-$\mathbb{N}^{<n}$ ל-$\mathbb{N}^{<m}$.

- לפי עקרון שובך היונים, זה ייתכן רק אם $n = m$.

- **מסקנה:** לקבוצה סופית יש גודל יחיד בלבד.


<img src="/images/verification.png" class="absolute top-80 left-40 w-90 "  />

---

# תת קבוצה של קבוצה סופית היא קבוצה סופית 

**טענה:** אם $A$ קבוצה סופית ו-$B \subseteq A$, אז $B$ גם קבוצה סופית.

<v-click>

**הוכחה:**
- תהי $f \colon A \to \mathbb{N}^{<n}$ פונקציה חח"ע ועל ( קיימת כזאת כי $A$ סופית).

- נתבונן בקבוצת התמונות $S = \{f(b) \mid b \in B\} \subseteq \mathbb{N}^{<n}$.
- נסמן את איברי $S$ לפי הסדר: $k_0 < k_1 < \ldots < k_{m-1}$.
- נגדיר פונקציה $g \colon B \to \mathbb{N}^{<m}$ באופן הבא: לכל $b \in B$, אם $f(b) = k_i$ אז $g(b) = i$.
- הפונקציה $g$ היא חח"ע ועל, ולכן $B$ סופית (בגודל $m$).

<img src="/images/subset_proof_comic_hebrew.png" class="absolute top-50 left-10 w-80 rounded-lg shadow-lg" />

<br>

מסקנה מההוכחה: אם מורידים $k$ איברים מ-$A$, נשאר לנו $n-k$ איברים.

</v-click>


---

# גודל האיחוד של שתי קבוצות סופיות זרות

**טענה:** אם $A,B$ קבוצות סופיות זרות, אז:
$$|A \cup B| = |A| + |B|$$

<v-click>

**הוכחה:**
- נסמן $|A|=n$ ו-$|B|=m$.
- קיימות פונקציות חח"ע ועל $f \colon A \to \mathbb{N}^{<n}$ ו-$g \colon B \to \mathbb{N}^{<m}$.
- נגדיר פונקציה $h \colon A \cup B \to \mathbb{N}^{<n+m}$ באופן הבא:
  $$ h(x) = \begin{cases} f(x) & x \in A \\ g(x) + n & x \in B \end{cases} $$
- מכיוון ש-$A$ ו-$B$ זרות, הפונקציה $h$ מוגדרת היטב.
- קל לוודא ש-$h$ היא חח"ע ועל, ולכן $|A \cup B| = n+m$.

<img src="/images/גודל של איחוד זר.jpg" class="absolute top-100 left-15 w-80 " />

<!-- <img src="/images/h-sorter.jpg" class="absolute top-30 left-5 w-100 " /> -->


</v-click>


---

# גודל המכפלה הקרטזית

**טענה:** אם $A,B$ קבוצות סופיות, אז:
$$|A \times B| = |A| \cdot |B|$$

<v-click>

**הוכחה:**
- נסמן $|A|=n$ ו-$|B|=m$.
- קיימות פונקציות חח"ע ועל $f \colon A \to \mathbb{N}^{<n}$ ו-$g \colon B \to \mathbb{N}^{<m}$.
- נגדיר פונקציה $h \colon A \times B \to \mathbb{N}^{<nm}$ באופן הבא:
  $$ h(a,b) = f(a) \cdot m + g(b) $$
- זהו בדיוק המיקום הסידורי של $(a,b)$ בטבלה בגודל $n \times m$ (כשסופרים שורה אחר שורה).
- מכיוון שהצגה של מספר עם שארית וחלוקה היא יחידה (משפט החילוק עם שארית), $h$ היא חח"ע ועל.
- לכן $|A \times B| = n \cdot m$.

<img src="/images/מכפלה קרטזית.png" class="absolute bottom-15 left-20 w-150" />
<div class="absolute top-60 left-20 w-60 flex flex-col items-center">
  <img src="/images/cartesian_product_mapping.png" class="w-full" />
  <div class="text-sm font-bold -mt-62   text-center bg-white/90 rounded px-2 shadow-sm text-black">מעבר על טבלה <br> כשסופרים שורה שורה</div>
</div>

</v-click>


---

# גודל קבוצת החזקה

**טענה:** אם $|A| = n$, אז $|\mathcal{P}(A)| = 2^n$.

<v-click>

**רעיון הוכחה:**
- נזכיר: מספר הפונקציות מ-$A$ ל-$\{0,1\}$ הוא $2^{|A|} = 2^n$.
- נבנה התאמה חח"ע ועל $H$ בין $\mathcal{P}(A)$ לבין קבוצת הפונקציות $\{0,1\}^A$.
- לכל תת-קבוצה $B \subseteq A$, נגדיר פונקציה מציינת $\chi_B \colon A \to \{0,1\}$:
  $$ \chi_B(x) = \begin{cases} 1 & x \in B \\ 0 & x \notin B \end{cases} $$
- קל לראות ש-$H(B) = \chi_B$ חח"ע ועל (כל פונקציה מגדירה תת-קבוצה באופן יחיד).
- לכן מספר התת-קבוצות שווה למספר הפונקציות, שהוא $2^n$.

<div class="absolute top-60 left-20 w-80 flex flex-col items-center">
  <div class="text-sm font-bold -mb-5 text-center bg-white/90 rounded px-2 shadow-sm text-black">
  
  פונקציה מציינת $\chi_B$ עבור קבוצה $B$
  </div>
  <img src="/images/characteristic_function_chi.png" class="w-50" />
</div>

</v-click>


---
layout: TwoColsHeaderCustom
section: אינדוקציה
---

# הוספת איבר לקבוצה סופית

**טענה:** תהי $A$ קבוצה סופית בגודל $n$, ויהי $x \notin A$. אזי הקבוצה $A \cup \{x\}$ היא בגודל $n+1$.

<v-click>

**הוכחה:**
- נתון ש-$|A|=n$, לכן קיימת פונקציה חח"ע ועל $f \colon A \to \mathbb{N}^{<n}$.
- נגדיר פונקציה $g \colon A \cup \{x\} \to \mathbb{N}^{<n+1}$ באופן הבא:
  $$ g(z) = \begin{cases} f(z) & z \in A \\ n & z = x \end{cases} $$

- הפונקציה מוגדרת היטב כי $x \notin A$.

<img src="/images/function_g_element_addition.png" class="absolute top-40 left-10 w-70 " />

</v-click>


::left:: 
<v-click> 

- **חח"ע:** אם $g(z_1) = g(z_2)$:
  - אם התמונה היא $n$, אז בהכרח המקור הוא $x$.
  - אם התמונה ב-$\mathbb{N}^{<n}$, המקור ב-$A$ והחח"ע נובעת מ-$f$.

</v-click>

::right::

<v-click>

- **על:**
  - $n$ מתקבל מ-$x$.
  - כל מספר ב-$\mathbb{N}^{<n}$ מתקבל מאיבר ב-$A$ (כי $f$ על).


</v-click>

::after:: 
<v-click >

<div style="margin-top:0px;">
<!-- - לכן $|A \cup \{x\}| = n+1$. -->
</div>

</v-click>

<v-click>

<div class="text-center mt-2  text-yellow-300 bg-red-600" style="margin-top:-px;">

האם זה אומר שקיימת קבוצה מכל גודל $n \in \mathbb{N}$?

</div>
 
</v-click>

---
layout: TwoColsHeaderCustom
---

# אינסוף גרירות

- נניח שהצלחנו להוכיח את שתי העובדות הבאות עבור תכונה $P(n)$:
  - $P(0)$ נכונה

  - לכל $n$, אם $P(n)$ נכונה אז גם $P(n+1)$ נכונה

::left::

- בפרט, אם בוחרים $n=0$
  - $P(0) \implies P(1)$
  - מכיוון ש-$P(0)$ נכונה, גם $P(1)$ נכונה.

- ואז, בפרט, אם בוחרים $n=1$
  - $P(1) \implies P(2)$
  - מכיוון ש-$P(1)$ נכונה, גם $P(2)$ נכונה.

::right::

- ואז, בפרט, אם בוחרים $n=2$
  - $P(2) \implies P(3)$
  - מכיוון ש-$P(2)$ נכונה, גם $P(3)$ נכונה.

- ואפשר להמשיך כך עד עולם.

- **מסקנה:**
מקבלים $\forall n \in \mathbb{N} (P(n))$.

::after::

<div class="text-center mt-8">
  <span class="text-2xl text-yellow-300 bg-red-600 px-2 rounded font-bold">האם חוקי להסיק כך מסקנה מקיום אינסוף גרירות?</span>
</div>

<img src="/images/infinite_implications_dominoes.png" class="absolute top-20 left-10 w-60 rounded-lg shadow-lg" />

---
layout: two-cols-header
---

# עיקרון האינדוקציה הראשון (אינדוקציה רגילה)

::left::

אם $A \subseteq \mathbb{N}$ המקיימת את שני התנאים הבאים:

1. $0 \in A$

2. לכל $a \in A$ מתקיים $a + 1 \in A$

**אזי:** $A = \mathbb{N}$.

<img src="/images/weak_induction_ladder_hebrew.png" class="absolute bottom-15 right-30 w-60 rounded-lg shadow-lg" />

::right::

<br>


<v-click>

**דוגמה:** לכל $n \in \mathbb{N}$ מתקיים $\sum_{i=0}^{n} i = \frac{n(n+1)}{2}$.

**הוכחה:**
- נגדיר $A = \{n \in \mathbb{N} \mid \sum_{i=0}^{n} i = \frac{n(n+1)}{2}\}$.
- **בסיס:** עבור $n=0$, הסכום הוא 0 והנוסחה נותנת $\frac{0(1)}{2} = 0$. לכן $0 \in A$.
- **צעד:** נניח $n \in A$. נוכיח $n+1 \in A$:
  $$\sum_{i=0}^{n+1} i = \left(\sum_{i=0}^{n} i\right) + (n+1) = \frac{n(n+1)}{2} + (n+1) = \frac{(n+1)(n+2)}{2}$$
- לכן $n+1 \in A$. לפי עיקרון האינדוקציה, $A = \mathbb{N}$.


<div class="absolute top-20 left-5 w-80 h-25 rounded-lg shadow-lg overflow-hidden">
  <img src="/images/hanukkah_candles_induction_cropped.png" class="w-full h-full object-cover object-center" />
</div>

</v-click>

---
layout: two-cols-header
---

# עיקרון האינדוקציה השני (אינדוקציה שלמה)

::left::

אם $A \subseteq \mathbb{N}$ המקיימת את התנאי הבא:

לכל $n \in \mathbb{N}$,
$$\mathbb{N}^{<n} \subseteq A \implies \mathbb{N}^{<n+1} \subseteq A$$

**אזי:** $A = \mathbb{N}$.

<br>

<br>

<img src="/images/strong_induction_illustration_hebrew.png" class="rounded-lg shadow-lg w-55 absolute bottom-20 right-40" />

::right::

<v-click>

<div style="margin-top:-15px;"/>


**דוגמה:** תהי $F_n$ סדרת פיבונאצ'י ($F_0{=}0, F_1{=}1, F_n{=}F_{n-1} + F_{n-2}$).

**טענה:** לכל $n \in \mathbb{N}$, מתקיים $F_n < 2^n$.

**הוכחה:** 
- נסמן $A = \{n \in \mathbb{N} \mid F_n < 2^n\}$.
- יהי $n \in \mathbb{N}$. נניח ש-$\mathbb{N}^{<n} \subseteq A$.
- נוכיח ש-$\mathbb{N}^{<n+1} \subseteq A$:
    - מכיוון ש-$\mathbb{N}^{<n+1} = \mathbb{N}^{<n} \cup \{n\}$, מספיק להראות ש-$n \in A$:
      - **עבור $n=0$:** $0 < 1$ ✓
      - **עבור $n=1$:** $1 < 2$ ✓
      - **עבור $n \ge 2$:** $F_n = F_{n-1} + F_{n-2}$
        $$< 2^{n-1} + 2^{n-2} < 2^{n-1} + 2^{n-1} = 2^n$$
    - הראנו ש-$n \in A$, ולכן $\mathbb{N}^{<n+1} \subseteq A$.
- לפי עיקרון האינדוקציה השלמה $A = \mathbb{N}$.

</v-click>

---


# דוגמה לאינדוקציה שלמה

**טענה:** כל מספר טבעי $n \ge 2$ ניתן לפירוק למכפלת מספרים ראשוניים.

<v-click>

**הוכחה באינדוקציה שלמה:**

**הוכחה (בנייה לפי ההגדרה):**

- נסמן $A = \{n \in \mathbb{N} \mid n < 2 \lor \text{ is a product of primes} \}$.
- יהי $n \in \mathbb{N}$. נניח ש-$\mathbb{N}^{<n} \subseteq A$.
- נוכיח ש-$n \in A$:
    - **מקרה 1 ($n < 2$):** לפי ההגדרה, $n \in A$ באופן טריוויאלי.
    - **מקרה 2 ($n \ge 2$ ראשוני):** $n$ הוא מכפלה של ראשוני אחד (עצמו), לכן $n \in A$.
    - **מקרה 3 ($n \ge 2$ פריק):** קיים פירוק $n = a \cdot b$ כאשר $2 \le a,b < n$.
        - מכיוון ש-$a,b < n$, נובע ש-$a,b \in \mathbb{N}^{<n}$.
        - לפי הנחת האינדוקציה, $\mathbb{N}^{<n} \subseteq A$, ולכן $a,b \in A$.
        - מכיוון שהם $\ge 2$, הם מכפלה של ראשוניים. לכן גם מכפלתם $n$ היא כזו.
    - בכל המקרים $n \in A$, ולכן $\mathbb{N}^{<n+1} \subseteq A$.
- לפי עיקרון האינדוקציה השלמה, $A = \mathbb{N}$.

<img src="/images/prime_factorization_tree.png" class="absolute bottom-5 left-10 w-60 transform rotate-5" />

</v-click>

---
layout: two-cols-header
---

# שקילות של שתי הגרסאות

<!-- **טענה:** שתי הגרסאות של האינדוקציה שקולות זו לזו. -->

::left::

<v-click>

**אינדוקציה רגילה $\Leftarrow$ אינדוקציה שלמה:**

נניח כי עקרון האינדוקציה הרגילה מתקיים.

 תהי $A$ המקיימת את תנאי האינדוקציה השלמה.
- נגדיר קבוצה חדשה $B = \{n \in \mathbb{N} \mid \mathbb{N}^{<n} \subseteq A\}$.
- **בסיס:** $0 \in B$ כי $\mathbb{N}^{<0} = \emptyset \subseteq A$.
- **צעד:** נניח
  - $n \in B$. לכן $\mathbb{N}^{<n} \subseteq A$. 
  - לפי תנאי השלמה על $A$, נובע $\mathbb{N}^{<n+1} \subseteq A$.
  - המשמעות היא ש-$n+1 \in B$.
- לפי אינדוקציה רגילה, $B = \mathbb{N}$.
- לכל $n$, כיוון ש-$n+1 \in B$, מתקיים $\mathbb{N}^{<n+1} \subseteq A$, 
  - ולכן בפרט $n \in A$.
- לכן $A = \mathbb{N}$.

</v-click>

::right::

<v-click>

**אינדוקציה שלמה $\Leftarrow$ אינדוקציה רגילה:**

נניח כי עקרון האינדוקציה השלמה מתקיים. 

תהי $A$ המקיימת את תנאי האינדוקציה הרגילה.
- יהי $n \in \mathbb{N}$. נניח ש-$\mathbb{N}^{<n} \subseteq A$. נוכיח ש-$n \in A$:
  - אם $n=0$: נתון $0 \in A$.
  
  - אם $n>0$: אז $n-1 \in \mathbb{N}^{<n}$, ולכן לפי ההנחה $n-1 \in A$.
  - לפי תנאי האינדוקציה הרגילה, $n-1 \in A \implies n \in A$.
- הוכחנו ש-$\mathbb{N}^{<n} \subseteq A \implies n \in A$, 
  - כלומר $A$ מקיימת את תנאי השלמה.
- לכן $A = \mathbb{N}$.

</v-click>


---

# עיקרון המינימום

**עיקרון המינימום:**
לכל תת קבוצה לא ריקה של $\mathbb{N}$ יש איבר מינימלי.

כלומר: אם $\emptyset \neq A \subseteq \mathbb{N}$, אז קיים $a \in A$ כך ש-$a \le x$ לכל $x \in A$.

<img src="/images/minimum_principle_illustration.png" class="w-70 mx-auto mt-10 rounded-lg shadow-xl" />

---

# עיקרון המינימום $\Leftarrow$ אינדוקציה חלשה

**טענה:** עיקרון המינימום גורר את עקרון האינדוקציה החלשה.

**הוכחה:**

- נניח שעיקרון המינימום מתקיים. תהי $A \subseteq \mathbb{N}$ המקיימת $0 \in A$ וגם $\forall n(n \in A \to n+1 \in A)$.

- נגדיר $S = \mathbb{N} \setminus A$. נניח בשלילה ש-$S \neq \emptyset$.
- לפי עיקרון המינימום, קיים ל-$S$ מינימום $m = \min(S)$.
- אם $m=0$: סתירה לכך ש-$0 \in A$.
- אם $m>0$: כיוון ש-$m$ מינימלי ב-$S$, הרי ש-$m-1 \notin S$, כלומר $m-1 \in A$.
- לפי תנאי האינדוקציה, $m-1 \in A \implies m \in A$, כלומר $m \notin S$. סתירה!
- לכן $S = \emptyset$ ו-$A = \mathbb{N}$.

---

# אינדוקציה חזקה $\Leftarrow$ עיקרון המינימום

**טענה:** עקרון האינדוקציה החזקה גורר את עיקרון המינימום.

**הוכחה:**

- נניח שאינדוקציה חזקה מתקיימת. תהי $S \subseteq \mathbb{N}$ קבוצה ללא איבר מינימלי. נוכיח ש-$S = \emptyset$.

- נגדיר $A = \mathbb{N} \setminus S$. נוכיח ש-$A = \mathbb{N}$ באינדוקציה חזקה.
- נניח כי $\mathbb{N}^{<n} \subseteq A$ (כלומר כל המספרים הקטנים מ-$n$ אינם ב-$S$).
- אם $n \in S$, אז הוא היה חייב להיות המינימום של $S$ (כי אין ב-$S$ איברים קטנים ממנו).
- אבל ל-$S$ אין מינימום, ולכן $n \notin S$, כלומר $n \in A$.
- לפיכך $\mathbb{N}^{<n} \subseteq A \implies n \in A$. לפי אינדוקציה חזקה, $A=\mathbb{N}$.
- לכן $S = \emptyset$.

---

# דוגמה לשימוש בעיקרון המינימום

**טענה:** כל מספר טבעי $n \ge 2$ ניתן לרישום בבסיס 2 (בינארי).

<v-click>

**הוכחה באמצעות עיקרון המינימום:**

נניח בשלילה שקיים מספר $n \ge 2$ שאינו ניתן לרישום בבסיס 2.

- תהי $A = \{n \ge 2 : n \text{ לא ניתן לרישום בבסיס 2}\}$.
- לפי הנחה, $A \neq \emptyset$.
- לפי עיקרון המינימום, ל-$A$ יש איבר מינימלי, נסמנו $m$.
- מכיוון ש-$m \ge 2$, אפשר לכתוב $m = 2q + r$ כאשר $r \in \{0,1\}$ ו-$q < m$.
- מכיוון ש-$q < m$, המספר $q$ ניתן לרישום בבסיס 2: $q = (b_k b_{k-1} \cdots b_1 b_0)_2$.
- לכן $m = 2q + r = (b_k b_{k-1} \cdots b_1 b_0 r)_2$ - סתירה למינימליות של $m$!

</v-click>

---

# קבוצת החזקה של קבוצה סופית

**טענה:** אם $|A| = n$, אז $|\mathcal{P}(A)| = 2^n$.

<v-click>

**הוכחה באינדוקציה על $n$:**

**בסיס:** $n=0$, כלומר $A = \emptyset$.
- $\mathcal{P}(\emptyset) = \{\emptyset\}$, ולכן $|\mathcal{P}(\emptyset)| = 1 = 2^0$ ✓

</v-click>

<v-click>

**צעד אינדוקטיבי:** 
- נניח שהטענה נכונה לקבוצה $A$ בת $n$ איברים.
- תהי $B$ קבוצה בת $n+1$ איברים. נבחר $b \in B$ ונסמן $A = B \setminus \{b\}$.
- כל תת-קבוצה $X \subseteq B$ היא מאחד משני טיפוסים:
  1. $b \notin X$: אז $X \subseteq A$ (יש $2^n$ כאלה לפי הנחת האינדוקציה)
  2. $b \in X$: אז $X = Y \cup \{b\}$ כאשר $Y \subseteq A$ (יש $2^n$ כאלה)
- סה"כ: $|\mathcal{P}(B)| = 2^n + 2^n = 2 \cdot 2^n = 2^{n+1}$ ✓

</v-click>

---

# תת-קבוצות של קבוצות סופיות

**טענה:** אם $A$ קבוצה סופית ו-$B \subseteq A$, אז $|B| \le |A|$.

<v-click>

**הוכחה:**
- נניח $|A| = n$ ו-$|B| = m$.
- קיימת פונקציה חח"ע ועל $f \colon \{1,\ldots,n\} \to A$.
- מכיוון ש-$B \subseteq A$, קיימת פונקציה חח"ע $g \colon \{1,\ldots,m\} \to B \subseteq A$.
- נוכל להגביל את $f$ כך שתמונתה היא $B$, ונקבל $m \le n$.

</v-click>

<v-click>

**מסקנה:** אם $A$ סופית, כל תת-קבוצה של $A$ היא גם סופית.

</v-click>

<!-- ---

# אי-שקילות בין $\mathbb{N}$ לקבוצת החזקה שלו

**משפט (קנטור):** לא קיימת פונקציה חח"ע ועל $f \colon \mathbb{N} \to \mathcal{P}(\mathbb{N})$.

<v-click>

**רעיון ההוכחה (אלכסון קנטור):**

נניח בשלילה שקיימת $f \colon \mathbb{N} \to \mathcal{P}(\mathbb{N})$ חח"ע ועל.

- נגדיר קבוצה $D = \{n \in \mathbb{N} : n \notin f(n)\}$ (הקבוצה "האלכסונית").
- מכיוון ש-$D \subseteq \mathbb{N}$, מתקיים $D \in \mathcal{P}(\mathbb{N})$.
- לפי הנחה, $f$ על, לכן קיים $d \in \mathbb{N}$ כך ש-$f(d) = D$.
- **שאלה:** האם $d \in D$?
  - אם $d \in D$, אז לפי הגדרת $D$ מתקיים $d \notin f(d) = D$ - סתירה!
  - אם $d \notin D$, אז $d \notin f(d)$, ולכן לפי הגדרת $D$ מתקיים $d \in D$ - סתירה!

מסקנה: $\mathcal{P}(\mathbb{N})$ "גדול יותר" מ-$\mathbb{N}$ במובן עוצמות.

</v-click>

---

# סיכום

בהרצאה זו למדנו:

1. **קבוצות סופיות:** הגדרה ותכונות בסיסיות
2. **עיקרון שובך היונים:** גרסה בסיסית ומוכללת
3. **שלושה סוגי אינדוקציה:**
   - אינדוקציה רגילה
   - אינדוקציה שלמה

4. **דוגמאות לשימוש באינדוקציה:** סכומים, פירוק לראשוניים
5. **עיקרון המינימום** ושקילותו לאינדוקציה
6. **קבוצת החזקה:** $|\mathcal{P}(A)| = 2^{|A|}$
7. **משפט קנטור:** $\mathbb{N}$ ו-$\mathcal{P}(\mathbb{N})$ אינם שקולים

---

# תרגול: שאלות לחשיבה

1. הוכיחו באינדוקציה: $\displaystyle \sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}$

2. הוכיחו באינדוקציה שלמה: כל מספר טבעי $n \ge 8$ ניתן להצגה בצורה $3a + 5b$ כאשר $a,b \in \mathbb{N}$.

3. בקבוצה של 10 אנשים, כל אחד מכיר לפחות 6 אחרים. הוכיחו שקיימים שלושה אנשים שכולם מכירים זה את זה.

4. הוכיחו: אם $A$ קבוצה סופית, אז מספר התת-קבוצות הזוגיות שווה למספר התת-קבוצות האי-זוגיות.


--- 

---

# דוגמאות לשימוש באינדוקציה

**דוגמה 1: סכום של $n$ מספרים ראשונים**

**שאלה:** האם קיים נוסחה פשוטה לסכום המספרים $1, 2, 3, \ldots, n$?

<v-click>

**תשובה:** $\displaystyle \sum_{i=1}^{n} i = \frac{n(n+1)}{2}$

ראינו את ההוכחה באינדוקציה קודם.

</v-click>

<v-click>

**דוגמה 2: סכום חזקות של 2**

**טענה:** $\displaystyle \sum_{i=0}^{n} 2^i = 2^{n+1} - 1$

**בסיס:** $n=0$: $\sum_{i=0}^{0} 2^i = 2^0 = 1 = 2^1 - 1$ ✓

**צעד:** נניח נכון ל-$n$, נוכיח ל-$n+1$:
$$\sum_{i=0}^{n+1} 2^i = \left(\sum_{i=0}^{n} 2^i\right) + 2^{n+1} = (2^{n+1} - 1) + 2^{n+1} = 2 \cdot 2^{n+1} - 1 = 2^{n+2} - 1$$ ✓

</v-click> -->
 