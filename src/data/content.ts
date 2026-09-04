export type Text = { ar: string; en: string };

export type Department = {
  id: string;
  name: Text;
  description: Text;
  href: string;
  image: string;
  introTitle: Text;
  intro: Text;
  whyImage: string;
  services: Text[];
  faqs: { q: Text; a: Text }[];
};

export const departments: Department[] = [
  {
    id: "general-medicine",
    name: { ar: "طب عام", en: "General medicine" },
    description: {
      ar: "رعاية طبية شاملة لك ولعائلتك.",
      en: "Comprehensive medical care for you and your family.",
    },
    href: "/general-medicine",
    image: "/images/specialties/general.jpg",
    introTitle: {
      ar: "نقطة البداية الصحيحة لصحتك",
      en: "The right first step for your health",
    },
    intro: {
      ar: "قسم الطب العام هو مدخلك إلى رعاية مرتّبة: فحص واضح، توجيه دقيق، ومتابعة دون تشتت. نساعدك على فهم حالتك واختيار التخصص المناسب داخل المجمع نفسه.",
      en: "General medicine is your entry to ordered care: a clear exam, precise guidance, and follow-up without scatter. We help you understand your case and choose the right specialty in the same complex.",
    },
    whyImage: "/images/tour/office.jpg",
    services: [
      { ar: "فحوصات دورية ومتابعة عامة", en: "Routine exams and general follow-up" },
      { ar: "متابعة الأمراض المزمنة", en: "Chronic condition follow-up" },
      { ar: "توجيه إلى التخصص المناسب", en: "Referral to the right specialty" },
      { ar: "فحوصات مخبرية مرتبطة بالزيارة", en: "Lab tests linked to your visit" },
      { ar: "استشارات عائلية هادئة", en: "Calm family consultations" },
    ],
    faqs: [
      {
        q: { ar: "متى أبدأ بالطب العام؟", en: "When should I start with general medicine?" },
        a: {
          ar: "إذا لم تكن متأكداً من التخصص المناسب، أو تحتاج فحصاً أولياً وتوجيهاً واضحاً قبل أي خطوة علاجية.",
          en: "If you are unsure which specialty fits, or you need an initial exam and clear guidance before any treatment step.",
        },
      },
      {
        q: { ar: "هل يناسب القسم جميع أفراد الأسرة؟", en: "Is this department suitable for the whole family?" },
        a: {
          ar: "نعم. نتابع الحالات العامة للكبار، ونوجّه الحالات التي تحتاج تخصصاً أدق داخل تباشير.",
          en: "Yes. We follow general cases for adults, and guide cases that need a more precise specialty within Tabashir.",
        },
      },
      {
        q: { ar: "هل أحتاج تحويلاً لقسم آخر؟", en: "Will I need a referral to another department?" },
        a: {
          ar: "إن تطلبت حالتك ذلك، نرتّب التحويل داخل المجمع مع بقاء ملفك واحداً ومسارك واضحاً.",
          en: "If your case requires it, we arrange the referral inside the complex so your file stays one and your path stays clear.",
        },
      },
      {
        q: { ar: "كيف أحجز في الطب العام؟", en: "How do I book general medicine?" },
        a: {
          ar: "اضغط «احجز موعدك» واختر الطب العام. يمكنك أيضاً المراسلة عبر واتساب لترتيب أقرب وقت مناسب.",
          en: "Tap “Book appointment” and choose general medicine. You can also message us on WhatsApp to arrange the next suitable time.",
        },
      },
    ],
  },
  {
    id: "dermatology",
    name: { ar: "جلدية وتجميل", en: "Dermatology & aesthetics" },
    description: {
      ar: "صحة البشرة والجمال بإشراف نخبة من المتخصصين.",
      en: "Skin health and aesthetics under specialist supervision.",
    },
    href: "/dermatology",
    image: "/images/specialties/dermatology.jpg",
    introTitle: {
      ar: "عناية طبية ببشرتك… بخطوات واضحة",
      en: "Medical care for your skin, in clear steps",
    },
    intro: {
      ar: "سواء كانت الزيارة لعلاج طبي أو لخطة تجميلية هادئة، نبدأ بتقييم واضح ثم نختار الإجراء المناسب. بلا وعود مبالغ فيها، وبإشراف طبي في كل خطوة.",
      en: "Whether the visit is medical or a considered aesthetic plan, we start with a clear assessment, then choose the right procedure. No exaggerated promises — and medical supervision at every step.",
    },
    whyImage: "/images/derm/facial.jpg",
    services: [
      { ar: "تقييم وعلاج حالات البشرة", en: "Assessment and treatment of skin conditions" },
      { ar: "الليزر التجميلي", en: "Aesthetic laser" },
      { ar: "إجراءات الفيلر والعناية الدقيقة", en: "Filler and refined aesthetic care" },
      { ar: "العناية بالشعر وفروة الرأس", en: "Hair and scalp care" },
      { ar: "خطط تجميلية غير جراحية", en: "Non-surgical aesthetic plans" },
    ],
    faqs: [
      {
        q: { ar: "هل الإجراءات التجميلية تحت إشراف طبي؟", en: "Are aesthetic procedures medically supervised?" },
        a: {
          ar: "نعم. كل خطة تبدأ بتقييم طبي، ويُشرح لك الخيار المناسب قبل أي جلسة.",
          en: "Yes. Every plan starts with a medical assessment, and the right option is explained before any session.",
        },
      },
      {
        q: { ar: "هل يمكن علاج حب الشباب والتصبغات؟", en: "Can you treat acne and pigmentation?" },
        a: {
          ar: "نعم. نضع خطة تناسب نوع بشرتك وسبب الحالة، ثم نتابع النتيجة بخطوات مرتّبة.",
          en: "Yes. We set a plan that fits your skin type and the cause, then follow the result in ordered steps.",
        },
      },
      {
        q: { ar: "كم جلسة أحتاج لليزر؟", en: "How many laser sessions will I need?" },
        a: {
          ar: "يختلف العدد حسب الحالة والمنطقة. يُحدد ذلك بعد التقييم، لا قبل الزيارة الأولى.",
          en: "The number depends on the case and area. It is set after assessment, not before the first visit.",
        },
      },
      {
        q: { ar: "كيف أحجز في الجلدية والتجميل؟", en: "How do I book dermatology?" },
        a: {
          ar: "اختر القسم من الحجز، ثم الطبيب المناسب إن رغبت، أو راسلنا عبر واتساب.",
          en: "Choose the department when booking, then the doctor if you wish, or message us on WhatsApp.",
        },
      },
    ],
  },
  {
    id: "dental",
    name: { ar: "أسنان وتقويم", en: "Dental & orthodontics" },
    description: {
      ar: "رعاية متكاملة لأسنان صحية وابتسامة أكثر ثقة.",
      en: "Complete care for healthier teeth and a more confident smile.",
    },
    href: "/dental",
    image: "/images/specialties/dental.jpg",
    introTitle: {
      ar: "ابتسامتك تبدأ من خطة واضحة",
      en: "Your smile starts with a clear plan",
    },
    intro: {
      ar: "من الفحص والتنظيف إلى التقويم والزراعة وابتسامة هوليوود: نرتّب رحلتك في مسار واحد، بشرح هادئ لكل خيار قبل أي إجراء.",
      en: "From exam and cleaning to orthodontics, implants, and a Hollywood smile: we arrange your journey in one path, with a calm explanation of every option before any procedure.",
    },
    whyImage: "/images/specialties/dental.jpg",
    services: [
      { ar: "تقويم الأسنان", en: "Orthodontics" },
      { ar: "زراعة الأسنان", en: "Dental implants" },
      { ar: "ابتسامة هوليوود", en: "Hollywood smile" },
      { ar: "تنظيف وتبييض", en: "Cleaning and whitening" },
      { ar: "علاج اللثة", en: "Gum treatment" },
    ],
    faqs: [
      {
        q: { ar: "هل يتوفر تقويم الأسنان داخل المجمع؟", en: "Is orthodontics available in the complex?" },
        a: {
          ar: "نعم. لدينا أخصائي تقويم يضع خطة واضحة لترتيب الأسنان مع متابعة هادئة للمراجعات.",
          en: "Yes. An orthodontics specialist sets a clear alignment plan with calm follow-up visits.",
        },
      },
      {
        q: { ar: "ما الفرق بين التبييض وابتسامة هوليوود؟", en: "What is the difference between whitening and a Hollywood smile?" },
        a: {
          ar: "التبييض يعالج اللون. ابتسامة هوليوود خطة تجميلية أوسع تُدرس بعد الفحص وقبل أي التزام.",
          en: "Whitening addresses color. A Hollywood smile is a broader aesthetic plan, studied after the exam and before any commitment.",
        },
      },
      {
        q: { ar: "هل الزراعة تحتاج زيارات متعددة؟", en: "Do implants require several visits?" },
        a: {
          ar: "غالباً نعم. نوضح الجدول المتوقع منذ الزيارة الأولى حتى تعرف الخطوات والوقت بوضوح.",
          en: "Usually yes. We explain the expected timeline from the first visit so the steps and timing are clear.",
        },
      },
      {
        q: { ar: "كيف أحجز في قسم الأسنان؟", en: "How do I book dental care?" },
        a: {
          ar: "احجز موعدك واختر الأسنان والتقويم، ثم الطبيب إن رغبت. الاستقبال يؤكد الوقت معك.",
          en: "Book an appointment, choose dental & orthodontics, then the doctor if you wish. Reception will confirm the time with you.",
        },
      },
    ],
  },
  {
    id: "women",
    name: { ar: "نساء وولادة", en: "Women’s health" },
    description: {
      ar: "رعاية متخصصة للمرأة في كل مرحلة.",
      en: "Specialized care for women at every stage.",
    },
    href: "/women",
    image: "/images/specialties/obgyn.jpg",
    introTitle: {
      ar: "متابعة دقيقة… بوقت كافٍ للأسئلة",
      en: "Attentive follow-up, with time enough for questions",
    },
    intro: {
      ar: "من الفحص الدوري إلى رحلة الحمل وما بعدها: نضع راحة المريضة ووضوح الخطة في المقدمة، داخل بيئة هادئة وخصوصية أعلى.",
      en: "From routine exams to pregnancy and after: we put the patient’s comfort and a clear plan first, in a calmer setting with greater privacy.",
    },
    whyImage: "/images/specialties/obgyn.jpg",
    services: [
      { ar: "فحوصات دورية لصحة المرأة", en: "Routine women’s health exams" },
      { ar: "متابعة الحمل", en: "Pregnancy follow-up" },
      { ar: "استشارات ما قبل الولادة", en: "Prenatal consultations" },
      { ar: "متابعة ما بعد الولادة", en: "Postnatal follow-up" },
      { ar: "تقييم الحالات النسائية المتخصصة", en: "Specialist gynecological assessment" },
    ],
    faqs: [
      {
        q: { ar: "هل يمكن متابعة الحمل في تباشير؟", en: "Can I follow my pregnancy at Tabashir?" },
        a: {
          ar: "نعم. نرتّب المتابعة الدورية والفحوصات المرتبطة، مع شرح هادئ لكل مرحلة.",
          en: "Yes. We arrange regular follow-up and related tests, with a calm explanation of each stage.",
        },
      },
      {
        q: { ar: "هل الزيارة الأولى تحتاج تحضيراً معيناً؟", en: "Does the first visit need special preparation?" },
        a: {
          ar: "يفضّل إحضار أي تقارير سابقة. وإن كان لديك سؤال خاص، يمكن توضيحه عند الحجز.",
          en: "Please bring any previous reports. If you have a specific question, you can mention it when booking.",
        },
      },
      {
        q: { ar: "هل تتوفر خصوصية أعلى في القسم؟", en: "Is there greater privacy in this department?" },
        a: {
          ar: "نعم. المسار مصمم لراحة المريضة، من الاستقبال حتى غرفة الكشف.",
          en: "Yes. The path is designed for the patient’s comfort, from reception to the exam room.",
        },
      },
      {
        q: { ar: "كيف أحجز في النساء والولادة؟", en: "How do I book women’s health?" },
        a: {
          ar: "اختر القسم من نافذة الحجز أو راسلينا عبر واتساب لترتيب الموعد المناسب.",
          en: "Choose the department in the booking window, or message us on WhatsApp to arrange a suitable time.",
        },
      },
    ],
  },
  {
    id: "plastic-surgery",
    name: { ar: "جراحة تجميل", en: "Plastic surgery" },
    description: {
      ar: "حلول تجميلية وجراحية بمعايير عالية.",
      en: "Aesthetic and surgical solutions to a high standard.",
    },
    href: "/plastic-surgery",
    image: "/images/specialties/surgery.jpg",
    introTitle: {
      ar: "قرار جراحي يُشرح بهدوء قبل أي خطوة",
      en: "A surgical decision explained calmly before any step",
    },
    intro: {
      ar: "نقدّم تقييماً تجميلياً وجراحياً واضحاً: ماذا يناسبك، وماذا لا يناسبك، وما المسار المتوقع. الهدف ليس الاستعجال في الإجراء، بل قرار تطمئن إليه.",
      en: "We offer a clear aesthetic and surgical assessment: what suits you, what does not, and the expected path. The aim is not to rush a procedure, but a decision you can trust.",
    },
    whyImage: "/images/tech/treatment.jpg",
    services: [
      { ar: "استشارة وتقييم جراحي تجميلي", en: "Aesthetic surgical consultation" },
      { ar: "إجراءات تجميل الوجه", en: "Facial aesthetic procedures" },
      { ar: "نحت وتحسين القوام", en: "Body contouring" },
      { ar: "حلول ترميمية مختارة", en: "Selected reconstructive solutions" },
      { ar: "خطة واضحة قبل وبعد الإجراء", en: "A clear plan before and after the procedure" },
    ],
    faqs: [
      {
        q: { ar: "هل كل حالة تحتاج عملية؟", en: "Does every case need surgery?" },
        a: {
          ar: "لا. نبدأ بالتقييم، وقد يكون الخيار غير الجراحي أنسب. نشرح البدائل بأمانة قبل أي قرار.",
          en: "No. We start with assessment, and a non-surgical option may be more suitable. Alternatives are explained honestly before any decision.",
        },
      },
      {
        q: { ar: "متى تظهر النتيجة؟", en: "When will I see the result?" },
        a: {
          ar: "يختلف حسب الإجراء. نوضح الجدول المتوقع والتعافي منذ الاستشارة الأولى.",
          en: "It depends on the procedure. We explain the expected timeline and recovery from the first consultation.",
        },
      },
      {
        q: { ar: "هل الاستشارة ملزمة بالإجراء؟", en: "Does a consultation commit me to a procedure?" },
        a: {
          ar: "لا. الاستشارة لتوضيح الخيار المناسب. القرار يبقى لك بعد فهم الخطوات والمخاطر المتوقعة.",
          en: "No. The consultation clarifies the right option. The decision remains yours after you understand the steps and expected risks.",
        },
      },
      {
        q: { ar: "كيف أحجز استشارة جراحة تجميل؟", en: "How do I book a plastic surgery consult?" },
        a: {
          ar: "احجز موعدك واختر جراحة التجميل. سنتواصل لتأكيد الوقت والطبيب المتاح.",
          en: "Book an appointment and choose plastic surgery. We will contact you to confirm the time and the available doctor.",
        },
      },
    ],
  },
  {
    id: "ent",
    name: { ar: "أنف وأذن وحنجرة", en: "ENT" },
    description: {
      ar: "تشخيص وعلاج متكامل لمشكلات الأنف والأذن والحنجرة.",
      en: "Complete diagnosis and treatment for ear, nose, and throat conditions.",
    },
    href: "/ent",
    image: "/images/specialties/ent.jpg",
    introTitle: {
      ar: "تشخيص أوضح… لعلاج يرتاح له تنفسك وسمعك",
      en: "Clearer diagnosis, for care that eases breathing and hearing",
    },
    intro: {
      ar: "من التهابات الجيوب وصعوبة التنفس إلى مشكلات السمع والحلق: نبدأ بتشخيص مرتّب، ثم خطة علاج تُشرح لك قبل التنفيذ.",
      en: "From sinus inflammation and breathing difficulty to hearing and throat issues: we start with an ordered diagnosis, then a treatment plan explained before it begins.",
    },
    whyImage: "/images/specialties/ent.jpg",
    services: [
      { ar: "تشخيص وعلاج الجيوب الأنفية", en: "Sinus diagnosis and treatment" },
      { ar: "مشكلات السمع والأذن", en: "Hearing and ear conditions" },
      { ar: "التهابات الحلق والحنجرة", en: "Throat and larynx infections" },
      { ar: "تقييم انحراف الوتيرة والتنفس", en: "Septal deviation and breathing assessment" },
      { ar: "متابعة الشخير وصعوبة النوم", en: "Snoring and sleep-disordered breathing" },
    ],
    faqs: [
      {
        q: { ar: "متى أزور قسم الأنف والأذن والحنجرة؟", en: "When should I visit ENT?" },
        a: {
          ar: "عند تكرار التهاب الجيوب، أو صعوبة التنفس، أو ضعف السمع، أو التهاب الحلق المستمر.",
          en: "For recurring sinus inflammation, breathing difficulty, hearing loss, or a persistent sore throat.",
        },
      },
      {
        q: { ar: "هل كل الحالات تحتاج إجراء؟", en: "Does every case need a procedure?" },
        a: {
          ar: "لا. كثير من الحالات تُعالج دوائياً أو بمتابعة. الإجراء يُطرح فقط إن كان هو الخيار الأنسب.",
          en: "No. Many cases are treated medically or with follow-up. A procedure is offered only if it is the most suitable option.",
        },
      },
      {
        q: { ar: "هل يتوفر التشخيص في نفس الزيارة؟", en: "Is diagnosis available in the same visit?" },
        a: {
          ar: "غالباً نبدأ بالتقييم في الزيارة الأولى. إن احتجت فحصاً إضافياً نوضّح الخطوة التالية فوراً.",
          en: "We usually begin assessment on the first visit. If a further test is needed, we explain the next step immediately.",
        },
      },
      {
        q: { ar: "كيف أحجز في الأنف والأذن والحنجرة؟", en: "How do I book ENT?" },
        a: {
          ar: "اختر القسم من الحجز وسنؤكد الموعد مع الطبيب المتاح في هذا التخصص.",
          en: "Choose the department when booking, and we will confirm the appointment with the available specialist.",
        },
      },
    ],
  },
];

export const departmentIds = departments.map((d) => d.id);

export function getDepartment(id: string) {
  return departments.find((d) => d.id === id);
}

export type Doctor = {
  id: string;
  name: Text;
  specialtyId: string;
  specialty: Text;
  title: Text;
  experience?: Text;
  credibility: Text;
  services?: Text[];
  image?: string;
  initials: string;
  imagePosition?: string;
  featured?: boolean;
};

export const doctors: Doctor[] = [
  {
    id: "ahmed-dweik",
    name: { ar: "د. أحمد الدويك", en: "Dr. Ahmed El-Dweik" },
    specialtyId: "dental",
    specialty: { ar: "أسنان وتقويم", en: "Dental & orthodontics" },
    title: {
      ar: "أخصائي تقويم الأسنان وعظام الوجه والفكين",
      en: "Specialist in orthodontics and maxillofacial orthopedics",
    },
    experience: {
      ar: "ماجستير في تقويم الأسنان وعظام الفكين",
      en: "Master’s in orthodontics and jaw bones",
    },
    credibility: {
      ar: "فحص أولي لحالات التقويم، ثم خطة علاج واضحة بأجهزة ثابتة أو قابلة للإزالة.",
      en: "An initial orthodontic exam, then a clear plan with fixed or removable appliances.",
    },
    services: [
      { ar: "الكشف الأولي لمرضى التقويم", en: "Initial examination for orthodontic patients" },
      { ar: "تقدير حالة الأسنان التقويمية ووضع خطة العلاج", en: "Assessing orthodontic status and creating a treatment plan" },
      { ar: "دراسة حالات التقويم إكلينيكياً", en: "Clinical study of orthodontic cases" },
      { ar: "استخدام أجهزة تقويم الأسنان القابلة للإزالة", en: "Removable orthodontic appliances" },
      { ar: "استقامة وتعديل الأضراس المائلة", en: "Straightening and correcting tilted molars" },
      { ar: "علاج تقويم الأسنان الشامل", en: "Comprehensive orthodontic treatment" },
      { ar: "الاستفادة من أجهزة التقويم الثابتة", en: "Fixed orthodontic appliances" },
    ],
    initials: "أ",
    featured: true,
    image: "/images/doctors/ahmed-el-dweik.jpg",
  },
  {
    id: "naqli",
    name: { ar: "د. محمد نقلي", en: "Dr. Mohammad Naqli" },
    specialtyId: "dental",
    specialty: { ar: "أسنان وتقويم", en: "Dental & orthodontics" },
    title: { ar: "طبيب جراحة الفم والأسنان", en: "Oral and dental surgeon" },
    experience: {
      ar: "الزمالة الإيطالية بتجميل وإصلاح الأسنان المتقدم",
      en: "Italian fellowship in advanced cosmetic and restorative dentistry",
    },
    credibility: {
      ar: "من الفحص والتشخيص حتى الترميم والتجميل: خطة شاملة تناسب حالتك.",
      en: "From exam and diagnosis through restoration and cosmetics: a plan matched to your case.",
    },
    services: [
      { ar: "الفحص والتشخيص ووضع خطة علاجية شاملة", en: "Examination, diagnosis, and comprehensive treatment plans" },
      { ar: "ترميم وتجميل الأسنان المتقدم", en: "Advanced dental restoration and cosmetics" },
      { ar: "التيجان والجسور العلاجية والتجميلية", en: "Therapeutic and cosmetic crowns and bridges" },
      { ar: "الحشوات التجميلية والعلاجية", en: "Cosmetic and therapeutic fillings" },
      { ar: "بناء وإصلاح كسور الأسنان", en: "Building and repairing tooth fractures" },
      { ar: "تبييض الأسنان وإزالة التصبغات", en: "Teeth whitening and stain removal" },
      { ar: "علاج اللثة وإزالة تصبغ اللثة بالليزر", en: "Gum treatments and laser depigmentation" },
      { ar: "خلع الأسنان", en: "Tooth extraction" },
    ],
    initials: "من",
    featured: true,
    image: "/images/doctors/mohammad-naqli.jpg",
  },
  {
    id: "mustafa",
    name: { ar: "د. مصطفى كامل", en: "Dr. Mustafa Kamel" },
    specialtyId: "women",
    specialty: { ar: "نساء وولادة", en: "Women’s health" },
    title: { ar: "استشاري نساء وولادة", en: "Consultant obstetrician & gynecologist" },
    experience: {
      ar: "عضو كلية النساء والولادة في لندن · أكثر من ٣٠ سنة خبرة",
      en: "Member of the RCOG in London · over 30 years of experience",
    },
    credibility: {
      ar: "تشخيص وعلاج أمراض النساء، ومتابعة الحمل، والأشعة الصوتية وحالات العقم.",
      en: "Diagnosis and treatment of gynecological conditions, pregnancy follow-up, ultrasound, and infertility care.",
    },
    services: [
      { ar: "تشخيص وعلاج أمراض النساء ووضع خطة علاجية", en: "Diagnosis and treatment of gynecological diseases and a treatment plan" },
      { ar: "فحص وتشخيص الأورام النسائية", en: "Examination and diagnosis of gynecological tumors" },
      { ar: "عمل الأشعة الصوتية وتشخيص حالات العقم", en: "Ultrasound and diagnosing infertility cases" },
      { ar: "متابعة الحمل ووضع خطة الولادة", en: "Pregnancy follow-up and developing a birth plan" },
    ],
    initials: "مص",
    featured: true,
    image: "/images/doctors/mustafa.jpg",
  },
  {
    id: "salim",
    name: { ar: "د. سليم دهب", en: "Dr. Salim Dahab" },
    specialtyId: "general-medicine",
    specialty: { ar: "طب عام", en: "General medicine" },
    title: { ar: "استشاري الباطنة والجهاز الهضمي والكبد", en: "Consultant, internal medicine / GI / hepatology" },
    experience: {
      ar: "٤٠ سنة استشارياً في مستشفى الملك فيصل التخصصي",
      en: "40 years as a consultant at King Faisal Specialist Hospital",
    },
    credibility: {
      ar: "يشخّص بهدوء، ويشرح الحالة بأمانة قبل أن تقرر الخطوة التالية.",
      en: "He diagnoses calmly, and explains the case honestly before you decide the next step.",
    },
    initials: "سل",
    featured: true,
  },
  {
    id: "badr",
    name: { ar: "د. بدر الجلسي", en: "Dr. Badr Al-Jalsi" },
    specialtyId: "general-medicine",
    specialty: { ar: "طب عام", en: "General medicine" },
    title: { ar: "استشاري الغدد الصماء", en: "Consultant endocrinologist" },
    credibility: {
      ar: "متابعة واضحة لحالات السكر واضطرابات الغدد، بتواضع ووقت كافٍ للأسئلة.",
      en: "Clear follow-up for diabetes and gland disorders, with time enough for questions.",
    },
    initials: "ب",
    featured: true,
  },
  {
    id: "ghada",
    name: { ar: "د. غادة عبدون", en: "Dr. Ghada Abdoon" },
    specialtyId: "dermatology",
    specialty: { ar: "جلدية وتجميل", en: "Dermatology & aesthetics" },
    title: { ar: "أخصائية الجلدية والتجميل والليزر", en: "Dermatology, aesthetics & laser specialist" },
    credibility: {
      ar: "تضع خطة واضحة لبشرتك — علاج طبي أو إجراء تجميلي مثل الفيلر والليزر.",
      en: "She sets a clear plan for your skin — medical treatment or an aesthetic procedure such as filler or laser.",
    },
    initials: "غ",
    featured: true,
  },
  {
    id: "norah",
    name: { ar: "د. نورة الحماد", en: "Dr. Norah AlHammad" },
    specialtyId: "dermatology",
    specialty: { ar: "جلدية وتجميل", en: "Dermatology & aesthetics" },
    title: { ar: "استشارية الجلدية", en: "Consultant dermatologist" },
    credibility: {
      ar: "تقييم طبي دقيق لحالات البشرة — للكبار والأطفال — قبل أي خطوة علاجية.",
      en: "A precise medical assessment of skin conditions — for adults and children — before any treatment step.",
    },
    initials: "ن",
  },
  {
    id: "samar",
    name: { ar: "د. سمر أبو مزيد", en: "Dr. Samar Abu Mazyad" },
    specialtyId: "dental",
    specialty: { ar: "أسنان وتقويم", en: "Dental & orthodontics" },
    title: { ar: "طبيبة أسنان عامة", en: "General dentist" },
    experience: { ar: "أكثر من ١٢ سنة في طب وجراحة الفم والأسنان", en: "Over 12 years in oral medicine and dentistry" },
    credibility: {
      ar: "من الفحص حتى الخطة العلاجية: شغل واضح ويد خفيفة، داخل نفس المجمع.",
      en: "From exam to treatment plan: clear work and a light hand, in the same complex.",
    },
    initials: "س",
    featured: true,
  },
  {
    id: "omar-ahmed",
    name: { ar: "د. عمر أحمد", en: "Dr. Omar Ahmed" },
    specialtyId: "dental",
    specialty: { ar: "أسنان وتقويم", en: "Dental & orthodontics" },
    title: { ar: "أخصائي ترميم الأسنان", en: "Dental restoration specialist" },
    credibility: {
      ar: "يركّز على إصلاح الأسنان، ويشرح خيار الترميم قبل أي إجراء.",
      en: "He focuses on restoring teeth, and explains the option before any procedure.",
    },
    initials: "ع",
  },
  {
    id: "mohammed-turkistani",
    name: { ar: "د. محمد تركستاني", en: "Dr. Mohammed Turkistani" },
    specialtyId: "dental",
    specialty: { ar: "أسنان وتقويم", en: "Dental & orthodontics" },
    title: { ar: "طبيب أسنان عام", en: "General dentist" },
    credibility: {
      ar: "رعاية أسنان وقائية وعلاجية بخطوات مرتّبة تناسب حالتك.",
      en: "Preventive and treatment dental care, in ordered steps matched to your case.",
    },
    initials: "م",
  },
];

export const featuredDoctors = doctors.filter((d) => d.featured);

export const benefits = [
  {
    id: "trust",
    num: { ar: "٠١", en: "01" },
    title: { ar: "خبرة طبية موثوقة", en: "Trusted medical expertise" },
    text: {
      ar: "فريق من الأطباء والمتخصصين في مجالات متعددة.",
      en: "A team of doctors and specialists across multiple fields.",
    },
  },
  {
    id: "integrated",
    num: { ar: "٠٢", en: "02" },
    title: { ar: "رعاية متكاملة", en: "Integrated care" },
    text: {
      ar: "احتياجاتك الصحية المختلفة تحت سقف واحد.",
      en: "Your different health needs, under one roof.",
    },
  },
  {
    id: "tech",
    num: { ar: "٠٣", en: "03" },
    title: { ar: "تقنيات حديثة", en: "Modern technology" },
    text: {
      ar: "حلول وتقنيات تساعد على تقديم رعاية أكثر دقة وراحة.",
      en: "Solutions and technology that support more precise, comfortable care.",
    },
  },
  {
    id: "first",
    num: { ar: "٠٤", en: "04" },
    title: { ar: "تجربة تضعك أولًا", en: "An experience that puts you first" },
    text: {
      ar: "نهتم بكل تفاصيل رحلتك، من الحجز وحتى المتابعة.",
      en: "We attend to every detail of your journey, from booking to follow-up.",
    },
  },
];

export const testimonials = [
  {
    id: "nura",
    name: { ar: "Nur Nura", en: "Nur Nura" },
    image: "/images/reviews/review-nura.png",
    specialty: { ar: "ليزر تجميلي", en: "Aesthetic laser" },
    stars: 5,
    text: {
      ar: "ما شاء الله تبارك الله، المكان مره جميل ونظيف. سويت ليزر بيكيني أربع مرات والنتيجة مرة مرضية. ثلاث جلسات مع ممرضة اسمها الأستاذة إمام، وكانت دقيقة جدًا وهي تسوي إجراء الليزر.",
      en: "MashaAllah tabarak Allah. Very beautiful and clean place. I did laser bikini treatment 4 times, the results were very satisfying. Three times with a nurse named Mrs. Imam. She was very thorough when doing the laser procedure.",
    },
  },
  {
    id: "hajar",
    name: { ar: "هاجر حسين عبدالقادر محمد", en: "Hajar Hussein Abdelqader Mohammed" },
    image: "/images/reviews/review-hajar.png",
    specialty: { ar: "د. سمر أبو مزيد · الأسنان", en: "Dr. Samar Abu Mazyad · Dental" },
    stars: 5,
    text: {
      ar: "عياده جميله مرتبه نظيفه تفتح النفس وكل الشكر للدكتوره سمر ابو مزيد شغلها ممتاز و يدها خفيفه وكمان شكرا للاستاذه احلام لتنسيق المواعيد\nما حسيت بأي تأخير تجربتي كانت مريحة من أول ما دخلت العيادة\nأنصح أي أحد يدور عيادة أسنان محترفة يزورهم فعليًا تجربة تشكرون عليها\nيستاهلو مليار نجمه 🫡🤍🤍🤍",
      en: "A beautiful, tidy, clean clinic that lifts your mood. All thanks to Dr. Samar Abu Mazyad — excellent work and a light hand. Thanks also to Ms. Ahlam for coordinating appointments. I felt no delay; it was comfortable from the moment I walked in. Anyone looking for a professional dental clinic should visit them. They deserve a billion stars 🫡🤍🤍🤍",
    },
  },
  {
    id: "faisal",
    name: { ar: "فيصل الحربي", en: "Faisal Al-Harbi" },
    initial: "ف",
    avatar: "#9aa0a6",
    specialty: { ar: "د. أحمد الدويك · التقويم", en: "Dr. Ahmed Al-Dweik · Orthodontics" },
    stars: 5,
    text: {
      ar: "السلام عليكم ورحمه الله وبركاته\nاولا انا مراجع عند الدكتور احمد الدويك ومركب التقويم عنده الله يسعده على اخلاقه وعلى ابتسامته وكلامه الطيب وشغله ماشاء الله تبارك الله ولا غلطه والاستاذه والابلة احلام الله يسعدها ماقصرت نهائيا من ناحيه المواعيد والمراجعات متواصلة ومتواجدة دائماً\nشكراً لجهودكم",
      en: "Peace be upon you. I am a patient of Dr. Ahmed Al-Dweik and I got braces with him — may God bless him for his manners, his smile, his kind words, and his work, mashaAllah tabarak Allah, not a single mistake. And Ms. Ahlam, may God bless her, never fell short with appointments and follow-ups; she is always there.\nThank you for your efforts.",
    },
  },
  {
    id: "haton",
    name: { ar: "هاتون نجاتي", en: "Haton Najati" },
    initial: "ه",
    avatar: "#8e24aa",
    specialty: { ar: "د. غادة عبدون · فيلر", en: "Dr. Ghada Abdoon · Filler" },
    stars: 5,
    text: {
      ar: "سويت فيلر عند دكتوره غاده يجننن ولا غلطه ويدها خفيفه 💗",
      en: "I did filler with Dr Ghada — amazing, not a single mistake, and her hand is so light 💗",
    },
  },
];

export const faqs = [
  {
    q: { ar: "كيف يمكنني حجز موعد؟", en: "How do I book an appointment?" },
    a: {
      ar: "اضغط «احجز موعدك» في أي مكان بالموقع، ثم اختر القسم والطبيب والوقت. يمكنك أيضاً المراسلة عبر واتساب.",
      en: "Tap “Book appointment” anywhere on the site, then choose department, doctor, and time. You can also message us on WhatsApp.",
    },
  },
  {
    q: { ar: "هل يمكنني اختيار الطبيب؟", en: "Can I choose the doctor?" },
    a: {
      ar: "نعم. بعد اختيار القسم تظهر أسماء الأطباء المتاحين، وتختار من يناسبك قبل تأكيد الموعد.",
      en: "Yes. After you choose a department, available doctors appear, and you pick who suits you before confirming.",
    },
  },
  {
    q: { ar: "ما القسم المناسب لحالتي؟", en: "Which department is right for my case?" },
    a: {
      ar: "إن لم تكن متأكداً، ابدأ بالطب العام أو راسلنا عبر واتساب. نوجّهك للقسم الصحيح حتى لا تحجز في تخصص غير مناسب.",
      en: "If you are unsure, start with general medicine or message us on WhatsApp. We will direct you to the right department so you do not book the wrong specialty.",
    },
  },
  {
    q: { ar: "هل الأقسام الستة في مجمع واحد؟", en: "Are the six departments in one complex?" },
    a: {
      ar: "نعم. تباشير وجهة طبية واحدة متعددة التخصصات في أبراج ليليان، طريق الأمير سلطان، حي السلامة بجدة.",
      en: "Yes. Tabashir is one multi-specialty medical destination at Lilian Towers, Prince Sultan Road, As Salamah, Jeddah.",
    },
  },
  {
    q: { ar: "هل يمكنني تعديل موعدي؟", en: "Can I change my appointment?" },
    a: {
      ar: "نعم، يُفضَّل التعديل قبل الموعد بوقت كافٍ عبر واتساب أو الاتصال، حتى نُبقي وقت الطبيب متاحاً لغيرك بسلاسة.",
      en: "Yes. Please change it with enough notice via WhatsApp or a call, so the doctor’s time stays available for someone else.",
    },
  },
  {
    q: { ar: "أين تقع العيادة؟", en: "Where is the clinic?" },
    a: {
      ar: "أبراج ليليان، طريق الأمير سلطان، حي السلامة، جدة. مواقف قريبة، والاستقبال يساعدك في الوصول عند الحاجة.",
      en: "Lilian Towers, Prince Sultan Road, As Salamah, Jeddah. Nearby parking, and reception can help you find us if needed.",
    },
  },
];

export const authorityStats = [
  {
    value: { ar: "+١٥", en: "+15" },
    label: { ar: "سنة خبرة تراكمية", en: "Years of combined experience" },
  },
  {
    value: { ar: "٦", en: "6" },
    label: { ar: "أقسام طبية في مجمع واحد", en: "Medical departments in one complex" },
  },
  {
    value: { ar: "+١٢٬٠٠٠", en: "+12,000" },
    label: { ar: "مريض وُجدت له خطة", en: "Patients with a care plan" },
  },
];

export const clinicGallery = [
  { src: "/images/tour/entrance.jpg", alt: { ar: "مدخل عيادات تباشير", en: "Tabashir Clinics entrance" } },
  { src: "/images/tour/waiting.jpg", alt: { ar: "منطقة الانتظار", en: "Waiting area" } },
  { src: "/images/tour/lounge.jpg", alt: { ar: "ردهة الاستقبال", en: "Reception lounge" } },
  { src: "/images/tour/office.jpg", alt: { ar: "عيادة الطبيب", en: "Doctor’s office" } },
];

export const featuredDental = {
  id: "dental",
  eyebrow: { ar: "قسم الأسنان والتقويم", en: "Dental & orthodontics" },
  title: { ar: "ابتسامتك تبدأ من هنا", en: "Your smile begins here" },
  lead: {
    ar: "رعاية متكاملة لأسنانك: من الوقاية اليومية إلى التقويم والزراعة وابتسامة أكثر ثقة — في نفس المجمع.",
    en: "Complete care for your teeth: from daily prevention to orthodontics, implants, and a more confident smile — in the same complex.",
  },
  image: "/images/specialties/dental.jpg",
  cta: { ar: "اكتشف قسم الأسنان", en: "Explore dental care" },
  href: "/dental",
};
