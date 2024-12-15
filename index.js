console.log('Hello!');

// NOVÝ KÓD:

document.addEventListener('DOMContentLoaded', () => {
  // Texty s HTML strukturou pro každé textové pole
  const texts = {
    hasicak: `
      <h2>Chybějící hasicí přístroje</h2>
      <h3>❗HZS (hasičský záchranný sbor) ukládá pokutu❗</h3>
      <span class="sejmuti">Sejmi slumlorda!</span>
      <p><strong>Propadlé revize u hasicích přístrojů, jejich absence, zamčené únikové východy</strong></p>

      <p style="padding-left: 1.5em">
      Řeší Hasičský záchranný sbor, vyhláška č. 246/2001 Sb. <em>o požární prevenci</em>.
      </p>

      <p style="padding-left: 1.5em">
      Za neplnění základních povinností fyzických osob vyplývajících z předpisů o požární ochraně může HZS uložit fyzickým osobám za spáchaný přestupek pokutu až do výše <strong>25&nbsp;000&nbsp;Kč</strong>. Pokuty pro právnické osoby jsou řádově vyšší.
      </p>

      <span class="sejmuti-hlaska">Slumlord dostane plnou palbu ve výši <strong>25&nbsp;000&nbsp;Kč. 💸</strong></span>
    `,
    okno: `
      <h2>Chybějící okno</h2>
      <h3>❗ÚP zastaví dávky❗</h3>
      <span class="sejmuti">Sejmi slumlorda!</span>
      <p>Zákon č. 111/2006 Sb. O pomoci v hmotné nouzi</p>
      <p>§ 33a</p>
      <p>Byt, jiný než obytný prostor a ubytovací zařízení</p>
      <p><strong>(1)</strong> Bytem se pro účely tohoto zákona rozumí soubor místností nebo samostatná obytná místnost, které svým stavebně technickým uspořádáním a vybavením splňují požadavky na trvalé bydlení a jsou k tomuto účelu užívání určeny podle stavebního zákona nebo jsou zkolaudovány jako byt.</p>

      <span class="sejmuti-hlaska">Slumlord bude chudší o <strong>20&nbsp;000&nbsp;Kč</strong> měsíčně za ušlý nájem. 💸</span>
    `,
    mysi: `
      <h2>Krysy/štěnice</h2>
      <h3>❗Krajská hygienická stanice nařídí DDD❗</h3>
      <span class="sejmuti">Sejmi slumlorda!</span>
      <p>Zákon o ochraně veřejného zdraví č. 258/2000 Sb.</p>
      <p>§ 88</p>
      <p>KHS má v kompetenci</p>
      <p><strong>l)</strong> rozhodovat o opatřeních k předcházení vzniku a šíření infekčních onemocnění a jejich ukončení; organizovat, řídit a popřípadě i provádět opatření k předcházení vzniku a zamezení šíření infekčních onemocnění a v tomto rozsahu též usměrňovat činnost poskytovatelů zdravotních služeb a kontrolovat. </p>

      <p>Pokud hrozí šíření nákazy, zvýšený výskyt přenašečů infekčních onemocnění a škodlivých nebo epidemiologicky významných členovců, hlodavců a dalších živočichů a ke zjištění ohniska nákazy, k nařízení, provedení a kontrole protiepidemických opatření <strong>mohou zaměstnanci orgánu ochrany veřejného zdraví v mimořádných případech hodných zvláštního zřetele vstupovat do obydlí fyzických osob</strong>.</p>

      <span class="sejmuti-hlaska">Protože má slumlord zamořený celý dům, bude ho to stát <strong>25&nbsp;000&nbsp;Kč</strong>. 💸</span>
    `,
    neporadek: `
      <h2>Nepořádek na pozemku</h2>
      <h3>❗Přestupek za narušení vzhledu obce -> obecní úřad❗</h3>
      <span class="sejmuti">Sejmi slumlorda!</span>
      <p>Zákon  o  obcích (č. 128/2000 Sb.)</p>
      <p>§ 66d</p>

      <p><strong>(1)</strong> Fyzická osoba se dopustí přestupku tím, že</p>

      <p style="padding-left: 1.5em">
      <strong>a)</strong> úmyslně poškodí, odstraní nebo zakryje tabulku s označením ulice nebo jiného veřejného prostranství,</p>

      <p style="padding-left: 1.5em">
      <strong>b)</strong> neudržuje čistotu a pořádek na pozemku, který užívá nebo vlastní, a tím naruší vzhled obce, nebo</p>

      <p style="padding-left: 1.5em">
      <strong>c)</strong> naruší životní prostředí v obci nebo odloží věc mimo vyhrazené místo.</p>

      <p><strong>(4)</strong> Za přestupek podle odstavce 1 písm. b) nebo c) nebo odstavce 2 písm. b) nebo c) lze uložit pokutu do <strong>500&nbsp;000&nbsp;Kč</strong> a za přestupek podle odstavce 1 písm. a), odstavce 2 písm. a) nebo odstavce 3 pokutu do <strong>200&nbsp;000&nbsp;Kč</strong>.</p>

      <p><strong>(5)</strong> Přestupky podle odstavců 1 až 3 projednává <strong>obecní úřad</strong>.</p>

      <span class="sejmuti-hlaska">Slumlord dostane pokutu ve výši <strong>20&nbsp;000&nbsp;Kč. 💸</strong></span>
    `,
    balkon1: `
      <h2>Padající střešní krytina, zdivo, balkóny</h2>
      <h3>❗stavební úřad: nařízení zabezpečovacích prací❗</h3>
      <p>Zákon č. 283/2021 Sb. Stavební zákon</p>
      <p>§ 295</p>
      <p>Opatření k nápravě</p>
      <p>
        <strong>(1)</strong> Je-li to nezbytné k ochraně zákonem chráněného
        veřejného zájmu, stavební úřad může i bez provedené kontroly nařídit
        opatření k nápravě, které spočívá v povinnosti
      </p>
      <p style="padding-left: 1.5em">
        <strong>a)</strong> provést udržovací práce, zejména v případě
        nedostatečné údržby stavby,
      </p>
      <p style="padding-left: 1.5em">
        <strong>b)</strong> provést nezbytné úpravy stavby, zejména
      </p>
      <p style="padding-left: 3em">
        <strong> 1.</strong> při výskytu hygienických, bezpečnostních,
        požárních, provozních nebo jiných závad, včetně nesplnění požadavků na
        přístupnost,
      </p>

      <p style="padding-left: 3em">
        <strong> 2. </strong>v případě, že stavba nebo její užívání ohrožuje
        životní prostředí,
      </p>
      <p style="padding-left: 3em">
        <strong>3. </strong>pro ochranu kulturně historických, archeologických,
        architektonických a urbanistických hodnot,
      </p>
      <p style="padding-left: 3em">
        <strong> 4.</strong> v zájmu bezpečnosti a plynulosti provozu na
        pozemních komunikacích,
      </p>
      <p style="padding-left: 3em">
        <strong>5.</strong> za účelem vyhovění požadavkům obrany a bezpečnosti
        státu uplatněným Ministerstvem obrany nebo Ministerstvem vnitra,
      </p>
      <p style="padding-left: 3em">
        <strong>6.</strong> pro připojení stavby na technickou infrastrukturu,
        nebo vybavení sociálním nebo jiným hygienickým zařízením,
      </p>
      <p style="padding-left: 3em">
        <strong>7.</strong> pro zajištění účinného odvádění a zneškodňování
        odpadních vod v souladu s právními předpisy, k usnadnění průtoku
        přívalových vod, k zamezení vnikání povrchových vod do staveb a na
        přilehlé pozemky,
      </p>
      <p style="padding-left: 3em">
        <strong> 8.</strong> zakonzervování rozestavěné stavby, jejíž provádění
        bylo přerušeno,
      </p>
      <p style="padding-left: 1.5em">
        <strong>c)</strong> provést nutné zabezpečovací práce, zejména v
        případě, že jsou záměrem ohroženy životy nebo zdraví osob nebo zvířat,
      </p>
      <p style="padding-left: 1.5em">
        <strong> d)</strong> neodkladně odstranit záměr, zejména v případě, že
        jsou záměrem ohroženy životy nebo zdraví osob nebo zvířat, a záměr hrozí
        zřícením nebo sesuvem nebo
      </p>
      <p style="padding-left: 1.5em">
        <strong>e) </strong>vyklidit stavbu v případě, že jsou závadami na
        stavbě ohroženy životy nebo zdraví osob nebo zvířat, anebo má být
        nařízeno opatření k nápravě podle písmene c) nebo d).
      </p>

    `,
    balkon2: `
      <h2>Padající střešní krytina, zdivo, balkóny</h2>
      <h3>❗majitel brání provedení kontroly -> stavební úřad❗</h3>
      <span class="sejmuti">Sejmi slumlorda!</span>
      <p>
        Stavebí úřad může rozhodnutím uložit pořádkovou pokutu do
        <strong>50&nbsp;000&nbsp;Kč</strong>
        tomu, kdo závažným způsobem ztěžuje postup v řízení nebo provedení
        kontrolní prohlídky tím, že:
      </p>
      <p style="padding-left: 1.5em">
        a) znemožňuje oprávněné úřední osobě nebo osobě jí přizvané vstup na
        svůj pozemek nebo stavbu,
      </p>
      <p style="padding-left: 1.5em">
        b) na výzvu stavebního úřadu se nezúčastní kontrolní prohlídky, ač je k
        tomu podle tohoto zákona povinen.
      </p>
     <span class="sejmuti-hlaska">Slumlord dostane pořádkovou pokutu ve výši <strong>50&nbsp;000&nbsp;Kč. 💸</strong></span>
    `,
    balkon3: `
      <h2>Padající střešní krytina, zdivo, balkóny</h2>
      <h3>❗majitel neprovedl zabezpečovací práce -> stavební úřad❗</h3>
      <span class="sejmuti">Sejmi slumlorda!</span>
      <p>§ 301</p>
      <p>
        Pokud stavebník (majitel) neprovede nařízené nutné zabezpečovací práce
        nebo je provede v rozporu s rozhodnutím, hrozí mu pokuta až do
        <strong>1&nbsp;000&nbsp;000&nbsp;Kč.</strong>
      </p>
       <span class="sejmuti-hlaska">Slumlord dostane pokutu ve výši <strong>200&nbsp;000&nbsp;Kč. 💸</strong></span>
    `,
    balkon4: `
      <h2>Padající střešní krytina, zdivo, balkóny</h2>
       <h3>
        ❗obec na své náklady provede zabezpečovací práce a po vlastníkovi je
        vymáhá❗
      </h3>
      <span class="sejmuti">Sejmi slumlorda!</span>
      <p>§ 296</p>
      <p>Provedení opatření k nápravě</p>
      <p>
        <strong>(1)</strong> Hrozí-li u provedení opatření k nápravě podle § 295 odst. 1 písm. c), d) nebo e) nebezpečí z prodlení, zajistí provedení nařízeného opatření k nápravě stavební úřad prostřednictvím osoby, která je podle jiného právního předpisu oprávněna k provedení nařízených prací; při stanovení této osoby se zákon o zadávání veřejných zakázek nepoužije. Této osobě může stavební úřad provedení opatření k nápravě nařídit rozhodnutím, které může být vydáno jako první úkon stavebního úřadu v řízení.
        </p>
       <p> <strong>(2)</strong> Náklady na provedení opatření k nápravě je povinen uhradit vlastník stavby nebo pozemku, na němž se záměr nachází. Nedošlo-li mezi osobou, prostřednictvím které stavební úřad zajišťuje provedení nařízeného opatření k nápravě, a vlastníkem k dohodě o zaplacení, stavební úřad uhradí náklady na provedení opatření k nápravě a rozhodnutím uloží vlastníkovi povinnost náklady uhradit stavebnímu úřadu.</p>
        <span class="sejmuti-hlaska">Slumlorda to tentokrát stálo <strong>1&nbsp;500&nbsp;000&nbsp;Kč. 💸</strong></span>
    `,
  };

  let currentZIndex = 10; // Začneme s vyšším z-index pro první textové pole
  let balkonClickCount = 0; // Počítadlo pro kliknutí na balkon

  // Hlavní obrázek slumlord
  const slumlordImage = document.querySelector('.slumlord');

  // Funkce pro kontrolu, zda je alespoň jedno tlačítko disabled
  function checkDisabledButtons() {
    const disabledButtons = document.querySelectorAll('.disabled');
    if (disabledButtons.length >= 5) {
      slumlordImage.src = 'slumlord-6.png';
    } else if (disabledButtons.length >= 4) {
      slumlordImage.src = 'slumlord-5.png';
    } else if (disabledButtons.length >= 3) {
      slumlordImage.src = 'slumlord-4.png'; // Změna obrázku na slumlord-4
    } else if (disabledButtons.length >= 2) {
      slumlordImage.src = 'slumlord-3.png'; // Změna obrázku na slumlord-3
    } else if (disabledButtons.length > 0) {
      slumlordImage.src = 'slumlord-2.png'; // Změna obrázku na slumlord-2
    }
  }

  // Textová pole pro obrázky, které nejsou balkon
  const items = [
    {
      imageId: 'hasicak',
      textFieldId: 'textFieldHasicak',
      textId: 'textHasicak',
    },
    { imageId: 'okno', textFieldId: 'textFieldOkno', textId: 'textOkno' },
    {
      imageId: 'mysi',
      textFieldId: 'textFieldMysi',
      textId: 'textMysi',
    },
    {
      imageId: 'neporadek',
      textFieldId: 'textFieldNeporadek',
      textId: 'textNeporadek',
    },
  ];

  // Logika pro úpravu stavu peněženky:

  const statusBox = document.getElementById('status-box');
  let totalAmount = 0;
  // Funkce pro přičítání částky s formátováním
  function updateStatus(amount) {
    totalAmount += amount; // Přičtěte částku
    const formattedAmount = totalAmount.toLocaleString('cs-CZ'); // Formátujte částku s mezerami
    statusBox.textContent = `${formattedAmount} Kč`; // Aktualizujte text v statusBox
  }

  document.querySelectorAll('.text-field').forEach(function (field) {
    field.addEventListener('click', function () {
      const textFieldId = field.id; // Získáme ID kliknutého textového pole
      console.log('Kliknutý textFieldId:', textFieldId); // Debugging pro zobrazení ID

      // Kontrola textFieldId pro odečítání částek
      if (textFieldId === 'textFieldOkno') {
        console.log('Odečítám 20 000 Kč pro textFieldOkno');
        updateStatus(-20000); // Odečtěte 20 000 Kč
      } else if (textFieldId === 'textFieldHasicak') {
        console.log('Odečítám 25 000 Kč pro textFieldHasicak');
        updateStatus(-25000); // Odečtěte 25 000 Kč
      } else if (textFieldId === 'textFieldMysi') {
        console.log('Odečítám 25 000 Kč pro textFieldMysi');
        updateStatus(-25000); // Odečtěte 25 000 Kč
      } else if (textFieldId === 'textFieldNeporadek') {
        console.log('Odečítám 20 000 Kč pro textFieldNeporadek');
        updateStatus(-20000); // Odečtěte 20 000 Kč
      } else if (textFieldId === 'textFieldBalkon2') {
        console.log('Odečítám 50 000 Kč pro textFieldBalkon2');
        updateStatus(-50000); // Odečtěte 50 000 Kč
      } else if (textFieldId === 'textFieldBalkon3') {
        console.log('Odečítám 200 000 Kč pro textFieldBalkon3');
        updateStatus(-200000); // Odečtěte 200 000 Kč
      } else if (textFieldId === 'textFieldBalkon4') {
        console.log('Odečítám 1 500 000 Kč pro textFieldBalkon4');
        updateStatus(-1500000); // Odečtěte 1 500 000 Kč
      }
    });
  });
  // -------------------

  // Přidání textového obsahu a událostí pro každý obrázek
  items.forEach(({ imageId, textFieldId, textId }) => {
    const imageElement = document.getElementById(imageId);
    const textFieldElement = document.getElementById(textFieldId);
    const closeButton = textFieldElement.querySelector('.close-button');

    // Při kliknutí na obrázek
    imageElement.addEventListener('click', () => {
      textFieldElement.classList.add('visible');
      textFieldElement.style.zIndex = currentZIndex++;
      // Dynamické vložení HTML textu
      document.getElementById(textId).innerHTML = texts[imageId];
    });

    // Při kliknutí na zavírací tlačítko skryjeme textové pole
    closeButton.addEventListener('click', () => {
      textFieldElement.classList.remove('visible');
      imageElement.style.pointerEvents = 'none';
      imageElement.classList.add('disabled'); // Přidáme třídu disabled pro efekt zašednutí

      // Zkontrolujeme, zda je alespoň jedno tlačítko disabled
      checkDisabledButtons();
    });
  });

  // Pro balkon nastavíme logiku pro čtyři kliknutí
  const balkon = document.getElementById('balkon');
  const balkonCloseButtons = document.querySelectorAll(
    '#textFieldBalkon1 .close-button, #textFieldBalkon2 .close-button, #textFieldBalkon3 .close-button, #textFieldBalkon4 .close-button',
  );

  balkon.addEventListener('click', () => {
    if (balkonClickCount < 4) {
      const currentTextField = document.getElementById(
        `textFieldBalkon${balkonClickCount + 1}`,
      );
      currentTextField.classList.add('visible');
      currentTextField.style.zIndex = currentZIndex++;
      document.getElementById(`textBalkon${balkonClickCount + 1}`).innerHTML =
        texts[`balkon${balkonClickCount + 1}`]; // Dynamické přiřazení HTML textu
      balkonClickCount++;
    }
  });

  balkonCloseButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', (e) => {
      const parent = e.target.closest('.text-field');
      parent.classList.remove('visible');

      // Pokud zavřeme čtvrté textové pole, zakážeme klikání na balkon
      if (parent.id === 'textFieldBalkon4') {
        balkon.style.pointerEvents = 'none';
        balkon.classList.add('disabled');
        // Zkontrolujeme, zda je alespoň jedno tlačítko disabled
        checkDisabledButtons();
      }
    });
  });
});

window.onload = function () {
  const infoBox = document.getElementById('infoBox');
  const startButton = document.getElementById('startButton');

  // Funkce pro zavření okna
  startButton.addEventListener('click', function () {
    infoBox.style.display = 'none'; // Skrytí okna po kliknutí na "Začít"
  });
};
