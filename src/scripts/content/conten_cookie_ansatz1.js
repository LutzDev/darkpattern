window.onload = () => {
    let rules= {
        "allowAll": [
            "zustimmen und weiter",
            "zustimmen und fortfahren",
            "zustimmen",
            "ich stimme zu",
            "i agree",
            "geht klar",
            "i accept",
            "einverstanden",
            "alle zulassen",
            "alle akzeptieren",
            "alles akzeptieren",
            "alle annehmen",
            "alle aktivieren",
            "akzeptieren und weiter",
            "akzeptieren & weiter",
            "akzeptieren und schließen",
            "akzeptieren & schließen",
            "akzeptieren und forfahren",
            "akzeptieren & forfahren",
            "agree",
            "accept",
            "akzeptieren",
            "alle akzeptieren und website besuchen"
        ],
        "allowSelection": [
            "speichern",
            "nur auswahl bestätigen",
            "nur auswahl akzeptieren",
            "auswahl akzeptieren",
            "auswahl bestätigen",
            "einstellungen speichern & schließen"
        ],
        "declineAll": [
            "disagree",
            "don't allow",
            "dont allow",
            "ablehnen",
            "cookie ablehnen",
            "alle ablehnen",
            "alles ablehnen",
            "nicht aktivieren",
            "alle ablehnen",
            "alle zurücksetzen",
        ],
        "setting": [
            "einstellungen",
            "einstellungen ändern",
            "einstellungen anpassen",
            "zwecke anzeigen",
            "setting",
            "personalisieren",
            "optionen",
            "more options",
            "manage your choices",
            "konfigurieren",
            "jetzt abonnieren",
            "einstellungen zu cookies anzeigen",
            "einstellungen verwalten",
            "einstellungen bearbeiten",
            "einstellungen oder ablehnen",
            "dateneinstellungen verwalten",
            "cookie verwalten",
            "cookie-einstellungen anpassen",
            "cookie-einstellungen",
            "cookie-einstellungen ändern",
            "weitere optionen",
            "auswahlmöglichkeiten anpassen"
        ]
    }

    let textSnippets = [...document.getElementsByTagName("*")];
    cookieDetection(textSnippets, rules);
}

const cookieDetection = (textSnippets, rules) =>{
    for(let ruleCategory of Object.keys(rules)){
        for(let rule of rules[`${ruleCategory}`]){
            textSnippets.filter(elements  => String(elements.innerText).toLowerCase() == `${rule}`).forEach(elements => cookieManipulation(elements, ruleCategory));
        }
    }
}
const cookieManipulation = (item, ruleCategory) =>{
    if (ruleCategory === "declineAll" || ruleCategory === "allowSelection" || ruleCategory === "setting"){
        item.classList.add("dp__manipulation-show");
    }else if(ruleCategory === "allowAll"){
        item.classList.add("dp__manipulation-hide");
    }
}