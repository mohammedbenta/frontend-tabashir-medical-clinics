export type Text = { ar: string; en: string };

export type Specialty = {
  id: string;
  name: Text;
  description: Text;
  href: string;
  image: string;
  featured?: boolean;
};

export const specialties: Specialty[] = [
  {
    id: "dermatology",
    name: { ar: "الجلدية والتجميل", en: "Dermatology & aesthetics" },
    description: {
      ar: "حلول متخصصة للعناية بالبشرة والشعر واستعادة مظهر أكثر صحة.",
      en: "Specialized care for skin and hair, toward a healthier appearance.",
    },
    href: "#dermatology",
    image: "/images/specialties/dermatology.jpg",
    featured: true,
  },
  {
    id: "dental",
    name: { ar: "الأسنان", en: "Dental" },
    description: {
      ar: "رعاية وقائية وتجميلية تمنحك ابتسامة أهدأ وأكثر ثقة.",
      en: "Preventive and aesthetic care for a calmer, more confident smile.",
    },
    href: "#booking",
    image: "/images/specialties/dental.jpg",
    featured: true,
  },
  {
    id: "obgyn",
    name: { ar: "النساء والولادة", en: "Obstetrics & gynecology" },
    description: {
      ar: "متابعة دقيقة لصحة المرأة — من الفحص الدوري إلى رحلة الحمل.",
      en: "Attentive women’s health — from routine exams to pregnancy care.",
    },
    href: "#booking",
    image: "/images/specialties/obgyn.jpg",
  },
  {
    id: "gastro",
    name: { ar: "الجهاز الهضمي والمناظير", en: "Gastroenterology & endoscopy" },
    description: {
      ar: "تشخيص أوضح لمشاكل الجهاز الهضمي، بخطوات مرتّبة ومريحة.",
      en: "Clearer diagnosis for digestive issues, in ordered, comfortable steps.",
    },
    href: "#booking",
    image: "/images/specialties/gastro.jpg",
  },
  {
    id: "ent",
    name: { ar: "الأنف والأذن والحنجرة", en: "ENT" },
    description: {
      ar: "علاج متخصص لحالات التنفس، والسمع، والتهابات الجيوب.",
      en: "Specialist care for breathing, hearing, and sinus conditions.",
    },
    href: "#booking",
    image: "/images/specialties/ent.jpg",
  },
  {
    id: "nutrition",
    name: { ar: "التغذية العلاجية", en: "Clinical nutrition" },
    description: {
      ar: "خطط غذائية عملية تناسب حالتك الطبية وهدفك الصحي.",
      en: "Practical nutrition plans matched to your medical case and health goal.",
    },
    href: "#booking",
    image: "/images/specialties/nutrition.jpg",
  },
  {
    id: "surgery",
    name: { ar: "الجراحة", en: "Surgery" },
    description: {
      ar: "تقييم جراحي واضح، وقرار علاجي يشرح لك الخيارات بهدوء.",
      en: "A clear surgical assessment, with options explained calmly.",
    },
    href: "#booking",
    image: "/images/specialties/surgery.jpg",
  },
  {
    id: "general",
    name: { ar: "الطب العام", en: "General medicine" },
    description: {
      ar: "نقطة البداية الصحيحة: فحص، توجيه، ومتابعة دون تشتت.",
      en: "The right first step: exam, guidance, and follow-up without scatter.",
    },
    href: "#booking",
    image: "/images/specialties/general.jpg",
  },
  {
    id: "lab",
    name: { ar: "المختبر", en: "Laboratory" },
    description: {
      ar: "نتائج دقيقة تساعد طبيبك على اتخاذ قرار أسرع وأكثر وضوحاً.",
      en: "Precise results that help your doctor decide faster and more clearly.",
    },
    href: "#booking",
    image: "/images/specialties/lab.jpg",
  },
];

export type Doctor = {
  id: string;
  name: Text;
  specialtyId: string;
  specialty: Text;
  title: Text;
  experience: Text;
  credibility: Text;
  image?: string;
  initials: string;
  imagePosition?: string;
};

export const doctors: Doctor[] = [
  {
    id: "huda",
    name: { ar: "د. هدى القحطاني", en: "Dr. Huda Al-Qahtani" },
    specialtyId: "dermatology",
    specialty: { ar: "الجلدية والتجميل", en: "Dermatology & aesthetics" },
    title: { ar: "استشارية الجلدية والليزر", en: "Consultant dermatologist & laser" },
    experience: { ar: "١٢ سنة خبرة", en: "12 years of experience" },
    credibility: {
      ar: "تضع خطة واضحة تناسب نوع بشرتك وهدفك من الزيارة — طبياً أو تجميلياً.",
      en: "She sets a clear plan matched to your skin type and visit goal — medical or aesthetic.",
    },
    image: "/images/doctors/huda.jpg",
    initials: "هـ",
    imagePosition: "50% 18%",
  },
  {
    id: "omar",
    name: { ar: "د. عمر السلمي", en: "Dr. Omar Al-Salmi" },
    specialtyId: "dental",
    specialty: { ar: "الأسنان", en: "Dental" },
    title: { ar: "استشاري تجميل الأسنان", en: "Consultant aesthetic dentist" },
    experience: { ar: "١٠ سنوات خبرة", en: "10 years of experience" },
    credibility: {
      ar: "يركّز على نتائج طبيعية، ويشرح خيارات العلاج قبل أي إجراء.",
      en: "He focuses on natural results and explains treatment options before any procedure.",
    },
    image: "/images/doctors/omar.jpg",
    initials: "ع",
    imagePosition: "50% 15%",
  },
  {
    id: "layan",
    name: { ar: "د. ليان الحربي", en: "Dr. Layan Al-Harbi" },
    specialtyId: "obgyn",
    specialty: { ar: "النساء والولادة", en: "Obstetrics & gynecology" },
    title: { ar: "استشارية النساء والولادة", en: "Consultant obstetrician & gynecologist" },
    experience: { ar: "١٤ سنة خبرة", en: "14 years of experience" },
    credibility: {
      ar: "متابعة هادئة ودقيقة، مع وقت كافٍ للأسئلة في كل زيارة.",
      en: "Calm, precise follow-up, with enough time for questions in every visit.",
    },
    image: "/images/doctors/layan.jpg",
    initials: "ل",
    imagePosition: "50% 18%",
  },
  {
    id: "noura",
    name: { ar: "د. نورة العتيبي", en: "Dr. Noura Al-Otaibi" },
    specialtyId: "nutrition",
    specialty: { ar: "التغذية العلاجية", en: "Clinical nutrition" },
    title: { ar: "أخصائية التغذية العلاجية", en: "Clinical nutrition specialist" },
    experience: { ar: "٨ سنوات خبرة", en: "8 years of experience" },
    credibility: {
      ar: "خطط عملية يمكن الالتزام بها، مرتبطة بحالتك الطبية لا بالوصفات العامة.",
      en: "Practical plans you can keep — tied to your medical case, not generic recipes.",
    },
    image: "/images/doctors/noura.jpg",
    initials: "ن",
    imagePosition: "72% 18%",
  },
  {
    id: "khalid",
    name: { ar: "د. خالد الغامدي", en: "Dr. Khalid Al-Ghamdi" },
    specialtyId: "gastro",
    specialty: { ar: "الجهاز الهضمي والمناظير", en: "Gastroenterology & endoscopy" },
    title: { ar: "استشاري الجهاز الهضمي", en: "Consultant gastroenterologist" },
    experience: { ar: "١٦ سنة خبرة", en: "16 years of experience" },
    credibility: {
      ar: "يشخّص بهدوء، ويشرح خيار المنظار قبل أن تقرر.",
      en: "He diagnoses calmly, and explains endoscopy before you decide.",
    },
    image: "/images/doctors/khalid.jpg",
    initials: "خ",
    imagePosition: "50% 16%",
  },
  {
    id: "sara",
    name: { ar: "د. سارة الزهراني", en: "Dr. Sara Al-Zahrani" },
    specialtyId: "ent",
    specialty: { ar: "الأنف والأذن والحنجرة", en: "ENT" },
    title: { ar: "استشارية الأنف والأذن والحنجرة", en: "Consultant ENT" },
    experience: { ar: "١١ سنة خبرة", en: "11 years of experience" },
    credibility: {
      ar: "تعالج الجيوب والتنفس بخطوات واضحة، دون استعجال للجراحة.",
      en: "She treats sinuses and breathing in clear steps, without rushing to surgery.",
    },
    image: "/images/doctors/sara.jpg",
    initials: "س",
    imagePosition: "50% 18%",
  },
  {
    id: "majed",
    name: { ar: "د. ماجد العتيبي", en: "Dr. Majed Al-Otaibi" },
    specialtyId: "surgery",
    specialty: { ar: "الجراحة", en: "Surgery" },
    title: { ar: "استشاري الجراحة العامة", en: "Consultant general surgeon" },
    experience: { ar: "١٨ سنة خبرة", en: "18 years of experience" },
    credibility: {
      ar: "يقيم الحاجة للجراحة بوضوح، ويعرض البدائل إن كانت أأمن لحالتك.",
      en: "He assesses the need for surgery clearly, and presents alternatives when they are safer.",
    },
    initials: "م",
  },
  {
    id: "waleed",
    name: { ar: "د. وليد الأنصاري", en: "Dr. Waleed Al-Ansari" },
    specialtyId: "general",
    specialty: { ar: "الطب العام", en: "General medicine" },
    title: { ar: "استشاري الطب الباطني", en: "Consultant internal medicine" },
    experience: { ar: "١٣ سنة خبرة", en: "13 years of experience" },
    credibility: {
      ar: "نقطة البداية الصحيحة: فحص شامل ثم توجيه للتخصص المناسب.",
      en: "The right first step: a full exam, then direction to the right specialty.",
    },
    initials: "و",
  },
  {
    id: "reem",
    name: { ar: "د. ريم الحربي", en: "Dr. Reem Al-Harbi" },
    specialtyId: "lab",
    specialty: { ar: "المختبر", en: "Laboratory" },
    title: { ar: "استشارية المختبر والدم", en: "Consultant laboratory medicine" },
    experience: { ar: "٩ سنوات خبرة", en: "9 years of experience" },
    credibility: {
      ar: "نتائج دقيقة في نفس المجمع، حتى لا تتأخر خطتك على تقرير ناقص.",
      en: "Precise results in the same complex, so your plan is not delayed by an incomplete report.",
    },
    initials: "ر",
  },
];

export const benefits = [
  {
    id: "specialists",
    num: { ar: "٠١", en: "01" },
    title: { ar: "أطباء متخصصون", en: "Specialist doctors" },
    text: {
      ar: "تُعرض حالتك على الطبيب المناسب لتخصصك، لا على مسار عام يُطيل الطريق.",
      en: "Your case is seen by the right specialist — not a general path that lengthens the way.",
    },
  },
  {
    id: "tech",
    num: { ar: "٠٢", en: "02" },
    title: { ar: "تقنيات حديثة", en: "Modern technology" },
    text: {
      ar: "أجهزة وخطط علاج تُختار حسب احتياجك، ويُشرح لك لماذا هذا الخيار تحديداً.",
      en: "Equipment and treatment plans chosen for your need, with a clear why for this option.",
    },
  },
  {
    id: "integrated",
    num: { ar: "٠٣", en: "03" },
    title: { ar: "تخصصات متكاملة", en: "Integrated specialties" },
    text: {
      ar: "جلدية، أسنان، نساء، جهاز هضمي وغيرها — دون أن تتنقل بين مجمعات متفرقة.",
      en: "Dermatology, dental, women’s health, gastroenterology and more — without moving between complexes.",
    },
  },
  {
    id: "comfort",
    num: { ar: "٠٤", en: "04" },
    title: { ar: "تجربة أكثر راحة", en: "A calmer visit" },
    text: {
      ar: "من الحجز وحتى المتابعة، صممنا الخطوات لتكون أوضح وأقل استنزافاً لوقتك.",
      en: "From booking to follow-up, the steps are designed to be clearer and less draining of your time.",
    },
  },
];

export const technologies = [
  {
    title: {
      ar: "تشخيص أدق من الزيارة الأولى",
      en: "More precise diagnosis from the first visit",
    },
    text: {
      ar: "فحوصات ومختبر في المكان نفسه، حتى لا تتأخر خطتك العلاجية على نتيجة ناقصة.",
      en: "Tests and a lab on site, so your plan is not delayed by an incomplete result.",
    },
    image: "/images/tech/diagnostics.jpg",
  },
  {
    title: { ar: "غرف علاج بهدوء وترتيب", en: "Treatment rooms with calm and order" },
    text: {
      ar: "بيئة عيادية حديثة صُممت للراحة والاستقلالية، لا للمرور السريع فقط.",
      en: "A modern clinical setting designed for comfort and privacy — not a quick pass-through.",
    },
    image: "/images/hero-clinic.jpg",
  },
  {
    title: { ar: "إجراءات تجميلية بطابع طبي", en: "Aesthetic procedures with a medical tone" },
    text: {
      ar: "الليزر والعناية بالبشرة تحت إشراف طبي، بخطة واضحة قبل الجلسة.",
      en: "Laser and skin care under medical supervision, with a clear plan before the session.",
    },
    image: "/images/specialties/dermatology.jpg",
  },
  {
    title: { ar: "متابعة متصلة بين التخصصات", en: "Connected follow-up across specialties" },
    text: {
      ar: "إن احتاجت حالتك أكثر من قسم، يبقى الملف واحداً والمسار مرتّباً.",
      en: "If your case needs more than one department, the file stays one and the path stays ordered.",
    },
    image: "/images/tech/treatment.jpg",
  },
];

export const testimonials = [
  {
    name: { ar: "نورة م.", en: "Noura M." },
    initials: { ar: "ن", en: "N" },
    specialty: { ar: "الجلدية", en: "Dermatology" },
    stars: 5,
    text: {
      ar: "الطبيبة استمعت للنهاية وشرحت الخطة بوضوح. خرجت وأنا أعرف الخطوة التالية.",
      en: "The doctor listened fully and explained the plan clearly. I left knowing the next step.",
    },
  },
  {
    name: { ar: "عبدالرحمن س.", en: "Abdulrahman S." },
    initials: { ar: "ع", en: "A" },
    specialty: { ar: "الأسنان", en: "Dental" },
    stars: 5,
    text: {
      ar: "المكان مرتب والنظافة ظاهرة من أول دخول. الحجز كان أسهل مما توقعت.",
      en: "The place is orderly and cleanliness is obvious from the first step in. Booking was easier than I expected.",
    },
  },
  {
    name: { ar: "هند القحطاني", en: "Hind Al-Qahtani" },
    initials: { ar: "هـ", en: "H" },
    specialty: { ar: "النساء والولادة", en: "Obstetrics & gynecology" },
    stars: 5,
    text: {
      ar: "تعامل الطاقم راقٍ وهادئ. الدكتورة ما استعجلت، وهذا فرق معي كثيراً.",
      en: "The team was refined and calm. The doctor did not rush — and that made a real difference.",
    },
  },
  {
    name: { ar: "فيصل ع.", en: "Faisal A." },
    initials: { ar: "ف", en: "F" },
    specialty: { ar: "الأسنان", en: "Dental" },
    stars: 4,
    text: {
      ar: "تابعت أسناني عندهم، والنتيجة طبيعية بدون مبالغة في الإجراءات.",
      en: "I followed my dental care with them. The result was natural, without overdoing procedures.",
    },
  },
];

export const offers = [
  {
    id: "skin",
    title: { ar: "باقة العناية بالبشرة", en: "Skin care package" },
    text: {
      ar: "تقييم جلدية + جلسة عناية تُحدَّد حسب حالة بشرتك.",
      en: "Dermatology assessment + a care session set to your skin condition.",
    },
    price: { ar: "٤٩٩", en: "499" },
    oldPrice: { ar: "٧٥٠", en: "750" },
    tag: { ar: "الأكثر طلباً", en: "Most requested" },
    spots: { ar: "٨ مقاعد هذا الأسبوع", en: "8 spots this week" },
  },
  {
    id: "laser",
    title: { ar: "جلسة ليزر تجميلي", en: "Aesthetic laser session" },
    text: {
      ar: "جلسة واحدة ضمن خطة يشرحها الطبيب قبل التنفيذ.",
      en: "One session within a plan the doctor explains before treatment.",
    },
    price: { ar: "٢٩٩", en: "299" },
    oldPrice: { ar: "٤٥٠", en: "450" },
    spots: { ar: "١٢ مقعداً متبقياً", en: "12 spots left" },
  },
  {
    id: "dental",
    title: { ar: "فحص أسنان شامل", en: "Full dental exam" },
    text: {
      ar: "كشف + خطة علاجية مكتوبة، دون التزام فوري بالإجراء.",
      en: "Exam + a written treatment plan, with no immediate commitment to a procedure.",
    },
    price: { ar: "١٩٩", en: "199" },
    oldPrice: { ar: "٣٥٠", en: "350" },
    spots: { ar: "ينتهي خلال ١٤ يوماً", en: "Ends in 14 days" },
  },
  {
    id: "nutrition",
    title: { ar: "استشارة تغذية علاجية", en: "Clinical nutrition consult" },
    text: {
      ar: "جلسة تقييم وبناء خطة غذائية تناسب روتينك الطبي.",
      en: "An assessment session and a nutrition plan that fits your medical routine.",
    },
    price: { ar: "١٤٩", en: "149" },
    oldPrice: { ar: "٢٥٠", en: "250" },
    spots: { ar: "٦ مقاعد متبقية", en: "6 spots remaining" },
  },
];

export const faqs = [
  {
    q: { ar: "كيف يمكنني حجز موعد؟", en: "How do I book an appointment?" },
    a: {
      ar: "اضغط «احجز موعدك» في أي مكان بالموقع، ثم اختر التخصص والطبيب والوقت من النافذة. يمكنك أيضاً المراسلة عبر واتساب.",
      en: "Tap “Book appointment” anywhere on the site, then choose specialty, doctor, and time in the window. You can also message us on WhatsApp.",
    },
  },
  {
    q: { ar: "هل يمكنني اختيار الطبيب؟", en: "Can I choose the doctor?" },
    a: {
      ar: "نعم. بعد اختيار التخصص تظهر أسماء الأطباء المتاحين، وتختار من يناسبك قبل تأكيد الموعد.",
      en: "Yes. After you choose a specialty, available doctors appear, and you pick who suits you before confirming.",
    },
  },
  {
    q: { ar: "هل يمكنني التواصل عبر واتساب؟", en: "Can I reach you on WhatsApp?" },
    a: {
      ar: "نعم، واتساب متاح للحجز والاستفسار عن التخصص المناسب. نفضّل إرسال وصف مختصر لحالتك حتى نوجّهك بدقة.",
      en: "Yes. WhatsApp is available for booking and to ask which specialty fits. A short description of your case helps us guide you accurately.",
    },
  },
  {
    q: { ar: "ما التخصص المناسب لحالتي؟", en: "Which specialty is right for my case?" },
    a: {
      ar: "إن لم تكن متأكداً، ابدأ بالطب العام أو راسلنا عبر واتساب. نوجّهك للقسم الصحيح حتى لا تحجز في تخصص غير مناسب.",
      en: "If you are unsure, start with general medicine or message us on WhatsApp. We will direct you to the right department so you do not book the wrong specialty.",
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
    value: { ar: "٩", en: "9" },
    label: { ar: "تخصصات في مجمع واحد", en: "Specialties in one complex" },
  },
  {
    value: { ar: "+١٢٬٠٠٠", en: "+12,000" },
    label: { ar: "مريض وُجدت له خطة", en: "Patients with a care plan" },
  },
];

export const beforeAfter = [
  {
    id: "skin",
    label: { ar: "عناية البشرة", en: "Skin care" },
  },
  {
    id: "laser",
    label: { ar: "ليزر تجميلي", en: "Aesthetic laser" },
  },
  {
    id: "hair",
    label: { ar: "العناية بالشعر", en: "Hair care" },
  },
];

export const clinicGallery = [
  { src: "/images/tour/entrance.jpg", alt: { ar: "مدخل عيادات تباشير", en: "Tabashir Clinics entrance" } },
  { src: "/images/tour/waiting.jpg", alt: { ar: "منطقة الانتظار", en: "Waiting area" } },
  { src: "/images/tour/lounge.jpg", alt: { ar: "ردهة الاستقبال", en: "Reception lounge" } },
  { src: "/images/tour/office.jpg", alt: { ar: "عيادة الطبيب", en: "Doctor’s office" } },
];

export const insurers = [
  { ar: "التعاونية", en: "Tawuniya" },
  { ar: "بوبا العربية", en: "Bupa Arabia" },
  { ar: "ميدغلف", en: "Medgulf" },
  { ar: "ملاذ", en: "Malath" },
  { ar: "الراجحي تكافل", en: "Al Rajhi Takaful" },
  { ar: "الدفع الذاتي", en: "Self-pay" },
];
