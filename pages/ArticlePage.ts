const { I } = inject();

export = {
    visit (slug: string) {
        I.amOnPage(`/article/${slug}`);
    },
    getTitle() {
        return I.grabValueFrom('h1');
    },
    getContent () {
        return I.grabTextFrom('.article-content p');
    }
}