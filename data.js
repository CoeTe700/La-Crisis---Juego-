// data.js — Peña La Crisis (Mayor/Menor)
// Banco de preguntas + utilidades para variantes mayor/menor

export const DATA = [
  // --- Demografía ---
  {id:"pop_iceland",category:"demografía",label:"Población de Islandia",unit:"personas",trueValue:387000,tolerancePct:0.05,asOf:"2025-09-18"},
  {id:"pop_japan",category:"demografía",label:"Población de Japón",unit:"personas",trueValue:124000000,tolerancePct:0.02,asOf:"2025-09-18"},
  {id:"pop_mexico",category:"demografía",label:"Población de México",unit:"personas",trueValue:129000000,tolerancePct:0.02,asOf:"2025-09-18"},
  {id:"pop_nigeria",category:"demografía",label:"Población de Nigeria",unit:"personas",trueValue:227000000,tolerancePct:0.03,asOf:"2025-09-18"},
  {id:"pop_argentina",category:"demografía",label:"Población de Argentina",unit:"personas",trueValue:46000000,tolerancePct:0.03,asOf:"2025-09-18"},
  {id:"pop_spain",category:"demografía",label:"Población de España",unit:"personas",trueValue:48000000,tolerancePct:0.02,asOf:"2025-09-18"},
  {id:"pop_india",category:"demografía",label:"Población de India",unit:"personas",trueValue:1430000000,tolerancePct:0.02,asOf:"2025-09-18"},
  {id:"pop_china",category:"demografía",label:"Población de China",unit:"personas",trueValue:1420000000,tolerancePct:0.02,asOf:"2025-09-18"},
  {id:"pop_usa",category:"demografía",label:"Población de Estados Unidos",unit:"personas",trueValue:336000000,tolerancePct:0.02,asOf:"2025-09-18"},
  {id:"pop_australia",category:"demografía",label:"Población de Australia",unit:"personas",trueValue:27000000,tolerancePct:0.03,asOf:"2025-09-18"},

  // --- Geografía ---
  {id:"everest_height",category:"geografía",label:"Altura del Monte Everest",unit:"m",trueValue:8849,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"k2_height",category:"geografía",label:"Altura del K2",unit:"m",trueValue:8611,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"mont_blanc_height",category:"geografía",label:"Altura del Mont Blanc",unit:"m",trueValue:4809,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"teide_height",category:"geografía",label:"Altura del Teide",unit:"m",trueValue:3715,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"baikal_depth",category:"geografía",label:"Profundidad del lago Baikal",unit:"m",trueValue:1642,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"sahara_area",category:"geografía",label:"Superficie del desierto del Sáhara",unit:"km²",trueValue:9200000,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"angel_falls_height",category:"geografía",label:"Altura del Salto Ángel",unit:"m",trueValue:979,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"amazon_length",category:"geografía",label:"Longitud del río Amazonas",unit:"km",trueValue:6992,tolerancePct:0.02,asOf:"2025-09-18"},
  {id:"nile_length",category:"geografía",label:"Longitud del río Nilo",unit:"km",trueValue:6650,tolerancePct:0.02,asOf:"2025-09-18"},
  {id:"great_wall_length",category:"geografía",label:"Longitud de la Muralla China",unit:"km",trueValue:21196,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"provinces_spain",category:"geografía",label:"Número de provincias en España",unit:"provincias",trueValue:50,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"ccaa_spain",category:"geografía",label:"Comunidades autónomas en España",unit:"ccaa",trueValue:17,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"capital_highest",category:"geografía",label:"Altitud de la capital más alta (La Paz)",unit:"m",trueValue:3640,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"titicaca_altitude",category:"geografía",label:"Altitud del lago Titicaca",unit:"m",trueValue:3812,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"countries_world",category:"geografía",label:"Países reconocidos en el mundo",unit:"países",trueValue:195,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"oceans_world",category:"geografía",label:"Océanos en el mundo",unit:"océanos",trueValue:5,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"philippines_islands",category:"geografía",label:"Islas en Filipinas",unit:"islas",trueValue:7641,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"greece_islands",category:"geografía",label:"Islas en Grecia (aprox.)",unit:"islas",trueValue:6000,tolerancePct:0.1,asOf:"2025-09-18"},
  {id:"active_volcanoes",category:"geografía",label:"Volcanes activos en el mundo (aprox.)",unit:"volcanes",trueValue:1350,tolerancePct:0.1,asOf:"2025-09-18"},
  {id:"spain_major_ranges",category:"geografía",label:"Cordilleras principales de España",unit:"cordilleras",trueValue:5,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"spain_major_rivers",category:"geografía",label:"Ríos principales de España",unit:"ríos",trueValue:5,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"pyrenees_3000ers",category:"geografía",label:"Picos de 3000+ m en Pirineos",unit:"picos",trueValue:129,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"deepest_ocean_point",category:"geografía",label:"Profundidad máxima del Pacífico (Challenger Deep)",unit:"m",trueValue:11034,tolerancePct:0.02,asOf:"2025-09-18"},
  {id:"most_islands_country",category:"geografía",label:"País con más islas (Suecia)",unit:"islas",trueValue:267570,tolerancePct:0.05,asOf:"2025-09-18"},
  {id:"most_lakes_country",category:"geografía",label:"País con más lagos (Canadá)",unit:"lagos",trueValue:879800,tolerancePct:0.1,asOf:"2025-09-18"},
  {id:"most_volcanoes_country",category:"geografía",label:"País con más volcanes activos (Indonesia)",unit:"volcanes",trueValue:127,tolerancePct:0.1,asOf:"2025-09-18"},
  {id:"smallest_country_area",category:"geografía",label:"País más pequeño por área (Vaticano)",unit:"km²",trueValue:0.49,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"largest_country_area",category:"geografía",label:"País más grande por área (Rusia)",unit:"km²",trueValue:17100000,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"most_populous_country_2025",category:"demografía",label:"País más poblado (2025): India",unit:"personas",trueValue:1430000000,tolerancePct:0.02,asOf:"2025-09-18"},

  // --- Historia / Cultura ---
  {id:"spain_kings_modern",category:"historia",label:"Reyes de España (era moderna)",unit:"reyes",trueValue:19,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"gutenberg_printing",category:"historia",label:"Año invención de la imprenta de Gutenberg",unit:"año",trueValue:1440,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"columbus_america",category:"historia",label:"Año llegada de Colón a América",unit:"año",trueValue:1492,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"us_independence",category:"historia",label:"Independencia de EE. UU.",unit:"año",trueValue:1776,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"un_foundation",category:"historia",label:"Fundación de la ONU",unit:"año",trueValue:1945,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"berlin_wall_fall",category:"historia",label:"Caída del Muro de Berlín",unit:"año",trueValue:1989,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"ww2_duration",category:"historia",label:"Años que duró la II Guerra Mundial",unit:"años",trueValue:6,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"french_revolution",category:"historia",label:"Año de la Revolución Francesa",unit:"año",trueValue:1789,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"us_presidents_to_2025",category:"historia",label:"Presidentes de EE. UU. hasta 2025",unit:"personas",trueValue:46,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"eu_official_languages",category:"historia",label:"Lenguas oficiales en la UE",unit:"idiomas",trueValue:24,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"first_world_cup",category:"historia",label:"Primer Mundial de Fútbol",unit:"año",trueValue:1930,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"first_vaccine",category:"historia",label:"Primera vacuna (viruela)",unit:"año",trueValue:1796,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"rome_foundation",category:"historia",label:"Fundación tradicional de Roma (a.C.)",unit:"año",trueValue:-753,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"abolition_slavery_usa",category:"historia",label:"Abolición de la esclavitud en EE. UU.",unit:"año",trueValue:1865,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"starwars_ep4_release",category:"cultura",label:"Estreno Star Wars Episodio IV",unit:"año",trueValue:1977,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"hundred_years_war_duration",category:"historia",label:"Guerra de los Cien Años (duración)",unit:"años",trueValue:116,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"first_us_president_year",category:"historia",label:"Primer presidente de EE. UU. (inicio mandato)",unit:"año",trueValue:1789,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"first_pope",category:"historia",label:"Primer papa de la Iglesia Católica (ordinal)",unit:"ordinal",trueValue:1,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"byzantine_empire_duration",category:"historia",label:"Imperio bizantino (duración aprox.)",unit:"años",trueValue:1100,tolerancePct:0.1,asOf:"2025-09-18"},
  {id:"olympics_modern_first_host",category:"historia",label:"JJOO modernos (Atenas)",unit:"año",trueValue:1896,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"penicillin_discovery",category:"historia",label:"Descubrimiento de la penicilina",unit:"año",trueValue:1928,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"ancient_wonders",category:"historia",label:"Maravillas del mundo antiguo",unit:"maravillas",trueValue:7,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"new7wonders",category:"historia",label:"Maravillas del mundo moderno (New7Wonders)",unit:"maravillas",trueValue:7,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"spanish_franco_duration",category:"historia",label:"Duración del franquismo en España",unit:"años",trueValue:36,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"fifa_foundation_year",category:"historia",label:"Fundación de la FIFA",unit:"año",trueValue:1904,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"unesco_wh_italy_sites",category:"historia",label:"Sitios Patrimonio de la Humanidad (Italia)",unit:"sitios",trueValue:59,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"ww1_start_year",category:"historia",label:"Inicio de la Primera Guerra Mundial",unit:"año",trueValue:1914,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"ww1_end_year",category:"historia",label:"Fin de la Primera Guerra Mundial",unit:"año",trueValue:1918,tolerancePct:0.0,asOf:"2025-09-18"},

  // --- Ciencia / Tecnología ---
  {id:"pi_5dp",category:"ciencia",label:"Número pi con 5 decimales",unit:"valor",trueValue:3.14159,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"lightspeed",category:"ciencia",label:"Velocidad de la luz",unit:"km/s",trueValue:299792,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"universe_age",category:"ciencia",label:"Edad del universo (aprox.)",unit:"años",trueValue:13800000000,tolerancePct:0.05,asOf:"2025-09-18"},
  {id:"human_bones",category:"ciencia",label:"Huesos en el cuerpo humano",unit:"huesos",trueValue:206,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"human_teeth",category:"ciencia",label:"Dientes permanentes de un humano",unit:"dientes",trueValue:32,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"periodic_elements",category:"ciencia",label:"Elementos en la tabla periódica",unit:"elementos",trueValue:118,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"human_chromosomes",category:"ciencia",label:"Cromosomas humanos",unit:"cromosomas",trueValue:46,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"blood_liters",category:"ciencia",label:"Litros de sangre en el cuerpo humano",unit:"L",trueValue:5,tolerancePct:0.1,asOf:"2025-09-18"},
  {id:"lowest_temp_record",category:"ciencia",label:"Temperatura más baja registrada (Vostok)",unit:"°C",trueValue:-89.2,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"earth_sun_distance",category:"astronomía",label:"Distancia media Tierra-Sol",unit:"km",trueValue:149600000,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"earth_moon_distance",category:"astronomía",label:"Distancia media Tierra-Luna",unit:"km",trueValue:384400,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"brain_mass",category:"ciencia",label:"Peso medio del cerebro humano",unit:"kg",trueValue:1.4,tolerancePct:0.1,asOf:"2025-09-18"},
  {id:"human_genome_bp",category:"ciencia",label:"Pares de bases del genoma humano (aprox.)",unit:"bp",trueValue:3200000000,tolerancePct:0.05,asOf:"2025-09-18"},
  {id:"google_foundation",category:"tecnología",label:"Año fundación de Google",unit:"año",trueValue:1998,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"iphone_launch",category:"tecnología",label:"Año lanzamiento del iPhone",unit:"año",trueValue:2007,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"equilateral_internal_angle",category:"matemáticas",label:"Ángulo interno de un triángulo equilátero",unit:"grados",trueValue:60,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"oxygen_atomic_number",category:"química",label:"Número atómico del Oxígeno",unit:"Z",trueValue:8,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"hydrogen_atomic_number",category:"química",label:"Número atómico del Hidrógeno",unit:"Z",trueValue:1,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"carbon_atomic_number",category:"química",label:"Número atómico del Carbono",unit:"Z",trueValue:6,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"planets_solar_system",category:"astronomía",label:"Planetas del sistema solar",unit:"planetas",trueValue:8,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"programmer_day_index",category:"tecnología",label:"Día del Programador (índice del año)",unit:"día",trueValue:256,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"sunlight_travel_time",category:"astronomía",label:"Tiempo de la luz del Sol a la Tierra",unit:"s",trueValue:500,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"gravity_earth",category:"física",label:"Aceleración de la gravedad en la Tierra",unit:"m/s²",trueValue:9.8,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"gravity_moon",category:"física",label:"Aceleración de la gravedad en la Luna",unit:"m/s²",trueValue:1.62,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"continents_count",category:"geografía",label:"Número de continentes en la Tierra",unit:"continentes",trueValue:7,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"dog_chromosomes",category:"biología",label:"Cromosomas de un perro",unit:"cromosomas",trueValue:78,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"cat_chromosomes",category:"biología",label:"Cromosomas de un gato",unit:"cromosomas",trueValue:38,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"horse_chromosomes",category:"biología",label:"Cromosomas de un caballo",unit:"cromosomas",trueValue:64,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"pluto_orbital_period",category:"astronomía",label:"Periodo orbital de Plutón",unit:"años",trueValue:248,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"telephone_invention_year",category:"tecnología",label:"Invención del teléfono (Bell)",unit:"año",trueValue:1876,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"saturn_moons",category:"astronomía",label:"Satélites de Saturno",unit:"satélites",trueValue:146,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"jupiter_moons",category:"astronomía",label:"Satélites de Júpiter",unit:"satélites",trueValue:95,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"earth_age",category:"ciencia",label:"Edad de la Tierra (aprox.)",unit:"años",trueValue:4540000000,tolerancePct:0.05,asOf:"2025-09-18"},
  {id:"baby_bones",category:"biología",label:"Huesos de un bebé recién nacido (aprox.)",unit:"huesos",trueValue:300,tolerancePct:0.05,asOf:"2025-09-18"},

  // --- Deportes / Récords ---
  {id:"bolt_100m",category:"deportes",label:"Récord mundial 100 m (Usain Bolt)",unit:"s",trueValue:9.58,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"bolt_200m",category:"deportes",label:"Récord mundial 200 m (Usain Bolt)",unit:"s",trueValue:19.19,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"marathon_men_wr_2022",category:"deportes",label:"Récord maratón masculino 2022 (Kipchoge)",unit:"s",trueValue:7269,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"marathon_women_wr_2023",category:"deportes",label:"Récord maratón femenino 2023 (Tigst Assefa)",unit:"s",trueValue:7913,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"rubik3x3_wr_single",category:"deportes",label:"Récord 3×3 Rubik (single)",unit:"s",trueValue:3.13,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"static_apnea_wr",category:"deportes",label:"Récord de apnea estática",unit:"s",trueValue:714,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"high_jump_men_wr",category:"deportes",label:"Récord salto de altura masculino",unit:"m",trueValue:2.45,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"long_jump_men_wr",category:"deportes",label:"Récord salto de longitud masculino",unit:"m",trueValue:8.95,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"javelin_men_wr",category:"deportes",label:"Récord lanzamiento de jabalina (nuevo diseño)",unit:"m",trueValue:98.48,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"ucl_real_madrid",category:"deportes",label:"Champions League ganadas por el Real Madrid",unit:"títulos",trueValue:15,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"world_cups_brazil",category:"deportes",label:"Mundiales de fútbol ganados por Brasil",unit:"títulos",trueValue:5,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"nba_100pts",category:"deportes",label:"Puntos en un partido (Wilt Chamberlain)",unit:"puntos",trueValue:100,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"players_soccer_team",category:"deportes",label:"Jugadores en un equipo de fútbol",unit:"jugadores",trueValue:11,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"players_basketball_team",category:"deportes",label:"Jugadores en un equipo de baloncesto",unit:"jugadores",trueValue:5,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"players_baseball_team",category:"deportes",label:"Jugadores en un equipo de béisbol",unit:"jugadores",trueValue:9,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"players_volleyball_team",category:"deportes",label:"Jugadores en un equipo de voleibol",unit:"jugadores",trueValue:6,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"golf_holes_standard",category:"deportes",label:"Hoyos en un campo de golf",unit:"hoyos",trueValue:18,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"paris2024_sports",category:"deportes",label:"Deportes en París 2024",unit:"deportes",trueValue:32,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"messi_balon_dor_2024",category:"deportes",label:"Balones de Oro de Messi (2024)",unit:"balones",trueValue:8,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"maracana_capacity",category:"deportes",label:"Capacidad del Estadio Maracaná (aprox.)",unit:"personas",trueValue:78838,tolerancePct:0.02,asOf:"2025-09-18"},
  {id:"rugby_union_players",category:"deportes",label:"Jugadores por equipo en rugby (union)",unit:"jugadores",trueValue:15,tolerancePct:0.0,asOf:"2025-09-18"},

  // --- Juegos / Varios ---
  {id:"chess_board_squares",category:"juegos",label:"Casillas en un tablero de ajedrez",unit:"casillas",trueValue:64,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"chess_pieces_total",category:"juegos",label:"Piezas en un set de ajedrez",unit:"piezas",trueValue:32,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"spanish_deck_cards",category:"juegos",label:"Cartas en baraja española",unit:"cartas",trueValue:40,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"french_deck_cards",category:"juegos",label:"Cartas en baraja francesa",unit:"cartas",trueValue:52,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"domino_tiles",category:"juegos",label:"Piezas de dominó estándar",unit:"piezas",trueValue:28,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"parchis_squares",category:"juegos",label:"Casillas en un tablero de parchís",unit:"casillas",trueValue:68,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"oca_squares",category:"juegos",label:"Casillas en un tablero de la oca",unit:"casillas",trueValue:63,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"bowling_max_score",category:"juegos",label:"Puntuación máxima en bolos",unit:"puntos",trueValue:300,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"snooker_max_break",category:"juegos",label:"Máximo break en snooker",unit:"puntos",trueValue:147,tolerancePct:0.0,asOf:"2025-09-18"},

  // --- TV / Cine ---
  {id:"simpsons_seasons_2025",category:"tv",label:"Temporadas de Los Simpsons (2025)",unit:"temporadas",trueValue:36,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"friends_seasons",category:"tv",label:"Temporadas de Friends",unit:"temporadas",trueValue:10,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"breaking_bad_seasons",category:"tv",label:"Temporadas de Breaking Bad",unit:"temporadas",trueValue:5,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"got_seasons",category:"tv",label:"Temporadas de Juego de Tronos",unit:"temporadas",trueValue:8,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"hp_films_main",category:"cine",label:"Películas de Harry Potter (saga principal)",unit:"películas",trueValue:8,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"starwars_episodes_numbered",category:"cine",label:"Star Wars episodios numerados",unit:"películas",trueValue:9,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"lotr_return_oscars",category:"cine",label:"Oscars de 'El Retorno del Rey'",unit:"oscars",trueValue:11,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"toy_story_films",category:"cine",label:"Películas de Toy Story",unit:"películas",trueValue:4,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"shrek_films",category:"cine",label:"Películas de Shrek (saga principal)",unit:"películas",trueValue:4,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"frozen_films",category:"cine",label:"Películas de Frozen",unit:"películas",trueValue:2,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"matrix_films",category:"cine",label:"Películas de Matrix",unit:"películas",trueValue:4,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"indiana_jones_films",category:"cine",label:"Películas de Indiana Jones",unit:"películas",trueValue:5,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"jurassic_films",category:"cine",label:"Películas de Jurassic Park/World",unit:"películas",trueValue:6,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"terminator_films",category:"cine",label:"Películas de Terminator",unit:"películas",trueValue:6,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"sopranos_seasons",category:"tv",label:"Temporadas de Los Soprano",unit:"temporadas",trueValue:6,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"stranger_things_seasons_planned",category:"tv",label:"Temporadas de Stranger Things (previstas)",unit:"temporadas",trueValue:5,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"walt_disney_oscars",category:"cine",label:"Oscars ganados por Walt Disney",unit:"oscars",trueValue:22,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"beyonce_grammys",category:"música",label:"Grammys de Beyoncé",unit:"grammys",trueValue:32,tolerancePct:0.0,asOf:"2025-09-18"},

  // --- Friki / Pop ---
  {id:"pokemon_gen1",category:"friki",label:"Pokémon de la primera generación",unit:"pokémon",trueValue:151,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"pokemon_total_gen9",category:"friki",label:"Pokémon en total (Gen IX)",unit:"pokémon",trueValue:1025,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"hogwarts_houses",category:"friki",label:"Casas en Hogwarts",unit:"casas",trueValue:4,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"voldemort_horcruxes",category:"friki",label:"Horrocruxes de Voldemort",unit:"horrocruxes",trueValue:7,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"lotr_power_rings",category:"friki",label:"Anillos de poder en LOTR",unit:"anillos",trueValue:20,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"fellowship_members",category:"friki",label:"Miembros de la Comunidad del Anillo",unit:"miembros",trueValue:9,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"daenerys_dragons",category:"friki",label:"Dragones de Daenerys",unit:"dragones",trueValue:3,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"mario64_worlds",category:"friki",label:"Mundos en Super Mario 64",unit:"mundos",trueValue:15,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"mk8dx_characters",category:"friki",label:"Personajes en Mario Kart 8 Deluxe",unit:"personajes",trueValue:42,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"ssbu_roster",category:"friki",label:"Personajes en Super Smash Bros Ultimate",unit:"personajes",trueValue:89,tolerancePct:0.0,asOf:"2025-09-18"},

  // --- Curiosidades ---
  {id:"empire_state_floors",category:"curiosidades",label:"Pisos del Empire State Building",unit:"pisos",trueValue:102,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"eiffel_steps_to_top",category:"curiosidades",label:"Escalones hasta la cima de la Torre Eiffel",unit:"escalones",trueValue:1710,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"iss_max_crew_historic",category:"curiosidades",label:"Máximo histórico de tripulantes en la EEI",unit:"personas",trueValue:13,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"south_africa_official_langs",category:"curiosidades",label:"Idiomas oficiales de Sudáfrica",unit:"idiomas",trueValue:11,tolerancePct:0.0,asOf:"2025-09-18"},
  {id:"giraffe_bones",category:"biología",label:"Huesos de una jirafa",unit:"huesos",trueValue:206,tolerancePct:0.0,asOf:"2025-09-18"}
];

// ---------- Helpers para variantes y validación ----------
function niceRound(val, unit){
  const abs = Math.abs(val);
  if (unit === "s") return abs < 10 ? Math.round(val*100)/100 : Math.round(val*10)/10;
  if (unit === "m" || unit === "km") return Math.round(val);
  if (unit === "°C" || unit === "m/s²") return Math.round(val*100)/100;
  if (Number.isInteger(val)) return val;
  return Math.round(val*100)/100;
}

function hashCode(str){
  let h = 0;
  for (let i=0;i<str.length;i++){ h = (h<<5)-h + str.charCodeAt(i); h|=0; }
  return h>>>0;
}

export function makeVariants(item){
  const base = Number(item.trueValue);
  const h = hashCode(item.id);
  const lowPct = 0.75 + ((h % 21) / 100);       // 0.75–0.95
  const highPct = 1.05 + (((h>>5) % 31) / 100); // 1.05–1.36 aprox.
  let low = niceRound(base*lowPct, item.unit);
  let high = niceRound(base*highPct, item.unit);
  if (low >= base) low = Math.max(niceRound(base-1, item.unit), 0);
  if (high <= base) high = niceRound(base+1, item.unit);
  return [
    { refValue: low, correctIf: "higher",
      statement: `${item.label}: ${low} ${item.unit ? item.unit : ""}.`.replace(/\\s\\./g,".") },
    { refValue: high, correctIf: "lower",
      statement: `${item.label}: ${high} ${item.unit ? item.unit : ""}.`.replace(/\\s\\./g,".") }
  ];
}

export function isAnswerCorrect(answer, item, variant){
  return answer === variant.correctIf;
}
