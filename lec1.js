allLectures.push({
    id: "physio_lec1",
    title: {
        ar: "الاتزان البدني وسوائل الجسم",
        en: "Homeostasis & Body Fluids"
    },
    revision: [
        {
            title: { ar: "مستويات التنظيم ومفهوم الاتزان", en: "Organization Levels & Homeostasis" },
            branches: [
                {
                    type: "tree",
                    nodeTitle: { ar: "مستويات التنظيم في الجسم", en: "Levels of Organization" },
                    leafs: [
                        { ar: "الخلية: الوحدة التركيبية والوظيفية الأساسية", en: "Cell: Structural & functional unit" },
                        { ar: "النسيج: مجموعة خلايا متماثلة التخصص", en: "Tissue: Group of cells with similar specialization" },
                        { ar: "العضو: وحدة متكونة من عدة أنسجة مختلفة", en: "Organ: Unit made of several tissue types" },
                        { ar: "الجهاز: مجموعة أعضاء مترابطة وظيفياً", en: "System: Collection of related organs" },
                        { ar: "الكائن الحي: تكامل كافة أجهزة الجسم", en: "Organism: Integrated body systems" }
                    ]
                },
                {
                    type: "info",
                    nodeTitle: { ar: "أصل المصطلح والتعريف", en: "Origin & Definition of Homeostasis" },
                    content: {
                        ar: "مشتق من كلمتين يونانيتين: *Homeo* تعني (ثابت أو مماثل)، و*Stasis* تعني (بقاء). يُعرف بأنه: الحفاظ على بيئة داخلية مستقرة نسبياً رغم التغيرات في العالم الخارجي.",
                        en: "Derived from Greek: *Homeo* (unchanged/same) & *Stasis* (to stay). Definition: Maintenance of a relatively stable internal environment despite external changes."
                    }
                },
                {
                    type: "reveal",
                    nodeTitle: { ar: "لماذا يعتبر الاتزان البدني حيوياً؟", en: "Why is Homeostasis Essential?" },
                    content: {
                        ar: "1) *وظيفة البروتينات والإنزيمات:* تعمل في نطاق ضيق جداً من الحرارة والـ pH.\n2) *وظائف الأغشية الخلوية:* سيولتها تتأثر بالحرارة، وجهد الغشاء يتأثر بالتوازن الأيوني.\n3) *فشل التكيف:* يؤدي لفقدان الاتزان والمرض (Illness) أو الوفاة.",
                        en: "1) *Protein/Enzyme Function:* Operates within narrow pH and temperature limits.\n2) *Membrane Function:* Fluidity altered by temp; potential governed by ion balance.\n3) *Failure of compensation:* Leads directly to disease or illness."
                    }
                }
            ]
        },
        {
            title: { ar: "أنظمة التحكم والتغذية الراجعة", en: "Control Systems & Feedback Loops" },
            branches: [
                {
                    type: "steps",
                    nodeTitle: { ar: "مكونات أي جهاز تحكم بالاتزان", en: "Components of Homeostatic Control Systems" },
                    steps: [
                        { ar: "المتغير المنظم (Controlled Variable): مثل الحرارة أو السكر", en: "Controlled variable: The regulated physical/chemical factor" },
                        { ar: "المستقبلات (Sensors/Receptors): استشعار التغيرات", en: "Sensors: Detect deviations from normal" },
                        { ar: "المركز العصبي (Center): مقارنة القيمة بنقطة الضبط (Set point)", en: "Center: Compares input with set point and decides response" },
                        { ar: "نظام الاتصال (Nerves / Hormones): نقل الأوامر", en: "Communication system: Transmits signals via nerves or hormones" },
                        { ar: "العضو المنفذ (Effector): إحداث الاستجابة لإغلاق الدائرة", en: "Effector: Tissue/organ producing response to close loop" }
                    ]
                },
                {
                    type: "compare",
                    val1Title: { ar: "التغذية الراجعة السلبية (Negative)", en: "Negative Feedback" },
                    val1: { 
                        ar: "تعمل على *عكس* الاتجاه الأصلي للتغير وإعادة المتغير لنقطة الضبط.\n*مثال:* إفراز العرق عند ارتفاع حرارة الجسم فوق 37 مئوية لتبريده.", 
                        en: "Reverses original stimulus to restore set point.\n*Example:* Sweating when core temperature exceeds 37°C." 
                    },
                    val2Title: { ar: "التغذية الراجعة الإيجابية (Positive)", en: "Positive Feedback" },
                    val2: { 
                        ar: "تعمل على *تضخيم وتعزيز* التغير وإبعاده أكثر عن نقطة البداية.\n*مثال:* الولادة؛ ضغط رأس الجنين يفرز الأوكسيتوسين لزيادة الانقباضات.", 
                        en: "Amplifies original stimulus, pushing variable further from baseline.\n*Example:* Parturition (cervical stretch triggers oxytocin)." 
                    }
                },
                {
                    type: "info",
                    nodeTitle: { ar: "العضو المسؤول عن الاتزان", en: "Organ Responsible for Homeostasis" },
                    content: {
                        ar: "لا يوجد عضو واحد منفرد يتحكم بالاتزان البدني؛ بل تشترك فيه *كافة أجهزة الجسم* معاً (الجلد، الكلى، الكبد، الغدد الصماء، والجهاز العصبي).",
                        en: "No single specific organ controls homeostasis. Skin, kidneys, liver, endocrine, and nervous systems all collaborate."
                    }
                }
            ]
        },
        {
            title: { ar: "سوائل الجسم وقاعدة 60-40-20", en: "Body Fluid Compartments & 60-40-20 Rule" },
            branches: [
                {
                    type: "info",
                    nodeTitle: { ar: "قاعدة (60 - 40 - 20)", en: "The 60-40-20 Distribution Rule" },
                    content: {
                        ar: "في شخص وزنه 70 كجم:\n• *إجمالي الماء (TBW):* 60% من وزن الجسم = 42 لتر.\n• *السائل داخل الخلايا (ICF):* 40% من وزن الجسم (ثلثي السوائل) = 28 لتر.\n• *السائل خارج الخلايا (ECF):* 20% من وزن الجسم (ثلث السوائل) = 14 لتر.",
                        en: "In a 70 kg adult:\n• *Total Body Water (TBW):* 60% of body weight = 42 L.\n• *Intracellular Fluid (ICF):* 40% of body weight (2/3 of TBW) = 28 L.\n• *Extracellular Fluid (ECF):* 20% of body weight (1/3 of TBW) = 14 L."
                    }
                },
                {
                    type: "tree",
                    nodeTitle: { ar: "تقسيم السائل خارج الخلايا (ECF = 14 L)", en: "ECF Subcompartments" },
                    leafs: [
                        { ar: "السائل الخلالي (بين الخلايا): 10.5 لتر (يمثل 3/4 الـ ECF)", en: "Interstitial fluid: 10.5 L (3/4 of ECF)" },
                        { ar: "بلازما الدم: 3 لتر (تمثل 1/4 الـ ECF)", en: "Plasma: 3 L (1/4 of ECF)" },
                        { ar: "السائل عبر الخلوي (التجاويف): 0.5 لتر (CSF، المفصلي، الجنبي، البريتوني)", en: "Transcellular: 0.5 L (CSF, synovial, pleural, peritoneal)" }
                    ]
                },
                {
                    type: "reveal",
                    nodeTitle: { ar: "العوامل المؤثرة على كمية سوائل الجسم", en: "Factors Affecting Total Body Fluids" },
                    content: {
                        ar: "1) *نسبة الدهون:* النحيف يمتلك سوائل أكثر من البدين؛ لأن العضلات (الأنسجة اللينة) تحتوي ماءً أكثر بكثير من النسيج الدهني.\n2) *الجنس:* الذكور (60%) أكثر من الإناث (40-50%) لزيادة الكتلة العضلية.\n3) *العمر:* تقل السوائل بتقدم العمر لفقدان الكتلة العضلية وزيادة النسيج الدهني.",
                        en: "1) *Body fat:* Lean tissue has more water than adipose; thin individuals have higher fluid %.\n2) *Gender:* Males (60%) > Females (40-50%) due to higher muscle proportion.\n3) *Age:* Total body fluids decline with age as lean tissue decreases and fat increases."
                    }
                }
            ]
        },
        {
            title: { ar: "مقارنة تركيب السوائل (ICF vs ECF)", en: "Composition of ICF vs ECF" },
            branches: [
                {
                    type: "compare",
                    val1Title: { ar: "السائل داخل الخلايا (ICF)", en: "Intracellular Fluid (ICF)" },
                    val1: { 
                        ar: "• الكاتيون الأساسي: *البوتاسيوم* (140-145 mEq/L).\n• الأنيون الأساسي: *الفوسفات* (75) والبروتينات.\n• الصوديوم منخفض (10-14)، الكالسيوم شبه منعدم (<1).\n• غني جداً بالبروتينات.", 
                        en: "• Dominant cation: *Potassium* (140-145 mEq/L).\n• Dominant anions: *Phosphates* (75 mEq/L) & proteins.\n• Low Sodium (10 mEq/L), minimal free Calcium (<1 mEq/L).\n• High protein content." 
                    },
                    val2Title: { ar: "السائل خارج الخلايا (ECF)", en: "Extracellular Fluid (ECF)" },
                    val2: { 
                        ar: "• الكاتيون الأساسي: *الصوديوم* (142 mEq/L).\n• الأنيون الأساسي: *الكلوريد* (103) والبيكربونات (28).\n• البوتاسيوم منخفض (4)، الكالسيوم (5).\n• البلازما تحتوي بروتينات، السائل الخلالي *خالٍ تماماً* من البروتين.", 
                        en: "• Dominant cation: *Sodium* (142 mEq/L).\n• Dominant anions: *Chloride* (103 mEq/L) & Bicarbonate (28).\n• Low Potassium (4 mEq/L), Calcium (5 mEq/L).\n• Plasma has proteins, Interstitial fluid has *no protein*." 
                    }
                },
                {
                    type: "info",
                    nodeTitle: { ar: "التشابه الأسموزي والأيوني", en: "Osmotic Equilibrium" },
                    content: {
                        ar: "رغم الاختلاف الشديد في التوزيع النوعي للأيونات، إلا أن *إجمالي التركيز الأيوني متقارب*، و*الضغط الأسموزي الكلي متطابق تماماً* بين الـ ICF والـ ECF ويساوي *281 mOsm/L*.",
                        en: "Despite different ion identities, the *total ionic concentration is similar* and the *total osmolarity is identical* at *281 mOsm/L* across both compartments."
                    }
                }
            ]
        },
        {
            title: { ar: "توازن وتنظيم سوائل الجسم واعتلالاتها", en: "Fluid Regulation & Disorders" },
            branches: [
                {
                    type: "compare",
                    val1Title: { ar: "مدخلات الماء (Inputs = 2500 ml)", en: "Water Intake (~2500 ml)" },
                    val1: { 
                        ar: "• السوائل الفموية: ~1500 مل\n• الطعام: ~500 مل\n• النواتج الأيضية: ~500 مل", 
                        en: "• Oral fluids: ~1500 ml\n• Food moisture: ~500 ml\n• Metabolic water: ~500 ml" 
                    },
                    val2Title: { ar: "مخرجات الماء (Outputs = 2500 ml)", en: "Water Output (~2500 ml)" },
                    val2: { 
                        ar: "• البول: ~1500 مل\n• الفقد غير المحسوس (عرق، تنفس، براز): ~1000 مل", 
                        en: "• Urine output: ~1500 ml\n• Insensible losses (sweat, lungs, faeces): ~1000 ml" 
                    }
                },
                {
                    type: "steps",
                    nodeTitle: { ar: "دور تحت المهاد (Hypothalamus) في تنظيم العطش", en: "Hypothalamic Osmoregulation" },
                    steps: [
                        { ar: "نقص ماء الجسم يؤدي لزيادة أسمولية الـ ECF", en: "Water deficit leads to increased ECF osmolarity" },
                        { ar: "تحفيز المستقبلات الأسموزية (Osmoreceptors) في تحت المهاد", en: "Osmoreceptors in hypothalamus detect hypertonicity" },
                        { ar: "المسار الأول: إثارة مركز العطش لزيادة شرب الماء", en: "Pathway 1: Stimulates thirst mechanism to increase intake" },
                        { ar: "المسار الثاني: إفراز الهرمون المانع لإدرار البول (ADH)", en: "Pathway 2: Stimulates ADH release from posterior pituitary" },
                        { ar: "إعادة امتصاص الماء بالكلى وإعادة الأسمولية للوضع الطبيعي", en: "Increased renal water reabsorption restores normal osmolarity" }
                    ]
                },
                {
                    type: "info",
                    nodeTitle: { ar: "دور الكلى (The Master Regulator)", en: "Renal Regulation" },
                    content: {
                        ar: "ترشح الكبيبات الكلوية ما يقارب *180 لتر* من البلازما يومياً، يعاد امتصاص معظمها ليخرج فقط *1.5 لتر* كبول. تجرى التعديلات الدقيقة في الأنابيب البعيدة والقنوات الجامعة تحت سيطرة هرموني *ADH* و*Aldosterone*.",
                        en: "Glomeruli filter ~180 L of plasma/day, but tubules reabsorb >99%, yielding only 1.5 L urine. Precise adjustments occur in distal tubules & collecting ducts via ADH and aldosterone."
                    }
                },
                {
                    type: "tree",
                    nodeTitle: { ar: "اضطرابات توازن السوائل (Disorders)", en: "Clinical Disorders of Fluid Balance" },
                    leafs: [
                        { ar: "الجفاف (Dehydration): فقدان سوائل يتجاوز المدخلات؛ هبوط ضغط، جفاف أغشية، وقلة بول", en: "Dehydration: Loss exceeds intake; hypotension, dry mucosa, oliguria" },
                        { ar: "التسمم المائي (Water intoxication): تخفيف الصوديوم مما يسبب انتفاخ المخ (Brain swelling)", en: "Overhydration: Dilutes sodium, inducing dangerous cerebral edema" },
                        { ar: "الوذمة (Edema): تجمع مفرط للسائل في الفراغ الخلالي؛ بسبب نقص الألبومين أو قصور القلب", en: "Edema: Interstitial fluid accumulation; low albumin, heart failure, inflammation" },
                        { ar: "اختلال البوتاسيوم: يؤدي لاضطراب خطير في كهربية ونظم القلب (Arrhythmias)", en: "Potassium imbalance: Triggers fatal cardiac arrhythmias" }
                    ]
                }
            ]
        },
        {
            title: { 
                ar: "أسئلة علل الهامة (Give Reason)", 
                en: "High-Yield 'Give Reason' Questions" 
            },
            branches: [
                {
                    type: "reveal",
                    nodeTitle: { 
                        ar: "علل: الشخص النحيف يمتلك محتوى سوائل أكثر من الشخص البدين؟", 
                        en: "Give reason: Thin person has more fluid content than obese?" 
                    },
                    content: { 
                        ar: "لأن *العضلات (الأنسجة اللحمية)* تحتوي على نسبة سوائل أعلى بكثير من *النسيج الدهني* (الدهون تحتوي على نسبة قليلة جداً من الماء).", 
                        en: "Because *muscles (lean tissue)* have a much higher fluid content than *fat tissue* (fat contains very little water)." 
                    }
                },
                {
                    type: "reveal",
                    nodeTitle: { 
                        ar: "علل: الذكور لديهم محتوى سوائل في الجسم أكثر من الإناث؟", 
                        en: "Give reason: Males have more body fluid content than females?" 
                    },
                    content: { 
                        ar: "لأن الذكور لديهم *أنسجة عضلية أكثر* ونسيج دهني أقل، بينما تمتلك الإناث نسبة أكبر من النسيج الدهني تحت الجلد.", 
                        en: "Because males have *more lean tissue* (muscles) and less fat tissue, while females have more subcutaneous adipose tissue." 
                    }
                },
                {
                    type: "reveal",
                    nodeTitle: { 
                        ar: "علل: إجمالي سوائل الجسم يقل مع التقدم في العمر؟", 
                        en: "Give reason: Total body fluids decrease with aging?" 
                    },
                    content: { 
                        ar: "بسبب *النقصان التدريجي في الأنسجة العضلية* (الكتلة العضلية) و*الزيادة في النسيج الدهني* مع التقدم في العمر.", 
                        en: "Because of the progressive *decrease of lean tissue* (muscle mass) and the *increase of fat tissue* with age." 
                    }
                },
                {
                    type: "reveal",
                    nodeTitle: { 
                        ar: "علل: الحفاظ على درجة حرارة الجسم والرقم الهيدروجيني (pH) المثاليين يعد أمراً ضرورياً؟", 
                        en: "Give reason: Maintaining optimal body temperature and pH is essential?" 
                    },
                    content: { 
                        ar: "لأن *البروتينات الخلوية (مثل الإنزيمات)* لا يمكنها العمل إلا ضمن نطاق محدود ومحدد جداً من درجات الحرارة والرقم الهيدروجيني (pH).", 
                        en: "Because *cellular proteins (such as enzymes)* can only function within a very limited and specific range of temperature and pH." 
                    }
                },
                {
                    type: "reveal",
                    nodeTitle: { 
                        ar: "علل: فرط السوائل (التسمم المائي) يسبب تورم الدماغ؟", 
                        en: "Give reason: Overhydration (water intoxication) causes brain swelling?" 
                    },
                    content: { 
                        ar: "لأن الماء الزائد *يخفف من تركيز الصوديوم خارج الخلايا* (نقص صوديوم الدم)، مما يؤدي لسحب الماء إلى داخل خلايا الدماغ بالخاصية الأسموزية، مسبباً تورم الدماغ.", 
                        en: "Because excess water *dilutes extracellular sodium* (hyponatremia), which draws water into brain cells by osmosis, causing cerebral swelling." 
                    }
                },
                {
                    type: "reveal",
                    nodeTitle: { 
                        ar: "علل: الكبيبات ترشح 180 لتر يومياً، ومع ذلك حجم البول الناتج هو 1.5 لتر فقط؟", 
                        en: "Give reason: Glomeruli filter 180 L/day, yet urine output is only 1.5 L?" 
                    },
                    content: { 
                        ar: "لأن *الأنيبيبات الكلوية تعيد امتصاص أكثر من 99%* من البلازما المرشحة، مع إجراء تعديلات دقيقة يتم تنظيمها بواسطة هرموني *ADH والألدوستيرون*.", 
                        en: "Because the *renal tubules reabsorb over 99%* of the filtered plasma, with fine adjustments regulated by *ADH and aldosterone*." 
                    }
                }
            ]
        }
    ],
    quiz: [
        // --- أسئلة الدكتورة (مفاهيم الاتزان الداخلي والتغذية الراجعة) ---
        {
            q: {
                ar: "مصطلح 'الاتزان الداخلي' (Homeostasis) يصف قدرة الجسم على:",
                en: "The term 'homeostasis' describes the ability of the body to:"
            },
            opts: {
                ar: [
                    "زيادة استجابته للضغط والإجهاد",
                    "الحفاظ على درجة حرارة داخلية ثابتة نسبياً فقط",
                    "تقليل استجابته للضغط والإجهاد",
                    "الحفاظ على بيئة داخلية ثابتة نسبياً"
                ],
                en: [
                    "Increase its response to stress.",
                    "Maintain a relatively constant internal temperature.",
                    "Decrease its response to stress.",
                    "Maintain a relatively constant internal environment."
                ]
            },
            correct: 3,
            hint: {
                ar: "الاتزان الداخلي هو الحفاظ على ظروف الجسم الداخلية ضمن حدود ضيقة وثابتة نسبياً (Doctor's Q4 & Q3).",
                en: "Homeostasis refers to the maintenance of internal body conditions within narrow limits."
            }
        },
        {
            q: {
                ar: "كيف يعيد الاتزان الداخلي الجسم إلى حالته الصحية بعد التعرض لمؤثر مجهد (Stressful stimulus)؟ يفعل ذلك عن طريق إنتاج:",
                en: "How does homeostasis return the body to a healthy state after a stressful stimulus? It does so by producing:"
            },
            opts: {
                ar: [
                    "استجابات تعاكس (Oppose) هذا الإجهاد",
                    "سلوكيات مكتسبة (Learned behavior)",
                    "فعل منعكس (Reflex action)",
                    "آلية تنظيم كيميائي (Buffering mechanism)"
                ],
                en: [
                    "Responses that oppose the stress.",
                    "Learned behavior.",
                    "A reflex action.",
                    "A buffering mechanism."
                ]
            },
            correct: 0,
            hint: {
                ar: "آليات الجسم تقوم بعمل استجابة تعاكس التغير لتعود به إلى المستوى الطبيعي (Doctor's Q5).",
                en: "The body utilizes negative feedback mechanisms to produce responses that oppose the original stress."
            }
        },
        {
            q: {
                ar: "ماذا يعني مصطلح 'التغذية الراجعة السلبية' (Negative feedback)؟",
                en: "What does 'negative feedback' mean?"
            },
            opts: {
                ar: [
                    "هي العملية الوحيدة التي تحافظ على الاتزان الداخلي",
                    "آلية تكون فيها استجابة الجسم معاكسة (Opposes) للمحفز الأصلي",
                    "آلية تكون فيها استجابة الجسم معززة ومقوية للمحفز الأصلي",
                    "المركز الذي يحافظ على حالة التوازن الديناميكي"
                ],
                en: [
                    "The only process that maintains homeostasis.",
                    "A mechanism in which the body's response opposes the stimulus.",
                    "A mechanism in which the body's response enhances the stimulus.",
                    "The center that maintains dynamic equilibrium."
                ]
            },
            correct: 1,
            hint: {
                ar: "التغذية الراجعة السلبية تعمل على عكس اتجاه التغير لتعود بالمتغير نحو نقطة الضبط (Doctor's Q6).",
                en: "It is a response that reverses a change and returns a variable toward its set point."
            }
        },
        {
            q: {
                ar: "أي عبارة مما يلي صحيحة فيما يخص التغذية الراجعة الإيجابية (Positive feedback)؟",
                en: "Which statement about positive feedback is correct?"
            },
            opts: {
                ar: [
                    "هي الطريقة الوحيدة لحفاظ الجسم على الاتزان الداخلي",
                    "الاستجابة الناتجة تعاكس المحفز الأصلي",
                    "الاستجابة تحافظ على حالة التوازن الديناميكي",
                    "الاستجابة الناتجة تضخم وتعزز (Amplifies) المحفز الأصلي"
                ],
                en: [
                    "It is the only way the body maintains homeostasis.",
                    "The response opposes the stimulus.",
                    "The response maintains a dynamic state of equilibrium.",
                    "The response amplifies the stimulus."
                ]
            },
            correct: 3,
            hint: {
                ar: "التغذية الراجعة الإيجابية تزيد من حدة التغير بدلاً من إيقافه، مثل انقباضات الولادة (Doctor's Q1).",
                en: "A positive feedback loop produces a response that amplifies the initial change."
            }
        },
        // --- أسئلة الذكاء الاصطناعي (أفكار إضافية غير موجودة في الشيت) ---
        {
            q: {
                ar: "وفقاً للتسلسل الهرمي لمستويات التنظيم البيولوجي، ما هو التعريف الدقيق للعضو (Organ)؟",
                en: "According to the hierarchy of body organization, what is the precise definition of an organ?"
            },
            opts: {
                ar: [
                    "مجموعة من الخلايا المتشابهة في التخصص والتركيب",
                    "وحدة تركيبية ووظيفية تتألف من عدة أنواع مختلفة من الأنسجة",
                    "مجموعة من الأعضاء المرتبطة تشريحياً لتحقيق هدف عام",
                    "أصغر بنية حية قادرة على القيام بالعمليات الحيوية المستقلة"
                ],
                en: [
                    "A group of cells exhibiting identical functional specialization",
                    "A structural unit composed of several distinct tissue types",
                    "A collection of related anatomical structures executing broad roles",
                    "The smallest living unit capable of independent life processes"
                ]
            },
            correct: 1,
            hint: {
                ar: "النسيج هو مجموعة خلايا، بينما العضو (مثل المعدة) يتكون من اجتماع أنسجة متعددة تعبر عن وحدة وظيفية.",
                en: "A tissue is a group of similar cells, whereas an organ is composed of several tissue types working together."
            }
        },
        {
            q: {
                ar: "المصطلح الإغريقي 'Homeo' المشتق منه اسم الاتزان البدني يعني في أصله اللغوي:",
                en: "The Greek root 'Homeo' in the term Homeostasis originally translates to:"
            },
            opts: {
                ar: ["الثبات التام الجامد", "البقاء والاستقرار", "التماثل أو عدم التغير", "التنظيم الداخلي المتوازن"],
                en: ["Absolute rigidity", "To remain or stay", "The same or unchanged", "Dynamic self-regulation"]
            },
            correct: 2,
            hint: {
                ar: "كلمة Homeo تعني unchanged or the same، بينما Stasis تعني to stay.",
                en: "'Homeo' means unchanged or the same, while 'stasis' means to stay."
            }
        },
        {
            q: {
                ar: "أي العبارات التالية تصف بدقة العضو المسؤول عن الحفاظ على الاتزان الداخلي للجسم؟",
                en: "Which statement accurately describes the organ responsible for homeostatic maintenance?"
            },
            opts: {
                ar: [
                    "الكلى هي العضو الحصري المنوط به ضبط كافة معايير الاتزان الداخلي",
                    "الجهاز العصبي المركزي هو العضو المنفذ الوحيد المباشر لكافة الاستجابات",
                    "لا يوجد عضو مفرد محدد، بل تتكامل وتتعاون جميع أجهزة الجسم لتحقيقه",
                    "تحت المهاد (Hypothalamus) هو العضو المنوط به التحكم المستقل دون باقي الأعضاء"
                ],
                en: [
                    "The kidneys serve as the sole executioner of systemic balance",
                    "The central nervous system acts as the solitary effector organ",
                    "No single organ is uniquely responsible; multiple systems cooperate",
                    "The hypothalamus independently maintains all variables without organ cooperation"
                ]
            },
            correct: 2,
            hint: {
                ar: "تنص السلايدات صراحة: 'There is no specific organ which controls homeostasis'.",
                en: "There is no single master organ; homeostasis is a cooperative effort among all systems."
            }
        },
        {
            q: {
                ar: "في آلية التغذية الراجعة الإيجابية المصاحبة لعملية الولادة الطبيعية، ما هو المثير الأولي (Stimulus) المباشر؟",
                en: "During parturition, what serves as the initial physical stimulus driving the positive feedback cycle?"
            },
            opts: {
                ar: [
                    "إفراز هرمون الأوكسيتوسين من الفص الخلفي للغدة النخامية",
                    "ضغط رأس الجنين وتمدد عنق الرحم",
                    "انقباض العضلات الملساء في قاع الرحم",
                    "انخفاض تركيز هرمون البروجستيرون في دم الأم"
                ],
                en: [
                    "Pulsatile release of oxytocin from the posterior pituitary",
                    "Mechanical stretching of the cervix by the fetal head",
                    "Rhythmic myometrial contractions in the uterine fundus",
                    "Abrupt drop in circulating maternal progesterone"
                ]
            },
            correct: 1,
            hint: {
                ar: "تمدد عنق الرحم يرسل إشارات عصبية للمخ، مما يحفز إفراز الأوكسيتوسين الذي يزيد الانقباض (مثال من السلايدات والشيت).",
                en: "Mechanical stretch of the cervix stimulates stronger contractions (positive feedback)."
            }
        },
        // --- أسئلة الدكتورة (سوائل الجسم والنسب) ---
        {
            q: {
                ar: "أي حيز من السوائل يشكل حوالي ثلثي (2/3) إجمالي ماء الجسم؟",
                en: "Which fluid compartment makes up about two thirds of total body water?"
            },
            opts: {
                ar: [
                    "السائل داخل الخلايا (Intracellular fluid)",
                    "السائل خارج الخلايا (Extracellular fluid)",
                    "السائل الخلالي (Interstitial fluid)",
                    "السائل عبر الخلوي (Transcellular fluid)"
                ],
                en: [
                    "Intracellular fluid.",
                    "Extracellular fluid.",
                    "Interstitial fluid.",
                    "Transcellular fluid."
                ]
            },
            correct: 0,
            hint: {
                ar: "السائل داخل الخلايا (ICF) يشكل 40% من وزن الجسم (ثلثي ماء الجسم البالغ 60%) (Doctor's Q11).",
                en: "Intracellular fluid (ICF) accounts for 2/3 of total body water."
            }
        },
        {
            q: {
                ar: "لماذا يمتلك الرضع (Infants) أعلى نسبة من محتوى الماء في أجسامهم؟",
                en: "Why do infants have the greatest body water content?"
            },
            opts: {
                ar: [
                    "لأن لديهم نسبة عالية من الدهون",
                    "لأن لديهم عدد قليل من العضلات الهيكلية",
                    "لأن لديهم نسبة منخفضة من دهون الجسم",
                    "لأن لديهم كتلة عظمية عالية"
                ],
                en: [
                    "They have high body fat.",
                    "They have few skeletal muscles.",
                    "They have low body fat.",
                    "They have high bone mass."
                ]
            },
            correct: 2,
            hint: {
                ar: "النسيج الدهني يحتوي على نسبة ماء أقل، وبما أن الرضع لديهم دهون أقل، فإن نسبة الماء لديهم تكون أعلى (Doctor's Q10).",
                en: "Infants have low body fat, and since fat contains very little water, their overall water percentage is higher."
            }
        },
        {
            q: {
                ar: "أي عبارة مما يلي تعتبر غير صحيحة (Incorrect) فيما يخص إجمالي ماء الجسم؟",
                en: "Which statement about total body water is incorrect?"
            },
            opts: {
                ar: [
                    "يشكل نسبة مئوية أقل من وزن الجسم في الأشخاص البدناء مقارنة بالنحاف",
                    "يشكل النصف إلى الثلثين من وزن الجسم في البالغين الشباب",
                    "يشكل نسبة أقل من وزن الجسم في النساء مقارنة بالرجال",
                    "يتناقص ماء الجسم أثناء عملية أيض (حرق) مخازن الدهون"
                ],
                en: [
                    "It forms a smaller percentage of body weight in fat people than in thin people.",
                    "It makes up one half to two thirds of body weight in young adults.",
                    "It is a smaller proportion of body weight in women than in men.",
                    "It decreases during the metabolism of fat stores."
                ]
            },
            correct: 3,
            hint: {
                ar: "العبارة الخاطئة هي الرابعة، لأن عمليات الأيض (بما فيها أيض الدهون) تنتج ما يسمى بـ Metabolic water مما يزيد الماء ولا ينقصه (Doctor's Q9).",
                en: "Metabolism actually produces metabolic water (approx 500 ml/day), it doesn't decrease body water."
            }
        },
        {
            q: {
                ar: "السائل الزلالي (Synovial fluid) الموجود في المفاصل هو مثال على:",
                en: "Synovial fluid is an example of:"
            },
            opts: {
                ar: [
                    "السائل داخل الخلايا (Intracellular fluid)",
                    "السائل خارج الخلايا (Extracellular fluid)",
                    "السائل الخلالي (Interstitial fluid)",
                    "السائل عبر الخلوي (Transcellular fluid)"
                ],
                en: [
                    "Intracellular fluid.",
                    "Extracellular fluid.",
                    "Interstitial fluid.",
                    "Transcellular fluid."
                ]
            },
            correct: 3,
            hint: {
                ar: "السوائل المحبوسة في تجاويف خاصة مثل السائل الزلالي، النخاعي (CSF)، والجنبي تعتبر Transcellular (Doctor's Q14).",
                en: "Transcellular fluid comprises specialized trapped fluids including CSF, pleural, and synovial fluids."
            }
        },
        // --- أسئلة الدكتورة (الأيونات والأسمولية) ---
        {
            q: {
                ar: "ما هو الأيون الموجب (Cation) الرئيسي في السائل خارج الخلايا (ECF)؟",
                en: "What is the main electrolyte (cation) in extracellular fluid?"
            },
            opts: {
                ar: ["الفوسفات (Phosphate)", "البوتاسيوم (Potassium)", "الصوديوم (Sodium)", "المغنيسيوم (Magnesium)"],
                en: ["Phosphate.", "Potassium.", "Sodium.", "Magnesium."]
            },
            correct: 2,
            hint: {
                ar: "الصوديوم هو الأيون الموجب الأكثر وفرة خارج الخلايا (بتركيز حوالي 142 mEq/L) (Doctor's Q12).",
                en: "Sodium is the dominant cation in the ECF."
            }
        },
        {
            q: {
                ar: "ما هو الأيون السالب (Anion) الرئيسي في السائل خارج الخلايا (ECF)؟",
                en: "What is the major anion in extracellular fluid?"
            },
            opts: {
                ar: ["الصوديوم (Sodium)", "الكلوريد (Chloride)", "البوتاسيوم (Potassium)", "الفوسفات (Phosphate)"],
                en: ["Sodium.", "Chloride.", "Potassium.", "Phosphate."]
            },
            correct: 1,
            hint: {
                ar: "الكلوريد هو الأيون السالب الرئيسي خارج الخلايا بتركيز 103 mEq/L (Doctor's Q13).",
                en: "Chloride dominates the extracellular anion pool."
            }
        },
        {
            q: {
                ar: "يختلف السائل خارج الخلية (ECF) عن السائل داخل الخلية (ICF) في أنه:",
                en: "Extracellular fluid differs from intracellular fluid because it:"
            },
            opts: {
                ar: [
                    "له حجم أكبر من السائل داخل الخلية",
                    "له توتر أسموزي (Tonicity) أقل",
                    "يحتوي على نسبة أعلى من الصوديوم مقارنة بالبوتاسيوم",
                    "له رقم هيدروجيني (pH) أقل"
                ],
                en: [
                    "Has a greater volume.",
                    "Has a lower tonicity.",
                    "Has a higher sodium-to-potassium molar ratio.",
                    "Has a lower pH."
                ]
            },
            correct: 2,
            hint: {
                ar: "الـ ECF غني جداً بالصوديوم وفقير بالبوتاسيوم، عكس الـ ICF تماماً (Doctor's Q8).",
                en: "ECF has high Sodium and low Potassium, creating a high Na:K ratio."
            }
        },
        // --- أسئلة الذكاء الاصطناعي (تكملة الأيونات والسوائل) ---
        {
            q: {
                ar: "ما القيمة الدقيقة للأسمولية الكلية لسوائل الجسم في الحيزين الداخلي والخارجي في الحالة الطبيعية؟",
                en: "What is the exact normal baseline osmolality shared by both ICF and ECF?"
            },
            opts: {
                ar: ["142 mOsm/L", "281 mOsm/L", "310 mOsm/L", "103 mOsm/L"],
                en: ["142 mOsm/L", "281 mOsm/L", "310 mOsm/L", "103 mOsm/L"]
            },
            correct: 1,
            hint: {
                ar: "موضح في جدول المقارنة بالسلايد: Osmolality = 281 mOsm/L في الطرفين.",
                en: "Slide explicitly defines body fluid osmolality as 281 mOsm/L in both ICF and ECF."
            }
        },
        {
            q: {
                ar: "ما الفارق الأساسي فيما يخص تواجد البروتينات بين حيز البلازما وحيز السائل الخلالي (Interstitial Fluid)؟",
                en: "What is the key difference regarding protein content between plasma and interstitial fluid?"
            },
            opts: {
                ar: [
                    "البلازما غنية بالبروتينات، بينما السائل الخلالي خالٍ تماماً من البروتين",
                    "السائل الخلالي يحتوي تركيزاً أعلى من الألبومين مقارنة بالبلازما",
                    "كلا الحيزين يحتويان على نفس التركيز المتكافئ من البروتينات الذائبة",
                    "البلازما تفتقر للبروتينات الكروية، بينما تتراكم البروتينات بين الخلايا"
                ],
                en: [
                    "Plasma is rich in proteins, whereas interstitial fluid has no protein",
                    "Interstitial fluid exhibits a higher albumin concentration than plasma",
                    "Both compartments maintain identical dissolved protein concentrations",
                    "Plasma lacks globular proteins, which accumulate in the interstitium"
                ]
            },
            correct: 0,
            hint: {
                ar: "جدران الشعيرات الدموية تمنع خروج البروتينات، لذا السائل الخلالي لا يحتوي على بروتين.",
                en: "Capillary endothelial walls retain large proteins in plasma; hence interstitial fluid has essentially no protein."
            }
        },
        {
            q: {
                ar: "في رجل بالغ سليم وزنه 70 كجم، كم تبلغ كمية السائل الخلالي (Interstitial Fluid) الموجود بين الخلايا؟",
                en: "What is the volume of interstitial fluid residing between cells in a standard 70 kg individual?"
            },
            opts: {
                ar: ["14 لتر", "10.5 لتر", "3 لتر", "0.5 لتر"],
                en: ["14 Liters", "10.5 Liters", "3 Liters", "0.5 Liters"]
            },
            correct: 1,
            hint: {
                ar: "الـ ECF مقداره 14 لتر، يتوزع إلى: سائل خلالي (10.5 لتر)، بلازما (3 لتر)، وسوائل عبر خلوية (0.5 لتر).",
                en: "ECF (14 L) consists of Interstitial fluid (10.5 L), Plasma (3 L), and Transcellular fluid (0.5 L)."
            }
        },
        // --- أسئلة الدكتورة (توازن الماء والفقدان) ---
        {
            q: {
                ar: "ما هي الاستجابة الفسيولوجية لزيادة أسمولية الدم (زيادة تركيز الأملاح)؟",
                en: "What is the response to increased blood osmolarity?"
            },
            opts: {
                ar: [
                    "زيادة تكوين وإفراز البول",
                    "زيادة الإحساس بالعطش",
                    "نقص إفراز الهرمون المانع لإدرار البول (ADH)",
                    "زيادة الشعور بالشبع لتقليل تناول السوائل"
                ],
                en: [
                    "Increased urine formation.",
                    "Increased sensation of thirst.",
                    "Decreased secretion of antidiuretic hormone.",
                    "Increased feeling of satiety, so less fluid is taken in."
                ]
            },
            correct: 1,
            hint: {
                ar: "زيادة الأسمولية تنشط مستقبلات تحت المهاد مما يحفز مركز العطش لزيادة شرب الماء (Doctor's Q15).",
                en: "Hyperosmolarity triggers hypothalamic osmoreceptors to stimulate the thirst center."
            }
        },
        {
            q: {
                ar: "ما هو المسار الأكبر (Largest route) لفقدان الماء من الجسم؟",
                en: "What is the largest route of water loss from the body?"
            },
            opts: {
                ar: ["البول (Urine)", "العرق (Sweat)", "البراز (Feces)", "نواتج الأيض (Metabolism)"],
                en: ["Urine.", "Sweat.", "Feces.", "Metabolism."]
            },
            correct: 0,
            hint: {
                ar: "الكلى (عن طريق البول) هي المنفذ الأكبر لفقدان السوائل يومياً بحوالي 1500 مل (Doctor's Q16).",
                en: "Urine output accounts for the vast majority of sensible water loss (~1500 ml/day)."
            }
        },
        {
            q: {
                ar: "ماذا يُقصد بمصطلح 'توازن السوائل' (Fluid balance) في الجسم؟",
                en: "What is meant by fluid balance in the body?"
            },
            opts: {
                ar: [
                    "تجنب حدوث الجفاف فقط",
                    "تجنب الإفراط في شرب الماء فقط",
                    "تعويض السوائل المفقودة أثناء الرياضة بمشروبات كهرلية",
                    "ضمان أن كمية الماء المكتسبة (Intake) تساوي كمية الماء المفقودة (Loss)"
                ],
                en: [
                    "Avoiding dehydration.",
                    "Avoiding over-hydration.",
                    "Replacing fluid lost during exercise with balanced electrolyte drinks.",
                    "Ensuring that water intake equals water loss."
                ]
            },
            correct: 3,
            hint: {
                ar: "التوازن يتحقق عندما تكون المدخلات اليومية للماء مساوية تماماً للمخرجات (Doctor's Q17).",
                en: "Water balance requires that Daily Water Intake = Daily Water Loss."
            }
        },
        // --- أسئلة الذكاء الاصطناعي (مفاهيم مرضية ووظائف كلوية متقدمة) ---
        {
            q: {
                ar: "في أي جزء من الأنيبيبات الكلوية تتم التعديلات النهائية الدقيقة لحجم السوائل تحت تأثير هرموني ADH و Aldosterone؟",
                en: "In which renal tubular segment do fine adjustments of water retention occur under ADH and aldosterone control?"
            },
            opts: {
                ar: [
                    "الأنيبوبة الملتوية القريبة (Proximal tubule)",
                    "التواء هنلي الهابط (Descending loop of Henle)",
                    "الأنيبوبة الملتوية البعيدة والقناة الجامعة (Distal tubule & collecting duct)",
                    "محفظة بومان (Bowman's capsule)"
                ],
                en: [
                    "The proximal convoluted tubule",
                    "The thin descending limb of Henle",
                    "The distal tubule and collecting duct",
                    "The glomerular Bowman's capsule"
                ]
            },
            correct: 2,
            hint: {
                ar: "السلايد توضح: 'fine adjustments are made in the distal tubule and collecting duct'.",
                en: "Fine-tuning of final urine volume takes place specifically in distal tubules and collecting ducts."
            }
        },
        {
            q: {
                ar: "ما هو المآل الفسيولوجي الخطير لحالة التسمم المائي (Overhydration) على المستوى الخلوي؟",
                en: "What is the critical pathophysiology of water intoxication (overhydration) at the cellular level?"
            },
            opts: {
                ar: [
                    "انكماش خلايا الدماغ نتيجة سحب الماء لخارج الخلايا",
                    "تخفيف تركيز الصوديوم مما يسبب تدفق الماء وتورم خلايا المخ (Brain swelling)",
                    "ترسب بلورات الكالسيوم داخل الأنيبيبات الكلوية",
                    "تثبيط مباشر ومفاجئ لعمل عضلة القلب نتيجة نقص الكلوريد"
                ],
                en: [
                    "Cellular crenation in brain tissue due to hypertonic extracellular fluid",
                    "Excess water dilutes sodium, driving water into neurons causing brain swelling",
                    "Intratubular crystallization of calcium within the nephrons",
                    "Acute cardiac arrest triggered directly by chloride dilution"
                ]
            },
            correct: 1,
            hint: {
                ar: "الماء الزائد يخفف الصوديوم في الـ ECF، فتنتقل المياه بالخاصية الأسموزية إلى داخل خلايا المخ مسببة انتفاخها وتورمها.",
                en: "Hyponatremia drives an osmotic shift of water into intracellular brain cells, inducing cerebral edema."
            }
        },
        {
            q: {
                ar: "الخطر الإكلينيكي المباشر والمهدد للحياة والناجم عن اعتلالات البوتاسيوم (Hyperkalemia / Hypokalemia) هو:",
                en: "What represents the most immediate life-threatening danger of potassium imbalances?"
            },
            opts: {
                ar: [
                    "حدوث اضطرابات خطيرة في نظم وكهربية القلب (Heart arrhythmias)",
                    "تورم وانتفاخ خلايا أنسجة المخ",
                    "فشل حاد في وظائف ترشيح الكبيبات الكلوية",
                    "جفاف حاد في الأغشية المخاطية وهبوط مباشر في الضغط"
                ],
                en: [
                    "Development of fatal cardiac arrhythmias",
                    "Massive cerebral edema and brain herniation",
                    "Acute loss of glomerular filtration capability",
                    "Profound mucosal xerosis and immediate circulatory collapse"
                ]
            },
            correct: 0,
            hint: {
                ar: "تغير البوتاسيوم يؤثر مباشرة على جهد الراحة الكهربائي لعضلة القلب، مما يسبب عدم انتظام ضربات القلب القاتل.",
                en: "Potassium governs myocardial resting membrane potential; abnormal levels provoke fatal cardiac arrhythmias."
            }
        },
        {
            q: {
                ar: "أي مما يلي يلخص بدقة ما يحدث عندما تفشل آليات التعويض الفسيولوجية (Compensation fails) في استعادة الاتزان؟",
                en: "What is the designated physiological outcome when compensatory mechanisms fail to restore homeostasis?"
            },
            opts: {
                ar: [
                    "التحول التلقائي لآلية تغذية راجعة إيجابية دائمة للحفاظ على الحياة",
                    "حدوث المرض أو الاعتلال الصحي (Illness or disease)",
                    "إعادة ضبط النقطة المرجعية (Set point) للصفر التام",
                    "توقف الترشيح الكلي وتوقف استهلاك الطاقة في الجسم"
                ],
                en: [
                    "Spontaneous switch to permanent positive feedback loops to sustain life",
                    "Onset of clinical illness or disease",
                    "Resetting of baseline set points to absolute zero",
                    "Total cessation of renal filtration and cellular ATP turnover"
                ]
            },
            correct: 1,
            hint: {
                ar: "مخطط المحاضرة يوضح: Compensation succeeds -> Wellness، أما Compensation fails -> Illness or disease.",
                en: "According to the homeostatic pathway diagram, failed compensation leads to illness or disease."
            }
        }
    ]
});