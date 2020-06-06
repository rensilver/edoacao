import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('items').insert([
        { title: 'Alimentos', image: 'food-donation.svg' },
        { title: 'Animais', image: 'animal-charity.svg' },
        { title: 'Brinquedos', image: 'toys-donation.svg' },
        { title: 'Educação', image: 'charity-education.svg' },
        { title: 'Remédios', image: 'drugs-charity.svg' },
        { title: 'Roupas', image: 'clothes-donation.svg' },
    ]);
}