// Enhanced translation system for static HTML site
(function() {
  const LANG_KEY = 'siteLang';
  const DEFAULT_LANG = 'en';
  let translations = {};
  let currentLang = DEFAULT_LANG;

  // Translation data (could also be loaded from external JSON)
   // Translation data
  const translationData = {
    "en": {
      "logoAlt": "Vendoora Logo",
      "navHome": "Home",
      "navEcommerce": "E-Commerce",
      "navNew": "NEW",
      "navPricing": "Pricing",
      "navToolsAI": "Tools AI",
      "navBlog": "Blog",
      "navAbout": "About us",
      "navStoreBuilder": "Online Store Builder",
      "navTraining": "Online Training - Coming Soon",
      "loginButton": "Login",
      "currentLanguage": "English",
      "langArabic": "العربية",
      "langEnglish": "English",
      "langFrench": "Français",
      "langTurkish": "Türkçe",
      "menuToggle": "Menu",
      "createStoreButton": "Create Online Store",
      "getStartedButtonText": "Create Online Store",
      "whyChoose": "Why Choose",
      "vendoora": "Vendoora?",
      "feature1Icon": "Flexible Store Builder",
      "feature2Icon": "Built-in Artificial Intelligence",
      "feature3Icon": "Integrated Payment & Shipping",
      "learnMore": "Learn More",
      "ctaDesc": "Join thousands of successful businesses already using Vendoora",
      "ctaButtonText": "Create Your Store Now - It's Free!",
      "footerLogoIcon": "V",
      "footerBlog2": "Blog",
      "footerContact": "Contact Info",
      "footerAddress": "Lahore, Punjab, Pakistan",
      "footerEmail": "info@vendoora.com",
      "footerPhone": "+92 300 1234567",
      "footerNewsletterInput": "Your email address",
      "footerNewsletterBtn": "Subscribe",
      "footerCredit": "Coding with ♥ by",
      "heroTitle": "Create your online store &<br>Start selling today!",
      "heroDescription": "The quickest way to start selling online. Backed up with every tool you might need to succeed.",
      "getStartedButton": "Create Online Store",
      "feature1Title": "Flexible Store Builder",
      "feature1Desc": "Ready-to-use, customizable templates with intuitive drag & drop interface. Support for multiple languages including Arabic, Turkish, and French.",
      "feature2Title": "Built-in Artificial Intelligence",
      "feature2Desc": "Automatic product description generation, AI-generated promotional images, and smart sales analytics to boost your conversion rates.",
      "feature3Title": "Integrated Payment & Shipping",
      "feature3Desc": "Support for local and international payment gateways and shipping services in Algeria, Turkey, and worldwide with real-time tracking.",
      "step1Title": "Create Your Account",
      "step1Desc": "Sign up for free in just 30 seconds with your email or social media accounts. No credit card required to get started.",
      "step2Title": "Choose Your Template",
      "step2Desc": "Browse our collection of 50+ professionally designed templates crafted for different industries and customize to match your brand.",
      "step3Title": "Add Your Products",
      "step3Desc": "Upload products individually or in bulk. Our AI can help generate compelling descriptions and suggest optimal pricing strategies.",
      "step4Title": "Set Up Payments",
      "step4Desc": "Connect your preferred payment methods from our supported gateways including credit cards, PayPal, and local payment options.",
      "step5Title": "Configure Shipping",
      "step5Desc": "Set up shipping rules, rates, and connect with local or international shipping providers for seamless order fulfillment.",
      "step6Title": "Launch & Promote",
      "step6Desc": "Publish your store with one click and use our built-in marketing tools to drive traffic and convert visitors into customers.",
      "ctaTitle": "Ready to Start Selling Online?",
      "ctaSubtitle": "Join thousands of successful businesses already using Vendoora",
      "ctaButton": "Create Your Store Now - It's Free!",
      "ctaNote": "No credit card required • Free plan available • Cancel anytime",
      "footerAbout": "Vendoora wants you to spend less time staring at a screen and use more of your time growing your business. Create your online store in minutes with powerful AI tools and seamless integrations.",
      "footerCompany": "Company",
      "footerHome": "Home Page",
      "footerAboutUs": "About Us",
      "footerEcommerce": "E-commerce",
      "footerPricing": "Pricing",
      "footerBlog": "Blog",
      "footerSupport": "Support",
      "footerCareer": "Career",
      "footerAffiliates": "Affiliates",
      "footerFAQ": "FAQ",
      "footerTerms": "Terms",
      "footerSecurity": "Security",
      "footerResources": "Resources",
      "footerHelpCenter": "Help Center",
      "footerMadeWith": "Made with Vendoora",
      "footerTutorials": "Tutorials",
      "footerAPIDocs": "API Docs",
      "footerNewsletter": "Newsletter",
      "footerNewsletterDesc": "Subscribe to our newsletter for the latest updates and special offers.",
      "footerCopyright": "Copyright © Vendoora 2025 - All Rights Reserved",
      "footerDesigner": "Coding with ♥ by Zouraiz",
       "logoAlt": "Vendoora Logo",
    "loginTitle": "Welcome back!",
    "loginPrompt": "Don't have an account?",
    "signupLink": "Sign up",
    "googleButton": "Continue with Google",
    "orDivider": "or",
    "emailLabel": "Email",
    "emailPlaceholder": "Enter your email",
    "passwordLabel": "Password",
    "passwordPlaceholder": "Enter your password",
    "forgotPassword": "Forgot password?",
    "loginButton": "Login",
    "noAccountPrompt": "Don't have an account?",
    "signupLink2": "Sign up here",
    "signupTitle": "Create Account",
    "haveAccountPrompt": "Already have an account?",
    "loginLink": "Login",
    "firstNameLabel": "First name",
    "firstNamePlaceholder": "First name",
    "lastNameLabel": "Last name",
    "lastNamePlaceholder": "Last name",
    "phoneLabel": "Phone",
    "phonePlaceholder": "Enter phone number",
    "customCodePlaceholder": "+Code",
    "createPasswordPlaceholder": "Create a password",
    "confirmPasswordLabel": "Confirm Password",
    "confirmPasswordPlaceholder": "Confirm your password",
    "createAccountButton": "Create Account",
    "haveAccountPrompt2": "Already have an account?",
    "loginLink2": "Login here",
    "resetPasswordTitle": "Reset Password",
    "resetPasswordPrompt": "Enter your email to receive a reset link",
    "sendResetLinkButton": "Send Reset Link",
    "rememberPasswordPrompt": "Remember your password?",
    "loginLink3": "Login here",
    "currentLanguage": "EN",
    "langArabic": "العربية",
    "langEnglish": "English",
    "langFrench": "Français",
    "langTurkish": "Türkçe"
      
    },
    "ar": {
      "logoAlt": "شعار Vendoora",
      "navHome": "الصفحة الرئيسية",
      "navEcommerce": "التجارة الإلكترونية",
      "navNew": "جديد",
      "navPricing": "التسعير",
      "navToolsAI": "أدوات الذكاء الاصطناعي",
      "navBlog": "المدونة",
      "navAbout": "من نحن",
      "navStoreBuilder": "منشئ متجر إلكتروني",
      "navTraining": "تدريب عبر الإنترنت - قريبًا",
      "loginButton": "تسجيل الدخول",
      "currentLanguage": "English",
      "langArabic": "العربية",
      "langEnglish": "الإنجليزية",
      "langFrench": "الفرنسية",
      "langTurkish": "التركية",
      "menuToggle": "القائمة",
      "createStoreButton": "إنشاء متجر إلكتروني",
      "getStartedButtonText": "إنشاء متجر إلكتروني",
      "whyChoose": "لماذا تختار",
      "vendoora": "Vendoora؟",
      "feature1Icon": "منشئ متجر مرن",
      "feature2Icon": "ذكاء اصطناعي مدمج",
      "feature3Icon": "مدفوعات وشحن متكامل",
      "learnMore": "تعلم المزيد",
      "ctaDesc": "انضم إلى آلاف الشركات الناجحة التي تستخدم بالفعل Vendoora",
      "ctaButtonText": "أنشئ متجرك الآن - مجانًا!",
      "footerLogoIcon": "V",
      "footerBlog2": "المدونة",
      "footerContact": "معلومات الاتصال",
      "footerAddress": "لاهور، البنجاب، باكستان",
      "footerEmail": "info@vendoora.com",
      "footerPhone": "+92 300 1234567",
      "footerNewsletterInput": "عنوان بريدك الإلكتروني",
      "footerNewsletterBtn": "اشتراك",
      "footerCredit": "برمجة مع ♥ بواسطة",
      "heroTitle": "أنشئ متجرك الإلكتروني<br>وابدأ البيع اليوم!",
      "heroDescription": "أسرع طريقة لبدء البيع عبر الإنترنت. مدعوم بكل الأدوات التي قد تحتاجها للنجاح.",
      "getStartedButton": "إنشاء متجر إلكتروني",
      "feature1Title": "منشئ متجر مرن",
      "feature1Desc": "قوالب جاهزة للاستخدام وقابلة للتخصيص مع واجهة سهلة الاستخدام. يدعم لغات متعددة بما في ذلك العربية والتركية والفرنسية.",
      "feature2Title": "ذكاء اصطناعي مدمج",
      "feature2Desc": "إنشاء أوصاف المنتجات تلقائيًا، صور ترويجية من الذكاء الاصطناعي، وتحليلات مبيعات ذكية لتعزيز معدلات التحويل.",
      "feature3Title": "مدفوعات وشحن متكامل",
      "feature3Desc": "دعم لبوابات الدفع المحلية والدولية وخدمات الشحن في الجزائر وتركيا وفي جميع أنحاء العالم مع تتبع في الوقت الحقيقي.",
      "step1Title": "إنشاء حسابك",
      "step1Desc": "سجل مجانًا في 30 ثانية فقط باستخدام بريدك الإلكتروني أو حسابات التواصل الاجتماعي. لا حاجة لبطاقة ائتمان للبدء.",
      "step2Title": "اختر القالب الخاص بك",
      "step2Desc": "تصفح مجموعتنا المكونة من 50+ قالبًا مصممًا بشكل احترافي لمختلف الصناعات وقم بتخصيصه ليتناسب مع علامتك التجارية.",
      "step3Title": "أضف منتجاتك",
      "step3Desc": "قم بتحميل المنتجات بشكل فردي أو مجمعة. يمكن للذكاء الاصطناعي المساعدة في إنشاء أوصاف جذابة واقتراح استراتيجيات تسعير مثالية.",
      "step4Title": "إعداد المدفوعات",
      "step4Desc": "قم بتوصيل طرق الدفع المفضلة لديك من بوابات الدفع المدعومة بما في ذلك بطاقات الائتمان وباي بال وخيارات الدفع المحلية.",
      "step5Title": "تكوين الشحن",
      "step5Desc": "قم بإعداد قواعد الشحن والأسعار وتوصيل مزودي الشحن المحليين أو الدوليين لتنفيذ الطلبات بسلاسة.",
      "step6Title": "الإطلاق والترويج",
      "step6Desc": "انشر متجرك بنقرة واحدة واستخدم أدوات التسويق المدمجة لجذب الزوار وتحويلهم إلى عملاء.",
      "ctaTitle": "هل أنت مستعد لبدء البيع عبر الإنترنت؟",
      "ctaSubtitle": "انضم إلى آلاف الشركات الناجحة التي تستخدم بالفعل Vendoora",
      "ctaButton": "أنشئ متجرك الآن - مجانًا!",
      "ctaNote": "لا حاجة لبطاقة ائتمان • خطة مجانية متاحة • إلغاء في أي وقت",
      "footerAbout": "تريد Vendoora أن تقضي وقتًا أقل في التحديق في الشاشة وتستثمر المزيد من وقتك في تنمية عملك. أنشئ متجرك الإلكتروني في دقائق باستخدام أدوات الذكاء الاصطناعي القوية والتكاملات السلسة.",
      "footerCompany": "الشركة",
      "footerHome": "الصفحة الرئيسية",
      "footerAboutUs": "من نحن",
      "footerEcommerce": "التجارة الإلكترونية",
      "footerPricing": "التسعير",
      "footerBlog": "المدونة",
      "footerSupport": "الدعم",
      "footerCareer": "الوظائف",
      "footerAffiliates": "الشركاء",
      "footerFAQ": "الأسئلة الشائعة",
      "footerTerms": "الشروط",
      "footerSecurity": "الأمان",
      "footerResources": "الموارد",
      "footerHelpCenter": "مركز المساعدة",
      "footerMadeWith": "مصنوع باستخدام Vendoora",
      "footerTutorials": "الدروس",
      "footerAPIDocs": "وثائق API",
      "footerNewsletter": "النشرة الإخبارية",
      "footerNewsletterDesc": "اشترك في نشرتنا الإخبارية للحصول على آخر التحديثات والعروض الخاصة.",
      "footerCopyright": "حقوق النشر © Vendoora 2025 - جميع الحقوق محفوظة",
      "footerDesigner": "برمجة مع ♥ بواسطة زوريز",
      
    "logoAlt": "شعار Vendoora",
    "loginTitle": "مرحبًا بعودتك!",
    "loginPrompt": "ليس لديك حساب؟",
    "signupLink": "تسجيل",
    "googleButton": "المتابعة مع جوجل",
    "orDivider": "أو",
    "emailLabel": "البريد الإلكتروني",
    "emailPlaceholder": "أدخل بريدك الإلكتروني",
    "passwordLabel": "كلمة المرور",
    "passwordPlaceholder": "أدخل كلمة المرور",
    "forgotPassword": "نسيت كلمة المرور؟",
    "loginButton": "تسجيل الدخول",
    "noAccountPrompt": "ليس لديك حساب؟",
    "signupLink2": "سجل هنا",
    "signupTitle": "إنشاء حساب",
    "haveAccountPrompt": "هل لديك حساب بالفعل؟",
    "loginLink": "تسجيل الدخول",
    "firstNameLabel": "الاسم الأول",
    "firstNamePlaceholder": "الاسم الأول",
    "lastNameLabel": "الاسم الأخير",
    "lastNamePlaceholder": "الاسم الأخير",
    "phoneLabel": "الهاتف",
    "phonePlaceholder": "أدخل رقم الهاتف",
    "customCodePlaceholder": "+رمز",
    "createPasswordPlaceholder": "إنشاء كلمة مرور",
    "confirmPasswordLabel": "تأكيد كلمة المرور",
    "confirmPasswordPlaceholder": "تأكيد كلمة المرور",
    "createAccountButton": "إنشاء حساب",
    "haveAccountPrompt2": "هل لديك حساب بالفعل؟",
    "loginLink2": "تسجيل الدخول هنا",
    "resetPasswordTitle": "إعادة تعيين كلمة المرور",
    "resetPasswordPrompt": "أدخل بريدك الإلكتروني لاستلام رابط إعادة التعيين",
    "sendResetLinkButton": "إرسال رابط إعادة التعيين",
    "rememberPasswordPrompt": "تذكرت كلمة المرور؟",
    "loginLink3": "تسجيل الدخول هنا",
    "currentLanguage": "AR",
    "langArabic": "العربية",
    "langEnglish": "الإنجليزية",
    "langFrench": "الفرنسية",
    "langTurkish": "التركية"

    },
    "fr": {
      "logoAlt": "Logo Vendoora",
      "navHome": "Accueil",
      "navEcommerce": "E-Commerce",
      "navNew": "NOUVEAU",
      "navPricing": "Tarification",
      "navToolsAI": "Outils IA",
      "navBlog": "Blog",
      "navAbout": "À propos",
      "navStoreBuilder": "Créateur de boutique en ligne",
      "navTraining": "Formation en ligne - Bientôt disponible",
      "loginButton": "Connexion",
      "currentLanguage": "English",
      "langArabic": "Arabe",
      "langEnglish": "Anglais",
      "langFrench": "Français",
      "langTurkish": "Turc",
      "menuToggle": "Menu",
      "createStoreButton": "Créer une boutique en ligne",
      "getStartedButtonText": "Créer une boutique en ligne",
      "whyChoose": "Pourquoi choisir",
      "vendoora": "Vendoora ?",
      "feature1Icon": "Constructeur de boutique flexible",
      "feature2Icon": "Intelligence artificielle intégrée",
      "feature3Icon": "Paiement et livraison intégrés",
      "learnMore": "En savoir plus",
      "ctaDesc": "Rejoignez des milliers d'entreprises prospères qui utilisent déjà Vendoora",
      "ctaButtonText": "Créez votre boutique maintenant - C'est gratuit !",
      "footerLogoIcon": "V",
      "footerBlog2": "Blog",
      "footerContact": "Informations de contact",
      "footerAddress": "Lahore, Punjab, Pakistan",
      "footerEmail": "info@vendoora.com",
      "footerPhone": "+92 300 1234567",
      "footerNewsletterInput": "Votre adresse email",
      "footerNewsletterBtn": "S'abonner",
      "footerCredit": "Codé avec ♥ par",
      "heroTitle": "Créez votre boutique en ligne et<br>commencez à vendre dès aujourd'hui !",
      "heroDescription": "Le moyen le plus rapide de commencer à vendre en ligne. Soutenu par tous les outils dont vous pourriez avoir besoin pour réussir.",
      "getStartedButton": "Créer une boutique en ligne",
      "feature1Title": "Constructeur de boutique flexible",
      "feature1Desc": "Modèles prêts à l'emploi et personnalisables avec une interface intuitive de glisser-déposer. Prise en charge de plusieurs langues dont l'arabe, le turc et le français.",
      "feature2Title": "Intelligence artificielle intégrée",
      "feature2Desc": "Génération automatique de descriptions de produits, images promotionnelles générées par IA et analyses de ventes intelligentes pour booster vos taux de conversion.",
      "feature3Title": "Paiement et livraison intégrés",
      "feature3Desc": "Prise en charge des passerelles de paiement locales et internationales et des services de livraison en Algérie, en Turquie et dans le monde entier avec suivi en temps réel.",
      "step1Title": "Créez votre compte",
      "step1Desc": "Inscrivez-vous gratuitement en seulement 30 secondes avec votre email ou vos comptes de réseaux sociaux. Aucune carte de crédit requise pour commencer.",
      "step2Title": "Choisissez votre modèle",
      "step2Desc": "Parcourez notre collection de plus de 50 modèles conçus par des professionnels pour différents secteurs et personnalisez-les pour correspondre à votre marque.",
      "step3Title": "Ajoutez vos produits",
      "step3Desc": "Téléchargez des produits individuellement ou en masse. Notre IA peut aider à générer des descriptions attrayantes et suggérer des stratégies de tarification optimales.",
      "step4Title": "Configurez les paiements",
      "step4Desc": "Connectez vos méthodes de paiement préférées parmi nos passerelles prises en charge, y compris les cartes de crédit, PayPal et les options de paiement locales.",
      "step5Title": "Configurez la livraison",
      "step5Desc": "Définissez les règles et tarifs de livraison et connectez-vous avec des prestataires de livraison locaux ou internationaux pour un traitement transparent des commandes.",
      "step6Title": "Lancez et promouvez",
      "step6Desc": "Publiez votre boutique en un clic et utilisez nos outils marketing intégrés pour attirer du trafic et convertir les visiteurs en clients.",
      "ctaTitle": "Prêt à commencer à vendre en ligne ?",
      "ctaSubtitle": "Rejoignez des milliers d'entreprises prospères qui utilisent déjà Vendoora",
      "ctaButton": "Créez votre boutique maintenant - C'est gratuit !",
      "ctaNote": "Aucune carte de crédit requise • Plan gratuit disponible • Annulez à tout moment",
      "footerAbout": "Vendoora veut que vous passiez moins de temps à regarder un écran et plus de temps à développer votre entreprise. Créez votre boutique en ligne en quelques minutes avec des outils d'IA puissants et des intégrations transparentes.",
      "footerCompany": "Entreprise",
      "footerHome": "Page d'accueil",
      "footerAboutUs": "À propos de nous",
      "footerEcommerce": "E-commerce",
      "footerPricing": "Tarification",
      "footerBlog": "Blog",
      "footerSupport": "Support",
      "footerCareer": "Carrières",
      "footerAffiliates": "Affiliés",
      "footerFAQ": "FAQ",
      "footerTerms": "Conditions",
      "footerSecurity": "Sécurité",
      "footerResources": "Ressources",
      "footerHelpCenter": "Centre d'aide",
      "footerMadeWith": "Fait avec Vendoora",
      "footerTutorials": "Tutoriels",
      "footerAPIDocs": "Documentation API",
      "footerNewsletter": "Newsletter",
      "footerNewsletterDesc": "Abonnez-vous à notre newsletter pour les dernières mises à jour et offres spéciales.",
      "footerCopyright": "Copyright © Vendoora 2025 - Tous droits réservés",
      "footerDesigner": "Codé avec ♥ par Zouraiz",
      
    "logoAlt": "Logo Vendoora",
    "loginTitle": "Content de vous revoir!",
    "loginPrompt": "Vous n'avez pas de compte?",
    "signupLink": "S'inscrire",
    "googleButton": "Continuer avec Google",
    "orDivider": "ou",
    "emailLabel": "Email",
    "emailPlaceholder": "Entrez votre email",
    "passwordLabel": "Mot de passe",
    "passwordPlaceholder": "Entrez votre mot de passe",
    "forgotPassword": "Mot de passe oublié?",
    "loginButton": "Connexion",
    "noAccountPrompt": "Vous n'avez pas de compte?",
    "signupLink2": "Inscrivez-vous ici",
    "signupTitle": "Créer un compte",
    "haveAccountPrompt": "Vous avez déjà un compte?",
    "loginLink": "Connexion",
    "firstNameLabel": "Prénom",
    "firstNamePlaceholder": "Prénom",
    "lastNameLabel": "Nom de famille",
    "lastNamePlaceholder": "Nom de famille",
    "phoneLabel": "Téléphone",
    "phonePlaceholder": "Entrez votre numéro de téléphone",
    "customCodePlaceholder": "+Code",
    "createPasswordPlaceholder": "Créer un mot de passe",
    "confirmPasswordLabel": "Confirmer le mot de passe",
    "confirmPasswordPlaceholder": "Confirmez votre mot de passe",
    "createAccountButton": "Créer un compte",
    "haveAccountPrompt2": "Vous avez déjà un compte?",
    "loginLink2": "Connectez-vous ici",
    "resetPasswordTitle": "Réinitialiser le mot de passe",
    "resetPasswordPrompt": "Entrez votre email pour recevoir un lien de réinitialisation",
    "sendResetLinkButton": "Envoyer le lien de réinitialisation",
    "rememberPasswordPrompt": "Vous vous souvenez de votre mot de passe?",
    "loginLink3": "Connectez-vous ici",
    "currentLanguage": "FR",
    "langArabic": "Arabe",
    "langEnglish": "Anglais",
    "langFrench": "Français",
    "langTurkish": "Turc"

    },
    "tr": {
      "logoAlt": "Vendoora Logosu",
      "navHome": "Ana Sayfa",
      "navEcommerce": "E-Ticaret",
      "navNew": "YENİ",
      "navPricing": "Fiyatlandırma",
      "navToolsAI": "AI Araçları",
      "navBlog": "Blog",
      "navAbout": "Hakkımızda",
      "navStoreBuilder": "Çevrimiçi Mağaza Oluşturucu",
      "navTraining": "Çevrimiçi Eğitim - Yakında",
      "loginButton": "Giriş Yap",
      "currentLanguage": "English",
      "langArabic": "Arapça",
      "langEnglish": "İngilizce",
      "langFrench": "Fransızca",
      "langTurkish": "Türkçe",
      "menuToggle": "Menü",
      "createStoreButton": "Çevrimiçi Mağaza Oluştur",
      "getStartedButtonText": "Çevrimiçi Mağaza Oluştur",
      "whyChoose": "Neden Seçmelisiniz",
      "vendoora": "Vendoora?",
      "feature1Icon": "Esnek Mağaza Oluşturucu",
      "feature2Icon": "Yerleşik Yapay Zeka",
      "feature3Icon": "Entegre Ödeme ve Nakliye",
      "learnMore": "Daha Fazla Bilgi",
      "ctaDesc": "Zaten Vendoora kullanan binlerce başarılı işletmeye katılın",
      "ctaButtonText": "Mağazanızı Şimdi Oluşturun - Ücretsiz!",
      "footerLogoIcon": "V",
      "footerBlog2": "Blog",
      "footerContact": "İletişim Bilgileri",
      "footerAddress": "Lahor, Pencap, Pakistan",
      "footerEmail": "info@vendoora.com",
      "footerPhone": "+92 300 1234567",
      "footerNewsletterInput": "E-posta adresiniz",
      "footerNewsletterBtn": "Abone Ol",
      "footerCredit": "♥ ile kodlandı",
      "heroTitle": "Çevrimiçi mağazanızı oluşturun ve<br>bugün satışa başlayın!",
      "heroDescription": "Çevrimiçi satışa başlamanın en hızlı yolu. Başarılı olmak için ihtiyacınız olabilecek her araçla desteklenir.",
      "getStartedButton": "Çevrimiçi Mağaza Oluştur",
      "feature1Title": "Esnek Mağaza Oluşturucu",
      "feature1Desc": "Kullanıma hazır, özelleştirilebilir şablonlar ve sürükle bırak arayüzü. Arapça, Türkçe ve Fransızca dahil çoklu dil desteği.",
      "feature2Title": "Yerleşik Yapay Zeka",
      "feature2Desc": "Otomatik ürün açıklaması oluşturma, AI tarafından oluşturulan promosyon görselleri ve dönüşüm oranlarınızı artırmak için akıllı satış analizleri.",
      "feature3Title": "Entegre Ödeme ve Nakliye",
      "feature3Desc": "Cezayir, Türkiye ve dünya çapında yerel ve uluslararası ödeme ağ geçitleri ve gerçek zamanlı takip ile nakliye hizmetleri desteği.",
      "step1Title": "Hesabınızı Oluşturun",
      "step1Desc": "E-posta veya sosyal medya hesaplarınızla sadece 30 saniyede ücretsiz kaydolun. Başlamak için kredi kartı gerekmez.",
      "step2Title": "Şablonunuzu Seçin",
      "step2Desc": "Farklı sektörler için hazırlanmış 50+ profesyonel tasarımlı şablon koleksiyonumuzu göz atın ve markanıza uyacak şekilde özelleştirin.",
      "step3Title": "Ürünlerinizi Ekleyin",
      "step3Desc": "Ürünleri tek tek veya toplu olarak yükleyin. Yapay zekamız etkileyici açıklamalar oluşturmaya ve optimal fiyatlandırma stratejileri önermeye yardımcı olabilir.",
      "step4Title": "Ödemeleri Ayarlayın",
      "step4Desc": "Kredi kartları, PayPal ve yerel ödeme seçenekleri dahil desteklenen ağ geçitlerimizden tercih ettiğiniz ödeme yöntemlerini bağlayın.",
      "step5Title": "Nakliyeyi Yapılandırın",
      "step5Desc": "Nakliye kurallarını ve ücretlerini ayarlayın ve sorunsuz sipariş yerine getirme için yerel veya uluslararası nakliye sağlayıcılarına bağlanın.",
      "step6Title": "Başlatın ve Tanıtın",
      "step6Desc": "Mağazanızı tek tıkla yayınlayın ve yerleşik pazarlama araçlarımızı kullanarak trafik çekin ve ziyaretçileri müşteriye dönüştürün.",
      "ctaTitle": "Çevrimiçi Satış Yapmaya Hazır mısınız?",
      "ctaSubtitle": "Zaten Vendoora kullanan binlerce başarılı işletmeye katılın",
      "ctaButton": "Mağazanızı Şimdi Oluşturun - Ücretsiz!",
      "ctaNote": "Kredi kartı gerekmez • Ücretsiz plan mevcut • İstediğiniz zaman iptal edin",
      "footerAbout": "Vendoora, ekrana bakarak daha az zaman harcamanızı ve işinizi büyütmek için daha fazla zaman kullanmanızı istiyor. Güçlü AI araçları ve sorunsuz entegrasyonlarla çevrimiçi mağazanızı dakikalar içinde oluşturun.",
      "footerCompany": "Şirket",
      "footerHome": "Ana Sayfa",
      "footerAboutUs": "Hakkımızda",
      "footerEcommerce": "E-ticaret",
      "footerPricing": "Fiyatlandırma",
      "footerBlog": "Blog",
      "footerSupport": "Destek",
      "footerCareer": "Kariyer",
      "footerAffiliates": "Ortaklar",
      "footerFAQ": "SSS",
      "footerTerms": "Şartlar",
      "footerSecurity": "Güvenlik",
      "footerResources": "Kaynaklar",
      "footerHelpCenter": "Yardım Merkezi",
      "footerMadeWith": "Vendoora ile yapıldı",
      "footerTutorials": "Eğitimler",
      "footerAPIDocs": "API Dokümanları",
      "footerNewsletter": "Bülten",
      "footerNewsletterDesc": "Son güncellemeler ve özel teklifler için bültenimize abone olun.",
      "footerCopyright": "Telif Hakkı © Vendoora 2025 - Tüm Hakları Saklıdır",
      "footerDesigner": "♥ ile Zouraiz tarafından kodlandı",
      
    "logoAlt": "Vendoora Logosu",
    "loginTitle": "Tekrar hoş geldiniz!",
    "loginPrompt": "Hesabınız yok mu?",
    "signupLink": "Kayıt ol",
    "googleButton": "Google ile devam et",
    "orDivider": "veya",
    "emailLabel": "E-posta",
    "emailPlaceholder": "E-postanızı girin",
    "passwordLabel": "Şifre",
    "passwordPlaceholder": "Şifrenizi girin",
    "forgotPassword": "Şifrenizi mi unuttunuz?",
    "loginButton": "Giriş yap",
    "noAccountPrompt": "Hesabınız yok mu?",
    "signupLink2": "Buradan kayıt olun",
    "signupTitle": "Hesap oluştur",
    "haveAccountPrompt": "Zaten hesabınız var mı?",
    "loginLink": "Giriş yap",
    "firstNameLabel": "Ad",
    "firstNamePlaceholder": "Ad",
    "lastNameLabel": "Soyad",
    "lastNamePlaceholder": "Soyad",
    "phoneLabel": "Telefon",
    "phonePlaceholder": "Telefon numaranızı girin",
    "customCodePlaceholder": "+Kod",
    "createPasswordPlaceholder": "Şifre oluştur",
    "confirmPasswordLabel": "Şifreyi Onayla",
    "confirmPasswordPlaceholder": "Şifrenizi onaylayın",
    "createAccountButton": "Hesap oluştur",
    "haveAccountPrompt2": "Zaten hesabınız var mı?",
    "loginLink2": "Buradan giriş yapın",
    "resetPasswordTitle": "Şifreyi Yenile",
    "resetPasswordPrompt": "Sıfırlama bağlantısı almak için e-postanızı girin",
    "sendResetLinkButton": "Sıfırlama Bağlantısı Gönder",
    "rememberPasswordPrompt": "Şifrenizi hatırladınız mı?",
    "loginLink3": "Buradan giriş yapın",
    "currentLanguage": "TR",
    "langArabic": "Arapça",
    "langEnglish": "İngilizce",
    "langFrench": "Fransızca",
    "langTurkish": "Türkçe"
    }
  };

  // Initialize translations (could load from external file instead)
  translations = translationData;

  // Update all elements with data-key
  function applyTranslations(lang) {
    currentLang = lang;
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Update all elements with data-key attributes
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
      const key = el.getAttribute('data-key');
      if (translations[lang] && translations[lang][key]) {
        // Handle HTML content (like <br> tags) for certain elements
        if (el.tagName === 'H1' || el.tagName === 'P' || el.tagName === 'SPAN') {
          el.innerHTML = translations[lang][key].replace(/\\n/g, '<br>');
        } else {
          el.innerText = translations[lang][key];
        }
      }
    });
    
    // Update the language dropdown display
    updateLanguageDropdown(lang);
    
    // Apply RTL styles if needed
    if (lang === 'ar') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  }

  // Update the language dropdown display
  function updateLanguageDropdown(lang) {
    const langBtn = document.getElementById('langBtn');
    const currentLangSpan = document.getElementById('currentLang');
    
    if (currentLangSpan) {
      switch(lang) {
        case 'en':
          currentLangSpan.textContent = 'English';
          break;
        case 'ar':
          currentLangSpan.textContent = 'العربية';
          break;
        case 'fr':
          currentLangSpan.textContent = 'Français';
          break;
        case 'tr':
          currentLangSpan.textContent = 'Türkçe';
          break;
        default:
          currentLangSpan.textContent = 'English';
      }
    }
  }

  // Set language and persist
  function setLanguage(lang) {
    localStorage.setItem(LANG_KEY, lang);
    applyTranslations(lang);
  }

  // Initialize the language switcher dropdown
  function initLanguageDropdown() {
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    
    if (langOptions.length > 0) {
      langOptions.forEach(option => {
        option.addEventListener('click', function(e) {
          e.preventDefault();
          const lang = this.getAttribute('data-lang');
          setLanguage(lang);
        });
      });
    }
  }

  // On DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize with stored language or default
    const storedLang = localStorage.getItem(LANG_KEY) || DEFAULT_LANG;
    setLanguage(storedLang);
    
    // Initialize the language dropdown
    initLanguageDropdown();
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      const langDropdown = document.getElementById('langDropdown');
      if (langDropdown && !langDropdown.contains(e.target)) {
        langDropdown.classList.remove('active');
      }
    });
  });
})();