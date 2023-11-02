describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.wait(1000);
        randomEvent(20);
    })
})

function randomEvent(numEvents) {
    let events = ['link', 'input', 'select', 'button'];
    let generateRandomEvent = () => events[Math.floor(Math.random() * events.length)];
    let getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var numEvents = numEvents;
    if(numEvents > 0) {
        switch (generateRandomEvent()) {
            case 'link':
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
            case 'select':
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