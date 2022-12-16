const productData = [
    {
        id: 1,
        title: '82% dark chocolate',
        description: '82% dark chocolate with natural cocoa, orange and almonds gluten-free tablet 200 g',
        price: 4, 
        discountPercentage: 10.58,
        rating: 3.89,
        stock: 27,
        brand: 'Valor', 
        category: 'sweets',
        thumbnail: 'valor-chocolate-orange-almond.jpg',
        images: [
         'valor-chocolate-orange-almond.jpg',
         'valor-chocolate-orange-almond-2.jpg',
        ]
    },

    {
        id: 2,
        title: '70% dark chocolate with almond',
        description: '70% dark chocolate with whole Mediterranean almonds gluten-free tablet 250 g',
        price: 3.99, 
        discountPercentage: 11.02,
        rating: 4.51,
        stock: 36,
        brand: 'Valor', 
        category: 'sweets',
        thumbnail: 'valor-chocolate.jpg',
        images: [
            'valor-chocolate-70.jpg',
            'valor-chocolate70-2.jpg',
        ]
    },

     {
        id: 3,
        title: '70% dark chocolate with almond',
        description: 'Pure chocolate with whole Mediterranean almonds gluten-free tablet 250 g',
        price: 3.39, 
        discountPercentage: 9.95,
        rating: 4.72,
        stock: 52,
        brand: 'Valor', 
        category: 'sweets',
        thumbnail: 'valor-pure.jpg',
        images: [
            'valor-pure.jpg',
            'valor-pure-2.jpg',
        ]
    },

    {
        id: 4,
        title: 'Soft almond nougat PGI Jijona',
        description: 'Supreme quality soft nougat PGI Jijona tablet 250 g, toasted almonds (70%)',
        price: 9.95, 
        discountPercentage: 12.17,
        rating: 4.9,
        stock: 15,
        brand: '1880', 
        category: 'sweets',
        thumbnail: 'turron1.jpg',
        images: [
            'turron1.jpg',
            'turron1-2.jpg',
        ]
    },

    {
        id: 5,
        title: 'Soft almond nougat',
        description: 'Supreme quality soft nougat tablet 250 g, toasted almonds (67%)',
        price: 5.78, 
        discountPercentage: 7.82,
        rating: 4.1,
        stock: 25,
        brand: 'Delaviuda', 
        category: 'sweets',
        thumbnail: 'turron2.jpg',
        images: [
            'turron2.jpg',
            'turron2-2.jpg',
        ]
    },

    {
        id: 6,
        title: 'Chocolate nougat with almonds',
        description: 'Supreme Quality chocolate and almond praline nougat tablet 250 g, almonds (30%)',
        price: 4.89, 
        discountPercentage: 5.86,
        rating: 5.0,
        stock: 22,
        brand: 'Delaviuda', 
        category: 'sweets',
        thumbnail: 'turron3.jpg',
        images: [
            'turron3.jpg',
            'turron3-2.jpg',
        ]
    },

    {
        id: 7,
        title: 'Supreme Quality assorted',
        description: 'Supreme Quality assorted mini hard, soft, toasted yolk and chocolate nougat case 380 g,',
        price: 11.25, 
        discountPercentage: 8.75,
        rating: 4.8,
        stock: 18,
        brand: 'Delaviuda', 
        category: 'sweets',
        thumbnail: 'turron4.jpg',
        images: [
            'turron4.jpg',
            'turron4-2.jpg',
        ]
    },

    {
        id: 8,
        title: 'Tasting selection of nougat',
        description: 'Tasting selection of soft, hard, egg yolk and chocolate nougat with almonds 4x75 g case 300 g',
        price: 8.95, 
        discountPercentage: 22.17,
        rating: 4.6,
        stock: 18,
        brand: '1880', 
        category: 'sweets',
        thumbnail: 'turron5.jpg',
        images: [
            'turron5.jpg',
            'turron5-2.jpg',
        ]
    },

     {
        id: 9,
        title: 'Virgin olive oil',
        description: 'Virgin olive oil bottle 1l',
        price: 8.25, 
        discountPercentage: 8.57,
        rating: 4.2,
        stock: 12,
        brand: 'Carbonell', 
        category: 'oils',
        thumbnail: 'oil1.jpg',
        images: [
            'oil1.jpg',
            'oil1-2.jpg',
        ]
    },

    {
        id: 10,
        title: 'Virgin olive oil',
        description: 'Virgin olive oil carafe 5l',
        price: 34.79, 
        discountPercentage: 3.67,
        rating: 4.5,
        stock: 10,
        brand: 'Carbonell', 
        category: 'oils',
        thumbnail: 'oil2.jpg',
        images: [
            'oil2.jpg',
            'oil2-2.jpg',
        ]
    },

    {
        id: 11,
        title: 'Virgin olive oil',
        description: 'Gold Series virgin olive oil bottle 1l',
        price: 7.95, 
        discountPercentage: 5.17,
        rating: 4.45,
        stock: 19,
        brand: 'Coosur', 
        category: 'oils',
        thumbnail: 'oil3.jpg',
        images: [
            'oil3.jpg',
            'oil3-2.jpg',
        ]
    },

    {
        id: 12,
        title: 'Virgin olive oil',
        description: 'Gold Series virgin olive oil carafe 3l',
        price: 23.85, 
        discountPercentage: 6.17,
        rating: 4.59,
        stock: 23,
        brand: 'Coosur', 
        category: 'oils',
        thumbnail: 'oil4.jpg',
        images: [
            'oil4.jpg',
            'oil4-2.jpg',
        ]
    },

    {
        id: 13,
        title: 'Virgin olive oil',
        description: 'Gold Series virgin olive oil tin 5l',
        price: 31.49, 
        discountPercentage: 3.37,
        rating: 4.8,
        stock: 15,
        brand: 'Coosur', 
        category: 'oils',
        thumbnail: 'oil5.jpg',
        images: [
            'oil5.jpg',
            'oil5-2.jpg',
        ]
    },

    {
        id: 14,
        title: 'Giant anchovy stuffed olives',
        description: 'Giant anchovy stuffed olives tin, drained weight 150g',
        price: 1.75, 
        discountPercentage: 30.5,
        rating: 4.8,
        stock: 35,
        brand: 'El Faro', 
        category: 'olives',
        thumbnail: 'olives1.jpg',
        images: [
            'olives1.jpg',
            'olives1-2.jpg',
        ]
    },

    {
        id: 15,
        title: 'Cantabrian anchovy stuffed olives',
        description: 'Cantabrian anchovy-stuffed manzanilla olives tin, drained weight 150g',
        price: 1.70, 
        discountPercentage: 11.5,
        rating: 4.5,
        stock: 28,
        brand: 'Artes del Jolca', 
        category: 'olives',
        thumbnail: 'olives2.jpg',
        images: [
            'olives2.jpg',
            'olives2-2.jpg',
        ]
    },

    {
        id: 16,
        title: 'Fine vermouth stuffed olives',
        description: 'Fine vermouth stuffed manzanilla olives tin, drained weight 150g',
        price: 1.80, 
        discountPercentage: 11.2,
        rating: 4.0,
        stock: 15,
        brand: 'Artes del Jolca', 
        category: 'olives',
        thumbnail: 'olives3.jpg',
        images: [
            'olives3.jpg',
            'olives3-2.jpg',
        ]
    },

    {
        id: 17,
        title: 'Olives stuffed with Piquillo pepper',
        description: 'Olives stuffed with Piquillo pepper tin, drained weight 150g',
        price: 1.90, 
        discountPercentage: 13.1,
        rating: 4.7,
        stock: 7,
        brand: 'Artes del Jolca', 
        category: 'olives',
        thumbnail: 'olives4.jpg',
        images: [
            'olives4.jpg',
            'olives4-2.jpg',
        ]
    },

    {
        id: 18,
        title: 'Tuna in olive oil',
        description: 'Tuna in olive oil 3-pack tin 52g',
        price: 3.69, 
        discountPercentage: 2.1,
        rating: 5.0,
        stock: 16,
        brand: 'Calvo', 
        category: 'tuna',
        thumbnail: 'tuna1.jpg',
        images: [
            'tuna1.jpg',
            'tuna1-2.jpg',
        ]
    },

    {
        id: 19,
        title: 'Tuna in olive oil low in salt',
        description: 'Yellowfin tuna in olive oil low in salt, easy to serve 3-pack tin 52g',
        price: 4.02, 
        discountPercentage: 2.0,
        rating: 4.8,
        stock: 8,
        brand: 'Calvo', 
        category: 'tuna',
        thumbnail: 'tuna2.jpg',
        images: [
            'tuna2.jpg',
            'tuna2-2.jpg',
        ]
    },

    {
        id: 20,
        title: 'Tuna in olive oil low in salt',
        description: 'Yellowfin tuna in olive oil fillets processed by hand flask, drained weight 117g',
        price: 6.25, 
        discountPercentage: 12.1,
        rating: 4.5,
        stock: 14,
        brand: 'Cuca', 
        category: 'tuna',
        thumbnail: 'tuna3.jpg',
        images: [
            'tuna3.jpg',
            'tuna3-2.jpg',
        ]
    },

     {
        id: 21,
        title: 'Acorn-fed 100% Iberian ham shoulder',
        description: 'Acorn-fed 100% Iberian ham shoulder piece 5kg',
        price: 185, 
        discountPercentage: 1.5,
        rating: 4.8,
        stock: 5,
        brand: 'Club del gourmet', 
        category: 'ham',
        thumbnail: 'ham1.jpg',
        images: [
            'ham1.jpg',
            'ham1-2.jpg',
        ]
    },

     {
        id: 22,
        title: '100% acorn-fed Iberian cured pork shoulder',
        description: '100% acorn-fed Iberian cured pork shoulder, cut by hand sachet 80g',
        price: 17.9, 
        discountPercentage: 2.7,
        rating: 5,
        stock: 23,
        brand: 'Cinco jotas', 
        category: 'ham',
        thumbnail: 'ham2.jpg',
        images: [
            'ham2.jpg',
            'ham2-2.jpg',
        ]
    },

     {
        id: 23,
        title: 'Mixed matured cheese',
        description: 'Mixed matured cheese with the mixture of three different milks: cow, sheep and goat. 10 months curing, 390g',
        price: 4.2, 
        discountPercentage: 4.8,
        rating: 5,
        stock: 14,
        brand: 'Entrepinares', 
        category: 'cheese',
        thumbnail: 'cheese1.jpg',
        images: [
            'cheese1.jpg',
            'cheese1-2.jpg',
        ]
    },

    {
        id: 24,
        title: 'Mixed matured cheese',
        description: 'Mixed matured cheese with the mixture of three different milks: cow, sheep and goat. 10 months curing, 390g',
        price: 4.2, 
        discountPercentage: 4.8,
        rating: 5,
        stock: 14,
        brand: 'Entrepinares', 
        category: 'cheese',
        thumbnail: 'cheese1.jpg',
        images: [
            'cheese1.jpg',
            'cheese1-2.jpg',
        ]
    },

    {
        id: 25,
        title: "Semi-mature goat's cheese",
        description: "Semi-mature goat's cheese PDO Queso Majorero coated with paprika from Fuerteventura piece 1 kg",
        price: 27.95, 
        discountPercentage: 15.2,
        rating: 5,
        stock: 17,
        brand: 'Maxorata', 
        category: 'cheese',
        thumbnail: 'cheese2.jpg',
        images: [
            'cheese2.jpg',
            'cheese2-2.jpg',
        ]
    },

    {
        id: 26,
        title: "Unpasteurised sheep's milk cheese",
        description: "Unpasteurised sheep's milk cheese piece 1 kg",
        price: 24.40, 
        discountPercentage: 15.2,
        rating: 4,
        stock: 8,
        brand: 'Hacienda Zorita', 
        category: 'cheese',
        thumbnail: 'cheese3.jpg',
        images: [
            'cheese3.jpg',
            'cheese3-2.jpg',
        ]
    },

    {
        id: 27,
        title: "Raw sheep's milk cheese",
        description: "Torta de Dehesa raw sheep's milk cheese piece 250 g",
        price: 11.95, 
        discountPercentage: 7.8,
        rating: 4.7,
        stock: 5,
        brand: 'Hacienda Zorita', 
        category: 'cheese',
        thumbnail: 'cheese4.jpg',
        images: [
            'cheese4.jpg',
            'cheese4-2.jpg',
        ]
    },

    {
        id: 28,
        title: 'Red wine DO Alicante',
        description: '100% monastrell red wine DO Alicante bottle 75 cl',
        price: 8.15, 
        discountPercentage: 5.4,
        rating: 4.8,
        stock: 24,
        brand: 'Tarima', 
        category: 'wine',
        thumbnail: 'wine1.jpg',
        images: [
            'wine1.jpg',
            'wine1-2.jpg',
        ]
    },

    {
        id: 29,
        title: 'Red wine DO La Mancha',
        description: 'Orígenes red wine DO La Mancha bottle 75 cl',
        price: 8.5, 
        discountPercentage: 3.5,
        rating: 4.8,
        stock: 27,
        brand: 'Dehesa de luna', 
        category: 'wine',
        thumbnail: 'wine2.jpg',
        images: [
            'wine2.jpg',
            'wine2-2.jpg',
        ]
    },

    {
        id: 30,
        title: 'Red wine DO Navarra',
        description: 'La Fuente cabernet sauvignon tempranillo crianza red wine DO Navarra bottle 75 cl',
        price: 9, 
        discountPercentage: 4.4,
        rating: 4.7,
        stock: 21,
        brand: 'Nekeas', 
        category: 'wine',
        thumbnail: 'wine3.jpg',
        images: [
            'wine3.jpg',
            'wine3-2.jpg',
        ]
    },

    {
        id: 31,
        title: 'Organic sauvignon white wine DO Rueda',
        description: 'Organic sauvignon white wine DO Rueda bottle 75 cl',
        price: 9.45, 
        discountPercentage: 14.0,
        rating: 4.75,
        stock: 25,
        brand: 'Marques de Riscal', 
        category: 'wine',
        thumbnail: 'wine4.jpg',
        images: [
            'wine4.jpg',
            'wine4-2.jpg',
        ]
    },

    {
        id: 32,
        title: 'Semi-sweet white wine DOCa Rioja',
        description: 'Semi-sweet white wine DOCa Rioja bottle 75 cl',
        price: 6.95, 
        discountPercentage: 5.4,
        rating: 4.5,
        stock: 18,
        brand: 'El marido de mi amiga', 
        category: 'wine',
        thumbnail: 'wine5.jpg',
        images: [
            'wine5.jpg',
            'wine5-2.jpg',
        ]
    },

]

export default productData;