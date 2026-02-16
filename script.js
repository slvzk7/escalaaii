// script.js - O Cérebro do Escala AI

// --- Configurações Iniciais ---
const currentTeamKey = 'palmeiras'; // Define o time atual
const teamData = ELENCOS[currentTeamKey]; // Puxa dados do elenco.js
const sidebar = document.getElementById('playerList');
const pitch = document.getElementById('pitch');
const formationSelect = document.getElementById('formationSelect');

let selectedPlayerId = null; // Variável para controlar o clique no mobile

// --- Inicialização ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Aplicar cores do time (CSS Variables)
    document.documentElement.style.setProperty('--primary', teamData.cores.prim);
    
    // 2. Renderizar lista de jogadores na lateral
    renderSidebar();
    
    // 3. Renderizar o campo com a formação padrão
    changeFormation('4-3-3');
    
    // 4. Carregar time salvo (se houver)
    loadFromStorage();
});

// Listener: Quando mudar a formação no dropdown
formationSelect.addEventListener('change', (e) => {
    changeFormation(e.target.value);
});

// --- Funções de Renderização (Visual) ---

function renderSidebar() {
    sidebar.innerHTML = ''; // Limpa a lista
    
    teamData.jogadores.forEach(player => {
        // Se o jogador já está no campo, não mostra na lista (opcional, mas fica mais limpo)
        if (isPlayerOnField(player.id)) return;

        // Cria o Card do Jogador
        const card = document.createElement('div');
        card.className = 'player-card';
        card.draggable = true; // Permite arrastar no PC
        card.dataset.id = player.id;
        
        // Define a imagem (placeholder ou real)
        const imgUrl = player.img === 'placeholder' 
            ? `https://ui-avatars.com/api/?name=${player.nome}&background=random&color=fff` 
            : player.img;

        card.innerHTML = `
            <img src="${imgUrl}" class="p-avatar" alt="${player.nome}">
            <div class="p-info">
                <span class="p-name">${player.nome}</span>
                <span class="p-pos">${player.pos}</span>
            </div>
        `;

        // Eventos:
        // 1. Desktop: Começar a arrastar
        card.addEventListener('dragstart', handleDragStart);
        // 2. Mobile/Click: Selecionar jogador
        card.addEventListener('click', () => handlePlayerClick(card));

        sidebar.appendChild(card);
    });
}

function changeFormation(formationName) {
    const layout = FORMACOES[formationName];
    
    // Salva jogadores atuais antes de mudar (para tentar recolocar)
    const currentPlayers = [];
    document.querySelectorAll('.slot').forEach(slot => {
        const playerDiv = slot.querySelector('.field-player');
        if(playerDiv) currentPlayers.push({id: playerDiv.dataset.id});
    });
    
    // Limpa o campo (remove slots antigos)
    // Mantém apenas as linhas do campo (elementos com classe .field-line, etc)
    const slots = pitch.querySelectorAll('.slot');
    slots.forEach(s => s.remove());

    // Cria novos slots baseados na formação
    layout.forEach((pos, index) => {
        const slot = document.createElement('div');
        slot.className = 'slot';
        slot.style.top = `${pos.top}%`;
        slot.style.left = `${pos.left}%`;
        slot.dataset.index = index;
        
        // Label da posição (ex: ATA, ZAG)
        slot.innerHTML = `<span>${pos.label}</span>`;

        // Eventos de Drop (Soltar)
        slot.addEventListener('dragover', e => e.preventDefault()); // Necessário para permitir o drop
        slot.addEventListener('drop', handleDrop);
        
        // Evento de Click (Mobile - colocar jogador selecionado)
        slot.addEventListener('click', () => handleSlotClick(slot));

        pitch.appendChild(slot);
    });

    // Se a gente quiser limpar o campo ao mudar formação, apenas atualizamos a sidebar:
    renderSidebar();
}

// --- Lógica de Interação (Híbrida: Drag & Click) ---

// A. Drag and Drop (Desktop)
function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.id);
    e.target.classList.add('dragging'); // Efeito visual
}

function handleDrop(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    placePlayerInSlot(id, e.target.closest('.slot'));
}

// B. Click Logic (Mobile First)
function handlePlayerClick(card) {
    // Remove seleção anterior
    document.querySelectorAll('.selected-mobile').forEach(el => el.classList.remove('selected-mobile'));
    
    // Se clicou no mesmo, desmarca
    if (selectedPlayerId === card.dataset.id) {
        selectedPlayerId = null;
    } else {
        // Marca novo
        selectedPlayerId = card.dataset.id;
        card.classList.add('selected-mobile');
    }
}

function handleSlotClick(slot) {
    // Cenário 1: Tenho um jogador selecionado na mão (cliquei na sidebar antes)
    if (selectedPlayerId) {
        placePlayerInSlot(selectedPlayerId, slot);
        selectedPlayerId = null; // Limpa seleção
    } 
    // Cenário 2: O slot já tem alguém e eu quero tirar (cliquei no campo)
    else {
        const playerDiv = slot.querySelector('.field-player');
        if (playerDiv) {
            removePlayerFromField(playerDiv.dataset.id);
        }
    }
}

// --- Funções Principais (Colocar e Tirar) ---

function placePlayerInSlot(playerId, slot) {
    if (!slot) return;
    
    // 1. Se já tem alguém no slot, remove esse alguém (troca)
    const existing = slot.querySelector('.field-player');
    if (existing) {
        removePlayerFromField(existing.dataset.id, false); // false = não atualiza sidebar ainda
    }

    // 2. Pega dados do jogador
    const player = teamData.jogadores.find(p => p.id === playerId);
    if (!player) return;

    // 3. Cria o elemento visual no campo
    const playerDiv = document.createElement('div');
    playerDiv.className = 'field-player';
    playerDiv.dataset.id = player.id;
    
    const imgUrl = player.img === 'placeholder' 
            ? `https://ui-avatars.com/api/?name=${player.nome}&background=random&color=fff` 
            : player.img;

    playerDiv.innerHTML = `
        <img src="${imgUrl}">
        <div class="name-tag">${player.nome}</div>
    `;

    // 4. Insere no slot e remove da sidebar
    slot.appendChild(playerDiv);
    renderSidebar(); // Atualiza sidebar para remover o jogador de lá
}

function removePlayerFromField(playerId, updateSidebar = true) {
    const playerEl = document.querySelector(`.field-player[data-id="${playerId}"]`);
    if (playerEl) playerEl.remove();
    
    if (updateSidebar) renderSidebar(); // Devolve para a lista
}

function isPlayerOnField(id) {
    return !!document.querySelector(`.field-player[data-id="${id}"]`);
}

function clearField() {
    // Remove todos os jogadores do campo
    document.querySelectorAll('.field-player').forEach(el => el.remove());
    renderSidebar(); // Devolve todos para a lista
    localStorage.removeItem('escalaAI_' + currentTeamKey); // Limpa memória
}

// --- Funcionalidades Extras ---

function saveLineup() {
    const lineup = [];
    document.querySelectorAll('.slot').forEach(slot => {
        const player = slot.querySelector('.field-player');
        if (player) {
            lineup.push({
                slotIndex: slot.dataset.index,
                playerId: player.dataset.id
            });
        }
    });

    const data = {
        formation: formationSelect.value,
        lineup: lineup
    };

    localStorage.setItem('escalaAI_' + currentTeamKey, JSON.stringify(data));
    
    // Feedback visual simples
    const btn = document.querySelector('button[onclick="saveLineup()"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span class="material-icons">check</span> Salvo!';
    setTimeout(() => btn.innerHTML = originalText, 2000);
}

function loadFromStorage() {
    const savedJSON = localStorage.getItem('escalaAI_' + currentTeamKey);
    if (!savedJSON) return;

    const saved = JSON.parse(savedJSON);
    
    // 1. Recupera formação
    formationSelect.value = saved.formation;
    changeFormation(saved.formation);
    
    // 2. Recupera jogadores (com pequeno delay para garantir que slots existem)
    setTimeout(() => {
        saved.lineup.forEach(item => {
            const slot = document.querySelectorAll('.slot')[item.slotIndex];
            if(slot) placePlayerInSlot(item.playerId, slot);
        });
    }, 50);
}

function loadSuggested() {
    clearField();
    const titulares = teamData.titulares_sugeridos;
    const slots = document.querySelectorAll('.slot');
    
    titulares.forEach((pid, index) => {
        if(slots[index]) {
            placePlayerInSlot(pid, slots[index]);
        }
    });
}
