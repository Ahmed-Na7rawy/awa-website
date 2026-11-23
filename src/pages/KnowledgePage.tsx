import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  FileText, 
  Sparkles, 
  Building2, 
  ArrowRight, 
  Lightbulb, 
  CheckCircle2,
  Calendar,
  Clock,
  User,
  Tag,
  Search,
  X,
  Share2,
  Download,
  ChevronRight
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { v9Assets } from '../data/v9Data';

interface ArticleItem {
  id: string;
  category: 'formulation' | 'corporate' | 'trends' | 'quality';
  categoryLabel: string;
  categoryLabelAr: string;
  title: string;
  titleAr: string;
  excerpt: string;
  excerptAr: string;
  readTime: string;
  date: string;
  author: string;
  authorAr: string;
  image: string;
  content: string[];
  contentAr: string[];
  takeaways: string[];
  takeawaysAr: string[];
}

export const KnowledgePage: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  const articles: ArticleItem[] = [
    {
      id: 'turkphos-expansion',
      category: 'corporate',
      categoryLabel: 'Corporate & JVs',
      categoryLabelAr: 'الشراكات والمشاريع',
      title: 'Turkphos Strategic Expansion: Enhancing Regional Supply Resilience for High-Performance Emulsifying Salts in MENA',
      titleAr: 'توسعات توركفوس الاستراتيجية: تعزيز مرونة سلاسل إمداد أملاح الاستحلاب والفوسفات في الشرق الأوسط',
      excerpt: 'How localized chemical synthesis and application testing are mitigating foreign exchange pressures and import lead-time volatility for processed cheese manufacturers.',
      excerptAr: 'كيف يساهم التخليق الكيميائي المحلي واختبارات التطبيقات التجريبية في تقليل مخاطر سلاسل الإمداد وتقلبات العملة لمصنعي الجبن المطبوخ.',
      readTime: '5 min read',
      date: 'November 2026',
      author: 'AWA & Turkphos Technical Directorate',
      authorAr: 'الإدارة الفنية المشتركة لـ AWA وتوركفوس',
      image: v9Assets.v8Assets['cheese-banner'] || v9Assets.v8Assets['rd-lab'],
      content: [
        'The global processed cheese and dairy sector has experienced unprecedented supply chain turbulence over the past three years. Unpredictable maritime freight corridors, escalating raw phosphate precursor costs, and currency fluctuations have placed severe operational strain on regional food manufacturers across the Middle East and North Africa.',
        'To establish structural supply autonomy, Turkphos—the strategic joint venture established between Egyptian and Turkish partners in 2022—has executed a multi-phase manufacturing and technical expansion. By coupling advanced synthesis reactors with local buffer warehousing in Cairo and Alexandria, Turkphos guarantees uninterrupted supply of high-purity sodium and potassium phosphates.',
        'Critically, the joint venture bridges pure chemical synthesis with empirical pilot plant validation. At AWA’s Borg El-Arab R&D Application Center, incoming batches of emulsifying salts are tested directly in pilot Stephan cookers under realistic factory conditions—evaluating calcium sequestration rates, casein peptization dynamics, and molten viscosity before commercial release.'
      ],
      contentAr: [
        'شهد قطاع تصنيع الأجبان ومنتجات الألبان العالمي اضطرابات غير مسبوقة في سلاسل الإمداد خلال السنوات الأخيرة، حيث أدت تقلبات أسعار الشحن البحري وتذبذب أسعار الخامات الفوسفاتية إلى فرض ضغوط تشغيلية ومالية كبيرة على المصانع في منطقة الشرق الأوسط وشمال أفريقيا.',
        'ولتحقيق الاستقلالية التشغيلية، نفذت توركفوس - المشروع الاستراتيجي المشترك المؤسس في 2022 - خطة توسع متكاملة لربط منشآت التخليق الكيميائي بمستودعات التخزين الاستراتيجي في القاهرة والإسكندرية، مما يضمن تدفقاً سلساً ومستمراً لأملاح الفوسفات عالية النقاوة.',
        'تتميز توركفوس بالربط المباشر بين التخليق ومعامل التطبيقات الميدانية. ففي مركز أبحاث وتطبيقات AWA في برج العرب، يتم اختبار دفعات أملاح الاستحلاب على طباخات شتيفان التجريبية تحت ظروف المصانع الفعلية لقياس معدلات استحلاب الكازين واللزوجة قبل اعتمادها النهائي.'
      ],
      takeaways: [
        'Dual-hub production across Türkiye and Egypt eliminates single-source import dependencies.',
        'Application testing ensures precise pH buffering and casein dispersion across all cheese formulas.',
        'Dedicated local warehousing provides emergency buffer stocks with 48-hour dispatch SLA.'
      ],
      takeawaysAr: [
        'التصنيع الإقليمي المشترك بين تركيا ومصر ينهي الاعتماد الكلي على الاستيراد البعيد.',
        'الاختبارات التطبيقية تضمن ضبط حموضة واستحلاب الكازين بدقة لكل خط إنتاج.',
        'المخزون الاستراتيجي المحلي يوفر توريداً فورياً خلال 48 ساعة فقط.'
      ]
    },
    {
      id: 'sugar-reduction',
      category: 'formulation',
      categoryLabel: 'Formulation Science',
      categoryLabelAr: 'علم التركيبات والبحث والتطوير',
      title: 'Sugar Reduction Without Sensory Compromise: Balancing Sweetness, Mouthfeel, and Freezing Point in Dairy & Beverages',
      titleAr: 'تقليل السكر دون التأثير على الطعم: موازنة الحلاوة والقوام ونقطة التجمد في الألبان والمشروبات',
      excerpt: 'A deep-dive into non-caloric sweetener synergy, soluble prebiotic fibers, and mouthfeel re-engineering for healthier functional foods.',
      excerptAr: 'دراسة تطبيقية متعمقة حول تكامل المحليات عالية الشدة مع الألياف الوظيفية الذائبة لإعادة بناء القوام الغني في المنتجات الصحية.',
      readTime: '6 min read',
      date: 'October 2026',
      author: 'AWA Dairy & Beverage R&D Laboratory',
      authorAr: 'معمل أبحاث الألبان والمشروبات في AWA',
      image: v9Assets.v8Assets['food-smoothies'] || v9Assets.v8Assets['rd-wide'],
      content: [
        'Sucrose is vastly more than a simple sweetening agent in food matrices; it provides essential physical bulk, contributes to mouthfeel, depresses freezing point in ice creams, and controls water activity in bakery fillings. Consequently, removing sugar cannot be solved by simply substituting high-intensity sweeteners.',
        'AWA’s formulation teams utilize a three-pillar sensory restoration approach: pairing customized high-intensity natural glycosides with soluble dietary fibers (such as polydextrose and inulin) to rebuild bulk viscosity and mouth-coating properties.',
        'In cultured dairy and flavored milks, our proprietary stabilizer systems restore the exact body and viscosity profile of full-sugar formulations while achieving up to a 45% reduction in total caloric carbohydrates.'
      ],
      contentAr: [
        'يمثل السكروز أكثر بكثير من مجرد عامل تحلية في الأغذية؛ فهو يمنح المنتج وزنه الحجمي، ويسهم في الإحساس الفموي الكريمي، ويخفض نقطة التجمد في الآيس كريم، ويتحكم في النشاط المائي. ولذا، لا يمكن حل مشكلة تقليل السكر بمجرد إضافة محليات صناعية فقط.',
        'يعتمد فريق البحث والتطوير في AWA على استراتيجية ثلاثية الأبعاد: دمج المحليات الطبيعية عالية الشدة مع الألياف الغذائية الذائبة (مثل البوليدكستروز والإينولين) لإعادة بناء اللزوجة والقوام المفقودين.',
        'في منتجات الزبادي المخمر والمشروبات، تعيد أنظمة التثبيت الخاصة بنا القوام الغني المطابق تماماً للمنتجات التقليدية مع تحقيق خفض يصل إلى 45% في الكربوهيدرات الكلية.'
      ],
      takeaways: [
        'Bulk replacement requires soluble fiber matrices to prevent watery or hollow sensory textures.',
        'Flavor modulation blocks lingering metallic or licorice notes common in non-nutritive sweeteners.',
        'Freezing point depression profiling is essential for scoopable reduced-sugar frozen desserts.'
      ],
      takeawaysAr: [
        'إعادة بناء الحجم تتطلب أليافاً ذائبة لمنع الملمس المائي الخفيف.',
        'حواجب النكهة المتطورة تزيل الطعم المر أو اللاحق للمحليات.',
        'ضبط نقطة التجمد ضروري للحفاظ على قوام الآيس كريم قليل السكر القابل للمسح.'
      ]
    },
    {
      id: 'meat-yield-phosphates',
      category: 'formulation',
      categoryLabel: 'Technical Whitepapers',
      categoryLabelAr: 'أوراق بحثية تقنية',
      title: 'Yield & Moisture Retention in Processed Meats: Next-Generation Functional Phosphate Blends',
      titleAr: 'رفع الإنتاجية والاحتفاظ بالرطوبة في مصنعات اللحوم والدواجن: الجيل الجديد من خلطات الفوسفات الوظيفية',
      excerpt: 'Optimizing sodium tripolyphosphate (STPP) solubility, ionic strength, and actomyosin protein extraction for minimal cooking purge.',
      excerptAr: 'تحسين ذوبانية ثلاثي بولي فوسفات الصوديوم والقوة الأيونية لاستخلاص بروتين الأكتومايوسين وتقليل الفاقد أثناء الطهي والتبريد.',
      readTime: '7 min read',
      date: 'September 2026',
      author: 'Meat & Savory Application Center',
      authorAr: 'مركز تطبيقات اللحوم والأغذية المملحة',
      image: v9Assets.v7Assets['meat-seafood'] || v9Assets.v8Assets['industrial-plant'],
      content: [
        'In industrial meat and poultry processing, water retention is the primary determinant of both economic yield and finished eating quality. Muscle proteins (actin and myosin) naturally possess a limited water-holding capacity that diminishes significantly during mincing, thermal processing, and cold storage.',
        'Engineered phosphate systems function by shifting meat pH away from the isoelectric point of muscle proteins, increasing electrostatic repulsion between peptide filaments. This conformational relaxation allows water molecules to enter and become structurally entrapped within the protein matrix.',
        'Turkphos and AWA have co-developed cold-soluble instant phosphate blends that dissolve completely in brine chillers without crystallizing or clogging injection needles, maximizing yields up to 18% in deli meats while ensuring a firm, natural slice bite.'
      ],
      contentAr: [
        'في قطاع تصنيع اللحوم والدواجن، يعد الاحتفاظ بالرطوبة المحدد الأساسي لكل من الجدوى الاقتصادية وجودة القوام عند الاستهلاك. تمتلك بروتينات العضلات سعة احتجاز مائي محدودة تتراجع بشكل حاد أثناء الفرم والطهي الحراري والتجميد.',
        'تعمل أنظمة الفوسفات المصممة هندسياً على إزاحة الرقم الهيدروجيني للحم بعيداً عن نقطة التعادل الكهربائي، مما يزيد من التنافر الإلكتروستاتي بين خيوط البروتين ويسمح لجزيئات الماء بالتخلل والاستقرار داخل الشبكة البروتينية.',
        'طورت توركفوس بالتعاون مع AWA خلطات فوسفات سريعة الذوبان في المحاليل الباردة تمنع انسداد إبر الحقن تماماً، وترفع نسب الإنتاجية حتى 18% مع ضمان قوام متماسك وملمس طبيعي عند التقطيع.'
      ],
      takeaways: [
        'Instant solubility eliminates needle blockage in whole-muscle poultry injection equipment.',
        'Phosphate chain length distribution prevents soapy off-flavors and surface salt blooming.',
        'Significantly reduces drip loss during vacuum-packaged chilled retail storage.'
      ],
      takeawaysAr: [
        'الذوبان الفوري يمنع انسداد إبر ماكينات الحقن الأوتوماتيكية في الدواجن.',
        'توزيع أطوال السلاسل الفوسفاتية يمنع الطعم الصابوني أو الترسبات البيضاء السطحية.',
        'تقليل فواقد النضح المائي أثناء التخزين في عبوات الفاكيوم المبردة.'
      ]
    },
    {
      id: 'clean-label-bakery',
      category: 'trends',
      categoryLabel: 'Market Trends & Innovation',
      categoryLabelAr: 'اتجاهات الأسواق والملصق النظيف',
      title: 'Clean Label Texturizers in Modern Bakery: Synergy of Native Citrus Fibers & Functional Hydrocolloids',
      titleAr: 'بدائل الملصق النظيف في صناعة المخبوزات: التكامل بين ألياف الحمضيات والصموغ الوظيفية',
      excerpt: 'Replacing chemically modified starches and synthetic emulsifiers in high-bake fruit fillings, cakes, and flatbreads.',
      excerptAr: 'إحلال النشا المعدل كيميائياً والمستحلبات الاصطناعية في حشوات الفاكهة المخبوزة والكيك والخبز المفرود.',
      readTime: '5 min read',
      date: 'September 2026',
      author: 'Ingreva & AWA Bakery Division',
      authorAr: 'قطاع المخبوزات المشترك لـ Ingreva وAWA',
      image: v9Assets.v7Assets['bakery'] || v9Assets.v8Assets['food-demiglace'],
      content: [
        'Consumer demand for clean, transparent ingredient declarations is driving industrial bakeries to seek functional alternatives to modified starches (E1422, E1442) and synthetic monoglycerides.',
        'Through our collaboration with Ingreva (Estonia), AWA has validated high-surface-area native citrus fibers that possess remarkable water-binding capacities exceeding 10x their dry weight.',
        'When combined synergistically with cold-swelling native starches, these systems achieve complete bake stability in fruit fillings—preventing boil-out at 220°C oven temperatures while retaining pristine clarity and clean mouth release.'
      ],
      contentAr: [
        'يدفع طلب المستهلكين المتزايد على الملصقات الشفافة والنظيفة مصانع المخبوزات للبحث عن بدائل طبيعية فعالة تحل محل النشا المعدل كيميائياً (E1422 و E1442) والمستحلبات المصنعة.',
        'من خلال شراكتنا مع إنجريفا (إستونيا)، اعتمدت AWA ألياف الحمضيات الطبيعية ذات المساحة السطحية الفائقة، والتي تتميز بقدرة احتجاز مائي تفوق 10 أضعاف وزنها الجاف.',
        'عند دمج هذه الألياف مع النشا الطبيعي، تحقق الحشوات ثباتاً كاملاً عند الخبز على درجات حرارة تصل إلى 220 مئوية دون أي غليان أو فوران خارج العجين مع الحفاظ على لمعان الحشوة وطعم الفاكهة الطبيعي.'
      ],
      takeaways: [
        'Enables 100% clean-label declarations without modified starch numbers on packaging.',
        'Maintains high thermal stability preventing boil-out in industrial pastry lines.',
        'Extends crumb softness and moisture retention in sliced packaged bread.'
      ],
      takeawaysAr: [
        'تتيح ملصقاً نظيفاً بنسبة 100% خالياً من أرقام E-numbers للنشا المعدل.',
        'ثبات حراري فائق يمنع فوران الحشوات في أفران المخبوزات الآلية.',
        'إطالة فترة طراوة اللبابة والاحتفاظ بالرطوبة في الخبز المعبأ.'
      ]
    },
    {
      id: 'analogue-cheese-thermal',
      category: 'formulation',
      categoryLabel: 'Formulation Science',
      categoryLabelAr: 'علم التركيبات والبحث والتطوير',
      title: 'Thermal Stability & Emulsification in Analogue Cheese: High-Melt Blocks vs. Stretchable Mozzarella',
      titleAr: 'الثبات الحراري والاستحلاب في بدائل الأجبان: قوالب التحمل الحراري مقابل جبن الموزاريلا المطاطي',
      excerpt: 'Engineering vegetable fat crystallization, calcium caseinate networks, and melting profiles for commercial food service applications.',
      excerptAr: 'هندسة تبلور الدهون النباتية وشبكات كازينات الكالسيوم للتحكم في الانصهار والمطاطية لقطاع المطاعم والأغذية السريعة.',
      readTime: '6 min read',
      date: 'August 2026',
      author: 'Dairy Application Center (Borg El-Arab)',
      authorAr: 'مركز تطبيقات الألبان (برج العرب)',
      image: v9Assets.v7Assets['dairy-cheese'] || v9Assets.v8Assets['rd-lab'],
      content: [
        'The fast food (QSR) and food services landscape demands sharply divergent functional behaviors from cheese systems. While burger slices require instant melting and gloss, fried cheese bites and bakery toppings demand non-melting thermal hold at 180°C.',
        'AWA’s application scientists formulate analogue cheese systems utilizing bespoke Turkphos emulsifying salt blends with tailored monophosphate-to-polyphosphate ratios.',
        'By finely tuning protein hydration and ionic cross-linking, we engineer cheese matrices that resist oil bleeding during extended hot-lamp holding while delivering the elastic stretch required by premium pizza operators.'
      ],
      contentAr: [
        'يتطلب قطاع المطاعم والأغذية السريعة (QSR) سلوكيات وظيفية متباينة تماماً من الأجبان؛ فبينما تتطلب شرائح البرجر انصهاراً ولمعاناً فورياً، تتطلب أصابع الجبن المقلية وحشوات الفطائر ثباتاً ومقاومة تامة للانصهار عند 180 مئوية.',
        'يقوم علماء التطبيقات في AWA بتركيب أنظمة الأجبان البديلة باستخدام أملاح توركفوس المخصصة، مع ضبط دقيق لنسبة أحادي الفوسفات إلى متعدد الفوسفات.',
        'من خلال التحكم الدقيق في ترطيب البروتين والترابط الأيوني، نصمم قواماً يمنع نزف الزيت تحت مصابيح التدفئة بالمطاعم، مع توفير المطاطية المرنة المثالية لرواد صناعة البيتزا.'
      ],
      takeaways: [
        'Precision control over oil-release and blistering in conveyorized pizza ovens.',
        'Tailored firmness for industrial high-speed slicing without blade gumming.',
        'Cost-engineered vegetable fat systems reducing ingredient bills by up to 30%.'
      ],
      takeawaysAr: [
        'تحكم دقيق في نزف الزيت ودرجة تحمير الفقاعات في أفران البيتزا النفقية.',
        'صلابة متوازنة تمنع تراكم الجبن على سكاكين التقطيع الآلية فائقة السرعة.',
        'أنظمة دهون نباتية اقتصادية تقلل تكلفة الخامات بنسبة تصل إلى 30%.'
      ]
    },
    {
      id: 'fssc-halal-compliance',
      category: 'quality',
      categoryLabel: 'Food Safety & Compliance',
      categoryLabelAr: 'سلامة الأغذية والشهادات',
      title: 'FSSC 22000 & Halal Compliance: Navigating Stringent Food Safety Norms Across Global Export Corridors',
      titleAr: 'شهادة FSSC 22000 والامتثال لمعايير الحلال: إدارة متطلبات سلامة الغذاء عبر ممرات التصدير الدولية',
      excerpt: 'How robust traceability, allergen validation, and certified religious compliance enable friction-free cross-border ingredient trade.',
      excerptAr: 'كيف تضمن التتبع الكامل للمسار وفحص مسببات الحساسية والاعتماد الديني الموثق تدفقاً تجارياً سلساً للصادرات الغذائية.',
      readTime: '4 min read',
      date: 'August 2026',
      author: 'Corporate Quality Assurance Directorate',
      authorAr: 'إدارة توكيد الجودة المؤسسية',
      image: v9Assets.v8Assets['technical-certs'] || v9Assets.v7Assets.factory,
      content: [
        'Food safety and regulatory compliance are no longer peripheral check-boxes; they are the fundamental license to operate in multinational food manufacturing.',
        'AWA Group’s facilities in Borg El-Arab adhere to the Global Food Safety Initiative (GFSI) recognized FSSC 22000 Version 6 scheme, implementing validated allergen separation, microbiological pathogen surveillance, and full digital raw-material lot traceability.',
        'Furthermore, our dedicated Halal compliance protocols are authenticated by globally recognized Islamic certification boards, providing complete peace of mind for multinational FMCG brands serving the GCC, Southeast Asia, and African markets.'
      ],
      contentAr: [
        'لم تعد سلامة الأغذية والامتثال الرقابي مجرد إجراءات شكلية، بل أصبحت الشرط الجوهري والأساسي للعمل مع كبرى شركات تصنيع الأغذية متعددة الجنسيات.',
        'تلتزم مصانع مجموعة AWA في برج العرب بمعايير مبادرة سلامة الأغذية العالمية (GFSI) وفق نظام FSSC 22000 الإصدار السادس، مع تطبيق فصل صارم لمسببات الحساسية، ورصد ميكروبيولوجي دقيق، وتتبع رقمي كامل للتشغيلات.',
        'إضافة إلى ذلك، تخضع بروتوكولات الحلال لدينا للاعتماد والتوثيق من كبرى الهيئات الإسلامية المعترف بها دولياً، مما يضمن ثقة كاملة للعلامات التجارية العالمية الموجهة للخليج وجنوب شرق آسيا وأفريقيا.'
      ],
      takeaways: [
        'Full lot traceability from incoming principal raw material to finished customer delivery.',
        'Dedicated allergen-controlled production suites preventing cross-contact contamination.',
        'Certified compliance enabling friction-free customs clearance across GCC and Arab League ports.'
      ],
      takeawaysAr: [
        'تتبع رقمي دقيق للتشغيلات من وصول المواد الخام وحتى تسليم المنتج للعميل.',
        'خطوط إنتاج معزولة لمسببات الحساسية تمنع أي تلوث تبادلي.',
        'شهادات معتمدة تضمن تخليصاً جمركياً سريعاً وبلا عوائق في موانئ الخليج والدول العربية.'
      ]
    }
  ];

  const filteredArticles = articles.filter(a => {
    const matchesCat = activeCategory === 'all' || a.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      (isAr ? a.titleAr.toLowerCase().includes(searchQuery.toLowerCase()) : a.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (isAr ? a.excerptAr.toLowerCase().includes(searchQuery.toLowerCase()) : a.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const featured = articles[0];

  return (
    <>
      <SEO
        title={isAr ? 'منصة المعرفة والأبحاث والأخبار التقنية | مجموعة AWA' : 'Knowledge Hub, Insights & Industry News | AWA Group'}
        description={isAr
          ? 'منصة المعرفة والأخبار التقنية لمجموعة AWA: أوراق بحثية متخصصة في تكنولوجيا الأغذية، وأملاح الاستحلاب، وبدائل السكر، وتطورات الشراكات الاستراتيجية.'
          : 'AWA Group Knowledge Hub: Technical whitepapers, food formulation science, sugar reduction research, and strategic joint venture corporate announcements.'}
        path="/knowledge"
      />

      <div className="knowledge-page" style={{ background: '#FFFFFF' }}>
        {/* HERO SECTION */}
        <section className="page-hero page-hero--visual" style={{ background: '#0B131E' }}>
          <div className="page-hero-media" style={{ opacity: 0.25 }}>
            <img 
              src={v9Assets.v8Assets['rd-lab']} 
              alt="AWA Knowledge Hub & Technical Insights" 
              loading="eager" 
            />
          </div>
          <div className="wrap page-hero-content" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div className="breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '14px', marginBottom: '1.5rem' }}>
              <Link to="/" style={{ color: '#E2E8F0', textDecoration: 'none' }}>{isAr ? 'الرئيسية' : 'Home'}</Link>
              <span>›</span>
              <span style={{ color: '#00A84F', fontWeight: 600 }}>{isAr ? 'الأخبار والمقالات المعرفية' : 'Insights & News'}</span>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(0, 168, 79, 0.15)', border: '1px solid rgba(0, 168, 79, 0.35)', padding: '6px 14px', borderRadius: '100px', marginBottom: '1.5rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00A84F' }} />
              <span style={{ color: '#4ADE80', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {isAr ? 'المركز المعرفي والتقني · مجموعة AWA' : 'KNOWLEDGE HUB & TECHNICAL BRIEFINGS'}
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.5rem)', color: '#FFFFFF', fontWeight: 800, margin: 0, lineHeight: 1.15, marginBottom: '1.25rem' }}>
              {isAr ? 'أفكار علمية، وتطورات، ' : 'Ideas, developments and '}
              <span style={{ color: '#00A84F' }}>{isAr ? 'ورؤى صناعية متعمقة.' : 'industry insight.'}</span>
            </h1>

            <p style={{ color: '#CBD5E1', fontSize: 'clamp(1.05rem, 1.2vw, 1.2rem)', lineHeight: 1.7, maxWidth: '720px', marginBottom: '2rem' }}>
              {isAr
                ? 'منصة متخصصة تضع خبرات علم الأغذية، وأبحاث التطبيقات المعملية، والتطورات المؤسسية بين يدي مصنعي الأغذية والمشروبات في المنطقة.'
                : 'A dedicated platform sharing empirical food science research, application pilot trials, formulation breakthroughs, and corporate developments with industrial food processors.'}
            </p>

            {/* SEARCH & FILTERS BAR */}
            <div style={{ maxWidth: '640px', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '12px', padding: '10px 16px' }}>
                <Search size={18} style={{ color: '#94A3B8', marginInlineEnd: '10px' }} />
                <input
                  type="text"
                  placeholder={isAr ? 'ابحث في المقالات والأبحاث (مثل: فوسفات، سكر، جبن، FSSC)...' : 'Search technical insights (e.g., phosphate, sugar reduction, cheese, FSSC)...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#FFFFFF',
                    width: '100%',
                    fontSize: '14px'
                  }}
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    style={{ background: 'transparent', border: 'none', color: '#94A3B8', cursor: 'pointer' }}
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORY FILTER TABS */}
        <section style={{ borderBottom: '1px solid #E2E8F0', background: '#F8FAFC', padding: '1rem 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: '8px', overflowX: 'auto' }}>
            {[
              { id: 'all', label: isAr ? 'جميع الرؤى والأخبار' : 'All Insights & News' },
              { id: 'formulation', label: isAr ? 'علم التركيبات والبحث والتطوير' : 'Formulation Science' },
              { id: 'corporate', label: isAr ? 'الشراكات والمشاريع' : 'Corporate & JVs' },
              { id: 'trends', label: isAr ? 'الملصق النظيف والاتجاهات' : 'Market Trends & Innovation' },
              { id: 'quality', label: isAr ? 'سلامة الغذاء والجودة' : 'Food Safety & Compliance' },
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '100px',
                  border: activeCategory === tab.id ? '1px solid #00A84F' : '1px solid #E2E8F0',
                  background: activeCategory === tab.id ? '#00A84F' : '#FFFFFF',
                  color: activeCategory === tab.id ? '#FFFFFF' : '#475569',
                  fontWeight: 700,
                  fontSize: '13px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.15s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* FEATURED STORY HERO (when 'all' is active and no search) */}
        {activeCategory === 'all' && searchQuery === '' && (
          <section style={{ padding: '4rem 0 2rem 0', background: '#FFFFFF' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                  gap: '36px', 
                  border: '1px solid #E2E8F0', 
                  borderRadius: '24px', 
                  overflow: 'hidden',
                  background: '#F8FAFC',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                }}
              >
                <div style={{ minHeight: '340px', position: 'relative' }}>
                  <img 
                    src={featured.image} 
                    alt={featured.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  <div style={{ position: 'absolute', top: '20px', left: isAr ? 'auto' : '20px', right: isAr ? '20px' : 'auto', background: '#0F172A', color: '#FFFFFF', padding: '6px 14px', borderRadius: '100px', fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {isAr ? 'دراسة حالة بارزة' : 'FEATURED CASE STUDY'}
                  </div>
                </div>

                <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '12px', color: '#64748B', marginBottom: '14px' }}>
                    <span style={{ color: '#00A84F', fontWeight: 700, background: 'rgba(0, 168, 79, 0.1)', padding: '3px 10px', borderRadius: '6px' }}>
                      {isAr ? featured.categoryLabelAr : featured.categoryLabel}
                    </span>
                    <span>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={13} /> {featured.readTime}
                    </span>
                    <span>•</span>
                    <span>{featured.date}</span>
                  </div>

                  <h2 style={{ fontSize: 'clamp(1.6rem, 2.2vw, 2.2rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.25, marginBottom: '14px' }}>
                    {isAr ? featured.titleAr : featured.title}
                  </h2>

                  <p style={{ color: '#475569', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
                    {isAr ? featured.excerptAr : featured.excerpt}
                  </p>

                  <div>
                    <button
                      type="button"
                      onClick={() => setSelectedArticle(featured)}
                      style={{
                        background: '#0F172A',
                        color: '#FFFFFF',
                        padding: '12px 24px',
                        borderRadius: '10px',
                        border: 'none',
                        fontWeight: 700,
                        fontSize: '14px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                        transition: 'background 0.2s ease'
                      }}
                    >
                      <span>{isAr ? 'قراءة التحليل بالكامل' : 'Read Full Analysis'}</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ARTICLES GRID */}
        <section style={{ padding: '3.5rem 0 5rem 0', background: '#FFFFFF' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                {isAr ? `المقالات المنشورة (${filteredArticles.length})` : `Published Insights (${filteredArticles.length})`}
              </h3>
              {searchQuery && (
                <span style={{ fontSize: '14px', color: '#64748B' }}>
                  {isAr ? `نتائج البحث عن: "${searchQuery}"` : `Results for: "${searchQuery}"`}
                </span>
              )}
            </div>

            {filteredArticles.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '4rem 0', background: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                <FileText size={40} style={{ color: '#94A3B8', marginBottom: '12px' }} />
                <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>
                  {isAr ? 'لم يتم العثور على مقالات مطابقة' : 'No matching insights found'}
                </h4>
                <p style={{ color: '#64748B', fontSize: '14px', margin: 0 }}>
                  {isAr ? 'جرّب البحث بكلمة مفتاحية مختلفة أو اختر تبويب "جميع الرؤى".' : 'Try searching with a different term or clear the filter.'}
                </p>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '28px' }}>
                {filteredArticles.map(art => (
                  <article
                    key={art.id}
                    onClick={() => setSelectedArticle(art)}
                    style={{
                      border: '1px solid #E2E8F0',
                      borderRadius: '18px',
                      overflow: 'hidden',
                      background: '#FFFFFF',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.06)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)';
                    }}
                  >
                    <div>
                      <div style={{ height: '200px', overflow: 'hidden' }}>
                        <img 
                          src={art.image} 
                          alt={art.title} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        />
                      </div>
                      <div style={{ padding: '24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#64748B', marginBottom: '10px' }}>
                          <span style={{ color: '#00A84F', fontWeight: 700, background: 'rgba(0, 168, 79, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                            {isAr ? art.categoryLabelAr : art.categoryLabel}
                          </span>
                          <span>•</span>
                          <span>{art.readTime}</span>
                        </div>

                        <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', lineHeight: 1.35, marginBottom: '10px' }}>
                          {isAr ? art.titleAr : art.title}
                        </h4>

                        <p style={{ color: '#64748B', fontSize: '13.5px', lineHeight: 1.6, margin: 0 }}>
                          {isAr ? art.excerptAr : art.excerpt}
                        </p>
                      </div>
                    </div>

                    <div style={{ padding: '16px 24px', borderTop: '1px solid #F1F5F9', background: '#FAFAFA', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 600 }}>
                        {art.date}
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: '#00A84F' }}>
                        <span>{isAr ? 'قراءة التحليل' : 'Read Analysis'}</span>
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* FULL ARTICLE DETAIL MODAL / DRAWER */}
        {selectedArticle && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(15, 23, 42, 0.75)',
              backdropFilter: 'blur(4px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
            onClick={() => setSelectedArticle(null)}
          >
            <div 
              style={{
                background: '#FFFFFF',
                width: '100%',
                maxWidth: '840px',
                maxHeight: '90vh',
                borderRadius: '24px',
                overflowY: 'auto',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: isAr ? 'auto' : '20px',
                  left: isAr ? '20px' : 'auto',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(15, 23, 42, 0.6)',
                  color: '#FFFFFF',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10
                }}
              >
                <X size={18} />
              </button>

              <div style={{ height: '280px', position: 'relative' }}>
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div style={{ position: 'absolute', bottom: '20px', left: isAr ? 'auto' : '24px', right: isAr ? '24px' : 'auto', background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(4px)', color: '#FFFFFF', padding: '6px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: 700 }}>
                  {isAr ? selectedArticle.categoryLabelAr : selectedArticle.categoryLabel} • {selectedArticle.date}
                </div>
              </div>

              <div style={{ padding: '36px' }}>
                <h2 style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.25, marginBottom: '16px' }}>
                  {isAr ? selectedArticle.titleAr : selectedArticle.title}
                </h2>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderBottom: '1px solid #E2E8F0', paddingBottom: '18px', marginBottom: '24px', color: '#64748B', fontSize: '13px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <User size={15} />
                    <span>{isAr ? selectedArticle.authorAr : selectedArticle.author}</span>
                  </div>
                  <span>•</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Clock size={15} />
                    <span>{selectedArticle.readTime}</span>
                  </div>
                </div>

                <div style={{ color: '#334155', fontSize: '16px', lineHeight: 1.8, marginBottom: '32px' }}>
                  {(isAr ? selectedArticle.contentAr : selectedArticle.content).map((paragraph, pIdx) => (
                    <p key={pIdx} style={{ marginBottom: '18px' }}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* KEY TAKEAWAYS BOX */}
                <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '24px', marginBottom: '32px' }}>
                  <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Sparkles size={18} style={{ color: '#00A84F' }} />
                    <span>{isAr ? 'الخلاصات التقنية الرئيسية للمصنعين' : 'Key Technical Takeaways for Processors'}</span>
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {(isAr ? selectedArticle.takeawaysAr : selectedArticle.takeaways).map((t, tIdx) => (
                      <li key={tIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#475569', lineHeight: 1.5 }}>
                        <CheckCircle2 size={16} style={{ color: '#00A84F', flexShrink: 0, marginTop: '3px' }} />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* MODAL ACTION BAR */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', borderTop: '1px solid #E2E8F0', paddingTop: '24px' }}>
                  <Link
                    to={`/contact?type=insight&ref=${encodeURIComponent(selectedArticle.id)}`}
                    style={{
                      background: '#00A84F',
                      color: '#FFFFFF',
                      padding: '12px 24px',
                      borderRadius: '10px',
                      fontWeight: 700,
                      fontSize: '14px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      textDecoration: 'none'
                    }}
                  >
                    <span>{isAr ? 'طلب عينات أو استشارة حول هذا البحث ↗' : 'Request Samples or Formulation Assistance ↗'}</span>
                    <ArrowRight size={15} />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setSelectedArticle(null)}
                    style={{
                      background: '#F1F5F9',
                      border: 'none',
                      color: '#475569',
                      padding: '12px 20px',
                      borderRadius: '10px',
                      fontWeight: 600,
                      fontSize: '14px',
                      cursor: 'pointer'
                    }}
                  >
                    {isAr ? 'إغلاق' : 'Close'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* NEWSLETTER STRIP */}
        <section style={{ padding: '4.5rem 0', background: '#0F172A', color: '#FFFFFF' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '30px' }}>
            <div>
              <span style={{ color: '#00A84F', fontWeight: 800, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {isAr ? 'النشرة العلمية والتقنية' : 'AWA TECHNICAL DIGEST'}
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)', fontWeight: 800, color: '#FFFFFF', marginTop: '10px', marginBottom: '8px' }}>
                {isAr ? 'ابق على اطلاع بأحدث أوراق علم الأغذية والتركيبات' : 'Stay Ahead of Food Science & Formulation Trends'}
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '15px', maxWidth: '600px', lineHeight: 1.6, margin: 0 }}>
                {isAr
                  ? 'اشترك لتلقي ملخصات الأبحاث الدورية، وتحديثات أملاح توركفوس وأنظمة إنجريفا الوظيفية مباشرة في بريدك.'
                  : 'Subscribe to receive verified technical whitepapers, formulation guides, and regulatory briefs delivered directly to your inbox.'}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '10px', maxWidth: '440px', width: '100%' }}>
              <input 
                type="email" 
                placeholder={isAr ? 'أدخل بريدك المهني...' : 'Enter your corporate email...'} 
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  outline: 'none',
                  fontSize: '14px'
                }}
              />
              <button
                type="button"
                onClick={() => alert(isAr ? 'شكراً لاشتراكك في النشرة الفنية لـ AWA!' : 'Thank you for subscribing to AWA Technical Briefings!')}
                style={{
                  background: '#00A84F',
                  color: '#FFFFFF',
                  padding: '12px 20px',
                  borderRadius: '10px',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '14px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {isAr ? 'اشتراك' : 'Subscribe'}
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
