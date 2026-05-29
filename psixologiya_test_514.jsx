import React, { useState, useEffect } from "react";

const questions = {
  sotsial: [
    { id: "s1", text: `Ijtimoiy psixologiyaning uch asosiy nazariy manbayito'g'ri ko'rsatilgan variantni belgilang`, options: ["xalqlar psixologiyasi nazaryasi, omma psixologiyasi nazariyasi,ijtimoiy xulq-atvor instinktlari nazariyasi", "xalqlar psixologiyasi nazaryasi, ijtimoiy rol nazariyasi,ijtimoiy xulq-atvor instinktlari nazariyasi", "xalqlar psixologiyasi nazaryasi, omma psixologiyasi nazariyasi,ijtimoiy rol naariyasi", "ijtimoiy rol nazariyasi,omma psixologiyasi nazariyasi,ijtimoiy xulq-atvor instinktlari nazariyasi"], answer: 0 },
    { id: "s2", text: `Sotsial psixologiyaning fan sifatida nechanchi yilda rasman e'tirof etildi`, options: ["1908yil", "1907yil", "1906yil", "1909yil"], answer: 0 },
    { id: "s3", text: `1908 yilda chop ettirilgan ”Ijtimoiy psixologiya” kitobining muallifi kim`, options: ["E.Ross", "V.Makdugall", "G.M. Andreyeva", "G. Lebon"], answer: 0 },
    { id: "s4", text: `V.Makdugallning 1908 yilda chop ettiilgan asarini belgilang`, options: ["”Ijtimoiy psixologiyaga kirish”", "”Ijtimoiy psixologiya”", "”Omma psixologiyasi”", "”IJtimoiy psixologiya bo`yicha tadqiqotlar”"], answer: 0 },
    { id: "s5", text: `”Ijtimoiy psixologiya sohasida ishlayotgan mutaxassisning aslida kim ekanligi- psixologmi, faylasufmi yoki sotsiologmi- uning ushbu fan predmetiga yondashuvida o'z aksini topadi” yuqoridagi fikr muallifini begilang`, options: ["G.M. Andreyeva", "V.Makdugall", "E.Ross", "G. Lebon"], answer: 0 },
    { id: "s6", text: `Ijtimoiy psixologiyaga to'g'ri ta'rif berilgan qatorni toping`, options: ["odamlarning jamiyatdagi birgalikdagi ish faoliyatlari natijasida ularda hosil bo`ladigan tasavvurlar, fikrlar , e`tiqodlar, hissiy kechinmalar va xulq-atvorlarni o`rganadi", "Turli millatlararo munosabatlar natijasida ularda hosil bo`ladigan tasavvurlar, fikrlar , e`tiqodlar, hissiy kechinmalar va xulq-atvorlarni o`rganadi", "Rivojlangan davlatlar hamjamiyatlari munosabatlari natijasida ularda hosil bo`ladigan tasavvurlar, fikrlar , e`tiqodlar, hissiy kechinmalar va xulq-atvorlarni o`rganadi", "Odamlarning jamiyatdagi birgalikdagi ish faoliyatlari natijasida ularda hosil bo`ladigan o`zaro turli psixik hodisa hamda xulq-atvorni o`rganadi"], answer: 0 },
    { id: "s7", text: `Fransuz olimi Serj Moskovisining ijtimoiy psixologiya fanining vazifasi to'g'risidagi fikri keltirilgan qatorni toping`, options: ["”Ijtimoiy psixologiya vazifalarini bevosita jamiyat belgilaydi”", "”Ijtimoiy psixologiyaning vazifasi bu shaxslararo konfliktlarni bartaraf etmoqdir”", "”Sotsial psixologiyaning vazifasi jamiyat bilan bog`liq bo`lgan barcha muammolarni hal etishdir”", "”sotsial psixologiyaning vazifasi-barkamol avlod tarbiyasini ta`minlovchi barcha ma`naviy, ruhiy va insoniy munosabatlarni tahlil etisg’"], answer: 0 },
    { id: "s8", text: `G.M. Andreyeva ijtimoiy psixologiyaning mavzu baxsi haqidagi hozirgi zamon qarashlarni umumlastirgan holda nechta yondashuvga ajratadi`, options: ["3", "4", "2", "5"], answer: 0 },
    { id: "s9", text: `Ijtimoiy psixologiya rivoji natijasida yuzaga kelgn alohida yo'nalishlarni ko'rsating.`, options: ["Boshqaruv psixologiyasi, sanoat va ishlab chiqarish psixologiyasi", "yosh davrlari psixologiyasi, yuridik psixologiya", "yuridik psixologiya, harbiy psixologiya", "harbiy psixologiya, Boshqaruv psixologiyasi"], answer: 0 },
    { id: "s10", text: `Amerikalik psixologlar metodologiya deganda…`, options: ["tadqiqofd davomida ishlatildigan barcha tadqiqot uslublari va texnik jarayonni nazarda tutushadi", "konkret metolar yigindisi", "eksperemental metodlar jamlanmasi", "tadqiqofd davomida ishlatildigan barcha diadnostik uslublari va texnik jarayonni nazarda tutushadi"], answer: 0 },
    { id: "s11", text: `Metodologik muammolar qatori togri keltirilgan joyni ko'rsating`, options: ["emperik ma`lumotlar muammosi, qonuniyatlar yaratish va ilmiy taxminlar qilish muammosi ,ma`lumotlarning sifatlilik muammosi", "emperik ma`lumotlar muammosi, qonuniyatlar yaratish va ilmiy taxminlar qilish muammosi, ma`lumotlarning ishonchlilik muammosi", "ma`lumotlarning ishonchlilik muammosi,qonuniyatlar yaratish va ilmiy taxminlar qilish muammosi ,ma`lumotlarning sifatlilik muammosi", "emperik ma`lumotlar muammosi, ma`lumotlarning ishonchlilik muammosi, ma`lumotlarning sifatlilik muammosi"], answer: 0 },
    { id: "s12", text: `Shaxs dunyo qarashini o'zgartiruvchi omillar nechta`, options: ["4", "3", "2", "5"], answer: 0 },
    { id: "s13", text: `Shaxs dunyoqarashini va e'tiqodini o'zgartiruvchi omillar qaysilar`, options: ["ma`naviyat va ma`rifat, mafkura , oila, ijtimoiy ustanovka", "qadriyat, mafkura , oila, ijtimoiy ustanovka", "ma`naviyat va ma`rifat, mafkura , oila, do`stlar", "ma`naviyat va ma`rifat, ta`lim , oila, ijtimoiy ustanovka"], answer: 0 },
    { id: "s14", text: `Ijtimoiy psixologiya ...`, options: ["Jamiyatda odamlarning hamkorlik faoliyati jarayonida xosil bo‘ladigan fikrlar, g‘oyalar, tasavvurlar, xis – tuyg‘ular turli xulq – atvor shakllarini ko‘rsatib beruvchi fan", "Psixik protsesslar va shaxsning psixologik xususiyatlarini o‘rganadigan fan", "Oilaviy munosabatlarni o‘rganadigan fan", "Tadbirkorlikni o‘rganadigan fan"], answer: 0 },
    { id: "s15", text: `Metodologiya bu...`, options: ["Fanlar uchun yo‘nalish beradigan ilmiy bilish xisoblanib, u fanda tadbiq etiladigan tadqiqod usullarining majmui xisoblanadi", "Aniq ishlab chiqarilgan reja asosida izlanuvchini ob’ektni ichidan yoki tashqarisidan o‘rganish", "fanning bilish ob’ektlarini o‘rganish uchun qo‘llaniladigan usul xisoblanib, u fanni o‘rganish uchun olib boriladigan taxlil ishlarida qo‘llaniladi", "Qisqa sinov usuli bo‘lib, uning yordamida biron bir ijtimoiy psixologik xodisa o‘rganiladi"], answer: 0 },
    { id: "s16", text: `Rossiyada ijtimoiy psixolgiyaning asoschisi deb ... ko‘rsatish mumkin.`, options: ["V.M. Bexterev", "V. Petrovskiy", "G.M. Andreeva", "V. Vundt"], answer: 0 },
    { id: "s17", text: `K. Levin nazariyasi asosida paydo bo‘lgan psixologik yo‘nalish...`, options: ["Kognitivizm", "Bixeviorizm"], answer: 0 },
    { id: "s18", text: `Qaysi asarlarda ijtimoiy psixologiya tan olingan va uning predmetiga ta’rif berilgan.`, options: ["V.Makdugall “Ijtimoiy psixologiyaga kirish” E.Ross “Ijtimoiy psixologiya”", "E.Ross “Ijtimoiy psixologiya” , Dj. Bolduin “Ijtimoiy psixologiya bo‘yicha tadqiqodlar”", "G.P. Predvechnыy YU.{= SHerkovin “Sotsial psixologiya”", "M.Latsarus G. SHteyntal “xalqlar psixologiyasiga kirish so‘zi”"], answer: 0 },
    { id: "s19", text: `“Biz, shu hayotsiz g'oz ichida tanho tirik mavjudodlar edik. Men o'rgimchak bilan gaplasha boshladim, uning taqdiri uchun qayg'ura boshladim…” deb qaysi olim so'zlaydi`, options: ["M. Sifr", "J.Morena", "Makdugal", "Ross"], answer: 0 },
    { id: "s20", text: `Jon Morena qanday metodikani kashf etgan.`, options: ["Sotsiometriya", "Anketa", "Kontent analiz", "Biografiya"], answer: 0 },
    { id: "s21", text: `Jon Morena taqiqodlarida Sotsiometriya texnologiyasi orqali nimani aniqlagan`, options: ["Sorovnoma orqali bir –birini yoqtirgan va bir-birini inkor qiluvchilarni aniqlagan", "so`rovnoma asosida o`zaro qarindoshlik aloqalari mavjud bo`lgan odamlarni anilagan", "Sorovnoma orqali rahbarlar va ishchilar orasidagi psixologik muhitni aniqlagan", "Sotsiometriya yordamida turli jins vakillari o`rtasidagi ijobiy va salbiy ikrlarni tadqiq etgan"], answer: 0 },
    { id: "s22", text: `Muloqotning dastlabki bosqichini ko'rsating`, options: ["Odamning o`z- o`zi bilan muloqoti", "Boshqalar bilan muloqot", "avlodlar o`rtasidagi muloqot", "emotsianal muloqot"], answer: 0 },
    { id: "s23", text: `Muloqotning ikkinchi bosqichi qaysi`, options: ["Boshqalar bilan muloqot", "Odamning o`z- o`zi bilan muloqoti", "avlodlar o`rtasidagi muloqot", "emotsianal muloqot"], answer: 0 },
    { id: "s24", text: `Muloqotning uchinchi bosqichi qaysi variantda togri`, options: ["avlodlar o`rtasidagi muloqot", "Odamning o`z- o`zi bilan muloqoti", "Boshqalar bilan muloqot", "emotsianal muloqot"], answer: 0 },
    { id: "s25", text: `A.N Leontev o'zining “Psixika taraqqiyotidan ocherklar” kitobida muloqotning qaysi bosqichining ahamiyati haqida o'z fikrlarini keltirib o'tgan`, options: ["avlodlar o`rtasidagi muloqot", "Odamning o`z- o`zi bilan muloqoti", "Boshqalar bilan muloqot", "emotsianal muloqot"], answer: 0 },
    { id: "s26", text: `Rasmiy muoqotga ta'rif bering.`, options: ["odamlarning jamiyatda bajaradigan vazifalaridan va xulq- atvor normalaridan kelib chiqqn holdagi muloqot turi", "odamlar oilasi va do`stlar davrasida qo`llanuchi , insonlar hayotida ko`proq vaqtini oladigan muloqot shakli", "Davlat rahbarlari, mansabdorlar, harbiy soha vakillari, ilm fan namoyondalari qo`llaydigan uslub", "Muloqotning eng keng miqyosda tarqalgan va qulay shakli"], answer: 0 },
    { id: "s27", text: `Norasmiy muloqotga ta'rif bering`, options: ["odamlar oilasi va do`stlar davrasida qo`llanuchi , insonlar hayotida ko`proq vatini oladigan muloqot shakli", "odamlarning jamiyatda bajaradigan vazifalaridan va xulq- atvor normalaridan kelib chiqqn holdagi muloqot turi", "Davlat rahbarlari, mansabdorlar, harbiy soha vakillari, ilm fan namoyondalari qo`llaydigan uslub", "Muloqotda juda kam qollanuvchi ommalashmagan muloqotning turi"], answer: 0 },
    { id: "s28", text: `Muloqotning shakli va ko'rinishiga ko'ra turlari qaysilar`, options: ["Norasmiy va Rasmiy muloqot", "guruhiy va individual muloqot", "verbal va noverbal muloqot", "shaxslararo va predmetli muloqot"], answer: 0 },
    { id: "s29", text: `Muoqot mavzuyi va yo'nalishiga ko'ra turlari qaysilar`, options: ["ijtimoiy yo`naltrilgan , guruhdagi premetga yo`naltrilgan, shahsiy muloqot", "shaxslararo va predmetli muloqot", "verbal va noverbal muloqot", "Norasmiy va Rasmiy muloqot"], answer: 0 },
    { id: "s30", text: `G.M Andreyev abo'yicha muloqotning paixologik tuzilishi qanday`, options: ["kommunikativ, interaktiv, perseptiv", "kommunikativ, interaktiv, kognitiv", "apperseptiv, interaktiv, perseptiv", "kommunikativ, , kognitiv , perseptiv"], answer: 0 },
    { id: "s31", text: `Muloqotning kommunikativ tomoni deganda nimani tushinasiz`, options: ["Muloqotga kirishuvchilar o`rtasidagi ma`lumotlar almashinuvi jarayoni", "Muloqotga kirishuvchi tomonlarning xulq-atvorlariga ta`sir jarayoni", "Muloqotga kirishuvchilar nafaqat ma`lumot almahishadi va bir biriga tasir o`tqaadilar balki bir birlarini tushinishga va idrok qilishga urinishadi", "Muloqot davomida konfliktlarni hal qilishga ma`lumot almashinishga hamda suhbatdoshni idrok qilish jarayoni"], answer: 0 },
    { id: "s32", text: `Muloqotning interaktiv tomoni deganda nimani tushinasiz`, options: ["Muloqotga kirishuvchi tomonlarning xulq-atvorlariga ta`sir jarayoni", "Muloqotga kirishuvchilar o`rtasidagi ma`lumotlar almashinuvi jarayoni", "Muloqotga kirishuvchilar nafaqat ma`lumot almahishadi va bir biriga tasir o`tqaadilar balki bir birlarini tushinishga va idrok qilishga urinishadi", "Muloqot davomida konfliktlarni hal qilishga ma`lumot almashinishga hamda suhbatdoshni idrok qilish jarayoni"], answer: 0 },
    { id: "s33", text: `Muloqotning perseptiv tomoni deganda nimani tushinasiz`, options: ["Muloqotga kirishuvchilar nafaqat ma`lumot almahishadi va bir biriga tasir o`tqaadilar balki bir birlarini tushinishga va idrok qilishga urinishadi", "Muloqotga kirishuvchi tomonlarning xulq-atvorlariga ta`sir jarayoni", "Muloqot davomida konfliktlarni hal qilishga ma`lumot almashinishga hamda suhbatdoshni idrok qilish jarayoni", "Muloqotga kirishuvchilar o`rtasidagi ma`lumotlar almashinuvi jarayoni"], answer: 0 },
    { id: "s34", text: `Rus psixologi ~F Lomov bo'yicha muloqotning funksiyalari nechta`, options: ["3", "4", "2", "5"], answer: 0 },
    { id: "s35", text: `G.M.Andreeva bo'yicha muloqotning funksiyalari nechta`, options: ["3", "4", "2", "5"], answer: 0 },
    { id: "s36", text: `Ijtimoiy persepsiyada boshqa odam obrazini paydo bo'lishida eng ko'p informatsiya beradigan obyekt`, options: ["Uning yuzi", "Kiyinishi", "Ovozi", "Hatti-harakatlari"], answer: 0 },
    { id: "s37", text: `Monologik nutq nima`, options: ["bir kishining boshqa kishiga yoki kishilar guruhiga murojaati", "Ikki yoki undan ko`p bo`lgan suhbatdoshlarning bir biriga munosabatlari va maqsadlariga bevosita bog`liq bo`lgan nutq", "So`zlovchining tinglovchi yoki suhbatdoshga o`ta shaxsiy gaplari majmui", "yakka shaxsning ko`pchlikka yuzlana namoyish qilayotgan badiiy chiqishi"], answer: 0 },
    { id: "s38", text: `Dialogik nutq nima`, options: ["Ikki yoki undan ko`p bo`lgan suhbatdoshlarning bir biriga munosabatlari va maqsadlariga bevosita bog`liq bo`lgan nutq", "bir kishining boshqa kishiga yoki lishilae guruhiga murojaati", "So`zlovchining tinglovchi yoki suhbatdoshga o`ta shaxsiy gaplari majmui", "yakka shaxsning ko`pchlikka yuzlana namoyish qilayotgan badiiy chiqishi"], answer: 0 },
    { id: "s39", text: `Odam yuz ifodalari, nigohlarining 2000 ga yqin ko'rinishari borligi haqidagi fikr kimga tegishili`, options: ["G.M Andreyeva", "Tolstoy", "Lomov", "Ekman"], answer: 0 },
    { id: "s40", text: `Kim odamlarda 97 xil kulgu turi hamda 85 xil ko‘z qarashlari turi borligini kuzatgan.`, options: ["Tolstoy", "Andreyeva", "Ekman", "lomov"], answer: 0 },
    { id: "s41", text: `Nutqning atrofdagi nutq bezovchi, uni kuchaytiruvchi yoki susaytiruvchi omillariga nima deyiladi.`, options: ["Paralingivistik ta`sir", "lingivistik ta`sir", "pantomimic ta`sir", "mimic ta`sir"], answer: 0 },
    { id: "s42", text: `Labaratoriya sharoitida bir birini idrok qilish mexanizmlarini aniqlash borasida kuzatishlarni olib brogan olim`, options: ["A Bodalyov", "G.M Andreyeva", "F Lomov", "A.N Leontev"], answer: 0 },
    { id: "s43", text: `Rus psixologi A.A Bodalyov bo'yicha bir birini idrok qilish mexanizmlari nechta`, options: ["3", "2", "4", "5"], answer: 0 },
    { id: "s44", text: `Rus psixologi A.A Bodalyov bo'yicha bir birini idrok qilish mexanizmlari qaysilar`, options: ["ideintifikatsiya, refleksiya, steriotipizatsiya", "ideintifikatsiya, refleksiya, realizatsiya", "refleksiya, steriotipizatsiya", "ideintifikatsiya, realizatsiya ,steriotipizatsiya"], answer: 0 },
    { id: "s45", text: `U shunday psixologik hodisaki, bunda suhbatdoshlar bir birlarini to'g'riroq idrk qilish uchun o'zlarini bir birlarining o'rnig qo'yib ko'rishga harakat qiladilar`, options: ["ideintifikatsiya", "refleksiya", "steriotipizatsiya", "realizatsiya"], answer: 0 },
    { id: "s46", text: `U shunday psixologik hodisaki ,muloqot jarayonida suhbatdoshning pozitsiyasidan, holatidan turib, o'zini tasavvur qilishdir`, options: ["refleksiya", "ideintifikatsiya", "realizatsiya", "steriotipizatsiya"], answer: 0 },
    { id: "s47", text: `Streotiplash….. ro'y beradi.`, options: ["Oldindan paydo bo`ladigan fikr tarzida", "Narsalarni umumlashtirish orqali", "Har hil mish-mishlar orqali", "Instinktiv holatda"], answer: 0 },
    { id: "s48", text: `"Ijtimoiy ustanovka o'rgatish yoki ijtimoiy psixologik ta'sir yo'li bilan o'zgarishi mumkin."Ushbu fikr qaysi olim tomonidan ilgari surilgan?`, options: ["K.Xovland", "N. Uznadze", "G. Ollport", "V. A.Yadov"], answer: 0 },
    { id: "s49", text: `Ijtimoiy psixologiya faniga "ijtimoiy faoliyat ierarxiyasi" tushunchasini olib kirgan olim nomi qaysi javobda to'g'ri ko'rsatilgan?`, options: ["V. A Yadov", "K.Xovland", "U.Tomas", "P.Tanenbaum"], answer: 0 },
    { id: "s50", text: `Kauzal atributsiya ma'nosi`, options: ["lotincha“kauzal\" — sabab, “atributsio\" —bermoq, qo`shib bermoq", "yunoncha “Kauazl”_ sabab,”atributsio”_ bermoq, qo`shib bermoq", "lotincha“kauzal\" — omil, “atributsio\" —bermoq, qo`shib bermoq", "yunoncha “Kauazl”_ sabab,”atributsio”_ bermoq, ayirib bermoq"], answer: 0 },
    { id: "s51", text: `Qaysi olim va uning shogirdlari stereotiplar ba'zan muloqtni to'g'ri yo'nalganligini ta'minlasa, bosgqa hollarda esa undagu xatoliklarning sababi bo'lishi mumkinligini kuzatishgan`, options: ["A.A Badalyov", "A.N Leontev", "B,F Lomov", "M.G Andreyeva"], answer: 0 },
    { id: "s52", text: `Verbal ta'sir`, options: ["so`z va nutqimiz orqali ko`rsatadigan ta`sirimizdir", "ko`z imo ishorasi orqali ta`sir", "tana harakatlari orqali ta`sir ettish", "Ovoz va tovushlar orqali ta`sir"], answer: 0 },
    { id: "s53", text: `Verbal`, options: ["so`zlar", "iboralar", "jestlar", "ovoz tembri ta`sirning asosiy vosiyalari"], answer: 0 },
    { id: "s54", text: `Noverbal ta'sirning ma'nosi`, options: ["nutqsiz", "tovushsiz", "ovozsiz", "ohangsiz"], answer: 0 },
    { id: "s55", text: `Noverbal ta'sirning asosiy vositalari`, options: ["mimika pantomimik, jestlar, qiliqlar", "ovoz toni tembr", "tana harakatlari", "barmoq harakatlari"], answer: 0 },
    { id: "s56", text: `Paralingvistik ta'sir bu`, options: ["Nutqning atrofidagi nutqni bezovchi, uni kuchaytiruvchi yoki susaytiruvchi omillar", "Yuz ifodalarining yaqqol namoyon bo`lishi, ko`zlar bilan ishora qilsh", "Ovoz chastotasi va kuchi, nutqning ravonligi omillari", "tana hatti harakatlari intensivligi, yoki kam namoyon bo`lishi"], answer: 0 },
    { id: "s57", text: `)Olim Megtabyan fikricha, so'zlayotgan odamning gaplari tinglovchiga necha foiz ta'sir o'tkazadi`, options: ["7 %", "8%", "9%", "10%"], answer: 0 },
    { id: "s58", text: `Olim Megtabyan fikricha, so'zlayotgan odamning paralingvistik omillari tinglovchiga necha foiz ta'sir o'tkazadi`, options: ["38%", "37%", "36%", "35%"], answer: 0 },
    { id: "s59", text: `Olim Megtabyan fikricha, so'zlayotgan odamning noverbal harakatlari tinglovchiga necha foiz ta'sir o'tkazadi`, options: ["58%", "57%", "56%", "55%"], answer: 0 },
    { id: "s60", text: `Muloqot samaradorligi nimalarga bog'liq`, options: ["gapirish va tinglash", "kuylash va tinglash", "nigoh bilan tasir qilishga", "jestlar va mimikalarga"], answer: 0 },
    { id: "s61", text: `Ta'sir yo'naltirilgan shaxs bu…`, options: ["ta`sirning adresati", "ta`seining tashabbuskorri", "ta`sirning obyekti", "ta`sirning subyekti"], answer: 0 },
    { id: "s62", text: `Turli vositalar yordamida insonlarning fikrlari, hissiyotlari va hatti-harakatlariga ta'sir ko'rsata olish bu…`, options: ["psixologik ta`sir", "manipulyativ ya`sir", "jismoniy ta`sir", "hissiy ta`sir"], answer: 0 },
    { id: "s63", text: `Tinglash texnikasi nechta`, options: ["2", "3", "4", "5"], answer: 0 },
    { id: "s64", text: `Tinglash texnikalari qaysilar`, options: ["so`zma so`z qaytarish, boshqacha talqin qilish", "so`zma so` qaytarsh, eslab qolganini aytsh", "eslab qolganini aytish, boshqacha talqin qilish", "boshqacha taqlqin qilish, tasavvurdagilarni tasvirlash"], answer: 0 },
    { id: "s65", text: `Professional tinglash texnikasi necta`, options: ["aktiv holat, suhbatdoshga qiziqish bildirish, o`ychan jimlik", "aktiv holat, suhbatdoshga qiziqish bildirish,", "suhbatdoshga qiziqish bildirish, o`ychanjimlik", "aktiv holat,o`ychan jimlik"], answer: 0 },
    { id: "s66", text: `Psixolofik ma'noda guruh tushunchasiga to'g'ri ta'rif bering`, options: ["umumiy belgilar umumiy faoliyat , muloqot hamda umumiy maqsad asosida birlashgan kishikar uyushmasidir", "turli jins vakillari bir maqsad sarimintilishi", "turli yosh va tabaqa vakilarining manfatdor birlashuvi va uyushishi", "jamiyat rivoji yo`lida birlashgan turli millatlar va ellatlar to`plami"], answer: 0 },
    { id: "s67", text: `V,M Kraimova bo'yicha guruh turlarini tasniflang`, options: ["shartli va real guruhlar", "shartli va noreal", "norasmiy va rasmiy guruhlar", "uyushgan va uyushmagan"], answer: 0 },
    { id: "s68", text: `Real guruhlar nechtaga bolinadi`, options: ["2", "3", "4", "5"], answer: 0 },
    { id: "s69", text: `Real guruhlarni tasniflang`, options: ["labaratoriya tipi va tabiiy guruh", "labaratoriya tipi va eksperemental", "tabiiy guruh va eksperemental", "eksperemental va shartli guruhlr"], answer: 0 },
    { id: "s70", text: `Y,B Bromley etnik guruhlar psixologiyasida ikki tomonni ajratib beradi. Ular qaysilar`, options: ["psixik asos va hissiyot sohasi", "psixik asos va emotsiya sohasi", "hissiyot sohasi va emotsiya sohasi", "hissiyot sohasi va fiziologik asos"], answer: 0 },
    { id: "s71", text: `kichik guruhlarga xos qonunyatlar nechta`, options: ["5", "4", "3", "2"], answer: 0 },
    { id: "s72", text: `Kichik guruhlarda odamlar soni nechtagacha bo'ladi`, options: ["2-40", "1-10", "40-100", "100-200"], answer: 0 },
    { id: "s73", text: `E.Meyo kichik guruhlarni nechtaga bo'lishni taklif qiladi`, options: ["2", "3", "4", "5"], answer: 0 },
    { id: "s74", text: `E.Meyo bo'yica kichik guruhlar tasnifi`, options: ["rasniy va norasmiy", "toq va juft", "uyushgan va uyushmagan", "ishchilar va rahbarlar"], answer: 0 },
    { id: "s75", text: `G Haymen tomonidan fanga qanady tushuncha kiritilgan`, options: ["referent guruh", "efferent guruh", "ambivalent guruh", "rasmiy guruh"], answer: 0 },
    { id: "s76", text: `Kim ilk bor referent guruh atamasini fanga kiritgan`, options: ["G hayman", "E Meyo", "Makdugal", "Ross"], answer: 0 },
    { id: "s77", text: `Referent guruh tushunchasini Hayman nechanchi yilda kiritgan`, options: ["1942", "1943", "1944", "1945"], answer: 0 },
    { id: "s78", text: `Agregatsiya bu…`, options: ["olomon", "guruh", "kata guuh", "kichik guruh"], answer: 0 },
    { id: "s79", text: `Agregatsiyaga psixologik ta'rif bering`, options: ["ko`chada tasodifiy hodisani tomosha qilib turgan guruh", "oldindan belgilangan va kelishilgan uchrashuv", "Maqsadli ravishda bir nechta odamlarning o`zaro birlashishi", "ko`chada tasofigiy uchrashgan ikki odam"], answer: 0 },
    { id: "s80", text: `CH.Kuli hamkorlikning darajasiga ko'ra guruhlarni nechaga bo'ladi`, options: ["2", "3", "4", "5"], answer: 0 },
    { id: "s81", text: `Guruhlarning hamkorlik darajasiga ko'ra tasniflagan olim kim`, options: ["Ch.Kuli", "E Meyo", "G Hayman", "Ross"], answer: 0 },
    { id: "s82", text: `Konformizm atamasini ma'nosi nima`, options: ["moslashish", "o`zgarish", "ko`nikish", "o`rganish"], answer: 0 },
    { id: "s83", text: `Guruh fikriga nomigagina ko'nish va qo'shilish fanda nima deb ataladi`, options: ["tashqi konformizm", "ichki konformizm", "yuzaki yondashuv", "yuzaki konformizm"], answer: 0 },
    { id: "s84", text: `Tashqi konformizm bu`, options: ["guruh fikriga nomigagina qoshilish ammo ruhan qarshi bolish", "guruh fikriga nomigagina qoshilish ammo ruhan ham qabul qilish", "guruh fikriga to`lig`icha qoshilish va ruhan qabul qilish", "guruh fikriga to`lig`icha qoshilish va ruhan rad etish"], answer: 0 },
    { id: "s85", text: `Ichki konformizm bu`, options: ["guruh fikriga to`lig`icha qoshilish va ruhan qabul qilish", "guruh fikriga nomigagina qoshilish ammo ruhan qarshi bolish", "guruh fikriga to`lig`icha qoshilish va ruhan rad etish", "guruh fikriga nomigagina qoshilish ammo ruhan ham qabul qilish"], answer: 0 },
    { id: "s86", text: `Guruh fikriga tolaligicha qo'shilish fanda qanday ataladi`, options: ["ichki konformizm", "tashqi konformizm", "yuzaki yondashuv", "yuzaki konformizm"], answer: 0 },
    { id: "s87", text: `Konformizm necha xil ko'rinishda bo'ladi`, options: ["2", "3", "4", "5"], answer: 0 },
    { id: "s88", text: `Konformizm qanday ko'rinishlari bor`, options: ["yon berish va maqullash", "yon berish va itoat etish", "maqullash va itoat etsih", "maqullash va inkor etish"], answer: 0 },
    { id: "s89", text: `Konformizm tabiatini tushuntirish uchun eksperemental tadqiqotlar olib brogan olimlarni belgilang`, options: ["M Sherif, Salomon Ash, Milgram", "M Sherif, Salomon Ash, Ross", "Salomon Ash, Milgram, Kuli", "Sherif, Milgram, Meyo"], answer: 0 },
    { id: "s90", text: `rus olimi V.`, options: ["Yadov dispozitsion konsepsiyasini yaratib, unda ustanvkalarning necha bosqichini keltirib o`tadi", "4", "3", "2"], answer: 5 },
    { id: "s92", text: `Attityudni 1942 yil tadqiq etib uni uchta qismga ajratgan olimni ko'rsating`, options: ["M.Smit", "E Meyo", "Kuli", "Andreyeva"], answer: 0 },
    { id: "s93", text: `M.Smit bo'yicha ijtimoiy ustanovka qismlar qaysilar`, options: ["kognitiv, affektiv, konativ", "affektiv, konativ effektiv", "kognitiv, affektiv, effektiv", "kognitiv, emotiv, konativ"], answer: 0 },
    { id: "s94", text: `Mobil tipga ta'rif bering`, options: ["harqanday ish bilan mashg`ul bo`lgan sharitda tez muloqotga kirishuvchan", "harqanday ish bilan mashg`ul bo`lgan sharitda tez muloqotga kirisha omaydi", "harqanday ishga kirisha olaydidan muloqotchan bolmagan tip", "harqqanday sharoitga kirisha olmaydi lekin muloqotga tez kirishadi"], answer: 0 },
    { id: "s95", text: `Rigid tipga ta'rif bering`, options: ["bir faoliyatdan ikkinchisiga ko`chishi qiyin, tavakkaliga ish qiymaydi", "harqanday ish bilan mashg`ul bo`lgan sharitda tez muloqotga kirishuvchan", "harqanday ish bilan mashg`ul bo`lgan sharitda tez muloqotga kirisha omaydi", "harqqanday sharoitga kirisha olmaydi lekin muloqotga tez kirishadi."], answer: 0 },
    { id: "s96", text: `Qaysi shaxs “ Qilich bilan har narsa qilish mumkin, faqat uning ustiga o’tirib bo’lmaydi” deb aytgan edi.`, options: ["Napalyon", "Jon Lokk", "Platon", "Leontev"], answer: 0 },
    { id: "s97", text: `Laper nechanchi yilda eksperement o’tkazgan ustanovka bo’yicha?`, options: ["1934", "1940", "1939", "1942"], answer: 0 },
    { id: "s98", text: `Shaxs ijtimoiylashuvi yana qaysi so’z bilan qo’llaniladi ?`, options: ["Sotsializatsiya", "Attiyud", "Bazaviy", "Qadryat"], answer: 0 },
    { id: "s99", text: `Guruhlarning turlari nechta ?`, options: ["4", "2", "3", "5"], answer: 0 },
    { id: "s100", text: `Muloqotning psixologik tizimi nechta?`, options: ["3", "4", "5", "2"], answer: 0 },
    { id: "s101", text: `Tovushlar, to’xtalishlar, duduqlanish, yo’tal, til bilan amalga oshiriladigan harakatlar, nidolar bu qaysi psixologik ta’sirga kiradi?`, options: ["Paralingivistik", "Verbal", "Noverbal", "Intraktiv"], answer: 0 },
    { id: "s102", text: `Qaysi olim “ birinchi marta ko’rishib turgan suhbatdoshlardagi ta’ssurotlarning ijobiy gapirgan gaplari 7% ” ta’ir qilishniaytgan?`, options: ["Megrabyan", "Yadov", "Laper", "Leontev"], answer: 0 },
    { id: "s103", text: `Proffisonal tinglash texnikasiga qaysilar kiradi?`, options: ["Aktiv holat, samimiy, o’ychan-jimlik", "Aktiv holat, tez-tez gapirish", "O’chan-jimlik", "Samiiy qiziqish bildirish"], answer: 0 },
    { id: "s104", text: `Qaysi olim talabalarga turlicha qiyofali shaxslarning fotosur’atlarini ko’rsatgan?`, options: ["Badalyev", "Smitt", "Laper", "Megrabyan"], answer: 0 },
    { id: "s105", text: `“Obyektiv kuzatish”– bu?`, options: ["Chetdan kuztish", "Ichkaridan kuzatish", "Kuzatmaslik", "O’z-o’zini kuzatish"], answer: 0 },
    { id: "s106", text: `Qaysi metod Sotsialogiyadan kirib kelgan?`, options: ["Hujjatlarni o’rganish metodi", "Kuzatish metodi", "Test metodi", "So’roq metodi"], answer: 0 },
    { id: "s107", text: `Iboralar, tushunchalarni analiz qilish metodi qaysi?`, options: ["Kontent-analiz", "Hujjatlarni o’rganish metodi", "Kuzatish metodi", "So’rovnoma metodi"], answer: 0 },
    { id: "s108", text: `X.Lassuell va B.Berelsonlar qaysi metodni gazetalarda ilk marotaba qo’llagan?`, options: ["Kontent-analiz metodi", "So’rovnoma metodi", "Test metodi", "Hujjatlarni o’rganish metodi"], answer: 0 },
    { id: "s109", text: `X.Lassuel va B.Berelson qaysi millat vakili?`, options: ["AQSH", "Britaniya", "Ispaniya", "Avstriya"], answer: 0 },
    { id: "s110", text: `Odatdagi anketa tuzilishi jihatdan nechta qismga bo’linadi?`, options: ["3 ta", "2 ta", "1 ta", "5 ta"], answer: 0 },
    { id: "s111", text: `“Rorshaxning siyoh dog’lari” proyektiv usuli qachondan ishlatila boshlangan?`, options: ["1921-yilda", "1925-yilda", "1930-yilda", "1919-yilda"], answer: 0 },
    { id: "s112", text: `Rorshaxning “Siyoh dog’lari” proyektiv usuli nechta dog’dan iborat?`, options: ["10 ta", "12 ta", "9 ta", "11 ta"], answer: 0 },
    { id: "s113", text: `Qaysi olimning proyektiv usulida “ Hayotda te-tez uchrab turadigan ziddiyatli vaziyatlarni aks ettirgan rasmlar” beriladi?`, options: ["Rozentsveyg", "Rorshax", "Klimov", "Bandura"], answer: 0 },
    { id: "s114", text: `Ijtimoiy psixologiya taraqqiyotiga qaysi fan sezilarli hissa qo’shgan?`, options: ["Falsafa", "Tarix", "Huquqshunoslik", "Tabiatshunoslik"], answer: 0 },
    { id: "s115", text: `Ijtimoiy psixologiyaga “Ijtimoiy fakt” tushunchasini kim kiritgan?`, options: ["G.Tard", "Gobs", "O.Kont", "Spenser"], answer: 0 },
    { id: "s116", text: `Bixeviorizm yo’nalishlari doirasida ijtimoiy psixologik tadqiqotlar avvalo kimlar nomi bilan bog’liq?`, options: ["K.Xoll va V. Skinner", "K. Miller va ~Dollard", "Dj. Tibo va G. Kelli", "G.Tard"], answer: 0 },
    { id: "s117", text: `Psixoanaliz doirasida ijtimoiy psixologik tadqiqotalarni qaysi olimlar ishlab chiqishgan?`, options: ["E.From va Dj. Salliven", "K.Miller va G. Tard", "Dj. Tibo va G. Kelli", "Dollard"], answer: 0 },
    { id: "s118", text: `Gerbart Mid qaysi nazariyaga asos solgan?`, options: ["Intraktsionizm", "Kognitivizm", "Psixoanaliz", "Rollar nazariyasi"], answer: 0 },
    { id: "s119", text: `Referent guruhlar nazariyasiga kimlar asos slogan?`, options: ["G.Xeymen va R.Metron", "Dj. Tibo va G. Kelli", "K.Levin", "G. Kelli va Dj.Tibo"], answer: 0 },
    { id: "s120", text: `Qaysi olim “ Muloqot shunchalik ko’p jarayon unda bir vaqtning o’zida quyidagilar kiradi: Individlarning o’zaro tasir jaroyoni”`, options: ["F.Paragin", "K.Lekin", "Dj.Tibo", "G.Kelli"], answer: 0 },
    { id: "s121", text: `Muloqotning psixologik tizimini G.Andreeva bo’yicha strukturasi xato berilgan javobni toping?`, options: ["Xulq-atvor boshqaruvi", "Kommunikativ tomoni", "Intreaktiv tomoni", "Perseptiv tomoni"], answer: 0 },
    { id: "s122", text: `B.Lomov bo’yicha muloqotning funksiyalari qaysi qatorda to’g’ri berilgan?`, options: ["Ma’lumotlar almashinuvi", "Muloqotning perseptiv tomoni", "Kommunikativ tomoni", "Intreaktiv tomoni"], answer: 0 },
    { id: "s123", text: `“Guruhlararo munosabatlarga taalluqli fenomenlarni tabiiy sharoitlarda maxsus reja asosida tekshirib o’rgangan” amerikalik psixolog kim?`, options: ["M.Sherif", "F.Paragin", "K.Levin", "Dj. Tibo"], answer: 0 },
    { id: "s124", text: `Ijtimoiy drammaturgiya nazriyalarni shakllantirgan psixolog kim?`, options: ["F. Gofman", "E.G’oziyev", "Andreva", "V.Karimova"], answer: 0 },
    { id: "s125", text: `Oila va oilaviy munosabatlarda o’zbek psixologlardan tadqiqot olib borgan shaxs xato berilgan javobni toping?`, options: ["M.Davletshin", "F.Shoumarov", "V. Karimova", "N. Sog’inov"], answer: 0 },
    { id: "s126", text: `Muomala psixologiyasi muammolarida tadqiqot olib borgan shaxs?`, options: ["E.G’oziyev", "M. Davletshin", "F. Shoumarov", "N.Sog’inov"], answer: 0 },
    { id: "s127", text: `Ziddiyatli holatlarda tadqiqot olib borgan shaxs qaysi qatorda to’g’ri ko’rsatilgan?`, options: ["T.Adizova", "N. Sog’inov", "F. Shoumarov", "M.Davletshin"], answer: 0 },
    { id: "s128", text: `M.Andrevaning ijtimoiy psixologiyaning mavzu baxsi haqidagi hozirgi zamon qarashlarini umumlashtirib, bu o’rinda ……… ta xil yondashish borligini e’tirof etgan.`, options: ["3 ta", "2 ta", "4 ta", "5 ta"], answer: 0 },
    { id: "s129", text: `Ijtimoiy xulq-atvor instinktlar nazariyasi qaysi davlatda vujudga kelgan?`, options: ["Angliya", "AQSH", "Italiya", "Rossiya"], answer: 0 },
    { id: "s130", text: `Itimoiy xulq-atvor nazriyasi nechanchi yilda shakllandi?`, options: ["1908-yilda", "1910-yild", "1900-yilda", "1890-yilda"], answer: 0 },
    { id: "s131", text: `Ijtimoiy xulq-atvor instinktiga kim tamonidan asos solingan?`, options: ["U.Makdugoll", "M.Davletshin", "S.Xoll", "G. Tard"], answer: 0 },
    { id: "s132", text: `Dj.Bolduin kitobini toping`, options: ["“Ijtimoiy psixologiya bo’yicha tadqiqotlar”", "“Ijtimoiy psixologiya”", "“Ijtimoiy psixologiyaga kirish”", "“Umumiy psixologiya”"], answer: 0 },
    { id: "s133", text: `Qaysi olim “Ikki turli irsiyat haqida – tabiiy va ijtimoiy irsiyat” haqida fikr bildirgan?`, options: ["Dj. Bolduin", "S. Xoll", "G. Tard", "U.Makdugoll"], answer: 0 },
    { id: "s134", text: `Qaysi davlatda affect holatida ro’y bergan jinoyatga aybni yumashatuvchi holat sabab bo’lgan. Hattoki maxsus modda ham kiritilgan? Bu qaysi davlat?`, options: ["Italiya", "AQSH", "Angliya", "Ispaniya"], answer: 0 },
    { id: "s135", text: `Qaysi olim o’z davlatida maxsus qonun kiritilishiga sababchi bo’lgan?`, options: ["S. Sigeli", "Dj. Bolduin", "U. Makdugoll", "S.Xoll"], answer: 0 },
    { id: "s136", text: `“Omma jinoyatlari” kitobining muallifi?`, options: ["S. Sigeli", "G. Lebon", "G. Tard", "U.Makdugoll"], answer: 0 },
    { id: "s137", text: `“Omma psixologiya” kitobining mualiffi?`, options: ["G. Lebon", "S.Sigeli", "U.Makdugoll", "Dj.Bolduin"], answer: 0 },
    { id: "s138", text: `Ommaviy hodisalarni o’rganish natijasida nechanchi yilda ilk ktob bosmadan chiqarildi?`, options: ["1890 –yilda", "1900-yilda", "1870-yilda", "1901-yilda"], answer: 0 },
    { id: "s139", text: `“Taqlid qilish qonunlari” muallifini toping?`, options: ["G.Tard", "Dj.Bolduin", "S.Sigeli"], answer: 0 },
    { id: "s140", text: `“Agar odam ozgina bo’lsa ham o’zini anglasa, demak u o’z-‘o’ziga ko’rsatmalar bera oladi” Ushbu gap muallifi kim?`, options: ["T.Shibutani", "Levin", "S.Sigeli", "G.Tard"], answer: 0 },
    { id: "s141", text: `Rossiyada XIX asrning 20-yillardan boshlab ijtimoiy psixologiya rivojlana boshladi. Bu borada rus ijtimoiy psixologiyasining asoschisi deb …….. aytish mumkin.`, options: ["V.M.Bexterev", "M.Restner", "Yu.Vasilev", "K.Levin"], answer: 0 },
    { id: "s142", text: `“Olomon va omma” asarining muallifi...`, options: ["Gustav Lebon", "Monteske", "Gegel", "Z.Freyd"], answer: 0 },
    { id: "s143", text: `Olomon ichidagi odamlar xatti – xarakatlariga ta’sir etuvchi omillar`, options: ["Taqlid qilish, ta’sirlanish, anonimlik", "Taqlid, ongsizlik, faollik", "Ta’sirlanish, instinkt, stress", "Anonimlik, ong tormozlanishi, reflektorlik"], answer: 0 },
    { id: "s144", text: `Ijtimoiy xulq-atvor instinktlari nazariyasining asoschisi kim?`, options: ["inglizpsixologiUilyamMakdugall", "rus psixologi{=V.Petrovskiy", "o‘zbek psixologi E.G‘.G‘oziev", "Italiyalik huquqshunos S.Sigeli"], answer: 0 },
    { id: "s145", text: `SHaxsning konkret hayotiy vaziyatlardagi huquq va burchlaridan iborat harakatlari majmuini bildiruvchi tushuncha nima?`, options: ["Rol", "Norma", "Sanksiya qilish", "Rollardagi nizo"], answer: 0 },
    { id: "s146", text: `“Inson avvalo kishini diqqat-e’tiborini o‘ziga qaratadigan sifatlarini anglaydi” deb aytgan olimni aniqlang?`, options: ["Dj.Mill", "V.Vundt", "I.S.Kon", "Markus"], answer: 0 },
    { id: "s147", text: `“O‘z-o‘zini anglash – bu birgalikdagi faoliyati tufayli birlashgan odamlarni ko‘zlari bilan boqishdir” deb aytgan olimni aniklang?`, options: ["Dj.Mid", "A.N.Leontev", "I.S.Kon", "Z.Freyd"], answer: 0 },
    { id: "s148", text: `Munosabat kategoriyasi..`, options: ["insonlarning birgalikdagi harakatlarmda,sub’ekt – sub’ekt munosabatida namoyon bo‘ladi", "Shaxslarning o‘zaro ta’sirlashuvi", "Inson avvalo kishini diqqat-e’tiborini o‘ziga qaratadigan sifatlarini anglaydi", "Odamlarni hamkorlikdagi faoliyati jarayonida bir – brini tushunishi"], answer: 0 },
    { id: "s149", text: `SHaxslar o‘rtasida sub’ektiv kechadigan aloqalarga nima deyiladi?`, options: ["SHaxslararo munosabat", "SHaxslarning o‘zaro tushunishi", "SHaxslar o‘rtasidagi kechinmalar", "SHaxslarning o‘zaro ta’sirlashuvi"], answer: 0 },
    { id: "s150", text: `Muomalada vizual kontakt bu ....`, options: ["Suxbatdoshlarning ko‘zlar orqali aloqasi", "Suxbatdoshga irodaviy ta’sir etish", "Suxbatdoshga xumrayib qarash", "Suxbatdoshning kayfiyatiga"], answer: 0 },
  ],
  taraqqiyot: [
    { id: "t1", text: `E.Erikson shaxs taraqqiyotini nechata davrga ajratgan?`, options: ["8", "5", "7", "11"], answer: 0 },
    { id: "t2", text: `“Akseleratsiya” termining ma’nosi nima?`, options: ["Tezlatish", "Umumlashtirish", "Tiklash", "Sekinlashish"], answer: 0 },
    { id: "t3", text: `Yetuklik necha bosqichga ajratiladi?`, options: ["3", "4", "5", "6"], answer: 0 },
    { id: "t4", text: `Yetuklik davrida yetakchi faoliyat nima?`, options: ["Mehnat", "O’qish", "Shaxsiy intim muloqat", "Donishmandlik"], answer: 0 },
    { id: "t5", text: `Keksalik davrida qanday o’zgarishlar sodir bo’ladi? biologik, ijtimoiy, psixologik`, options: ["Biologik", "Ijtimoiy", "Psixologik"], answer: 0 },
    { id: "t6", text: `Keksalik haqidagi fan nima deyiladi?`, options: ["Gerontologiya", "Akmeologiya", "Pedalogiya", "Psixologiya"], answer: 0 },
    { id: "t4", text: `hayotning individual davomiyligining ortishi`, options: ["1,2,3,4", "1,2,3", "2,3,4", "1,3,4"], answer: 0 },
    { id: "t3", text: `110-yoshgacha a.sevimli ishdan uzoqlashish b.keksalik c.munkillaganlik`, options: ["1-a; 2-b;3-c", "2-b;1-c; 3-a", "1-c; 2-b; 3-a", "3-b,2-a, 3-c"], answer: 0 },
    { id: "t9", text: `Keksalik davridagi inqirozni yumshatish strategiyasi nima deyiladi?`, options: ["hayotga yangicha qarash", "ijtimoiy", "Gerontologiya", "Rekaputulyatsiya"], answer: 0 },
    { id: "t10", text: `Ko’pchilik olimlarning tadqiqot natijalaridan aniqlanishicha keksayish necha yoshdan boshlanadi?`, options: ["ayollarda 55 ,erkaklarda 60", "erkaklarda 55, ayollarda 70", "umumiy 70", "Umumiy 65"], answer: 0 },
    { id: "t11", text: `Keksalarda uchraydigan salbiy tiplar qaysi?`, options: ["agressiv,maxmadonalar", "Yashash uchun kurash", "Baxillar", "Xushchaqchaqlar"], answer: 0 },
    { id: "t12", text: `“Katta Katon yoki keksayish haqida” asar muallifi kim?`, options: ["Mark Tulliy Tsitseron", "Xoll", "L.Vigotskiy", "E.Erikson"], answer: 0 },
    { id: "t13", text: `«Keksaysh» nomli monografiyaning muallifi kim?`, options: ["Xoll", "Mark Tulliy Tsitseron", "L.Vigotskiy", "E.Erikson"], answer: 0 },
    { id: "t14", text: `Gerontologiya bu grekcha so'z bo'lib`, options: ["keksayishning, keksalikning kelib chiqishi demakdir", "navqironlik, jo‘shqinlik demakdir", "passivlik, pessimistik demakdir", "optimistik, altruistik demakdir"], answer: 0 },
    { id: "t15", text: `Geriatriya so'zining ma’nosi nima?`, options: ["keksaygan inson shaxsini davolash", "tibbiyot uskunalarini ishlatish", "mexnatga jalb qilish", "dam olish"], answer: 0 },
    { id: "t16", text: `Involyutsiya tushunchasining ma’nosi nima?`, options: ["evolutsiyaning teskarisi bo`lib, o`sishdan orqaga qaytishni ifodalaydi", "bosqichma-bosqich shakllanish", "o‘sishdan to‘xtab qolish", "Rivojlanish, taraqqiyot"], answer: 0 },
    { id: "t17", text: `Gerogigiena nima?`, options: ["keksaygan odamning salomatligini saqlash va mustahkamlash sohasidir", "psixogigienaning asosiy soxasi", "tibbiy psixologiyadagi asosiy usul", "bolalarni salomatligini asrash tadbirlari"], answer: 0 },
    { id: "t18", text: `Geteroxronlik- tushunchasiga ta’rif bering?`, options: ["bir xil yoshdagi odamlarda ruhiy jarayonlarning turlicha (har xil vaqt va muddatda) namoyon bo`lishidir", "evolutsiyaning teskarisi bo`lib, o`sishdan orqaga kaytishni ifodalaydi", "bosqichma-bosqich shakllanish", "o‘sishdan to‘xtab qolish"], answer: 0 },
    { id: "t19", text: `I.V.Davidovskiy «Keksayish nima? nomli asarida ta’kidlaganidek inson 50—60 yoshga to'lganda yoki undan oshgan chog'ida ... nima sodir bo’ladi?`, options: ["yetuklikning kechikkan davriga kirib keladi", "bir xil yoshdagi odamlarda ruhiy jarayonlarning turlicha (har xil vaqt va muddatda) namoyon bo`ladi", "evolutsiyaning teskarisi bo`lib, o`sishdan orqaga kaytishni ifodalaydi", "bosqichma-bosqich shakllanish"], answer: 0 },
    { id: "t20", text: `P.P.Lazerev 1928 yilda umr o'tishi bilan sezgiga aloqador nima xaqida gapirgan edi?`, options: ["ko`ruv apparati markaziy etnologiyasining xiralashuvini", "ta’m-maza yo’qoladi", "eshitish regressiyani", "mns ishlashi sekinlashuvini"], answer: 0 },
    { id: "t21", text: `V.Mixaylova—Lukasheva, M.M.Aleksandrovskaya kabi olimlarning fiziologik va gistologik tadqiqotlarida nimalar o‘rganilgan?`, options: ["keksalarning asab sistemasi, bosh miya tuzilishi o`zgarishi", "ko`ruv apparati markaziy etnologiyasining xiralashuvini", "suyaklar kotishi", "regressiyani"], answer: 0 },
    { id: "t22", text: `Pakoning fikricha.`, options: ["idrok qilinayotgan ob’ekt va uning stimullari qanchalik murakkablashib borsa, tajribada yosh davrining farqlari shunchalik ortib boradi", "sensor informatsiyani qayta ishlash va stimullarni baholash uchun keksa kishilarga ko`p vaqt kerak.", "Ko`rish pasayishining ikkita sababi bo`lib, bir ko`z gavhari-ning torayishi, ikkinchisi ko`z akkomodatsiyasining yomonlashuvidir", "ko`ruv apparati markaziy etnologiyasining xiralashuvini"], answer: 0 },
    { id: "t23", text: `Amerikalik psixolog Veksler keksayishda aqlni o'lchash uchun qachon maxsus test ishlab chiqqan?`, options: ["1939", "1940", "1948", "1950"], answer: 0 },
    { id: "t24", text: `Keksalik davriga necha yoshdagi erkak va ayollar kiradi?`, options: ["61(56)-74 yoshdagilar", "50-60- 75 yoshdagilar", "75-90 yoshagilar", "90-va undan keyingi yosh"], answer: 0 },
    { id: "t25", text: `Qarilik davri necha yoshlarni kamrab oladi?`, options: ["75-90", "55-60-75", "61(56)-74 yoshdagilar", "50-60-75 yoshdagilar"], answer: 0 },
    { id: "t26", text: `I.Baylash va ~ Zabeklar keksalarda qanday jarayonlarni o‘rgangan?`, options: ["xotira, idrok, mantiqiy tafakkur, eruditsiya, nutq sur’ati kabilarni", "temperament, xarakter, qobiliyatni", "motivatsiyani, ehtiyojni", "individual xususiyatlarni"], answer: 0 },
    { id: "t27", text: `Bromley qariyalarda nimani aniqlagan?`, options: ["ijodiy tafakkurning pasayishi, o`ta qiyinchilik bilan yangi sharoitga moslashuvini va dogmatizmga asoslanishini", "xotira, idrok, mantiqiy tafakkur, eruditsiya, nutq sur’ati kabilarni", "temperament, xarakter, qobiliyatni", "motivatsiyani, ehtiyojni"], answer: 0 },
    { id: "t28", text: `Grekov so'z assotsiatsiyasi metodi asosida tekshirgan?`, options: ["keksalarda xotira jarayonining xususiyatini", "keksalarda diqqat jarayonining xususiyatini", "keksalarda sezgi jarayonining xususiyatini", "keksalarda idrok jarayonining xususiyatini"], answer: 0 },
    { id: "t29", text: `G.Leman qaysi bastakorni o‘rganib, uning durdona asarlari keksalikda yaratilganini aniqlagan?`, options: ["I.Bax", "I. Motsart", "N.Bertucholli", "E.Erikson"], answer: 0 },
    { id: "t30", text: `Uzoq umr ko‘ruvchilar davri necha yoshlarni o‘z ichiga oladi?`, options: ["90 va undan kattalar", "55-60-75", "75-90", "50-75"], answer: 0 },
    { id: "t31", text: `To'g'ri fikrlarni aniqlang.`, options: ["G.Ananev tadqiqot metodlarini 3 guruhga bo`lgan.", "Tabiiy eksperimentni birinchi marta F.Lazurskiy taklif etgan.", "Rorshaxning “siyoh dog`lari” testi 8 ta suratdan iborat", "Sotsiometriya metodini birinchi bo`lib amerikalik psixollog J.Moreno taklif qilgan"], answer: 0 },
    { id: "t32", text: `Egosentrik nutq nutqning qanday shakli?`, options: ["Bog`cha bolasining o`yini bilan olib boriladigan va bolalarning o`z-o`ziga qaratilgan nutqi", "Nutq faoliyatining ovoz chiqarmasdan ifoda etiladigan alohida turi", "O`z-o`ziga mahliyo bo`lish, o`zining fazilatlari haqida yuqori fikrga ega bo`lish", "Nutq faoliyatining ovoz chiqarib ifoda etiladigan alohida turi"], answer: 0 },
    { id: "t33", text: `L.Vigotskiy psixik hodisalarni tadqiq qilishda qanday metodni ishlab chiqqan?`, options: ["Eksperimental-genetik metodni", "Eksperimental metodni", "Kuzatuv metodini", "Analiz-sintez metodini"], answer: 0 },
    { id: "t34", text: `Involyutsiya jarayoni qanday kechadi?`, options: ["Jadal rivojlanishga tabiiy sur’atda hosil bo`lganlar yo`q qilinadi yoki tubdan yangilanadi", "Jadal rivojlanishga tayanadi", "Rivojlanishda qoloqlik kuzatiladi", "Rivojlanishning doimiy bosqichlarida sodir bo`lib turadi"], answer: 0 },
    { id: "t35", text: `Bolalar rivojlanishida ikkita omil konvergensiyasi nazariyasi asoschisi kim?`, options: ["V.Shtern", "K.Levin", "G.Olport", "Byuler"], answer: 0 },
    { id: "t36", text: `Bola to’g’ri yurishni, muloqotga kirishishni,predmetli faoliyatni egallash xususiyatini qaysi davrda egallaydi?`, options: ["ilk bolalik davrida", "chaqaloqlik davrida", "go’daklik davrida", "kichik maktab yoshi davrida"], answer: 0 },
    { id: "t37", text: `Nutqning jadallik bilan rivojlanishi qaysi davrga to’g’ri keladi?`, options: ["ilk bolalik davri", "go’daklik davri", "maktabgacha yosh davri", "kichik maktab yoshi davri"], answer: 0 },
    { id: "t38", text: `Kichik maktab yoshi davri necha yoshlarni o’z ichiga oladi?`, options: ["7-11 yosh", "9-10 yosh", "6-10 yosh", "8-11 yosh"], answer: 0 },
    { id: "t39", text: `6 yoshdagi normal rivojlanayotgan bola o’z nutqida qanchagacha so’z ishlata oladi?`, options: ["3000-7000", "3000-6000", "3000-5000", "3000-8000"], answer: 0 },
    { id: "t40", text: `Kichik maktab yoshida yuzaga keladigan yangi psixologik tuzilma nimalardan iborat?`, options: ["intellektual refleksiya", "erkinlik, refleksiya va katta bo’lganligini his etish", "erkinlik, ish-harakat va fikrlarning ichki rejasi", "tashabbuskorlik, tez xafa bo’lish"], answer: 0 },
    { id: "t41", text: `Kichik maktab yoshi davrida yetakchi faoliyat qaysi?`, options: ["o’qish faoliyati", "o’yin va mehnat faoliyati", "predmetli", "rasm chizish"], answer: 0 },
    { id: "t42", text: `Kichik maktab yoshidagi bolalarning psixik rivojlanishida ta’limning rolini aniqlang?`, options: ["bilish jarayonlarining rivojlanishi, ta’lim olishdagi muammolarni yechishda tafakkur jarayoning shakllanishi", "kuzatuvchanlik va ixtiyoriy diqqat, ijodiy xayol, mavhum tafakkurning shakllanishi", "jamoa shaklidagi va faoliyatning shakillari", "harakatlantiruvchi mexanizmlari, uzviyligi,uzluksizligi"], answer: 0 },
    { id: "t43", text: `Kichik maktab yoshidano’smirlikka o’tishdagi inqrozning belgilari nimalarda namoyon bo’ladi?`, options: ["maktabga umuman salbiy munosabat, unga borish majburiy emas, o’quv topshiriqlarini bajarishni istamaslik, o’qituvchilarbilan nizolashishlar", "axloq normalari va xulq-atvor qoidalarini egallaydi", "o’z “MEN” ini va o’z psixologik xususiyatlarini anglay boshlashi", "intellekt ko’rsatkichlarining nihoyatda notekisligi"], answer: 0 },
    { id: "t44", text: `Kichik maktab yoshida tafakkurning qaysi shakli rivojlangan?`, options: ["tushuncha", "umumiy", "xulosa", "hukm"], answer: 0 },
    { id: "t45", text: `Shaxs ijobiy sifatlariga misol?`, options: ["mehnatsevarlik", "qo`rqoqlik", "laqmalik", "sabrsizlik"], answer: 0 },
    { id: "t46", text: `Ruhiy jarayonlarning senzitivlik xususiyati qaysi yosh davriga to'g'ri keladi?`, options: ["kichik maktab", "katta maktab", "bog`cha yoshi", "o`smirlik"], answer: 0 },
    { id: "t47", text: `Bog'cha yoshidagi bola mustaqilligi oshishiga qaysi faoliyat ta'sir qiladi?`, options: ["o`yin", "mehnat", "o`qish", "predmetli o’yin"], answer: 0 },
    { id: "t48", text: `Uch yoshli bolalarda predmetlar bilan muloqotga kirishish natijasida tafakkurning qaysi turi rivojlanadi?`, options: ["ijodiy", "ilmiy", "mantiqiy", "mavhum"], answer: 0 },
    { id: "t49", text: `Bog'cha yoshidagi bolalarda qanday odatlar ko'p uchraydi?`, options: ["uyatchanlik", "botirlik", "jasurlik", "qo`rqoqlik"], answer: 0 },
    { id: "t50", text: `Bolalarda qanday temperament tiplari mavjud?`, options: ["ekstrovert", "introvert", "xolerik", "sangvenik"], answer: 0 },
    { id: "t51", text: `Tug'ilgandan bir yoshgacha shaxs shakllanishini qaysi faoliyat yetaklab boradi?`, options: ["hissiy muloqot", "o`yin", "o`qish", "mehnat"], answer: 0 },
    { id: "t52", text: `Taraqqiuot psixologiyasining fan sifatida o’rganish sohasi qaysi javobda ko’rsatildi.`, options: ["Odam psixikasining yosh davrlar dinamikasini, rivojlanayotgan odam shaxsining psixik sifatlarini", "psixik jarayonlarning ontogenezini o’rganadi;", "Maktabgacha tarbiyada va maktabdagi ta’lim va tarbiya jarayonida bolalarda tafakkurning rivojlanish jarayonini o’rganadi;", "O’quvchilarning bilish faoliyatini va ularda konkret va mavhum tushunchalarini shakllantirish jarayonlarni o’rganadi"], answer: 0 },
    { id: "t53", text: `Pedagogik psixologiya fan sifatida o’rganadigan soxasini ko’rsatgan javobni aniqlang:`, options: ["Ta’lim va tarbiyaning psixologik konuniyatlarini va o’kituvchi psixologiyasini o’rganadi;", "Shaxsning shakllanishiga xos xususiyatlarni va psixologik-pedagogik tadqiqotlarga xos qonuniyatlarni o’rganadi;", "Sotsiometrik metod asosida sinfdagi o’kuvchilarning shaxslararo munosabatini o’rganadi;", "Shaxsning shakllanishida mulokot va ijtimoiy sifatlarning shakllanish mexanizmlarni o’rganadi"], answer: 0 },
    { id: "t54", text: `Bola psixik rivojlanishining shartlari nimalardan iborat.`, options: ["Bolaning odamlar orasidagi xayoti, psixik faolligi, ijtimoiy tashkil etilgan va rag’batlantirib turuvchi faoliyati.", "Darsda tashqi olamdagi narsa va hodisalar haqida bilim va tushunchalarning shakllanishi;", "Bolaning shaxs sifatida rivojlanishi va unda tasavvurlarning xamda xulq-atvor xaqidagi bilimlarning shakllanishi;", "Bolaning rivojlanishida va uning o’yin jarayonida bilim va ko’nikmalarning shakllanishi"], answer: 0 },
    { id: "t55", text: `Bolaning psixik rivojlanishi ta’minlovchi omillar va shart-sharoitlar qaysi javobda berilgan.`, options: ["Tabiiy va sotsial muxit, maktabgacha tarbiya muassasalaridagi tarbiya va maktabdagi ta’lim;", "Boladagi kobiliyat kurtaklari, irsiyat, bosh miya imkoniyatlari bilan bog’lik bo’lgan biologik faktor;", "Oliy nerv faoliyatining tipi bilan bog’lik bo’lgan asab tizimiga xos kuch va xarakatchanlik.", "Barcha javoblar to’g’ri"], answer: 0 },
    { id: "t56", text: `Ijtimoiy muxit va ijtimoiy munosabatlar boladadagi anotomik fiziologik o’zgarishlarga bog’liq.`, options: ["Ilk bolalik davrida shakllanadigan muxim sifatlar nimalardan iborat?", "Tik turib yura olish, predmetli faoliyat va nutkini egallash;", "Odamlar gap-so’zlarini tushunish va shaxsiy faol nutkini shakllanishi;", "Katta yoshdagi odamlar bilan nutk vositasida mulokotga kirisha olish imkoniyati;"], answer: 0 },
    { id: "t57", text: `Maktabgacha tarbiya yoshidagi bolaning psixik taraqqiyotiga xos xususiyatlar bayon etilgan javobni aniqlang.`, options: ["Bolada ikkinchi signal tizimining jadval rivojlanib borishi va tafakkurning shakllanishi, murakkab tushunchalar paydo bo’lishi, ilmiy bilim va tushunchalarining shakllanishi;", "Shu davrda ko’z kuvvatini o’tkirlashishi, eshitish organini rivojlanishi, lug’at boyligi ortishi, diqqat va xotira xajmining kengayishi psixik jarayonlarda ixtiyoriklikning ortib borishi;", "So’zlar ishlatilishi va boshka tafakkur shakllarining bola faoliyati jarayonida ko’llanilishi;", "Bola rivojlanishiga ta’sir etuvchi yangi ijtimoiy sharoitini kelib chikishini, bu sharoitning bola syujetli - rolli o’yinlarida ifodalanishi; o’z - o’zini tushunish va o’z-o’zini baxolashning o’sishi; xarakat motivlari va shaxsiy xulk - atvorini boshqalar talabiga moslashtirilishi, o’quv faoliyati elementlarini o’zlashtirilishi"], answer: 0 },
    { id: "t59", text: `Bolanning maktabda ta’lim olishga tayyorgarligi qanday xususiyatda ifodalanadi.`, options: ["Bola xissiyot va irodasi rivojlanishidagi ma’lum darajaning shakllanganligi va irodasi rivojlanishidagi ma’lum darajaning shakllanganligi va shu asosida ixtiyoriy ongli o’sish extiyojining shakllanganligi, o’z xatti-xarakatlarini ixtiyoriy boshkara olishning shakllanganligi;", "Birinchi sinf dasturi materiallarini o’zlashtira olish imkoniyatini beradigan tashki dunyo xakidagi tasavvur va bilimlar tizimining shakllanganligida;", "Shaxsning bilish faoliyati va turli psixik sifatlarini o’sishi uchun zarur bo’lgan bilim va ko’nikmalar xajmining bolada shakllanganlik ifodalashda.", "Bilish faoliyati va ta’lim - tarbiya jarayonida va ijtimoiy muxitda taklid kila olishida"], answer: 0 },
    { id: "t60", text: `Uch yoshdagi krizis (inkirozi) qanday xatti - harakatlarda ifodalanadi.`, options: ["O’zini.o’zgalardan farqlay (ajrata) olish, o’z imkoniyatlarini tushunish, mustaqilliqqa intilish, o’z istaklarini katta yoshdagi odamlar hohish istagiga qarama-qarshi qo’yish va kattalarni bolaga munosabatida eski tipdagi munosabatini saqlab qolishi;", "Bola o’zining xulkiy xatti-xarakatlarida nima yaxshi-yu, nima yomon degan tasavvurga moslay boshlashi, bola xarakat ida motivlar ko’rashishi kelib chikishi, xulkiy normalarga mos ravishda kabul kila olishning shakllanishi;", "Bola o’z xatti - xarakatlarini nazorat kila oladi, o’zini va tengdoshlarining yutuqlarini tushuna boshlaydi, muvaffaqiyatsizlikka uchraganda qaysarlik qiladi, bu shuning shu yoshiga xos jismoniy talabidan kelib chiqadi.", "Bolaning shaxsiy va individual xususiyatlaridan kelib chiqadi, o’z xatti - xarakatlarini to’g’ri baxola olmaydi"], answer: 0 },
    { id: "t61", text: `Kichik maktab yoshidagi bolalarning psixik rivojlanishida ta’limning roli kaysi javobda berilgan.`, options: ["Kichik maktab o’kuvchilarda jamoa shaklidagi mulokot va faoliyatining shakllanishi va bilimga bo’lgan kizikishning rivojlanishi;", "Ko’zatuvchanlik, ixtiyoriy diqqat, esda olib qolish usullari, ijodiy hayol, mavxum tafakkurini shakllanishi;", "Bilish jarayonini rivojlanishi, ta’lim olishdagi muammolarni yechish imkoniyatini beradigan tafakkur jarayonining shakllanishi.", "Kichik maktab yoshidagi bolalarda amaliy ko’nikmalar va malakalar va faoliyat tizimining rivojlanishi"], answer: 0 },
    { id: "t62", text: `Kichik maktab yoshidagi o’quvchi mexnatining psixologik xususiyatlari ko’rsatilgan javobni aniqlang.`, options: ["O’z-o’ziga xizmat qilish va o’zini nazorat qilishning dastlabki, elementar ko’rinishini shakllantiradi.", "Mehnat bu davrdagi asosiy yetakchi faoliyat hisoblanadi;", "Mehnat kasbga hos asosiy malaka va ko’nikmalarini shakllantiradi, mexnatsevarlikni tarbiyalaydi.", "Kichik maktab yoshidagi o’quvchilarda axloqiy hislarni shakllantiradi, mexnatsevarlikni tarbiyalaydi"], answer: 0 },
    { id: "t63", text: `Kichik maktab yoshida vujudga keladigan yangi o’zgarishlar nimalardan iborat.`, options: ["Qiziqishlari yo’nalishning turlichaligi va maxsus qobiliyatlarning yuzaga kelishi;", "Erkinlik, refleksiya va katta bo’lganligini his etish;", "Erkinlik, tanqidiylik, o’z fikrlarining xaqqoniyligi asoslab bera olish.", "Hatti harakat va o’z ichki rejasida o’z xarakatini xaqqoniy asoslab bera olish"], answer: 0 },
    { id: "t64", text: `Kichik maktab o’quvchilarining taraqqiyoti nimalardan iborat?`, options: ["Axloq normalari va xulq - atvor qoidalarini egallaydi, bolaning o’z-o’zini anglashi va o’z-o’ziga baxo berishi kattalar baxosiga bog’lik bo’lib, anik vaziyatli xarakterga ega bo’ladi;", "O’z-o’zini tarbiyalash elementlari yuzaga keladi; mustaqilikka erishishga intilish, o’zining shaxsiy hissiyotlarini bilish extiyojlari paydo bo’ladi;", "O’zini tevarak atrofdagi olamdan ayrib qo’ygan xolda o’z \"men\"ligini anglashi, shaxsiy xulq - atvori yuzaga kelib, uni o’z motivlariga buysundiradi;", "Bolada men konsepsiyasini paydo bo’lishi va aniq vaziyatni xarakterlay olishi"], answer: 0 },
    { id: "t65", text: `Kichik maktab yoshida yetakchi faoliyat kaysi bir javobda ko’rsatilgan?`, options: ["O’qish faoliyati;", "Predmetli faoliyat;", "O’yin va mexnat faoliyati;", "Taqlidchanlik faoliyati"], answer: 0 },
    { id: "t66", text: `Kichik maktab o’quvchilarning kadrli katta odamlar (o’kituvchi va ota-onalar) va o’z tengqurlari bilan bo’ladigan munosabatlari hususiyati nimalardan iborat?`, options: ["Bunda gap shundaki, kattalar bola uchun obru tariqasida kelsa, tengqurlari guruxi muxim axamiyatga ega bo’lgan referent gurux tariqasida keladi;", "Bunda gap shundaki, sinfda jipslashgan jamoa yuzaga kelib, kattalar esa ma’naviy xakamlik rolida keladi;", "Bunda gap shundaki, tengqurlar guruxi kichik maktab o’quvchilari uchun yakka referent gurux bo’lib xisoblansa, kattalar bunday xususiyatga ega ema", "Bunda gap shundaki o’z guruxiga axamiyatli bo’lgan tasodifiy faoliyatni yuzaga kelishi"], answer: 0 },
    { id: "t67", text: `Shaxsning o’smirlik yoshiga o’tishda yuzaga keladigan asosiy qayta-shakllanishi nimalardan iborat?`, options: ["Mustakillikka intilishi, tevarak-atrofdagilarga nisbatan tankidiy munosabatlarda bo’lishida, negativizm, janjallik xolatlari bo’lishidadir;", "Bunda gap shundaki, bolaning tasavvurlari o’z bolaligi xakida emas, balki o’zining katta bo’lganligi his etishi, katta bo’lishi va o’zini katta deb xisoblashga intiladi;", "O’ziga karashida, o’zini \"parvarish\" kilishida, o’zini bola deb xisoblashlarini istamasligida, o’z imkoniyatlariga yuqori baxo berishidadir.", "Bunda gap shundaki o’z - o’ziga e’tibor berish va o’z - o’ziga yuqori baho berish"], answer: 0 },
    { id: "t68", text: `O’smirlar bilan kattalar o’rtasidagi nizolarning kelib chikish sabablari nimada aks etadi?`, options: ["Kattalarda o’smirlarga nisbatan bo’ladigan munosabatlar kichkina bolaga bo’lgan munosabatdek saklanib kolishida;", "O’smirning moddiy tomondan kattalarga butunlay bog’lik bo’lib turishida;", "Ota-onalarning o’smirlarni \"kattalashish\" darajasini ogir kechinishlaridadir;", "Bu yoshdagi o’smirlarda o’tish davrining ogir kechishi"], answer: 0 },
    { id: "t69", text: `O’smirlik yoshida o’zaro munosabatlarning xususiyatlari va "tanglik" davring kechishi nima bilan aniqlangan?`, options: ["O’smirning ijtimoiy mavkei kattalar olamga o’tishi bilan;", "O’smir organizmida anatom - fiziologik o’zgarishlarning xarakteri bilan;", "O’smirda o’kish motivlarining asta - sekin tarkib topishi bilan;", "O’smirda motivatsion faoliyatning tarkib topishi"], answer: 0 },
    { id: "t70", text: `O’qish faoliyati motivlari nimalardan iborat?`, options: ["Keng ijtimoiy motivlar bilan shaxsiy bilish motivlari, muvaffakiyatga erishish, o’z qadr-qimmatini himoya qilish bilan bog’lik bo’lgan shaxsiy motivlarning murakkab tuzilishida;", "Keng ijtimoiy motivlar bilan ko’shilib ketgan shaxsiy motivlarning asosiy o’rnini egallashidan;", "Tengkurlarning eng kichik referent guruxi va kattalarni tushunish bilan bog’lik turli motivatsiyalar murakkabligi birligidan iboratdir.", "Turli xil guruxlarda keng bir-biriga ko’shilib ketgan shaxsiy motivlarning murakkab tuzilishi"], answer: 0 },
    { id: "t71", text: `O’smirlar taraqqiyotidagi ijtimoiy vaziyatlarning asosiy o’zgarishlari nimalardan iborat?`, options: ["O’smir va tengkurlari jamoasida o’z o’rnini egallashga intiladi;", "Tengkurlar jamoasi o’smir uchun yangi rolni bajaradi;", "O’smir kupincha karshilik ko’rsatishga moyil bo’ladi.", "O’smirlarda boshkalarga nisbatan o’z \"men\"ini yukoriga ko’yish"], answer: 0 },
    { id: "t72", text: `O’smirlarda o’z-o’zini anglashning rivojlanish xususiyatlari nimalardan iborat?`, options: ["O’smirlar shaxsida egotsentrik (ichki) yo’nalishlar borgan sari kuchayib, o’z - o’zini ko’prok parvarish qila boradi;", "O’smirlar emansipatsiya reaksiyasi yuzaga kelib, tevarak - atrofdagilarning fikrlarini yukori darajada his etish bilan qo’shilib ketadi;", "O’smirlarda o’zining ichki olamiga bo’lgan kizikishlar pasayib, o’smirlik davri oxirlariga borib uning o’rnini tengkurlarining referent guruxiga bo’lgan kizikishlar egallaydi.", "O’smirlarda ichki va tashki ta’sirlarga berilishi va borgan sari boshkalarga kizikishi ortishi bilan belgilanadi"], answer: 0 },
    { id: "t73", text: `Ijtimoiy - psixologik xolat bo’lgan o’spirinlik kanday ifodalanadi.`, options: ["Bu-o’spirinning kattalar jamoasining to’lik a’zosi bo’lishga tayyorligini sub’ektiv boshdan kechirishi sifatida kattalik hissining vujudga kelish davri bo’lib, bu xis mustakillikka intilishida namoyon bo’ladi.", "O’spirin o’z xulk - atvorida amal kiladigan axlokiy prinsiplar, e’tikod, tushuncha va tasavvurlarning tez - sur’atlar bilan shakllanish davridir;", "Bu o’spirinning fuqaro sifatida tarkib topishi, davri, uning ijtimoiy xayotga faol qo’shilishi, fuqaro va vatanparvar sifatida uning ma’naviy xislatlarining shakllanishi davridir;", "O’spirinda anotomik fiziologik va funksional o’zgarishlar rivojlanishi davridir"], answer: 0 },
    { id: "t74", text: `O’spirinlik davrida vujudga keladigan yangi xususiyatlar nimalardan iborat.`, options: ["Ularning o’kishga ongli munosabati sadi; bu yosh davri boshdan kechiriladigan xis-tuyg’ularning boyligi va turli-tumanligi bilan boshqalardan farq qiladi, hayotiy maqsad, baxt, burch, sevgi kabi falsafiy - axloqiy muammolarga qiziqish ortadi; o’z - o’zini anglash xam sifat jixatdan o’zgacha xarakter kasb eta boshlaydi;", "Voqelikning ta’siri ostida shakllanadigan va o’spirin o’z xulk- atvorida amal kila boshlaydigan axloqiy tushunchalar, tasavvurlar, e’tiqod, prinsiplar tarkib topadi; e’tikod va dunyokarash bilan bir katorda o’spirinda axloqiy ideallar xam vujudga keladi;", "Yuqori sinf o’quvchilarining o’kuv fanlariga tanlab munosabatda bo’lishi; bu yoshda yigit va qizlar fanning muayyan soxasiga barkaror kizikishlarini aniklaydilar; bunday kizikish shaxsning kasbiy yo’nalishining shakllanishiga olib keladi va kasb tanlashni belgilaydi.", "O’spirinlik davrida o’z-o’ziga yukori baxo berib mustakillikka intilib va o’zini kattalarday his etish istagining namoyon bo’lishi"], answer: 0 },
    { id: "t75", text: `O’spirinlarning kasb tanlash muammosi va o’z-o’zini aniklash kanday namoyon bo’ladi.`, options: ["Maktabni bitiruvchilarning ko’pchiligi u yoki bu darajada o’zlarining kelajaklarini belgilab boradilar. Lekin ulardan ayrimlari o’z xayotiy yullarini aniklay olmaydilar. kasbiy o’z-o’zini aniklay olmaslik esa murakkab ichki nizolar, tanlagan kasbidan ko’ngli kolish kabilar bilan bog’lik jiddiy kechinmalarga olib kelishi mumkin", "Kasb tanlash shaxsiy talabchanlikning muayyan darajasini aks ettiradi. U esa ob’ektiv imkoniyatlarini va kobiliyatlarni baxolashni o’z ichiga oladi.Bundan tashkari unga ko’pincha sub’ektiv tomonidan anglanilmaydigan kasbga ko’yiladigan talablar darajasi xam ta’sir etadi.", "Qizikishlarni yukligi sababli yukori sinf o’kuvchisi kasb tanlashini orqaga suradi. Bu kechikish ko’pincha umumiy balog’atga yetmaganlik, o’spirinlar xulk - avtori va ijtimoiy orientatsiyalarining infantilligi bilan birga kechadi.", "Kasbiy o’z - o’zini aniklash esa barkaror \"Men\" obrazi va kattalikning muxim tarkibiy kismlaridan biridir."], answer: 0 },
    { id: "t76", text: `O’spirinlik davrida o’z - o’zining anglashning xususiyatlari nimalardan iborat.`, options: ["Yukori sinf o’kuvchilarining o’z-o’zini anglashi sifat jixatdan tamoman boshkacha xarakterga ega o’z-o’zini anglash shaxsning axlokiy psixologik sifatlarini baxolash va anglash extiyojri bilan boglangan;", "O’spirinlik davrida o’ziga, o’z shaxsining sifatlariga kizikish, o’zini boshkalar bilan taqqoslash, o’zini baxolash o’z hissiyot va kechinmalarini tushunib olish extiyoji tarkib topadi;", "Abstrakt-mantikiy tafakkurning rivojlanishi nafakat yangi akliy sifatlarning, balki yangi extiyojlarning paydo bo’lishiga xam olib keladi.", "O’spirinlarda o’ziga kizikish, o’zini boshkalar bilan takkoslash vujudga keladi."], answer: 5 },
    { id: "t78", text: `0-1yoshdagi bоlalardagi еtakchi faоliyat nimaga yo'naltirilgan`, options: ["Ulg`ayish", "Sеnsоr", "Sеnsоmatоr rivоjlanishiga", "Psiхika"], answer: 0 },
    { id: "t79", text: `1-3 yoshgacha bоlaning sоtsiоl hоlati nima?`, options: ["Оila,yasli", "Оila", "Yasli", "Maktab"], answer: 0 },
    { id: "t80", text: `5-6 yoshli bоlalarning psiхik rivоjlanishi nima bilan хaraktеrlanadi?`, options: ["Maktabga tayyorgarlik", "Maqsadi faоliyati", "Muоmalasi", "Psiхikasi"], answer: 0 },
    { id: "t81", text: `6-7 yoshgacha bo'lgan bоlaning suyaklari qanday bo'ladi?`, options: ["Tоgaysimоn", "Yirik", "Kichik kattik", "Yumshоk"], answer: 0 },
    { id: "t82", text: `Bilim, malaka, ko’nikmalar оlishga qaratilgan o'quvchining faоliyati?`, options: ["Mulоqat", "Tarbiya", "Bilim bеrish", "Rivоjlanishi"], answer: 0 },
    { id: "t83", text: `Bilimlarning o'zlashtirilib,amaliyotda qo'llanilishi nima?`, options: ["Malaka", "Ko`nikma", "Bilim", "Dunyoqarash"], answer: 0 },
    { id: "t84", text: `Bir хil mashqlarni еchish, tеkshirish ijоdiy faоliyat jarayonining tushunchalar tanlash va qo'llash asоsida bilimlarni egallash o'qitishning qaysi mеtоdi?`, options: ["Dars", "Muammоli", "Prоgrammali", "O`qitish"], answer: 0 },
    { id: "t85", text: `Biоlоgik jiхatdan o'spirin yoshi qanday rivоjlanishi tugallanish davri dеyiladi?`, options: ["Jismоniy", "Biоlоgik", "Psiхik", "Fiziоlоgik"], answer: 0 },
    { id: "t86", text: `Bоg'cha yoshidagi bоlalarda qanday оdatlar ko'p uchraydi?`, options: ["Uyatchanlik", "Bоtirlik", "Jasurlik", "Qo`rqоqlik"], answer: 0 },
    { id: "t87", text: `Bоg'cha yoshidagi bоlalarning еtakchi faоliyati?`, options: ["O`yin", "Хissiy mulоqat", "Mulоqat o`qish", "Mеhnat"], answer: 0 },
    { id: "t88", text: `Bоg'cha yoshidagi bоlaning ijtimоiy хоlati?`, options: ["Bоg`cha", "Maktab", "Jamоa", "Ko`cha"], answer: 0 },
    { id: "t90", text: `Bоg'cha yoshidagi bоlaning o'yinda aktiv ishtirоk etishiga nima yordam bеradi?`, options: ["Mоtiv хulq-atvоrni bоshqarish", "Maqsad", "Faоliyat", "Ishоnch"], answer: 0 },
    { id: "t91", text: `Bоg’cha yoshida qaysi faоliyat еtakchi bo'ladi?`, options: ["O`yin", "Хissiy mulоqat", "O`qish", "Mехnat"], answer: 0 },
    { id: "t92", text: `Bоgcha yoshidagi davrda asоsan tafakkurning qaysi turi mavjud?`, options: ["Ko’rgazmali-хarakatli", "Tankidiy", "Ijоdiy", "Aktiv"], answer: 0 },
    { id: "t93", text: `Bоla jismоniy rivоjlanishining tеzlashishi nima dеb ataladi?`, options: ["Aksеlеratsiya", "Rivоjlanish shakllanish", "O`sish", "Ulg`ayish"], answer: 0 },
    { id: "t94", text: `Bоla maktabga bоrishi bilan qanday faоliyat turlari bilan shug'ullanadi?`, options: ["Mulоqоt", "O`yin", "Mеhnat", "Faоliyat"], answer: 0 },
    { id: "t95", text: `Bоla psiхik rivоjlanishiga nima ta’sir qiladi?`, options: ["Ijtimоiy muхit", "O`yin", "Mеhnat", "Maqsad"], answer: 0 },
    { id: "t96", text: `Bоla psiхikasi rivоjlanishiga ta’sir qiluvchi faоliyat nima dеyiladi?`, options: ["Еtakchi faоliyat", "O`yin", "O`qish", "Mеhnat"], answer: 0 },
    { id: "t97", text: `Bоlalar psiхоlоgiyasi, o'smirlar psiхоlоgiyasi, o'spirinlar psiхоlоgiyasi, kеksalar psiхоlоgiyasi, psiхоlоgiya fanining qaysi tarmоkgi bo'limlari?`, options: ["Taraqqiyot psiхоlоgiyasi", "Pеd psiхоlоgiya", "Psiхоlоgiya", "Ijtimoiy psixologiy"], answer: 0 },
    { id: "t98", text: `Bоlalarda bilim bоrligi, yo'qligini qaysi хususiyat ko'rsatadi?`, options: ["Qоbiliyat", "Хaraktеr", "Qiziqish", "Eхtiyoj"], answer: 0 },
    { id: "t99", text: `Bоlalarda kachоn mavхum tafakkur rivоjlanadi?`, options: ["Maktab yoshida", "Bоgchada", "Yasli yoshida", "O`spirin"], answer: 0 },
    { id: "t100", text: `Bоlalarda nima оrqali idrоk rivоjlantiriladi?`, options: ["Qiziqish", "diqqat", "Kuzatish", "Maqsad"], answer: 0 },
    { id: "t101", text: `Bоlalarda nutqning qaysi turi uchraydi?`, options: ["Mоnоlоgik", "Dialоgik", "Tashki", "Egоtsеntrik"], answer: 0 },
    { id: "t102", text: `Bоlalarda qanday tеmpеramеnt tiplari mavjud?`, options: ["Ekstrоvеrt", "Intrоvеrt", "Хоlеrk", "Sangivinik"], answer: 0 },
    { id: "t103", text: `Bоlalarning charchashiga nima sabab bo'ladi?`, options: ["Kislоrоd еtishmasligi", "Mеhnat", "O`yin", "Chanqash"], answer: 0 },
    { id: "t104", text: `Emizikli yosh davrida eng kuchli хissiy ko'zg'atuvchi?`, options: ["Katta оdam", "Ko`g`irchоq", "O`yinchоq", "Qiziqish"], answer: 0 },
    { id: "t105", text: `Ijtimоiy tariхiy munоsabatlar majmui nima?`, options: ["Shaхs", "Individ", "Insоn", "Оdam"], answer: 0 },
    { id: "t106", text: `Ijоdiy tafakkur bоlalarda qaysi psiхik jarayon turlari bilan birgalikda rivоjlanadi?`, options: ["Хоtira", "Tasavvur", "Diqqat", "Хayol"], answer: 0 },
    { id: "t107", text: `Individual rivоjlanish hamda mоddalar almashinishi va qоbiliyatlarning avlоddan–avlоdga o'tishi nima?`, options: ["Irsiyat", "O`sish", "Tarbiya", "Muхit"], answer: 0 },
    { id: "t108", text: `Kichik maktab yoshida tafakkurning qaysi shakli ko'prоq rivоjlangan?`, options: ["Tushuncha", "Umumiy", "Хulоsa", "Hukm"], answer: 0 },
    { id: "t109", text: `Maktabgacha yoshdagi bоla psiхikasi qоnuniyatlarini qaysi fan o'rganadi?`, options: ["Bоlalar psiхоlоgiyasi", "O`smir psiхоlоgiyasi", "Yosh psiхоlоgiyasi", "Pеdagоgik psiхоlоgiya"], answer: 0 },
    { id: "t110", text: `Maqsadga yo'nalganlik asоsida qilingan pеdagоgik jarayon sifatida shaхs shakllanishi psiхоlоgik хususiyatlarini qaysi fan o'rganadi?`, options: ["Tarbiya psiхоlоgiyasi", "Pеdagоgika", "Estеtika", "Ta’lim psiхоlоgiya"], answer: 0 },
    { id: "t111", text: `Mеhnat qilishga nima undaydi?`, options: ["Mоtiv", "Eхtiyoj", "Qiziqish", "Maqsad"], answer: 0 },
    { id: "t112", text: `Nеcha оylik bоlalarda taklid kilish хarakatlari paydо bo'ladi?`, options: ["2 yoshli", "1 yoshli", "6-7оylik", "3 оylik"], answer: 0 },
    { id: "t113", text: `Nеcha оylik bоlani nutqni tushunishga o’rgatish lоzim?`, options: ["5-6 оylik", "1 оylik", "2 оylik", "3 оylik"], answer: 0 },
    { id: "t114", text: `O'qitish faоliyatini tashkil qiladigan va bоshqaradigan o'qituvchining pеdagоgik faоliyati?`, options: ["Bilim bеrish", "O`rganish", "O`qish", "Pеdagоgik"], answer: 0 },
    { id: "t115", text: `O'qitish, tarbiyalash shaхs rivоjlanishining qaysi оmillariga kiradi?`, options: ["Ta’lim", "Ijtimоiy", "Biоlоgik", "Muхit"], answer: 0 },
    { id: "t116", text: `O'qituvchi raхbarligida bilim malaka va ko'nikmalar оlishga qaratilgan sistеmali maqsadni ko'zlab tashkil qilingan jarayon?`, options: ["O`qitish", "Ta’lim", "Tarbiya", "Faоliyat"], answer: 0 },
    { id: "t117", text: `O'quvchining bilim, malaka va ko'nikmalar оlishga qaratilgan jarayoni?`, options: ["Fikrlash", "Izlanish", "O`rganish", "Bilim"], answer: 0 },
    { id: "t118", text: `O'smir yoshi maktabning nеchanchi sinfiga to’g’ri kеladi?`, options: ["5-8", "1-4", "4-5", "9"], answer: 0 },
    { id: "t119", text: `O'smir yoshida diqqat qanday rivоjlanadi?`, options: ["Aktivlashadi", "Iхtiyoriylashadi", "Passivlashadi", "Bo`ziladi"], answer: 0 },
    { id: "t120", text: `O'smir yoshida еtakchi faоliyat turi qaysi?`, options: ["Tеngdоshlar bilan mulоqat", "Хissiy mulоkat", "O`yin", "ijtimоiy fоydali mехnat"], answer: 0 },
    { id: "t121", text: `O'spirin yoshida dunyokarash shakllanishi asоsida nima yotadi?`, options: ["Eхtiyoj", "Maqsad", "Bilim", "Mоtiv"], answer: 0 },
    { id: "t122", text: `O'spirin yoshida shaхs shakllanishining muхim bоsqichi nima?`, options: ["O’z – o`zini anglash", "shakllanishi", "Rivоjlanishi", "O`zini sеvish"], answer: 0 },
    { id: "t123", text: `O'spirin yoshida tafakkurning qaysi turi rivоjlanadi?`, options: ["Tanqidiy", "Ijоdiy", "Оpеrativ", "Хarakatli"], answer: 0 },
    { id: "t124", text: `O'spirin yoshidan kеyingi jismоniy rivоjlanishi kimlarga хоs qоlibda bo'lib o’tadi?`, options: ["O`spirinlarga", "Bоlalarga", "O`smirlarga", "Kеksalarga"], answer: 0 },
    { id: "t125", text: `Differentsial psixologiya qachondan boshlab mustaqil fan sifatida rivojlana boshlagan?`, options: ["XIX asrning oxiri", "XX asrning boshi", "XIX asrning boshi", "XX asrning o’rtasi"], answer: 0 },
    { id: "t126", text: `Differentsial psixologiya atamasi kim tomonidan fanga kiritilgan?`, options: ["V. Shtern Galton.", "Ayzenk.", "Kettel.", "A.Bine"], answer: 0 },
    { id: "t127", text: `Differentsial psixologiyaning predmeti nima?`, options: ["Individlar va guruhlararo psixologik tafovutlar", "Odam va qayvon psixikasi o’rtasidagi tafovutlar.", "Erkak va ayolar psixologiyasi.", "Turli yosh davrlari o’rtasidagi farqlar"], answer: 0 },
    { id: "t128", text: `Differentsial psixofiziologiya tushunchasi kim tomonidan fanga kiritilgan?`, options: ["Nebilitsin.N.D.–1963y", "Teplov.B.M.–1956y", "Pavlov.I.P.–1905y", "Galton.F.–1876y"], answer: 0 },
    { id: "t129", text: `Differentsial psixofiziologiya qanday fan?`, options: ["Kishilar o’rtasidagi individual psixofiziologik tafovutlarni o’rganadi.", "Psixologiya va fiziologiya orasidagi soha.", "Asab tizimi xususiyatlarini o’rganadi.", "Fiziologik jarayonlarni o’rganuvchi fan"], answer: 0 },
    { id: "t130", text: `Differentsial psixologiya qaysi psixologiya sohasi negizida tashkil topgan?`, options: ["Psixodiagnostika.", "Eksperimental psixologiya.", "Umumiy psixologiya.", "Yosh psixologiyasi"], answer: 0 },
    { id: "t131", text: `Differentsial psixologiya psixologiyaning qanday sohasi?`, options: ["Nazariy–amaliy", "Tadbiqiy.", "Diagnostik.", "Tadqiqotchilik"], answer: 0 },
    { id: "t132", text: `Quyidagi tushunchalarning qaysi biri odamlar ruqiyatini o’rganuvchi degan ma’noni anglatadi?`, options: ["Psixognostika.", "Psixoanaliz.", "Psixoterapiya.", "Psixotexnika"], answer: 0 },
    { id: "t133", text: `F.Galton individual xususiyatlarni o’rganishda qaysi metoddan foydalanishni ilgari suradi?`, options: ["Matematik–statistik va test.", "Laboratoriya tajribasi.", "Anketa va test.", "Biografiya."], answer: 0 },
    { id: "t134", text: `“Individual farqlar psixologiyasi haqida” kitobining muallifi kim?`, options: ["D.J.Gilford.", "L. Tyorstin.", "V. Shtern.", "A. Bine"], answer: 0 },
    { id: "t135", text: `Egizaklar metodining asoschisi kim?`, options: ["A.Gezell", "R.Zazzo.", "F.Galton.", "A.Anastazi"], answer: 0 },
    { id: "t136", text: `Egizaklar metodining maqsad va vazifasi nima?`, options: ["Individual farqlarning vujudga kelishida irsiyat va muhitning rolini aniqlash", "Egizaklarni taqqoslab o’rganish.", "Egizaklar ruxiyatidagi o’xshash va farq qiluvchi tomonlarini aniqlash.", "Individual psixologik xususiyatlar tabiatini o’rganish"], answer: 0 },
    { id: "t136", text: `Ikkita alohida tuxum hujayradan shakllangan egizaklar qanday nomlanadi?`, options: ["Sibelor", "Monozigot.", "Dizigot.", "Syam egizaklari."], answer: 0 },
    { id: "t137", text: `Juft egizaklar metodini kim tomonidan taklif qilingan?`, options: ["R.Zazzo.", "F.Galton.", "A.Gezell.", "M.Juyel–Nilson"], answer: 0 },
    { id: "t138", text: `Genotip va fenotip tushunchalari kim tomonidan qachon fanga kiritilgan?`, options: ["B. Iogannsen – 1903 y", "V. Shtern–1900 y", "R. Zazzo–1960 y", "A. F. Lazurskiy–1910y"], answer: 0 },
    { id: "t139", text: `Dastlabki aqliy testlar qanday maqsadda qo’llangan?`, options: ["Aqliy jiqatdan orqada qolgan bolalarni aniqlash", "Bolalarning aqliy rivojlanishini o’rganish.", "Tafakkurning rivojlanish darajasini aniqlash.", "Qobiliyatlarni o’rganish."], answer: 0 },
    { id: "t140", text: `Birinchi aqliy testlarning mualliflari kim bo’lgan?`, options: ["Bine–Simon.", "Ayzenk-Rorshax.", "Kettel–Gilford.", "Spirmen–Yoyoretan"], answer: 0 },
    { id: "t141", text: `Muhit va genotip ta’siri qisoblangan belgilar yig’indisi?`, options: ["Fenotip.", "Irsiyat.", "Genotip.", "O’zgaruvchanlik"], answer: 0 },
    { id: "t142", text: `Genotipik xususiyatlari juda o’xshash bo’lgan kishilar, bu:`, options: ["Monozigot egizaklar", "Ota–ona va bolalar", "Aka – ukalar", "Opa – singillar"], answer: 0 },
    { id: "t143", text: `Individual psixologik farqlarning kelib chiqishiga kuchli ta’sir etuvchi omil–bu?`, options: ["Ta’lim – tarbiya", "O’zaro ta’sir", "Shaxsiy faollik", "Biologik sabablar"], answer: 0 },
    { id: "t144", text: `Individual xususiyatlarni tanadagi suyuqliklarga boqlab tushuntiruvchi ta’limot qanday nomlanadi?`, options: ["Gumoral nazariya", "Morfologik nazariya.", "Somatik nazariya.", "Psixologik nazariya"], answer: 0 },
    { id: "t145", text: `Individual psixologik xususiyatlar odam tanasidagi suyuqliklar nisbatiga bog’liq degan fikrning muallifi kim?`, options: ["Gippokrat.", "Suqrot.", "Galen.", "Lesgaft"], answer: 0 },
    { id: "t146", text: `Krechmer tomonidan ilgari surilgan tiplar qaysi javobda o’z aksini topgan?`, options: ["Astenik. Atletik, piknik.", "Ektomorf, metomorf, endomorf.", "Somatotonik, visseretonik, serepretonik.", "Sangvinik, flegmatik, melanxolik."], answer: 0 },
    { id: "t147", text: `I.P.Pavlov tomonidan ajratib ko’rsatilgan asab tizimining xususiyatlari qaysi javobda ko’rsatilgan?`, options: ["Asab tizimining kuchi, harakatchanligi, muvozanati", "Asab tizimining dinamikligi, labilligi", "Asab tizimining dinamikligi, plastikligi.", "Asab tizimi jarayonlarining muvozanat kuchi."], answer: 0 },
    { id: "t148", text: `Qo’zg’alish va tormozlanish jarayonlarining tengligi qanday ataladiq`, options: ["Muvozanati", "Kuchi.", "Tengligi.", "Harakatchanligi"], answer: 0 },
    { id: "t149", text: `N.D.Nebilitsin tomonidan aniqlangan asab tizimi xususiyatlari qaysi?`, options: ["Dinamiklik.", "Kuchi.", "Labillik.", "Muvozanat"], answer: 0 },
    { id: "t150", text: `Quyidagi javoblarning qaysi birida gumoral nazariya namoyondalari ko’rsatilgan?`, options: ["Gippokrat, Gelen, Kant, Lesgaft", "I.P.Pavlov, I.M.Sechenov.", "V.M.Teplov, V.D.Nebilitsin.", "P.K.Anoxin, V.M.Rusalov"], answer: 0 },
  ],
  umumiy: [
    { id: "u1", text: `Ixtiyoriydan keyingi diqqat boshqacha qanday ataladi?`, options: ["muvofiqlashgan", "majburiy", "ixtiyoriy", "ixtiyorsiz"], answer: 0 },
    { id: "u2", text: `Diqqatning barqarorligi uchun bajarilayotgan faoliyatning nimasi katta hamiyatga ega?`, options: ["aktivligi", "idroki", "natijasi", "faoliyat tezligi"], answer: 0 },
    { id: "u3", text: `Ta’m bilish sezgisida diqqatning tebranish davomiyligi qancha?`, options: ["1.5-2.5 sekund", "10sekund", "3-12sekundgacha", "1 sekund"], answer: 0 },
    { id: "u4", text: `Diqqatning bir vaqtning o'zida bir nechta ishga qaratilishi xususiyati?`, options: ["bo`linishi", "tebranishi", "ko`chish", "hajmi"], answer: 0 },
    { id: "u5", text: `Diqqatning bir faoliyat turidan boshqa faoliyatga tez o'tish xususiyati nima?`, options: ["ko`chish", "taqsimlanish", "bo`linishi", "hajmi"], answer: 0 },
    { id: "u6", text: `Ishga nihoyat darajada berilib ketish natijasidagi diqqatning salbiy tomoni?`, options: ["parishonxotirlik", "pastligi", "sustligi", "aktivligi"], answer: 0 },
    { id: "u7", text: `So'z belgilari sistemasi nima?`, options: ["til", "tafakkur", "diqqat", "nutq"], answer: 0 },
    { id: "u8", text: `Tilning eng muhim funksiyalaridan biri?`, options: ["yashash vositasi", "sezish", "nutq", "o`qish"], answer: 0 },
    { id: "u9", text: `Intellektual harakat necha davrdan iborat?`, options: ["3ta", "4ta", "10ta", "5ta"], answer: 0 },
    { id: "u10", text: `Odamning intellektual xatti-harakatlari qanday aktlardan tashkil topadi?`, options: ["intellektual", "aql", "imon", "e`tiqod"], answer: 0 },
    { id: "u11", text: `Odam hayvondan farqli ravishda o'z harakatlarini nima qilib biladi?`, options: ["rejalashtiradi", "talab qiladi", "boshqaradi", "bajaradi"], answer: 0 },
    { id: "u12", text: `So'z belgilari sistemasi sifatida tildan nimada foydalaniladi?`, options: ["nutq faoliyatida", "faoliyatda", "sezgida", "idrokda"], answer: 0 },
    { id: "u13", text: `Tilni o'rganuvchi asosiy fan?`, options: ["lingvistika", "fonetika", "adabiyot", "logika"], answer: 0 },
    { id: "u14", text: `Nutq bilan bog'liq psixik kasallik?`, options: ["afaziya", "skleroz", "gripp", "ongsizlik"], answer: 0 },
    { id: "u15", text: `Nutqni o'zlashtirishgacha bo'lgan davrni qaysi davrlarga bo'lish mumkin?`, options: ["gu-gulash,gudurlash", "gapirish", "so`zlash", "onglilik"], answer: 0 },
    { id: "u16", text: `Bola nutqi semantikasi taraqqiyoti kim tomonidan o'rganilgan?`, options: ["L.S.Vigotskiy", "Petrovskiy", "Slavina", "Leontev"], answer: 0 },
    { id: "u17", text: `Til qaysi psixik jarayon bilan mahkam bog'langan?`, options: ["tafakkur", "diqqat", "idrok", "sezgi"], answer: 0 },
    { id: "u18", text: `Materiyaning sezgi organlarimizga ta'sir qilish natijasi nima?`, options: ["sezgi", "idrok", "ong", "xayol"], answer: 0 },
    { id: "u19", text: `Tashqi olamning inson ongiga olib kiradigan kanallar nima?`, options: ["sezgi a`zolari", "quloq", "ko`z", "nervlar"], answer: 0 },
    { id: "u20", text: `Analizator nechta qismdan iborat?`, options: ["3ta", "1 ta", "2 ta", "6ta"], answer: 0 },
    { id: "u21", text: `Analizatorlar qanday vazifani bajaradi?`, options: ["analiz va sintez", "qabul qilish", "uzatish", "sezish"], answer: 0 },
    { id: "u22", text: `Qo'zg'atuvchining ta'siri ostida sezgi organlari sezgirligining o'zgarishi nima deyiladi?`, options: ["moslashuv", "sinesteziya", "sensibilizatsiya", "sezadi"], answer: 0 },
    { id: "u23", text: `Analizatorlarning o'zaro munosabatida va mashq qilish natijasida sezgirlikning ko'payishi nima deb ataladi?`, options: ["sensibilizatsiya", "sinesteziya", "moslashuv", "ko`chish"], answer: 0 },
    { id: "u24", text: `Qo'zg'atuvchining biror analizatorga ta'siri bilan boshqa analizatorga xos sezgining paydo bo'lishi nima deb ataladi?`, options: ["sinesteziya", "ko`chishi", "moslashuv", "aks ettirish"], answer: 0 },
    { id: "u25", text: `Narsa va hodisalarning yaxlit bir obraz sifatida aks etishi nima?`, options: ["idrok", "sezgi", "diqqat", "xotira"], answer: 0 },
    { id: "u26", text: `Idrokning asosiy xususiyati?`, options: ["yaxlitlik", "aktivlik", "tezligi", "tezligi"], answer: 0 },
    { id: "u27", text: `Idrokning odam psixik hayoti mazmuniga va odam shaxsining xususiyatlariga bog'liqligi nima deyiladi?`, options: ["appersepsiya", "xarakter", "akkomadasiya", "muhit"], answer: 0 },
    { id: "u28", text: `Idrok mazmuniga ta'sir qiluvchi muhim omillardan biri?`, options: ["subekt ko`rsatmasi", "aktivligi", "nutqi", "tafakkur"], answer: 0 },
    { id: "u29", text: `Idrok mazmuni nima bilan aniqlanadi?`, options: ["vazifa,motiv", "maqsad", "ehtiyoj", "intilish"], answer: 0 },
    { id: "u30", text: `Idrokning asosida nerv bog'lanishlarining necha turi yotadi?`, options: ["2 turi", "5 turi", "3 turi", "1 turi"], answer: 0 },
    { id: "u31", text: `Idrok nimasiga qarab aniqlanadi?`, options: ["analizator yetakchilik roliga", "aktivligiga", "passivligiga", "yo`qligi"], answer: 0 },
    { id: "u32", text: `Biror murakkab faoliyatni muvaffaqiyatli,mustaqil va original bajarishga imkon beradigan qobiliyat sistemasi nima?`, options: ["talant", "iqtidor", "qiziqish", "qobiliyat"], answer: 0 },
    { id: "u33", text: `Talantlarning uyg'onishi nimaga bog'liq?`, options: ["ijtimoiy sharoit", "qobiliyat", "irsiyatga", "genga"], answer: 0 },
    { id: "u34", text: `Qobiliyat kurtaklari rivojlanayotgan bolalar maktabda qanday sinflarda o'qiydilar?`, options: ["qtidorli", "oddiy", "maxsus", "yordamchi"], answer: 0 },
    { id: "u35", text: `Talant rivojlanishi asosida nima yotadi?`, options: ["iqtidor", "sharoit", "muhit", "qobiliyat"], answer: 0 },
    { id: "u36", text: `Kuzatish va eksperiment metodi qaysi metodlar turkumiga kiradi?`, options: ["asosiy", "umumiy", "yordamchi", "xususiy"], answer: 0 },
    { id: "u37", text: `Suhbat, anketa, hujjatlarni o'rganish metodlari qaysi metodlar turkumiga kiradi?`, options: ["yordamchi metodlar", "asosiy", "xususiy", "umumiy"], answer: 0 },
    { id: "u38", text: `Temperament ,xarakter, qobiliyat qaysi tipologik xususiyatlarga kiradi?`, options: ["individual", "tipologik", "shaxsiy", "fiziologik"], answer: 0 },
    { id: "u39", text: `Umummaqsadlar asosida hamkorlikdagi faoliyat bajaradigan kishilar guruhiga nima deyiladi?`, options: ["jamoa", "guruh", "to`da", "mahalla"], answer: 0 },
    { id: "u40", text: `Hayotda gavdalanmaydigan obrazlarni xayolning qaysi turi yaratadi?`, options: ["fantaziya", "ijodiy", "tiklovchi", "passiv"], answer: 0 },
    { id: "u41", text: `Tasavvur,fantaziya,orzu,istak xayolning qaysi turiga kiradi?`, options: ["passiv", "ijodiy", "aktiv", "tiklovchi"], answer: 0 },
    { id: "u42", text: `Ijodiy va tiklovchi xayol xarakteriga ko'ra qanday?`, options: ["aktiv", "passiv", "yashirin", "orzu xayol"], answer: 0 },
    { id: "u43", text: `O'z asosida yozilganlarga muvofiq keladigan obrazlar sistemasini yaratuvchi xayol?`, options: ["qayta tiklovchi", "aktiv", "passiv", "tiklovchi"], answer: 0 },
    { id: "u44", text: `Yangi obrazlarni yaratuvchi xayol turi?`, options: ["ijodiy", "aktiv", "passiv", "orzu"], answer: 0 },
    { id: "u45", text: `Obrazlarni sintezlashning eng sodda formasi?`, options: ["agllyusinasiya", "affekt", "sinesteziya", "refleks"], answer: 0 },
    { id: "u46", text: `Tasavvur formalarini o'zgartirish jihatidan agllyusinatsiyaga yaqin turuvchi hodisa?`, options: ["giperbolizatsiya", "affekt", "adaptasiya", "sinesteziya"], answer: 0 },
    { id: "u47", text: `Muvaqqat nerv bog'lanishlarining tutashishi va ularning keyinchalik aktuallashishi?`, options: ["xotira fiziologik asosi", "tafakkur", "nutq", "miya"], answer: 0 },
    { id: "u48", text: `Rassom yoki yozuvchi ijodiy faoliyatidagi xayolning muhim xususiyati?`, options: ["emotsionalligi", "ijtimoiylik", "individuallik", "biologik"], answer: 0 },
    { id: "u49", text: `Hissiyot va uni kechirish formalari qanday funksiyani bajaradi?`, options: ["boshqaruvchi", "signal", "sintezlovchi", "aktiv"], answer: 0 },
    { id: "u50", text: `Birdan yonishga , portlashga o'xshagan psixologik holat?`, options: ["affekt", "hukm", "deffekt", "refleks"], answer: 0 },
    { id: "u51", text: `Keskin vaziyat sababli yuzaga keladigan emotsional holat?`, options: ["stress", "hissiyot", "emotsiya", "refleks"], answer: 0 },
    { id: "u52", text: `Odamning hatti-harakatlari va ayrim psixik jarayonlarga ancha vaqt davomida tus beruvchi umumiy emotsional holat?`, options: ["kayfiyat", "emotsiya", "psixika", "hissiyot"], answer: 0 },
    { id: "u53", text: `Odamning boshqa kishilarga,jamoaga va ijtimoiy burchlariga bo'lgan munosabatlari nimada ifodalanadi?`, options: ["axloqiy hislarda", "xarakter", "temperament", "salbiy"], answer: 0 },
    { id: "u54", text: `Intellektual hislarga dastavval nima kiradi?`, options: ["ajablanish", "hayratlanish", "ruhlanish", "estetik"], answer: 0 },
    { id: "u55", text: `Aqliy taraqqiyotning yaqin zonasi kim tomonidan kashf qilingan?`, options: ["L.S.Vigotskiy", "Petrovskiy", "Z.Freyd", "Elkonin"], answer: 0 },
    { id: "u56", text: `Insonning yetakchi axloqiy hislaridan biri?`, options: ["burch hissi", "o`rtoqlik", "do`stlik", "sevgi"], answer: 0 },
    { id: "u57", text: `O'rtoqlik munosabatlarining eng yuqori cho'qqisi?`, options: ["muhabbat hissi", "do`stlik hissi", "o`rtoqlik hissi", "vijdon hissi"], answer: 0 },
    { id: "u58", text: `Do'stlikka eng yaqin bo'lgan muhim axloqiy his?`, options: ["muhabbat hissi", "do`stlik", "o`rtoqlik hissi", "sevgi"], answer: 0 },
    { id: "u59", text: `Axloqiy hislar o'zlarining taraqqiyoti uchun doimiy qaysi hisga tayanadi?`, options: ["estetik", "uyalish", "o`rtoqlik", "sevgi"], answer: 0 },
    { id: "u60", text: `Qarorga kelishda nimalar paydo bo'ladi?`, options: ["motivlar kurashi", "vazifalar", "maqsadlar", "ehtiyoj"], answer: 0 },
    { id: "u61", text: `Mustaqillikning qarama-qarshi tomoni?`, options: ["tobelik", "moyillik", "botirlik", "jasurlik"], answer: 0 },
    { id: "u62", text: `Dadillikning qaram-qarshi tomoni?`, options: ["jur`atsizlik", "sabrsizlik", "chidamsizlik", "botirlik"], answer: 0 },
    { id: "u63", text: `Atrof-muhit ta'sirida psixika qonuniyatlarining turg'unligi?`, options: ["dinamik streotip", "emotsional ton", "psixika", "sezgi"], answer: 0 },
    { id: "u64", text: `Xarakterning ma'lum davrdagi ko'rinadigan xususiyati?`, options: ["dinamikligi", "tipik", "fiziologik", "shaxsiy"], answer: 0 },
    { id: "u65", text: `Bir xildagi harakatlarning ko'p martalab takrorlash asosida nimalar hosil bo'ladi?`, options: ["odatlar", "xarakter", "ko`nikma", "malaka"], answer: 0 },
    { id: "u66", text: `Qobiliyat asosan qaysi metod yordamida o'rganiladi?`, options: ["test", "suhbat", "so`rov", "anketa"], answer: 0 },
    { id: "u67", text: `Nima sababdan o'smir yosh davrida diqqat susayadi?`, options: ["ehtiyojlar kengayadi", "qiziqish yo`qoladi", "intilish pasayadi", "fikrlaydi"], answer: 0 },
    { id: "u68", text: `Borliqning umumlashtirilib aks ettirilishi nima?`, options: ["bilim", "malaka", "ko`nikma", "xayol"], answer: 0 },
    { id: "u69", text: `Malakalarning avtomatlashishi nima?`, options: ["ko'nikma", "odatlar", "malaka", "xarakter"], answer: 0 },
    { id: "u70", text: `Obektiv olamning subektiv aks ettirilishi nima?`, options: ["psixika", "diqqat", "sezgi", "idrok"], answer: 0 },
    { id: "u71", text: `Laboratoriya eksperimenti qayerda o'tkaziladi?`, options: ["laboratoriyada", "tabiatda", "dalada", "ko`chada"], answer: 0 },
    { id: "u72", text: `Tabiiy eksperiment qanday sharoitda o'tkaziladi?`, options: ["tabiiy sharoitda", "laboratoriyada", "dalada", "auditoriyada"], answer: 0 },
    { id: "u73", text: `Maxsus metodikalar yordamida maxsus sharoitlarda o'tkaziladigan metod turi?`, options: ["eksperiment", "kuzatish", "anketa", "test"], answer: 0 },
    { id: "u74", text: `Eng oddiy psixik vosita nima?`, options: ["yozma nutq", "til", "og`zaki nutq", "kino"], answer: 0 },
    { id: "u75", text: `Shaxsda psixik jarayonlar , holatlar va xususiyatlar rivojlanishi nima?`, options: ["psixik rivojlanish", "o`sish", "tarbiyalash", "yangilanish"], answer: 0 },
    { id: "u76", text: `Ijtimoiy-tarixiy munosabatlar majmui nima?`, options: ["shaxs", "individ", "inson", "odam"], answer: 0 },
    { id: "u77", text: `Shaxs strukturasida birinchi o'rinni nima egallaydi?`, options: ["yo`nalish", "intilish", "qiziqish", "ijodiy"], answer: 0 },
    { id: "u78", text: `Shaxsni faoliyatga nima undaydi?`, options: ["motiv", "ehtiyoj", "maqsad", "faoliyat"], answer: 0 },
    { id: "u79", text: `Psixik xususiyatlarga misol?`, options: ["temperament", "iroda", "sezgi", "idrok"], answer: 0 },
    { id: "u80", text: `Tafakkur operatsiyalarga misol?`, options: ["taqqoslash", "esda saqlash", "unitish", "tanish"], answer: 0 },
    { id: "u81", text: `Ixtiyoriy diqqatning ixtiyorsiz diqqatdan farqi?`, options: ["maqsad qo`yilishi", "vazifa", "obekti", "predmeti"], answer: 0 },
    { id: "u82", text: `O'qitish, tarbiya, sotsial muhit shaxs rivojlanishining qaysi faktorlariga kiradi?`, options: ["sotsial", "bilogik", "muhit", "ta`lim"], answer: 0 },
    { id: "u83", text: `Individual rivojlanish hamda moddalar almashinishi va qobiliyatlarning avloddan-avlodga o'tishi nima?`, options: ["irsiyat", "gen", "o`qitish", "tarbiya"], answer: 0 },
    { id: "u84", text: `Psixologiya fani qachon mustaqil fan sifatida ajralib chiqdi?`, options: ["1860 yilda", "1200 yilda", "1800 yilda", "1900 yilda"], answer: 0 },
    { id: "u85", text: `Ongimizning bir obektiga yo'naltirilishi va to'planishi nima?`, options: ["diqqat", "sezgi", "idrok", "xayol"], answer: 0 },
    { id: "u86", text: `Inson hayvondan nimasi bilan farq qiladi?`, options: ["ongi bilan", "fikrlash", "faoliyati", "maqsadi"], answer: 0 },
    { id: "u87", text: `Fikrimizning tilda ifodalanishi nima?`, options: ["nutq", "til", "sezgi", "idrok"], answer: 0 },
    { id: "u88", text: `Psixika taraqqiyoti nimadan boshlanadi?`, options: ["seskanuvchanlikdan", "sezgidan", "idrokdan", "diqqatdan"], answer: 0 },
    { id: "u89", text: `Biotik faktorlarga maxsus harakatlar bilan reaksiya qilish usullari?`, options: ["tropizm va tansislar", "senzitivlik", "afaziya", "allaneziya"], answer: 0 },
    { id: "u90", text: `Hayvonlarda ta'sirlanishning yangi turi?`, options: ["sezuvchanlik", "seskanuvchanlik", "sezgilar", "xayol"], answer: 0 },
    { id: "u91", text: `Muhitning ma'lum sharoitlarida reaksiya qilishning tug'ma murakkab formasi?`, options: ["instinct", "aql", "fikrlash", "tasavvur"], answer: 0 },
    { id: "u92", text: `Hayvonlarda harakatning individual o'zgaruvchan formalari?`, options: ["ko`nikma", "intellektual harakat", "malaka", "faoliyat"], answer: 0 },
    { id: "u93", text: `Tobelik qiyofasi qaysi hayvonlarda bo'ladi?`, options: ["to`da bo`lib yashovchi", "yovvoyi", "xonaki", "yirtqich"], answer: 0 },
    { id: "u94", text: `Inson ongli ravishda tevarak-atrofga qanday ta'sir qiladi?`, options: ["o`zgartiradi", "rivojlantiradi", "yo`qotadi", "quradi"], answer: 0 },
    { id: "u95", text: `Odamda birinchi signallar sistemasi mavjudmi?`, options: ["ha", "yo`q", "qisman", "rivojlangan"], answer: 0 },
    { id: "u96", text: `Inson mehnat faoliyatining psixologik xususiyatlarini,mehnatni ilmiy asosda tashkil qilishning psixologik tomonlarini o'rganadigan fan?`, options: ["mehnat psixologiyasi", "pedagogika", "geografiya", "mehnat"], answer: 0 },
    { id: "u97", text: `Operator faoliyatini o'rganadigan fan?`, options: ["injener psixologiya", "injeneriya", "kibernetika", "mehnat psixologiyasi"], answer: 0 },
    { id: "u98", text: `Bemor xulq-atvorini va vrach faoliyatining psixologik tomonlarini o'rganadigan fan?`, options: ["meditsina psixologiyasi", "neyropsixologiya", "psixoatriya", "gigeyena"], answer: 0 },
    { id: "u99", text: `Huquq sistemasini amalga oshirish bilan bog'liq bo'lgan psixologik masalalarni qaysi fan o'rganadi?`, options: ["yuridik psixologiya", "huquqshunoslik", "iqtisod", "sud psixologiyasi"], answer: 0 },
    { id: "u100", text: `Sportchilar shaxsi va faoliyatining psixologik tomonlarini qaysi fan o'rganadi?`, options: ["sport psixologiyasi", "jismoniy tarbiya", "psixologiya", "pedagogika"], answer: 0 },
    { id: "u101", text: `Savdo-sotiqdagi psixologik masalalarni qaysi fan o'rganadi?`, options: ["savdo psixologiyasi", "iqtisod psixologiyasi", "iqtisod", "kibernetika"], answer: 0 },
    { id: "u102", text: `Psixik jarayon tushunchasi nimani anglatadi?`, options: ["o`zgaruvchanlikni", "rivojlanishni", "shakllanishni", "ko`payishni"], answer: 0 },
    { id: "u103", text: `Psixik holat tushunchasi nimani anglatadi?`, options: ["turg`unlikni", "barqarorlikni", "mustaqillikni", "erkinlikni"], answer: 0 },
    { id: "u104", text: `Psixik xususiyat tushunchasi nimani anglatadi?`, options: ["barqarorlikni", "o`zgarish", "o`sish", "rivojlanish"], answer: 0 },
    { id: "u105", text: `Qaysi prinsip obektiv metodning asosini tashkil qiladi?`, options: ["ong va faoliyat birligi", "determinizm", "tarixiylik", "dialektika"], answer: 0 },
    { id: "u106", text: `Qarilar psixologiyasini qaysi fan o'rganadi?`, options: ["keksalar psixologiyasi", "bolalar psixologiyasi", "pedagogika", "gerontologiya"], answer: 0 },
    { id: "u107", text: `Irsiyat qaysi faktorga kiradi?`, options: ["biologik", "ijtimoiy", "jismoniy", "tipologik"], answer: 0 },
    { id: "u108", text: `Psixologiya fani qaysi fan bilan yaqin aloqada?`, options: ["pedagogika", "matematika", "kibernetika", "falsafa"], answer: 0 },
    { id: "u109", text: `Idrokning muhim komponentlari nimadan iborat?`, options: ["motor harakatlari", "sensor harakat", "intellektual", "faoliyat"], answer: 0 },
    { id: "u110", text: `Payqash harakatlari qanday harakatlar?`, options: ["silliq", "tekis", "egri", "farqlash"], answer: 0 },
    { id: "u111", text: `Ko'zning ildam sakrash harakatlari nima deyiladi?`, options: ["sakkadik", "silliq", "izlash", "sezish"], answer: 0 },
    { id: "u112", text: `Perseptiv harakatlarning birinchi darajasi?`, options: ["topish", "tenglashtirish", "farqlash", "qidirish"], answer: 0 },
    { id: "u113", text: `Perseptiv harakatlarning ikkinchi darajasi?`, options: ["farqlash", "topish", "qidirish", "tanish"], answer: 0 },
    { id: "u114", text: `Perseptiv harakatlarning uchinchi darajasi?`, options: ["tenglashtirish", "topish", "farqlash", "qidirish"], answer: 0 },
    { id: "u115", text: `Perseptiv harakatlarning to'rtinchi darajasi?`, options: ["tanish", "farqlash", "tenglashtirish", "qidirish"], answer: 0 },
    { id: "u116", text: `Ixtiyoriy idrokning muhim shakli?`, options: ["kuzatish", "sezish", "sinchkovlik", "idrok"], answer: 0 },
    { id: "u117", text: `Individning o'z ixtiyoriy tajribasini esda olib qolish, saqlashi va esga tushirishi nima deyiladi?`, options: ["idrok", "xotira", "diqqat", "xayol"], answer: 0 },
    { id: "u118", text: `Tasavvurlarning esda olib qolinishi qaysi xotira orqali olib boriladi?`, options: ["obrazli", "harakatli", "emotsional", "so`z mantiq"], answer: 0 },
    { id: "u119", text: `So'z-mantiqiy xotira mazmunini nima tashkil qiladi?`, options: ["fikrlarimiz", "harakat", "xayol", "his tuyg`u"], answer: 0 },
    { id: "u120", text: `Ixtiyoriy xotira ixtiyorsiz xotiradan nimasi bilan farq qiladi?`, options: ["maqsad", "vazifa", "motiv", "ehtiyoj"], answer: 0 },
    { id: "u121", text: `Muayyan maqsadsiz biron narsani esda olib qolish qaysi xotira turiga kiradi?`, options: ["ixtiyorsiz", "ixtiyoriy", "majburiy", "xohlangan"], answer: 0 },
    { id: "u122", text: `Uzoq muddatli xotira bilan qisqa muddatli xotira o'rtasida biron oraliq bosqich sifatida qaysi xotira turi mavjud?`, options: ["operativ", "qisqa muddati bilan", "uzoq muddati bilan", "ixtiyoriy"], answer: 0 },
    { id: "u123", text: `Qaysidir obektni idrok qilishda uni qayta esga tushirish nima?`, options: ["tanish", "eslash", "xotirlash", "xayol"], answer: 0 },
    { id: "u124", text: `Odam eslash uchun o'z oldiga qo'yadigan vazifalar orqali esga tushirish turi nima?`, options: ["ixtiyoriy", "ixtiyorsiz", "irodaviy", "xayoliy"], answer: 0 },
    { id: "u125", text: `Odam eslashining muvaffaqiyatli bo'lishi nimaga bog'liq?`, options: ["vazifa mazmuniga", "aktivligiga", "faoliyatiga", "muloqotiga"], answer: 0 },
    { id: "u126", text: `O'tmishdagi obrazlarimizni zamon va makonda lokallashtirish nima?`, options: ["xotirlash", "xayol", "fikrlash", "o`ylash"], answer: 0 },
    { id: "u127", text: `Oldinga qarab harakat qiluvchi tormozlanishnima?`, options: ["proaktiv", "retoraktiv", "ko`chish", "eslash"], answer: 0 },
    { id: "u128", text: `Orqaga qarab harakat qiluvchi tormo'zlanish?`, options: ["retroaktiv", "ko`chish", "xayoliy", "proaktiv"], answer: 0 },
    { id: "u129", text: `Vaqtincha unutish nima asosida vujudga keladi?`, options: ["tormo`zlanish", "maqsad", "motiv", "sezish"], answer: 0 },
    { id: "u130", text: `Unutish nimaga bog'liq bo'ladi?`, options: ["vaqtga", "unutishga", "faoliyatga", "sharoitga"], answer: 0 },
    { id: "u131", text: `Unutishning vaqtga bog'liqligini qaysi olim eksperimental o'rgangan?`, options: ["Ebbingauz", "Leontev", "Petrovskiy", "Platon"], answer: 0 },
    { id: "u132", text: `Bilish faoliyati nimadan boshlanadi?`, options: ["sezgidan", "idrok", "diqqat", "xarakter"], answer: 0 },
    { id: "u133", text: `Psixika taraqqiyoti nimadan boshlanadi?`, options: ["seskanuvchanlikdan", "sezgidan", "idrokdan", "maqsaddan"], answer: 0 },
    { id: "u134", text: `Tafakkur asosan qaysi ruhiy jarayon bilan chambarchas bog'liq?`, options: ["nutq", "diqqat", "iroda", "hissiyot"], answer: 0 },
    { id: "u135", text: `Voqelikda narsa va hodisalarning umumiy muhim farq qiladigan belgilari qanday fikrda aks ettiriladi?`, options: ["tushunchada", "fikrda", "hukmda", "xulosada"], answer: 0 },
    { id: "u136", text: `Xulosa chiqarishning nechta asosiy turi bor?`, options: ["3", "2", "1", "5"], answer: 0 },
    { id: "u137", text: `Bir butun narsani analiz qilish natijasida ajratilgan komponentlarini birlashtirish nima?`, options: ["sintez", "analiz", "taqqoslash", "umumiylashtirish"], answer: 0 },
    { id: "u138", text: `Insonni faoliyatga nima undaydi?`, options: ["motiv", "ehtiyoj", "maqsad", "vazifa"], answer: 0 },
    { id: "u139", text: `Kuzatish metodining qaysi turi ilmiy to'gri natijalar bermaydi?`, options: ["o`z-o`zini kuzatish", "eksperiment", "suhbat", "test"], answer: 0 },
    { id: "u140", text: `Bosh miya yarim sharlarida qo'zg'alish va tormo'zlanishning bir nuqtaga to'planishi?`, options: ["konsentratsiyasi", "sintezi", "analizi", "tasavvur"], answer: 0 },
    { id: "u141", text: `O'zaro mustahkam birlashgan shartli reflekslar sistemasi nima deb ataladi?`, options: ["dinamik stereotip", "emotsional ton", "emotsiya", "hissiyot"], answer: 0 },
    { id: "u142", text: `Tashqi muhitdagi birdaniga ta'sir etib qoladigan qo'zg'atuvchi tufayli yuzaga keladigan tormozlanishnomi?`, options: ["tashqi yoki shartsiz", "ichki", "shartli", "muhim"], answer: 0 },
    { id: "u143", text: `Shartli qo'zg'atuvchi bilan mustahkamlanmasligi natijasidagi tormozlanishnomi?`, options: ["shartli yoki ichki", "shartsiz", "tashqi", "muhim"], answer: 0 },
    { id: "u144", text: `Test so'zi qanday ma'noni beradi?`, options: ["sinash", "tekshirish", "izlash", "qidirish"], answer: 0 },
    { id: "u145", text: `Refleks so'zi qanday manoni beradi?`, options: ["aks ettirish", "sezish", "idrok", "fikrlash"], answer: 0 },
    { id: "u146", text: `Psixikani o'rganuvchi fan?`, options: ["psixologiya", "pedagogika", "meditsina", "anatomiya"], answer: 0 },
    { id: "u147", text: `Miya ishining asosida nima yotadi?`, options: ["refleks", "sezgi", "idrok", "diqqat"], answer: 0 },
    { id: "u148", text: `Axborot qanchalik qonuniyroq bo'lsa, uning elementi qanday bo'ladi?`, options: ["kam informasiya tashiydi", "aktiv", "passiv", "qiziqish"], answer: 0 },
    { id: "u149", text: `Murakkab dinamik sistemasini optimal boshqarish haqidagi fan?`, options: ["kibernetika", "Psixologiya", "peagogika", "anatomiya"], answer: 0 },
    { id: "u150", text: `Yo'nalgan kam differensiallangan aniq bo'lmagan intilish?`, options: ["mayl", "hirs", "berilish", "qiziqish"], answer: 0 },
    { id: "u151", text: `Predmetga intilishning yanada yuksakroq va anglangan formasi?`, options: ["qiziqish", "motiv", "kuzatish", "diqqat"], answer: 0 },
    { id: "u152", text: `Qiziqish va moyillik asosida nima shakllanadi?`, options: ["intilish", "diqqat", "xarakter", "ideal"], answer: 0 },
    { id: "u153", text: `Ijtimoiy va individual ongda ruhiy hodisalarning aks etishini umumlashtiruvchi tushuncha?`, options: ["axloq", "temperament", "xarakter", "diqqat"], answer: 0 },
    { id: "u154", text: `Birgalikda yashayotgan,ishlayotgan yoki o'qiyotgan odamlarning shaxslararo munosabatlari tomonidan belgilanuvchi guruhning mohiyati?`, options: ["psixologik kayfiyat", "xarakter", "faoliyat", "sezgi"], answer: 0 },
    { id: "u155", text: `Insonning jamiyat taraqqiyoti maqsadlari bilan birdamligi?`, options: ["jamoachilik", "muloqot", "faoliyat", "qobiliyat"], answer: 0 },
    { id: "u156", text: `Insonning muhit bilan aktiv munosabati?`, options: ["faoliyat", "muloqot", "diqqat", "tafakkur"], answer: 0 },
    { id: "u157", text: `U yoki bu harakat qilishni bajarishga turtki bo'ladigan psixik hodisalar?`, options: ["ehtiyoj", "faoliyat", "motivlar", "qiziqish"], answer: 0 },
    { id: "u158", text: `Insonga ta'sir etib, javob reaksiyasini uyg'otadigan narsa?`, options: ["stimul", "sezgi", "idrok", "diqqat"], answer: 0 },
    { id: "u159", text: `Psixikani muskullar harakatida umumlashtirib ifodalovchi jarayon?`, options: ["psixomotorika", "psixodiagnostika", "test", "dinamika"], answer: 0 },
    { id: "u160", text: `Odamning diqqatini biror obektda atayin ushlab turish vaqti?`, options: ["barqarorligi", "mustahkamligi", "tezligi", "hajmi"], answer: 0 },
    { id: "u161", text: `Bilimlarning bir predmet va hodisalardan boshqasiga ko'chuvchanligi nima?`, options: ["egiluuvchanligi", "bo`linishi", "o`tishi", "tezligi"], answer: 0 },
    { id: "u162", text: `Idealistik psixologiya qaysi bir yagona metodni tavsiya etgan?`, options: ["introspeksiya", "test", "kuzatish", "eksperiment"], answer: 0 },
    { id: "u163", text: `Genetik metoddan psixologik tadqiqotda foydalanish namunalari kim tomonidan kashf qilingan?`, options: ["Vigotskiy", "Leontev", "Petrovskiy", "Slavina"], answer: 0 },
    { id: "u164", text: `Bolalarda nutqning qaysi turi uchraydi?`, options: ["egosentrik", "dialogik", "tashqi", "monologik"], answer: 0 },
    { id: "u165", text: `Kuzatish metodining eng asosiy salbiy tomoni?`, options: ["qaytarilmasligi", "ko`chishi", "aniqmasligi", "notog`riligi"], answer: 0 },
    { id: "u166", text: `Tadqiqotning birinchi bosqichi?`, options: ["tayyorgarlik", "topish", "tanish", "farqlash"], answer: 0 },
    { id: "u167", text: `Tadqiqotning ikkinchi bosqichi?`, options: ["eksperimental", "topish", "tushuntirish", "farqlash"], answer: 0 },
    { id: "u168", text: `Tadqiqotning uchinchi bosqichi?`, options: ["qayta ishlash", "tayyorgarlik", "tanish", "topish"], answer: 0 },
    { id: "u169", text: `Tadqiqotning to'rtinchi bosqichi?`, options: ["tushuntirish", "farqlash", "topish", "tayyorgarlik"], answer: 0 },
    { id: "u170", text: `Odamning insonlik jinsiga mansubligi fakti qanday tushuncha bilan ifodalanadi?`, options: ["individ", "shaxs", "odam", "inson"], answer: 0 },
    { id: "u171", text: `Individ sifatida dunyoga kelgan odam keyinchalik nimaga aylanadi?`, options: ["shaxsga", "insonga", "guruhga", "jamoaga"], answer: 0 },
    { id: "u172", text: `Shaxsning o'z qarashlari,prinsiplari,dunyo qarashlariga mos ravishda harakat qilishga undovchi anglanilgan ehtiyojlar sistemasi nima?`, options: ["e`tiqod", "imon", "ishonch", "motiv"], answer: 0 },
    { id: "u173", text: `Qaysi konsepsiya shaxs rivojlanishida bilogik faktorni asosiy deb hisoblaydi?`, options: ["biogenetik", "sotsiogenetik", "freydizm", "psixoanaliz"], answer: 0 },
    { id: "u174", text: `Odamlarning tadqiqotchi tomonidan ma'lum belgilariga asosan ajratib olish yo'li bilan birlashtirgan guruhi nima?`, options: ["shartli", "real", "kichik", "shartsiz"], answer: 0 },
    { id: "u175", text: `Real guruhning eng kattasi?`, options: ["insoniyat", "sinflar", "jamoa", "sinflar"], answer: 0 },
    { id: "u176", text: `Real guruhning insoniyatdan kichigi qaysi?`, options: ["sinflar", "to`da", "katta gruppa", "insoniyat"], answer: 0 },
    { id: "u177", text: `Inson psixikasiga xos ommaviy tusdagi hodisaga misol?`, options: ["vahima", "kollektiv sezgi", "kayfiyat", "ishonch"], answer: 0 },
    { id: "u178", text: `Psixologik moslikni tadqiqot qilish apparati?`, options: ["gomeostat", "voltmetr", "ampermetr", "fotoapparat"], answer: 0 },
    { id: "u179", text: `Ommaviy tusdagi istagan bir guruhga xos hodisa?`, options: ["ijtimoiy kayfiyat", "xarakter", "temperament", "faoliyat"], answer: 0 },
    { id: "u180", text: `Eng ko'p o'rganilgan ommaviy tusdagi hodisa?`, options: ["jamoa tafakkuri", "xarakter", "temperament", "sezgi"], answer: 0 },
    { id: "u181", text: `Nerv jarayonlarining induksiyasi qonuni kim tomonidan kashf qilingan?`, options: ["Pavlov", "Leontev", "Sechenov", "Beruniy"], answer: 0 },
    { id: "u182", text: `Dominanatlik prinsipi kim tomonidan ilgari surilgan?`, options: ["Uxtomskiy", "Rubinshteyn", "Forobiy", "Ushinskiy"], answer: 0 },
    { id: "u183", text: `Ixtiyoriy diqqat ixtiyorsiz diqqatdan qaysi jihatdan farq qiladi?`, options: ["sifat", "maqsad", "muloqot", "faoliyat"], answer: 0 },
    { id: "u184", text: `Qaysi konsepsiya shaxs rivojlanishida sotsial faktorlarni asosiy deb qaraydi?`, options: ["sotsiogenetik", "biogenetik", "genetik", "Freydizm"], answer: 0 },
    { id: "u185", text: `Organizmga tug'ma ravishda berilgan reflekslar nima deb ataladi?`, options: ["shartsiz", "shartli", "tug`ma", "tabiiy"], answer: 0 },
    { id: "u186", text: `Shartli reflekslarning shartsiz reflekslardan asosiy farqi?`, options: ["shart qo`yilishi", "tug`maligi", "tabiyligi", "mavjudligi"], answer: 0 },
    { id: "u187", text: `Organizmga ta'sir qilishi mumkin bo'lgan har xil narsalarni I.P.Pavlov qanday atagan?`, options: ["qo`zg`atuvchi", "ta`sirlovchi", "stimul", "ehtiyoj"], answer: 0 },
    { id: "u188", text: `Ikkinchi signallar sistemasi kimlarga xos?`, options: ["insonga", "shaxsga", "individga", "odamga"], answer: 0 },
    { id: "u189", text: `Tashqi muhitdagi narsalarning so'zlar orqali aks etishi?`, options: ["nutq", "shovqin", "musiqa", "tovush"], answer: 0 },
    { id: "u190", text: `Markazga intiluvchi nervlar qanday ataladi?`, options: ["afferent", "efferent", "stimul", "qochuvchi"], answer: 0 },
    { id: "u191", text: `Markazdan qochuvchi nervlar qanday ataladi?`, options: ["efferent", "qochuvchi", "afferent", "aks etuvchi"], answer: 0 },
    { id: "u192", text: `Tashqi muhitda bo'ladigan turli ta'sirotlarni qabul qiluvchi nerv tolalari qanday ataladi?`, options: ["reseptor", "sezgi", "idrok", "afferent"], answer: 0 },
    { id: "u193", text: `Bosh miyadagi tormozlanishning atrofga tarqalishi?`, options: ["irradasiya", "akkomadasiya", "appersepsiya", "qochish"], answer: 0 },
    { id: "u194", text: `Predmet va hodisalarning asosiy mohiyatining xotirada mustahkamlaydigan tushuncha?`, options: ["puxta bilimlar", "faoliyat", "muloqot", "qobiliyat"], answer: 0 },
    { id: "u195", text: `Bajarishni ehtiyojga aylangan, u bajarilmay qolganda qoniqmaslik va bezovtalik, noxush hissiyotni uyg'otuvchi harakat?`, options: ["odat", "an`ana", "muloqot", "faoliyat"], answer: 0 },
    { id: "u196", text: `Odamning xarakter holatiga aylangan ish qoidalari va xatti -harakat normalariga aniq rioya qilishga moyilligi?`, options: ["intizomlilik", "tartib", "axloq", "odat"], answer: 0 },
    { id: "u197", text: `Ijod tarzida namoyon bo'luvchi ma'lum faoliyatga taalluqli qobiliyat shakli`, options: ["talant", "qobiliyat", "iqtidor", "layoqat"], answer: 0 },
    { id: "u198", text: `Iste'dodning oliy darajasi?`, options: ["geniallik", "talant", "qobiliyat", "layoqat"], answer: 0 },
    { id: "u199", text: `Gnostik psixik holatga misol?`, options: ["hayratlanish", "sinchkovlik", "qiziqish", "muomala"], answer: 0 },
    { id: "u200", text: `Emotsional psixik holatlarga misol?`, options: ["shodlik", "xafalik", "idrok", "nutq"], answer: 0 },
    { id: "u201", text: `Hissiyotlar kimlarga xos?`, options: ["odamga", "hayvonga", "qushlarga", "hammaga"], answer: 0 },
    { id: "u202", text: `Fantaziya obrazlarini bo'yovchi hamda ularning realligi va bilish illyuziyasini yaratuvchi hissiyot?`, options: ["ishonch", "imon", "e`tiqod", "sevgi"], answer: 0 },
    { id: "u203", text: `Insonning to'siqlarni yengib , o'z faoliyatini ongli boshqarish qobiliyati?`, options: ["iroda", "motiv", "diqqat", "tafakkur"], answer: 0 },
    { id: "u204", text: `Borliqdagi predmet va hodisalarning umumiy, biroq muhim xususiyatlarining aks etishi?`, options: ["tushuncha", "hukm", "xulosa", "tasavvur"], answer: 0 },
    { id: "u205", text: `Predmet ,hodisa yoki tushunchani fikran qismlarga ajratish va uning ayrim qism, belgi yoki xususiyatlarini ajratib ko'rsatish operatsiyasi?`, options: ["analiz", "sintez", "taqqoslash", "soddalashtirish"], answer: 0 },
    { id: "u206", text: `Alohida element, qism, belgilarni fikran yagona tushunchaga birlashtirish operatsiyasi?`, options: ["sintez", "analiz", "taqqoslash", "umumlashtirish"], answer: 0 },
    { id: "u207", text: `Predmetlar yoki borliq hodisalari o'rtasidagi o'xshashlik va farqni aniqlash operatsiyasi?`, options: ["taqqoslash", "analiz", "sintez", "solishtirish"], answer: 0 },
    { id: "u208", text: `Predmet yoki hodisalar guruhning muhim bo'lmagan belgilaridan fikran chetlashish va faqat muhim xususiyatlarinigina ajratish operatsiyasi?`, options: ["abstraksiya", "konkretlashtirish", "analiz", "sintez"], answer: 0 },
    { id: "u209", text: `Umumiyroq bo'lgan tushunchalardan deduksiya bilan bog'liq bo'lgan xususiyroq tushunchalarga fikran o'tish operatsiyasi?`, options: ["konkretlashtirish", "sintez", "taqqoslash", "umumlashtirish"], answer: 0 },
    { id: "u210", text: `Shaxsning ma'lum faoliyatida ifodalanadigan qobiliyatlarning yuqori darajasi?`, options: ["talant", "qobiliyat", "layoqat", "iqtidor"], answer: 0 },
    { id: "u211", text: `Voqelikdagi narsa va hodisalarning muhim belgi va xususiyatlarini so'z bilan ifodalashdan iborat tafakkur usuli?`, options: ["tushuncha", "hukm", "xulosa chiqarish", "tasavvur"], answer: 0 },
    { id: "u212", text: `Odamga ta'sir etuvchi qo'zg'alishlarni idrok etish va uni tahlil qilishni ta'minlaydigan murakkab nerv sistemasi tizimi?`, options: ["analizator", "sezgi", "tasavvur", "refleks"], answer: 0 },
    { id: "u213", text: `Organizmning tashqi yoki ichki qo'zg'atuvchilarga nerv tizimi orqali qonuniy ravishda qaytaradigan javob reaksiyasi?`, options: ["refleks", "stimul", "reaksiya", "sintez"], answer: 0 },
    { id: "u214", text: `Kuchli qo'zg'ovchilar ta'sirida yuzaga keladigan jiddiylik holati?`, options: ["stress", "iroda", "hissiyot", "parishonxotirlik"], answer: 0 },
    { id: "u215", text: `Ichki va tashqi to'siqlarni yengish bilan bog'liq faoliyat bajarishga yordam beradigan ruhiy holat?`, options: ["iroda", "hissiyot", "emotsiya", "diqqat"], answer: 0 },
    { id: "u216", text: `Irodaviy nazoratni yo'qotgan holda tez va kuchli paydo bo'lib, shiddat bilan o'tadigan qisqa muddatli emotsional holat?`, options: ["stress", "emotsiya", "affekt", "hissiyot"], answer: 0 },
    { id: "u217", text: `Turli harakatlar qaysi turdagi xotira orqali esda olib qolinadi?`, options: ["harakatli xotira", "obrazli", "emotsional", "qisqa muddatli xotira"], answer: 0 },
  ],
};

const SUBJECTS = [
  { key: "sotsial", label: "Sotsial Psixologiya", maxQ: 149, color: "#6c63ff", emoji: "🧠" },
  { key: "taraqqiyot", label: "Taraqqiyot va Differensial Psixologiya", maxQ: 148, color: "#f5a623", emoji: "🌱" },
  { key: "umumiy", label: "Umumiy Psixologiya", maxQ: 217, color: "#2ecc71", emoji: "📚" },
];

const DEFAULT_CONFIG = { sotsial: 15, taraqqiyot: 15, umumiy: 20 };

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildExam(config) {
  const exam = [];
  for (const s of SUBJECTS) {
    const pool = questions[s.key];
    const n = Math.min(config[s.key] || s.maxQ, pool.length);
    const picked = shuffle(pool).slice(0, n);
    for (const q of picked) {
      const shuffledOptions = shuffle(q.options.map((o, i) => ({ text: o, correct: i === q.answer })));
      exam.push({ ...q, shuffledOptions, subject: s.key });
    }
  }
  return shuffle(exam);
}

const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

export default function App() {
  const [screen, setScreen] = useState("home");
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [exam, setExam] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(7200);
  const [running, setRunning] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [reviewFilter, setReviewFilter] = useState("all");
  const [browseSub, setBrowseSub] = useState("all");
  const [browseSearch, setBrowseSearch] = useState("");

  const totalQ = config.sotsial + config.taraqqiyot + config.umumiy;

  useEffect(() => {
    if (screen !== "exam" || !running) return;
    if (timeLeft <= 0) { finishExam(); return; }
    const t = setInterval(() => setTimeLeft(p => p - 1), 1000);
    return () => clearInterval(t);
  }, [screen, running, timeLeft]);

  function startExam() {
    const e = buildExam(config);
    setExam(e); setCurrent(0); setAnswers({});
    setTimeLeft(7200); setRunning(true);
    setShowReview(false); setScreen("exam");
  }

  function finishExam() { setRunning(false); setScreen("result"); }

  const score = exam.reduce((acc, q) => acc + (answers[q.id] !== undefined && q.shuffledOptions[answers[q.id]]?.correct ? 2 : 0), 0);
  const maxScore = exam.length * 2;
  const pct = maxScore > 0 ? (score / maxScore) * 100 : 0;
  const correctCount = score / 2;
  const grade = pct >= 90 ? 5 : pct >= 70 ? 4 : pct >= 60 ? 3 : 2;
  const answeredCount = Object.keys(answers).length;

  const subjectStats = SUBJECTS.map(s => {
    const sq = exam.filter(q => q.subject === s.key);
    const correct = sq.filter(q => answers[q.id] !== undefined && q.shuffledOptions[answers[q.id]]?.correct).length;
    return { ...s, total: sq.length, correct };
  });

  const reviewedExam = exam.filter(q => {
    if (reviewFilter === "wrong") return answers[q.id] !== undefined && !q.shuffledOptions[answers[q.id]]?.correct;
    if (reviewFilter === "correct") return q.shuffledOptions[answers[q.id] ?? -1]?.correct;
    if (reviewFilter === "unanswered") return answers[q.id] === undefined;
    return true;
  });

  const allQuestions = [
    ...questions.sotsial.map(q => ({ ...q, subject: "sotsial" })),
    ...questions.taraqqiyot.map(q => ({ ...q, subject: "taraqqiyot" })),
    ...questions.umumiy.map(q => ({ ...q, subject: "umumiy" })),
  ];
  const filteredBrowse = allQuestions.filter(q =>
    (browseSub === "all" || q.subject === browseSub) &&
    (browseSearch === "" || q.text.toLowerCase().includes(browseSearch.toLowerCase()))
  );

  const BG = "linear-gradient(135deg,#0f0c29,#302b63,#24243e)";
  const Card = ({ children, style }) => (
    <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 18, backdropFilter: "blur(10px)", ...style }}>{children}</div>
  );
  const Btn = ({ children, onClick, style, disabled }) => (
    <button onClick={onClick} disabled={disabled} style={{ border: "none", cursor: disabled ? "default" : "pointer", fontFamily: "inherit", ...style }}>{children}</button>
  );

  // ═══ HOME ═══════════════════════════════════════════════
  if (screen === "home") return (
    <div style={{ minHeight: "100vh", background: BG, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Segoe UI',sans-serif", padding: 20 }}>
      <div style={{ maxWidth: 620, width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ fontSize: 60, marginBottom: 6 }}>🎓</div>
          <h1 style={{ color: "#fff", fontSize: 32, fontWeight: 900, margin: "0 0 8px", letterSpacing: -1 }}>Psixologiya Testi</h1>
          <p style={{ color: "#718096", margin: 0, fontSize: 14 }}>Davlat imtihoniga tayyorgarlik • 3 fan • <span style={{ color: "#6c63ff", fontWeight: 700 }}>514 ta savol bazasi</span></p>
        </div>

        {SUBJECTS.map((s, i) => (
          <Card key={s.key} style={{ padding: "18px 22px", marginBottom: 10, border: `1px solid ${s.color}33`, display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ fontSize: 28 }}>{s.emoji}</div>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>{s.label}</div>
              <div style={{ color: s.color, fontSize: 13, marginTop: 2 }}>{s.maxQ} ta savol mavjud</div>
            </div>
            <div style={{ background: s.color + "22", border: `1px solid ${s.color}44`, borderRadius: 8, padding: "3px 10px", color: s.color, fontSize: 11, fontWeight: 700 }}>Bo'lim {i + 1}</div>
          </Card>
        ))}

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, margin: "18px 0 24px" }}>
          {[["514", "Savol bazasi", "#6c63ff"], ["3", "Fan bo'limi", "#f5a623"], ["100", "Max ball", "#2ecc71"]].map(([v, l, c]) => (
            <Card key={l} style={{ padding: "14px 8px", textAlign: "center" }}>
              <div style={{ color: c, fontWeight: 900, fontSize: 24 }}>{v}</div>
              <div style={{ color: "#718096", fontSize: 12, marginTop: 2 }}>{l}</div>
            </Card>
          ))}
        </div>

        <Btn onClick={() => setScreen("config")} style={{ width: "100%", background: "linear-gradient(135deg,#6c63ff,#5a52d5)", borderRadius: 16, padding: "15px", color: "#fff", fontSize: 17, fontWeight: 700, boxShadow: "0 8px 30px rgba(108,99,255,0.4)", marginBottom: 10 }}>
          Testni Boshlash →
        </Btn>
        <Btn onClick={() => setScreen("browse")} style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 16, padding: "13px", color: "#e2e8f0", fontSize: 15 }}>
          📖 Savol Bazasini Ko'rish
        </Btn>
      </div>
    </div>
  );

  // ═══ CONFIG ══════════════════════════════════════════════
  if (screen === "config") return (
    <div style={{ minHeight: "100vh", background: BG, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Segoe UI',sans-serif", padding: 20 }}>
      <Card style={{ maxWidth: 500, width: "100%", padding: 30 }}>
        <Btn onClick={() => setScreen("home")} style={{ background: "none", color: "#718096", fontSize: 13, marginBottom: 16, padding: 0 }}>← Orqaga</Btn>
        <h2 style={{ color: "#fff", fontSize: 21, fontWeight: 800, marginBottom: 4 }}>⚙️ Test Sozlamalari</h2>
        <p style={{ color: "#718096", fontSize: 13, marginBottom: 26 }}>Har bo'lim uchun savol sonini tanlang — tasodifiy tanlanadi</p>

        {SUBJECTS.map(s => (
          <div key={s.key} style={{ marginBottom: 22 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ color: "#e2e8f0", fontSize: 14 }}>{s.emoji} {s.label}</span>
              <span style={{ color: s.color, fontWeight: 800, fontSize: 17 }}>{config[s.key]}</span>
            </div>
            <input type="range" min={5} max={s.maxQ} value={config[s.key]}
              onChange={e => setConfig(p => ({ ...p, [s.key]: +e.target.value }))}
              style={{ width: "100%", accentColor: s.color, marginBottom: 4 }} />
            <div style={{ display: "flex", gap: 6 }}>
              {[5, 15, Math.round(s.maxQ / 2), s.maxQ].map(v => (
                <Btn key={v} onClick={() => setConfig(p => ({ ...p, [s.key]: v }))}
                  style={{ background: config[s.key] === v ? s.color : "rgba(255,255,255,0.07)", borderRadius: 6, padding: "2px 8px", color: config[s.key] === v ? "#fff" : "#718096", fontSize: 11 }}>
                  {v}
                </Btn>
              ))}
            </div>
          </div>
        ))}

        <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 12, padding: "12px 16px", marginBottom: 16, display: "flex", justifyContent: "space-between" }}>
          <span style={{ color: "#a0aec0", fontSize: 14 }}>Jami savollar:</span>
          <span style={{ color: "#fff", fontWeight: 700 }}>{totalQ} ta</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
          <Btn onClick={() => setConfig(DEFAULT_CONFIG)} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, padding: "11px", color: "#e2e8f0", fontSize: 13 }}>↩ Standart (50)</Btn>
          <Btn onClick={() => setConfig({ sotsial: 149, taraqqiyot: 148, umumiy: 217 })} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, padding: "11px", color: "#e2e8f0", fontSize: 13 }}>📚 Hammasi (514)</Btn>
        </div>

        <Btn onClick={startExam} style={{ width: "100%", background: "linear-gradient(135deg,#6c63ff,#5a52d5)", borderRadius: 14, padding: "14px", color: "#fff", fontSize: 16, fontWeight: 700 }}>
          Testni Boshlash ✓
        </Btn>
      </Card>
    </div>
  );

  // ═══ BROWSE ══════════════════════════════════════════════
  if (screen === "browse") return (
    <div style={{ minHeight: "100vh", background: BG, fontFamily: "'Segoe UI',sans-serif" }}>
      <div style={{ background: "rgba(0,0,0,0.5)", padding: "12px 16px", position: "sticky", top: 0, zIndex: 10, backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, maxWidth: 800, margin: "0 auto" }}>
          <Btn onClick={() => setScreen("home")} style={{ background: "none", color: "#a0aec0", fontSize: 20, padding: 0 }}>←</Btn>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>📖 Savol Bazasi</span>
          <span style={{ color: "#718096", fontSize: 13 }}>({filteredBrowse.length} ta)</span>
          <input value={browseSearch} onChange={e => setBrowseSearch(e.target.value)} placeholder="Qidirish..." style={{ marginLeft: "auto", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "5px 12px", color: "#fff", fontSize: 13, outline: "none", width: 160 }} />
        </div>
        <div style={{ display: "flex", gap: 6, marginTop: 10, maxWidth: 800, margin: "8px auto 0" }}>
          {[["all","Hammasi","#6c63ff"], ["sotsial","Sotsial 🧠","#6c63ff"], ["taraqqiyot","Taraqqiyot 🌱","#f5a623"], ["umumiy","Umumiy 📚","#2ecc71"]].map(([k,l,c]) => (
            <Btn key={k} onClick={() => setBrowseSub(k)}
              style={{ background: browseSub === k ? c : "rgba(255,255,255,0.08)", borderRadius: 8, padding: "4px 11px", color: "#fff", fontSize: 12 }}>
              {l}
            </Btn>
          ))}
        </div>
      </div>

      <div style={{ padding: "14px 16px", maxWidth: 800, margin: "0 auto" }}>
        {filteredBrowse.map((q, i) => {
          const subj = SUBJECTS.find(s => s.key === q.subject);
          return (
            <div key={q.id} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: "14px 16px", marginBottom: 8, border: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                <span style={{ color: "#718096", fontSize: 12, minWidth: 28 }}>#{i+1}</span>
                <span style={{ color: "#e2e8f0", fontSize: 14, flex: 1, lineHeight: 1.5 }}>{q.text}</span>
                <span style={{ background: subj?.color + "22", color: subj?.color, borderRadius: 6, padding: "2px 8px", fontSize: 11, fontWeight: 700, height: "fit-content", whiteSpace: "nowrap" }}>{subj?.emoji}</span>
              </div>
              {q.options.map((o, oi) => (
                <div key={oi} style={{ display: "flex", gap: 6, marginBottom: 3 }}>
                  <span style={{ color: oi === q.answer ? "#68d391" : "#4a5568", fontSize: 12, fontWeight: 700, minWidth: 18 }}>{oi === q.answer ? "✓" : `${String.fromCharCode(65+oi)}.`}</span>
                  <span style={{ color: oi === q.answer ? "#68d391" : "#718096", fontSize: 13 }}>{o}</span>
                </div>
              ))}
            </div>
          );
        })}
        {filteredBrowse.length === 0 && <div style={{ color: "#718096", textAlign: "center", marginTop: 60, fontSize: 15 }}>Hech narsa topilmadi</div>}
      </div>
    </div>
  );

  // ═══ EXAM ════════════════════════════════════════════════
  if (screen === "exam") {
    const q = exam[current];
    const subj = SUBJECTS.find(s => s.key === q.subject);
    const progress = ((current + 1) / exam.length) * 100;
    const urgent = timeLeft < 300;

    return (
      <div style={{ minHeight: "100vh", background: BG, fontFamily: "'Segoe UI',sans-serif", display: "flex", flexDirection: "column" }}>
        <div style={{ background: "rgba(0,0,0,0.45)", padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.07)", position: "sticky", top: 0, zIndex: 10 }}>
          <div style={{ color: "#a0aec0", fontSize: 13 }}>
            <span style={{ color: "#fff", fontWeight: 700 }}>{current + 1}</span><span style={{ color: "#4a5568" }}>/{exam.length}</span>
            <span style={{ color: answeredCount === exam.length ? "#2ecc71" : "#718096", marginLeft: 8, fontSize: 11 }}>✍ {answeredCount} javob</span>
          </div>
          <div style={{ background: urgent ? "rgba(255,59,59,0.2)" : "rgba(255,255,255,0.08)", border: `1px solid ${urgent ? "#ff3b3b99" : "rgba(255,255,255,0.15)"}`, borderRadius: 10, padding: "5px 13px", color: urgent ? "#ff6b6b" : "#fff", fontWeight: 700, fontSize: 16, fontVariantNumeric: "tabular-nums" }}>
            ⏱ {fmt(timeLeft)}
          </div>
          <div style={{ background: subj?.color + "22", borderRadius: 8, padding: "3px 10px", color: subj?.color, fontSize: 11, fontWeight: 700 }}>{subj?.emoji} Bo'lim</div>
        </div>

        <div style={{ height: 3, background: "rgba(255,255,255,0.07)" }}>
          <div style={{ height: "100%", background: `linear-gradient(90deg,${subj?.color || "#6c63ff"},#f5a623)`, width: `${progress}%`, transition: "width 0.3s" }} />
        </div>

        <div style={{ flex: 1, padding: "18px 16px", maxWidth: 700, margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
          <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 18, padding: "20px 22px", marginBottom: 14, border: "1px solid rgba(255,255,255,0.09)", minHeight: 80 }}>
            <div style={{ color: "#718096", fontSize: 11, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>{subj?.emoji} {subj?.label}</div>
            <p style={{ color: "#fff", fontSize: 16, lineHeight: 1.65, margin: 0 }}>{q.text}</p>
          </div>

          {q.shuffledOptions.map((opt, i) => {
            const sel = answers[q.id] === i;
            return (
              <Btn key={i} onClick={() => setAnswers(p => ({ ...p, [q.id]: i }))}
                style={{ width: "100%", background: sel ? `${subj?.color || "#6c63ff"}22` : "rgba(255,255,255,0.04)", border: `2px solid ${sel ? (subj?.color || "#6c63ff") : "rgba(255,255,255,0.08)"}`, borderRadius: 13, padding: "13px 15px", textAlign: "left", color: sel ? "#e2e8f0" : "#c4c4c4", fontSize: 14, lineHeight: 1.5, marginBottom: 8, display: "flex", gap: 10, alignItems: "flex-start", transition: "all 0.15s" }}>
                <span style={{ minWidth: 26, height: 26, borderRadius: 7, background: sel ? (subj?.color || "#6c63ff") : "rgba(255,255,255,0.09)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 12, color: sel ? "#fff" : "#718096", flexShrink: 0 }}>
                  {["A","B","C","D"][i]}
                </span>
                <span style={{ paddingTop: 3 }}>{opt.text}</span>
              </Btn>
            );
          })}

          <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
            <Btn onClick={() => setCurrent(p => Math.max(0, p - 1))} disabled={current === 0}
              style={{ flex: 1, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "12px", color: current === 0 ? "#4a5568" : "#e2e8f0", fontSize: 14 }}>
              ← Oldingi
            </Btn>
            {current < exam.length - 1 ? (
              <Btn onClick={() => setCurrent(p => p + 1)}
                style={{ flex: 2, background: `linear-gradient(135deg,${subj?.color || "#6c63ff"},#5a52d5)`, borderRadius: 12, padding: "12px", color: "#fff", fontSize: 14, fontWeight: 700 }}>
                Keyingi →
              </Btn>
            ) : (
              <Btn onClick={finishExam}
                style={{ flex: 2, background: "linear-gradient(135deg,#2ecc71,#27ae60)", borderRadius: 12, padding: "12px", color: "#fff", fontSize: 14, fontWeight: 700 }}>
                ✓ Yakunlash
              </Btn>
            )}
          </div>

          <div style={{ display: "flex", gap: 3, flexWrap: "wrap", justifyContent: "center", marginTop: 14 }}>
            {exam.map((eq, i) => (
              <Btn key={i} onClick={() => setCurrent(i)}
                style={{ width: 26, height: 26, borderRadius: 5, fontSize: 10, fontWeight: 700,
                  background: i === current ? "#6c63ff" : answers[eq.id] !== undefined ? "#2ecc71" : "rgba(255,255,255,0.09)",
                  color: "#fff" }}>
                {i + 1}
              </Btn>
            ))}
          </div>

          <Btn onClick={finishExam} style={{ width: "100%", background: "rgba(255,59,59,0.07)", border: "1px solid rgba(255,59,59,0.2)", borderRadius: 12, padding: "10px", color: "#fc8181", fontSize: 13, marginTop: 12 }}>
            🏁 Testni Yakunlash ({answeredCount}/{exam.length} javob berildi)
          </Btn>
        </div>
      </div>
    );
  }

  // ═══ RESULT ══════════════════════════════════════════════
  if (screen === "result") {
    const gc = grade === 5 ? "#2ecc71" : grade === 4 ? "#3498db" : grade === 3 ? "#f5a623" : "#e74c3c";
    const ge = grade === 5 ? "🏆" : grade === 4 ? "🎉" : grade === 3 ? "✅" : "📖";
    const gm = grade === 5 ? "A'lo! Zo'r tayyorgarlik ko'rdingiz!" : grade === 4 ? "Yaxshi natija! Davom eting!" : grade === 3 ? "Qoniqarli. Ko'proq mashq qiling." : "Ko'proq o'qish zarur.";

    return (
      <div style={{ minHeight: "100vh", background: BG, fontFamily: "'Segoe UI',sans-serif", padding: 16 }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>

          <Card style={{ padding: 28, textAlign: "center", marginBottom: 12 }}>
            <div style={{ fontSize: 50, marginBottom: 6 }}>{ge}</div>
            <div style={{ color: gc, fontSize: 66, fontWeight: 900, lineHeight: 1 }}>{score}</div>
            <div style={{ color: "#718096", fontSize: 14, marginBottom: 10 }}>/ {maxScore} ball</div>
            <div style={{ display: "inline-block", background: gc + "1a", border: `2px solid ${gc}`, borderRadius: 50, padding: "5px 22px", color: gc, fontSize: 22, fontWeight: 900, marginBottom: 10 }}>
              Baho: {grade}
            </div>
            <div style={{ color: "#e2e8f0", fontSize: 14 }}>{gm}</div>
          </Card>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginBottom: 12 }}>
            {[["✍️", answeredCount, "Javob"], ["✅", correctCount, "To'g'ri"], ["❌", answeredCount - correctCount, "Xato"], ["📊", Math.round(pct)+"%", "Foiz"]].map(([ic, vl, lb]) => (
              <Card key={lb} style={{ padding: "12px 6px", textAlign: "center" }}>
                <div style={{ fontSize: 18 }}>{ic}</div>
                <div style={{ color: "#fff", fontWeight: 800, fontSize: 18 }}>{vl}</div>
                <div style={{ color: "#718096", fontSize: 11 }}>{lb}</div>
              </Card>
            ))}
          </div>

          <Card style={{ padding: 20, marginBottom: 12 }}>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 14 }}>📊 Bo'limlar natijasi</div>
            {subjectStats.map(s => (
              <div key={s.key} style={{ marginBottom: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <span style={{ color: "#e2e8f0", fontSize: 13 }}>{s.emoji} {s.label}</span>
                  <span style={{ color: s.color, fontWeight: 700, fontSize: 13 }}>{s.correct}/{s.total} · {s.total > 0 ? Math.round(s.correct/s.total*100) : 0}%</span>
                </div>
                <div style={{ height: 7, background: "rgba(255,255,255,0.08)", borderRadius: 4, overflow: "hidden" }}>
                  <div style={{ height: "100%", background: s.color, width: `${s.total > 0 ? (s.correct/s.total*100) : 0}%`, borderRadius: 4, transition: "width 1s" }} />
                </div>
              </div>
            ))}
          </Card>

          <Card style={{ marginBottom: 12, overflow: "hidden" }}>
            <Btn onClick={() => setShowReview(p => !p)}
              style={{ width: "100%", background: "none", padding: "15px 20px", color: "#e2e8f0", fontSize: 15, textAlign: "left", display: "flex", justifyContent: "space-between" }}>
              <span>📖 Javoblarni Ko'rish va Tahlil</span><span>{showReview ? "▲" : "▼"}</span>
            </Btn>

            {showReview && (
              <div style={{ padding: "0 16px 16px" }}>
                <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" }}>
                  {[["all","Hammasi"], ["wrong","❌ Xatolar"], ["correct","✅ To'g'rilar"], ["unanswered","⬜ Javobsiz"]].map(([k,l]) => (
                    <Btn key={k} onClick={() => setReviewFilter(k)}
                      style={{ background: reviewFilter === k ? "#6c63ff" : "rgba(255,255,255,0.08)", borderRadius: 8, padding: "5px 11px", color: "#fff", fontSize: 12 }}>
                      {l}
                    </Btn>
                  ))}
                </div>
                <div style={{ maxHeight: 480, overflowY: "auto" }}>
                  {reviewedExam.map((q) => {
                    const a = answers[q.id];
                    const correct = a !== undefined && q.shuffledOptions[a]?.correct;
                    const correctIdx = q.shuffledOptions.findIndex(o => o.correct);
                    return (
                      <div key={q.id} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                        <div style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                          <span style={{ fontSize: 14 }}>{correct ? "✅" : a === undefined ? "⬜" : "❌"}</span>
                          <span style={{ color: "#e2e8f0", fontSize: 13, flex: 1, lineHeight: 1.5 }}>{q.text}</span>
                        </div>
                        {!correct && a !== undefined && (
                          <div style={{ color: "#fc8181", fontSize: 12, marginLeft: 22, marginBottom: 3 }}>
                            Sizning javobingiz: {["A","B","C","D"][a]}. {q.shuffledOptions[a]?.text}
                          </div>
                        )}
                        <div style={{ color: "#68d391", fontSize: 12, marginLeft: 22 }}>
                          ✓ To'g'ri javob: {["A","B","C","D"][correctIdx]}. {q.shuffledOptions[correctIdx]?.text}
                        </div>
                      </div>
                    );
                  })}
                  {reviewedExam.length === 0 && <div style={{ color: "#718096", textAlign: "center", padding: 20 }}>Bu toifada savol yo'q</div>}
                </div>
              </div>
            )}
          </Card>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <Btn onClick={() => setScreen("home")} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 14, padding: "13px", color: "#e2e8f0", fontSize: 14 }}>🏠 Bosh Sahifa</Btn>
            <Btn onClick={startExam} style={{ background: "linear-gradient(135deg,#6c63ff,#5a52d5)", borderRadius: 14, padding: "13px", color: "#fff", fontSize: 14, fontWeight: 700 }}>🔄 Qayta Urinish</Btn>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
