describe('angularjs homepage todo list', function () {
    it('should add a todo', function () {
        browser.get('http://localhost:9000');

        expect(browser.getTitle()).toEqual('http://localhost:9000/#/');



        //element(by.model('username')).sendKeys('Shivam');

        //element(by.model('todoList.todoText')).sendKeys('write first protractor test');
        //element(by.css('[value="add"]')).click();

        //var todoList = element.all(by.repeater('todo in todoList.todos'));
        //expect(todoList.count()).toEqual(3);
        //expect(todoList.get(2).getText()).toEqual('write first protractor test');

        // You wrote your first test, cross it off the list
        //todoList.get(2).element(by.css('input')).click();
        //var completedAmount = element.all(by.css('.done-true'));
        //expect(completedAmount.count()).toEqual(2);
    });

    describe('angularjs about page', function () {
        it('should add a todo', function () {
            browser.get('http://localhost:9000/#/about');

            expect(browser.getTitle()).toEqual('http://localhost:9000/#/1about');


            //element(by.model('username')).sendKeys('Shivam');

            //element(by.model('todoList.todoText')).sendKeys('write first protractor test');
            //element(by.css('[value="add"]')).click();

            //var todoList = element.all(by.repeater('todo in todoList.todos'));
            //expect(todoList.count()).toEqual(3);
            //expect(todoList.get(2).getText()).toEqual('write first protractor test');

            // You wrote your first test, cross it off the list
            //todoList.get(2).element(by.css('input')).click();
            //var completedAmount = element.all(by.css('.done-true'));
            //expect(completedAmount.count()).toEqual(2);
        });
    });
});
