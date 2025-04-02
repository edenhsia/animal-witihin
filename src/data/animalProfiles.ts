import titImg from '@/assets/images/long-tailed-tit.png'
import wolfImg from '@/assets/images/arctic-gray-wolf.png'
import monkeyImg from '@/assets/images/owl-monkey.png'
import foxImg from '@/assets/images/fennec-fox.png'
import dolphinImg from '@/assets/images/bottlenose-dolphin.png'

export const animalProfiles = [
  {
    name: '長尾山雀',
    name_en: 'Long-tailed Tit',
    image: titImg,
    scores: {
      activity: 8,
      friendliness: 10,
      intelligence: 6,
      independence: 4,
      curiosity: 8,
    },
    personality:
      '你就像長尾山雀，熱情、好動又有點社交黏人！你喜歡與人一起行動，總能帶動氣氛，是團隊裡的小太陽 🌞。',
  },
  {
    name: '北極灰狼',
    name_en: 'Arctic Gray Wolf',
    image: wolfImg,
    scores: {
      activity: 6,
      friendliness: 5,
      intelligence: 7,
      independence: 10,
      curiosity: 5,
    },
    personality:
      '像北極灰狼的你擁有冷靜與獨立的個性。你追求自由、不喜歡被干涉，常在自己內心世界裡思考。行動低調，但總是精準。',
  },
  {
    name: '貓頭鷹猴',
    name_en: 'Owl Monkey',
    image: monkeyImg,
    scores: {
      activity: 4,
      friendliness: 4,
      intelligence: 10,
      independence: 9,
      curiosity: 6,
    },
    personality:
      '你就像貓頭鷹猴，擅長觀察，喜歡夜深人靜時一個人思考人生。你理性又敏銳，擁有極強的洞察力與求知欲，是安靜的智慧代表。',
  },
  {
    name: '大耳狐貍',
    name_en: 'Fennec Fox',
    image: foxImg,
    scores: {
      activity: 9,
      friendliness: 7,
      intelligence: 6,
      independence: 8,
      curiosity: 9,
    },
    personality:
      '活潑又機靈的你，就像大耳狐貍。擁有強烈的好奇心，總是對新事物充滿熱情。你喜歡自由探索，行動快速又反應靈敏。',
  },
  {
    name: '寬吻海豚',
    name_en: 'Bottlenose Dolphin',
    image: dolphinImg,
    scores: {
      activity: 9,
      friendliness: 10,
      intelligence: 9,
      independence: 5,
      curiosity: 10,
    },
    personality:
      '你是一隻寬吻海豚，親切、聰明、充滿愛心！擅長溝通、喜歡群體互動，是團隊的開心果也是解決問題的高手 🌊✨',
  },
]
