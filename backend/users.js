const users = [
  {
    "id": 1,
    "nome": "Leanne Graham",
    "nome de usuário": "Bret",
    "e-mail": "Sincere@april.biz",
    "endereço": {
      "rua": "Kulas Light",
      "suíte": "Apto. 556",
      "cidade": "Gwenborough",
      "código postal": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "telefone": "1-770-736-8031 ramal 56442",
    "website": "hildegard.org",
    "empresa": {
      "nome": "Romaguera-Crona",
      "Frase de efeito": "Rede neural cliente-servidor multicamadas"
      "bs": "aproveitar os mercados eletrônicos em tempo real"
    }
  },
  {
    "id": 2,
    "nome": "Ervin Howell",
    "nome de usuário": "Antonette",
    "e-mail": "Shanna@melissa.tv",
    "endereço": {
      "rua": "Victor Plains",
      "suíte": "Suíte 879",
      "cidade": "Wisokyburgh",
      "código postal": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "telefone": "010-692-6593 ramal 09125",
    "website": "anastasia.net",
    "empresa": {
      "nome": "Deckow-Crist",
      "Frase de efeito": "Contingência didática proativa"
      "bs": "sinergizar cadeias de suprimentos escaláveis"
    }
  },
  {
    "id": 3,
    "nome": "Clementine Bauch",
    "nome de usuário": "Samantha",
    "e-mail": "Nathan@yesenia.net",
    "endereço": {
      "rua": "Douglas Extension",
      "suíte": "Suíte 847",
      "cidade": "McKenziehaven",
      "código postal": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "telefone": "1-463-123-4447",
    "website": "ramiro.info",
    "empresa": {
      "nome": "Romaguera-Jacobson",
      "Frase de efeito": "Interface bifurcada face a face",
      "bs": "habilitar aplicações estratégicas eletrônicas"
    }
  },
  {
    "id": 4,
    "nome": "Patricia Lebsack",
    "nome de usuário": "Karianne",
    "e-mail": "Julianne.OConner@kory.org",
    "endereço": {
      "rua": "Hoeger Mall",
      "suíte": "Apto. 692",
      "cidade": "South Elvis",
      "código postal": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "telefone": "493-170-9623 ramal 156",
    "website": "kale.biz",
    "empresa": {
      "nome": "Robel-Corkery",
      "Frase de efeito": "Produtividade de tolerância zero em vários níveis"
      "bs": "transição para serviços web de ponta"
    }
  },
  {
    "id": 5,
    "nome": "Chelsey Dietrich",
    "nome de usuário": "Kamren",
    "e-mail": "Lucio_Hettinger@annie.ca",
    "endereço": {
      "rua": "Passeios Skiles",
      "suíte": "Suíte 351",
      "cidade": "Roscoeview",
      "código postal": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "telefone": "(254)954-1289",
    "website": "demarco.info",
    "empresa": {
      "nome": "Keebler LLC",
      "Frase de efeito": "Solução tolerante a falhas centrada no usuário"
      "bs": "revolucionar sistemas de ponta a ponta"
    }
  },
  {
    "id": 6,
    "nome": "Sra. Dennis Schulist",
    "nome de usuário": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "endereço": {
      "rua": "Cruzamento Norberto",
      "suíte": "Apto. 950",
      "cidade": "South Christy",
      "código postal": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "telefone": "1-477-935-8478 ramal 6430",
    "website": "ola.org",
    "empresa": {
      "nome": "Considine-Lockman",
      "Frase de efeito": "Interface de linha de fundo sincronizada",
      "bs": "habilitar aplicações inovadoras"
    }
  },
  {
    "id": 7,
    "nome": "Kurtis Weissnat",
    "nome de usuário": "Elwyn.Skiles",
    "e-mail": "Telly.Hoeger@billy.biz",
    "endereço": {
      "rua": "Trilha Rex",
      "suíte": "Suíte 280",
      "cidade": "Howemouth",
      "código postal": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "telefone": "210.067.6132",
    "website": "elvis.io",
    "empresa": {
      "nome": "Grupo Johns",
      "Frase de efeito": "Força-tarefa multimídia configurável"
      "bs": "gerar varejistas eletrônicos empresariais"
    }
  },
  {
    "id": 8,
    "nome": "Nicholas Runolfsdottir V",
    "nome de usuário": "Maxime_Nienow",
    "e-mail": "Sherwood@rosamond.me",
    "endereço": {
      "rua": "Ellsworth Summit",
      "suíte": "Suíte 729",
      "cidade": "Aliyaview",
      "código postal": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "telefone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "empresa": {
      "nome": "Grupo Abernathy",
      "Frase de efeito": "Conceito secundário implementado",
      "bs": "e-enable e-tailers extensíveis"
    }
  },
  {
    "id": 9,
    "nome": "Glenna Reichert",
    "nome de usuário": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "endereço": {
      "rua": "Parque Dayna",
      "suíte": "Suíte 449",
      "cidade": "Bartholomebury",
      "código postal": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "telefone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "empresa": {
      "nome": "Yost and Sons",
      "Frase de efeito": "Projeto contextualizado e alternável"
      "bs": "tecnologias agregadas em tempo real"
    }
  },
  {
    "id": 10,
    "nome": "Clementina DuBuque",
    "nome de usuário": "Moriah.Stanton",
    "e-mail": "Rey.Padberg@karina.biz",
    "endereço": {
      "rua": "Kattie Turnpike",
      "suíte": "Suíte 198",
      "cidade": "Lebsackbury",
      "código postal": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "telefone": "024-648-3804",
    "website": "ambrose.net",
    "empresa": {
      "nome": "Hoeger LLC",
      "Frase de efeito": "Força-tarefa centralizada de empoderamento",
      "bs": "modelos de ponta a ponta de destino"
    }
  }
];

export default users;
