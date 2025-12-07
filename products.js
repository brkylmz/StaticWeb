// products.js

const products = {
	

    "special-kunefe": {
        order: 1,
        category: "Künefe",
        title: "Special Künefe",
        subtitle: "Özel tarif, bol fıstıklı ve peynirli.",
        image: "special-kunefe.jpg",
        imagePosition: "center 65%",
        imageScale: 1,
        badge: "Özel lezzet",
        tagline: "Sadece Bab-ı Alâ’ya özel tarif.",
        desc: "Özel hazırlanmış kadayıf, peynir ve fıstık karışımıyla, farklı bir künefe deneyimi.",
        prices: [
            { label: "1 Kişilik", price: "230.00 ₺" },
            { label: "2 Kişilik", price: "470.00 ₺" },
            { label: "3 Kişilik", price: "680.00 ₺" },
            { label: "4 Kişilik", price: "870.00 ₺" }
        ],
        note: ""
    },

    "hasir-peynirli": {
        order: 2,
        category: "Künefe",
        title: "Hasır Peynirli",
        subtitle: "Hasır Kadayıf, Bol Fıstıklı, Özel Sade Yağ, Özel Künefe Peyniri.",
        image: "hasir-kunefe.jpg",
        imagePosition: "center 65%",
        imageScale: 1,
        badge: "Hasır kadayıf",
        tagline: "Daha yoğun kadayıf dokusu ve bol fıstık.",
        desc: "Hasır kadayıf ve özel künefe peyniri ile, bol fıstıklı olarak hazırlanan özel künefe.",
        prices: [
            { label: "1 Kişilik", price: "210.00 ₺" },
            { label: "2 Kişilik", price: "420.00 ₺" },
            { label: "3 Kişilik", price: "610.00 ₺" },
            { label: "4 Kişilik", price: "810.00 ₺" }
        ],
        note: ""
    },

    "uc-bir-arada": {
        order: 3,
        category: "Künefe",
        title: "3 Bir Arada",
        subtitle: "Üç farklı künefe çeşidi bir arada.",
        image: "uc-bir-arada.jpg",
        imagePosition: "center 70%",
        imageScale: 1,
        badge: "Üçlü lezzet",
        tagline: "Tek tabakta üç farklı künefe keyfi.",
        desc: "Menüden belirlenen üç farklı künefe çeşidinin tek tabakta sunumu.",
        prices: [
            { label: "2 Kişilik", price: "560.00 ₺" },
            { label: "3 Kişilik", price: "840.00 ₺" },
            { label: "4 Kişilik", price: "1050.00 ₺" }
        ],
        note: ""
    },
	
	

    "fistikzade-kunefe": {
        order: 4,
        category: "Künefe",
        title: "Fıstıkzade Künefe",
        subtitle: "Bol fıstıklı, özel tarifle hazırlanan künefe.",
        image: "fistikzade-kunefe.jpg",
        imagePosition: "center 65%",
        imageScale: 1,
        badge: "Fıstık şöleni",
        tagline: "Fıstığı merkezine alan özel künefe.",
        desc: "Bol Antep fıstığı ile hazırlanan, yoğun aromalı özel künefe.",
        prices: [
            { label: "1 Kişilik", price: "290.00 ₺" },
            { label: "2 Kişilik", price: "570.00 ₺" },
            { label: "3 Kişilik", price: "840.00 ₺" },
            { label: "4 Kişilik", price: "1090.00 ₺" }
        ],
        note: ""
    },
	
    "peynirli-kunefe": {
        order: 5,
        category: "Künefe",
        title: "Peynirli Künefe",
        subtitle: "Tel Kadayıf, Özel Sade Yağ, Özel Künefe Peyniri.",
        image: "peynirli-kunefe.jpg",
        imagePosition: "center 65%",
        imageScale: 1,
        badge: "Klasik lezzet",
        tagline: "Künefenin en bilinen ve sevilen hali.",
        desc: "Tel kadayıf ve sade yağla buluşan özel künefe peyniri ile hazırlanan klasik lezzet.",
        prices: [
            { label: "1 Kişilik", price: "150.00 ₺" },
            { label: "2 Kişilik", price: "290.00 ₺" },
            { label: "3 Kişilik", price: "420.00 ₺" },
            { label: "4 Kişilik", price: "570.00 ₺" }
        ],
        note: ""
    },

    "fistikli-kunefe": {
        order: 6,
        category: "Künefe",
        title: "Fıstıklı Künefe",
        subtitle: "Tel Kadayıf, Özel Sade Yağ, Özel Künefe Peyniri, Bol Fıstık.",
        image: "fistikli-kunefe.jpg",
        imagePosition: "center 65%",
        imageScale: 1,
        badge: "Bol fıstıklı",
        tagline: "Künefeyi fıstıkla sevenlere özel.",
        desc: "Klasik peynirli künefenin bol fıstıkla zenginleştirilmiş hali.",
        prices: [
            { label: "1 Kişilik", price: "240.00 ₺" },
            { label: "2 Kişilik", price: "480.00 ₺" },
            { label: "3 Kişilik", price: "700.00 ₺" },
            { label: "4 Kişilik", price: "910.00 ₺" }
        ],
        note: ""
    },

    "hasir-kaymakli-kunefe": {
        order: 7,
        category: "Künefe",
        title: "Hasır Kaymaklı Künefe",
        subtitle: "Hasır Kadayıf, Özel Sade Yağ, Özel Künefe Peyniri, Kaymak.",
        image: "hasir-kaymakli-kunefe.jpg",
        imagePosition: "center 75%",
        imageScale: 1,
        badge: "Kaymaklı hasır",
        tagline: "Kaymak ve hasır kadayıfın buluşması.",
        desc: "Hasır kadayıf, özel künefe peyniri ve kaymak ile hazırlanan lezzetli künefe.",
        prices: [
            { label: "1 Kişilik", price: "210.00 ₺" },
            { label: "2 Kişilik", price: "420.00 ₺" },
            { label: "3 Kişilik", price: "610.00 ₺" },
            { label: "4 Kişilik", price: "810.00 ₺" }
        ],
        note: ""
    },

    "yari-hasir-yari-peynir": {
        order: 8,
        category: "Künefe",
        title: "Yarı Hasır Yarı Peynirli",
        subtitle: "Yarısı Hasır Kadayıf, Yarısı Tel Kadayıf, Özel Künefe Peyniri.",
        image: "yari-hasir-yari-kunefe.jpg",
        imagePosition: "center 75%",
        imageScale: 1,
        badge: "İki lezzet bir arada",
        tagline: "Karar veremeyenlere özel karışım.",
        desc: "Yarısı hasır, yarısı klasik peynirli künefe; tek tabakta iki lezzet.",
        prices: [
            { label: "2 Kişilik", price: "470.00 ₺" },
            { label: "3 Kişilik", price: "695.00 ₺" },
            { label: "4 Kişilik", price: "920.00 ₺" }
        ],
        note: ""
    },

    "yari-hasir-yari-fistikzade": {
        order: 9,
        category: "Künefe",
        title: "Yarı Hasır - Yarı Fıstıkzade",
        subtitle: "Özel Sade Yağ, Bol Fıstık, Hasır Kadayıf ve Özel Kaymak.",
        image: "yari-hasir-yari-fistikzade.jpg",
        imagePosition: "center 80%",
        imageScale: 1,
        badge: "İki lezzet bir arada",
        tagline: "Hasır kadayıf ve fıstıkzade künefenin buluşması.",
        desc: "Özel sade yağ ile hazırlanan hasır kadayıf tabanı, bol fıstıkla zenginleştirilmiş fıstıkzade karışımı ve üzerinde özel kaymak ile sunulan özel künefe.",
        prices: [
            { label: "1 Kişilik", price: "590.00 ₺" },
            { label: "2 Kişilik", price: "860.00 ₺" },
            { label: "4 Kişilik", price: "1120.00 ₺" }
        ],
        note: ""
    },

    "yari-fistikzade-yari-billuriye": {
        order: 10,
        category: "Künefe",
        title: "Yarı Fıstıkzade Yarı Billuriye",
        subtitle: "Yarısı Fıstıkzade, Yarısı Billuriye Künefe.",
        image: "yari-fistikzade-yari-billuriye.jpg",
        imagePosition: "center 70%",
        imageScale: 1,
        badge: "Özel karışım",
        tagline: "Fıstıkzade ve billuriyeyi aynı tabakta deneyimleyin.",
        desc: "Fıstık ve peynir dengesini sevenler için özel iki lezzetin birleşimi.",
        prices: [
            { label: "2 Kişilik", price: "580.00 ₺" },
            { label: "3 Kişilik", price: "890.00 ₺" },
            { label: "4 Kişilik", price: "1160.00 ₺" }
        ],
        note: ""
    },

    "dort-bir-arada": {
        order: 11,
        category: "Künefe",
        title: "4 Bir Arada",
        subtitle: "Dört farklı künefe çeşidi bir arada.",
        image: "dort-bir-arada.jpg",
        imagePosition: "center 65%",
        imageScale: 1,
        badge: "Dörtlü lezzet",
        tagline: "Tek tabakta dört farklı tat.",
        desc: "Menüden belirlenen dört farklı künefe çeşidinin tek tabakta sunumu.",
        prices: [
            { label: "2 Kişilik", price: "570.00 ₺" },
            { label: "3 Kişilik", price: "850.00 ₺" },
            { label: "4 Kişilik", price: "1100.00 ₺" }
        ],
        note: ""
    },

    "burger-fistik-zade": {
        order: 12,
        category: "Künefe",
        title: "Burger Fıstıkzade",
        subtitle: "Burger formunda sunulan fıstıkzade künefe.",
        image: "burger-fistikzade.jpg",
        imagePosition: "center 80%",
        imageScale: 1,
        badge: "Burger sunum",
        tagline: "Sunumu ile fark yaratan fıstıkzade.",
        desc: "Burger şeklinde hazırlanmış fıstıkzade künefe, hem göze hem damağa hitap eder.",
        prices: [
            { label: "1 Kişilik", price: "390.00 ₺" },
            { label: "2 Kişilik", price: "790.00 ₺" },
            { label: "3 Kişilik", price: "1150.00 ₺" }
        ],
        note: ""
    },

    "dondurmali-hasir": {
        order: 13,
        category: "Künefe",
        title: "Dondurmalı Hasır Künefe",
        subtitle: "Hasır Kadayıf, Özel Künefe Peyniri, Sade Dondurma.",
        image: "dondurmali-hasir.jpg",
        imagePosition: "center center",
        imageScale: 1,
        badge: "Dondurmalı",
        tagline: "Sıcak künefe ve soğuk dondurmanın uyumu.",
        desc: "Hasır kadayıf ile hazırlanan künefe, yanında sade dondurma ile servis edilir.",
        prices: [
            { label: "1 Kişilik", price: "275.00 ₺" },
            { label: "2 Kişilik", price: "550.00 ₺" },
            { label: "3 Kişilik", price: "810.00 ₺" }
        ],
        note: ""
    },

    "ezme-kunefe": {
        order: 14,
        category: "Künefe",
        title: "Ezme Künefe",
        subtitle: "İnce ezilmiş kadayıf ve fıstıkla hazırlanan künefe.",
        image: "ezme-kunefe.jpg",
        imagePosition: "center 80%",
        imageScale: 1,
        badge: "İnce dokulu",
        tagline: "Daha ince, daha yoğun bir tat.",
        desc: "Kadayıf ve fıstığın ince ezilerek hazırlandığı özel künefe çeşidi.",
        prices: [
            { label: "1 Kişilik", price: "380.00 ₺" },
            { label: "2 Kişilik", price: "750.00 ₺" },
            { label: "3 Kişilik", price: "1100.00 ₺" }
        ],
        note: ""
    },

    "billuriye-kunefe": {
        order: 15,
        category: "Künefe",
        title: "Billuriye Künefe",
        subtitle: "İnce kadayıf, bol fıstık ve peynirle hazırlanan künefe.",
        image: "billuriye-kunefe.jpg",
        imagePosition: "center center",
        imageScale: 1,
        badge: "Özel dokulu",
        tagline: "Fıstığın ve peynirin dengeli birleşimi.",
        desc: "İnce dokulu kadayıf ve bol fıstık ile hazırlanan, hafif yapılı özel künefe.",
        prices: [
            { label: "1 Kişilik", price: "265.00 ₺" },
            { label: "2 Kişilik", price: "520.00 ₺" },
            { label: "3 Kişilik", price: "750.00 ₺" }
        ],
        note: ""
    },

    "dondurma-menu": {
        order: 16,
        category: "Dondurma",
        title: "Dondurma Çeşitleri",
        subtitle: "Sade, Karışık ve Özel Sunumlar.",
        image: "dondurma-menu.jpg",
        imagePosition: "center center",
        imageScale: 1,
        badge: "Serinleten lezzet",
        tagline: "Künefenin en iyi eşlikçisi.",
        desc: "Sade veya karışık toplar halinde servis edilen Maraş usulü dondurma çeşitleri.",
        prices: [
            { label: "Fıstık Ezmeli Sarma (1 Porsiyon)",          price: "170.00 ₺" },
            { label: "Lokum Dondurma (1 Porsiyon Fıstık Ezmeli)", price: "140.00 ₺" },
            { label: "Porsiyon Dondurma (1 Porsiyon Sade)",       price: "90.00 ₺" },
            { label: "1 Kg Dondurma (Özel Yapım Sade)",           price: "180.00 ₺" }
        ],
        note: ""
    },

    "soguk-tatlilar": {
        order: 17,
        category: "Tatlı",
        title: "Soğuk Tatlılar",
        subtitle: "Sütlü ve şerbetli soğuk tatlı çeşitleri.",
        image: "soguk-tatlilar.jpg",
        imagePosition: "center center",
        imageScale: 1,
        badge: "Serin tatlılar",
        tagline: "Künefe sonrası hafif dokunuş.",
        desc: "Mevsime göre değişen soğuk sütlü ve şerbetli tatlılardan oluşan menü.",
        prices: [
            { label: "Fırın Sütlaç (Porsiyon)",         price: "120.00 ₺" },
            { label: "Kabak Tatlısı (Porsiyon)",       price: "120.00 ₺" },
            { label: "Ayva Tatlısı (Porsiyon)",        price: "120.00 ₺" },
            { label: "Sütlü Kadayıf (Porsiyon)",       price: "150.00 ₺" },
            { label: "Billuriye Kadayıf (Porsiyon)",   price: "150.00 ₺" },
            { label: "Şöbiyet Kadayıf (Porsiyon)",     price: "150.00 ₺" },
            { label: "Fıstık Zade Kadayıf (Porsiyon)", price: "150.00 ₺" },
            { label: "Ali Zade Kadayıf (Porsiyon)",    price: "150.00 ₺" },
            { label: "Fıstık Burma (Porsiyon)",        price: "150.00 ₺" },
            { label: "Hasır Kadayıf (Porsiyon)",       price: "130.00 ₺" }
        ],
        note: ""
    },

    "icecekler": {
        order: 18,
        category: "İçecek",
        title: "İçecekler",
        subtitle: "Sıcak ve soğuk içecek çeşitleri.",
        image: "icecekler.jpg",
        imagePosition: "center center",
        imageScale: 1,
        badge: "İçecek menüsü",
        tagline: "Lezzetlere eşlik eden içecekler.",
        desc: "Çay, Türk kahvesi, gazlı içecekler, ayran ve diğer içecek çeşitleri.",
        prices: [
            { label: "Fanta",        price: "50.00 ₺" },
            { label: "Kola",         price: "50.00 ₺" },
            { label: "FruisTea",     price: "50.00 ₺" },
            { label: "Su",           price: "10.00 ₺" },
            { label: "Türk Kahvesi", price: "90.00 ₺" },
            { label: "Sahlep",       price: "100.00 ₺" },
            { label: "Ihlamur",      price: "75.00 ₺" },
            { label: "Adaçayı",      price: "75.00 ₺" },
            { label: "Nane Limon",   price: "75.00 ₺" },
            { label: "Çay",          price: "0.00 ₺" }
        ],
        note: ""
    },

    "cerez": {
        order: 19,
        category: "Çerez",
        title: "Çerez Çeşitleri",
        subtitle: "Fıstık, Fındık, Karışık Çerez ve Diğerleri.",
        image: "cerez.jpg",
        imagePosition: "center bottom",
        imageScale: 1,
        badge: "Atıştırmalık",
        tagline: "Tatlıların yanında atıştırmalık keyfi.",
        desc: "Masaya özel sunulan çerez çeşitleri; fıstık, fındık ve karışık kuruyemişler.",
        prices: [
            { label: "Tarhana", price: "150.00 ₺" },
            { label: "Çerez",   price: "150.00 ₺" }
        ],
        note: ""
    },

    "katmer": {
        order: 20,
        category: "Katmer",
        title: "Katmer Çeşitleri",
        subtitle: "Peynirli, Fıstıklı ve Özel Katmer Çeşitleri.",
        image: "katmer.jpg",
        imagePosition: "center center",
        imageScale: 1,
        badge: "Katmer lezzeti",
        tagline: "İnce hamur, bol iç malzeme ile hazırlanmış katmerler.",
        desc: "Peynirli, fıstıklı ve sade katmer seçenekleriyle, çıtır dokulu hamur ve bol iç malzeme.",
        prices: [
            { label: "Katmer",                  price: "480.00 ₺" },
            { label: "Simit Katmer",            price: "500.00 ₺" },
            { label: "Çikolatalı Katmer",       price: "500.00 ₺" },
            { label: "Çikolatalı Muska Katmer", price: "225.00 ₺" }
        ],
        note: ""
    },

    "paket-depozito": {
        order: 21,
        category: "Paket",
        title: "Paket Servis Depozito",
        subtitle: "Özel paket kapları için depozito bedeli.",
        image: "paket-depozito.jpg",
        imagePosition: "center center",
        imageScale: 1,
        badge: "Depozito",
        tagline: "Paket servislerde kullanılan özel kaplar için.",
        desc: "Paket servislerde kullanılan özel kap ve ekipmanlar için alınan iade edilebilir depozito bedeli.",
        prices: [
            { label: "1 Kişilik Tepsi",            price: "35.00 ₺" },
            { label: "2 Kişilik Tepsi",            price: "65.00 ₺" },
            { label: "3 Kişilik Tepsi",            price: "60.00 ₺" },
            { label: "4 Kişilik Tepsi",            price: "70.00 ₺" },
            { label: "Paket Ücreti - Kısa Mesafe", price: "45.00 ₺" },
            { label: "Paket Ücreti - Uzak Mesafe", price: "60.00 ₺" }
        ],
        note: ""
    }
};

const productOrder = [
    "peynirli-kunefe",
    "hasir-peynirli",
    "fistikli-kunefe",
    "hasir-kaymakli-kunefe",
    "yari-hasir-yari-peynir",
    "yari-hasir-yari-fistikzade",
    "yari-fistikzade-yari-billuriye",
    "uc-bir-arada",
    "dort-bir-arada",
    "special-kunefe",
    "fistikzade-kunefe",
    "burger-fistik-zade",
    "dondurmali-hasir",
    "ezme-kunefe",
    "billuriye-kunefe",
    "dondurma-menu",
    "soguk-tatlilar",
    "icecekler",
    "cerez",
    "paket-depozito",
    "katmer"
];
