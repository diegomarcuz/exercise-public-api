const productFromApi = {
  id: '1234',
  status: 'active',
  sold_quantity: 0,
  domain_id: 'MLB-cars',
  permalink:
    'https://www.mercadolivre.com.br/brinquedo-torre-de-carro-2-anos-menino-menina-tooky-toy/p/1234',
  name: 'Brinquedo Torre De Carro',
  family_name: 'Brinquedo Torre De Carro',
  type: 'catalog_product',
  buy_box_winner: null,
  buy_box_winner_price_range: null,
  pickers: null,
  pictures: [
    {
      id: '1234',
      url: 'https://http2.mlstatic.com/D_NQ_NP_1234-F.jpg',
      suggested_for_picker: null,
      max_width: 969,
      max_height: 993,
      source_metadata: null,
    },
  ],
  description_pictures: [],
  main_features: [],
  disclaimers: [],
  attributes: [
    {
      id: 'MANUFACTURER',
      name: 'Fabricante',
      value_id: '1234',
      value_name: 'China',
      values: [
        {
          id: '1234',
          name: 'China',
        },
      ],
    },
    {
      id: 'MIN_RECOMMENDED_AGE',
      name: 'Idade mínima recomendada',
      value_id: '1234',
      value_name: '2 anos',
      values: [
        {
          id: '1234',
          name: '2 anos',
        },
      ],
    },
  ],
  short_description: {
    type: 'plaintext',
    content:
      'Brinquedo Torre De Carro 2 Anos Menino Menina Tooky Toy\n\nPista com 4 carrinhos que saltam pela rampa com cores vibrantes.',
  },
  parent_id: null,
  children_ids: [],
  settings: {
    listing_strategy: 'catalog_required',
    has_rich_description: false,
    with_enhanced_pictures: false,
    exclusive: false,
  },
  quality_type: 'COMPLETE',
  authority_types: ['COMMUNITY'],
  date_created: '2024-01-12T04:09:24Z',
};

const productCamelCase = {
  id: '1234',
  status: 'active',
  soldQuantity: 0,
  domainId: 'MLB-cars',
  permalink:
    'https://www.mercadolivre.com.br/brinquedo-torre-de-carro-2-anos-menino-menina-tooky-toy/p/1234',
  name: 'Brinquedo Torre De Carro',
  familyName: 'Brinquedo Torre De Carro',
  type: 'catalog_product',
  buyBoxWinner: null,
  buyBoxWinnerPriceRange: null,
  pickers: null,
  pictures: [
    {
      id: '1234',
      url: 'https://http2.mlstatic.com/D_NQ_NP_1234-F.jpg',
      suggestedForPicker: null,
      maxWidth: 969,
      maxHeight: 993,
      sourceMetadata: null,
    },
  ],
  descriptionPictures: [],
  mainFeatures: [],
  disclaimers: [],
  attributes: [
    {
      id: 'MANUFACTURER',
      name: 'Fabricante',
      valueId: '1234',
      valueName: 'China',
      values: [
        {
          id: '1234',
          name: 'China',
        },
      ],
    },
    {
      id: 'MIN_RECOMMENDED_AGE',
      name: 'Idade mínima recomendada',
      valueId: '1234',
      valueName: '2 anos',
      values: [
        {
          id: '1234',
          name: '2 anos',
        },
      ],
    },
  ],
  shortDescription: {
    type: 'plaintext',
    content:
      'Brinquedo Torre De Carro 2 Anos Menino Menina Tooky Toy\n\nPista com 4 carrinhos que saltam pela rampa com cores vibrantes.',
  },
  parentId: null,
  childrenIds: [],
  settings: {
    listingStrategy: 'catalog_required',
    hasRichDescription: false,
    withEnhancedPictures: false,
    exclusive: false,
  },
  qualityType: 'COMPLETE',
  authorityTypes: ['COMMUNITY'],
  dateCreated: '2024-01-12T04:09:24Z',
};

export { productFromApi, productCamelCase };
