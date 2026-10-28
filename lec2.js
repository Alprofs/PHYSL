allLectures.push({
    id: "physio_lec2",
    title: {
        ar: "غشاء الخلية والنقل عبر الغشاء",
        en: "Cell Membrane & Transport"
    },
    revision: [
        {
            title: { ar: "تركيب وخصائص غشاء الخلية", en: "Structure & Properties of Cell Membrane" },
            branches: [
                {
                    type: "info",
                    nodeTitle: { ar: "وظائف الغشاء الخلوي الأساسية", en: "Core Membrane Functions" },
                    content: {
                        ar: "1) *سلامة الخلية (Cell integrity):* الحفاظ على الحجم والشكل.\n2) *النفاذية الاختيارية (Selective permeability):* التحكم بما يدخل ويخرج.\n3) *الحماية والدعم الميكانيكي* للخلية.\n4) *الحفاظ على التدرج الأيوني* بين الداخل والخارج.\n5) *تكوين الروابط والاتصال* مع الخلايا المجاورة.",
                        en: "1) *Cell integrity:* Maintains cell size and shape.\n2) *Selectively permeable:* Controls molecular traffic.\n3) *Protection & support* for intracellular contents.\n4) *Maintains ionic concentrations* across the bilayer.\n5) *Forms contacts* and junctions with neighboring cells."
                    }
                },
                {
                    type: "compare",
                    val1Title: { ar: "الرؤوس المحبة للماء (Phosphate Heads)", en: "Phosphate Heads" },
                    val1: { 
                        ar: "• قطبية (*Polar*).\n• محبة للماء (*Hydrophilic*).\n• تتجه نحو *السطح الخارجي والسطح الداخلي* للغشاء لمواجهة السوائل المائية.", 
                        en: "• Polar nature.\n• Water-loving (*Hydrophilic*).\n• Directed toward the *outer and inner surfaces* of the membrane." 
                    },
                    val2Title: { ar: "الذيول الكارهة للماء (Fatty Acid Tails)", en: "Fatty Acid Tails" },
                    val2: { 
                        ar: "• غير قطبية (*Non-polar*).\n• كارهة للماء (*Hydrophobic*).\n• تتجه نحو *مركز الغشاء* في الداخل هرباً من الماء.", 
                        en: "• Non-polar hydrocarbon chains.\n• Water-fearing (*Hydrophobic*).\n• Directed toward the *center of the membrane*." 
                    }
                },
                {
                    type: "tree",
                    nodeTitle: { ar: "النسب المئوية ومكونات الغشاء", en: "Membrane Composition Breakdown" },
                    leafs: [
                        { ar: "البروتينات المدمجة (Integral Proteins): تمثل 70% وتخترق سمك الغشاء", en: "Integral proteins: 70% (span membrane bilayer)" },
                        { ar: "البروتينات الطرفية (Peripheral Proteins): تمثل 30% وتوجد على أحد السطحين", en: "Peripheral proteins: 30% (attached to surfaces)" },
                        { ar: "الكربوهيدرات: ترتبط بالدهون (Glycolipid) أو بالبروتين (Glycoprotein)", en: "Carbohydrates: Glycolipids or Glycoproteins" },
                        { ar: "الكوليسترول: يتخلل طبقتي الفوسفوليبيد لضبط السيولة", en: "Cholesterol: Inserted within lipid bilayer" }
                    ]
                }
            ]
        },
        {
            title: { ar: "وظائف ومواقع بروتينات الغشاء", en: "Membrane Protein Classifications" },
            branches: [
                {
                    type: "compare",
                    val1Title: { ar: "المستقبلات (Receptors)", en: "Receptors" },
                    val1: { 
                        ar: "• الوظيفة: الارتباط بالهرمونات والأدوية لإحداث التأثير الحيوي.\n• *الموقع:* تتواجد دائماً على *السطح الخارجي (Outer surface)* للغشاء الخلوي.", 
                        en: "• Function: Bind hormones and drugs to trigger cellular responses.\n• *Location:* Located on the *outer surface* of the membrane." 
                    },
                    val2Title: { ar: "الإنزيمات (Enzymes)", en: "Enzymes" },
                    val2: { 
                        ar: "• الوظيفة: التحكم في التفاعلات الكيميائية الحيوية وتسريعها.\n• *الموقع:* تتواجد دائماً على *السطح الداخلي (Inner surface)* للغشاء الخلوي.", 
                        en: "• Function: Catalyze and control intracellular chemical reactions.\n• *Location:* Located on the *inner surface* of the membrane." 
                    }
                },
                {
                    type: "tree",
                    nodeTitle: { ar: "بقية البروتينات الوظيفية", en: "Transport & Structural Proteins" },
                    leafs: [
                        { ar: "القنوات (Channels): تسمح بتدفق الأيونات بحرية مع تدرج التركيز", en: "Channels: Allow passive flux of ions in and out" },
                        { ar: "النواقل (Carriers): تنقل المواد الذائبة في الماء عبر تغير شكلها الفراغي", en: "Carriers: Transport water-soluble molecules across" },
                        { ar: "الروابط (Linkers): ربط وتثبيت الخلايا المتجاورة ببعضها (Intercellular joining)", en: "Linkers: Mechanically connect neighboring cells together" }
                    ]
                }
            ]
        },
        {
            title: { ar: "النقل السلبي (Passive Transport)", en: "Passive Transport Mechanisms" },
            branches: [
                {
                    type: "info",
                    nodeTitle: { ar: "الانتشار البسيط (Simple Diffusion)", en: "Simple Diffusion" },
                    content: {
                        ar: "• *التعريف:* انتقال من التركيز المرتفع إلى المنخفض *بدون طاقة وبدون بروتين مساعد*، عبر المسافات بين جزيئات الغشاء.\n• *المواد المنقولة:*\n1) مواد ذائبة في الدهون: الأحماض الدهنية، الستيرويدات، الفيتامينات الذائبة في الدهون، والكحولات.\n2) جزيئات قطبية صغيرة غير مشحونة: O2, CO2, النيتروجين، واليوريا.",
                        en: "• *Definition:* High to low concentration *without energy and without helper protein* via intermolecular spaces.\n• *Substances transported:*\n1) Lipid-soluble: Fatty acids, steroids, fat-soluble vitamins, alcohols.\n2) Small uncharged polar/gases: O2, CO2, N, and urea."
                    }
                },
                {
                    type: "info",
                    nodeTitle: { ar: "الخاصية الأسموزية وقنوات الأكوابورين", en: "Osmosis & Aquaporins" },
                    content: {
                        ar: "• *الأسموزية:* حركة جزيئات *الماء* من تركيز الماء المرتفع إلى تركيز الماء المنخفض عبر غشاء شبه منفذ دون استهلاك طاقة.\n• *طريقة عبور الماء:* يعبر جزئياً عبر طبقة الدهون المزدوجة، ولكن *معظمه (Mostly)* يعبر عبر قنوات بروتينية مخصصة للماء تسمى *Aquaporins*.",
                        en: "• *Osmosis:* Movement of water molecules down water concentration gradient without energy.\n• *Pathway:* Crosses partly through lipid bilayer, but *mostly* through specialized water channels termed *Aquaporins*."
                    }
                },
                {
                    type: "reveal",
                    nodeTitle: { ar: "الانتشار الميسر (Facilitated Diffusion)", en: "Facilitated Diffusion" },
                    content: {
                        ar: "• انتقال المواد من التركيز المرتفع للمنخفض *باستخدام بروتين مساعد وبدون طاقة*.\n• مخصص للجزيئات القطبية أو غير المشحونة التي لا تستطيع عبور طبقة الدهون.\n• نوعا البروتين المساعد: بروتين حامل (Carrier-mediated) أو بروتين قناة (Channel-mediated).",
                        en: "• Downhill transport *using a helper protein without energy expenditure*.\n• Dedicated for polar or water-soluble substances unable to cross the lipid core.\n• Helper protein can be: Carrier-mediated or Channel-mediated."
                    }
                }
            ]
        },
        {
            title: { ar: "النقل النشط ومضخة الصوديوم والبوتاسيوم", en: "Active Transport & Na+/K+ Pump" },
            branches: [
                {
                    type: "info",
                    nodeTitle: { ar: "النقل النشط الأولي (Primary Active Transport)", en: "Primary Active Transport" },
                    content: {
                        ar: "• نقل المواد *ضد تدرج التركيز (من الأقل للأعلى)* باستخدام بروتين ناقل.\n• تستمد الطاقة *مباشرة (Directly)* من تكسير مركب الـ ATP.\n• *أشهر مثال:* مضخة الصوديوم والبوتاسيوم (Na+-K+ pump) التي تنقل *3 أيونات صوديوم إلى الخارج* مقابل *أيونين بوتاسيوم إلى الداخل*.",
                        en: "• Moves solutes *against gradient (low to high)* using carrier proteins.\n• Energy is derived *directly* from ATP hydrolysis.\n• *Key Example:* Na+-K+ pump transporting *3 Na+ ions out* and *2 K+ ions in*."
                    }
                },
                {
                    type: "steps",
                    nodeTitle: { ar: "الوظائف الحيوية لمضخة (Na+-K+ Pump)", en: "Functions of Na+-K+ Pump" },
                    steps: [
                        { ar: "الحفاظ على التدرج الأيوني: إبقاء الصوديوم منخفضاً بالداخل (~12 mM) والبوتاسيوم مرتفعاً (~140 mM)", en: "Maintaining ion gradients: Keeps intracellular Na+ low (~12 mM) and K+ high (~140 mM)" },
                        { ar: "الحفاظ على جهد الغشاء أثناء الراحة (Resting membrane potential)", en: "Maintains negative resting membrane potential" },
                        { ar: "توفير الطاقة الدافعة لتشغيل النقل النشط الثانوي", en: "Powering secondary active transport mechanisms" },
                        { ar: "دعم الاستثارة العصبية واستعادة توازن الأيونات بعد جهد الفعل (Action potential)", en: "Supporting excitability by restoring gradients after action potentials" }
                    ]
                },
                {
                    type: "reveal",
                    nodeTitle: { ar: "التكلفة الطاقية للمضخة (Energy Cost)", en: "Energy Consumption of the Pump" },
                    content: {
                        ar: "تستهلك المضخة قدراً هائلاً من طاقة الخلية:\n• تستهلك ما بين *20 إلى 25%* من إجمالي الـ ATP في معظم أنسجة الجسم أثناء الراحة.\n• يرتفع هذا الاستهلاك ليصل إلى حوالي *ثلثي طاقة الخلية (2/3)* في الخلايا العصبية!",
                        en: "Consumes a vast proportion of metabolic energy:\n• Uses *20 to 25%* of resting ATP in many tissues.\n• Escalates up to *about two-thirds (2/3)* of resting ATP in neurons!"
                    }
                }
            ]
        },
        {
            title: { ar: "النقل الثانوي والحويصلي والمقارنات", en: "Secondary Active & Vesicular Transport" },
            branches: [
                {
                    type: "compare",
                    val1Title: { ar: "النقل المصاحب (Co-transport)", en: "Co-transport (Symport)" },
                    val1: { 
                        ar: "• انتقال مادتين في *نفس الاتجاه*.\n• *مثال:* ناقل الصوديوم والجلوكوز بالأمعاء والكلى؛ تدفق الصوديوم مع تدرجه يسحب الجلوكوز للداخل *ضد تدرجه*.", 
                        en: "• Solutes move in the *same direction*.\n• *Example:* Sodium-glucose transport in intestine/kidneys (Na+ influx drives glucose uptake against gradient)." 
                    },
                    val2Title: { ar: "النقل المتعاكس (Counter-transport)", en: "Counter-transport (Antiport)" },
                    val2: { 
                        ar: "• انتقال مادتين في *اتجاهين متعاكسين*.\n• *مثال:* مبادل الصوديوم والكالسيوم؛ دخول الصوديوم للداخل يدفع الكالسيوم للخارج *ضد تدرجه*.", 
                        en: "• Solutes move in *opposite directions*.\n• *Example:* Na+-Ca2+ exchanger (Na+ entry drives Ca2+ extrusion against gradient)." 
                    }
                },
                {
                    type: "tree",
                    nodeTitle: { ar: "أنواع الإدخال الخلوي (Endocytosis)", en: "Types of Endocytosis" },
                    leafs: [
                        { ar: "الشرب الخلوي (Pinocytosis): التقام سوائل الـ ECF في حويصلات؛ يحدث في جميع أنواع الخلايا", en: "Pinocytosis: Ingestion of ECF droplets; occurs in all cell types ('cell drinking')" },
                        { ar: "الأكل الخلوي (Phagocytosis): التقام الأجسام الصلبة الكبيرة كالبكتيريا في بلعوم (Phagosome)؛ بالخلايا الأكولة فقط", en: "Phagocytosis: Engulfing large solids/bacteria via phagosomes in specialized phagocytes" },
                        { ar: "الإدخال عبر مستقبلات: التقام مخصص بمساعدة انخفاضات مغلفة؛ مثل امتصاص الكوليسترول (LDL)", en: "Receptor-mediated: Ingests specific targets via coated pits; e.g. cholesterol uptake" }
                    ]
                },
                {
                    type: "info",
                    nodeTitle: { ar: "الإخراج الخلوي والدورة الحويصلية", en: "Exocytosis & Endocytic Cycle" },
                    content: {
                        ar: "• *الإخراج الخلوي (Exocytosis):* اندماج حويصلة داخلية مع الغشاء لطرد محتوياتها خارجاً؛ يُستخدم في الحيوانات *لإفراز الهرمونات*.\n• *الدورة الحويصلية (Endocytic-exocytic cycle):* نظراً لأن مساحة سطح الخلية وحجمها يظلان ثابتين، فإن كمية الغشاء المستقطعة بالإدخال الخلوي تعوض تماماً بالإضافة عبر الإخراج الخلوي.",
                        en: "• *Exocytosis:* Intracellular vesicles fuse with membrane to release cargo; used in animals to *secrete hormones*.\n• *Endocytic-exocytic cycle:* Surface area and cell volume remain constant because membrane removed by endocytosis equals membrane added by exocytosis."
                    }
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
                        ar: "علل: تستهلك الخلايا العصبية ما يصل إلى ثلثي (2/3) طاقتها من الـ ATP على مضخة Na+-K+؟", 
                        en: "Give reason: Neurons consume up to two-thirds (2/3) of their ATP on the Na+-K+ pump?" 
                    },
                    content: { 
                        ar: "لأن الخلايا العصبية تولد إشارات كهربية مستمرة (جهد الفعل)، وتتطلب *ضخاً هائلاً ومستمراً* لاستعادة تدرج أيونات الصوديوم والبوتاسيوم والحفاظ على استثارتها.", 
                        en: "Because neurons generate continuous electrical impulses (action potentials) and require *massive, continuous pumping* to restore Na+ and K+ gradients and maintain excitability." 
                    }
                },
                {
                    type: "reveal",
                    nodeTitle: { 
                        ar: "علل: تظل مساحة سطح الخلية وحجمها ثابتيْن دون تغيير أثناء النقل الحويصلي؟", 
                        en: "Give reason: Cell surface area and volume remain unchanged during vesicular transport?" 
                    },
                    content: { 
                        ar: "بسبب *الدورة الحويصلية (الإدخال والإخراج الخلوي)*، حيث يتم باستمرار تعويض نفس مقدار الغشاء المفقود بواسطة الإدخال الخلوي عن طريق الإخراج الخلوي.", 
                        en: "Because of the *endocytic-exocytic cycle*, where the exact amount of membrane removed by endocytosis is continuously added back by exocytosis." 
                    }
                },
                {
                    type: "reveal",
                    nodeTitle: { 
                        ar: "علل: تقع المستقبلات على السطح الخارجي للغشاء بينما تتواجد الإنزيمات على السطح الداخلي؟", 
                        en: "Give reason: Receptors are located on the outer membrane surface, while enzymes are on the inner surface?" 
                    },
                    content: { 
                        ar: "لأن *المستقبلات* يجب أن ترتبط بالمواد المنبهة خارج الخلية (كالهرمونات والأدوية)، بينما تحفز *الإنزيمات* تفاعلات الأيض الخلوية داخل السيتوبلازم.", 
                        en: "Because *receptors* must bind circulating extracellular ligands (hormones/drugs), while *enzymes* catalyze intracellular metabolic reactions inside the cytoplasm." 
                    }
                },
                {
                    type: "reveal",
                    nodeTitle: { 
                        ar: "علل: يعتبر نقل الجلوكوز في الأمعاء نقلاً نشطاً ثانوياً؟", 
                        en: "Give reason: Glucose transport in the intestines is considered secondary active transport?" 
                    },
                    content: { 
                        ar: "لأنه *لا يستهلك ATP مباشرة*، بل يستغل الطاقة الكامنة في *تدرج الصوديوم* الذي تم بناؤه مسبقاً بواسطة مضخة الصوديوم والبوتاسيوم الأولية.", 
                        en: "Because it does *not hydrolyze ATP directly*; instead, it utilizes the energy stored in the *sodium gradient* previously established by the primary Na+-K+ pump." 
                    }
                },
                {
                    type: "reveal",
                    nodeTitle: { 
                        ar: "علل: تقتصر البلعمة على خلايا متخصصة، بينما يحدث الارتشاف (Pinocytosis) في كافة الخلايا؟", 
                        en: "Give reason: Phagocytosis is restricted to specialized cells, while pinocytosis occurs in all cells?" 
                    },
                    content: { 
                        ar: "لأن *البلعمة* تتطلب أجهزة التقام خلوية متخصصة لتدمير الأجسام الصلبة الكبيرة والميكروبات (كالعدلات والبلعميات)، بينما *الارتشاف الخلوي (Pinocytosis)* هو عملية روتينية لامتصاص قطرات السوائل الخارجية تحتاجها كافة الخلايا.", 
                        en: "Because *phagocytosis* requires specialized engulfment machinery to destroy large solid pathogens (neutrophils/macrophages), whereas *pinocytosis* is a routine, non-specific uptake of fluid solutes required by all cells." 
                    }
                }
            ]
        }
    ],
    quiz: [
        // --- أسئلة الدكتورة (تركيب الغشاء ووظائفه الأساسية) ---
        {
            q: {
                ar: "مما يتكون الغشاء الخلوي بشكل رئيسي وأساسي؟",
                en: "What is the cell membrane mainly made of?"
            },
            opts: {
                ar: [
                    "الدهون والبروتينات (Lipids and proteins)",
                    "الأحماض النووية (Nucleic acids)",
                    "الكربوهيدرات فقط (Carbohydrates only)",
                    "المعادن والأملاح (Minerals)"
                ],
                en: [
                    "Lipids and proteins.",
                    "Nucleic acids.",
                    "Carbohydrates only.",
                    "Minerals."
                ]
            },
            correct: 0,
            hint: {
                ar: "الغشاء الخلوي يتكون أساساً من طبقة دهون مزدوجة وبروتينات مدمجة وطرفية (Doctor's Q1).",
                en: "The plasma membrane is primarily composed of lipids and proteins."
            }
        },
        {
            q: {
                ar: "أي مما يلي لا يعتبر وظيفة للغشاء الخلوي؟",
                en: "Which of the following is NOT a function of the cell membrane?"
            },
            opts: {
                ar: [
                    "فصل السائل داخل الخلية عن السائل خارجها",
                    "التحكم في الجزيئات والأيونات التي تدخل وتخرج من الخلية",
                    "مساعدة الخلايا في التعرف والتواصل فيما بينها",
                    "تصنيع البروتينات المستخدمة لبناء الجدار الخلوي"
                ],
                en: [
                    "It separates the fluid inside the cell from the fluid outside.",
                    "It controls which molecules and ions enter and leave the cell.",
                    "It helps cells recognize and communicate with each other.",
                    "It makes proteins used to build the cell wall."
                ]
            },
            correct: 3,
            hint: {
                ar: "الخلايا الحيوانية لا تحتوي على جدار خلوي، وتصنيع البروتين يتم بواسطة الريبوسومات وليس الغشاء (Doctor's Q2).",
                en: "Animal cells lack cell walls, and protein synthesis is handled by ribosomes."
            }
        },
        {
            q: {
                ar: "أي العبارات التالية صحيحة فيما يخص الغشاء الخلوي؟",
                en: "Which statement about the cell membrane is correct?"
            },
            opts: {
                ar: [
                    "يتكون بالكامل من البروتين فقط",
                    "لا يسمح بمرور المواد الذائبة في الدهون",
                    "يسمح لبعض المواد بالمرور ويمنع مواد أخرى (نفاذية اختيارية)",
                    "لا يتغير تركيبه على الإطلاق طوال الحياة"
                ],
                en: [
                    "It is made completely of protein.",
                    "It does not allow fat-soluble substances to pass.",
                    "It allows some substances to pass and blocks others.",
                    "It does not change throughout life."
                ]
            },
            correct: 2,
            hint: {
                ar: "الغشاء يتميز بالنفاذية الاختيارية (Selectively permeable) حيث يتحكم فيما يمر (Doctor's Q4).",
                en: "The membrane is selectively permeable, allowing some substances to pass while blocking others."
            }
        },
        {
            q: {
                ar: "أي من المواد التالية لا يمكنها المرور مباشرة عبر طبقة الدهون المزدوجة؟",
                en: "Which of the following can NOT pass through the lipid bilayer?"
            },
            opts: {
                ar: [
                    "المواد الذائبة في الدهون",
                    "غاز الأكسجين (O2)",
                    "غاز ثاني أكسيد الكربون (CO2)",
                    "أيونات الصوديوم (Na+ ions)"
                ],
                en: [
                    "Lipid-soluble substances",
                    "O2",
                    "CO2",
                    "Na+ ions"
                ]
            },
            correct: 3,
            hint: {
                ar: "الأيونات المشحونة مثل الصوديوم لا يمكنها عبور قلب الدهون الكاره للماء وتحتاج لقنوات بروتينية (Doctor's Q5).",
                en: "Charged ions (like Na+) cannot cross the hydrophobic lipid bilayer directly."
            }
        },
        {
            q: {
                ar: "ما هي الوظيفة الأساسية للدهون (Lipids) في الغشاء الخلوي؟",
                en: "What is a function of lipids in the cell membrane?"
            },
            opts: {
                ar: [
                    "تكوين قنوات لمرور الأحماض الدهنية",
                    "العمل كمستقبلات كيميائية للإشارات",
                    "القيام بالانتشار الميسر",
                    "العمل كحاجز يمنع مرور المواد الذائبة في الماء"
                ],
                en: [
                    "Forming channels for fatty acids",
                    "Acting as receptors",
                    "Facilitated diffusion",
                    "Acting as a barrier to water-soluble substances"
                ]
            },
            correct: 3,
            hint: {
                ar: "طبقة الدهون المزدوجة تشكل حاجزاً عازلاً يمنع الذوبان والعبور الحر للمواد المائية (Doctor's Q13).",
                en: "The lipid bilayer acts as a hydrophobic barrier preventing passage of water-soluble solutes."
            }
        },
        {
            q: {
                ar: "أي مما يلي لا يعتبر من وظائف بروتينات الغشاء الخلوي؟",
                en: "Which of the following is NOT a function of membrane proteins?"
            },
            opts: {
                ar: [
                    "النقل النشط والقنوات الأيونية",
                    "مستقبلات للنواقل العصبية والإنزيمات",
                    "ربط الخلايا ببعضها ومساعدة الإدخال الخلوي",
                    "الهرمونات (Hormones)"
                ],
                en: [
                    "Active transport and ion channels",
                    "Receptors for neurotransmitters and enzymes",
                    "Attaching cells to each other and helping endocytosis",
                    "Hormones"
                ]
            },
            correct: 3,
            hint: {
                ar: "الهرمونات تفرزها الغدد في الدم وليست بروتينات بنائية في الغشاء، بينما المستقبلات والقنوات بروتينات غشائية (Doctor's Q9).",
                en: "Hormones are circulating messengers, whereas membrane proteins act as their receptors."
            }
        },
        // --- أسئلة الذكاء الاصطناعي (ترتيب الجزيئات والنسب السطحية) ---
        {
            q: {
                ar: "أي مما يلي يصف بدقة التوزيع الهندسي لجزيئات الفوسفوليبيد داخل طبقة الغشاء المزدوجة؟",
                en: "Which of the following precisely describes the spatial orientation of phospholipids in the membrane bilayer?"
            },
            opts: {
                ar: [
                    "الرؤوس المحبة للماء موجهة نحو مركز الغشاء والركائز الكارهة للماء للخارج",
                    "الرؤوس القطبية متجهة نحو السطحين الخارجي والداخلي والذيول غير القطبية نحو المركز",
                    "الذيول غير القطبية تبرز في البيئة المائية المحيطة لتكوين حاجز مائي عازل",
                    "الرؤوس غير القطبية تتوزع عشوائياً بدون نمط ثابت داخل الطبقة المزدوجة"
                ],
                en: [
                    "Hydrophilic heads face membrane interior while hydrophobic tails face aqueous media",
                    "Polar heads face outer and inner surfaces while non-polar tails face the center",
                    "Non-polar tails extend outward into aqueous media to construct an isolating barrier",
                    "Non-polar heads distribute randomly throughout the core without a fixed pattern"
                ]
            },
            correct: 1,
            hint: {
                ar: "الرؤوس الفوسفاتية محبة للماء تتجه للأسطح المائية، بينما الذيول الدهنية كارهة للماء تتجه للداخل بعيداً عن الماء.",
                en: "Polar heads face the water, non-polar tails face inside."
            }
        },
        {
            q: {
                ar: "ما هي النسبة المئوية المقدرة للبروتينات المدمجة (Integral proteins) من إجمالي بروتينات الغشاء الخلوي؟",
                en: "What is the designated percentage of integral proteins among total membrane proteins?"
            },
            opts: {
                ar: ["30%", "50%", "70%", "90%"],
                en: ["30%", "50%", "70%", "90%"]
            },
            correct: 2,
            hint: {
                ar: "البروتينات المدمجة تمثل 70%، بينما البروتينات الطرفية (Peripheral) تمثل 30%.",
                en: "Integral membrane proteins constitute 70%, while peripheral proteins make up 30%."
            }
        },
        {
            q: {
                ar: "أين تقع بروتينات الغشاء التي تعمل كمستقبلات (Receptors) للأدوية والهرمونات بالنسبة للغشاء الخلوي؟",
                en: "Where are membrane proteins functioning as receptors for hormones and drugs specifically located?"
            },
            opts: {
                ar: [
                    "على السطح الداخلي المقابل للسيتوبلازم فقط",
                    "منغمسة في منتصف الذيول الهيدروكربونية دون بروز خارجي",
                    "على السطح الخارجي للغشاء الخلوي",
                    "مرتبطة حصرياً بالكوليسترول داخل القنوات المائية"
                ],
                en: [
                    "Exclusively on the inner cytoplasmic surface of the membrane",
                    "Buried in the hydrophobic core without exterior surface exposure",
                    "On the outer surface of the cell membrane",
                    "Exclusively associated with cholesterol within water pores"
                ]
            },
            correct: 2,
            hint: {
                ar: "المستقبلات تواجه البيئة الخارجية على السطح الخارجي لترتبط بالمواد الكيميائية القادمة عبر الدم والسائل الخلالي.",
                en: "Receptors face outward to bind ligands."
            }
        },
        {
            q: {
                ar: "ما هو الموقع النموذجي لبروتينات الغشاء التي تعمل كإنزيمات (Enzymes) محفزة للتفاعلات الكيميائية؟",
                en: "What is the typical physiological localization of membrane proteins functioning as metabolic enzymes?"
            },
            opts: {
                ar: [
                    "على السطح الخارجي للغشاء الخلوي",
                    "على السطح الداخلي للغشاء الخلوي",
                    "حرة طافية في السائل الخلالي بين الخلايا",
                    "مدمجة كلياً داخل قنوات الأكوابورين"
                ],
                en: [
                    "On the outer extracellular surface of the membrane",
                    "On the inner surface of the cell membrane",
                    "Freely dispersed within the interstitial extracellular fluid",
                    "Directly embedded inside the water pore lumen of aquaporins"
                ]
            },
            correct: 1,
            hint: {
                ar: "الإنزيمات الغشائية تحفز تفاعلات السيتوبلازم الأيضية وتتواجد على السطح الداخلي للغشاء.",
                en: "Enzymes are located on the inner surface of the membrane."
            }
        },
        // --- أسئلة الدكتورة (النقل السلبي والانتشار والأسموزية) ---
        {
            q: {
                ar: "أي من المواد التالية لا تعبر الغشاء الخلوي بواسطة الانتشار (Diffusion)؟",
                en: "Which of the following does NOT cross the cell membrane by diffusion?"
            },
            opts: {
                ar: ["البوتاسيوم", "الصوديوم", "البروتين (Protein)", "الماء", "الكلوريد"],
                en: ["Potassium", "Sodium", "Protein", "Water", "Chloride"]
            },
            correct: 2,
            hint: {
                ar: "البروتينات جزيئات حيوية ضخمة لا يمكنها الانتشار إطلاقاً عبر مسام الغشاء (Doctor's Q12).",
                en: "Proteins are large macromolecules that cannot pass through the membrane by simple diffusion."
            }
        },
        {
            q: {
                ar: "أي عملية نقل تتطلب وجود بروتين ناقل (Carrier protein) ولكنها لا تستهلك أي طاقة؟",
                en: "Which transport process needs a carrier protein but no energy?"
            },
            opts: {
                ar: [
                    "الانتشار البسيط (Diffusion)",
                    "الانتشار الميسر (Facilitated diffusion)",
                    "النقل النشط الأولي (Primary active transport)",
                    "الإخراج الخلوي (Exocytosis)"
                ],
                en: [
                    "Diffusion",
                    "Facilitated diffusion",
                    "Primary active transport",
                    "Exocytosis"
                ]
            },
            correct: 1,
            hint: {
                ar: "الانتشار الميسر نقل سلبي مع تدرج التركيز وبدون طاقة ولكنه يحتاج لبروتين حامل (Doctor's Q18 & Q15).",
                en: "Facilitated diffusion is carrier-mediated transport down a concentration gradient without energy."
            }
        },
        {
            q: {
                ar: "أثناء عملية الأسموزية (Osmosis)، أي العبارات التالية تعتبر خاطئة (False)؟",
                en: "During osmosis, which statement is false?"
            },
            opts: {
                ar: [
                    "جزيئات المذاب تنتشر وتنتقل (The solute molecules diffuse)",
                    "جزيئات المذيب (الماء) هي التي تنتشر",
                    "يحدث الانتشار عبر غشاء شبه منفذ",
                    "تعتبر الأسموزية عملية نقل سلبي بدون طاقة"
                ],
                en: [
                    "The solute molecules diffuse.",
                    "The solvent molecules diffuse.",
                    "Diffusion occurs through a semipermeable membrane.",
                    "It is a passive process."
                ]
            },
            correct: 0,
            hint: {
                ar: "في الأسموزية الماء (المذيب) هو الذي يتحرك وليس المذاب (Doctor's Q24).",
                en: "In osmosis, the solvent (water) diffuses across the membrane, not the solute molecules."
            }
        },
        {
            q: {
                ar: "الأسموزية (Osmosis) هي حركة:",
                en: "Osmosis is the movement of:"
            },
            opts: {
                ar: [
                    "المواد المذابة من التركيز العالي إلى المنخفض",
                    "الماء عبر غشاء شبه منفذ من التركيز العالي للماء إلى التركيز المنخفض للماء",
                    "الماء والمذابات معاً عبر أي غشاء",
                    "الأيونات عبر الغشاء من خلال قنوات بروتينية"
                ],
                en: [
                    "Solutes from high to low concentration",
                    "Water across a semipermeable membrane from high water concentration to low water concentration",
                    "Water and solutes across any membrane",
                    "Ions across a membrane through protein channels"
                ]
            },
            correct: 1,
            hint: {
                ar: "الأسموزية تختص بحركة الماء نحو الحيز ذي التركيز الأعلى للمذاب / الأقل للماء (Doctor's Q25).",
                en: "Osmosis specifically defines the movement of water across a semipermeable membrane toward higher solute concentration."
            }
        },
        {
            q: {
                ar: "كيف تعبر النسبة العظمى من جزيئات الماء الغشاء البلازمي أثناء عملية الأسموزية؟",
                en: "Through which primary route does the vast majority of water molecules cross during osmosis?"
            },
            opts: {
                ar: [
                    "مباشرة عبر طبقة الفوسفوليبيد المزدوجة بالذوبان فيها",
                    "عبر قنوات بروتينية متخصصة للماء تسمى الأكوابورين (Aquaporins)",
                    "بواسطة حويصلات الإدخال الخلوي النشطة المستهلكة للـ ATP",
                    "عبر مضخات الكاتيونات المعتمدة على استهلاك الطاقة"
                ],
                en: [
                    "Exclusively dissolving directly across the hydrophobic lipid bilayer",
                    "Via specialized membrane water channels designated as Aquaporins",
                    "Through endocytic pinocytotic vesicles utilizing cellular ATP",
                    "Coupled directly to primary active cation-exchange pumps"
                ]
            },
            correct: 1,
            hint: {
                ar: "السلايد توضح أن الجزء الأكبر يعبر عبر قنوات بروتينية مخصصة للماء تدعى Aquaporins.",
                en: "Bulk osmotic water flow occurs through aquaporin channels."
            }
        },
        // --- أسئلة الدكتورة (النقل النشط الأولي والثانوي) ---
        {
            q: {
                ar: "أي عبارة مما يلي تصف النقل النشط (Active transport) بأفضل شكل؟",
                en: "Which statement best describes active transport?"
            },
            opts: {
                ar: [
                    "حركة الجزيئات مع تدرج تركيزها بدون استهلاك طاقة",
                    "حركة الجزيئات ضد تدرج تركيزها باستخدام الطاقة",
                    "حركة الماء عبر قنوات الأكوابورين",
                    "انتشار الغازات عبر الغشاء الخلوي"
                ],
                en: [
                    "Movement of molecules down their concentration gradient without energy",
                    "Movement of molecules against their concentration gradient using energy",
                    "Movement of water through aquaporins",
                    "Diffusion of gases across the membrane"
                ]
            },
            correct: 1,
            hint: {
                ar: "النقل النشط يتطلب طاقة لنقل المواد في الاتجاه المعاكس لتدرج التركيز (Doctor's Q11).",
                en: "Active transport pumps solutes 'uphill' against their gradient using cellular energy."
            }
        },
        {
            q: {
                ar: "على ماذا يعتمد النقل النشط الثانوي (Secondary active transport) بشكل مباشر؟",
                en: "Secondary active transport depends on:"
            },
            opts: {
                ar: [
                    "التكسير والتحلل المباشر لمركبات الـ ATP",
                    "تدرج الأيونات المتكون بواسطة النقل النشط الأولي",
                    "الانتشار السلبي للمواد المذابة فقط",
                    "عمليات الإدخال الخلوي فقط"
                ],
                en: [
                    "Direct breakdown of ATP",
                    "Ion gradients created by primary active transport",
                    "Passive diffusion of solutes",
                    "Endocytosis only"
                ]
            },
            correct: 1,
            hint: {
                ar: "النقل الثانوي يستغل طاقة التدرج الأيوني (كأيون الصوديوم) المنشأ مسبقاً بمضخة أولية (Doctor's Q16).",
                en: "Secondary active transport harnesses the electrochemical potential energy created by primary pumps."
            }
        },
        {
            q: {
                ar: "يعتمد النقل النشط الثانوي للجلوكوز في الأمعاء بشكل أساسي على:",
                en: "Secondary active transport of glucose mainly depends on:"
            },
            opts: {
                ar: [
                    "تدرج تركيز أيونات الصوديوم (Na+) المنشأ بواسطة النقل النشط الأولي",
                    "تدرج تركيز أيونات الكلوريد (Cl-)",
                    "تدرج تركيز أيونات البوتاسيوم (K+)",
                    "استهلاك ATP بشكل مباشر بواسطة ناقل الجلوكوز نفسه"
                ],
                en: [
                    "A Na+ concentration gradient created by primary active transport",
                    "A Cl- gradient",
                    "A K+ gradient",
                    "ATP used directly by the glucose transporter"
                ]
            },
            correct: 0,
            hint: {
                ar: "امتصاص الجلوكوز مع الصوديوم يعتمد على تدرج الصوديوم المولد بواسطة مضخة الصوديوم والبوتاسيوم (Doctor's Q19).",
                en: "Glucose symport relies on downhill sodium influx established by the Na+/K+ ATPase."
            }
        },
        {
            q: {
                ar: "في مضخة الصوديوم والبوتاسيوم (Na+-K+ pump)، كم عدد الأيونات المنقولة واتجاه حركتها في كل دورة ATP؟",
                en: "What is the exact stoichiometry and direction of ion transport catalyzed by the Na+-K+ pump per ATP cycle?"
            },
            opts: {
                ar: [
                    "نقل 2 أيون صوديوم للخارج مقابل 3 أيونات بوتاسيوم للداخل",
                    "نقل 3 أيونات صوديوم للخارج مقابل 2 أيون بوتاسيوم للداخل",
                    "نقل 3 أيونات صوديوم للداخل مقابل 2 أيون بوتاسيوم للخارج",
                    "نقل 3 أيونات كالسيوم للخارج مقابل 2 أيون صوديوم للداخل"
                ],
                en: [
                    "Extrusion of 2 Na+ ions paired with uptake of 3 K+ ions",
                    "Extrusion of 3 Na+ ions paired with uptake of 2 K+ ions",
                    "Import of 3 Na+ ions paired with extrusion of 2 K+ ions",
                    "Extrusion of 3 Ca2+ ions paired with import of 2 Na+ ions"
                ]
            },
            correct: 1,
            hint: {
                ar: "المضخة تطرد 3 صوديوم خارج الخلية وتدخل 2 بوتاسيوم إلى داخلها مستهلكة جزيء ATP واحد.",
                en: "3 Na+ out, 2 K+ in."
            }
        },
        {
            q: {
                ar: "في مبادل الصوديوم والكالسيوم (Na+-Ca2+ exchanger)، ما هو التوصيف الصحيح لحركة الأيونات؟",
                en: "In the sodium-calcium exchanger, how are the respective ions translocated across the membrane?"
            },
            opts: {
                ar: [
                    "تدفق الصوديوم للداخل مع تدرجه يدفع الكالسيوم للخارج ضد تدرجه",
                    "تدفق الكالسيوم للداخل مع تدرجه يدفع الصوديوم للخارج ضد تدرجه",
                    "خروج الصوديوم والكالسيوم معاً إلى السائل خارج الخلايا",
                    "دخول كلا الأيونين إلى السيتوبلازم بالاعتماد المباشر على الـ ATP"
                ],
                en: [
                    "Sodium influx down its gradient drives calcium extrusion against its gradient",
                    "Calcium influx down its gradient drives sodium extrusion against its gradient",
                    "Simultaneous coupled extrusion of both ions into the interstitium",
                    "Simultaneous inward entry of both cations driven by direct ATP lysis"
                ]
            },
            correct: 0,
            hint: {
                ar: "هذا نقل معاكس (Counter-transport): دخول الصوديوم للداخل يدفع الكالسيوم للخارج.",
                en: "Counter-transport uses inward Na+ influx to drive outward Ca2+ efflux."
            }
        },
        // --- أسئلة الدكتورة (النقل الحويصلي: الإخراج والارتشاف والبلعمة) ---
        {
            q: {
                ar: "ما هو تعريف الإخراج الخلوي (Exocytosis)؟",
                en: "What is exocytosis?"
            },
            opts: {
                ar: [
                    "إدخال الجزيئات لداخل الخلية باستخدام الحويصلات",
                    "إطلاق وتحرير المواد خارج الخلية عند اندماج الحويصلة مع الغشاء الخلوي",
                    "نقل الأيونات عبر القنوات البروتينية",
                    "تكسير الفضلات والمخلفات داخل الليزوسومات"
                ],
                en: [
                    "Taking molecules into the cell using vesicles",
                    "Releasing substances from the cell when a vesicle fuses with the cell membrane",
                    "Moving ions through ion channels",
                    "Breaking down waste in lysosomes"
                ]
            },
            correct: 1,
            hint: {
                ar: "الإخراج الخلوي تندمج فيه الحويصلة الإفرازية مع الغشاء البلازمي لتفريغ محتواها للخارج (Doctor's Q17).",
                en: "Exocytosis is the fusion of secretory vesicles with the membrane to discharge materials."
            }
        },
        {
            q: {
                ar: "ترتبط عملية الارتشاف أو الشرب الخلوي (Pinocytosis) فسيولوجياً بـ:",
                en: "Pinocytosis is associated with:"
            },
            opts: {
                ar: [
                    "استهلاك طاقة مرتفع باستخدام بروتينات حركية معتمدة على ATP",
                    "امتصاص السوائل المحيطة بالخلية (Fluid-phase uptake)",
                    "التعرف الانتقائي على الجزيئات بواسطة مستقبلات السطح فقط",
                    "النقل المباشر للجزيئات الكبيرة إلى داخل النواة"
                ],
                en: [
                    "High energy use with ATP-driven motor proteins",
                    "Fluid-phase uptake",
                    "Selective recognition of molecules by surface receptors",
                    "Direct transport of large molecules into the nucleus"
                ]
            },
            correct: 1,
            hint: {
                ar: "الـ Pinocytosis يسمى الارتشاف السائل أو الشرب الخلوي لامتصاص قطرات السائل خارج الخلوي (Doctor's Q21 & Q20 & Q23).",
                en: "Pinocytosis represents non-specific fluid-phase uptake ('cell drinking')."
            }
        },
        {
            q: {
                ar: "ما الذي يفسر بقاء مساحة سطح الخلية وحجمها الإجمالي ثابتاً أثناء عمليات النقل الحويصلي المستمرة؟",
                en: "What explains why cell surface area and volume remain constant despite continuous vesicular transport?"
            },
            opts: {
                ar: [
                    "توقف تصنيع جزيئات الفوسفوليبيد داخل الشبكة الإندوبلازمية",
                    "حدوث الدورة الحويصلية المتوازنة (Endocytic-exocytic cycle)",
                    "تحلل الحويصلات في السيتوبلازم دون أن تلمس الغشاء البلازمي",
                    "صلابة جدار الخلية الخارجي الذي يمنع التمدد والانكماش"
                ],
                en: [
                    "Feedback arrest of phospholipid synthesis in the endoplasmic reticulum",
                    "The endocytic-exocytic cycle, where exocytosis balances endocytic membrane loss",
                    "Cytosolic degradation of vesicles preventing fusion with the plasma membrane",
                    "Rigidity of an external peptidoglycan wall restricting geometric change"
                ]
            },
            correct: 1,
            hint: {
                ar: "مقدار الغشاء الذي يؤخذ بواسطة الإدخال يعوض بدقة عبر الإخراج الخلوي في دورة متكاملة.",
                en: "Membrane equilibrium is preserved by equal rates of endocytosis and exocytosis."
            }
        },
        {
            q: {
                ar: "أي العبارات التالية تميز عملية البلعمة (Phagocytosis) عن الشرب الخلوي (Pinocytosis)؟",
                en: "Which statement uniquely characterizes phagocytosis in contrast to pinocytosis?"
            },
            opts: {
                ar: [
                    "تحدث بصورة دورية ومستمرة في كافة أنواع خلايا الجسم بلا استثناء",
                    "تقتصر على ابتلاع المحاليل المائية الخالية من الجسيمات الصلبة",
                    "تختص بالتهام جزيئات صلبة كبيرة كالبكتيريا بواسطة خلايا بلعمية متخصصة",
                    "لا تتطلب أي حويصلات غشائية وتتم دون استهلاك طاقة الـ ATP"
                ],
                en: [
                    "Occurs universally across all human cell types without exception",
                    "Is strictly restricted to fluid-phase solute uptake without solid matter",
                    "Involves engulfment of large solids/bacteria by specialized phagocytic cells",
                    "Operates entirely without vesicle formation or ATP consumption"
                ]
            },
            correct: 2,
            hint: {
                ar: "البلعمة (Cell eating) تقتصر على خلايا مناعية متخصصة مثل الماكروفاج والنيتروفيل لابتلاع الأجسام الكبيرة.",
                en: "Phagocytosis is dedicated to engulfing large particles like bacteria by specialized phagocytes."
            }
        },
        {
            q: {
                ar: "أي من أنواع الخلايا التالية لا يعتبر من الخلايا الأكولة المتخصصة (Phagocytes) القائمة بعملية البلعمة؟",
                en: "Which of the following cell types is NOT categorized as a specialized phagocyte executing phagocytosis?"
            },
            opts: {
                ar: [
                    "الخلايا المتعادلة (Neutrophils)",
                    "الخلايا البلعمية الكبيرة (Macrophages)",
                    "الخلايا التغصنية (Dendritic cells)",
                    "خلايا كريات الدم الحمراء (Erythrocytes)"
                ],
                en: [
                    "Neutrophils",
                    "Tissue macrophages",
                    "Dendritic antigen-presenting cells",
                    "Mature erythrocytes"
                ]
            },
            correct: 3,
            hint: {
                ar: "كريات الدم الحمراء لا تبتلع الأجسام ولا تمتلك أدوات البلعمة الخلوية.",
                en: "Erythrocytes are not phagocytic cells."
            }
        },
        {
            q: {
                ar: "ما المثال الأبرز لعملية الإدخال الخلوي المعتمد على مستقبلات (Receptor-mediated endocytosis)؟",
                en: "Which classical physiological process is an example of receptor-mediated endocytosis?"
            },
            opts: {
                ar: [
                    "إفراز هرمون الإنسولين إلى مجرى الدم",
                    "امتصاص الكوليسترول إلى داخل الخلية (Uptake of cholesterol)",
                    "خروج النواقل العصبية عند التشابك العصبي",
                    "طرد أيونات الصوديوم عبر الغشاء البلازمي"
                ],
                en: [
                    "Endocrine secretion of insulin granules into circulation",
                    "Uptake of circulating cholesterol particles into the cell",
                    "Exocytotic release of neurotransmitters at motor endplates",
                    "Active extrusion of intracellular sodium via pump subunits"
                ]
            },
            correct: 1,
            hint: {
                ar: "دخول الكوليسترول للخلية عبر مستقبلات LDL هو المثال الأساسي للإدخال المعتمد على مستقبلات.",
                en: "Cholesterol internalization occurs via receptor-mediated endocytosis."
            }
        }
    ]
});