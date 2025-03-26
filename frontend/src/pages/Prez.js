import React, { useState, useEffect } from 'react';
import qin0 from '../assets/qin0.png';
import qin1 from '../assets/qin1.png';
import qin2 from '../assets/qin2.png';
import qin3 from '../assets/qin3.png';
import qin4 from '../assets/qin4.png';
import qin5 from '../assets/qin5.png';
import qin6 from '../assets/qin6.png';
import qinph from '../assets/qinphh.png';
import ref2 from '../assets/qinphh2.png';
import ovr from '../assets/ovr.jpg';
import CloudBG from '../components/CloudBG';


const images = [qin0, qin1, qin2, qin3, qin4, qin5, qin6];

const texts = [
  `**Qin cucerește Han:**
  Bătălia de la Chenggao (230 î.Hr.) a marcat începutul războaielor de unificare ale Qin.
  
  Armata Qin, condusă de generalul Wang Jian, a învins rapid forțele Han, capturând capitala lor și forțându-i să se predea. Forțele Qin numărau aproximativ 200.000 de soldați, în timp ce Han putea mobiliza doar 150.000 de luptători, mulți dintre ei recrutați recent și slab antrenați. Wang Jian a exploatat această diferență de pregătire prin manevre rapide care nu le-au dat timp soldaților Han să se organizeze eficient.
  
  **Inovație Tactică:** Generalul Wang Jian a folosit formația "Pătrat de Fier" (铁方阵), în care infanteria grea forma un zid de scuturi impenetrabil, iar arcașii trăgeau din spatele acestuia. Această formație putea rezista atacurilor de cavalerie și permitea avansarea metodică pe câmpul de luptă. Soldații erau instruiți să mențină o distanță exactă de 60 cm între ei, creând un zid perfect aliniat care nu putea fi penetrat de atacurile convenționale.
  
  **Eșecul Inițial al Qin:** Puțini știu că prima tentativă a Qin de a invada Han, condusă de generalul Huan Yi cu un an înainte, a eșuat. Huan Yi a fost păcălit să intre într-o ambuscadă în trecătoarea Shangluo, unde a pierdut peste 15.000 de oameni. Qin Shi Huang l-a executat pe Huan Yi pentru incompetență și l-a numit în locul lui pe Wang Jian, cunoscut pentru prudența sa strategică.
  
  **Eveniment Fascinant:** În ajunul bătăliei decisive, Wang Jian a ordonat soldaților săi să aprindă mii de torțe și să strige precum o armată de 100.000 de oameni, deși avea doar 30.000 în avangardă. În același timp, a trimis unități mici să atace taberele de aprovizionare ale Han din multiple direcții, creând iluzia că sunt încercuiți de o forță vastă. Această tactică psihologică a funcționat perfect - mulți ofițeri Han au dezertat peste noapte, slăbind semnificativ forța de luptă pentru ziua următoare.
  
  **Armament Superior:** Soldații Qin erau echipați cu arme standardizate produse în fabrici de stat. Lăncile lor aveau o lungime precisă de 5.4 metri, mai lungi decât cele ale oponenților, oferindu-le avantaj în confruntările directe. Săbiile din oțel carbon erau tratate termic printr-o tehnică secretă, rămânând ascuțite chiar și după ce tăiau prin armurile de bronz ale inamicilor.`,

  `**Qin cucerește Zhao:**
  Cucerirea Zhao (228 î.Hr.) a fost relativ pașnică, deoarece Zhao era deja slăbit de conflicte interne. Odată leagănul dinastiei Zhao de Vest, acest stat fusese cândva centrul culturii chineze, dar decăzuse dramatic în ultimele secole.
  
  Armata Qin, sub comanda generalului Wang Ben (fiul lui Wang Jian), a preluat rapid controlul teritoriului Zhao cu o forță de 120.000 de soldați, față de doar 80.000 cât număra armata Zhao, dintre care mulți erau milițieni slab echipați. Regele Zhao, văzând inutilitatea rezistenței, s-a predat fără o bătălie majoră, permițând Qin să-și consolideze puterea în regiune cu pierderi minime.
  
  **Diplomație Strategică:** Wang Ben, la cei 32 de ani ai săi, era cunoscut pentru metodele sale diplomatice subtile. A folosit o combinație de amenințări și promisiuni pentru a determina nobilimea Zhao să accepte stăpânirea Qin. El le-a garantat privilegiile celor care s-au predat voluntar și a demonstrat ce se întâmplă cu cei care rezistă prin executarea publică a câtorva oficiali care au încercat să organizeze rezistența. Pentru aristocrații Zhao, alegerea a devenit clară.
  
  **Tehnologie Superioară:** Soldații Qin erau echipați cu arbalete mecanizate (连弩, lian-nu) care puteau trage de trei ori mai repede decât arcurile tradiționale. Aceste arbalete aveau un mecanism inovator de reîncărcare rapidă și puteau străpunge armuri de la distanțe de până la 250 de metri. Fiecare unitate de arbaleți Qin conținea 150 de soldați care trăgeau în salve coordonate, creând o "ploaie de moarte" care devasta formațiile inamice.
  
  **Provocarea Legitimității:** Cucerirea Zhao a avut o importanță simbolică enormă, întrucât Zhao era considerat leagătul cultural și spiritual al civilizației chineze. Pentru a-și legitima victoria, Wang Ben a organizat o ceremonie elaborată în care a preluat artefactele sacre ale dinastiei Zhao, inclusiv celebrele vase de bronz rituale și documentele regale. Aceste obiecte au fost trimise la capitala Qin pentru a simboliza transferul "Mandatului Cerului" către noul imperiu.
  
  **Reformarea Imediată:** După ocupare, Wang Ben a implementat rapid sistemul administrativ Qin, înlocuind vechii administratori cu oficiali Qin loiali sau localnici care juraseră credință. A introdus sistemul de județe și prefecturi standardizate, a refăcut recensământul populației și a impus noile legi uniforme Qin, în special cele referitoare la agricultură și serviciul militar. În mai puțin de șase luni, teritoriul Zhao funcționa ca parte integrantă a statului Qin.`,

  `**Qin cucerește Wei:**
  Bătălia de la Daliang (225 î.Hr.) a văzut forțele Qin breșând apărările capitalei Wei printr-o tactică de inginerie militară fără precedent. Armata Qin, condusă de generalul Wang Jian și inginerul militar Zheng Guo, a folosit o strategie strălucită pentru a inunda capitala Wei, Daliang, forțând regele Wei să se predea după un asediu care părea inițial imposibil de câștigat.
  
  Qin a mobilizat o armată impresionantă de 280.000 de soldați împotriva celor 200.000 ai Wei. Însă Daliang era considerat practic inexpugnabil, fiind protejat de ziduri masive de 12 metri înălțime și înconjurat de canale adânci. După trei luni de asediu convențional fără progres, Wang Jian a luat o decizie îndrăzneață.
  
  **Inginerie Militară Revoluționară:** Qin a demonstrat abilități remarcabile de inginerie militară prin construirea unui sistem complex de diguri și canale pentru a devia râul Galben spre Daliang. Inginerul șef Zheng Guo, care anterior construise marele canal de irigații pentru Qin, a coordonat efortul uriaș. Peste 30.000 de lucrători, incluși milițieni și prizonieri de război, au muncit zi și noapte timp de 28 de zile pentru a crea acest sistem.
  
  **Strategia Apei (水攻):** Devierea râurilor pentru a ataca orașe fortificate a devenit o tactică emblematică a statului Qin. La Daliang, aceasta a atins perfecțiunea când digurile au fost deschise simultan, inundând orașul cu o viteză uimitoare. Apele au provocat haos total, prăbușind secțiuni ale zidului și făcând inutilizabile majoritatea armelor defensive. Regele Wei a fost nevoit să se retragă în palatul său pe o colină artificială, de unde a solicitat termenii capitulării după trei zile.
  
  **Controversa lui Wang Jian:** Decizia de a inunda orașul a fost controversată chiar și în cadrul comandamentului Qin. Generalul mai tânăr Meng Ao a argumentat pentru un asalt direct, considerând că inundația va ucide prea mulți civili și va distruge resurse valoroase. Wang Jian, în vârstă de 68 de ani și veteran a zeci de campanii, a susținut că un asalt ar costa viețile a cel puțin 20.000 de soldați Qin, în timp ce inundația va minimiza pierderile proprii. Qin Shi Huang a aprobat personal planul lui Wang Jian, demonstrând încrederea sa în judecata generalului său senior.
  
  **Eșecul Defensiv al Wei:** Deși generalul Wei Xin Sheng era considerat un tactician capabil, el a făcut două erori fatale. Prima a fost să nu detecteze lucrările de deviere a râului, concentrându-și iscoadele pe tabăra principală Qin. A doua a fost să stocheze majoritatea proviziilor de cereale în depozite subterane, care au devenit inutilizabile după inundație. Aceste decizii au transformat o situație dificilă într-una catastrofală.
  
  **Consecințele Inovației:** Succesul tactic de la Daliang a schimbat fundamental abordarea asediilor în China antică. După această victorie, statele combatante rămase și-au relocat capitalele departe de cursurile majore de apă sau au investit masiv în sisteme de control al inundațiilor. Documentele ulterioare arată că Zhao și Yan au cheltuit sume enorme pentru a-și fortifica capitalele împotriva unor tactici similare, slăbindu-și astfel bugetele militare pentru operațiuni ofensive.`,

  `**Qin cucerește Chu:**
  Bătălia de la Julu (223 î.Hr.) a fost o victorie decisivă pentru Qin, ducând la căderea Chu, cel mai mare și mai puternic adversar al său. Această campanie a fost cea mai dificilă din toate războaiele de unificare, necesitând resurse masive și strategie superioară pentru a învinge un stat cu populație și teritoriu mai mari decât Qin însuși.
  
  **Eșecul Catastrofal al lui Li Xin:** Inițial, Qin Shi Huang l-a trimis pe tânărul și arogantul general Li Xin să conducă campania împotriva Chu. Li Xin, în vârstă de doar 29 de ani, era un favorit al curții care promitea victorie rapidă cu doar 200.000 de soldați. Contrar sfaturilor veteranilor, el a avansat adânc în teritoriul Chu fără linii de aprovizionare adecvate. Rezultatul a fost dezastruos: generalul Chu Xiang Yan l-a atras într-o ambuscadă în mlaștinile din Huaiyang, unde mobilitatea superioară a carelor de luptă Qin a fost anulată. Din armata lui Li Xin, 120.000 de soldați au fost uciși sau capturați, reprezentând cea mai mare înfrângere a Qin din toată perioada de unificare.
  
  **Revenirea lui Wang Jian:** După acest dezastru, Qin Shi Huang l-a chemat pe Wang Jian, în vârstă de 70 de ani, din retragere. Wang Jian a acceptat comanda doar cu condiția să primească resurse nelimitate. Astfel, i s-a acordat o armată uriașă de 600.000 de soldați, cea mai mare forță mobilizată în perioada Statelor Combatante, plus autoritatea de a rechiziționa orice resurse necesare din teritoriile Qin.
  
  **Tactică de Înșelare Psihologică:** Wang Jian a folosit o strategie bazată pe cunoașterea psihologiei adversarului. În loc să avanseze rapid, și-a stabilit o tabără fortificată masivă la granița Chu și a petrecut luni întregi antrenându-și trupele, aparent fără intenția de a ataca. Când spionii Chu au raportat această aparentă lipsă de agresivitate, regele Chu a ordonat demobilizarea parțială a propriilor trupe pentru a economisi resurse. Exact acest moment a așteptat Wang Jian.
  
  **Simularea Retragerii:** După șase luni de inactivitate aparentă, Wang Jian a simulat o retragere completă, lăsându-și aparent proviziile și echipamentele în tabără. A răspândit zvonuri că fusese rechemat din cauza unor tulburări interne în Qin. Când armata Chu a venit să jefuiască tabăra aparent abandonată, soldații Qin, ascunși în împrejurimi, au lansat un atac surpriză devastator. Generalul Xiang Yan a fost ucis în primele minute ale bătăliei, iar armata Chu, fără comandant și prinsă în dezordine, a suferit peste 100.000 de victime în câteva ore.
  
  **Bătălia de la Râul Yangtze:** După victoria de la Julu, Wang Jian a împărțit armata în trei coloane și a avansat spre capitala Chu, Shouchun. A întâmpinat rezistență feroce la traversarea Yangtze-ului, unde flota Chu comandată de amiralul Feng Gai a încercat să blocheze trecerea. Wang Jian a rezolvat această problemă construind plute false în amonte pentru a distrage atenția, în timp ce forța principală traversa în secret în aval. Această manevră a permis armatei Qin să surprindă și să învingă apărarea riverană.
  
  **Împărțire și Cucerire:** Wang Jian a folosit tactica "divide et impera" exploatând rivalitățile dintre nobilii Chu. A promis păstrarea titlurilor și proprietăților oricărui nobil care se preda, izolând astfel rezistența în jurul palatului regal. Când armata Qin a ajuns la Shouchun, jumătate din nobilimea Chu trecuse deja de partea lor, făcând apărarea capitalei imposibilă.
  
  **Lecțiile Campaniei Chu:** Victoria asupra Chu a fost crucială pentru Qin din două motive: a eliminat cel mai mare rival și a demonstrat importanța leadership-ului experimentat față de entuziasmul tineresc. După această campanie, Qin Shi Huang a promovat generali exclusiv pe baza meritelor dovedite în luptă, abandonând practica de a favoriza curteni sau rude. Această reformă a consolidat semnificativ eficiența militară a Qin în campaniile ulterioare.`,

  `**Qin cucerește Yan:**
  Bătălia de la Yishui (222 î.Hr.) a văzut forțele Qin învingând Yan, într-o campanie complicată de o tentativă de asasinat împotriva lui Qin Shi Huang. Armata Qin, condusă de generalul Wang Ben (fiul lui Wang Jian), a învins forțele Yan într-o serie de confruntări tactice complexe.
  
  Yan era considerat un stat periferic dar strategic, având acces la resurse minerale valoroase și fiind una dintre ultimele trei puteri care se opuneau unificării. Armata Yan număra aproximativ 100.000 de soldați, specializați în tactici de mobilitate și arcași călare, față de 250.000 de soldați Qin, superior echipați dar mai puțin familiarizați cu terenul muntos din nord.
  
  **Tacticile lui Wang Ben:** La 36 de ani, Wang Ben era deja un comandant experimentat care și-a câștigat reputația în campaniile împotriva Zhao și Qi. Spre deosebire de tatăl său care prefera tactici indirecte și înșelăciuni elaborate, Wang Ben era cunoscut pentru abordarea sa agresivă și directă. Pentru campania Yan, el a dezvoltat o tactică specifică: "Secerișul de Iarbă" (草薙). Aceasta implica avansarea pe un front larg cu unități mici și rapide care atacau simultan toate așezările și fermele din calea lor, privând armata Yan de resurse și forțând-o să se dividă pentru a proteja civilii.
  
  **Adaptarea la Terenul Nordic:** Campania s-a desfășurat pe terenul muntos și împădurit din nordul Chinei, foarte diferit de câmpiile centrale unde Qin excela. Wang Ben a restructurat formațiile standard Qin, reducând dependența de care de luptă și infanterie grea, și crescând proporția de arcași și infanterie ușoară. A creat unități speciale de "Vânători de Munte" (山猎兵) antrenați să opereze în teren accidentat și să execute ambuscade.
  
  **Înfrângerea de la Trecătoarea Ji:** În ciuda planificării atente, Wang Ben a suferit o înfrângere semnificativă la Trecătoarea Ji, unde generalul Yan Li Zuoche a folosit cunoașterea terenului pentru a atrage 40.000 de soldați Qin într-un defileu îngust și a declanșa o alunecare de pietre. Qin a pierdut peste 9.000 de oameni în acest dezastru, inclusiv pe generalul secund Zhao Hui. Această tactică a fost copiată după victoria lui Sun Bin asupra forțelor Wei cu un secol înainte.
  
  **Contra-Strategia:** După eșecul de la Trecătoarea Ji, Wang Ben a schimbat complet abordarea. În loc să încerce să penetreze direct spre capitala Yan, a folosit superioritatea numerică pentru a înconjura complet statul Yan, blocând toate rutele comerciale și creând o blocadă economică. Această strategie "Cercul de Fier" (铁围) a izolat treptat Yan de aliații potențiali și a creat o criză de resurse în interiorul statului.
  
  **Asasinul Jing Ke:** Văzând situația disperată, regele Yan a apelat la o strategie extremă: asasinarea lui Qin Shi Huang. Asasinul Jing Ke, un războinic renegat cu reputație legendară, s-a oferit voluntar pentru această misiune suicidală. El s-a prezentat la curtea Qin cu un cadou diplomatic - o hartă detaliată a teritoriilor Yan și un pumnal otrăvit ascuns în interiorul unui sul. Când a desfășurat sulul în fața împăratului, Jing Ke a încercat să-l înjunghie, dar Qin Shi Huang, deși neînarmat, a reușit să se retragă și să scape, fiind salvat în ultimul moment de gărzile sale. Acest eveniment a devenit unul dintre cele mai faimoase episoade din istoria Chinei, inspirând nenumărate opere de artă, poezie și dramă.
  
  **Represaliile:** După tentativa de asasinat, Qin Shi Huang a ordonat o campanie punitivă împotriva Yan. Wang Ben a primit instrucțiuni să nu mai accepte predări și să execute întreaga familie regală Yan. Armata sa a aplicat o politică de teroare calculată, distrugând complet fiecare oraș care rezista și cruțând pe cei care se predau imediat. Această tactică a accelerat colapsul rezistenței Yan.
  
  **Cursa Tehnologică:** Un aspect puțin cunoscut al campaniei a fost "cursa armamentului" între Qin și Yan. Metalurgiștii Yan erau faimoși pentru calitatea armelor lor, în special săbiile lungi "Yan Sword" (燕剑) făcute din oțel cu conținut ridicat de carbon. Aceste săbii puteau tăia prin armurile de bronz standard ale armatei Qin. Ca răspuns, Wang Ben a ordonat fabricarea de armuri din fâșii laminate de fier și piele, primele de acest fel în China, specifice pentru această campanie. Aceste armuri experimentale au redus eficiența săbiilor Yan și au oferit un avantaj tactic crucial în luptele corp la corp.`,

  `**Qin cucerește Qi:**
  Cucerirea Qi (221 î.Hr.) a marcat ultima etapă a unificării Chinei sub conducerea Qin. Spre deosebire de campaniile anterioare, această cucerire a fost realizată fără o bătălie majoră, deoarece Qi s-a predat puterii copleșitoare a Qin după o demonstrație de forță impresionantă.
  
  Statul Qi avea tradiție militară puternică, putând mobiliza o armată de 200.000 de soldați, specializați în defensivă și operațiuni navale. Se aștepta ca ei să ofere cea mai dură rezistență dintre toate statele rămase. Pentru această campanie finală, Qin a mobilizat o forță masivă de 600.000 de soldați sub comanda generalului Wang Ben, demonstrând determinarea lui Qin Shi Huang de a finaliza unificarea indiferent de cost.
  
  **Contextul Diplomatic Complicat:** Qi fusese inițial aliatul Qin împotriva celorlalte state, dar această alianță se deteriorase pe măsură ce intențiile hegemonice ale Qin deveneau evidente. Regele Qi, Jian, încercase să formeze o coaliție anti-Qin în ultimii ani, dar eșuase când potențialii aliați fuseseră cuceriți unul câte unul. Încercarea sa disperată de a negocia sprijin de la triburile Xiongnu din nord a fost interceptată de spionii Qin, oferind lui Qin Shi Huang pretextul perfect pentru invazie.
  
  **Război Psihologic Masterial:** Wang Ben a folosit o strategie inteligentă de război psihologic dezvoltată în patru etape. Prima, "Amăgirea" (惑), implica răspândirea de zvonuri despre atrocitățile comise împotriva statelor care rezistau și despre bunăvoința arătată celor care se predau. A doua, "Izolarea" (隔), implica interceptarea tuturor mesagerilor și delegațiilor diplomatice pentru a izola conducerea Qi. A treia, "Subminarea" (损), implica mituirea oficialilor cheie Qi pentru a crea diviziune internă. Ultima, "Demonstrația" (示), implica parada ostentativă a armatei Qin la granița Qi pentru a intimida.
  
  **Trădarea Internă:** Succesul campaniei s-a datorat în mare parte trădării primului ministru al Qi, Hou Sheng, care fusese mituit în secret de Wang Ben cu promisiunea guvernării provinciei după cucerire. Hou Sheng a sabotat sistematic pregătirile de apărare, a dispersat trupele în garnizoane izolate și a convins regele că negocierea era singura opțiune viabilă. Când armata Qin a traversat granița, Qi era efectiv neparată pentru rezistență.
  
  **Predarea Strategică:** Văzând situația disperată și temându-se pentru viața sa după exemplul celorlalți regi învinși, regele Qi a trimis o delegație pentru a negocia predarea. Wang Ben, urmând instrucțiunile specifice ale lui Qin Shi Huang, a oferit termeni surprinzător de generoși: regele putea păstra titlul său (deși fără putere reală) și viața nobililor ar fi cruțată dacă predau fără rezistență toate fortificațiile și armele.
  
  **Tactici de Ocupație:** După predarea formală, Wang Ben a implementat o strategie de ocupație în trei faze. Prima a implicat ocuparea rapidă a tuturor punctelor strategice și porturilor maritime. A doua a implicat dezarmarea sistematică a tuturor unităților militare Qi și încorporarea soldaților selectați în armata Qin. A treia și cea mai complexă a implicat restructurarea administrativă completă, împărțind fostul stat Qi în județe administrate direct de oficiali Qin.
  
  **Armata Nemuritoare (不死军):** În Qi, Wang Ben a desfășurat prima dată faimoasa "Armată Nemuritoare" a Qin, o forță de elită de 10.000 de soldați selectați pentru disciplina lor excepțională și loialitatea absolută. Ei purtau uniforme standardizate negre și purpurii, culori asociate cu elementul apei, care în filosofia chineză învinge focul - un simbol al inamicilor lor. Această unitate era împărțită în cinci divizii, fiecare corespunzând unui element chinez tradițional, și funcționau ca forță de ocupație și ca demonstrație vizibilă a puterii Qin.
  
  **Resurse Strategice:** Un motiv mai puțin discutat pentru cucerirea pașnică a Qi a fost interesul enorm al Qin pentru resursele strategice ale regiunii. Qi controla cele mai mari saline din estul Chinei, o sursă de venit enormă, precum și porturi comerciale vitale. Wang Ben a primit instrucțiuni explicite să evite distrugerea acestei infrastructuri valoroase, justificând astfel abordarea mai diplomatică decât militară.
  
  **Consecințe Culturale:** Deși cucerit, Qi și-a păstrat influența culturală în noul imperiu. Qin Shi Huang, recunoscând reputația academiei Jixia din Qi ca centru de învățământ, a transferat mulți savanți la curtea sa imperială. Ironic, unii dintre acești intelectuali au dezvoltat ulterior critici filosofice ale regimului Qin care au contribuit la căderea dinastiei după moartea primului împărat.`,

  `**Qin unifică China:**
  Până în 221 î.Hr., Qin cucerise toate statele combatante, stabilind primul imperiu chinez unificat după secole de fragmentare și conflict. Această realizare monumentală, fără precedent în istoria Chinei, a fost rezultatul a zeci de ani de planificare strategică, reforme militare și administrative progresive, și leadership excepțional.
  
  **Ceremonia de Unificare:** După cucerirea finală a Qi, Qin Shi Huang a organizat o ceremonie elaborată de proclamare a unificării la Xianyang, noua capitală imperială. Toți regii învinși au fost aduși în lanțuri pentru a se prosterna în fața tronului său. Titlul tradițional de "wang" (rege) a fost considerat insuficient pentru conducătorul unui teritoriu atât de vast, așa că Qin Shi Huang a adoptat noul titlu de "huangdi" (împărat), combinând termenii pentru "strălucitor" și "divin" pentru a sugera natura sa semi-divină.
  
  **Reformele Post-Unificare:** Dinastia Qin, sub conducerea lui Qin Shi Huang, a implementat reforme semnificative pentru a centraliza puterea și a preveni fragmentarea viitoare. Aceste reforme au fost concepute de cancelarul Li Si, un discipol al filosofiei legaliste.
  
  **Standardizarea:** Una dintre cele mai durabile moșteniri ale dinastiei Qin a fost standardizarea. Aceasta a inclus:
  - Scriere: Sistemul "Small Seal" (小篆) a devenit unicul sistem de scriere oficiala, eliminând variațiile regionale.
  - Monede: Au fost introduse monede rotunde cu gaură pătrată în mijloc, stabilind modelul pentru următoarele două milenii.
  - Măsuri: Unitățile de lungime, volum și greutate au fost standardizate în întreg imperiul.
  - Osii ale carelor: Lățimea standard a permis crearea unui sistem de drumuri uniform.
  - Coduri legale: Legile uniforme au înlocuit sistemele juridice regionale.

  **Reorganizarea Administrativă:** Imperiul a fost împărțit în 36 de comanderii (郡), fiecare subdivizată în județe (县). Acest sistem a înlocuit vechile teritorii feudale și a rămas baza administrației chineze până în epoca modernă. Oficialii erau numiți direct de guvernul central pe baza meritului teoretic, nu a nașterii nobile, deși în practică existau încă preferințe pentru cei din statul Qin original.
  
  **Infrastructura Imperială:** Qin Shi Huang a inițiat proiecte de infrastructură masive pentru a consolida unificarea:
  - Drumuri Imperiale: O rețea de drumuri a fost construită radiind din capitală, cu o lungime totală de peste 6,800 km.
  - Marele Canal: Canalele existente au fost conectate și extinse pentru transport și irigații.
  - Marele Zid: Fortificațiile nordice existente au fost conectate în primul Mare Zid, protejând imperiul de raidurile Xiongnu.
  - Palatul Epang: Un complex palatin enorm proiectat să găzduiască nobili din toate fostele state pentru a-i ține sub supraveghere.
  
  **Generalii Legendari ai Unificării:** Succesul militar al Qin s-a datorat în mare parte unor comandanți excepționali:
  - Wang Jian: Cel mai venerabil general, specializat în strategii de înșelare și uzură, arhitectul victoriilor împotriva Han și Chu.
  - Wang Ben: Fiul lui Wang Jian, cunoscut pentru tacticile agresive și adaptabilitatea în teren, cuceritorul statelor Zhao, Yan și Qi.
  - Li Xin: Generalul tânăr și arogant care a suferit cea mai mare înfrângere a Qin la Chu, fiind înlocuit de Wang Jian. A fost ulterior reabilitat și a devenit unul dintre generalii de frunte ai unificării.
  - Meng Ao: Generalul care a criticat decizia lui Wang Jian de a inunda Daliang, dar a fost ignorat. A fost executat ulterior pentru trădare, dar a fost reabilitat postum de Qin Shi Huang. `];

// Text pentru slide-ul introductiv despre viața timpurie a lui Qin Shi Huang
const introText = `
# Viața Timpurie a lui Qin Shi Huang

**Naștere și Origine (259 î.Hr.)**
Născut sub numele de Ying Zheng în statul Qin, viitorul prim împărat al Chinei a avut o copilărie marcată de intrigi politice. Tatăl său, regele Zhuangxiang, a fost inițial un ostatic în statul Zhao, unde s-a îndrăgostit de o fostă dansatoare și concubină pe nume Zhao Ji, care avea să devină mama lui Ying Zheng.

**Copilărie și Educație**
Crescut într-o perioadă de conflicte intense între statele chineze, tânărul prinț a primit o educație riguroasă în artele războiului, strategia militară și gândirea politică legalistă de la mentori precum Lu Buwei și Li Si. Aceștia l-au învățat că puterea unui stat depinde de autoritatea centralizată și de legile stricte, principii care aveau să definească domnia sa viitoare.

**Urcarea pe Tron (246 î.Hr.)**
La doar 13 ani, după moartea tatălui său, Ying Zheng a devenit rege al statului Qin. Deoarece era prea tânăr pentru a guverna singur, mama sa și cancelarul Lu Buwei au acționat ca regenți. Această perioadă a fost marcată de intrigi de curte și lupte pentru influență.

**Preluarea Puterii (238 î.Hr.)**
La vârsta de 22 de ani, Ying Zheng a organizat o lovitură de stat împotriva facțiunii lui Lu Buwei și a consilierilor corupți, preluând controlul complet asupra statului Qin. El a implementat imediat politici legaliste și a început să pregătească terenul pentru unificarea Chinei prin eliminarea rivalilor și consolidarea puterii militare.

**Viziune și Ambiție**
Încă din tinerețe, Ying Zheng a arătat o ambiție extraordinară și o viziune clară pentru unificarea tuturor statelor chineze sub conducerea sa. Metodele sale erau adesea necruțătoare, dar eficiente, punând bazele pentru transformarea Chinei într-un imperiu centralizat.
`;


const getBackgroundImage = (index) => {
  if (index % 2 === 0) return qinph; 
  return ref2; 
};

const formatMarkdown = (text) => {
  return text
    .replace(/^# (.*$)/gm, '<h1>$1</h1>') 
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
    .replace(/\n\n/g, '</p><p>') 
    .replace(/^[^<].*$/gm, '<p>$&</p>') 
    .replace(/<p><\/p>/g, '');
};

const Prez = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const introContentRef = React.useRef(null);
  const textContentRef = React.useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      if (!hasAnimated) {
        setShowIntro(true);
        setHasAnimated(true);
      }
    }, 800); 

    return () => clearTimeout(initialTimer);
  }, [hasAnimated]);


  const handleNext = () => {
    if (isAnimating || currentIndex >= images.length - 1) return;
    
    setIsAnimating(true);
    setNextIndex(currentIndex + 1);
    setFade(true);
    setTimeout(() => {

      if (showIntro && introContentRef.current) {
        introContentRef.current.scrollTop = 0;
      }
 
      if (textContentRef.current) {
        textContentRef.current.scrollTop = 0;
      }

      setCurrentIndex(currentIndex + 1);
      setFade(false);
      setTimeout(() => {
        setIsAnimating(false);}, 100);
    }, 1000); 
  };

  const handleRevert = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setNextIndex(0);
    setFade(true);

    setTimeout(() => {

      if (showIntro && introContentRef.current) {
        introContentRef.current.scrollTop = 0;
      }
      

      if (textContentRef.current) {
        textContentRef.current.scrollTop = 0;
      }
      

      setCurrentIndex(0);
      setFade(false);
      

      setTimeout(() => {
        setIsAnimating(false);
      }, 100);
    }, 1000); 
  };


  const handleUndo = () => {
    if (isAnimating || currentIndex <= 0) return;
    
    setIsAnimating(true);
    setNextIndex(currentIndex - 1);
    setFade(true);
    setTimeout(() => {

      if (showIntro && introContentRef.current) {
        introContentRef.current.scrollTop = 0;
      }
      

      if (textContentRef.current) {
        textContentRef.current.scrollTop = 0;
      }
      

      setCurrentIndex(currentIndex - 1);
      setFade(false);
      

      setTimeout(() => {
        setIsAnimating(false);
      }, 100);
    }, 1000);
  };


  const toggleIntro = () => {
    setShowIntro(!showIntro);
    
    if (!showIntro) {
      setTimeout(() => {
        if (introContentRef.current) {
          introContentRef.current.scrollTop = 0;
        }
      }, 100);
    }
  };


  const buttonStyle = `
    px-5 py-3
    bg-[rgb(200,193,174)] text-[rgb(71,88,76)] 
    border-3 border-[rgb(71,88,76)] rounded-lg
    transition-all duration-300 ease-in-out
    hover:bg-[rgb(71,88,76)] hover:text-[rgb(200,193,174)]
    hover:-translate-y-1 hover:shadow-xl
    text-lg font-medium
  `;

  return (
    <div className="flex flex-col relative" style={{ height: 'calc(100vh - 80px)', backgroundColor: 'rgb(233, 226, 207)' }}>

      <CloudBG />

      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-700 ease-in-out z-40 ${showIntro ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}
      ></div>
      

      <div 
        className={`fixed left-1/2 transform -translate-x-1/2 bottom-0 w-full h-[85%] transition-all duration-700 ease-in-out z-50 ${showIntro ? 'translate-y-0' : 'translate-y-full shadow-none'}`}
      >

        <div className="w-full h-96 relative overflow-hidden">
          <img 
            src={ovr} 
            alt="Qin Shi Huang" 
            className="w-full h-full object-cover"
          />
        </div>

        <div 
          ref={introContentRef}
          className="bg-[rgb(200,193,174)] p-8 pb-16 overflow-hidden h-[calc(100%-24rem)] relative"
        >

          <div className="absolute top-4 right-4 flex items-center justify-center">
            <button 
              className="bg-[rgb(71,88,76)] text-[rgb(233,226,207)] rounded-full w-14 h-14 flex items-center justify-center text-3xl transform-none"
              onClick={toggleIntro}
              aria-label="Închide informațiile despre tinerețea lui Qin Shi Huang"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <span style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)',
                lineHeight: '1'
              }}>×</span>
            </button>
          </div>
          
          <div className="max-w-5xl mx-auto font-serif text-[rgb(71,88,76)]">

            <div 
              className="prose max-w-none prose-headings:text-[rgb(71,88,76)] prose-headings:text-3xl prose-strong:text-[rgb(71,88,76)] prose-strong:font-bold prose-strong:text-2xl prose-strong:block prose-strong:mt-6 prose-strong:mb-2 prose-p:text-xl"
              dangerouslySetInnerHTML={{ __html: formatMarkdown(introText) }}
            />
          </div>
        </div>
      </div>
      
      
      {!showIntro && (
        <button 
          className={`fixed bottom-5 right-5 ${buttonStyle} z-40`}
          onClick={toggleIntro}
        >
          Viața lui Qin Shi Huang
        </button>
      )}
      
      <div className="pl-24 flex flex-1 w-full relative" style={{ zIndex: 2 }}>

        <div className="flex-shrink-0 w-[calc(50%-25px)] flex items-center justify-center relative p-12">
          <div 
            className="w-[617px] h-[300px] flex items-center justify-center cursor-pointer" 
            onClick={() => currentIndex < images.length - 1 && !isAnimating && handleNext()}
          >
           
            <img
              src={images[currentIndex]}
              alt={`Qin ${currentIndex}`}
              className="max-w-full max-h-full object-contain absolute"
              style={{ zIndex: 10 }}
            />
            
            <img
              src={images[nextIndex]}
              alt={`Qin ${nextIndex}`}
              className={`max-w-full max-h-full object-contain absolute transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}
              style={{ zIndex: 11 }}
            />
          </div>
        </div>
        
        {/* A doua coloană - textele prezentării */}
        <div className="flex-shrink-0 w-[calc(50%+25px)] flex flex-col items-center justify-center">
          {/* Container pentru textul prezentării cu efect de fade */}
          <div 
            ref={textContentRef}
            className={`relative py-8 px-8 transition-opacity duration-1000 overflow-y-auto overflow-x-hidden scrollbar-hide ${fade ? 'opacity-0' : 'opacity-100'}`} 
            style={{ 
              backgroundColor: 'rgb(200, 193, 174)', 
              color: 'rgb(71, 88, 76)', 
              boxShadow: '0 6px 24px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1)', 
              borderRadius: '8px', 
              border: '4px solid rgb(71, 88, 76)', 
              height: '650px', 
              width: '550px', 
              position: 'relative'
            }}
          >

            <div 
              className="w-full h-[300px] overflow-hidden absolute top-0 left-0 cursor-pointer"
              onClick={() => currentIndex < images.length - 1 && !isAnimating && handleNext()}
            >
              <img
                src={getBackgroundImage(currentIndex)}
                alt="Background"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="relative font-serif text-lg whitespace-pre-line mt-[300px] z-10"
                 dangerouslySetInnerHTML={{ __html: formatMarkdown(texts[currentIndex]) }}>
            </div>
          </div>   



          <div className="flex justify-center space-x-4 mt-4">
            {currentIndex > 0 && (
              <button 
                onClick={handleUndo} 
                className={`${buttonStyle} ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`} 
                disabled={isAnimating}
              >
                &#8592; Înapoi
              </button>
            )}
            <button 
              onClick={handleRevert} 
              className={`${buttonStyle} ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`} 
              disabled={isAnimating}
            >
              Resetare
            </button>
            {currentIndex < images.length - 1 && (
              <button 
                onClick={handleNext} 
                className={`${buttonStyle} ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`} 
                disabled={isAnimating}
              >
                Înainte &#8594;
              </button>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          width: 8px;
        }
        
        .scrollbar-hide::-webkit-scrollbar-track {
          background: rgba(71, 88, 76, 0.1);
          border-radius: 4px;
        }
        
        .scrollbar-hide::-webkit-scrollbar-thumb {
          background-color: rgba(71, 88, 76, 0.5);
          border-radius: 4px;
        }
        
        .scrollbar-hide::-webkit-scrollbar-thumb:hover {
          background-color: rgba(71, 88, 76, 0.7);
        }
      `}</style>
    </div>
  );
};

export default Prez;