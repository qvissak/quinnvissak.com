export const colors = {
  white: '#d7e2dc'
}

export const email = 'quinn.vissak@uconn.edu'

export const apiUri = {
  recipes: {
    pathname: '/api/1.1/tables/recipes/rows'
  }
}

export const navigation = [
  {
    name: 'home',
    link: '/quinnvissak.com/',
    text: 'home'
  },
  {
    name: 'about',
    link: [
      {
        name: 'education',
        link: '/quinnvissak.com/education',
        text: 'education'
      },
      {
        name: 'experience',
        link: '/quinnvissak.com/experience',
        text: 'experience'
      },
      {
        name: 'projects',
        link: '/quinnvissak.com/projects',
        text: 'projects'
      }
    ],
    text: 'about'
  },
  {
    name: 'keywords',
    link: '/quinnvissak.com/keywords',
    text: 'keywords'
  },
  {
    name: 'food',
    link: '/quinnvissak.com/food',
    text: 'food'
  },
  {
    name: 'activities',
    link: '/quinnvissak.com/activities',
    text: 'activities'
  },
  {
    name: '',
    link: null,
    text: '|'
  },
  {
    name: 'login',
    // link: 'http://quinnvissak.test:8080/login',
    link: null,
    text: 'login'
  }
]

// 20180910075918
// http://quinnvissak.test:8080/api/1.1/tables/recipes/rows
export const recipes = {
  'meta': {
    'table': 'recipes',
    'type': 'collection',
    'total': 3,
    'total_entries': 3
  },
  'data': [
    {
      'id': 1,
      'name': 'Crepes',
      'description': "Cheap, easy, but most importantly, gourmet without the hassle. Wow your friends with this classic upscale pancake and make them think you're a chef. This recipes will serve as the base to any sweet breakfast or savory dinner.",
      'ingredients': '<p>Batter:</p>\n<ul>\n<li>1 cup all-purpose flour</li>\n<li>2 eggs</li>\n<li>1/2 cup of milk</li>\n<li>1/2 cup of water</li>\n<li>1/4 teaspoon of salt</li>\n<li>2 tablespoons melted butter</li>\n<li>2 tablespoons of sugar (optional)</li>\n</ul>\n<p>For breakfast crepes, fill with fresh fruit, chocolate chips, powdered sugar, brown sugar, whipped cream, nuetella, cream-cheese frosting, syrup, etc.</p>',
      'directions': '<p>Mix flour, salt and sugar in large bowl. Add eggs, milk, water, and melted butter, whisking thoroughly. Pour into a spray-greased pan on medium heat (5-6) using most of a 1/2 cup measuring instrument. Swirl around until a thin layer coats the pan. Allow cook for a couple minutes. Do NOT flip over. Fill with toppings and slowly roll. Plate with care!</p>',
      'image': {
        'meta': {
          'table': 'directus_files',
          'type': 'item'
        },
        'data': {
          'id': 5,
          'status': 1,
          'name': '00000000005.jpg',
          'title': 'photo 2018 06 18 00 04 55',
          'location': '',
          'caption': '',
          'type': 'image/jpeg',
          'charset': 'binary',
          'tags': '',
          'width': 930,
          'height': 759,
          'size': 95155,
          'embed_id': null,
          'user': 1,
          'date_uploaded': '2018-06-18T00:05:25-04:00',
          'storage_adapter': 'local',
          'url': '/storage/uploads/00000000005.jpg',
          'thumbnail_url': '/storage/uploads/thumbs/5.jpg',
          'old_thumbnail_url': '/storage/uploads/thumbs/00000000005-jpg-160-160-true.jpg',
          'html': null
        }
      }
    },
    {
      'id': 2,
      'name': 'Chicken Siciliano',
      'description': 'Flavor overload. A take on thick, chunky and spicy southern Italian marinara sauce. Amazing flavor that pairs well with chicken or calamari. A great way to flavor jar pasta sauce from the store without crushing tomatoes yourself for hours.',
      'ingredients': "<p>Sauce:</p>\n<ul>\n<li>1/2 green bell pepper, finely diced</li>\n<li>1 white onion, chopped</li>\n<li>4/5 jar hot cherry peppers</li>\n<li>1 can diced tomatoes with green chilis</li>\n<li>1 handful of yellow grape tomatoes, quartered</li>\n<li>1 tablespoon olive oil</li>\n<li>2 tablespoons butter</li>\n<li>1 tablespoon salt</li>\n<li>2 tablespoons red pepper flakes</li>\n<li>1 tablespoon Italian seasoning</li>\n<li>1 jar Trader Joe's plain marinara</li>\n</ul>\n<p>Chicken:</p>\n<ul>\n<li>3 chicken breasts</li>\n<li>2 eggs</li>\n<li>3 cups all-purpose flour</li>\n<li>4 cups breadcrumbs</li>\n<li>1 tablespoon parsley</li>\n<li>2 tablespoons salt</li>\n<li>1/2 cup vegetable oil</li>\n<li>2 tablespoons butter</li>\n<li>6 slices of mozzarella&nbsp;</li>\n</ul>",
      'directions': '<p>Sautee white onion and green bell pepper in oil and butter until pepper is soft. Add grape tomatoes, hot cherry peppers. Continue to sautee until vegetables congeal into sauce. Add to large pot, add marinara sauce, let simmer.</p>\n<p>Meanwhile, put flour, eggs, breadcrumbs in separate containers, season breadcrumbs with parsley. Halve chicken breasts. Dredge in flour, egg, and coat in breadcrumbs.</p>\n<p>Add vegetable oil to pan, allow time to heat. Fry chicken in pan, adding butter as desired. Move chicken to glass tray (oven-safe). Salt chicken immediately once out of oil. Preheat oven to 425 degrees about halfway through frying. Layer chicken in the tray, pour sauce over top and coat with mozzarella. Bake for 5-10 minutes.</p>',
      'image': {
        'meta': {
          'table': 'directus_files',
          'type': 'item'
        },
        'data': {
          'id': 6,
          'status': 1,
          'name': '00000000006.jpg',
          'title': 'photo 2018 06 18 01 26 45',
          'location': '',
          'caption': '',
          'type': 'image/jpeg',
          'charset': 'binary',
          'tags': '',
          'width': 1280,
          'height': 1023,
          'size': 234576,
          'embed_id': null,
          'user': 1,
          'date_uploaded': '2018-06-18T01:28:13-04:00',
          'storage_adapter': 'local',
          'url': '/storage/uploads/00000000006.jpg',
          'thumbnail_url': '/storage/uploads/thumbs/6.jpg',
          'old_thumbnail_url': '/storage/uploads/thumbs/00000000006-jpg-160-160-true.jpg',
          'html': null
        }
      }
    },
    {
      'id': 3,
      'name': 'Nutella Butter and Banana Cream Cheese Stuffed French Toast',
      'description': "Flavor overload. The creaminess of the banana cream cheese with the sweetness from the Nutella butter will render you in a food coma for the rest of the day. Don't consume if you want to be productive.",
      'ingredients': '<ul>\n<li>4 pieces of thickly sliced bread</li>\n<li>1 cup milk</li>\n<li>2 eggs</li>\n<li>1 tablespoon cinnamon</li>\n<li>2 teaspoons of vanilla extract</li>\n<li>1 cup Nutella</li>\n<li>8oz whipped cream cheese</li>\n<li>1 banana</li>\n<li>1 teapsoon confectioner sugar</li>\n<li>4 tablespoons butter</li>\n<li>Cooking spray</li>\n</ul>',
      'directions': '<p>Mash the banana and mix with the cream cheese and 1 teapsoon of vanilla extract thoroughly. Cut the pieces of bread open and stuff with the cream cheese mixture. Dip in mixture of egg, milk, vanilla extract and cinnamon. Fry and top with warm Nutella and butter mixture.</p>',
      'image': {
        'meta': {
          'table': 'directus_files',
          'type': 'item'
        },
        'data': {
          'id': 7,
          'status': 1,
          'name': '00000000007.jpg',
          'title': 'french toast',
          'location': '',
          'caption': '',
          'type': 'image/jpeg',
          'charset': 'binary',
          'tags': '',
          'width': 1280,
          'height': 1224,
          'size': 155313,
          'embed_id': null,
          'user': 1,
          'date_uploaded': '2018-06-23T16:16:43-04:00',
          'storage_adapter': 'local',
          'url': '/storage/uploads/00000000007.jpg',
          'thumbnail_url': '/storage/uploads/thumbs/7.jpg',
          'old_thumbnail_url': '/storage/uploads/thumbs/00000000007-jpg-160-160-true.jpg',
          'html': null
        }
      }
    }
  ]
}
