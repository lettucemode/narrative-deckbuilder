const Spring = {
    "spring_1": {
        name: "Peaceful Week",
        description: "Nothing of note happened this week.",
        tags: ["spring"],
        effects: [
            (state, deck) => { state.update("peace",1);}
        ],
    },
    "spring_2": {
        name: "Productive Week",
        description: "Everyone worked quite hard and got a lot done this week.",
        tags: ["spring"],
        effects: [
            (state, deck) => { state.update("productive",1);}
        ],
    },
    "spring_3": {
        name : "Stressful Week",
        description : "Everyone felt pressured and extremely busy this week.",
        tags: ["spring"],
        effects: [
            (state, deck) => { state.update("stress",1);}
        ],
    },
    "spring_4": {
        name : "Festival",
        description : "Time to celebrate Nature's rebirth!",
        tags: ["spring","celebration"],
        effects: [
            (state, deck) => { state.update("festival",1);}
        ],
    },
    "spring_5": {
        name : "Pleasant Week",
        description : "Everything just seemed to go very well this week.",
        tags: ["spring"],
        effects: [
            (state, deck) => { state.update("pleasant",1);}
        ],
    },
};

const Summer = {};
const Fall = {};
const Winter = {};
const Special = {
    "bandit_1": {
        name: "Bandit Scouts",
        description: "Bandits pass through and notice your crop. They warn you they will return and expect tribute in the Fall.",
        tags: ["bandits","spring","summer"],
    },
    "bandit_2": {
        name: "Bandit Raid",
        description: "Bandits arrive and take a large portion of your current crop.",
        tags: ["bandits","raid","spring","summer","fall"],
        active: false,
    },
    "bandit_3": {
        name: "Bandit Raid",
        description: "Desparate Bandits arrive and take all of your food stores.",
        tags: ["bandits","raid","winter"],
        active: false,
    },
    "surprise_1": {
        name: "Surprise",
    },
};


const Cards = {
    ...Spring,
    ...Summer,
    ...Fall,
    ...Winter,
    ...Special
}