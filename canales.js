const canalesNoRepeat = [
    'MVS TV (Dish)',//50_1  100_1   500_1   500_2
    'Universal TV',//50_1   100_3   250_1
    'Sony Channel',//50_1   100_3   250_1
    'USA',//50_1    100_3   250_1
    'Lifetime',//50_1   100_3   250_1
    'E! Entertainment TV',//50_1    100_3   250_1
    'Comedy Central',//50_1 50_2    50_3    100_1   100_2   100_3   250_1   250_2   250_3
    'MTV',//50_1 50_2    50_3    100_1   100_2   100_3   250_1   250_2   250_3
    'EXA TV',//50_1 50_2    50_3    100_1   100_2   100_3   250_1   250_2   250_3   500_1   500_2
    'MTV Hits Latin America',//50_1 50_2    50_3    100_1   100_2   100_3   250_1   250_2   250_3
    'Teen nick',//50_1 50_2    50_3    100_1   100_2   100_3   250_1   250_2   250_3
    'Nick Jr.',//50_1 50_2    50_3    100_1   100_2   100_3   250_1   250_2   250_3
    'History',//50_1    100_3   250_1
    'Claro Sports',//50_1 50_2    50_3    100_1   100_2   100_3   250_1   250_2   250_3 500_1
    'Studio Universal',//50_1
    'Paramount Network',//50_1
    'Azteca 7 HD',//50_1
    'Multimedios',//50_1
    'A Más',//50_1
    'Corazón',//50_1
    'Clic',//50_1
    'Azteca Internacional',//50_1
    'Cinema',//50_1
    'ADN 40',//50_1
    'Azteca Uno HD',//50_1
    'Azteca Deportes',//50_1
    'Cindie Lite',//50_1
    'Trace Urban',//50_1
    'Trace Latina',//50_1
    'Vive Kanal D Drama',//50_1
    'Daystar',//50_1
    'Canela Cinema',//50_1
    'Canela Clásicos',//50_1
    'Canela Deportes',//50_1
    'Canela Narco-Drama',//50_1
    'Canela TV',//50_1
    'AMC',//50_2    100_1   100_2   100_3   250_1   250_2   250_3
    'El Gourmet',//50_2    100_1   100_2   100_3   250_1   250_2   250_3
    'Mas Chic',//50_2    100_1   100_2   100_3   250_1   250_2   250_3
    'Europa Europa',//50_2    100_1   100_2   100_3   250_1   250_2   250_3
    'MTV00S',//50_2 50_3    100_2   250_1   250_2   250_3
    'Film & Arts',//50_2    100_1   100_2   100_3   250_1   250_2   250_3
    'Claro Cinema HD',//50_2    50_3    100_2   100_3   250_1   250_2   250_3
    'Pasiones',//50_2    50_3    100_2   100_3   250_1   250_2   250_3
    'Caliente TV',//50_2    50_3    100_2   100_3   250_1   250_2   250_3   500_1   500_2
    'Milenio HD',//50_3 100_1    100_2   100_3   250_1   250_2   250_3   500_1   500_2
    'Teleformula',//50_3    250_1   500_1   500_2
    'AYM Sports',//50_3    250_1   500_1   500_2
    'EWTN',//50_3    250_1   500_1   500_2
    'Novelisima',//50_3    250_1
    'FashionBox',//50_3    250_1
    'Latin Angels',//50_3    250_1
    'Fastnfunbox HD',
    'FightBox HD',
    'CNNI Latin America',
    'BBC World News (Latin America) HD',
    'Canal 24H',
    'Star Channel',
    'FX',//100_1    250_1
    'Arirang TV',//100_1    250_1   500_1   500_2
    'Disney Channel',//100_1    250_1
    'Disney Junior',//100_1    250_1
    'Baby Tv',//100_1   250_1
    'National Geographic',//100_1   250_1
    'ESPN',//100_1  250_1
    'ESPN2',
    'ESPN3',
    'ESPN4',
    'Cinecanal',
    'La Mejor TV',
    'Nueve TV',
    'Warner Channel',//100_2    250_1
    'Space',//100_2 250_1
    'TNT Series',//100_2    250_1
    'Discovery Home & Health',//100_2    250_1
    'Discovery Travel & Living',//100_2    250_1
    'Investigation Discovery - ID',//100_2    250_1
    'TNT Novelas',//100_2   250_1
    'Cartoon Network HD',//100_2    250_1
    'Discovery Channel',//100_2     250_1
    'Animal Planet',//100_2     250_1
    'Discovery Turbo',//100_2     250_1
    'CNN en Español',
    'TNT',
    'Cinemax',
    'Telemundo',
    'Dreamworks',
    'AXN',//100_3
    'A&E',//100_3
    'History 2',
    '¡HOLA! TV',//250_1
    'Antena 3 Internacional',//250_1
    'Baby1',//250_1
    'Classic Arts Showcase',//250_1
    'Mariavision',//250_1   500_1   500_2
    'María Visión Italia',//250_1   500_1   500_2
    'Jesus Christ Network',//250_1   500_1   500_2
    'France 24',
    'France 24 Español SD',
    'France 24 English',
    'MC',
    'Multipremier',
    'Cine Latino HD',
    'Show Business TV HD',//250_1
    'TV5 Monde HD',//250_1
    'Caracol Internacional HD',//250_1
    'Fix&Foxi HD',//250_1
    'World of Business Ideas',//250_1
    'Curiosity Stream',//250_1
    'FUEL TV',//250_1
    'Video Rola',
    'DayStar ',
    'Romance Channel',
    'Imagen TV',
    'EXA FM',
    'MVS FM',
    'TV Cuatro',
    'Canal 10',
    'TV mas',
    'Canal 16.1',
    'Morelos TV',
    'Va +',
    'Tele 10',
    'Canal 4.1',
    'Canal 8',
    'Enlace',
    'Canal 12.1 Colima',
    'Canal del Congreso',
    'CGTN',
    'Excelsior TV',
    'Justicia TV',
    'Mexiquense TV',
    'ESNE TV',
    'TV Unam',
    'Aprende TV'
]
