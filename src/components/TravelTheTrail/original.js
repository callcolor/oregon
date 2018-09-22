const data = {
  top10: [
    {
      name: 'Bert is Evil',
      points: 9001,
      rating: 'Trail guide',
    },{
      name: 'Hackerman',
      points: 1701,
      rating: 'Greenhorn',
    },{
      name: 'Mr. T',
      points: 4001,
      rating: 'Adventurer',
    },
  ]
};

export { data };

export default {
  'main': {
    component: 'Menu',
    header: 'The Oregon Trail',
    prompt: 'You may:',
    background: '/assets/oregon/menu_bg.png',
    options: [
      {
        label: 'Travel the trail',
        target: 'difficulty',
      },
      {
        label: 'Learn about the trail',
        target: 'learn',
      },
      {
        label: 'See the Oregon Top Ten',
        target: 'top10'
      }
    ],
    instruction: 'What is your choice?',
  },
  'top10': {
    component: 'Table',
    header: 'The Oregon Top Ten',
    rows: 'top10',
    columns: ['name', 'points', 'rating'],
    sort: 'points',
    limit: 10,
    target: 'main',
  },
  'learn': {
    component: 'Menu',
    header: 'The Oregon Trail',
    background: '/assets/oregon/menu_bg.png',
    options: 'Try taking a journey by covered wagon across 2000 miles of plains, rivers, and mountains.  Try!  On the plains, will you slosh your oxen through mud and water-filled ruts or will you plod through dust six inches deep?',
    target: 'main',
  },
  'difficulty': {
    component: 'Menu',
    prompt: 'Many kinds of people made the trip to Oregon.',
    background: '/assets/oregon/menu_bg_no_header.png',
    options: [
      {
        label: 'Be a banker from Boston',
        save: {
          character: 'banker',
          money: 1600,
        },
        target: 'nameParty',
      },
      {
        label: 'Be a carpenter from Ohio',
        save: {
          character: 'carpenter',
          money: 800,
        },
        target: 'nameParty',
      },
      {
        label: 'Be a farmer from Illinois',
        save: {
          character: 'farmer',
          money: 400,
        },
        target: 'nameParty',
      },
      {
        label: 'Find out the differences between these choices',
        target: 'difficultyHelp',
      }
    ]
  },
  'difficultyHelp': {
    component: 'Menu',
    background: '/assets/oregon/menu_bg_no_header.png',
    options: `Traveling to Oregon isn't easy!  But if you're a banker, you'll have more money for supplies and services than a carpenter or a farmer.  However, the harder you have to try, the more points you deserve!  Therefore, the farmer earns the greatest number of points and the banker earns the least.`,
    target: 'difficulty',
  },
  'nameParty': {
    component: 'Form',
    background: '/assets/oregon/party_bg.png',
    prompt: 'What are the first names of the members in your party?',
    target: 'departureMonth',
    controls: [
      {
        type: 'text',
        name: 'name',
        value: '',
      },
      {
        type: 'text',
        name: 'party1',
        value: '',
      },
      {
        type: 'text',
        name: 'party2',
        value: '',
      },
      {
        type: 'text',
        name: 'party3',
        value: '',
      },
      {
        type: 'text',
        name: 'party4',
        value: '',
      },
    ]
  },
  'departureMonth': {
    component: 'Menu',
    prompt: 'It is 1948.  Your jumping off place for Oregon is Independence, Missouri.  You must decide which month to leave Independence.',
    background: '/assets/oregon/menu_bg_no_header.png',
    options: [
      {
        label: 'March',
        save: {
          day: 1,
          month: 3,
          year: 1948,
        },
        target: 'independence',
      },
      {
        label: 'April',
        save: {
          day: 1,
          month: 4,
          year: 1948,
        },
        target: 'independence',
      },
      {
        label: 'May',
        save: {
          day: 1,
          month: 5,
          year: 1948,
        },
        target: 'independence',
      },
      {
        label: 'June',
        save: {
          day: 1,
          month: 6,
          year: 1948,
        },
        target: 'independence',
      },
      {
        label: 'July',
        save: {
          day: 1,
          month: 7,
          year: 1948,
        },
        target: 'independence',
      },
      {
        label: 'Ask for advice',
        save: {
          day: 1,
          month: 3,
          year: 1948,
        },
        target: 'whenToLeave',
      },
    ]
  },
  'whenToLeave': {
    component: 'Menu',
    options: `You attend a public meeting held for "folks with the California - Oregon fever."  You're told: If you leave too early, there won't be any grass for your oxen to eat.  If you leave too late, you may not get to Oregon before winter comes.  If you leave at just the right time, there will be green grass and the weather will still be cool.`,
    background: '/assets/oregon/menu_bg_no_header.png',
    target: 'departureMonth',
  },
  'independence': {
    component: 'Menu',
    modal: (data) => (`Before leaving Independence, you should buy equipment and supplies.  You have $${data.money}.00 in cash, but you don't have to spend it all now.  You can get whatever you need at Matt's General Store.`),
    background: '/assets/oregon/independence_bg.png',
    target: 'matt'
  },
  'matt': {
    component: 'Menu',
    background: '/assets/oregon/matt_bg.png',
  }
}
