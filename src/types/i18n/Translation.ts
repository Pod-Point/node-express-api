import Language from './Language';

type Translation = {
    [Value in Language]?: string;
};

export default Translation;
