const screens = { intro: document.getElementById('screen-intro'), game: document.getElementById('screen-game'), final: document.getElementById('screen-final') };
const questions = [
{title:"El dispositivo de escape",tag:"PORTAL 2",story:"Chell necesita atravesar cámaras de prueba. ¿Qué herramienta usa para abrir portales?",options:["Un arma de portales", "Un gancho de escalada", "Un rayo congelante", "Un teletransportador portátil"],correct:0,keyword:"PORTAL",hint:"La herramienta permite crear portales conectados en superficies aptas."},
{title:"El hijo de Kratos",tag:"GOD OF WAR (2018)",story:"¿Cómo se llama el hijo que acompaña a Kratos?",options:["Deimos", "Atreus", "Baldur", "Mimir"],correct:1,keyword:"VALOR",hint:"Es el chico que acompaña a Kratos durante el viaje."},
{title:"La compañera de Joel",tag:"THE LAST OF US",story:"¿Cómo se llama la adolescente que Joel debe escoltar?",options:["Abby", "Sarah", "Ellie", "Tess"],correct:2,keyword:"CONFIANZA",hint:"Su nombre tiene cinco letras y empieza con E."},
{title:"La misión de Leon",tag:"RESIDENT EVIL 4",story:"¿A quién debe rescatar Leon Kennedy?",options:["Claire Redfield", "Ashley Graham", "Jill Valentine", "Ada Wong"],correct:1,keyword:"CORaje",hint:"Es la hija del presidente de Estados Unidos."},
{title:"El protagonista de Bullworth",tag:"BULLY",story:"¿Cómo se llama el protagonista de Bully?",options:["Jimmy Hopkins", "Gary Smith", "Pete Kowalski", "Derby Harrington"],correct:0,keyword:"CAOS",hint:"Su nombre es Jimmy y su apellido empieza con H."},
{title:"El monstruo explosivo",tag:"MINECRAFT",story:"¿Qué criatura verde explota cuando se acerca al jugador?",options:["Enderman", "Esqueleto", "Creeper", "Slime"],correct:2,keyword:"BLOQUE",hint:"Su nombre empieza con C y se acerca en silencio."},
{title:"La nave de los cazarrecompensas",tag:"COWBOY BEBOP",story:"¿Cómo se llama la nave principal de la tripulación?",options:["Swordfish II", "Red Tail", "Bebop", "Hammerhead"],correct:2,keyword:"ESPACIO",hint:"El título de la serie y el nombre de la nave comparten la misma palabra."},
{title:"El Stand de Jotaro",tag:"JOJO’S BIZARRE ADVENTURE",story:"¿Cómo se llama el Stand de Jotaro Kujo?",options:["The World", "Crazy Diamond", "Star Platinum", "Gold Experience"],correct:2,keyword:"DESTINO",hint:"Su nombre combina una estrella y un metal precioso."},
{title:"El animal de Jake",tag:"HORA DE AVENTURA",story:"¿Qué animal es Jake?",options:["Gato", "Perro", "Conejo", "Oso"],correct:1,keyword:"AMISTAD",hint:"Es el mejor amigo de Finn y ladra."},
{title:"El piloto del EVA-01",tag:"NEON GENESIS EVANGELION",story:"¿Quién pilota el EVA-01?",options:["Rei Ayanami", "Asuka Langley", "Shinji Ikari", "Kaworu Nagisa"],correct:2,keyword:"VALENTÍA",hint:"Es el protagonista; su nombre empieza con Shin-"},
{title:"El tema de Black Mirror",tag:"BLACK MIRROR",story:"¿Qué tema aparece de forma recurrente en Black Mirror?",options:["La tecnología y sus consecuencias", "La vida de piratas", "La mitología griega", "Los viajes de época"],correct:0,keyword:"REFLEJO",hint:"La serie suele explorar cómo la tecnología afecta a la sociedad."},
{title:"El socio de Walter White",tag:"BREAKING BAD",story:"¿Cómo se llama el antiguo alumno y socio de Walter White?",options:["Hank Schrader", "Saul Goodman", "Jesse Pinkman", "Gus Fring"],correct:2,keyword:"CAMBIO",hint:"Su nombre es Jesse y su apellido empieza con P."},
{title:"La familia Soprano",tag:"THE SOPRANOS",story:"¿Cómo se llama el protagonista de Los Soprano?",options:["Christopher Moltisanti", "Tony Soprano", "Silvio Dante", "Paulie Gualtieri"],correct:1,keyword:"FAMILIA",hint:"Su nombre también aparece en el título de la serie."},
{title:"El lugar de Cinema Paradiso",tag:"CINEMA PARADISO",story:"¿Qué lugar ocupa el centro de la historia?",options:["Una estación de tren", "Un cine de pueblo", "Una escuela de música", "Un teatro abandonado"],correct:1,keyword:"RECUERDO",hint:"El título de la película nombra ese lugar."},
{title:"El sable de Vader",tag:"STAR WARS",story:"¿De qué color es el sable de luz de Darth Vader?",options:["Azul", "Verde", "Morado", "Rojo"],correct:3,keyword:"FUERZA",hint:"Es el color asociado habitualmente con los Sith."},
{title:"El nombre de Spider-Man",tag:"SPIDER-MAN (2002)",story:"¿Cuál es el nombre real de Spider-Man en la película de 2002?",options:["Peter Parker", "Harry Osborn", "Eddie Brock", "Flash Thompson"],correct:0,keyword:"HÉROE",hint:"Peter es su nombre y Parker su apellido."},
{title:"El actor de Vito Corleone",tag:"EL PADRINO",story:"¿Qué actor interpreta a Vito Corleone en la primera película?",options:["Al Pacino", "Robert De Niro", "Marlon Brando", "James Caan"],correct:2,keyword:"LEGADO",hint:"Ganó el Óscar por esta interpretación, aunque no lo aceptó personalmente."},
{title:"Carpe diem",tag:"LA SOCIEDAD DE LOS POETAS MUERTOS",story:"¿Qué expresión en latín enseña el profesor Keating?",options:["Memento mori", "Carpe diem", "Veni vidi vici", "Amor fati"],correct:1,keyword:"PRESENTE",hint:"Significa aprovechar o vivir el día."},
{title:"El álbum de Kanye",tag:"KANYE WEST",story:"¿Quién lanzó el álbum My Beautiful Dark Twisted Fantasy?",options:["Jay-Z", "Kanye West", "Joji", "Kid Cudi"],correct:1,keyword:"MÚSICA",hint:"Es el artista favorito de Rodri."},
{title:"Una canción de Joji",tag:"JOJI",story:"¿Cuál de estas canciones es de Joji?",options:["Slow Dancing in the Dark", "Flashing Lights", "Empire State of Mind", "DÁKITI"],correct:0,keyword:"NOCHE",hint:"El título menciona bailar lentamente en la oscuridad."},
{title:"Aventura con GPS",tag:"POKÉMON GO",story:"¿Qué juego permite capturar Pokémon en el mundo real usando la ubicación del teléfono?",options:["Clash Royale", "Pokémon GO", "Brawl Stars", "Minecraft"],correct:1,keyword:"SORPRESA",hint:"El nombre del juego incluye la palabra Pokémon."},
];
let current=0, answers=[], unlocked=[];
const $=id=>document.getElementById(id);
function showScreen(which){Object.values(screens).forEach(s=>s.classList.remove('active'));screens[which].classList.add('active');window.scrollTo({top:0,behavior:'smooth'});}
function startGame(){current=0;answers=[];unlocked=[];showScreen('game');renderQuestion();}
function renderQuestion(){
 const q=questions[current];
 $('test-label').textContent=`PREGUNTA ${String(current+1).padStart(2,'0')} / 21`;
 $('puzzle-title').textContent=q.title;$('chamber-chip').textContent=q.tag;
 $('puzzle-symbol').textContent=String(current+1).padStart(2,'0');$('puzzle-story').textContent=q.story;
 $('feedback').textContent='';$('feedback').className='feedback';
 $('hint-text').textContent=q.hint;$('hint-text').classList.add('hidden');
 $('hint-toggle').innerHTML='¿PISTA? <u>REVELAR</u>';
 $('progress-text').textContent=`${current+1} / 22`;
 $('progress-fill').style.width=`${(current+1)/22*100}%`;
 const content=$('puzzle-content');content.innerHTML='';
 const list=document.createElement('div');list.className='options';
 q.options.forEach((label,i)=>{
  const b=document.createElement('button');b.className='option';
  const letter=document.createElement('span');letter.className='letter';letter.textContent=String.fromCharCode(65+i);
  const text=document.createElement('span');text.textContent=label;b.append(letter,text);
  b.addEventListener('click',()=>{
   if(answers[current]) return;
   if(i===q.correct){
    answers[current]={question:q.title,answer:label,correct:true};unlocked.push(q.keyword);
    $('feedback').textContent=`RESPUESTA CORRECTA. PALABRA DESBLOQUEADA: ${q.keyword}`;
    $('feedback').className='feedback success';
    [...list.querySelectorAll('button')].forEach(btn=>btn.disabled=true);
    advanceButton();
   } else {
    $('feedback').textContent='RESPUESTA INCORRECTA. INTENTÁ DE NUEVO O REVELÁ LA PISTA.';
    $('feedback').className='feedback error';
    b.disabled=true;
   }
  });
  list.appendChild(b);
 });
 content.appendChild(list);
}
function advanceButton(){
 const content=$('puzzle-content');
 const next=document.createElement('button');next.className='button primary';next.style.display='block';next.style.margin='18px auto 0';
 next.textContent=current===questions.length-1?'ABRIR ARCHIVO FINAL ↗':'SIGUIENTE PREGUNTA →';
 next.addEventListener('click',()=>{if(current<questions.length-1){current++;renderQuestion();}else{showFinal();}});content.appendChild(next);
}
function showFinal(){
 showScreen('final');$('progress-text').textContent='22 / 22';$('progress-fill').style.width='100%';
 let box=$('response-box');let words=document.getElementById('unlocked-words');
 if(!words){words=document.createElement('div');words.id='unlocked-words';words.className='message-paper';words.innerHTML='<p><strong>PALABRAS DESBLOQUEADAS</strong></p>';box.parentNode.insertBefore(words,box);}
 words.innerHTML='<p><strong>PALABRAS DESBLOQUEADAS</strong></p><p>'+unlocked.map(escapeHTML).join(' · ')+'</p>';
}
function escapeHTML(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function toggleHint(){const hint=$('hint-text');hint.classList.toggle('hidden');$('hint-toggle').innerHTML=hint.classList.contains('hidden')?'¿PISTA? <u>REVELAR</u>':'¿PISTA? <u>OCULTAR</u>';}
$('start-btn').addEventListener('click',startGame);
$('replay-btn').addEventListener('click',()=>{answers=[];unlocked=[];$('free-response').value='';$('response-result').classList.add('hidden');const words=document.getElementById('unlocked-words');if(words)words.remove();showScreen('intro');});
$('hint-toggle').addEventListener('click',toggleHint);
$('hint-toggle').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggleHint();}});
$('save-response').addEventListener('click',()=>{
 const value=$('free-response').value.trim();
 if(!value){$('response-result').textContent='Primero escribí tu mensaje para guardar el archivo.';$('response-result').classList.remove('hidden');return;}
 const result=$('response-result');result.innerHTML='';
 const stamp=document.createElement('div');stamp.className='secret-stamp';stamp.textContent='ARCHIVO CONFIDENCIAL // RODRI';
 const text=document.createElement('p');text.textContent=value;
 const note=document.createElement('p');note.textContent='FIN DEL EXPERIMENTO. Hacé una captura de esta pantalla y mandásela a Micca 💗';
 result.append(stamp,text,note);result.classList.remove('hidden');result.scrollIntoView({behavior:'smooth',block:'center'});
});
