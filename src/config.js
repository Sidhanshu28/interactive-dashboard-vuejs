const yll_id = "KHRNfvdT9dA;qZvcjbS6Vaq;XkvbmSQNWS0;PP5wOeAYiO3;ttdmF6w8y5T;ItofpP0Eo2H;Ft4sC50UywO;lkZH71b2qqI;oHxYHpmJFTI;oE12jKw1cDn;jUOkNisSGtL;YAZdpC2fdlp;qSGAN58i4Y4;ycnYaICFBo5;tAlC7ioAkP3;fEdSIl29SXB;YV6xDaZiFOA;Gzmf8Brlebv;te717AMOBPU;Y90XWSZUXil;u1vQIT0KDmq;OnFNzSJmpDd;b8bF2H1nlKM;rbvkGJD9mNb;HoAv6hDtfx9;nac95mZ6R3J;MWl8SCPJLAE;Q3gKBv7Q76G;ZenTjUJdMit;WADeiOG2GZ3;K3vVuinN0sf;q1y9nxTmGCB;Lo9m9x0Noo3;zTXCQFLMd07;f54afn66e00;TqAnqg4TGIi;bo2ysWfPPNp;kJb0YxZ3fC7;hqkcNhlZa3l;LiDCa42AKC1;wiGw1nW0bh8;DxDvbzbqX8U;pEmQPvuMsCd;WlkD7uIrJS1;Tb3Xvv9wUA4";

const yld_id = "";
const daly_id = "";

const age_id = "kTkbVocs2qt";
const age_0_4_id = "LJglh3dKkBF";
const age_5_14_id = "Y80cGPh9cA9";
const age_15_29_id = "ppIxci61gTu";
const age_30_49_id = "yvdQkzHuq2E";
const age_50_59_id = "fohLv27MtjN";
const age_60_69_id = "FPQcIz7kBvD";
const age_70_79_id = "fuZTseIa9nS";
const age_above80_id = "rHmIMu8bVmy";
const age_categories = ["0-4", "5-14", "15-29", "30-49", "50-59", "60-69", "70-79", "80 and Above"];

const age_main_var = "LJglh3dKkBF;Y80cGPh9cA9;ppIxci61gTu;yvdQkzHuq2E;fohLv27MtjN;FPQcIz7kBvD;fuZTseIa9nS;rHmIMu8bVmy"

const all_ages_main_id = "WEM8mVPOhM7";
const all_ages_id = "KRxXmwGhNrr";

const gender_id = "Qw8MkDKTvPV";
const gender_male_id = "lEUL3JB7ZCA";
const gender_female_id = "RXScRq7ZbYm";
const gender_categories = ["Male", "Female", "Both"];

const gender_main_var = "lEUL3JB7ZCA;RXScRq7ZbYm";

const site_id = "hMtyUrlNCdp";
const site_urban_id = "GkHE9YVFkpE";
const site_rural_id = "Vl6ZLaCt2mW";
const site_categories = ["Urban", "Rural", "Both"];

const site_main_var = "GkHE9YVFkpE;Vl6ZLaCt2mW";

const diseases_obj_yll = [{
    'jUOkNisSGtL': {
        name: 'Epilepsy - YLL',
        data: []
    },
    'rbvkGJD9mNb': {
        name: 'Malaria - YLL',
        data: []
    },
    'wiGw1nW0bh8': {
        name: 'Sexually-transmitted infections incl. HIV/AIDS - YLL',
        data: []
    },
    'oHxYHpmJFTI': {
        name: 'Diarrhoeal diseases - YLL',
        data: []
    },
    'hqkcNhlZa3l': {
        name: 'Selected vaccine preventable diseases - YLL',
        data: []
    },
    'nac95mZ6R3J': {
        name: 'Meningitis/encephalitis - YLL',
        data: []
    },
    'YV6xDaZiFOA': {
        name: 'Hepatitis - YLL',
        data: []
    },
    'TqAnqg4TGIi': {
        name: 'Respiratory infections - YLL',
        data: []
    },
    'Lo9m9x0Noo3': {
        name: 'Other infectious and parasitic diseases - YLL',
        data: []
    },
    'HoAv6hDtfx9': {
        name: 'Maternal conditions - YLL',
        data: []
    },
    'pEmQPvuMsCd': {
        name: 'Stomach cancer - YLL',
        data: []
    },
    'b8bF2H1nlKM': {
        name: 'Lung & airway cancers - YLL',
        data: []
    },
    'WADeiOG2GZ3': {
        name: 'Oral and upper aerodigestive cancers - YLL',
        data: []
    },
    'u1vQIT0KDmq': {
        name: 'Liver cancer - YLL',
        data: []
    },
    'f54afn66e00': {
        name: 'Perinatal conditions - YLL',
        data: []
    },
    'ZenTjUJdMit': {
        name: 'Nutritional deficiencies - YLL',
        data: []
    },
    'qSGAN58i4Y4': {
        name: 'Fever of unknown origin - YLL',
        data: []
    },
    'K3vVuinN0sf': {
        name: 'Other digestive cancers - YLL',
        data: []
    },
    'XkvbmSQNWS0': {
        name: 'Breast cancer - YLL',
        data: []
    },
    'ttdmF6w8y5T': {
        name: 'Cervix & uterus cancers - YLL',
        data: []
    },
    'Y90XWSZUXil': {
        name: 'Leukemia,lymphoma and oth. hemotopoietic malignancies - YLL',
        data: []
    },
    'KHRNfvdT9dA': {
        name: 'All other cancers - YLL',
        data: []
    },
    'lkZH71b2qqI': {
        name: 'Diabetes, endocrine and immune disorders - YLL',
        data: []
    },
    'zTXCQFLMd07': {
        name: 'Other neuropsychiatric conditions (excl. epilepsy) - YLL',
        data: []
    },
    'DxDvbzbqX8U': {
        name: 'Skin, sense organs and Oral conditions - YLL',
        data: []
    },
    'MWl8SCPJLAE': {
        name: 'Musculoskeletal disorders - YLL',
        data: []
    },
    'bo2ysWfPPNp': {
        name: 'Rheumatic heart disease - YLL',
        data: []
    },
    'PP5wOeAYiO3': {
        name: 'Cerebrovascular diseases - YLL',
        data: []
    },
    'fEdSIl29SXB': {
        name: 'Heart diseases - YLL',
        data: []
    },
    'ItofpP0Eo2H': {
        name: 'Chronic respiratory diseases - YLL',
        data: []
    },
    'ycnYaICFBo5': {
        name: 'Gastro-oesophageal diseases - YLL',
        data: []
    },
    'OnFNzSJmpDd': {
        name: 'Liver diseases - YLL',
        data: []
    },
    'q1y9nxTmGCB': {
        name: 'Other digestive diseases - YLL',
        data: []
    },
    'Q3gKBv7Q76G': {
        name: 'Nephritis and nephrosis - YLL',
        data: []
    },
    'tAlC7ioAkP3': {
        name: 'Geneto-urintary diseases - YLL',
        data: []
    },
    'YAZdpC2fdlp': {
        name: 'Falls - YLL',
        data: []
    },
    'oE12jKw1cDn': {
        name: 'Drowning - YLL',
        data: []
    },
    'LiDCa42AKC1': {
        name: 'Self-inflicted injuries (suicide) - YLL',
        data: []
    },
    'qZvcjbS6Vaq': {
        name: 'All other injuries - YLL',
        data: []
    },
    'Gzmf8Brlebv': {
        name: 'Ill-defined or cause unknown - YLL',
        data: []
    },
    'Ft4sC50UywO': {
        name: 'Congenital anomalies - YLL',
        data: []
    },
    'Tb3Xvv9wUA4': {
        name: 'Venomous deaths - YLL',
        data: []
    },
    'te717AMOBPU': {
        name: 'Interpersonal violence - YLL',
        data: []
    },
    'kJb0YxZ3fC7': {
        name: 'Road traffic accidents - YLL',
        data: []
    },
    'WlkD7uIrJS1': {
        name: 'Tuberculosis YLL',
        data: []
    },
}]

const indiaOuId = "cBx1Gyq06xU";

const allouIDs = "J1qTQ3TKlNU;ft1FqZHkEIV;UBKSsG72Cg8;nCTGAP1pUqK;z8g8gAEeird;xHmXn2gn3rS;x2yMjFqOh5R;AOxuENOsJFH;YE9KMXV2qC3;dBKf3LDpfYl;N40kwU7hERO;kBajdL7waFu;XJMaF0ZzGo1;wTQrXc3kOgA;y85LzeVqQNo;YkAq1G0JN6Y;qA92TbABPdT;TABbglhSurr;B8ffozIh5D0;BBnVIaukxaN;x5TafwbmlFt;KfUK7GlZqiu;XX7mkLtUkZT;A64ajbtzogd;ITt5l6I85Uf;n5C3pZ1QbDV;XzbGlw8pVXQ;Cbw7y8SiYyW;VTNC2rB3AzO;nAEXiUnvksD;WwBDw1qLQfH;yWmW9qcMVwZ;yBFfg3amqn7;BvnPG4cWtyx;DrcfNamsJRj;N2K15gP6SKn;osxywsmbdA9;JQq12xOtj1a;ˀ";

const statesMapData = [{
    // 'J1qTQ3TKlNU': {data : 0},
    'ft1FqZHkEIV': {data : 0},
    'UBKSsG72Cg8': {data : 0},
    'nCTGAP1pUqK': {data : 0},
    'z8g8gAEeird': {data : 0},
    // 'xHmXn2gn3rS': {data : 0},
    'x2yMjFqOh5R': {data : 0},
    'AOxuENOsJFH': {data : 0},
    // 'YE9KMXV2qC3': {data : 0},
    'dBKf3LDpfYl': {data : 0},
    'N40kwU7hERO': {data : 0},
    'kBajdL7waFu': {data : 0},
    'XJMaF0ZzGo1': {data : 0},
    'wTQrXc3kOgA': {data : 0},
    'y85LzeVqQNo': {data : 0},
    'YkAq1G0JN6Y': {data : 0},
    'qA92TbABPdT': {data : 0},
    'TABbglhSurr': {data : 0},
    // 'B8ffozIh5D0': {data : 0},
    'BBnVIaukxaN': {data : 0},
    'x5TafwbmlFt': {data : 0},
    'KfUK7GlZqiu': {data : 0},
    'XX7mkLtUkZT': {data : 0},
    'A64ajbtzogd': {data : 0},
    'ITt5l6I85Uf': {data : 0},
    'XzbGlw8pVXQ': {data : 0},
    'VTNC2rB3AzO': {data : 0},
    'nAEXiUnvksD': {data : 0},
    'WwBDw1qLQfH': {data : 0},
    'yWmW9qcMVwZ': {data : 0},
    'yBFfg3amqn7': {data : 0},
    // 'BvnPG4cWtyx': {data : 0},
    'DrcfNamsJRj': {data : 0},
    'N2K15gP6SKn': {data : 0},
    'osxywsmbdA9': {data : 0},
    'JQq12xOtj1a': {data : 0},
}];


const statesMapName = [{
    // 'J1qTQ3TKlNU': 'in-', andaman nicobar
    'ft1FqZHkEIV': {name :'in-ap'},
    'UBKSsG72Cg8': {name :'in-ar'},
    'nCTGAP1pUqK': {name :'in-as'},
    'z8g8gAEeird': {name :'in-br'},
    // 'xHmXn2gn3rS': 'in-', chandigarh
    'x2yMjFqOh5R': {name :'in-ch'},
    'AOxuENOsJFH': {name :'in-dn'},
    // 'YE9KMXV2qC3': 'in-',daman} and diu
    'dBKf3LDpfYl': {name :'in-dl'},
    'N40kwU7hERO': {name :'in-ga'},
    'kBajdL7waFu': {name :'in-2984'},
    'XJMaF0ZzGo1': {name :'in-hr'},
    'wTQrXc3kOgA': {name :'in-hp'},
    'y85LzeVqQNo': {name :'in-jk'},
    'YkAq1G0JN6Y': {name :'in-jh'},
    'qA92TbABPdT': {name :'in-ka'},
    'TABbglhSurr': {name :'in-kl'},
    // 'B8ffozIh5D0': 'in-', Lakshadweep
    'BBnVIaukxaN': {name :'in-mp'},
    'x5TafwbmlFt': {name :'in-mh'},
    'KfUK7GlZqiu': {name :'in-mn'},
    'XX7mkLtUkZT': {name :'in-ml'},
    'A64ajbtzogd': {name :'in-mz'},
    'ITt5l6I85Uf': {name :'in-nl'},
    'XzbGlw8pVXQ': {name :'in-or'},
    'VTNC2rB3AzO': {name :'in-py'},
    'nAEXiUnvksD': {name :'in-pb'},
    'WwBDw1qLQfH': {name :'in-rj'},
    'yWmW9qcMVwZ': {name :'in-sk'},
    'yBFfg3amqn7': {name :'in-tn'},
    // 'BvnPG4cWtyx': 'in-', telangana
    'DrcfNamsJRj': {name :'in-tr'},
    'N2K15gP6SKn': {name :'in-up'},
    'osxywsmbdA9': {name :'in-ut'},
    'JQq12xOtj1a': {name :'in-wb'}
}];

const stateNames = [{
    "J1qTQ3TKlNU": "Andaman and Nicobar",
    "ft1FqZHkEIV": "Andhra Pradesh",
    "UBKSsG72Cg8": "Arunachal Pradesh",
    "nCTGAP1pUqK": "Assam",
    "z8g8gAEeird": "Bihar",
    "xHmXn2gn3rS": "Chandigarh",
    "x2yMjFqOh5R": "Chhattisgarh",
    "AOxuENOsJFH": "Dadra and Nagar Haveli",
    "YE9KMXV2qC3": "Daman and Diu",
    "dBKf3LDpfYl": "Delhi",
    "N40kwU7hERO": "Goa",
    "kBajdL7waFu": "Gujarat",
    "XJMaF0ZzGo1": "Haryana",
    "wTQrXc3kOgA": "Himachal Pradesh",
    "y85LzeVqQNo": "Jammu and Kashmir",
    "YkAq1G0JN6Y": "Jharkhand",
    "qA92TbABPdT": "Karnataka",
    "TABbglhSurr": "Kerala",
    "B8ffozIh5D0": "Lakshadweep",
    "BBnVIaukxaN": "Madhya Pradesh",
    "x5TafwbmlFt": "Maharashtra",
    "KfUK7GlZqiu": "Manipur",
    "XX7mkLtUkZT": "Meghalaya",
    "A64ajbtzogd": "Mizoram",
    "ITt5l6I85Uf": "Nagaland",
    "n5C3pZ1QbDV": "Northeastern cluster States",
    "XzbGlw8pVXQ": "Odisha",
    "Cbw7y8SiYyW": "Other remaining small states and UTs",
    "VTNC2rB3AzO": "Puducherry",
    "nAEXiUnvksD": "Punjab",
    "WwBDw1qLQfH": "Rajasthan",
    "yWmW9qcMVwZ": "Sikkim",
    "yBFfg3amqn7": "Tamil Nadu",
    "BvnPG4cWtyx": "Telangana",
    "DrcfNamsJRj": "Tripura",
    "N2K15gP6SKn": "Uttar Pradesh",
    "osxywsmbdA9": "Uttarakhand",
    "JQq12xOtj1a": "West Bengal",

}]

export default {
    yll: yll_id,
    yld: yld_id,
    daly: daly_id,
    age_id: age_id,
    age_0_4_id: age_0_4_id,
    age_5_14_id: age_5_14_id,
    age_15_29_id: age_15_29_id,
    age_30_49_id: age_30_49_id,
    age_50_59_id: age_50_59_id,
    age_60_69_id: age_60_69_id,
    age_70_79_id: age_70_79_id,
    age_above80_id: age_above80_id,
    all_ages_main_id: all_ages_main_id,
    all_ages_id: all_ages_id,
    gender_id: gender_id,
    gender_male_id: gender_male_id,
    gender_female_id: gender_female_id,
    site_id: site_id,
    site_urban_id: site_urban_id,
    site_rural_id: site_rural_id,
    age_main_var: age_main_var,
    gender_main_var: gender_main_var,
    diseases: diseases_obj_yll,
    age_categories: age_categories,
    gender_categories: gender_categories,
    site_main_var: site_main_var,
    site_categories: site_categories,
    indiaOuId: indiaOuId,
    statesMapData: statesMapData,
    allouIDs: allouIDs,
    statesMapName: statesMapName,
    stateNames: stateNames
}