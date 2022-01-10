// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from './hero'
import { TransformerHero } from './transformer'

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
    {
        id: 1,
        name: 'Hulk',
        photo: 'smaaash.jpg',
        sex: 'male',
        age: 35,
        health: 15000
    },
    {
        id: 2,
        name: 'Iron Man',
        sex: 'male',
        age: 33,
        health: 6500
    },
    {
        id: 3,
        name: 'Thor',
        photo: 'thunder.jpg',
        sex: 'male',
        age: 34,
        health: 14000
    }
]

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
    {
        id: 1,
        name: 'Optimus Prime',
        wings: 0,
        wheels: 12,
        clan: 'Autobots'
    },
    {
        id: 2,
        name: 'Bumblebee',
        photo: 'bumblebee_fight2.jpg',
        wings: 2,
        wheels: 4,
        clan: 'Autobots'
    },
    {
        id: 3,
        name: 'Megatron',
        wings: 2,
        wheels: 8,
        clan: 'Decepticons'
    },
];
