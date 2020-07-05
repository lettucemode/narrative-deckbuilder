const Normal = {};

const Spring = {
    'spring_1': {
        name: 'Peaceful Week',
        description: 'Nothing of note happened this week.',
        tags: ['spring'],
        effects: [{
            f: (state, deck) => { state.updateValue('peace',1); },
            t: 1
        }],
    },
    'spring_2': {
        name: 'Productive Week',
        description: 'Everyone worked quite hard and got a lot done this week.',
        tags: ['spring'],
        effects: [{
            f: (state, deck) => { state.updateValue('productive',1); },
            t: 1
        }],
    },
    'spring_3': {
        name : 'Stressful Week',
        description : 'Everyone felt pressured and extremely busy this week.',
        tags: ['spring'],
        effects: [{
            f: (state, deck) => { state.updateValue('stress',1); },
            t: 1
        }],
    },
    'spring_4': {
        name : 'Festival',
        description : "Time to celebrate Nature's rebirth!",
        tags: ['spring','celebration'],
        effects: [{
            f: (state, deck) => { state.updateValue('festival',1); },
            t: 1
        }],
    },
    'spring_5': {
        name : 'Pleasant Week',
        description : 'Everything just seemed to go very well this week.',
        tags: ['spring'],
        effects: [{
            f: (state, deck) => { state.updateValue('pleasant',1); },
            t: 1
        }],
    },
};

const Summer = {
    'summer_1': {
        name: 'Lazy Week',
        description: 'Too warm to do much of anything this week.',
        tags: ['summer'],
        effects: [{
            f: (state, deck) => { state.updateValue('peace',1); },
            t: 1
        }],
    },
    'summer_2': {
        name: 'Efficient Week',
        description: 'Everyone worked smarter not harder and got a lot done this week.',
        tags: ['summer'],
        effects: [{
            f: (state, deck) => { state.updateValue('productive',1); },
            t: 1
        }],
    },
    'summer_3': {
        name : 'Heat Wave',
        description : 'The weather is brutal this week.',
        tags: ['summer'],
        effects: [{
            f: (state, deck) => { state.updateValue('stress',1); },
            t: 1
        }],
    },
    'summer_4': {
        name : 'Summer Solstice',
        description : "Time to celebrate the longest day of the year!",
        tags: ['summer','celebration'],
        effects: [{
            f: (state, deck) => { state.updateValue('festival',1); },
            t: 1
        }],
    },
    'summer_5': {
        name : 'Refreshing Week',
        description : 'The heat broke enough to enjoy this week.',
        tags: ['summer'],
        effects: [{
            f: (state, deck) => { state.updateValue('pleasant',1); },
            t: 1
        }],
    },
};

const Fall = {
    'fall_1': {
        name: 'Cozy Week',
        description: 'Lots of time to swatch the leaves change colors this week.',
        tags: ['fall'],
        effects: [{
            f: (state, deck) => { state.updateValue('peace',1); },
            t: 1
        }],
    },
    'fall_2': {
        name: 'Plentiful Week',
        description: 'Bumper crops kept everybody busy this week.',
        tags: ['fall'],
        effects: [{
            f: (state, deck) => { state.updateValue('productive',1); },
            t: 1
        }],
    },
    'fall_3': {
        name : 'Winter is coming...',
        description : 'Everyone was really worried about the future this week.',
        tags: ['fall'],
        effects: [{
            f: (state, deck) => { state.updateValue('stress',1); },
            t: 1
        }],
    },
    'fall_4': {
        name : 'Harvest Festival',
        description : "Time to celebrate nature's bounty!",
        tags: ['fall','celebration'],
        effects: [{
            f: (state, deck) => { state.updateValue('festival',1); },
            t: 1
        }],
    },
    'fall_5': {
        name : 'Refreshing Week',
        description : 'The heat broke enough to enjoy this week.',
        tags: ['fall'],
        effects: [{
            f: (state, deck) => { state.updateValue('pleasant',1); },
            t: 1
        }],
    },
};

const Winter = {
    'winter_1': {
        name: 'Cozy Week',
        description: 'Everyone huddled inside with a warm fire this week.',
        tags: ['winter'],
        effects: [{
            f: (state, deck) => { state.updateValue('peace',1); },
            t: 1
        }],
    },
    'winter_2': {
        name: 'Motivated Week',
        description: 'Everyone came together to make good use of this week.',
        tags: ['winter'],
        effects: [{
            f: (state, deck) => { state.updateValue('productive',1); },
            t: 1
        }],
    },
    'winter_3': {
        name : 'Blizzard',
        description : 'It never stopped snowing this week.',
        tags: ['winter'],
        effects: [{
            f: (state, deck) => { state.updateValue('stress',1); },
            t: 1
        }],
    },
    'winter_4': {
        name : 'Yuletide',
        description : "Give each other gifts to ring in the coming year",
        tags: ['winter','celebration'],
        effects: [{
            f: (state, deck) => { state.updateValue('festival',1); },
            t: 1
        }],
    },
    'winter_5': {
        name : 'Crisp Week',
        description : 'Clear skies and hardly any wind this week.',
        tags: ['winter'],
        effects: [{
            f: (state, deck) => { state.updateValue('pleasant',1); },
            t: 1
        }],
    },
};

const Special = {
    'bandit_1': {
        name: 'Bandit Scouts',
        description: 'Bandits pass through and notice your crop. They warn you they will return and expect tribute in the Fall.',
        tags: ['bandits','spring','summer'],
        effects: [{
            f: (state, deck) => { state.updateValue('bandits',1); },
            t: 1
        }],
    },
    'bandit_2': {
        name: 'Bandit Raid',
        description: 'Bandits arrive and take a large portion of your current crop.',
        tags: ['bandits','raid','spring','summer','fall'],
        active: false,
        effects: [{
            f: (state, deck) => { state.updateValue('bandits',1); },
            t: 1
        }],
    },
    'bandit_3': {
        name: 'Bandit Raid',
        description: 'Desparate Bandits arrive and take all of your food stores.',
        tags: ['bandits','raid','winter'],
        active: false,
        effects: [{
            f: (state, deck) => { state.updateValue('bandits',1); },
            t: 1
        }],
    },
    'surprise_1': {
        name: 'Surprise',
    },
};


const Cards = {
    ...Spring,
    ...Summer,
    ...Fall,
    ...Winter,
    ...Special
}