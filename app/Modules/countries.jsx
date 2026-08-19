const countriesList = [
  {
    name: "Afghanistan",
    iso2: "AF",
    states: [
      {
        name: "Badakhshan",
        iso2: "BDS",
      },
      {
        name: "Badghis",
        iso2: "BDG",
      },
      {
        name: "Baghlan",
        iso2: "BGL",
      },
      {
        name: "Balkh",
        iso2: "BAL",
      },
      {
        name: "Bamyan",
        iso2: "BAM",
      },
      {
        name: "Daykundi",
        iso2: "DAY",
      },
      {
        name: "Farah",
        iso2: "FRA",
      },
      {
        name: "Faryab",
        iso2: "FYB",
      },
      {
        name: "Ghazni",
        iso2: "GHA",
      },
      {
        name: "Ghōr",
        iso2: "GHO",
      },
      {
        name: "Helmand",
        iso2: "HEL",
      },
      {
        name: "Herat",
        iso2: "HER",
      },
      {
        name: "Jowzjan",
        iso2: "JOW",
      },
      {
        name: "Kabul",
        iso2: "KAB",
      },
      {
        name: "Kandahar",
        iso2: "KAN",
      },
      {
        name: "Kapisa",
        iso2: "KAP",
      },
      {
        name: "Khost",
        iso2: "KHO",
      },
      {
        name: "Kunar",
        iso2: "KNR",
      },
      {
        name: "Kunduz Province",
        iso2: "KDZ",
      },
      {
        name: "Laghman",
        iso2: "LAG",
      },
      {
        name: "Logar",
        iso2: "LOG",
      },
      {
        name: "Nangarhar",
        iso2: "NAN",
      },
      {
        name: "Nimruz",
        iso2: "NIM",
      },
      {
        name: "Nuristan",
        iso2: "NUR",
      },
      {
        name: "Paktia",
        iso2: "PIA",
      },
      {
        name: "Paktika",
        iso2: "PKA",
      },
      {
        name: "Panjshir",
        iso2: "PAN",
      },
      {
        name: "Parwan",
        iso2: "PAR",
      },
      {
        name: "Samangan",
        iso2: "SAM",
      },
      {
        name: "Sar-e Pol",
        iso2: "SAR",
      },
      {
        name: "Takhar",
        iso2: "TAK",
      },
      {
        name: "Urozgan",
        iso2: "URU",
      },
      {
        name: "Zabul",
        iso2: "ZAB",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Aland Islands",
    iso2: "AX",
    states: [
      {
        name: "Aland Islands",
        iso2: "AX",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Albania",
    iso2: "AL",
    states: [
      {
        name: "Berat",
        iso2: "01",
      },
      {
        name: "Berat",
        iso2: "BR",
      },
      {
        name: "Bulqizë",
        iso2: "BU",
      },
      {
        name: "Delvinë",
        iso2: "DL",
      },
      {
        name: "Devoll",
        iso2: "DV",
      },
      {
        name: "Dibër",
        iso2: "DI",
      },
      {
        name: "Dibër",
        iso2: "09",
      },
      {
        name: "Durrës",
        iso2: "DR",
      },
      {
        name: "Durrës",
        iso2: "02",
      },
      {
        name: "Elbasan",
        iso2: "03",
      },
      {
        name: "Fier",
        iso2: "FR",
      },
      {
        name: "Fier",
        iso2: "04",
      },
      {
        name: "Gjirokastër",
        iso2: "05",
      },
      {
        name: "Gjirokastër",
        iso2: "GJ",
      },
      {
        name: "Gramsh",
        iso2: "GR",
      },
      {
        name: "Has",
        iso2: "HA",
      },
      {
        name: "Kavajë",
        iso2: "KA",
      },
      {
        name: "Kolonjë",
        iso2: "ER",
      },
      {
        name: "Korçë",
        iso2: "06",
      },
      {
        name: "Korçë",
        iso2: "KO",
      },
      {
        name: "Krujë",
        iso2: "KR",
      },
      {
        name: "Kuçovë",
        iso2: "KC",
      },
      {
        name: "Kukës",
        iso2: "KU",
      },
      {
        name: "Kukës",
        iso2: "07",
      },
      {
        name: "Kurbin",
        iso2: "KB",
      },
      {
        name: "Lezhë",
        iso2: "08",
      },
      {
        name: "Lezhë",
        iso2: "LE",
      },
      {
        name: "Librazhd",
        iso2: "LB",
      },
      {
        name: "Lushnjë",
        iso2: "LU",
      },
      {
        name: "Malësi e Madhe",
        iso2: "MM",
      },
      {
        name: "Mallakastër",
        iso2: "MK",
      },
      {
        name: "Mat",
        iso2: "MT",
      },
      {
        name: "Mirditë",
        iso2: "MR",
      },
      {
        name: "Peqin",
        iso2: "PQ",
      },
      {
        name: "Përmet",
        iso2: "PR",
      },
      {
        name: "Pogradec",
        iso2: "PG",
      },
      {
        name: "Pukë",
        iso2: "PU",
      },
      {
        name: "Sarandë",
        iso2: "SR",
      },
      {
        name: "Shkodër",
        iso2: "SH",
      },
      {
        name: "Shkodër",
        iso2: "10",
      },
      {
        name: "Skrapar",
        iso2: "SK",
      },
      {
        name: "Tepelenë",
        iso2: "TE",
      },
      {
        name: "Tirana",
        iso2: "11",
      },
      {
        name: "Tirana",
        iso2: "TR",
      },
      {
        name: "Tropojë",
        iso2: "TP",
      },
      {
        name: "Vlorë",
        iso2: "VL",
      },
      {
        name: "Vlorë",
        iso2: "12",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Algeria",
    iso2: "DZ",
    states: [
      {
        name: "Adrar",
        iso2: "01",
      },
      {
        name: "Aïn Defla",
        iso2: "44",
      },
      {
        name: "Aïn Témouchent",
        iso2: "46",
      },
      {
        name: "Algiers",
        iso2: "16",
      },
      {
        name: "Annaba",
        iso2: "23",
      },
      {
        name: "Batna",
        iso2: "05",
      },
      {
        name: "Béchar",
        iso2: "08",
      },
      {
        name: "Béjaïa",
        iso2: "06",
      },
      {
        name: "Béni Abbès",
        iso2: "53",
      },
      {
        name: "Biskra",
        iso2: "07",
      },
      {
        name: "Blida",
        iso2: "09",
      },
      {
        name: "Bordj Baji Mokhtar",
        iso2: "52",
      },
      {
        name: "Bordj Bou Arréridj",
        iso2: "34",
      },
      {
        name: "Bouïra",
        iso2: "10",
      },
      {
        name: "Boumerdès",
        iso2: "35",
      },
      {
        name: "Chlef",
        iso2: "02",
      },
      {
        name: "Constantine",
        iso2: "25",
      },
      {
        name: "Djanet",
        iso2: "56",
      },
      {
        name: "Djelfa",
        iso2: "17",
      },
      {
        name: "El Bayadh",
        iso2: "32",
      },
      {
        name: "El Menia",
        iso2: "50",
      },
      {
        name: "El M'ghair",
        iso2: "49",
      },
      {
        name: "El Oued",
        iso2: "39",
      },
      {
        name: "El Tarf",
        iso2: "36",
      },
      {
        name: "Ghardaïa",
        iso2: "47",
      },
      {
        name: "Guelma",
        iso2: "24",
      },
      {
        name: "Illizi",
        iso2: "33",
      },
      {
        name: "In Guezzam",
        iso2: "58",
      },
      {
        name: "In Salah",
        iso2: "57",
      },
      {
        name: "Jijel",
        iso2: "18",
      },
      {
        name: "Khenchela",
        iso2: "40",
      },
      {
        name: "Laghouat",
        iso2: "03",
      },
      {
        name: "Mascara",
        iso2: "29",
      },
      {
        name: "Médéa",
        iso2: "26",
      },
      {
        name: "Mila",
        iso2: "43",
      },
      {
        name: "Mostaganem",
        iso2: "27",
      },
      {
        name: "M'Sila",
        iso2: "28",
      },
      {
        name: "Naama",
        iso2: "45",
      },
      {
        name: "Oran",
        iso2: "31",
      },
      {
        name: "Ouargla",
        iso2: "30",
      },
      {
        name: "Ouled Djellal",
        iso2: "51",
      },
      {
        name: "Oum El Bouaghi",
        iso2: "04",
      },
      {
        name: "Relizane",
        iso2: "48",
      },
      {
        name: "Saïda",
        iso2: "20",
      },
      {
        name: "Sétif",
        iso2: "19",
      },
      {
        name: "Sidi Bel Abbès",
        iso2: "22",
      },
      {
        name: "Skikda",
        iso2: "21",
      },
      {
        name: "Souk Ahras",
        iso2: "41",
      },
      {
        name: "Tamanghasset",
        iso2: "11",
      },
      {
        name: "Tébessa",
        iso2: "12",
      },
      {
        name: "Tiaret",
        iso2: "14",
      },
      {
        name: "Timimoun",
        iso2: "54",
      },
      {
        name: "Tindouf",
        iso2: "37",
      },
      {
        name: "Tipasa",
        iso2: "42",
      },
      {
        name: "Tissemsilt",
        iso2: "38",
      },
      {
        name: "Tizi Ouzou",
        iso2: "15",
      },
      {
        name: "Tlemcen",
        iso2: "13",
      },
      {
        name: "Touggourt",
        iso2: "55",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "American Samoa",
    iso2: "AS",
    states: [
      {
        name: "American Samoa",
        iso2: "AS",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Andorra",
    iso2: "AD",
    states: [
      {
        name: "Andorra la Vella",
        iso2: "07",
      },
      {
        name: "Canillo",
        iso2: "02",
      },
      {
        name: "Encamp",
        iso2: "03",
      },
      {
        name: "Escaldes-Engordany",
        iso2: "08",
      },
      {
        name: "La Massana",
        iso2: "04",
      },
      {
        name: "Ordino",
        iso2: "05",
      },
      {
        name: "Sant Julià de Lòria",
        iso2: "06",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Angola",
    iso2: "AO",
    states: [
      {
        name: "Bengo",
        iso2: "BGO",
      },
      {
        name: "Benguela",
        iso2: "BGU",
      },
      {
        name: "Bié",
        iso2: "BIE",
      },
      {
        name: "Cabinda",
        iso2: "CAB",
      },
      {
        name: "Cuando Cubango",
        iso2: "CCU",
      },
      {
        name: "Cuanza",
        iso2: "CUS",
      },
      {
        name: "Cuanza Norte",
        iso2: "CNO",
      },
      {
        name: "Cunene",
        iso2: "CNN",
      },
      {
        name: "Huambo",
        iso2: "HUA",
      },
      {
        name: "Huíla",
        iso2: "HUI",
      },
      {
        name: "Luanda",
        iso2: "LUA",
      },
      {
        name: "Lunda Norte",
        iso2: "LNO",
      },
      {
        name: "Lunda Sul",
        iso2: "LSU",
      },
      {
        name: "Malanje",
        iso2: "MAL",
      },
      {
        name: "Moxico",
        iso2: "MOX",
      },
      {
        name: "Uíge",
        iso2: "UIG",
      },
      {
        name: "Zaire",
        iso2: "ZAI",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Anguilla",
    iso2: "AI",
    states: [
      {
        name: "Anguilla",
        iso2: "AI",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Antarctica",
    iso2: "AQ",
    states: [
      {
        name: "Antarctica",
        iso2: "AQ",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Antigua and Barbuda",
    iso2: "AG",
    states: [
      {
        name: "Barbuda",
        iso2: "10",
      },
      {
        name: "Redonda",
        iso2: "11",
      },
      {
        name: "Saint George",
        iso2: "03",
      },
      {
        name: "Saint John",
        iso2: "04",
      },
      {
        name: "Saint Mary",
        iso2: "05",
      },
      {
        name: "Saint Paul",
        iso2: "06",
      },
      {
        name: "Saint Peter",
        iso2: "07",
      },
      {
        name: "Saint Philip",
        iso2: "08",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Argentina",
    iso2: "AR",
    states: [
      {
        name: "Buenos Aires",
        iso2: "B",
      },
      {
        name: "Catamarca",
        iso2: "K",
      },
      {
        name: "Chaco",
        iso2: "H",
      },
      {
        name: "Chubut",
        iso2: "U",
      },
      {
        name: "Ciudad Autónoma de Buenos Aires",
        iso2: "C",
      },
      {
        name: "Córdoba",
        iso2: "X",
      },
      {
        name: "Corrientes",
        iso2: "W",
      },
      {
        name: "Entre Ríos",
        iso2: "E",
      },
      {
        name: "Formosa",
        iso2: "P",
      },
      {
        name: "Jujuy",
        iso2: "Y",
      },
      {
        name: "La Pampa",
        iso2: "L",
      },
      {
        name: "La Rioja",
        iso2: "F",
      },
      {
        name: "Mendoza",
        iso2: "M",
      },
      {
        name: "Misiones",
        iso2: "N",
      },
      {
        name: "Neuquén",
        iso2: "Q",
      },
      {
        name: "Río Negro",
        iso2: "R",
      },
      {
        name: "Salta",
        iso2: "A",
      },
      {
        name: "San Juan",
        iso2: "J",
      },
      {
        name: "San Luis",
        iso2: "D",
      },
      {
        name: "Santa Cruz",
        iso2: "Z",
      },
      {
        name: "Santa Fe",
        iso2: "S",
      },
      {
        name: "Santiago del Estero",
        iso2: "G",
      },
      {
        name: "Tierra del Fuego",
        iso2: "V",
      },
      {
        name: "Tucumán",
        iso2: "T",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Armenia",
    iso2: "AM",
    states: [
      {
        name: "Aragatsotn",
        iso2: "AG",
      },
      {
        name: "Ararat",
        iso2: "AR",
      },
      {
        name: "Armavir",
        iso2: "AV",
      },
      {
        name: "Gegharkunik",
        iso2: "GR",
      },
      {
        name: "Kotayk",
        iso2: "KT",
      },
      {
        name: "Lori",
        iso2: "LO",
      },
      {
        name: "Shirak",
        iso2: "SH",
      },
      {
        name: "Syunik",
        iso2: "SU",
      },
      {
        name: "Tavush",
        iso2: "TV",
      },
      {
        name: "Vayots Dzor",
        iso2: "VD",
      },
      {
        name: "Yerevan",
        iso2: "ER",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Aruba",
    iso2: "AW",
    states: [
      {
        name: "Aruba",
        iso2: "AW",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Australia",
    iso2: "AU",
    states: [
      {
        name: "Australian Capital Territory",
        iso2: "ACT",
      },
      {
        name: "New South Wales",
        iso2: "NSW",
      },
      {
        name: "Northern Territory",
        iso2: "NT",
      },
      {
        name: "Queensland",
        iso2: "QLD",
      },
      {
        name: "South Australia",
        iso2: "SA",
      },
      {
        name: "Tasmania",
        iso2: "TAS",
      },
      {
        name: "Victoria",
        iso2: "VIC",
      },
      {
        name: "Western Australia",
        iso2: "WA",
      },
    ],
    legal_age: 15,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Austria",
    iso2: "AT",
    states: [
      {
        name: "Burgenland",
        iso2: "1",
      },
      {
        name: "Carinthia",
        iso2: "2",
      },
      {
        name: "Lower Austria",
        iso2: "3",
      },
      {
        name: "Salzburg",
        iso2: "5",
      },
      {
        name: "Styria",
        iso2: "6",
      },
      {
        name: "Tyrol",
        iso2: "7",
      },
      {
        name: "Upper Austria",
        iso2: "4",
      },
      {
        name: "Vienna",
        iso2: "9",
      },
      {
        name: "Vorarlberg",
        iso2: "8",
      },
    ],
    legal_age: 14,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Azerbaijan",
    iso2: "AZ",
    states: [
      {
        name: "Absheron",
        iso2: "ABS",
      },
      {
        name: "Agdam",
        iso2: "AGM",
      },
      {
        name: "Agdash",
        iso2: "AGS",
      },
      {
        name: "Aghjabadi",
        iso2: "AGC",
      },
      {
        name: "Agstafa",
        iso2: "AGA",
      },
      {
        name: "Agsu",
        iso2: "AGU",
      },
      {
        name: "Astara",
        iso2: "AST",
      },
      {
        name: "Babek",
        iso2: "BAB",
      },
      {
        name: "Baku",
        iso2: "BA",
      },
      {
        name: "Balakan",
        iso2: "BAL",
      },
      {
        name: "Barda",
        iso2: "BAR",
      },
      {
        name: "Beylagan",
        iso2: "BEY",
      },
      {
        name: "Bilasuvar",
        iso2: "BIL",
      },
      {
        name: "Dashkasan",
        iso2: "DAS",
      },
      {
        name: "Fizuli",
        iso2: "FUZ",
      },
      {
        name: "Ganja",
        iso2: "GA",
      },
      {
        name: "Gədəbəy",
        iso2: "GAD",
      },
      {
        name: "Gobustan",
        iso2: "QOB",
      },
      {
        name: "Goranboy",
        iso2: "GOR",
      },
      {
        name: "Goychay",
        iso2: "GOY",
      },
      {
        name: "Goygol",
        iso2: "GYG",
      },
      {
        name: "Hajigabul",
        iso2: "HAC",
      },
      {
        name: "Imishli",
        iso2: "IMI",
      },
      {
        name: "Ismailli",
        iso2: "ISM",
      },
      {
        name: "Jabrayil",
        iso2: "CAB",
      },
      {
        name: "Jalilabad",
        iso2: "CAL",
      },
      {
        name: "Julfa",
        iso2: "CUL",
      },
      {
        name: "Kalbajar",
        iso2: "KAL",
      },
      {
        name: "Kangarli",
        iso2: "KAN",
      },
      {
        name: "Khachmaz",
        iso2: "XAC",
      },
      {
        name: "Khizi",
        iso2: "XIZ",
      },
      {
        name: "Khojali",
        iso2: "XCI",
      },
      {
        name: "Kurdamir",
        iso2: "KUR",
      },
      {
        name: "Lachin",
        iso2: "LAC",
      },
      {
        name: "Lankaran",
        iso2: "LA",
      },
      {
        name: "Lankaran",
        iso2: "LAN",
      },
      {
        name: "Lerik",
        iso2: "LER",
      },
      {
        name: "Martuni",
        iso2: "XVD",
      },
      {
        name: "Masally",
        iso2: "MAS",
      },
      {
        name: "Mingachevir",
        iso2: "MI",
      },
      {
        name: "Nakhchivan",
        iso2: "NX",
      },
      {
        name: "Neftchala",
        iso2: "NEF",
      },
      {
        name: "Oghuz",
        iso2: "OGU",
      },
      {
        name: "Ordubad",
        iso2: "ORD",
      },
      {
        name: "Qabala",
        iso2: "QAB",
      },
      {
        name: "Qakh",
        iso2: "QAX",
      },
      {
        name: "Qazakh",
        iso2: "QAZ",
      },
      {
        name: "Quba",
        iso2: "QBA",
      },
      {
        name: "Qubadli",
        iso2: "QBI",
      },
      {
        name: "Qusar",
        iso2: "QUS",
      },
      {
        name: "Saatly",
        iso2: "SAT",
      },
      {
        name: "Sabirabad",
        iso2: "SAB",
      },
      {
        name: "Sadarak",
        iso2: "SAD",
      },
      {
        name: "Salyan",
        iso2: "SAL",
      },
      {
        name: "Samukh",
        iso2: "SMX",
      },
      {
        name: "Shabran",
        iso2: "SBN",
      },
      {
        name: "Shahbuz",
        iso2: "SAH",
      },
      {
        name: "Shaki",
        iso2: "SA",
      },
      {
        name: "Shaki",
        iso2: "SAK",
      },
      {
        name: "Shamakhi",
        iso2: "SMI",
      },
      {
        name: "Shamkir",
        iso2: "SKR",
      },
      {
        name: "Sharur",
        iso2: "SAR",
      },
      {
        name: "Shirvan",
        iso2: "SR",
      },
      {
        name: "Shusha",
        iso2: "SUS",
      },
      {
        name: "Siazan",
        iso2: "SIY",
      },
      {
        name: "Sumqayit",
        iso2: "SM",
      },
      {
        name: "Tartar",
        iso2: "TAR",
      },
      {
        name: "Tovuz",
        iso2: "TOV",
      },
      {
        name: "Ujar",
        iso2: "UCA",
      },
      {
        name: "Yardymli",
        iso2: "YAR",
      },
      {
        name: "Yevlakh",
        iso2: "YE",
      },
      {
        name: "Yevlakh",
        iso2: "YEV",
      },
      {
        name: "Zangilan",
        iso2: "ZAN",
      },
      {
        name: "Zaqatala",
        iso2: "ZAQ",
      },
      {
        name: "Zardab",
        iso2: "ZAR",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Bahrain",
    iso2: "BH",
    states: [
      {
        name: "Capital",
        iso2: "13",
      },
      {
        name: "Central",
        iso2: "16",
      },
      {
        name: "Muharraq",
        iso2: "15",
      },
      {
        name: "Northern",
        iso2: "17",
      },
      {
        name: "Southern",
        iso2: "14",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Bangladesh",
    iso2: "BD",
    states: [
      {
        name: "Barisal ",
        iso2: "A",
      },
      {
        name: "Chittagong ",
        iso2: "B",
      },
      {
        name: "Dhaka ",
        iso2: "C",
      },
      {
        name: "Khulna ",
        iso2: "D",
      },
      {
        name: "Mymensingh ",
        iso2: "H",
      },
      {
        name: "Rajshahi ",
        iso2: "E",
      },
      {
        name: "Rangpur ",
        iso2: "F",
      },
      {
        name: "Sylhet ",
        iso2: "G",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Barbados",
    iso2: "BB",
    states: [
      {
        name: "Christ Church",
        iso2: "01",
      },
      {
        name: "Saint Andrew",
        iso2: "02",
      },
      {
        name: "Saint George",
        iso2: "03",
      },
      {
        name: "Saint James",
        iso2: "04",
      },
      {
        name: "Saint John",
        iso2: "05",
      },
      {
        name: "Saint Joseph",
        iso2: "06",
      },
      {
        name: "Saint Lucy",
        iso2: "07",
      },
      {
        name: "Saint Michael",
        iso2: "08",
      },
      {
        name: "Saint Peter",
        iso2: "09",
      },
      {
        name: "Saint Philip",
        iso2: "10",
      },
      {
        name: "Saint Thomas",
        iso2: "11",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Belarus",
    iso2: "BY",
    states: [
      {
        name: "Brest",
        iso2: "BR",
      },
      {
        name: "Gomel",
        iso2: "HO",
      },
      {
        name: "Grodno",
        iso2: "HR",
      },
      {
        name: "Minsk",
        iso2: "MI",
      },
      {
        name: "Minsk",
        iso2: "HM",
      },
      {
        name: "Mogilev",
        iso2: "MA",
      },
      {
        name: "Vitebsk",
        iso2: "VI",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "INACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Belgium",
    iso2: "BE",
    states: [
      {
        name: "Antwerp",
        iso2: "VAN",
      },
      {
        name: "Brussels-Capital ",
        iso2: "BRU",
      },
      {
        name: "East Flanders",
        iso2: "VOV",
      },
      {
        name: "Flanders",
        iso2: "VLG",
      },
      {
        name: "Flemish Brabant",
        iso2: "VBR",
      },
      {
        name: "Hainaut",
        iso2: "WHT",
      },
      {
        name: "Liège",
        iso2: "WLG",
      },
      {
        name: "Limburg",
        iso2: "VLI",
      },
      {
        name: "Luxembourg",
        iso2: "WLX",
      },
      {
        name: "Namur",
        iso2: "WNA",
      },
      {
        name: "Wallonia",
        iso2: "WAL",
      },
      {
        name: "Walloon Brabant",
        iso2: "WBR",
      },
      {
        name: "West Flanders",
        iso2: "VWV",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Belize",
    iso2: "BZ",
    states: [
      {
        name: "Belize",
        iso2: "BZ",
      },
      {
        name: "Cayo",
        iso2: "CY",
      },
      {
        name: "Corozal",
        iso2: "CZL",
      },
      {
        name: "Orange Walk",
        iso2: "OW",
      },
      {
        name: "Stann Creek",
        iso2: "SC",
      },
      {
        name: "Toledo",
        iso2: "TOL",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Benin",
    iso2: "BJ",
    states: [
      {
        name: "Alibori",
        iso2: "AL",
      },
      {
        name: "Atakora",
        iso2: "AK",
      },
      {
        name: "Atlantique",
        iso2: "AQ",
      },
      {
        name: "Borgou",
        iso2: "BO",
      },
      {
        name: "Collines",
        iso2: "CO",
      },
      {
        name: "Donga",
        iso2: "DO",
      },
      {
        name: "Kouffo",
        iso2: "KO",
      },
      {
        name: "Littoral",
        iso2: "LI",
      },
      {
        name: "Mono",
        iso2: "MO",
      },
      {
        name: "Ouémé",
        iso2: "OU",
      },
      {
        name: "Plateau",
        iso2: "PL",
      },
      {
        name: "Zou",
        iso2: "ZO",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Bermuda",
    iso2: "BM",
    states: [
      {
        name: "Devonshire",
        iso2: "DEV",
      },
      {
        name: "Hamilton",
        iso2: "HA",
      },
      {
        name: "Paget",
        iso2: "PAG",
      },
      {
        name: "Pembroke",
        iso2: "PEM",
      },
      {
        name: "Saint George's",
        iso2: "SGE",
      },
      {
        name: "Sandys",
        iso2: "SAN",
      },
      {
        name: "Smith's",
        iso2: "SMI",
      },
      {
        name: "Southampton",
        iso2: "SOU",
      },
      {
        name: "Warwick",
        iso2: "WAR",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Bhutan",
    iso2: "BT",
    states: [
      {
        name: "Bumthang ",
        iso2: "33",
      },
      {
        name: "Chukha ",
        iso2: "12",
      },
      {
        name: "Dagana ",
        iso2: "22",
      },
      {
        name: "Gasa ",
        iso2: "GA",
      },
      {
        name: "Haa ",
        iso2: "13",
      },
      {
        name: "Lhuntse ",
        iso2: "44",
      },
      {
        name: "Mongar ",
        iso2: "42",
      },
      {
        name: "Paro ",
        iso2: "11",
      },
      {
        name: "Pemagatshel ",
        iso2: "43",
      },
      {
        name: "Punakha ",
        iso2: "23",
      },
      {
        name: "Samdrup Jongkhar ",
        iso2: "45",
      },
      {
        name: "Samtse ",
        iso2: "14",
      },
      {
        name: "Sarpang ",
        iso2: "31",
      },
      {
        name: "Thimphu ",
        iso2: "15",
      },
      {
        name: "Trashigang ",
        iso2: "41",
      },
      {
        name: "Trashi Yangtse\t",
        iso2: "TY",
      },
      {
        name: "Trongsa ",
        iso2: "32",
      },
      {
        name: "Tsirang ",
        iso2: "21",
      },
      {
        name: "Wangdue Phodrang ",
        iso2: "24",
      },
      {
        name: "Zhemgang ",
        iso2: "34",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Bolivia",
    iso2: "BO",
    states: [
      {
        name: "Beni",
        iso2: "B",
      },
      {
        name: "Chuquisaca",
        iso2: "H",
      },
      {
        name: "Cochabamba",
        iso2: "C",
      },
      {
        name: "La Paz",
        iso2: "L",
      },
      {
        name: "Oruro",
        iso2: "O",
      },
      {
        name: "Pando",
        iso2: "N",
      },
      {
        name: "Potosí",
        iso2: "P",
      },
      {
        name: "Santa Cruz",
        iso2: "S",
      },
      {
        name: "Tarija",
        iso2: "T",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Bonaire, Sint Eustatius and Saba",
    iso2: "BQ",
    states: [
      {
        name: "Bonaire",
        iso2: "BQ1",
      },
      {
        name: "Saba",
        iso2: "BQ2",
      },
      {
        name: "Sint Eustatius",
        iso2: "BQ3",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Bosnia and Herzegovina",
    iso2: "BA",
    states: [
      {
        name: "Bosnian Podrinje",
        iso2: "05",
      },
      {
        name: "Brčko",
        iso2: "BRC",
      },
      {
        name: "Canton 10",
        iso2: "10",
      },
      {
        name: "Central Bosnia",
        iso2: "06",
      },
      {
        name: "Federation of Bosnia and Herzegovina",
        iso2: "BIH",
      },
      {
        name: "Herzegovina-Neretva",
        iso2: "07",
      },
      {
        name: "Posavina",
        iso2: "02",
      },
      {
        name: "Republika Srpska",
        iso2: "SRP",
      },
      {
        name: "Sarajevo",
        iso2: "09",
      },
      {
        name: "Tuzla",
        iso2: "03",
      },
      {
        name: "Una-Sana",
        iso2: "01",
      },
      {
        name: "West Herzegovina",
        iso2: "08",
      },
      {
        name: "Zenica-Doboj",
        iso2: "04",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Botswana",
    iso2: "BW",
    states: [
      {
        name: "Central",
        iso2: "CE",
      },
      {
        name: "Ghanzi",
        iso2: "GH",
      },
      {
        name: "Kgalagadi",
        iso2: "KG",
      },
      {
        name: "Kgatleng",
        iso2: "KL",
      },
      {
        name: "Kweneng",
        iso2: "KW",
      },
      {
        name: "Ngamiland",
        iso2: "NG",
      },
      {
        name: "North-East",
        iso2: "NE",
      },
      {
        name: "North-West",
        iso2: "NW",
      },
      {
        name: "South-East",
        iso2: "SE",
      },
      {
        name: "Southern",
        iso2: "SO",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Bouvet Island",
    iso2: "BV",
    states: [
      {
        name: "Bouvet Island",
        iso2: "BV",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Brazil",
    iso2: "BR",
    states: [
      {
        name: "Acre",
        iso2: "AC",
      },
      {
        name: "Alagoas",
        iso2: "AL",
      },
      {
        name: "Amapá",
        iso2: "AP",
      },
      {
        name: "Amazonas",
        iso2: "AM",
      },
      {
        name: "Bahia",
        iso2: "BA",
      },
      {
        name: "Ceará",
        iso2: "CE",
      },
      {
        name: "Distrito Federal",
        iso2: "DF",
      },
      {
        name: "Espírito Santo",
        iso2: "ES",
      },
      {
        name: "Goiás",
        iso2: "GO",
      },
      {
        name: "Maranhão",
        iso2: "MA",
      },
      {
        name: "Mato Grosso",
        iso2: "MT",
      },
      {
        name: "Mato Grosso do Sul",
        iso2: "MS",
      },
      {
        name: "Minas Gerais",
        iso2: "MG",
      },
      {
        name: "Pará",
        iso2: "PA",
      },
      {
        name: "Paraíba",
        iso2: "PB",
      },
      {
        name: "Paraná",
        iso2: "PR",
      },
      {
        name: "Pernambuco",
        iso2: "PE",
      },
      {
        name: "Piauí",
        iso2: "PI",
      },
      {
        name: "Rio de Janeiro",
        iso2: "RJ",
      },
      {
        name: "Rio Grande do Norte",
        iso2: "RN",
      },
      {
        name: "Rio Grande do Sul",
        iso2: "RS",
      },
      {
        name: "Rondônia",
        iso2: "RO",
      },
      {
        name: "Roraima",
        iso2: "RR",
      },
      {
        name: "Santa Catarina",
        iso2: "SC",
      },
      {
        name: "São Paulo",
        iso2: "SP",
      },
      {
        name: "Sergipe",
        iso2: "SE",
      },
      {
        name: "Tocantins",
        iso2: "TO",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "British Indian Ocean Territory",
    iso2: "IO",
    states: [
      {
        name: "British Indian Ocean Territory",
        iso2: "IO",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Brunei",
    iso2: "BN",
    states: [
      {
        name: "Belait",
        iso2: "BE",
      },
      {
        name: "Brunei-Muara",
        iso2: "BM",
      },
      {
        name: "Temburong",
        iso2: "TE",
      },
      {
        name: "Tutong",
        iso2: "TU",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Bulgaria",
    iso2: "BG",
    states: [
      {
        name: "Blagoevgrad",
        iso2: "01",
      },
      {
        name: "Burgas",
        iso2: "02",
      },
      {
        name: "Dobrich",
        iso2: "08",
      },
      {
        name: "Gabrovo",
        iso2: "07",
      },
      {
        name: "Haskovo",
        iso2: "26",
      },
      {
        name: "Kardzhali",
        iso2: "09",
      },
      {
        name: "Kyustendil",
        iso2: "10",
      },
      {
        name: "Lovech",
        iso2: "11",
      },
      {
        name: "Montana",
        iso2: "12",
      },
      {
        name: "Pazardzhik",
        iso2: "13",
      },
      {
        name: "Pernik",
        iso2: "14",
      },
      {
        name: "Pleven",
        iso2: "15",
      },
      {
        name: "Plovdiv",
        iso2: "16",
      },
      {
        name: "Razgrad",
        iso2: "17",
      },
      {
        name: "Ruse",
        iso2: "18",
      },
      {
        name: "Shumen",
        iso2: "27",
      },
      {
        name: "Silistra",
        iso2: "19",
      },
      {
        name: "Sliven",
        iso2: "20",
      },
      {
        name: "Smolyan",
        iso2: "21",
      },
      {
        name: "Sofia",
        iso2: "23",
      },
      {
        name: "Sofia City",
        iso2: "22",
      },
      {
        name: "Stara Zagora",
        iso2: "24",
      },
      {
        name: "Targovishte",
        iso2: "25",
      },
      {
        name: "Varna",
        iso2: "03",
      },
      {
        name: "Veliko Tarnovo",
        iso2: "04",
      },
      {
        name: "Vidin",
        iso2: "05",
      },
      {
        name: "Vratsa",
        iso2: "06",
      },
      {
        name: "Yambol",
        iso2: "28",
      },
    ],
    legal_age: 14,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Burkina Faso",
    iso2: "BF",
    states: [
      {
        name: "Balé",
        iso2: "BAL",
      },
      {
        name: "Bam",
        iso2: "BAM",
      },
      {
        name: "Banwa",
        iso2: "BAN",
      },
      {
        name: "Bazèga",
        iso2: "BAZ",
      },
      {
        name: "Boucle du Mouhoun",
        iso2: "01",
      },
      {
        name: "Bougouriba",
        iso2: "BGR",
      },
      {
        name: "Boulgou",
        iso2: "BLG",
      },
      {
        name: "Cascades",
        iso2: "02",
      },
      {
        name: "Centre",
        iso2: "03",
      },
      {
        name: "Centre-Est",
        iso2: "04",
      },
      {
        name: "Centre-Nord",
        iso2: "05",
      },
      {
        name: "Centre-Ouest",
        iso2: "06",
      },
      {
        name: "Centre-Sud",
        iso2: "07",
      },
      {
        name: "Comoé",
        iso2: "COM",
      },
      {
        name: "Est",
        iso2: "08",
      },
      {
        name: "Ganzourgou",
        iso2: "GAN",
      },
      {
        name: "Gnagna",
        iso2: "GNA",
      },
      {
        name: "Gourma",
        iso2: "GOU",
      },
      {
        name: "Hauts-Bassins",
        iso2: "09",
      },
      {
        name: "Houet",
        iso2: "HOU",
      },
      {
        name: "Ioba",
        iso2: "IOB",
      },
      {
        name: "Kadiogo",
        iso2: "KAD",
      },
      {
        name: "Kénédougou",
        iso2: "KEN",
      },
      {
        name: "Komondjari",
        iso2: "KMD",
      },
      {
        name: "Kompienga",
        iso2: "KMP",
      },
      {
        name: "Kossi",
        iso2: "KOS",
      },
      {
        name: "Koulpélogo",
        iso2: "KOP",
      },
      {
        name: "Kouritenga",
        iso2: "KOT",
      },
      {
        name: "Kourwéogo",
        iso2: "KOW",
      },
      {
        name: "Léraba",
        iso2: "LER",
      },
      {
        name: "Loroum",
        iso2: "LOR",
      },
      {
        name: "Mouhoun",
        iso2: "MOU",
      },
      {
        name: "Nahouri",
        iso2: "NAO",
      },
      {
        name: "Namentenga",
        iso2: "NAM",
      },
      {
        name: "Nayala",
        iso2: "NAY",
      },
      {
        name: "Nord",
        iso2: "10",
      },
      {
        name: "Noumbiel",
        iso2: "NOU",
      },
      {
        name: "Oubritenga",
        iso2: "OUB",
      },
      {
        name: "Oudalan",
        iso2: "OUD",
      },
      {
        name: "Passoré",
        iso2: "PAS",
      },
      {
        name: "Plateau-Central",
        iso2: "11",
      },
      {
        name: "Poni",
        iso2: "PON",
      },
      {
        name: "Sahel",
        iso2: "12",
      },
      {
        name: "Sanguié",
        iso2: "SNG",
      },
      {
        name: "Sanmatenga",
        iso2: "SMT",
      },
      {
        name: "Séno",
        iso2: "SEN",
      },
      {
        name: "Sissili",
        iso2: "SIS",
      },
      {
        name: "Soum",
        iso2: "SOM",
      },
      {
        name: "Sourou",
        iso2: "SOR",
      },
      {
        name: "Sud-Ouest",
        iso2: "13",
      },
      {
        name: "Tapoa",
        iso2: "TAP",
      },
      {
        name: "Tuy",
        iso2: "TUI",
      },
      {
        name: "Yagha",
        iso2: "YAG",
      },
      {
        name: "Yatenga",
        iso2: "YAT",
      },
      {
        name: "Ziro",
        iso2: "ZIR",
      },
      {
        name: "Zondoma",
        iso2: "ZON",
      },
      {
        name: "Zoundwéogo",
        iso2: "ZOU",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Burundi",
    iso2: "BI",
    states: [
      {
        name: "Bubanza",
        iso2: "BB",
      },
      {
        name: "Bujumbura Mairie",
        iso2: "BM",
      },
      {
        name: "Bujumbura Rural",
        iso2: "BL",
      },
      {
        name: "Bururi",
        iso2: "BR",
      },
      {
        name: "Cankuzo",
        iso2: "CA",
      },
      {
        name: "Cibitoke",
        iso2: "CI",
      },
      {
        name: "Gitega",
        iso2: "GI",
      },
      {
        name: "Karuzi",
        iso2: "KR",
      },
      {
        name: "Kayanza",
        iso2: "KY",
      },
      {
        name: "Kirundo",
        iso2: "KI",
      },
      {
        name: "Makamba",
        iso2: "MA",
      },
      {
        name: "Muramvya",
        iso2: "MU",
      },
      {
        name: "Muyinga",
        iso2: "MY",
      },
      {
        name: "Mwaro",
        iso2: "MW",
      },
      {
        name: "Ngozi",
        iso2: "NG",
      },
      {
        name: "Rumonge",
        iso2: "RM",
      },
      {
        name: "Rutana",
        iso2: "RT",
      },
      {
        name: "Ruyigi",
        iso2: "RY",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Cambodia",
    iso2: "KH",
    states: [
      {
        name: "Banteay Meanchey",
        iso2: "1",
      },
      {
        name: "Battambang",
        iso2: "2",
      },
      {
        name: "Kampong Cham",
        iso2: "3",
      },
      {
        name: "Kampong Chhnang",
        iso2: "4",
      },
      {
        name: "Kampong Speu",
        iso2: "5",
      },
      {
        name: "Kampong Thom",
        iso2: "6",
      },
      {
        name: "Kampot",
        iso2: "7",
      },
      {
        name: "Kandal",
        iso2: "8",
      },
      {
        name: "Kep",
        iso2: "23",
      },
      {
        name: "Koh Kong",
        iso2: "9",
      },
      {
        name: "Kratie",
        iso2: "10",
      },
      {
        name: "Mondulkiri",
        iso2: "11",
      },
      {
        name: "Oddar Meanchey",
        iso2: "22",
      },
      {
        name: "Pailin",
        iso2: "24",
      },
      {
        name: "Phnom Penh",
        iso2: "12",
      },
      {
        name: "Preah Vihear",
        iso2: "13",
      },
      {
        name: "Prey Veng",
        iso2: "14",
      },
      {
        name: "Pursat",
        iso2: "15",
      },
      {
        name: "Ratanakiri",
        iso2: "16",
      },
      {
        name: "Siem Reap",
        iso2: "17",
      },
      {
        name: "Sihanoukville",
        iso2: "18",
      },
      {
        name: "Stung Treng",
        iso2: "19",
      },
      {
        name: "Svay Rieng",
        iso2: "20",
      },
      {
        name: "Takeo",
        iso2: "21",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Cameroon",
    iso2: "CM",
    states: [
      {
        name: "Adamawa",
        iso2: "AD",
      },
      {
        name: "Centre",
        iso2: "CE",
      },
      {
        name: "East",
        iso2: "ES",
      },
      {
        name: "Far North",
        iso2: "EN",
      },
      {
        name: "Littoral",
        iso2: "LT",
      },
      {
        name: "North",
        iso2: "NO",
      },
      {
        name: "Northwest",
        iso2: "NW",
      },
      {
        name: "South",
        iso2: "SU",
      },
      {
        name: "Southwest",
        iso2: "SW",
      },
      {
        name: "West",
        iso2: "OU",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Canada",
    iso2: "CA",
    states: [
      {
        name: "Alberta",
        iso2: "AB",
      },
      {
        name: "British Columbia",
        iso2: "BC",
      },
      {
        name: "Manitoba",
        iso2: "MB",
      },
      {
        name: "New Brunswick",
        iso2: "NB",
      },
      {
        name: "Newfoundland and Labrador",
        iso2: "NL",
      },
      {
        name: "Northwest Territories",
        iso2: "NT",
      },
      {
        name: "Nova Scotia",
        iso2: "NS",
      },
      {
        name: "Nunavut",
        iso2: "NU",
      },
      {
        name: "Ontario",
        iso2: "ON",
      },
      {
        name: "Prince Edward Island",
        iso2: "PE",
      },
      {
        name: "Quebec",
        iso2: "QC",
      },
      {
        name: "Saskatchewan",
        iso2: "SK",
      },
      {
        name: "Yukon",
        iso2: "YT",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Cape Verde",
    iso2: "CV",
    states: [
      {
        name: "Barlavento Islands",
        iso2: "B",
      },
      {
        name: "Boa Vista",
        iso2: "BV",
      },
      {
        name: "Brava",
        iso2: "BR",
      },
      {
        name: "Maio",
        iso2: "MA",
      },
      {
        name: "Mosteiros",
        iso2: "MO",
      },
      {
        name: "Paul",
        iso2: "PA",
      },
      {
        name: "Porto Novo",
        iso2: "PN",
      },
      {
        name: "Praia",
        iso2: "PR",
      },
      {
        name: "Ribeira Brava",
        iso2: "RB",
      },
      {
        name: "Ribeira Grande",
        iso2: "RG",
      },
      {
        name: "Ribeira Grande de Santiago",
        iso2: "RS",
      },
      {
        name: "Sal",
        iso2: "SL",
      },
      {
        name: "Santa Catarina",
        iso2: "CA",
      },
      {
        name: "Santa Catarina do Fogo",
        iso2: "CF",
      },
      {
        name: "Santa Cruz",
        iso2: "CR",
      },
      {
        name: "São Domingos",
        iso2: "SD",
      },
      {
        name: "São Filipe",
        iso2: "SF",
      },
      {
        name: "São Lourenço dos Órgãos",
        iso2: "SO",
      },
      {
        name: "São Miguel",
        iso2: "SM",
      },
      {
        name: "São Vicente",
        iso2: "SV",
      },
      {
        name: "Sotavento Islands",
        iso2: "S",
      },
      {
        name: "Tarrafal",
        iso2: "TA",
      },
      {
        name: "Tarrafal de São Nicolau",
        iso2: "TS",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Cayman Islands",
    iso2: "KY",
    states: [
      {
        name: "Cayman Islands",
        iso2: "KY",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Central African Republic",
    iso2: "CF",
    states: [
      {
        name: "Bamingui-Bangoran",
        iso2: "BB",
      },
      {
        name: "Bangui",
        iso2: "BGF",
      },
      {
        name: "Basse-Kotto",
        iso2: "BK",
      },
      {
        name: "Haute-Kotto",
        iso2: "HK",
      },
      {
        name: "Haut-Mbomou",
        iso2: "HM",
      },
      {
        name: "Kémo",
        iso2: "KG",
      },
      {
        name: "Lobaye",
        iso2: "LB",
      },
      {
        name: "Mambéré-Kadéï",
        iso2: "HS",
      },
      {
        name: "Mbomou",
        iso2: "MB",
      },
      {
        name: "Nana-Grébizi",
        iso2: "KB",
      },
      {
        name: "Nana-Mambéré",
        iso2: "NM",
      },
      {
        name: "Ombella-M'Poko",
        iso2: "MP",
      },
      {
        name: "Ouaka",
        iso2: "UK",
      },
      {
        name: "Ouham",
        iso2: "AC",
      },
      {
        name: "Ouham-Pendé",
        iso2: "OP",
      },
      {
        name: "Sangha-Mbaéré",
        iso2: "SE",
      },
      {
        name: "Vakaga",
        iso2: "VK",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Chad",
    iso2: "TD",
    states: [
      {
        name: "Bahr el Gazel",
        iso2: "BG",
      },
      {
        name: "Batha",
        iso2: "BA",
      },
      {
        name: "Borkou",
        iso2: "BO",
      },
      {
        name: "Chari-Baguirmi",
        iso2: "CB",
      },
      {
        name: "Ennedi-Est",
        iso2: "EE",
      },
      {
        name: "Ennedi-Ouest",
        iso2: "EO",
      },
      {
        name: "Guéra",
        iso2: "GR",
      },
      {
        name: "Hadjer-Lamis",
        iso2: "HL",
      },
      {
        name: "Kanem",
        iso2: "KA",
      },
      {
        name: "Lac",
        iso2: "LC",
      },
      {
        name: "Logone Occidental",
        iso2: "LO",
      },
      {
        name: "Logone Oriental",
        iso2: "LR",
      },
      {
        name: "Mandoul",
        iso2: "MA",
      },
      {
        name: "Mayo-Kebbi Est",
        iso2: "ME",
      },
      {
        name: "Mayo-Kebbi Ouest",
        iso2: "MO",
      },
      {
        name: "Moyen-Chari",
        iso2: "MC",
      },
      {
        name: "N'Djamena",
        iso2: "ND",
      },
      {
        name: "Ouaddaï",
        iso2: "OD",
      },
      {
        name: "Salamat",
        iso2: "SA",
      },
      {
        name: "Sila",
        iso2: "SI",
      },
      {
        name: "Tandjilé",
        iso2: "TA",
      },
      {
        name: "Tibesti",
        iso2: "TI",
      },
      {
        name: "Wadi Fira",
        iso2: "WF",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Chile",
    iso2: "CL",
    states: [
      {
        name: "Aisén del General Carlos Ibañez del Campo",
        iso2: "AI",
      },
      {
        name: "Antofagasta",
        iso2: "AN",
      },
      {
        name: "Arica y Parinacota",
        iso2: "AP",
      },
      {
        name: "Atacama",
        iso2: "AT",
      },
      {
        name: "Biobío",
        iso2: "BI",
      },
      {
        name: "Coquimbo",
        iso2: "CO",
      },
      {
        name: "La Araucanía",
        iso2: "AR",
      },
      {
        name: "Libertador General Bernardo O'Higgins",
        iso2: "LI",
      },
      {
        name: "Los Lagos",
        iso2: "LL",
      },
      {
        name: "Los Ríos",
        iso2: "LR",
      },
      {
        name: "Magallanes y de la Antártica Chilena",
        iso2: "MA",
      },
      {
        name: "Maule",
        iso2: "ML",
      },
      {
        name: "Ñuble",
        iso2: "NB",
      },
      {
        name: "Región Metropolitana de Santiago",
        iso2: "RM",
      },
      {
        name: "Tarapacá",
        iso2: "TA",
      },
      {
        name: "Valparaíso",
        iso2: "VS",
      },
    ],
    legal_age: 14,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "China",
    iso2: "CN",
    states: [
      {
        name: "Anhui",
        iso2: "AH",
      },
      {
        name: "Beijing",
        iso2: "BJ",
      },
      {
        name: "Chongqing",
        iso2: "CQ",
      },
      {
        name: "Fujian",
        iso2: "FJ",
      },
      {
        name: "Gansu",
        iso2: "GS",
      },
      {
        name: "Guangdong",
        iso2: "GD",
      },
      {
        name: "Guangxi Zhuang",
        iso2: "GX",
      },
      {
        name: "Guizhou",
        iso2: "GZ",
      },
      {
        name: "Hainan",
        iso2: "HI",
      },
      {
        name: "Hebei",
        iso2: "HE",
      },
      {
        name: "Heilongjiang",
        iso2: "HL",
      },
      {
        name: "Henan",
        iso2: "HA",
      },
      {
        name: "Hong Kong SAR",
        iso2: "HK",
      },
      {
        name: "Hubei",
        iso2: "HB",
      },
      {
        name: "Hunan",
        iso2: "HN",
      },
      {
        name: "Inner Mongolia",
        iso2: "NM",
      },
      {
        name: "Jiangsu",
        iso2: "JS",
      },
      {
        name: "Jiangxi",
        iso2: "JX",
      },
      {
        name: "Jilin",
        iso2: "JL",
      },
      {
        name: "Liaoning",
        iso2: "LN",
      },
      {
        name: "Macau SAR",
        iso2: "MO",
      },
      {
        name: "Ningxia Huizu",
        iso2: "NX",
      },
      {
        name: "Qinghai",
        iso2: "QH",
      },
      {
        name: "Shaanxi",
        iso2: "SN",
      },
      {
        name: "Shandong",
        iso2: "SD",
      },
      {
        name: "Shanghai",
        iso2: "SH",
      },
      {
        name: "Shanxi",
        iso2: "SX",
      },
      {
        name: "Sichuan",
        iso2: "SC",
      },
      {
        name: "Taiwan",
        iso2: "TW",
      },
      {
        name: "Tianjin",
        iso2: "TJ",
      },
      {
        name: "Xinjiang",
        iso2: "XJ",
      },
      {
        name: "Xizang",
        iso2: "XZ",
      },
      {
        name: "Yunnan",
        iso2: "YN",
      },
      {
        name: "Zhejiang",
        iso2: "ZJ",
      },
    ],
    legal_age: 14,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE"],
  },
  {
    name: "Christmas Island",
    iso2: "CX",
    states: [
      {
        name: "Christmas Island",
        iso2: "CX",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Cocos (Keeling) Islands",
    iso2: "CC",
    states: [
      {
        name: "Cocos (Keeling) Islands",
        iso2: "CC",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Colombia",
    iso2: "CO",
    states: [
      {
        name: "Amazonas",
        iso2: "AMA",
      },
      {
        name: "Antioquia",
        iso2: "ANT",
      },
      {
        name: "Arauca",
        iso2: "ARA",
      },
      {
        name: "Atlántico",
        iso2: "ATL",
      },
      {
        name: "Bogotá D.C.",
        iso2: "DC",
      },
      {
        name: "Bolívar",
        iso2: "BOL",
      },
      {
        name: "Boyacá",
        iso2: "BOY",
      },
      {
        name: "Caldas",
        iso2: "CAL",
      },
      {
        name: "Caquetá",
        iso2: "CAQ",
      },
      {
        name: "Casanare",
        iso2: "CAS",
      },
      {
        name: "Cauca",
        iso2: "CAU",
      },
      {
        name: "Cesar",
        iso2: "CES",
      },
      {
        name: "Chocó",
        iso2: "CHO",
      },
      {
        name: "Córdoba",
        iso2: "COR",
      },
      {
        name: "Cundinamarca",
        iso2: "CUN",
      },
      {
        name: "Guainía",
        iso2: "GUA",
      },
      {
        name: "Guaviare",
        iso2: "GUV",
      },
      {
        name: "Huila",
        iso2: "HUI",
      },
      {
        name: "La Guajira",
        iso2: "LAG",
      },
      {
        name: "Magdalena",
        iso2: "MAG",
      },
      {
        name: "Meta",
        iso2: "MET",
      },
      {
        name: "Nariño",
        iso2: "NAR",
      },
      {
        name: "Norte de Santander",
        iso2: "NSA",
      },
      {
        name: "Putumayo",
        iso2: "PUT",
      },
      {
        name: "Quindío",
        iso2: "QUI",
      },
      {
        name: "Risaralda",
        iso2: "RIS",
      },
      {
        name: "San Andrés, Providencia y Santa Catalina",
        iso2: "SAP",
      },
      {
        name: "Santander",
        iso2: "SAN",
      },
      {
        name: "Sucre",
        iso2: "SUC",
      },
      {
        name: "Tolima",
        iso2: "TOL",
      },
      {
        name: "Valle del Cauca",
        iso2: "VAC",
      },
      {
        name: "Vaupés",
        iso2: "VAU",
      },
      {
        name: "Vichada",
        iso2: "VID",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Comoros",
    iso2: "KM",
    states: [
      {
        name: "Anjouan",
        iso2: "A",
      },
      {
        name: "Grande Comore",
        iso2: "G",
      },
      {
        name: "Mohéli",
        iso2: "M",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Congo",
    iso2: "CG",
    states: [
      {
        name: "Bouenza",
        iso2: "11",
      },
      {
        name: "Brazzaville",
        iso2: "BZV",
      },
      {
        name: "Cuvette",
        iso2: "8",
      },
      {
        name: "Cuvette-Ouest",
        iso2: "15",
      },
      {
        name: "Kouilou",
        iso2: "5",
      },
      {
        name: "Lékoumou",
        iso2: "2",
      },
      {
        name: "Likouala",
        iso2: "7",
      },
      {
        name: "Niari",
        iso2: "9",
      },
      {
        name: "Plateaux",
        iso2: "14",
      },
      {
        name: "Pointe-Noire",
        iso2: "16",
      },
      {
        name: "Pool",
        iso2: "12",
      },
      {
        name: "Sangha",
        iso2: "13",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Cook Islands",
    iso2: "CK",
    states: [
      {
        name: "Cook Islands",
        iso2: "CK",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Costa Rica",
    iso2: "CR",
    states: [
      {
        name: "Alajuela",
        iso2: "A",
      },
      {
        name: "Cartago",
        iso2: "C",
      },
      {
        name: "Guanacaste",
        iso2: "G",
      },
      {
        name: "Heredia",
        iso2: "H",
      },
      {
        name: "Limón",
        iso2: "L",
      },
      {
        name: "Puntarenas",
        iso2: "P",
      },
      {
        name: "San José",
        iso2: "SJ",
      },
    ],
    legal_age: 15,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Cote D'Ivoire (Ivory Coast)",
    iso2: "CI",
    states: [
      {
        name: "Abidjan",
        iso2: "AB",
      },
      {
        name: "Agnéby",
        iso2: "16",
      },
      {
        name: "Bafing",
        iso2: "17",
      },
      {
        name: "Bas-Sassandra",
        iso2: "09",
      },
      {
        name: "Bas-Sassandra",
        iso2: "BS",
      },
      {
        name: "Comoé",
        iso2: "CM",
      },
      {
        name: "Denguélé",
        iso2: "DN",
      },
      {
        name: "Denguélé",
        iso2: "10",
      },
      {
        name: "Dix-Huit Montagnes",
        iso2: "06",
      },
      {
        name: "Fromager",
        iso2: "18",
      },
      {
        name: "Gôh-Djiboua",
        iso2: "GD",
      },
      {
        name: "Haut-Sassandra",
        iso2: "02",
      },
      {
        name: "Lacs",
        iso2: "07",
      },
      {
        name: "Lacs",
        iso2: "LC",
      },
      {
        name: "Lagunes",
        iso2: "LG",
      },
      {
        name: "Lagunes",
        iso2: "01",
      },
      {
        name: "Marahoué",
        iso2: "12",
      },
      {
        name: "Montagnes",
        iso2: "MG",
      },
      {
        name: "Moyen-Cavally",
        iso2: "19",
      },
      {
        name: "Moyen-Comoé",
        iso2: "05",
      },
      {
        name: "N'zi-Comoé",
        iso2: "11",
      },
      {
        name: "Sassandra-Marahoué",
        iso2: "SM",
      },
      {
        name: "Savanes",
        iso2: "03",
      },
      {
        name: "Sud-Bandama",
        iso2: "15",
      },
      {
        name: "Sud-Comoé",
        iso2: "13",
      },
      {
        name: "Vallée du Bandama",
        iso2: "04",
      },
      {
        name: "Vallée du Bandama",
        iso2: "VB",
      },
      {
        name: "Woroba",
        iso2: "WR",
      },
      {
        name: "Worodougou",
        iso2: "14",
      },
      {
        name: "Yamoussoukro",
        iso2: "YM",
      },
      {
        name: "Zanzan",
        iso2: "ZZ",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Croatia",
    iso2: "HR",
    states: [
      {
        name: "Bjelovar-Bilogora",
        iso2: "07",
      },
      {
        name: "Brod-Posavina",
        iso2: "12",
      },
      {
        name: "Dubrovnik-Neretva",
        iso2: "19",
      },
      {
        name: "Istria",
        iso2: "18",
      },
      {
        name: "Karlovac",
        iso2: "04",
      },
      {
        name: "Koprivnica-Križevci",
        iso2: "06",
      },
      {
        name: "Krapina-Zagorje",
        iso2: "02",
      },
      {
        name: "Lika-Senj",
        iso2: "09",
      },
      {
        name: "Međimurje",
        iso2: "20",
      },
      {
        name: "Osijek-Baranja",
        iso2: "14",
      },
      {
        name: "Požega-Slavonia",
        iso2: "11",
      },
      {
        name: "Primorje-Gorski Kotar",
        iso2: "08",
      },
      {
        name: "Šibenik-Knin",
        iso2: "15",
      },
      {
        name: "Sisak-Moslavina",
        iso2: "03",
      },
      {
        name: "Split-Dalmatia",
        iso2: "17",
      },
      {
        name: "Varaždin",
        iso2: "05",
      },
      {
        name: "Virovitica-Podravina",
        iso2: "10",
      },
      {
        name: "Vukovar-Syrmia",
        iso2: "16",
      },
      {
        name: "Zadar",
        iso2: "13",
      },
      {
        name: "Zagreb",
        iso2: "21",
      },
      {
        name: "Zagreb",
        iso2: "01",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Cuba",
    iso2: "CU",
    states: [
      {
        name: "Artemisa",
        iso2: "15",
      },
      {
        name: "Camagüey",
        iso2: "09",
      },
      {
        name: "Ciego de Ávila",
        iso2: "08",
      },
      {
        name: "Cienfuegos",
        iso2: "06",
      },
      {
        name: "Granma",
        iso2: "12",
      },
      {
        name: "Guantánamo",
        iso2: "14",
      },
      {
        name: "Havana",
        iso2: "03",
      },
      {
        name: "Holguín",
        iso2: "11",
      },
      {
        name: "Isla de la Juventud",
        iso2: "99",
      },
      {
        name: "Las Tunas",
        iso2: "10",
      },
      {
        name: "Matanzas",
        iso2: "04",
      },
      {
        name: "Mayabeque",
        iso2: "16",
      },
      {
        name: "Pinar del Río",
        iso2: "01",
      },
      {
        name: "Sancti Spíritus",
        iso2: "07",
      },
      {
        name: "Santiago de Cuba",
        iso2: "13",
      },
      {
        name: "Villa Clara",
        iso2: "05",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "INACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Curaçao",
    iso2: "CW",
    states: [
      {
        name: "Curaçao",
        iso2: "CW",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Cyprus",
    iso2: "CY",
    states: [
      {
        name: "Famagusta (Mağusa)",
        iso2: "04",
      },
      {
        name: "Kyrenia (Keryneia)",
        iso2: "06",
      },
      {
        name: "Larnaca (Larnaka)",
        iso2: "03",
      },
      {
        name: "Limassol (Leymasun)",
        iso2: "02",
      },
      {
        name: "Nicosia (Lefkoşa)",
        iso2: "01",
      },
      {
        name: "Paphos (Pafos)",
        iso2: "05",
      },
    ],
    legal_age: 14,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Czech Republic",
    iso2: "CZ",
    states: [
      {
        name: "Benešov",
        iso2: "201",
      },
      {
        name: "Beroun",
        iso2: "202",
      },
      {
        name: "Blansko",
        iso2: "641",
      },
      {
        name: "Břeclav",
        iso2: "644",
      },
      {
        name: "Brno-město",
        iso2: "642",
      },
      {
        name: "Brno-venkov",
        iso2: "643",
      },
      {
        name: "Bruntál",
        iso2: "801",
      },
      {
        name: "Česká Lípa",
        iso2: "511",
      },
      {
        name: "České Budějovice",
        iso2: "311",
      },
      {
        name: "Český Krumlov",
        iso2: "312",
      },
      {
        name: "Cheb",
        iso2: "411",
      },
      {
        name: "Chomutov",
        iso2: "422",
      },
      {
        name: "Chrudim",
        iso2: "531",
      },
      {
        name: "Děčín",
        iso2: "421",
      },
      {
        name: "Domažlice",
        iso2: "321",
      },
      {
        name: "Frýdek-Místek",
        iso2: "802",
      },
      {
        name: "Havlíčkův Brod",
        iso2: "631",
      },
      {
        name: "Hodonín",
        iso2: "645",
      },
      {
        name: "Hradec Králové",
        iso2: "521",
      },
      {
        name: "Jablonec nad Nisou",
        iso2: "512",
      },
      {
        name: "Jeseník",
        iso2: "711",
      },
      {
        name: "Jičín",
        iso2: "522",
      },
      {
        name: "Jihlava",
        iso2: "632",
      },
      {
        name: "Jihočeský kraj",
        iso2: "31",
      },
      {
        name: "Jihomoravský kraj",
        iso2: "64",
      },
      {
        name: "Jindřichův Hradec",
        iso2: "313",
      },
      {
        name: "Karlovarský kraj",
        iso2: "41",
      },
      {
        name: "Karlovy Vary",
        iso2: "412",
      },
      {
        name: "Karviná",
        iso2: "803",
      },
      {
        name: "Kladno",
        iso2: "203",
      },
      {
        name: "Klatovy",
        iso2: "322",
      },
      {
        name: "Kolín",
        iso2: "204",
      },
      {
        name: "Kraj Vysočina",
        iso2: "63",
      },
      {
        name: "Královéhradecký kraj",
        iso2: "52",
      },
      {
        name: "Kroměříž",
        iso2: "721",
      },
      {
        name: "Kutná Hora",
        iso2: "205",
      },
      {
        name: "Liberec",
        iso2: "513",
      },
      {
        name: "Liberecký kraj",
        iso2: "51",
      },
      {
        name: "Litoměřice",
        iso2: "423",
      },
      {
        name: "Louny",
        iso2: "424",
      },
      {
        name: "Mělník",
        iso2: "206",
      },
      {
        name: "Mladá Boleslav",
        iso2: "207",
      },
      {
        name: "Moravskoslezský kraj",
        iso2: "80",
      },
      {
        name: "Most",
        iso2: "425",
      },
      {
        name: "Náchod",
        iso2: "523",
      },
      {
        name: "Nový Jičín",
        iso2: "804",
      },
      {
        name: "Nymburk",
        iso2: "208",
      },
      {
        name: "Olomouc",
        iso2: "712",
      },
      {
        name: "Olomoucký kraj",
        iso2: "71",
      },
      {
        name: "Opava",
        iso2: "805",
      },
      {
        name: "Ostrava-město",
        iso2: "806",
      },
      {
        name: "Pardubice",
        iso2: "532",
      },
      {
        name: "Pardubický kraj",
        iso2: "53",
      },
      {
        name: "Pelhřimov",
        iso2: "633",
      },
      {
        name: "Písek",
        iso2: "314",
      },
      {
        name: "Plzeň-jih",
        iso2: "324",
      },
      {
        name: "Plzeň-město",
        iso2: "323",
      },
      {
        name: "Plzeň-sever",
        iso2: "325",
      },
      {
        name: "Plzeňský kraj",
        iso2: "32",
      },
      {
        name: "Prachatice",
        iso2: "315",
      },
      {
        name: "Praha, Hlavní město",
        iso2: "10",
      },
      {
        name: "Praha-východ",
        iso2: "209",
      },
      {
        name: "Praha-západ",
        iso2: "20A",
      },
      {
        name: "Přerov",
        iso2: "714",
      },
      {
        name: "Příbram",
        iso2: "20B",
      },
      {
        name: "Prostějov",
        iso2: "713",
      },
      {
        name: "Rakovník",
        iso2: "20C",
      },
      {
        name: "Rokycany",
        iso2: "326",
      },
      {
        name: "Rychnov nad Kněžnou",
        iso2: "524",
      },
      {
        name: "Semily",
        iso2: "514",
      },
      {
        name: "Sokolov",
        iso2: "413",
      },
      {
        name: "Strakonice",
        iso2: "316",
      },
      {
        name: "Středočeský kraj",
        iso2: "20",
      },
      {
        name: "Šumperk",
        iso2: "715",
      },
      {
        name: "Svitavy",
        iso2: "533",
      },
      {
        name: "Tábor",
        iso2: "317",
      },
      {
        name: "Tachov",
        iso2: "327",
      },
      {
        name: "Teplice",
        iso2: "426",
      },
      {
        name: "Třebíč",
        iso2: "634",
      },
      {
        name: "Trutnov",
        iso2: "525",
      },
      {
        name: "Uherské Hradiště",
        iso2: "722",
      },
      {
        name: "Ústecký kraj",
        iso2: "42",
      },
      {
        name: "Ústí nad Labem",
        iso2: "427",
      },
      {
        name: "Ústí nad Orlicí",
        iso2: "534",
      },
      {
        name: "Vsetín",
        iso2: "723",
      },
      {
        name: "Vyškov",
        iso2: "646",
      },
      {
        name: "Žďár nad Sázavou",
        iso2: "635",
      },
      {
        name: "Zlín",
        iso2: "724",
      },
      {
        name: "Zlínský kraj",
        iso2: "72",
      },
      {
        name: "Znojmo",
        iso2: "647",
      },
    ],
    legal_age: 15,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Democratic Republic of the Congo",
    iso2: "CD",
    states: [
      {
        name: "Bas-Uélé",
        iso2: "BU",
      },
      {
        name: "Équateur",
        iso2: "EQ",
      },
      {
        name: "Haut-Katanga",
        iso2: "HK",
      },
      {
        name: "Haut-Lomami",
        iso2: "HL",
      },
      {
        name: "Haut-Uélé",
        iso2: "HU",
      },
      {
        name: "Ituri",
        iso2: "IT",
      },
      {
        name: "Kasaï",
        iso2: "KS",
      },
      {
        name: "Kasaï Central",
        iso2: "KC",
      },
      {
        name: "Kasaï Oriental",
        iso2: "KE",
      },
      {
        name: "Kinshasa",
        iso2: "KN",
      },
      {
        name: "Kongo Central",
        iso2: "BC",
      },
      {
        name: "Kwango",
        iso2: "KG",
      },
      {
        name: "Kwilu",
        iso2: "KL",
      },
      {
        name: "Lomami",
        iso2: "LO",
      },
      {
        name: "Lualaba",
        iso2: "LU",
      },
      {
        name: "Mai-Ndombe",
        iso2: "MN",
      },
      {
        name: "Maniema",
        iso2: "MA",
      },
      {
        name: "Mongala",
        iso2: "MO",
      },
      {
        name: "Nord-Kivu",
        iso2: "NK",
      },
      {
        name: "Nord-Ubangi",
        iso2: "NU",
      },
      {
        name: "Sankuru",
        iso2: "SA",
      },
      {
        name: "Sud-Kivu",
        iso2: "SK",
      },
      {
        name: "Sud-Ubangi",
        iso2: "SU",
      },
      {
        name: "Tanganyika",
        iso2: "TA",
      },
      {
        name: "Tshopo",
        iso2: "TO",
      },
      {
        name: "Tshuapa",
        iso2: "TU",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Denmark",
    iso2: "DK",
    states: [
      {
        name: "Central Denmark",
        iso2: "82",
      },
      {
        name: "Denmark",
        iso2: "84",
      },
      {
        name: "North Denmark",
        iso2: "81",
      },
      {
        name: "Southern Denmark",
        iso2: "83",
      },
      {
        name: "Zealand",
        iso2: "85",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Djibouti",
    iso2: "DJ",
    states: [
      {
        name: "Ali Sabieh",
        iso2: "AS",
      },
      {
        name: "Arta",
        iso2: "AR",
      },
      {
        name: "Dikhil",
        iso2: "DI",
      },
      {
        name: "Djibouti",
        iso2: "DJ",
      },
      {
        name: "Obock",
        iso2: "OB",
      },
      {
        name: "Tadjourah",
        iso2: "TA",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Dominica",
    iso2: "DM",
    states: [
      {
        name: "Saint Andrew",
        iso2: "02",
      },
      {
        name: "Saint David",
        iso2: "03",
      },
      {
        name: "Saint George",
        iso2: "04",
      },
      {
        name: "Saint John",
        iso2: "05",
      },
      {
        name: "Saint Joseph",
        iso2: "06",
      },
      {
        name: "Saint Luke",
        iso2: "07",
      },
      {
        name: "Saint Mark",
        iso2: "08",
      },
      {
        name: "Saint Patrick",
        iso2: "09",
      },
      {
        name: "Saint Paul",
        iso2: "10",
      },
      {
        name: "Saint Peter",
        iso2: "11",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Dominican Republic",
    iso2: "DO",
    states: [
      {
        name: "Azua",
        iso2: "02",
      },
      {
        name: "Baoruco",
        iso2: "03",
      },
      {
        name: "Barahona",
        iso2: "04",
      },
      {
        name: "Dajabón",
        iso2: "05",
      },
      {
        name: "Distrito Nacional",
        iso2: "01",
      },
      {
        name: "Duarte",
        iso2: "06",
      },
      {
        name: "El Seibo",
        iso2: "08",
      },
      {
        name: "Espaillat",
        iso2: "09",
      },
      {
        name: "Hato Mayor",
        iso2: "30",
      },
      {
        name: "Hermanas Mirabal",
        iso2: "19",
      },
      {
        name: "Independencia",
        iso2: "10",
      },
      {
        name: "La Altagracia",
        iso2: "11",
      },
      {
        name: "La Romana",
        iso2: "12",
      },
      {
        name: "La Vega",
        iso2: "13",
      },
      {
        name: "María Trinidad Sánchez",
        iso2: "14",
      },
      {
        name: "Monseñor Nouel",
        iso2: "28",
      },
      {
        name: "Monte Cristi",
        iso2: "15",
      },
      {
        name: "Monte Plata",
        iso2: "29",
      },
      {
        name: "Pedernales",
        iso2: "16",
      },
      {
        name: "Peravia",
        iso2: "17",
      },
      {
        name: "Puerto Plata",
        iso2: "18",
      },
      {
        name: "Samaná",
        iso2: "20",
      },
      {
        name: "Sánchez Ramírez",
        iso2: "24",
      },
      {
        name: "San Cristóbal",
        iso2: "21",
      },
      {
        name: "San José de Ocoa",
        iso2: "31",
      },
      {
        name: "San Juan",
        iso2: "22",
      },
      {
        name: "San Pedro de Macorís",
        iso2: "23",
      },
      {
        name: "Santiago",
        iso2: "25",
      },
      {
        name: "Santiago Rodríguez",
        iso2: "26",
      },
      {
        name: "Santo Domingo",
        iso2: "32",
      },
      {
        name: "Valverde",
        iso2: "27",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Ecuador",
    iso2: "EC",
    states: [
      {
        name: "Azuay",
        iso2: "A",
      },
      {
        name: "Bolívar",
        iso2: "B",
      },
      {
        name: "Cañar",
        iso2: "F",
      },
      {
        name: "Carchi",
        iso2: "C",
      },
      {
        name: "Chimborazo",
        iso2: "H",
      },
      {
        name: "Cotopaxi",
        iso2: "X",
      },
      {
        name: "El Oro",
        iso2: "O",
      },
      {
        name: "Esmeraldas",
        iso2: "E",
      },
      {
        name: "Galápagos",
        iso2: "W",
      },
      {
        name: "Guayas",
        iso2: "G",
      },
      {
        name: "Imbabura",
        iso2: "I",
      },
      {
        name: "Loja",
        iso2: "L",
      },
      {
        name: "Los Ríos",
        iso2: "R",
      },
      {
        name: "Manabí",
        iso2: "M",
      },
      {
        name: "Morona-Santiago",
        iso2: "S",
      },
      {
        name: "Napo",
        iso2: "N",
      },
      {
        name: "Orellana",
        iso2: "D",
      },
      {
        name: "Pastaza",
        iso2: "Y",
      },
      {
        name: "Pichincha",
        iso2: "P",
      },
      {
        name: "Santa Elena",
        iso2: "SE",
      },
      {
        name: "Santo Domingo de los Tsáchilas",
        iso2: "SD",
      },
      {
        name: "Sucumbíos",
        iso2: "U",
      },
      {
        name: "Tungurahua",
        iso2: "T",
      },
      {
        name: "Zamora Chinchipe",
        iso2: "Z",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Egypt",
    iso2: "EG",
    states: [
      {
        name: "Alexandria",
        iso2: "ALX",
      },
      {
        name: "Aswan",
        iso2: "ASN",
      },
      {
        name: "Asyut",
        iso2: "AST",
      },
      {
        name: "Beheira",
        iso2: "BH",
      },
      {
        name: "Beni Suef",
        iso2: "BNS",
      },
      {
        name: "Cairo",
        iso2: "C",
      },
      {
        name: "Dakahlia",
        iso2: "DK",
      },
      {
        name: "Damietta",
        iso2: "DT",
      },
      {
        name: "Faiyum",
        iso2: "FYM",
      },
      {
        name: "Gharbia",
        iso2: "GH",
      },
      {
        name: "Giza",
        iso2: "GZ",
      },
      {
        name: "Ismailia",
        iso2: "IS",
      },
      {
        name: "Kafr el-Sheikh",
        iso2: "KFS",
      },
      {
        name: "Luxor",
        iso2: "LX",
      },
      {
        name: "Matrouh",
        iso2: "MT",
      },
      {
        name: "Minya",
        iso2: "MN",
      },
      {
        name: "Monufia",
        iso2: "MNF",
      },
      {
        name: "New Valley",
        iso2: "WAD",
      },
      {
        name: "North Sinai",
        iso2: "SIN",
      },
      {
        name: "Port Said",
        iso2: "PTS",
      },
      {
        name: "Qalyubia",
        iso2: "KB",
      },
      {
        name: "Qena",
        iso2: "KN",
      },
      {
        name: "Red Sea",
        iso2: "BA",
      },
      {
        name: "Sharqia",
        iso2: "SHR",
      },
      {
        name: "Sohag",
        iso2: "SHG",
      },
      {
        name: "South Sinai",
        iso2: "JS",
      },
      {
        name: "Suez",
        iso2: "SUZ",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "El Salvador",
    iso2: "SV",
    states: [
      {
        name: "Ahuachapán",
        iso2: "AH",
      },
      {
        name: "Cabañas",
        iso2: "CA",
      },
      {
        name: "Chalatenango",
        iso2: "CH",
      },
      {
        name: "Cuscatlán",
        iso2: "CU",
      },
      {
        name: "La Libertad",
        iso2: "LI",
      },
      {
        name: "La Paz",
        iso2: "PA",
      },
      {
        name: "La Unión ",
        iso2: "UN",
      },
      {
        name: "Morazán",
        iso2: "MO",
      },
      {
        name: "San Miguel",
        iso2: "SM",
      },
      {
        name: "San Salvador",
        iso2: "SS",
      },
      {
        name: "Santa Ana",
        iso2: "SA",
      },
      {
        name: "San Vicente",
        iso2: "SV",
      },
      {
        name: "Sonsonate",
        iso2: "SO",
      },
      {
        name: "Usulután",
        iso2: "US",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Equatorial Guinea",
    iso2: "GQ",
    states: [
      {
        name: "Annobón",
        iso2: "AN",
      },
      {
        name: "Bioko Norte",
        iso2: "BN",
      },
      {
        name: "Bioko Sur",
        iso2: "BS",
      },
      {
        name: "Centro Sur",
        iso2: "CS",
      },
      {
        name: "Insular",
        iso2: "I",
      },
      {
        name: "Kié-Ntem",
        iso2: "KN",
      },
      {
        name: "Litoral",
        iso2: "LI",
      },
      {
        name: "Río Muni",
        iso2: "C",
      },
      {
        name: "Wele-Nzas",
        iso2: "WN",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Eritrea",
    iso2: "ER",
    states: [
      {
        name: "Anseba",
        iso2: "AN",
      },
      {
        name: "Debub",
        iso2: "DU",
      },
      {
        name: "Gash-Barka",
        iso2: "GB",
      },
      {
        name: "Maekel",
        iso2: "MA",
      },
      {
        name: "Northern Red Sea",
        iso2: "SK",
      },
      {
        name: "Southern Red Sea",
        iso2: "DK",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Estonia",
    iso2: "EE",
    states: [
      {
        name: "Harju",
        iso2: "37",
      },
      {
        name: "Hiiu",
        iso2: "39",
      },
      {
        name: "Ida-Viru",
        iso2: "44",
      },
      {
        name: "Järva",
        iso2: "51",
      },
      {
        name: "Jõgeva",
        iso2: "49",
      },
      {
        name: "Lääne",
        iso2: "57",
      },
      {
        name: "Lääne-Viru",
        iso2: "59",
      },
      {
        name: "Pärnu",
        iso2: "67",
      },
      {
        name: "Põlva",
        iso2: "65",
      },
      {
        name: "Rapla",
        iso2: "70",
      },
      {
        name: "Saare",
        iso2: "74",
      },
      {
        name: "Tartu",
        iso2: "78",
      },
      {
        name: "Valga",
        iso2: "82",
      },
      {
        name: "Viljandi",
        iso2: "84",
      },
      {
        name: "Võru",
        iso2: "86",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Eswatini",
    iso2: "SZ",
    states: [
      {
        name: "Hhohho",
        iso2: "HH",
      },
      {
        name: "Lubombo",
        iso2: "LU",
      },
      {
        name: "Manzini",
        iso2: "MA",
      },
      {
        name: "Shiselweni",
        iso2: "SH",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Ethiopia",
    iso2: "ET",
    states: [
      {
        name: "Addis Ababa",
        iso2: "AA",
      },
      {
        name: "Afar",
        iso2: "AF",
      },
      {
        name: "Amhara",
        iso2: "AM",
      },
      {
        name: "Benishangul-Gumuz",
        iso2: "BE",
      },
      {
        name: "Dire Dawa",
        iso2: "DD",
      },
      {
        name: "Gambela",
        iso2: "GA",
      },
      {
        name: "Harari",
        iso2: "HA",
      },
      {
        name: "Oromia",
        iso2: "OR",
      },
      {
        name: "Somali",
        iso2: "SO",
      },
      {
        name: "Southern Nations, Nationalities, and Peoples'",
        iso2: "SN",
      },
      {
        name: "Tigray",
        iso2: "TI",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Falkland Islands",
    iso2: "FK",
    states: [
      {
        name: "Falkland Islands",
        iso2: "FK",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Faroe Islands",
    iso2: "FO",
    states: [
      {
        name: "Eysturoy",
        iso2: "EY",
      },
      {
        name: "Northern Isles",
        iso2: "NO",
      },
      {
        name: "Sandoy",
        iso2: "SA",
      },
      {
        name: "Streymoy",
        iso2: "ST",
      },
      {
        name: "Suðuroy",
        iso2: "SU",
      },
      {
        name: "Vágar",
        iso2: "VA",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Fiji Islands",
    iso2: "FJ",
    states: [
      {
        name: "Ba",
        iso2: "01",
      },
      {
        name: "Bua",
        iso2: "02",
      },
      {
        name: "Cakaudrove",
        iso2: "03",
      },
      {
        name: "Central",
        iso2: "C",
      },
      {
        name: "Eastern",
        iso2: "E",
      },
      {
        name: "Kadavu",
        iso2: "04",
      },
      {
        name: "Lau",
        iso2: "05",
      },
      {
        name: "Lomaiviti",
        iso2: "06",
      },
      {
        name: "Macuata",
        iso2: "07",
      },
      {
        name: "Nadroga-Navosa",
        iso2: "08",
      },
      {
        name: "Naitasiri",
        iso2: "09",
      },
      {
        name: "Namosi",
        iso2: "10",
      },
      {
        name: "Northern",
        iso2: "N",
      },
      {
        name: "Ra",
        iso2: "11",
      },
      {
        name: "Rewa",
        iso2: "12",
      },
      {
        name: "Rotuma",
        iso2: "R",
      },
      {
        name: "Serua",
        iso2: "13",
      },
      {
        name: "Tailevu",
        iso2: "14",
      },
      {
        name: "Western",
        iso2: "W",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Finland",
    iso2: "FI",
    states: [
      {
        name: "Åland Islands",
        iso2: "01",
      },
      {
        name: "Central Finland",
        iso2: "08",
      },
      {
        name: "Central Ostrobothnia",
        iso2: "07",
      },
      {
        name: "Finland Proper",
        iso2: "19",
      },
      {
        name: "Kainuu",
        iso2: "05",
      },
      {
        name: "Kymenlaakso",
        iso2: "09",
      },
      {
        name: "Lapland",
        iso2: "10",
      },
      {
        name: "Northern Ostrobothnia",
        iso2: "14",
      },
      {
        name: "Northern Savonia",
        iso2: "15",
      },
      {
        name: "North Karelia",
        iso2: "13",
      },
      {
        name: "Ostrobothnia",
        iso2: "12",
      },
      {
        name: "Päijänne Tavastia",
        iso2: "16",
      },
      {
        name: "Pirkanmaa",
        iso2: "11",
      },
      {
        name: "Satakunta",
        iso2: "17",
      },
      {
        name: "Southern Ostrobothnia",
        iso2: "03",
      },
      {
        name: "Southern Savonia",
        iso2: "04",
      },
      {
        name: "South Karelia",
        iso2: "02",
      },
      {
        name: "Tavastia Proper",
        iso2: "06",
      },
      {
        name: "Uusimaa",
        iso2: "18",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "France",
    iso2: "FR",
    states: [
      {
        name: "Ain",
        iso2: "01",
      },
      {
        name: "Aisne",
        iso2: "02",
      },
      {
        name: "Allier",
        iso2: "03",
      },
      {
        name: "Alpes-de-Haute-Provence",
        iso2: "04",
      },
      {
        name: "Alpes-Maritimes",
        iso2: "06",
      },
      {
        name: "Alsace",
        iso2: "6AE",
      },
      {
        name: "Ardèche",
        iso2: "07",
      },
      {
        name: "Ardennes",
        iso2: "08",
      },
      {
        name: "Ariège",
        iso2: "09",
      },
      {
        name: "Aube",
        iso2: "10",
      },
      {
        name: "Aude",
        iso2: "11",
      },
      {
        name: "Auvergne-Rhône-Alpes",
        iso2: "ARA",
      },
      {
        name: "Aveyron",
        iso2: "12",
      },
      {
        name: "Bas-Rhin",
        iso2: "67",
      },
      {
        name: "Bouches-du-Rhône",
        iso2: "13",
      },
      {
        name: "Bourgogne-Franche-Comté",
        iso2: "BFC",
      },
      {
        name: "Bretagne",
        iso2: "BRE",
      },
      {
        name: "Calvados",
        iso2: "14",
      },
      {
        name: "Cantal",
        iso2: "15",
      },
      {
        name: "Centre-Val de Loire",
        iso2: "CVL",
      },
      {
        name: "Charente",
        iso2: "16",
      },
      {
        name: "Charente-Maritime",
        iso2: "17",
      },
      {
        name: "Cher",
        iso2: "18",
      },
      {
        name: "Clipperton",
        iso2: "CP",
      },
      {
        name: "Corrèze",
        iso2: "19",
      },
      {
        name: "Corse",
        iso2: "20R",
      },
      {
        name: "Corse-du-Sud",
        iso2: "2A",
      },
      {
        name: "Côte-d'Or",
        iso2: "21",
      },
      {
        name: "Côtes-d'Armor",
        iso2: "22",
      },
      {
        name: "Creuse",
        iso2: "23",
      },
      {
        name: "Deux-Sèvres",
        iso2: "79",
      },
      {
        name: "Dordogne",
        iso2: "24",
      },
      {
        name: "Doubs",
        iso2: "25",
      },
      {
        name: "Drôme",
        iso2: "26",
      },
      {
        name: "Essonne",
        iso2: "91",
      },
      {
        name: "Eure",
        iso2: "27",
      },
      {
        name: "Eure-et-Loir",
        iso2: "28",
      },
      {
        name: "Finistère",
        iso2: "29",
      },
      {
        name: "French Guiana",
        iso2: "973",
      },
      {
        name: "French Polynesia",
        iso2: "PF",
      },
      {
        name: "French Southern and Antarctic Lands",
        iso2: "TF",
      },
      {
        name: "Gard",
        iso2: "30",
      },
      {
        name: "Gers",
        iso2: "32",
      },
      {
        name: "Gironde",
        iso2: "33",
      },
      {
        name: "Grand-Est",
        iso2: "GES",
      },
      {
        name: "Guadeloupe",
        iso2: "971",
      },
      {
        name: "Haute-Corse",
        iso2: "2B",
      },
      {
        name: "Haute-Garonne",
        iso2: "31",
      },
      {
        name: "Haute-Loire",
        iso2: "43",
      },
      {
        name: "Haute-Marne",
        iso2: "52",
      },
      {
        name: "Hautes-Alpes",
        iso2: "05",
      },
      {
        name: "Haute-Saône",
        iso2: "70",
      },
      {
        name: "Haute-Savoie",
        iso2: "74",
      },
      {
        name: "Hautes-Pyrénées",
        iso2: "65",
      },
      {
        name: "Haute-Vienne",
        iso2: "87",
      },
      {
        name: "Haut-Rhin",
        iso2: "68",
      },
      {
        name: "Hauts-de-France",
        iso2: "HDF",
      },
      {
        name: "Hauts-de-Seine",
        iso2: "92",
      },
      {
        name: "Hérault",
        iso2: "34",
      },
      {
        name: "Île-de-France",
        iso2: "IDF",
      },
      {
        name: "Ille-et-Vilaine",
        iso2: "35",
      },
      {
        name: "Indre",
        iso2: "36",
      },
      {
        name: "Indre-et-Loire",
        iso2: "37",
      },
      {
        name: "Isère",
        iso2: "38",
      },
      {
        name: "Jura",
        iso2: "39",
      },
      {
        name: "Landes",
        iso2: "40",
      },
      {
        name: "La Réunion",
        iso2: "974",
      },
      {
        name: "Loire",
        iso2: "42",
      },
      {
        name: "Loire-Atlantique",
        iso2: "44",
      },
      {
        name: "Loiret",
        iso2: "45",
      },
      {
        name: "Loir-et-Cher",
        iso2: "41",
      },
      {
        name: "Lot",
        iso2: "46",
      },
      {
        name: "Lot-et-Garonne",
        iso2: "47",
      },
      {
        name: "Lozère",
        iso2: "48",
      },
      {
        name: "Maine-et-Loire",
        iso2: "49",
      },
      {
        name: "Manche",
        iso2: "50",
      },
      {
        name: "Marne",
        iso2: "51",
      },
      {
        name: "Martinique",
        iso2: "972",
      },
      {
        name: "Mayenne",
        iso2: "53",
      },
      {
        name: "Mayotte",
        iso2: "976",
      },
      {
        name: "Métropole de Lyon",
        iso2: "69M",
      },
      {
        name: "Meurthe-et-Moselle",
        iso2: "54",
      },
      {
        name: "Meuse",
        iso2: "55",
      },
      {
        name: "Morbihan",
        iso2: "56",
      },
      {
        name: "Moselle",
        iso2: "57",
      },
      {
        name: "Nièvre",
        iso2: "58",
      },
      {
        name: "Nord",
        iso2: "59",
      },
      {
        name: "Normandie",
        iso2: "NOR",
      },
      {
        name: "Nouvelle-Aquitaine",
        iso2: "NAQ",
      },
      {
        name: "Occitanie",
        iso2: "OCC",
      },
      {
        name: "Oise",
        iso2: "60",
      },
      {
        name: "Orne",
        iso2: "61",
      },
      {
        name: "Paris",
        iso2: "75C",
      },
      {
        name: "Pas-de-Calais",
        iso2: "62",
      },
      {
        name: "Pays-de-la-Loire",
        iso2: "PDL",
      },
      {
        name: "Provence-Alpes-Côte-d’Azur",
        iso2: "PAC",
      },
      {
        name: "Puy-de-Dôme",
        iso2: "63",
      },
      {
        name: "Pyrénées-Atlantiques",
        iso2: "64",
      },
      {
        name: "Pyrénées-Orientales",
        iso2: "66",
      },
      {
        name: "Rhône",
        iso2: "69",
      },
      {
        name: "Saint-Barthélemy",
        iso2: "BL",
      },
      {
        name: "Saint-Martin",
        iso2: "MF",
      },
      {
        name: "Saint Pierre and Miquelon",
        iso2: "PM",
      },
      {
        name: "Saône-et-Loire",
        iso2: "71",
      },
      {
        name: "Sarthe",
        iso2: "72",
      },
      {
        name: "Savoie",
        iso2: "73",
      },
      {
        name: "Seine-et-Marne",
        iso2: "77",
      },
      {
        name: "Seine-Maritime",
        iso2: "76",
      },
      {
        name: "Seine-Saint-Denis",
        iso2: "93",
      },
      {
        name: "Somme",
        iso2: "80",
      },
      {
        name: "Tarn",
        iso2: "81",
      },
      {
        name: "Tarn-et-Garonne",
        iso2: "82",
      },
      {
        name: "Territoire de Belfort",
        iso2: "90",
      },
      {
        name: "Val-de-Marne",
        iso2: "94",
      },
      {
        name: "Val-d'Oise",
        iso2: "95",
      },
      {
        name: "Var",
        iso2: "83",
      },
      {
        name: "Vaucluse",
        iso2: "84",
      },
      {
        name: "Vendée",
        iso2: "85",
      },
      {
        name: "Vienne",
        iso2: "86",
      },
      {
        name: "Vosges",
        iso2: "88",
      },
      {
        name: "Wallis and Futuna",
        iso2: "WF",
      },
      {
        name: "Yonne",
        iso2: "89",
      },
      {
        name: "Yvelines",
        iso2: "78",
      },
    ],
    legal_age: 15,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "French Guiana",
    iso2: "GF",
    states: [
      {
        name: "French Guiana",
        iso2: "GF",
      },
    ],
    legal_age: 15,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "French Polynesia",
    iso2: "PF",
    states: [
      {
        name: "French Polynesia",
        iso2: "PF",
      },
    ],
    legal_age: 15,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "French Southern Territories",
    iso2: "TF",
    states: [
      {
        name: "French Southern Territories",
        iso2: "TF",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Gabon",
    iso2: "GA",
    states: [
      {
        name: "Estuaire",
        iso2: "1",
      },
      {
        name: "Haut-Ogooué",
        iso2: "2",
      },
      {
        name: "Moyen-Ogooué",
        iso2: "3",
      },
      {
        name: "Ngounié",
        iso2: "4",
      },
      {
        name: "Nyanga",
        iso2: "5",
      },
      {
        name: "Ogooué-Ivindo",
        iso2: "6",
      },
      {
        name: "Ogooué-Lolo",
        iso2: "7",
      },
      {
        name: "Ogooué-Maritime",
        iso2: "8",
      },
      {
        name: "Woleu-Ntem",
        iso2: "9",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Georgia",
    iso2: "GE",
    states: [
      {
        name: "Abkhazia",
        iso2: "AB",
      },
      {
        name: "Adjara",
        iso2: "AJ",
      },
      {
        name: "Guria",
        iso2: "GU",
      },
      {
        name: "Imereti",
        iso2: "IM",
      },
      {
        name: "Kakheti",
        iso2: "KA",
      },
      {
        name: "Khelvachauri",
        iso2: "29",
      },
      {
        name: "Kvemo Kartli",
        iso2: "KK",
      },
      {
        name: "Mtskheta-Mtianeti",
        iso2: "MM",
      },
      {
        name: "Racha-Lechkhumi and Kvemo Svaneti",
        iso2: "RL",
      },
      {
        name: "Samegrelo-Zemo Svaneti",
        iso2: "SZ",
      },
      {
        name: "Samtskhe-Javakheti",
        iso2: "SJ",
      },
      {
        name: "Senaki",
        iso2: "50",
      },
      {
        name: "Shida Kartli",
        iso2: "SK",
      },
      {
        name: "Tbilisi",
        iso2: "TB",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Germany",
    iso2: "DE",
    states: [
      {
        name: "Baden-Württemberg",
        iso2: "BW",
      },
      {
        name: "Bavaria",
        iso2: "BY",
      },
      {
        name: "Berlin",
        iso2: "BE",
      },
      {
        name: "Brandenburg",
        iso2: "BB",
      },
      {
        name: "Bremen",
        iso2: "HB",
      },
      {
        name: "Hamburg",
        iso2: "HH",
      },
      {
        name: "Hessen",
        iso2: "HE",
      },
      {
        name: "Lower Saxony",
        iso2: "NI",
      },
      {
        name: "Mecklenburg-Vorpommern",
        iso2: "MV",
      },
      {
        name: "North Rhine-Westphalia",
        iso2: "NW",
      },
      {
        name: "Rhineland-Palatinate",
        iso2: "RP",
      },
      {
        name: "Saarland",
        iso2: "SL",
      },
      {
        name: "Saxony",
        iso2: "SN",
      },
      {
        name: "Saxony-Anhalt",
        iso2: "ST",
      },
      {
        name: "Schleswig-Holstein",
        iso2: "SH",
      },
      {
        name: "Thuringia",
        iso2: "TH",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Ghana",
    iso2: "GH",
    states: [
      {
        name: "Ahafo",
        iso2: "AF",
      },
      {
        name: "Ashanti",
        iso2: "AH",
      },
      {
        name: "Bono",
        iso2: "BO",
      },
      {
        name: "Bono East",
        iso2: "BE",
      },
      {
        name: "Central",
        iso2: "CP",
      },
      {
        name: "Eastern",
        iso2: "EP",
      },
      {
        name: "Greater Accra",
        iso2: "AA",
      },
      {
        name: "North East",
        iso2: "NE",
      },
      {
        name: "Northern",
        iso2: "NP",
      },
      {
        name: "Oti",
        iso2: "OT",
      },
      {
        name: "Savannah",
        iso2: "SV",
      },
      {
        name: "Upper East",
        iso2: "UE",
      },
      {
        name: "Upper West",
        iso2: "UW",
      },
      {
        name: "Volta",
        iso2: "TV",
      },
      {
        name: "Western",
        iso2: "WP",
      },
      {
        name: "Western North",
        iso2: "WN",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Gibraltar",
    iso2: "GI",
    states: [
      {
        name: "Gibraltar",
        iso2: "GI",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Greece",
    iso2: "GR",
    states: [
      {
        name: "Achaea",
        iso2: "13",
      },
      {
        name: "Aetolia-Acarnania",
        iso2: "01",
      },
      {
        name: "Arcadia",
        iso2: "12",
      },
      {
        name: "Argolis",
        iso2: "11",
      },
      {
        name: "Attica",
        iso2: "I",
      },
      {
        name: "Boeotia",
        iso2: "03",
      },
      {
        name: "Central Greece",
        iso2: "H",
      },
      {
        name: "Central Macedonia",
        iso2: "B",
      },
      {
        name: "Chania",
        iso2: "94",
      },
      {
        name: "Corfu",
        iso2: "22",
      },
      {
        name: "Corinthia",
        iso2: "15",
      },
      {
        name: "Crete",
        iso2: "M",
      },
      {
        name: "Drama",
        iso2: "52",
      },
      {
        name: "East Attica",
        iso2: "A2",
      },
      {
        name: "East Macedonia and Thrace",
        iso2: "A",
      },
      {
        name: "Epirus",
        iso2: "D",
      },
      {
        name: "Euboea",
        iso2: "04",
      },
      {
        name: "Grevena",
        iso2: "51",
      },
      {
        name: "Imathia ",
        iso2: "53",
      },
      {
        name: "Ioannina",
        iso2: "33",
      },
      {
        name: "Ionian Islands",
        iso2: "F",
      },
      {
        name: "Karditsa",
        iso2: "41",
      },
      {
        name: "Kastoria",
        iso2: "56",
      },
      {
        name: "Kefalonia",
        iso2: "23",
      },
      {
        name: "Kilkis",
        iso2: "57",
      },
      {
        name: "Kozani",
        iso2: "58",
      },
      {
        name: "Laconia",
        iso2: "16",
      },
      {
        name: "Larissa",
        iso2: "42",
      },
      {
        name: "Lefkada",
        iso2: "24",
      },
      {
        name: "Pella",
        iso2: "59",
      },
      {
        name: "Peloponnese",
        iso2: "J",
      },
      {
        name: "Phthiotis",
        iso2: "06",
      },
      {
        name: "Preveza",
        iso2: "34",
      },
      {
        name: "Serres",
        iso2: "62",
      },
      {
        name: "South Aegean",
        iso2: "L",
      },
      {
        name: "Thessaloniki",
        iso2: "54",
      },
      {
        name: "West Greece",
        iso2: "G",
      },
      {
        name: "West Macedonia",
        iso2: "C",
      },
    ],
    legal_age: 15,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Greenland",
    iso2: "GL",
    states: [
      {
        name: "Greenland",
        iso2: "GL",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Grenada",
    iso2: "GD",
    states: [
      {
        name: "Carriacou",
        iso2: "10",
      },
      {
        name: "Saint Andrew",
        iso2: "01",
      },
      {
        name: "Saint David",
        iso2: "02",
      },
      {
        name: "Saint George",
        iso2: "03",
      },
      {
        name: "Saint John",
        iso2: "04",
      },
      {
        name: "Saint Mark",
        iso2: "05",
      },
      {
        name: "Saint Patrick",
        iso2: "06",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Guadeloupe",
    iso2: "GP",
    states: [
      {
        name: "Guadeloupe",
        iso2: "GP",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Guam",
    iso2: "GU",
    states: [
      {
        name: "Guam",
        iso2: "GU",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Guatemala",
    iso2: "GT",
    states: [
      {
        name: "Alta Verapaz ",
        iso2: "16",
      },
      {
        name: "Baja Verapaz ",
        iso2: "15",
      },
      {
        name: "Chimaltenango ",
        iso2: "04",
      },
      {
        name: "Chiquimula ",
        iso2: "20",
      },
      {
        name: "El Progreso ",
        iso2: "02",
      },
      {
        name: "Escuintla ",
        iso2: "05",
      },
      {
        name: "Guatemala ",
        iso2: "01",
      },
      {
        name: "Huehuetenango ",
        iso2: "13",
      },
      {
        name: "Izabal ",
        iso2: "18",
      },
      {
        name: "Jalapa ",
        iso2: "21",
      },
      {
        name: "Jutiapa ",
        iso2: "22",
      },
      {
        name: "Petén ",
        iso2: "17",
      },
      {
        name: "Quetzaltenango ",
        iso2: "09",
      },
      {
        name: "Quiché ",
        iso2: "14",
      },
      {
        name: "Retalhuleu ",
        iso2: "11",
      },
      {
        name: "Sacatepéquez ",
        iso2: "03",
      },
      {
        name: "San Marcos ",
        iso2: "12",
      },
      {
        name: "Santa Rosa ",
        iso2: "06",
      },
      {
        name: "Sololá ",
        iso2: "07",
      },
      {
        name: "Suchitepéquez ",
        iso2: "10",
      },
      {
        name: "Totonicapán ",
        iso2: "08",
      },
      {
        name: "Zacapa",
        iso2: "19",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Guernsey and Alderney",
    iso2: "GG",
    states: [
      {
        name: "Guernsey and Alderney",
        iso2: "GG",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Guinea",
    iso2: "GN",
    states: [
      {
        name: "Beyla",
        iso2: "BE",
      },
      {
        name: "Boffa",
        iso2: "BF",
      },
      {
        name: "Boké",
        iso2: "BK",
      },
      {
        name: "Boké",
        iso2: "B",
      },
      {
        name: "Conakry",
        iso2: "C",
      },
      {
        name: "Coyah",
        iso2: "CO",
      },
      {
        name: "Dabola",
        iso2: "DB",
      },
      {
        name: "Dalaba",
        iso2: "DL",
      },
      {
        name: "Dinguiraye",
        iso2: "DI",
      },
      {
        name: "Dubréka",
        iso2: "DU",
      },
      {
        name: "Faranah",
        iso2: "FA",
      },
      {
        name: "Forécariah",
        iso2: "FO",
      },
      {
        name: "Fria",
        iso2: "FR",
      },
      {
        name: "Gaoual",
        iso2: "GA",
      },
      {
        name: "Guéckédou",
        iso2: "GU",
      },
      {
        name: "Kankan",
        iso2: "KA",
      },
      {
        name: "Kankan",
        iso2: "K",
      },
      {
        name: "Kérouané",
        iso2: "KE",
      },
      {
        name: "Kindia",
        iso2: "D",
      },
      {
        name: "Kindia",
        iso2: "KD",
      },
      {
        name: "Kissidougou",
        iso2: "KS",
      },
      {
        name: "Koubia",
        iso2: "KB",
      },
      {
        name: "Koundara",
        iso2: "KN",
      },
      {
        name: "Kouroussa",
        iso2: "KO",
      },
      {
        name: "Labé",
        iso2: "LA",
      },
      {
        name: "Labé",
        iso2: "L",
      },
      {
        name: "Lélouma",
        iso2: "LE",
      },
      {
        name: "Lola",
        iso2: "LO",
      },
      {
        name: "Macenta",
        iso2: "MC",
      },
      {
        name: "Mali",
        iso2: "ML",
      },
      {
        name: "Mamou",
        iso2: "MM",
      },
      {
        name: "Mamou",
        iso2: "M",
      },
      {
        name: "Mandiana",
        iso2: "MD",
      },
      {
        name: "Nzérékoré",
        iso2: "NZ",
      },
      {
        name: "Nzérékoré",
        iso2: "N",
      },
      {
        name: "Pita",
        iso2: "PI",
      },
      {
        name: "Siguiri",
        iso2: "SI",
      },
      {
        name: "Télimélé",
        iso2: "TE",
      },
      {
        name: "Tougué",
        iso2: "TO",
      },
      {
        name: "Yomou",
        iso2: "YO",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Guinea-Bissau",
    iso2: "GW",
    states: [
      {
        name: "Bafatá",
        iso2: "BA",
      },
      {
        name: "Biombo",
        iso2: "BM",
      },
      {
        name: "Bolama",
        iso2: "BL",
      },
      {
        name: "Cacheu",
        iso2: "CA",
      },
      {
        name: "Gabú",
        iso2: "GA",
      },
      {
        name: "Leste",
        iso2: "L",
      },
      {
        name: "Norte",
        iso2: "N",
      },
      {
        name: "Oio",
        iso2: "OI",
      },
      {
        name: "Quinara",
        iso2: "QU",
      },
      {
        name: "Sul",
        iso2: "S",
      },
      {
        name: "Tombali",
        iso2: "TO",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Guyana",
    iso2: "GY",
    states: [
      {
        name: "Barima-Waini",
        iso2: "BA",
      },
      {
        name: "Cuyuni-Mazaruni",
        iso2: "CU",
      },
      {
        name: "Demerara-Mahaica",
        iso2: "DE",
      },
      {
        name: "East Berbice-Corentyne",
        iso2: "EB",
      },
      {
        name: "Essequibo Islands-West Demerara",
        iso2: "ES",
      },
      {
        name: "Mahaica-Berbice",
        iso2: "MA",
      },
      {
        name: "Pomeroon-Supenaam",
        iso2: "PM",
      },
      {
        name: "Potaro-Siparuni",
        iso2: "PT",
      },
      {
        name: "Upper Demerara-Berbice",
        iso2: "UD",
      },
      {
        name: "Upper Takutu-Upper Essequibo",
        iso2: "UT",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Haiti",
    iso2: "HT",
    states: [
      {
        name: "Artibonite",
        iso2: "AR",
      },
      {
        name: "Centre",
        iso2: "CE",
      },
      {
        name: "Grand'Anse",
        iso2: "GA",
      },
      {
        name: "Nippes",
        iso2: "NI",
      },
      {
        name: "Nord",
        iso2: "ND",
      },
      {
        name: "Nord-Est",
        iso2: "NE",
      },
      {
        name: "Nord-Ouest",
        iso2: "NO",
      },
      {
        name: "Ouest",
        iso2: "OU",
      },
      {
        name: "Sud",
        iso2: "SD",
      },
      {
        name: "Sud-Est",
        iso2: "SE",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Heard Island and McDonald Islands",
    iso2: "HM",
    states: [
      {
        name: "Heard Island and McDonald Islands",
        iso2: "HM",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Honduras",
    iso2: "HN",
    states: [
      {
        name: "Atlántida",
        iso2: "AT",
      },
      {
        name: "Bay Islands",
        iso2: "IB",
      },
      {
        name: "Choluteca",
        iso2: "CH",
      },
      {
        name: "Colón",
        iso2: "CL",
      },
      {
        name: "Comayagua",
        iso2: "CM",
      },
      {
        name: "Copán",
        iso2: "CP",
      },
      {
        name: "Cortés",
        iso2: "CR",
      },
      {
        name: "El Paraíso",
        iso2: "EP",
      },
      {
        name: "Francisco Morazán",
        iso2: "FM",
      },
      {
        name: "Gracias a Dios",
        iso2: "GD",
      },
      {
        name: "Intibucá",
        iso2: "IN",
      },
      {
        name: "La Paz",
        iso2: "LP",
      },
      {
        name: "Lempira",
        iso2: "LE",
      },
      {
        name: "Ocotepeque",
        iso2: "OC",
      },
      {
        name: "Olancho",
        iso2: "OL",
      },
      {
        name: "Santa Bárbara",
        iso2: "SB",
      },
      {
        name: "Valle",
        iso2: "VA",
      },
      {
        name: "Yoro",
        iso2: "YO",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Hong Kong S.A.R.",
    iso2: "HK",
    states: [
      {
        name: "Central and Western",
        iso2: "HCW",
      },
      {
        name: "Eastern",
        iso2: "HEA",
      },
      {
        name: "Islands",
        iso2: "NIS",
      },
      {
        name: "Kowloon City",
        iso2: "KKC",
      },
      {
        name: "Kwai Tsing",
        iso2: "NKT",
      },
      {
        name: "Kwun Tong",
        iso2: "KKT",
      },
      {
        name: "North",
        iso2: "NNO",
      },
      {
        name: "Sai Kung",
        iso2: "NSK",
      },
      {
        name: "Sham Shui Po",
        iso2: "KSS",
      },
      {
        name: "Sha Tin",
        iso2: "NST",
      },
      {
        name: "Southern",
        iso2: "HSO",
      },
      {
        name: "Tai Po",
        iso2: "NTP",
      },
      {
        name: "Tsuen Wan",
        iso2: "NTW",
      },
      {
        name: "Tuen Mun",
        iso2: "NTM",
      },
      {
        name: "Wan Chai",
        iso2: "HWC",
      },
      {
        name: "Wong Tai Sin",
        iso2: "KWT",
      },
      {
        name: "Yau Tsim Mong",
        iso2: "KYT",
      },
      {
        name: "Yuen Long",
        iso2: "NYL",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Hungary",
    iso2: "HU",
    states: [
      {
        name: "Bács-Kiskun",
        iso2: "BK",
      },
      {
        name: "Baranya",
        iso2: "BA",
      },
      {
        name: "Békés",
        iso2: "BE",
      },
      {
        name: "Békéscsaba",
        iso2: "BC",
      },
      {
        name: "Borsod-Abaúj-Zemplén",
        iso2: "BZ",
      },
      {
        name: "Budapest",
        iso2: "BU",
      },
      {
        name: "Csongrád County",
        iso2: "CS",
      },
      {
        name: "Debrecen",
        iso2: "DE",
      },
      {
        name: "Dunaújváros",
        iso2: "DU",
      },
      {
        name: "Eger",
        iso2: "EG",
      },
      {
        name: "Érd",
        iso2: "ER",
      },
      {
        name: "Fejér County",
        iso2: "FE",
      },
      {
        name: "Győr",
        iso2: "GY",
      },
      {
        name: "Győr-Moson-Sopron County",
        iso2: "GS",
      },
      {
        name: "Hajdú-Bihar County",
        iso2: "HB",
      },
      {
        name: "Heves County",
        iso2: "HE",
      },
      {
        name: "Hódmezővásárhely",
        iso2: "HV",
      },
      {
        name: "Jász-Nagykun-Szolnok County",
        iso2: "JN",
      },
      {
        name: "Kaposvár",
        iso2: "KV",
      },
      {
        name: "Kecskemét",
        iso2: "KM",
      },
      {
        name: "Komárom-Esztergom",
        iso2: "KE",
      },
      {
        name: "Miskolc",
        iso2: "MI",
      },
      {
        name: "Nagykanizsa",
        iso2: "NK",
      },
      {
        name: "Nógrád County",
        iso2: "NO",
      },
      {
        name: "Nyíregyháza",
        iso2: "NY",
      },
      {
        name: "Pécs",
        iso2: "PS",
      },
      {
        name: "Pest County",
        iso2: "PE",
      },
      {
        name: "Salgótarján",
        iso2: "ST",
      },
      {
        name: "Somogy County",
        iso2: "SO",
      },
      {
        name: "Sopron",
        iso2: "SN",
      },
      {
        name: "Szabolcs-Szatmár-Bereg County",
        iso2: "SZ",
      },
      {
        name: "Szeged",
        iso2: "SD",
      },
      {
        name: "Székesfehérvár",
        iso2: "SF",
      },
      {
        name: "Szekszárd",
        iso2: "SS",
      },
      {
        name: "Szolnok",
        iso2: "SK",
      },
      {
        name: "Szombathely",
        iso2: "SH",
      },
      {
        name: "Tatabánya",
        iso2: "TB",
      },
      {
        name: "Tolna County",
        iso2: "TO",
      },
      {
        name: "Vas County",
        iso2: "VA",
      },
      {
        name: "Veszprém",
        iso2: "VM",
      },
      {
        name: "Veszprém County",
        iso2: "VE",
      },
      {
        name: "Zala County",
        iso2: "ZA",
      },
      {
        name: "Zalaegerszeg",
        iso2: "ZE",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Iceland",
    iso2: "IS",
    states: [
      {
        name: "Capital",
        iso2: "1",
      },
      {
        name: "Eastern",
        iso2: "7",
      },
      {
        name: "Northeastern",
        iso2: "6",
      },
      {
        name: "Northwestern",
        iso2: "5",
      },
      {
        name: "Southern",
        iso2: "8",
      },
      {
        name: "Southern Peninsula",
        iso2: "2",
      },
      {
        name: "Western",
        iso2: "3",
      },
      {
        name: "Westfjords",
        iso2: "4",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "India",
    iso2: "IN",
    states: [
      {
        name: "Andaman and Nicobar Islands",
        iso2: "AN",
      },
      {
        name: "Andhra Pradesh",
        iso2: "AP",
      },
      {
        name: "Arunachal Pradesh",
        iso2: "AR",
      },
      {
        name: "Assam",
        iso2: "AS",
      },
      {
        name: "Bihar",
        iso2: "BR",
      },
      {
        name: "Chandigarh",
        iso2: "CH",
      },
      {
        name: "Chhattisgarh",
        iso2: "CT",
      },
      {
        name: "Dadra and Nagar Haveli and Daman and Diu",
        iso2: "DH",
      },
      {
        name: "Delhi",
        iso2: "DL",
      },
      {
        name: "Goa",
        iso2: "GA",
      },
      {
        name: "Gujarat",
        iso2: "GJ",
      },
      {
        name: "Haryana",
        iso2: "HR",
      },
      {
        name: "Himachal Pradesh",
        iso2: "HP",
      },
      {
        name: "Jammu and Kashmir",
        iso2: "JK",
      },
      {
        name: "Jharkhand",
        iso2: "JH",
      },
      {
        name: "Karnataka",
        iso2: "KA",
      },
      {
        name: "Kerala",
        iso2: "KL",
      },
      {
        name: "Ladakh",
        iso2: "LA",
      },
      {
        name: "Lakshadweep",
        iso2: "LD",
      },
      {
        name: "Madhya Pradesh",
        iso2: "MP",
      },
      {
        name: "Maharashtra",
        iso2: "MH",
      },
      {
        name: "Manipur",
        iso2: "MN",
      },
      {
        name: "Meghalaya",
        iso2: "ML",
      },
      {
        name: "Mizoram",
        iso2: "MZ",
      },
      {
        name: "Nagaland",
        iso2: "NL",
      },
      {
        name: "Odisha",
        iso2: "OR",
      },
      {
        name: "Puducherry",
        iso2: "PY",
      },
      {
        name: "Punjab",
        iso2: "PB",
      },
      {
        name: "Rajasthan",
        iso2: "RJ",
      },
      {
        name: "Sikkim",
        iso2: "SK",
      },
      {
        name: "Tamil Nadu",
        iso2: "TN",
      },
      {
        name: "Telangana",
        iso2: "TG",
      },
      {
        name: "Tripura",
        iso2: "TR",
      },
      {
        name: "Uttarakhand",
        iso2: "UK",
      },
      {
        name: "Uttar Pradesh",
        iso2: "UP",
      },
      {
        name: "West Bengal",
        iso2: "WB",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Indonesia",
    iso2: "ID",
    states: [
      {
        name: "Aceh",
        iso2: "AC",
      },
      {
        name: "Bali",
        iso2: "BA",
      },
      {
        name: "Banten",
        iso2: "BT",
      },
      {
        name: "Bengkulu",
        iso2: "BE",
      },
      {
        name: "DI Yogyakarta",
        iso2: "YO",
      },
      {
        name: "DKI Jakarta",
        iso2: "JK",
      },
      {
        name: "Gorontalo",
        iso2: "GO",
      },
      {
        name: "Jambi",
        iso2: "JA",
      },
      {
        name: "Jawa Barat",
        iso2: "JB",
      },
      {
        name: "Jawa Tengah",
        iso2: "JT",
      },
      {
        name: "Jawa Timur",
        iso2: "JI",
      },
      {
        name: "Kalimantan Barat",
        iso2: "KB",
      },
      {
        name: "Kalimantan Selatan",
        iso2: "KS",
      },
      {
        name: "Kalimantan Tengah",
        iso2: "KT",
      },
      {
        name: "Kalimantan Timur",
        iso2: "KI",
      },
      {
        name: "Kalimantan Utara",
        iso2: "KU",
      },
      {
        name: "Kepulauan Bangka Belitung",
        iso2: "BB",
      },
      {
        name: "Kepulauan Riau",
        iso2: "KR",
      },
      {
        name: "Lampung",
        iso2: "LA",
      },
      {
        name: "Maluku",
        iso2: "MA",
      },
      {
        name: "Maluku Utara",
        iso2: "MU",
      },
      {
        name: "Nusa Tenggara Barat",
        iso2: "NB",
      },
      {
        name: "Nusa Tenggara Timur",
        iso2: "NT",
      },
      {
        name: "Papua",
        iso2: "PA",
      },
      {
        name: "Papua Barat",
        iso2: "PB",
      },
      {
        name: "Papua Barat Daya",
        iso2: "PD",
      },
      {
        name: "Papua Pegunungan",
        iso2: "PE",
      },
      {
        name: "Papua Selatan",
        iso2: "PS",
      },
      {
        name: "Papua Tengah",
        iso2: "PT",
      },
      {
        name: "Riau",
        iso2: "RI",
      },
      {
        name: "Sulawesi Barat",
        iso2: "SR",
      },
      {
        name: "Sulawesi Selatan",
        iso2: "SN",
      },
      {
        name: "Sulawesi Tengah",
        iso2: "ST",
      },
      {
        name: "Sulawesi Tenggara",
        iso2: "SG",
      },
      {
        name: "Sulawesi Utara",
        iso2: "SA",
      },
      {
        name: "Sumatera Barat",
        iso2: "SB",
      },
      {
        name: "Sumatera Selatan",
        iso2: "SS",
      },
      {
        name: "Sumatera Utara",
        iso2: "SU",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Iran",
    iso2: "IR",
    states: [
      {
        name: "Alborz",
        iso2: "30",
      },
      {
        name: "Ardabil",
        iso2: "24",
      },
      {
        name: "Bushehr",
        iso2: "18",
      },
      {
        name: "Chaharmahal and Bakhtiari",
        iso2: "14",
      },
      {
        name: "East Azerbaijan",
        iso2: "03",
      },
      {
        name: "Fars",
        iso2: "07",
      },
      {
        name: "Gilan",
        iso2: "01",
      },
      {
        name: "Golestan",
        iso2: "27",
      },
      {
        name: "Hamadan",
        iso2: "13",
      },
      {
        name: "Hormozgan",
        iso2: "22",
      },
      {
        name: "Ilam",
        iso2: "16",
      },
      {
        name: "Isfahan",
        iso2: "10",
      },
      {
        name: "Kerman",
        iso2: "08",
      },
      {
        name: "Kermanshah",
        iso2: "05",
      },
      {
        name: "Khuzestan",
        iso2: "06",
      },
      {
        name: "Kohgiluyeh and Boyer-Ahmad",
        iso2: "17",
      },
      {
        name: "Kurdistan",
        iso2: "12",
      },
      {
        name: "Lorestan",
        iso2: "15",
      },
      {
        name: "Markazi",
        iso2: "00",
      },
      {
        name: "Mazandaran",
        iso2: "02",
      },
      {
        name: "North Khorasan",
        iso2: "28",
      },
      {
        name: "Qazvin",
        iso2: "26",
      },
      {
        name: "Qom",
        iso2: "25",
      },
      {
        name: "Razavi Khorasan",
        iso2: "09",
      },
      {
        name: "Semnan",
        iso2: "20",
      },
      {
        name: "Sistan and Baluchestan",
        iso2: "11",
      },
      {
        name: "South Khorasan",
        iso2: "29",
      },
      {
        name: "Tehran",
        iso2: "23",
      },
      {
        name: "West Azarbaijan",
        iso2: "04",
      },
      {
        name: "Yazd",
        iso2: "21",
      },
      {
        name: "Zanjan",
        iso2: "19",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "INACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Iraq",
    iso2: "IQ",
    states: [
      {
        name: "Al Anbar",
        iso2: "AN",
      },
      {
        name: "Al Muthanna",
        iso2: "MU",
      },
      {
        name: "Al-Qādisiyyah",
        iso2: "QA",
      },
      {
        name: "Babylon",
        iso2: "BB",
      },
      {
        name: "Baghdad",
        iso2: "BG",
      },
      {
        name: "Basra",
        iso2: "BA",
      },
      {
        name: "Dhi Qar",
        iso2: "DQ",
      },
      {
        name: "Diyala",
        iso2: "DI",
      },
      {
        name: "Dohuk",
        iso2: "DA",
      },
      {
        name: "Erbil",
        iso2: "AR",
      },
      {
        name: "Karbala",
        iso2: "KA",
      },
      {
        name: "Kirkuk",
        iso2: "KI",
      },
      {
        name: "Maysan",
        iso2: "MA",
      },
      {
        name: "Najaf",
        iso2: "NA",
      },
      {
        name: "Nineveh",
        iso2: "NI",
      },
      {
        name: "Saladin",
        iso2: "SD",
      },
      {
        name: "Sulaymaniyah",
        iso2: "SU",
      },
      {
        name: "Wasit",
        iso2: "WA",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Ireland",
    iso2: "IE",
    states: [
      {
        name: "Carlow",
        iso2: "CW",
      },
      {
        name: "Cavan",
        iso2: "CN",
      },
      {
        name: "Clare",
        iso2: "CE",
      },
      {
        name: "Connacht",
        iso2: "C",
      },
      {
        name: "Cork",
        iso2: "CO",
      },
      {
        name: "Donegal",
        iso2: "DL",
      },
      {
        name: "Dublin",
        iso2: "D",
      },
      {
        name: "Galway",
        iso2: "G",
      },
      {
        name: "Kerry",
        iso2: "KY",
      },
      {
        name: "Kildare",
        iso2: "KE",
      },
      {
        name: "Kilkenny",
        iso2: "KK",
      },
      {
        name: "Laois",
        iso2: "LS",
      },
      {
        name: "Leinster",
        iso2: "L",
      },
      {
        name: "Limerick",
        iso2: "LK",
      },
      {
        name: "Longford",
        iso2: "LD",
      },
      {
        name: "Louth",
        iso2: "LH",
      },
      {
        name: "Mayo",
        iso2: "MO",
      },
      {
        name: "Meath",
        iso2: "MH",
      },
      {
        name: "Monaghan",
        iso2: "MN",
      },
      {
        name: "Munster",
        iso2: "M",
      },
      {
        name: "Offaly",
        iso2: "OY",
      },
      {
        name: "Roscommon",
        iso2: "RN",
      },
      {
        name: "Sligo",
        iso2: "SO",
      },
      {
        name: "Tipperary",
        iso2: "TA",
      },
      {
        name: "Ulster",
        iso2: "U",
      },
      {
        name: "Waterford",
        iso2: "WD",
      },
      {
        name: "Westmeath",
        iso2: "WH",
      },
      {
        name: "Wexford",
        iso2: "WX",
      },
      {
        name: "Wicklow",
        iso2: "WW",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Israel",
    iso2: "IL",
    states: [
      {
        name: "Central",
        iso2: "M",
      },
      {
        name: "Haifa",
        iso2: "HA",
      },
      {
        name: "Jerusalem",
        iso2: "JM",
      },
      {
        name: "Northern",
        iso2: "Z",
      },
      {
        name: "Southern",
        iso2: "D",
      },
      {
        name: "Tel Aviv",
        iso2: "TA",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Italy",
    iso2: "IT",
    states: [
      {
        name: "Abruzzo",
        iso2: "65",
      },
      {
        name: "Agrigento",
        iso2: "AG",
      },
      {
        name: "Alessandria",
        iso2: "AL",
      },
      {
        name: "Ancona",
        iso2: "AN",
      },
      {
        name: "Aosta Valley",
        iso2: "23",
      },
      {
        name: "Apulia",
        iso2: "75",
      },
      {
        name: "Ascoli Piceno",
        iso2: "AP",
      },
      {
        name: "Asti",
        iso2: "AT",
      },
      {
        name: "Avellino",
        iso2: "AV",
      },
      {
        name: "Barletta-Andria-Trani",
        iso2: "BT",
      },
      {
        name: "Basilicata",
        iso2: "77",
      },
      {
        name: "Belluno",
        iso2: "BL",
      },
      {
        name: "Benevento",
        iso2: "BN",
      },
      {
        name: "Bergamo",
        iso2: "BG",
      },
      {
        name: "Biella",
        iso2: "BI",
      },
      {
        name: "Brescia",
        iso2: "BS",
      },
      {
        name: "Brindisi",
        iso2: "BR",
      },
      {
        name: "Calabria",
        iso2: "78",
      },
      {
        name: "Caltanissetta",
        iso2: "CL",
      },
      {
        name: "Campania",
        iso2: "72",
      },
      {
        name: "Campobasso",
        iso2: "CB",
      },
      {
        name: "Caserta",
        iso2: "CE",
      },
      {
        name: "Catanzaro",
        iso2: "CZ",
      },
      {
        name: "Chieti",
        iso2: "CH",
      },
      {
        name: "Como",
        iso2: "CO",
      },
      {
        name: "Cosenza",
        iso2: "CS",
      },
      {
        name: "Cremona",
        iso2: "CR",
      },
      {
        name: "Crotone",
        iso2: "KR",
      },
      {
        name: "Cuneo",
        iso2: "CN",
      },
      {
        name: "Emilia-Romagna",
        iso2: "45",
      },
      {
        name: "Enna",
        iso2: "EN",
      },
      {
        name: "Fermo",
        iso2: "FM",
      },
      {
        name: "Ferrara",
        iso2: "FE",
      },
      {
        name: "Foggia",
        iso2: "FG",
      },
      {
        name: "Forlì-Cesena",
        iso2: "FC",
      },
      {
        name: "Friuli–Venezia Giulia",
        iso2: "36",
      },
      {
        name: "Frosinone",
        iso2: "FR",
      },
      {
        name: "Gorizia",
        iso2: "GO",
      },
      {
        name: "Grosseto",
        iso2: "GR",
      },
      {
        name: "Imperia",
        iso2: "IM",
      },
      {
        name: "Isernia",
        iso2: "IS",
      },
      {
        name: "L'Aquila",
        iso2: "AQ",
      },
      {
        name: "La Spezia",
        iso2: "SP",
      },
      {
        name: "Latina",
        iso2: "LT",
      },
      {
        name: "Lazio",
        iso2: "62",
      },
      {
        name: "Lecce",
        iso2: "LE",
      },
      {
        name: "Lecco",
        iso2: "LC",
      },
      {
        name: "Liguria",
        iso2: "42",
      },
      {
        name: "Livorno",
        iso2: "LI",
      },
      {
        name: "Lodi",
        iso2: "LO",
      },
      {
        name: "Lombardy",
        iso2: "25",
      },
      {
        name: "Lucca",
        iso2: "LU",
      },
      {
        name: "Macerata",
        iso2: "MC",
      },
      {
        name: "Mantua",
        iso2: "MN",
      },
      {
        name: "Marche",
        iso2: "57",
      },
      {
        name: "Massa and Carrara",
        iso2: "MS",
      },
      {
        name: "Matera",
        iso2: "MT",
      },
      {
        name: "Medio Campidano",
        iso2: "VS",
      },
      {
        name: "Modena",
        iso2: "MO",
      },
      {
        name: "Molise",
        iso2: "67",
      },
      {
        name: "Monza and Brianza",
        iso2: "MB",
      },
      {
        name: "Novara",
        iso2: "NO",
      },
      {
        name: "Nuoro",
        iso2: "NU",
      },
      {
        name: "Oristano",
        iso2: "OR",
      },
      {
        name: "Padua",
        iso2: "PD",
      },
      {
        name: "Palermo",
        iso2: "PA",
      },
      {
        name: "Parma",
        iso2: "PR",
      },
      {
        name: "Pavia",
        iso2: "PV",
      },
      {
        name: "Perugia",
        iso2: "PG",
      },
      {
        name: "Pesaro and Urbino",
        iso2: "PU",
      },
      {
        name: "Pescara",
        iso2: "PE",
      },
      {
        name: "Piacenza",
        iso2: "PC",
      },
      {
        name: "Piedmont",
        iso2: "21",
      },
      {
        name: "Pisa",
        iso2: "PI",
      },
      {
        name: "Pistoia",
        iso2: "PT",
      },
      {
        name: "Pordenone",
        iso2: "PN",
      },
      {
        name: "Potenza",
        iso2: "PZ",
      },
      {
        name: "Prato",
        iso2: "PO",
      },
      {
        name: "Ragusa",
        iso2: "RG",
      },
      {
        name: "Ravenna",
        iso2: "RA",
      },
      {
        name: "Reggio Emilia",
        iso2: "RE",
      },
      {
        name: "Rieti",
        iso2: "RI",
      },
      {
        name: "Rimini",
        iso2: "RN",
      },
      {
        name: "Rovigo",
        iso2: "RO",
      },
      {
        name: "Salerno",
        iso2: "SA",
      },
      {
        name: "Sardinia",
        iso2: "88",
      },
      {
        name: "Sassari",
        iso2: "SS",
      },
      {
        name: "Savona",
        iso2: "SV",
      },
      {
        name: "Sicily",
        iso2: "82",
      },
      {
        name: "Siena",
        iso2: "SI",
      },
      {
        name: "Siracusa",
        iso2: "SR",
      },
      {
        name: "Sondrio",
        iso2: "SO",
      },
      {
        name: "South Sardinia",
        iso2: "SU",
      },
      {
        name: "Taranto",
        iso2: "TA",
      },
      {
        name: "Teramo",
        iso2: "TE",
      },
      {
        name: "Terni",
        iso2: "TR",
      },
      {
        name: "Trapani",
        iso2: "TP",
      },
      {
        name: "Trentino-South Tyrol",
        iso2: "32",
      },
      {
        name: "Treviso",
        iso2: "TV",
      },
      {
        name: "Trieste",
        iso2: "TS",
      },
      {
        name: "Tuscany",
        iso2: "52",
      },
      {
        name: "Udine",
        iso2: "UD",
      },
      {
        name: "Umbria",
        iso2: "55",
      },
      {
        name: "Varese",
        iso2: "VA",
      },
      {
        name: "Veneto",
        iso2: "34",
      },
      {
        name: "Verbano-Cusio-Ossola",
        iso2: "VB",
      },
      {
        name: "Vercelli",
        iso2: "VC",
      },
      {
        name: "Verona",
        iso2: "VR",
      },
      {
        name: "Vibo Valentia",
        iso2: "VV",
      },
      {
        name: "Vicenza",
        iso2: "VI",
      },
      {
        name: "Viterbo",
        iso2: "VT",
      },
    ],
    legal_age: 14,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Jamaica",
    iso2: "JM",
    states: [
      {
        name: "Clarendon",
        iso2: "13",
      },
      {
        name: "Hanover",
        iso2: "09",
      },
      {
        name: "Kingston",
        iso2: "01",
      },
      {
        name: "Manchester",
        iso2: "12",
      },
      {
        name: "Portland",
        iso2: "04",
      },
      {
        name: "Saint Andrew",
        iso2: "02",
      },
      {
        name: "Saint Ann",
        iso2: "06",
      },
      {
        name: "Saint Catherine",
        iso2: "14",
      },
      {
        name: "Saint Elizabeth",
        iso2: "11",
      },
      {
        name: "Saint James",
        iso2: "08",
      },
      {
        name: "Saint Mary",
        iso2: "05",
      },
      {
        name: "Saint Thomas",
        iso2: "03",
      },
      {
        name: "Trelawny",
        iso2: "07",
      },
      {
        name: "Westmoreland",
        iso2: "10",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Japan",
    iso2: "JP",
    states: [
      {
        name: "Aichi",
        iso2: "23",
      },
      {
        name: "Akita",
        iso2: "05",
      },
      {
        name: "Aomori",
        iso2: "02",
      },
      {
        name: "Chiba",
        iso2: "12",
      },
      {
        name: "Ehime",
        iso2: "38",
      },
      {
        name: "Fukui",
        iso2: "18",
      },
      {
        name: "Fukuoka",
        iso2: "40",
      },
      {
        name: "Fukushima",
        iso2: "07",
      },
      {
        name: "Gifu",
        iso2: "21",
      },
      {
        name: "Gunma",
        iso2: "10",
      },
      {
        name: "Hiroshima",
        iso2: "34",
      },
      {
        name: "Hokkaidō",
        iso2: "01",
      },
      {
        name: "Hyōgo",
        iso2: "28",
      },
      {
        name: "Ibaraki",
        iso2: "08",
      },
      {
        name: "Ishikawa",
        iso2: "17",
      },
      {
        name: "Iwate",
        iso2: "03",
      },
      {
        name: "Kagawa",
        iso2: "37",
      },
      {
        name: "Kagoshima",
        iso2: "46",
      },
      {
        name: "Kanagawa",
        iso2: "14",
      },
      {
        name: "Kōchi",
        iso2: "39",
      },
      {
        name: "Kumamoto",
        iso2: "43",
      },
      {
        name: "Kyōto",
        iso2: "26",
      },
      {
        name: "Mie",
        iso2: "24",
      },
      {
        name: "Miyagi",
        iso2: "04",
      },
      {
        name: "Miyazaki",
        iso2: "45",
      },
      {
        name: "Nagano",
        iso2: "20",
      },
      {
        name: "Nagasaki",
        iso2: "42",
      },
      {
        name: "Nara",
        iso2: "29",
      },
      {
        name: "Niigata",
        iso2: "15",
      },
      {
        name: "Ōita",
        iso2: "44",
      },
      {
        name: "Okayama",
        iso2: "33",
      },
      {
        name: "Okinawa",
        iso2: "47",
      },
      {
        name: "Ōsaka",
        iso2: "27",
      },
      {
        name: "Saga",
        iso2: "41",
      },
      {
        name: "Saitama",
        iso2: "11",
      },
      {
        name: "Shiga",
        iso2: "25",
      },
      {
        name: "Shimane",
        iso2: "32",
      },
      {
        name: "Shizuoka",
        iso2: "22",
      },
      {
        name: "Tochigi",
        iso2: "09",
      },
      {
        name: "Tokushima",
        iso2: "36",
      },
      {
        name: "Tokyo",
        iso2: "13",
      },
      {
        name: "Tottori",
        iso2: "31",
      },
      {
        name: "Toyama",
        iso2: "16",
      },
      {
        name: "Wakayama",
        iso2: "30",
      },
      {
        name: "Yamagata",
        iso2: "06",
      },
      {
        name: "Yamaguchi",
        iso2: "35",
      },
      {
        name: "Yamanashi",
        iso2: "19",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE"],
  },
  {
    name: "Jersey",
    iso2: "JE",
    states: [
      {
        name: "Grouville",
        iso2: "01",
      },
      {
        name: "St Brelade",
        iso2: "02",
      },
      {
        name: "St Clement",
        iso2: "03",
      },
      {
        name: "St Helier",
        iso2: "04",
      },
      {
        name: "St John",
        iso2: "05",
      },
      {
        name: "St Lawrence",
        iso2: "06",
      },
      {
        name: "St Martin",
        iso2: "07",
      },
      {
        name: "St Mary",
        iso2: "08",
      },
      {
        name: "St Ouen",
        iso2: "09",
      },
      {
        name: "St Peter",
        iso2: "10",
      },
      {
        name: "St Saviour",
        iso2: "11",
      },
      {
        name: "Trinity",
        iso2: "12",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Jordan",
    iso2: "JO",
    states: [
      {
        name: "Ajloun",
        iso2: "AJ",
      },
      {
        name: "Amman",
        iso2: "AM",
      },
      {
        name: "Aqaba",
        iso2: "AQ",
      },
      {
        name: "Balqa",
        iso2: "BA",
      },
      {
        name: "Irbid",
        iso2: "IR",
      },
      {
        name: "Jerash",
        iso2: "JA",
      },
      {
        name: "Karak",
        iso2: "KA",
      },
      {
        name: "Ma'an",
        iso2: "MN",
      },
      {
        name: "Madaba",
        iso2: "MD",
      },
      {
        name: "Mafraq",
        iso2: "MA",
      },
      {
        name: "Tafilah",
        iso2: "AT",
      },
      {
        name: "Zarqa",
        iso2: "AZ",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Kazakhstan",
    iso2: "KZ",
    states: [
      {
        name: "Akmola",
        iso2: "AKM",
      },
      {
        name: "Aktobe",
        iso2: "AKT",
      },
      {
        name: "Almaty",
        iso2: "ALM",
      },
      {
        name: "Almaty",
        iso2: "ALA",
      },
      {
        name: "Astana",
        iso2: "AST",
      },
      {
        name: "Atyrau",
        iso2: "ATY",
      },
      {
        name: "Baikonur",
        iso2: "BAY",
      },
      {
        name: "East Kazakhstan",
        iso2: "VOS",
      },
      {
        name: "Jambyl",
        iso2: "ZHA",
      },
      {
        name: "Karaganda",
        iso2: "KAR",
      },
      {
        name: "Kostanay",
        iso2: "KUS",
      },
      {
        name: "Kyzylorda",
        iso2: "KZY",
      },
      {
        name: "Mangystau",
        iso2: "MAN",
      },
      {
        name: "North Kazakhstan",
        iso2: "SEV",
      },
      {
        name: "Pavlodar",
        iso2: "PAV",
      },
      {
        name: "Turkestan",
        iso2: "YUZ",
      },
      {
        name: "West Kazakhstan",
        iso2: "ZAP",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Kenya",
    iso2: "KE",
    states: [
      {
        name: "Baringo",
        iso2: "01",
      },
      {
        name: "Bomet",
        iso2: "02",
      },
      {
        name: "Bungoma",
        iso2: "03",
      },
      {
        name: "Busia",
        iso2: "04",
      },
      {
        name: "Elgeyo-Marakwet",
        iso2: "05",
      },
      {
        name: "Embu",
        iso2: "06",
      },
      {
        name: "Garissa",
        iso2: "07",
      },
      {
        name: "Homa Bay",
        iso2: "08",
      },
      {
        name: "Isiolo",
        iso2: "09",
      },
      {
        name: "Kajiado",
        iso2: "10",
      },
      {
        name: "Kakamega",
        iso2: "11",
      },
      {
        name: "Kericho",
        iso2: "12",
      },
      {
        name: "Kiambu",
        iso2: "13",
      },
      {
        name: "Kilifi",
        iso2: "14",
      },
      {
        name: "Kirinyaga",
        iso2: "15",
      },
      {
        name: "Kisii",
        iso2: "16",
      },
      {
        name: "Kisumu",
        iso2: "17",
      },
      {
        name: "Kitui",
        iso2: "18",
      },
      {
        name: "Kwale",
        iso2: "19",
      },
      {
        name: "Laikipia",
        iso2: "20",
      },
      {
        name: "Lamu",
        iso2: "21",
      },
      {
        name: "Machakos",
        iso2: "22",
      },
      {
        name: "Makueni",
        iso2: "23",
      },
      {
        name: "Mandera",
        iso2: "24",
      },
      {
        name: "Marsabit",
        iso2: "25",
      },
      {
        name: "Meru",
        iso2: "26",
      },
      {
        name: "Migori",
        iso2: "27",
      },
      {
        name: "Mombasa",
        iso2: "28",
      },
      {
        name: "Murang'a",
        iso2: "29",
      },
      {
        name: "Nairobi City",
        iso2: "30",
      },
      {
        name: "Nakuru",
        iso2: "31",
      },
      {
        name: "Nandi",
        iso2: "32",
      },
      {
        name: "Narok",
        iso2: "33",
      },
      {
        name: "Nyamira",
        iso2: "34",
      },
      {
        name: "Nyandarua",
        iso2: "35",
      },
      {
        name: "Nyeri",
        iso2: "36",
      },
      {
        name: "Samburu",
        iso2: "37",
      },
      {
        name: "Siaya",
        iso2: "38",
      },
      {
        name: "Taita–Taveta",
        iso2: "39",
      },
      {
        name: "Tana River",
        iso2: "40",
      },
      {
        name: "Tharaka-Nithi",
        iso2: "41",
      },
      {
        name: "Trans Nzoia",
        iso2: "42",
      },
      {
        name: "Turkana",
        iso2: "43",
      },
      {
        name: "Uasin Gishu",
        iso2: "44",
      },
      {
        name: "Vihiga",
        iso2: "45",
      },
      {
        name: "Wajir",
        iso2: "46",
      },
      {
        name: "West Pokot",
        iso2: "47",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Kiribati",
    iso2: "KI",
    states: [
      {
        name: "Gilbert",
        iso2: "G",
      },
      {
        name: "Line",
        iso2: "L",
      },
      {
        name: "Phoenix",
        iso2: "P",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Kosovo",
    iso2: "XK",
    states: [
      {
        name: "Ferizaj",
        iso2: "XUF",
      },
      {
        name: "Gjakove",
        iso2: "XDG",
      },
      {
        name: "Gjilan",
        iso2: "XGJ",
      },
      {
        name: "Mitrovica",
        iso2: "XKM",
      },
      {
        name: "Peja",
        iso2: "PEJ",
      },
      {
        name: "Pristina",
        iso2: "XPI",
      },
      {
        name: "Prizren",
        iso2: "PRI",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Kuwait",
    iso2: "KW",
    states: [
      {
        name: "Al Ahmadi",
        iso2: "AH",
      },
      {
        name: "Al Farwaniyah",
        iso2: "FA",
      },
      {
        name: "Al Jahra",
        iso2: "JA",
      },
      {
        name: "Capital",
        iso2: "KU",
      },
      {
        name: "Hawalli",
        iso2: "HA",
      },
      {
        name: "Mubarak Al-Kabeer",
        iso2: "MU",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Kyrgyzstan",
    iso2: "KG",
    states: [
      {
        name: "Batken",
        iso2: "B",
      },
      {
        name: "Bishkek",
        iso2: "GB",
      },
      {
        name: "Chuy",
        iso2: "C",
      },
      {
        name: "Issyk-Kul",
        iso2: "Y",
      },
      {
        name: "Jalal-Abad",
        iso2: "J",
      },
      {
        name: "Naryn",
        iso2: "N",
      },
      {
        name: "Osh",
        iso2: "GO",
      },
      {
        name: "Osh",
        iso2: "O",
      },
      {
        name: "Talas",
        iso2: "T",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Laos",
    iso2: "LA",
    states: [
      {
        name: "Attapeu",
        iso2: "AT",
      },
      {
        name: "Bokeo",
        iso2: "BK",
      },
      {
        name: "Bolikhamsai",
        iso2: "BL",
      },
      {
        name: "Champasak",
        iso2: "CH",
      },
      {
        name: "Houaphanh",
        iso2: "HO",
      },
      {
        name: "Khammouane",
        iso2: "KH",
      },
      {
        name: "Luang Namtha",
        iso2: "LM",
      },
      {
        name: "Luang Prabang",
        iso2: "LP",
      },
      {
        name: "Oudomxay",
        iso2: "OU",
      },
      {
        name: "Phongsaly",
        iso2: "PH",
      },
      {
        name: "Sainyabuli",
        iso2: "XA",
      },
      {
        name: "Salavan",
        iso2: "SL",
      },
      {
        name: "Savannakhet",
        iso2: "SV",
      },
      {
        name: "Sekong",
        iso2: "XE",
      },
      {
        name: "Vientiane",
        iso2: "VT",
      },
      {
        name: "Vientiane",
        iso2: "VI",
      },
      {
        name: "Xaisomboun",
        iso2: "XS",
      },
      {
        name: "Xiangkhouang",
        iso2: "XI",
      },
    ],
    legal_age: 15,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Latvia",
    iso2: "LV",
    states: [
      {
        name: "Ādaži",
        iso2: "011",
      },
      {
        name: "Aizkraukle",
        iso2: "002",
      },
      {
        name: "Alūksne",
        iso2: "007",
      },
      {
        name: "Augšdaugava",
        iso2: "111",
      },
      {
        name: "Balvi",
        iso2: "015",
      },
      {
        name: "Bauska",
        iso2: "016",
      },
      {
        name: "Cēsis",
        iso2: "022",
      },
      {
        name: "Daugavpils",
        iso2: "DGV",
      },
      {
        name: "Dienvidkurzemes",
        iso2: "112",
      },
      {
        name: "Dobele",
        iso2: "026",
      },
      {
        name: "Gulbene",
        iso2: "033",
      },
      {
        name: "Jēkabpils",
        iso2: "042",
      },
      {
        name: "Jelgava",
        iso2: "JEL",
      },
      {
        name: "Jelgava",
        iso2: "041",
      },
      {
        name: "Jūrmala",
        iso2: "JUR",
      },
      {
        name: "Ķekava",
        iso2: "052",
      },
      {
        name: "Krāslava",
        iso2: "047",
      },
      {
        name: "Kuldīga",
        iso2: "050",
      },
      {
        name: "Liepāja",
        iso2: "LPX",
      },
      {
        name: "Limbaži",
        iso2: "054",
      },
      {
        name: "Līvāni",
        iso2: "056",
      },
      {
        name: "Ludza",
        iso2: "058",
      },
      {
        name: "Madona",
        iso2: "059",
      },
      {
        name: "Mārupe",
        iso2: "062",
      },
      {
        name: "Ogre",
        iso2: "067",
      },
      {
        name: "Olaine",
        iso2: "068",
      },
      {
        name: "Preiļi",
        iso2: "073",
      },
      {
        name: "Rēzekne",
        iso2: "077",
      },
      {
        name: "Rēzekne",
        iso2: "REZ",
      },
      {
        name: "Riga",
        iso2: "RIX",
      },
      {
        name: "Ropaži",
        iso2: "080",
      },
      {
        name: "Salaspils",
        iso2: "087",
      },
      {
        name: "Saldus",
        iso2: "088",
      },
      {
        name: "Saulkrasti",
        iso2: "089",
      },
      {
        name: "Sigulda",
        iso2: "091",
      },
      {
        name: "Smiltene",
        iso2: "094",
      },
      {
        name: "Talsi",
        iso2: "097",
      },
      {
        name: "Tukums",
        iso2: "099",
      },
      {
        name: "Valka",
        iso2: "101",
      },
      {
        name: "Valmiera",
        iso2: "113",
      },
      {
        name: "Varakļāni",
        iso2: "102",
      },
      {
        name: "Ventspils",
        iso2: "VEN",
      },
      {
        name: "Ventspils",
        iso2: "106",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Lebanon",
    iso2: "LB",
    states: [
      {
        name: "Akkar",
        iso2: "AK",
      },
      {
        name: "Baalbek-Hermel",
        iso2: "BH",
      },
      {
        name: "Beirut",
        iso2: "BA",
      },
      {
        name: "Beqaa",
        iso2: "BI",
      },
      {
        name: "Mount Lebanon",
        iso2: "JL",
      },
      {
        name: "Nabatieh",
        iso2: "NA",
      },
      {
        name: "North",
        iso2: "AS",
      },
      {
        name: "South",
        iso2: "JA",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Lesotho",
    iso2: "LS",
    states: [
      {
        name: "Berea",
        iso2: "D",
      },
      {
        name: "Butha-Buthe",
        iso2: "B",
      },
      {
        name: "Leribe",
        iso2: "C",
      },
      {
        name: "Mafeteng",
        iso2: "E",
      },
      {
        name: "Maseru",
        iso2: "A",
      },
      {
        name: "Mohale's Hoek",
        iso2: "F",
      },
      {
        name: "Mokhotlong",
        iso2: "J",
      },
      {
        name: "Qacha's Nek",
        iso2: "H",
      },
      {
        name: "Quthing",
        iso2: "G",
      },
      {
        name: "Thaba-Tseka",
        iso2: "K",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Liberia",
    iso2: "LR",
    states: [
      {
        name: "Bomi",
        iso2: "BM",
      },
      {
        name: "Bong",
        iso2: "BG",
      },
      {
        name: "Gbarpolu",
        iso2: "GP",
      },
      {
        name: "Grand Bassa",
        iso2: "GB",
      },
      {
        name: "Grand Cape Mount",
        iso2: "CM",
      },
      {
        name: "Grand Gedeh",
        iso2: "GG",
      },
      {
        name: "Grand Kru",
        iso2: "GK",
      },
      {
        name: "Lofa",
        iso2: "LO",
      },
      {
        name: "Margibi",
        iso2: "MG",
      },
      {
        name: "Maryland",
        iso2: "MY",
      },
      {
        name: "Montserrado",
        iso2: "MO",
      },
      {
        name: "Nimba",
        iso2: "NI",
      },
      {
        name: "River Cess",
        iso2: "RI",
      },
      {
        name: "River Gee",
        iso2: "RG",
      },
      {
        name: "Sinoe",
        iso2: "SI",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Libya",
    iso2: "LY",
    states: [
      {
        name: "Al Wahat",
        iso2: "WA",
      },
      {
        name: "Benghazi",
        iso2: "BA",
      },
      {
        name: "Derna",
        iso2: "DR",
      },
      {
        name: "Ghat",
        iso2: "GT",
      },
      {
        name: "Jabal al Akhdar",
        iso2: "JA",
      },
      {
        name: "Jabal al Gharbi",
        iso2: "JG",
      },
      {
        name: "Jafara",
        iso2: "JI",
      },
      {
        name: "Jufra",
        iso2: "JU",
      },
      {
        name: "Kufra",
        iso2: "KF",
      },
      {
        name: "Marj",
        iso2: "MJ",
      },
      {
        name: "Misrata",
        iso2: "MI",
      },
      {
        name: "Murqub",
        iso2: "MB",
      },
      {
        name: "Murzuq",
        iso2: "MQ",
      },
      {
        name: "Nalut",
        iso2: "NL",
      },
      {
        name: "Nuqat al Khams",
        iso2: "NQ",
      },
      {
        name: "Sabha",
        iso2: "SB",
      },
      {
        name: "Sirte",
        iso2: "SR",
      },
      {
        name: "Tripoli",
        iso2: "TB",
      },
      {
        name: "Wadi al Hayaa",
        iso2: "WD",
      },
      {
        name: "Wadi al Shatii",
        iso2: "WS",
      },
      {
        name: "Zawiya",
        iso2: "ZA",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Liechtenstein",
    iso2: "LI",
    states: [
      {
        name: "Balzers",
        iso2: "01",
      },
      {
        name: "Eschen",
        iso2: "02",
      },
      {
        name: "Gamprin",
        iso2: "03",
      },
      {
        name: "Mauren",
        iso2: "04",
      },
      {
        name: "Planken",
        iso2: "05",
      },
      {
        name: "Ruggell",
        iso2: "06",
      },
      {
        name: "Schaan",
        iso2: "07",
      },
      {
        name: "Schellenberg",
        iso2: "08",
      },
      {
        name: "Triesen",
        iso2: "09",
      },
      {
        name: "Triesenberg",
        iso2: "10",
      },
      {
        name: "Vaduz",
        iso2: "11",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Lithuania",
    iso2: "LT",
    states: [
      {
        name: "Akmenė",
        iso2: "01",
      },
      {
        name: "Alytus",
        iso2: "03",
      },
      {
        name: "Alytus",
        iso2: "AL",
      },
      {
        name: "Alytus",
        iso2: "02",
      },
      {
        name: "Birštonas",
        iso2: "05",
      },
      {
        name: "Biržai",
        iso2: "06",
      },
      {
        name: "Druskininkai",
        iso2: "07",
      },
      {
        name: "Elektrėnai",
        iso2: "08",
      },
      {
        name: "Ignalina",
        iso2: "09",
      },
      {
        name: "Jonava",
        iso2: "10",
      },
      {
        name: "Joniškis",
        iso2: "11",
      },
      {
        name: "Jurbarkas",
        iso2: "12",
      },
      {
        name: "Kaišiadorys",
        iso2: "13",
      },
      {
        name: "Kalvarija",
        iso2: "14",
      },
      {
        name: "Kaunas",
        iso2: "15",
      },
      {
        name: "Kaunas",
        iso2: "16",
      },
      {
        name: "Kaunas",
        iso2: "KU",
      },
      {
        name: "Kazlų Rūda",
        iso2: "17",
      },
      {
        name: "Kėdainiai",
        iso2: "18",
      },
      {
        name: "Kelmė",
        iso2: "19",
      },
      {
        name: "Klaipeda",
        iso2: "20",
      },
      {
        name: "Klaipėda",
        iso2: "KL",
      },
      {
        name: "Klaipėda",
        iso2: "21",
      },
      {
        name: "Kretinga",
        iso2: "22",
      },
      {
        name: "Kupiškis",
        iso2: "23",
      },
      {
        name: "Lazdijai",
        iso2: "24",
      },
      {
        name: "Marijampolė",
        iso2: "MR",
      },
      {
        name: "Marijampolė",
        iso2: "25",
      },
      {
        name: "Mažeikiai",
        iso2: "26",
      },
      {
        name: "Molėtai",
        iso2: "27",
      },
      {
        name: "Neringa",
        iso2: "28",
      },
      {
        name: "Pagėgiai",
        iso2: "29",
      },
      {
        name: "Pakruojis",
        iso2: "30",
      },
      {
        name: "Palanga",
        iso2: "31",
      },
      {
        name: "Panevėžys",
        iso2: "32",
      },
      {
        name: "Panevėžys",
        iso2: "PN",
      },
      {
        name: "Panevėžys",
        iso2: "33",
      },
      {
        name: "Pasvalys",
        iso2: "34",
      },
      {
        name: "Plungė",
        iso2: "35",
      },
      {
        name: "Prienai",
        iso2: "36",
      },
      {
        name: "Radviliškis",
        iso2: "37",
      },
      {
        name: "Raseiniai",
        iso2: "38",
      },
      {
        name: "Rietavas",
        iso2: "39",
      },
      {
        name: "Rokiškis",
        iso2: "40",
      },
      {
        name: "Šakiai",
        iso2: "41",
      },
      {
        name: "Šalčininkai",
        iso2: "42",
      },
      {
        name: "Šiauliai",
        iso2: "43",
      },
      {
        name: "Šiauliai",
        iso2: "44",
      },
      {
        name: "Šiauliai",
        iso2: "SA",
      },
      {
        name: "Šilalė ",
        iso2: "45",
      },
      {
        name: "Šilutė",
        iso2: "46",
      },
      {
        name: "Širvintos",
        iso2: "47",
      },
      {
        name: "Skuodas",
        iso2: "48",
      },
      {
        name: "Švenčionys",
        iso2: "49",
      },
      {
        name: "Tauragė",
        iso2: "TA",
      },
      {
        name: "Tauragė",
        iso2: "50",
      },
      {
        name: "Telšiai",
        iso2: "51",
      },
      {
        name: "Telšiai",
        iso2: "TE",
      },
      {
        name: "Trakai",
        iso2: "52",
      },
      {
        name: "Ukmergė",
        iso2: "53",
      },
      {
        name: "Utena",
        iso2: "UT",
      },
      {
        name: "Utena",
        iso2: "54",
      },
      {
        name: "Varėna",
        iso2: "55",
      },
      {
        name: "Vilkaviškis",
        iso2: "56",
      },
      {
        name: "Vilnius",
        iso2: "58",
      },
      {
        name: "Vilnius",
        iso2: "VL",
      },
      {
        name: "Vilnius",
        iso2: "57",
      },
      {
        name: "Visaginas",
        iso2: "59",
      },
      {
        name: "Zarasai",
        iso2: "60",
      },
    ],
    legal_age: 14,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Luxembourg",
    iso2: "LU",
    states: [
      {
        name: "Capellen",
        iso2: "CA",
      },
      {
        name: "Clervaux",
        iso2: "CL",
      },
      {
        name: "Diekirch",
        iso2: "DI",
      },
      {
        name: "Echternach",
        iso2: "EC",
      },
      {
        name: "Esch-sur-Alzette",
        iso2: "ES",
      },
      {
        name: "Grevenmacher",
        iso2: "G",
      },
      {
        name: "Luxembourg ",
        iso2: "L",
      },
      {
        name: "Mersch",
        iso2: "ME",
      },
      {
        name: "Redange",
        iso2: "RD",
      },
      {
        name: "Remich",
        iso2: "RM",
      },
      {
        name: "Vianden",
        iso2: "VD",
      },
      {
        name: "Wiltz",
        iso2: "WI",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Macau S.A.R.",
    iso2: "MO",
    states: [
      {
        name: "Macau S.A.R.",
        iso2: "MO",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Madagascar",
    iso2: "MG",
    states: [
      {
        name: "Antananarivo",
        iso2: "T",
      },
      {
        name: "Antsiranana",
        iso2: "D",
      },
      {
        name: "Fianarantsoa",
        iso2: "F",
      },
      {
        name: "Mahajanga",
        iso2: "M",
      },
      {
        name: "Toamasina",
        iso2: "A",
      },
      {
        name: "Toliara",
        iso2: "U",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Malawi",
    iso2: "MW",
    states: [
      {
        name: "Balaka",
        iso2: "BA",
      },
      {
        name: "Blantyre",
        iso2: "BL",
      },
      {
        name: "Central",
        iso2: "C",
      },
      {
        name: "Chikwawa",
        iso2: "CK",
      },
      {
        name: "Chiradzulu",
        iso2: "CR",
      },
      {
        name: "Chitipa",
        iso2: "CT",
      },
      {
        name: "Dedza",
        iso2: "DE",
      },
      {
        name: "Dowa",
        iso2: "DO",
      },
      {
        name: "Karonga",
        iso2: "KR",
      },
      {
        name: "Kasungu",
        iso2: "KS",
      },
      {
        name: "Likoma",
        iso2: "LK",
      },
      {
        name: "Lilongwe",
        iso2: "LI",
      },
      {
        name: "Machinga",
        iso2: "MH",
      },
      {
        name: "Mangochi",
        iso2: "MG",
      },
      {
        name: "Mchinji",
        iso2: "MC",
      },
      {
        name: "Mulanje",
        iso2: "MU",
      },
      {
        name: "Mwanza",
        iso2: "MW",
      },
      {
        name: "Mzimba",
        iso2: "MZ",
      },
      {
        name: "Nkhata Bay",
        iso2: "NB",
      },
      {
        name: "Nkhotakota",
        iso2: "NK",
      },
      {
        name: "Northern",
        iso2: "N",
      },
      {
        name: "Nsanje",
        iso2: "NS",
      },
      {
        name: "Ntcheu",
        iso2: "NU",
      },
      {
        name: "Ntchisi",
        iso2: "NI",
      },
      {
        name: "Phalombe",
        iso2: "PH",
      },
      {
        name: "Rumphi",
        iso2: "RU",
      },
      {
        name: "Salima",
        iso2: "SA",
      },
      {
        name: "Southern",
        iso2: "S",
      },
      {
        name: "Thyolo",
        iso2: "TH",
      },
      {
        name: "Zomba",
        iso2: "ZO",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Malaysia",
    iso2: "MY",
    states: [
      {
        name: "Johor",
        iso2: "01",
      },
      {
        name: "Kedah",
        iso2: "02",
      },
      {
        name: "Kelantan",
        iso2: "03",
      },
      {
        name: "Kuala Lumpur",
        iso2: "14",
      },
      {
        name: "Labuan",
        iso2: "15",
      },
      {
        name: "Malacca",
        iso2: "04",
      },
      {
        name: "Negeri Sembilan",
        iso2: "05",
      },
      {
        name: "Pahang",
        iso2: "06",
      },
      {
        name: "Penang",
        iso2: "07",
      },
      {
        name: "Perak",
        iso2: "08",
      },
      {
        name: "Perlis",
        iso2: "09",
      },
      {
        name: "Putrajaya",
        iso2: "16",
      },
      {
        name: "Sabah",
        iso2: "12",
      },
      {
        name: "Sarawak",
        iso2: "13",
      },
      {
        name: "Selangor",
        iso2: "10",
      },
      {
        name: "Terengganu",
        iso2: "11",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Maldives",
    iso2: "MV",
    states: [
      {
        name: "Addu",
        iso2: "01",
      },
      {
        name: "Alif Alif",
        iso2: "02",
      },
      {
        name: "Alif Dhaal",
        iso2: "00",
      },
      {
        name: "Central",
        iso2: "CE",
      },
      {
        name: "Dhaalu",
        iso2: "17",
      },
      {
        name: "Faafu",
        iso2: "14",
      },
      {
        name: "Gaafu Alif",
        iso2: "27",
      },
      {
        name: "Gaafu Dhaalu",
        iso2: "28",
      },
      {
        name: "Gnaviyani",
        iso2: "29",
      },
      {
        name: "Haa Alif",
        iso2: "07",
      },
      {
        name: "Haa Dhaalu",
        iso2: "23",
      },
      {
        name: "Kaafu",
        iso2: "26",
      },
      {
        name: "Laamu",
        iso2: "05",
      },
      {
        name: "Lhaviyani",
        iso2: "03",
      },
      {
        name: "Malé",
        iso2: "MLE",
      },
      {
        name: "Meemu",
        iso2: "12",
      },
      {
        name: "Noonu",
        iso2: "25",
      },
      {
        name: "North Central",
        iso2: "NC",
      },
      {
        name: "Raa",
        iso2: "13",
      },
      {
        name: "Shaviyani",
        iso2: "24",
      },
      {
        name: "South",
        iso2: "SU",
      },
      {
        name: "South Central",
        iso2: "SC",
      },
      {
        name: "Thaa",
        iso2: "08",
      },
      {
        name: "Upper South",
        iso2: "US",
      },
      {
        name: "Vaavu",
        iso2: "04",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Mali",
    iso2: "ML",
    states: [
      {
        name: "Bamako",
        iso2: "BKO",
      },
      {
        name: "Gao",
        iso2: "7",
      },
      {
        name: "Kayes",
        iso2: "1",
      },
      {
        name: "Kidal",
        iso2: "8",
      },
      {
        name: "Koulikoro",
        iso2: "2",
      },
      {
        name: "Ménaka",
        iso2: "9",
      },
      {
        name: "Mopti",
        iso2: "5",
      },
      {
        name: "Ségou",
        iso2: "4",
      },
      {
        name: "Sikasso",
        iso2: "3",
      },
      {
        name: "Taoudénit",
        iso2: "10",
      },
      {
        name: "Tombouctou",
        iso2: "6",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Malta",
    iso2: "MT",
    states: [
      {
        name: "Attard",
        iso2: "01",
      },
      {
        name: "Balzan",
        iso2: "02",
      },
      {
        name: "Birgu",
        iso2: "03",
      },
      {
        name: "Birkirkara",
        iso2: "04",
      },
      {
        name: "Birżebbuġa",
        iso2: "05",
      },
      {
        name: "Cospicua",
        iso2: "06",
      },
      {
        name: "Dingli",
        iso2: "07",
      },
      {
        name: "Fgura",
        iso2: "08",
      },
      {
        name: "Floriana",
        iso2: "09",
      },
      {
        name: "Fontana",
        iso2: "10",
      },
      {
        name: "Għajnsielem",
        iso2: "13",
      },
      {
        name: "Għarb",
        iso2: "14",
      },
      {
        name: "Għargħur",
        iso2: "15",
      },
      {
        name: "Għasri",
        iso2: "16",
      },
      {
        name: "Għaxaq",
        iso2: "17",
      },
      {
        name: "Gudja",
        iso2: "11",
      },
      {
        name: "Gżira",
        iso2: "12",
      },
      {
        name: "Ħamrun",
        iso2: "18",
      },
      {
        name: "Iklin",
        iso2: "19",
      },
      {
        name: "Kalkara",
        iso2: "21",
      },
      {
        name: "Kerċem",
        iso2: "22",
      },
      {
        name: "Kirkop",
        iso2: "23",
      },
      {
        name: "Lija",
        iso2: "24",
      },
      {
        name: "Luqa",
        iso2: "25",
      },
      {
        name: "Marsa",
        iso2: "26",
      },
      {
        name: "Marsaskala",
        iso2: "27",
      },
      {
        name: "Marsaxlokk",
        iso2: "28",
      },
      {
        name: "Mdina",
        iso2: "29",
      },
      {
        name: "Mellieħa",
        iso2: "30",
      },
      {
        name: "Mġarr",
        iso2: "31",
      },
      {
        name: "Mosta",
        iso2: "32",
      },
      {
        name: "Mqabba",
        iso2: "33",
      },
      {
        name: "Msida",
        iso2: "34",
      },
      {
        name: "Mtarfa",
        iso2: "35",
      },
      {
        name: "Munxar",
        iso2: "36",
      },
      {
        name: "Nadur",
        iso2: "37",
      },
      {
        name: "Naxxar",
        iso2: "38",
      },
      {
        name: "Paola",
        iso2: "39",
      },
      {
        name: "Pembroke",
        iso2: "40",
      },
      {
        name: "Pietà",
        iso2: "41",
      },
      {
        name: "Qala",
        iso2: "42",
      },
      {
        name: "Qormi",
        iso2: "43",
      },
      {
        name: "Qrendi",
        iso2: "44",
      },
      {
        name: "Rabat",
        iso2: "46",
      },
      {
        name: "San Ġwann",
        iso2: "49",
      },
      {
        name: "San Lawrenz",
        iso2: "50",
      },
      {
        name: "Sannat",
        iso2: "52",
      },
      {
        name: "Santa Luċija",
        iso2: "53",
      },
      {
        name: "Santa Venera",
        iso2: "54",
      },
      {
        name: "Senglea",
        iso2: "20",
      },
      {
        name: "Siġġiewi",
        iso2: "55",
      },
      {
        name: "Sliema",
        iso2: "56",
      },
      {
        name: "St. Julian's",
        iso2: "48",
      },
      {
        name: "St. Paul's Bay",
        iso2: "51",
      },
      {
        name: "Swieqi",
        iso2: "57",
      },
      {
        name: "Tarxien",
        iso2: "59",
      },
      {
        name: "Ta' Xbiex",
        iso2: "58",
      },
      {
        name: "Valletta",
        iso2: "60",
      },
      {
        name: "Victoria",
        iso2: "45",
      },
      {
        name: "Xagħra",
        iso2: "61",
      },
      {
        name: "Xewkija",
        iso2: "62",
      },
      {
        name: "Xgħajra",
        iso2: "63",
      },
      {
        name: "Żabbar",
        iso2: "64",
      },
      {
        name: "Żebbuġ Gozo",
        iso2: "65",
      },
      {
        name: "Żebbuġ Malta",
        iso2: "66",
      },
      {
        name: "Żejtun",
        iso2: "67",
      },
      {
        name: "Żurrieq",
        iso2: "68",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Man (Isle of)",
    iso2: "IM",
    states: [
      {
        name: "Ayre",
        iso2: "01",
      },
      {
        name: "Garff",
        iso2: "02",
      },
      {
        name: "Glenfaba",
        iso2: "03",
      },
      {
        name: "Michael",
        iso2: "04",
      },
      {
        name: "Middle",
        iso2: "05",
      },
      {
        name: "Rushen",
        iso2: "06",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Marshall Islands",
    iso2: "MH",
    states: [
      {
        name: "Ralik",
        iso2: "L",
      },
      {
        name: "Ratak",
        iso2: "T",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Martinique",
    iso2: "MQ",
    states: [
      {
        name: "Martinique",
        iso2: "MQ",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Mauritania",
    iso2: "MR",
    states: [
      {
        name: "Adrar",
        iso2: "07",
      },
      {
        name: "Assaba",
        iso2: "03",
      },
      {
        name: "Brakna",
        iso2: "05",
      },
      {
        name: "Dakhlet Nouadhibou",
        iso2: "08",
      },
      {
        name: "Gorgol",
        iso2: "04",
      },
      {
        name: "Guidimaka",
        iso2: "10",
      },
      {
        name: "Hodh Ech Chargui",
        iso2: "01",
      },
      {
        name: "Hodh El Gharbi",
        iso2: "02",
      },
      {
        name: "Inchiri",
        iso2: "12",
      },
      {
        name: "Nouakchott-Nord",
        iso2: "14",
      },
      {
        name: "Nouakchott-Ouest",
        iso2: "13",
      },
      {
        name: "Nouakchott-Sud",
        iso2: "15",
      },
      {
        name: "Tagant",
        iso2: "09",
      },
      {
        name: "Tiris Zemmour",
        iso2: "11",
      },
      {
        name: "Trarza",
        iso2: "06",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Mauritius",
    iso2: "MU",
    states: [
      {
        name: "Agalega Islands",
        iso2: "AG",
      },
      {
        name: "Black River",
        iso2: "BL",
      },
      {
        name: "Flacq",
        iso2: "FL",
      },
      {
        name: "Grand Port",
        iso2: "GP",
      },
      {
        name: "Moka",
        iso2: "MO",
      },
      {
        name: "Pamplemousses",
        iso2: "PA",
      },
      {
        name: "Plaines Wilhems",
        iso2: "PW",
      },
      {
        name: "Port Louis",
        iso2: "PL",
      },
      {
        name: "Rivière du Rempart",
        iso2: "RR",
      },
      {
        name: "Rodrigues Island",
        iso2: "RO",
      },
      {
        name: "Saint Brandon Islands",
        iso2: "CC",
      },
      {
        name: "Savanne",
        iso2: "SA",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Mayotte",
    iso2: "YT",
    states: [
      {
        name: "Mayotte",
        iso2: "YT",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Mexico",
    iso2: "MX",
    states: [
      {
        name: "Aguascalientes",
        iso2: "AGU",
      },
      {
        name: "Baja California",
        iso2: "BCN",
      },
      {
        name: "Baja California Sur",
        iso2: "BCS",
      },
      {
        name: "Campeche",
        iso2: "CAM",
      },
      {
        name: "Chiapas",
        iso2: "CHP",
      },
      {
        name: "Chihuahua",
        iso2: "CHH",
      },
      {
        name: "Ciudad de México",
        iso2: "CMX",
      },
      {
        name: "Coahuila de Zaragoza",
        iso2: "COA",
      },
      {
        name: "Colima",
        iso2: "COL",
      },
      {
        name: "Durango",
        iso2: "DUR",
      },
      {
        name: "Estado de México",
        iso2: "MEX",
      },
      {
        name: "Guanajuato",
        iso2: "GUA",
      },
      {
        name: "Guerrero",
        iso2: "GRO",
      },
      {
        name: "Hidalgo",
        iso2: "HID",
      },
      {
        name: "Jalisco",
        iso2: "JAL",
      },
      {
        name: "Michoacán de Ocampo",
        iso2: "MIC",
      },
      {
        name: "Morelos",
        iso2: "MOR",
      },
      {
        name: "Nayarit",
        iso2: "NAY",
      },
      {
        name: "Nuevo León",
        iso2: "NLE",
      },
      {
        name: "Oaxaca",
        iso2: "OAX",
      },
      {
        name: "Puebla",
        iso2: "PUE",
      },
      {
        name: "Querétaro",
        iso2: "QUE",
      },
      {
        name: "Quintana Roo",
        iso2: "ROO",
      },
      {
        name: "San Luis Potosí",
        iso2: "SLP",
      },
      {
        name: "Sinaloa",
        iso2: "SIN",
      },
      {
        name: "Sonora",
        iso2: "SON",
      },
      {
        name: "Tabasco",
        iso2: "TAB",
      },
      {
        name: "Tamaulipas",
        iso2: "TAM",
      },
      {
        name: "Tlaxcala",
        iso2: "TLA",
      },
      {
        name: "Veracruz de Ignacio de la Llave",
        iso2: "VER",
      },
      {
        name: "Yucatán",
        iso2: "YUC",
      },
      {
        name: "Zacatecas",
        iso2: "ZAC",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Micronesia",
    iso2: "FM",
    states: [
      {
        name: "Chuuk",
        iso2: "TRK",
      },
      {
        name: "Kosrae",
        iso2: "KSA",
      },
      {
        name: "Pohnpei",
        iso2: "PNI",
      },
      {
        name: "Yap",
        iso2: "YAP",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Moldova",
    iso2: "MD",
    states: [
      {
        name: "Anenii Noi",
        iso2: "AN",
      },
      {
        name: "Bălți",
        iso2: "BA",
      },
      {
        name: "Basarabeasca",
        iso2: "BS",
      },
      {
        name: "Bender",
        iso2: "BD",
      },
      {
        name: "Briceni",
        iso2: "BR",
      },
      {
        name: "Cahul",
        iso2: "CA",
      },
      {
        name: "Călărași",
        iso2: "CL",
      },
      {
        name: "Cantemir",
        iso2: "CT",
      },
      {
        name: "Căușeni",
        iso2: "CS",
      },
      {
        name: "Chișinău",
        iso2: "CU",
      },
      {
        name: "Cimișlia",
        iso2: "CM",
      },
      {
        name: "Criuleni",
        iso2: "CR",
      },
      {
        name: "Dondușeni",
        iso2: "DO",
      },
      {
        name: "Drochia",
        iso2: "DR",
      },
      {
        name: "Dubăsari",
        iso2: "DU",
      },
      {
        name: "Edineț",
        iso2: "ED",
      },
      {
        name: "Fălești",
        iso2: "FA",
      },
      {
        name: "Florești",
        iso2: "FL",
      },
      {
        name: "Gagauzia",
        iso2: "GA",
      },
      {
        name: "Glodeni",
        iso2: "GL",
      },
      {
        name: "Hîncești",
        iso2: "HI",
      },
      {
        name: "Ialoveni",
        iso2: "IA",
      },
      {
        name: "Nisporeni",
        iso2: "NI",
      },
      {
        name: "Ocnița",
        iso2: "OC",
      },
      {
        name: "Orhei",
        iso2: "OR",
      },
      {
        name: "Rezina",
        iso2: "RE",
      },
      {
        name: "Rîșcani",
        iso2: "RI",
      },
      {
        name: "Sîngerei",
        iso2: "SI",
      },
      {
        name: "Șoldănești",
        iso2: "SD",
      },
      {
        name: "Soroca",
        iso2: "SO",
      },
      {
        name: "Ștefan Vodă",
        iso2: "SV",
      },
      {
        name: "Strășeni",
        iso2: "ST",
      },
      {
        name: "Taraclia",
        iso2: "TA",
      },
      {
        name: "Telenești",
        iso2: "TE",
      },
      {
        name: "Transnistria",
        iso2: "SN",
      },
      {
        name: "Ungheni",
        iso2: "UN",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Monaco",
    iso2: "MC",
    states: [
      {
        name: "La Colle",
        iso2: "CL",
      },
      {
        name: "La Condamine",
        iso2: "CO",
      },
      {
        name: "Moneghetti",
        iso2: "MG",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Mongolia",
    iso2: "MN",
    states: [
      {
        name: "Arkhangai",
        iso2: "073",
      },
      {
        name: "Bayankhongor",
        iso2: "069",
      },
      {
        name: "Bayan-Ölgii",
        iso2: "071",
      },
      {
        name: "Bulgan",
        iso2: "067",
      },
      {
        name: "Darkhan-Uul",
        iso2: "037",
      },
      {
        name: "Dornod",
        iso2: "061",
      },
      {
        name: "Dornogovi",
        iso2: "063",
      },
      {
        name: "Dundgovi",
        iso2: "059",
      },
      {
        name: "Govi-Altai",
        iso2: "065",
      },
      {
        name: "Govisümber",
        iso2: "064",
      },
      {
        name: "Khentii",
        iso2: "039",
      },
      {
        name: "Khovd",
        iso2: "043",
      },
      {
        name: "Khövsgöl",
        iso2: "041",
      },
      {
        name: "Ömnögovi",
        iso2: "053",
      },
      {
        name: "Orkhon",
        iso2: "035",
      },
      {
        name: "Övörkhangai",
        iso2: "055",
      },
      {
        name: "Selenge",
        iso2: "049",
      },
      {
        name: "Sükhbaatar",
        iso2: "051",
      },
      {
        name: "Töv",
        iso2: "047",
      },
      {
        name: "Uvs",
        iso2: "046",
      },
      {
        name: "Zavkhan",
        iso2: "057",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Montenegro",
    iso2: "ME",
    states: [
      {
        name: "Andrijevica",
        iso2: "01",
      },
      {
        name: "Bar",
        iso2: "02",
      },
      {
        name: "Berane",
        iso2: "03",
      },
      {
        name: "Bijelo Polje",
        iso2: "04",
      },
      {
        name: "Budva",
        iso2: "05",
      },
      {
        name: "Danilovgrad",
        iso2: "07",
      },
      {
        name: "Gusinje",
        iso2: "22",
      },
      {
        name: "Kolašin",
        iso2: "09",
      },
      {
        name: "Kotor",
        iso2: "10",
      },
      {
        name: "Mojkovac",
        iso2: "11",
      },
      {
        name: "Nikšić",
        iso2: "12",
      },
      {
        name: "Old Royal Capital Cetinje",
        iso2: "06",
      },
      {
        name: "Petnjica",
        iso2: "23",
      },
      {
        name: "Plav",
        iso2: "13",
      },
      {
        name: "Pljevlja",
        iso2: "14",
      },
      {
        name: "Plužine",
        iso2: "15",
      },
      {
        name: "Podgorica",
        iso2: "16",
      },
      {
        name: "Rožaje",
        iso2: "17",
      },
      {
        name: "Šavnik",
        iso2: "18",
      },
      {
        name: "Tivat",
        iso2: "19",
      },
      {
        name: "Ulcinj",
        iso2: "20",
      },
      {
        name: "Žabljak",
        iso2: "21",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Montserrat",
    iso2: "MS",
    states: [
      {
        name: "Montserrat",
        iso2: "MS",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Morocco",
    iso2: "MA",
    states: [
      {
        name: "Agadir-Ida-Ou-Tanane",
        iso2: "AGD",
      },
      {
        name: "Al Haouz",
        iso2: "HAO",
      },
      {
        name: "Al Hoceïma",
        iso2: "HOC",
      },
      {
        name: "Aousserd (EH)",
        iso2: "AOU",
      },
      {
        name: "Assa-Zag (EH-partial)",
        iso2: "ASZ",
      },
      {
        name: "Azilal",
        iso2: "AZI",
      },
      {
        name: "Béni Mellal",
        iso2: "BEM",
      },
      {
        name: "Béni Mellal-Khénifra",
        iso2: "05",
      },
      {
        name: "Benslimane",
        iso2: "BES",
      },
      {
        name: "Berkane",
        iso2: "BER",
      },
      {
        name: "Berrechid",
        iso2: "BRR",
      },
      {
        name: "Boujdour (EH)",
        iso2: "BOD",
      },
      {
        name: "Boulemane",
        iso2: "BOM",
      },
      {
        name: "Casablanca",
        iso2: "CAS",
      },
      {
        name: "Casablanca-Settat",
        iso2: "06",
      },
      {
        name: "Chefchaouen",
        iso2: "CHE",
      },
      {
        name: "Chichaoua",
        iso2: "CHI",
      },
      {
        name: "Chtouka-Ait Baha",
        iso2: "CHT",
      },
      {
        name: "Dakhla-Oued Ed-Dahab (EH)",
        iso2: "12",
      },
      {
        name: "Drâa-Tafilalet",
        iso2: "08",
      },
      {
        name: "Driouch",
        iso2: "DRI",
      },
      {
        name: "El Hajeb",
        iso2: "HAJ",
      },
      {
        name: "El Jadida",
        iso2: "JDI",
      },
      {
        name: "El Kelâa des Sraghna",
        iso2: "KES",
      },
      {
        name: "Errachidia",
        iso2: "ERR",
      },
      {
        name: "Essaouira",
        iso2: "ESI",
      },
      {
        name: "Es-Semara (EH-partial)",
        iso2: "ESM",
      },
      {
        name: "Fahs-Anjra",
        iso2: "FAH",
      },
      {
        name: "Fès",
        iso2: "FES",
      },
      {
        name: "Fès-Meknès",
        iso2: "03",
      },
      {
        name: "Figuig",
        iso2: "FIG",
      },
      {
        name: "Fquih Ben Salah",
        iso2: "FQH",
      },
      {
        name: "Guelmim",
        iso2: "GUE",
      },
      {
        name: "Guelmim-Oued Noun (EH-partial)",
        iso2: "10",
      },
      {
        name: "Guercif",
        iso2: "GUF",
      },
      {
        name: "Ifrane",
        iso2: "IFR",
      },
      {
        name: "Inezgane-Ait Melloul",
        iso2: "INE",
      },
      {
        name: "Jerada",
        iso2: "JRA",
      },
      {
        name: "Kénitra",
        iso2: "KEN",
      },
      {
        name: "Khémisset",
        iso2: "KHE",
      },
      {
        name: "Khénifra",
        iso2: "KHN",
      },
      {
        name: "Khouribga",
        iso2: "KHO",
      },
      {
        name: "Laâyoune (EH)",
        iso2: "LAA",
      },
      {
        name: "Laâyoune-Sakia El Hamra (EH-partial)",
        iso2: "11",
      },
      {
        name: "Larache",
        iso2: "LAR",
      },
      {
        name: "L'Oriental",
        iso2: "02",
      },
      {
        name: "Marrakech",
        iso2: "MAR",
      },
      {
        name: "Marrakesh-Safi",
        iso2: "07",
      },
      {
        name: "M’diq-Fnideq",
        iso2: "MDF",
      },
      {
        name: "Médiouna",
        iso2: "MED",
      },
      {
        name: "Meknès",
        iso2: "MEK",
      },
      {
        name: "Midelt",
        iso2: "MID",
      },
      {
        name: "Mohammadia",
        iso2: "MOH",
      },
      {
        name: "Moulay Yacoub",
        iso2: "MOU",
      },
      {
        name: "Nador",
        iso2: "NAD",
      },
      {
        name: "Nouaceur",
        iso2: "NOU",
      },
      {
        name: "Ouarzazate",
        iso2: "OUA",
      },
      {
        name: "Oued Ed-Dahab (EH)",
        iso2: "OUD",
      },
      {
        name: "Ouezzane",
        iso2: "OUZ",
      },
      {
        name: "Oujda-Angad",
        iso2: "OUJ",
      },
      {
        name: "Rabat",
        iso2: "RAB",
      },
      {
        name: "Rabat-Salé-Kénitra",
        iso2: "04",
      },
      {
        name: "Rehamna",
        iso2: "REH",
      },
      {
        name: "Safi",
        iso2: "SAF",
      },
      {
        name: "Salé",
        iso2: "SAL",
      },
      {
        name: "Sefrou",
        iso2: "SEF",
      },
      {
        name: "Settat",
        iso2: "SET",
      },
      {
        name: "Sidi Bennour",
        iso2: "SIB",
      },
      {
        name: "Sidi Ifni",
        iso2: "SIF",
      },
      {
        name: "Sidi Kacem",
        iso2: "SIK",
      },
      {
        name: "Sidi Slimane",
        iso2: "SIL",
      },
      {
        name: "Skhirate-Témara",
        iso2: "SKH",
      },
      {
        name: "Souss-Massa",
        iso2: "09",
      },
      {
        name: "Tanger-Assilah",
        iso2: "TNG",
      },
      {
        name: "Tanger-Tétouan-Al Hoceïma",
        iso2: "01",
      },
      {
        name: "Tan-Tan (EH-partial)",
        iso2: "TNT",
      },
      {
        name: "Taounate",
        iso2: "TAO",
      },
      {
        name: "Taourirt",
        iso2: "TAI",
      },
      {
        name: "Tarfaya (EH-partial)",
        iso2: "TAF",
      },
      {
        name: "Taroudannt",
        iso2: "TAR",
      },
      {
        name: "Tata",
        iso2: "TAT",
      },
      {
        name: "Taza",
        iso2: "TAZ",
      },
      {
        name: "Tétouan",
        iso2: "TET",
      },
      {
        name: "Tinghir",
        iso2: "TIN",
      },
      {
        name: "Tiznit",
        iso2: "TIZ",
      },
      {
        name: "Youssoufia",
        iso2: "YUS",
      },
      {
        name: "Zagora",
        iso2: "ZAG",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Mozambique",
    iso2: "MZ",
    states: [
      {
        name: "Cabo Delgado",
        iso2: "P",
      },
      {
        name: "Gaza",
        iso2: "G",
      },
      {
        name: "Inhambane",
        iso2: "I",
      },
      {
        name: "Manica",
        iso2: "B",
      },
      {
        name: "Maputo",
        iso2: "MPM",
      },
      {
        name: "Maputo",
        iso2: "L",
      },
      {
        name: "Nampula",
        iso2: "N",
      },
      {
        name: "Niassa",
        iso2: "A",
      },
      {
        name: "Sofala",
        iso2: "S",
      },
      {
        name: "Tete",
        iso2: "T",
      },
      {
        name: "Zambezia",
        iso2: "Q",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Myanmar",
    iso2: "MM",
    states: [
      {
        name: "Ayeyarwady",
        iso2: "07",
      },
      {
        name: "Bago",
        iso2: "02",
      },
      {
        name: "Chin",
        iso2: "14",
      },
      {
        name: "Kachin",
        iso2: "11",
      },
      {
        name: "Kayah",
        iso2: "12",
      },
      {
        name: "Kayin",
        iso2: "13",
      },
      {
        name: "Magway",
        iso2: "03",
      },
      {
        name: "Mandalay",
        iso2: "04",
      },
      {
        name: "Mon State",
        iso2: "15",
      },
      {
        name: "Naypyidaw",
        iso2: "18",
      },
      {
        name: "Rakhine",
        iso2: "16",
      },
      {
        name: "Sagaing",
        iso2: "01",
      },
      {
        name: "Shan",
        iso2: "17",
      },
      {
        name: "Tanintharyi",
        iso2: "05",
      },
      {
        name: "Yangon",
        iso2: "06",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Namibia",
    iso2: "NA",
    states: [
      {
        name: "Erongo",
        iso2: "ER",
      },
      {
        name: "Hardap",
        iso2: "HA",
      },
      {
        name: "Karas",
        iso2: "KA",
      },
      {
        name: "Kavango East",
        iso2: "KE",
      },
      {
        name: "Kavango West",
        iso2: "KW",
      },
      {
        name: "Khomas",
        iso2: "KH",
      },
      {
        name: "Kunene",
        iso2: "KU",
      },
      {
        name: "Ohangwena",
        iso2: "OW",
      },
      {
        name: "Omaheke",
        iso2: "OH",
      },
      {
        name: "Omusati",
        iso2: "OS",
      },
      {
        name: "Oshana",
        iso2: "ON",
      },
      {
        name: "Oshikoto",
        iso2: "OT",
      },
      {
        name: "Otjozondjupa",
        iso2: "OD",
      },
      {
        name: "Zambezi",
        iso2: "CA",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Nauru",
    iso2: "NR",
    states: [
      {
        name: "Aiwo",
        iso2: "01",
      },
      {
        name: "Anabar",
        iso2: "02",
      },
      {
        name: "Anetan",
        iso2: "03",
      },
      {
        name: "Anibare",
        iso2: "04",
      },
      {
        name: "Baiti",
        iso2: "05",
      },
      {
        name: "Boe",
        iso2: "06",
      },
      {
        name: "Buada",
        iso2: "07",
      },
      {
        name: "Denigomodu",
        iso2: "08",
      },
      {
        name: "Ewa",
        iso2: "09",
      },
      {
        name: "Ijuw",
        iso2: "10",
      },
      {
        name: "Meneng",
        iso2: "11",
      },
      {
        name: "Nibok",
        iso2: "12",
      },
      {
        name: "Uaboe",
        iso2: "13",
      },
      {
        name: "Yaren",
        iso2: "14",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Nepal",
    iso2: "NP",
    states: [
      {
        name: "Bagmati",
        iso2: "P3",
      },
      {
        name: "Gandaki",
        iso2: "P4",
      },
      {
        name: "Karnali",
        iso2: "P6",
      },
      {
        name: "Koshi",
        iso2: "P1",
      },
      {
        name: "Lumbini",
        iso2: "P5",
      },
      {
        name: "Madhesh",
        iso2: "P2",
      },
      {
        name: "Sudurpashchim",
        iso2: "P7",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Netherlands",
    iso2: "NL",
    states: [
      {
        name: "Bonaire",
        iso2: "BQ1",
      },
      {
        name: "Drenthe",
        iso2: "DR",
      },
      {
        name: "Flevoland",
        iso2: "FL",
      },
      {
        name: "Friesland",
        iso2: "FR",
      },
      {
        name: "Gelderland",
        iso2: "GE",
      },
      {
        name: "Groningen",
        iso2: "GR",
      },
      {
        name: "Limburg",
        iso2: "LI",
      },
      {
        name: "North Brabant",
        iso2: "NB",
      },
      {
        name: "North Holland",
        iso2: "NH",
      },
      {
        name: "Overijssel",
        iso2: "OV",
      },
      {
        name: "Saba",
        iso2: "BQ2",
      },
      {
        name: "Sint Eustatius",
        iso2: "BQ3",
      },
      {
        name: "South Holland",
        iso2: "ZH",
      },
      {
        name: "Utrecht",
        iso2: "UT",
      },
      {
        name: "Zeeland",
        iso2: "ZE",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "New Caledonia",
    iso2: "NC",
    states: [
      {
        name: "Loyalty Islands Province",
        iso2: "03",
      },
      {
        name: "North Province",
        iso2: "02",
      },
      {
        name: "South Province",
        iso2: "01",
      },
    ],
    legal_age: 15,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "New Zealand",
    iso2: "NZ",
    states: [
      {
        name: "Auckland",
        iso2: "AUK",
      },
      {
        name: "Bay of Plenty",
        iso2: "BOP",
      },
      {
        name: "Canterbury",
        iso2: "CAN",
      },
      {
        name: "Chatham Islands",
        iso2: "CIT",
      },
      {
        name: "Gisborne",
        iso2: "GIS",
      },
      {
        name: "Hawke's Bay",
        iso2: "HKB",
      },
      {
        name: "Manawatu-Wanganui",
        iso2: "MWT",
      },
      {
        name: "Marlborough",
        iso2: "MBH",
      },
      {
        name: "Nelson",
        iso2: "NSN",
      },
      {
        name: "Northland",
        iso2: "NTL",
      },
      {
        name: "Otago",
        iso2: "OTA",
      },
      {
        name: "Southland",
        iso2: "STL",
      },
      {
        name: "Taranaki",
        iso2: "TKI",
      },
      {
        name: "Tasman",
        iso2: "TAS",
      },
      {
        name: "Waikato",
        iso2: "WKO",
      },
      {
        name: "Wellington",
        iso2: "WGN",
      },
      {
        name: "West Coast",
        iso2: "WTC",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Nicaragua",
    iso2: "NI",
    states: [
      {
        name: "Boaco",
        iso2: "BO",
      },
      {
        name: "Carazo",
        iso2: "CA",
      },
      {
        name: "Chinandega",
        iso2: "CI",
      },
      {
        name: "Chontales",
        iso2: "CO",
      },
      {
        name: "Estelí",
        iso2: "ES",
      },
      {
        name: "Granada",
        iso2: "GR",
      },
      {
        name: "Jinotega",
        iso2: "JI",
      },
      {
        name: "León",
        iso2: "LE",
      },
      {
        name: "Madriz",
        iso2: "MD",
      },
      {
        name: "Managua",
        iso2: "MN",
      },
      {
        name: "Masaya",
        iso2: "MS",
      },
      {
        name: "Matagalpa",
        iso2: "MT",
      },
      {
        name: "North Caribbean Coast",
        iso2: "AN",
      },
      {
        name: "Nueva Segovia",
        iso2: "NS",
      },
      {
        name: "Río San Juan",
        iso2: "SJ",
      },
      {
        name: "Rivas",
        iso2: "RI",
      },
      {
        name: "South Caribbean Coast",
        iso2: "AS",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Niger",
    iso2: "NE",
    states: [
      {
        name: "Agadez",
        iso2: "1",
      },
      {
        name: "Diffa",
        iso2: "2",
      },
      {
        name: "Dosso",
        iso2: "3",
      },
      {
        name: "Maradi",
        iso2: "4",
      },
      {
        name: "Tahoua",
        iso2: "5",
      },
      {
        name: "Tillabéri",
        iso2: "6",
      },
      {
        name: "Zinder",
        iso2: "7",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Nigeria",
    iso2: "NG",
    states: [
      {
        name: "Abia",
        iso2: "AB",
      },
      {
        name: "Abuja Federal Capital Territory",
        iso2: "FC",
      },
      {
        name: "Adamawa",
        iso2: "AD",
      },
      {
        name: "Akwa Ibom",
        iso2: "AK",
      },
      {
        name: "Anambra",
        iso2: "AN",
      },
      {
        name: "Bauchi",
        iso2: "BA",
      },
      {
        name: "Bayelsa",
        iso2: "BY",
      },
      {
        name: "Benue",
        iso2: "BE",
      },
      {
        name: "Borno",
        iso2: "BO",
      },
      {
        name: "Cross River",
        iso2: "CR",
      },
      {
        name: "Delta",
        iso2: "DE",
      },
      {
        name: "Ebonyi",
        iso2: "EB",
      },
      {
        name: "Edo",
        iso2: "ED",
      },
      {
        name: "Ekiti",
        iso2: "EK",
      },
      {
        name: "Enugu",
        iso2: "EN",
      },
      {
        name: "Gombe",
        iso2: "GO",
      },
      {
        name: "Imo",
        iso2: "IM",
      },
      {
        name: "Jigawa",
        iso2: "JI",
      },
      {
        name: "Kaduna",
        iso2: "KD",
      },
      {
        name: "Kano",
        iso2: "KN",
      },
      {
        name: "Katsina",
        iso2: "KT",
      },
      {
        name: "Kebbi",
        iso2: "KE",
      },
      {
        name: "Kogi",
        iso2: "KO",
      },
      {
        name: "Kwara",
        iso2: "KW",
      },
      {
        name: "Lagos",
        iso2: "LA",
      },
      {
        name: "Nasarawa",
        iso2: "NA",
      },
      {
        name: "Niger",
        iso2: "NI",
      },
      {
        name: "Ogun",
        iso2: "OG",
      },
      {
        name: "Ondo",
        iso2: "ON",
      },
      {
        name: "Osun",
        iso2: "OS",
      },
      {
        name: "Oyo",
        iso2: "OY",
      },
      {
        name: "Plateau",
        iso2: "PL",
      },
      {
        name: "Rivers",
        iso2: "RI",
      },
      {
        name: "Sokoto",
        iso2: "SO",
      },
      {
        name: "Taraba",
        iso2: "TA",
      },
      {
        name: "Yobe",
        iso2: "YO",
      },
      {
        name: "Zamfara",
        iso2: "ZA",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Niue",
    iso2: "NU",
    states: [
      {
        name: "Niue",
        iso2: "NU",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Norfolk Island",
    iso2: "NF",
    states: [
      {
        name: "Norfolk Island",
        iso2: "NF",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Northern Mariana Islands",
    iso2: "MP",
    states: [
      {
        name: "Northern Mariana Islands",
        iso2: "MP",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "North Korea",
    iso2: "KP",
    states: [
      {
        name: "Chagang",
        iso2: "04",
      },
      {
        name: "Kangwon",
        iso2: "07",
      },
      {
        name: "North Hamgyong",
        iso2: "09",
      },
      {
        name: "North Hwanghae",
        iso2: "06",
      },
      {
        name: "North Pyongan",
        iso2: "03",
      },
      {
        name: "Pyongyang",
        iso2: "01",
      },
      {
        name: "Rason",
        iso2: "13",
      },
      {
        name: "Ryanggang",
        iso2: "10",
      },
      {
        name: "South Hamgyong",
        iso2: "08",
      },
      {
        name: "South Hwanghae",
        iso2: "05",
      },
      {
        name: "South Pyongan",
        iso2: "02",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "INACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "North Macedonia",
    iso2: "MK",
    states: [
      {
        name: "Aerodrom",
        iso2: "01",
      },
      {
        name: "Aračinovo",
        iso2: "02",
      },
      {
        name: "Berovo",
        iso2: "03",
      },
      {
        name: "Bitola",
        iso2: "04",
      },
      {
        name: "Bogdanci",
        iso2: "05",
      },
      {
        name: "Bogovinje",
        iso2: "06",
      },
      {
        name: "Bosilovo",
        iso2: "07",
      },
      {
        name: "Brvenica",
        iso2: "08",
      },
      {
        name: "Butel",
        iso2: "09",
      },
      {
        name: "Čair",
        iso2: "79",
      },
      {
        name: "Čaška",
        iso2: "80",
      },
      {
        name: "Centar",
        iso2: "77",
      },
      {
        name: "Centar Župa",
        iso2: "78",
      },
      {
        name: "Češinovo-Obleševo",
        iso2: "81",
      },
      {
        name: "Čučer-Sandevo",
        iso2: "82",
      },
      {
        name: "Debarca",
        iso2: "22",
      },
      {
        name: "Delčevo",
        iso2: "23",
      },
      {
        name: "Demir Hisar",
        iso2: "25",
      },
      {
        name: "Demir Kapija",
        iso2: "24",
      },
      {
        name: "Dojran",
        iso2: "26",
      },
      {
        name: "Dolneni",
        iso2: "27",
      },
      {
        name: "Drugovo",
        iso2: "28",
      },
      {
        name: "Gazi Baba",
        iso2: "17",
      },
      {
        name: "Gevgelija",
        iso2: "18",
      },
      {
        name: "Gjorče Petrov",
        iso2: "29",
      },
      {
        name: "Gostivar",
        iso2: "19",
      },
      {
        name: "Gradsko",
        iso2: "20",
      },
      {
        name: "Greater Skopje",
        iso2: "85",
      },
      {
        name: "Ilinden",
        iso2: "34",
      },
      {
        name: "Jegunovce",
        iso2: "35",
      },
      {
        name: "Karbinci",
        iso2: "37",
      },
      {
        name: "Karpoš",
        iso2: "38",
      },
      {
        name: "Kavadarci",
        iso2: "36",
      },
      {
        name: "Kičevo",
        iso2: "40",
      },
      {
        name: "Kisela Voda",
        iso2: "39",
      },
      {
        name: "Kočani",
        iso2: "42",
      },
      {
        name: "Konče",
        iso2: "41",
      },
      {
        name: "Kratovo",
        iso2: "43",
      },
      {
        name: "Kriva Palanka",
        iso2: "44",
      },
      {
        name: "Krivogaštani",
        iso2: "45",
      },
      {
        name: "Kruševo",
        iso2: "46",
      },
      {
        name: "Kumanovo",
        iso2: "47",
      },
      {
        name: "Lipkovo",
        iso2: "48",
      },
      {
        name: "Lozovo",
        iso2: "49",
      },
      {
        name: "Makedonska Kamenica",
        iso2: "51",
      },
      {
        name: "Makedonski Brod",
        iso2: "52",
      },
      {
        name: "Mavrovo and Rostuša",
        iso2: "50",
      },
      {
        name: "Mogila",
        iso2: "53",
      },
      {
        name: "Negotino",
        iso2: "54",
      },
      {
        name: "Novaci",
        iso2: "55",
      },
      {
        name: "Novo Selo",
        iso2: "56",
      },
      {
        name: "Ohrid",
        iso2: "58",
      },
      {
        name: "Oslomej ",
        iso2: "57",
      },
      {
        name: "Pehčevo",
        iso2: "60",
      },
      {
        name: "Petrovec",
        iso2: "59",
      },
      {
        name: "Plasnica",
        iso2: "61",
      },
      {
        name: "Prilep",
        iso2: "62",
      },
      {
        name: "Probištip",
        iso2: "63",
      },
      {
        name: "Radoviš",
        iso2: "64",
      },
      {
        name: "Rankovce",
        iso2: "65",
      },
      {
        name: "Resen",
        iso2: "66",
      },
      {
        name: "Rosoman",
        iso2: "67",
      },
      {
        name: "Saraj",
        iso2: "68",
      },
      {
        name: "Sopište",
        iso2: "70",
      },
      {
        name: "Staro Nagoričane",
        iso2: "71",
      },
      {
        name: "Štip",
        iso2: "83",
      },
      {
        name: "Struga",
        iso2: "72",
      },
      {
        name: "Strumica",
        iso2: "73",
      },
      {
        name: "Studeničani",
        iso2: "74",
      },
      {
        name: "Šuto Orizari",
        iso2: "84",
      },
      {
        name: "Sveti Nikole",
        iso2: "69",
      },
      {
        name: "Tearce",
        iso2: "75",
      },
      {
        name: "Tetovo",
        iso2: "76",
      },
      {
        name: "Valandovo",
        iso2: "10",
      },
      {
        name: "Vasilevo",
        iso2: "11",
      },
      {
        name: "Veles",
        iso2: "13",
      },
      {
        name: "Vevčani",
        iso2: "12",
      },
      {
        name: "Vinica",
        iso2: "14",
      },
      {
        name: "Vraneštica",
        iso2: "15",
      },
      {
        name: "Vrapčište",
        iso2: "16",
      },
      {
        name: "Zajas",
        iso2: "31",
      },
      {
        name: "Zelenikovo",
        iso2: "32",
      },
      {
        name: "Želino",
        iso2: "30",
      },
      {
        name: "Zrnovci",
        iso2: "33",
      },
    ],
    legal_age: 14,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Norway",
    iso2: "NO",
    states: [
      {
        name: "Agder",
        iso2: "42",
      },
      {
        name: "Innlandet",
        iso2: "34",
      },
      {
        name: "Jan Mayen",
        iso2: "22",
      },
      {
        name: "Møre og Romsdal",
        iso2: "15",
      },
      {
        name: "Nordland",
        iso2: "18",
      },
      {
        name: "Oslo",
        iso2: "03",
      },
      {
        name: "Rogaland",
        iso2: "11",
      },
      {
        name: "Svalbard",
        iso2: "21",
      },
      {
        name: "Troms og Finnmark",
        iso2: "54",
      },
      {
        name: "Trøndelag",
        iso2: "50",
      },
      {
        name: "Vestfold og Telemark",
        iso2: "38",
      },
      {
        name: "Vestland",
        iso2: "46",
      },
      {
        name: "Viken",
        iso2: "30",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Oman",
    iso2: "OM",
    states: [
      {
        name: "Ad Dakhiliyah",
        iso2: "DA",
      },
      {
        name: "Ad Dhahirah",
        iso2: "ZA",
      },
      {
        name: "Al Batinah North",
        iso2: "BS",
      },
      {
        name: "Al Batinah Region",
        iso2: "BA",
      },
      {
        name: "Al Batinah South",
        iso2: "BJ",
      },
      {
        name: "Al Buraimi",
        iso2: "BU",
      },
      {
        name: "Al Wusta",
        iso2: "WU",
      },
      {
        name: "Ash Sharqiyah North",
        iso2: "SS",
      },
      {
        name: "Ash Sharqiyah Region",
        iso2: "SH",
      },
      {
        name: "Ash Sharqiyah South",
        iso2: "SJ",
      },
      {
        name: "Dhofar",
        iso2: "ZU",
      },
      {
        name: "Musandam",
        iso2: "MU",
      },
      {
        name: "Muscat",
        iso2: "MA",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Pakistan",
    iso2: "PK",
    states: [
      {
        name: "Azad Kashmir",
        iso2: "JK",
      },
      {
        name: "Balochistan",
        iso2: "BA",
      },
      {
        name: "Federally Administered Tribal Areas",
        iso2: "TA",
      },
      {
        name: "Gilgit-Baltistan",
        iso2: "GB",
      },
      {
        name: "Islamabad",
        iso2: "IS",
      },
      {
        name: "Khyber Pakhtunkhwa",
        iso2: "KP",
      },
      {
        name: "Punjab",
        iso2: "PB",
      },
      {
        name: "Sindh",
        iso2: "SD",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Palau",
    iso2: "PW",
    states: [
      {
        name: "Aimeliik",
        iso2: "002",
      },
      {
        name: "Airai",
        iso2: "004",
      },
      {
        name: "Angaur",
        iso2: "010",
      },
      {
        name: "Hatohobei",
        iso2: "050",
      },
      {
        name: "Kayangel",
        iso2: "100",
      },
      {
        name: "Koror",
        iso2: "150",
      },
      {
        name: "Melekeok",
        iso2: "212",
      },
      {
        name: "Ngaraard",
        iso2: "214",
      },
      {
        name: "Ngarchelong",
        iso2: "218",
      },
      {
        name: "Ngardmau",
        iso2: "222",
      },
      {
        name: "Ngatpang",
        iso2: "224",
      },
      {
        name: "Ngchesar",
        iso2: "226",
      },
      {
        name: "Ngeremlengui",
        iso2: "227",
      },
      {
        name: "Ngiwal",
        iso2: "228",
      },
      {
        name: "Peleliu",
        iso2: "350",
      },
      {
        name: "Sonsorol",
        iso2: "370",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Palestinian Territory Occupied",
    iso2: "PS",
    states: [
      {
        name: "Bethlehem",
        iso2: "BTH",
      },
      {
        name: "Deir El Balah",
        iso2: "DEB",
      },
      {
        name: "Gaza",
        iso2: "GZA",
      },
      {
        name: "Hebron",
        iso2: "HBN",
      },
      {
        name: "Jenin",
        iso2: "JEN",
      },
      {
        name: "Jericho ",
        iso2: "JRH",
      },
      {
        name: "Jerusalem (Quds)",
        iso2: "JEM",
      },
      {
        name: "Khan Yunis",
        iso2: "KYS",
      },
      {
        name: "Nablus",
        iso2: "NBS",
      },
      {
        name: "North Gaza",
        iso2: "NGZ",
      },
      {
        name: "Qalqilya",
        iso2: "QQA",
      },
      {
        name: "Rafah",
        iso2: "RFH",
      },
      {
        name: "Ramallah",
        iso2: "RBH",
      },
      {
        name: "Salfit",
        iso2: "SLT",
      },
      {
        name: "Tubas",
        iso2: "TBS",
      },
      {
        name: "Tulkarm",
        iso2: "TKM",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Panama",
    iso2: "PA",
    states: [
      {
        name: "Bocas del Toro",
        iso2: "1",
      },
      {
        name: "Chiriquí Province",
        iso2: "4",
      },
      {
        name: "Coclé",
        iso2: "2",
      },
      {
        name: "Colón",
        iso2: "3",
      },
      {
        name: "Darién",
        iso2: "5",
      },
      {
        name: "Emberá-Wounaan Comarca",
        iso2: "EM",
      },
      {
        name: "Guna",
        iso2: "KY",
      },
      {
        name: "Herrera",
        iso2: "6",
      },
      {
        name: "Los Santos",
        iso2: "7",
      },
      {
        name: "Ngöbe-Buglé Comarca",
        iso2: "NB",
      },
      {
        name: "Panamá",
        iso2: "8",
      },
      {
        name: "Panamá Oeste",
        iso2: "10",
      },
      {
        name: "Veraguas",
        iso2: "9",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Papua New Guinea",
    iso2: "PG",
    states: [
      {
        name: "Bougainville",
        iso2: "NSB",
      },
      {
        name: "Central",
        iso2: "CPM",
      },
      {
        name: "Chimbu",
        iso2: "CPK",
      },
      {
        name: "Eastern Highlands",
        iso2: "EHG",
      },
      {
        name: "East New Britain",
        iso2: "EBR",
      },
      {
        name: "East Sepik",
        iso2: "ESW",
      },
      {
        name: "Enga",
        iso2: "EPW",
      },
      {
        name: "Gulf",
        iso2: "GPK",
      },
      {
        name: "Hela",
        iso2: "HLA",
      },
      {
        name: "Jiwaka",
        iso2: "JWK",
      },
      {
        name: "Madang",
        iso2: "MPM",
      },
      {
        name: "Manus",
        iso2: "MRL",
      },
      {
        name: "Milne Bay",
        iso2: "MBA",
      },
      {
        name: "Morobe",
        iso2: "MPL",
      },
      {
        name: "New Ireland",
        iso2: "NIK",
      },
      {
        name: "Oro",
        iso2: "NPP",
      },
      {
        name: "Port Moresby",
        iso2: "NCD",
      },
      {
        name: "Sandaun",
        iso2: "SAN",
      },
      {
        name: "Southern Highlands",
        iso2: "SHM",
      },
      {
        name: "Western",
        iso2: "WPD",
      },
      {
        name: "Western Highlands",
        iso2: "WHM",
      },
      {
        name: "West New Britain",
        iso2: "WBK",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Paraguay",
    iso2: "PY",
    states: [
      {
        name: "Alto Paraguay",
        iso2: "16",
      },
      {
        name: "Alto Paraná",
        iso2: "10",
      },
      {
        name: "Amambay",
        iso2: "13",
      },
      {
        name: "Asuncion",
        iso2: "ASU",
      },
      {
        name: "Boquerón",
        iso2: "19",
      },
      {
        name: "Caaguazú",
        iso2: "5",
      },
      {
        name: "Caazapá",
        iso2: "6",
      },
      {
        name: "Canindeyú",
        iso2: "14",
      },
      {
        name: "Central",
        iso2: "11",
      },
      {
        name: "Concepción",
        iso2: "1",
      },
      {
        name: "Cordillera",
        iso2: "3",
      },
      {
        name: "Guairá",
        iso2: "4",
      },
      {
        name: "Itapúa",
        iso2: "7",
      },
      {
        name: "Misiones",
        iso2: "8",
      },
      {
        name: "Ñeembucú",
        iso2: "12",
      },
      {
        name: "Paraguarí",
        iso2: "9",
      },
      {
        name: "Presidente Hayes",
        iso2: "15",
      },
      {
        name: "San Pedro",
        iso2: "2",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Peru",
    iso2: "PE",
    states: [
      {
        name: "Amazonas",
        iso2: "AMA",
      },
      {
        name: "Áncash",
        iso2: "ANC",
      },
      {
        name: "Apurímac",
        iso2: "APU",
      },
      {
        name: "Arequipa",
        iso2: "ARE",
      },
      {
        name: "Ayacucho",
        iso2: "AYA",
      },
      {
        name: "Cajamarca",
        iso2: "CAJ",
      },
      {
        name: "Callao",
        iso2: "CAL",
      },
      {
        name: "Cusco",
        iso2: "CUS",
      },
      {
        name: "Huancavelica",
        iso2: "HUV",
      },
      {
        name: "Huanuco",
        iso2: "HUC",
      },
      {
        name: "Ica",
        iso2: "ICA",
      },
      {
        name: "Junín",
        iso2: "JUN",
      },
      {
        name: "La Libertad",
        iso2: "LAL",
      },
      {
        name: "Lambayeque",
        iso2: "LAM",
      },
      {
        name: "Lima",
        iso2: "LIM",
      },
      {
        name: "Loreto",
        iso2: "LOR",
      },
      {
        name: "Madre de Dios",
        iso2: "MDD",
      },
      {
        name: "Moquegua",
        iso2: "MOQ",
      },
      {
        name: "Pasco",
        iso2: "PAS",
      },
      {
        name: "Piura",
        iso2: "PIU",
      },
      {
        name: "Puno",
        iso2: "PUN",
      },
      {
        name: "San Martín",
        iso2: "SAM",
      },
      {
        name: "Tacna",
        iso2: "TAC",
      },
      {
        name: "Tumbes",
        iso2: "TUM",
      },
      {
        name: "Ucayali",
        iso2: "UCA",
      },
    ],
    legal_age: 14,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Philippines",
    iso2: "PH",
    states: [
      {
        name: "Abra",
        iso2: "ABR",
      },
      {
        name: "Agusan del Norte",
        iso2: "AGN",
      },
      {
        name: "Agusan del Sur",
        iso2: "AGS",
      },
      {
        name: "Aklan",
        iso2: "AKL",
      },
      {
        name: "Albay",
        iso2: "ALB",
      },
      {
        name: "Antique",
        iso2: "ANT",
      },
      {
        name: "Apayao",
        iso2: "APA",
      },
      {
        name: "Aurora",
        iso2: "AUR",
      },
      {
        name: "Autonomous Region in Muslim Mindanao",
        iso2: "14",
      },
      {
        name: "Basilan",
        iso2: "BAS",
      },
      {
        name: "Bataan",
        iso2: "BAN",
      },
      {
        name: "Batanes",
        iso2: "BTN",
      },
      {
        name: "Batangas",
        iso2: "BTG",
      },
      {
        name: "Benguet",
        iso2: "BEN",
      },
      {
        name: "Bicol",
        iso2: "05",
      },
      {
        name: "Biliran",
        iso2: "BIL",
      },
      {
        name: "Bohol",
        iso2: "BOH",
      },
      {
        name: "Bukidnon",
        iso2: "BUK",
      },
      {
        name: "Bulacan",
        iso2: "BUL",
      },
      {
        name: "Cagayan",
        iso2: "CAG",
      },
      {
        name: "Cagayan Valley",
        iso2: "02",
      },
      {
        name: "Calabarzon",
        iso2: "40",
      },
      {
        name: "Camarines Norte",
        iso2: "CAN",
      },
      {
        name: "Camarines Sur",
        iso2: "CAS",
      },
      {
        name: "Camiguin",
        iso2: "CAM",
      },
      {
        name: "Capiz",
        iso2: "CAP",
      },
      {
        name: "Caraga",
        iso2: "13",
      },
      {
        name: "Catanduanes",
        iso2: "CAT",
      },
      {
        name: "Cavite",
        iso2: "CAV",
      },
      {
        name: "Cebu",
        iso2: "CEB",
      },
      {
        name: "Central Luzon",
        iso2: "03",
      },
      {
        name: "Central Visayas",
        iso2: "07",
      },
      {
        name: "Compostela Valley",
        iso2: "COM",
      },
      {
        name: "Cordillera Administrative",
        iso2: "15",
      },
      {
        name: "Cotabato",
        iso2: "NCO",
      },
      {
        name: "Davao",
        iso2: "11",
      },
      {
        name: "Davao del Norte",
        iso2: "DAV",
      },
      {
        name: "Davao del Sur",
        iso2: "DAS",
      },
      {
        name: "Davao Occidental",
        iso2: "DVO",
      },
      {
        name: "Davao Oriental",
        iso2: "DAO",
      },
      {
        name: "Dinagat Islands",
        iso2: "DIN",
      },
      {
        name: "Eastern Samar",
        iso2: "EAS",
      },
      {
        name: "Eastern Visayas",
        iso2: "08",
      },
      {
        name: "Guimaras",
        iso2: "GUI",
      },
      {
        name: "Ifugao",
        iso2: "IFU",
      },
      {
        name: "Ilocos",
        iso2: "01",
      },
      {
        name: "Ilocos Norte",
        iso2: "ILN",
      },
      {
        name: "Ilocos Sur",
        iso2: "ILS",
      },
      {
        name: "Iloilo",
        iso2: "ILI",
      },
      {
        name: "Isabela",
        iso2: "ISA",
      },
      {
        name: "Kalinga",
        iso2: "KAL",
      },
      {
        name: "Laguna",
        iso2: "LAG",
      },
      {
        name: "Lanao del Norte",
        iso2: "LAN",
      },
      {
        name: "Lanao del Sur",
        iso2: "LAS",
      },
      {
        name: "La Union",
        iso2: "LUN",
      },
      {
        name: "Leyte",
        iso2: "LEY",
      },
      {
        name: "Maguindanao",
        iso2: "MAG",
      },
      {
        name: "Marinduque",
        iso2: "MAD",
      },
      {
        name: "Masbate",
        iso2: "MAS",
      },
      {
        name: "Metro Manila",
        iso2: "NCR",
      },
      {
        name: "Metro Manila(National Capital Region)",
        iso2: "00",
      },
      {
        name: "Mimaropa",
        iso2: "41",
      },
      {
        name: "Misamis Occidental",
        iso2: "MSC",
      },
      {
        name: "Misamis Oriental",
        iso2: "MSR",
      },
      {
        name: "Mountain Province",
        iso2: "MOU",
      },
      {
        name: "Negros Occidental",
        iso2: "NEC",
      },
      {
        name: "Negros Oriental",
        iso2: "NER",
      },
      {
        name: "Northern Mindanao",
        iso2: "10",
      },
      {
        name: "Northern Samar",
        iso2: "NSA",
      },
      {
        name: "Nueva Ecija",
        iso2: "NUE",
      },
      {
        name: "Nueva Vizcaya",
        iso2: "NUV",
      },
      {
        name: "Occidental Mindoro",
        iso2: "MDC",
      },
      {
        name: "Oriental Mindoro",
        iso2: "MDR",
      },
      {
        name: "Palawan",
        iso2: "PLW",
      },
      {
        name: "Pampanga",
        iso2: "PAM",
      },
      {
        name: "Pangasinan",
        iso2: "PAN",
      },
      {
        name: "Quezon",
        iso2: "QUE",
      },
      {
        name: "Quirino",
        iso2: "QUI",
      },
      {
        name: "Rizal",
        iso2: "RIZ",
      },
      {
        name: "Romblon",
        iso2: "ROM",
      },
      {
        name: "Sarangani",
        iso2: "SAR",
      },
      {
        name: "Siquijor",
        iso2: "SIG",
      },
      {
        name: "Soccsksargen",
        iso2: "12",
      },
      {
        name: "Sorsogon",
        iso2: "SOR",
      },
      {
        name: "South Cotabato",
        iso2: "SCO",
      },
      {
        name: "Southern Leyte",
        iso2: "SLE",
      },
      {
        name: "Sultan Kudarat",
        iso2: "SUK",
      },
      {
        name: "Sulu",
        iso2: "SLU",
      },
      {
        name: "Surigao del Norte",
        iso2: "SUN",
      },
      {
        name: "Surigao del Sur",
        iso2: "SUR",
      },
      {
        name: "Tarlac",
        iso2: "TAR",
      },
      {
        name: "Tawi-Tawi",
        iso2: "TAW",
      },
      {
        name: "Western Samar",
        iso2: "WSA",
      },
      {
        name: "Western Visayas",
        iso2: "06",
      },
      {
        name: "Zambales",
        iso2: "ZMB",
      },
      {
        name: "Zamboanga del Norte",
        iso2: "ZAN",
      },
      {
        name: "Zamboanga del Sur",
        iso2: "ZAS",
      },
      {
        name: "Zamboanga Peninsula",
        iso2: "09",
      },
      {
        name: "Zamboanga Sibugay",
        iso2: "ZSI",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Pitcairn Island",
    iso2: "PN",
    states: [
      {
        name: "Pitcairn Island",
        iso2: "PN",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Poland",
    iso2: "PL",
    states: [
      {
        name: "Greater Poland",
        iso2: "30",
      },
      {
        name: "Holy Cross",
        iso2: "26",
      },
      {
        name: "Kuyavia-Pomerania",
        iso2: "04",
      },
      {
        name: "Lesser Poland",
        iso2: "12",
      },
      {
        name: "Łódź",
        iso2: "10",
      },
      {
        name: "Lower Silesia",
        iso2: "02",
      },
      {
        name: "Lublin",
        iso2: "06",
      },
      {
        name: "Lubusz",
        iso2: "08",
      },
      {
        name: "Mazovia",
        iso2: "14",
      },
      {
        name: "Podlaskie",
        iso2: "20",
      },
      {
        name: "Pomerania",
        iso2: "22",
      },
      {
        name: "Silesia",
        iso2: "24",
      },
      {
        name: "Subcarpathia",
        iso2: "18",
      },
      {
        name: "Upper Silesia",
        iso2: "16",
      },
      {
        name: "Warmia-Masuria",
        iso2: "28",
      },
      {
        name: "West Pomerania",
        iso2: "32",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Portugal",
    iso2: "PT",
    states: [
      {
        name: "Açores",
        iso2: "20",
      },
      {
        name: "Aveiro",
        iso2: "01",
      },
      {
        name: "Beja",
        iso2: "02",
      },
      {
        name: "Braga",
        iso2: "03",
      },
      {
        name: "Bragança",
        iso2: "04",
      },
      {
        name: "Castelo Branco",
        iso2: "05",
      },
      {
        name: "Coimbra",
        iso2: "06",
      },
      {
        name: "Évora",
        iso2: "07",
      },
      {
        name: "Faro",
        iso2: "08",
      },
      {
        name: "Guarda",
        iso2: "09",
      },
      {
        name: "Leiria",
        iso2: "10",
      },
      {
        name: "Lisbon",
        iso2: "11",
      },
      {
        name: "Madeira",
        iso2: "30",
      },
      {
        name: "Portalegre",
        iso2: "12",
      },
      {
        name: "Porto",
        iso2: "13",
      },
      {
        name: "Santarém",
        iso2: "14",
      },
      {
        name: "Setúbal",
        iso2: "15",
      },
      {
        name: "Viana do Castelo",
        iso2: "16",
      },
      {
        name: "Vila Real",
        iso2: "17",
      },
      {
        name: "Viseu",
        iso2: "18",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Puerto Rico",
    iso2: "PR",
    states: [
      {
        name: "Adjuntas",
        iso2: "001",
      },
      {
        name: "Aguada",
        iso2: "003",
      },
      {
        name: "Aguadilla",
        iso2: "005",
      },
      {
        name: "Aguas Buenas",
        iso2: "007",
      },
      {
        name: "Aibonito",
        iso2: "009",
      },
      {
        name: "Añasco",
        iso2: "011",
      },
      {
        name: "Arecibo",
        iso2: "AR",
      },
      {
        name: "Arecibo",
        iso2: "013",
      },
      {
        name: "Arroyo",
        iso2: "015",
      },
      {
        name: "Barceloneta",
        iso2: "017",
      },
      {
        name: "Barranquitas",
        iso2: "019",
      },
      {
        name: "Bayamon",
        iso2: "BY",
      },
      {
        name: "Bayamón",
        iso2: "021",
      },
      {
        name: "Cabo Rojo",
        iso2: "023",
      },
      {
        name: "Caguas",
        iso2: "025",
      },
      {
        name: "Caguas",
        iso2: "CG",
      },
      {
        name: "Camuy",
        iso2: "027",
      },
      {
        name: "Canóvanas",
        iso2: "029",
      },
      {
        name: "Carolina",
        iso2: "031",
      },
      {
        name: "Carolina",
        iso2: "CL",
      },
      {
        name: "Cataño",
        iso2: "033",
      },
      {
        name: "Cayey",
        iso2: "035",
      },
      {
        name: "Ceiba",
        iso2: "037",
      },
      {
        name: "Ciales",
        iso2: "039",
      },
      {
        name: "Cidra",
        iso2: "041",
      },
      {
        name: "Coamo",
        iso2: "043",
      },
      {
        name: "Comerío",
        iso2: "045",
      },
      {
        name: "Corozal",
        iso2: "047",
      },
      {
        name: "Culebra",
        iso2: "049",
      },
      {
        name: "Dorado",
        iso2: "051",
      },
      {
        name: "Fajardo",
        iso2: "053",
      },
      {
        name: "Florida",
        iso2: "054",
      },
      {
        name: "Guánica",
        iso2: "055",
      },
      {
        name: "Guayama",
        iso2: "057",
      },
      {
        name: "Guayanilla",
        iso2: "059",
      },
      {
        name: "Guaynabo",
        iso2: "GN",
      },
      {
        name: "Guaynabo",
        iso2: "061",
      },
      {
        name: "Gurabo",
        iso2: "063",
      },
      {
        name: "Hatillo",
        iso2: "065",
      },
      {
        name: "Hormigueros",
        iso2: "067",
      },
      {
        name: "Humacao",
        iso2: "069",
      },
      {
        name: "Isabela",
        iso2: "071",
      },
      {
        name: "Jayuya",
        iso2: "073",
      },
      {
        name: "Juana Díaz",
        iso2: "075",
      },
      {
        name: "Juncos",
        iso2: "077",
      },
      {
        name: "Lajas",
        iso2: "079",
      },
      {
        name: "Lares",
        iso2: "081",
      },
      {
        name: "Las Marías",
        iso2: "083",
      },
      {
        name: "Las Piedras",
        iso2: "085",
      },
      {
        name: "Loíza",
        iso2: "087",
      },
      {
        name: "Luquillo",
        iso2: "089",
      },
      {
        name: "Manatí",
        iso2: "091",
      },
      {
        name: "Maricao",
        iso2: "093",
      },
      {
        name: "Maunabo",
        iso2: "095",
      },
      {
        name: "Mayagüez",
        iso2: "MG",
      },
      {
        name: "Mayagüez",
        iso2: "097",
      },
      {
        name: "Moca",
        iso2: "099",
      },
      {
        name: "Morovis",
        iso2: "101",
      },
      {
        name: "Naguabo",
        iso2: "103",
      },
      {
        name: "Naranjito",
        iso2: "105",
      },
      {
        name: "Orocovis",
        iso2: "107",
      },
      {
        name: "Patillas",
        iso2: "109",
      },
      {
        name: "Peñuelas",
        iso2: "111",
      },
      {
        name: "Ponce",
        iso2: "113",
      },
      {
        name: "Ponce",
        iso2: "PO",
      },
      {
        name: "Quebradillas",
        iso2: "115",
      },
      {
        name: "Rincón",
        iso2: "117",
      },
      {
        name: "Río Grande",
        iso2: "119",
      },
      {
        name: "Sabana Grande",
        iso2: "121",
      },
      {
        name: "Salinas",
        iso2: "123",
      },
      {
        name: "San Germán",
        iso2: "125",
      },
      {
        name: "San Juan",
        iso2: "SJ",
      },
      {
        name: "San Juan",
        iso2: "127",
      },
      {
        name: "San Lorenzo",
        iso2: "129",
      },
      {
        name: "San Sebastián",
        iso2: "131",
      },
      {
        name: "Santa Isabel",
        iso2: "133",
      },
      {
        name: "Toa Alta",
        iso2: "135",
      },
      {
        name: "Toa Baja",
        iso2: "TB",
      },
      {
        name: "Toa Baja",
        iso2: "137",
      },
      {
        name: "Trujillo Alto",
        iso2: "TA",
      },
      {
        name: "Trujillo Alto",
        iso2: "139",
      },
      {
        name: "Utuado",
        iso2: "141",
      },
      {
        name: "Vega Alta",
        iso2: "143",
      },
      {
        name: "Vega Baja",
        iso2: "145",
      },
      {
        name: "Vieques",
        iso2: "147",
      },
      {
        name: "Villalba",
        iso2: "149",
      },
      {
        name: "Yabucoa",
        iso2: "151",
      },
      {
        name: "Yauco",
        iso2: "153",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Qatar",
    iso2: "QA",
    states: [
      {
        name: "Al Daayen",
        iso2: "ZA",
      },
      {
        name: "Al Khor",
        iso2: "KH",
      },
      {
        name: "Al Rayyan",
        iso2: "RA",
      },
      {
        name: "Al-Shahaniya",
        iso2: "SH",
      },
      {
        name: "Al Wakrah",
        iso2: "WA",
      },
      {
        name: "Doha",
        iso2: "DA",
      },
      {
        name: "Madinat ash Shamal",
        iso2: "MS",
      },
      {
        name: "Umm Salal",
        iso2: "US",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Reunion",
    iso2: "RE",
    states: [
      {
        name: "Reunion",
        iso2: "RE",
      },
    ],
    legal_age: 15,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Romania",
    iso2: "RO",
    states: [
      {
        name: "Alba",
        iso2: "AB",
      },
      {
        name: "Arad",
        iso2: "AR",
      },
      {
        name: "Arges",
        iso2: "AG",
      },
      {
        name: "Bacău",
        iso2: "BC",
      },
      {
        name: "Bihor",
        iso2: "BH",
      },
      {
        name: "Bistrița-Năsăud",
        iso2: "BN",
      },
      {
        name: "Botoșani",
        iso2: "BT",
      },
      {
        name: "Braila",
        iso2: "BR",
      },
      {
        name: "Brașov",
        iso2: "BV",
      },
      {
        name: "Bucharest",
        iso2: "B",
      },
      {
        name: "Buzău",
        iso2: "BZ",
      },
      {
        name: "Călărași",
        iso2: "CL",
      },
      {
        name: "Caraș-Severin",
        iso2: "CS",
      },
      {
        name: "Cluj",
        iso2: "CJ",
      },
      {
        name: "Constanța",
        iso2: "CT",
      },
      {
        name: "Covasna",
        iso2: "CV",
      },
      {
        name: "Dâmbovița",
        iso2: "DB",
      },
      {
        name: "Dolj",
        iso2: "DJ",
      },
      {
        name: "Galați",
        iso2: "GL",
      },
      {
        name: "Giurgiu",
        iso2: "GR",
      },
      {
        name: "Gorj",
        iso2: "GJ",
      },
      {
        name: "Harghita",
        iso2: "HR",
      },
      {
        name: "Hunedoara",
        iso2: "HD",
      },
      {
        name: "Ialomița",
        iso2: "IL",
      },
      {
        name: "Iași",
        iso2: "IS",
      },
      {
        name: "Ilfov",
        iso2: "IF",
      },
      {
        name: "Maramureș",
        iso2: "MM",
      },
      {
        name: "Mehedinți",
        iso2: "MH",
      },
      {
        name: "Mureș",
        iso2: "MS",
      },
      {
        name: "Neamț",
        iso2: "NT",
      },
      {
        name: "Olt",
        iso2: "OT",
      },
      {
        name: "Prahova",
        iso2: "PH",
      },
      {
        name: "Sălaj",
        iso2: "SJ",
      },
      {
        name: "Satu Mare",
        iso2: "SM",
      },
      {
        name: "Sibiu",
        iso2: "SB",
      },
      {
        name: "Suceava",
        iso2: "SV",
      },
      {
        name: "Teleorman",
        iso2: "TR",
      },
      {
        name: "Timiș",
        iso2: "TM",
      },
      {
        name: "Tulcea",
        iso2: "TL",
      },
      {
        name: "Vâlcea",
        iso2: "VL",
      },
      {
        name: "Vaslui",
        iso2: "VS",
      },
      {
        name: "Vrancea",
        iso2: "VN",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Russia",
    iso2: "RU",
    states: [
      {
        name: "Adygea",
        iso2: "AD",
      },
      {
        name: "Altai",
        iso2: "AL",
      },
      {
        name: "Altai",
        iso2: "ALT",
      },
      {
        name: "Amur",
        iso2: "AMU",
      },
      {
        name: "Arkhangelsk",
        iso2: "ARK",
      },
      {
        name: "Astrakhan",
        iso2: "AST",
      },
      {
        name: "Bashkortostan",
        iso2: "BA",
      },
      {
        name: "Belgorod",
        iso2: "BEL",
      },
      {
        name: "Bryansk",
        iso2: "BRY",
      },
      {
        name: "Buryatia",
        iso2: "BU",
      },
      {
        name: "Chechen",
        iso2: "CE",
      },
      {
        name: "Chelyabinsk",
        iso2: "CHE",
      },
      {
        name: "Chukotka",
        iso2: "CHU",
      },
      {
        name: "Chuvash",
        iso2: "CU",
      },
      {
        name: "Dagestan",
        iso2: "DA",
      },
      {
        name: "Ingushetia",
        iso2: "IN",
      },
      {
        name: "Irkutsk",
        iso2: "IRK",
      },
      {
        name: "Ivanovo",
        iso2: "IVA",
      },
      {
        name: "Jewish",
        iso2: "YEV",
      },
      {
        name: "Kabardino-Balkar",
        iso2: "KB",
      },
      {
        name: "Kaliningrad",
        iso2: "KGD",
      },
      {
        name: "Kalmykia",
        iso2: "KL",
      },
      {
        name: "Kaluga",
        iso2: "KLU",
      },
      {
        name: "Kamchatka",
        iso2: "KAM",
      },
      {
        name: "Karachay-Cherkess",
        iso2: "KC",
      },
      {
        name: "Karelia",
        iso2: "KR",
      },
      {
        name: "Kemerovo",
        iso2: "KEM",
      },
      {
        name: "Khabarovsk",
        iso2: "KHA",
      },
      {
        name: "Khakassia",
        iso2: "KK",
      },
      {
        name: "Khanty-Mansi",
        iso2: "KHM",
      },
      {
        name: "Kirov",
        iso2: "KIR",
      },
      {
        name: "Komi",
        iso2: "KO",
      },
      {
        name: "Kostroma",
        iso2: "KOS",
      },
      {
        name: "Krasnodar",
        iso2: "KDA",
      },
      {
        name: "Krasnoyarsk",
        iso2: "KYA",
      },
      {
        name: "Kurgan",
        iso2: "KGN",
      },
      {
        name: "Kursk",
        iso2: "KRS",
      },
      {
        name: "Leningrad",
        iso2: "LEN",
      },
      {
        name: "Lipetsk",
        iso2: "LIP",
      },
      {
        name: "Magadan",
        iso2: "MAG",
      },
      {
        name: "Mari El",
        iso2: "ME",
      },
      {
        name: "Mordovia",
        iso2: "MO",
      },
      {
        name: "Moscow",
        iso2: "MOS",
      },
      {
        name: "Moscow",
        iso2: "MOW",
      },
      {
        name: "Murmansk",
        iso2: "MUR",
      },
      {
        name: "Nenets",
        iso2: "NEN",
      },
      {
        name: "Nizhny Novgorod",
        iso2: "NIZ",
      },
      {
        name: "North Ossetia-Alania",
        iso2: "SE",
      },
      {
        name: "Novgorod",
        iso2: "NGR",
      },
      {
        name: "Novosibirsk",
        iso2: "NVS",
      },
      {
        name: "Omsk",
        iso2: "OMS",
      },
      {
        name: "Orenburg",
        iso2: "ORE",
      },
      {
        name: "Oryol",
        iso2: "ORL",
      },
      {
        name: "Penza",
        iso2: "PNZ",
      },
      {
        name: "Perm",
        iso2: "PER",
      },
      {
        name: "Primorsky",
        iso2: "PRI",
      },
      {
        name: "Pskov",
        iso2: "PSK",
      },
      {
        name: "Rostov",
        iso2: "ROS",
      },
      {
        name: "Ryazan",
        iso2: "RYA",
      },
      {
        name: "Saint Petersburg",
        iso2: "SPE",
      },
      {
        name: "Sakha",
        iso2: "SA",
      },
      {
        name: "Sakhalin",
        iso2: "SAK",
      },
      {
        name: "Samara",
        iso2: "SAM",
      },
      {
        name: "Saratov",
        iso2: "SAR",
      },
      {
        name: "Smolensk",
        iso2: "SMO",
      },
      {
        name: "Stavropol",
        iso2: "STA",
      },
      {
        name: "Sverdlovsk",
        iso2: "SVE",
      },
      {
        name: "Tambov",
        iso2: "TAM",
      },
      {
        name: "Tatarstan",
        iso2: "TA",
      },
      {
        name: "Tomsk",
        iso2: "TOM",
      },
      {
        name: "Tula",
        iso2: "TUL",
      },
      {
        name: "Tuva",
        iso2: "TY",
      },
      {
        name: "Tver",
        iso2: "TVE",
      },
      {
        name: "Tyumen",
        iso2: "TYU",
      },
      {
        name: "Udmurt",
        iso2: "UD",
      },
      {
        name: "Ulyanovsk",
        iso2: "ULY",
      },
      {
        name: "Vladimir",
        iso2: "VLA",
      },
      {
        name: "Volgograd Oblast",
        iso2: "VGG",
      },
      {
        name: "Vologda",
        iso2: "VLG",
      },
      {
        name: "Voronezh",
        iso2: "VOR",
      },
      {
        name: "Yamalo-Nenets",
        iso2: "YAN",
      },
      {
        name: "Yaroslavl",
        iso2: "YAR",
      },
      {
        name: "Zabaykalsky",
        iso2: "ZAB",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "INACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Rwanda",
    iso2: "RW",
    states: [
      {
        name: "Eastern",
        iso2: "02",
      },
      {
        name: "Kigali",
        iso2: "01",
      },
      {
        name: "Northern",
        iso2: "03",
      },
      {
        name: "Southern",
        iso2: "05",
      },
      {
        name: "Western",
        iso2: "04",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Saint-Barthelemy",
    iso2: "BL",
    states: [
      {
        name: "Saint-Barthelemy",
        iso2: "BL",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Saint Helena",
    iso2: "SH",
    states: [
      {
        name: "Saint Helena",
        iso2: "SH",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Saint Kitts and Nevis",
    iso2: "KN",
    states: [
      {
        name: "Christ Church Nichola Town",
        iso2: "01",
      },
      {
        name: "Nevis",
        iso2: "N",
      },
      {
        name: "Saint Anne Sandy Point",
        iso2: "02",
      },
      {
        name: "Saint George Gingerland",
        iso2: "04",
      },
      {
        name: "Saint James Windward",
        iso2: "05",
      },
      {
        name: "Saint John Capisterre",
        iso2: "06",
      },
      {
        name: "Saint John Figtree",
        iso2: "07",
      },
      {
        name: "Saint Kitts",
        iso2: "K",
      },
      {
        name: "Saint Mary Cayon",
        iso2: "08",
      },
      {
        name: "Saint Paul Capisterre",
        iso2: "09",
      },
      {
        name: "Saint Paul Charlestown",
        iso2: "10",
      },
      {
        name: "Saint Peter Basseterre",
        iso2: "11",
      },
      {
        name: "Saint Thomas Lowland",
        iso2: "12",
      },
      {
        name: "Saint Thomas Middle Island",
        iso2: "13",
      },
      {
        name: "Trinity Palmetto Point",
        iso2: "15",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Saint Lucia",
    iso2: "LC",
    states: [
      {
        name: "Anse la Raye",
        iso2: "01",
      },
      {
        name: "Canaries",
        iso2: "12",
      },
      {
        name: "Castries",
        iso2: "02",
      },
      {
        name: "Choiseul",
        iso2: "03",
      },
      {
        name: "Dauphin",
        iso2: "04",
      },
      {
        name: "Dennery",
        iso2: "05",
      },
      {
        name: "Gros Islet",
        iso2: "06",
      },
      {
        name: "Laborie",
        iso2: "07",
      },
      {
        name: "Micoud",
        iso2: "08",
      },
      {
        name: "Praslin",
        iso2: "09",
      },
      {
        name: "Soufrière",
        iso2: "10",
      },
      {
        name: "Vieux Fort",
        iso2: "11",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Saint-Martin (French part)",
    iso2: "MF",
    states: [
      {
        name: "Saint-Martin (French part)",
        iso2: "MF",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Saint Pierre and Miquelon",
    iso2: "PM",
    states: [
      {
        name: "Saint Pierre and Miquelon",
        iso2: "PM",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Saint Vincent and the Grenadines",
    iso2: "VC",
    states: [
      {
        name: "Charlotte",
        iso2: "01",
      },
      {
        name: "Grenadines",
        iso2: "06",
      },
      {
        name: "Saint Andrew",
        iso2: "02",
      },
      {
        name: "Saint David",
        iso2: "03",
      },
      {
        name: "Saint George",
        iso2: "04",
      },
      {
        name: "Saint Patrick",
        iso2: "05",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Samoa",
    iso2: "WS",
    states: [
      {
        name: "A'ana",
        iso2: "AA",
      },
      {
        name: "Aiga-i-le-Tai",
        iso2: "AL",
      },
      {
        name: "Atua",
        iso2: "AT",
      },
      {
        name: "Fa'asaleleaga",
        iso2: "FA",
      },
      {
        name: "Gaga'emauga",
        iso2: "GE",
      },
      {
        name: "Gaga'ifomauga",
        iso2: "GI",
      },
      {
        name: "Palauli",
        iso2: "PA",
      },
      {
        name: "Satupa'itea",
        iso2: "SA",
      },
      {
        name: "Tuamasaga",
        iso2: "TU",
      },
      {
        name: "Va'a-o-Fonoti",
        iso2: "VF",
      },
      {
        name: "Vaisigano",
        iso2: "VS",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "San Marino",
    iso2: "SM",
    states: [
      {
        name: "Acquaviva",
        iso2: "01",
      },
      {
        name: "Borgo Maggiore",
        iso2: "06",
      },
      {
        name: "Chiesanuova",
        iso2: "02",
      },
      {
        name: "Domagnano",
        iso2: "03",
      },
      {
        name: "Faetano",
        iso2: "04",
      },
      {
        name: "Fiorentino",
        iso2: "05",
      },
      {
        name: "Montegiardino",
        iso2: "08",
      },
      {
        name: "San Marino",
        iso2: "07",
      },
      {
        name: "Serravalle",
        iso2: "09",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Sao Tome and Principe",
    iso2: "ST",
    states: [
      {
        name: "Príncipe",
        iso2: "P",
      },
      {
        name: "São Tomé",
        iso2: "S",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Saudi Arabia",
    iso2: "SA",
    states: [
      {
        name: "Al Bahah",
        iso2: "11",
      },
      {
        name: "Al Jawf",
        iso2: "12",
      },
      {
        name: "Al Madinah",
        iso2: "03",
      },
      {
        name: "Al-Qassim",
        iso2: "05",
      },
      {
        name: "'Asir",
        iso2: "14",
      },
      {
        name: "Eastern Province",
        iso2: "04",
      },
      {
        name: "Ha'il",
        iso2: "06",
      },
      {
        name: "Jizan",
        iso2: "09",
      },
      {
        name: "Makkah",
        iso2: "02",
      },
      {
        name: "Najran",
        iso2: "10",
      },
      {
        name: "Northern Borders",
        iso2: "08",
      },
      {
        name: "Riyadh",
        iso2: "01",
      },
      {
        name: "Tabuk",
        iso2: "07",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Senegal",
    iso2: "SN",
    states: [
      {
        name: "Dakar",
        iso2: "DK",
      },
      {
        name: "Diourbel Region",
        iso2: "DB",
      },
      {
        name: "Fatick",
        iso2: "FK",
      },
      {
        name: "Kaffrine",
        iso2: "KA",
      },
      {
        name: "Kaolack",
        iso2: "KL",
      },
      {
        name: "Kédougou",
        iso2: "KE",
      },
      {
        name: "Kolda",
        iso2: "KD",
      },
      {
        name: "Louga",
        iso2: "LG",
      },
      {
        name: "Matam",
        iso2: "MT",
      },
      {
        name: "Saint-Louis",
        iso2: "SL",
      },
      {
        name: "Sédhiou",
        iso2: "SE",
      },
      {
        name: "Tambacounda Region",
        iso2: "TC",
      },
      {
        name: "Thiès Region",
        iso2: "TH",
      },
      {
        name: "Ziguinchor",
        iso2: "ZG",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Serbia",
    iso2: "RS",
    states: [
      {
        name: "Belgrade",
        iso2: "00",
      },
      {
        name: "Bor",
        iso2: "14",
      },
      {
        name: "Braničevo",
        iso2: "11",
      },
      {
        name: "Central Banat",
        iso2: "02",
      },
      {
        name: "Jablanica",
        iso2: "23",
      },
      {
        name: "Kolubara",
        iso2: "09",
      },
      {
        name: "Mačva",
        iso2: "08",
      },
      {
        name: "Moravica",
        iso2: "17",
      },
      {
        name: "Nišava",
        iso2: "20",
      },
      {
        name: "North Bačka",
        iso2: "01",
      },
      {
        name: "North Banat",
        iso2: "03",
      },
      {
        name: "Pčinja",
        iso2: "24",
      },
      {
        name: "Pirot",
        iso2: "22",
      },
      {
        name: "Podunavlje",
        iso2: "10",
      },
      {
        name: "Pomoravlje",
        iso2: "13",
      },
      {
        name: "Rasina",
        iso2: "19",
      },
      {
        name: "Raška",
        iso2: "18",
      },
      {
        name: "South Bačka",
        iso2: "06",
      },
      {
        name: "South Banat",
        iso2: "04",
      },
      {
        name: "Srem",
        iso2: "07",
      },
      {
        name: "Šumadija",
        iso2: "12",
      },
      {
        name: "Toplica",
        iso2: "21",
      },
      {
        name: "Vojvodina",
        iso2: "VO",
      },
      {
        name: "West Bačka",
        iso2: "05",
      },
      {
        name: "Zaječar",
        iso2: "15",
      },
      {
        name: "Zlatibor",
        iso2: "16",
      },
    ],
    legal_age: 15,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Seychelles",
    iso2: "SC",
    states: [
      {
        name: "Anse-aux-Pins",
        iso2: "01",
      },
      {
        name: "Anse Boileau",
        iso2: "02",
      },
      {
        name: "Anse Royale",
        iso2: "05",
      },
      {
        name: "Au Cap",
        iso2: "04",
      },
      {
        name: "Baie Lazare",
        iso2: "06",
      },
      {
        name: "Baie Sainte Anne",
        iso2: "07",
      },
      {
        name: "Beau Vallon",
        iso2: "08",
      },
      {
        name: "Bel Air",
        iso2: "09",
      },
      {
        name: "Bel Ombre",
        iso2: "10",
      },
      {
        name: "Cascade",
        iso2: "11",
      },
      {
        name: "Glacis",
        iso2: "12",
      },
      {
        name: "Grand'Anse Mahé",
        iso2: "13",
      },
      {
        name: "Grand'Anse Praslin",
        iso2: "14",
      },
      {
        name: "La Digue",
        iso2: "15",
      },
      {
        name: "La Rivière Anglaise",
        iso2: "16",
      },
      {
        name: "Les Mamelles",
        iso2: "24",
      },
      {
        name: "Mont Buxton",
        iso2: "17",
      },
      {
        name: "Mont Fleuri",
        iso2: "18",
      },
      {
        name: "Plaisance",
        iso2: "19",
      },
      {
        name: "Pointe La Rue",
        iso2: "20",
      },
      {
        name: "Port Glaud",
        iso2: "21",
      },
      {
        name: "Roche Caiman",
        iso2: "25",
      },
      {
        name: "Saint Louis",
        iso2: "22",
      },
      {
        name: "Takamaka",
        iso2: "23",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Sierra Leone",
    iso2: "SL",
    states: [
      {
        name: "Eastern",
        iso2: "E",
      },
      {
        name: "Northern",
        iso2: "N",
      },
      {
        name: "Southern",
        iso2: "S",
      },
      {
        name: "Western",
        iso2: "W",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Singapore",
    iso2: "SG",
    states: [
      {
        name: "Central Singapore",
        iso2: "01",
      },
      {
        name: "North East",
        iso2: "02",
      },
      {
        name: "North West",
        iso2: "03",
      },
      {
        name: "South East",
        iso2: "04",
      },
      {
        name: "South West",
        iso2: "05",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Sint Maarten (Dutch part)",
    iso2: "SX",
    states: [
      {
        name: "Sint Maarten (Dutch part)",
        iso2: "SX",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Slovakia",
    iso2: "SK",
    states: [
      {
        name: "Banská Bystrica",
        iso2: "BC",
      },
      {
        name: "Bratislava",
        iso2: "BL",
      },
      {
        name: "Košice",
        iso2: "KI",
      },
      {
        name: "Nitra",
        iso2: "NI",
      },
      {
        name: "Prešov",
        iso2: "PV",
      },
      {
        name: "Trenčín",
        iso2: "TC",
      },
      {
        name: "Trnava",
        iso2: "TA",
      },
      {
        name: "Žilina",
        iso2: "ZI",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Slovenia",
    iso2: "SI",
    states: [
      {
        name: "Ajdovščina",
        iso2: "001",
      },
      {
        name: "Ankaran",
        iso2: "213",
      },
      {
        name: "Apače",
        iso2: "195",
      },
      {
        name: "Beltinci",
        iso2: "002",
      },
      {
        name: "Benedikt",
        iso2: "148",
      },
      {
        name: "Bistrica ob Sotli",
        iso2: "149",
      },
      {
        name: "Bled",
        iso2: "003",
      },
      {
        name: "Bloke",
        iso2: "150",
      },
      {
        name: "Bohinj",
        iso2: "004",
      },
      {
        name: "Borovnica",
        iso2: "005",
      },
      {
        name: "Bovec",
        iso2: "006",
      },
      {
        name: "Braslovče",
        iso2: "151",
      },
      {
        name: "Brda",
        iso2: "007",
      },
      {
        name: "Brežice",
        iso2: "009",
      },
      {
        name: "Brezovica",
        iso2: "008",
      },
      {
        name: "Cankova",
        iso2: "152",
      },
      {
        name: "Celje",
        iso2: "011",
      },
      {
        name: "Cerklje na Gorenjskem",
        iso2: "012",
      },
      {
        name: "Cerknica",
        iso2: "013",
      },
      {
        name: "Cerkno",
        iso2: "014",
      },
      {
        name: "Cerkvenjak",
        iso2: "153",
      },
      {
        name: "Cirkulane",
        iso2: "196",
      },
      {
        name: "Črenšovci",
        iso2: "015",
      },
      {
        name: "Črna na Koroškem",
        iso2: "016",
      },
      {
        name: "Črnomelj",
        iso2: "017",
      },
      {
        name: "Destrnik",
        iso2: "018",
      },
      {
        name: "Divača",
        iso2: "019",
      },
      {
        name: "Dobje",
        iso2: "154",
      },
      {
        name: "Dobrepolje",
        iso2: "020",
      },
      {
        name: "Dobrna",
        iso2: "155",
      },
      {
        name: "Dobrova–Polhov Gradec",
        iso2: "021",
      },
      {
        name: "Dobrovnik",
        iso2: "156",
      },
      {
        name: "Dolenjske Toplice",
        iso2: "157",
      },
      {
        name: "Dol pri Ljubljani",
        iso2: "022",
      },
      {
        name: "Domžale",
        iso2: "023",
      },
      {
        name: "Dornava",
        iso2: "024",
      },
      {
        name: "Dravograd",
        iso2: "025",
      },
      {
        name: "Duplek",
        iso2: "026",
      },
      {
        name: "Gorenja Vas–Poljane",
        iso2: "027",
      },
      {
        name: "Gorišnica",
        iso2: "028",
      },
      {
        name: "Gorje",
        iso2: "207",
      },
      {
        name: "Gornja Radgona",
        iso2: "029",
      },
      {
        name: "Gornji Grad",
        iso2: "030",
      },
      {
        name: "Gornji Petrovci",
        iso2: "031",
      },
      {
        name: "Grad",
        iso2: "158",
      },
      {
        name: "Grosuplje",
        iso2: "032",
      },
      {
        name: "Hajdina",
        iso2: "159",
      },
      {
        name: "Hoče–Slivnica",
        iso2: "160",
      },
      {
        name: "Hodoš",
        iso2: "161",
      },
      {
        name: "Horjul",
        iso2: "162",
      },
      {
        name: "Hrastnik",
        iso2: "034",
      },
      {
        name: "Hrpelje–Kozina",
        iso2: "035",
      },
      {
        name: "Idrija",
        iso2: "036",
      },
      {
        name: "Ig",
        iso2: "037",
      },
      {
        name: "Ilirska Bistrica",
        iso2: "038",
      },
      {
        name: "Ivančna Gorica",
        iso2: "039",
      },
      {
        name: "Izola",
        iso2: "040",
      },
      {
        name: "Jesenice",
        iso2: "041",
      },
      {
        name: "Jezersko",
        iso2: "163",
      },
      {
        name: "Juršinci",
        iso2: "042",
      },
      {
        name: "Kamnik",
        iso2: "043",
      },
      {
        name: "Kanal ob Soči",
        iso2: "044",
      },
      {
        name: "Kidričevo",
        iso2: "045",
      },
      {
        name: "Kobarid",
        iso2: "046",
      },
      {
        name: "Kobilje",
        iso2: "047",
      },
      {
        name: "Kočevje",
        iso2: "048",
      },
      {
        name: "Komen",
        iso2: "049",
      },
      {
        name: "Komenda",
        iso2: "164",
      },
      {
        name: "Koper",
        iso2: "050",
      },
      {
        name: "Kostanjevica na Krki",
        iso2: "197",
      },
      {
        name: "Kostel",
        iso2: "165",
      },
      {
        name: "Kozje",
        iso2: "051",
      },
      {
        name: "Kranj",
        iso2: "052",
      },
      {
        name: "Kranjska Gora",
        iso2: "053",
      },
      {
        name: "Križevci",
        iso2: "166",
      },
      {
        name: "Krško",
        iso2: "054",
      },
      {
        name: "Kungota",
        iso2: "055",
      },
      {
        name: "Kuzma",
        iso2: "056",
      },
      {
        name: "Laško",
        iso2: "057",
      },
      {
        name: "Lenart",
        iso2: "058",
      },
      {
        name: "Lendava",
        iso2: "059",
      },
      {
        name: "Litija",
        iso2: "060",
      },
      {
        name: "Ljubljana",
        iso2: "061",
      },
      {
        name: "Ljubno",
        iso2: "062",
      },
      {
        name: "Ljutomer",
        iso2: "063",
      },
      {
        name: "Logatec",
        iso2: "064",
      },
      {
        name: "Log–Dragomer",
        iso2: "208",
      },
      {
        name: "Loška Dolina",
        iso2: "065",
      },
      {
        name: "Loški Potok",
        iso2: "066",
      },
      {
        name: "Lovrenc na Pohorju",
        iso2: "167",
      },
      {
        name: "Luče",
        iso2: "067",
      },
      {
        name: "Lukovica",
        iso2: "068",
      },
      {
        name: "Majšperk",
        iso2: "069",
      },
      {
        name: "Makole",
        iso2: "198",
      },
      {
        name: "Maribor",
        iso2: "070",
      },
      {
        name: "Markovci",
        iso2: "168",
      },
      {
        name: "Medvode",
        iso2: "071",
      },
      {
        name: "Mengeš",
        iso2: "072",
      },
      {
        name: "Metlika",
        iso2: "073",
      },
      {
        name: "Mežica",
        iso2: "074",
      },
      {
        name: "Miklavž na Dravskem Polju",
        iso2: "169",
      },
      {
        name: "Miren–Kostanjevica",
        iso2: "075",
      },
      {
        name: "Mirna",
        iso2: "212",
      },
      {
        name: "Mirna Peč",
        iso2: "170",
      },
      {
        name: "Mislinja",
        iso2: "076",
      },
      {
        name: "Mokronog–Trebelno",
        iso2: "199",
      },
      {
        name: "Moravče",
        iso2: "077",
      },
      {
        name: "Moravske Toplice",
        iso2: "078",
      },
      {
        name: "Mozirje",
        iso2: "079",
      },
      {
        name: "Murska Sobota",
        iso2: "080",
      },
      {
        name: "Muta",
        iso2: "081",
      },
      {
        name: "Naklo",
        iso2: "082",
      },
      {
        name: "Nazarje",
        iso2: "083",
      },
      {
        name: "Nova Gorica",
        iso2: "084",
      },
      {
        name: "Novo Mesto",
        iso2: "085",
      },
      {
        name: "Odranci",
        iso2: "086",
      },
      {
        name: "Oplotnica",
        iso2: "171",
      },
      {
        name: "Ormož",
        iso2: "087",
      },
      {
        name: "Osilnica",
        iso2: "088",
      },
      {
        name: "Pesnica",
        iso2: "089",
      },
      {
        name: "Piran",
        iso2: "090",
      },
      {
        name: "Pivka",
        iso2: "091",
      },
      {
        name: "Podčetrtek",
        iso2: "092",
      },
      {
        name: "Podlehnik",
        iso2: "172",
      },
      {
        name: "Podvelka",
        iso2: "093",
      },
      {
        name: "Poljčane",
        iso2: "200",
      },
      {
        name: "Polzela",
        iso2: "173",
      },
      {
        name: "Postojna",
        iso2: "094",
      },
      {
        name: "Prebold",
        iso2: "174",
      },
      {
        name: "Preddvor",
        iso2: "095",
      },
      {
        name: "Prevalje",
        iso2: "175",
      },
      {
        name: "Ptuj",
        iso2: "096",
      },
      {
        name: "Puconci",
        iso2: "097",
      },
      {
        name: "Rače–Fram",
        iso2: "098",
      },
      {
        name: "Radeče",
        iso2: "099",
      },
      {
        name: "Radenci",
        iso2: "100",
      },
      {
        name: "Radlje ob Dravi",
        iso2: "101",
      },
      {
        name: "Radovljica",
        iso2: "102",
      },
      {
        name: "Ravne na Koroškem",
        iso2: "103",
      },
      {
        name: "Razkrižje",
        iso2: "176",
      },
      {
        name: "Rečica ob Savinji",
        iso2: "209",
      },
      {
        name: "Renče–Vogrsko",
        iso2: "201",
      },
      {
        name: "Ribnica",
        iso2: "104",
      },
      {
        name: "Ribnica na Pohorju",
        iso2: "177",
      },
      {
        name: "Rogaška Slatina",
        iso2: "106",
      },
      {
        name: "Rogašovci",
        iso2: "105",
      },
      {
        name: "Rogatec",
        iso2: "107",
      },
      {
        name: "Ruše",
        iso2: "108",
      },
      {
        name: "Šalovci",
        iso2: "033",
      },
      {
        name: "Selnica ob Dravi",
        iso2: "178",
      },
      {
        name: "Semič",
        iso2: "109",
      },
      {
        name: "Šempeter–Vrtojba",
        iso2: "183",
      },
      {
        name: "Šenčur",
        iso2: "117",
      },
      {
        name: "Šentilj",
        iso2: "118",
      },
      {
        name: "Šentjernej",
        iso2: "119",
      },
      {
        name: "Šentjur",
        iso2: "120",
      },
      {
        name: "Šentrupert",
        iso2: "211",
      },
      {
        name: "Sevnica",
        iso2: "110",
      },
      {
        name: "Sežana",
        iso2: "111",
      },
      {
        name: "Škocjan",
        iso2: "121",
      },
      {
        name: "Škofja Loka",
        iso2: "122",
      },
      {
        name: "Škofljica",
        iso2: "123",
      },
      {
        name: "Slovenj Gradec",
        iso2: "112",
      },
      {
        name: "Slovenska Bistrica",
        iso2: "113",
      },
      {
        name: "Slovenske Konjice",
        iso2: "114",
      },
      {
        name: "Šmarje pri Jelšah",
        iso2: "124",
      },
      {
        name: "Šmarješke Toplice",
        iso2: "206",
      },
      {
        name: "Šmartno ob Paki",
        iso2: "125",
      },
      {
        name: "Šmartno pri Litiji",
        iso2: "194",
      },
      {
        name: "Sodražica",
        iso2: "179",
      },
      {
        name: "Solčava",
        iso2: "180",
      },
      {
        name: "Šoštanj",
        iso2: "126",
      },
      {
        name: "Središče ob Dravi",
        iso2: "202",
      },
      {
        name: "Starše",
        iso2: "115",
      },
      {
        name: "Štore",
        iso2: "127",
      },
      {
        name: "Straža",
        iso2: "203",
      },
      {
        name: "Sveta Ana",
        iso2: "181",
      },
      {
        name: "Sveta Trojica v Slovenskih Goricah",
        iso2: "204",
      },
      {
        name: "Sveti Andraž v Slovenskih Goricah",
        iso2: "182",
      },
      {
        name: "Sveti Jurij ob Ščavnici",
        iso2: "116",
      },
      {
        name: "Sveti Jurij v Slovenskih Goricah",
        iso2: "210",
      },
      {
        name: "Sveti Tomaž",
        iso2: "205",
      },
      {
        name: "Tabor",
        iso2: "184",
      },
      {
        name: "Tišina",
        iso2: "010",
      },
      {
        name: "Tolmin",
        iso2: "128",
      },
      {
        name: "Trbovlje",
        iso2: "129",
      },
      {
        name: "Trebnje",
        iso2: "130",
      },
      {
        name: "Trnovska Vas",
        iso2: "185",
      },
      {
        name: "Tržič",
        iso2: "131",
      },
      {
        name: "Trzin",
        iso2: "186",
      },
      {
        name: "Turnišče",
        iso2: "132",
      },
      {
        name: "Velika Polana",
        iso2: "187",
      },
      {
        name: "Velike Lašče",
        iso2: "134",
      },
      {
        name: "Veržej",
        iso2: "188",
      },
      {
        name: "Videm",
        iso2: "135",
      },
      {
        name: "Vipava",
        iso2: "136",
      },
      {
        name: "Vitanje",
        iso2: "137",
      },
      {
        name: "Vodice",
        iso2: "138",
      },
      {
        name: "Vojnik",
        iso2: "139",
      },
      {
        name: "Vransko",
        iso2: "189",
      },
      {
        name: "Vrhnika",
        iso2: "140",
      },
      {
        name: "Vuzenica",
        iso2: "141",
      },
      {
        name: "Zagorje ob Savi",
        iso2: "142",
      },
      {
        name: "Žalec",
        iso2: "190",
      },
      {
        name: "Zavrč",
        iso2: "143",
      },
      {
        name: "Železniki",
        iso2: "146",
      },
      {
        name: "Žetale",
        iso2: "191",
      },
      {
        name: "Žiri",
        iso2: "147",
      },
      {
        name: "Žirovnica",
        iso2: "192",
      },
      {
        name: "Zreče",
        iso2: "144",
      },
      {
        name: "Žužemberk",
        iso2: "193",
      },
    ],
    legal_age: 15,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Solomon Islands",
    iso2: "SB",
    states: [
      {
        name: "Central",
        iso2: "CE",
      },
      {
        name: "Choiseul",
        iso2: "CH",
      },
      {
        name: "Guadalcanal",
        iso2: "GU",
      },
      {
        name: "Honiara",
        iso2: "CT",
      },
      {
        name: "Isabel",
        iso2: "IS",
      },
      {
        name: "Makira-Ulawa",
        iso2: "MK",
      },
      {
        name: "Malaita",
        iso2: "ML",
      },
      {
        name: "Rennell and Bellona",
        iso2: "RB",
      },
      {
        name: "Temotu",
        iso2: "TE",
      },
      {
        name: "Western",
        iso2: "WE",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Somalia",
    iso2: "SO",
    states: [
      {
        name: "Awdal",
        iso2: "AW",
      },
      {
        name: "Bakool",
        iso2: "BK",
      },
      {
        name: "Banaadir",
        iso2: "BN",
      },
      {
        name: "Bari",
        iso2: "BR",
      },
      {
        name: "Bay",
        iso2: "BY",
      },
      {
        name: "Galguduud",
        iso2: "GA",
      },
      {
        name: "Gedo",
        iso2: "GE",
      },
      {
        name: "Hiran",
        iso2: "HI",
      },
      {
        name: "Lower Juba",
        iso2: "JH",
      },
      {
        name: "Lower Shebelle",
        iso2: "SH",
      },
      {
        name: "Middle Juba",
        iso2: "JD",
      },
      {
        name: "Middle Shebelle",
        iso2: "SD",
      },
      {
        name: "Mudug",
        iso2: "MU",
      },
      {
        name: "Nugal",
        iso2: "NU",
      },
      {
        name: "Sanaag",
        iso2: "SA",
      },
      {
        name: "Togdheer",
        iso2: "TO",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "South Africa",
    iso2: "ZA",
    states: [
      {
        name: "Eastern Cape",
        iso2: "EC",
      },
      {
        name: "Free State",
        iso2: "FS",
      },
      {
        name: "Gauteng",
        iso2: "GP",
      },
      {
        name: "KwaZulu-Natal",
        iso2: "KZN",
      },
      {
        name: "Limpopo",
        iso2: "LP",
      },
      {
        name: "Mpumalanga",
        iso2: "MP",
      },
      {
        name: "Northern Cape",
        iso2: "NC",
      },
      {
        name: "North West",
        iso2: "NW",
      },
      {
        name: "Western Cape",
        iso2: "WC",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "South Georgia",
    iso2: "GS",
    states: [
      {
        name: "South Georgia",
        iso2: "GS",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "South Korea",
    iso2: "KR",
    states: [
      {
        name: "Busan",
        iso2: "26",
      },
      {
        name: "Daegu",
        iso2: "27",
      },
      {
        name: "Daejeon",
        iso2: "30",
      },
      {
        name: "Gangwon",
        iso2: "42",
      },
      {
        name: "Gwangju",
        iso2: "29",
      },
      {
        name: "Gyeonggi",
        iso2: "41",
      },
      {
        name: "Incheon",
        iso2: "28",
      },
      {
        name: "Jeju",
        iso2: "49",
      },
      {
        name: "North Chungcheong",
        iso2: "43",
      },
      {
        name: "North Gyeongsang",
        iso2: "47",
      },
      {
        name: "North Jeolla",
        iso2: "45",
      },
      {
        name: "Sejong City",
        iso2: "50",
      },
      {
        name: "Seoul",
        iso2: "11",
      },
      {
        name: "South Chungcheong",
        iso2: "44",
      },
      {
        name: "South Gyeongsang",
        iso2: "48",
      },
      {
        name: "South Jeolla",
        iso2: "46",
      },
      {
        name: "Ulsan",
        iso2: "31",
      },
    ],
    legal_age: 14,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE"],
  },
  {
    name: "South Sudan",
    iso2: "SS",
    states: [
      {
        name: "Central Equatoria",
        iso2: "EC",
      },
      {
        name: "Eastern Equatoria",
        iso2: "EE",
      },
      {
        name: "Jonglei State",
        iso2: "JG",
      },
      {
        name: "Lakes",
        iso2: "LK",
      },
      {
        name: "Northern Bahr el Ghazal",
        iso2: "BN",
      },
      {
        name: "Unity",
        iso2: "UY",
      },
      {
        name: "Upper Nile",
        iso2: "NU",
      },
      {
        name: "Warrap",
        iso2: "WR",
      },
      {
        name: "Western Bahr el Ghazal",
        iso2: "BW",
      },
      {
        name: "Western Equatoria",
        iso2: "EW",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Spain",
    iso2: "ES",
    states: [
      {
        name: "A Coruña",
        iso2: "C",
      },
      {
        name: "Albacete",
        iso2: "AB",
      },
      {
        name: "Alicante",
        iso2: "A",
      },
      {
        name: "Almeria",
        iso2: "AL",
      },
      {
        name: "Andalusia",
        iso2: "AN",
      },
      {
        name: "Araba",
        iso2: "VI",
      },
      {
        name: "Aragon",
        iso2: "AR",
      },
      {
        name: "Asturias",
        iso2: "O",
      },
      {
        name: "Asturias",
        iso2: "AS",
      },
      {
        name: "Ávila",
        iso2: "AV",
      },
      {
        name: "Badajoz",
        iso2: "BA",
      },
      {
        name: "Balearic Islands",
        iso2: "IB",
      },
      {
        name: "Barcelona",
        iso2: "B",
      },
      {
        name: "Basque Country",
        iso2: "PV",
      },
      {
        name: "Bizkaia",
        iso2: "BI",
      },
      {
        name: "Burgos",
        iso2: "BU",
      },
      {
        name: "Caceres",
        iso2: "CC",
      },
      {
        name: "Cádiz",
        iso2: "CA",
      },
      {
        name: "Canary Islands",
        iso2: "CN",
      },
      {
        name: "Cantabria",
        iso2: "S",
      },
      {
        name: "Cantabria",
        iso2: "CB",
      },
      {
        name: "Castellón",
        iso2: "CS",
      },
      {
        name: "Castile and Leon",
        iso2: "CL",
      },
      {
        name: "Castilla-La Mancha",
        iso2: "CM",
      },
      {
        name: "Catalonia",
        iso2: "CT",
      },
      {
        name: "Ceuta",
        iso2: "CE",
      },
      {
        name: "Ciudad Real",
        iso2: "CR",
      },
      {
        name: "Community of Madrid",
        iso2: "MD",
      },
      {
        name: "Córdoba",
        iso2: "CO",
      },
      {
        name: "Cuenca",
        iso2: "CU",
      },
      {
        name: "Estremadura",
        iso2: "EX",
      },
      {
        name: "Galicia",
        iso2: "GA",
      },
      {
        name: "Gipuzkoa",
        iso2: "SS",
      },
      {
        name: "Girona",
        iso2: "GI",
      },
      {
        name: "Granada",
        iso2: "GR",
      },
      {
        name: "Guadalajara",
        iso2: "GU",
      },
      {
        name: "Huelva",
        iso2: "H",
      },
      {
        name: "Huesca",
        iso2: "HU",
      },
      {
        name: "Islas Baleares",
        iso2: "PM",
      },
      {
        name: "Jaén",
        iso2: "J",
      },
      {
        name: "La Rioja",
        iso2: "RI",
      },
      {
        name: "La Rioja",
        iso2: "LO",
      },
      {
        name: "Las Palmas",
        iso2: "GC",
      },
      {
        name: "León",
        iso2: "LE",
      },
      {
        name: "Lleida",
        iso2: "L",
      },
      {
        name: "Lugo",
        iso2: "LU",
      },
      {
        name: "Madrid",
        iso2: "M",
      },
      {
        name: "Málaga",
        iso2: "MA",
      },
      {
        name: "Melilla",
        iso2: "ML",
      },
      {
        name: "Murcia",
        iso2: "MU",
      },
      {
        name: "Navarra",
        iso2: "NA",
      },
      {
        name: "Navarre",
        iso2: "NC",
      },
      {
        name: "Ourense",
        iso2: "OR",
      },
      {
        name: "Palencia",
        iso2: "P",
      },
      {
        name: "Pontevedra",
        iso2: "PO",
      },
      {
        name: "Region of Murcia",
        iso2: "MC",
      },
      {
        name: "Salamanca",
        iso2: "SA",
      },
      {
        name: "Santa Cruz de Tenerife",
        iso2: "TF",
      },
      {
        name: "Segovia",
        iso2: "SG",
      },
      {
        name: "Sevilla",
        iso2: "SE",
      },
      {
        name: "Soria",
        iso2: "SO",
      },
      {
        name: "Tarragona",
        iso2: "T",
      },
      {
        name: "Teruel",
        iso2: "TE",
      },
      {
        name: "Toledo",
        iso2: "TO",
      },
      {
        name: "Valencia",
        iso2: "V",
      },
      {
        name: "Valencian Community",
        iso2: "VC",
      },
      {
        name: "Valladolid",
        iso2: "VA",
      },
      {
        name: "Zamora",
        iso2: "ZA",
      },
      {
        name: "Zaragoza",
        iso2: "Z",
      },
    ],
    legal_age: 14,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Sri Lanka",
    iso2: "LK",
    states: [
      {
        name: "Ampara",
        iso2: "52",
      },
      {
        name: "Anuradhapura",
        iso2: "71",
      },
      {
        name: "Badulla",
        iso2: "81",
      },
      {
        name: "Batticaloa",
        iso2: "51",
      },
      {
        name: "Central",
        iso2: "2",
      },
      {
        name: "Colombo",
        iso2: "11",
      },
      {
        name: "Eastern",
        iso2: "5",
      },
      {
        name: "Galle",
        iso2: "31",
      },
      {
        name: "Gampaha",
        iso2: "12",
      },
      {
        name: "Hambantota",
        iso2: "33",
      },
      {
        name: "Jaffna",
        iso2: "41",
      },
      {
        name: "Kalutara",
        iso2: "13",
      },
      {
        name: "Kandy",
        iso2: "21",
      },
      {
        name: "Kegalle",
        iso2: "92",
      },
      {
        name: "Kilinochchi",
        iso2: "42",
      },
      {
        name: "Mannar",
        iso2: "43",
      },
      {
        name: "Matale",
        iso2: "22",
      },
      {
        name: "Matara",
        iso2: "32",
      },
      {
        name: "Monaragala",
        iso2: "82",
      },
      {
        name: "Mullaitivu",
        iso2: "45",
      },
      {
        name: "North Central",
        iso2: "7",
      },
      {
        name: "Northern",
        iso2: "4",
      },
      {
        name: "North Western",
        iso2: "6",
      },
      {
        name: "Nuwara Eliya",
        iso2: "23",
      },
      {
        name: "Polonnaruwa",
        iso2: "72",
      },
      {
        name: "Puttalam",
        iso2: "62",
      },
      {
        name: "Ratnapura",
        iso2: "91",
      },
      {
        name: "Sabaragamuwa",
        iso2: "9",
      },
      {
        name: "Southern",
        iso2: "3",
      },
      {
        name: "Trincomalee",
        iso2: "53",
      },
      {
        name: "Uva",
        iso2: "8",
      },
      {
        name: "Vavuniya",
        iso2: "44",
      },
      {
        name: "Western",
        iso2: "1",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Sudan",
    iso2: "SD",
    states: [
      {
        name: "Al Jazirah",
        iso2: "GZ",
      },
      {
        name: "Al Qadarif",
        iso2: "GD",
      },
      {
        name: "Blue Nile",
        iso2: "NB",
      },
      {
        name: "Central Darfur",
        iso2: "DC",
      },
      {
        name: "East Darfur",
        iso2: "DE",
      },
      {
        name: "Kassala",
        iso2: "KA",
      },
      {
        name: "Khartoum",
        iso2: "KH",
      },
      {
        name: "North Darfur",
        iso2: "DN",
      },
      {
        name: "Northern",
        iso2: "NO",
      },
      {
        name: "North Kordofan",
        iso2: "KN",
      },
      {
        name: "Red Sea",
        iso2: "RS",
      },
      {
        name: "River Nile",
        iso2: "NR",
      },
      {
        name: "Sennar",
        iso2: "SI",
      },
      {
        name: "South Darfur",
        iso2: "DS",
      },
      {
        name: "South Kordofan",
        iso2: "KS",
      },
      {
        name: "West Darfur",
        iso2: "DW",
      },
      {
        name: "West Kordofan",
        iso2: "GK",
      },
      {
        name: "White Nile",
        iso2: "NW",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Suriname",
    iso2: "SR",
    states: [
      {
        name: "Brokopondo",
        iso2: "BR",
      },
      {
        name: "Commewijne",
        iso2: "CM",
      },
      {
        name: "Coronie",
        iso2: "CR",
      },
      {
        name: "Marowijne",
        iso2: "MA",
      },
      {
        name: "Nickerie",
        iso2: "NI",
      },
      {
        name: "Para",
        iso2: "PR",
      },
      {
        name: "Paramaribo",
        iso2: "PM",
      },
      {
        name: "Saramacca",
        iso2: "SA",
      },
      {
        name: "Sipaliwini",
        iso2: "SI",
      },
      {
        name: "Wanica",
        iso2: "WA",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Svalbard and Jan Mayen Islands",
    iso2: "SJ",
    states: [
      {
        name: "Svalbard and Jan Mayen Islands",
        iso2: "SJ",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Sweden",
    iso2: "SE",
    states: [
      {
        name: "Blekinge",
        iso2: "K",
      },
      {
        name: "Dalarna",
        iso2: "W",
      },
      {
        name: "Gävleborg",
        iso2: "X",
      },
      {
        name: "Gotland",
        iso2: "I",
      },
      {
        name: "Halland",
        iso2: "N",
      },
      {
        name: "Jämtland",
        iso2: "Z",
      },
      {
        name: "Jönköping",
        iso2: "F",
      },
      {
        name: "Kalmar",
        iso2: "H",
      },
      {
        name: "Kronoberg",
        iso2: "G",
      },
      {
        name: "Norrbotten",
        iso2: "BD",
      },
      {
        name: "Örebro",
        iso2: "T",
      },
      {
        name: "Östergötland",
        iso2: "E",
      },
      {
        name: "Skåne",
        iso2: "M",
      },
      {
        name: "Södermanland",
        iso2: "D",
      },
      {
        name: "Stockholm",
        iso2: "AB",
      },
      {
        name: "Uppsala",
        iso2: "C",
      },
      {
        name: "Värmland",
        iso2: "S",
      },
      {
        name: "Västerbotten",
        iso2: "AC",
      },
      {
        name: "Västernorrland",
        iso2: "Y",
      },
      {
        name: "Västmanland",
        iso2: "U",
      },
      {
        name: "Västra Götaland",
        iso2: "O",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Switzerland",
    iso2: "CH",
    states: [
      {
        name: "Aargau",
        iso2: "AG",
      },
      {
        name: "Appenzell Ausserrhoden",
        iso2: "AR",
      },
      {
        name: "Appenzell Innerrhoden",
        iso2: "AI",
      },
      {
        name: "Basel-Land",
        iso2: "BL",
      },
      {
        name: "Basel-Stadt",
        iso2: "BS",
      },
      {
        name: "Bern",
        iso2: "BE",
      },
      {
        name: "Fribourg",
        iso2: "FR",
      },
      {
        name: "Geneva",
        iso2: "GE",
      },
      {
        name: "Glarus",
        iso2: "GL",
      },
      {
        name: "Graubünden",
        iso2: "GR",
      },
      {
        name: "Jura",
        iso2: "JU",
      },
      {
        name: "Lucerne",
        iso2: "LU",
      },
      {
        name: "Neuchâtel",
        iso2: "NE",
      },
      {
        name: "Nidwalden",
        iso2: "NW",
      },
      {
        name: "Obwalden",
        iso2: "OW",
      },
      {
        name: "Schaffhausen",
        iso2: "SH",
      },
      {
        name: "Schwyz",
        iso2: "SZ",
      },
      {
        name: "Solothurn",
        iso2: "SO",
      },
      {
        name: "St. Gallen",
        iso2: "SG",
      },
      {
        name: "Thurgau",
        iso2: "TG",
      },
      {
        name: "Ticino",
        iso2: "TI",
      },
      {
        name: "Uri",
        iso2: "UR",
      },
      {
        name: "Valais",
        iso2: "VS",
      },
      {
        name: "Vaud",
        iso2: "VD",
      },
      {
        name: "Zug",
        iso2: "ZG",
      },
      {
        name: "Zürich",
        iso2: "ZH",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Syria",
    iso2: "SY",
    states: [
      {
        name: "Aleppo",
        iso2: "HL",
      },
      {
        name: "Al-Hasakah",
        iso2: "HA",
      },
      {
        name: "Al-Raqqah",
        iso2: "RA",
      },
      {
        name: "As-Suwayda",
        iso2: "SU",
      },
      {
        name: "Damascus",
        iso2: "DI",
      },
      {
        name: "Daraa",
        iso2: "DR",
      },
      {
        name: "Deir ez-Zor",
        iso2: "DY",
      },
      {
        name: "Hama",
        iso2: "HM",
      },
      {
        name: "Homs",
        iso2: "HI",
      },
      {
        name: "Idlib",
        iso2: "ID",
      },
      {
        name: "Latakia",
        iso2: "LA",
      },
      {
        name: "Quneitra",
        iso2: "QU",
      },
      {
        name: "Rif Dimashq",
        iso2: "RD",
      },
      {
        name: "Tartus",
        iso2: "TA",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "INACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Taiwan",
    iso2: "TW",
    states: [
      {
        name: "Changhua",
        iso2: "CHA",
      },
      {
        name: "Chiayi",
        iso2: "CYI",
      },
      {
        name: "Chiayi",
        iso2: "CYQ",
      },
      {
        name: "Hsinchu",
        iso2: "HSQ",
      },
      {
        name: "Hsinchu",
        iso2: "HSZ",
      },
      {
        name: "Hualien",
        iso2: "HUA",
      },
      {
        name: "Kaohsiung",
        iso2: "KHH",
      },
      {
        name: "Keelung",
        iso2: "KEE",
      },
      {
        name: "Kinmen",
        iso2: "KIN",
      },
      {
        name: "Lienchiang",
        iso2: "LIE",
      },
      {
        name: "Miaoli",
        iso2: "MIA",
      },
      {
        name: "Nantou",
        iso2: "NAN",
      },
      {
        name: "New Taipei",
        iso2: "NWT",
      },
      {
        name: "Penghu",
        iso2: "PEN",
      },
      {
        name: "Pingtung",
        iso2: "PIF",
      },
      {
        name: "Taichung",
        iso2: "TXG",
      },
      {
        name: "Tainan",
        iso2: "TNN",
      },
      {
        name: "Taipei",
        iso2: "TPE",
      },
      {
        name: "Taitung",
        iso2: "TTT",
      },
      {
        name: "Taoyuan",
        iso2: "TAO",
      },
      {
        name: "Yilan",
        iso2: "ILA",
      },
      {
        name: "Yunlin",
        iso2: "YUN",
      },
    ],
    legal_age: 15,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Tajikistan",
    iso2: "TJ",
    states: [
      {
        name: "Gorno-Badakhshan",
        iso2: "GB",
      },
      {
        name: "Khatlon",
        iso2: "KT",
      },
      {
        name: "Nohiyahoi Tobei Jumhurí ",
        iso2: "RA",
      },
      {
        name: "Sughd ",
        iso2: "SU",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Tanzania",
    iso2: "TZ",
    states: [
      {
        name: "Arusha",
        iso2: "01",
      },
      {
        name: "Dar es Salaam",
        iso2: "02",
      },
      {
        name: "Dodoma",
        iso2: "03",
      },
      {
        name: "Geita",
        iso2: "27",
      },
      {
        name: "Iringa",
        iso2: "04",
      },
      {
        name: "Kagera",
        iso2: "05",
      },
      {
        name: "Katavi",
        iso2: "28",
      },
      {
        name: "Kigoma",
        iso2: "08",
      },
      {
        name: "Kilimanjaro",
        iso2: "09",
      },
      {
        name: "Lindi",
        iso2: "12",
      },
      {
        name: "Manyara",
        iso2: "26",
      },
      {
        name: "Mara",
        iso2: "13",
      },
      {
        name: "Mbeya",
        iso2: "14",
      },
      {
        name: "Morogoro",
        iso2: "16",
      },
      {
        name: "Mtwara",
        iso2: "17",
      },
      {
        name: "Mwanza",
        iso2: "18",
      },
      {
        name: "Njombe",
        iso2: "29",
      },
      {
        name: "Pemba North",
        iso2: "06",
      },
      {
        name: "Pemba South",
        iso2: "10",
      },
      {
        name: "Pwani",
        iso2: "19",
      },
      {
        name: "Rukwa",
        iso2: "20",
      },
      {
        name: "Ruvuma",
        iso2: "21",
      },
      {
        name: "Shinyanga",
        iso2: "22",
      },
      {
        name: "Simiyu",
        iso2: "30",
      },
      {
        name: "Singida",
        iso2: "23",
      },
      {
        name: "Songwe",
        iso2: "31",
      },
      {
        name: "Tabora",
        iso2: "24",
      },
      {
        name: "Tanga",
        iso2: "25",
      },
      {
        name: "Zanzibar North",
        iso2: "07",
      },
      {
        name: "Zanzibar South",
        iso2: "11",
      },
      {
        name: "Zanzibar West",
        iso2: "15",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Thailand",
    iso2: "TH",
    states: [
      {
        name: "Amnat Charoen",
        iso2: "37",
      },
      {
        name: "Ang Thong",
        iso2: "15",
      },
      {
        name: "Bangkok",
        iso2: "10",
      },
      {
        name: "Bueng Kan",
        iso2: "38",
      },
      {
        name: "Buri Ram",
        iso2: "31",
      },
      {
        name: "Chachoengsao",
        iso2: "24",
      },
      {
        name: "Chai Nat",
        iso2: "18",
      },
      {
        name: "Chaiyaphum",
        iso2: "36",
      },
      {
        name: "Chanthaburi",
        iso2: "22",
      },
      {
        name: "Chiang Mai",
        iso2: "50",
      },
      {
        name: "Chiang Rai",
        iso2: "57",
      },
      {
        name: "Chon Buri",
        iso2: "20",
      },
      {
        name: "Chumphon",
        iso2: "86",
      },
      {
        name: "Kalasin",
        iso2: "46",
      },
      {
        name: "Kamphaeng Phet",
        iso2: "62",
      },
      {
        name: "Kanchanaburi",
        iso2: "71",
      },
      {
        name: "Khon Kaen",
        iso2: "40",
      },
      {
        name: "Krabi",
        iso2: "81",
      },
      {
        name: "Lampang",
        iso2: "52",
      },
      {
        name: "Lamphun",
        iso2: "51",
      },
      {
        name: "Loei",
        iso2: "42",
      },
      {
        name: "Lop Buri",
        iso2: "16",
      },
      {
        name: "Mae Hong Son",
        iso2: "58",
      },
      {
        name: "Maha Sarakham",
        iso2: "44",
      },
      {
        name: "Mukdahan",
        iso2: "49",
      },
      {
        name: "Nakhon Nayok",
        iso2: "26",
      },
      {
        name: "Nakhon Pathom",
        iso2: "73",
      },
      {
        name: "Nakhon Phanom",
        iso2: "48",
      },
      {
        name: "Nakhon Ratchasima",
        iso2: "30",
      },
      {
        name: "Nakhon Sawan",
        iso2: "60",
      },
      {
        name: "Nakhon Si Thammarat",
        iso2: "80",
      },
      {
        name: "Nan",
        iso2: "55",
      },
      {
        name: "Narathiwat",
        iso2: "96",
      },
      {
        name: "Nong Bua Lam Phu",
        iso2: "39",
      },
      {
        name: "Nong Khai",
        iso2: "43",
      },
      {
        name: "Nonthaburi",
        iso2: "12",
      },
      {
        name: "Pathum Thani",
        iso2: "13",
      },
      {
        name: "Pattani",
        iso2: "94",
      },
      {
        name: "Pattaya",
        iso2: "S",
      },
      {
        name: "Phangnga",
        iso2: "82",
      },
      {
        name: "Phatthalung",
        iso2: "93",
      },
      {
        name: "Phayao",
        iso2: "56",
      },
      {
        name: "Phetchabun",
        iso2: "67",
      },
      {
        name: "Phetchaburi",
        iso2: "76",
      },
      {
        name: "Phichit",
        iso2: "66",
      },
      {
        name: "Phitsanulok",
        iso2: "65",
      },
      {
        name: "Phrae",
        iso2: "54",
      },
      {
        name: "Phra Nakhon Si Ayutthaya",
        iso2: "14",
      },
      {
        name: "Phuket",
        iso2: "83",
      },
      {
        name: "Prachin Buri",
        iso2: "25",
      },
      {
        name: "Prachuap Khiri Khan",
        iso2: "77",
      },
      {
        name: "Ranong",
        iso2: "85",
      },
      {
        name: "Ratchaburi",
        iso2: "70",
      },
      {
        name: "Rayong",
        iso2: "21",
      },
      {
        name: "Roi Et",
        iso2: "45",
      },
      {
        name: "Sa Kaeo",
        iso2: "27",
      },
      {
        name: "Sakon Nakhon",
        iso2: "47",
      },
      {
        name: "Samut Prakan",
        iso2: "11",
      },
      {
        name: "Samut Sakhon",
        iso2: "74",
      },
      {
        name: "Samut Songkhram",
        iso2: "75",
      },
      {
        name: "Saraburi",
        iso2: "19",
      },
      {
        name: "Satun",
        iso2: "91",
      },
      {
        name: "Sing Buri",
        iso2: "17",
      },
      {
        name: "Si Sa Ket",
        iso2: "33",
      },
      {
        name: "Songkhla",
        iso2: "90",
      },
      {
        name: "Sukhothai",
        iso2: "64",
      },
      {
        name: "Suphan Buri",
        iso2: "72",
      },
      {
        name: "Surat Thani",
        iso2: "84",
      },
      {
        name: "Surin",
        iso2: "32",
      },
      {
        name: "Tak",
        iso2: "63",
      },
      {
        name: "Trang",
        iso2: "92",
      },
      {
        name: "Trat",
        iso2: "23",
      },
      {
        name: "Ubon Ratchathani",
        iso2: "34",
      },
      {
        name: "Udon Thani",
        iso2: "41",
      },
      {
        name: "Uthai Thani",
        iso2: "61",
      },
      {
        name: "Uttaradit",
        iso2: "53",
      },
      {
        name: "Yala",
        iso2: "95",
      },
      {
        name: "Yasothon",
        iso2: "35",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "The Bahamas",
    iso2: "BS",
    states: [
      {
        name: "Acklins",
        iso2: "AK",
      },
      {
        name: "Acklins and Crooked Islands",
        iso2: "AC",
      },
      {
        name: "Berry Islands",
        iso2: "BY",
      },
      {
        name: "Bimini",
        iso2: "BI",
      },
      {
        name: "Black Point",
        iso2: "BP",
      },
      {
        name: "Cat Island",
        iso2: "CI",
      },
      {
        name: "Central Abaco",
        iso2: "CO",
      },
      {
        name: "Central Andros",
        iso2: "CS",
      },
      {
        name: "Central Eleuthera",
        iso2: "CE",
      },
      {
        name: "Crooked Island",
        iso2: "CK",
      },
      {
        name: "East Grand Bahama",
        iso2: "EG",
      },
      {
        name: "Exuma",
        iso2: "EX",
      },
      {
        name: "Freeport",
        iso2: "FP",
      },
      {
        name: "Fresh Creek",
        iso2: "FC",
      },
      {
        name: "Governor's Harbour",
        iso2: "GH",
      },
      {
        name: "Grand Cay",
        iso2: "GC",
      },
      {
        name: "Green Turtle Cay",
        iso2: "GT",
      },
      {
        name: "Harbour Island",
        iso2: "HI",
      },
      {
        name: "High Rock",
        iso2: "HR",
      },
      {
        name: "Hope Town",
        iso2: "HT",
      },
      {
        name: "Inagua",
        iso2: "IN",
      },
      {
        name: "Kemps Bay",
        iso2: "KB",
      },
      {
        name: "Long Island",
        iso2: "LI",
      },
      {
        name: "Mangrove Cay",
        iso2: "MC",
      },
      {
        name: "Marsh Harbour",
        iso2: "MH",
      },
      {
        name: "Mayaguana",
        iso2: "MG",
      },
      {
        name: "New Providence",
        iso2: "NP",
      },
      {
        name: "Nichollstown and Berry Islands",
        iso2: "NB",
      },
      {
        name: "North Abaco",
        iso2: "NO",
      },
      {
        name: "North Andros",
        iso2: "NS",
      },
      {
        name: "North Eleuthera",
        iso2: "NE",
      },
      {
        name: "Ragged Island",
        iso2: "RI",
      },
      {
        name: "Rock Sound",
        iso2: "RS",
      },
      {
        name: "Rum Cay",
        iso2: "RC",
      },
      {
        name: "Sandy Point",
        iso2: "SP",
      },
      {
        name: "San Salvador and Rum Cay",
        iso2: "SR",
      },
      {
        name: "San Salvador Island",
        iso2: "SS",
      },
      {
        name: "South Abaco",
        iso2: "SO",
      },
      {
        name: "South Andros",
        iso2: "SA",
      },
      {
        name: "South Eleuthera",
        iso2: "SE",
      },
      {
        name: "Spanish Wells",
        iso2: "SW",
      },
      {
        name: "West Grand Bahama",
        iso2: "WG",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "The Gambia ",
    iso2: "GM",
    states: [
      {
        name: "Banjul",
        iso2: "B",
      },
      {
        name: "Central River",
        iso2: "M",
      },
      {
        name: "Lower River",
        iso2: "L",
      },
      {
        name: "North Bank",
        iso2: "N",
      },
      {
        name: "Upper River",
        iso2: "U",
      },
      {
        name: "West Coast",
        iso2: "W",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Timor-Leste",
    iso2: "TL",
    states: [
      {
        name: "Aileu",
        iso2: "AL",
      },
      {
        name: "Ainaro",
        iso2: "AN",
      },
      {
        name: "Baucau",
        iso2: "BA",
      },
      {
        name: "Bobonaro",
        iso2: "BO",
      },
      {
        name: "Cova Lima",
        iso2: "CO",
      },
      {
        name: "Dili",
        iso2: "DI",
      },
      {
        name: "Ermera",
        iso2: "ER",
      },
      {
        name: "Lautém",
        iso2: "LA",
      },
      {
        name: "Liquiçá",
        iso2: "LI",
      },
      {
        name: "Manatuto",
        iso2: "MT",
      },
      {
        name: "Manufahi",
        iso2: "MF",
      },
      {
        name: "Viqueque",
        iso2: "VI",
      },
    ],
    legal_age: 17,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Togo",
    iso2: "TG",
    states: [
      {
        name: "Centrale",
        iso2: "C",
      },
      {
        name: "Kara",
        iso2: "K",
      },
      {
        name: "Maritime",
        iso2: "M",
      },
      {
        name: "Plateaux",
        iso2: "P",
      },
      {
        name: "Savanes",
        iso2: "S",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Tokelau",
    iso2: "TK",
    states: [
      {
        name: "Tokelau",
        iso2: "TK",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Tonga",
    iso2: "TO",
    states: [
      {
        name: "Haʻapai",
        iso2: "02",
      },
      {
        name: "ʻEua",
        iso2: "01",
      },
      {
        name: "Niuas",
        iso2: "03",
      },
      {
        name: "Tongatapu",
        iso2: "04",
      },
      {
        name: "Vavaʻu",
        iso2: "05",
      },
    ],
    legal_age: 21,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Trinidad and Tobago",
    iso2: "TT",
    states: [
      {
        name: "Arima",
        iso2: "ARI",
      },
      {
        name: "Chaguanas",
        iso2: "CHA",
      },
      {
        name: "Couva-Tabaquite-Talparo",
        iso2: "CTT",
      },
      {
        name: "Diego Martin",
        iso2: "DMN",
      },
      {
        name: "Eastern Tobago",
        iso2: "ETO",
      },
      {
        name: "Penal-Debe",
        iso2: "PED",
      },
      {
        name: "Point Fortin",
        iso2: "PTF",
      },
      {
        name: "Port of Spain",
        iso2: "POS",
      },
      {
        name: "Princes Town",
        iso2: "PRT",
      },
      {
        name: "Rio Claro-Mayaro",
        iso2: "MRC",
      },
      {
        name: "San Fernando",
        iso2: "SFO",
      },
      {
        name: "Sangre Grande",
        iso2: "SGE",
      },
      {
        name: "San Juan-Laventille",
        iso2: "SJL",
      },
      {
        name: "Siparia",
        iso2: "SIP",
      },
      {
        name: "Tunapuna-Piarco",
        iso2: "TUP",
      },
      {
        name: "Western Tobago",
        iso2: "WTO",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Tunisia",
    iso2: "TN",
    states: [
      {
        name: "Ariana",
        iso2: "12",
      },
      {
        name: "Béja",
        iso2: "31",
      },
      {
        name: "Ben Arous",
        iso2: "13",
      },
      {
        name: "Bizerte",
        iso2: "23",
      },
      {
        name: "Gabès",
        iso2: "81",
      },
      {
        name: "Gafsa",
        iso2: "71",
      },
      {
        name: "Jendouba",
        iso2: "32",
      },
      {
        name: "Kairouan",
        iso2: "41",
      },
      {
        name: "Kasserine",
        iso2: "42",
      },
      {
        name: "Kebili",
        iso2: "73",
      },
      {
        name: "Kef",
        iso2: "33",
      },
      {
        name: "Mahdia",
        iso2: "53",
      },
      {
        name: "Manouba",
        iso2: "14",
      },
      {
        name: "Medenine",
        iso2: "82",
      },
      {
        name: "Monastir",
        iso2: "52",
      },
      {
        name: "Nabeul",
        iso2: "21",
      },
      {
        name: "Sfax",
        iso2: "61",
      },
      {
        name: "Sidi Bouzid",
        iso2: "43",
      },
      {
        name: "Siliana",
        iso2: "34",
      },
      {
        name: "Sousse",
        iso2: "51",
      },
      {
        name: "Tataouine",
        iso2: "83",
      },
      {
        name: "Tozeur",
        iso2: "72",
      },
      {
        name: "Tunis",
        iso2: "11",
      },
      {
        name: "Zaghouan",
        iso2: "22",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Turkey",
    iso2: "TR",
    states: [
      {
        name: "Adana",
        iso2: "01",
      },
      {
        name: "Adıyaman",
        iso2: "02",
      },
      {
        name: "Afyonkarahisar",
        iso2: "03",
      },
      {
        name: "Ağrı",
        iso2: "04",
      },
      {
        name: "Aksaray",
        iso2: "68",
      },
      {
        name: "Amasya",
        iso2: "05",
      },
      {
        name: "Ankara",
        iso2: "06",
      },
      {
        name: "Antalya",
        iso2: "07",
      },
      {
        name: "Ardahan",
        iso2: "75",
      },
      {
        name: "Artvin",
        iso2: "08",
      },
      {
        name: "Aydın",
        iso2: "09",
      },
      {
        name: "Balıkesir",
        iso2: "10",
      },
      {
        name: "Bartın",
        iso2: "74",
      },
      {
        name: "Batman",
        iso2: "72",
      },
      {
        name: "Bayburt",
        iso2: "69",
      },
      {
        name: "Bilecik",
        iso2: "11",
      },
      {
        name: "Bingöl",
        iso2: "12",
      },
      {
        name: "Bitlis",
        iso2: "13",
      },
      {
        name: "Bolu",
        iso2: "14",
      },
      {
        name: "Burdur",
        iso2: "15",
      },
      {
        name: "Bursa",
        iso2: "16",
      },
      {
        name: "Çanakkale",
        iso2: "17",
      },
      {
        name: "Çankırı",
        iso2: "18",
      },
      {
        name: "Çorum",
        iso2: "19",
      },
      {
        name: "Denizli",
        iso2: "20",
      },
      {
        name: "Diyarbakır",
        iso2: "21",
      },
      {
        name: "Düzce",
        iso2: "81",
      },
      {
        name: "Edirne",
        iso2: "22",
      },
      {
        name: "Elazığ",
        iso2: "23",
      },
      {
        name: "Erzincan",
        iso2: "24",
      },
      {
        name: "Erzurum",
        iso2: "25",
      },
      {
        name: "Eskişehir",
        iso2: "26",
      },
      {
        name: "Gaziantep",
        iso2: "27",
      },
      {
        name: "Giresun",
        iso2: "28",
      },
      {
        name: "Gümüşhane",
        iso2: "29",
      },
      {
        name: "Hakkâri",
        iso2: "30",
      },
      {
        name: "Hatay",
        iso2: "31",
      },
      {
        name: "Iğdır",
        iso2: "76",
      },
      {
        name: "Isparta",
        iso2: "32",
      },
      {
        name: "İstanbul",
        iso2: "34",
      },
      {
        name: "İzmir",
        iso2: "35",
      },
      {
        name: "Kahramanmaraş",
        iso2: "46",
      },
      {
        name: "Karabük",
        iso2: "78",
      },
      {
        name: "Karaman",
        iso2: "70",
      },
      {
        name: "Kars",
        iso2: "36",
      },
      {
        name: "Kastamonu",
        iso2: "37",
      },
      {
        name: "Kayseri",
        iso2: "38",
      },
      {
        name: "Kilis",
        iso2: "79",
      },
      {
        name: "Kırıkkale",
        iso2: "71",
      },
      {
        name: "Kırklareli",
        iso2: "39",
      },
      {
        name: "Kırşehir",
        iso2: "40",
      },
      {
        name: "Kocaeli",
        iso2: "41",
      },
      {
        name: "Konya",
        iso2: "42",
      },
      {
        name: "Kütahya",
        iso2: "43",
      },
      {
        name: "Malatya",
        iso2: "44",
      },
      {
        name: "Manisa",
        iso2: "45",
      },
      {
        name: "Mardin",
        iso2: "47",
      },
      {
        name: "Mersin",
        iso2: "33",
      },
      {
        name: "Muğla",
        iso2: "48",
      },
      {
        name: "Muş",
        iso2: "49",
      },
      {
        name: "Nevşehir",
        iso2: "50",
      },
      {
        name: "Niğde",
        iso2: "51",
      },
      {
        name: "Ordu",
        iso2: "52",
      },
      {
        name: "Osmaniye",
        iso2: "80",
      },
      {
        name: "Rize",
        iso2: "53",
      },
      {
        name: "Sakarya",
        iso2: "54",
      },
      {
        name: "Samsun",
        iso2: "55",
      },
      {
        name: "Şanlıurfa",
        iso2: "63",
      },
      {
        name: "Siirt",
        iso2: "56",
      },
      {
        name: "Sinop",
        iso2: "57",
      },
      {
        name: "Sivas",
        iso2: "58",
      },
      {
        name: "Şırnak",
        iso2: "73",
      },
      {
        name: "Tekirdağ",
        iso2: "59",
      },
      {
        name: "Tokat",
        iso2: "60",
      },
      {
        name: "Trabzon",
        iso2: "61",
      },
      {
        name: "Tunceli",
        iso2: "62",
      },
      {
        name: "Uşak",
        iso2: "64",
      },
      {
        name: "Van",
        iso2: "65",
      },
      {
        name: "Yalova",
        iso2: "77",
      },
      {
        name: "Yozgat",
        iso2: "66",
      },
      {
        name: "Zonguldak",
        iso2: "67",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Turkmenistan",
    iso2: "TM",
    states: [
      {
        name: "Ahal",
        iso2: "A",
      },
      {
        name: "Ashgabat",
        iso2: "S",
      },
      {
        name: "Balkan",
        iso2: "B",
      },
      {
        name: "Daşoguz",
        iso2: "D",
      },
      {
        name: "Lebap",
        iso2: "L",
      },
      {
        name: "Mary",
        iso2: "M",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Turks and Caicos Islands",
    iso2: "TC",
    states: [
      {
        name: "Turks and Caicos Islands",
        iso2: "TC",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Tuvalu",
    iso2: "TV",
    states: [
      {
        name: "Funafuti",
        iso2: "FUN",
      },
      {
        name: "Nanumanga",
        iso2: "NMG",
      },
      {
        name: "Nanumea",
        iso2: "NMA",
      },
      {
        name: "Niutao Island Council",
        iso2: "NIT",
      },
      {
        name: "Nui",
        iso2: "NUI",
      },
      {
        name: "Nukufetau",
        iso2: "NKF",
      },
      {
        name: "Nukulaelae",
        iso2: "NKL",
      },
      {
        name: "Vaitupu",
        iso2: "VAI",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Uganda",
    iso2: "UG",
    states: [
      {
        name: "Abim",
        iso2: "314",
      },
      {
        name: "Adjumani",
        iso2: "301",
      },
      {
        name: "Agago",
        iso2: "322",
      },
      {
        name: "Alebtong",
        iso2: "323",
      },
      {
        name: "Amolatar",
        iso2: "315",
      },
      {
        name: "Amudat",
        iso2: "324",
      },
      {
        name: "Amuria",
        iso2: "216",
      },
      {
        name: "Amuru",
        iso2: "316",
      },
      {
        name: "Apac",
        iso2: "302",
      },
      {
        name: "Arua",
        iso2: "303",
      },
      {
        name: "Budaka",
        iso2: "217",
      },
      {
        name: "Bududa",
        iso2: "218",
      },
      {
        name: "Bugiri",
        iso2: "201",
      },
      {
        name: "Buhweju",
        iso2: "420",
      },
      {
        name: "Buikwe",
        iso2: "117",
      },
      {
        name: "Bukedea",
        iso2: "219",
      },
      {
        name: "Bukomansimbi",
        iso2: "118",
      },
      {
        name: "Bukwo",
        iso2: "220",
      },
      {
        name: "Bulambuli",
        iso2: "225",
      },
      {
        name: "Buliisa",
        iso2: "416",
      },
      {
        name: "Bundibugyo",
        iso2: "401",
      },
      {
        name: "Bunyangabu",
        iso2: "430",
      },
      {
        name: "Bushenyi",
        iso2: "402",
      },
      {
        name: "Busia",
        iso2: "202",
      },
      {
        name: "Butaleja",
        iso2: "221",
      },
      {
        name: "Butambala",
        iso2: "119",
      },
      {
        name: "Butebo",
        iso2: "233",
      },
      {
        name: "Buvuma",
        iso2: "120",
      },
      {
        name: "Buyende",
        iso2: "226",
      },
      {
        name: "Central",
        iso2: "C",
      },
      {
        name: "Dokolo",
        iso2: "317",
      },
      {
        name: "Eastern",
        iso2: "E",
      },
      {
        name: "Gomba",
        iso2: "121",
      },
      {
        name: "Gulu",
        iso2: "304",
      },
      {
        name: "Ibanda",
        iso2: "417",
      },
      {
        name: "Iganga",
        iso2: "203",
      },
      {
        name: "Isingiro",
        iso2: "418",
      },
      {
        name: "Jinja",
        iso2: "204",
      },
      {
        name: "Kaabong",
        iso2: "318",
      },
      {
        name: "Kabale",
        iso2: "404",
      },
      {
        name: "Kabarole",
        iso2: "405",
      },
      {
        name: "Kaberamaido",
        iso2: "213",
      },
      {
        name: "Kagadi",
        iso2: "427",
      },
      {
        name: "Kakumiro",
        iso2: "428",
      },
      {
        name: "Kalangala",
        iso2: "101",
      },
      {
        name: "Kaliro",
        iso2: "222",
      },
      {
        name: "Kalungu",
        iso2: "122",
      },
      {
        name: "Kampala",
        iso2: "102",
      },
      {
        name: "Kamuli",
        iso2: "205",
      },
      {
        name: "Kamwenge",
        iso2: "413",
      },
      {
        name: "Kanungu",
        iso2: "414",
      },
      {
        name: "Kapchorwa",
        iso2: "206",
      },
      {
        name: "Kasese",
        iso2: "406",
      },
      {
        name: "Katakwi",
        iso2: "207",
      },
      {
        name: "Kayunga",
        iso2: "112",
      },
      {
        name: "Kibaale",
        iso2: "407",
      },
      {
        name: "Kiboga",
        iso2: "103",
      },
      {
        name: "Kibuku",
        iso2: "227",
      },
      {
        name: "Kiruhura",
        iso2: "419",
      },
      {
        name: "Kiryandongo",
        iso2: "421",
      },
      {
        name: "Kisoro",
        iso2: "408",
      },
      {
        name: "Kitgum",
        iso2: "305",
      },
      {
        name: "Koboko",
        iso2: "319",
      },
      {
        name: "Kole",
        iso2: "325",
      },
      {
        name: "Kotido",
        iso2: "306",
      },
      {
        name: "Kumi",
        iso2: "208",
      },
      {
        name: "Kween",
        iso2: "228",
      },
      {
        name: "Kyankwanzi",
        iso2: "123",
      },
      {
        name: "Kyegegwa",
        iso2: "422",
      },
      {
        name: "Kyenjojo",
        iso2: "415",
      },
      {
        name: "Kyotera",
        iso2: "125",
      },
      {
        name: "Lamwo",
        iso2: "326",
      },
      {
        name: "Lira",
        iso2: "307",
      },
      {
        name: "Luuka",
        iso2: "229",
      },
      {
        name: "Luwero",
        iso2: "104",
      },
      {
        name: "Lwengo",
        iso2: "124",
      },
      {
        name: "Lyantonde",
        iso2: "114",
      },
      {
        name: "Manafwa",
        iso2: "223",
      },
      {
        name: "Maracha",
        iso2: "320",
      },
      {
        name: "Masaka",
        iso2: "105",
      },
      {
        name: "Masindi",
        iso2: "409",
      },
      {
        name: "Mayuge",
        iso2: "214",
      },
      {
        name: "Mbale",
        iso2: "209",
      },
      {
        name: "Mbarara",
        iso2: "410",
      },
      {
        name: "Mitooma",
        iso2: "423",
      },
      {
        name: "Mityana",
        iso2: "115",
      },
      {
        name: "Moroto",
        iso2: "308",
      },
      {
        name: "Moyo",
        iso2: "309",
      },
      {
        name: "Mpigi",
        iso2: "106",
      },
      {
        name: "Mubende",
        iso2: "107",
      },
      {
        name: "Mukono",
        iso2: "108",
      },
      {
        name: "Nakapiripirit",
        iso2: "311",
      },
      {
        name: "Nakaseke",
        iso2: "116",
      },
      {
        name: "Nakasongola",
        iso2: "109",
      },
      {
        name: "Namayingo",
        iso2: "230",
      },
      {
        name: "Namisindwa",
        iso2: "234",
      },
      {
        name: "Namutumba",
        iso2: "224",
      },
      {
        name: "Napak",
        iso2: "327",
      },
      {
        name: "Nebbi",
        iso2: "310",
      },
      {
        name: "Ngora",
        iso2: "231",
      },
      {
        name: "Northern",
        iso2: "N",
      },
      {
        name: "Ntoroko",
        iso2: "424",
      },
      {
        name: "Ntungamo",
        iso2: "411",
      },
      {
        name: "Nwoya",
        iso2: "328",
      },
      {
        name: "Omoro",
        iso2: "331",
      },
      {
        name: "Otuke",
        iso2: "329",
      },
      {
        name: "Oyam",
        iso2: "321",
      },
      {
        name: "Pader",
        iso2: "312",
      },
      {
        name: "Pakwach",
        iso2: "332",
      },
      {
        name: "Pallisa",
        iso2: "210",
      },
      {
        name: "Rakai",
        iso2: "110",
      },
      {
        name: "Rubanda",
        iso2: "429",
      },
      {
        name: "Rubirizi",
        iso2: "425",
      },
      {
        name: "Rukiga",
        iso2: "431",
      },
      {
        name: "Rukungiri",
        iso2: "412",
      },
      {
        name: "Sembabule",
        iso2: "111",
      },
      {
        name: "Serere",
        iso2: "232",
      },
      {
        name: "Sheema",
        iso2: "426",
      },
      {
        name: "Sironko",
        iso2: "215",
      },
      {
        name: "Soroti",
        iso2: "211",
      },
      {
        name: "Tororo",
        iso2: "212",
      },
      {
        name: "Wakiso",
        iso2: "113",
      },
      {
        name: "Western",
        iso2: "W",
      },
      {
        name: "Yumbe",
        iso2: "313",
      },
      {
        name: "Zombo",
        iso2: "330",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Ukraine",
    iso2: "UA",
    states: [
      {
        name: "Autonomous Republic of Crimea",
        iso2: "43",
      },
      {
        name: "Cherkaska oblast",
        iso2: "71",
      },
      {
        name: "Chernihivska oblast",
        iso2: "74",
      },
      {
        name: "Chernivetska oblast",
        iso2: "77",
      },
      {
        name: "Dnipropetrovska oblast",
        iso2: "12",
      },
      {
        name: "Donetska oblast",
        iso2: "14",
      },
      {
        name: "Ivano-Frankivska oblast",
        iso2: "26",
      },
      {
        name: "Kharkivska oblast",
        iso2: "63",
      },
      {
        name: "Khersonska oblast",
        iso2: "65",
      },
      {
        name: "Khmelnytska oblast",
        iso2: "68",
      },
      {
        name: "Kirovohradska oblast",
        iso2: "35",
      },
      {
        name: "Kyiv",
        iso2: "30",
      },
      {
        name: "Kyivska oblast",
        iso2: "32",
      },
      {
        name: "Luhanska oblast",
        iso2: "09",
      },
      {
        name: "Lvivska oblast",
        iso2: "46",
      },
      {
        name: "Mykolaivska oblast",
        iso2: "48",
      },
      {
        name: "Odeska oblast",
        iso2: "51",
      },
      {
        name: "Poltavska oblast",
        iso2: "53",
      },
      {
        name: "Rivnenska oblast",
        iso2: "56",
      },
      {
        name: "Sevastopol",
        iso2: "40",
      },
      {
        name: "Sumska oblast",
        iso2: "59",
      },
      {
        name: "Ternopilska oblast",
        iso2: "61",
      },
      {
        name: "Vinnytska oblast",
        iso2: "05",
      },
      {
        name: "Volynska oblast",
        iso2: "07",
      },
      {
        name: "Zakarpatska Oblast",
        iso2: "21",
      },
      {
        name: "Zaporizka oblast",
        iso2: "23",
      },
      {
        name: "Zhytomyrska oblast",
        iso2: "18",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "United Arab Emirates",
    iso2: "AE",
    states: [
      {
        name: "Abu Dhabi",
        iso2: "AZ",
      },
      {
        name: "Ajman",
        iso2: "AJ",
      },
      {
        name: "Dubai",
        iso2: "DU",
      },
      {
        name: "Fujairah",
        iso2: "FU",
      },
      {
        name: "Ras al-Khaimah",
        iso2: "RK",
      },
      {
        name: "Sharjah",
        iso2: "SH",
      },
      {
        name: "Umm al-Quwain",
        iso2: "UQ",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "United Kingdom",
    iso2: "GB",
    states: [
      {
        name: "Aberdeen",
        iso2: "ABE",
      },
      {
        name: "Aberdeenshire",
        iso2: "ABD",
      },
      {
        name: "Angus",
        iso2: "ANS",
      },
      {
        name: "Antrim",
        iso2: "ANT",
      },
      {
        name: "Antrim and Newtownabbey",
        iso2: "ANN",
      },
      {
        name: "Ards",
        iso2: "ARD",
      },
      {
        name: "Ards and North Down",
        iso2: "AND",
      },
      {
        name: "Argyll and Bute",
        iso2: "AGB",
      },
      {
        name: "Armagh",
        iso2: "ARM",
      },
      {
        name: "Armagh, Banbridge and Craigavon",
        iso2: "ABC",
      },
      {
        name: "Ascension Island",
        iso2: "SH-AC",
      },
      {
        name: "Ballymena",
        iso2: "BLA",
      },
      {
        name: "Ballymoney",
        iso2: "BLY",
      },
      {
        name: "Banbridge",
        iso2: "BNB",
      },
      {
        name: "Barking and Dagenham",
        iso2: "BDG",
      },
      {
        name: "Barnet",
        iso2: "BNE",
      },
      {
        name: "Barnsley",
        iso2: "BNS",
      },
      {
        name: "Bath and North East Somerset",
        iso2: "BAS",
      },
      {
        name: "Bedford",
        iso2: "BDF",
      },
      {
        name: "Belfast",
        iso2: "BFS",
      },
      {
        name: "Bexley",
        iso2: "BEX",
      },
      {
        name: "Birmingham",
        iso2: "BIR",
      },
      {
        name: "Blackburn with Darwen",
        iso2: "BBD",
      },
      {
        name: "Blackpool",
        iso2: "BPL",
      },
      {
        name: "Blaenau Gwent",
        iso2: "BGW",
      },
      {
        name: "Bolton",
        iso2: "BOL",
      },
      {
        name: "Bournemouth",
        iso2: "BMH",
      },
      {
        name: "Bracknell Forest",
        iso2: "BRC",
      },
      {
        name: "Bradford",
        iso2: "BRD",
      },
      {
        name: "Brent",
        iso2: "BEN",
      },
      {
        name: "Bridgend",
        iso2: "BGE",
      },
      {
        name: "Brighton and Hove",
        iso2: "BNH",
      },
      {
        name: "Bristol",
        iso2: "BST",
      },
      {
        name: "Bromley",
        iso2: "BRY",
      },
      {
        name: "Buckinghamshire",
        iso2: "BKM",
      },
      {
        name: "Bury",
        iso2: "BUR",
      },
      {
        name: "Caerphilly",
        iso2: "CAY",
      },
      {
        name: "Calderdale",
        iso2: "CLD",
      },
      {
        name: "Cambridgeshire",
        iso2: "CAM",
      },
      {
        name: "Camden",
        iso2: "CMD",
      },
      {
        name: "Cardiff",
        iso2: "CRF",
      },
      {
        name: "Carmarthenshire",
        iso2: "CMN",
      },
      {
        name: "Carrickfergus",
        iso2: "CKF",
      },
      {
        name: "Castlereagh",
        iso2: "CSR",
      },
      {
        name: "Causeway Coast and Glens",
        iso2: "CCG",
      },
      {
        name: "Central Bedfordshire",
        iso2: "CBF",
      },
      {
        name: "Ceredigion",
        iso2: "CGN",
      },
      {
        name: "Cheshire East",
        iso2: "CHE",
      },
      {
        name: "Cheshire West and Chester",
        iso2: "CHW",
      },
      {
        name: "City of Kingston upon Hull",
        iso2: "KHL",
      },
      {
        name: "City of Southampton",
        iso2: "STH",
      },
      {
        name: "Clackmannanshire",
        iso2: "CLK",
      },
      {
        name: "Coleraine",
        iso2: "CLR",
      },
      {
        name: "Conwy",
        iso2: "CWY",
      },
      {
        name: "Cookstown",
        iso2: "CKT",
      },
      {
        name: "Cornwall",
        iso2: "CON",
      },
      {
        name: "Coventry",
        iso2: "COV",
      },
      {
        name: "Craigavon",
        iso2: "CGV",
      },
      {
        name: "Croydon",
        iso2: "CRY",
      },
      {
        name: "Cumbria",
        iso2: "CMA",
      },
      {
        name: "Darlington",
        iso2: "DAL",
      },
      {
        name: "Denbighshire",
        iso2: "DEN",
      },
      {
        name: "Derby",
        iso2: "DER",
      },
      {
        name: "Derbyshire",
        iso2: "DBY",
      },
      {
        name: "Derry",
        iso2: "DRY",
      },
      {
        name: "Derry City and Strabane",
        iso2: "DRS",
      },
      {
        name: "Devon",
        iso2: "DEV",
      },
      {
        name: "Doncaster",
        iso2: "DNC",
      },
      {
        name: "Dorset",
        iso2: "DOR",
      },
      {
        name: "Down District Council",
        iso2: "DOW",
      },
      {
        name: "Dudley",
        iso2: "DUD",
      },
      {
        name: "Dumfries and Galloway",
        iso2: "DGY",
      },
      {
        name: "Dundee",
        iso2: "DND",
      },
      {
        name: "Dungannon and South Tyrone",
        iso2: "DGN",
      },
      {
        name: "Durham",
        iso2: "DUR",
      },
      {
        name: "Ealing",
        iso2: "EAL",
      },
      {
        name: "East Ayrshire",
        iso2: "EAY",
      },
      {
        name: "East Dunbartonshire",
        iso2: "EDU",
      },
      {
        name: "East Lothian",
        iso2: "ELN",
      },
      {
        name: "East Renfrewshire",
        iso2: "ERW",
      },
      {
        name: "East Riding of Yorkshire",
        iso2: "ERY",
      },
      {
        name: "East Sussex",
        iso2: "ESX",
      },
      {
        name: "Edinburgh",
        iso2: "EDH",
      },
      {
        name: "Enfield",
        iso2: "ENF",
      },
      {
        name: "England",
        iso2: "ENG",
      },
      {
        name: "Essex",
        iso2: "ESS",
      },
      {
        name: "Falkirk",
        iso2: "FAL",
      },
      {
        name: "Fermanagh",
        iso2: "FER",
      },
      {
        name: "Fermanagh and Omagh",
        iso2: "FMO",
      },
      {
        name: "Fife",
        iso2: "FIF",
      },
      {
        name: "Flintshire",
        iso2: "FLN",
      },
      {
        name: "Gateshead",
        iso2: "GAT",
      },
      {
        name: "Glasgow",
        iso2: "GLG",
      },
      {
        name: "Gloucestershire",
        iso2: "GLS",
      },
      {
        name: "Greenwich",
        iso2: "GRE",
      },
      {
        name: "Gwynedd",
        iso2: "GWN",
      },
      {
        name: "Hackney",
        iso2: "HCK",
      },
      {
        name: "Halton",
        iso2: "HAL",
      },
      {
        name: "Hammersmith and Fulham",
        iso2: "HMF",
      },
      {
        name: "Hampshire",
        iso2: "HAM",
      },
      {
        name: "Haringey",
        iso2: "HRY",
      },
      {
        name: "Harrow",
        iso2: "HRW",
      },
      {
        name: "Hartlepool",
        iso2: "HPL",
      },
      {
        name: "Havering",
        iso2: "HAV",
      },
      {
        name: "Herefordshire",
        iso2: "HEF",
      },
      {
        name: "Hertfordshire",
        iso2: "HRT",
      },
      {
        name: "Highland",
        iso2: "HLD",
      },
      {
        name: "Hillingdon",
        iso2: "HIL",
      },
      {
        name: "Hounslow",
        iso2: "HNS",
      },
      {
        name: "Inverclyde",
        iso2: "IVC",
      },
      {
        name: "Isle of Wight",
        iso2: "IOW",
      },
      {
        name: "Isles of Scilly",
        iso2: "IOS",
      },
      {
        name: "Islington",
        iso2: "ISL",
      },
      {
        name: "Kensington and Chelsea",
        iso2: "KEC",
      },
      {
        name: "Kent",
        iso2: "KEN",
      },
      {
        name: "Kingston upon Thames",
        iso2: "KTT",
      },
      {
        name: "Kirklees",
        iso2: "KIR",
      },
      {
        name: "Knowsley",
        iso2: "KWL",
      },
      {
        name: "Lambeth",
        iso2: "LBH",
      },
      {
        name: "Lancashire",
        iso2: "LAN",
      },
      {
        name: "Larne",
        iso2: "LRN",
      },
      {
        name: "Leeds",
        iso2: "LDS",
      },
      {
        name: "Leicester",
        iso2: "LCE",
      },
      {
        name: "Leicestershire",
        iso2: "LEC",
      },
      {
        name: "Lewisham",
        iso2: "LEW",
      },
      {
        name: "Limavady",
        iso2: "LMV",
      },
      {
        name: "Lincolnshire",
        iso2: "LIN",
      },
      {
        name: "Lisburn",
        iso2: "LSB",
      },
      {
        name: "Lisburn and Castlereagh",
        iso2: "LBC",
      },
      {
        name: "Liverpool",
        iso2: "LIV",
      },
      {
        name: "London",
        iso2: "LND",
      },
      {
        name: "Magherafelt",
        iso2: "MFT",
      },
      {
        name: "Manchester",
        iso2: "MAN",
      },
      {
        name: "Medway",
        iso2: "MDW",
      },
      {
        name: "Merthyr Tydfil",
        iso2: "MTY",
      },
      {
        name: "Merton",
        iso2: "MRT",
      },
      {
        name: "Mid and East Antrim",
        iso2: "MEA",
      },
      {
        name: "Middlesbrough",
        iso2: "MDB",
      },
      {
        name: "Midlothian",
        iso2: "MLN",
      },
      {
        name: "Mid Ulster",
        iso2: "MUL",
      },
      {
        name: "Milton Keynes",
        iso2: "MIK",
      },
      {
        name: "Monmouthshire",
        iso2: "MON",
      },
      {
        name: "Moray",
        iso2: "MRY",
      },
      {
        name: "Moyle",
        iso2: "MYL",
      },
      {
        name: "Neath Port Talbot",
        iso2: "NTL",
      },
      {
        name: "Newcastle upon Tyne",
        iso2: "NET",
      },
      {
        name: "Newham",
        iso2: "NWM",
      },
      {
        name: "Newport",
        iso2: "NWP",
      },
      {
        name: "Newry and Mourne",
        iso2: "NYM",
      },
      {
        name: "Newry, Mourne and Down",
        iso2: "NMD",
      },
      {
        name: "Newtownabbey",
        iso2: "NTA",
      },
      {
        name: "Norfolk",
        iso2: "NFK",
      },
      {
        name: "Northamptonshire",
        iso2: "NTH",
      },
      {
        name: "North Ayrshire",
        iso2: "NAY",
      },
      {
        name: "North Down",
        iso2: "NDN",
      },
      {
        name: "North East Lincolnshire",
        iso2: "NEL",
      },
      {
        name: "Northern Ireland",
        iso2: "NIR",
      },
      {
        name: "North Lanarkshire",
        iso2: "NLK",
      },
      {
        name: "North Lincolnshire",
        iso2: "NLN",
      },
      {
        name: "North Somerset",
        iso2: "NSM",
      },
      {
        name: "North Tyneside",
        iso2: "NTY",
      },
      {
        name: "Northumberland",
        iso2: "NBL",
      },
      {
        name: "North Yorkshire",
        iso2: "NYK",
      },
      {
        name: "Nottingham",
        iso2: "NGM",
      },
      {
        name: "Nottinghamshire",
        iso2: "NTT",
      },
      {
        name: "Oldham",
        iso2: "OLD",
      },
      {
        name: "Omagh",
        iso2: "OMH",
      },
      {
        name: "Orkney Islands",
        iso2: "ORK",
      },
      {
        name: "Outer Hebrides",
        iso2: "ELS",
      },
      {
        name: "Oxfordshire",
        iso2: "OXF",
      },
      {
        name: "Pembrokeshire",
        iso2: "PEM",
      },
      {
        name: "Perth and Kinross",
        iso2: "PKN",
      },
      {
        name: "Peterborough",
        iso2: "PTE",
      },
      {
        name: "Plymouth",
        iso2: "PLY",
      },
      {
        name: "Poole",
        iso2: "POL",
      },
      {
        name: "Portsmouth",
        iso2: "POR",
      },
      {
        name: "Powys",
        iso2: "POW",
      },
      {
        name: "Reading",
        iso2: "RDG",
      },
      {
        name: "Redbridge",
        iso2: "RDB",
      },
      {
        name: "Redcar and Cleveland",
        iso2: "RCC",
      },
      {
        name: "Renfrewshire",
        iso2: "RFW",
      },
      {
        name: "Rhondda Cynon Taf",
        iso2: "RCT",
      },
      {
        name: "Richmond upon Thames",
        iso2: "RIC",
      },
      {
        name: "Rochdale",
        iso2: "RCH",
      },
      {
        name: "Rotherham",
        iso2: "ROT",
      },
      {
        name: "Rutland",
        iso2: "RUT",
      },
      {
        name: "Saint Helena",
        iso2: "SH-HL",
      },
      {
        name: "Salford",
        iso2: "SLF",
      },
      {
        name: "Sandwell",
        iso2: "SAW",
      },
      {
        name: "Scotland",
        iso2: "SCT",
      },
      {
        name: "Scottish Borders",
        iso2: "SCB",
      },
      {
        name: "Sefton",
        iso2: "SFT",
      },
      {
        name: "Sheffield",
        iso2: "SHF",
      },
      {
        name: "Shetland Islands",
        iso2: "ZET",
      },
      {
        name: "Shropshire",
        iso2: "SHR",
      },
      {
        name: "Slough",
        iso2: "SLG",
      },
      {
        name: "Solihull",
        iso2: "SOL",
      },
      {
        name: "Somerset",
        iso2: "SOM",
      },
      {
        name: "South Ayrshire",
        iso2: "SAY",
      },
      {
        name: "Southend-on-Sea",
        iso2: "SOS",
      },
      {
        name: "South Gloucestershire",
        iso2: "SGC",
      },
      {
        name: "South Lanarkshire",
        iso2: "SLK",
      },
      {
        name: "South Tyneside",
        iso2: "STY",
      },
      {
        name: "Southwark",
        iso2: "SWK",
      },
      {
        name: "Staffordshire",
        iso2: "STS",
      },
      {
        name: "St Helens",
        iso2: "SHN",
      },
      {
        name: "Stirling",
        iso2: "STG",
      },
      {
        name: "Stockport",
        iso2: "SKP",
      },
      {
        name: "Stockton-on-Tees",
        iso2: "STT",
      },
      {
        name: "Stoke-on-Trent",
        iso2: "STE",
      },
      {
        name: "Strabane",
        iso2: "STB",
      },
      {
        name: "Suffolk",
        iso2: "SFK",
      },
      {
        name: "Sunderland",
        iso2: "SND",
      },
      {
        name: "Surrey",
        iso2: "SRY",
      },
      {
        name: "Sutton",
        iso2: "STN",
      },
      {
        name: "Swansea",
        iso2: "SWA",
      },
      {
        name: "Swindon",
        iso2: "SWD",
      },
      {
        name: "Tameside",
        iso2: "TAM",
      },
      {
        name: "Telford and Wrekin",
        iso2: "TFW",
      },
      {
        name: "Thurrock",
        iso2: "THR",
      },
      {
        name: "Torbay",
        iso2: "TOB",
      },
      {
        name: "Torfaen",
        iso2: "TOF",
      },
      {
        name: "Tower Hamlets",
        iso2: "TWH",
      },
      {
        name: "Trafford",
        iso2: "TRF",
      },
      {
        name: "United Kingdom",
        iso2: "UKM",
      },
      {
        name: "Vale of Glamorgan",
        iso2: "VGL",
      },
      {
        name: "Wakefield",
        iso2: "WKF",
      },
      {
        name: "Wales",
        iso2: "WLS",
      },
      {
        name: "Walsall",
        iso2: "WLL",
      },
      {
        name: "Waltham Forest",
        iso2: "WFT",
      },
      {
        name: "Wandsworth",
        iso2: "WND",
      },
      {
        name: "Warrington",
        iso2: "WRT",
      },
      {
        name: "Warwickshire",
        iso2: "WAR",
      },
      {
        name: "West Berkshire",
        iso2: "WBK",
      },
      {
        name: "West Dunbartonshire",
        iso2: "WDU",
      },
      {
        name: "West Lothian",
        iso2: "WLN",
      },
      {
        name: "Westminster",
        iso2: "WSM",
      },
      {
        name: "West Sussex",
        iso2: "WSX",
      },
      {
        name: "Wigan",
        iso2: "WGN",
      },
      {
        name: "Wiltshire",
        iso2: "WIL",
      },
      {
        name: "Windsor and Maidenhead",
        iso2: "WNM",
      },
      {
        name: "Wirral",
        iso2: "WRL",
      },
      {
        name: "Wokingham",
        iso2: "WOK",
      },
      {
        name: "Wolverhampton",
        iso2: "WLV",
      },
      {
        name: "Worcestershire",
        iso2: "WOR",
      },
      {
        name: "Wrexham",
        iso2: "WRX",
      },
      {
        name: "York",
        iso2: "YOR",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "United States",
    iso2: "US",
    states: [
      {
        name: "Alabama",
        iso2: "AL",
      },
      {
        name: "Alaska",
        iso2: "AK",
      },
      {
        name: "American Samoa",
        iso2: "AS",
      },
      {
        name: "Arizona",
        iso2: "AZ",
      },
      {
        name: "Arkansas",
        iso2: "AR",
      },
      {
        name: "Baker Island",
        iso2: "UM-81",
      },
      {
        name: "California",
        iso2: "CA",
      },
      {
        name: "Colorado",
        iso2: "CO",
      },
      {
        name: "Connecticut",
        iso2: "CT",
      },
      {
        name: "Delaware",
        iso2: "DE",
      },
      {
        name: "District of Columbia",
        iso2: "DC",
      },
      {
        name: "Florida",
        iso2: "FL",
      },
      {
        name: "Georgia",
        iso2: "GA",
      },
      {
        name: "Guam",
        iso2: "GU",
      },
      {
        name: "Hawaii",
        iso2: "HI",
      },
      {
        name: "Howland Island",
        iso2: "UM-84",
      },
      {
        name: "Idaho",
        iso2: "ID",
      },
      {
        name: "Illinois",
        iso2: "IL",
      },
      {
        name: "Indiana",
        iso2: "IN",
      },
      {
        name: "Iowa",
        iso2: "IA",
      },
      {
        name: "Jarvis Island",
        iso2: "UM-86",
      },
      {
        name: "Johnston Atoll",
        iso2: "UM-67",
      },
      {
        name: "Kansas",
        iso2: "KS",
      },
      {
        name: "Kentucky",
        iso2: "KY",
      },
      {
        name: "Kingman Reef",
        iso2: "UM-89",
      },
      {
        name: "Louisiana",
        iso2: "LA",
      },
      {
        name: "Maine",
        iso2: "ME",
      },
      {
        name: "Maryland",
        iso2: "MD",
      },
      {
        name: "Massachusetts",
        iso2: "MA",
      },
      {
        name: "Michigan",
        iso2: "MI",
      },
      {
        name: "Midway Atoll",
        iso2: "UM-71",
      },
      {
        name: "Minnesota",
        iso2: "MN",
      },
      {
        name: "Mississippi",
        iso2: "MS",
      },
      {
        name: "Missouri",
        iso2: "MO",
      },
      {
        name: "Montana",
        iso2: "MT",
      },
      {
        name: "Navassa Island",
        iso2: "UM-76",
      },
      {
        name: "Nebraska",
        iso2: "NE",
      },
      {
        name: "Nevada",
        iso2: "NV",
      },
      {
        name: "New Hampshire",
        iso2: "NH",
      },
      {
        name: "New Jersey",
        iso2: "NJ",
      },
      {
        name: "New Mexico",
        iso2: "NM",
      },
      {
        name: "New York",
        iso2: "NY",
      },
      {
        name: "North Carolina",
        iso2: "NC",
      },
      {
        name: "North Dakota",
        iso2: "ND",
      },
      {
        name: "Northern Mariana Islands",
        iso2: "MP",
      },
      {
        name: "Ohio",
        iso2: "OH",
      },
      {
        name: "Oklahoma",
        iso2: "OK",
      },
      {
        name: "Oregon",
        iso2: "OR",
      },
      {
        name: "Palmyra Atoll",
        iso2: "UM-95",
      },
      {
        name: "Pennsylvania",
        iso2: "PA",
      },
      {
        name: "Puerto Rico",
        iso2: "PR",
      },
      {
        name: "Rhode Island",
        iso2: "RI",
      },
      {
        name: "South Carolina",
        iso2: "SC",
      },
      {
        name: "South Dakota",
        iso2: "SD",
      },
      {
        name: "Tennessee",
        iso2: "TN",
      },
      {
        name: "Texas",
        iso2: "TX",
      },
      {
        name: "United States Minor Outlying Islands",
        iso2: "UM",
      },
      {
        name: "United States Virgin Islands",
        iso2: "VI",
      },
      {
        name: "Utah",
        iso2: "UT",
      },
      {
        name: "Vermont",
        iso2: "VT",
      },
      {
        name: "Virginia",
        iso2: "VA",
      },
      {
        name: "Wake Island",
        iso2: "UM-79",
      },
      {
        name: "Washington",
        iso2: "WA",
      },
      {
        name: "West Virginia",
        iso2: "WV",
      },
      {
        name: "Wisconsin",
        iso2: "WI",
      },
      {
        name: "Wyoming",
        iso2: "WY",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "United States Minor Outlying Islands",
    iso2: "UM",
    states: [
      {
        name: "Baker Island",
        iso2: "81",
      },
      {
        name: "Howland Island",
        iso2: "84",
      },
      {
        name: "Jarvis Island",
        iso2: "86",
      },
      {
        name: "Johnston Atoll",
        iso2: "67",
      },
      {
        name: "Kingman Reef",
        iso2: "89",
      },
      {
        name: "Midway Islands",
        iso2: "71",
      },
      {
        name: "Navassa Island",
        iso2: "76",
      },
      {
        name: "Palmyra Atoll",
        iso2: "95",
      },
      {
        name: "Wake Island",
        iso2: "79",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Uruguay",
    iso2: "UY",
    states: [
      {
        name: "Artigas",
        iso2: "AR",
      },
      {
        name: "Canelones",
        iso2: "CA",
      },
      {
        name: "Cerro Largo",
        iso2: "CL",
      },
      {
        name: "Colonia",
        iso2: "CO",
      },
      {
        name: "Durazno",
        iso2: "DU",
      },
      {
        name: "Flores",
        iso2: "FS",
      },
      {
        name: "Florida",
        iso2: "FD",
      },
      {
        name: "Lavalleja",
        iso2: "LA",
      },
      {
        name: "Maldonado",
        iso2: "MA",
      },
      {
        name: "Montevideo",
        iso2: "MO",
      },
      {
        name: "Paysandú",
        iso2: "PA",
      },
      {
        name: "Río Negro",
        iso2: "RN",
      },
      {
        name: "Rivera",
        iso2: "RV",
      },
      {
        name: "Rocha",
        iso2: "RO",
      },
      {
        name: "Salto",
        iso2: "SA",
      },
      {
        name: "San José",
        iso2: "SJ",
      },
      {
        name: "Soriano",
        iso2: "SO",
      },
      {
        name: "Tacuarembó",
        iso2: "TA",
      },
      {
        name: "Treinta y Tres",
        iso2: "TT",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Uzbekistan",
    iso2: "UZ",
    states: [
      {
        name: "Andijan",
        iso2: "AN",
      },
      {
        name: "Bukhara",
        iso2: "BU",
      },
      {
        name: "Fergana",
        iso2: "FA",
      },
      {
        name: "Jizzakh",
        iso2: "JI",
      },
      {
        name: "Karakalpakstan",
        iso2: "QR",
      },
      {
        name: "Namangan",
        iso2: "NG",
      },
      {
        name: "Navoiy",
        iso2: "NW",
      },
      {
        name: "Qashqadaryo",
        iso2: "QA",
      },
      {
        name: "Samarqand",
        iso2: "SA",
      },
      {
        name: "Sirdaryo",
        iso2: "SI",
      },
      {
        name: "Surxondaryo",
        iso2: "SU",
      },
      {
        name: "Tashkent",
        iso2: "TK",
      },
      {
        name: "Tashkent",
        iso2: "TO",
      },
      {
        name: "Xorazm",
        iso2: "XO",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Vanuatu",
    iso2: "VU",
    states: [
      {
        name: "Malampa",
        iso2: "MAP",
      },
      {
        name: "Penama",
        iso2: "PAM",
      },
      {
        name: "Sanma",
        iso2: "SAM",
      },
      {
        name: "Shefa",
        iso2: "SEE",
      },
      {
        name: "Tafea",
        iso2: "TAE",
      },
      {
        name: "Torba",
        iso2: "TOB",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Vatican City State (Holy See)",
    iso2: "VA",
    states: [
      {
        name: "Vatican City State (Holy See)",
        iso2: "VA",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Venezuela",
    iso2: "VE",
    states: [
      {
        name: "Amazonas",
        iso2: "Z",
      },
      {
        name: "Anzoátegui",
        iso2: "B",
      },
      {
        name: "Apure",
        iso2: "C",
      },
      {
        name: "Aragua",
        iso2: "D",
      },
      {
        name: "Barinas",
        iso2: "E",
      },
      {
        name: "Bolívar",
        iso2: "F",
      },
      {
        name: "Carabobo",
        iso2: "G",
      },
      {
        name: "Cojedes",
        iso2: "H",
      },
      {
        name: "Delta Amacuro",
        iso2: "Y",
      },
      {
        name: "Distrito Capital",
        iso2: "A",
      },
      {
        name: "Falcón",
        iso2: "I",
      },
      {
        name: "Guárico",
        iso2: "J",
      },
      {
        name: "La Guaira",
        iso2: "X",
      },
      {
        name: "Lara",
        iso2: "K",
      },
      {
        name: "Mérida",
        iso2: "L",
      },
      {
        name: "Miranda",
        iso2: "M",
      },
      {
        name: "Monagas",
        iso2: "N",
      },
      {
        name: "Nueva Esparta",
        iso2: "O",
      },
      {
        name: "Portuguesa",
        iso2: "P",
      },
      {
        name: "Sucre",
        iso2: "R",
      },
      {
        name: "Táchira",
        iso2: "S",
      },
      {
        name: "Trujillo",
        iso2: "T",
      },
      {
        name: "Venezuela",
        iso2: "W",
      },
      {
        name: "Yaracuy",
        iso2: "U",
      },
      {
        name: "Zulia",
        iso2: "V",
      },
    ],
    legal_age: 18,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Vietnam",
    iso2: "VN",
    states: [
      {
        name: "An Giang",
        iso2: "44",
      },
      {
        name: "Bắc Giang",
        iso2: "54",
      },
      {
        name: "Bắc Kạn",
        iso2: "53",
      },
      {
        name: "Bạc Liêu",
        iso2: "55",
      },
      {
        name: "Bắc Ninh",
        iso2: "56",
      },
      {
        name: "Bà Rịa-Vũng Tàu",
        iso2: "43",
      },
      {
        name: "Bến Tre",
        iso2: "50",
      },
      {
        name: "Bình Định",
        iso2: "31",
      },
      {
        name: "Bình Dương",
        iso2: "57",
      },
      {
        name: "Bình Phước",
        iso2: "58",
      },
      {
        name: "Bình Thuận",
        iso2: "40",
      },
      {
        name: "Cà Mau",
        iso2: "59",
      },
      {
        name: "Cần Thơ",
        iso2: "CT",
      },
      {
        name: "Cao Bằng",
        iso2: "04",
      },
      {
        name: "Đắk Lắk",
        iso2: "33",
      },
      {
        name: "Đắk Nông",
        iso2: "72",
      },
      {
        name: "Đà Nẵng",
        iso2: "DN",
      },
      {
        name: "Điện Biên",
        iso2: "71",
      },
      {
        name: "Đồng Nai",
        iso2: "39",
      },
      {
        name: "Đồng Tháp",
        iso2: "45",
      },
      {
        name: "Gia Lai",
        iso2: "30",
      },
      {
        name: "Hà Giang",
        iso2: "03",
      },
      {
        name: "Hải Dương",
        iso2: "61",
      },
      {
        name: "Hải Phòng",
        iso2: "HP",
      },
      {
        name: "Hà Nam",
        iso2: "63",
      },
      {
        name: "Hà Nội",
        iso2: "HN",
      },
      {
        name: "Hà Tĩnh",
        iso2: "23",
      },
      {
        name: "Hậu Giang",
        iso2: "73",
      },
      {
        name: "Hòa Bình",
        iso2: "14",
      },
      {
        name: "Hồ Chí Minh",
        iso2: "SG",
      },
      {
        name: "Hưng Yên",
        iso2: "66",
      },
      {
        name: "Khánh Hòa",
        iso2: "34",
      },
      {
        name: "Kiên Giang",
        iso2: "47",
      },
      {
        name: "Kon Tum",
        iso2: "28",
      },
      {
        name: "Lai Châu",
        iso2: "01",
      },
      {
        name: "Lâm Đồng",
        iso2: "35",
      },
      {
        name: "Lạng Sơn",
        iso2: "09",
      },
      {
        name: "Lào Cai",
        iso2: "02",
      },
      {
        name: "Long An",
        iso2: "41",
      },
      {
        name: "Nam Định",
        iso2: "67",
      },
      {
        name: "Nghệ An",
        iso2: "22",
      },
      {
        name: "Ninh Bình",
        iso2: "18",
      },
      {
        name: "Ninh Thuận",
        iso2: "36",
      },
      {
        name: "Phú Thọ",
        iso2: "68",
      },
      {
        name: "Phú Yên",
        iso2: "32",
      },
      {
        name: "Quảng Bình",
        iso2: "24",
      },
      {
        name: "Quảng Nam",
        iso2: "27",
      },
      {
        name: "Quảng Ngãi",
        iso2: "29",
      },
      {
        name: "Quảng Ninh",
        iso2: "13",
      },
      {
        name: "Quảng Trị",
        iso2: "25",
      },
      {
        name: "Sóc Trăng",
        iso2: "52",
      },
      {
        name: "Sơn La",
        iso2: "05",
      },
      {
        name: "Tây Ninh",
        iso2: "37",
      },
      {
        name: "Thái Bình",
        iso2: "20",
      },
      {
        name: "Thái Nguyên",
        iso2: "69",
      },
      {
        name: "Thanh Hóa",
        iso2: "21",
      },
      {
        name: "Thừa Thiên-Huế",
        iso2: "26",
      },
      {
        name: "Tiền Giang",
        iso2: "46",
      },
      {
        name: "Trà Vinh",
        iso2: "51",
      },
      {
        name: "Tuyên Quang",
        iso2: "07",
      },
      {
        name: "Vĩnh Long",
        iso2: "49",
      },
      {
        name: "Vĩnh Phúc",
        iso2: "70",
      },
      {
        name: "Yên Bái",
        iso2: "06",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE"],
  },
  {
    name: "Virgin Islands (British)",
    iso2: "VG",
    states: [
      {
        name: "Virgin Islands (British)",
        iso2: "VG",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Virgin Islands (US)",
    iso2: "VI",
    states: [
      {
        name: "Saint Croix",
        iso2: "SC",
      },
      {
        name: "Saint John",
        iso2: "SJ",
      },
      {
        name: "Saint Thomas",
        iso2: "ST",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Wallis and Futuna Islands",
    iso2: "WF",
    states: [
      {
        name: "Wallis and Futuna Islands",
        iso2: "WF",
      },
    ],
    legal_age: 16,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Western Sahara",
    iso2: "EH",
    states: [
      {
        name: "Western Sahara",
        iso2: "EH",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Yemen",
    iso2: "YE",
    states: [
      {
        name: "Abyan",
        iso2: "AB",
      },
      {
        name: "'Adan",
        iso2: "AD",
      },
      {
        name: "Al Bayda'",
        iso2: "BA",
      },
      {
        name: "Al Hudaydah",
        iso2: "HU",
      },
      {
        name: "Al Jawf",
        iso2: "JA",
      },
      {
        name: "Al Mahrah",
        iso2: "MR",
      },
      {
        name: "Al Mahwit",
        iso2: "MW",
      },
      {
        name: "Amanat Al Asimah",
        iso2: "SA",
      },
      {
        name: "'Amran",
        iso2: "AM",
      },
      {
        name: "Dhamar",
        iso2: "DH",
      },
      {
        name: "Hadhramaut",
        iso2: "HD",
      },
      {
        name: "Hajjah",
        iso2: "HJ",
      },
      {
        name: "Ibb",
        iso2: "IB",
      },
      {
        name: "Lahij",
        iso2: "LA",
      },
      {
        name: "Ma'rib",
        iso2: "MA",
      },
      {
        name: "Raymah",
        iso2: "RA",
      },
      {
        name: "Saada",
        iso2: "SD",
      },
      {
        name: "Sana'a",
        iso2: "SN",
      },
      {
        name: "Shabwah",
        iso2: "SH",
      },
      {
        name: "Socotra",
        iso2: "SU",
      },
      {
        name: "Ta'izz",
        iso2: "TA",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Zambia",
    iso2: "ZM",
    states: [
      {
        name: "Central",
        iso2: "02",
      },
      {
        name: "Copperbelt",
        iso2: "08",
      },
      {
        name: "Eastern",
        iso2: "03",
      },
      {
        name: "Luapula",
        iso2: "04",
      },
      {
        name: "Lusaka",
        iso2: "09",
      },
      {
        name: "Muchinga",
        iso2: "10",
      },
      {
        name: "Northern",
        iso2: "05",
      },
      {
        name: "Northwestern",
        iso2: "06",
      },
      {
        name: "Southern",
        iso2: "07",
      },
      {
        name: "Western",
        iso2: "01",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
  {
    name: "Zimbabwe",
    iso2: "ZW",
    states: [
      {
        name: "Bulawayo",
        iso2: "BU",
      },
      {
        name: "Harare",
        iso2: "HA",
      },
      {
        name: "Manicaland",
        iso2: "MA",
      },
      {
        name: "Mashonaland Central",
        iso2: "MC",
      },
      {
        name: "Mashonaland East",
        iso2: "ME",
      },
      {
        name: "Mashonaland West",
        iso2: "MW",
      },
      {
        name: "Masvingo",
        iso2: "MV",
      },
      {
        name: "Matabeleland North",
        iso2: "MN",
      },
      {
        name: "Matabeleland South",
        iso2: "MS",
      },
      {
        name: "Midlands",
        iso2: "MI",
      },
    ],
    legal_age: 13,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE", "NON_BINARY"],
  },
];

var rniCountriesList = [
  {
    name: "China",
    iso2: "CN",
    states: [
      {
        name: "Anhui",
        iso2: "AH",
      },
      {
        name: "Beijing",
        iso2: "BJ",
      },
      {
        name: "Chongqing",
        iso2: "CQ",
      },
      {
        name: "Fujian",
        iso2: "FJ",
      },
      {
        name: "Gansu",
        iso2: "GS",
      },
      {
        name: "Guangdong",
        iso2: "GD",
      },
      {
        name: "Guangxi Zhuang",
        iso2: "GX",
      },
      {
        name: "Guizhou",
        iso2: "GZ",
      },
      {
        name: "Hainan",
        iso2: "HI",
      },
      {
        name: "Hebei",
        iso2: "HE",
      },
      {
        name: "Heilongjiang",
        iso2: "HL",
      },
      {
        name: "Henan",
        iso2: "HA",
      },
      {
        name: "Hong Kong SAR",
        iso2: "HK",
      },
      {
        name: "Hubei",
        iso2: "HB",
      },
      {
        name: "Hunan",
        iso2: "HN",
      },
      {
        name: "Inner Mongolia",
        iso2: "NM",
      },
      {
        name: "Jiangsu",
        iso2: "JS",
      },
      {
        name: "Jiangxi",
        iso2: "JX",
      },
      {
        name: "Jilin",
        iso2: "JL",
      },
      {
        name: "Liaoning",
        iso2: "LN",
      },
      {
        name: "Macau SAR",
        iso2: "MO",
      },
      {
        name: "Ningxia Huizu",
        iso2: "NX",
      },
      {
        name: "Qinghai",
        iso2: "QH",
      },
      {
        name: "Shaanxi",
        iso2: "SN",
      },
      {
        name: "Shandong",
        iso2: "SD",
      },
      {
        name: "Shanghai",
        iso2: "SH",
      },
      {
        name: "Shanxi",
        iso2: "SX",
      },
      {
        name: "Sichuan",
        iso2: "SC",
      },
      {
        name: "Taiwan",
        iso2: "TW",
      },
      {
        name: "Tianjin",
        iso2: "TJ",
      },
      {
        name: "Xinjiang",
        iso2: "XJ",
      },
      {
        name: "Xizang",
        iso2: "XZ",
      },
      {
        name: "Yunnan",
        iso2: "YN",
      },
      {
        name: "Zhejiang",
        iso2: "ZJ",
      },
    ],
    legal_age: 14,
    tnc_id: null,
    status: "ACTIVE",
    gender: ["NOT_DISCLOSED", "MALE", "FEMALE"],
  },
];


export default countriesList;