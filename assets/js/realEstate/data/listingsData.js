var listingsData = [
  {
    address: '2034 Grand Ave',
    city: 'San Diego',
    state: 'CA',
    rooms: 3,
    price: 220000,
    floorSpace: 2000,
    extras: [
      'elevator',
      'gym'
    ],
    homeType: 'Apartment',
    image:
    'https://images.unsplash.com/photo-1527030280862-64139fba04ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=606&q=80'
  },
  {
    address: '1111 Rodeo Dr',
    city: 'Seattle',
    state: 'WA',
    rooms: 6,
    price: 500000,
    floorSpace: 2500,
    extras: [
      'gym',
      'pool'
    ],
    homeType: 'Home',
    image: 'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
  },
  {
    address: '1234 Branson Ave',
    city: 'Sacramento',
    state: 'CA',
    rooms: 4,
    price: 340000,
    floorSpace: 1600,
    extras: [
      'elevator',
      'gym'
    ],
    homeType: 'Condo',
    image: 'https://images.unsplash.com/photo-1539693010221-cd218dfe6565?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
  },
  {
    address: '5555 Pecan Dr',
    city: 'Portland',
    state: 'OR',
    rooms: 4,
    price: 600000,
    floorSpace: 2500,
    extras: [
      'pool'
    ],
    homeType: 'Duplex',
    image: 'https://images.unsplash.com/photo-1415226605610-f53c5c1ea8e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80'
  },
  {
    address: '6655 Boulevard St',
    city: 'Sacramento',
    state: 'CA',
    rooms: 3,
    price: 820000,
    floorSpace: 3600,
    extras: [
      'gym',
      'finished basement'
    ],
    homeType: 'Home',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
  },
  {
    address: '8899 Road St',
    city: 'San Diego',
    state: 'CA',
    rooms: 6,
    price: 820000,
    floorSpace: 5200,
    extras: [
      'finished basement',
      'swimming pool'
    ],
    homeType: 'Ranch',
    image: 'https://images.unsplash.com/photo-1471231681582-352356ab45a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=917&q=80'
  },
  {
    address: '2233 Asphalt Ave',
    city: 'Seattle',
    state: 'WA',
    rooms: 0,
    price: 380000,
    floorSpace: 2000,
    extras: [
      'elevator',
      'gym',
      'swimming pool'
    ],
    homeType: 'Apartment',
    image: 'https://images.unsplash.com/photo-1527030280862-64139fba04ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=606&q=80'
  },
  {
    address: '5869 Calle St',
    city: 'Portland',
    state: 'OR',
    rooms: 5,
    price: 750000,
    floorSpace: 2000,
    extras: [
      'gym'
    ],
    homeType: 'Home',
    image: 'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
  },
  {
    address: '1258 Dark Alley',
    city: 'San Diego',
    state: 'CA',
    rooms: 1,
    price: 110000,
    floorSpace: 2000,
    extras: [
      'elevator',
      'gym'
    ],
    homeType: 'Apartment',
    image: 'https://images.unsplash.com/photo-1527030280862-64139fba04ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=606&q=80'
  },
  {
    address: '7845 Easy St',
    city: 'Portland',
    state: 'OR',
    rooms: 0,
    price: 220000,
    floorSpace: 1200,
    extras: [
      'elevator',
      'finished basement',
      'swimming pool'
    ],
    homeType: 'Studio',
    image: 'https://images.unsplash.com/photo-1466098672325-c9ddda4b7975?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
  },
  {
    address: '6958 Brick Town Pl',
    city: 'Sacramento',
    state: 'CA',
    rooms: 1,
    price: 450000,
    floorSpace: 2000,
    extras: [
      'elevator',
      'gym'
    ],
    homeType: 'Apartment',
    image: 'https://images.unsplash.com/photo-1527030280862-64139fba04ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=606&q=80'
  },
  {
    address: '2587 Victor Blvd',
    city: 'Seattle',
    state: 'WA',
    rooms: 2,
    price: 275000,
    floorSpace: 2000,
    extras: [
      'elevator',
      'gym',
      'finished basement',
      'swimming pool'
    ],
    homeType: 'Duplex',
    image: 'https://images.unsplash.com/photo-1415226605610-f53c5c1ea8e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80'
  },
]

export default listingsData;
