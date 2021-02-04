const quotes = {
  ch: [
    {
      id: 1,
      text:
        '一個人的觀念可以影響很多的事情，所以佛法教我們要如理的思維，要懂得觀察緣起。',
      author: '寂靜禪林方丈',
      book: '開仁長老開示錄',
    },
    {
      id: 2,
      text:
        '不必把事情看得太絕對，有什麼因緣就做什麼事，做到哪裡，那裡就是圓滿。',
      author: '寂靜禪林方丈',
      book: '開仁長老開示錄',
    },
    {
      id: 3,
      text:
        '世間是相對的，若能心平靜氣的說明自己的立場與看法時，就不該用中傷別人、聽起來令人非常難受的語言來表達。',
      author: '寂靜禪林方丈',
      book: '開仁長老開示錄',
    },
    {
      id: 4,
      text:
        '學佛法不是紙上談兵，不是口舌之辯，不是生存工具，佛法是讓我們安頓身心。',
      author: '寂靜禪林方丈',
      book: '開仁長老開示錄',
    },
    {
      id: 5,
      text:
        '有意外（考驗），才能看清自心應對境界的堪忍力。一旦你的心接受了變化，你的整個身心自然能夠安頓下來。',
      author: '寂靜禪林方丈',
      book: '開仁長老開示錄',
    },
    {
      id: 6,
      text: '接受改變，其實就是無常無我的真實面貌。',
      author: '寂靜禪林方丈',
      book: '開仁長老開示錄',
    },
    {
      id: 7,
      text:
        '用善念祝福眾生遠離苦難，盡力化解人際之間的爭執與自私，讓人間早日恢復和平安寧！',
      author: '寂靜禪林方丈',
      book: '開仁長老開示錄',
    },
    {
      id: 8,
      text:
        '做一個智者，還是做一個愚癡的人，自己是可以選擇的。\n我們是不是平常很容易自尋煩惱，然後又把這些煩惱，遷移給身邊的人呢？',
      author: '寂靜禪林方丈',
      book: '開仁長老開示錄',
    },
    {
      id: 9,
      text:
        '學佛至今，自己是否還有解行不一的問題，如果有，試問自己有辦法改善嗎？',
      author: '寂靜禪林方丈',
      book: '開仁長老開示錄',
    },
    {
      id: 10,
      text:
        '省思佛法的特質，要自己去看到和體驗到，來確認自己所學的道理是沒有錯誤的。',
      author: '寂靜禪林方丈',
      book: '開仁長老開示錄',
    },
    {
      id: 11,
      text: '一旦有了欲貪，就很難見到五蘊的過患。',
      author: '寂靜禪林方丈',
      book: '開仁長老開示錄',
    },
    {
      id: 12,
      text: '祝願的品質與效果，端視本身所具備的淨戒與福業。',
      author: '寂靜禪林方丈',
      book: '開仁長老開示錄',
    },
    {
      id: 13,
      text:
        '諸法意先導，意主意造作。若以清淨意，或語或行業，是則樂隨彼，如影不離形。 (偈2)',
      author: '《南傳法句經》〈第一品：雙品〉',
      book: '了參法師譯',
    },
    {
      id: 14,
      text: '此心隨欲轉，輕躁難捉摸。善哉心調伏，心調得安樂。(偈35)',
      author: '《南傳法句經》〈第三品：心品〉',
      book: '了參法師譯',
    },
    {
      id: 15,
      text: '不觀他人過，不觀作不作，但觀自身行，作也與未作。(偈50)',
      author: '《南傳法句經》〈第四品：華品〉',
      book: '了參法師譯',
    },
    {
      id: 16,
      text: '不觀他人過，不觀作不作，但觀自身行，作也與未作。(偈50)',
      author: '《南傳法句經》〈第四品：華品〉',
      book: '了參法師譯',
    },
    {
      id: 17,
      text:
        '若見彼智者──\n能指示過失，並能譴責者，當與彼為友；\n猶如知識者，能指示寶藏。\n與彼智人友，定善而無惡。(偈76)',
      author: '《南傳法句經》〈第六品：智者品〉',
      book: '了參法師譯',
    },
    {
      id: 18,
      text: '一切惡莫作，一切善應行，自調淨其意，是則諸佛教。(偈183)',
      author: '《南傳法句經》〈第十四品：佛陀品〉',
      book: '了參法師譯',
    },
    {
      id: 19,
      text: '從喜愛生憂，從喜愛生怖；離喜愛無憂，何處有恐怖。(偈212)',
      author: '《南傳法句經》〈第十六品：喜愛品〉',
      book: '了參法師譯',
    },
    {
      id: 20,
      text: '若見他人過，心常易忿者，增長於煩惱；去斷惑遠矣。(偈253)',
      author: '《南傳法句經》〈第十八品：垢穢品〉',
      book: '了參法師譯',
    },
    {
      id: 21,
      text:
        '不以多言故，彼為持法者。彼雖聞少分，但由身見法 ，於法不放逸，是名持法者。(偈259)',
      author: '《南傳法句經》〈第十九品：法住品〉',
      book: '了參法師譯',
    },
    {
      id: 22,
      text: '應作而不作，不應作而作，傲慢放逸者，彼之漏增長。 (偈292)',
      author: '《南傳法句經》〈第廿一品：雜品〉',
      book: '了參法師譯',
    },
    {
      id: 23,
      text: '諸施法施勝；諸味法味勝；諸喜法喜勝；除愛勝諸苦。(偈354)',
      author: '《南傳法句經》〈第廿四品：愛欲品〉',
      book: '參法師譯',
    },
  ],
  en: [
    {
      id: 1,
      text:
        "A person's viewpoint can affect many things, hence Buddhism teaches us to think rationally and to observe dependent origination.",
      author: 'Thera Kair',
      book: 'The Abbot of Santavana Forest Hermitage',
    },
    {
      id: 2,
      text:
        "We don't have to take things too perfectly, just do the things according to the condition that we have. Successful arises when we act according to one's capability.",
      author: 'Thera Kair',
      book: 'The Abbot of Santavana Forest Hermitage',
    },
    {
      id: 3,
      text:
        'The world is relative. If we can explain our position and opinions calmly, we shouldn’t use harsh and uncomfortable words to express them.',
      author: 'Thera Kair',
      book: 'The Abbot of Santavana Forest Hermitage',
    },
    {
      id: 4,
      text:
        'Practicing the Dhamma is neither empty talk, nor absurd argument, it’s not a necessities for livelihood, but an essential that nourishing our mind and body.',
      author: 'Thera Kair',
      book: 'The Abbot of Santavana Forest Hermitage',
    },
    {
      id: 5,
      text:
        'Only when there is an ordeal can we see clearly our endurance in dealing with problems. Once the mind accepts the changes, our mind and body will settle down naturally.',
      author: 'Thera Kair',
      book: 'The Abbot of Santavana Forest Hermitage',
    },
    {
      id: 6,
      text:
        'Accepting changes is the authentic feature of impermanence and non-self.',
      author: 'Thera Kair',
      book: 'The Abbot of Santavana Forest Hermitage',
    },
    {
      id: 7,
      text:
        'Wishing all beings be free from suffering with kindness, try our best to resolve interpersonal disputes and selfishness, let the world soon be recover and be peace!',
      author: 'Thera Kair',
      book: 'The Abbot of Santavana Forest Hermitage',
    },
    {
      id: 9,
      text:
        'It is our own choice to become a wise or a fool. Are we usually bring trouble on oneself easily, and relocate those problems to people around us?',
      author: 'Thera Kair',
      book: 'The Abbot of Santavana Forest Hermitage',
    },

    {
      id: 10,
      text:
        'Reflect on the nature of Buddha-Dhamma, we have to see and to experience by oneself, to affirm that there is no mistake in what we have learned.',
      author: 'Thera Kair',
      book: 'The Abbot of Santavana Forest Hermitage',
    },
    {
      id: 11,
      text:
        'Once there have the craving, it becomes very difficult to see the faults and distress of five aggregates.',
      author: 'Thera Kair',
      book: 'The Abbot of Santavana Forest Hermitage',
    },
    {
      id: 12,
      text:
        'The quality and effect of blessings depend on our purity in the precepts and meritorious behavior.',
      author: 'Thera Kair',
      book: 'The Abbot of Santavana Forest Hermitage',
    },
    {
      id: 13,
      text:
        ' Mind precedes all mental states. \n Mind is their chief; they are all mind-wrought. \n If with an impure mind a person speaks or acts suffering follows him like the wheel that follows the foot of the ox.\n',
      author: 'Dhammapada Chapter 1 The Pairs DhP.002',
      book: '– Translated from the Pali by Acharya Buddharakkhita –',
    },

    {
      id: 14,
      text:
        'Wonderful, indeed, it is to subdue the mind, so difficult to subdue, ever swift, and seizing whatever it desires. A tamed mind brings happiness.',
      author: 'Dhammapada Chapter 3 The Mind Dhp.035',
      book: 'Translated from the Pali by Acharya Buddharakkhita',
    },
    {
      id: 15,
      text:
        " Let none find fault with others; let none see the omissions and commissions of others. But let one see one's own acts, done and undone. ",
      author: 'Dhammapada Chapter 4 Flowers Dhp.50',
      book: 'Translated from the Pali by Acharya Buddharakkhita',
    },
    {
      id: 16,
      text:
        ' To one ever eager to revere and serve the elders, these four blessing accrue: long life and beauty, happiness and power. ',
      author: 'Dhammapada Chapter 8 The Thousands Dhp.109',
      book: 'Translated from the Pali by Acharya Buddharakkhita',
    },
    {
      id: 17,
      text:
        ' Should one find a man who points out faults and who reproves, let him follow such a wise and sagacious person as one would a guide to hidden treasure. It is always better, and never worse, to cultivate such an association. ',
      author: 'Dhammapada Chapter 6 The Wise Dhp.076',
      book: 'Translated from the Pali by Acharya Buddharakkhita',
    },
    {
      id: 18,
      text:
        " To avoid all evil, to cultivate good, and to cleanse one's mind — this is the teaching of the Buddhas. ",
      author: 'Dhammapada Chapter 14 The Buddha Dhp.183',
      book: 'Translated from the Pali by Acharya Buddharakkhita',
    },
    {
      id: 19,
      text:
        'From endearment springs grief, from endearment springs fear. For one who is wholly free from endearment there is no grief, whence then fear?',
      author: 'Dhammapada Chapter 16 Affection Dhp.212',
      book: 'Translated from the Pali by Acharya Buddharakkhita',
    },
    {
      id: 20,
      text:
        " He who seeks another's faults, who is ever censorious — his cankers grow. He is far from destruction of the cankers.",
      author: 'Dhammapada Chapter 18 Impurity Dhp.253',

      book: 'Translated from the Pali by Acharya Buddharakkhita',
    },
    {
      id: 21,
      text:
        ' A man is not versed in Dhamma because he speaks much. He who, after hearing a little Dhamma, realizes its truth directly and is not heedless of it, is truly versed in the Dhamma. ',
      author: 'Dhammapada Chapter 19 The Just Dhp.259',
      book: 'Translated from the Pali by Acharya Buddharakkhita',
    },
    {
      id: 22,
      text:
        ' The cankers only increase for those who are arrogant and heedless, who leave undone what should be done and do what should not be done. ',
      author: 'Dhammapada Chapter 21 Miscellaneous Dhp.292',
      book: 'Translated from the Pali by Acharya Buddharakkhita',
    },
    {
      id: 23,
      text:
        ' The gift of Dhamma excels all gifts; the taste of the Dhamma excels all tastes; the delight in Dhamma excels all delights. The Craving-Freed vanquishes all suffering.',
      author: 'Dhammapada Chapter 24 Craving Dhp.354',

      book: 'Translated from the Pali by Acharya Buddharakkhita',
    },
  ],
}

export default quotes
