// elenco.js

// Função auxiliar para gerar avatar com iniciais
const getAvatar = (nome, corFundo, corTexto) => {
    const nomeFormatado = nome.replace(/ /g, "+");
    return `https://ui-avatars.com/api/?name=${nomeFormatado}&background=${corFundo.replace("#","")}&color=${corTexto.replace("#","")}&bold=true`;
};

const elencos = {
    palmeiras: {
        nome: "Palmeiras",
        corPrimaria: "#006437",
        corSecundaria: "#ffffff",
        jogadores: [
            // Goleiros
            { id: 1, nome: "Carlos Miguel", pos: "Goleiro" },
            { id: 2, nome: "Marcelo Lomba", pos: "Goleiro" },
            { id: 3, nome: "Aranha", pos: "Goleiro" },
            // Zagueiros
            { id: 4, nome: "Murilo", pos: "Zagueiro" },
            { id: 5, nome: "Gustavo Gómez", pos: "Zagueiro" },
            { id: 6, nome: "Bruno Fuchs", pos: "Zagueiro" },
            { id: 7, nome: "Luis Benedetti", pos: "Zagueiro" },
            // Laterais
            { id: 8, nome: "Agustín Giay", pos: "Lateral Dir." },
            { id: 9, nome: "Khellven", pos: "Lateral Dir." },
            { id: 10, nome: "Piquerez", pos: "Lateral Esq." },
            { id: 11, nome: "Jefté", pos: "Lateral Esq." },
            { id: 12, nome: "Arthur Gabriel", pos: "Lateral Esq." },
            // Volantes/Meias
            { id: 13, nome: "E. Martínez", pos: "Volante" },
            { id: 14, nome: "Marlon Freitas", pos: "Volante" },
            { id: 15, nome: "Luis Pacheco", pos: "Volante" },
            { id: 16, nome: "Andreas Pereira", pos: "Meia" },
            { id: 17, nome: "Lucas Evangelista", pos: "Meia" },
            { id: 18, nome: "Mauricio", pos: "Meia" },
            { id: 19, nome: "Figueiredo", pos: "Meia" },
            { id: 20, nome: "Larson", pos: "Meia" },
            // Ataque
            { id: 21, nome: "Jhon Arias", pos: "Ponta" },
            { id: 22, nome: "Ramón Sosa", pos: "Ponta" },
            { id: 23, nome: "Felipe Anderson", pos: "Ponta" },
            { id: 24, nome: "Paulinho", pos: "Ponta" },
            { id: 25, nome: "Bruno Rodrigues", pos: "Ponta" },
            { id: 26, nome: "Riquelme Fillipi", pos: "Ponta" },
            { id: 27, nome: "Allan", pos: "Ponta" },
            { id: 28, nome: "Vitor Roque", pos: "Centroavante" },
            { id: 29, nome: "Flaco López", pos: "Centroavante" },
            { id: 30, nome: "Luighi", pos: "Centroavante" },
            { id: 31, nome: "Erick Belé", pos: "Centroavante" }
        ]
    },
    corinthians: {
        nome: "Corinthians",
        corPrimaria: "#1e1e1e", // Preto suave
        corSecundaria: "#ffffff",
        jogadores: [
            // Goleiros
            { id: 101, nome: "Hugo Souza", pos: "Goleiro" },
            { id: 102, nome: "Matheus Donelli", pos: "Goleiro" },
            { id: 103, nome: "Felipe Longo", pos: "Goleiro" },
            { id: 104, nome: "Kauê", pos: "Goleiro" },
            // Zagueiros
            { id: 105, nome: "André Ramalho", pos: "Zagueiro" },
            { id: 106, nome: "Tchoca", pos: "Zagueiro" },
            { id: 107, nome: "Cacá", pos: "Zagueiro" },
            { id: 108, nome: "Gustavo Henrique", pos: "Zagueiro" },
            { id: 109, nome: "Gabriel Paulista", pos: "Zagueiro" },
            { id: 110, nome: "Renato Santos", pos: "Zagueiro" },
            // Laterais
            { id: 111, nome: "Matheuzinho", pos: "Lateral Dir." },
            { id: 112, nome: "Pedro Milans", pos: "Lateral Dir." },
            { id: 113, nome: "Matheus Bidu", pos: "Lateral Esq." },
            { id: 114, nome: "Hugo", pos: "Lateral Esq." },
            { id: 115, nome: "Fabrizio Angileri", pos: "Lateral Esq." },
            // Meio
            { id: 116, nome: "Raniele", pos: "Volante" },
            { id: 117, nome: "Allan", pos: "Volante" },
            { id: 118, nome: "José Martínez", pos: "Volante" },
            { id: 119, nome: "Charles", pos: "Volante" },
            { id: 120, nome: "Rodrigo Garro", pos: "Meia" },
            { id: 121, nome: "Breno Bidon", pos: "Meia" },
            { id: 122, nome: "Alex Santana", pos: "Meia" },
            { id: 123, nome: "Matheus Pereira", pos: "Meia" },
            { id: 124, nome: "André Carrillo", pos: "Meia" },
            // Ataque
            { id: 125, nome: "Vitinho", pos: "Ponta" },
            { id: 126, nome: "Kaio César", pos: "Ponta" },
            { id: 127, nome: "Kayke", pos: "Ponta" },
            { id: 128, nome: "Dieguinho", pos: "Ponta" },
            { id: 129, nome: "Yuri Alberto", pos: "Centroavante" },
            { id: 130, nome: "Memphis Depay", pos: "Centroavante" },
            { id: 131, nome: "Pedro Raul", pos: "Centroavante" },
            { id: 132, nome: "Gui Negão", pos: "Centroavante" }
        ]
    },
    saopaulo: {
        nome: "São Paulo",
        corPrimaria: "#C60000", // Vermelho SPFC
        corSecundaria: "#ffffff",
        jogadores: [
            // Goleiros
            { id: 201, nome: "Carlos Coronel", pos: "Goleiro" },
            { id: 202, nome: "Rafael", pos: "Goleiro" },
            { id: 203, nome: "Young", pos: "Goleiro" },
            { id: 204, nome: "Felipe Preis", pos: "Goleiro" },
            // Zagueiros
            { id: 205, nome: "Nahuel Ferraresi", pos: "Zagueiro" },
            { id: 206, nome: "Alan Franco", pos: "Zagueiro" },
            { id: 207, nome: "Rafael Tolói", pos: "Zagueiro" },
            { id: 208, nome: "Robert Arboleda", pos: "Zagueiro" },
            { id: 209, nome: "Sabino", pos: "Zagueiro" },
            { id: 210, nome: "Matheus Dória", pos: "Zagueiro" },
            // Laterais
            { id: 211, nome: "Cédric Soares", pos: "Lateral Dir." },
            { id: 212, nome: "Maik", pos: "Lateral Dir." },
            { id: 213, nome: "Lucas Ramon", pos: "Lateral Dir." },
            { id: 214, nome: "Igor Felisberto", pos: "Lateral Dir." },
            { id: 215, nome: "Enzo Díaz", pos: "Lateral Esq." },
            { id: 216, nome: "Wendell", pos: "Lateral Esq." },
            { id: 217, nome: "Nicolas", pos: "Lateral Esq." },
            // Meio
            { id: 218, nome: "Pablo Maia", pos: "Volante" },
            { id: 219, nome: "Luan", pos: "Volante" },
            { id: 220, nome: "Felipe Negrucci", pos: "Volante" },
            { id: 221, nome: "Hugo Leonardo", pos: "Volante" },
            { id: 222, nome: "Oscar", pos: "Meia" },
            { id: 223, nome: "Marcos Antônio", pos: "Meia" },
            { id: 224, nome: "Damián Bobadilla", pos: "Meia" },
            { id: 225, nome: "Alisson", pos: "Meia" },
            { id: 226, nome: "Danielzinho", pos: "Meia" },
            { id: 227, nome: "Pedro Ferreira", pos: "Meia" },
            // Ataque
            { id: 228, nome: "Lucas Moura", pos: "Ponta" },
            { id: 229, nome: "Ferreirinha", pos: "Ponta" },
            { id: 230, nome: "Tetê", pos: "Ponta" },
            { id: 231, nome: "Lucca", pos: "Ponta" },
            { id: 232, nome: "Ryan Francisco", pos: "Ponta" },
            { id: 233, nome: "Gonzalo Tapia", pos: "Ponta" },
            { id: 234, nome: "André Silva", pos: "Ponta" },
            { id: 235, nome: "Jonathan Calleri", pos: "Centroavante" },
            { id: 236, nome: "Luciano", pos: "Centroavante" },
            { id: 237, nome: "Paulinho", pos: "Centroavante" }
        ]
    },
    flamengo: {
        nome: "Flamengo",
        corPrimaria: "#C3281E", // Vermelho Fla
        corSecundaria: "#1e1e1e", // Preto
        jogadores: [
            { id: 301, nome: "Agustín Rossi", pos: "Goleiro" },
            { id: 302, nome: "Andrew", pos: "Goleiro" },
            { id: 303, nome: "Dyogo Alves", pos: "Goleiro" },
            { id: 304, nome: "Léo Pereira", pos: "Zagueiro" },
            { id: 305, nome: "Léo Ortiz", pos: "Zagueiro" },
            { id: 306, nome: "Vitão", pos: "Zagueiro" },
            { id: 307, nome: "Danilo", pos: "Zagueiro" },
            { id: 308, nome: "João Victor", pos: "Zagueiro" },
            { id: 309, nome: "Emerson Royal", pos: "Lateral Dir." },
            { id: 310, nome: "Guillermo Varela", pos: "Lateral Dir." },
            { id: 311, nome: "Ayrton Lucas", pos: "Lateral Esq." },
            { id: 312, nome: "Alex Sandro", pos: "Lateral Esq." },
            { id: 313, nome: "Erick Pulgar", pos: "Volante" },
            { id: 314, nome: "Jorginho", pos: "Volante" },
            { id: 315, nome: "Evertton Araújo", pos: "Volante" },
            { id: 316, nome: "Lucas Paquetá", pos: "Meia" },
            { id: 317, nome: "Arrascaeta", pos: "Meia" },
            { id: 318, nome: "De la Cruz", pos: "Meia" },
            { id: 319, nome: "Saúl Ñíguez", pos: "Meia" },
            { id: 320, nome: "Jorge Carrascal", pos: "Meia" },
            { id: 321, nome: "Samuel Lino", pos: "Ponta" },
            { id: 322, nome: "Everton", pos: "Ponta" },
            { id: 323, nome: "Luiz Araújo", pos: "Ponta" },
            { id: 324, nome: "Gonzalo Plata", pos: "Ponta" },
            { id: 325, nome: "Wallace Yan", pos: "Ponta" },
            { id: 326, nome: "Bruno Henrique", pos: "Ponta" },
            { id: 327, nome: "Pedro", pos: "Centroavante" }
        ]
    }
};

// Processa as imagens automaticamente
Object.keys(elencos).forEach(key => {
    const time = elencos[key];
    time.jogadores.forEach(jogador => {
        if (!jogador.foto) {
            jogador.foto = getAvatar(jogador.nome, time.corPrimaria, "#ffffff");
        }
    });
});

if (typeof module !== 'undefined') {
    module.exports = elencos;
}
