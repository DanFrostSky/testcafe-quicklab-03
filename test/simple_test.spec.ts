import { Selector } from 'testcafe';

fixture `Simple Test`
    .page `../src/simple_page.html`;

    test(`Test 1`, async t => {
        const msg = Selector('#message');
        await t 
            .typeText(msg, `Hello from Testcafe!`)
            .expect(msg.value).contains("Hello", "input containts text  hello")
            .click(`#submit-button`)
            .expect(msg.value).eql('', 'input is empty')
     });
