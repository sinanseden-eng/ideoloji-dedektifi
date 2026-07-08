export const ideologies = [
  {
    id: 'liberal', name: 'Liberal',
    description: "Bireyin özgürlüğüne tapar, devletin müdahalesine alerjisi vardır. Piyasa, tanrının yeryüzündeki görünmez elidir.",
    economy: "Devletin elini cebimizden çekmesi yeterli, gerisini piyasa çözer. Rekabet kutsaldır.",
    state: "Devlet, gece bekçisidir ve mesaiyi çok sever. Onun dışında kimse kimseye karışmamalıdır.",
    quote: "Özgürlük herkesin hakkıdır, yeter ki ödeyebilsin.",
    scores: { nationalism: 30, economy: 90, freedom: 85, state: 20, religion: 40, decentralization: 70 }
  },
  {
    id: 'socialist', name: 'Sosyalist',
    description: "Sınıfsız bir toplum hayal eder, ama arada bir venezuela kahvesi içmeyi de ihmal etmez.",
    economy: "Karbonatın bile devletleştirilmesi gerektiğine inanır. Özel mülk sözcüğü damarlarına dokunur.",
    state: "Devlet halkın dostudur, ta ki halk devletin dediğini yapana kadar.",
    quote: "Herkes kabiliyetine göre çalışmalı, ihtiyacına göre almalı; ama devlet herkesin ihtiyacına karar vermeli.",
    scores: { nationalism: 40, economy: 10, freedom: 60, state: 80, religion: 20, decentralization: 50 }
  },
  {
    id: 'kemalist', name: 'Kemalist',
    description: "Modernleşmenin zoraki yollarını benimser. Köylü ayaklanmalarını modern rüzgarlarla savuşturur.",
    economy: "Devlet kapitalizminin zarif versiyonu. Özel sektör serbest, ama devlet lokomotiftir.",
    state: "Devlet her şeydir, millet devleti korumak için var olmalıdır. Laiklik kalkan, devletçilik kılıçtır.",
    quote: "Bilim, kendi gerçeğini kendi yazar; biz sadece imzasını atarız.",
    scores: { nationalism: 85, economy: 40, freedom: 50, state: 90, religion: 10, decentralization: 20 }
  },
  {
    id: 'muhafazakar', name: 'Muhafazakar',
    description: "Geçmişe özlem duyar, ama smartphonesu elinden bırakmaz.",
    economy: "Serbest piyasa güzeldir, yeter ki zenginalahın lütfu olsun.",
    state: "Devlet dinin bekçisi değil, ama ahlakın bekçisi olmalıdır. Mahremiyet kutsaldır, sizin mahremiyetiniz de.",
    quote: "Eskiler eskiden de bilirdi, şimdikiler ise eskiyi bilmez.",
    scores: { nationalism: 70, economy: 60, freedom: 30, state: 60, religion: 95, decentralization: 40 }
  },
  {
    id: 'ulusalcı', name: 'Ulusalcı',
    description: "Vatanı her şeyden above tutar. Kahvaltıda bayrak içer.",
    economy: "Yerli ve milli olan her şey iyidir. Yabancı sermaye, modern bir haçlı seferidir.",
    state: "Devlet demir yumruktur. İçeride ve dışarıdaki düşmanlar için ayrım yapmaz.",
    quote: "Vatan sağolsun, gerisi (ve gerici) teferruat.",
    scores: { nationalism: 95, economy: 20, freedom: 20, state: 95, religion: 30, decentralization: 10 }
  },
  {
    id: 'etnik', name: 'Etnik',
    description: "Kendi kültürünün, kendi coğrafyasında özgürce yaşamasını ister.",
    economy: "Merkezi sisteme karşıdır. Kaynakların yerelde kullanılması gerektiğini savunur.",
    state: "Devletin kültürel olarak nötr olması gerektiğine inanır. Ademi merkeziyetçilik temel motto.",
    quote: "Dağ Türkleri yoktur, dağların kendisi Türk değildir.",
    scores: { nationalism: 20, economy: 50, freedom: 70, state: 30, religion: 50, decentralization: 95 }
  }
];
