var labels = [], words = [], probability = [];
//label - {name, docCount}
//words - {name, language, count}
//probability - {name, value}

$(document).ready(function (){
	//ENGLISH
	train(" Talking about grades is all dependent on if you open up about these things or not. I know some people are very secretive about their grades, and others like me freely talk about grades. So make sure you are close friends with the person you are talking to about grades. ", 'english');
	train(" As you can see, these portions of our lessons are dedicated to school. There are many things to learn here, so we are going to spend numerous lessons on school. But don't worry; only a couple will be geared towards classes. The rest will be about night life, partying, and having a good time. Before we start learning about topics such as classes and examinations, let's learn some general university phrases. ", 'english');
	train(" Some movies are known to be 'based on a true story.' These types of movies are very interesting because they actually happened. The only reason they are not considered to be a non-fiction movie is because the director or writer will add some scenes that didn't happen, or change some facts around so the movie is more appealing to the masses. ", 'english');
	train(" Lucie, a student from the United States, has just arrived at in , the airport that greets a million visitors to every day. Finally. It's always been a dream of Lucie's: to live in the City of Light, the city of fine arts, of the, of wine, and, who knows, perhaps the city of a little love story. ", 'english');
	train(" She plans to study in  for one year, to get her degree in Computer Science at the University of Versailles St. Quentin-en-Yvelines. It's the university that offered her a scholarship to study. Plus, her friend  studies there and  can live with her in a small apartment. No other nation acknowledges  as a country, but at this moment, the opinion of the and the world’s cartographers only mattered on paper. ", 'english');
	train(" Your skills of writing Paragraph will make you a perfect man.If you look at any printed prose book, you will see that each chapter is divided up into sections, the first line of each being indented slightly to the right. These sections are called Paragraph. Chapters, essays and other prose compositions are broken up into paragraphs, to make the reading of them easier. ", 'english');
	train(" The second principle of paragraph construction is Order – that is, logical sequence of thought or development of the subject. Events must be related in the order of their occurrence, and all ideas should be connected with the leading idea and arranged according to their importance or order. There in that room, sitting across from a man with the power to detain me, I wasn't concerned with documentation. My definition of a country became simple: border controls, armies and governments, all of which has under its red-and-green flag bearing a gold sickle and hammer.  ", 'english');
	train(" the statuesque ballet star who is a principal dancer at both the storied of  and  Theater in, is theoretically the type of front-row coup that warrants a fit of camera flashes. But when Mr. , showed up at last month, for a presentation by the designer, he glided into the front row nearly unnoticed, save for a quick chat with fashion evangelist, and a warm embrace from, the executive style editor at.", 'english');
	train(" Time management is the organization of tasks or events by first estimating how much time a task requires and when it must be completed, and adjusting events that would interfere with its completion so it is done in the appropriate amount of time. Calendars and day planners are common examples of time management tools. The only paper I was concerned with was cash, even though  currency is about as useful as Monopoly money anywhere else on Earth.", 'english');
	train(" History can also refer to the academic discipline which uses a narrative to examine and analyse a sequence of past events, and objectively determine the patterns of cause and effect that determine them. Historians sometimes debate the nature of history and its usefulness by discussing the study of the discipline as an end in itself and as a way of providing perspective on the problems of the present. ", 'english');
	
	//FRENCH
	train(" Au revoir Lucie, étudiante des États-Unis, vient d'arriver à Charles de Gaulle, l'aéroport qui accueille chaque jour à Paris, de visiteurs. Paris. Enfin. Ça a toujours été le rêve de Lucie : vivre dans la Ville lumière, la ville des beaux arts, du quartier latin, du vin, et qui sait, peut-être la ville d'une petite histoire d'amour. ", 'french');
	train(" Son projet est d'étudier en France pendant un an, pour obtenir sa licence ès informatique à l'Université de Versailles àSt. Quentin-en-Yvelines. C'est l'université qui lui a offert une bourse pour faire ses études. En plus, sa copine Josephine fait ses études là-bas, et Lucie va pouvoir vivre avec elle dans son petit appartement.", 'french');
	train(" Quand Marie est absente la vie continue! Jacques prépare les repas, et Cecile, Juliette et moi, nous aidons avec les autres travaux ménagers. Pendant le week-end, nous jouons au football, nous regardons la télévision, et nous parlons beaucoup. Les deux petites filles ont beaucoup de questions sur les États Unis! ", 'french');
	train(" Me voilà installée à Montpellier! J'habite avec une famille très gentille: Jacques et Marie Trapet et leurs enfants, Cecile et Juliette. Je trouve leur maison très belle, mais ils ne sont pas contents et ils cherchent une autre maison à la campagne, avec des chambres individuelles pour les enfants. Nous sommes très occupés ici. ", 'french');
	train(" Toute personne a droit à l'éducation. L'éducation doit être gratuite, au moins en ce qui concerne l'enseignement élémentaire et fondamental. L'enseignement élémentaire est obligatoire. L'enseignement technique et professionnel doit être généralisé; l'accès aux études supérieures doit être ouvert en pleine égalité à tous en fonction de leur mérite. ", 'french');
	train("L'Italie a été gouvernée pendant Bonjour bonsoir comment vas-tu un an par un homme qui n'avait pas été élu par le peuple. Dès la nomination de Mario Monti au poste de président du conseil, fin, j'avais dit :Attention, c'est prendre un risque politique majeur. Par leur vote, les Italiens n'ont pas seulement adressé un message à leurs élites nationales, ils ont voulu dire : Nous, le peuple, nous voulons garder la maîtrise de notre destin. Et ce message pourrait être envoyé par n'importe quel peuple européen, y compris le peuple français.", 'french');
	train("Il en faut peu, parfois, pour passer du statut d'icône de la cause des femmes à celui de renégate. Lorsqu'elle a été nommée à la tête de Yahoo!, le juillet, Marissa Mayer était vue comme un modèle. Elle montrait qu'il était possible de perforer le fameux plafond de verre, même dans les bastions les mieux gardés du machisme. A ans, cette brillante diplômée de Stanford, formée chez Google, faisait figure d'exemple dans la Silicon Valley californienne, où moins de des postes de direction sont occupés par des femmes. En quelques mois, le symbole a beaucoup perdu de sa puissance.", 'french');
	train("Premier intervenant de taille à , Bre Pettis, PDG de la société Makerbot, spécialisée dans Je vais bien, merci! la vente d'imprimantes, a posé une question toute simple, avant de dévoiler un nouveau produit qui l'est un peu moins. Voulez-vous rejoindre notre environnement, a-t-il demandé à la foule qui débordait de l'Exhibit Hall du Convention Center.", 'french');
	train("Des milliers de manifestants ont défilé samedi mars à Tokyo pour exiger l'abandon rapide de l'énergie Merci (beaucoup!) nucléaire au Japon, près de deux ans jour pour jour après le début de la catastrophe de Fukushima.", 'french');
	train("Oui, ça en a tout l'air, même si le conflit en Syrie n'était pas confessionnel au départ et ne l'est pas encore vraiment. Il faut saluer là l'extraordinaire résistance de la société civile syrienne à la tentation confessionnelle, mais cela ne durera pas éternellement.", 'french');

	//SPANISH
	train(" Hola Buenos Días Buenas Tardes Bienvenido Cómo Estás Estoy Bíen Gracias! Adios De Nada En los aeropuertos hay áreas destinadas al embarque y desembarque, servicios comerciales y aparcamiento de automóviles. Gran parte de los aeropuertos del mundo utilizan maquinas de rayos X para detectar posibles materiales peligrosos que se intenten internar en el país. ", 'spanish');
	train(" Es un área definida de la superficie, ya sea de tierra, agua o hielo propuesto para la llegada, salida y movimiento en superficie de aeronaves de distintos tipos con llegadas y salidas nacionales e internacionales. on mi madre, mi padre y mis dos hermanos. Me gusta ir a la escuela pero odio hacer tareas y tomar exámenes. En la escuela estudio inglés, español, ciencia, sociales y matemáticas.", 'spanish');
	train(" Cada día la sociedad exige más preparación y conocimientos a las personas, por lo cual todos los establecimientos se van actualizando día a día en los conocimientos y aptitudes que entregan y desarrollan. ¡Hola, soy. Tengo años. Vivo en. Amo ir a la escuela y ver a mis amigos y profesores todos los días. También me gusta jugar béisbol después de la escuela. Un día él venderá el negocio por mucho dinero para poder pasar más tiempo con su familia. Cuando no estoy trabajando, paso la mayor parte de mi tiempo limpiando la casa, lavando la ropa, pagando las cuentas y cocinando para la familia.", 'spanish');
	train(" En infraestructura podemos decir que cuenta con salas de clases, la mayoría con laboratorios de ciencias y de tecnología, gimnasio, biblioteca, sala de juegos, etc; por lo que podemos decir, que en la mayoría de los casos las instalaciones de los colegios suelen ser las necesarias para satisfacer cualquier necesidad educativa tanto del alumnado como del profesorado. ", 'spanish');
	train(" Yo no tengo hermanas, pero mi mejor amiga es como mi hermana. Cuando crezca voy a ser enfermera y voy a cuidar a las personas enfermas.Me gustaría que mi esposo vendiera su negocio pronto para que pudiera pasar más tiempo con nosotros.", 'spanish');
	train(" Actualmente podemos encontrar diferentes tipos de hospitales y muchos se diferencian según el tipo de patología. Mi esposo tiene su propio negocio y trabaja de las 8 de la mañana a las 9 de la noche.", 'spanish');
	train(" La estructura de un hospital esta exclusivamente diseñada para cumplir las funciones de prevención, diagnóstico y tratamiento de enfermedades. De esta forma dependiento de la gravedad del paciente se hospitaliza o se da de alta con las indicaciones específicas para que continúe el tratamiento en su casa. ", 'spanish');
	train(" Al tener ya listo los papeles de tu viaje, organiza lo que llevarás. Primero dependiendo de los días de tu viaje, elige el tamaño de la maleta, luego elige tu ropa de acuerdo al clima del lugar; no olvides llevar cámara fotográfica o filmadora para guardar los momentos inolvidables del viaje. Hola, mi nombre es. Tengo años y soy casada con dos hijos. Estados Unidos.", 'spanish');
	train(" Dentro de las operaciones que cumple la institución financiera, encontramos las operaciones pasivas, en la cuales el banco se dedica a captar recursos por medio de depósitos, es decir, recolectar el dinero de las personas. Aquí encontramos tres categorías: las cuentas corrientes, las cuentas de ahorro y los depósitos a plazo.Puedo leer tantos libros gratis como quiera y puedo pasar bastante tiempo con mis hijos. Hoy fue el mejor día en la vida de  (según él).  Él fue al cine con Shenaaz. Como ya saben, Shenaaz se mudó a  desde el Líbano, y como ella no tiene sus propios libros, ellos se sientan juntos en la clase, para que  pueda compartir sus libros con ella.", 'spanish');
	train(" Un viaje puede tener diversas motivaciones, siendo sus expectativas y objetivos muy diferentes entre sí, por lo tanto, si planificas un viaje, lo primero que debes tener claro es un destino, luego de eso, te diriges a una agencia de viajes, lugar donde te ayudan a planificar desde tu llegada hasta tu regreso. ", 'spanish');

	//ITALIAN
	train(" Ogni individuo ha diritto all'istruzione. L'istruzione deve essere gratuita almeno per quanto riguarda le classi elementari e fondamentali. L'istruzione elementare deve essere obbligatoria. L'istruzione tecnica e professionale deve essere messa alla portata di tutti e l'istruzione superiore deve essere egualmente accessibile a tutti sulla base del merito. ", 'italian');
	train(" L'istruzione deve essere indirizzata al pieno sviluppo della personalità umana ed al rafforzamento del rispetto dei diritti umani e delle libertà fondamentali. Essa deve promuovere la comprensione, la tolleranza, l'amicizia fra tutte le Nazioni, i gruppi razziali e religiosi, e deve favorire l'opera delle Nazioni Unite per il mantenimento della pace. ", 'italian');
	train(" I genitori hanno diritto di priorità nella scelta del genere di istruzione da impartire ai loro figli. ", 'italian');
	train(" Ogni individuo ha diritto di prendere parte liberamente alla vita culturale della comunità, di godere delle arti e di partecipare al progresso scientifico ed ai suoi benefici. ", 'italian');
	train(" Ogni individuo ha diritto alla protezione degli interessi morali e materiali derivanti da ogni produzione scientifica, letteraria e artistica di cui egli sia autore. ", 'italian');
	train(" Quest'anno in Italia l'estate si è rivelata essere una di quelle roventi, e non mi riferisco al clima. L'Italia e i paesi europeii circostanti hanno subito infatti il dilagarsi di una serie di incendi nei boschi non dissimile da quello verificatosi nelle foreste delle zone centro-occidentali degli Stati Uniti. Le regioni dell’Italia particolarmente colpite sono state quelle dell’estremo sud, Puglia, Calabria, Basilicata. In Sardegna ha perso la vita un anziano mentre stava cercando di salvare le sue pecore dalle fiamme che imperversavano in quella zona.  ", 'italian');
	train(" Un po' più al Nord, gli incendi si sono dilagati nei boschi di Castelfusano, ad Ostia, vicino a Roma. I vigili del fuoco hanno fatto di tutto per contenere le fiamme e per estinguerle, ma il caldo eccessivo e i venti forti alimentavano le fiamme rendendo perciò l’impresa assai difficile. ", 'italian');
	train(" Non so se l'amore italiano sia veramente più forte di qualsiasi altro amore, ma in Italia è effettivamente più visibile per le strade, di quanto lo sia qui, negli Stati Uniti. Si vedono sempre ragazzi in giro per le piazze e presso le fontane, mano nella mano, parlando, baciandosi. Spesso gruppi di giovani escono insieme per andare al bar o a ballare in discoteca, oppure vanno al ristorante per ritrovare gli amici e chiacchierare, ed è facile che in questi posti si possa incontrare quel fidanzato o quella fidanzata che si ha aspettato da tanti anni. ", 'italian');
	train(" Le materie di studio corrispondono a quelle americane, con facoltà per economia, giurisprudenza, le scienze, e gli studi umanistici. Gli esami, che sono principalmente orali ed aperti al pubblico, si tengono alla fine dei corsi. Il professore assegna il voto subito dopo l'esame e lo studente, se ha passato l'esame, può scegliere se accettare il voto oppure rifare l'esame per ottenere un voto migliore.  ", 'italian');
	train(" In Italia, per esempio, il costo dell'università è quasi tutto coperto dallo stato, e quindi ogni studente deve pagare solo un prezzo nominale per frequentarla. Un'altra differenza tra i due sistemi è che la maggior parte dei corsi italiani non richiede la frequenza obbligatoria. Questo permette a molti studenti di avere un lavoro fisso durante il giorno. ", 'italian');
	
	//GERMAN
	train(" Jeder hat das Recht auf Bildung. Die Bildung ist unentgeltlich, zum mindesten der Grundschulunterricht und die grundlegende Bildung. Der Grundschulunterricht ist obligatorisch. Fach- und Berufsschulunterricht müssen allgemein verfügbar gemacht werden, und der Hochschulunterricht muß allen gleichermaßen entsprechend ihren Fähigkeiten offenstehen. ", 'german');
	train(" Die Bildung muß auf die volle Entfaltung der menschlichen Persönlichkeit und auf die Stärkung der Achtung vor den Menschenrechten und Grundfreiheiten gerichtet sein. Sie muß zu Verständnis, Toleranz und Freundschaft zwischen allen Nationen und allen rassischen oder religiösen Gruppen beitragen und der Tätigkeit der Vereinten Nationen für die Wahrung des Friedens förderlich sein. ", 'german');
	train(" Die Eltern haben ein vorrangiges Recht, die Art der Bildung zu wählen, die ihren Kindern zuteil werden soll. Jeder hat das Recht, am kulturellen Leben der Gemeinschaft frei teilzunehmen, sich an den Künsten zu erfreuen und am wissenschaftlichen Fortschritt und dessen Errungenschaften teilzuhaben.", 'german');
	train(" Es war einmal ein Mann, der hatte einen, welcher schon lange Jahre unverdrossen die Säcke in die Mühle getragen hatte. Nun aber gingen die Kräfte des zu Ende, so dass er zur Arbeit nicht mehr taugte. ", 'german');
	train(" Da dachte der Herr daran, ihn wegzugeben. Aber der merkte, dass sein Herr etwas Böses im Sinn hatte, lief fort und machte sich auf den Weg nach Bremen. Dort, so meinte er, könnte er ja Stadtmusikant werden. ", 'german');
	train(" Vereinzelt kam es auch heute wieder zu Problemen bei Geldautomaten, weil die neuen Euroscheine ausgegangen waren. In Jena war ein Geldautomat falsch programmiert. Er gab statt Zehn-Euro-Scheinen 50-Euro-Noten aus. Wie viele Eurokunden sich über das Zusatzgeld freuen durften, ist noch unklar. ", 'german');
	train(" Die Einführung des Euro-Bargelds verläuft offenbar reibungslos. Bundesbankpräsident Welteke sagte, an der einen oder anderen Supermarkt-Kasse habe es zwar Engpässe gegeben, auch hätten einige Geldautomaten nicht funktioniert, insgesamt sei man aber mit dem Verlauf der Euroeinführung sehr zufrieden.", 'german');
	train(" Sie konnten aber die Stadt Bremen an einem Tag nicht erreichen und kamen abends in einen Wald, wo sie übernachten wollten. Der Esel und der Hund legten sich unter einen großen Baum, die Katze kletterte auf einen Ast, und der Hahn flog bis in den Wipfel, wo es am sichersten für ihn. ", 'german');
	train(" „Die Hausfrau hat der Köchin befohlen, mir heute Abend den Kopf abzuschlagen. Morgen, am Sonntag, haben sie Gäste, da wollen sie mich in der Suppe essen. Nun schrei ich aus vollem Hals, solang ich noch kann. Diese Skulpturen waren so unheimlich detailliert und haben zirka vier Tage gedauert zu bauen. Ich habe auch probiert etwas aus dem Sand zu schaffen, aber anstatt ein Kunstwerk, sah meine Skulptur mehr wie einen Sandberg aus.", 'german');
	train(" Der Hund war einverstanden, und sie gingen mitsammen weiter. Es dauerte nicht lange, da sahen sie eine Katze am Wege sitzen, die machte ein Gesicht wie drei Tage Regenwetter. „Was ist denn dir in die Quere gekommen, alter Bartputzer?“ fragte der.Es war ein super-schwüller Tag. Wir konnten die Hitze kaum ertragen und entschlossen uns deshalb zum Strand zu gehen. Wir haben den richtigen Samstag gewählt, denn es gab ein Sandskulpturen-Wettbewerb bei dem Strand...was für tolle Kreationen! Das linke Foto ist eine Sandskulptur von einem Amateur und das rechte von einem Profi. ", 'german');
	
	//Portuguese
	train(" O é um país que sempre foi referido por outras nações por seu tamanho ou por sua população. Mas em discussões entre os cientistas, jornalistas, economistas, e experientes internacionais, este país é muitas vezes caracterizado como um país subdesenvolvido. ", 'portuguese');
	train(" A análise dos dados permitiu vincular os eleitores às duas tendências previstas: maior indiferença eleitoral e maior intenção de voto na esquerda. A criação de instrumentos financeiros inovadores está intimamente ligada ao questionamento de por que eles aparecem no mercado a cada momento, qual objetivo de sua criação e quais são aqueles que são válidos.", 'portuguese');
	train(" Segundo uma corrente de pensamento, as grandes empresas comerciais japonesas adotaram o modelo do clã feudal que predominou no período Edo ao invés de terem adotado o modelo das empresas européias. Nos Estados Unidos, o sistema de produção flexível era usado para favorecer a des-especialização dos trabalhadores, aumentar o poder relativo da administração e produzir grandes lotes de um produto padronizado. ", 'portuguese');
	train(" afirmou que montou-se um enorme sistema de mercantilização do livro escolar, vendidos ao Ministério da Educação com critérios de que são bons para lucrar e não para educar. Acredito que uma boa preparação não faz mal a ninguém, seja homem ou mulher, principalmente para o trato com crianças. A decisão vem do fato de serem trabalhos de remuneração mais baixa. ", 'portuguese');
	train(" Hoje não. Há também muita insegurança quanto ao relacionamento entre pais e filhos. Durante quatro anos percorri quase toda a, sem dinheiro, viajando de ônibus, a cavalo, em caminhões e trens de segunda classe. ", 'portuguese');
	train(" O aumento das forças produtivas e a inchação da economia, incidiram nas instituições culturais, de que a escola é espinha dorsal.	Lembrei os velhos tempos. A lama, a poeira, os desconfortos inevitáveis. ", 'portuguese');
	train("  Não digo que se caia no esnobismo de elogiar qualquer obra de uma pessoa simplesmente pela sua juventude. Mas é realmente muito antipático ridicularizar as pessoas que estão partindo para a descoberta do mundo. Você ainda tem o dinheiro dela.",'portuguese');
	train(" Esse arroz é encantado, quem comer dele acaba sendo rico.Há muitas marcas imitando o tipo de embalagem do café Melita.Nós ficaremos juntos até as.Você é do Rio de Janeiro, né?Você não me conhece menina, tenho poderes extras-terrenos. Vamos ver se ele telefona para você.Eu só podia comer um ovo.é a maior astróloga do. ", 'portuguese');
	train(" As baleias Francas são bem diferentes de outras baleias. Possuem corpos negros arredondados e verrugas de cor branca em suas cabeças. Essas verrugas servem como identificadores para os pesquisadores e são parecidos com a impressão digital humana, pois cada baleia nasce com um desenho único das mesmas. ", 'portuguese');
	train(" O inverno (no Hemisfério Norte) é uma época de festas pelo mundo: Hanukah, Natal, Kwanzaa e Ano Novo, para mencionar algumas. As diversas culturas comemoram suas festas de maneiras diferentes, mas, freqüentemente, quando as pessoas se reúnem para celebrar, também se reúnem para comer.", 'portuguese');
	
		
	
	//Count of Words of every Language
	console.log("unique words");
	var count =1;
	for(var i=1; i< words.length; i++){
		if(words[i].language == words[i-1].language){
			count++;
		}
		else{
			console.log(words[i-1].language + " " + count );
			count =1;
		}
	}
	console.log(words[i-1].language + " " + count );
	console.log("total " + words.length);
})

function unique(text) {
  var result = [];
  $.each(text, function(key, value) {
    if ($.inArray(value, result) == -1) 
		result.push(value);
  });
  return result;
}

function tokenize(text) {
    text = text.toLowerCase().replace(/\W/g, ' ').replace(/\s+/g, ' ').trim().split(' ');     // \W-non word character, \s-white space character, + for consecutive characters replaced by single modifier, /g- look globally; all of the matches
																			// .split splits the text into array of words.
	text = unique(text);
    return text;
};

function searchWord(word, array){
	for(var i=0; i< array.length; i++){
		if(word == array[i].name){
			return i;
		}
	}
	return -1;
}
	
function updateLabel(label){
	var index= searchWord(label, labels); 
	if(index == -1)
		labels.push({name: label, docCount: 1});
	else 
		labels[index].docCount++;
}

function updateWords(text, label){
	var i, index;
	var token = tokenize(text);
	for (i = 0; i < token.length; i++){
		index = searchWord(token[i], words);
		if(index == -1)
			words.push({name: token[i], language: label, count: 1});
		else{
			if(words[index].language == label)
				words[index].count++;
			else
				words.push({name: token[i], language: label, count: 1});
		}
	}	
}

function train(text, label) {
	updateLabel(label);
	updateWords(text, label);
};

function totalDocCount(){
	var total = 0;
	for(var i=0; i< labels.length; i++)
		total += labels[i].docCount;
	return total;
}

function docInverseCount(index){
	var total = totalDocCount();
//	console.log(total);
	return (total - labels[index].docCount);
}

function totalCount(word){
	var total = 0;
	for(var i=0; i< words.length; i++)
		if(word == words[i].name)
			total += words[i].count; 
	return total;
}

function labelCount(word, label){
	var total = 0;
	for(var i=0; i< words.length; i++)
		if((word == words[i].name) && (label == words[i].language))
			total += words[i].count;
	return total;
}

function labelInverseCount(word, label){
	var total = 0;
	for(var i=0; i< words.length; i++)
		if((word == words[i].name) && (label != words[i].language))
			total += words[i].count;
	return total;
}

function getWinner() {
	var max = 0, maxLabel;
	for(var i=0; i< probability.length; i++){
		if(probability[i].value > max){
			max = probability[i].value;
			maxLabel = probability[i].name;
		}
	}
	$('#result').append("The above text is in " + maxLabel.toUpperCase() + " with a probability of " + max.toFixed(2) + '<br>');
}

function guess() {
	$('#result').empty();
	var phrase = tokenize($('#phrase').val());
	//console.log(phrase);
	var	totalcount, word;
	
	for(var i=0; i< labels.length; i++){
		var label = labels[i].name;
		var doccount = labels[i].docCount;
		var docinversecount = docInverseCount(i);
		//var num = 1, den =1;
		var temp, Sum=0;
		
		for(var j=0; j< phrase.length; j++){
			word = phrase[j];
			totalcount = totalCount(word);
			if(totalcount == 0)
				continue;
			else {
				var wordLabelProb = labelCount(word, label) / doccount;
				var wordInverseLabelProb = labelInverseCount(word, label) / docinversecount;
				var wordProb = wordLabelProb / (wordLabelProb + wordInverseLabelProb);
				if (wordProb === 1)
					wordProb = 0.99;
				else if (wordProb === 0)
					wordProb = 0.01;
		
				Sum += (Math.log(1 - wordProb) - Math.log(wordProb));
			} 
		}
		//temp = num / (num + den);            
		temp = ( 1/(1 + Math.exp(Sum)));
		probability.push({name: label, value: temp}); 
		console.log(probability[i].name, probability[i].value);
    }
	getWinner();
	probability.length = 0;
} 
