const { I } = inject();

const locators = {
    input: {
        title: '[placeholder="Article Title"]',
        description: '[placeholder="What\'s this article about?"]',
        body: '[placeholder="Write your article (in markdown)"]',
        tags: '[placeholder="Enter tags"]'
    }
}

export = {
    visit (slug?: string) {
        const url = this.slug ? '/editor/' + slug : '/editor';
        I.amOnPage(url);
    },

    fillTitle (title: string) {
        console.log(locators.input.title, title)
        I.fillField(locators.input.title, title);
    },

    fillDescription (description: string) {
        I.fillField(locators.input.description, description);
    },

    fillBody (body: string) {
        I.fillField(locators.input.body, body);
    },

    fillTags (tags: string) {
        I.fillField(locators.input.tags, tags);
    },

    getTitle() {
        return I.grabValueFrom(locators.input.title);
    },

    getDescription() {
        return I.grabValueFrom(locators.input.description);
    },

    getBody() {
        return I.grabValueFrom(locators.input.body);
    },

    getTags() {
        return I.grabValueFrom(locators.input.tags);
    },

    publish () {
        I.click('Publish Article', 'button');
        I.dontSeeInCurrentUrl('/editor');
        I.seeInCurrentUrl('/article/')
    }
}