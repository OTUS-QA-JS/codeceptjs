import { faker } from '@faker-js/faker';

Feature('Редактор');

Before(({ loginPage, config }) => {
    loginPage.login(config.credentials.user)
})

Scenario('Создание нового поста',  ({ I, editorPage }) => {
    editorPage.visit()
    const title = `Test article ${faker.string.nanoid()}`
    editorPage.fillTitle(title)
    editorPage.fillDescription('Description')
    editorPage.fillBody('Body')
    editorPage.fillTags('Tag1, Tag2')
    editorPage.publish()
    I.see(title, 'h1');
})