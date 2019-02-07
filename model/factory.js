import Article from './article';
import Word from './word';
import User from './user';
import WordCategory from './wordCategory';

const models = {
    article: Article,
    word: Word,
    user: User,
    wordCategory: WordCategory
};

/**
 * build api entity object
 * @param {*} axios 
 * @param {*} modelName 
 * @param {*} isDev 
 */
export default function build(axios, modelName, isDev) {
    if(modelName in models) {
        return new models[modelName](axios, isDev);
    }
    return undefined;
}