const Spring = {
    "spring_1": {
        name: "Peaceful Week",
        description: "Nothing of note happened this week.",
        tags: ["spring"],
    },
    "spring_2": {
        name: "Productive Week",
        description: "Everyone worked quite hard and got a lot done this week.",
        tags: ["spring"],
    },
    "spring_3": {
        name : "Stressful Week",
        description : "Everyone felt pressured and extremely busy this week.",
        tags: ["spring"],
    },
    "spring_4": {
        name : "Festival",
        description : "Time to celebrate Nature's rebirth!",
        tags: ["spring","celebration"],
    },
    "spring_5": {
        name : "Pleasant Week",
        description : "Everything just seemed to go very well this week.",
        tags: ["spring"],
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
    },
    "bandit_3": {
        name: "Bandit Raid",
        description: "Desparate Bandits arrive and take all of your food stores.",
        tags: ["bandits","raid","winter"],
    },
};


const Cards = {
    ...Spring,
    ...Summer,
    ...Fall,
    ...Winter,
    ...Special
}