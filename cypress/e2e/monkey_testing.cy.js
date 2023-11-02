// Método inicializador del monkey tests sobre el sitio web LosEstudiantes
describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.wait(1000);

        // Invocación del método recursivo randomEvent estableciendo 20 eventos
        randomEvent(20);
    })
})

// Método recursivo randomEvent que recibe como parámetro el número de eventos
function randomEvent(numEvents) {

    // Definición de los cuatro tipos de eventos definidos y selección random del evento
    let events = ['link', 'input', 'combo', 'button'];
    let generateRandomEvent = () => events[Math.floor(Math.random() * events.length)];
    let getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // Identificación del evento random y ejecución del monkey sobre el evento determinado aleatoreamente
    // Una vez se ejecuta el evento se reduce la cantidad de eventos y se realiza un llamado recursivo hasta que no quede ninguno
    var numEvents = numEvents;
    if(numEvents > 0) {
        switch (generateRandomEvent()) {
            case 'a':
                cy.get("body").then($body => {
                    if ($body.find('a').length > 0) {
                        cy.get('a').then($links => {
                            var randomLink = $links.get(getRandomInt(0, $links.length));
                            if(!Cypress.dom.isHidden(randomLink)) {
                                cy.wrap(randomLink).click({force: true});
                            }
                            cy.wait(1000);
                        });
                    }
                });
                break;
            case 'input':
                cy.get("body").then($body => {
                    if ($body.find('input').length > 0) {
                        cy.get('input').then($inputs => {
                            var randomInput = $inputs.get(getRandomInt(0, $inputs.length));
                            if(!Cypress.dom.isHidden(randomInput)) {
                                cy.wrap(randomInput).type('Monkey is typing...',{force: true});
                            }
                            cy.wait(1000);
                        });
                    }
                });
                break;
            case 'combo':
                cy.get("body").then($body => {
                    if ($body.find('select').length > 0) {
                        cy.get('select').then($selects => {
                            var randomSelect = $selects.get(getRandomInt(0, $selects.length));
                            var randomOption = randomSelect.options[getRandomInt(0, randomSelect.options.length)];
                            if(!Cypress.dom.isHidden(randomOption)) {
                                cy.wrap(randomOption).select(option.value, {force: true});
                            }
                            cy.wait(1000);
                        });
                    }
                });
                break;
            case 'button':
                cy.get("body").then($body => {
                    if ($body.find('button').length > 0) {
                        cy.get('button').then($buttons => {
                            var randomButton = $buttons.get(getRandomInt(0, $buttons.length));
                            if(!Cypress.dom.isHidden(randomButton)) {
                                cy.wrap(randomButton).click({force: true});
                            }
                            cy.wait(1000);
                        });
                    }
                });
                break;
        }
        numEvents = numEvents - 1;
        randomEvent(numEvents);
    }
}