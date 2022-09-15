

const stock = [

    {
        id: 1,
        marca: "Accoje",
        nombre: "Vital",
        descripcion: "Después de 7 días, la piel se nota radiante y joven. Después de utilizar un frasco, la piel se recupera más rápidamente y todos los signos clave de la juventud mejoran visiblemente.",
        precio: 5499,
        stock: 0,
        img: "https://i.ibb.co/fkL6cJb/accoje.jpg",
        categoria: "skincare"
    },
    {
        id: 2,
        marca: "Clé de Peau",
        nombre: "Wrinkle Smooting",
        descripcion: "Un suero antiarrugas clínicamente probado que aporta alta efectividad y resultados visibles. Reduce significantemente la aparición de arrugas a la vez que previene la creación de otras nuevas.",
        precio: 5399,
        stock: 30,
        img: "https://i.ibb.co/T40rC27/cledepeau.jpg",
        categoria: "skincare"
    },
    {
        id: 3,
        marca: "Be Loved",
        nombre: "Cleansing foam",
        descripcion: "Su base levante suave, sin jabón, cierra los poros. El ácido glutámico reequilibra la producción de sebo. Rica en Agua termal de Avène: con propiedades calmantes y desensibilizantes. En el transcurso de los días, se restablece el equilibrio cutáneo. La piel recupera su sensación de piel limpia y de luminosidad",
        precio: 3799,
        stock: 20,
        img: "https://i.ibb.co/ngNNztM/beloved.jpg",
        categoria: "skincare"
    },
    {
        id: 4,
        marca: "DEWYTREE",
        nombre: "The Clean Lab Sea Salt",
        descripcion: "Una sola dosis de esta loción refrescante se transforma en una espuma aérea y untuosa. Altamente concentrada en extracto de hojas de Té blanco de origen natural, perfecciona el desmaquillado, limpia y purifica la piel en profundidad mientras deja sobre ella una sensación refrescante. La piel queda libre de impurezas al instante, perfectamente limpia y aclarada. Tonificada y más fresca, la piel está llena de vida, bella de forma natural.",
        precio: 2899,
        stock: 60,
        img: "https://i.ibb.co/9Ty7WG5/dewytree.jpg",
        categoria: "skincare"
    },
    {
        id: 5,
        marca: "Dr.G",
        nombre: "Leve up Sunscream",
        descripcion: "Aplicar 30 minutos antes de la exposición solar. Repetir con regularidad para mantener el nivel de protección: por lo menos una vez cada dos horas, después de cada baño y después de secarse con la toalla. Uso externo. Evitar el contorno de los ojos. En caso de contacto con los ojos, enjuagar inmediata y abundantemente.",
        precio: 7999,
        stock: 50,
        img: "https://i.ibb.co/6YzdpKj/drg.jpg",
        categoria: "skincare"
    },
    {
        id: 6,
        marca: "Tone Up",
        nombre: "Stick Tone Up",
        descripcion: "Evita paspaduras. La crema hidratante es una formula rica que mantiene la piel hidratada por 24h con la tecnología MVE y un toque aterciopelado que ayuda a restaurar la barrera protectora de la piel.",
        precio: 9499,
        stock: 10,
        img: "https://i.ibb.co/hm9zM5G/toneup.jpg",
        categoria: "skincare"
    },
    {
        id: 7,
        marca: "Costailor",
        nombre: "Toner",
        descripcion: "Tónico en gel sin aceite.Estiramiento de la piel, contiene 90% de ingredientes naturales, hidratante Extra Fino.",
        precio: 5400,
        stock: 18,
        img: "https://i.ibb.co/HxJkZ1J/toner.jpg",
        categoria: "skincare"
    },
    {
        id: 8,
        marca: "Chanel",
        nombre: "Chanel Boy",
        descripcion: "Boy Chanel de Chanel es una fragancia de la familia olfativa Aromática Fougère para Hombres y Mujeres. Boy Chanel se lanzó en 2016. La Nariz detrás de esta fragrancia es Olivier Polge.",
        precio: 18000,
        stock: 13,
        img: "https://i.ibb.co/wKsL1GC/chanelboy.jpg",
        categoria: "fragance"
    },
    {
        id: 9,
        marca: "Elizabeth Arden",
        nombre: "Fragancia green tea",
        descripcion: "Un chispeante elíxir que energiza y despierta los sentidos. Un mezcla exótica de hojas aromáticas, hierbas y notas cítricas que prometen estimular y reforzar su espíritu.",
        precio: 12990,
        stock: 15,
        img: "https://i.ibb.co/BfgMT1B/tonicoceleste.jpg",
        categoria: "fragance"
    },
    {
        id: 10,
        marca: "Narciso",
        nombre: "Narciso",
        descripcion: "El perfume del misterio de la atracción. El encuentro entre un jazmín aterciopelado y maderas sensuales en torno a un corazón de almizcle empolvado.",
        precio: 19000,
        stock: 18,
        img: "https://i.ibb.co/g9f0ZG0/narciso.jpg",
        categoria: "fragance"
    },
    {
        id: 11,
        marca: "Kylie Skin",
        nombre: "Hand Cream",
        descripcion: "Nuestra deliciosa Crema de Manos es tu salvadora de manos secas. Formulada con manteca de karité hidratante y una mezcla de aceites botánicos nutritivos, esta fórmula cremosa y no grasosa mima las manos con una hidratación profunda y las protege de la sequedad. Tus manos se sienten suaves, cuidadas y sedosas.",
        precio: 7590,
        stock: 5,
        img: "https://i.ibb.co/56VYbWQ/kylieskin.jpg",
        categoria: "skincare"
    },
    {
        id: 12,
        marca: "Gucci",
        nombre: "Gucci Bloom",
        descripcion: "Gucci Bloom de Gucci es una fragancia de la familia olfativa Floral para Mujeres. Gucci Bloom se lanzó en 2017. La Nariz detrás de esta fragrancia es Alberto Morillas. La Nota de Salida es jazmín; la Nota de Corazón es nardos; la Nota de Fondo es Camilla de Rangoon.",
        precio: 20000,
        stock: 15,
        img: "https://i.ibb.co/JcFVBcS/guccibloom.jpg",
        categoria: "fragance"
    },
    {
        id: 13,
        marca: "Narciso",
        nombre: "Narciso Fleura",
        descripcion: "Fleur Musc for Her de Narciso Rodriguez es una fragancia de la familia olfativa Almizcle Floral Amaderado para Mujeres. Fleur Musc for Her se lanzó en 2017. Fleur Musc for Her fue creada por Calice Becker y Sonia Constant. La Nota de Salida es pimienta rosa; las Notas de Corazón son rosa, almizcle y peonía; las Notas de Fondo son pachulí, violeta y ámbar.",
        precio: 17000,
        stock: 11,
        img: "https://i.ibb.co/dmJgfGB/narcisofleur.jpg",
        categoria: "fragance"
    },
    {
        id: 14,
        marca: "Nailberry",
        nombre: "Pink",
        descripcion: "Los esmaltes de uñas Nailberry están elaborados con una nueva tecnología patentada que hace que el producto sea más resistente y duradero",
        precio: 11000,
        stock: 14,
        img: "https://i.ibb.co/wK6jQRD/nailberry.jpg",
        categoria: "esmalte"
    },
    {
        id: 15,
        marca: "Fenty Beauty",
        nombre: "Gloss",
        descripcion: "Un brillo labial definitivo que debes tener con un brillo explosivo que se siente tan bien como se ve.",
        precio: 15000,
        stock: 16,
        img: "https://i.ibb.co/FJPSsnR/fentygloss.jpg",
        categoria: "makeup"
    },
    {
        id: 16,
        marca: "Milk",
        nombre: "Florence",
        descripcion: "Un polvo corporal brillante sin talco que empolva suavemente la piel con un brillo total. Las perlas viajeras de color y el polvo de diamante se difunden y brindan luminosidad desde todos los ángulos. ",
        precio: 16000,
        stock: 12,
        img: "https://i.ibb.co/3rbpshj/florence.jpg",
        categoria: "makeup"
    },
    {
        id: 17,
        marca: "Dior",
        nombre: "Dior Labial",
        descripcion: "Rouge Dior tiene ahora un nuevo armario de acabados de alta costura. Traspasando los límites del acabado mate, el nuevo Rouge Dior combina la pasión por la alta costura, el color y los tejidos con la innovación cosmética.",
        precio: 13500,
        stock: 50,
        img: "https://i.ibb.co/MsD04j7/dior.jpg",
        categoria: "makeup"
    },
    {
        id: 18,
        marca: "Herbivore",
        nombre: "Jasmine Green tea",
        descripcion: "El agua de jazmín orgánico está infundida con té verde rico en antioxidantes y una combinación clarificadora de corteza de sauce rica en salicina y aloe vera.",
        precio: 12000,
        stock: 18,
        img: "https://i.ibb.co/9Ts04JK/jasmingreentea.jpg",
        categoria: "skincare"
    },
    {
        id: 19,
        marca: "Chanel",
        nombre: "Le teint ultra",
        descripcion: "ULTRA LE TEINT, la base de maquillaje fluida que sobrepasa todos los límites: larga duración, confort y acabado perfecto natural.",
        precio: 15000,
        stock: 19,
        img: "https://i.ibb.co/Wv36Pjf/chanelbase.jpg",
        categoria: "makeup"
    },
    {
        id: 20,
        marca: "Banobagi",
        nombre: "Cleansing Foam",
        descripcion: "Ph-balanced cleansing gel-to-foam which removes skin impurities and leaves a hydrated complexion.",
        precio: 17500,
        stock: 13,
        img: "https://i.ibb.co/g4n391d/banobagi.jpg",
        categoria: "skincare"
    },
    {
        id: 21,
        marca: "Avon",
        nombre: "Labial",
        descripcion: "El labial powerstay en barra es intransferible y dura hasta 10hs en tus labios. Es liviano y súper cómodo.",
        precio: 10900,
        stock: 12,
        img: "https://i.ibb.co/qJNSZm2/avon.jpg",
        categoria: "makeup"
    },
    {
        id: 22,
        marca: "The ordinary",
        nombre: "AHA 30% BHA 2%",
        descripcion: "El peeling con AHA al 30% y BHA al 2% es un tratamiento para la capa superficial de la piel del cutis que lo exfolia para dejarlo más claro y luminoso. Combate las imperfecciones visibles y, con un uso semanal continuo, descongestiona los poros y reduce las líneas de expresión para aclarar y rejuvenecer el cutis.",
        precio: 25000,
        stock: 39,
        img: "https://i.ibb.co/bB6tz2g/ahatheordinary.jpg",
        categoria: "skincare"
    },
    {
        id: 23,
        marca: "Gucci",
        nombre: "Gucci Bloom",
        descripcion: "Gucci Bloom de Gucci es una fragancia de la familia olfativa Floral para Mujeres. Gucci Bloom se lanzó en 2017. La Nariz detrás de esta fragrancia es Alberto Morillas. La Nota de Salida es jazmín; la Nota de Corazón es nardos; la Nota de Fondo es Camilla de Rangoon.",
        precio: 14500,
        stock: 1,
        img: "https://i.ibb.co/0y59C68/guccibloom1.jpg",
        categoria: "fragance"
    },
    {
        id: 24,
        marca: "Milk",
        nombre: "Florence",
        descripcion: "Un rubor cremoso que se seca hasta un acabado en polvo que no se desliza ni se desliza de la piel. El ingrediente secreto es la arcilla de caolín, un absorbente de aceite que ayuda a que el color se mantenga.",
        precio: 11900,
        stock: 13,
        img: "https://i.ibb.co/mysPqRM/florencebordo.jpg",
        categoria: "makeup"
    },
    {
        id: 25,
        marca: "Becca",
        nombre: "Base Filtrante",
        descripcion: "No se trata de una simple base de maquillaje, ese es el secreto que se esconde detrás de la legendaria luminosidad de BECCA. Su fórmula incluye tres tipos de perlas filtrantes luminiscentes de excepcional calidad. Cada perla añade a la base un toque diferente de difusión lumínica.",
        precio: 14900,
        stock: 13,
        img: "https://i.ibb.co/wWGChcQ/basebecca.jpg",
        categoria: "makeup"
    },
    {
        id: 26,
        marca: "Dior",
        nombre: "Junon",
        descripcion: "Una laca de uñas de alta costura con efecto gel. Dior Vernis couture color, gel-shine, laca de uñas de larga duración 10ml 494 Junon.",
        precio: 12900,
        stock: 17,
        img: "https://i.ibb.co/SfHcRXk/diorvioleta.jpg",
        categoria: "esmalte"
    },
    {
        id: 27,
        marca: "Milk",
        nombre: "Florence",
        descripcion: "Una mascarilla peel-off violeta tornasolada que nos ayuda a resetear nuestra piel después de una semana agotadora. El carbón purificador extrae la suciedad y el aceite, mientras que el hamamelis mantiene la piel linda y feliz",
        precio: 19990,
        stock: 13,
        img: "https://i.ibb.co/fCBKFyV/florencefucsia.jpg",
        categoria: "skincare"
    },
    {
        id: 28,
        marca: "Kirei",
        nombre: "Bijindo",
        descripcion: "Bijindo Kirei Lift Up es un conjunto de productos óptimo para pieles que presentan signos de arrugas y flacidez. Con tecnología sobresaliente de crema de masaje y máscara de enzimas capaces de mejorar la elasticidad y prevenir las arrugas, brindando un efecto de elevación muscular pronunciado para ayudar a una piel más firme y joven.",
        precio: 25000,
        stock: 36,
        img: "https://i.ibb.co/m5zvXWv/kirei.jpg",
        categoria: "skincare"
    },
    {
        id: 29,
        marca: "Dior",
        nombre: "Labial",
        descripcion: "Rouge Dior tiene ahora un nuevo armario de acabados de alta costura. Traspasando los límites del acabado mate, el nuevo Rouge Dior combina la pasión por la alta costura, el color y los tejidos con la innovación cosmética",
        precio: 22500,
        stock: 18,
        img: "https://i.ibb.co/CbRgQhp/diorpink.jpg",
        categoria: "makeup"
    },
    {
        id: 30,
        marca: "Milk",
        nombre: "Florence",
        descripcion: "Una crema hidratante ligera como una pluma que le da a nuestra piel todas las buenas sensaciones de las que enamorarse. La fórmula sedosa incluye dos tipos de extractos de flor de loto y vitamina B12 para ayudar a controlar la grasa y calmar la piel",
        precio: 22500,
        stock: 18,
        img: "https://i.ibb.co/8cYqrKP/florencelila.jpg",
        categoria: "skincare"
    },
    {
        id: 31,
        marca: "Dolce&Gabbana",
        nombre: "Foundation",
        descripcion: "Esta fórmula innovadora cuenta con un innovador sistema MatteAdapt que corrige automáticamente los signos de imperfecciones para mantener una tez impecable por más tiempo. Una mezcla especial de vitaminas nutritivas, minerales y protección SPF20 enriquecen la fórmula.",
        precio: 21500,
        stock: 18,
        img: "https://i.ibb.co/S6gzS54/dolcebase.jpg",
        categoria: "makeup"
    },
    {
        id: 32,
        marca: "Estée Lauder",
        nombre: "DayWear Matte",
        descripcion: "Esta crema en gel fresca y ultraligera, con nuestra poderosa tecnología MoistureMatte, controla la grasa y ayuda a la piel a minimizar el brillo visible; dando a la piel un acabado mate saludable. Reduce el aspecto de los poros. Ayuda a resistir los primeros signos del envejecimiento. La piel se siente fresca, tersa, suave, hidratada.",
        precio: 21900,
        stock: 22,
        img: "https://i.ibb.co/8j1P1nQ/esteelauder.jpg",
        categoria: "skincare"
    },
    {
        id: 33,
        marca: "Dior",
        nombre: "Foundation",
        descripcion: "El fondo de maquillaje Dior Backstage Face & Body Foundation es el secreto de los maquilladores Dior para crear al instante una tez perfecta y con un resultado profesional. Ofrece un acabado luminoso con cobertura modulable: del acabado más natural a la perfección de la alta cobertura",
        precio: 17950,
        stock: 18,
        img: "https://i.ibb.co/bbyzcFW/basedior.jpg",
        categoria: "makeup"
    },
    {
        id: 34,
        marca: "Marc Jacobs",
        nombre: "Foundation",
        descripcion: "Extra Shot Caffeine Concealer and Foundation de Marc Jacobs es un nuevo corrector y base de maquillaje dos en uno con infusión de cafeína que ofrece una apariencia natural, cobertura total y uso durante todo el día para iluminar visiblemente y revitalizar todo tipo de piel. ",
        precio: 13590,
        stock: 19,
        img: "https://i.ibb.co/zR1cnXj/basemarcjabcobs.jpg",
        categoria: "makeup"
    },
    {
        id: 35,
        marca: "Cosme De Dicte",
        nombre: "Clay Blanc",
        descripcion: "A facial cleanser that polishes the face with clay and herbs.A complete cleanse for whiteheads and blackheads, even banishing dullness.",
        precio: 16590,
        stock: 28,
        img: "https://i.ibb.co/vVGKx9H/clayblanc.jpg",
        categoria: "skincare"
    },
    {
        id: 36,
        marca: "Glow Recipe",
        nombre: "Watermelon Glow",
        descripcion: " Rellena tu piel llenando cada capa de piel con una hidratación intensa y jugosa con el suero hialurónico Plum Plump. Su textura sedosa en gel de agua está impregnada de ciruela jugosa y 5 pesos moleculares de ácido hialurónico de próxima generación que llenan cada capa de la piel con hidratación para una piel visiblemente más tersa.",
        precio: 14590,
        stock: 25,
        img: "https://i.ibb.co/dJtgGC1/pinkcreme.jpg",
        categoria: "skincare"
    },
    {
        id: 37,
        marca: "Suqqu",
        nombre: "Cream Foundation",
        descripcion: "Una mezcla de extracto de nim y ácido glicirretico, que se encuentra en los sueros nutritivos para el cuidado de la piel de SUQQU. Cuatro extractos diferentes producidos en Japón.",
        precio: 14590,
        stock: 36,
        img: "https://i.ibb.co/5sz8MGG/foundation.jpg",
        categoria: "makeup"
    },
    {
        id: 38,
        marca: "Milk",
        nombre: "Florence",
        descripcion: "Una máscara alargadora para pestañas que lucirán *casi* demasiado exuberantes para ser reales. Está hecho con ingredientes de origen vegetal como cera de arándano y rosa, además de un cepillo todo en uno para un volumen edificable que levanta y alarga",
        precio: 14500,
        stock: 14,
        img: "https://i.ibb.co/W3f34yQ/florencerimel.jpg",
        categoria: "makeup"
    },
    {
        id: 39,
        marca: "Dior",
        nombre: "Blue Water",
        descripcion: "Una laca de uñas de alta costura con efecto gel. Dior Vernis couture color, gel-shine, laca de uñas de larga duración.",
        precio: 11500,
        stock: 12,
        img: "https://i.ibb.co/fpxT4Nv/esmalteazul.jpg",
        categoria: "esmalte"
    },
    {
        id: 40,
        marca: "Chanel",
        nombre: "Coco Mademoiselle",
        descripcion: "Coco Mademoiselle de Chanel es una fragancia de la familia olfativa Ámbar Floral para Mujeres. Coco Mademoiselle se lanzó en 2001. La nariz detrás de esta fragancia es Jacques Polge. Las Notas de Salida son naranja, mandarina, bergamota y flor de azahar del naranjo; las Notas de Corazón son rosa turca, jazmín, mimosa y ylang-ylang; las Notas de Fondo son pachulí, almizcle blanco, vainilla, vetiver, haba tonka y opopónaco",
        precio: 25000,
        stock: 16,
        img: "https://i.ibb.co/7zq58ws/cocochanel.jpg",
        categoria: "fragance"
    },
    {
        id: 41,
        marca: "Milk",
        nombre: "Florence",
        descripcion: "Este innovador iluminador en gel rebotante se desliza para brindar un destello de brillo cremoso y combinable.. La fórmula altamente pigmentada se puede construir para un brillo intenso o se puede dejar natural para una apariencia fácil y brillante.",
        precio: 11500,
        stock: 1,
        img: "https://i.ibb.co/Bzr20Hv/florenceshine.jpg",
        categoria: "makeup"
    },
    {
        id: 42,
        marca: "Chanel",
        nombre: "Sundays",
        descripcion: "Larga duración: nuestra fórmula está especialmente desarrollada para durar con el tiempo, por lo que puedes sentirte y verte mejor en cualquier lugar.",
        precio: 13500,
        stock: 4,
        img: "https://i.ibb.co/HKzqYkp/esmalterosa.jpg",
        categoria: "esmalte"
    },
    {
        id: 43,
        marca: "Loreal Paris",
        nombre: "Air Volume",
        descripcion: "Máscara de pestañas air mega volume wsh black 01 - MÁSCARA DE PESTAÑAS AIR MEGA VOLUME",
        precio: 14590,
        stock: 6,
        img: "https://i.ibb.co/FY6SVBs/rimelair.jpg",
        categoria: "makeup"
    },
    {
        id: 44,
        marca: "Maybellin",
        nombre: "Lash sensational",
        descripcion: "LASH SENSATIONAL SKY HIGH WTP VERY BLACK",
        precio: 12990,
        stock: 8,
        img: "https://i.ibb.co/CQRjDCZ/rimelmeibelin.jpg",
        categoria: "makeup"
    },
    {
        id: 45,
        marca: "Colourpop",
        nombre: "Lux",
        descripción: "COLOURPOP - LUX LIQUid LIPSTICK DÚO- POWDER ROOM. TONOS: CASUAL DRESS- CAN U EVEN",
        precio: 14500,
        stock: 7,
        img: "https://i.ibb.co/BgcWFwL/labiallux.jpg",
        categoria: "makeup"
    },
    {
        id: 46,
        marca: "Dior",
        nombre: "Labial",
        descripcion: "Rouge Dior tiene ahora un nuevo armario de acabados de alta costura. Traspasando los límites del acabado mate, el nuevo Rouge Dior combina la pasión por la alta costura, el color y los tejidos con la innovación cosmética.",
        precio: 17590,
        stock: 20,
        img: "https://i.ibb.co/RYNnVh8/labialdior.jpg",
        categoria: "makeup"
    },
    {
        id: 47,
        marca: "Lancome",
        nombre: "Labial",
        descripcion: "La fórmula icónica ahora está enriquecida con un 30 % de bálsamo de rosas hidratante, una extracción de tres rosas cosechadas a mano, recién recolectadas a mano una por una, y mezcladas con ácido hialurónico.",
        precio: 14950,
        stock: 14,
        img: "https://i.ibb.co/zxr1RHB/lancomered.jpg",
        categoria: "makeup"
    },
    {
        id: 48,
        marca: "Kylie Skin",
        nombre: "LipBalm",
        descripcion: "Es una fórmula no pegajosa que hidrata, reconforta y deja los labios con un aspecto suave y con volumen natural. Su textura rica y acondicionadora combina el brillo de un brillo de labios con los efectos de sellado de humedad de un bálsamo mientras deja un brillo sutil.",
        precio: 17450,
        stock: 1,
        img: "https://i.ibb.co/LJfgSPr/kylieskin8.jpg",
        categoria: "skincare"
    },
    {
        id: 49,
        marca: "Kylie Skin",
        nombre: "Foaming",
        descripcion: "Foaming Face Wash limpia la piel mientras ayuda a eliminar la suciedad, el exceso de grasa y el maquillaje para una tez fresca y brillante. No despoja a la piel de su humedad natural y la deja muy limpia e hidratada.",
        precio: 14590,
        stock: 7,
        img: "https://i.ibb.co/v3RBDNT/kylieskin6.jpg",
        categoria: "skincare"
    },
    {
        id: 50,
        marca: "Kylie Skin",
        nombre: "Cream",
        descripcion: "Cream es un humectante liviano que trabaja para aclarar imperfecciones, hidratar y refrescar la piel para lograr un acabado suave y flexible. Repleta de ingredientes que aman la piel, esta crema ligera y transpirable ayuda a mejorar la elasticidad, el tono y la textura de la piel. La fórmula a base de agua también proporciona un efecto de enfriamiento instantáneo que lo convierte en la llamada de atención perfecta para la piel",
        precio: 15900,
        stock: 1,
        img: "https://i.ibb.co/wy8Vgdn/kylieskin5.jpg",
        categoria: "skincare"
    },
    {
        id: 51,
        marca: "Rodan+Fields",
        nombre: "Redefine",
        descripcion: "Rodan and Fields es una línea de cuidado de la piel que ofrece productos para el control y el envejecimiento contra manchas, entre otros problemas.",
        precio: 12000,
        stock: 19,
        img: "https://i.ibb.co/RjPFWvV/redefine.jpg",
        categoria: "skincare"
    },
    {
        id: 52,
        nombre: "Chance",
        marca: "Chanel",
        descripcion: "CHANCE EAU TENDRE, EAU DE TOILETTE VAPORIZADOR",
        precio: 14500,
        stock: 1,
        img: "https://i.ibb.co/SykNfk3/chance.jpg",
        categoria: "fragance"

    },
    {
        id: 53,
        nombre: "Chloé",
        marca: "Chloé",
        descripcion: "CHLOE ROSE TANGERINE EDT",
        precio: 13500,
        stock: 23,
        img: "https://i.ibb.co/kKbXTC6/chloe.jpg",
        categoria: "fragance"

    },
    {
        id: 54,
        nombre: "Le Parfum",
        marca: "Elie Saab",
        descripcion: "EAU DE PARFUM FEMME",
        precio: 17500,
        stock: 20,
        img: "https://i.ibb.co/VvX4QX5/elie.jpg",
        categoria: "fragance"

    },
    {
        id: 55,
        nombre: "Fleur Monoi",
        marca: "Urban Outfitters",
        descripcion: "EAU DE PARFUM FEMME",
        precio: 20500,
        stock: 9,
        img: "https://i.ibb.co/XZ7vjGj/fleurmonoi.jpg",
        categoria: "fragance"

    },
    {
        id: 56,
        nombre: "Songes",
        marca: "Annick Goutal",
        descripcion: "EAU DE PARFUM FEMME",
        precio: 24500,
        stock: 10,
        img: "https://i.ibb.co/sC38P6X/goutal.jpg",
        categoria: "fragance"

    },
    {
        id: 57,
        nombre: "YSL Libre Intense",
        marca: "YSL",
        descripcion: "EAU DE PARFUM FEMME",
        precio: 2200,
        stock: 18,
        img: "https://i.ibb.co/VBvFvsX/ysl.jpg",
        categoria: "fragance"

    },
    {
        id: 59,
        marca: "Dior",
        nombre: "Capture Totale",
        descripcion: "La mejor crema* antiedad global nacida de la investigación de las células madre y de la especialización floral de Dior.",
        precio: 25000,
        stock: 30,
        img: "https://i.ibb.co/6t3vZ5x/diorjuventud.jpg",
        categoria: "skincare"
    },

]

export default stock


